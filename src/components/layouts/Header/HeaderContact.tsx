'use client'
import AppContainer from '@/components/layouts/Container';
import { cn } from '@/lib/utils';
import { ContactHeaderSeed } from '@/lib/header';
import IconPhone from '@/assets/icons/IconPhone';
import IconEmail from '@/assets/icons/IconEmail';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Moon, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"


export default function HeaderContact({ mobile } : { mobile: boolean }) {

	const { resolvedTheme } = useTheme()
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
    const { setTheme } = useTheme()

	useEffect(() => {
		setCurrentTheme(resolvedTheme as 'light' | 'dark')
	}, [resolvedTheme])

	const iconColor = currentTheme === 'dark' ? 'white' : 'black'

	return (
		<AppContainer
			className={'flex h-4 w-full items-center justify-between'}
			containerClassName={'py-2'}>
			<div className={'flex h-full items-center gap-6 py-2'}>
				<div className={'flex h-full items-center gap-1 text-sm leading-[22px] text-neutrals-2'}>
					<Image src={'/images/logo/LogoBookWebsiteNextJS.png'} width={900} height={900} quality={100} alt='not found'
						className='w-[100px] h-[25px] object-contain'
					/>
					<span className='animate-gradient-text'>
						Chào mừng bạn đến với Website sánh của chúng tôi
					</span>
				</div>

			</div>
			<div>
				{!mobile && (
					<div className={'flex h-full max-md:hidden'}>
						{ContactHeaderSeed.map((item, index) => (
							<div key={index} className={cn('flex h-full items-center text-end text-sm leading-[22px]', index && 'pl-8')}>
									<div className='flex items-center gap-2'>
										{index === 0? (
											<IconEmail color={iconColor} />
										) : (
											<IconPhone color={iconColor} />
										)}
										<p className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
											{item.title}
										</p>
									</div>

							</div>
						))}
					</div>
				)}

			</div>
			<div>
			<DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
			</div>
		</AppContainer>
	)
}
