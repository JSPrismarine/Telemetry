import Loader from 'react-loader-spinner';
import Page from './page';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    min-height: calc(100vh - 6rem);
`;

const LoaderComponent = () => {
    return (
        <LoaderWrapper>
            <Loader type="TailSpin" color="#63988d" height={100} width={100} />
        </LoaderWrapper>
    );
};

export default LoaderComponent;
