
import './items..css'

const items=()=>{
    const name = "ปรมียืมตัง"
    return(
        <div className='item-list'>
            <li>ค่ากินข้าว <span>-2000</span></li>
            <li>ค่าซักผ้า <span>-1000</span></li>
            <li>ค่ามัดจำ <span>-200</span></li>
            <li>ค่าข้าวต้มมัด <span>-300</span></li>
            <li>{name}   <span>-2000</span></li>
        </div>
    )
}

export default items;