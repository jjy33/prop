import React from 'react';
<<<<<<< HEAD
import main_video from "../components/video/Main_video.webm";
import styled, { withTheme } from "styled-components"
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
=======
import styled from 'styled-components';
import Section from '../components/section'
>>>>>>> 054e6107e4105acddf72cca3a06d5efcd4052ca8

const Gap200 = styled.div`
    height: 200px;
`;

<<<<<<< HEAD
const Gap100 = styled.div`
    height: 100px;
`;

const Main = (props) => {
	return (
		<div classname='main'> 
			<div className="overlay"></div>
			<video src={main_video} autoPlay loop muted></video>

			<MDBRow>
				<MDBCol md = '2'></MDBCol>
				<MDBCol md = '8'>
					<div className='content'>
						<h2 style={{color:'white'}}> 소규모 주택관리는<br></br></h2>
						<h2 style={{color:'skyblue'}}>VILLA+</h2>
						<br></br>
						<p style={{color:'white'}}>주택 AI매니저의 등장<br></br>
						아직도 건물 관리에 머리가 아프시나요?</p>
						<div><button className='button_main'>검진 받기</button></div>
					</div>
					
				</MDBCol>
				<MDBCol md = '2'></MDBCol>
			</MDBRow>
		</div>
=======
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
>>>>>>> 054e6107e4105acddf72cca3a06d5efcd4052ca8
	);
};

export default Main;