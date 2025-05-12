'use client';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useTheme } from 'next-themes';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import IconLogo from '@/assets/icons/logo/IconLogo';

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
          <SheetTitle>
            <IconLogo />
          </SheetTitle>
          <SheetDescription className="flex flex-col flex-grow justify-between">
            <>
              <div className="flex items-center space-x-2">
                <Switch
                  id="theme-switch"
                  checked={currentTheme === 'dark'}
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                />
                <Label htmlFor="theme-switch">
                  {currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </Label>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Link href={"/home"}>Home</Link>
                <Link href={"/travelnews"}>Travel news</Link>
                <Link href={"/about"}>About Travel LHL</Link>
              </div>
            </>

            <div className=" mt-120 text-sm text-gray-500">
              <p>Email:
                <span
                  className='ml-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    hoailam03999@gmail.com
                </span>
              </p>
              <p>Phone:
                <span
                  className='ml-4 mt-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    0362685068
                </span>
              </p>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
