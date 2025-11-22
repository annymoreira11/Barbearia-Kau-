import styles from "./Gallery.module.css";


export default function Gallery() {
  return (
    <section id="galeria" className={styles.gallery}>
      <h2>Galeria</h2>

      <div className={styles.grid}>
  <div className={styles.card} style={{ backgroundImage: "url(/image1.png)" }}></div>
  <div className={styles.card} style={{ backgroundImage: "url(/image2.png)" }}></div>
  <div className={styles.card} style={{ backgroundImage: "url(/image3.png)" }}></div>
  <div className={styles.card} style={{ backgroundImage: "url(/image4.png)" }}></div>
</div>

    </section>
  );
}
