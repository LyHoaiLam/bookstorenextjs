'use client';
import { useEffect, useRef } from 'react';
import { useGlobalContext } from '@/context/global/GlobalContext';

export default function HeaderWrapper({ children, className }: ComponentProps) {

	const containerRef = useRef<HTMLDivElement>(null)
	const { handleSafeAreaInset } = useGlobalContext()

	useEffect(() => {
		if (!containerRef.current) return;
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				handleSafeAreaInset(entry.target.getBoundingClientRect())
			}
		});

		resizeObserver.observe(containerRef.current)
		return () => {
			resizeObserver.disconnect()
		}
	}, [])

	return (
		children && (
			<div ref={containerRef} className={className}>
				{children}
			</div>
		)
	)
}
