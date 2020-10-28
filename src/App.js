import React from 'react';
import { Button, Row } from 'reactstrap';

// Components:
import ProductTable from './components/ProductTable';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentOperator: 5
    }
  }

  render() {
    return (
      <Row style={{
        justifyContent: 'center',
        marginTop: 50,
      }}>
        <Button onClick={() => {
          this.setState({ currentOperator: this.state.currentOperator - 1 })
        }}>{'<'}</Button>

        <ProductTable number={this.state.currentOperator} />
        
        <Button onClick={() => {
          this.setState({ currentOperator: this.state.currentOperator + 1 })
        }}>{'>'}</Button>
      </Row>
    );
  }
}

export default App;