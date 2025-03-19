import styles from './Promo.module.css'

type PromoProps = {
    children: string | null;
}

const Promo: React.FC<PromoProps> = ({ children }) => {
    return (
        <section className={styles.promo}>
            <div className={styles.promo_text}>
                <p>{children}</p>
            </div>
        </section>
    )
}

export default Promo;