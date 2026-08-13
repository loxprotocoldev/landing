export interface SeoMeta {
	title: string
	description: string
	canonical?: string
	ogImage?: string
}

export interface ImageAsset {
	src: string
	alt: string
	width?: number
	height?: number
}
