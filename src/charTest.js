// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
const drawChart = () => {
  // Create the data table.
  let data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'Charcters');
  data.addRows([
    ['Female', 73],
    ['Male', 372],
    ['Genderless', 6],
    ['Unknown', 42]
  ]);
  // Set chart options
  let options = {'title':'All seasons'};
  // Instantiate and draw our chart, passing in some options.
  let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);