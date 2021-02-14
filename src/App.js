import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { FireBaseContext } from "./context/firebaseContext";

import HomePage from './routes/Home/Home';
import GamePage from './routes/Game/GamePage';
import AboutPage from './routes/About/About';
import ContactPage from './routes/Contact/Contact';
import NotFound from './routes/NotFound/NotFound';
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Footer from "./components/Footer/Footer";

import style from './app.module.css';
import cn from 'classnames';
import Firebase from "./service/firebase";

const App = () => {

  const location =  useLocation('/');
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'

   return (
     <FireBaseContext.Provider value={new Firebase()}>
        <Switch>
         <Route path="/404" component={NotFound}></Route>
         <Route>
           <>
           <HeaderMenu bgActive={!isPadding}/>
           <div className={cn(style.wrap, {[style.isHomePage]: isPadding})}>
             <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/game" component={GamePage}></Route>
              <Route path="/about" component={AboutPage}></Route>
              <Route path="/contact" component={ContactPage}></Route>
              <Route render = {() => (
                <Redirect to="/404"/>
              )}/>
             </Switch>
           </div>
           <Footer/>
           </>
         </Route>
       </Switch>
     </FireBaseContext.Provider>  
   )
};

export default App;
