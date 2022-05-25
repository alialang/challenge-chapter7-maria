import React, { Component } from "react";
import {
    Card,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Banner extends Component {
    render() {
        return (
            <Card className='banner'>
                <Card.Body>
                    <Card.Title className='banner-title'>Sewa Mobil di Jakarta Sekarang</Card.Title>
                    <Card.Text className='desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </Card.Text>
                    <Card.Text className='desc'>
                        tempor incididunt ut labore et dolore magna aliqua
                    </Card.Text>
                    <Button variant='success' className='button'>Mulai Sewa Mobil</Button>
                </Card.Body>
            </Card>
        ),
    }
}

export default Banner;
