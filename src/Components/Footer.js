import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transfomr: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin-top: 50px;
`;
const List = styled.ul`
  display: flex;
`;
const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;
const Link = styled.a`
  color: ${props=> props.theme.darkBlueColor}
  font-size: 12px;
`;
const CopyRight = styled.span`
  color: ${props => props.theme.greyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">about us</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">press</Link>
      </ListItem>
      <ListItem>
        <Link href="#">api</Link>
      </ListItem>
      <ListItem>
        <Link href="#">jobs</Link>
      </ListItem>
      <ListItem>
        <Link href="#">private</Link>
      </ListItem>
      <ListItem>
        <Link href="#">terms</Link>
      </ListItem>
      <ListItem>
        <Link href="#">directory</Link>
      </ListItem>
      <ListItem>
        <Link href="#">profiles</Link>
      </ListItem>
      <ListItem>
        <Link href="#">hashtags</Link>
      </ListItem>
      <ListItem>
        <Link href="#">language</Link>
      </ListItem>
    </List>
    <CopyRight>Instaclone {new Date().getFullYear()} &copy;</CopyRight>
  </Footer>
);
