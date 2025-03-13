type PromoProps = {
    children?: string | null;
}

const Promo: React.FC<PromoProps> = ({ children }) => {
    return (
        <section className="promo">
            <div className="promo-text">
                <p>{children}</p>
            </div>
        </section>
    )
}

export default Promo;