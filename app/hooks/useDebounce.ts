import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebounceValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
