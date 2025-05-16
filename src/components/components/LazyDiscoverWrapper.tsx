'use client'
import { useInView } from "react-intersection-observer";
interface LazyComponentWrapperProps {
  Component: React.ElementType;
  componentProps: object;
  className?: string;
}

export default function LazyComponentWrapper({ Component, componentProps, className }: LazyComponentWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  console.log('In view:', inView);

  return (
    <div ref={ref}>
      {inView ? (
        <Component {...componentProps} className={className} />
      ) : (
        <div className="flex justify-center items-center h-[200px]">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

