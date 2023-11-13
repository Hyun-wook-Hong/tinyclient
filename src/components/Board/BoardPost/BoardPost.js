import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import styled from "styled-components";


const statusOptions = [
    { value: '접수', label: '접수' },
    { value: '진행중', label: '진행중' },
    { value: '완료', label: '완료' },
    { value: '최소(보류)', label: '최소(보류)' },
    { value: '유지보수', label: '유지보수' },    
];

const StyledCard = styled(Card)`
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

/*게시글 작성*/
const BoardPost = () => {
    const [postData, setPostData] = useState({
        reqDate: '',
        reqTime: '',
        reqSts: '',
        exeComp: '',
        reqComp: '',
        reqUserName: '',
        reqContents: '',
        prcsContents: '',
        prcsMin: 0,
        completeReqDate: '',
        prcsCompleteDate: ''
    });

    // input change handler
    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;
        setPostData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSelectChangeHandler = (selectedOption) => {
        setPostData((prev) => ({
            ...prev,
            reqSts: selectedOption.value,
        }));
    };

    const onSubmitHandler = async(e) => {
        e.preventDefault();

        try{
            const API_URL = "//localhost:18080/posts/";

            // axios 사용한 POST 호출
            const response = await axios.post(API_URL, postData);
            console.log('Post request successful:', response.data);

            // 게시글 작성 후 다음 동작 
            // TO-DO

        } catch(error)
        {
            console.error('Error submitting post:', error); 
        }
    };

    return (
        <StyledCard>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group controlId="formReqDate">
              <Form.Label>요청일자 </Form.Label>
              <Form.Control
                type="text"
                placeholder="요청 일자을 입력하세요."
                name="reqDate"
                value={postData.reqDate}
                onChange={onInputChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formReqTime">
              <Form.Label>요청시간 </Form.Label>
              <Form.Control
                type="text"
                placeholder="요청 시간을 입력하세요."
                name="reqTime"
                value={postData.reqTime}
                onChange={onInputChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formReqContents">
              <Form.Label>요청 내용 </Form.Label>
              <Form.Control
                type="text"
                placeholder="요청 내용을 입력하세요."
                name="reqContents"
                value={postData.reqContents}
                onChange={onInputChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formPrcsContents">
              <Form.Label>처리 내용 </Form.Label>
              <Form.Control
                type="text"
                placeholder="처리 내용을 입력하세요."
                name="prcsContents"
                value={postData.prcsContents}
                onChange={onInputChangeHandler}
              />
            </Form.Group>    
            <Form.Group controlId="formReqUserName">
              <Form.Label>요청자 이름 </Form.Label>
              <Form.Control
                type="text"
                placeholder="요청자 이름을 입력하세요."
                name="reqUserName"
                value={postData.reqUserName}
                onChange={onInputChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formReqComp">
              <Form.Label>요청 회사 </Form.Label>
              <Form.Control
                type="text"
                placeholder="요청 회사를 입력하세요."
                name="reqComp"
                value={postData.reqComp}
                onChange={onInputChangeHandler}
              />
            </Form.Group>    
            <Form.Group controlId="formExeComp">
              <Form.Label>실행 회사 </Form.Label>
              <Form.Control
                type="text"
                placeholder="실행 회사를 입력하세요."
                name="exeComp"
                value={postData.exeComp}
                onChange={onInputChangeHandler}
              />
            </Form.Group>
            <Form.Group controlId="formPrcsMin">
              <Form.Label>수행시간(분) </Form.Label>
              <Form.Control
                type="text"
                placeholder="수행시간을 입력하세요."
                name="prcsMin"
                value={postData.prcsMin}
                onChange={onInputChangeHandler}
              />
            </Form.Group> 
            <Form.Group controlId="formReqSts">
              <Form.Label>요청 상태 </Form.Label>
              <Select
                options={statusOptions}
                onChange={onSelectChangeHandler}
                value={statusOptions.find((option) => option.value === postData.reqSts)}
              />
            </Form.Group>
            <Form.Group controlId="formCompleteReqDate">
              <Form.Label>납기일자 </Form.Label>
              <Form.Control
                type="text"
                placeholder="납기일자를 입력하세요."
                name="completeReqDate"
                value={postData.completeReqDate}
                onChange={onInputChangeHandler}
              />
            </Form.Group> 
            <Form.Group controlId="formPrcsCompleteDate">
              <Form.Label>완료일자 </Form.Label>
              <Form.Control
                type="text"
                placeholder="완료일자를 입력하세요."
                name="prcsCompleteDate"
                value={postData.prcsCompleteDate}
                onChange={onInputChangeHandler}
              />
            </Form.Group> 
      
            <Button variant="primary" type="submit">
              게시글 작성
            </Button>
          </Form>            
        </StyledCard>
      );

}

export default BoardPost;