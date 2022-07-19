import React from 'react';
import Container from './components/container';
import Col from './components/col';
import Row from './components/row';



const Main = (props) => {
	return (
		<Container>
			<Row>
				<Col md={6} lg={4}>1</Col>
				<Col md={6} lg={4}>2</Col>
				<Col md={6} lg={4}>3</Col>
			</Row>
		</Container>
	);
};



export default Main;