import styles from "./styles.module.css";
export function HomeCard() {
  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div className={styles.card}>
        <h1>Olá, Bem-vindo(a)!</h1>
        <h2>Somos o Núcleo Cyber Brasil NCB!</h2>
        <p> Ficamos muito felizes com o seu interesse.</p>
      </div>
    </div>
  );
}
