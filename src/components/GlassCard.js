export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass-card rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
