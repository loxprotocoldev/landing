export const $ = <T extends Element = HTMLElement>(
	selector: string,
	root: ParentNode = document
): T | null => root.querySelector<T>(selector)

export const $$ = <T extends Element = HTMLElement>(
	selector: string,
	root: ParentNode = document
): T[] => Array.from(root.querySelectorAll<T>(selector))
