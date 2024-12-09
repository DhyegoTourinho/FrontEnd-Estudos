import React from 'react'

export const ShowUserName = (props) => {
  return (
    <div>O nome do usuário é: {props.user.name}</div>
  )
}

export default ShowUserName;