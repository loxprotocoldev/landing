export interface NavItem {
	label: string
	href: string
	external?: boolean
}

export const NAV_ITEMS: readonly NavItem[] = [
	{ label: "Game assets", href: "#assets" },
	{ label: "Purpose", href: "#purpose" },
	{ label: "Docs", href: "https://testnet.nftlox.com/docs/#/", external: true },
] as const
