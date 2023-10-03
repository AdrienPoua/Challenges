import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import endpointChallenge from './utils/endpoints';
import Challenge from './pages/Challenge/Challenge';

export function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch(endpointChallenge)
      .then((res) => res.json())
      .then((challenge) => {
        setChallenges(challenge);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home challenges={challenges} />} />
      <Route path="/challenges/:id" element={<Challenge />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
