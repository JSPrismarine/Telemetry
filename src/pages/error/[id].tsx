import Page from '../../components/page';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import moment from 'moment';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/error/${router.query.id}`);
    const entry = data?.error;

    return (
        <Page>
            <h1>{entry?.error?.name}</h1>
            {moment(entry?.timestamp).format('LLLL')}
            <SyntaxHighlighter
                showLineNumbers
                wrapLongLines
                style={materialDark}
                language="javastacktrace"
            >
                {entry?.error?.stack || ''}
            </SyntaxHighlighter>
        </Page>
    );
};

export default ServerPage;
