import styled from 'styled-components';

export const Article = styled.article`
  display: inline-block;
  width: 25%;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 20px;
  margin: auto;
  word-wrap: break-word;

  div {
    padding: 10px;
    margin: auto;
  }

  h2 {
    font-size: 25px;
    color: #282120;
    padding-left: 10px;
  }

  h3 {
    font-size: 20px;
    color: #456990;
    padding-left: 100px;
  }

  h4 {
    font-size: 20px;
    color: #d1d100;
    padding-left: 100px;
  }

  button {
    padding: 15px 45px;
    font-size: 22px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 40px;
  }
`;
