import { it, expect, test, describe } from 'vitest'
import { transactionsToPieData } from '../utils/transactionDataConversions'

describe('transactions to pie data conversion', () => {
  // These keys will be dynamically passed from frontend to fn
  const transactionKey = 'Code'
  const amountKey = 'Amount'

  const filters: Filter[] = [
    {transaction: 'BP', category: 'Vehicle'},
    {transaction: 'Countdown', category: 'Food & Drink'},
  ]

  it('reduces transactions to totals for each unique transaction name', () => {
    const transactions = [
      {Code: 'BP', Amount: '-70'},
      {Code: 'Countdown', Amount: '-100'},
      {Code: 'BP', Amount: '-50'},
    ]
  
    const actual = transactionsToPieData(
      transactionKey,
      amountKey,
      transactions,
      filters
    )

    const expected = [
      {id: 'Vehicle', label: 'Vehicle', value: 120},
      {id: 'Food & Drink', label: 'Food & Drink', value: 100},
    ]
    
    expect(actual).toEqual(expected)
  })

  it('throws error if transaction name is not found', () => {
    const transactions: any = [
      {Name: 'BP', Amount: '-70'},
      {Name: 'Countdown', Amount: '-100'},
      {Name: 'BP', Amount: '-50'},
    ]
  
    const actual = transactionsToPieData(
      transactionKey,
      amountKey,
      transactions,
      filters
    )

    const expected = 'Could not find transaction name'
    
    expect(actual).toEqual(expected)
  })

  it('throws an error if amount is not found', () => {
    const transactions: any = [
      {Code: 'BP', Value: '-70'},
      {Code: 'Countdown', Value: '-100'},
      {Code: 'BP', Value: '-50'},
    ]
  
    const actual = transactionsToPieData(
      transactionKey,
      amountKey,
      transactions,
      filters
    )
    
    const expected = 'Could not find amount'
    
    expect(actual).toEqual(expected)
  })

  test('throws an error if amount is not a number', () => {
    const transactions: any = [
      {Code: 'BP', Amount: '-70'},
      {Code: 'Countdown', Amount: 'not a number'},
      {Code: 'BP', Amount: '-50'},
    ]
  
    const actual = transactionsToPieData(
      transactionKey,
      amountKey,
      transactions,
      filters
    )

    const expected = 'Encountered invalid number'
    
    expect(actual).toEqual(expected)
  })
})
