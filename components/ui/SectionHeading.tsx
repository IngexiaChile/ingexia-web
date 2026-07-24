import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em]",
            tone === "dark" ? "text-brass-light" : "text-brass-ink",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-surface" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-pretty text-lg leading-relaxed",
            tone === "dark" ? "text-graphite-2" : "text-graphite",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
