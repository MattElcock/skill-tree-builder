import type { InputHTMLAttributes } from "react";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "className"
>;

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      type="text"
      className="border border-2 border-zinc-400 rounded px-2 py-1 w-full"
    />
  );
};

export { Input };
