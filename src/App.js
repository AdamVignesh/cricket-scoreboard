  import { useState } from 'react';
import './App.css';
import DropdownComponent from './Components/DropdownComponent';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [runs, setRuns] = useState();

  const RunOptions = [
    '1',
    '2',
    '3'
  ];

  const ExtrasOptions = [
    'Wide',
    'No Ball'
  ];

  const BoundaryOptions = [
    '4',
    '6',
  ];

  const [totalRuns, setTotalRuns] = useState(0);
  const [wides, setWides] = useState(0);
  const [noBall, setNoBall] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [wickets, setWickets] = useState(0);
  const [overs,setOvers] = useState(0); 
  const [ballsBowled, setBallsBowled] = useState(0);

  const handleRunChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setTotalRuns(inputValue + totalRuns);
    setSelectedOption(event.target.value)
  };

  const handleExtrasChange = (event) => {
    if(event.target.value == 'Wide')
    {
      setWides(wides+1);
    }
    else
    {
      setNoBall(noBall+1);
    }
    setTotalRuns(totalRuns+1);
    setSelectedOption(event.target.value)
  };

  
  const handleBoundaryChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setTotalRuns(inputValue + totalRuns);
    setSelectedOption(event.target.value)
  };

  const handleWicket = () => {
    if(wickets == 9)
    {
      alert("All out");
      window.location.reload();
    }
    setWickets(wickets+1);
  };

  const nextBall = () => {
    setBallsBowled(ballsBowled+1);
    console.log(ballsBowled+"balls");
    const over = Math.floor(ballsBowled / 6);
    const ballsRemaining = ballsBowled % 6; 
    console.log(over+"over" + ballsRemaining +"balls");
    setOvers(over+"."+ballsRemaining);
    setSelectedOption('');
  };

  return (
    <div className="App">
  <Container>
    <Row>
      <Col xs={12} s={12} mad = {7} lg={8}>
        <div className="scoreBoard">
          <div className="score">
            <h1>Total: {totalRuns}-{wickets}</h1>
          </div>
          <div className="overs">
            <h3>Overs: {overs}</h3>
          </div>
          <div className="extras">
            <h2>Extras</h2>
            <h3>Wides: {wides}</h3>
            <h3>No Balls: {noBall}</h3>
          </div>
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={4}>
        <div className="adminControlls">
          <button onClick={nextBall} style={{ marginTop: '50px', height: '40px' }}>Next Ball</button>
          <DropdownComponent name="runs" value={selectedOption} onChange={handleRunChange} array={RunOptions} />
          <DropdownComponent name="extras" value={selectedOption} onChange={handleExtrasChange} array={ExtrasOptions} />
          <DropdownComponent name="boundaries" value={selectedOption} onChange={handleBoundaryChange} array={BoundaryOptions} />
          <button onClick={handleWicket} style={{ marginTop: '50px', height: '40px' }}>Wicket</button>
        </div>
      </Col>
    </Row>
  </Container>    
</div>

  );
}

export default App;
