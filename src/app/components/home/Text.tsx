import styles from '../../static/css/page.module.css';
import { ReactNode } from 'react';

export default function Text(prop: Readonly<{ value: ReactNode }>) {
    return (
        <p className={styles.text}>{prop.value}</p>
    );
}
