import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { HeaderWrapper, HeaderContent, StyledHero, StyledButton } from './Header.styled'
import logo from '../../assets/Lugar Logo.svg'

const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<Row>
					<Col>
						<HeaderContent>
							<img src={logo} alt="logo" />
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/projects">Projects</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</HeaderContent>
						<StyledHero>
							<h1>A home is built with love and dreams</h1>
							<p>Real estate farm that makes your dreams true.</p>

							<StyledButton primary>Our projects</StyledButton>
							<StyledButton>Contact us</StyledButton>
						</StyledHero>
					</Col>
				</Row>
			</Container>
		</HeaderWrapper>
	)
}

export default Header