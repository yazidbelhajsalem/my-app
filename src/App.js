import logo from './logo.svg';
import './App.css';
import Adress  from './companed/profil/Adress';
import  FullName  from './companed/profil/FullName';
import  ProfilPhoto  from './companed/profil/ProfilPhoto';
function App() {
  return (
    <div style={{backgroundImage:'url(https://static.javatpoint.com/images/javascript/javascript_logo.png)'}} className="App">
   <Adress/>
   <FullName/>
   <ProfilPhoto/>
    </div>
  );
}

export default App;
