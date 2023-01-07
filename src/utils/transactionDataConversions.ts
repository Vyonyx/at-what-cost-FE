type Transaction = {
  [key: string]: string;
}

export function transactionsToPieData(transactionKey: string, amountKey: string, transactions: Transaction[]) {
  try {
    return transactions.reduce((obj: any, item, idx) => {
      const transaction = item[transactionKey]
      const amount = Number(item[amountKey])

      if (transaction === undefined) throw new Error('Could not find transaction name')
      if (item[amountKey] === undefined) throw new Error('Could not find amount')
      if (Number.isNaN(amount)) throw new Error('Encountered invalid number')

      return {
        ...obj,
        [transaction]: obj[transaction] ? obj[transaction] + amount : amount
      }
    }, {})

  } catch (error) {
    let message = 'Unknown error'
    if (error instanceof Error) message = error.message
    return message
  }
}