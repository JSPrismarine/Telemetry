import React from 'react';
import PageProvider from '../components/pageprovider';
import '../scss/_app.scss';

const App = ({ Component, pageProps }) => {
    return (
        <PageProvider>
            <Component {...pageProps} />
        </PageProvider>
    );
};

export default App;
