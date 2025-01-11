import { ListInfoServices } from '@/services/genre.services';
import { useQuery } from '@tanstack/react-query';
import { IList } from '@/shared/types/movie.types';

export const useListInfo = () => {
	const queryData = useQuery(
		'list info',
		() => ListInfoServices.getListInfo(),
		{
			select: ({ data }) =>
				data.map(
					(item) =>
						({
							name: item.name,
							slug: item.slug,
						}) as IList,
				),
		},
	);

	return queryData;
};
