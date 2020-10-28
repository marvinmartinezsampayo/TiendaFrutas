import React from 'react';

// Components:
import ProductTable from './components/ProductTable';

const App = (props) => {
  return (
    <div>
      <ProductTable operator={4} />
      <ProductTable operator={6} />
    </div>
  );
}

export default App;