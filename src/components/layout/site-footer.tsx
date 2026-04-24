import Link from 'next/link';
import { PageContainer } from './page-container';
import Image from 'next/image';

const footerLinks = [
  { label: 'Politika privatnosti', href: '/politika-privatnosti' },
  { label: 'Uslovi korišćenja', href: '/uslovi-koriscenja' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/kontakt' },
];

export function SiteFooter() {
  return (
    <footer className='border-t border-neutral-200 bg-white py-5'>
      <PageContainer>
        <div className='flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between'>
          <div className='gap-4 flex flex-col'>
            <Image
              className='bg-[#2d2d2d2]'
              src='/logo.png'
              alt=''
              width={33}
              height={33}
            />
            <p>© {new Date().getFullYear()} Glowuj</p>
          </div>

          <nav className='flex flex-wrap items-center gap-4'>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='transition hover:text-neutral-900'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </PageContainer>
    </footer>
  );
}
