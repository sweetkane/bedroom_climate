import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Suggestor from './components/suggestor/Suggestor';
import { getAllClimates, refreshClimates, refreshOutdoor } from './actions';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClimates())
    .then(()=> {
      dispatch(refreshOutdoor)
    });
    
  }, [dispatch])

  useEffect(() => {
    let timer = setInterval( () => {
      dispatch(refreshClimates());
      console.log("refreshing");
    },300000)
    return () => clearInterval(timer);
}, [dispatch]);

  
  return (
    <div>
      <Header/>
      <Container>
        <Row className="align-items-center">
          <Col sm>
            <Dashboard/>
          </Col>
          <Col sm>
            <Suggestor />
          </Col>
        </Row>
      </Container>
      <Footer style={{ marginTop: 60 }}/>
    </div>
  );
}

export default App;
