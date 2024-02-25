import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const lineColors = ["#FB8181", "#5E5ADB", "#54D787", "#82D1DB", "#F0AB24"]

interface Props{
    showAxisLabels: string | null;
    data: any[];
}

function LineGraph({showAxisLabels, data}:Props) {

    return (
        <LineChart
            width={210}
            height={showAxisLabels=="true" ? 230 : 145}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: showAxisLabels=="true" ? 60 : 25
            }}
        >
            <CartesianGrid horizontal={false} stroke="#F4F4F4" />
            {showAxisLabels=="true" && <XAxis dataKey="name" axisLine={false} angle={-90} textAnchor="end" />}
            <YAxis axisLine={false} tickFormatter={(value: number) => `${value}k`} ticks={[0,10,20,30,40]} />
            {Object.keys(data[0]).slice(1).map((key, index) => (
                <Line key={key} type="linear" dataKey={key} stroke={lineColors[index]} strokeWidth={4} dot={false} />
            ))}
        </LineChart>
    );
}

export default LineGraph