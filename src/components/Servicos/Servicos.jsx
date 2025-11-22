import styles from "./Servicos.module.css";

export default function Services() {
  return (
    <div className={styles.servicos}>
      <h2 id="servicos">Serviços</h2>
      <ul>
        <li>Corte disfarçado — R$25,00</li>
        <li>Corte social — R$23,00</li>
        <li>Barba — R$15,00</li>
        <li>Bigode — R$05,00</li>
        <li>Sobrancelha — R$05,00</li>
        <li>Pezinho — R$05,00</li>
        <li>Pigmentação — R$15,00</li>
        <li>Luzes — R$40,00</li>
        <li>Platinado — R$70,00</li>
      </ul>

      <p style={{ fontSize: "12px", marginTop: "10px" }}>
        (Sobrancelha inclusa no corte)
      </p>
    </div>
  );
}

