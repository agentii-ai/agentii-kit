import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground border-border",
        blue: "border-transparent bg-blue-500/10 text-blue-400 border-blue-500/20",
        purple: "border-transparent bg-purple-500/10 text-purple-400 border-purple-500/20",
        pink: "border-transparent bg-pink-500/10 text-pink-400 border-pink-500/20",
        amber: "border-transparent bg-amber-500/10 text-amber-400 border-amber-500/20",
        green: "border-transparent bg-green-500/10 text-green-400 border-green-500/20",
        violet: "border-transparent bg-violet-500/10 text-violet-400 border-violet-500/20",
        orange: "border-transparent bg-orange-500/10 text-orange-400 border-orange-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  );
}

export { Badge, badgeVariants };
