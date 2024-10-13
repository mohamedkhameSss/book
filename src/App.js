import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookPage from './bookPage/BookPage';
function App() {

  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    
                   
                    <Route
                        exact
                        path="/details/:id"
                        element={<BookPage />}
                    />

                  

                   

                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
    </div>
  );
}

export default App;
