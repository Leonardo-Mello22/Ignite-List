import React from "react";
import {Icon} from "./Icon"
import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./text";

export const buttonVariants = cva(`
    flex items-center
    justify-center 
    cursor-pointer
    transition
    rounded-lg
    group
    gap-2`
, {
    variants: {
        variant: {
            primary: "bg-blue-500 hover:bg-blue-500-h"
        },
        size: {
            md: "h-14 py-4 px-5"
        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        }
    },
    defaultVariants:{
        variant: "primary",
        size: "md",
        disabled: false
    }
});

export const buttonTextVariant = cva("",{
    variants: {
        variant: {
            primary: "text-black-900"
        }
    }, 
    defaultVariants: {
        variant: "primary"
    }
})

export const buttonIconVariant = cva("transition", {
    variants: {
        variant:{
            primary: "fill-black-900"
        },
        size: {
            md: "w-5 h-5"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return <button className={buttonVariants({variant, size, disabled, className})} {...props}>
    {IconComponent && <Icon 
    svg={IconComponent}
    className={buttonIconVariant({variant, size})}/>}
        <Text variant="body-md-bold" className={buttonTextVariant({variant})}>
            {children}
        </Text>
    </button>;
}
