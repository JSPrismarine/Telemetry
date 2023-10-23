import mongoose, { Schema } from 'mongoose';

const Error = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: false
        },
        error: {
            name: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            stack: {
                type: String,
                required: true
            },
            log: {
                type: String,
                required: false
            }
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
    { versionKey: false }
);

export default mongoose.models?.Error || mongoose.model('Error', Error);
