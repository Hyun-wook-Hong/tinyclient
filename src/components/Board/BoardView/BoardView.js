import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  background-color: #555;
  color: white;
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;

const ListGroupItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const BoardView = ({ postData }) => {
    const post = postData[0];
    /*console.log(post);*/

    return (
        <CardContainer>
        <CardHeader>{post.REQ_STS}</CardHeader>
        <ListGroupItem>
          <strong>요청일자</strong> {post.REQ_DATE} {post.REQ_TIME}
        </ListGroupItem>
        <ListGroupItem>
          <strong>요청자</strong> {post.REQ_USER_NAME}
        </ListGroupItem>
        <ListGroupItem>
          <strong>요청내용</strong> {post.REQ_CONTENTS}
        </ListGroupItem>
        <ListGroupItem>
          <strong>처리내용</strong> {post.PRCS_CONTENTS}
        </ListGroupItem>
        <ListGroupItem>
          <strong>처리시간</strong> {post.PRCS_MIN} 분
        </ListGroupItem>
        <ListGroupItem>
          <strong>완료요청 일자</strong> {post.COMPLETE_REQ_DATE}
        </ListGroupItem>
        <ListGroupItem>
          <strong>처리완료 일자</strong> {post.PRCS_COMPLETE_DATE}
        </ListGroupItem>
        <CardHeader>
          <strong>실행회사</strong> {post.EXE_COMP}
        </CardHeader>
      </CardContainer>
      );
};
export default BoardView;