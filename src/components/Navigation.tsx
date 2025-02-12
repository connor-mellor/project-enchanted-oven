import bakeryLogo from '../assets/maries-c&b-logo.jpg'

function Navigation() {

    return (
        <nav>
            <a href="/project-enchanted-oven">
                <div className="img-container">
                    <img src={bakeryLogo} alt="log of cake icing" loading="lazy" />
                </div>
            </a>
        </nav>
    )
}

export default Navigation;