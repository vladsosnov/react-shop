function formatCurrency(num: number) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}

export { formatCurrency };
