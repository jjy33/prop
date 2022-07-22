import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './request.css'
import Image from "react-bootstrap/esm/Image";

const Estimate = () => {
    return (
        <div className='main'>
            <MDBRow>
				<MDBCol md = '3'></MDBCol>
				<MDBCol md = '6'>
					<div className='estimate_content'>
						<Image src="https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2022/5/16/JK_CO_uI9M8cQ22051622083654.png?v=202207160944"></Image>
                    </div>
                    <h1 className="text-center" style={{fontWeight: 'bold'
                    }}>AI견적 요청</h1><br></br>
                    <h3 className="text-center">자체 솔루션을 통해 최적의 견적을 내어 드립니다. <br></br>주소와 연락처를 입력해 주세요</h3><br></br>
					<MDBRow><MDBCol md = '3'></MDBCol>
                    <MDBCol md = '6'>
                    <div style={{
                        position: "absolute",
                        backgroundColor: "skyblue",
                        width: "500px",
                        height: "30%",
                        
                    }}><MDBRow><MDBCol md = '1'></MDBCol>
                        <MDBCol md = '10'>
                        <form>
                        
                        <MDBInput className='mb-2 mt-4' type='search' id='form1Example1' label='주소' />
                        <MDBInput className='mb-2 mt-4 text_center' type='number' id='form1Example2' label='연락처' />

                          <MDBBtn className="text_center" type='submit' block>
                            <span>견적요청</span>
                          </MDBBtn>
                        </form>
                        </MDBCol>
                        <MDBCol md = '1'></MDBCol>
                        </MDBRow>
                    </div>
                        
                        </MDBCol>
                    <MDBCol md = '3'></MDBCol></MDBRow>
				</MDBCol>
				<MDBCol md = '3'></MDBCol>
			</MDBRow>
        </div>
    );
};

export default Estimate;