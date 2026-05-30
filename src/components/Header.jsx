import styles from "../css/Header.module.css"
import { Link } from "react-router-dom";
import linhaRoxaBaixo from "../assets/LandingPage/ondas_roxas_baixo.png"

function Header() {
    return(
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
            </div>
            <nav className={styles.nav}>
                <Link to={"/Pagina_Fatias"} className={styles.links_nav}> FATIAS </Link>
                <Link to={"/Pagina_ProntaEntrega"} className={styles.links_nav}> PRONTA ENTREGA </Link>
                <Link to={"/"} className={styles.links_nav}> KIT FESTA </Link>
                <Link to={"/"} className={styles.links_nav}> BOLO DE POTE </Link>
                <Link to={"/"} className={styles.links_nav}> DOCES </Link>
            </nav>
            <img src={linhaRoxaBaixo} className={styles.linhaRoxaBaixo} />
        </header>
    );
}

export default Header;