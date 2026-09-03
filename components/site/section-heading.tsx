export function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <p className="section-index">{index} / {eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}
