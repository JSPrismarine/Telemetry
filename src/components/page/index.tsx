import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 0px 0.5rem;
    max-width: 1248px;
    width: 100vw;
`;

const Page = ({ children }) => {
    return (
        <Main>
            <Content>{children}</Content>
        </Main>
    );
};

export default Page;
