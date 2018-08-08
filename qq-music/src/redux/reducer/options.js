export default (state = 1 ,action)=>{
    switch(action.type){
        case "options" :
             return action.n 
             break;
        default : return state     
    }
}