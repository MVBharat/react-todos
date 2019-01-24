import React from 'react'
import "./Styles.css"

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [],
            currentTodo: "",
        }
    }

    onInputChange = e => {
        this.setState({
            currentTodo: e.target.value
        })
    }

    render(){
        const { age } = this.props;
        return(
            <div>
                <input type="text" value={this.state.currentTodo} placeholder="enter todo" />
                <button >Add</button>
                <br/>
                {this.state.todos.length === 0 ? "no todos" : "you have some todos"}
            </div>
        );
    }
}

export default Home