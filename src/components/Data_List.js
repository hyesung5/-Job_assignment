import React,{Component} from 'react';


class Data_List extends Component {

    render(){
        const {list} =this.props;
        return(
            <div>
                <table>
                    <tr><th>아이디</th><th>닉네임</th><th>내용</th></tr>
                {list.map((c, i) => {
                    return<tr><td key={i}>{c._id}</td><td>{c.nickName}</td><td>{c.content}</td></tr>
                })}
                </table>
            </div>
        )
    }
}

export default Data_List;