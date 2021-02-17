import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Nav from './components/Nav/Nav'
//pages
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Characters from './pages/Characters'
import Favorite from './pages/Favorite'
import Comics from './pages/Comics'
import Details from './pages/Details'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/characters' exact component={Characters} />
        <Route path='/characters/:id' exact component={Details} />
        <Route path='/comics' exact component={Comics} />
        <Route path='/comics/:id' exact component={Details} />
        <Route path='/favorite' exact component={Favorite} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
