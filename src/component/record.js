const Item1 = ()=><li>พักโรงเเรม <span>-5000 บาท</span></li>
const Item2 = ()=><li>เที่ยวสวนกาชาด <span>-300 บาท</span></li>

 
const rec = ()=>{
    return(
        <div>
            <h1>คำนวณบัญชีรายรับ-จ่าย</h1>
            <p>บันทึกข้อมูลในเเต่ละวัน</p>

            <ul>
            <li>ค่าไรดี 20000</li>
            <li>ค่าข้าวกาก 2000 บาท</li>
            <Item1/>
            <Item2/>
            
            </ul>
        </div>
    )
}
export default rec
