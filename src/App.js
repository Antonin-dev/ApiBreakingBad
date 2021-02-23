
import './App.css';
import MenuContainer from './Menu/MenuContainer'
import ViewContainer from './viewContainer/ViewContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CardsDetail from './viewContainer/CardsDetail'

function App() {

  const baseUrl = "https://www.breakingbadapi.com/api/";
  const characters = `${baseUrl}characters/`; 
  const episodes = `${baseUrl}episodes/`;
  const quotes = `${baseUrl}quotes/`;

  

  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/characters/:id">
            <MenuContainer />
            <CardsDetail />
            
          </Route>

          <Route path="/characters">
            <MenuContainer />
            <ViewContainer 
            url = {characters}
            />
          </Route>

          <Route path="/episodes">
            <MenuContainer />
            <ViewContainer 
            url = {episodes}
            />
          </Route>

          <Route path="/quotes">
            <MenuContainer />
            <ViewContainer 
            url = {quotes}
            />
          </Route>

          <Route path="/">
            <MenuContainer />
            <ViewContainer />
          </Route>

          

        </Switch>
      </Router>
    </div>
  );
}

export default App;
