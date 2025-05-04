import { headers } from "next/headers";
import HeaderWrapper from "./HeaderWrapper";
import HeaderContact from "./HeaderContact";
import HeaderMobile from "./mobile/HeaderMobile";
import HeaderDesktop from "./desktop/HeaderDesktop";
import { deviceDetect } from "@/utils/log/check/check-device";

const HeaderResponsive = async () => {
    const userAgent = (await headers()).get('user-agent')
	const mobileCheck = deviceDetect(userAgent ?? '')
	const GlobalHeader = mobileCheck ? HeaderMobile : HeaderDesktop

	return (
        <header className="fixed left-0 top-0 w-full border-b-2 border-neutral-900 dark:border-neutral-200">
            <HeaderWrapper>
                <HeaderContact mobile={mobileCheck} />
                <GlobalHeader />
            </HeaderWrapper>
        </header>
    )
}

export default HeaderResponsive