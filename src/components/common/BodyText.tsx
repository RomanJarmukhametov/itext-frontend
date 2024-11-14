import clsx from 'clsx';

interface BodyTextProps {
  text: string;
  variant?: 'large' | 'normal';
  className?: string;
}

export default function BodyText({ text, variant = 'normal', className }: BodyTextProps) {
  const baseStyles =
    variant === 'large'
      ? 'text-lg md:text-xl text-coolGray-500 font-medium'
      : 'text-coolGray-500 font-medium';

  return <p className={clsx(baseStyles, className)}>{text}</p>;
}
