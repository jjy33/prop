import React from 'react';
import styled from 'styled-components';
import Section from '../components/section'


const D = styled.div`
	background-color: var(--primary-color)
`


const Main = (props) => {
	return (
		<>
			<Section>
				section1
				<D>aaa</D>
			</Section>
		</>
	);
};



export default Main;