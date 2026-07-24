import { cn } from "@/lib/cn";
import { Isotype } from "@/components/ui/Isotype";

type LogoProps = {
  /** Controls the tagline color only — the icon and wordmark inherit
   * `currentColor` from an ancestor, so they adapt to any background on
   * their own. */
  tone?: "light" | "dark";
  layout?: "horizontal" | "stacked";
  showTagline?: boolean;
  className?: string;
  iconClassName?: string;
  wordClassName?: string;
};

export function Logo({
  tone = "light",
  layout = "horizontal",
  showTagline = false,
  className,
  iconClassName,
  wordClassName,
}: LogoProps) {
  const taglineColor = tone === "dark" ? "text-blue-light" : "text-blue-dark";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5",
        layout === "stacked" && "flex-col items-start gap-3",
        className,
      )}
    >
      <Isotype className={cn("h-8 w-auto shrink-0", iconClassName)} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-brand font-bold leading-none tracking-tight",
            wordClassName,
          )}
        >
          INGEX<span className="text-blue">IA</span>
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-1.5 text-xs font-medium leading-none",
              taglineColor,
            )}
          >
            Ingeniería para la transformación digital
          </span>
        )}
      </span>
    </span>
  );
}
