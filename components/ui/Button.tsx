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

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white shadow-[0_1px_1px_rgba(13,27,42,0.1),0_10px_24px_-8px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-[0_1px_1px_rgba(13,27,42,0.1),0_16px_32px_-8px_rgba(37,99,235,0.6)] focus-visible:ring-offset-white",
  secondary:
    "border border-brand-gray-light bg-white text-brand-navy shadow-sm hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue hover:shadow-md focus-visible:ring-offset-white",
  secondaryOnDark:
    "border border-white/25 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:ring-offset-brand-navy",
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
