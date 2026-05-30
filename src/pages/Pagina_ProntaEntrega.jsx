import styles from '../css/Pagina_ProntaEntrega.module.css'
import OndasRoxasCima from '../assets/LandingPage/ondas_roxas_cima.png'
import OndasRoxasBaixo from '../assets/LandingPage/ondas_roxas_baixo.png'
import BoloPronto from '../assets/LandingPage/bolo_personalizado.png'
import Banner from '../assets/LandingPage/banner.jpg'

function Pagina_ProntaEntrega(){
    return (
        <main className={styles.corpo_bolos}>
            <section>
                <img src={Banner} className={styles.foto} />
            </section>

                <img src={OndasRoxasCima} className={styles.ondas_cima} />

            <div className={styles.corpo_roxo}>
                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
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
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
                    <p>Fatia de Kinder Bueno com massa de chocolate, recheio de kinder e cobertura de ganache de chocolate</p>
                    <h1>R$ 00,00</h1>
                    <div className={styles.caixa_botoes}>
                        <a href='#' className={styles.botao_comprar_roxo} >Comprar</a>
                        <a href='#' className={styles.botao_carrinho} >Carrinho</a>
                    </div>
                </div>

                <div>
                    <img src={BoloPronto} className={styles.foto_bolo} />
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

export default Pagina_ProntaEntrega