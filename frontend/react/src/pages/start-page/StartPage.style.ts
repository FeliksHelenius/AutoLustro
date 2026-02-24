/** @format */

import { makeStyles, tokens, shorthands } from '@fluentui/react-components'

const serifFont = "'Cormorant Garamond', Georgia, serif"

export const useStartPageClasses = makeStyles({
  startPage: {
    fontFamily: tokens.fontFamilyBase,
    background: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    minHeight: '100vh',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  startHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: tokens.colorNeutralBackground1,
    backdropFilter: 'saturate(180%) blur(12px)',
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke1),
  },
  startHeaderInner: {
    maxWidth: '1100px',
    margin: '0 auto',
    ...shorthands.padding('1rem', '1.5rem'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    '@media (max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  startBrandBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  startLogo: {
    display: 'block',
    height: '2.25rem',
    width: 'auto',
    objectFit: 'contain',
  },
  startLogoText: {
    fontFamily: serifFont,
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    color: tokens.colorNeutralForeground1,
  },
  startHeroVideoWrap: {
    position: 'relative',
    overflow: 'hidden',
    color: tokens.colorNeutralForegroundInverted,
  },
  startHeroVideo: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  },
  startHeroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 100%)',
    pointerEvents: 'none',
  },
  startHeroContent: {
    position: 'relative',
    zIndex: 1,
  },
  startHeroLogo: {
    display: 'block',
    width: '100%',
    maxWidth: '420px',
    height: 'auto',
    margin: '0 auto 1.5rem',
    objectFit: 'contain',
  },
  startNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    '@media (max-width: 640px)': {
      width: '100%',
    },
    '& a': {
      color: tokens.colorNeutralForeground2,
      textDecoration: 'none',
      fontSize: '0.9375rem',
      fontWeight: 500,
      transitionProperty: 'color',
      transitionDuration: '0.2s',
      ':hover': {
        color: tokens.colorNeutralForeground1,
      },
    },
  },
  startCtaNav: {
    marginLeft: '0.25rem',
    '@media (max-width: 640px)': {
      marginLeft: 0,
    },
  },
  startHero: {
    background: tokens.colorNeutralBackgroundInverted,
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('4rem', '1.5rem', '5rem'),
    '@media (max-width: 640px)': {
      ...shorthands.padding('3rem', '1rem', '4rem'),
    },
  },
  startHeroInner: {
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
  },
  startHeroTagline: {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: tokens.colorNeutralForegroundInverted2,
    margin: '0 0 0.5rem',
  },
  startHeroTitle: {
    fontFamily: serifFont,
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 600,
    margin: '0 0 1.5rem',
    letterSpacing: '0.02em',
  },
  startHeroDesc: {
    fontSize: '1.0625rem',
    lineHeight: 1.7,
    color: tokens.colorNeutralForegroundInverted,
    margin: '0 0 1rem',
  },
  startHeroMethods: {
    fontSize: '1.0625rem',
    lineHeight: 1.7,
    color: tokens.colorNeutralForegroundInverted2,
    margin: '0 0 2rem',
  },
  startCta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  startSection: {
    ...shorthands.padding('3.5rem', '1.5rem'),
    maxWidth: '1100px',
    margin: '0 auto',
    '@media (max-width: 640px)': {
      ...shorthands.padding('2.5rem', '1rem'),
    },
  },
  startSectionInner: {
    maxWidth: '640px',
  },
  startSectionInnerCta: {
    maxWidth: '520px',
    margin: '0 auto',
  },
  startSectionTitle: {
    fontFamily: serifFont,
    fontSize: '1.75rem',
    fontWeight: 600,
    margin: '0 0 1.25rem',
    color: tokens.colorNeutralForeground1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  startSectionIcon: {
    fontSize: '1.25rem',
    color: tokens.colorBrandForeground1,
  },
  startServiceList: {
    listStyle: 'none',
    ...shorthands.padding(0),
    ...shorthands.margin(0),
  },
  startServiceListItem: {
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '0.75rem',
    lineHeight: 1.6,
    color: tokens.colorNeutralForeground2,
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '0.55em',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: tokens.colorBrandForeground1,
    },
  },
  startProtectionList: {
    listStyle: 'none',
    ...shorthands.padding(0),
    ...shorthands.margin(0),
  },
  startProtectionListItem: {
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '0.75rem',
    lineHeight: 1.6,
    color: tokens.colorNeutralForeground2,
    '& strong': {
      color: tokens.colorNeutralForeground1,
    },
    '::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '0.55em',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: tokens.colorBrandForeground1,
    },
  },
  startProtectionIntro: {
    margin: '0 0 0.75rem',
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.6,
  },
  startProtectionNote: {
    margin: '1.25rem 0 0',
    fontSize: '0.9375rem',
    color: tokens.colorNeutralForeground2,
    fontStyle: 'italic',
  },
  startCtaSection: {
    background: tokens.colorNeutralBackground2,
    ...shorthands.borderTop('1px', 'solid', tokens.colorNeutralStroke1),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke1),
    textAlign: 'center',
  },
  startCtaDesc: {
    margin: '0 0 1.5rem',
    color: tokens.colorNeutralForeground2,
    lineHeight: 1.6,
  },
  startCtaLarge: {
    ...shorthands.padding('1rem', '2rem'),
    fontSize: '1.0625rem',
  },
  startFooter: {
    ...shorthands.padding('2rem', '1.5rem'),
    background: tokens.colorNeutralBackgroundInverted,
    color: tokens.colorNeutralForegroundInverted2,
    textAlign: 'center',
  },
  startFooterInner: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  startFooterBrand: {
    fontFamily: serifFont,
    fontSize: '1.125rem',
    fontWeight: 600,
    color: tokens.colorNeutralForegroundInverted,
    margin: '0 0 0.5rem',
  },
  startFooterBrandBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
  },
  startFooterLogo: {
    display: 'block',
    height: '1.5rem',
    width: 'auto',
    opacity: 0.9,
  },
  startFooterLogoText: {
    fontFamily: serifFont,
    fontSize: '1.125rem',
    fontWeight: 600,
    color: tokens.colorNeutralForegroundInverted,
  },
  startFooterLegal: {
    fontSize: '0.8125rem',
    margin: 0,
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.5,
  },
})
