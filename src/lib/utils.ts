import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ImageProp {
  formats?: {
    large?: { name: string; url: string };
    medium?: { name: string; url: string };
    small?: { name: string; url: string };
    thumbnail?: { name: string; url: string };
  };
}

export function filteringImage(
  img: ImageProp
): { name: string; url: string } | undefined {
  if (img?.formats?.large) return img.formats.large;
  if (img?.formats?.medium) return img.formats.medium;
  if (img?.formats?.small) return img.formats.small;
  if (img?.formats?.thumbnail) return img.formats.thumbnail;
}
