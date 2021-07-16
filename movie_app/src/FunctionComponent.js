import React from 'react';
import PropTypes from 'prop-types';
import Rainbow from './Rainbow';

// 기본 component
function Potato() {
  return (
    <div>
      I love Potato! 
    </div>
  );
}

// props 여러개
function Fruit(props) {
  //console.log(props);
  return (
    <h5>
      {props.name} - {props.cnt}
    </h5>
  )
}

// property name으로 바로 접근
function Food({mod}) {
  return (
    <>
      foodddddd <br />
      fod <br />
      {mod} <br />
    </>
  )
}

// 강좌 카테고리 배열 
// object list. component 동적으로 rendering 하기 
const categoryList = [ 
  {
    id: 11,
    name: "0",
    value: "category_0",
    description: "단계_0",
    rating : 5
  },
  {
    id: 12,
    name: "1",
    value: "category_1",
    description: "단계_1",
    rating : 4.9
  },
  {
    id: 13,
    name: "2",
    value: "category_2",
    description: "단계_2",
    rating : 4.8
  },
  {
    id: 14,
    name: "3",
    value: "category_3",
    description: "단계_3",
    rating : 4.7
  },
];

//Map 연습 1
function Category({ newName, newId, newDesc, rating}) {
  return(
      <div>
        카테고리 이름 : {newName}, 카테고리 아이디 : {newId}, 카테고리 설명 : {newDesc}
        <h4>{rating}/5.0</h4>
      </div>
  )
}
// 얻고 싶은 props에 대한 설명을 적는다
Category.propTypes = {
  newName: PropTypes.string.isRequired,
  newId: PropTypes.number.isRequired,
  newDesc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

//Map 연습 2
function renderCategory(c) {
  // return <Category key = {c.id} newName = {c.value} newDesc = {c.description} newId = {c.id} rating = {c.rating} />
  return <Category key = {c.id} newName = {c.value} newDesc = {c.description} />
}

function FunctionComponent() {
  // return <div>{categoryList.map(renderCategory)}</div>;
  return (
    <div className="App" >
      <Rainbow />
      <Potato /> 
      <Fruit name="banana" cnt="3" />
      <Fruit name="tomato" cnt="5" something={false} papa={["hello", 1, 2, 3, true]} />
      <Food mod="food2" />
      <hr />
      Map 연습 1 <br />
      {categoryList.map(c => {
        return <Category key = {c.id} newName = {c.name} newDesc = {c.description} newId = {c.id} rating = {c.rating} />
      })}
      <hr />
      Map 연습 2 <br />
      {console.log(categoryList.map(renderCategory))}
      {categoryList.map(renderCategory)}
    </div>
  );
}

export default FunctionComponent;
