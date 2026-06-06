import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const CANVAS_WIDTH_PX = 794;

export async function exportResumePdf(filename) {
  const element = document.getElementById("resume-document");
  if (!element) {
    throw new Error("Documento de currículo não encontrado.");
  }

  element.classList.add("resume-capturing");
  await document.fonts.ready;
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: CANVAS_WIDTH_PX,
      windowWidth: CANVAS_WIDTH_PX,
      onclone: (doc) => {
        const clone = doc.getElementById("resume-document");
        if (clone) {
          clone.style.opacity = "1";
          clone.style.position = "static";
          clone.style.zIndex = "auto";
          clone.style.width = `${CANVAS_WIDTH_PX}px`;
        }
      },
    });

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true });
    const pageWidth = A4_WIDTH_MM;
    const pageHeight = A4_HEIGHT_MM;
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL("image/png");

    let position = 0;
    let heightLeft = imgHeight;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
  } finally {
    element.classList.remove("resume-capturing");
  }
}
