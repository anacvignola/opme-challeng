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

export const Profile = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3bb9e3;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const RepoList = styled.ul`
  padding-top: 15px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
  h1 {
    color: #666;
  }
  li {
    margin-top: 10px;
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    & + li {
      margin-top: 10px;
    }
    div {
      flex: 1;
      margin-left: 15px;
      span {
        font-size: 16px;
        a {
          text-decoration: none;
          color: #333;
          &:hover {
            color: #3bb9e3;
          }
        }
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }
`;
