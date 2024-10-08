import { Typography } from '@mui/material';
import styles from '../../static/css/page.module.css';

export default function Title(prop: Readonly<{ value: string }>) {
    return (
        <Typography className={styles.title} variant='h2'>
            #&nbsp;{prop.value}
        </Typography>
    );
}