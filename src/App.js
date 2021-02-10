import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import { FireBaseContext } from "./context/firebaseContext";


import HomePage from './routes/home/home';
import GamePage from './routes/game/game';
import AboutPage from './routes/about/about';
import ContactPage from './routes/contact/contact';
import NotFound from './routes/not-found/not-found';
import HeaderMenu from "./components/header-menu/header-menu";
import Footer from "./components/footer/footer";

import style from './app.module.css';
import cn from 'classnames';
import Firebase from "./service/firebase";

const App = () => {

  const match = useRouteMatch('/');

   return (
     <FireBaseContext.Provider value={new Firebase()}>
        <Switch>
         <Route path="/404" component={NotFound}></Route>
         <Route>
           <>
           <HeaderMenu bgActive={!match.isExact}/>
           <div className={cn(style.wrap, {[style.isHomePage]: match.isExact})}>
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
