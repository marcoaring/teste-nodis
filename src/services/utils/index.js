export const formatMoney = (price) => {
  const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };
  return (parseFloat(price) / 100).toLocaleString('pt-BR', format);
};
