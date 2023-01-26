import { Route, Routes } from 'react-router-dom';
import Register from './components/Signup';
import LoginForm from './components/loginform';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsList from './news/NewsList';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/Signup' element={<Register />} />
        <Route path='/News' element={<NewsList />} />

      </Routes>
    </div>
  );
}

export default App;
