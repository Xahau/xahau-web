'use client'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  GlobeAltIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'

import logo from '../assets/xahau-logo.svg'

const LOCALES = ['es', 'ja']

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

const nav = {
  en: {
    about: 'About', features: 'Features', ecosystem: 'Ecosystem',
    roadmap: 'Roadmap', docs: 'Documentation', connect: 'Connect',
    explorers: 'Explorers', events: 'Events',
    getstarted: 'Get started', protocol: 'Protocol Reference',
    infra: 'Infrastructure', discord: 'Community Discord',
  },
  es: {
    about: 'Acerca de', features: 'Características', ecosystem: 'Ecosistema',
    roadmap: 'Hoja de ruta', docs: 'Documentación', connect: 'Conectar',
    explorers: 'Exploradores', events: 'Eventos',
    getstarted: 'Primeros pasos', protocol: 'Referencia de Protocolo',
    infra: 'Infraestructura', discord: 'Discord de la Comunidad',
  },
  ja: {
    about: 'Xahauについて', features: '機能', ecosystem: 'エコシステム',
    roadmap: 'ロードマップ', docs: 'ドキュメント', connect: 'コネクト',
    explorers: 'エクスプローラー', events: 'イベント',
    getstarted: 'はじめる', protocol: 'プロトコルリファレンス',
    infra: 'インフラストラクチャ', discord: 'コミュニティDiscord',
  },
}

