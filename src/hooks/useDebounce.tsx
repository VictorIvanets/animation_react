import { useEffect, useState } from 'react'

export default function useDebounce<T>(value: T, delay: number): T {
	const [debounceValue, setDebounceValue] = useState<T>(value)

	useEffect(() => {
		const hendler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		return () => {
			clearTimeout(hendler)
		}
	}, [delay, value])

	return debounceValue
}
