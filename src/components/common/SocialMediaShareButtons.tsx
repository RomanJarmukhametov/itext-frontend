import Link from 'next/link';
import { getIcon } from '@/lib/icons';

interface SocialMediaShareButtonsProps {
  postUrl: string;
  postTitle: string;
}

export default function SocialMediaShareButtons({
  postUrl,
  postTitle,
}: SocialMediaShareButtonsProps) {
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(postTitle);

  const socialMediaPlatforms = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'X',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },

    {
      name: 'Linkedin',
      url: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  return (
    <>
      {socialMediaPlatforms.map(({ name, url }) => (
        <Link
          key={name}
          className="inline-flex mr-2 h-9 w-9 items-center justify-center text-coolGray-500 hover:text-coolGray-600 bg-white hover:bg-coolGray-100 border border-coolGray-200 rounded-md shadow-md transition duration-200"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {getIcon(name)}
        </Link>
      ))}
    </>
  );
}
