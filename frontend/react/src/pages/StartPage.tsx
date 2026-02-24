import { Link } from 'react-router'
import './StartPage.css'

export function StartPage() {
  return (
    <div className="start-page">
      <header className="start-header">
        <div className="start-header-inner">
          <span className="start-logo">AutoLustro</span>
          <nav className="start-nav">
            <a href="#tjanster">Tjänster</a>
            <a href="#skydd">Skydd & hållbarhet</a>
            <Link to="/offert" className="start-cta-nav">
              Få offert
            </Link>
          </nav>
        </div>
      </header>

      <section className="start-hero">
        <div className="start-hero-inner">
          <p className="start-hero-tagline">Bilrekond med hantverk i fokus</p>
          <h1 className="start-hero-title">
            AutoLustro
          </h1>
          <p className="start-hero-desc">
            Ett familjeföretag inom bilrekond med över 20 års erfarenhet. Vi tar hand om hela bilens yttre och inre – från vardaglig tvätt till avancerad rekond som återställer djup glans och ett fräscht intryck.
          </p>
          <p className="start-hero-methods">
            Beprövade metoder och förstaklassiga, miljövänliga medel. När det krävs använder vi oscillerande och roterande teknik inklusive kontrollerad värme med polertrissan för att effektivt reducera repor och ge lacken maximal klarhet.
          </p>
          <Link to="/offert" className="start-cta">
            Få en offert
          </Link>
        </div>
      </section>

      <section id="tjanster" className="start-section start-services">
        <div className="start-section-inner">
          <h2 className="start-section-title">Tjänster</h2>
          <ul className="start-service-list">
            <li>Bilvård och rekond (utvändigt och invändigt)</li>
            <li>Tvätt – skonsam men effektiv</li>
            <li>Lackskydd och försegling</li>
            <li>Skräddarsydd polering efter bilens skick och målbild</li>
            <li>Sanering och djuprengöring</li>
          </ul>
        </div>
      </section>

      <section id="skydd" className="start-section start-protection">
        <div className="start-section-inner">
          <h2 className="start-section-title">Skydd och hållbarhet</h2>
          <p className="start-protection-intro">
            Vi erbjuder både traditionellt vax och mer långvarig försegling:
          </p>
          <ul className="start-protection-list">
            <li><strong>Vax</strong> – hållbarhet cirka 3–6 månader</li>
            <li><strong>Lackskydd/försegling</strong> – hållbarhet cirka 12–18 månader</li>
          </ul>
          <p className="start-protection-note">
            Foliering ingår inte i dagsläget men är planerat att erbjudas längre fram.
          </p>
        </div>
      </section>

      <section className="start-section start-cta-section">
        <div className="start-section-inner">
          <h2 className="start-section-title">Redo att ge din bil vården den förtjänar?</h2>
          <p className="start-cta-desc">
            Begär en offert – antingen via mejl eller vårt AI-stödda formulär som ger dig en bra första bild av kostnaden.
          </p>
          <Link to="/offert" className="start-cta start-cta-large">
            Få offert
          </Link>
        </div>
      </section>

      <footer className="start-footer">
        <div className="start-footer-inner">
          <p className="start-footer-brand">AutoLustro</p>
          <p className="start-footer-legal">
            Offert och pris bekräftas alltid innan arbete påbörjas. Personuppgifter hanteras enligt GDPR.
          </p>
        </div>
      </footer>
    </div>
  )
}
