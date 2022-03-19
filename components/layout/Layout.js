import Link from "next/link";
import { Container, Header, Main, Content, Footer } from "./Styles";

import Logo from "../shared/Logo";
import HamburgerIcon from "../shared/HamburgerIcon";
import { Spacer } from "../shared/Spacer";
import Profile from "../shared/Profile";
import LeftSide from "../shared/LeftSide";

export default function Layout(props) {
  return (
    <Container>
      <Header>
        <Logo />
        <HamburgerIcon />
        <Spacer />
        <Profile />
      </Header>
      <Main>
        <LeftSide />
        <Content>{props.children}</Content>
      </Main>
      <Footer>
        <Link href="/">Term&Conditions</Link>
        <p>|</p>
        <Link href="/">Privacy policy</Link>
      </Footer>
    </Container>
  );
}
