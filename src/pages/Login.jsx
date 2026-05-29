import { useState } from 'react'
import styles from '../css/Login.module.css'

function Login() {
  const [panel, setPanel] = useState(null)

  return (
    <div className={styles.cotn_principal}>
      <div className={styles.cont_centrar}>

        <div className={styles.cont_login}>

          <div className={styles.cont_back_info}>
          </div>

          <div className={styles.cont_info_log_sign_up}>

            <div className={styles.col_md_login}>
              <div className={styles.cont_ba_opcitiy}>

                <h2>Entrar</h2>

                <p>
                  Se você já possuí uma conta clique no botão abaixo e insira seus dados!
                </p>

                <button
                  className={styles.btn_login}
                  onClick={() => setPanel('login')}
                >
                  Entrar
                </button>

              </div>
            </div>

            <div className={styles.col_md_sign_up}>
              <div className={styles.cont_ba_opcitiy}>

                <h2>Cadastro</h2>

                <p>
                  Se você ainda não possuí cadastro clique no botão abaixo e crie sua conta gratuitamente.
                </p>

                <button
                  className={styles.btn_sign_up}
                  onClick={() => setPanel('signup')}
                >
                  Cadastro
                </button>

              </div>
            </div>

          </div>

          <div
            className={`${styles.cont_forms} ${
              panel === 'login'
                ? styles.cont_forms_active_login
                : panel === 'signup'
                ? styles.cont_forms_active_sign_up
                : styles.cont_forms_hidden
            }`}
          >

            {panel !== null && (
              <button
                className={styles.btn_back}
                onClick={() => setPanel(null)}
              >
                ←
              </button>
            )}

            <div
              className={`${styles.cont_form_login} ${
                panel === 'login' ? styles.active : styles.hidden
              }`}
            >

              <h2>Entrar</h2>

              <input
                type="text"
                placeholder="Email"
              />

              <input
                type="password"
                placeholder="Senha"
              />

              <button className={styles.btn_login}>
                Entrar
              </button>

            </div>

            <div
              className={`${styles.cont_form_sign_up} ${
                panel === 'signup' ? styles.active : styles.hidden
              }`}
            >

              <h2>Cadastro</h2>

              <input
                type="text"
                placeholder="Email"
              />

              <input
                type="text"
                placeholder="Nome de usuário"
              />

              <input
                type="password"
                placeholder="Senha"
              />

              <input
                type="password"
                placeholder="Confirme a Senha"
              />

              <button className={styles.btn_sign_up}>
                Cadastrar
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Login