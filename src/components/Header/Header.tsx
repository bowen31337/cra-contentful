import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { Hero, StyledHeader } from './Header.styled'
import { Button } from '../Button/Button.styled'

const Header = () => {
	return (
		<header>
			<Container>
				<Row>
					<Col>
						<StyledHeader>
							<img src="./assets/images/LugarLogo.svg" alt="logo" />
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/projects">Projects</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</StyledHeader>
						<Hero>
							<h1>A home is built with love and dreams</h1>
							<p>Real estate farm that makes your dreams true.</p>
							<Button primary>Our projects</Button>
							<Button>Contact us</Button>
						</Hero>
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header