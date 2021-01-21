import Error from '../../../models/error';
import withConnect from '../../../hoc/withConnect';

const ErrorRoute = async ({ body, method }, res) => {
    if (method === 'GET') {
        const errors = await Error.find({}, null, { sort: { _id: -1 } });

        res.status(200).send({
            errors: errors.map((heartbeat) => ({
                ...heartbeat.toObject(),
                _id: undefined
            }))
        });
        return;
    }

    const error = new Error({
        ...body
    });
    await error.save();

    res.status(200).send({
        ...error.toObject()
    });
};

export default withConnect(ErrorRoute);
