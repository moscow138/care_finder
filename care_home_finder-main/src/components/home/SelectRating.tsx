import React, { useState } from 'react'
import Rating from './Rating'
function SelectRating() {
    const [selectedRating, setSelectedRating] = useState([]);

    const onSelectRating = (isChecked, value) => {
        //check if user checked a box..
        if(isChecked){
            setSelectedRating([...selectedRating,value])
        }else{
            setSelectedRating(selectedRating.filter((n) => n!==value));
        }
        console.log(selectedRating);

    }
  return (
    <div className='px-2 mt-5'>
        <h2 className='font-bold'>Rating</h2>
        <div>
            {Rating.ratingList.map((item,index) => (
                <div className="flex justify-between" key={index}>
                    <label>{item.icon}</label>
                    <input type="checkbox"
                    title='checkbox'
                    onChange ={(e)=> onSelectRating(e.target.checked,item.name)}
                    />
                </div>

            ))}
        </div>

    </div>
  )
}

export default SelectRating