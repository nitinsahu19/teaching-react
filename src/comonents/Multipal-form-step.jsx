 export const initialState= {
   page : 1,
   name : "",
   email:"",
   pincode :"",
   city:"",
  
 }
 export const multipalform = (State,action )=>{
    if(action.type=== "update_field"){
        return{...State,[action.field]:[action.value]}
    } else if(action.type=== "nextfield"){
        return{...State,page:State.page+1}
    } else if(action.type=== "prefield"){
        return{...State,page:State.page+1}
    } else {
        return  State
    }
 }