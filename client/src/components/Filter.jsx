import React, {useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Filter = ({ listData, onFilter }) => {
  let [numElements, setNumElements] = useState(listData.length);

  const updateList = event => {
    const txt = event.target.value;
    const filteredList = listData.filter(item =>
      item.name.toLowerCase().includes(txt.toLowerCase())
    );
    setNumElements(filteredList.length);
    onFilter(filteredList);
  };
  
  const itemsCount = numElements || listData.length;
  return (
    <Header>
      <Title>{itemsCount} items filtered</Title>
      <Input onChange={updateList} />
    </Header>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

const Header = styled.div`
  background: lightsalmon;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
  height: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h4`
  font-family: "Expletus Sans";
  text-align: left;
  font-size: 2rem;
  font-weight: 400;
  color: darkred;
`;
const Input = styled.input`
  height: 3.5rem;
  width: 24rem;
  outline: none;
  border-radius: 0.5rem;
  border: white 2px solid;
  transition: border 0.5s;
  padding: 1rem;

  &:focus {
    border: tomato 2px solid;
  }
`;
