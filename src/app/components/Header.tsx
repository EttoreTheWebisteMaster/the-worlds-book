import Image from 'next/image';
import cover from '../static/img/cover.webp';
import { Box, Typography } from '@mui/material';
import styles from '../static/css/header.module.css';

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
			<Box className={styles.titleContainer}>
				<Typography
					variant='h1'
					fontFamily='var(--font-typewriter)'
					sx={{
						fontSize: {
							xs: '2em', // For screen sizes below 768px
							sm: '4em', // For screen sizes 768px and above
						},
					}}
				>
					World&#39;s Book
				</Typography>
				<Typography
					variant='h5'
					fontFamily='var(--font-courier-prime)'
					fontWeight='bold'
					sx={{
						fontSize: {
							xs: '0.7em', // For screen sizes below 768px
							sm: '1.3em', // For screen sizes 768px and above
						},
					}}
				>
					--------------------------- <br />
					|&nbsp;&nbsp;&nbsp;a social experiment&nbsp;&nbsp;&nbsp;|{' '}
					<br />
					---------------------------
				</Typography>
			</Box>
		</Box>
	);
}
