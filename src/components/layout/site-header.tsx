import Link from 'next/link';
import { PageContainer } from './page-container';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur'>
      <PageContainer>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex'>
            <Image
              className='bg-[#2d2d2]'
              src='/logo.png'
              alt=''
              width={33}
              height={33}
            />
            <Link
              href='/'
              className='text-sm pt-2 pl-1 font-semibold tracking-tight text-neutral-950'
            >
              lowuj
            </Link>
          </div>

          <a
            href='/analiza'
            className='items-center justify-center bg-black/70 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/50'
          >
            Započni analizu
          </a>
        </div>
      </PageContainer>
    </header>
  );
}
