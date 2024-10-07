import styles from '@/app/static/css/page.module.css';
import { Box } from '@mui/material';
import { ReactElement } from 'react';

export default function TimelineElement(
	prop: Readonly<{
		title: string;
		subtitle: string;
		icon: ReactElement;
	}>
) {
	return (
		<Box className={styles.timelineElemContainer}>
			<Box className={styles.timelineElemIcon}>{prop.icon}</Box>
			<Box className={styles.timelineElemTextContainer}>
				<Box className={styles.timelineElemTitle}>{prop.title}</Box>
				<Box className={styles.timelineElemSubtitle}>[{prop.subtitle}]</Box>
			</Box>
		</Box>
	);
}
