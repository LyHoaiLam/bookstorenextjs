'use client'
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ContactHeaderSeed } from '@/lib/header';
import IconPhone from '@/assets/icons/IconPhone';
import IconEmail from '@/assets/icons/IconEmail';
import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch"
import IconLogo from '@/assets/icons/logo/IconLogo';

export default function HeaderContact({ mobile } : { mobile: boolean }) {

	const { resolvedTheme } = useTheme()
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
    const { setTheme } = useTheme()

	useEffect(() => {
		setCurrentTheme(resolvedTheme as 'light' | 'dark')
	}, [resolvedTheme])

	const iconColor = currentTheme === 'dark' ? 'black' : 'black'

	return (
		<div className={'py-8 flex h-4 w-full items-center justify-between'}>
			<div className={'flex h-full items-center gap-6 py-2'}>
				<div className={'flex h-full items-center gap-1 text-sm leading-[22px] text-neutrals-2'}>
					<IconLogo />
					<span className='ml-6 hidden sm:block animate-gradient-text text-lg'>
						Chào mừng bạn đến với Website du lịch của LHL
					</span>
				</div>

			</div>
			<div>
				{!mobile && (
					<div className={'flex h-full max-md:hidden items-center'}>
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
			<div className='items-center'>
				<div className="hidden sm:block items-center space-x-2">
					<Switch id="theme-switch" checked={currentTheme === 'dark'}
						onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
					/>
				</div>

			</div>
		</div>
	)
}
