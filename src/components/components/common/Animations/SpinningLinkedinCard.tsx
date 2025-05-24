import Link from 'next/link';
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title?: string;
  link: string;
  component?: React.ReactNode;
}

const SpinningLinkedinCard = ({ className, title, link, component }: Props) => {
  return (
    <div className={cn("spin-container", className)}>
      <Link href={link} target="_blank">
        <div className="spin-wrapper">
          <div className="spin-card">
            <div className="spin-face spin-front">{title}</div>
            <div className="spin-face spin-back">{component}</div>
          </div>
          <div className="spin-shadow" />
        </div>
      </Link>
    </div>
  )
}

export default SpinningLinkedinCard
