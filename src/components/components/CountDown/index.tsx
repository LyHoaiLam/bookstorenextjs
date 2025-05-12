'use client';
import { useEffect, useState } from 'react';
import { format } from 'date-fns/fp/format';

interface CountDownProps {
	className?: string;
	formatStr?: string;
}

export default function CountDown({ formatStr, className }: CountDownProps) {
	
    const [currentTime, setCurrentTime] = useState<Date>()

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;

		const updateTime = () => {
			const now = new Date()
			if (now) {
				setCurrentTime(now)
				const delay = 1000 - now.getMilliseconds()
				timeoutId = setTimeout(updateTime, delay)
			}
		}

		updateTime()

		return () => clearTimeout(timeoutId)
	}, [])

	return (
		<span className={className}>
			{currentTime &&
				format(formatStr || 'E MMM dd yyyy, HH:mm:ss (OOO)', currentTime)}
		</span>
	)
}

