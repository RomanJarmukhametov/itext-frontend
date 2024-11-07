import Image from 'next/image';
import { getStrapiMedia } from '@/lib/utils';

interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  sizes,
  priority,
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
