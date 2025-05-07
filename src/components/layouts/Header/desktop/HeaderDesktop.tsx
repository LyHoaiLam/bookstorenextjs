'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import AppContainer from '@/components/layouts/Container';
import { headerData } from '@/lib/seeds/header';

export default function HeaderDesktop() {

	return (
		<AppContainer
			className={'flex h-10 items-center'}
			containerClassName={'border-t border-blue-100 py-6'}>
			<div
				className={
					'flex h-full flex-1 justify-between gap-8 sm:justify-normal sm:gap-10'
				}>
				<Link href={'/home'} className={'flex items-center gap-2'}>
                    <Image
                        src={'/images/logo/book-logo-design-free-vector.jpg'}
                        alt={'190Evisa logo'}
                        className="w-8 h-8" width={500} height={500}
                    />
                    <h1 className="text-lg font-semibold leading-none">Book LHL</h1>
                 </Link>

				<Separator
					className="hidden bg-blue-100 sm:block"
					orientation="vertical"
				/>

				<div className={'flex w-full items-center justify-end gap-2 sm:hidden'}>
					<Image
						src="/images/avatar/user-avatar.png"
						alt="User avatar"
						width={32}
						height={32}
					/>
					
				</div>

				<div className={'flex gap-10 text-black dark:text-white cursor-pointer items-center'}>
					{headerData.map((item, index) => (
							<Link key={index} href={item.href}>
                            	{item.title}
							</Link>
                    ))}
				</div>
			</div>

			<div className={'hidden h-full items-center gap-6 sm:flex'}>
                <Link href="/register"
					className={
						'hidden h-12 min-w-[126px] items-center justify-center gap-2 rounded-xl border border-secondary-500 px-6 py-3 text-base leading-6 text-secondary-500 lg:flex'
					}>
					Regsiter
				</Link>

				<Link href="/login"
					className={
						'hidden h-12 min-w-[126px] items-center justify-center gap-2 rounded-xl border border-secondary-500 px-6 py-3 text-base leading-6 text-secondary-500 lg:flex'
					}>
					Login
				</Link>
				<Image
					src={'/images/avatar/user-avatar.png'}
					alt={'User avatar'}
					width={32}
					height={32}
					className={'flex lg:hidden'}
				/>
			</div>
		</AppContainer>
	)
}

