import styles from "./Hero.module.css";
export default function Hero() {
return (
<section className={styles.hero}>
<h2>Barbearia raiz, corte monstro.</h2>
<p>Aqui é atenção total no cliente.</p>
<a className={styles.button} href="https://wa.me/553181082641" target="_blank">Agendar horário</a>
</section>
);
}