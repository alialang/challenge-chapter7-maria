import { GoogleLogin } from 'react-google-login';

const clientId = '170306968804-vlbbus2ab75d5avjpen6a736t3tonuku.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log('Login Success! Current User: ', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('LOGIN FAILED! Please submit again res: ', res);
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                inSignedIn={true}
            />
        </div>
    )
}

export default Login;