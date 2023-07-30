import logo from './logo.svg';
import './App.css';
import Loading_page from './insta/Loading_page';
import PostView from './insta/PostView';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Main from './insta/Main';
function App() {
  return (
    <div className="App">
      
      <Main></Main>
    </div>
  );
}

export default App;
