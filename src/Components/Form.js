import {useReducer} from 'react';
const CHANGE_FIRST_NAME = "Changing_First_Name";
const CHANGE_LAST_NAME = "Changing_Last_Name";
const CHANGE_WIDTH = "Changing_Width";
const CHANGE_HEIGHT = "Changing_Height";

function reducer(state,action){
    switch(action.type){
        case CHANGE_FIRST_NAME:
            return{
                ...state,
                firstname: action.payload
            };
        case CHANGE_LAST_NAME:
            return{
                ...state,
                lastname: action.payload
            };
        case CHANGE_WIDTH:
            return{
                ...state,
                width: action.payload
            };
        case CHANGE_HEIGHT:
            return{
                ...state,
                height: action.payload
            };
        default:
            throw new Error(`That was weird. How did you ${action.type}`)

    }
    // if(action.type === CHANGE_FIRST_NAME){
    //     return{
    //         ...state,
    //         firstname: action.payload
    //     };
    // }
    // if(action.type === CHANGE_LAST_NAME){
    //     return{
    //         ...state,
    //         lastname: action.payload
    //     };
    // }
    // if(action.type === CHANGE_WIDTH){
    //     return{
    //         ...state,
    //         width: action.payload
    //     };
    // }
    // if(action.type === CHANGE_HEIGHT){
    //     return{
    //         ...state,
    //         height: action.payload
    //     };
    // }
    // return state;
}

export default function FormData(){
    const [state, dispatch] = useReducer(reducer, {
        firstname: '',
        lastname: '',
        width: '',
        height: ''
    })

    function onFirstNameChange(event){
        dispatch({
            type: CHANGE_FIRST_NAME,
            payload: event.target.value
        })
    }
    function onLastNameChange(event){
        dispatch({
            type:CHANGE_LAST_NAME,
            payload: event.target.value
        })
    }
    function onWidthChange(event){
        dispatch({
            type: CHANGE_WIDTH,
            payload: event.target.value
        })
    }
    function onHeightChange(event){
        dispatch({
            type:CHANGE_HEIGHT,
            payload: event.target.value
        })
    }

    return(
        <form>
            <p>First Name:</p>
            <input value={state.firstname} onChange={onFirstNameChange} />
            <p>Last Name:</p>
            <input value={state.lastname} onChange={onLastNameChange} />
            <p>Width:</p>
            <input value={state.width} onChange={onWidthChange}/>
            <p>Height:</p>
            <input value={state.height} onChange={onHeightChange}/>
        </form>
    )
}