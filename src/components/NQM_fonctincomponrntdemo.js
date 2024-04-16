import React from 'react'

export default function NQM_fonctincomponrntdemo(props) {
  return (
    <div>
      <hr/>
      <h2>function component demo</h2>
      <h3>sủ dụng thuộc tính từ props</h3>
      <p>usersName: {props.userName}</p>
      <p>fullNames: {props.fullName}</p>
      <p>lastName: {props.lastName}</p>
    </div>
  )
}
