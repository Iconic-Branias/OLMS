
import './App.css';
import {BrowserRouter as Router ,Switch,Route, Redirect} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PageNotFound from './pages/pagenotfond';
import {ApolloProvider} from '@apollo/client'
import { client } from './apollo';
import Login from './pages/users/login';
import Signup from './pages/users/signup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
   <ApolloProvider client={client}>
      <div className='m-0 p-0 font-main'>
       <Router>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/about' component={About} />
           <Route path='/contact' component={Contact} />
           <Route path='/404' component={PageNotFound} />
           <Route path='/login' component={Login} />
           <Route path='/signup' component={Signup} />
           <Redirect to='/404' />
         </Switch>
       </Router>
    </div>
   </ApolloProvider>
  );
}

export default App;
