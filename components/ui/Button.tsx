import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "primaryOnDark" | "secondary" | "secondaryOnDark";
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

// Interactive states change color only — never position, scale or shadow.
// A precision instrument doesn't bounce when you touch it.
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-ink focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "border border-ink bg-ink text-surface hover:bg-ink-2 focus-visible:ring-offset-surface",
  primaryOnDark:
    "border border-surface bg-surface text-ink hover:bg-surface-2 focus-visible:ring-offset-ink",
  secondary:
    "border border-ink/20 bg-transparent text-ink hover:border-brass-ink hover:text-brass-ink focus-visible:ring-offset-surface",
  secondaryOnDark:
    "border border-surface/25 bg-transparent text-surface hover:border-brass-light hover:text-brass-light focus-visible:ring-offset-ink",
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
