import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  useEffect(() => {
    let interval

    const countDown = () => {
      const destination = new Date('March 1, 2023').getTime()
      interval = setInterval(() => {
        const now = new Date().getTime()
        const difference = destination - now
        // console.log(destination)

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))

        const hrs = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )

        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

        const secs = Math.floor((difference % (1000 * 60)) / 1000)

        if (destination < 0) clearInterval(interval.current)
        else {
          setDays(days)
          setHours(hrs)
          setMinutes(mins)
          setSeconds(secs)
        }
      })
    }
    countDown()
  }, [])

  return (
    <div className='d-flex align-items-center gap-2 mt-5 mb-5'>
      <div className='d-flex align-items-center gap-2'>
        <div className='text-center'>
          <h1 className='fs-3 mb-2'>{days}</h1>
          <h5 className='fs-6'>Days</h5>
        </div>
        <span className='fs-3'>:</span>
      </div>
      <div className='d-flex align-items-center gap-2'>
        <div className='text-center'>
          <h1 className='fs-3 mb-2'>{hours}</h1>
          <h5 className='fs-6'>Hours</h5>
        </div>
        <span className='fs-3'>:</span>
      </div>
      <div className='d-flex align-items-center gap-2'>
        <div className='text-center'>
          <h1 className='fs-3 mb-2'>{minutes}</h1>
          <h5 className='fs-6'>Minutes</h5>
        </div>
        <span className='fs-3'>:</span>
      </div>
      <div className='d-flex align-items-center gap-2'>
        <div className='text-center'>
          <h1 className='fs-3 mb-2'>{seconds}</h1>
          <h5 className='fs-6'>Seconds</h5>
        </div>
      </div>
    </div>
  )
}

export default Clock
