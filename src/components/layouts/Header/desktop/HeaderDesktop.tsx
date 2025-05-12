'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import AppContainer from '@/components/layouts/Container';
import { headerData } from '@/lib/seeds/header';
import IconLogo from '@/assets/icons/logo/IconLogo';
import IconClock from '@/assets/icons/logo/IconClock';
import CountDown from '@/components/components/CountDown';

export default function HeaderDesktop({ mobile } : { mobile: boolean }) {

	return (
		<AppContainer containerClassName={'border-t border-blue-100 py-6'} className={'flex h-10 items-center gap-4'}>
			<div className={'flex h-full flex-1 justify-between gap-8 sm:justify-normal sm:gap-10'}>
				<Link href={'/home'} className={'flex items-center gap-2'}>
                    <IconLogo />
                 </Link>

				<Separator orientation="vertical" className="hidden bg-blue-100 sm:block" />

				<div className={'flex gap-10 text-black cursor-pointer items-center'}>
					{headerData.map((item, index) => (
						<Link key={index} href={item.href} className='hover-underline'>
							{item.title}
						</Link>
                    ))}
				</div>
			</div>

			<div className={'hidden h-full items-center gap-1 text-sm leading-6 sm:flex'}>
				<IconClock width={20} height={20} />
				{!mobile && (
					<CountDown className={'text-sm leading-6'} />
				)}
			</div>

			<div className={'hidden h-full items-center gap-6 sm:flex'}>
                <Link href="/register"
					className={
						'text-black hidden h-12 min-w-[126px] items-center justify-center gap-2 rounded-xl border border-black px-6 py-3 text-base leading-6 text-secondary-500 lg:flex'
					}>
					Regsiter
				</Link>

				<Link href="/login"
					className={
						'text-black hidden h-12 min-w-[126px] items-center justify-center gap-2 rounded-xl border border-black px-6 py-3 text-base leading-6 text-secondary-500 lg:flex'
					}>
					Login
				</Link>

			</div>
		</AppContainer>
	)
}

