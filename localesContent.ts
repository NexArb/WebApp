interface ArbswapNavbar {
  aboutUs: string
  createOffer: string
  wallet: string
  support: string
  login: string,
  walletConnected: string
}

interface NexBridgeNavbar {
  home: string
  connectWallet: string
  pricing: string
  dashboard: string
}

interface Navbar {
  aboutUs: string
  ourTeam: string
  contact: string
  joinUs: string
}

interface About {
  aboutNexarb: string
  description: string
  manyUsefulComponents: string
  manyUsefulComponentsDesc: string
  responsiveLayout: string
  responsiveLayoutDesc: string
  retinaReady: string
  retinaReadyDesc: string
}

interface ArbSwapHome {
  introHeader: string
  introDescription: string
  getStarted: string
  buySOL: string
  sellSOL: string
  amount: string
  searchForOffers: string
  exchangeRates: string
  userWorldwide: string
  countrySupported: string
  cryptoTransactions: string
  assetsOnPlatform: string
  sendAndRecieve: string
  sendAndRecieveDesc: string
  stepsHeader: string
  quickSignUp: string
  quickSignUpDesc: string
  securitySetup: string
  connectWallet: string
  startTrading: string
  startTradingDesc: string
  solanaWorld: string
  solanaWorldDescription: string
  signUpNow: string
  confidentiality: string
  confidentialityDesc: string
}

interface NexBridgeHome {
  description: string
  crossChain: string
}

interface Home {
  digitalSolutions: string
  digitalSolutionsDesc: string
  letsMeet: string
  ourWorks: string
  ourWorksDesc: string
  startupCrew: string
}

interface NexBridgeDashboard {
  compose: string
  bridgeOptions: string
  edit: string
  delete: string
  from: string
  to: string
  personalData: string
  startBridge: string
  information: string
}

interface Login {
  emailOrPhoneNumber: string
  enterUsername: string
  password: string
  enterPassword: string
  rememberThisDevice: string
  login: string
  loginWithGoogle: string
  dontYouHaveAnAccount: string
  signUpHere: string
  forgotPassword: string
  verifyHere: string
  connectWallet: string
}

interface Register {
  enterEmail: string
  choosePassword: string
  enterPassword: string
  passwordAgain: string
  confirmPassword: string
  acceptTermsConditions: string
  next: string
}

interface RegisterWallet {
  connectPhantomWallet: string
  connectWallet: string
  register: string
}

interface ForgotPassword {
  enterEmail: string
  sendCode: string
  verificationCode: string
  enterVerificationCode: string
  dontYouGetCode: string
  sendAgain: string
  verify: string
  newPassword: string
  enterPassword: string
  newPasswordAgain: string
  login: string
}

interface ArbSwapFooter {
  dummyText: string
  products: string
  overview: string
  solutions: string
  pricing: string
  customers: string
  company: string
  about: string
  inverstorRelations: string
  jobs: string
  press: string
  blog: string
  support: string
  contact: string
  documentation: string
  chat: string
  faq: string
  legal: string
  termsOfService: string
  privacyPolicy: string
  cookieSettings: string
  copyright: string
}

interface Footer {
  keepInTouch: string
  description: string
  yourName: string
  inputField: string
  yourMessage: string
  send: string
  copyright: string
}

export const arbswapNavbarDictionary: Record<string, ArbswapNavbar> = {
  en: {
    aboutUs: 'About Us',
    createOffer: 'Create Offer',
    wallet: 'Wallet',
    support: 'Support',
    login: 'Login',
    walletConnected: "Wallet Connected"
  },
  tr: {
    aboutUs: 'Hakkımızda',
    createOffer: 'Teklif Oluştur',
    wallet: 'Wallet',
    support: 'Destek',
    login: 'Giriş Yap',
    walletConnected: "Wallet Bağlandı"
  },
  de: {
    aboutUs: 'Über Uns',
    createOffer: 'Angebot erstellen',
    wallet: 'Wallet',
    support: 'Unterstützung',
    login: 'Anmeldung',
    walletConnected: "Wallet verbunden"
  }
}

