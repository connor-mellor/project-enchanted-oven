// import styles from './Promo.module.css'

type PromoProps = {
    children: string | null;
}

const Promo: React.FC<PromoProps> = ({ children }) => {
    return (
        <section className={'relative bg-l-secondaryContainer text-l-onSecondaryContainer overflow-hidden flex items-center py-6'}>
            <div className={'absolute flex-nowrap font-medium animate_promo_text_slide whitespace-nowrap'}>
                <p>{children}</p>
            </div>
        </section>
    )
}

export default Promo;