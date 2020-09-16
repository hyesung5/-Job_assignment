import React, { Component } from "react";

class Data_Input extends Component {
  render() {
    const { nickName, content, valueChange, onInsert } = this.props;
    return (
      <div style={{textAlign:"center", marginTop:"20px", marginBottom:"50px"}}>
        <label>
          {" "}
          닉네임{" "}
          <input name="nickName" value={nickName} onChange={valueChange} />
        </label>{" "}
        <label>
          내용 <input name="content" value={content} onChange={valueChange} />{" "}
        </label>{" "}
        <button onClick={onInsert}>전송</button>
      </div>
    );
  }
}

export default Data_Input;
