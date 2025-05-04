import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

const AppContainer = forwardRef<HTMLDivElement, ComponentProps>(
	({ children, className, containerClassName }, ref) => {
		return (
			<div className={cn('w-full px-6 md:px-12', containerClassName)}>
				<div
					ref={ref}
					className={cn('mx-auto w-full max-w-screen-xl', className)}>
					{children}
				</div>
			</div>
		);
	}
);

AppContainer.displayName = 'Container';

export default AppContainer;
