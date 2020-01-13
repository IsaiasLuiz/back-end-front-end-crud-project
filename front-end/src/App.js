import React from 'react';
import Routes from './routes';

let refresh = false;

const refreshPage = () => {
  refresh = true;
  window.location.reload();
}

function App() {
  return (
    <div>
      {/* {refresh && refreshPage()} */}
      <Routes />
    </div>
  );
}

export default App;
