import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const ProductTable = (props) => {

    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <Col xs={12} md={12} lg={6} xl={4}>
            <Card>
                <CardHeader>
                    <h2>La tabla del {props.operator} :)</h2>
                </CardHeader>
                <CardBody>
                    {
                        myArray.map((item, i) => {
                            return (
                                <p>{props.operator + ' * ' + item + ' = '}
                                    <span><b>{props.operator * item}</b></span>
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