import React from 'react';
import PageProvider from '../components/pageprovider';

const App = ({ Component, pageProps }) => {
    return (
        <PageProvider>
            <Component {...pageProps} />
        </PageProvider>
    );
};

export default App;
