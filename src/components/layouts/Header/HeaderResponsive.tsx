import { headers } from "next/headers";
import HeaderWrapper from "./HeaderWrapper";
import HeaderContact from "./HeaderContact";
import HeaderMobile from "./mobile/HeaderMobile";
import HeaderDesktop from "./desktop/HeaderDesktop";
import { deviceDetect } from "@/utils/log/check/check-device";
export default async function HeaderResponsive() {
    const userAgent = (await headers()).get('user-agent')
	const mobileCheck = deviceDetect(userAgent ?? '')
	const GlobalHeader = mobileCheck ? HeaderMobile : HeaderDesktop

	return (
        <header className="bg-white z-1 fixed left-0 top-0 w-full border-b-2 border-neutral-900 dark:border-neutral-200">
            <HeaderWrapper>
                <div className="flex sm:flex-col">
                    <HeaderContact mobile={mobileCheck} />
                    <GlobalHeader />
                </div>
            </HeaderWrapper>
        </header>
    )
} 