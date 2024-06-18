import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Magic counter',
  description: 'Count life points for Magic: The Gathering',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body style={{margin: 0}} className={inter.className}>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
