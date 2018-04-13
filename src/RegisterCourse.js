import React, { Component } from 'react';
import RegisterCourseItem from './RegisterCourseItem'
import './css/RegisterCourse.css';

class RegisterCourse extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialCourses : [],
            courses : [],
            selectedCourses : []
        }
        this.filterList = this.filterList.bind(this);
    }
    filterList(event){
        let updatedList = this.state.initialCourses;
        updatedList = updatedList.filter(function(item){
            return (item.courseName.toLowerCase().search(event.target.value.toLowerCase()) !== -1) || (item.courseID.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
        });
        this.setState({courses: updatedList});
    }
    componentDidMount(){
        fetch('/courses', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        })
        .then(res => res.json())
        .then(members => {
            this.setState({initialCourses: members});
            this.setState({courses: this.state.initialCourses});
        });
    }
    handleSubmit(){
        console.log('this is in RegisterCourse ' + this.props.studentID)
        this.state.selectedCourses.map(item =>
            fetch('/courses/register', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body:"studentID="+this.props.studentID+"&courseID="+item.courseID+"&sectionNumber="+item.sectionNumber+"&semester="+item.semester
            })
        );
    }
    render(){
        return(
            <div className = 'RegisterPage'>
            <p className='H1'>รายวิชาที่เปิดสอน</p>
            <input className='SearchBox' type="text" placeholder="Search" onChange={this.filterList}/>
            <table>
                <tbody>
                    <tr>
                        <th className='RegisterTable'>CourseID</th>
                        <th className='CourseNameStyle'>CourseName</th>
                        <th className='RegisterTable'>Credit</th>
                        <th className='RegisterTable'>Section</th>
                        <th className='RegisterTable'>Teacher</th>
                        <th></th>
                    </tr>
                    {this.state.courses.map(course => <RegisterCourseItem
                        add={(courseID,sectionNumber,semester,courseName,credit,teacher) => this.setState({selectedCourses: [...this.state.selectedCourses,{courseID,sectionNumber,semester,courseName,credit,teacher}]})}
                        remove={(courseID,sectionNumber,semester) => this.setState({selectedCourses: this.state.selectedCourses.filter(item => (item.courseID != courseID) || (item.sectionNumber != sectionNumber) || (item.semester != semester) )})}
                        item={course} />)}
                </tbody>
            </table>
                <p className='H2'>รายวิชาที่เลือก</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='RegisterTable'>CourseID</th>
                            <th className='CourseNameStyle'>CourseName</th>
                            <th className='RegisterTable'>Credit</th>
                            <th className='RegisterTable'>Section</th>
                            <th className='RegisterTable'>Teacher</th>
                            <th><button className='RegisterButton2'>+</button></th>
                        </tr>
                        {this.state.selectedCourses.map(course => <tr>
                            <th>{course.courseID}</th>
                            <th>{course.courseName}</th>
                            <th>{course.credit}</th>
                            <th>{course.sectionNumber}</th>
                            <th>{course.teacher}</th>

                        </tr>)}
                    </tbody>
                </table>

                <button className='RegisterSubmit'onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        );
    }
}

export default RegisterCourse;
