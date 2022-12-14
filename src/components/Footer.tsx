import styled from "styled-components";
import colors from "../colors";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${colors.boldGray};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 40px;
  box-sizing: border-box;
`;

const FooterText = styled.span`
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 15px;
`;

function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <FooterWrapper>
      <FooterText style={{ fontWeight: 400, fontSize: 20, marginBottom: 20 }}>
        신지컴퍼니(주)
      </FooterText>
      <FooterText>대표: 신혜정</FooterText>
      <FooterText>서울특별시 강동구 구천면로 427-8, 202호</FooterText>
      <FooterText>문의 메일: help@no-smoking.kr</FooterText>
      <FooterText>문의 번호: 02-6285-0825</FooterText>
      <FooterText>팩스 번호: 0504-033-5367</FooterText>
      <FooterText>사업자 등록번호: 694-86-02165</FooterText>
      <FooterText style={{ fontWeight: 400, marginTop: 20 }}>
        Copyright © {year} 신지컴퍼니(주). All Right Reserved.
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;
