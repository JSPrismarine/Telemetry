import Heartbeat from '../../../models/heartbeat';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ body, method }, res) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 10);

    const heartbeats = await Heartbeat.find(
        {
            timestamp: {
                $gte: date
            }
        },
        null,
        { sort: { timestamp: 1 } }
    );

    const unique = heartbeats
        .map((heartbeat) => ({
            ...heartbeat.toObject()
        }))
        .reduce((arr, item) => {
            const removed = arr.filter((i) => i.id !== item.id);
            return [...removed, item];
        }, []);

    res.status(200).send({
        heartbeats: unique
    });
};

export default withConnect(AliveHeartbeatRoute);
