import styles from "../css/Footer.module.css";
import { Link } from "react-router-dom";
import logoWhats from "../assets/LandingPage/whatsapp.png";
import logoInsta from "../assets/LandingPage/instagram.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logos}>
                <Link to={"/"} className={styles.logo}> Doces Ateliê Formiga </Link>
                <div className={styles.redes_sociais}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={logoWhats} alt="WhatsApp" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={logoInsta} alt="Instagram" />
                </a>
                </div>
            </div>
            <nav className={styles.nav}>
                <div className={styles.botoes}>
                <Link to={"/Pagina_Fatias"} className={styles.links_nav}> FATIAS </Link>
                <Link to={"/"} className={styles.links_nav}> BOLOS DE POTE </Link>
                <Link to={"/"} className={styles.links_nav}> DOCES </Link>
                <Link to={"/Login"} className={styles.links_nav}> CADASTRAR </Link>
                </div>
                <div className={styles.botoes}>
                <Link to={"/Pagina_ProntaEntrega"} className={styles.links_nav}> PRONTA ENTREGA </Link>
                <Link to={"/"} className={styles.links_nav}> KIT FESTA </Link>
                <Link to={"/"} className={styles.links_nav}> PEDIDOS DE EMERGÊNCIA </Link>
                <Link to={"/Login"} className={styles.links_nav}> ENTRAR </Link>
                </div>
            </nav>
            <p className={styles.copy}> ©Copyright. All rights reserved. </p>
        </footer>
    );
}

export default Footer;