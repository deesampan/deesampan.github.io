import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Highlighted from './Highlighted';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/highlighted",
    element: <Highlighted />,
  },
  {
    path: "*",
    element: <Dashboard />,  // Redirect to Dashboard for any other paths
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <div style={{ position: 'absolute', top: '0', left: '200px', right: '0', padding: '20px', backgroundColor: 'white' }}>
              <RouterProvider router={router} />
            </div>
          </Col>
        </Row>
      </Container>
    </RouterProvider>
  );
}

export default App;