export const nexBridgeNavbarDictionary: Record<string, NexBridgeNavbar> = {
  en: {
    home: 'Home',
    connectWallet: 'Connect Wallet',
    pricing: 'Pricing',
    dashboard: 'Dashboard'
  },
  tr: {
    home: 'Ana Sayfa',
    connectWallet: 'Wallet Bağla',
    pricing: 'Fiyatlandırma',
    dashboard: 'Kontrol Paneli'
  },
  de: {
    home: 'Startseite',
    connectWallet: 'Wallet Verbinden',
    pricing: 'Preisgestaltung',
    dashboard: 'Armaturenbrett'
  }
}

export const navbarDictionary: Record<string, Navbar> = {
  en: {
    aboutUs: 'About Us',
    ourTeam: 'Our Team',
    contact: 'Contact',
    joinUs: 'Join Us'
  },
  tr: {
    aboutUs: 'Hakkımızda',
    ourTeam: 'Ekibimiz',
    contact: 'İletişim',
    joinUs: 'Bize Katılın'
  },
  de: {
    aboutUs: 'Über Uns',
    ourTeam: 'Unser Team',
    contact: 'Kommunikation',
    joinUs: 'Begleiten Sie Uns'
  }
}

export const aboutPageDictionary: Record<string, About> = {
  en: {
    aboutNexarb: 'About NexArb',
    description:
      'Advantages include excellent sound quality, and the fact that they do not require any batteries. Gamers often prefer wired headphones so they never have to worry about batteries dying in the middle of a heated match.',
    manyUsefulComponents: 'Many Useful Components',
    manyUsefulComponentsDesc:
      'Startup Framework contains components and complex blocks which can be easily be integrated into almost any design.',
    responsiveLayout: 'Responsive Layout',
    responsiveLayoutDesc:
      'We haven`t forgotten about responsive layout. With Startup Framework, you can create a website with full mobile support.',
    retinaReady: 'Retina Ready',
    retinaReadyDesc:
      'Startup Framework works on devices supporting Retina Display. Feel the clarity in each pixel.'
  },
  tr: {
    aboutNexarb: 'NexArb Hakkında',
    description:
      'Avantajlar kusursuz ses kalitesi ile hiçbir bataryaya gereksinim olmamasını içerir. Oyuncular sıklıkla kablolu kulaklıkları tercih eder bu yüzden çekişmeli bir oyunun ortasında bataryanın tükenmesinden endişe etmelerine gerek yok.',
    manyUsefulComponents: 'Birçok Kullanışlı Bileşenler',
    manyUsefulComponentsDesc:
      'Startup Framework herhangi bir tasarıma kolaylıkla entegre olabilen bileşenler ve kompleks bloklar içerir.',
    responsiveLayout: 'Duyarlı Sayfa Düzeni',
    responsiveLayoutDesc:
      'Duyarlı sayfa düzenini de unutmadık. Startup Framework ile tam mobil destekli bir website geliştirebilirsiniz.',
    retinaReady: 'Retina Hazır',
    retinaReadyDesc:
      'Startup Framework Retina ekranını destekleyen cihazlarda çalışır. Her bir pikselde netliği hissedin.'
  },
  de: {
    aboutNexarb: 'Über NexArb',
    description:
      'Zu den Vorteilen zählen die hervorragende Klangqualität und die Tatsache, dass keine Batterien erforderlich sind. Gamer bevorzugen häufig kabelgebundene Kopfhörer, sodass sie sich nie Sorgen machen müssen, dass die Batterien mitten in einem hitzigen Spiel leer werden.',
    manyUsefulComponents: 'Viele nützliche Komponenten',
    manyUsefulComponentsDesc:
      'Das Startup Framework enthält Komponenten und komplexe Blöcke, die problemlos in nahezu jedes Design integriert werden können.',
    responsiveLayout: 'Responsive Layout',
    responsiveLayoutDesc:
      'Wir haben das responsive Layout nicht vergessen. Mit Startup Framework können Sie eine Website mit vollständiger Mobilunterstützung erstellen.',
    retinaReady: 'Retina Bereit',
    retinaReadyDesc:
      'Das Startup Framework funktioniert auf Geräten, die Retina Display unterstützen. Spüren Sie die Klarheit in jedem Pixel.'
  }
}

