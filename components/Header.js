import { HeaderImageWrapper, LogoWrapper, Nav, StyledHeader } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'

import Image from 'next/image'

// image imports
import LogoImage from '../public/images/logo.svg'
import MockupsImage from '../public/images/illustration-mockups.svg'

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <LogoWrapper>
            <Image src={LogoImage} alt='' />
          </LogoWrapper>
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
              connections with your users as you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <HeaderImageWrapper width='375px'>
            <Image src={MockupsImage} alt='' />
          </HeaderImageWrapper>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
