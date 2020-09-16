import React, { Component } from "react";

class Data_List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div style={{ width: "50%", margin: "0 auto", marginTop: "10px" }}>
        <table>
          <thead>
            <tr>
              <th>아이디</th>
              <th>닉네임</th>
              <th>내용</th>
            </tr>
          </thead>

          <tbody>
            {list.map((c, i) => {
              return (
                <tr key={i}>
                  <td>{c._id}</td>
                  <td>{c.nickName}</td>
                  <td>{c.content}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Data_List;
