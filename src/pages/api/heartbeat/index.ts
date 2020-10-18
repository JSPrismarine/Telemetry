import withConnect from "../../../hoc/withConnect";
import Heartbeat from '../../../models/heartbeat';

const HeartbeatRoute = async ({ body, method }, res) => {
    if (method === 'GET') {
        const heartbeats = await Heartbeat.find({}, null, {sort: {'_id': -1}});

        res.status(200).send({
            heartbeats: heartbeats.map(heartbeat => ({
                ...heartbeat.toObject(),
                _id: undefined
            }))
        });
        return;
    }

    const heartbeat = new Heartbeat({
        ...body,
    });
    await heartbeat.save();

    res.status(200).send({
        ...heartbeat.toObject()
    });
};

export default withConnect(HeartbeatRoute);
