import { GoogleLogout } from 'react-google-login';

const clientId = '170306968804-vlbbus2ab75d5avjpen6a736t3tonuku.apps.googleusercontent.com'

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