export const arbSwapHomeDictionary: Record<string, ArbSwapHome> = {
  en: {
    introHeader: 'Fastest & secure transfer Solana',
    introDescription:
      'Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.',
    getStarted: 'Get Started',
    buySOL: 'Buy SOL',
    sellSOL: 'Sell SOL',
    amount: 'Amount',
    searchForOffers: 'Search For Offers',
    exchangeRates: 'Exchange Rates',
    userWorldwide: 'User worldwide',
    countrySupported: 'Country Supported',
    cryptoTransactions: 'Crypto Transactions',
    assetsOnPlatform: 'Assets on Platform',
    sendAndRecieve: 'SEND AND RECEIVE',
    sendAndRecieveDesc: 'Easily send and recieve Solana from everywhere',
    stepsHeader: 'Simple steps to get started',
    quickSignUp: 'Quick sign-up',
    quickSignUpDesc: "It'll take you 1 minutes top",
    securitySetup: 'Security setup',
    connectWallet: 'Connect Wallet',
    startTrading: 'Start Trading',
    startTradingDesc: 'Start trading at your desired rate, and get paid.',
    solanaWorld: 'Get ready to explore the Solana world',
    solanaWorldDescription:
      'Join NexArb to get the latest news and start trading now.',
    signUpNow: 'Sign Up Now',
    confidentiality: 'Confidentiality',
    confidentialityDesc:
      'We do not store personal data on our servers and never transfer it to third parties.'
  },
  tr: {
    introHeader: 'En hızlı & güvenli transfer Solana',
    introDescription:
      'Peer-to-peer ticaret platformumuza katılın ve sizin gibi Solana alan ve satan kullanıcılarla en hızlı ve en güvenli ödeme yöntemini kullanın.',
    getStarted: 'Başlayın',
    buySOL: 'SOL Al',
    sellSOL: 'SOL Sat',
    amount: 'Miktar',
    searchForOffers: 'Teklifleri Ara',
    exchangeRates: 'Kur Oranları',
    userWorldwide: 'Dünya çapında kullanıcı',
    countrySupported: 'Ülke Destekli',
    cryptoTransactions: 'Crypto İşlemleri',
    assetsOnPlatform: 'Platformdaki Varlıklar',
    sendAndRecieve: 'GÖNDER VE AL',
    sendAndRecieveDesc: 'Her yerden kolaylıkla Solana gönderin ve alın',
    stepsHeader: 'Başlamak için kolay adımlar',
    quickSignUp: 'Hızlı kayıt olma',
    quickSignUpDesc: 'En fazla 1 dakikanızı alacaktır',
    securitySetup: 'Güvenlik kurulumu',
    connectWallet: 'Wallet Bağlama',
    startTrading: 'Ticarete Başlama',
    startTradingDesc: 'İstediğiniz oranda ticarete başlayın ve ödeme alın.',
    solanaWorld: 'Solana dünyasını keşfetmeye hazır olun',
    solanaWorldDescription:
      "En yeni haberleri almak ve şimdi ticarete başlamak için NexArb'a katılın.",
    signUpNow: 'Şimdi Kayıt Ol',
    confidentiality: 'Gizlilik',
    confidentialityDesc:
      'Sunucularımızda kişisel verileri tutmayız ve onları üçüncü partilere aktarmayız.'
  },
  de: {
    introHeader: 'Schnellster und sicherer Transfer Solana',
    introDescription:
      'Treten Sie unserer Peer-to-Peer-Handelsplattform bei und nutzen Sie die schnellste und sicherste Zahlungsmethode für den Kauf und Verkauf von Solana mit Benutzern wie Ihnen.',
    getStarted: 'Loslegen',
    buySOL: 'Kaufen Sie SOL',
    sellSOL: 'Verkaufe SOL',
    amount: 'Menge',
    searchForOffers: 'Nach Angeboten Suchen',
    exchangeRates: 'Wechselkurse',
    userWorldwide: 'Benutzer weltweit',
    countrySupported: 'Land Unterstützt',
    cryptoTransactions: 'Kryptotransaktionen',
    assetsOnPlatform: 'Vermögenswerte auf der Plattform',
    sendAndRecieve: 'SENDEN UND EMPFANGEN',
    sendAndRecieveDesc:
      'Senden und empfangen Sie Solana ganz einfach von überall aus',
    stepsHeader: 'Einfache Schritte für den Einstieg',
    quickSignUp: 'Schnell anmelden',
    quickSignUpDesc: 'Es dauert höchstens 1 Minute',
    securitySetup: 'Sicherheitseinrichtung',
    connectWallet: 'Wallet Verbinden',
    startTrading: 'Mit dem handel beginnen',
    startTradingDesc:
      'Beginnen Sie mit dem Handel zu Ihrem gewünschten Kurs und lassen Sie sich auszahlen.',
    solanaWorld: 'Machen Sie sich bereit, die Solana-Welt zu erkunden.',
    solanaWorldDescription:
      'Melden Sie sich bei NexArb an, um die neuesten Nachrichten zu erhalten und jetzt mit dem Handel zu beginnen.',
    signUpNow: 'Jetzt Registrieren',
    confidentiality: 'Vertraulichkeit',
    confidentialityDesc:
      'Wir speichern keine personenbezogenen Daten auf unseren Servern und geben diese niemals an Dritte weiter.'
  }
}

