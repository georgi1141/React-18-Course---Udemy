import React, { useReducer, useRef } from 'react';
import { data } from '../../../data';


const ReducerBasics = () => {

    const ACTION_KEYS = {
        CLEAR_LIST:'CLEAR_LIST',
        RETRIEVE_LIST:'RETRIEVE_LIST',
        REMOVE_ITEM:'REMOVE_ITEM'

    }

    const initialState = {
        people: data
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_KEYS.CLEAR_LIST:
                return { ...state, people: [] };
            case ACTION_KEYS.RETRIEVE_LIST:
                return {...state,people:data};
            case ACTION_KEYS.REMOVE_ITEM:

                return {...state,people:state.people.filter(person=>person.id!==action.payload.id)};
            default:
                return state;

        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button 
                        onClick={()=>{dispatch({type:ACTION_KEYS.REMOVE_ITEM,payload:{id}})}}
                        >remove</button>
                    </div>
                );
            })}

            {state.people.length > 0 ?
                <button
                    className='btn'
                    style={{ marginTop: '2rem' }}
                    onClick={()=>{dispatch({type:ACTION_KEYS.CLEAR_LIST})}}
                >
                    Clear items
                </button> :
                <button
                    className='btn'
                    style={{ marginTop: '2rem' }}
                    onClick={()=>{dispatch({type:ACTION_KEYS.RETRIEVE_LIST})}}
                >
                    Reset items
                </button>
            }

        </div>
    );
};

export default ReducerBasics;
