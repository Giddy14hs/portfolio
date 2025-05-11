
import { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const AnimatedImage = ({ src, alt, className = "", width, height }: AnimatedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={`${className} absolute inset-0`}
          style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoading(false)}
        width={width}
        height={height}
      />
    </div>
  );
};

export default AnimatedImage;
