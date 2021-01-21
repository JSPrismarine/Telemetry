import mongoose, { Schema } from 'mongoose';

const Heartbeat = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        version: {
            type: String,
            required: true
        },
        player_count: {
            type: Number,
            required: true
        },
        max_player_count: {
            type: Number,
            required: true
        },
        plugins: [
            {
                name: {
                    type: String,
                    required: true
                },
                version: {
                    type: String,
                    required: true
                }
            }
        ],
        tps: {
            type: Number,
            required: true
        },
        uptime: {
            type: Number,
            required: true
        },
        node_env: {
            type: String,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
    { versionKey: false }
);

export default mongoose.models.Heartbeat || mongoose.model('Heartbeat', Heartbeat);
