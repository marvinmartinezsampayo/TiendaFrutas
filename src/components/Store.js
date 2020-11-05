import React from 'react';
import { Card, CardBody, CardHeader, Col, Row} from 'reactstrap';

// Icons:
import { FaAppleAlt } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { GiGrapes, GiWatermelon } from 'react-icons/gi';

const Store = (props) => {

    let myBackgroundColor = '';

    if (props.data.item === 'apples') {
        myBackgroundColor= 'rgba(255,0,0,0.2)';
    }

    if (props.data.item === 'Grapes') {
        myBackgroundColor= 'rgba(166,0,255,0.2)';
    }

    if (props.data.item === 'Peaches') {
        myBackgroundColor= 'rgba(255,157,0,0.2)';
    }

    return (
        <Col
            lg={4}
            md={6}
            xs={12}
            style={{ padding: 10 }}
        >
            <Card>
                <CardHeader>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 8 }}>
                            {props.data.business}
                        </div>

                        <div style={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            {getStoreIcon(props)}
                        </div>
                    </div>
                </CardHeader>
                <CardBody style={{backgroundColor: myBackgroundColor}}>                   
                    <Row className="d-flex justify-content-center">
                        <h4>{props.data.location_1_address}</h4>                    
                    </Row>
                    <Row>
                        <h6>{props.data.location_1_city + ', ' + props.data.location_1_state}</h6>
                    </Row>
                    <Row style={{ display: 'flex', paddingRight:'2%' }}>
                    
                        <div style={{ flex: 8 }}>
                            {props.data.farm_name}
                        </div>

                        <div style={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            {getNameStore(props)}
                        </div>
                                        
                    </Row>
                   
                </CardBody>
            </Card></Col>
    );
}

const getStoreIcon = (props) => {
    if (props.data.item === 'apples') {
        return (
            <FaAppleAlt color='red' />
        );
    }

    if (props.data.item === 'Grapes') {
        return (
            <GiGrapes color='purple' />
        );
    }

    if (props.data.item === 'Peaches') {
        return (
            <GiWatermelon color='orange' />
        );
    }
}

const getNameStore = (props) => {    
     


    if (props.data.farm_name && props.data.item === 'apples') {
        return (            
            <BsFillHouseFill color='red' />
        );
    }

    if (props.data.farm_name && props.data.item === 'Grapes') {
        return (           
            <BsFillHouseFill color='purple' />
        );
    }

    if ( props.data.farm_name && props.data.item === 'Peaches') {
        return (            
            <BsFillHouseFill color='orange' />
        );
    }
}

export default Store;