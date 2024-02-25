import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 350 },
    { name: 'Group C', value: 220 },
    { name: 'Group D', value: 400 },
];
const COLORS = ['#FB8282', '#54D787', '#F2E144', '#5E5ADB'];

interface Props {
    data: any[];
  }

function PieGraph({data}:Props) {

    return (
        <PieChart width={200} height={140}>
            <Pie
                data={data}
                innerRadius={35}
                outerRadius={60}
                paddingAngle={3}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}

export default PieGraph