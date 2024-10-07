import styles from '../../static/css/page.module.css';

export default function Title(prop: Readonly<{ value: string }>) {
    return (
        <p className={styles.title}>#&nbsp;{prop.value}</p>
    );
}