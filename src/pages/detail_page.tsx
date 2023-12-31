import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';
import DetailContent from '../components/challenge/detail_content';
import DetailNav from '../components/challenge/detail_nav';

const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PageBack = styled.div`
  background-color: #f4f4f4;
`;

const DetailPage = () => {
  return (
    <>
      <Header />
      <PageBack>
        <Wrapper>
          <Detail>
            <DetailContent></DetailContent>
            <DetailNav></DetailNav>
          </Detail>
        </Wrapper>
      </PageBack>
      <Footer />
    </>
  );
};

export default DetailPage;
