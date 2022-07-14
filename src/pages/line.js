import React, { useEffect } from "react";
import * as echarts from 'echarts';
function Line() {
    useEffect(() => {
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      });
    }, [])
    return (
      <div className="App">
        <div id="main" style={{ height: '500px', width: '500px'}}></div>
      </div>
    );
}
  
export default Line;