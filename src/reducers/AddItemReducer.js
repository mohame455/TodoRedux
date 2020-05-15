const AddItemReducer = (state = [], action) => {
    if (action.type === "ADD") {
        return [...state, action.payload]
    } else if (action.type === 'DELETE') {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === 'EDIT') {
        return state.map(el=>(el.id===action.payload.id)?{id:el.id,value:action.payload.newValue}:el)
    }else if(action.type==="CHECK"){
        return state.map(el=>(el.id===action.payload.id)?{id:el.id,value:el.value,isCheck:!el.isCheck}:el)
    }
    else { return state }
}

export default AddItemReducer;