import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {GlobalStyles, StyledComponentsRegistry} from '@/lib/registry';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Magic counter',
  description: 'Count life points for Magic: The Gathering',
  viewport: 'width=device-width, initial-scale=1, user-scalable=no',
  appleWebApp: {
    capable: true,
    title: 'agic counter',
    statusBarStyle: 'default',
  },
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
        <body style={{margin: 0, backgroundColor: 'rgb(0, 128, 128)'}} className={inter.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
