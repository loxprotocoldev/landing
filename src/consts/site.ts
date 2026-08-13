export const SITE = {
	title: "NFTLox — Game asset infrastructure on Hive",
	description:
		"Open infrastructure for player-owned game assets with mutable state, non-custodial lending, and atomic marketplace settlement on Hive.",
	url: "https://nftlox.com",
	author: "NFTLox Protocol",
	lang: "en",
	locale: "en_US",
	ogImage: "https://nftlox.com/og.png",
} as const

export type SiteConfig = typeof SITE
