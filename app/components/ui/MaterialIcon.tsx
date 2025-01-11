import { TypeMaterialIcons } from '@/shared/types/icon.types';
import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

const MaterialIcon: FC<{ name: TypeMaterialIcons }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
