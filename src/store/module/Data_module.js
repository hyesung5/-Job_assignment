import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

 const LOAD="LOAD";
 const FAIL="FAIL";
 const GET_DATA ="GET-DATA";

 const Load = createAction(LOAD,(bool)=> bool);
 const Fail= createAction(FAIL, (err)=> err);
 const Data =createAction(GET_DATA, (data)=> data);
 const header ={
     'Content-type': 'application/json',
     'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYxODk3Y2RmMDYxNDAwMTE4Y2E0MzEiLCJpYXQiOjE2MDAyMjc3MDgsImV4cCI6MTYwMDMxNDEwOH0.LS2RUEOPv7l4FDsyq6aLp1ZaMCwvU7LkifPdvAhs_DI'
 };

 const config ={
     headers:{'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYxODk3Y2RmMDYxNDAwMTE4Y2E0MzEiLCJpYXQiOjE2MDAyMjc3MDgsImV4cCI6MTYwMDMxNDEwOH0.LS2RUEOPv7l4FDsyq6aLp1ZaMCwvU7LkifPdvAhs_DI'}
};
 const JWT ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYxODk3Y2RmMDYxNDAwMTE4Y2E0MzEiLCJpYXQiOjE2MDAyMjc3MDgsImV4cCI6MTYwMDMxNDEwOH0.LS2RUEOPv7l4FDsyq6aLp1ZaMCwvU7LkifPdvAhs_DI"

export const GetData =()=> async (dispatch) => {
    console.log("1111");
    dispatch(Load(true));
    try{
        console.log("2222");
        const {data} = await axios.get("http://dauth.daios.net/v1/boards",config);
        dispatch(Data(data.data));
    }catch(e){
        console.log("33333");
    dispatch(Fail(e));
    }
    console.log("44444");
    dispatch(Load(false))
}



const initialState ={
list: [],
data:"",
load:false,
fail:""
};

export default handleActions({
    [LOAD]: (state, action)=> ({
        ...state,
        load: action.payload
    }),
    [GET_DATA]: (state, action) =>({
        ...state,
        list: action.payload
    }),
    [FAIL]: (state, action)=> ({
        ...state,
        fail: action.payload
    })
}, initialState);