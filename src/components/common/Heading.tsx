interface HeadingProps {
  level: 1 | 2 | 3;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Heading({ level, id, className = '', children }: HeadingProps) {
  const baseStyles = 'text-coolGray-900 font-bold';
  const levelStyles = {
    1: 'mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight',
    2: 'text-3xl md:text-4xl leading-relaxed mb-4 leading-relaxed tracking-wide',
    3: 'text-xl md:text-2xl leading-tight mb-4',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag id={id} className={`${baseStyles} ${levelStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
}
