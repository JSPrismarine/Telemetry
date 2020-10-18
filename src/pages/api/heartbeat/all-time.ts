import withConnect from "../../../hoc/withConnect";
import Heartbeat from '../../../models/heartbeat';

const AllTimeHeartbeatRoute = async ({ body, method }, res) => {
    const heartbeats = await Heartbeat.find({}, null, { sort: { timestamp: 1 } });

    res.status(200).send({
        heartbeats: heartbeats.map(heartbeat => ({
            ...heartbeat.toObject()
        })).reduce((arr, item) => {
            const removed = arr.filter(i => i.id !== item.id);
            return [...removed, item];
        }, [])
    });
};

export default withConnect(AllTimeHeartbeatRoute);
