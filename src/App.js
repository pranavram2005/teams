import './App.css';
import Card from './components/Card';
import S_Card from './components/S_Card';

function App() {
  return (
    <>
  <div>
    <div className="App">
      TEAM
      </div> 
      <div className="container-fluid head">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="App head">
      Student Leaders
      </div> 
      <div className="container-fluid head">
      <S_Card/>
      <S_Card/>
      </div>
      <div className="App head">
      Student Members
      </div> 
      <div className="container-fluid head2">
        <button data-bs-toggle="collapse" data-bs-target="#demo" type="button">Lab</button></div>
        <div id="demo" className="collapse">
          <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        <S_Card/></div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        <S_Card/></div> </div>
        <div className="container-fluid head2">
        <button data-bs-toggle="collapse" data-bs-target="#demo2" type="button">Human Practices</button></div>
        <div id="demo2" className="collapse">
          <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
          </div>
          <div className="container-fluid head2">
          <button data-bs-toggle="collapse" data-bs-target="#demo3" type="button">WebOps</button></div>
        <div id="demo3" className="collapse">
          <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
          </div>
          <div className="container-fluid head2">
          <button data-bs-toggle="collapse" data-bs-target="#demo4" type="button">Sponsorships and PR</button></div>
        <div id="demo4" className="collapse">
          <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
          </div>
          <div className="container-fluid head2">
          <button data-bs-toggle="collapse" data-bs-target="#demo5" type="button">Media and Design</button></div>
        <div id="demo5" className="collapse">
          <div className="head">
        <S_Card/>
        <S_Card/>
        <S_Card/>
        </div>
        <div className="head">
        <S_Card/>
        <S_Card/>
        </div>
          </div>
      </div></>
  );
}

export default App;
