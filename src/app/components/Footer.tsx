import { Box } from "@mui/material";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

	return (
		<Box sx={{ textAlign: 'center', marginTop: '16em', marginBottom: '2em', padding: '1em' }}>
            <Box sx={{ fontSize: '1.1em', marginBottom: '1em' }}>
                <a href="">About</a>{' | '}
                <a href="">Community</a>{' | '}
                <a href="">Contact</a>
            </Box>
            <Box>© {year} World&#39;s Book. All rights reserved.</Box>
        </Box>
	);
}
