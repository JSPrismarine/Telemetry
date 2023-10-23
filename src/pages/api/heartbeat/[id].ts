import Heartbeat from '../../../models/heartbeat';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ query }: any, res: any) => {
    const heartbeats = await Heartbeat.find(
        {
            id: query.id
        },
        null,
        { sort: { date: 1 } }
    ).exec();

    res.status(200).send({
        heartbeats: heartbeats.map((heartbeat: any) => ({
            ...heartbeat.toObject()
        }))
    });
};

export default withConnect(AliveHeartbeatRoute);
