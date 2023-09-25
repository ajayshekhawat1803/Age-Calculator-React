import React, { useEffect, useState } from 'react'

const App = () => {
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [days, setDays] = useState("")
  const currentDate = new Date()
  let birthdate;
  // console.log(date.getDate());
  // useEffect(()=>{
  //   setDays(0)
  //   setYear(0)
  //   setMonth(0)
  // },[year,month,days])


return (
  <div className='container p-8'>
    <h1 id='ageCalculator' className=' text-4xl font-medium text-white' >
      Age Calculator</h1>
    <form className='mt-7'>
      <h4 className='text-lg font-medium text-white'>Select Your DOB</h4>
      <input type='date' className='p-2 rounded-md mt-2 font-medium text-lg'
        onChange={(e) => {
          // e.target.value = null
          let arr = e.target.value.split("-")
          birthdate = new Date(arr[0], arr[1] - 1, arr[2])
          setYear(Math.floor((currentDate - birthdate) / (365 * 24 * 60 * 60 * 1000)))

          {
            if ((currentDate.getMonth() - birthdate.getMonth()) >= 0) {
              setMonth(currentDate.getMonth() - birthdate.getMonth())
            }
            else {
              setMonth(12 + currentDate.getMonth() - birthdate.getMonth())
            }
          }

          {
            if ((currentDate.getDate() - birthdate.getDate()) >= 0) {
              setDays(currentDate.getDate() - birthdate.getDate())
            }
            else {
              console.log("else");
              const lastdayofmonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate()
              setMonth(month - 1)
              setMonth(month < 0 ? 11 : month)
              setDays(currentDate.getDate() - birthdate.getDate() + lastdayofmonth)
            }
          }
          // console.log(+ " years");
        }} />
      <h4 className='text-lg font-medium text-white mt-5'>
        You are  {year} years {month} months {days} days old</h4>
    </form>
  </div>
)
}

export default App
