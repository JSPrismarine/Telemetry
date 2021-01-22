import Page from '../../components/page';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import moment from 'moment';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ErrorHeader = styled.h1``;
const ErrorVersion = styled.div`
    font-weight: 400;
    color: #333;
`;
const ErrorDate = styled.div`
    font-weight: 600;
    color: #333;
`;

const CodeWrapper = styled.div`
    margin-top: 1rem;
`;

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/error/${router.query.id}`);
    const entry = data?.error;

    return (
        <Page>
            <ErrorHeader>Error: {entry?.error?.name}</ErrorHeader>
            <ErrorDate>{moment(entry?.timestamp).format('LLLL')}</ErrorDate>
            <ErrorVersion>
                {entry?.package || '@jsprismarine/prismarine'} - @{entry?.version ?? 'UNKNOWN'}
            </ErrorVersion>

            <CodeWrapper>
                <SyntaxHighlighter
                    showLineNumbers
                    wrapLongLines
                    style={materialDark}
                    language="javastacktrace"
                >
                    {entry?.error?.stack || ''}
                </SyntaxHighlighter>
            </CodeWrapper>
        </Page>
    );
};

export default ServerPage;
