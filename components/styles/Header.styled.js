import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`

export const LogoWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  } ;
`

export const HeaderImageWrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  } ;
`
