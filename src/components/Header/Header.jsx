import styles from '../Header/Header.module.css'


export default function Header() {
return (
<header className={styles.header}>
<div className={styles.logoArea}>
<img src="/logo.png" alt="Logo da Barbearia" className={styles.logoImg} />
</div>
<nav className={styles.nav}>
<a href="#servicos">Serviços</a>
<a href="#galeria">Galeria</a>
<a href="#contato">Contato</a>
</nav>
</header>
);
}