import React from "react";
import  {Text} from "./text"
import { cva, type VariantProps } from "class-variance-authority";


export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-black-900",
        secondary: "bg-slate-200"
      },
      size: {
        sm: "py-0.5 px-2",
        md: "py-1 px-3",
        lg: "py-2 px-4"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "sm"
    }
  }
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-white",
      secondary: "text-black-900"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text
        variant="body-sm-bold"
        className={badgeTextVariants({ variant })}
      >
        {children}
      </Text>
    </div>
  );
}
