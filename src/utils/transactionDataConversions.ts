type Transaction = {
  [key: string]: string;
}

type PieData = {
  id: string;
  label: string;
  value: number;
}

export function transactionsToPieData(
  transactionKey: string,
  amountKey: string,
  transactions: Transaction[],
  filters: Filter[]
) {
  try {
    return transactions.reduce((arr: PieData[], item) => {
      const transaction = item[transactionKey]
      const amount = Math.round((Number(item[amountKey]) * 100) / 100)
      
      if (transaction === undefined) throw new Error('Could not find transaction name')
      if (item[amountKey] === undefined) throw new Error('Could not find amount')
      if (Number.isNaN(amount)) throw new Error('Encountered invalid number')

      const category = filters.find(filter => filter.transaction === transaction)?.category
      if (!category) return arr

      const existingData = arr.findIndex(item => item.id === category)

      if (existingData !== -1) {
        arr[existingData].value += amount
        return arr
      }

      return [
        ...arr,
        {id: category, label: category, value: amount}
      ]
    }, [])

  } catch (error) {
    let message = 'Unknown error'
    if (error instanceof Error) message = error.message
    return message
  }
}