import React from 'react'
import { GoogleLogin } from 'react-google-login';
const GoogleAuthen = () => {
    const responseGoogle = (response) => {
        console.log(response)
      
      }
    return (
        <>
         <h2>Google Authentication</h2>   
         <GoogleLogin
    clientId="481004791217-3ucth7fn2uin769ipu1q1b127i7ofk9r.apps.googleusercontent.com"
    buttonText="Google Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </>
    )
}

export default GoogleAuthen
