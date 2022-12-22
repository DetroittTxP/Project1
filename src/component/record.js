import Items from "./items"
import './record.css'
import Form from './form'
import { v4 as uuidv4 } from 'uuid';

const record = ()=>{

    const data=[
        {title:"ค่าข้าว" ,amount:"200"},
        {title:"ค่าน้ำ" ,amount:"2000"},
        {title:"ค่ารักษา", amount:"3000"},
    ]
    return(
        <div>
            <h1>คำนวณบัญชีรายรับ-จ่าย</h1>
            <Form/>
            <h3>บันทึกข้อมูลในเเต่ละวัน</h3>
            <ul>
                {data.map((element)=>{
                    return <Items {...element} key={uuidv4()}/>
                })}
            </ul>
        </div>
    )
}
export default record