const XahauLogo = ({ href }) => (
  <a href={href} className="-m-1.5 p-1.5">
    <span className="sr-only">Xahau</span>
    <img src={logo.src} width="222" height="40" alt="Xahau Logo" />
  </a>
)

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = props.url.pathname
  const firstSegment = pathname.split('/')[1]
  const currentLocale = LOCALES.includes(firstSegment) ? firstSegment : 'en'
  const p = currentLocale !== 'en' ? `/${currentLocale}` : ''
  const t = nav[currentLocale]

  function langUrl(code) {
    const prefix = currentLocale !== 'en' ? `/${currentLocale}` : ''
    const basePath = prefix ? (pathname.slice(prefix.length) || '/') : pathname
    if (code === 'en') return basePath
    return basePath === '/' ? `/${code}` : `/${code}${basePath}`
  }

  const socials = [
    { name: t.events, href: `${p}/connect` },
    { name: 'Dev Contest', href: `${p}/contest` },
    { name: 'X', href: 'https://x.com/XahauNetwork' },
    { name: 'GitHub', href: 'https://github.com/Xahau' },
    { name: t.discord, href: 'https://discord.com/invite/UzU58haAn4' },
  ]

  const docs = [
    { name: t.getstarted, href: `${p}/docs` },
    { name: t.protocol, href: `${p}/docs/protocol-reference/transactions` },
    { name: 'Hooks', href: `${p}/docs/hooks` },
    { name: 'Data APIs', href: `${p}/docs/data-apis` },
    { name: t.infra, href: `${p}/docs/infrastructure/system-requirements` },
    { name: 'Whitepaper', href: `${p}/docs/resources/whitepaper` },
  ]

  const explorers = [
    { name: 'XAHSCAN', href: 'https://xahscan.com/' },
    { name: 'Bithomp Xahau Explorer', href: 'https://xahauexplorer.com/en' },
    { name: 'XRPLWin Xahau Explorer', href: 'https://xahau.xrplwin.com/' },
    { name: 'Technical Explorer', href: 'https://explorer.xahau.network/' },
  ]

  const navItems = [
    { name: t.about, href: `${p}/about`, urlPattern: 'about' },
    { name: t.features, href: `${p}/features`, urlPattern: 'features' },
    { name: t.ecosystem, href: `${p}/ecosystem`, urlPattern: 'ecosystem' },
    { name: t.roadmap, href: `${p}/roadmap`, urlPattern: 'roadmap' },
    { name: t.docs, children: docs, urlPattern: 'docs' },
    { name: t.connect, children: socials },
    { name: t.explorers, children: explorers },
  ]

  const pathSegments = pathname.slice(1).split('/')
  const activeSegment = LOCALES.includes(pathSegments[0]) ? pathSegments[1] : pathSegments[0]

  const dropdownItemClass = 'group relative flex items-center gap-x-6 p-2 text-sm/6'

  return (
    <header className="header bg-xahau-background z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
      >
        <div className="flex lg:flex-1">
          <XahauLogo href={p ? p : '/'} />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="border-none bg-transparent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:items-center">
          {navItems.map((navItem) => {
            const isActive = navItem.urlPattern && activeSegment === navItem.urlPattern
            if (navItem.href) {
              return (
                <a
                  key={navItem.name}
                  href={navItem.href}
                  className={`selected:no-underline no-underline text-base text-black ${isActive ? 'font-bold' : 'font-regular'}`}
                >
                  {navItem.name}
                </a>
              )
            }
            return (
              <Popover key={navItem.name} className="relative">
                <PopoverButton
                  className={`selected:no-underline no-underline p-0 border-none text-base text-black flex items-center gap-x-1 bg-transparent hover:cursor-pointer ${isActive ? 'font-bold' : 'font-regular'}`}
                >
                  {navItem.name}
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-black" />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-max -translate-x-1/2 overflow-hidden bg-xahau-gray shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {navItem.children.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        className="no-underline block font-regular text-white"
                      >
                        <div className={dropdownItemClass}>{item.name}</div>
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            )
          })}

          {/* Language switcher */}
          <Popover className="relative">
            <PopoverButton
              className="no-underline p-0 border-none text-black flex items-center gap-x-1 bg-transparent hover:cursor-pointer"
              aria-label="Select language"
            >
              <GlobeAltIcon className="size-5 text-black" />
              <ChevronDownIcon aria-hidden="true" className="size-4 flex-none text-black" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute right-0 z-10 mt-3 w-40 overflow-hidden bg-xahau-gray shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-2">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={langUrl(lang.code)}
                    className={`no-underline flex items-center gap-x-2 px-3 py-2 text-sm text-white hover:bg-white/10 ${currentLocale === lang.code ? 'font-bold' : 'font-regular'}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                    {currentLocale === lang.code && <span className="ml-auto">✓</span>}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <XahauLogo href={p ? p : '/'} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="border-none bg-transparent -m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((navItem) => {
                  const isActive = navItem.urlPattern && activeSegment === navItem.urlPattern
                  if (navItem.href) {
                    return (
                      <a
                        key={navItem.name}
                        href={navItem.href}
                        className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 text-black ${isActive ? 'font-bold' : 'font-regular'}`}
                      >
                        {navItem.name}
                      </a>
                    )
                  }
                  return (
                    <Disclosure key={navItem.name} as="div" className="-mx-3">
                      <DisclosureButton
                        className={`selected:no-underline no-underline border-none rounded-lg py-2 text-base/7 hover:bg-gray-50 text-black bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 ${isActive ? 'font-bold' : 'font-regular'}`}
                      >
                        {navItem.name}
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {navItem.children.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            className="no-underline block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-regular text-black hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )
                })}
              </div>

              {/* Mobile language selector */}
              <div className="py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="border-none rounded-lg py-2 text-base/7 hover:bg-gray-50 text-black bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 font-regular no-underline">
                    <span className="flex items-center gap-x-2">
                      <GlobeAltIcon className="size-5 text-black" />
                      {languages.find((l) => l.code === currentLocale)?.label}
                    </span>
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href={langUrl(lang.code)}
                        className={`no-underline flex items-center gap-x-2 rounded-lg py-2 pr-3 pl-6 text-sm/7 text-black hover:bg-gray-50 ${currentLocale === lang.code ? 'font-bold' : 'font-regular'}`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                        {currentLocale === lang.code && <span className="ml-auto text-xs">✓</span>}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
