import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "secondaryOnDark";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// A single elegant microinteraction — a 2px lift + shadow bloom — gated by
// motion-safe so prefers-reduced-motion users get an instant color change
// instead. No scale, no icon bounce.
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  // Solid blue reclaims the CTA as the one thing on the page designed to
  // be noticed — it works against both the dark Hero and light sections,
  // so one variant covers every context.
  primary:
    "border border-blue bg-blue text-surface shadow-[0_10px_28px_-12px_rgba(37,84,214,0.55)] hover:bg-blue-dark hover:border-blue-dark hover:shadow-[0_16px_36px_-12px_rgba(37,84,214,0.6)] focus-visible:ring-offset-surface",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-blue hover:text-blue focus-visible:ring-offset-surface",
  secondaryOnDark:
    "border border-surface/25 bg-transparent text-surface hover:border-blue-light hover:text-blue-light focus-visible:ring-offset-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href) {
    const { href, ...rest } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
