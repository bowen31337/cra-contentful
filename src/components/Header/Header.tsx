import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { HeaderWrapper, HeaderContent } from './Header.styled'

const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<Row>
					<Col>
						<HeaderContent>
							<img src="./assets/images/LugarLogo.svg" alt="logo" />
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/projects">Projects</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</HeaderContent>
					</Col>
				</Row>
			</Container>
		</HeaderWrapper>
	)
}

export default Header