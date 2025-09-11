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
}

const Button = ({
  icon: Icon,
  text,
  visuallyHideLabel,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={text}
      className="flex flex-row items-center gap-2 px-2 py-1 hover:rounded hover:bg-zinc-700"
      {...rest}
    >
      {Icon && <Icon size={16} />} {!visuallyHideLabel && text}
    </button>
  );
};

export { Button };
