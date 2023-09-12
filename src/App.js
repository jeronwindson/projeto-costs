import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Company">Compania</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </div>
      <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Company" element={<Company/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/NewProject" element={<NewProject/>} />
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
