'use client'

import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

interface LazyDiscoverWrapperProps {
  title: string;
  autoRotate?: boolean;
  className?: string;
}

const Discover = dynamic(() => import("@/components/components/tabChooice/Discovers"), {
  ssr: false,
  loading: () => <div className="flex justify-center items-center h-[200px]">
  <span className="loader"></span>
</div>
,
});

export default function LazyDiscoverWrapper({ title, autoRotate = false, className }: LazyDiscoverWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  console.log('In view:', inView);

  return (
    <div ref={ref}>
      {inView ? (
        <>
          <Discover title={title} autoRotate={autoRotate} className={className} />
        </>
      ) : (
        <span className="loader"></span>
      )}
    </div>
  );
}
