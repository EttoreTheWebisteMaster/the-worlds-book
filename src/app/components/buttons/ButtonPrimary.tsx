'use client';

import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

const ButtonPrimary = styled(Button)<ButtonProps>(() => ({
	backgroundColor: 'var(--color-primary)',
	color: 'var(--background)',
	padding: '1em 4em',
    margin: '.5em 0',
	borderRadius: 0,
	textTransform: 'uppercase',
    fontWeight: 'bold',
	fontFamily: 'var(--font-typewriter)',
	lineHeight: 0,
	'&:hover': {
		backgroundColor: 'var(--color-primary-hover)',
	},
	'&:disabled': {
		backgroundColor: '#cac4b8',
	},
}));

export default ButtonPrimary;
