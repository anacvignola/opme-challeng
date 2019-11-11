import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #222;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    img {
      height: 50px;
      width: 50px;
      border-radius: 4px;
    }
    span {
      color: #222;
      font-weight: bold;
    }
    small {
      color: #222;
      padding-right: 5px;
      padding-left: 5px;
    }
    a {
      color: #3bb9e3;
      text-decoration: none;
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0 200px;
  button {
    background: #282a36;
    border-radius: 4px;
    padding: 10px;
    border: 0;
    color: #fff;
    &:hover {
      transition: all 0.5s inherit;
      border: 1px solid #282a36;
      padding: 9px;
      transition: all 0.5s ease;
      background: #fff;
      color: #282a36;
    }
  }
  span {
    font-size: 14px;
    font-weight: 600;
  }
`;
