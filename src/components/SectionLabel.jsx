export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-8 h-0.5 bg-primary rounded-full" />
      <span className="text-label-sm text-primary">
        {children}
      </span>
    </div>
  );
}
