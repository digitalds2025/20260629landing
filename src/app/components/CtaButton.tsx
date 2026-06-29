import type { ComponentProps } from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "./ui/utils";
import type { VariantProps } from "class-variance-authority";

export type CtaGlowTone = "brand" | "light" | "dark" | "cyan";

const glowToneClass: Record<CtaGlowTone, string> = {
  brand: "cta-glow-brand",
  light: "cta-glow-light",
  dark: "cta-glow-dark",
  cyan: "cta-glow-cyan",
};

type CtaButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    glowTone?: CtaGlowTone;
  };

export function CtaButton({
  glowTone = "brand",
  className,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      className={cn("cta-anim-glow", glowToneClass[glowTone], className)}
      {...props}
    />
  );
}
