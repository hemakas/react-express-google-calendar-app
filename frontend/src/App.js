import './App.css';
import { GoogleLogin } from 'react-google-login';

function App() {
  const responseGoogle = response => {
    console.log('code =' + response)
  }
  
  const responseError = error => {
    console.log(error)
  }

  return (
    <div className="App">
      <h1>Google Calendar API</h1>

      <div>
        <GoogleLogin 
          clientId='599586406188-02maa8a5lqtpqajq2bunbfl7ikqbqmt6.apps.googleusercontent.com' 
          buttonText='Sign In & authorize calendar'
          onSuccess={responseGoogle}
          onFailure={responseError}
          cookiePolicy={'single_host_origin'}
          responseType='code'
          accessType='offline'
          scope='openid email profile https://www.googleapis.com/auth/calendar'
        />
      </div>
    </div>
  );
}

export default App;
