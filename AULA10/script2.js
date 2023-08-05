function somar () {
  let tn1 = window.document.querySelector('#txtn1');
  let tn2 = window.document.querySelector('#txtn2');
  let res = window.document.querySelector('.resultado');
  let n1 = Number(tn1.value)
  let n2 = Number(tn2.value);
  let s = n1 + n2;
  res.innerHTML = `A soma entre ${n1} e ${n2} é ${s}`
}