'use client'
import { memo } from 'react';
import  Image from "next/image"
import { cn } from "@/lib/utils";


interface AppImageProps {
    alt?: string;
    src?: string;
    width?: number;
    height?: number;
    quality?: number;
    className?: string;
    fill?: boolean;
}

const AppImage = ({src = "", alt = "", width, height, quality, className, fill = false}: AppImageProps) => {

    console.log('-------------------- [Render AppImage]')

    return (
        <Image
            className={cn("rounded-2xl", className)}
            src={src}
            alt={alt}
            width={width ?? 100}
            height={height ?? 100}
            quality={quality ?? 10}
            fill={fill}
        />
    )
}

export default memo(AppImage)