import Record from './component/record'
import Form from './component/form'
import { useState } from 'react';

import './App.css';

function App() {
  const initdata=[
    {id:1,title:"ค่าข้าว" ,amount:"200"},
    {id:2,title:"ค่าน้ำ" ,amount:"2000"},
    {id:3,title:"ค่ารักษา", amount:"3000"},
]

  const [items,setItems] = useState(initdata);// เริ่มต้นเท่ากับ array เดิม

  const onAddNewItem=(newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem];
    })
  }
  return (
    <div>
      <h1>คำนวณบัญชีรายรับ-จ่าย</h1>
      <Form onAddItem={onAddNewItem}/>
      <h3>บันทึกข้อมูลในเเต่ละวัน</h3>
      <Record items={items}/>
    </div>
    

  );
}

export default App;
