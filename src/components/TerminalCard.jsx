export function TerminalCard({ path, badge, icon, children, className = "" }) {
  return (
    <div className={`terminal-card ${className}`}>
      <div className="terminal-header group-hover:border-tertiary">
        <span className="font-mono text-terminal-sm text-tertiary flex items-center gap-2">
          {icon && (
            <span className="material-symbols-outlined text-base">{icon}</span>
          )}
          {path}
        </span>
        {badge && (
          <span className="font-sans text-label-caps text-on-surface-variant border border-gothic px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
