import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import ComposedChart from 'recharts/lib/chart/ComposedChart';
import Area from 'recharts/lib/cartesian/Area';
import Bar from 'recharts/lib/cartesian/Bar';
import ReferenceLine from 'recharts/lib/cartesian/ReferenceLine';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';


class SimpleLineChart extends React.Component {
  state = {
    sum: { 
      createdDate: '',
      volume: 0.0,
    }
  };
  
  render() {
    // const data = [
    //   { name: '10:00', Yesterday: 200, Today: 300 },
    //   { name: '12:00', Yesterday: 280, Today: 298 },
    //   { name: '14:00', Yesterday: 500, Today: 400 },
    //   { name: '16:00', Yesterday: 480, Today: 208 },
    //   { name: '18:00', Yesterday: 590, Today: 400 },
    //   { name: '20:00', Yesterday: 490, Today: 300 },
    //   { name: '22:00', Yesterday: 490, Today: 400 },
    // ];
    // const data = [
    //   { createdDate: '10:00', volume: 300 },
    //   { createdDate: '12:00', volume: 298 },
    //   { createdDate: '14:00', volume: 400 },
    //   { createdDate: '16:00', volume: 208 },
    //   { createdDate: '18:00', volume: 400 },
    //   { createdDate: '20:00', volume: 300 },
    //   { createdDate: '22:00', volume: 400 },
    // ];

    // console.log(this.props.data);

    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={320}>
        <ComposedChart data={this.props.data}>
          <XAxis dataKey="createdDate" />
          <YAxis label={{ value: 'ml', angle: -90, position: 'insideLeft' }} domain={[0, 2000]}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <ReferenceLine y={2000} label="Goal" stroke="green" strokeDasharray="3 3" />
          {/* <Line type="monotone" dataKey="Yesterday" stroke="#82ca9d" /> */}
          <Area type="monotone" dataKey="volume" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
          <Bar dataKey="aggregate" barSize={20} fill="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

SimpleLineChart.propTypes = {
  data: PropTypes.array,
};

export default SimpleLineChart;