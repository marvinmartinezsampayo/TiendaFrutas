import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const ProductTable = (props) => {

    let myArray = [1, 2, 3, 4, 5];

    return (
        <Col xs={12} md={12} lg={6} xl={4}>
            <Card>
                <CardHeader>
                    <h2>La tabla del {props.number}</h2>
                </CardHeader>
                <CardBody>
                    {
                        myArray.map((item, i) => {
                            return (
                                <p>{props.number + ' * ' + item + ' = '}
                                    <span><b>{props.number * item}</b></span>
                                </p>
                            );
                        })
                    }
                </CardBody>
            </Card>
        </Col>
    );
}

export default ProductTable;