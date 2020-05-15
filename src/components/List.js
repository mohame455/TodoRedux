import React from 'react';
import { connect } from 'react-redux';
const List = (props) => {
    return (<div>
        {props.TodoList.map((el, i) => <div className={(el.isCheck)?'btn-item-check':'btn-item'} key={i}>
            <div className='part1'>
    <span onClick={()=>props.checkIt(el.id)}>{(el.isCheck)?<i className="fas fa-check-circle"></i>:<i className="fas fa-circle"></i>}</span>
            <span className={(el.isCheck)?"line-th":"text-item"}>{el.value}</span>
            </div>
            <div className='part2'>
            <i className="fas fa-edit" onClick={() => props.editItem(el.id)}></i>
            <i className="fas fa-trash-alt" onClick={() => props.deleteItem(el.id)}></i>
            </div>
        </div>)}
    </div>);
}

const mapStateToProps = (state) => {
    return {
        TodoList: state.TodoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => dispatch({ type: 'DELETE', payload: id }),
        editItem: (id) => {
            let newItem = prompt('tap your new item', "")
            dispatch({ type: "EDIT", payload: { id: id, newValue: newItem } })
        },
        checkIt:(id,isCheck)=>dispatch({type:"CHECK",payload:{id:id,isCheck:isCheck}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);