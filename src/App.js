import React from 'react';
import { 
  BrowserRouter as Router,
  Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import './App.css';


import GeneralLayout from './components/layouts/general';

// Pages
import CreatePerson from './components/pages/createPerson';
import ListPeople from './components/pages/listPeople';
import UpdatePerson from './components/pages/updatePerson';

// Store
import store from './store';


const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <GeneralLayout>
          <Routes>
            <Route exact path='/' element={<ListPeople />} />
            <Route exact path='/person' element={<ListPeople />}/>
            <Route exact path='/person/create' element={<CreatePerson />}/>
            <Route exact path='/person/edit/:id' element={<UpdatePerson />}/>
          </Routes>
        </GeneralLayout>
      </Router>
    </Provider>
  </div>
);

export default App;