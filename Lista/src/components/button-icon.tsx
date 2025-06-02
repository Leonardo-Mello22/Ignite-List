import React from "react";
import { Icon } from "./Icon";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./skeleton";

export const buttonIconVariants = cva(`
   inline-flex 
   items-center 
   justify-center 
   cursor-pointer 
   transition group
` , {
    variants: {
      variant: {
        none: "",
        primary: "bg-slate-200 hover:bg-red-500",
        secondary: "bg-slate-200 hover:bg-cyan",
        tertiary: "bg-slate-200 hover:bg-green-500"
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
          none: "",
          primary: "fill-black-900 group-hover:fill-white",
          secondary: "fill-black-900 group-hover:fill-white",
          tertiary: "fill-black-900 group-hover:fill-white"
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
  loading?: boolean;
}


export function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  loading,
  ...props
}: ButtonIconProps) {
  if(loading){
    return(
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({
        variant: "none",
        size,
        className
     })}
    />
 );}
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={IconComponent}  className={buttonDoubleIconVariant({variant, size})}/>
    </button>
  );
}
