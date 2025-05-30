import React from "react";
import  {Text} from "./text"
import { cva, type VariantProps, cx } from "class-variance-authority";
import { Skeleton } from "./skeleton";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-metalic",
        secondary: "bg-slate-200",
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
      none: "",
      primary: "text-white",
      secondary: "text-black-900",
    }
  },
  defaultVariants: {
    variant: "primary"
  }
});

export const badgeSkeletoVariant = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    }
  },
  defaultVariants: {
    size: "sm"
  }
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
      loading?: boolean;
    }

export  function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({variant: "none"}),
          badgeSkeletoVariant({ size: "sm" }),
          className
        )}
      />
    );
  }

  return (
    <div className={cx(badgeVariants({ variant, size }), className)} {...props}>
      <Text
        variant="body-sm-bold"
        className={badgeTextVariants({ variant })}
      >
        {children}
      </Text>
    </div>
  );
}
