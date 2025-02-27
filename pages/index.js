import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.App}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>GlicoAssist</h1>
          </div>
          <nav className={styles.nav}>
          <button className={styles.loginButton} onClick={() => window.location.href = '/login'}>
              Login
          </button>
          </nav>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>Bem-vindo ao GlicoAssist</h2>
            <p className={styles.heroText}>
              Sua plataforma inteligente para o monitoramento e controle dos níveis de glicose.
              Cuide da sua saúde de forma simples, segura e eficiente.
            </p>
            <button className={styles.ctaButton} onClick={() => window.location.href = '/login'}>
              Comece Agora
            </button>
          </div>
        </section>

        <section className={styles.featuresSection}>
          <div className={styles.featureCard}>
            <h3>Monitoramento em Tempo Real</h3>
            <p>Acompanhe seus níveis de glicose de forma contínua e receba alertas personalizados.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Relatórios Detalhados</h3>
            <p>Gere relatórios completos para compartilhar com seu médico e tomar decisões informadas.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Interface Intuitiva</h3>
            <p>Design moderno e fácil de usar, pensado para sua comodidade.</p>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2023 GlicoAssist. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}