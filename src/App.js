import './App.css';

// Component Import
import Footer from './Components/Footer';
import Router from './router/Router';

// Contexts
import AuthContext from './contexts/AuthContext';

function App() {
  return (
    <>
    <AuthContext>
      <Router />
      <Footer />
    </AuthContext>
    </>
  );
}

export default App;
