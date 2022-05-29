import { GoogleLogin } from 'react-google-login';

const clientId = '273331216648-06e5r0h35r015h3dvg2rqs68oqgevb16.apps.googleusercontent.com';

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