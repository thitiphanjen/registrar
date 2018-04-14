import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from './SideBar';
import RegisterCourse from './RegisterCourse';
import Login from './Login';
import AddCourse from './AddCourse';
import ManageCourse from './ManageCourse';
import logout from './images/logout.png';
import Detail from './Detail';
import RegisterCourseResult from './RegisterCourseResult';
import './css/Home.css';

var state=0;
function openNav() {
  if (state==0){
    document.getElementById("HomeSideBar").style.width = "240px";
    state =1;
  }
  else {
    document.getElementById("HomeSideBar").style.width = "0px";
    state=0;
  }
}

class Home extends Component {
  render() {
    state=0;
    return (
      // <div className="All">
      //   <nav className="SideBar">
      //     <SideBar />
      //   </nav>
      //   <div className="Detail">
      //     <div className="asdasd">
      //       <Route exact path="/detail/AddCourse" render={() => <Login />}/>
      //       <Route exact path="/detail/RegisterCourse" render={() => <RegisterCourse studentID={this.props.studentID}/>}/>
      //       <Route exact path="/detail/RegisterActivity" render={() => <Login />}/>
      //       <Route exact path="/detail/RegisterActivityResult" render={() => <Login />}/>
      //       {console.log('this is in Home ' + this.props.studentID)}
      //     </div>
      //   </div>
      // </div>
      <div className="Home">
        <div className="HomeHeader">
        <h1 className='Re'></h1>
          <Link to='/'><img src={logout} className="HomeLogout"/></Link>
        </div>

        <div className="HomeSideBar" id="HomeSideBar">
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>หน้าแรก</button></Link><br/>
          <Link to='/home/RegisterCourse'><button className='HomeSideBarButton' onClick={()=>openNav()}>ลงทะเบียนเรียน</button></Link><br/>
          <Link to='/home/RegisterCourseResult'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการแสดงความจำนง</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>เพิ่ม-ลดรายวิชา</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการลงทะเบียนเรียน</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ยอดค้างชำระค่าเทอม</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการชำระค่าเทอม</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ลงทะเบียนกิจกรรมหอพัก</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ผลการลงทะเบียนกิจกรรมหอพัก</button></Link><br/>
          <Link to='/home'><button className='HomeSideBarButton' onClick={()=>openNav()}>ประวัติการเข้าร่วมกิจกรรมหอพัก</button></Link><br/>
        </div>

        <div className='HomeBody'>
          <span className="Toggle" id="Toggle" onClick={()=>openNav()}>&#9776;</span>
          <Route exact path="/home/" render={() => <Detail />}/>
          <Route exact path="/home/RegisterCourse" render={() => <RegisterCourse studentID={this.props.studentID}/>}/>
          <Route exact path="/home/ManageCourse" render={() => < ManageCourse />}/>
          <Route exact path="/home/ManageCourseResult" render={() => <Login />}/>
          <Route exact path="/home/PayResult" render={() => <Login />}/>
          <Route exact path="/home/PayStatus" render={() => <Login />}/>
          <Route exact path="/home/ReduceCourse" render={() => <Login />}/>
          <Route exact path="/home/RegisterActivity" render={() => <Login />}/>
          <Route exact path="/home/RegisterActivityResult" render={() => <Login />}/>
          <Route exact path="/home/RegisterCourseResult" render={() => <RegisterCourseResult />}/>
        </div>
      </div>
    );
  }
}

export default Home;
