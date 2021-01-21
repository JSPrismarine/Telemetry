import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const ServerPage = () => {
    const router = useRouter();
    const { data } = useSWR(`/api/error/${router.query.id}`);
    const error = data?.error;

    return (
        <div>
            <h1>{error?.id}</h1>
            <h2>{error?.name}</h2>
            <SyntaxHighlighter style={dark}>{error?.message}</SyntaxHighlighter>
            <SyntaxHighlighter style={dark}>{error?.stack}</SyntaxHighlighter>
        </div>
    );
};

export default ServerPage;
