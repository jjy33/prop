import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, About, Service, Partnermap, Estimate, Inquiry, Login, Join } from './pages';
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components"
import Navi from './components/navi';

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;

const App = () => {
	return (
		<AppContainer>
			<GlobalStyle />
			<Router>
				<Navi />
				<Routes>
					<Route path="/" exact={true} element={<Main />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/service" element={<Service />}></Route>
					<Route path="/partnermap" element={<Partnermap />}></Route>
					<Route path="/estimate" element={<Estimate />}></Route>
					<Route path="/inquiry" element={<Inquiry />}></Route>
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/Join" element={<Join />}></Route>
					
				</Routes>
			</Router>
		</AppContainer>
	);
};

export default App;


