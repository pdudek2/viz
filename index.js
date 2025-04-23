const dscc = require('@google/dscc');

function drawTable(data) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  let html = `
    <table style="width: 100%; font-family: Segoe UI, sans-serif; border-collapse: collapse;">
      <thead>
        <tr style="background: #f0f0f0;">
          <th>👤 Strona</th>
          <th>📅 Księgowanie</th>
          <th>📆 Operacja</th>
          <th>💰 Kwota</th>
          <th>📌 Historia</th>
          <th>🏦 Rachunek</th>
          <th>📉 Saldo</th>
          <th>🧾 Tytuł</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.tables.DEFAULT.forEach(row => {
    html += `
      <tr>
        <td>${row['Dane strony operacji']}</td>
        <td>${row['Data księgowania']}</td>
        <td>${row['Data operacji']}</td>
        <td>${row['Kwota']} zł</td>
        <td>${row['Pozycje historii']}</td>
        <td>${row['Rachunek strony operacji']}</td>
        <td>${row['Saldo']} zł</td>
        <td>${row['Tytuł operacji']}</td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

dscc.subscribeToData(drawTable, { transform: dscc.tableTransform });