import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component{

    constructor(props,context)
    {
        super(props,context);
        // this.state={
        //     course:{title:""}
        // };
        // this.onTitleChange=this.onTitleChange.bind(this);
        // this.onClickSave=this.onClickSave.bind(this);
    }

    courseRow(course,index)
    {
        return <div key={index}>{course.title}</div>;
    }

    // onTitleChange(event)
    // {
    //     const course=this.state.course;
    //     course.title=event.target.value;
    //     this.setState({course:course});
    // }

    // onClickSave(event)
    // {
    //     //this.props.createCourse(this.state.course);
    //     this.props.actions.createCourse(this.state.course);
    // }

    render()
    {
        const {courses} =this.props;
        return (
            <div>
                <h1>Courses </h1>
                <CourseList courses={courses}/>
            </div>
        );
    }

}

 function mapStateToProps(state,ownProps)
    {
        return { 
            courses : state.courses // state.courses --> from reducers folder -> index.js courses
        };
 }

 function mapDispatchToProps(dispatch)
 {
     return {
         //createCourse: course => dispatch(courseAction.createCourse(course))
         actions: bindActionCreators(courseAction, dispatch)
     };
 }

CoursesPage.propTypes={
    //dispatch:PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
};



//connect(mapStateToProps,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // 2nd parameter is optional, and default param is dispatch()