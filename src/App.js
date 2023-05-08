/* CSS Imports */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

/* Custom Component Imports */
import PageHeader from './components/structure-components/PageHeader';
import PageFooter from './components/structure-components/PageFooter';
import HomePageBody from './components/page-components/HomePageBody';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageBody/>}/>
      </Routes>

      {/* 
        <PageHeader/>
        <HomePageBody/>
        <PageFooter/> 
      */}
      
    </div>
  );
}

export default App;
