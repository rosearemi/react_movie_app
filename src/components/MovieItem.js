import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
`;
const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;
const Cardbody = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px; */
`;
const CardButton = styled.button`
  color: white;
  width: 70px;
  height: 30px;
  background-color: gray;
  box-shadow: 1px 1px 0px 0px rgb(167, 111, 111);
`;
const CardTitle = styled.h3`
  display: grid;
  align-items: center;
  font-weight: 600;
  margin: 0 0 0 10px;
`;

const MovieItem = (props) => {
  const { id, title, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  return (
    <CardBox>
      <Card>
        <img src={medium_cover_image} />
        <Cardbody>
          <Link to={`/MovieDetail/${id}`}>
            <CardTitle>{title}</CardTitle>
          </Link>

          <CardButton onClick={() => deleteById(id)}>삭제</CardButton>
        </Cardbody>
      </Card>
    </CardBox>
  );
};

export default MovieItem;