export const nexBridgeHomeDictionary: Record<string, NexBridgeHome> = {
  en: {
    description:
      'Join our peer-to-peer trading platform and use the fastest and most secure payment method for buying and selling Solana with users just like you.',
    crossChain: 'Cross-chain Bridge'
  },
  tr: {
    description:
      'Peer-to-peer ticaret platformumuza katılın ve sizin gibi Solana alan ve satan kullanıcılarla en hızlı ve en güvenli ödeme yöntemini kullanın.',
    crossChain: 'Cross-chain Köprü'
  },
  de: {
    description:
      'Treten Sie unserer Peer-to-Peer-Handelsplattform bei und nutzen Sie die schnellste und sicherste Zahlungsmethode für den Kauf und Verkauf von Solana mit Benutzern wie Ihnen.',
    crossChain: 'Cross-Chain-Brücke'
  }
}

export const homeDictionary: Record<string, Home> = {
  en: {
    digitalSolutions: 'Digital Solutions for the Future',
    digitalSolutionsDesc:
      'Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.',
    letsMeet: "Let's Meet",
    ourWorks: 'Our Works',
    ourWorksDesc:
      'The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.',
    startupCrew: 'Startup Crew'
  },
  tr: {
    digitalSolutions: 'Gelecek İçin Dijital Çözümler',
    digitalSolutionsDesc:
      'Startup Framework size yaratıcı sürecinizde tam özgürlük verir - herhangi bir teknik durum hakkında düşünmek zorunda değilsiniz. Hiçbir sınır ve kodlama yoktur.',
    letsMeet: 'Haydi Buluşalım',
    ourWorks: 'Çalışmalarımız',
    ourWorksDesc:
      "Startup Framework'ün en önemli yönü örneklerdir. Örnekler olduğu gibi kullanabileceğiniz 20 kullanılabilir sayfaya şekil verir veya UI Kit'ten yeni bloklar ekleyebilirsiniz.",
    startupCrew: 'Startup Ekibi'
  },
  de: {
    digitalSolutions: 'Digitale Lösungen für die Zukunft“',
    digitalSolutionsDesc:
      'Das Startup Framework gibt Ihnen völlige Freiheit bei Ihrem kreativen Prozess – Sie müssen sich keine Gedanken über technische Aspekte machen. Es gibt keine Grenzen und absolut keine Codierung.',
    letsMeet: 'Lass uns treffen',
    ourWorks: 'Unsere Arbeiten',
    ourWorksDesc:
      'Der wichtigste Teil des Startup Frameworks sind die Beispiele. Die Beispiele bilden einen Satz von 20 verwendbaren Seiten, die Sie unverändert verwenden oder neue Blöcke aus dem UI-Kit hinzufügen können.',
    startupCrew: 'Startup-Crew'
  }
}

