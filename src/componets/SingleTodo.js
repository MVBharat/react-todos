import React from 'react'

// class SingleTodo extends React.Component
// {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//                <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>             
//         );
//     }
// }

const SingleTodo  = props =>{
    return(
        <li>{props.todo}<button onClick={props.delete}>X</button></li>             
 );
}

export default SingleTodo
