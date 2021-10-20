import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { StyledHeader } from './Header.styled'

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
					</Col>
				</Row>
			</Container>
		</header>
	)
}

export default Header