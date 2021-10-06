import styled from 'styled-components';

export const Article = styled.article`
  div {
    width: 30%;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 12px;
    margin: 20px auto;
    word-wrap: break-word;
  }

  section {
    padding-right: 50px auto;
  }

  h2 {
    font-size: 25px;
    color: #282120;
  }
  h3 {
    font-size: 20px;
    color: #456990;
  }

  h4 {
    font-size: 20px;
    color: #d1d100;
  }

  button {
    padding: 15px 45px;
    font-size: 22px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 40px;
    cursor: pointer;
  }
`;
