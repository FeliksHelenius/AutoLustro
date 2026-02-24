import { Link } from 'react-router'
import {
  Button,
  Link as FluentLink,
  Title3,
  Body1,
  Caption1,
} from '@fluentui/react-components'
import {
  VehicleCarRegular,
  DocumentTextRegular,
  ShieldCheckmarkRegular,
  SparkleRegular,
} from '@fluentui/react-icons'
import './StartPage.css'

export function StartPage() {
  return (
    <div className="start-page">
      <header className="start-header">
        <div className="start-header-inner">
          <span className="start-logo">AutoLustro</span>
          <nav className="start-nav">
            <FluentLink href="#tjanster" appearance="subtle">
              Tjänster
            </FluentLink>
            <FluentLink href="#skydd" appearance="subtle">
              Skydd & hållbarhet
            </FluentLink>
            <Link to="/offert">
              <Button appearance="primary" className="start-cta-nav">
                Få offert
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className="start-hero">
        <div className="start-hero-inner">
          <p className="start-hero-tagline">Bilrekond med hantverk i fokus</p>
          <h1 className="start-hero-title">AutoLustro</h1>
          <p className="start-hero-desc">
            Ett familjeföretag inom bilrekond med över 20 års erfarenhet. Vi tar hand om hela bilens yttre och inre – från vardaglig tvätt till avancerad rekond som återställer djup glans och ett fräscht intryck.
          </p>
          <p className="start-hero-methods">
            Beprövade metoder och förstaklassiga, miljövänliga medel. När det krävs använder vi oscillerande och roterande teknik inklusive kontrollerad värme med polertrissan för att effektivt reducera repor och ge lacken maximal klarhet.
          </p>
          <Link to="/offert">
            <Button
              appearance="primary"
              size="large"
              className="start-cta"
              icon={<DocumentTextRegular />}
            >
              Få en offert
            </Button>
          </Link>
        </div>
      </section>

      <section id="tjanster" className="start-section start-services">
        <div className="start-section-inner">
          <Title3 as="h2" className="start-section-title">
            <VehicleCarRegular className="start-section-icon" />
            Tjänster
          </Title3>
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
          <Title3 as="h2" className="start-section-title">
            <ShieldCheckmarkRegular className="start-section-icon" />
            Skydd och hållbarhet
          </Title3>
          <Body1 as="p" className="start-protection-intro">
            Vi erbjuder både traditionellt vax och mer långvarig försegling:
          </Body1>
          <ul className="start-protection-list">
            <li><strong>Vax</strong> – hållbarhet cirka 3–6 månader</li>
            <li><strong>Lackskydd/försegling</strong> – hållbarhet cirka 12–18 månader</li>
          </ul>
          <Caption1 as="p" className="start-protection-note">
            Foliering ingår inte i dagsläget men är planerat att erbjudas längre fram.
          </Caption1>
        </div>
      </section>

      <section className="start-section start-cta-section">
        <div className="start-section-inner">
          <Title3 as="h2" className="start-section-title">
            Redo att ge din bil vården den förtjänar?
          </Title3>
          <Body1 as="p" className="start-cta-desc">
            Begär en offert – antingen via mejl eller vårt AI-stödda formulär som ger dig en bra första bild av kostnaden.
          </Body1>
          <Link to="/offert">
            <Button
              appearance="primary"
              size="large"
              className="start-cta start-cta-large"
              icon={<SparkleRegular />}
            >
              Få offert
            </Button>
          </Link>
        </div>
      </section>

      <footer className="start-footer">
        <div className="start-footer-inner">
          <p className="start-footer-brand">AutoLustro</p>
          <Caption1 as="p" className="start-footer-legal">
            Offert och pris bekräftas alltid innan arbete påbörjas. Personuppgifter hanteras enligt GDPR.
          </Caption1>
        </div>
      </footer>
    </div>
  )
}
