import styled from 'styled-components';

export const Container = styled.section`
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 576px) {
		max-width: 540px;
  	}

	@media (min-width: 768px) {
		max-width: 720px;
  	}
	@media (min-width: 992px) {
		max-width: 960px;
	}
	@media (min-width: 1200px) {
		max-width: 1116px;
	}

`;

export const Row = styled.div`
	margin-right: -0.75rem;
	margin-left: -0.75rem;

`;

export const Col = styled.div`
	position: relative;
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
`;