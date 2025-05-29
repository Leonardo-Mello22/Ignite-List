import React from "react";
import { Icon } from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(`
   inline-flex 
   items-center 
   justify-center 
   cursor-pointer 
   transition group
` , {
    variants: {
      variant: {
        primary: "bg-slate-200 hover:bg-red-500",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const buttonDoubleIconVariant = cva("transition", {
    variants: {
        variant: {
            primary: "fill-black-900 group-hover:fill-white"
        },
        size: {
            sm: "w-4 h-4"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm"
    }
})

interface ButtonIconProps
  extends VariantProps<typeof buttonIconVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}


export function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={IconComponent}  className={buttonDoubleIconVariant({variant, size})}/>
    </button>
  );
}
