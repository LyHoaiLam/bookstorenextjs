'use client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function HeaderMobile() {
	const { resolvedTheme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  const { setTheme } = useTheme()

useEffect(() => {
  setCurrentTheme(resolvedTheme as 'light' | 'dark')
}, [resolvedTheme])

  return (
    <Sheet>
      <SheetTrigger className="text-black">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Mennu</SheetTitle>
          <SheetDescription>
            <div>
            <div className="flex items-center space-x-2">
              <Switch
                id="theme-switch"
                checked={currentTheme === 'dark'}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              />
              <Label htmlFor="theme-switch">{currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</Label>
            </div>
            </div>
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
