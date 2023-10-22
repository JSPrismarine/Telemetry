import mongoose from 'mongoose';

const withConnect = (handler) => async (req, res) => {
    if (!mongoose.connection.readyState) {
        mongoose.connect(process.env.MONGODB as string);
    }

    return handler(req, res);
};

export default withConnect;
