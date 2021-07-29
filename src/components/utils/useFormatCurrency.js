// import React from 'react'

const useFormatCurrency = (lang, currency) => {
  // could use context to set lang and use that here in order to set lang and currency based on 
  // context
  return new Intl.NumberFormat(lang, {style: 'currency', currency})
}

export default useFormatCurrency
