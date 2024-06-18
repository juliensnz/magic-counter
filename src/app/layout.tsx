import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

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
/*<meta name="viewport" content="user-scalable=no">

<meta name="apple-mobile-web-app-title" content="XXXXXX">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">*/
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
