'use client';

import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';
import Text from './Text';

import style from '@/app/static/css/page.module.css';

export default function TextLong(prop: Readonly<{
	title: string;
	description: ReactElement;
	details: ReactElement;
}>) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Box marginBottom='4em'>
			<Box className={style.subtitle}>{prop.title}</Box>

			<Text value={prop.description} />

			{isExpanded ? <Text value={prop.details} /> : ''}

			<Box
				onClick={() => setIsExpanded(!isExpanded)}
				className={style.detailsButton}
			>
				{isExpanded ? (
					<Box>
						Hide details
					</Box>
				) : (
					<Box>
						Show details
					</Box>
				)}
			</Box>
		</Box>
	);
}
