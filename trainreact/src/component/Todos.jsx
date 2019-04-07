import React , {Component} from 'react';
import TodoItem from './TodoItem'
class Todos extends Component {
    markComplete = (id) =>{
        console.log(id)
    }
    render() {
        // console.log(this.props.todos);
        
        return this.props.todos.map((todo)=>(
            // <h3>{ todo.title }</h3>
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete} delTodo={ this.props.delTodo}/>

        ));
            // <div className="App">
            //     <h1>Todos</h1>
            // </div>

        
    }
}
export default Todos;