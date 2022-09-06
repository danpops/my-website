import { colors } from '../../design'
import { HeaderContainer, Section } from '../../components/Layout/styles'
import { Divider, Header3, Text } from '../../components/Text'
import { ContactOptionsContainer, LinkedInIcon, MailIcon } from './styles'
import { contact } from '../../assets/data/text'
import ContactOption from '../../components/ContactOption'

function Contact (): JSX.Element {
  return (
    <Section bgColor={colors.white}>
      <HeaderContainer>
        <Header3 color={colors.dark}>{contact.heading}</Header3>
        <Divider color={colors.primary} />
        <Text color={colors.dark}>{contact.content}</Text>
      </HeaderContainer>
      <ContactOptionsContainer>
        <ContactOption
          icon={<LinkedInIcon size={46} />}
          href={contact.linkedin}
        />
        <ContactOption icon={<MailIcon size={46} />} href={contact.email} />
      </ContactOptionsContainer>
    </Section>
  )
}

export default Contact