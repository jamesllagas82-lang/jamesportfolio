interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3
        rounded-lg
        font-medium
        transition
        bg-pink-600
        text-white
        hover:bg-pink-700
        disabled:bg-gray-400
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}