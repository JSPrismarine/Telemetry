import styled from 'styled-components';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    min-height: calc(100vh - 12rem);
`;

const LoaderComponent = () => {
    return <LoaderWrapper>Loading...</LoaderWrapper>;
};

export default LoaderComponent;
