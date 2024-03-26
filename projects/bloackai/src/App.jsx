import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
 

const App = () => {
  const [page, setPage] = useState('login');
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />

      </Routes>
    </Router>
  );
};

export default App;