import { Header3, Text } from '../../components/Text'
import { about, sections } from '../../assets/data'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import useTheme from '../../hooks/useTheme'

function About (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.ABOUT} bgColor={theme.shadow}>
      <HeaderContainer id='about-content'>
        <Header3 color={theme.tertiary}>{about.heading}</Header3>
        <Text color={theme.tertiary}>{about.content}</Text>
      </HeaderContainer>
    </Section>
  )
}

export default About
