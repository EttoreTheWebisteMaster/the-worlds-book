import { ReactElement } from 'react';
import 'aos/dist/aos.css';
import { Box } from '@mui/material';
import styles from '@/app/static/css/page.module.css';

export default function Paragraph({
	children,
	icon,
	iconPosition = 'left',
	enableFade = true,
}: Readonly<{
	children: React.ReactNode;
	icon?: ReactElement;
	iconPosition?: 'left' | 'right';
	enableFade?: boolean;
}>) {
	const fadePosition = iconPosition === 'right' ? 'left' : 'right';

	return (
		<div {...(enableFade ? { 'data-aos': `fade-${fadePosition}` } : {})}>
			<Box className={styles.paragraph}>
				{icon && (
					<Box
						className={styles.paragraphIcon}
						sx={{
							left: iconPosition === 'left' ? '-10em' : 'auto',
							right: iconPosition === 'right' ? '-10em' : 'auto',
						}}
					>
						{icon}
					</Box>
				)}
				{children}
			</Box>
		</div>
	);
}
