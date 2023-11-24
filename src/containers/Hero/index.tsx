import ParticlesBg from 'particles-bg'
import {
  ContentContianer,
  HeroButton,
  HeroContainer,
  HeroHeader1,
  HeroMasthead,
  ParticleContainer,
  TypewriterContainer
} from './styles'
import { hero, sections } from '../../assets/data'
import { Link } from 'react-scroll'
import useTheme from '../../hooks/useTheme'
import Typewriter from '../../components/Typewriter'
import useBoopAnimation from '../../hooks/animations/useBoopAnimation'
import styled from 'styled-components'
import devices from '../../utils/devices'

const CustomLink = styled(Link)`
  margin-top: 0.5rem;
  @media ${devices.md} {
    margin: 0.5rem 0;
  }
`

function Hero (): JSX.Element {
  const { theme } = useTheme()
  const animatedProps = useBoopAnimation()
  return (
    <HeroMasthead bgColor={theme.secondary} id={sections.HERO}>
      <ParticleContainer id='cobweb-bg' bgColor={theme.secondary}>
        <ParticlesBg num={60} type='cobweb' color={theme.primary} />
      </ParticleContainer>
      <ContentContianer id='hero-text'>
        <HeroContainer>
          <HeroHeader1 color={theme.tertiary}>{hero.heading1}</HeroHeader1>
          <HeroHeader1 color={theme.tertiary}>{hero.heading2}</HeroHeader1>
        </HeroContainer>
        <TypewriterContainer id='typewriter-text'>
          <Typewriter content={hero.typewriterText} />
        </TypewriterContainer>
        <CustomLink to={sections.ABOUT} smooth duration={500}>
          <HeroButton
            id='about-button'
            color={theme.light}
            bgColor={theme.primary}
            {...animatedProps}
          >
            {hero.buttonText}
          </HeroButton>
        </CustomLink>
      </ContentContianer>
    </HeroMasthead>
  )
}

export default Hero
