import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';

class CoursesPage extends React.Component{

    constructor(props,context)
    {
        super(props,context);
        this.state={
            course:{title:""}
        };
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }

    courseRow(course,index)
    {
        return <div key={index}>{course.title}</div>;
    }

    onTitleChange(event)
    {
        const course=this.state.course;
        course.title=event.target.value;
        this.setState({course:course});
    }

    onClickSave(event)
    {
        this.props.createCourse(this.state.course);
    }

    render()
    {
        return (
            <div>
                <h1>Courses </h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                type="text"
                onChange={this.onTitleChange}
                value={this.state.course.title} />

                <input
                type="submit"
                value="submit"
                onClick={this.onClickSave} />
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
         createCourse: course => dispatch(courseAction.createCourse(course))
     };
 }

CoursesPage.propTypes={
    //dispatch:PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};



//connect(mapStateToProps,mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); // 2nd parameter is optional, and default param is dispatch()