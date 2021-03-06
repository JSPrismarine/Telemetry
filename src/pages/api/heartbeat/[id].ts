import Heartbeat from '../../../models/heartbeat';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ body, method, query }, res) => {
    const heartbeats = await Heartbeat.find(
        {
            id: query.id
        },
        null,
        { sort: { date: 1 } }
    ).exec();

    res.status(200).send({
        heartbeats: heartbeats.map((heartbeat) => ({
            ...heartbeat.toObject()
        }))
    });
};

export default withConnect(AliveHeartbeatRoute);
