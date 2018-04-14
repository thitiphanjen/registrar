import React, { Component } from 'react';
import './css/Detail.css';
import test from './images/test.jpg';

class Detail extends Component{
  render(){
    return(
      <div className='DetailPage'>
        <p className='H1'>ขณะนี้ท่านได้เข้าสู่ระบบลงทะเบียนเรียนแล้ว กรุณาเลือกบริการที่ต้องการจากรายการด้านซ้ายมือ</p>
        <p className='H2'>นิสิตจะออกจากระบบโดยอัตโนมัติ เมื่อหยุดการติดต่อนานเกิน 10 นาที</p>
        <p className='H1'>นิสิตต้องกด ออกจากระบบ ทุกครั้งที่เสร็จสิ้นการใช้งานเพื่อมิให้ผู้อื่นเข้าใช้งาน ในชื่อของท่านได้</p>
      </div>
    );
  }
}
export default Detail;
