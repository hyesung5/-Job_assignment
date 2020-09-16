import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

 const LOAD="LOAD";
 const DATA_FAIL="DATA_FAIL";
 const INSERT_FAIL="INSERT_FAIL";
 const GET_DATA ="GET-DATA";
 const VALUE_CHANGE="VALUE_CHANGE";
 const INSERT ="INSERT";

 const Load = createAction(LOAD,(bool)=> bool);
 const DataFail= createAction(DATA_FAIL, (err)=> err);
 const InsertFail= createAction(INSERT_FAIL, (err)=> err);
 const Data =createAction(GET_DATA, (data)=> data);
 const Insert = createAction(INSERT, (data)=> data);
 const insert_config ={
        headers:{"Content-Type": "application/json",'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYxODk3Y2RmMDYxNDAwMTE4Y2E0MzEiLCJpYXQiOjE2MDAyMjc3MDgsImV4cCI6MTYwMDMxNDEwOH0.LS2RUEOPv7l4FDsyq6aLp1ZaMCwvU7LkifPdvAhs_DI'}
};

 const data_config ={
     headers:{'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYxODk3Y2RmMDYxNDAwMTE4Y2E0MzEiLCJpYXQiOjE2MDAyMjc3MDgsImV4cCI6MTYwMDMxNDEwOH0.LS2RUEOPv7l4FDsyq6aLp1ZaMCwvU7LkifPdvAhs_DI'}
};

export const GetData =()=> async (dispatch) => {
    dispatch(Load(true));
    try{
        const {data} = await axios.get("http://dauth.daios.net/v1/boards",data_config);
        dispatch(Data(data.data));
    }catch(e){
    dispatch(DataFail(e));
    }
    dispatch(Load(false))
}
export const DataInsert = (params)=> async (dispatch)=> {
    dispatch(Load(true));
    try{
      const{data}= await axios.post("http://dauth.daios.net/v1/boards", params , insert_config);
      dispatch(Insert(data));

    }catch(e){
        dispatch(InsertFail(e));
    }
    dispatch(Load(false))
}

export const valueChange= createAction(VALUE_CHANGE, ({key, value})=> ({key, value}));


const initialState ={
list: [],
load:false,
data_fail:"",
insert_fail:"",
nickName:"",
content:"",
data:""
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
    [DATA_FAIL]: (state, action)=> ({
        ...state,
        data_fail: action.payload
    }),
    [VALUE_CHANGE]: (state, action) => ({
        ...state,
        [action.payload.key]: action.payload.value
    }),
    [INSERT]: (state, action) => ({
        ...state,
        data: action.payload,
        nickName:"",
        content:"",
    }),
    [INSERT_FAIL]: (state, action) => ({
        ...state,
        insert_fail: action.payload
    })
}, initialState);