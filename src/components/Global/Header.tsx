'use client';
import React from 'react';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaBars, FaChevronDown, FaPhoneAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link, usePathname, useRouter } from '@/app/(website)/i18n/routing';
import { useLocale } from 'next-intl';
import { IoMail } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

interface Language {
  code: string;
  label: string;
  emoji: string;
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Partners', href: '/our-partners' },
  { name: 'Lifelong Learning', href: '/lifelong-learning' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Team', href: '/team' },
  { name: 'Contact Us', href: '/contact-us' },
];

const languages: Language[] = [
  {
    code: 'en',
    label: 'english',
    emoji: '🇺🇸'
  },
  {
    code: 'nl',
    label: 'dutch',
    emoji: '🇳🇱'
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isTransparent, setIsTransparent] = React.useState(false);

  React.useEffect(() => {
    setIsTransparent(pathname === '/');
  }, [pathname]);

  const handleLanguageChange = (newLang: 'en' | 'nl') => {
    router.push(pathname, { locale: newLang });
  };

  return (
    <>

      <header className={`${isTransparent ? 'bg-transparent md:absolute md:top-0 md:left-0' : 'bg-white'} w-full z-50`}>

        <div className="hidden container mx-auto md:flex justify-end pt-2 text-xs">
          <div className="flex items-center gap-4 px-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary-500" />
              <span>+31 (0)70 88 77 530</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMail className="text-primary-500" />
              <span>team@vitacare.nu</span>
            </div>
            <div className="flex items-center gap-2">
              <IoIosPin className="text-primary-500" />
              <span>Rentmeesterstraat 71, 2288 GW Rijswijk</span>
            </div>
          </div>

          <div className=" flex items-center gap-4 px-4">
            <FaTwitter className="text-primary-500" />
            <FaLinkedin className="text-primary-500" />
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent py-1 px-3 text-sm font-semibold text-primary-500">
                <span className="mr-1">
                  {languages.find(lang => lang.code === currentLocale)?.emoji}
                </span>
                <FaChevronDown className="text-primary-500" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="absolute z-50 right-0 mt-2 w-52 origin-top-right rounded-xl border border-gray-200 bg-white shadow-lg p-1 text-sm text-gray-900 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 transition duration-100 ease-out"
              >
                {languages.map((lang) => (
                  <MenuItem key={lang.code}>
                    <button
                      onClick={() => handleLanguageChange(lang.code as 'en' | 'nl')}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 data-[focus]:bg-gray-100"
                    >
                      <span className="mr-2">{lang.emoji}</span>
                      {lang.label}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

          </div>
        </div>

        <nav aria-label="Global" className=" mx-auto flex container items-center justify-between py-2 lg:px-6">
          <div className="flex lg:flex-1">
            <Link href="#" className="md:-mt-10 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/img/VitaCare_Logo-01.png"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase font-semibold ${pathname === item.href ? '!text-primary-500' : 'text-gray-900 hover:text-primary-500'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact-us" className="text-sm font-semibold text-white py-2 px-6 bg-primary-500 rounded-full">
              Enquire Us
            </Link>
          </div>

          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           

          </div> */}
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/img/VitaCare_Logo-01.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FaXmark aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${pathname === item.href ? 'text-primary-500' : 'text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header >
    </>
  );
}
