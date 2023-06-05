import { useReducer } from 'react'
import { Input } from './components/Input'
import './App.css'

const initialstate = {
  flag: false,
  searchTerm: '',
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCHTERM':
      return { ...state, searchTerm: action.payload }
    default:
      return state
  }
}

const Hello = () => {
  return <div>Hi gopal</div>
}

const checkDateInPast = (date) => {
  // const arr = date.split('T')
  // console.log('arr', arr)
  const d = new Date(date)
  console.log('d', d)
  console.log(date, 'day')
  console.log('date is not needed')
  // console.log(date, 'd')
  // const d = new Date(date.replace(/-/g, '/').replace(/T.+/, ''))
  // console.log(d, 'date')
  // const todayDate = new Date()
  // const inputDate = new Date(date)
  // console.log(inputDate, 'inputData')
  // const timeStampOfTodayDate = todayDate.getTime()
  // const timeStampOfInputDate = inputDate.getTime()
  // console.log(timeStampOfTodayDate, 'today date')
  // console.log(timeStampOfInputDate, 'input date')
  // console.log(timeStampOfInputDate > timeStampOfTodayDate, 'flag')
}
// checkDateInPast('2022-12-22T18:30:00.000Z')
const extractDate = (dateString) => {
  const date = dateString.split('T')[0]
  const newDate = [...date].map((d) => (d === '-' ? '/' : d))
  const againNewDate = newDate.join('')
  return againNewDate
}

const date = new Date('2022/6/12')
const dateObj = {
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
}
console.log(dateObj, 'dateObj')
// console.log(date.getDate(), 'getdate')

// const date = new Date('2022-12-25T17:30:00.000Z')
// const date = new Date('Fri Jan 06 2023 00:00:00 GMT+0530 (India Standard Time)')
// console.log(date, 'date')
// const newDate = date.toISOString()
// const extractedDate = extractDate(newDate)
// console.log(extractedDate, 'extracted')
// const againNewDate = new Date(extractDate(extractedDate))
// console.log(againNewDate, 'againNewDate')
// const timeStamp = Math.floor(againNewDate.getTime() / 1000)
// console.log(timeStamp, 'timestamp')
// console.log(newDate, 'newDate')

function App() {
  // const date = new Date()
  // const date2 = Math.floor(new Date().getTime() / 1000.0)
  // console.log(date2, 'time')
  // const [searchState, searchDispatch] = useReducer(searchReducer, initialstate)
  // const getSinglePdf = (pdfData) => {
  //   const pdfArr = pdfData ? pdfData[0].split(',') : ''
  //   return pdfArr ? [pdfArr[0]] : []
  // }
  // console.log(
  //   getSinglePdf([
  //     'https://medpay-diagnostics-reports.s3.ap-south-1.a…m/20052022_AF78020500072490642_RLS_1653113329.pdf',
  //     'https://medpay-diagnostics-reports.s3.ap-south-1.amazonaws.com/Love_1653378672.pdf',
  //   ])
  // )

  return (
    <div className='App'>
      {/* <Input
        searchState={searchState}
        Hello={Hello}
        searchDispatch={searchDispatch}
      /> */}
    </div>
  )
}

export default App
