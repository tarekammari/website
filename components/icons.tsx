import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function createIcon(
	paths: React.ReactNode,
	{ strokeWidth = 2 }: { strokeWidth?: number } = {}
) {
	return function Icon({ size = 16, className, ...rest }: IconProps) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size}
				height={size}
				fill="none"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				className={className}
				{...rest}
			>
				{paths}
			</svg>
		);
	};
}

export const Plus = createIcon(
	<g>
		<path d="M12 5v14" />
		<path d="M5 12h14" />
	</g>
);

export const Sun = createIcon(
	<g>
		<circle cx="12" cy="12" r="4" />
		<path d="M12 1v2" />
		<path d="M12 21v2" />
		<path d="M4.22 4.22l1.42 1.42" />
		<path d="M18.36 18.36l1.42 1.42" />
		<path d="M1 12h2" />
		<path d="M21 12h2" />
		<path d="M4.22 19.78l1.42-1.42" />
		<path d="M18.36 5.64l1.42-1.42" />
	</g>
);

export const Moon = createIcon(
	<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
);

export const ShoppingCart = createIcon(
	<g>
		<path d="M6 6h14l-1.5 9H8L6 6z" />
		<path d="M6 6L5 3H3" />
		<circle cx="9" cy="19" r="1.5" />
		<circle cx="17" cy="19" r="1.5" />
	</g>
);

export const Zap = createIcon(
	<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
);

export const Smartphone = createIcon(
	<g>
		<rect x="7" y="2" width="10" height="20" rx="2" />
		<path d="M11 18h2" />
	</g>
);

export const Accessibility = createIcon(
	<g>
		<circle cx="12" cy="5" r="2" />
		<path d="M4 10h16" />
		<path d="M12 8v9" />
		<path d="M7 22l5-5 5 5" />
	</g>
);

export const Mail = createIcon(
	<g>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="M3 7l9 6 9-6" />
	</g>
);

export const Github = createIcon(
	<g>
		<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.37-3.38-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.23-.26-4.57-1.14-4.57-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05.8-.23 1.65-.35 2.51-.35s1.71.12 2.51.35c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.83-4.58 5.09.36.32.67.95.67 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.06 10.06 0 0022 12.26C22 6.58 17.52 2 12 2z" />
	</g>,
	{ strokeWidth: 1.5 }
);

export const Linkedin = createIcon(
	<g>
		<rect x="3" y="3" width="18" height="18" rx="2" />
		<path d="M8 17v-7" />
		<path d="M8 7h.01" />
		<path d="M12 17v-4a3 3 0 016 0v4" />
	</g>
);


export const Globe = createIcon(
	<g>
		<circle cx="12" cy="12" r="9" />
		<path d="M3 12h18" />
		<path d="M12 3c3 3 3 15 0 18" />
		<path d="M12 3c-3 3-3 15 0 18" />
	</g>
);

export const Bot = createIcon(
	<g>
		<rect x="6" y="7" width="12" height="10" rx="2" />
		<path d="M12 3v2" />
		<circle cx="9.5" cy="12" r="1.5" />
		<circle cx="14.5" cy="12" r="1.5" />
		<path d="M6 11H4" />
		<path d="M20 11h-2" />
	</g>
);

export const Brain = createIcon(
	<g>
		<path d="M9 3a3 3 0 00-3 3 3 3 0 00-3 3c0 1.657 1.343 3 3 3v2a3 3 0 003 3" />
		<path d="M15 3a3 3 0 013 3 3 3 0 013 3c0 1.657-1.343 3-3 3v2a3 3 0 01-3 3" />
		<path d="M9 3v8a3 3 0 003 3 3 3 0 003-3V3" />
		<path d="M12 14v4" />
	</g>
);

export const Code = createIcon(
	<g>
		<path d="M8 16l-4-4 4-4" />
		<path d="M16 8l4 4-4 4" />
		<path d="M14 4l-4 16" />
	</g>
);

export const ArrowRight = createIcon(
	<g>
		<path d="M5 12h14" />
		<path d="M13 6l6 6-6 6" />
	</g>
);


