import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

type OpinionatedBaseButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className" | "aria-label" | "children"
>;

interface ButtonProps extends OpinionatedBaseButtonProps {
  icon?: LucideIcon;
  text: string;
  visuallyHideLabel?: boolean;
  variant?: "ghost" | "solid";
}

const Button = ({
  icon: Icon,
  text,
  visuallyHideLabel,
  onClick,
  variant = "ghost",
  ...rest
}: ButtonProps) => {
  const variantClassMap = {
    ghost: "hover:bg-zinc-700",
    solid: "bg-zinc-700 hover:bg-zinc-600",
  };
  return (
    <button
      onClick={onClick}
      aria-label={text}
      className={`flex flex-row items-center justify-center gap-2 px-2 py-1 rounded ${variantClassMap[variant]}`}
      {...rest}
    >
      {Icon && <Icon size={16} />} {!visuallyHideLabel && text}
    </button>
  );
};

export { Button };
