import withConnect from "../../../hoc/withConnect";
import Heartbeat from '../../../models/heartbeat';

const AliveHeartbeatRoute = async ({ body, method }, res) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - 10);

    const heartbeats = await Heartbeat.find({
        timestamp: {
            $gte: date
        }
    }, null, { sort: { '_id': -1 } });

    res.status(200).send({
        heartbeats: heartbeats.map(heartbeat => ({
            ...heartbeat.toObject(),
            _id: undefined
        })).reduce((arr, item) => {
            const removed = arr.filter(i => i.id !== item.id);
            return [...removed, item];
        }, [])
    });
};

export default withConnect(AliveHeartbeatRoute);
