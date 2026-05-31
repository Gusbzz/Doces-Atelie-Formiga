import { useState } from "react";
import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import linhaRoxaBaixo from "../assets/LandingPage/ondas_roxas_baixo.png";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.header}>
            <div className={styles.banner}>
                <p> Entregas em até 24 horas </p>
            </div>
            
            <div className={styles.div}>
                <Link to={"/"} className={styles.logo}> Doces Ateliê Formiga </Link>
                
                <div className={styles.botoes}>
                    <Link to={"/"} className={styles.botao}> Pedidos de Emergência </Link>
                    <Link to={"/Login"} className={styles.botao}> Entrar/Cadastrar </Link>
                </div>

                <button className={styles.hamburguer} onClick={toggleMenu} aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <nav className={styles.nav}>
                <Link to={"/Pagina_Fatias"} className={styles.links_nav}> FATIAS </Link>
                <Link to={"/Pagina_ProntaEntrega"} className={styles.links_nav}> PRONTA ENTREGA </Link>
                <Link to={"/"} className={styles.links_nav}> KIT FESTA </Link>
                <Link to={"/"} className={styles.links_nav}> BOLOS DE POTE </Link>
                <Link to={"/"} className={styles.links_nav}> DOCES </Link>
            </nav>

            <div className={`${styles.menuMobileContainer} ${menuAberto ? styles.menuAberto : ""}`}>
                <button className={styles.botaoFechar} onClick={toggleMenu} aria-label="Fechar menu">
                    &times;
                </button>

                <div className={styles.botoesMobile}>
                    <Link to={"/"} className={styles.botaoMobile} onClick={toggleMenu}> Pedidos de Emergência </Link>
                    <Link to={"/Login"} className={styles.botaoMobile} onClick={toggleMenu}> Entrar/Cadastrar </Link>
                </div>

                <nav className={styles.navMobile}>
                    <Link to={"/Pagina_Fatias"} className={styles.links_navMobile} onClick={toggleMenu}> FATIAS </Link>
                    <Link to={"/Pagina_ProntaEntrega"} className={styles.links_navMobile} onClick={toggleMenu}> PRONTA ENTREGA </Link>
                    <Link to={"/"} className={styles.links_navMobile} onClick={toggleMenu}> KIT FESTA </Link>
                    <Link to={"/"} className={styles.links_navMobile} onClick={toggleMenu}> BOLOS DE POTE </Link>
                    <Link to={"/"} className={styles.links_navMobile} onClick={toggleMenu}> DOCES </Link>
                </nav>
            </div>

            <img src={linhaRoxaBaixo} className={styles.linhaRoxaBaixo} alt="Linha decorativa" />
        </header>
    );
}

export default Header;