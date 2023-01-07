type Transaction = {
  [key: string]: string;
}

type PieData = {
  id: string;
  label: string;
  value: number;
}

export function transactionsToPieData(transactionKey: string, amountKey: string, transactions: Transaction[]) {
  try {
    return transactions.reduce((arr: PieData[], item, idx) => {
      const transaction = item[transactionKey]
      const amount = Number(item[amountKey])

      if (transaction === undefined) throw new Error('Could not find transaction name')
      if (item[amountKey] === undefined) throw new Error('Could not find amount')
      if (Number.isNaN(amount)) throw new Error('Encountered invalid number')

      const existingData = arr.findIndex(item => item.id === transaction)
      if (existingData !== -1) {
        arr[existingData].value += amount
        return arr
      }

      return [
        ...arr,
        {id: transaction, label: transaction, value: amount}
      ]
    }, [])

  } catch (error) {
    let message = 'Unknown error'
    if (error instanceof Error) message = error.message
    return message
  }
}