import styles from '../styles/Signup.module.css';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className={styles.body}>
      <div className={styles.signupContainer}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>GlicoAssist</h1>
          </div>
        </header>

        <main className={styles.mainContent}>
          <div className={styles.signupBox}>
            <h2>Cadastro</h2>
            <form className={styles.signupForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Digite seu nome" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirme sua Senha</label>
                <input type="password" id="confirmPassword" placeholder="Confirme sua senha" required />
              </div>
              <button type="submit" className={styles.submitButton}>Cadastrar</button>
            </form>
            <p className={styles.loginLink}>
              Já tem uma conta? <Link href="/login">Faça login</Link>
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