import React from 'react';
import Head from 'next/head'
import PageProvider from '../components/pageprovider';
import '../scss/_app.scss';

const App = ({ Component, pageProps }) => {
    return (
        <PageProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </PageProvider>
    );
};

export default App;
