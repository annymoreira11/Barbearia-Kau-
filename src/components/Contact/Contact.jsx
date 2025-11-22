import styles from "./Contact.module.css";
export default function Contact() {
return (
<section id="contato" className={styles.contact}>
<h2>Contato</h2>
<p>Endereço: Rua São Geraldo, 299 - Centro, Crucilândia - MG</p>
<a className={styles.button} href="https://wa.me/553181082641" target="_blank">Chamar no WhatsApp</a>
</section>
);
}