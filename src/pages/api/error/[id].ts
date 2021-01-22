import Error from '../../../models/error';
import withConnect from '../../../hoc/withConnect';

const AliveHeartbeatRoute = async ({ body, method, query }, res) => {
    const error = await Error.findOne({
        _id: query.id
    });

    res.status(200).send({
        error
    });
};

export default withConnect(AliveHeartbeatRoute);
