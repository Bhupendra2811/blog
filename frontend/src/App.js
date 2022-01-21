import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/Signupscreen';
import Homescreen from './screens/Homescreen';
import Blog from "./components/Blog"
import Container from 'react-bootstrap/Container';
import axios from 'axios';
// import BlogScreen from './screens/BlogScreen';
import BlogsScreen from './screens/BlogsScreen';
import Welocme from './screens/Welcome';


function App() {
  axios.defaults.baseURL="http://localhost:5000"
  return (
    <>

  <div className="App">
    
    
    <Router>
    <Navbar/>
    
    <Container>
    <Routes>
                <Route path="/login" exact element={<Loginscreen/>} />
                <Route path="/register" exact element={<Signupscreen/>} />
                <Route path="/blog" exact element={<Homescreen/>} />
                <Route path="/blog/:id" exact element={<BlogsScreen/>} />
                <Route path="/" exact element={<Welocme/>} />
              

      </Routes>
    </Container> 
      </Router>
    </div>
    </>
  );
}
export default App;