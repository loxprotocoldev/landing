type ClassValue = string | number | false | null | undefined | ClassValue[]

export const cn = (...values: ClassValue[]): string =>
	values
		.flat(Infinity as 1)
		.filter((value): value is string | number => Boolean(value))
		.join(" ")
