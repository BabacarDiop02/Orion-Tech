type SectionLabelProps = {
  index: string;
  label: string;
  light?: boolean;
};

export default function SectionLabel({ index, label, light }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className={`font-display text-xs tracking-[0.25em] ${
          light ? "text-orion-cyan" : "text-orion-blue"
        }`}
      >
        {index}
      </span>
      <span className="h-px w-10 bg-orion-muted/40" />
      <span className="text-xs tracking-[0.25em] uppercase text-orion-muted">
        {label}
      </span>
    </div>
  );
}
