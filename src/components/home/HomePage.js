import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
     return(   
         <div className="jumbotron">
            <h1>Administartor</h1>
            <p>React Redux and Routing</p>
            <Link to="about" className="btn btn-primary btn-lng">Learn more</Link>
        </div>
     );
    }
}

export default HomePage;