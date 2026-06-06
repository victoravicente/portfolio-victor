export function TerminalDots() {
  return (
    <div className="terminal-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export function TerminalCard({ path, badge, icon, children, className = "" }) {
  return (
    <div className={`terminal-card ${className}`}>
      <div className="terminal-header group-hover:border-tertiary">
        <div className="flex items-center gap-3 min-w-0">
          <TerminalDots />
          <span className="font-mono text-terminal-sm text-tertiary flex items-center gap-2 truncate">
            {icon && <span className="material-symbols-outlined text-base shrink-0">{icon}</span>}
            {path}
          </span>
        </div>
        {badge && (
          <span className="font-sans text-label-caps text-on-surface-variant border border-gothic px-2 py-0.5 rounded-full shrink-0">
            {badge}
          </span>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
