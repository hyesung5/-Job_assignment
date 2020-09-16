import React, {Component} from  "react";
import {connect} from 'react-redux';
import {GetData} from '../store/module/Data_module';
import DataList from '../components/Data_List';


class DataContainer extends Component {

    componentDidMount(){
        this.DataCall();
    }

DataCall =() =>{

    console.log("datacall");
    const {GetData}= this.props;
    GetData();
}
render(){
    const {list}= this.props;
    return (
<div>

<DataList 
list={list}
/>

</div>

    )
}};

const mapStateToProps =(state)=> ({
list : state.Data_module.list,
data : state.Data_module.data
});

const mapDispatchToProps = {
GetData
}


export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);