'use client';

import React, {useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {styleReset} from 'react95';
import original from 'react95/dist/themes/original';
import localFont from 'next/font/local';

const ms_sans_serif = localFont({src: '../../node_modules/react95/dist/fonts/ms_sans_serif.woff2'});
const ms_sans_serif_bold = localFont({src: '../../node_modules/react95/dist/fonts/ms_sans_serif_bold.woff2'});

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const StyledComponentsRegistry = ({children}: {children: React.ReactNode}) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};

export {GlobalStyles, StyledComponentsRegistry};
