import React, {Component} from "react"
import { BrowserRouter as Route, Routes, withRouter, Link } from "react-router-dom"
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import Secure from './Components/Secure';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Collect from "./Components/Collect"
import About from "./Components/About"
import "./App.css"


const oktaAuth = new OktaAuth({
  issuer: 'https://https://dev-61688829.okta.com/oauth2/default',
  clientId: '0oa55xgso1NUsEvgS5d7',
  redirectUri: window.location.origin + '/login/callback'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    return (
      <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
        <Route path="/" exact={true} component={Secure}/>
        <Route path="/login/callback" component={LoginCallback}/>
      </Security>
    );
  }
}

const AppWithRouterAccess = withRouter(App);

class RouterApp extends Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}



function AppArrange() {
  return (
    <div className="AppArrange">
            <nav>
                <Link to ="/">Home</Link>
                <div>
                    <Link to="/"><h4>Home</h4></Link>
                    <Link to="/About"><h4>About</h4></Link>
                </div>
            </nav>
            <Header />
            <main>

            <Routes>
  
                <Route path = "/About/" element={<About />}></Route>
                <Route path = "/Collect/" element={<Collect />}></Route>
                {/* <Route path = "/Experience/" element={<Experience />}></Route>
                <Route path = "/Share/" element={<Share />}></Route> */}
                <Route path = "/Footer/" element = {<Footer />} />
                
                {/* <Route path = "/ResultList/:Recipe" element={<Recipe/>}/> */}
                {/* <Route path = "/ResultList/" element={<ResultList recipes={recipes}/>}/> */}
           
            </Routes>
            </main>
        </div>

    );
}
export default RouterApp;
// export default App;