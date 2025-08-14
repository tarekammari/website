"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Wrap page content to provide a subtle fade/slide transition on route changes.
 */
export default function PageContainer({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const [key, setKey] = useState(0);

	useEffect(() => {
		setKey((k) => k + 1);
	}, [pathname]);

	return (
		<div key={key} className="page-enter">
			{children}
		</div>
	);
}


