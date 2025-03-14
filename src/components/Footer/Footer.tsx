import styles from './Footer.module.css'

const Footer: React.FC = () => {
    return (
        <section className={styles.footer}>
            <p>&#64;MariesCakes&Bakes - {new Date().getFullYear()}</p>
        </section>
    )
}

export default Footer;