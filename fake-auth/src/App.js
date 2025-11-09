 import './App.css'; 
import AppContent from './Context/AppContent';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
     <AuthProvider>
        <AppContent/>
     </AuthProvider>
  );
}

export default App;
