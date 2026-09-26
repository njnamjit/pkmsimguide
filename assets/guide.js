(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'ปิดเมนู' : 'เปิดเมนู');
    });
  }

  const data = window.GUIDE_CARD_DATA?.rarities || [];
  const money = value => `<span class="coin">${value} G</span>`;
  const feesBody = document.querySelector('#upgrade-fees tbody');
  if (feesBody) {
    feesBody.innerHTML = data.map(item => {
      const total = item.fees.reduce((sum, fee) => sum + fee, 0);
      return `<tr><td>${item.name}</td>${item.fees.map(fee => `<td>${money(fee)}</td>`).join('')}<td>${money(total)}</td></tr>`;
    }).join('');
  }

  const valuesBody = document.querySelector('#card-values tbody');
  if (valuesBody) {
    valuesBody.innerHTML = data.map(item => {
      const refund = Math.ceil(item.values[0] * .5);
      return `<tr><td>${item.name}</td>${item.values.map(value => `<td>${money(value)}</td>`).join('')}<td>${money(refund)}</td></tr>`;
    }).join('');
  }
})();
