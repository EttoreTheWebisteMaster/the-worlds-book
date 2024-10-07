import Image from 'next/image';
import cover from '../static/img/cover.png';
import { Box } from '@mui/material';

export default function Header() {
	return (
		<Box sx={{ position: 'relative' }}>
			<Image
				src={cover}
				alt='Cover'
				style={{
					width: '100%',
					height: 'auto',
				}}
			/>
		</Box>
	);
}
