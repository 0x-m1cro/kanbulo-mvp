"use client";

import Image, { ImageProps } from "next/image";

type SoftImageProps = Omit<ImageProps, "fill"> & {
  aspect?: string;
};

export function SoftImage({
  aspect = "aspect-[4/5]",
  className,
  priority,
  alt,
  ...rest
}: SoftImageProps) {
  const container = [
    "relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50 soft-fade",
    aspect,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageClass =
    "object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,0,0.2,1)] hover:scale-[1.015]";

  return (
    <div className={container}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent)]" />
      <Image
        {...rest}
        alt={alt}
        fill
        className={imageClass}
        sizes="(min-width: 1024px) 480px, 90vw"
        priority={priority}
      />
    </div>
  );
}
