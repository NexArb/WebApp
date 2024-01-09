const locales = {
    en: () => import('@/locales/en.json').then(module => module.default),
    de: () => import('@/locales/de.json').then(module => module.default),
    tr: () => import('@/locales/tr.json').then(module => module.default)
}

