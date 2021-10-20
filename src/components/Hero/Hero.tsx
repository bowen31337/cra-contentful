import React from 'react'
import { Container, Row, Col} from '../../utils/layout.styled'
import { Button } from '../Button/Button.styled'
import { StyledHero } from './Hero.styled'

const Hero = () => {

	return (
		<>
			<Container>
				<Row>
					<Col>
						<StyledHero>
							<h1>A home is built with love and dreams</h1>
							<p>Real estate farm that makes your dreams true.</p>
							<Button primary>Our projects</Button>
							<Button>Contact us</Button>
						</StyledHero>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Hero