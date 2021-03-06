import DefaultError from 'next/error';
import ErrorApi from '../api/error/[id]';
import ErrorsApi from '../api/error';
import { NextSeo } from 'next-seo';
import Page from '../../components/page';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import moment from 'moment';
import newIssue from 'new-github-issue-url';
import styled from 'styled-components';

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
    margin: 1rem 0px;
`;

const CreateIssue = styled.a`
    padding: 0.5rem 1rem;
    background: #63988d;
    border-radius: 0.25rem;
    text-decoration: none;
    color: #fff;
`;

const ServerPage = ({ data }) => {
    const entry = data?.error;

    if (!entry) return <DefaultError statusCode={404} />;

    return (
        <Page>
            <NextSeo
                title={`${entry?.error?.message} - JSPrismarine Telemetry`}
                description={entry?.error?.stack}
            />

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
                    {entry?.error?.stack || 'No stacktrace.'}
                </SyntaxHighlighter>
            </CodeWrapper>
        
            <CodeWrapper>
                <SyntaxHighlighter
                    showLineNumbers
                    wrapLongLines
                    style={materialDark}>
                    {entry?.error?.log || 'No log.'}
                </SyntaxHighlighter>
            </CodeWrapper>

            {entry && (
                <CreateIssue
                    href={newIssue({
                        user: 'JSPrismarine',
                        repo: 'JSPrismarine',
                        title: `Bug: ${entry.error.name}.`,
                        body: `**JSPrismarine version:** ${
                            entry.version ?? 'UNKNOWN'
                        }\n\n\n**Stack trace:**\n\`\`\`javascript\n${entry.error.stack}\n\`\`\``
                    })}
                >
                    Create GitHub Issue
                </CreateIssue>
            )}
        </Page>
    );
};

export async function getStaticPaths() {
    const errors = await ErrorsApi(
        {
            method: 'GET'
        },
        null
    );

    return {
        paths: errors
            ?.map((error) => ({
                params: { id: `${error._id}` }
            }))
            .filter((a) => a.params.id),
        fallback: true
    };
}

export async function getStaticProps({ params }) {
    try {
        const error =
            (await ErrorApi(
                {
                    method: 'GET',
                    query: {
                        id: params.id
                    }
                },
                null
            )) ?? null;

        return {
            props: {
                data: {
                    error: JSON.parse(JSON.stringify(error)) // Hack to stop next from complaining
                }
            },
            revalidate: 10
        };
    } catch (error) {
        console.error(error);
        return {
            props: {},
            revalidate: 10
        };
    }
}

export default ServerPage;
