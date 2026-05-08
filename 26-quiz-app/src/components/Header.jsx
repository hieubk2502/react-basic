import logoImg from "../assets/avatar-01.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={logoImg} alt="Avatar" className={styles.logo} />
      <h1 className={styles.title}>Quiz</h1>
    </div>
  );
}
