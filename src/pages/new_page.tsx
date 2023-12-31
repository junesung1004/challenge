import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/form/white_box';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../components/form/form_button';
import FormAgreeBox from '../components/form/form_agree';
import ReactDatePicker from '../components/calendar/calendar';
import TagBox from '../components/form/tag_box';

const PageBack = styled.div`
  background-color: #f4f4f4;
`;

const InputContent = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  &.flex-start {
    align-items: flex-start;
  }
`;

const LabelStyled = styled.label`
  font-size: 18px;
  width: 160px;
`;

const InputStyled = styled.input`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

const SelectStyled = styled.select`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

const TextareaStyled = styled.textarea`
  width: 406px !important;
  height: 220px !important;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 10px 15px;
  resize: none;
`;

const SpanStyled = styled.span`
  font-size: 13px;
`;

const NewPage: React.FC = () => {
  // 태그 관련 상태와 함수들을 정의
  const [tags, setTags] = useState<string[]>([]);

  const handleChangeTags = (newTags: string[]) => {
    setTags(newTags);
  };

  const [textValue, setTextValue] = useState<string>('');
  const handleSetValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (isChecked: boolean) => {
    setIsAgreed(isChecked);
  };

  return (
    <>
      <Header />
      <PageBack>
        <Wrapper>
          <WhiteBox>
            <WhiteBoxTitle>챌린지 개설</WhiteBoxTitle>
            <WhiteBoxContents>
              <div>
                <InputContent>
                  <LabelStyled htmlFor="formName">주제</LabelStyled>
                  <InputStyled
                    type="text"
                    id="formName"
                    placeholder="주제를 입력하세요."
                  />
                </InputContent>
                <InputContent>
                  <LabelStyled htmlFor="formCate">카테고리</LabelStyled>
                  <SelectStyled id="formCate">
                    <option value="운동">운동</option>
                    <option value="습관">습관</option>
                    <option value="취미">취미</option>
                    <option value="공부">공부</option>
                  </SelectStyled>
                </InputContent>
                <InputContent>
                  <LabelStyled htmlFor="formDage">챌린지 기간</LabelStyled>
                  <ReactDatePicker></ReactDatePicker>
                </InputContent>
                <InputContent>
                  <LabelStyled htmlFor="formImg">대표 이미지</LabelStyled>
                  <InputStyled type="file" id="formName" />
                </InputContent>
                <InputContent className="flex-start">
                  <LabelStyled htmlFor="forDescription">
                    챌린지 설명
                  </LabelStyled>
                  <TextareaStyled
                    placeholder="여기에 입력하세요"
                    value={textValue}
                    onChange={handleSetValue}
                  ></TextareaStyled>
                </InputContent>
                <InputContent className="flex-start">
                  <LabelStyled htmlFor="formTag">
                    태그
                    <br />
                    <SpanStyled>(최대 3개까지 추가)</SpanStyled>
                  </LabelStyled>
                  <TagBox tags={tags} onChangeTags={handleChangeTags} />
                </InputContent>
              </div>
            </WhiteBoxContents>
          </WhiteBox>
          <WhiteBox>
            <WhiteBoxTitle>약관 동의</WhiteBoxTitle>
            <WhiteBoxContents>
              {/* <FormAgreeBox></FormAgreeBox> */}
            </WhiteBoxContents>
          </WhiteBox>
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton>챌린지 개설하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
