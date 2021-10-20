import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { Contact, FooterBottom, FooterMain, LegalLinks, PhoneLink, QuickLinks, SocialMedia } from './Footer.styled'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col>
						<FooterMain>
							<Contact>
								<img src="./assets/images/logo-white.svg" alt="logo" />
								<ul>
									<li>
										<p>
											<img src="./assets/images/location.svg" alt="location"/>
											2118 Thornridge Cir.<br/>Dubai, UAE 35624
										</p>
									</li>
									<li>
										<PhoneLink href="tel://1300 887 062">
											<img src="./assets/images/phone.svg" alt="phone"/>
											1300 887 062
										</PhoneLink>
									</li>
									<li>
										<a href="mailto:jcanonge@alteryx.com">
											<img src="./assets/images/email.svg" alt="email" />
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
		</footer>
	)
}

export default Footer