import LoaderComponent from '../components/loader';
import Page from '../components/page';
import styled from 'styled-components';
import useSWR from 'swr';

const InfoBlocksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
const InfoBlock = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 18rem;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    min-width: 18rem;
    padding: 1rem;
    background: #efefef;
    border-radius: 0.25rem;
    border: 0.15rem solid #efefef;
    text-transform: uppercase;

    div {
        width: 7rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: #333;
    }
    span {
        display: block;
        width: 100%;
        font-size: 3rem;
        font-weight: 600;
        text-align: right;
        color: #63988d;
    }
`;

const IndexPage = () => {
    const { data: alive } = useSWR('/api/heartbeat/alive');
    const { data: allTime } = useSWR('/api/heartbeat/all-time');

    if (!allTime || !alive) return <LoaderComponent />;

    return (
        <Page>
            <InfoBlocksWrapper>
                <InfoBlock>
                    <div>Servers Alive</div>
                    <span>{alive?.heartbeats?.length ?? '...'}</span>
                </InfoBlock>
                <InfoBlock>
                    <div>Total Servers</div>
                    <span>{allTime?.heartbeats?.length ?? '...'}</span>
                </InfoBlock>
                <InfoBlock>
                    <div>Current Players</div>
                    <span>
                        {alive?.heartbeats?.map((a) => a.player_count).reduce((a, b) => a + b, 0) ??
                            '...'}
                    </span>
                </InfoBlock>
                <InfoBlock>
                    <div>Total Uptime (hrs)</div>
                    <span>
                        {Math.round(
                            (alive?.heartbeats?.map((a) => a.uptime).reduce((a, b) => a + b, 0) /
                                1000 /
                                60 /
                                60) *
                                100
                        ) / 100 || '...'}
                    </span>
                </InfoBlock>
            </InfoBlocksWrapper>
        </Page>
    );
};

export default IndexPage;
