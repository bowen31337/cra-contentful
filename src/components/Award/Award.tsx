import React from 'react';
import { Col, Container, Row } from '../../utils/layout.styled';
import { Content, StyledImg, StyledText, Projects, StyledName, StyledNunber } from './Award.styled';

const Award = () => {

	return (
		<Container>
			<Row>
				<Col>
					<Content>
						<StyledImg>
							<img src="" alt="award"/>
						</StyledImg>
						<StyledText>
							<h2>Award winning real estate company in Dubai</h2>
							<span>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerique. lpsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</span>
							<Projects>
								<li>
									<StyledName>Previous projects</StyledName>
									<StyledNunber>34+</StyledNunber>
								</li>
								<li>
									<StyledName>Years Experience</StyledName>
									<StyledNunber>20y</StyledNunber>
								</li>
								<li>
									<StyledName>Ongoing projects</StyledName>
									<StyledNunber>12</StyledNunber>
								</li>
							</Projects>
						</StyledText>
					</Content>
				</Col>
			</Row>
		</Container>
	)

}

export default Award