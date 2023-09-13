import './App.css';
import Banner from './components/Banner';
import Main from './containers/Main';
import SearchContainer from './containers/SearchContainer';
import ContentContainer from './containers/ContentContainer';

function App() {
 
  return (
    <div className="App">
      <Main>
          <Banner/>
          <SearchContainer/>
          <ContentContainer/>
      </Main>    
    </div>
  );
}

export default App;
