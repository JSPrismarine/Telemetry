import Heartbeat from '../../../models/heartbeat';
import withConnect from '../../../hoc/withConnect';

const AllTimeHeartbeatRoute = async ({}, res: any) => {
    const heartbeats = await Heartbeat.find({}, null, { sort: { timestamp: 1 } })
        .limit(2500) // TODO: fix this
        .exec();

    const result = {
        heartbeats: heartbeats
            .map((heartbeat) => ({
                ...heartbeat.toObject(),
                _id: heartbeat._id.toString()
            }))
            .reduce((arr, item) => {
                const removed = arr.filter((i: any) => i.id !== item.id);
                return [...removed, item];
            }, [])
    };
    res?.status(200).send(result);
    return result;
};

export default withConnect(AllTimeHeartbeatRoute);
