'use client'

import { getRelativeLocaleUrl } from 'astro:i18n'
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
import { getAlternateLocaleHref } from '../utils/localizedHref'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt-BR', label: 'Português (Brasil)' },
  // { code: 'ja', label: '日本語' },
]

const nav = {
  en: {
    about: 'About',
    features: 'Features',
    ecosystem: 'Ecosystem',
    roadmap: 'Roadmap',
    docs: 'Documentation',
    connect: 'Connect',
    explorers: 'Explorers',
    events: 'Events',
    getstarted: 'Get started',
    protocol: 'Protocol Reference',
    infra: 'Infrastructure',
    discord: 'Community Discord',
  },
  es: {
    about: 'Acerca de',
    features: 'Características',
    ecosystem: 'Ecosistema',
    roadmap: 'Hoja de ruta',
    docs: 'Documentación',
    connect: 'Conectar',
    explorers: 'Exploradores',
    events: 'Eventos',
    getstarted: 'Primeros pasos',
    protocol: 'Referencia de Protocolo',
    infra: 'Infraestructura',
    discord: 'Discord de la Comunidad',
  },
  'pt-BR': {
    about: 'Sobre',
    features: 'Recursos',
    ecosystem: 'Ecossistema',
    roadmap: 'Roadmap',
    docs: 'Documentação',
    connect: 'Conectar',
    explorers: 'Exploradores',
    events: 'Eventos',
    getstarted: 'Primeiros passos',
    protocol: 'Referência de Protocolo',
    infra: 'Infraestrutura',
    discord: 'Discord da Comunidade',
  },
  ja: {
    about: 'Xahauについて',
    features: '機能',
    ecosystem: 'エコシステム',
    roadmap: 'ロードマップ',
    docs: 'ドキュメント',
    connect: 'コネクト',
    explorers: 'エクスプローラー',
    events: 'イベント',
    getstarted: 'はじめる',
    protocol: 'プロトコルリファレンス',
    infra: 'インフラストラクチャ',
    discord: 'コミュニティDiscord',
  },
}

