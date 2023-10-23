import Charting from '../components/charting';
import type { GetStaticProps } from 'next';
import LoaderComponent from '../components/loader';
import Page from '../components/page';
import aliveRoute from './api/heartbeat/alive';
import allTimeRoute from './api/heartbeat/all-time';
import errorsRoute from './api/error';
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

const IndexPage = ({ data }: any) => {
    const { data: alive } = useSWR(
        ['/api/heartbeat/alive'],
        () =>
            aliveRoute(
                {
                    method: 'GET'
                },
                null
            ),
        {
            fallbackData: JSON.parse(data.alive || '{}')
        }
    );
    const { data: allTime } = useSWR(
        ['/api/heartbeat/all-time'],
        () =>
            allTimeRoute(
                {
                    method: 'GET'
                },
                null
            ),
        {
            fallbackData: JSON.parse(data.allTime || '{}')
        }
    );
    const { data: errorsData } = useSWR(
        ['/api/error'],
        () =>
            errorsRoute(
                {
                    method: 'GET'
                },
                null
            ),
        {
            fallbackData: JSON.parse(data.errors || '{}')
        }
    );
    const errors = errorsData?.errors;

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
                        {alive?.heartbeats?.map((a: any) => a.player_count).reduce((a: any, b: any) => a + b, 0) ??
                            '...'}
                    </span>
                </InfoBlock>
                <InfoBlock>
                    <div>Total Uptime (hrs)</div>
                    <span>
                        {Math.round(
                            (alive?.heartbeats?.map((a: any) => a.uptime).reduce((a: any, b: any) => a + b, 0) /
                                1000 /
                                60 /
                                60) *
                                100
                        ) / 100 || '...'}
                    </span>
                </InfoBlock>
            </InfoBlocksWrapper>
            <div>
                <Charting data={alive?.heartbeats} compare={allTime?.heartbeats} />
            </div>
            <InfoBlocksWrapper>
                <InfoBlock>
                    <div>Crashes (24hrs)</div>
                    <span>
                        {errors?.filter((a: any) => Date.now() - new Date(a.timestamp).getTime() < 24 * 60 * 60 * 1000)
                            .length ?? '...'}
                    </span>
                </InfoBlock>
                <InfoBlock>
                    <div>Crashes (7d)</div>
                    <span>
                        {errors?.filter(
                            (a: any) => Date.now() - new Date(a.timestamp).getTime() < 7 * 24 * 60 * 60 * 1000
                        ).length ?? '...'}
                    </span>
                </InfoBlock>
                <InfoBlock>
                    <div>Crashes (total)</div>
                    <span>{errors?.length ?? '...'}</span>
                </InfoBlock>
            </InfoBlocksWrapper>
        </Page>
    );
};

export const getStaticProps: GetStaticProps = async ({}) => {
    const alive =
        (await aliveRoute(
            {
                method: 'GET'
            },
            null
        )) ?? null;
    const allTime =
        (await allTimeRoute(
            {
                method: 'GET'
            },
            null
        )) ?? null;
    const errors =
        (await errorsRoute(
            {
                method: 'GET'
            },
            null
        )) ?? null;

    return {
        props: {
            data: {
                alive: JSON.stringify(alive),
                allTime: JSON.stringify(allTime),
                errors: JSON.stringify(errors)
            }
        },
        revalidate: 5
    };
};

export default IndexPage;
