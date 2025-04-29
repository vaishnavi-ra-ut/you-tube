import React, { useState } from 'react';
import Head from './components/Head.js';
import Body from './components/Body.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainCont from './components/MainCont.js';
import Play from './components/Play.js';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainCont />,
      },
      {
        path: "playVideo",
        element: <Play />,
      }
    ]
  }
]);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "password123") {  // <--- Set your desired password here
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", background: "#000", color: "#fff" }}>
        <h2>Enter Password to Access</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
          />
          <br />
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
