import Image, { StaticImageData } from "next/image";

type CustomImageType = {
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
	className?: string;
	quality?: number;
	priority?: boolean;
};

export default function CustomImage({
	src = "/images/default.svg",
	alt = "Imagen por defecto",
	width = 300,
	height = 300,
	className,
	quality = 100,
	priority = false,
}: CustomImageType) {
	return (
		<Image
			src={src}
			alt={alt}
			loading='lazy'
			height={height}
			width={width}
			className={className}
			quality={quality}
			priority={priority}
		/>
	);
}
