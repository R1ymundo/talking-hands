import React, { useState, useEffect } from 'react';
import DotLoader from "react-spinners/DotLoader";
import Header from './componentes/estructura/Header';
import Body from './componentes/estructura/Body';
import Footer from './componentes/estructura/Footer';

import './App.css';

function App() {
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div style={loading ? { display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5dc' } : null}>
        {loading ? (
          <DotLoader color='#8a4922' loading={loading} size={50} />
        ) : (
          <div>
            <Header />
            <Body />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
