import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Nav from './components/Nav/Nav'
const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Nav />
    </Router>
  )
}

export default App
