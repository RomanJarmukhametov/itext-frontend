interface TaglineProps {
  text: string;
}

export default function Tagline({ text }: TaglineProps) {
  return (
    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-blue-500 bg-blue-100 font-medium uppercase rounded-full shadow-sm">
      {text}
    </span>
  );
}
