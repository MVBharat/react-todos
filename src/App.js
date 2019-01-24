import React from 'react';
import './App.css';
import SingleTodo from './componets/SingleTodo';

class App extends React.Component {
 constructor(){
        super()
        this.state = {
            todos: [],
            currentTodo: "",
        }
    }

    onInputChange = e => {
        this.setState({  currentTodo: e.target.value   })
    }

    onClick = () =>{
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.currentTodo);

      this.setState({  todos: todosCopy ,   currentTodo: ""  })
    }

    render(){
      let bulletedTodos = this.state.todos.map((e, i) => {
        return(
          <SingleTodo todo ={e} />
        );
      });
        
      return(
            <div className="App"> 
                <input placeholder="enter todo" 
                 value={this.state.currentTodo}
                 onChange={this.onInputChange}    />
                <button  onClick= {this.onClick} >Add</button>
                <br/>
                {this.state.todos.length === 0 ? "no todos" : <ul>{bulletedTodos}</ul>}
            </div>
        );
    }
}

export default App;
