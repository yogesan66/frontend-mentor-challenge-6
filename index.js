const datas = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

const charts = document.querySelector('.charts');
datas.forEach((res) => {
    const div = document.createElement('div');
    div.classList.add('chart');
    div.innerHTML = `
  <div class="bar" style="height:${res.amount}%; background-color:${res.amount > 50 ? 'var(--cyan)' : 'var(--red)'}"></div>
    <div class="tooltip" style="bottom:${res.amount + 14}%">$${res.amount}</div>
          <div class="label">${res.day}</div>`
    charts.appendChild(div)
})