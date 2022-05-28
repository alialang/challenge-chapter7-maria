import { GoogleLogout } from 'react-google-login';

const clientId = '170306968804-vlbbus2ab75d5avjpen6a736t3tonuku.apps.googleusercontent.com'

function Logout() {

    const onSuccess = () => {
        console.log('Logout Success! Bye..');
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