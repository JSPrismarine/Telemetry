const Heartbeat = ({ data }: any) => {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.version}</td>
            <td>{data.player_count}</td>
            <td>{data.max_player_count}</td>
            <td>{data.plugins.map((plugin: any) => `${plugin.name} v${plugin.version}`).join(', ')}</td>
            <td>{data.tps}</td>
            <td>{data.uptime}</td>
            <td>{data.node_env}</td>
            <td>{data.timestamp}</td>
        </tr>
    );
};

export default Heartbeat;
