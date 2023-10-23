import mongoose from 'mongoose';

const withConnect = (handler: any) => async (req: any, res: any) => {
    if (!mongoose.connection.readyState) {
        mongoose.connect(process.env.MONGODB_URI as string);
    }

    return handler(req, res);
};

export default withConnect;
