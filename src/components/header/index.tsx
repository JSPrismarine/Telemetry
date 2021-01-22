import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1fr;
    padding: 1.5rem;
    background: #63988d;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        padding: 0px;
    }

    nav {
        display: flex;
        gap: 1rem;

        @media (max-width: 960px) {
            overflow-x: auto;
            justify-content: center;
            min-width: 100vw;
            height: 2.5rem;
            background: rgba(255, 255, 255, 0.15);
            line-height: 2.5rem;
            font-weight: 500;
        }

        a {
            text-decoration: none;
            text-transform: uppercase;
            color: #fff;
        }
    }
`;

const Logo = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;

    @media (max-width: 960px) {
        width: 100vw;
        padding: 1rem;
        text-align: center;
    }
`;

const HeaderComponent = () => {
    return (
        <Header>
            <Logo href="/">JSPrismarine Telemetry</Logo>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/error">Crash logs</Link>
            </nav>
        </Header>
    );
};

export default HeaderComponent;
