import React, { Component } from "react";
import { connect } from "react-redux";
import { GetData, valueChange, DataInsert } from "../store/module/Data_module";
import DataInput from "../components/Data_Input";
import DataList from "../components/Data_List";

class DataContainer extends Component {
  componentDidMount() {
    this.DataCall();
  }

  DataCall = () => {
    console.log("datacall");
    const { GetData } = this.props;
    GetData();
  };

  handleValueChange = (e) => {
    const { name, value } = e.target;
    const { valueChange } = this.props;

    valueChange({ key: name, value });
  };

  handleDataInsert = () => {
    const { DataInsert, nickName, content } = this.props;

    if (nickName === "") {
      alert("닉네임을 입력해주세요");
    } else if (content === "") {
      alert("내용을 입력해 주세요");
    } else {
    const params = { nickName, content };
      DataInsert(params);
    }
  };

  render() {
    const { list, nickName, content } = this.props;
    return (
      <div>
        <DataInput
          nickName={nickName}
          content={content}
          valueChange={this.handleValueChange}
          onInsert={this.handleDataInsert}
        />
        <DataList list={list} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.Data_module.list,
  nickName: state.Data_module.nickName,
  content: state.Data_module.content,
});

const mapDispatchToProps = {
  GetData,
  valueChange,
  DataInsert,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
