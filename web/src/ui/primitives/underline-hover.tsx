import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const underlineHoverVariants = cva(
  "inline-flex items-center rounded px-1.5 py-0.5 text-inherit font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors duration-700 ease-in-out hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-b-2 border-black hover:bg-black hover:text-white",
        secondary:
          "border-b-2 border-secondary hover:bg-secondary hover:text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface UnderlineHoverProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof underlineHoverVariants> {}

const UnderlineHover = React.forwardRef<HTMLDivElement, UnderlineHoverProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(underlineHoverVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

UnderlineHover.displayName = "UnderlineHover";

export { UnderlineHover, underlineHoverVariants };
