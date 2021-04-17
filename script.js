// const { Chart } = require("chart.js");

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
  type: 'doughnut',
  data: {
    labels: ['We love Tony', 'It is hard not to love Tony'],
    datasets: [{
      data: [40, 60],
      backgroundColor: ['#4994C4', '#DFCEB4']
    }]
  },
  options: {
    title: {
      text: 'How do you think of Tony?',
      display: true,
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});


