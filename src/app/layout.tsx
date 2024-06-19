import type {Metadata, Viewport} from 'next';
import {Inter} from 'next/font/google';
import {GlobalStyles, StyledComponentsRegistry} from '@/lib/registry';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Magic counter',
  description: 'Count life points for Magic: The Gathering',
  viewport: 'width=device-width, initial-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    title: 'Magic counter',
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#00aaaa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body style={{margin: 0, backgroundColor: '#00aaaa'}} className={inter.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
