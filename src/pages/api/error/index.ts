import Error from '../../../models/error';
import withConnect from '../../../hoc/withConnect';

const ErrorRoute = async ({ body, method }, res) => {
    if (method === 'GET') {
        const errors = (await Error.find({}, null, { sort: { _id: -1 } })).map((error) => ({
            ...error.toObject()
        }));

        res?.status(200)?.send({
            errors: errors
        });
        return errors;
    }

    const error = new Error({
        ...body
    });
    await error.save();

    res?.status(200)?.send({
        ...error.toObject(),
        id: error._id
    });
};

export default withConnect(ErrorRoute);