const XahauLogo = ({ href }) => (
  <a href={href} className="-m-1.5 p-1.5">
    <span className="sr-only">Xahau</span>
    <img src={logo.src} width="200" height="36" alt="Xahau Logo" />
  </a>
)

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = props.url.pathname
  const currentLocale = props.locale || 'en'
  const t = nav[currentLocale] || nav.en

  function langUrl(code) {
    return getAlternateLocaleHref(pathname, code)
  }

  const socials = [
    { name: t.events, href: getRelativeLocaleUrl(currentLocale, '/connect') },
    {
      name: 'Dev Contest',
      href: getRelativeLocaleUrl(currentLocale, '/contest'),
    },
    { name: 'X / Twitter', href: 'https://x.com/XahauNetwork' },
    { name: 'GitHub', href: 'https://github.com/Xahau' },
    { name: t.discord, href: 'https://discord.com/invite/UzU58haAn4' },
  ]

  const docs = [
    { name: t.getstarted, href: getRelativeLocaleUrl(currentLocale, '/docs') },
    {
      name: t.protocol,
      href: getRelativeLocaleUrl(
        currentLocale,
        '/docs/protocol-reference/transactions',
      ),
    },
    { name: 'Hooks', href: getRelativeLocaleUrl(currentLocale, '/docs/hooks') },
    {
      name: 'Data APIs',
      href: getRelativeLocaleUrl(currentLocale, '/docs/data-apis'),
    },
    {
      name: t.infra,
      href: getRelativeLocaleUrl(
        currentLocale,
        '/docs/infrastructure/system-requirements',
      ),
    },
    {
      name: 'Whitepaper',
      href: getRelativeLocaleUrl(currentLocale, '/docs/resources/whitepaper'),
    },
  ]

  const explorers = [
    { name: 'XAHSCAN', href: 'https://xahscan.com/' },
    { name: 'Bithomp Xahau Explorer', href: 'https://xahauexplorer.com/en' },
    { name: 'XRPLWin Xahau Explorer', href: 'https://xahau.xrplwin.com/' },
    { name: 'Technical Explorer', href: 'https://explorer.xahau.network/' },
  ]

  const navItems = [
    {
      name: t.about,
      href: getRelativeLocaleUrl(currentLocale, '/about'),
      urlPattern: 'about',
    },
    {
      name: t.features,
      href: getRelativeLocaleUrl(currentLocale, '/features'),
      urlPattern: 'features',
    },
    {
      name: t.ecosystem,
      href: getRelativeLocaleUrl(currentLocale, '/ecosystem'),
      urlPattern: 'ecosystem',
    },
    {
      name: t.roadmap,
      href: getRelativeLocaleUrl(currentLocale, '/roadmap'),
      urlPattern: 'roadmap',
    },
    { name: t.docs, children: docs, urlPattern: 'docs' },
    { name: t.connect, children: socials },
    { name: t.explorers, children: explorers },
  ]

  const pathSegments = pathname.slice(1).split('/')
  const activeSegment =
    currentLocale !== 'en' ? pathSegments[1] : pathSegments[0]

  /* ── Shared class fragments ─────────────────────────────────────────────── */
  const linkBase =
    'no-underline text-sm font-medium transition-colors duration-150'
  const linkIdle = 'text-[#2d3e44] hover:text-[#0f2328]'
  const linkActive = 'text-[#007b3d]'

  const dropdownPanel =
    'absolute left-1/2 z-10 mt-3 w-52 -translate-x-1/2 overflow-hidden ' +
    'bg-white rounded-xl border border-[#e4edef] shadow-[0_4px_24px_-4px_rgba(15,35,40,0.12)] ' +
    'transition data-closed:translate-y-1 data-closed:opacity-0 ' +
    'data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in'

  const dropdownItem =
    'no-underline flex items-center px-3 py-2 text-sm text-[#2d3e44] ' +
    'hover:text-[#0f2328] hover:bg-[#f4f6f7] rounded-lg transition-colors duration-100'

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-[#e4edef]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 h-[64px]"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <XahauLogo href={getRelativeLocaleUrl(currentLocale, '/')} />
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="border-none bg-transparent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#556068] hover:text-[#0f2328] transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-5" />
          </button>
        </div>

        {/* ── Desktop navigation ─────────────────────────────────────────── */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navItems.map((navItem) => {
            const isActive =
              navItem.urlPattern && activeSegment === navItem.urlPattern

            /* Plain link */
            if (navItem.href) {
              return (
                <a
                  key={navItem.name}
                  href={navItem.href}
                  className={`${linkBase} ${isActive ? linkActive : linkIdle} relative`}
                >
                  {navItem.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-[#007b3d] rounded-t-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              )
            }

            /* Dropdown */
            return (
              <Popover key={navItem.name} className="relative">
                <PopoverButton
                  className={`${linkBase} ${isActive ? linkActive : linkIdle} p-0 border-none bg-transparent flex items-center gap-x-1 hover:cursor-pointer`}
                >
                  {navItem.name}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-4 flex-none text-[#8fa5ad] mt-px"
                  />
                </PopoverButton>
                <PopoverPanel transition className={dropdownPanel}>
                  <div className="p-1.5">
                    {navItem.children.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className={dropdownItem}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            )
          })}

          {/* ── Language switcher ─────────────────────────────────────────── */}
          <Popover className="relative">
            <PopoverButton
              className="no-underline p-0 border-none flex items-center gap-x-1 bg-transparent hover:cursor-pointer text-[#8fa5ad] hover:text-[#556068] transition-colors"
              aria-label="Select language"
            >
              <GlobeAltIcon className="size-4" />
              <ChevronDownIcon
                aria-hidden="true"
                className="size-3.5 flex-none"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className={`${dropdownPanel} right-0 left-auto -translate-x-0 w-40`}
            >
              <div className="p-1.5">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={langUrl(lang.code)}
                    className={`no-underline flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors duration-100
                      ${
                        currentLocale === lang.code
                          ? 'text-[#007b3d] font-semibold bg-[#f4f6f7]'
                          : 'text-[#2d3e44] hover:bg-[#f4f6f7] hover:text-[#0f2328]'
                      }`}
                  >
                    <span>{lang.label}</span>
                    {currentLocale === lang.code && (
                      <span className="size-1.5 rounded-full bg-[#007b3d]" />
                    )}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
      </nav>

      {/* ── Mobile menu ────────────────────────────────────────────────────── */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-[#0f2328]/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm border-l border-[#e4edef]">
          <div className="flex items-center justify-between">
            <XahauLogo href={getRelativeLocaleUrl(currentLocale, '/')} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="border-none bg-transparent -m-2.5 rounded-md p-2.5 text-[#556068] hover:text-[#0f2328] transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-[#e4edef]">
              <div className="space-y-0.5 py-6">
                {navItems.map((navItem) => {
                  const isActive =
                    navItem.urlPattern && activeSegment === navItem.urlPattern

                  if (navItem.href) {
                    return (
                      <a
                        key={navItem.name}
                        href={navItem.href}
                        className={`no-underline -mx-3 flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                          ${isActive ? 'text-[#007b3d] bg-[#f4f6f7]' : 'text-[#2d3e44] hover:bg-[#f4f6f7] hover:text-[#0f2328]'}`}
                      >
                        {navItem.name}
                        {isActive && (
                          <span className="ml-auto size-1.5 rounded-full bg-[#007b3d]" />
                        )}
                      </a>
                    )
                  }

                  return (
                    <Disclosure key={navItem.name} as="div" className="-mx-3">
                      <DisclosureButton
                        className={`no-underline border-none rounded-lg py-2.5 text-sm font-medium bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 transition-colors
                          ${isActive ? 'text-[#007b3d]' : 'text-[#2d3e44] hover:bg-[#f4f6f7] hover:text-[#0f2328]'}`}
                      >
                        {navItem.name}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-4 flex-none text-[#8fa5ad] group-data-open:rotate-180 transition-transform duration-200"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-0.5 space-y-0.5 pb-2">
                        {navItem.children.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            target={
                              item.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              item.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="no-underline block rounded-lg py-2 pr-3 pl-6 text-sm text-[#556068] hover:bg-[#f4f6f7] hover:text-[#0f2328] transition-colors"
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
                  <DisclosureButton className="border-none rounded-lg py-2.5 text-sm font-medium text-[#2d3e44] bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 no-underline hover:bg-[#f4f6f7] hover:text-[#0f2328] transition-colors">
                    <span className="flex items-center gap-x-2">
                      <GlobeAltIcon className="size-4 text-[#8fa5ad]" />
                      {languages.find((l) => l.code === currentLocale)?.label}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-4 flex-none text-[#8fa5ad] group-data-open:rotate-180 transition-transform duration-200"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-0.5 space-y-0.5 pb-2">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        href={langUrl(lang.code)}
                        className={`no-underline flex items-center justify-between rounded-lg py-2 pr-3 pl-6 text-sm transition-colors
                          ${currentLocale === lang.code ? 'text-[#007b3d] font-semibold' : 'text-[#556068] hover:bg-[#f4f6f7] hover:text-[#0f2328]'}`}
                      >
                        <span>{lang.label}</span>
                        {currentLocale === lang.code && (
                          <span className="size-1.5 rounded-full bg-[#007b3d]" />
                        )}
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
