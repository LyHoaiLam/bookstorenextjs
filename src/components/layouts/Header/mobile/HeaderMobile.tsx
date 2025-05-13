'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'next-themes';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import IconLogo from '@/assets/icons/logo/IconLogo';

export default function HeaderMobile() {

  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setCurrentTheme(resolvedTheme as 'light' | 'dark');
  }, [resolvedTheme]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    router.push(href)
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="text-black">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription className="flex flex-col flex-grow justify-between">
            <SheetContent className='p-6'>
              <IconLogo />
              <>
                <div className="flex items-center space-x-2">
                  <Switch id="theme-switch"
                    checked={currentTheme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                  <Label htmlFor="theme-switch">
                    {currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </Label>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <button onClick={() => handleLinkClick('/home')} className="text-left">Home</button>
                  <button onClick={() => handleLinkClick('/travelnews')} className="text-left">Travel news</button>
                  <button onClick={() => handleLinkClick('/about')} className="text-left">About Travel LHL</button>
                </div>
              </>
              <div className="mt-90 text-2xl flex gap-4">
                <button className='text-black' onClick={() => handleLinkClick('/register')}>Register</button>
                <button className='text-black' onClick={() => handleLinkClick('/login')}>Login</button>
              </div>
              <div className="mt-10 text-sm text-gray-500">
                <p>Email:
                  <span className='ml-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    hoailam03999@gmail.com
                  </span>
                </p>
                <p>Phone:
                  <span className='ml-4 mt-2 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    0362685068
                  </span>
                </p>
              </div>
            </SheetContent>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
