import React from 'react'

export default function Login(props) {
    const {
        handleOnSumit,

    } = props
  return (
    <form onSubmit={handleOnSumit}>
    <label>
      UserName:
     
    </label>
    <input type="submit" value="Submit" />
  </form>
  )
}
