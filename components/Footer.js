import Image from 'next/image'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { FooterLogoWrapper, StyledFooter } from './styles/Footer.styled'
import SocialIcons from './SocialIcons'

// image imports
import WhiteLogoImage from '../public/images/logo_white.svg'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterLogoWrapper>
          <Image src={WhiteLogoImage} alt='' />
        </FooterLogoWrapper>

        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}
