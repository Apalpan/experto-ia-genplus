type SectionTitleProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function SectionTitle({ eyebrow, title, summary }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
}
