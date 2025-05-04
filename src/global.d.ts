interface ComponentProps {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}

type locale = 'en' | 'vi';

interface PageParamsProp {
	params: { locale: locale };
}

interface SiteMap {
	url: string;
	lastmod?: string;
	changefreq?: string;
	priority?: number;
}
