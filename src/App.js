import React, { Suspense} from 'react';
import './App.css';

const Header = React.lazy(() => import('./components/header/index'));
const Main = React.lazy(() => import('./components/main/index'));

function App() {
  return (
    <>
      <Suspense 
        fallback={
          <div
            className='fallback' 
          >
            <h1>Loading...</h1>
          </div>
        }
      >
        <Header />
        <Main />
      </Suspense>
    </>
  );
}

export default App;
