
/**
 * returns a formatter for currency of the provided language and currency type.
 * @param {*} lang 
 * @param {*} currency 
 * @returns 
 */
const useFormatCurrency = (lang, currency) => {
  // could use context to set lang and use that here in order to set lang and currency based on 
  // context
  return new Intl.NumberFormat(lang, {style: 'currency', currency})
}

export default useFormatCurrency
