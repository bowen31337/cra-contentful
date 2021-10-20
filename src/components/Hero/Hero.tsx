import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { StyledHero, StyledButton } from './Hero.styled'

const Hero = () => {

	return (
		<>
			<Container>
				<Row>
					<Col>
						<StyledHero>
							<h1>A home is built with love and dreams</h1>
							<p>Real estate farm that makes your dreams true.</p>

							<StyledButton primary>Our projects</StyledButton>
							<StyledButton>Contact us</StyledButton>
						</StyledHero>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Hero