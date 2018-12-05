var add_to_graph = function(chart, position, elements){
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(position);
      if (dataset.data.length > elements){
        dataset.data.shift();
      }
    });
  chart.update();
    };


var elements = 20;
var labels = [...Array(elements).keys()]; //spread operator acts like range
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    title: {
      text: 'Hi',
      fontSize: 60,
    },

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, .2, 0, -.2, .5, -.5, 1],
        }]
    },
    // Configuration options go here
    options: {
      animation: {
            duration: 0, // general animation time
        },
      // showLines: false, // disable for all datasets
      maintainAspectRatio: false,
      responsive: false,
      legend: {
      display: false
      },
      scales: {
          yAxes: [{
            gridLines: {
                display:false
                },
              ticks: {
                  max: 210+500,
                  min: 210-500,
                  display: false
              }
            }],
            xAxes: [{
              gridLines: {
                  display:false
                  },
                ticks: {
                    display:false
                }
                    }]
          }
    }
});
