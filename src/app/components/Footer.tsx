import { Box } from "@mui/material";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

	return (
		<Box sx={{ textAlign: 'center', marginTop: '10em', marginBottom: '2em' }}>
            <Box sx={{ fontSize: '1.2em', marginBottom: '1em' }}>About | Community | Contact</Box>
            <Box>© {year} The World's Book. All rights reserved.</Box>
        </Box>
	);
}
