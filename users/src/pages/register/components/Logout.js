import { GoogleLogout } from 'react-google-login';

const clientId = '273331216648-06e5r0h35r015h3dvg2rqs68oqgevb16.apps.googleusercontent.com'

function Logout() {

    const onSuccess = (response) => {
        console.log('Logout Success! Bye..');
        localStorage.setItem("email", response.profileObj.email);
        localStorage.setItem("name", response.profileObj.name);
        localStorage.setItem("googleId", response.profileObj.googleId);
        window.location.reload(false);
    }

    return (
        <div id='signUpButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;