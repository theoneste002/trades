// Mock trade data
const tradeData = [
    { country: "USA", exports: 1500, imports: 2000 },
    { country: "China", exports: 2500, imports: 2100 },
    { country: "Germany", exports: 1400, imports: 1300 },
    { country: "Japan", exports: 1200, imports: 1000 },
    { country: "India", exports: 900, imports: 700 },
  ];
  
  // Populate the trade table dynamically
  const tableBody = document.getElementById("trade-data");
  
  tradeData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.country}</td>
      <td>${data.exports}</td>
      <td>${data.imports}</td>
    `;
    tableBody.appendChild(row);
  });
  
  // Create a bar chart for trade data
  const ctx = document.getElementById("trade-chart").getContext("2d");
  
  const labels = tradeData.map((data) => data.country);
  const exportValues = tradeData.map((data) => data.exports);
  const importValues = tradeData.map((data) => data.imports);
  
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Exports (in Billion $)",
          data: exportValues,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
          label: "Imports (in Billion $)",
          data: importValues,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  