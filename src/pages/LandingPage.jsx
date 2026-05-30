import React, { useState } from 'react';
import styles from "../css/LandingPage.module.css";
import { Link } from "react-router-dom";
import imagemHomepage from "../assets/LandingPage/image_homepage.png";
import imagemPamela from "../assets/LandingPage/pamela.png";
import fundoPamela from "../assets/LandingPage/fundo_pamela.png";
import linhaRoxa from "../assets/LandingPage/linha_roxa.png";
import whatsLogo from "../assets/LandingPage/whatsapp.png";
import whatsLogoHover from "../assets/LandingPage/whatsapp_preto.png";
import instaLogo from "../assets/LandingPage/instagram.png";
import instaLogoHover from "../assets/LandingPage/instagram_preto.png";
import ondasCima from "../assets/LandingPage/ondas_roxas_cima.png";
import fatias from "../assets/LandingPage/fatias.png";
import bolosProntaEntrega from "../assets/LandingPage/bolo_entrega.png";
import kitFesta from "../assets/LandingPage/kit_festa.png";
import boloPote from "../assets/LandingPage/bolo_pote.png";
import doces from "../assets/LandingPage/doces.png";
import ondasBaixo from "../assets/LandingPage/ondas_roxas_baixo.png";
import boloPoteMaracuja from "../assets/LandingPage/bolo_pote_maracuja.png";
import cxDoces12 from "../assets/LandingPage/caixa_doces_12.png";
import fatiaKidBueno from "../assets/LandingPage/fatia_kid_bueno.png";
import boloPersonalizado from "../assets/LandingPage/bolo_personalizado.png";

