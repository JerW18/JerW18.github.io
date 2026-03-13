/**
 * socials.js — Single source of truth for social / contact links.
 * Update this file and all components (Hero, Navbar, Footer, Contact)
 * will reflect the change automatically.
 */
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

/** Used in Hero and Footer — icon + href + accessible label */
export const socials = [
  { icon: FiGithub,   href: 'https://github.com/JerW18',                       label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jeremy-cerwin-wang/', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:jeremywang512@gmail.com',                  label: 'Email'    },
]

/** Used in Contact section — includes display value and location entry */
export const contactItems = [
  {
    icon:  FiMail,
    label: 'Email',
    value: 'jeremywang512@gmail.com',
    href:  'mailto:jeremywang512@gmail.com',
  },
  {
    icon:  FiGithub,
    label: 'GitHub',
    value: 'github.com/JerW18',
    href:  'https://github.com/JerW18',
  },
  {
    icon:  FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jeremy-cerwin-wang',
    href:  'https://www.linkedin.com/in/jeremy-cerwin-wang/',
  },
  {
    icon:  FiMapPin,
    label: 'Location',
    value: 'Hong Kong / Manila',
    href:  null,
  },
]
