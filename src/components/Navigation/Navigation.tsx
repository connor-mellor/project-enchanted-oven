import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav>
            <a href="/project-enchanted-oven">
                <div className={styles.img_container}>
                    <img src="maries-c&b-logo.jpg" alt="company logo of white bakers pouch with blue love heart" loading="lazy" />
                </div>
            </a>
        </nav>
    )
}

export default Navigation;