function LandingPage() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    ideia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const numeroWhatsapp = "5511999999999"; 
    const mensagem = `Olá! Gostaria de um orçamento para um bolo personalizado:\n\n*Nome:* ${formData.nome}\n*Data de recebimento:* ${formData.data}\n*Ideia:* ${formData.ideia}`;
    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <main className={styles.main}>
      <section className={styles.homepage}>
        <div className={styles.cont_imageHomepage}>
          <img src={imagemHomepage} alt="Banner Inicial" />
        </div>
      </section>
      
      <section className={styles.sobre}>
        <div className={styles.cont1}>
          <div className={styles.container}>
            <div className={styles.container_inner}>
              <img className={styles.circle} src={fundoPamela} alt="Fundo" />
              <img className={`${styles.img} ${styles.img1}`} src={imagemPamela} alt="Pamela" />
            </div>
          </div>
          <h2 className={styles.formiga}> "Formiguinha do Pai" </h2>
          <img src={linhaRoxa} alt="Linha divisória decorativa" />
          <h3 className={styles.pamela}> Pamela </h3>
          <p className={styles.confeiteira}> Confeiteira </p>
        </div>
        <div className={styles.cont2}>
          <p className={styles.texto_sobre}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.redes_sociais}>
            <a href="#" className={styles.whatsapp}>
              <img src={whatsLogo} className={styles.logoWhats} alt="WhatsApp" />
              <img src={whatsLogoHover} className={styles.logoWhatsHover} alt="WhatsApp Hover" />
            </a>
            <a href="#" className={styles.instagram}>
              <img src={instaLogo} className={styles.logoInsta} alt="Instagram" />
              <img src={instaLogoHover} className={styles.logoInstaHover} alt="Instagram Hover" />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.nossos_produtos_institucional}>
        <img src={ondasCima} className={styles.ondas} alt="Ondas decorativas superiores" />

        <section className={styles.produtos}>
          <div className={styles.ingredients_grid}>
            <div className={`${styles.ing_card} ${styles.c1}`}>
              <div className={styles.ing_img_wrap}>
                <img src={fatias} className={styles.ing_img} alt="Fatias" />
              </div>
              <div className={styles.ing_num}>— 01</div>
              <div className={styles.ing_name}>FATIAS</div>
              <div className={styles.ing_desc}>Cracked fresh from tropical paradises. Creamy, nutty, obsession-worthy.</div>
            </div>

            <div className={`${styles.ing_card} ${styles.c2}`}>
              <div className={styles.ing_img_wrap}>
                <img src={bolosProntaEntrega} className={styles.ing_img} alt="Bolos Pronta Entrega" />
              </div>
              <div className={styles.ing_num}>— 02</div>
              <div className={styles.ing_name}>BOLOS PRONTA ENTREGA</div>
              <div className={styles.ing_desc}>Plump, antioxidant-packed, peak ripeness. Bold flavor every time.</div>
            </div>

            <div className={`${styles.ing_card} ${styles.c3}`}>
              <div className={styles.ing_img_wrap}>
                <img src={kitFesta} className={styles.ing_img} alt="Kit Festa" />
              </div>
              <div className={styles.ing_num}>— 03</div>
              <div className={styles.ing_name}>KIT FESTA</div>
              <div className={styles.ing_desc}>Naturally sweet & smooth. The gym-bro's secret weapon.</div>
            </div>

            <div className={`${styles.ing_card} ${styles.c4}`}>
              <div className={styles.ing_img_wrap}>
                <img src={boloPote} className={styles.ing_img} alt="Bolos de Pote" />
              </div>
              <div className={styles.ing_num}>— 04</div>
              <div className={styles.ing_name}>BOLOS DE POTE</div>
              <div className={styles.ing_desc}>Hand-picked citrus. Bright, invigorating, no cap.</div>
            </div>

            <div className={`${styles.ing_card} ${styles.c5}`}>
              <div className={styles.ing_img_wrap}>
                <img src={doces} className={styles.ing_img} alt="Doces" />
              </div>
              <div className={styles.ing_num}>— 05</div>
              <div className={styles.ing_name}>DOCES</div>
              <div className={styles.ing_desc}>Sun-ripened. The GOAT fruit. It's giving summer forever.</div>
            </div>
          </div>
        </section>
        <img src={ondasBaixo} className={styles.ondas} alt="Ondas decorativas inferiores" />
      </section>

      <section className={styles.promocoes_semana}>
        <h2 className={styles.titulo_produtos}>
          Confira nossas <span className={styles.destaque_roxo}>Promoções</span> da Semana
        </h2>

        <div className={styles.produtos_grid}>
          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={boloPoteMaracuja} alt="Bolo de Pote Maracujá" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Bolo de Pote Maracujá</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>

          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={cxDoces12} alt="Cx Docinhos 12 Unidades" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Cx Docinhos 12 Unidades</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>

          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={fatiaKidBueno} alt="Fatia de Kinder Bueno" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Fatia de Kinder Bueno</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.dividir}>
        <img src={ondasCima} className={styles.ondas} alt="Ondas decorativas superiores" />

        <section className={styles.dividir_css}>
          <h2 className={styles.titulo_produtos}>Para Dividir</h2>

          <div className={styles.produtos_grid}>
            <div className={styles.card_produto}>
              <div className={styles.imagem_container}>
                <img src={boloPoteMaracuja} alt="Bolo de Pote Maracujá" />
              </div>
              <div className={styles.info_produto}>
                <h3 className={styles.titulo_produto}>Bolo de Pote Maracujá</h3>
                <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                <p className={styles.preco_produto}>R$ 00,00</p>
              </div>
              <div className={styles.botoes_container}>
                <a href="#" className={styles.botao_comprar}>Comprar</a>
                <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
              </div>
            </div>

            <div className={styles.card_produto}>
              <div className={styles.imagem_container}>
                <img src={cxDoces12} alt="Cx Docinhos 12 Unidades" />
              </div>
              <div className={styles.info_produto}>
                <h3 className={styles.titulo_produto}>Cx Docinhos 12 Unidades</h3>
                <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                <p className={styles.preco_produto}>R$ 00,00</p>
              </div>
              <div className={styles.botoes_container}>
                <a href="#" className={styles.botao_comprar}>Comprar</a>
                <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
              </div>
            </div>

            <div className={styles.card_produto}>
              <div className={styles.imagem_container}>
                <img src={fatiaKidBueno} alt="Fatia de Kinder Bueno" />
              </div>
              <div className={styles.info_produto}>
                <h3 className={styles.titulo_produto}>Fatia de Kinder Bueno</h3>
                <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                <p className={styles.preco_produto}>R$ 00,00</p>
              </div>
              <div className={styles.botoes_container}>
                <a href="#" className={styles.botao_comprar}>Comprar</a>
                <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
              </div>
            </div>
          </div>
        </section>
        <img src={ondasBaixo} className={styles.ondas} alt="Ondas decorativas inferiores" />
      </section>

      <section className={styles.mais_pedidos}>
        <h2 className={styles.titulo_produtos}>Os mais Pedidos</h2>

        <div className={styles.produtos_grid}>
          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={boloPoteMaracuja} alt="Bolo de Pote Maracujá" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Bolo de Pote Maracujá</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>

          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={cxDoces12} alt="Cx Docinhos 12 Unidades" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Cx Docinhos 12 Unidades</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>

          <div className={styles.card_produto}>
            <div className={styles.imagem_container}>
              <img src={fatiaKidBueno} alt="Fatia de Kinder Bueno" />
            </div>
            <div className={styles.info_produto}>
              <h3 className={styles.titulo_produto}>Fatia de Kinder Bueno</h3>
              <p className={styles.descricao_produto}>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
              <p className={styles.preco_produto}>R$ 00,00</p>
            </div>
            <div className={styles.botoes_container}>
              <a href="#" className={styles.botao_comprar}>Comprar</a>
              <Link to={"/"} className={styles.botao_carrinho}>Carrinho</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bolo_personalizado}>
        <div className={styles.container_titulo_personalizado}>
          <h2 className={styles.titulo_produtos}>
            Quer um Bolo <span className={styles.destaque_roxo}>Personalizado?</span>
          </h2>
          <p className={styles.subtitulo_personalizado}>Solicite um orçamento!</p>
        </div>

        <div className={styles.card_orcamento}>
          <div className={styles.lado_imagem}>
            <img src={boloPersonalizado} alt="Bolo personalizado decorado" />
          </div>

          <div className={styles.lado_formulario}>
            <form onSubmit={handleWhatsAppSend}>
              <div className={styles.grupo_input}>
                <input 
                  type="text" 
                  name="nome"
                  placeholder="Nome" 
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.grupo_input}>
                <input 
                  type="text" 
                  name="data"
                  placeholder="Data de recebimento" 
                  value={formData.data}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.grupo_input}>
                <textarea 
                  name="ideia"
                  placeholder="Descreva sua ideia" 
                  rows="4"
                  value={formData.ideia}
                  onChange={handleChange}
                  required
                  className={styles.textarea_fixa}
                ></textarea>
              </div>

              <button type="submit" className={styles.botao_enviar}>
                Enviar pelo Whatsapp
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;