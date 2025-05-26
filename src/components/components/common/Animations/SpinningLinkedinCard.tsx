import Link from 'next/link';
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title?: string;
  link: string;
  image?: string;
  component?: React.ReactNode;
}

const SpinningLinkedinCard = ({ className, title, link, component,image }: Props) => {
  return (
    <div className={cn("spin-container", className)}>
      <Link href={link} target="_blank">
        <div className="spin-wrapper">
          <div className="spin-card">
            <div
            style={{
                backgroundImage: image ? `url(${image})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
                border: '1px solid black',
              }}
            className="spin-face spin-front">{title}</div>
            <div className="spin-face spin-back">{component}</div>
          </div>
          <div className="spin-shadow" />
        </div>
      </Link>
    </div>
  )
}
export default SpinningLinkedinCard
