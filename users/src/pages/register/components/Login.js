import { GoogleLogin } from 'react-google-login';

const clientId = '170306968804-vlbbus2ab75d5avjpen6a736t3tonuku.apps.googleusercontent.com';

function Login() {

    const onSuccess = (response) => {
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("googleId", response.profileObj.googleId);

        console.log('Login Success! Current User: ', response.profileObj);
        window.location.reload(false);
    }

    const onFailure = (response) => {
        console.log('LOGIN FAILED! Please submit again res: ', Response);
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