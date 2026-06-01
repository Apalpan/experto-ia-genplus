type MetricCardProps = {
  label: string;
  value: string;
  signal: string;
  tone: string;
};

export function MetricCard({ label, value, signal, tone }: MetricCardProps) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{signal}</p>
    </article>
  );
}
