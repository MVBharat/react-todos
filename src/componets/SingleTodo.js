import React from 'react'

class SingleTodo extends React.Component
{
    constructor(props){
        super(props)
    }
    render(){
        return(
               <li>{this.props.todo}<button>X</button></li>             
        );
    }
}

export default SingleTodo
