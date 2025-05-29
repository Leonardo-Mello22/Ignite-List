import { cva, type VariantProps } from "class-variance-authority";
import CheckIcon from "../assets/icons/check.svg?react"
import { Icon } from "./Icon";

export const inputCheckboxWrapperVariants = cva(`
  inline-flex 
  items-center 
  justify-center 
  relative 
  group`
);

export const inputCheckboxVariants = cva(`
    appearance-none 
    peer 
    cursor-pointer 
    flex 
    items-center 
    justify-center 
    border-2 
    border-solid 
    transition 
    overflow-hidden \
    border-green-500 
    hover:border-green-900 
    hover:bg-green-900/20 \
    checked:border-green-500 
    checked:bg-green-500 \
    group-hover:checked:border-green-900 
    group-hover:checked:bg-green-900`,
  {
    variants: {
      size: {
        md: "w-5 h-5 rounded-sm"
      },
      disabled: {
        true: "pointer-events-none"
      }
    },
    defaultVariants: {
        size: "md",
        disabled: false
    }
  }
);

export const inputCheckboxIconVariants = cva(`
  absolute 
  top-1/2 
  left-1 
  -translate-y-1/2
  hidden 
  peer-checked:block
  fill-white
`,{
    variants: {
      size: {
        md: "w-3 h-3"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

interface InputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, 
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export function InputCheckbox({
    size, 
    disabled,
    className,
    ...props
}: InputCheckboxProps) {
  return <label className={inputCheckboxWrapperVariants({className})}>
    <input type="checkbox" className={inputCheckboxVariants({size, disabled})} {...props} />
    <Icon className={inputCheckboxIconVariants({size})} svg={CheckIcon} />
  </label>
}