export const nexBridgeDashboardDictionary: Record<string, NexBridgeDashboard> =
  {
    en: {
      compose: 'Compose',
      bridgeOptions: 'Bridge Options',
      edit: 'EDIT',
      delete: 'DELETE',
      from: 'From :',
      to: 'To :',
      personalData:
        'We do not store personal data on our servers and never transfer it to third parties.',
      startBridge: 'Start Bridge',
      information: 'Information :'
    },
    tr: {
      compose: 'Oluştur',
      bridgeOptions: 'Köprü Seçenekleri',
      edit: 'DÜZENLE',
      delete: 'SİL',
      from: 'Kimden :',
      to: 'Kime :',
      personalData:
        'Kişisel verileri sunucularımızda tutmayız ve asla üçüncü partilere aktarmayız.',
      startBridge: 'Köprüyü Başlat',
      information: 'Bilgiler :'
    },
    de: {
      compose: 'Komponieren',
      bridgeOptions: 'Bridge-Optionen',
      edit: 'BEARBEITEN',
      delete: 'LÖSCHEN',
      from: 'Aus :',
      to: 'Zu :',
      personalData:
        'Wir speichern keine personenbezogenen Daten auf unseren Servern und geben diese niemals an Dritte weiter.',
      startBridge: 'Starten Sie Bridge',
      information: 'Information :'
    }
  }

export const loginDictionary: Record<string, Login> = {
  en: {
    emailOrPhoneNumber: 'Email or Phone number',
    enterUsername: 'Enter your username',
    password: 'Password',
    enterPassword: 'Enter your password',
    rememberThisDevice: 'Remember this device:',
    login: 'Login',
    loginWithGoogle: 'Login with Google',
    dontYouHaveAnAccount: "Don't you have an account?",
    signUpHere: 'Sign up here!',
    forgotPassword: 'Forgot Password?',
    verifyHere: 'Verify here.',
    connectWallet: 'Connect Wallet'
  },
  tr: {
    emailOrPhoneNumber: 'Email veya Telefon Numarası',
    enterUsername: 'Kullanıcı adınızı girin',
    password: 'Şifre',
    enterPassword: 'Şifrenizi girin',
    rememberThisDevice: 'Bu cihazı hatırla:',
    login: 'Giriş Yap',
    loginWithGoogle: 'Google İle Giriş Yap',
    dontYouHaveAnAccount: 'Hesabınız yok mu?',
    signUpHere: 'Buradan kayıt olun!',
    forgotPassword: 'Şifrenizi mi unuttunuz?',
    verifyHere: 'Buradan doğrulayın.',
    connectWallet: 'Wallet Bağlayın'
  },
  de: {
    emailOrPhoneNumber: 'E-Mail oder Telefonnummer',
    enterUsername: 'Geben Sie Ihren Benutzernamen ein',
    password: 'Passwort',
    enterPassword: 'Geben Sie Ihr Passwort ein',
    rememberThisDevice: 'Erinnern Sie sich an dieses Gerät:',
    login: 'Anmeldung',
    loginWithGoogle: 'Melden Sie sich mit Google an',
    dontYouHaveAnAccount: 'Sie haben kein Konto?',
    signUpHere: 'Hier anmelden!',
    forgotPassword: 'Passwort vergessen?',
    verifyHere: 'Überprüfen Sie hier.',
    connectWallet: 'Wallet verbinden'
  }
}

