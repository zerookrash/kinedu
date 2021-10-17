import styled from "styled-components";

export const Title = styled.h2`
  position: absolute;
  line-height: 100px;
  left: calc(95% / 2);
  top: 30px;

  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;

  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 50px;
  }
`;

export const NavContainer = styled.div`
  background: ${({ section }) => (section ? "#1faddf" : "#D43571")};
  width: 100%;
  height: 500px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 660px;
  }
`;

export const NavContent = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5em;

  @media screen and (max-width: 768px) {
    margin-top: 4em;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 200px;
  height: 60px;
  top: 30px;
  margin: 0 auto;

  border: 1px solid #fff;

  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;
