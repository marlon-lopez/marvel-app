import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Nav from './components/Nav/Nav'
//pages
import Comics from './pages/Comics'
import Home from './pages/Home'
const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/comics' exact component={Comics} />
      </Switch>
    </Router>
  )
}

export default App
