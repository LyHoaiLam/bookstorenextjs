'use client'
import AppContainer from '@/components/layouts/Container';
import { cn } from '@/lib/utils';
import { ContactHeaderSeed } from '@/lib/header';
import IconPhone from '@/assets/icons/IconPhone';
import IconEmail from '@/assets/icons/IconEmail';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeaderContact({ mobile } : { mobile: boolean }) {
	const { resolvedTheme } = useTheme()
	const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

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
					<Image
						width={900}
						height={900}
						quality={100}
						src={'/images/logo/LogoBookWebsiteNextJS.png'}
						alt='not found'
						className='w-[100px] h-[25px] object-contain'
					/>
					<span className='animate-gradient-text'>
						Chào mừng bạn đến với Website sánh của chúng tôi
						</span>
				</div>
				<div className={'hidden h-full items-center gap-1 text-sm leading-[22px] text-neutrals-2 sm:flex'}>
				</div>
			</div>
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
		</AppContainer>
	)
}
