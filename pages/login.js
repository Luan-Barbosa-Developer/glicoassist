import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.body}>
      <div className={styles.loginContainer}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>GlicoAssist</h1>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.loginBox}>
            <h2>Login</h2>
            <form className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" required />
              </div>
              <button type="submit" className={styles.submitButton}>Entrar</button>
            </form>
            <p className={styles.signupLink}>
              Não tem uma conta? <Link href="/signup">Cadastre-se</Link>
            </p>
          </div>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2023 GlicoAssist. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}