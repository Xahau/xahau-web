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

import logo from '../assets/xahau-logo.svg'

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header bg-xahau-background z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Xahau</span>
            <img src={logo.src} width="222" height="40" alt="Xahau Logo" />
          </a>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a
            href="/about"
            className={`selected:no-underline no-underline text-base text-black ${props.url.pathname.slice(1).split('/')[0] === 'about' ? 'font-bold' : 'font-regular'}`}
          >
            About
          </a>
          <a
            href="/features"
            className={`selected:no-underline no-underline text-base text-black ${props.url.pathname.slice(1).split('/')[0] === 'features' ? 'font-bold' : 'font-regular'}`}
          >
            Features
          </a>
          <a
            href="/ecosystem"
            className={`selected:no-underline no-underline text-base text-black ${props.url.pathname.slice(1).split('/')[0] === 'ecosystem' ? 'font-bold' : 'font-regular'}`}
          >
            Ecosystem
          </a>
          <a
            href="/roadmap"
            className={`selected:no-underline no-underline text-base text-black ${props.url.pathname.slice(1).split('/')[0] === 'roadmap' ? 'font-bold' : 'font-regular'}`}
          >
            Roadmap
          </a>
          <Popover className="relative">
            <PopoverButton
              className={`selected:no-underline no-underline p-0 border-none text-base text-black flex items-center gap-x-1 bg-transparent hover:cursor-pointer ${props.url.pathname.slice(1).split('/')[0] === 'docs' ? 'font-bold' : 'font-regular'}`}
            >
              Documentation
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
                {docs.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="no-underline block font-regular text-white"
                  >
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 p-2 text-sm/6"
                    >
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex p-0 border-none items-center gap-x-1 text-base font-regular text-black bg-transparent hover:cursor-pointer ">
              Connect
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
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="no-underline block font-regular text-white"
                  >
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 p-2 text-sm/6"
                    >
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex p-0 border-none items-center gap-x-1 text-base font-regular text-black bg-transparent hover:cursor-pointer">
              Explorers
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
                {explorers.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    className="no-underline block font-regular text-white"
                  >
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 p-2 text-sm/6"
                    >
                      {item.name}
                    </div>
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
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
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Xahau</span>
              <svg
                role="img"
                aria-label="Xahau Logo"
                width="222"
                height="40"
                viewBox="0 0 222 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M196.582 22.9795C196.582 26.6118 195.814 29.7198 194.279 32.3037C192.744 34.8502 190.648 36.7791 187.989 38.0898C185.368 39.3631 182.448 40 179.228 40C176.008 40 173.124 39.3631 170.578 38.0898C168.07 36.7791 166.085 34.8502 164.625 32.3037C163.202 29.7573 162.491 26.6492 162.491 22.9795V22.5312L173.442 21.5986V22.9795C173.442 25.1139 173.93 26.762 174.903 27.9229C175.914 29.0835 177.431 29.664 179.452 29.6641C181.474 29.6641 182.991 29.0838 184.002 27.9229C185.05 26.7245 185.574 25.0765 185.574 22.9795V20.5645L196.582 19.627V22.9795ZM20.4434 10.9014L26.8457 0.00390625H39.3701L26.6777 19.9453L31.6494 27.168L19.6064 28.4375L19.5811 28.4795L19.5449 28.4277L12.9736 39.6064H0.449219L13.3105 19.3281L0 0.00390625H12.9736L20.4434 10.9014ZM40.2129 39.6064H27.2393L23.7236 34.499L35.9688 33.4414L40.2129 39.6064ZM52.8643 39.6064H41.2949L43.7871 32.7656L55.458 31.7578L52.8643 39.6064ZM82.7988 39.6064H71.1738L68.2148 30.6553L79.2041 29.7061L82.7988 39.6064ZM95.71 39.6064H84.7021V29.2314L95.71 28.2803V39.6064ZM95.71 20.374L109.133 18.9795V0.00390625H120.142V39.6064H109.133V27.1367L95.7178 28.2773V20.416L84.7021 21.5762V0.00390625H95.71V20.374ZM133.624 39.6035H122.055L127.171 25.5625L138.591 24.5762L133.624 39.6035ZM163.56 39.6035H151.934L146.733 23.873L146.777 23.8701L143.93 15.3359L143.912 15.3369L142.779 11.9092L141.563 15.585L130.378 16.7637L136.488 0H149.182L163.56 39.6035ZM76.5645 22.4336L65.8691 23.5615L62.0186 11.9121L57.8896 24.4023L46.3936 25.6143L55.7285 0.00390625H68.4219L76.5645 22.4336ZM173.442 12.249L162.491 13.3936V0.00390625H173.442V12.249ZM196.582 9.8291L185.574 10.9805V0.00390625H196.582V9.8291Z"
                  fill="black"
                />
                <path
                  d="M220.158 11.4972C220.966 11.8662 221.06 12.946 220.327 13.441L208.951 21.1231C208.218 21.618 207.208 21.1569 207.133 20.293L205.97 6.88506C205.895 6.02116 206.811 5.40245 207.619 5.77138L220.158 11.4972Z"
                  fill="black"
                />
              </svg>
            </a>
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
                <a
                  href="/about"
                  className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black ${props.url.pathname.slice(1).split('/')[0] === 'about' ? 'font-bold' : 'font-regular'}`}
                >
                  About
                </a>
                <a
                  href="/features"
                  className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black ${props.url.pathname.slice(1).split('/')[0] === 'features' ? 'font-bold' : 'font-regular'}`}
                >
                  Features
                </a>
                <a
                  href="/resources/whitepaper"
                  className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black ${props.url.pathname.slice(1).split('/')[0] === 'whitepaper' ? 'font-bold' : 'font-regular'}`}
                >
                  Whitepaper
                </a>
                <a
                  href="/ecosystem"
                  className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black ${props.url.pathname.slice(1).split('/')[0] === 'ecosystem' ? 'font-bold' : 'font-regular'}`}
                >
                  Ecosystem
                </a>
                <a
                  href="/roadmap"
                  className={`selected:no-underline no-underline -mx-3 block rounded-lg px-3 py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black ${props.url.pathname.slice(1).split('/')[0] === 'roadmap' ? 'font-bold' : 'font-regular'}`}
                >
                  Roadmap
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`selected:no-underline no-underline border-none block rounded-lg py-2 text-base/7 text-base/7 hover:bg-gray-50 text-black bg-transparent group flex w-full items-center justify-between pr-3.5 pl-3 hover:bg-gray-50 ${props.url.pathname.slice(1).split('/')[0] === 'docs' ? 'font-bold' : 'font-regular'}`}
                  >
                    Documentation
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...docs].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="no-underline block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-regular text-black hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="border-none bg-transparent group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-regular text-black hover:bg-gray-50">
                    Connect
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...socials].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        target="_blank"
                        className="no-underline block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-regular text-black hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="border-none bg-transparent group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-regular text-black hover:bg-gray-50">
                    Explorers
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...explorers].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        target="_blank"
                        className="no-underline block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-regular text-black hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
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
