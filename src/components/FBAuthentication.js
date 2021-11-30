import React from 'react'
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log(response);
}
const FBAuthentication = () => {
  return (
    <>
    <h2>Facebook Authentication</h2>
        <FacebookLogin
    appId="414882056661940"
    autoLoad={true}
    fields="name,email,picture"
    // onClick={componentClicked}
    callback={responseFacebook} />
    </>
  )
}

export default FBAuthentication
