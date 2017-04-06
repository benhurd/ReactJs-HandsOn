import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coursActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component{
    constructor(props,context)
    {
        super(props,context);
    }

    render(){
        return(
            <h1>Manage Course</h1>
        );
    }
}

function mapStateToPops(state,ownProps)
{
    return{
        state:state
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(coursActions,dispatch)
        };
    }


ManageCoursePage.propTypes={
    actions: PropTypes.func.isRequired
};

export default connect(mapStateToPops,mapDispatchToProps)(ManageCoursePage);