export const registerDictionary: Record<string, Register> = {
  en: {
    enterEmail: 'Enter a valid email',
    choosePassword: 'Choose Password',
    enterPassword: 'Enter your password',
    passwordAgain: 'Password Again',
    confirmPassword: 'Confirm your password',
    acceptTermsConditions: 'Accept the terms and conditions...',
    next: 'Next'
  },
  tr: {
    enterEmail: 'Geçerli bir email girin',
    choosePassword: 'Şifre seçin',
    enterPassword: 'Şifrenizi girin',
    passwordAgain: 'Şifre Tekrar',
    confirmPassword: 'Şifrenizi doğrulayın',
    acceptTermsConditions: 'Şartları ve koşulları kabul edin...',
    next: 'Sonraki'
  },
  de: {
    enterEmail: 'Geben Sie eine gültige E-Mail-Adresse ein',
    choosePassword: 'Wählen sie ein Passwort',
    enterPassword: 'Geben Sie Ihr Passwort ein',
    passwordAgain: 'Passwort erneut',
    confirmPassword: 'Bestätigen Sie Ihr Passwort',
    acceptTermsConditions:
      'Akzeptieren Sie die Allgemeinen Geschäftsbedingungen...',
    next: 'Nächste'
  }
}

export const registerWalletDictionary: Record<string, RegisterWallet> = {
  en: {
    connectPhantomWallet: 'Connect your Phantom wallet to continue register.',
    connectWallet: 'Connect Wallet',
    register: 'Register'
  },
  tr: {
    connectPhantomWallet:
      "Kayıt olmaya devam etmek için Phantom wallet'ınızı bağlayın",
    connectWallet: 'Wallet Bağla',
    register: 'Kayıt Ol'
  },
  de: {
    connectPhantomWallet:
      'Verbinden Sie Ihr Phantom-Wallet, um mit der Registrierung fortzufahren.',
    connectWallet: 'Wallet verbinden',
    register: 'Registrieren'
  }
}

export const forgotPasswordDictionary: Record<string, ForgotPassword> = {
  en: {
    enterEmail: 'Enter your valid email',
    sendCode: 'Send code',
    verificationCode: 'Verification Code',
    enterVerificationCode: 'Enter verification code',
    dontYouGetCode: "Don't you get code?",
    sendAgain: 'Send again',
    verify: 'Verify',
    newPassword: 'New Password',
    enterPassword: 'Enter your password',
    newPasswordAgain: 'New Password Again',
    login: 'Log in'
  },
  tr: {
    enterEmail: 'Geçerli emailinizi girin',
    sendCode: 'Kod gönder',
    verificationCode: 'Doğrulama Kodu',
    enterVerificationCode: 'Doğrulama kodunu girin',
    dontYouGetCode: 'Kodu almadınız mı?',
    sendAgain: 'Tekrar gönder',
    verify: 'Doğrula',
    newPassword: 'Yeni Şifre',
    enterPassword: 'Şifrenizi girin',
    newPasswordAgain: 'Yeni Şifre Tekrar',
    login: 'Giriş yap'
  },
  de: {
    enterEmail: 'Geben Sie Ihre gültige E-Mail-Adresse ein',
    sendCode: 'Code senden',
    verificationCode: 'Bestätigungscode',
    enterVerificationCode: 'Bestätigungscode eingeben',
    dontYouGetCode: 'Bekommst du keinen Code?',
    sendAgain: 'Nochmals senden',
    verify: 'Verifizieren',
    newPassword: 'Neues Kennwort',
    enterPassword: 'Geben Sie Ihr Passwort ein',
    newPasswordAgain: 'Neues Passwort nochmal',
    login: 'Anmeldung'
  }
}

