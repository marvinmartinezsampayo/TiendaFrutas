import React from 'react';
import { Row } from 'reactstrap';

// Components:
import ProductTable from './components/ProductTable';

const App = (props) => {
  return (
    <Row>
      <ProductTable operator={1} />
      <ProductTable operator={2} />
      <ProductTable operator={3} />
      <ProductTable operator={4} />
      <ProductTable operator={5} />
      <ProductTable operator={6} />
      <ProductTable operator={7} />
      <ProductTable operator={8} />
      <ProductTable operator={9} />
    </Row>
  );
}

export default App;