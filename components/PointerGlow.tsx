"use client";

import { useEffect } from "react";

/**
 * Global pointer glow handler that updates CSS variables for elements
 * with the `btn-ghost` class to create a cursor-following highlight.
 */
export default function PointerGlow() {
	useEffect(() => {
		function handlePointerMove(this: Document, e: PointerEvent) {
			const target = e.target as Element | null;
			if (!target) return;
			const el = (target.closest && target.closest('.btn-ghost')) as HTMLElement | null;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			el.style.setProperty('--x', `${x}px`);
			el.style.setProperty('--y', `${y}px`);
		}

		function handleLeave(this: Document, e: PointerEvent) {
			const target = e.target as Element | null;
			if (!target) return;
			const el = (target.closest && target.closest('.btn-ghost')) as HTMLElement | null;
			if (!el) return;
			el.style.removeProperty('--x');
			el.style.removeProperty('--y');
		}

		document.addEventListener('pointermove', handlePointerMove, { passive: true });
		document.addEventListener('pointerleave', handleLeave, { passive: true });
		return () => {
			document.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('pointerleave', handleLeave);
		};
	}, []);

	return null;
}
