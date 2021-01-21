import '../scss/_app.scss';

import Head from 'next/head';
import PageProvider from '../components/pageprovider';
import React from 'react';

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

// Temp disable ssr
App.getInitialProps = async (ctx) => {
    return {};
};

export default App;
