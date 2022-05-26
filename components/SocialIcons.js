import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com/ThePranayGupta/'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/thepranaygupta/'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
