import { Box } from '@mui/material';

import styles from './static/css/page.module.css';

import Title from './components/home/Title';
import Text from './components/home/Text';
import ButtonPrimary from './components/buttons/ButtonPrimary';
import ButtonSecondary from './components/buttons/ButtonSecondary';

import DrawSharpIcon from '@mui/icons-material/DrawSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';

export default function Home() {
	return (
		<Box className={styles.container}>
			<Title value='A Story Written by the World for the World' />
			<Text
				value={
					<>
						Welcome to The World&#39;s Book - where{' '}
						<b>creativity has no borders</b>. Add your voice to an
						evolving narrative <b>built by storytellers</b> from{' '}
						<b>across the globe</b>. Write a paragraph, start a
						chapter, or watch as the story grows.
					</>
				}
			/>

			<Box margin={'4em 0'}>
				<ButtonPrimary fullWidth endIcon={<DrawSharpIcon />}>
					Start Writing
				</ButtonPrimary>
				<ButtonSecondary fullWidth endIcon={<LocalLibrarySharpIcon />}>
					Read the book
				</ButtonSecondary>
			</Box>

			<Title value='How to Contribute' />
			<Text
				value={
					<>
						Be a part of a <b>creative experiment</b> where the <b>global
						community</b> writes a story together, one paragraph at a
						time. Use your <b>Writer&#39;s Tokens</b> to contribute in
						different ways.
					</>
				}
			/>
		</Box>
	);
}
