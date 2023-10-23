import 'destyle.css';
// Global styles
import '@/style/_app.scss';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import NProgress from 'nprogress';
import PageProvider from '../components/pageprovider';
import React from 'react';
import Router from 'next/router';
import SEO from '../../nextseo.config';

const font = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
    preload: true
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
Router.events.on('hashChangeComplete', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <style jsx global>{`
                html,
                body {
                    font-family:
                        ${font.style.fontFamily},
                        -apple-system,
                        BlinkMacSystemFont,
                        'Segoe UI',
                        Roboto,
                        Oxygen,
                        Ubuntu,
                        Cantarell,
                        sans-serif;
                }
            `}</style>

            <DefaultSeo {...SEO} themeColor="#ED1E79" />
            <Head>
                <title>JSPrismarine Telemetry</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <PageProvider>
                <Component {...pageProps} />
            </PageProvider>
        </>
    );
};

export default App;
