import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav>
            <a href="/project-enchanted-oven">
                <div className={styles.img_container}>
                    <img src="maries-c&b-logo.jpg" alt="log of cake icing" loading="lazy" />
                </div>
            </a>
        </nav>
    )
}

export default Navigation;