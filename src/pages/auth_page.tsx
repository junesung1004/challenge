import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/form/white_box';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';

import { useNavigate } from 'react-router-dom';

const PageBack = styled.div`
  background-color: #f4f4f4;
`;

const TextInput = styled.textarea`
  width: 620px;
  height: 377px;
  background-color: #f1f1f1;
  border: 1px solid #339af0;
  border-radius: 10px;
  padding: 20px;
  font-size: 18px;
`;

const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 620px;
    height: 377px;
    background-color: #d9d9d9;
    border: none;
  }
`;
const H2Styled = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0 0 38px;
`;
const FormCancelButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 500;
`;
const FormSubmitButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #339af0;
  border-radius: 10px;
  background-color: #339af0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
const FormButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToDetail_page = () => {
    navigate('/detail_page');
  };

  return (
    <>
      <Header />
      <PageBack>
        <Wrapper>
          <WhiteBox>
            <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
            <WhiteBoxContents>
              <H2Styled>2023.08.16</H2Styled>
              <AuthWrapper>
                <input type="file" />
                <TextInput></TextInput>
              </AuthWrapper>
              <FormButton>
                <FormCancelButton onClick={navigateToDetail_page}>
                  취소하기
                </FormCancelButton>
                <FormSubmitButton onClick={navigateToDetail_page}>
                  등록하기
                </FormSubmitButton>
              </FormButton>
            </WhiteBoxContents>
          </WhiteBox>
        </Wrapper>
      </PageBack>
      <Footer />
    </>
  );
};

export default AuthPage;
