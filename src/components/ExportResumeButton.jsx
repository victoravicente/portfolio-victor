import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function ExportResumeButton({ className = "btn-secondary", label, onExportStart }) {
  const { content } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const buttonLabel = label ?? content.ui.downloadCv;

  const handleExport = async () => {
    if (loading) return;
    setLoading(true);
    setError(false);
    onExportStart?.();
    try {
      const { exportResumePdf } = await import("../utils/exportResumePdf");
      await exportResumePdf(content.resume.filename);
    } catch (err) {
      console.error("Erro ao exportar currículo:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleExport}
      disabled={loading}
      aria-live="polite"
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? content.ui.generatingPdf : error ? content.ui.downloadCvRetry : buttonLabel}
    </button>
  );
}
