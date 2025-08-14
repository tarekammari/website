"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	/** delay in ms before playing animation after entering viewport */
	delay?: number;
	className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		let stopped = false;
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting && !stopped) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
		);
		observer.observe(node);
		return () => {
			stopped = true;
			observer.disconnect();
		};
	}, []);

	return (
		<div
			ref={ref}
			className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
			style={{ animationDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}


