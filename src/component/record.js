import Items from "./items"
import './record.css'
const rec = ()=>{
    return(
        <div>
            <h1>คำนวณบัญชีรายรับ-จ่าย</h1>
            <h3>บันทึกข้อมูลในเเต่ละวัน</h3>

            <ul>
                <Items/>
            </ul>
        </div>
    )
}
export default rec
