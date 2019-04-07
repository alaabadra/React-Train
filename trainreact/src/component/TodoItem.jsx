import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    getStyle = () => {
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration : 'line-through'
        //     }
        // }else{
        //     return{
        //         textDecoration:'none'
        //     }
        // }
        return {
            backgroundColor:'red',
            padding:'10px',
            borderBottom: '1px',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'  
        }
    }
    markComplete = (e) => {
        console.log(this.props)
    }
  render() {
    const { id,title} = this.props.todo;  
    return (
    //   <div style={{backgroundColor:'#f4f4f4'}}>
    // <div style={itemStyle}>
    
    <div style={this.getStyle()}>
    
        <p>hellooo</p>
        <p>
        {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/>{' '}
        {this.props.todo.title} */}
         <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

//propTodo
TodoItem.propType = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    backgroundColor:'blue',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius : '50%',
    cursor:'pointer',
    float:'right'
}
// const itemStyle = {
//     backgroundColor:'#f4f4f4'
// }