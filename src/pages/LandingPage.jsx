import styles from "../css/LandingPage.module.css"
import imagemHomepage from "../assets/LandingPage/image_homepage.png"

function LandingPage() {
  return (
    <main className={styles.main}>
      <section className={styles.homepage}>
        <div className={styles.cont_imageHomepage}>
          <img src={imagemHomepage} />
        </div>
      </section>

    </main>
  );
}

export default LandingPage;