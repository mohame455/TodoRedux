import React from 'react';
import { connect } from 'react-redux';
const Todo = (props) => {
    return (<div>
        <div className="section1">
            <p className='text'>Daily todo Lists</p>
            <input id='input' type='text' placeholder='Add your todo' value={props.item} onChange={(e)=>props.handleChange(e.target.value)} />
            <button id='btn' onClick={() => props.addItem(props.item)}><strong>+</strong></button>
        </div>
    </div>
    );
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleChange:(item)=>dispatch({type:"CHANGE",payload:item}),
        addItem:(item)=>dispatch({type:"ADD",payload:{value:item,id:Math.random(),isCheck:false}})
    }
}

const mapStateToProps=(state)=>{
    return{
      item:state.item
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Todo);
