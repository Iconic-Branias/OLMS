
import './App.css';
import {BrowserRouter as Router ,Switch,Route, Redirect} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PageNotFound from './pages/pagenotfond';
function App() {
  return (
    <div className='m-0 p-0 font-main'>
       <Router>
         <Switch>
           <Route path='/' exact component={Home} />
           <Route path='/about' component={About} />
           <Route path='/contact' component={Contact} />
           <Route path='/404' component={PageNotFound} />
           <Redirect to='/404' />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
