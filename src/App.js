import './App.css';
import categories from '../data/api';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        )
      })}
    </div>
  );
}

export default App;
