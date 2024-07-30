import { cn } from "@/lib/utils";
import * as React from "react";

interface HighlightProps extends React.HTMLAttributes<HTMLLabelElement> {}

const Highlight = React.forwardRef<HTMLLabelElement, HighlightProps>(
  ({ className, ...props }, ref) => {
    return (
      <label ref={ref} className={cn("font-semibold", className)} {...props} />
    );
  }
);

Highlight.displayName = "Highlight";

export { Highlight };
