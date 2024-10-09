import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '@/app/static/css/page.module.css';

interface CountdownProps {
	targetDate: string; // ISO date string (e.g., "2024-12-31T23:59:59Z")
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState<number>(0);

	useEffect(() => {
		const targetTime = new Date(targetDate).getTime();

		const calculateTimeLeft = () => {
			const now = Date.now();
			const difference = targetTime - now;

			if (difference < 0) {
				setTimeLeft(0); // Countdown has finished
				return;
			}

			setTimeLeft(difference);
		};

		calculateTimeLeft(); // Initial calculation
		const interval = setInterval(calculateTimeLeft, 1000); // Update every second

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [targetDate]);

	const formatTimeLeft = (time: number) => {
		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const hours = Math.floor((time / 1000 / 60 / 60) % 24);
		const days = Math.floor(time / 1000 / 60 / 60 / 24);

		return {
			days: String(days).padStart(2, '0'),
			hours: String(hours).padStart(2, '0'),
			minutes: String(minutes).padStart(2, '0'),
			seconds: String(seconds).padStart(2, '0'),
		};
	};

	const { days, hours, minutes, seconds } = formatTimeLeft(timeLeft);

	return (
		<>
			{timeLeft > 0 ? (
				<div data-aos='fade-up'>
					<Box className={styles.countdownContainer}>
						<Box fontSize='0.75em'>The game starts in</Box>
						{days} days {hours}:{minutes}:{seconds}
					</Box>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Countdown;
