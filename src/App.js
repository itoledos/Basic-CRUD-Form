import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { Link, Route, Routes} from 'react-router-dom';
import React from 'react';
import Main from './components/main';

function App() {
  return (
    <React.Fragment>
        <div className="main">
          <h2 className="main-header" style={{fontSize: '4em', marginBottom: '2em'}}>React Crud Operations</h2>
          <div>
            <Routes>

              <Route exact path='/' element={
                <div>
                  <Main />
                </div>
              } />
              <Route exact path='/create' element={
                <div>
                  <h3>Create a new entry</h3>
                  <Create />
                </div>
              } />
              <Route exact path='/read' element={
                <div style={{marginTop: '20'}}>
                  <h3>List of entries</h3>
                  <Read />
                </div>
              } />
              <Route exact path='/update' element={
                <div>
                  <h3>Update an entry</h3>
                  <Update />
                </div>
              } />
            </Routes>
          </div>
        </div>

    </React.Fragment>
  );
}

export default App;
