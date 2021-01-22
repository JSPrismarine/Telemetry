import {
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import styles from './charting.module.scss';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#c53bd1', '#82ca9d'];

const Charting = (props) => {
    const data: any[] = props.data?.map((beat) => ({
        ...beat,
        id: beat.id.substring(0, 7)
    }));
    const compareData: any[] = props.compare?.map((beat) => ({
        ...beat,
        id: beat.id.substring(0, 7)
    }));

    if (!data) return null;

    const versions = [];
    data.forEach((beat) => {
        for (let i = 0; i < versions.length; i++) {
            if (versions[i].name === beat.version.split(':')[0]) {
                versions[i].value += 1;
                return;
            }
        }
        versions.push({
            name: beat.version.split(':')[0],
            value: 1
        });
    });

    const versionsCompare = [];
    compareData.forEach((beat) => {
        for (let i = 0; i < versionsCompare.length; i++) {
            if (versionsCompare[i].name === beat.version.split(':')[0]) {
                versionsCompare[i].value += 1;
                return;
            }
        }
        versionsCompare.push({
            name: beat.version.split(':')[0],
            value: 1
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

    return (
        <div className={styles.container}>
            <div>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={versions} dataKey="value" outerRadius={60}>
                            {versions.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>

                        <Pie
                            data={versionsCompare}
                            dataKey="value"
                            outerRadius={90}
                            innerRadius={70}
                            label
                        >
                            {versionsCompare.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div>
                <ResponsiveContainer>
                    <ComposedChart data={tps}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tps" />
                        <YAxis />
                        <Bar dataKey="servers" fill="#82ca9d" />
                        <Tooltip />
                        <Legend />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charting;
