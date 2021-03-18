import Heartbeat from '../../../models/heartbeat';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ body, method }, res) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 5);

    const heartbeats = await Heartbeat.find(
        {
            timestamp: {
                $gte: date
            }
        },
        null,
        { sort: { timestamp: 1 } }
    ).exec();

    const unique = heartbeats
        .map((heartbeat) => ({
            ...heartbeat.toObject()
        }))
        .reduce((arr, item) => {
            const removed = arr.filter((i) => i.id !== item.id);
            return [...removed, item];
        }, []);

    const result = {
        heartbeats: unique
    };
    res?.status(200)?.send(result);

    return result;
};

export default withConnect(AliveHeartbeatRoute);
