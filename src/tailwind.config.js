const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatternsChildren: [/^vgt/, /^vs/, /^vm/, /^editr/, /^mx/, /^dropzone/, /^vue-dropzone/],
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      safelist: [/^h-/, /^w-/]
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  theme: {
    extend: {
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      },
      lineHeight: {
        extraTight: '1.125'
      },
      fontSize: {
        '3xl': '2rem'
      },
      letterSpacing: {
        extraWide: '3px'
      }
    },
    screens: {
      'mob-only': { max: '640px' },
      mob: { max: '1023px' },
      tab: { max: '1023px', min: '640px' },
      xs: { max: '576px' },
      sm: '576px',
      'sm-only': { min: '576px', max: '767px' },
      'sm-max': { max: '767px' },
      // => @media (min-width: 576px) { ... }
      md: '768px',
      'md-only': { min: '768px', max: '991px' },
      'md-max': { max: '991px' },
      // => @media (min-width: 768px) { ... }
      lg: '992px',
      'lg-only': { min: '992px', max: '1199px' },
      'lg-max': { max: '1199px' },
      // => @media (min-width: 992px) { ... }
      xl: '1200px',
      'xl-only': { min: '1200px', max: '1536px' },
      'xl-max': { max: '1536px' },
      // => @media (min-width: 1200px) { ... }
      xxl: '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      'primary-01': {
        default: 'var(--color-primary-01-800)',
        25: 'var(--color-primary-01-25)',
        50: 'var(--color-primary-01-50)',
        75: 'var(--color-primary-01-75)',
        100: 'var(--color-primary-01-100)',
        200: 'var(--color-primary-01-200)',
        300: 'var(--color-primary-01-300)',
        400: 'var(--color-primary-01-400)',
        500: 'var(--color-primary-01-500)',
        600: 'var(--color-primary-01-600)',
        700: 'var(--color-primary-01-700)',
        800: 'var(--color-primary-01-800)',
        900: 'var(--color-primary-01-900)'
      },
      'accent-01': {
        default: 'var(--color-accent-01-400)',
        25: 'var(--color-accent-01-25)',
        50: 'var(--color-accent-01-50)',
        75: 'var(--color-accent-01-75)',
        100: 'var(--color-accent-01-100)',
        200: 'var(--color-accent-01-200)',
        300: 'var(--color-accent-01-300)',
        400: 'var(--color-accent-01-400)',
        500: 'var(--color-accent-01-500)',
        600: 'var(--color-accent-01-600)',
        700: 'var(--color-accent-01-700)',
        800: 'var(--color-accent-01-800)',
        900: 'var(--color-accent-01-900)'
      },
      'accent-02': {
        default: 'var(--color-accent-02-400)',
        25: 'var(--color-accent-02-25)',
        50: 'var(--color-accent-02-50)',
        75: 'var(--color-accent-02-75)',
        100: 'var(--color-accent-02-100)',
        200: 'var(--color-accent-02-200)',
        300: 'var(--color-accent-02-300)',
        400: 'var(--color-accent-02-400)',
        500: 'var(--color-accent-02-500)',
        600: 'var(--color-accent-02-600)',
        700: 'var(--color-accent-02-700)',
        800: 'var(--color-accent-02-800)',
        900: 'var(--color-accent-02-900)'
      },
      'status-01': {
        default: 'var(--color-status-01-800)',
        25: 'var(--color-status-01-25)',
        50: 'var(--color-status-01-50)',
        75: 'var(--color-status-01-75)',
        100: 'var(--color-status-01-100)',
        200: 'var(--color-status-01-200)',
        300: 'var(--color-status-01-300)',
        400: 'var(--color-status-01-400)',
        500: 'var(--color-status-01-500)',
        600: 'var(--color-status-01-600)',
        700: 'var(--color-status-01-700)',
        800: 'var(--color-status-01-800)',
        900: 'var(--color-status-01-900)'
      },
      'status-02': {
        default: 'var(--color-status-02-800)',
        25: 'var(--color-status-02-25)',
        50: 'var(--color-status-02-50)',
        75: 'var(--color-status-02-75)',
        100: 'var(--color-status-02-100)',
        200: 'var(--color-status-02-200)',
        300: 'var(--color-status-02-300)',
        400: 'var(--color-status-02-400)',
        500: 'var(--color-status-02-500)',
        600: 'var(--color-status-02-600)',
        700: 'var(--color-status-02-700)',
        800: 'var(--color-status-02-800)',
        900: 'var(--color-status-02-900)'
      },
      'status-03': {
        default: 'var(--color-status-03-800)',
        25: 'var(--color-status-03-25)',
        50: 'var(--color-status-03-50)',
        75: 'var(--color-status-03-75)',
        100: 'var(--color-status-03-100)',
        200: 'var(--color-status-03-200)',
        300: 'var(--color-status-03-300)',
        400: 'var(--color-status-03-400)',
        500: 'var(--color-status-03-500)',
        600: 'var(--color-status-03-600)',
        700: 'var(--color-status-03-700)',
        800: 'var(--color-status-03-800)',
        900: 'var(--color-status-03-900)'
      },
      'neutral-01': {
        default: 'var(--color-neutral-01-400)',
        0: 'var(--color-neutral-01-0)',
        15: 'var(--color-neutral-01-15)',
        25: 'var(--color-neutral-01-25)',
        50: 'var(--color-neutral-01-50)',
        75: 'var(--color-neutral-01-75)',
        100: 'var(--color-neutral-01-100)',
        200: 'var(--color-neutral-01-200)',
        300: 'var(--color-neutral-01-300)',
        400: 'var(--color-neutral-01-400)',
        500: 'var(--color-neutral-01-500)',
        600: 'var(--color-neutral-01-600)',
        700: 'var(--color-neutral-01-700)',
        800: 'var(--color-neutral-01-800)',
        900: 'var(--color-accent-02-900)'
      },
      'chart-01': {
        default: 'var(--color-chart-01-800)',
        25: 'var(--color-chart-01-25)',
        50: 'var(--color-chart-01-50)',
        75: 'var(--color-chart-01-75)',
        100: 'var(--color-chart-01-100)',
        200: 'var(--color-chart-01-200)',
        300: 'var(--color-chart-01-300)',
        400: 'var(--color-chart-01-400)',
        500: 'var(--color-chart-01-500)',
        600: 'var(--color-chart-01-600)',
        700: 'var(--color-chart-01-700)',
        800: 'var(--color-chart-01-800)',
        900: 'var(--color-chart-01-900)'
      },
      'bg-01': {
        default: 'var(--color-bg-01)'
      },
      'error-01': {
        default: 'var(--color-error-01)'
      },
      'success-01': {
        default: 'var(--color-success-01)'
      },
      'accent-03': {
        200: 'var(--color-accent-03-200)'
      },
      'warning-01': {
        default: 'var(--color-warning-01)'
      },
      'answered-01': {
        default: 'var(--color-answered-01)'
      },
      'sign-in-primary-black': {
        default: 'var(--color-sign-in-primary-black)'
      },
      'sign-in-primary-white': {
        default: 'var(--color-sign-in-primary-white)'
      },
      'sign-in-secondary-salmon': {
        default: 'var(--color-sign-in-secondary-salmon)'
      },
      'sign-in-secondary-eggplant': {
        default: 'var(--color-sign-in-secondary-eggplant)'
      },
      'sign-in-secondary-calypso': {
        default: 'var(--color-sign-in-secondary-calypso)'
      },
      'sign-in-secondary-cello': {
        default: 'var(--color-sign-in-secondary-cello)'
      },
      'sign-in-neutral-alabaster': {
        default: 'var(--color-sign-in-neutral-alabaster)'
      },
      transparent: 'transparent',
      white: 'var(--color-white)',
      black: 'var(--color-black)'
    },
    boxShadow: {
      pink: '0px 2px 9px rgba(255, 102, 102, 0.16)',
      dropdown: '0px 4px 14px rgba(37, 44, 49, 0.16)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'bottom-header': '0px 4px 14px rgba(37, 44, 49, 0.16)'
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      4.5: '1.125rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      default: '3px'
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      body: 'Open Sans, sans-serif',
      title: 'Mr Eaves Modern, sans-serif',
      signInBody1: 'Kumbh Sans, sans-serif',
      signInBody2: 'DM Sans, sans-serif',
      roboto: 'Roboto, sans-serif'
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      30: '30deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '25': '.25',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '75': '.75',
      '80': '.8',
      '90': '.9',
      '100': '1'
    }
  },
  variants: {
    extend: {
      background: ['hover']
    }
  },
  plugins: [
    plugin(function({ addBase, addUtilities, theme }) {
      addBase({
        h1: {
          fontFamily: theme('fontFamily.title'),
          fontSize: theme('fontSize.5xl'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.none')
        },
        h2: {
          fontFamily: theme('fontFamily.title'),
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.none')
        },
        h3: {
          fontFamily: theme('fontFamily.title'),
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.extraTight')
        }
      })
      const customUtilities = {
        '.text-subheading-01': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.normal')
        },
        '.text-subheading-02': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.normal')
        },
        '.text-body-01': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.snug')
        },
        '.text-body-02': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.5')
        },
        '.text-body-03': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.5')
        },
        '.text-tab-01': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.snug'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.extraWide')
        },
        '.text-button-01': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.normal')
        },
        '.text-button-02': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.none')
        },
        '.text-caption-01': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.normal')
        },
        '.text-caption-02': {
          fontFamily: theme('fontFamily.body'),
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.4')
        },
        '.text-sign-in-body-h2': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '45px',
          fontWeight: theme('fontWeight.Bold'),
          lineHeight: '58px'
        },
        '.text-sign-in-h2': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '45px',
          fontWeight: theme('fontWeight.bold'),
          lineHeight: '58px'
        },
        '.text-sign-in-h2-mobile': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '25px',
          fontWeight: theme('fontWeight.bold'),
          lineHeight: '130%'
        },
        '.text-sign-in-h3': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '28px',
          fontWeight: theme('fontWeight.bold'),
          lineHeight: '130%'
        },
        '.text-sign-in-body-01': {
          fontFamily: theme('fontFamily.signInBody2'),
          fontSize: '14px',
          fontWeight: theme('fontWeight.normal'),
          lineHeight: '22px'
        },
        '.text-sign-in-body-02': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '21px',
          fontWeight: theme('fontWeight.normal'),
          lineHeight: '27px'
        },
        '.text-sign-in-body-02-mobile': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '16px',
          fontWeight: theme('fontWeight.normal'),
          lineHeight: '20px'
        },
        '.text-sign-in-body-04': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '14px',
          fontWeight: theme('fontWeight.normal'),
          lineHeight: '22px'
        },
        '.text-sign-in-test-caption-01': {
          fontFamily: theme('fontFamily.signInBody1'),
          fontSize: '16px',
          fontWeight: theme('fontWeight.normal'),
          lineHeight: '22px'
        }
      }
      addUtilities(customUtilities)
    })
  ]
}
