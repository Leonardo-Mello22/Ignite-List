import { cva, type VariantProps } from "class-variance-authority";
import CheckIcon from "../assets/icons/check.svg?react"
import { Icon } from "./Icon";
import { Skeleton } from "./skeleton";

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
    transition 
    overflow-hidden \
  `,{
    variants: {
      variant: {
        none: "",
        default:`
          border-2 
          border-solid
          border-green-500 
          hover:border-green-500-h
          hover:bg-green-500-h/20 \
          checked:border-green-500 
          checked:bg-green-500 \
          group-hover:checked:border-green-500-h
          group-hover:checked:bg-green-500-h`
      },
      size: {
        md: "w-5 h-5 rounded-sm"
      },
      disabled: {
        true: "pointer-events-none"
      }
    },
    defaultVariants: {
        variant: "default",
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
  Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean;
  }

export function InputCheckbox({
    variant,
    size, 
    disabled,
    className,
    loading,
    ...props
}: InputCheckboxProps) {
  if(loading) {
    return <Skeleton 
      rounded="sm"
      className={inputCheckboxVariants({variant: "none", size})}
    />
  }
  return <label className={inputCheckboxWrapperVariants({className})}>
    <input type="checkbox" className={inputCheckboxVariants({variant, size, disabled})} {...props} />
    <Icon className={inputCheckboxIconVariants({size})} svg={CheckIcon} />
  </label>
}
