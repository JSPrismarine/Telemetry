import Page from '../../components/page';
import moment from 'moment';
import styled from 'styled-components';
import useSWR from 'swr';

const List = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
`;

const ListEntry = styled.a`
    display: grid;
    grid-template-columns: auto 1fr 8fr;
    grid-gap: 0.5rem;
    min-height: 3.5rem;
    max-width: 100%;
    padding: 0.5rem;
    background: #efefef;
    border-radius: 0.25rem;
    border: 0.15rem solid #efefef;
    cursor: pointer;
    transition: 250ms;
    color: #000;
    text-decoration: none;
    text-overflow: ellipsis;

    @media (max-width: 960px) {
        grid-template-columns: auto;

        div {
            display: none;
        }
    }

    &:hover {
        border: 0.15rem solid #63988d;
    }
`;

const ErrorPage = () => {
    const { data } = useSWR(`/api/error`);

    return (
        <Page>
            <List>
                {data?.errors?.map?.((entry) => (
                    <ListEntry key={entry.id} href={`/error/${entry.id}`}>
                        <div>{moment(entry.timestamp).format('MM/DD/YYYY MM:HH:SS')}</div>
                        <b>{entry.error.name}</b>
                        <code>{entry.error.message}</code>
                    </ListEntry>
                ))}
            </List>
        </Page>
    );
};

export default ErrorPage;
