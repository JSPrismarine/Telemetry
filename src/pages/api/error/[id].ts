import Error from '../../../models/error';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ query }: any, res: any) => {
    const error = await Error.findOne({
        _id: query.id
    });

    res?.status(200)?.send({
        error
    });

    return error;
};

export default withConnect(AliveHeartbeatRoute);
