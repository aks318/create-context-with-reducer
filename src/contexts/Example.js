import createDataContext from '../createDataContext'

const exampleReducer = (state, action) => {
 switch (action.type) {
  case 'edit_example':
   return state.map((example) => {
   return example.id === action.payload.id ? action.payload :    example
   })
  case 'delete_example':
   return state.filter((example) => example.id !== action.payload)
  default:
   return state
 }
}
const deleteExample = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id})
    console.log("delete")
  }
}
const editExample = (dispatch) => {
 return (id, title, content, callback) => {
  dispatch({
   type: 'edit_blogpost',
   payload: {id, title,content}
  })
}
}
export const {ExampleContext, ExampleProvider} = createDataContext(
 exampleReducer, 
 {deleteExample,editExample },
 [{id: 1, value: 1 }]
)