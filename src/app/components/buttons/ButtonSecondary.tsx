'use client';

import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

const ButtonSecondary = styled(Button)<ButtonProps>(() => ({
	backgroundColor: 'var(--color-secondary)',
	color: 'var(--color-primary)',
	padding: '1em 4em',
    margin: '.5em 0',
	borderRadius: 0,
	textTransform: 'uppercase',
    fontWeight: 'bold',
	fontFamily: 'var(--font-typewriter)',
	lineHeight: 0,
	whiteSpace: 'nowrap',
	overflow: 'hidden',  
	textOverflow: 'ellipsis',
    position: 'relative',
    '&::before, &::after': {
        content: '""',
        position: 'absolute',
        borderColor: 'var(--color-primary)',
        borderStyle: 'solid',
    },
    // Top-right corner border
    '&::before': {
        top: 0,
        right: 0,
        width: '100px',
        height: '20px', 
        borderWidth: '1px 1px 0 0',
    },
    // Bottom-left corner border
    '&::after': {
        bottom: 0,
        left: 0,
        width: '100px',
        height: '20px', 
        borderWidth: '0 0 1px 1px',
    },
	'&:hover': {
		backgroundColor: 'var(--color-secondary-hover)',
	},
    '&:disabled': {
        backgroundColor: '#00000005',
	},
	'&:disabled::before, &:disabled::after': {
        borderColor: '#00000042',
	},
}));

export default ButtonSecondary;
