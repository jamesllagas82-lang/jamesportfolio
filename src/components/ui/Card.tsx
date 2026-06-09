interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        p-6
        shadow-sm
        hover:shadow-lg
        transition-all
      "
    >
      {children}
    </div>
  );
}