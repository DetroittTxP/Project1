import React from 'react'
import './form.css'

const Form = () => {

    const inputTitle=(event)=>{
        console.log(event.target.value);
    }

    const inputAmount=(event)=>{
        console.log(event.target.value);
    }

    const saveItem=(event)=>{
        event.preventDefault();
        console.log("SAVED");
    }

  return (
    <div>
        <form onSubmit={saveItem}>
            <div className='form-control'>
                <label>ชื่อรายการ</label>
                <input type="text" placeholder='ระบุรายการ' onChange={inputTitle}/>
            </div >
            <div className='form-control'>
                <label>จำนวนเงิน</label>
                <input type="number" placeholder='ระบุจำนวนเงิน' onChange={inputAmount}></input>
            </div>
            <div>
                <button type='submit' className='btn'>ส่งข้อมูล</button>
            </div>
        </form>
    </div>
    )
}

export default Form
