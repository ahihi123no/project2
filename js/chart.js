// CHART HOME
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['08-09', '09-09', '10-09', '11-09', '12-09'],
        datasets: [{
            label: 'Số ca nhiễm',
            data: [12680, 11000, 13320, 9600, 10400],
            backgroundColor: 'grey'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'BIỂU ĐỒ',
            fontSize: 30,
            fontColor: 'grey'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// CHART VACCINE
var ctx1 = document.getElementById('vaccineChart');
var vaccineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['08-09', '09-09', '10-09', '11-09', '12-09', '13-09', '14-09'],
        datasets: [{
            label: 'Đã tiêm',
            data: [400000, 500000, 600000, 1100000, 800000, 1000000, 700000],
            backgroundColor: 'blue',
            borderColor: 'blue'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'BIỂU ĐỒ',
            fontSize: 30,
            fontColor: 'grey'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
