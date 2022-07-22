import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, About, Request, Inquiry, Login, Join } from './pages';

import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components"
import Nav from './components/nav';

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
					<Route path="/request" element={<Request />}></Route>
					<Route path="/inquiry" element={<Inquiry />}></Route>
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/Join" element={<Join />}></Route>
					
				</Routes>
			</Router>
		</AppContainer>
	);
};

export default App;


