'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger className="text-black">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mennu</SheetTitle>
          <SheetDescription>
           <ul className="flex flex-col gap-4">
            <li>
                <Link href={"/home"}>Home</Link>
            </li>
            <li>
                <Link href={"/booknews"}>Book news</Link>
            </li>
            <li>
                <Link href={"/about"}>About Book LHL</Link>
            </li>
           </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
