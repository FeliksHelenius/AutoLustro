import { Link } from 'react-router'
import {
  Button,
  Link as FluentLink,
  Title3,
  Body1,
  Caption1,
  mergeClasses,
} from '@fluentui/react-components'
import {
  VehicleCarRegular,
  DocumentTextRegular,
  ShieldCheckmarkRegular,
  SparkleRegular,
} from '@fluentui/react-icons'
import { useStartPageClasses } from './StartPage.style'
import fullLogoUrl from '../../assets/full-logo.png'
import smallLogoUrl from '../../assets/small-logo.png'
import rekondVideoUrl from '../../assets/rekond-1-1920_1080_30fps.mp4'

export function StartPage() {
  const c = useStartPageClasses()
  return (
    <div className={c.startPage}>
      <header className={c.startHeader}>
        <div className={c.startHeaderInner}>
          <Link to="/" aria-label="AutoLustro startsida">
            <img src={smallLogoUrl} alt="AutoLustro" className={c.startLogo} />
          </Link>
          <nav className={c.startNav}>
            <FluentLink href="#tjanster" appearance="subtle">
              Tjänster
            </FluentLink>
            <FluentLink href="#skydd" appearance="subtle">
              Skydd & hållbarhet
            </FluentLink>
            <Link to="/offert">
              <Button appearance="primary" className={c.startCtaNav}>
                Få offert
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <section className={mergeClasses(c.startHero, c.startHeroVideoWrap)}>
        <video
          className={c.startHeroVideo}
          src={rekondVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div className={c.startHeroOverlay} aria-hidden />
        <div className={mergeClasses(c.startHeroInner, c.startHeroContent)}>
          <p className={c.startHeroTagline}>Bilrekond med hantverk i fokus</p>
          <img src={fullLogoUrl} alt="AutoLustro – Bilvård & Rekond" className={c.startHeroLogo} />
          <p className={c.startHeroDesc}>
            Ett familjeföretag inom bilrekond med över 20 års erfarenhet. Vi tar hand om hela bilens yttre och inre – från vardaglig tvätt till avancerad rekond som återställer djup glans och ett fräscht intryck.
          </p>
          <p className={c.startHeroMethods}>
            Beprövade metoder och förstaklassiga, miljövänliga medel. När det krävs använder vi oscillerande och roterande teknik inklusive kontrollerad värme med polertrissan för att effektivt reducera repor och ge lacken maximal klarhet.
          </p>
          <Link to="/offert">
            <Button
              appearance="primary"
              size="large"
              className={c.startCta}
              icon={<DocumentTextRegular />}
            >
              Få en offert
            </Button>
          </Link>
        </div>
      </section>

      <section id="tjanster" className={c.startSection}>
        <div className={c.startSectionInner}>
          <Title3 as="h2" className={c.startSectionTitle}>
            <VehicleCarRegular className={c.startSectionIcon} />
            Tjänster
          </Title3>
          <ul className={c.startServiceList}>
            <li className={c.startServiceListItem}>Bilvård och rekond (utvändigt och invändigt)</li>
            <li className={c.startServiceListItem}>Tvätt – skonsam men effektiv</li>
            <li className={c.startServiceListItem}>Lackskydd och försegling</li>
            <li className={c.startServiceListItem}>Skräddarsydd polering efter bilens skick och målbild</li>
            <li className={c.startServiceListItem}>Sanering och djuprengöring</li>
          </ul>
        </div>
      </section>

      <section id="skydd" className={c.startSection}>
        <div className={c.startSectionInner}>
          <Title3 as="h2" className={c.startSectionTitle}>
            <ShieldCheckmarkRegular className={c.startSectionIcon} />
            Skydd och hållbarhet
          </Title3>
          <Body1 as="p" className={c.startProtectionIntro}>
            Vi erbjuder både traditionellt vax och mer långvarig försegling:
          </Body1>
          <ul className={c.startProtectionList}>
            <li className={c.startProtectionListItem}><strong>Vax</strong> – hållbarhet cirka 3–6 månader</li>
            <li className={c.startProtectionListItem}><strong>Lackskydd/försegling</strong> – hållbarhet cirka 12–18 månader</li>
          </ul>
          <Caption1 as="p" className={c.startProtectionNote}>
            Foliering ingår inte i dagsläget men är planerat att erbjudas längre fram.
          </Caption1>
        </div>
      </section>

      <section className={mergeClasses(c.startSection, c.startCtaSection)}>
        <div className={mergeClasses(c.startSectionInner, c.startSectionInnerCta)}>
          <Title3 as="h2" className={c.startSectionTitle}>
            Redo att ge din bil vården den förtjänar?
          </Title3>
          <Body1 as="p" className={c.startCtaDesc}>
            Begär en offert – antingen via mejl eller vårt AI-stödda formulär som ger dig en bra första bild av kostnaden.
          </Body1>
          <Link to="/offert">
            <Button
              appearance="primary"
              size="large"
              className={mergeClasses(c.startCta, c.startCtaLarge)}
              icon={<SparkleRegular />}
            >
              Få offert
            </Button>
          </Link>
        </div>
      </section>

      <footer className={c.startFooter}>
        <div className={c.startFooterInner}>
          <img src={smallLogoUrl} alt="AutoLustro" className={c.startFooterLogo} />
          <Caption1 as="p" className={c.startFooterLegal}>
            Offert och pris bekräftas alltid innan arbete påbörjas. Personuppgifter hanteras enligt GDPR.
          </Caption1>
        </div>
      </footer>
    </div>
  )
}
