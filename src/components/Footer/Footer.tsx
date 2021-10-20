import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { FootWrapper, Contact, FooterBottom, FooterMain, LegalLinks, QuickLinks, SocialMedia } from './Footer.styled'
import email from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'
import logo from '../../assets/logo-white.svg'

const Footer = () => {
	return (
		<FootWrapper>
			<Container>
				<Row>
					<Col>
						<FooterMain>
							<Contact>
								<img src={logo} alt="logo" />
								<ul>
									<li>
										<p>
											<img src={location} alt="location"/>
											<span>2118 Thornridge Cir.</span>
											<span>Dubai, UAE 35624</span>
										</p>
									</li>
									<li>
										<a href="tel://1300 887 062">
											<img src={phone} alt="phone"/>
											1300 887 062
										</a>
									</li>
									<li>
										<a href="mailto:jcanonge@alteryx.com">
											<img src={email} alt="email" />
											jcanonge@alteryx.com
										</a>
									</li>
								</ul>
							</Contact>
							<QuickLinks>
								<h3>QUICK LINKS</h3>
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>
										<a href="/">About</a>
									</li>
									<li>
										<a href="/">Project</a>
									</li>
									<li>
										<a href="/">Contact</a>
									</li>
								</ul>
							</QuickLinks>
							<LegalLinks>
								<h3>LEGAL LINKS</h3>
								<ul>
									<li>
										<a href="/">Terms</a>
									</li>
									<li>
										<a href="/">Conditions</a>
									</li>
									<li>
										<a href="/">Policy</a>
									</li>
								</ul>
							</LegalLinks>
							<SocialMedia>
								<h3>SOCIAL MEDIA</h3>
								<ul>
									<li>
										<a href="/" target="_blank">Facebook</a>
									</li>
									<li>
										<a href="/" target="_blank">Twitter</a>
									</li>
									<li>
										<a href="/" target="_blank">YouTube</a>
									</li>
									<li>
										<a href="/" target="_blank">Linkedin</a>
									</li>
								</ul>
							</SocialMedia>
						</FooterMain>
						<FooterBottom>
							<span>Copyright &copy; 2022 Lugar Inc.</span>
						</FooterBottom>
					</Col>
				</Row>
			</Container>
		</FootWrapper>
	)
}

export default Footer