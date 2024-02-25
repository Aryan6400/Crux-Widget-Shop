import { BarChart, Bar, YAxis, CartesianGrid } from 'recharts';

interface Props {
  data: any[];
  scale: string | null;
  color: string | null;
}

function BarGraph({ data, scale, color }: Props) {
  let height=128
  if(scale=="2") height=380
  return (
      <BarChart
        width={240}
        height={height}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: scale=="2" ? 30 : 25
        }}
      >
        {color=="2" && <CartesianGrid vertical={false} stroke="#F4F4F4"/>}
        <YAxis axisLine={false} tickFormatter={(value: number) => `${value}k`} ticks={[0,5,10,15,20,25,30,35,40]} />
        <Bar dataKey="a" fill="#F1E254" barSize={5} />
        <Bar dataKey="space1" fill="transparent" barSize={5} />
        <Bar dataKey="b" fill="#FF8E8E" barSize={5} />
        <Bar dataKey="space2" fill="transparent" barSize={5} />
        <Bar dataKey="c" fill="#96D3FF" barSize={5} />
        <Bar dataKey="space3" fill="transparent" barSize={5} />
        <Bar dataKey="d" fill="#5FDC8F" barSize={5} />
        <Bar dataKey="space4" fill="transparent" barSize={5} />
        <Bar dataKey="e" fill="#F182F3" barSize={5} />
        <Bar dataKey="space5" fill="transparent" barSize={5} />
        <Bar dataKey="f" fill="#5E5ADB" barSize={5} />
      </BarChart>
  );
}

export default BarGraph