export const arbSwapFooterDictionary: Record<string, ArbSwapFooter> = {
  en: {
    dummyText:
      'Filler text is dummy text which has no meaning however looks very similar to real text',
    products: 'PRODUCTS',
    overview: 'Overview',
    solutions: 'Solutions',
    pricing: 'Pricing',
    customers: 'Customers',
    company: 'COMPANY',
    about: 'About',
    inverstorRelations: 'Investor Relations',
    jobs: 'Jobs',
    press: 'Press',
    blog: 'Blog',
    support: 'SUPPORT',
    contact: 'Contact',
    documentation: 'Documentation',
    chat: 'Chat',
    faq: 'FAQ',
    legal: 'LEGAL',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    cookieSettings: 'Cookie Settings',
    copyright: '© 2021 - Present Flowrift. All rights reserved.'
  },
  tr: {
    dummyText:
      'Doldurucu metin anlamı olmayan ancak gerçek metne çok benzeyen anlamsız metindir',
    products: 'ÜRÜNLER',
    overview: 'Genel Bakış',
    solutions: 'Çözümler',
    pricing: 'Fiyatlandırma',
    customers: 'Müşteriler',
    company: 'ŞİRKET',
    about: 'Hakkında',
    inverstorRelations: 'Yatırımcı İlişkileri',
    jobs: 'İşler',
    press: 'Basın',
    blog: 'Blog',
    support: 'DESTEK',
    contact: 'İletişim',
    documentation: 'Dokümantasyon',
    chat: 'Sohbet',
    faq: 'SSS',
    legal: 'HUKUK',
    termsOfService: 'Hizmet Koşulları',
    privacyPolicy: 'Gizlilik Politikası',
    cookieSettings: 'Çerez Ayarları',
    copyright: '© 2021 - Present Flowrift. Tüm hakları saklıdır.'
  },
  de: {
    dummyText:
      'Fülltext ist Blindtext, der keine Bedeutung hat, aber echtem Text sehr ähnlich sieht',
    products: 'PRODUKTE',
    overview: 'Überblick',
    solutions: 'Lösungen',
    pricing: 'Preisgestaltung',
    customers: 'Müşteriler',
    company: 'Unternehmen',
    about: 'About',
    inverstorRelations: 'Anlegerbeziehungen',
    jobs: 'Arbeitsplätze',
    press: 'Drücken Sie',
    blog: 'Blog',
    support: 'UNTERSTÜTZUNG',
    contact: 'Kontakt',
    documentation: 'Dokumentation',
    chat: 'Plaudern',
    faq: 'Häufig gestellte Fragen',
    legal: 'RECHTLICH',
    termsOfService: 'Nutzungsbedingungen',
    privacyPolicy: 'Datenschutzrichtlinie',
    cookieSettings: 'Cookie-Einstellungen',
    copyright: '© 2021 – Present Flowrift. Alle Rechte vorbehalten.'
  }
}

export const footerDictionary: Record<string, Footer> = {
  en: {
    keepInTouch: "Let's Keep in Touch",
    description:
      'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
    yourName: 'Your Name',
    inputField: 'INPUT FIELD',
    yourMessage: 'YOUR MESSAGE',
    send: 'Send',
    copyright: '© 2023 NexArb. All Rights Reserved.'
  },
  tr: {
    keepInTouch: 'Haydi İletişime Geçelim',
    description:
      'Tasarımcılara, geliştiricilere ve şirketlere startupları için hızlı ve kolayca website geliştirmelerinde yardım edecek yeni bir ürün oluşturduk.',
    yourName: 'İsminiz',
    inputField: 'GİRDİ ALANI',
    yourMessage: 'Mesajınız',
    send: 'Gönder',
    copyright: '© 2023 NexArb. Tüm hakları saklıdır.'
  },
  de: {
    keepInTouch: 'Lass uns in Kontakt bleiben',
    description:
      'Wir haben ein neues Produkt entwickelt, das Designern, Entwicklern und Unternehmen dabei hilft, schnell und einfach Websites für ihre Startups zu erstellen.',
    yourName: 'Dein Name',
    inputField: 'EINGABEFELD',
    yourMessage: 'IHRE NACHRICHT',
    send: 'Schicken',
    copyright: '© 2023 NexArb. Alle Rechte vorbehalten.'
  }
}
