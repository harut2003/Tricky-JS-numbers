const WINNING_SUM = 123.4;

/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
  const sum = cartItemsPrices.reduce((agg, num) => agg + parseFloat(num), 0);
  return Math.round(sum * 100) / 100 === WINNING_SUM;
}

module.exports = doesCartWinPrize;
