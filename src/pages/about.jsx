import styled from "styled-components"
import React from "react";
import Container from "react-bootstrap/Container";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Gap200 = styled.div`
    height: 200px;
`;

const Gap100 = styled.div`
    height: 100px;
`;

const _h2 = styled.h2`
    margin-top: 0;
    font-size: 1.2em;
    letter-spacing: .2em;
    float: left;
    line-height: 1.8em;
    font-family: 'Noto Sans KR';
`;

const About = () => {
    return (
        <Container>
            <Gap200></Gap200>
                <MDBRow>
                    <MDBCol md = '3'></MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/1.JPG" circle/>
                        <MDBRow>
                            
                            <MDBCol md = '4'>
                                <_h2>
                                    1
                                    <span>/6</span>
                                    디자인
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>자체 솔루션을 통한 AI견적 서비스입니다.</h6>
                                <br></br>
                                <p>
                                내재되어있는 건물 데이터와 업체데이터, 위치를 종합하여 최적의 견적 서비스를 제공합니다.확인하기 힘든 디테일한 요소들이 존재하여 최종 금액은 조정될 수 있습니다.고객이 필요하신 부분만 선택하여 견적을 낼 수 있으며, 계약을 진행 하실 경우에 전초가 될 데이터를 쌓는 프로세스를 수행합니다.
                                </p>
                             </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
                <MDBRow>
                    <MDBCol md = '3'>
                    </MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/%EB%A7%A4%EC%B9%AD.JPG" circle/>
                        <MDBRow>
                            <MDBCol md = '4'>
                                <_h2>
                                    2
                                    <span>/6</span>
                                    매칭
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>건물 위치를 기반으로 한 파트너스 맞춤 매칭 서비스입니다.</h6>
                                <br></br>
                                <p>
                                기존의 정보가 부족해 신뢰할 수 없는 업체에 연락하는 방식에서 벗어나, FIT에서 검증된 업체들의 리스트 중 고객의 건물 위치를 기반하여 분야별 최적의 업체를 매칭합니다. 기존의 방식에서 투명성, 신뢰성을 높이는 작업입니다.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
                <MDBRow>
                    <MDBCol md = '3'>
                    </MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/%EB%93%B1%EB%A1%9D.JPG" circle/>
                        <MDBRow>
                            <MDBCol md = '4'>
                                <_h2>
                                    3
                                    <span>/6</span>
                                    등록
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>지속적인 등록, 업데이트를 통한 데이터 수질관리</h6>
                                <br></br>
                                <p>
                                당연한 이야기겠지만 더 많고 정확한 데이터를 수집하는 것은 저희 서비스를 갈고 닦아나가는 작업입니다. 더 높은 퀄리티로 보답드리기 위한 밑거름을 쌓는 시스템을 보유하고 있습니다.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
                <MDBRow>
                    <MDBCol md = '3'>
                    </MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/%EA%B4%80%EB%A6%AC.JPG" circle/>
                        <MDBRow>
                            <MDBCol md = '4'>
                                <_h2>
                                    4
                                    <span>/6</span>
                                    관리
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>회계 및 계약 등 전반적인 부분을 관리합니다.</h6>
                                <br></br>
                                <p>
                                관리비 입출금, 미납 여부, 계약 갱신 등 회계적인 부분을 관리하고 임대인 대표님에게 알림이 가도록 설계되었습니다. 정기 월간 보고서를 통해 점검이 잘 이뤄지고 있는지 예방 차원에서도 관리하며 하자보수 요청 시 문제 파악부터 파견요청 해결까지 팔로우 하며 관리합니다.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
                <MDBRow>
                    <MDBCol md = '3'>
                    </MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/%ED%8F%89%EA%B0%80.JPG" circle/>
                        <MDBRow>
                            <MDBCol md = '4'>
                                <_h2>
                                    5
                                    <span>/6</span>
                                    평가
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>파트너스 업체들의 종합평가를 진행합니다.</h6>
                                <br></br>
                                <p>
                                고객님들은 더 높은 퀄리티의 서비스를 제공받아야 하며, 파트너스 업체들은 잘 하는 만큼 더 좋은 평가를 받을 자격이 있습니다. 따라서 자체적인 종합평가를 진행하여 허투루 진행되는 일이 없도록 설계 되었습니다.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
                <MDBRow>
                    <MDBCol md = '3'>
                    </MDBCol>
                    <MDBCol md = '6'>
                        <Image src="https://proptech-img.s3.ap-northeast-2.amazonaws.com/%EB%B0%98%EC%98%81.JPG" circle/>
                        <MDBRow>
                            <MDBCol md = '4'>
                                <_h2>
                                    6
                                    <span>/6</span>
                                    반영
                                </_h2>
                            </MDBCol>
                            <MDBCol md = '8'>
                                <h6>고객님들의 의견 등 다양한 평가를 적극 반영합니다.</h6>
                                <br></br>
                                <p>
                                자체적으로 최적의 솔루션을 갖고 있는 것도 중요하지만, 실제 평가 또한 중요합니다. 고객평가 시스템을 도입하고 다양한 피드백을 수용하여 내외적으로 서비스 할 것 입니다.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md = '3'>
                    </MDBCol>
                </MDBRow>
            <Gap100></Gap100>
        </Container>
        
    );
};

export default About;