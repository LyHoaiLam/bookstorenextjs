import { Separator } from "@radix-ui/react-separator";
import AppContainer from "../Container";
import Link from "next/link";
// import Image from "next/image";
import { FooterDefault, FooterSeed, FooterSendEmail } from "@/lib/seeds/footer";

export default function Footer() {

    return (
        <>
            <Separator orientation="vertical" className="my-4 h-[2px] w-full bg-black" />
            <AppContainer>
            <div
					className={
						'flex items-stretch justify-between gap-5 max-md:flex-col'
					}>
					<div className={'flex-shrink-0 py-6 md:py-20'}>
						<Link href="/" className={'flex items-center gap-2'}>
							{/* <Image
								src={'/images/logo/LogoBookWebsiteNextJS.png'}
								alt={''}
								width={32}
								height={32}
								className={''}
							/> */}
							<p className={'text-neutral-700'}>
								Home Book
							</p>
						</Link>
					</div>
					<div className={'flex w-full justify-between pb-6 md:w-auto md:gap-5 md:pb-0 lg:gap-10 xl:gap-20'}>
						<div className={'flex flex-col gap-5 md:py-20'}>
                        {FooterSeed.map((item, index) => (
									<Link key={index}
										href={item.href}
										className={'min-w-[160px]'}>
										<p className={'text-neutrals-4'}>
											{item.title}
										</p>
									</Link>
								))}
						</div>
						<Separator
							className={'hidden h-auto md:block'}
							orientation={'vertical'}
						/>
						<div className={'flex flex-col gap-5 md:py-20'}>
							{FooterDefault.map((item, index) => (
									<Link key={index}
										href={item.href}
										className={'min-w-[160px]'}>
										<p className={'text-neutrals-4'}>
											{item.title}
										</p>
									</Link>
								))}
						</div>
					</div>
					<Separator orientation={'vertical'} />
					<Separator orientation={'horizontal'} />
					<div className={'flex w-full flex-col justify-between gap-6 py-6 md:w-auto md:gap-10 md:p-0 xl:flex-row xl:gap-15'}>
							<div className={'md:pt-20'}>
								<p className={'uppercase text-neutral-700'}>
									{FooterSendEmail.title}
								</p>
								<p className={'mb-6 mt-4 text-neutrals-4'}>
									{FooterSendEmail.description}
								</p>
								<div className={'border-divider flex items-center rounded-full border-2 p-2 pl-4'}>
									<input placeholder={'Enter your email'} className={'reset-input flex-1 leading-6 text-neutrals-2 placeholder:text-neutrals-4'} />
									<div className={'flex size-8 items-center justify-center rounded-full bg-primary-1-1'}>
										{/* <IconArrowV2 width={16} height={16} color={'#ffffff'} /> */}
									</div>
								</div>
							</div>
		
					</div>
				</div>
            </AppContainer>
            <AppContainer>
						<Separator orientation={'vertical'} />
				<p className={'py-6 text-center text-neutrals-4'}>
					Copyright © 2025 All rights reserved
				</p>
			</AppContainer>
        </>
    )
} 