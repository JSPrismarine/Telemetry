import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import styles from './charting.module.scss';

const Charting = (props) => {
    const data: any[] = props.data?.map(beat => ({
        ...beat,
        id: beat.id.substring(0, 7)
    }));

    if (!data)
        return null;

    const versions = [];
    data.forEach((beat) => {
        for (let i = 0; i < versions.length; i++) {
            if (versions[i].version === beat.version) {
                versions[i].servers += 1;
                return;
            }
        }
        versions.push({
            version: beat.version,
            servers: 1
        });
    });

    const tps = [];
    data.forEach((beat) => {
        for (let i = 0; i < tps.length; i++) {
            if (tps[i].tps === beat.tps) {
                tps[i].servers += 1;
                return;
            }
        }
        tps.push({
            tps: beat.tps,
            servers: 1
        });
    });

    const uptime = [];
    data.forEach((beat) => {
        for (let i = 0; i < uptime.length; i++) {
            if (uptime[i].uptime === beat.uptime) {
                uptime[i].servers += 1;
                return;
            }
        }
        uptime.push({
            uptime: beat.uptime,
            servers: 1
        });
    });

    return (
        <div className={styles.container}>
            <div>
                <h2>Versions</h2>
                <BarChart
                    width={500}
                    height={300}
                    data={versions}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="version" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="servers" fill="#82ca9d" />
                </BarChart>
            </div>

            <div>
                <h2>TPS</h2>
                <BarChart
                    width={500}
                    height={300}
                    data={tps}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tps" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="servers" fill="#82ca9d" />
                </BarChart>
            </div>

            <div>
                <h2>Uptime</h2>
                <BarChart
                    width={500}
                    height={300}
                    data={uptime}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="uptime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="servers" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Charting;
