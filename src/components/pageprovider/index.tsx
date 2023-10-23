import Header from '../header';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100vw;
`;

const Content = styled.div`
    padding: 0.5rem;
    min-height: calc(100vh - 6rem);
`;

const Footer = styled.footer`
    text-align: center;
    font-size: 0.75rem;
`;

const PageProvider = ({ children }: any) => {
    return (
        <Container>
            <Header />
            <Content>{children}</Content>
            <Footer>
                <span>&copy; 2020-2021 the JSPrismarine development team</span>
                {' - '}
                <span>
                    Built by <a href="https://nordcom.io/">Filiph Siitam Sandström</a>
                </span>
            </Footer>
        </Container>
    );
};

export default PageProvider;
