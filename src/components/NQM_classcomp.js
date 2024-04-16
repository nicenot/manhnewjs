import React, { Component } from 'react'
 
export default class NQM_classcomp extends Component {
    constructor(props){
        super(props);
        // Tạo đối tượng dữ liệu
        this.state = {
            firstName:"Nguyễn",
            lastName:"Quang",
            userName:"k22cnt1",
        }
    }
    //arrow function
    Member = (props)=>{
      return(
        <div className='alert alert-success'>
          <h3>xin chào: {props.fullName} - bạn đã {this.props.age}tuổi.</h3>
        </div>
      );
    }


    listMember =()=>{
        return(
          <>
            <this.Member fullName="nguyễn văn a" age="20"/>
            <this.Member fullName="nguyễn văn a" age="22"/>
            <this.Member fullName="nguyễn văn a" age="23"/>
            <this.Member fullName="nguyễn văn a" age="24"/>
            </>
        )
    }
  render() {
    return (
      <div className='alert alert-danger'> 
        <h2>Class Component Demo</h2>
        <hr/>
        <h3>dữ liệu trong state </h3>
        <h4>xin chào: {this.state.firstName} {this.state.lastName}</h4>
        <hr/>
        <h3>dữ liệu từ props</h3>
        <p>company: {this.props.company}</p>
        <p>course:{this.props.course}</p>

        <hr/>
        <this.Member fullName="nguyễn quang mạnh" age="20"/>
        <hr/>
        {{/*this.listMember*/}}
      </div>
    )
  }
}
