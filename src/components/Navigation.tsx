import bakeryLogo from '../assets/bakery-logo.jpg'

function Navigation() {

    return (
        <nav>
            <a href="/">
                <div className="img-container">
                    <img src={bakeryLogo} alt="log of cake icing" />
                </div>
            </a>
        </nav>
    )
}

export default Navigation;