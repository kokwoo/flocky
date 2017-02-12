var chart = function(chartName, data) {
	return new Highcharts.Chart({
		chart: {
			renderTo: chartName,
			margin: [0, 0, 0, 0],
			backgroundColor: null,
			plotBackgroundColor: 'none',
		},

		title: {
			text: null
		},

		tooltip: {
			formatter: function() {
				return this.point.name +': '+ this.y +' %';
			}
		},

		series: [{
			borderWidth: 2,
			borderColor: '#F1F3EB',
			shadow: false,
			type: 'pie',
			name: 'Income',
			innerSize: '65%',
			data: data,
			dataLabels: {
				enabled: false,
				color: '#000000',
				connectorColor: '#000000'
			}
		}]
	});
}

var uptime = function(chartName, up) {
	var down = 100 - up;
	return chart(chartName, [
		{ name: 'Uptime', y: up, color: '#b2c831' },
		{ name: 'Downtime', y: down, color: '#3d3d3d' }
	]);
}

// var storage = function(chartName, used) {
// 	var unused = 100 - used;
// 	return chart(chartName, [
// 		{ name: 'Used', y: used, color: '#fa1d2d' },
// 		{ name: 'Free', y: unused, color: '#3d3d3d' }
// 	]);
// }
