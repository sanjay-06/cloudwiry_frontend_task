import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import shopping from './components/store/App'
import Home from './components/seller/pages/Home';
import Reports from './components/seller/pages/Reports';
import Products from './components/seller/pages/Products';
import Support from './components/seller/pages/support';

const Application = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/shopping" component={shopping} />
    <Route path='/Home' exact component={Home} />
    <Route path='/reports' component={Reports} />
    <Route path='/products' component={Products} />
    <Route path='/support' component={Support} />
  </Router>
);

render(<Application />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

