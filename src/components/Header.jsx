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
  XMarkIcon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'

const socials = [
  { name: 'Events', href: '/connect' },
  { name: 'Dev Contest', href: '/contest' },
  { name: 'X', href: 'https://x.com/XahauNetwork' },
  { name: 'GitHub', href: 'https://github.com/Xahau' },
  { name: 'Community Discord', href: 'https://discord.com/invite/UzU58haAn4' },
]

const docs = [
  { name: 'Get started', href: '/docs' },
  { name: 'Protocol Reference', href: '/docs/protocol-reference/transactions' },
  { name: 'Hooks', href: '/docs/hooks' },
  { name: 'Data APIs', href: '/docs/data-apis' },
  { name: 'Infrastructure', href: '/docs/infrastructure/system-requirements' },
  { name: 'Whitepaper', href: '/docs/resources/whitepaper' },
]

const explorers = [
  { name: 'XAHSCAN', href: 'https://xahscan.com/' },
  { name: 'Bithomp Xahau Explorer', href: 'https://xahauexplorer.com/en' },
  { name: 'XRPLWin Xahau Explorer', href: 'https://xahau.xrplwin.com/' },
  { name: 'Technical Explorer', href: 'https://explorer.xahau.network/' },
]

// Navigation items definition shared between desktop and mobile
const navItems = [
  { name: 'About', link: '/about', urlPattern: 'about' },
  { name: 'Features', link: '/features', urlPattern: 'features' },
  { name: 'Ecosystem', link: '/ecosystem', urlPattern: 'ecosystem' },
  { name: 'Roadmap', link: '/roadmap', urlPattern: 'roadmap' },
  { name: 'Documentation', links: docs, urlPattern: 'docs' },
  { name: 'Connect', links: socials },
  { name: 'Explorers', links: explorers },
]

import logo from '../assets/xahau-logo.svg'

const XahauLogo = () => (
  <a href="/" className="-m-1.5 p-1.5">
    <span className="sr-only">Xahau</span>
    <img src={logo.src} width="222" height="40" alt="Xahau Logo" />
  </a>
)

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header bg-xahau-background z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
      >
        <div className="flex lg:flex-1">
          <XahauLogo />
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navItems.map((navItem) => {
            const isActive =
              navItem.urlPattern &&
              props.url.pathname.slice(1).split('/')[0] === navItem.urlPattern
            // Single link item
            if (navItem.link) {
              return (
                <a
                  key={navItem.name}
                  href={navItem.link}
                  className={`selected:no-underline no-underline text-base text-black ${isActive ? 'font-bold' : 'font-regular'}`}
                >
                  {navItem.name}
                </a>
              )
            }
            // Dropdown item
            return (
              <Popover key={navItem.name} className="relative">
                <PopoverButton
                  className={`selected:no-underline no-underline p-0 border-none text-base text-black flex items-center gap-x-1 bg-transparent hover:cursor-pointer ${isActive ? 'font-bold' : 'font-regular'}`}
                >
                  {navItem.name}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-black"
                  />
                </PopoverButton>
                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-max -translate-x-1/2 overflow-hidden bg-xahau-gray shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {navItem.links.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={
                          item.href.startsWith('http') ? '_blank' : undefined
                        }
                        className="no-underline block font-regular text-white"
                      >
                        <div className="group relative flex items-center gap-x-6 p-2 text-sm/6">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            )
          })}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <XahauLogo />
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
                  const isActive =
                    navItem.urlPattern &&
                    props.url.pathname.slice(1).split('/')[0] ===
                      navItem.urlPattern
                  // Single link item
                  if (navItem.link) {
                    return (
                      <a
                        key={navItem.name}
                        href={navItem.link}
                        className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50 text-black ${isActive ? 'font-bold' : 'font-regular'}`}
                      >
                        {navItem.name}
                      </a>
                    )
                  }
                  // Dropdown item
                  return (
                    <Disclosure key={navItem.name} as="div" className="-mx-3">
                      <DisclosureButton
                        className={`selected:no-underline no-underline border-none rounded-lg py-2 text-base/7 hover:bg-gray-50 text-black bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 ${isActive ? 'font-bold' : 'font-regular'}`}
                      >
                        {navItem.name}
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 flex-none group-data-open:rotate-180"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {navItem.links.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            target={
                              item.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
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
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
