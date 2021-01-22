import '../scss/_app.scss';

import Head from 'next/head';
import PageProvider from '../components/pageprovider';
import React from 'react';

const App = ({ Component, pageProps }) => {
    return (
        <PageProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </PageProvider>
    );
};

export default App;
