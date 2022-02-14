export const currencyFormat = (num: number) => {
    const formatted = '₦' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return formatted;
 }

 export const formatDate = (dateStr: string, locale: string) => {
  return  new Date(dateStr).toLocaleDateString(locale)
 }