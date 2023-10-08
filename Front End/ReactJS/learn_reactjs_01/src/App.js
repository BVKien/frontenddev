import Header from './Header01';
import Content01 from './Content01';
import Footer01 from './Footer01';

/*
- can write any js
- {}: render - ex: <p>{[1, 2, 3]}</p>
*/

function App() {
  return (
    <div className="App">
      <Header title='header Van Kien dep trai vai dai' />
      <Content01 />
      <Footer01 />
    </div>
  );
}

export default App;
