import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import Label from 'recharts/lib/component/Label';

const data = [
  { name: '10:00', Yesterday: 200, Today: 300 },
  { name: '12:00', Yesterday: 280, Today: 298 },
  { name: '14:00', Yesterday: 500, Today: 400 },
  { name: '16:00', Yesterday: 480, Today: 208 },
  { name: '18:00', Yesterday: 590, Today: 400 },
  { name: '20:00', Yesterday: 490, Today: 300 },
  { name: '22:00', Yesterday: 490, Today: 400 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'ml', angle: -90, position: 'insideLeft' }}/>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Yesterday" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Today" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;