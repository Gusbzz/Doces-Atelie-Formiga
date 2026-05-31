import styles from '../css/Pagina_Kit.module.css'
import OndasRoxasCima from '../assets/LandingPage/ondas_roxas_cima.png'
import OndasRoxasBaixo from '../assets/LandingPage/ondas_roxas_baixo.png'
import Banner from '../assets/LandingPage/banner.jpg'
import Kit from '../assets/LandingPage/kit.png'
import Footer from '../components/Footer'

function Pagina_Kit(){
    return (
        <main className={styles.corpo_kit}>
            <section>
                <img src={Banner} className={styles.foto} />
            </section>

                <img src={OndasRoxasCima} className={styles.ondas_cima} />

            <div className={styles.corpo_roxo}>
                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>
            </div>

            <img src={OndasRoxasBaixo} className={styles.ondas_baixa} />

            <div className={styles.corpo_branco}>
                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={Kit} className={styles.foto_kit} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>
            </div>

        </main>

    )
}

export default Pagina_Kit