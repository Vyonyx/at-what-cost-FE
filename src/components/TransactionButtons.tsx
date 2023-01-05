import { Button, ButtonGroup } from "@mui/material"
import { useDispatch } from "react-redux"
import { toggle } from '../redux/filters'

function TransactionButtons() {
  const dispatch = useDispatch()
  return (
    <ButtonGroup
          size='large'
          color='primary'
          variant="outlined"
        >
          <Button
            onClick={() => {
              const input = document.getElementById('csvUpload')
              if (input) input.click()
            }}
          >
            <input
              id='csvUpload'
              type='file'
              accept='.csv'
              style={{display:'none'}}
              onChange={(e) => {
                const target = e.target as HTMLInputElement
                if (!target.files) return

                const reader = new FileReader()
                reader.onload = function (event) {
                  const str = String(event.target?.result)
                  const transactions = csvToArray(str)
                  console.log(transactions)
                }

                reader.readAsText(target.files[0])
              }}
            />
            Upload
          </Button>
          <Button onClick={() => dispatch(toggle())}>
            Filters
          </Button>
          <Button>
            Clear
          </Button>
        </ButtonGroup>
  )
}
export default TransactionButtons

function csvToArray(str:string, delimiter:string = ',') {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter)
  const rows = str.slice(str.indexOf("\n") + 1).split("\n")

  const transactions = []

  for (let item of rows) {
    const data = item.split(delimiter)
    // Create an object where each data item has a header
    const result = data.reduce((obj, item, i) => {
      return {...obj, [headers[i]]: item}
    }, {})
    transactions.push(result)
  }
  return transactions
}