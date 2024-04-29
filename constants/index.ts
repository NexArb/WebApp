export const PROJECTS = [
  {
    title: 'Nextarb SOL',
    date: 'OCTOBER 2023',
    image: '/img/project-1.png'
  },
  {
    title: 'Project 2',
    date: '2024',
    image: '/img/project-2.png'
  },
  {
    title: 'Project 3',
    date: '2024',
    image: '/img/project-3.png'
  },
  {
    title: 'Project 4',
    date: '2024',
    image: '/img/project-4.png'
  },
  {
    title: 'Project 5',
    date: '2025',
    image: '/img/project-5.png'
  },
  {
    title: 'Project 6',
    date: '2026',
    image: '/img/project-6.png'
  }
]

export const CREW = [
  {
    name: 'Leah Salomo3n',
    profileImage: '/img/profile-image-1.png',
    job: 'UI Designer',
    icon1: '/img/fa-twitter.svg',
    icon2: '/img/fa-facebook-square.svg',
    icon3: '/img/fa-instagram.svg'
  },
  {
    name: 'Leah Salomo1n',
    profileImage: '/img/profile-image-2.png',
    job: 'UI Designer',
    icon1: '/img/fa-twitter.svg',
    icon2: '/img/fa-facebook-square.svg',
    icon3: '/img/fa-instagram.svg'
  },
  {
    name: 'Leah Salomon1',
    profileImage: '/img/profile-image-3.png',
    job: 'UI Designer',
    icon1: '/img/fa-twitter.svg',
    icon2: '/img/fa-facebook-square.svg',
    icon3: '/img/fa-instagram.svg'
  },
  {
    name: 'Leah Salomon123',
    profileImage: '/img/profile-image-4.png',
    job: 'UI Designer',
    icon1: '/img/fa-twitter.svg',
    icon2: '/img/fa-facebook-square.svg',
    icon3: '/img/fa-instagram.svg'
  }
]

export const FooterSocials = [
  {
    svg: '/img/Facebook.svg'
  },
  { svg: '/img/Twitter.svg' },
  { svg: '/img/Instagram.svg' },
  { svg: '/img/Linkedin.svg' },
  { svg: '/img/YouTube.svg' }
]

export const OfferListing = [
  {
    id: 0,
    seller: {
      name: 'Seller1',
      star: 2.3
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'APPROVED'
    },
    amount: '823.4567 SOL',
    price: '$712,31'
  },
  {
    id: 1,
    seller: {
      name: 'Seller1',
      star: 2.3
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'APPROVED'
    },
    amount: '823.4567 SOL',
    price: '$712,31'
  },
  {
    id: 2,
    seller: {
      name: 'Seller2',
      star: 4.9
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'DECLINED'
    },
    amount: '421.7891 SOL',
    price: '$1566,42'
  },
  {
    id: 3,
    seller: {
      name: 'Seller3',
      star: 3.7
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'APPROVED'
    },
    amount: '987.6543 SOL',
    price: '$899,18'
  },
  {
    id: 4,
    seller: {
      name: 'Seller4',
      star: 1.5
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'APPROVED'
    },
    amount: '123.4567 SOL',
    price: '$432,56'
  },
  {
    id: 5,
    seller: {
      name: 'Seller5',
      star: 4.2
    },
    payment: {
      method: 'Bank Transaction',
      name: 'COBANK',
      check: 'DECLINED'
    },
    amount: '567.8901 SOL',
    price: '$789,23'
  }
] as const

export const links = [
  {
    id: 1,
    link: 'About Us',
    href: 'about'
  },
  {
    id: 2,
    link: 'Our Team',
    href: 'team'
  },
  {
    id: 3,
    link: 'Contact',
    href: 'contact'
  },
  {
    id: 4,
    link: 'ArbSwap',
    href: 'arbswap'
  },
  // {
  //   id: 5,
  //   link: 'NexBridge',
  //   href: 'nexbridge'
  // },
  {
    id: 6,
    link: 'Join Us',
    href: 'join'
  }
]

export const packages = [
  {
    title: 'STARTER',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Limited access',
      'Starter support'
    ],
    price: '9.50'
  },
  {
    title: 'MEDIUM',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      'Priority support'
    ],
    price: '19.50'
  },
  {
    title: 'PRO',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Premium support'
    ],
    price: '29.50'
  }
]

export const arbswapNavbarLinks = [
  {
    id: 1,
    link: 'About Us',
    href: 'about'
  },
  {
    id: 2,
    link: 'Create Offer',
    href: 'arbswap/offer'
  },
  {
    id: 3,
    link: 'Support',
    href: 'arbswap/support'
  },
  {
    id: 4,
    link: 'Near',
    href: 'near'
  }
] as const
