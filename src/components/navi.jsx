import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Button, ButtonGroup, Container } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

const menuMargin = `20px`;

const Menu = styled(Nav.Link) `
    margin: auto ${menuMargin};
`;

const MenuDrop = styled(NavDropdown) `
    margin: auto ${menuMargin};
    color: ${({theme}) => theme.color.black} !important;
    font-size: ${({theme}) => theme.fontSize.navMn} !important;
    font-weight: ${({theme}) => theme.fontWeight.bold} !important;
`;

const NavbarVill = styled(Navbar)`
    background-color: ${({theme}) => theme.color.navBg};
    height: 80px;
`;

const BrandName = styled.span`
    color: ${({theme}) => theme.color.primary};
    font-size: ${({theme}) => theme.fontSize.navBr};
    font-weight: ${({theme}) => theme.fontWeight.bbold};

`;

const T = styled.span`
    color: ${({theme}) => theme.color.black};
    font-size: ${({theme}) => theme.fontSize.navMn};
    font-weight: ${({theme}) => theme.fontWeight.bbold};
`

const Red = styled(BrandName)`
    color: #ff4747;
    font-size: 26px;
    margin-left: 2px;
`

const Plus = styled(Red)`
    vertical-align: super;
    position: relative;
    margin-left: -5px;
    font-size: 20px;
`

const LButton = styled(Button)`
    border-radius: 100px 0 0 100px;
    border-right: 1px solid #408dff;
    width: 70px;
    height: 30px;
    padding-top: 1px;
    `
    
    const RButton = styled(Button)`
    border-radius: 0 100px 100px 0;
    border-left: 1px solid #408dff;
    width: 70px;
    height: 30px;
    padding-top: 1px;
`

const Navi = () => {
    return(
        <ThemeProvider theme={theme}>
            <NavbarVill expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <BrandName>VILL<Red>A<Plus>+</Plus></Red></BrandName>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto me-4 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <MenuDrop title="사업소개" id="navbarScrollingDropdown">
                                <MenuDrop.Item href="/about">회사 소개</MenuDrop.Item>
                                <MenuDrop.Item href="/service">서비스 소개</MenuDrop.Item>
                                <MenuDrop.Item href="/partnermap">파트너 현황</MenuDrop.Item>
                            </MenuDrop>
                            <Menu href="/estimate"><T>견적요청</T></Menu>
                            <Menu href="/inquiry"><T>계약문의</T></Menu>
                        </Nav>
                        <ButtonGroup>
                            <LButton href="/login">Login</LButton>
                            <RButton href="/join">Join</RButton>
                        </ButtonGroup>
                    </Navbar.Collapse>
                </Container>
            </NavbarVill>
        </ThemeProvider>
    );
}

export default Navi;


{/* <Navbar bg="light" expand="lg" sticky="top">
<Container fluid>
    <Navbar.Brand href="/">SMART VILL</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <NavDropdown title="사업소개" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/about">서비스 소개</NavDropdown.Item>
                <NavDropdown.Item href="/about">파트너 현황</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/estimate">견적요청</Nav.Link>
            <Nav.Link href="/inquiry">계약문의</Nav.Link>
        </Nav>
        <Button variant="outline-success">Search</Button>
    </Navbar.Collapse>
</Container>
</Navbar> */}