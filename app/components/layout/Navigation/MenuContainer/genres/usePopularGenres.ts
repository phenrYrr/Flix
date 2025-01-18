import { ListInfoServices } from '@/services/genre.services';
import { useQuery } from '@tanstack/react-query';
import { IMenuItem } from '../menu.interface';

export const useListInfo = () => {
	const queryData = useQuery({
		queryKey: ['popular genre menu'],
		queryFn: () => ListInfoServices.getListInfo(),
		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						icon: genre.icon,
						link: genre.link,
						title: genre.title,
					}) as IMenuItem,
			),
		//@ts-ignore
		onError: (error: unknown) => {
			console.error('Error fetching genre menu:', error);
		},
	});

	return queryData;
};
