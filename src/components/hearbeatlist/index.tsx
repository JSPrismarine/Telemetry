const HearbeatList = ({ children }: any) => {
    return (
        <table>
            <tr>
                <th>id</th>
                <th>version</th>
                <th>player_count</th>
                <th>max_player_count</th>
                <th>plugins</th>
                <th>tps</th>
                <th>uptime</th>
                <th>node_env</th>
                <th>timestamp</th>
            </tr>
            {children}
        </table>
    );
};

export default HearbeatList;
