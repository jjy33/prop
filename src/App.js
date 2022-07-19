import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import Nav from './components/nav';
import Main from './Main';
import About from './components/about';
import Estimate from './components/estimate';
import Inquiry from './components/inquiry';
import Login from './components/login';
import Join from './components/join';
import styled from "styled-components"

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
				<Nav />
				<Routes>
					<Route path="/" exact={true} element={<Main />}></Route>
					<Route path="/about" element={<About />}></Route>
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


