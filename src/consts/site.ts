export const SITE = {
	title: "NFTLox — Functional asset infrastructure",
	description:
		"Infrastructure for functional digital assets that represent access, progress, rewards, membership, discounts, and participation across games and applications.",
	url: "https://nftlox.com",
	author: "NFTLox Protocol",
	lang: "en",
	locale: "en_US",
	ogImage: "https://nftlox.com/og.png",
} as const

export type SiteConfig = typeof SITE
