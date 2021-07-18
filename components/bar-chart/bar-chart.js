import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['Rays technologies', 'Boxigo', 'Maximl', 'Springworks'],
  datasets: [
    {
      label: 'Experience (months)',
      data: [1, 6, 5, 10],
      backgroundColor: [
        '#f84d58',
      ],
      borderColor: [
        '#192d35',
      ],
      borderWidth: 3,
    },
  ],
};

const options = {
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
           gridLines: {
              display: false
           }
        }],
        yAxes: [{
           gridLines: {
              display: false
           }
        }]
    }
};

const VerticalBar = () => (
  <>
    <Wrapper>
        <Bar data={data} options={options} />
    </Wrapper>
  </>
);

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

export default VerticalBar;