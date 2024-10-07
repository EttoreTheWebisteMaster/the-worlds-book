import styles from '../../static/css/page.module.css';
import { ReactNode } from 'react';

export default function Text(prop: Readonly<{ value: ReactNode }>) {
    return (
        <div className={styles.text}>{prop.value}</div>
    );
}
