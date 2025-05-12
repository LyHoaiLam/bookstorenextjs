import { headers } from "next/headers";
import HeaderWrapper from "./HeaderWrapper";
import { deviceDetect } from "@/utils/log/check/check-device";
import HeaderContact from "./HeaderContact";
import HeaderMobile from "./mobile/HeaderMobile";
import HeaderDesktop from "./desktop/HeaderDesktop";
import AppContainer from "../Container";
export default async function HeaderResponsive() {

    const userAgent = (await headers()).get('user-agent')
	const mobileCheck = deviceDetect(userAgent ?? '')
	const GlobalHeader = mobileCheck ? HeaderMobile : HeaderDesktop

	return (
        <header className="bg-white shadow-xl/30 z-20 fixed left-0 top-0 w-full dark:border-neutral-200">
            <HeaderWrapper>
                <AppContainer>
                    <div className="flex sm:flex-col">
                        <HeaderContact mobile={mobileCheck} />
                        <GlobalHeader mobile={mobileCheck} />
                    </div>
                </AppContainer>
            </HeaderWrapper>
        </header>
    )
} 