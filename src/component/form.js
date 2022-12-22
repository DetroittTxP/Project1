import { useState} from 'react';
import './form.css'

const Form = () => {
     
    const [title,settitle] = useState("");
    const [amount,setamount] = useState(0)

    const inputTitle=(event)=>{
        settitle(event.target.value);
    }

    const inputAmount=(event)=>{
        setamount(event.target.value)
    }

    const saveItem=(event)=>{
        event.preventDefault();
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log(itemData);
        settitle('');
        setamount(0);
    }    

  return (
    <div>
        <form onSubmit={saveItem}>
            <div className='form-control'>
                <label>ชื่อรายการ</label>
                <input type="text" placeholder='ระบุรายการ' onChange={inputTitle}
                value={title}/>
            </div >
            <div className='form-control'>
                <label>จำนวนเงิน</label>
                <input type="number" placeholder='ระบุจำนวนเงิน' onChange={inputAmount}
                value={amount}/>
            </div>
            <div>
                <button type='submit' className='btn'>ส่งข้อมูล</button>
            </div>
        </form>
    </div>
    )
}

export default Form;
