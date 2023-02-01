import Link from "next/link";
import * as Styled from "./styled";

const Logo = () => {
  return (
    <Link href="/">
      <Styled.LogoBox>
        <Styled.NameLogo>MKS</Styled.NameLogo>
        <Styled.Text>Sistemas</Styled.Text>
      </Styled.LogoBox>
    </Link>
  );
};

export default Logo;
