import React, { useEffect, useState } from 'react'
import './DigitalClock.css'

export default function DigitalClock() {
  const [time, setTime] = useState({
     hour: 0,
     minutes: 0,
     seconds: 0,
     day: '',
     month:'',
     year:'',
     dayName:'',
     monthName:'',
  });

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      digitalClock();
    }, 1000)
    return () => clearInterval(intervalId);
  },[])
  
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      digitalClock();
    }, 1000)
    return () => clearInterval(intervalId);
  },[])

  function digitalClock  (){
    const today = new Date()
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    setTime({
      hour: today.getHours(),
      minutes: today.getMinutes(),
      seconds: today.getSeconds(),
      day: today.getDate() < 10 ? '0' + today.getDate() : today.getDate(), 
      month: today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth(),
      year: today.getFullYear(),
      dayName: daysOfWeek[today.getDay()],
      monthName: monthsOfYear[today.getMonth()],
    })
  }
  return (
    <div className='digital-clock-block'>
      <ul className='clock-string'>
        <li id='dayString'>{time.dayName.toUpperCase()}</li>
      </ul>
      <ul className='clock-hour'>
        <li id='hour'>{time.hour < 10 ? '0'+ time.hour : time.hour}</li>
        <li>:</li>
        <li id='minutes'>{time.minutes < 10 ? '0'+ time.minutes : time.minutes}</li>
        <li>:</li>
        <li id='seconds'>{time.seconds < 10 ? '0'+ time.seconds : time.seconds}</li>
      </ul>
      <ul className='clock-day'>
        <li id='day'>{time.day}</li>
        <li>.</li>
        <li id='month'>{time.month}</li>
        <li>.</li>
        <li id='year'>{time.year % 100}</li>
      </ul>
      <ul className='clock-string'>
        <li id='monthString'>{time.monthName.toUpperCase()}</li>
      </ul>
    </div>
  )
}
