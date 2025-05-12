'use client';
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import useGlobalStore from '@/store/global/store';
import { GlobalActions, GlobalStates, ViewportBoundary } from './type';
// import { AppURL } from '@/lib/seeds/global';
import { Progress } from '@/components/ui/progress';
import { GlobalUI } from '@/themes/type';
// import { styledConsoleLog } from '../../utils/log/logger'

const DOMRectInit: ViewportBoundary = { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }

const GlobalContext = createContext<GlobalStates & GlobalActions>({
	mobileCheck: false,
	viewportBoundary: DOMRectInit,
	handleSafeAreaInset: () => {},
});

const GlobalProvider = ({
	children,
	init,
}: {
	children: ReactNode;
	init: { mobileCheck: boolean };
}) => {
	const [viewportBoundary, setViewportBoundary] = useState<ViewportBoundary>(DOMRectInit)
	const firstRenderRef = useRef(false)
	const { loading } = useGlobalStore()

	const handleSafeAreaInset = (value: ViewportBoundary) => {
		setViewportBoundary(value);
	}

	useEffect(() => {
		if (!firstRenderRef.current) {
			const showWarning = () => {
				// styledConsoleLog('Dừng lại!', {
				// 	backgroundColor: '#DC3545',
				// 	padding: '4px 8px',
				// 	fontSize: '32px',
				// });

				// styledConsoleLog('Website: ' + AppURL, {
				// 	fontSize: '24px',
				// 	backgroundColor: '#00000050',
				// });

				// styledConsoleLog(
				// 	'Đây là một tính năng của trình duyệt dành cho các nhà phát triển. Nếu ai đó bảo bạn sao chép-dán nội dung nào đó vào đây thì đó là hành vi lừa đảo và sẽ khiến họ có thể truy cập vào trình duyệt của bạn!',
				// 	{
				// 		fontSize: '16px',
				// 		backgroundColor: '#00000050',
				// 	}
				// );
			};
			showWarning();
			firstRenderRef.current = true;
		}
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				mobileCheck: init?.mobileCheck || false,
				viewportBoundary,
				handleSafeAreaInset,
			}}>
			{loading && (
				<div style={{ zIndex: GlobalUI.zIndex.loadingOverlay }}
					className={`bg-other-overlay fixed left-0 top-0 flex h-screen w-screen items-center justify-center`}>
					<Progress />
				</div>
			)}
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error('useViewport must be used within a GlobalProvider')
	}
	return context;
}

export { GlobalProvider, useGlobalContext }
