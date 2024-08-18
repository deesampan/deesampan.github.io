import React from 'react';

const donut_chart = () => {
  return (
    <>
        <div>
            <canvas id="myChart"></canvas>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="./chart_form.js"></script>
    </>
  );
};

export default donut_chart;