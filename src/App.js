/* CSS Imports */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

/* Custom Component Imports */
import PageHeader from './components/structure-components/PageHeader';
import PageFooter from './components/structure-components/PageFooter';
import HomePageBody from './components/page-components/HomePageBody';

function App() {
  return (
    <div className="App">
      <PageHeader/>

      <HomePageBody/>

      <PageFooter/>
    </div>
  );
}

export default App;
