import React from "react";
import styled from "styled-components";

const Card = styled.li`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 3px -1px rgba(151, 171, 187, 0.7);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  padding: 20px;
  min-height: 200px;
`;

const Span = styled.span`
  padding: 0 60px;
  color: #59687f;
  background: #fff;
  strong {
    color: #adb8c2;
    font-size: 1.2em;
    font-weight: 700;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #ebeff2;
  margin: 20px 0 10px 0;
`;


interface NewsFeed {
  id: number;
  title: string;
  text: string;
}

const StyledCard = ({
  id,
  title,
  text,
}: NewsFeed) => (
  <Card>
    <Span><strong>{title}</strong></Span>
    <Divider/>
    <Span>{text}</Span>
  </Card>
);

export default StyledCard;
