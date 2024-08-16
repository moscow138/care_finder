import React, { useState } from 'react'

function RangeSelect({onRadiusChange}) {
    const [radius, setRaduis] = useState<string | number>(10);
  return (
    <div className='mt-5'>
        <h2 className='font-bold px-2'>Set Distance(In Meters)</h2>
        <input type='range' title='slider' className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
         min='100' max='5000' step='100' defaultValue={radius}
         onChange={(e)=> {setRaduis(e.target.value); onRadiusChange(e.target.value)}}
         />
         <label className='text-gray-500 text-[15px]'>{radius} Meters</label>
    </div>
  )
}

export default RangeSelect