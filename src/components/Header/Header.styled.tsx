import styled from 'styled-components';


export const HeaderWrapper = styled.header`
 	padding-top: 3rem;
	padding-bottom: 10rem;
	/* background-image: url("../images/header-background.png"); */
	background-repeat: no-repeat;
	background-position: right bottom;
	background-color: #afd4e2;
	overflow: hidden;
	background-size: 534px;

	@media (max-width: 1280px) {
		background-size: 35%;
	}
	@media (max-width: 767px) {
		padding-top: 2rem;
		padding-bottom: 5rem;
		background-size: 28%;
	}

	/* & .hero h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 5.625rem;
		line-height: 120%;
		max-width: 680px;
		margin-bottom: 0;
		margin-top: 0;
		color: #1e3240;
	}

	@media (max-width: 1199px) {
		font-size: 4.625rem;
	}

	@media (max-width: 992px) {
		font-size: 3.625rem;
    	max-width: 440px;
	}

	@media (max-width: 768px) {
		font-size: 2.625rem;
	} */

`;

export const HeaderContent = styled.div`
	padding-bottom: 3rem;
	&::after {
		content: " ";
		display: table;
		clear: both;
	}
	&::before {
		content: " ";
		display: table;
	}

	& ul {
		float: right;
		width: 50%;
	}

	@media (max-width: 767px) {
		display: none;
	}

	& ul::after {
		content: " ";
		display: table;
		clear: both;
	}
	& ul::before {
		content: " ";
		display: table;
	}
	& ul li {
		float: left;
		margin-right: 4.375rem;

		@media (max-width: 1199px) {
			margin-right: 2rem;
		}

		@media (max-width: 767px) {
			margin-right: 1rem;
		}
	}


	& ul li a {
		color: #1e3240;
		font-size: 0.875rem;
		font-weight: normal;
		font-style: normal;
		line-height: 1.2857142;
		text-transform: uppercase;
		text-decoration: none;
	}
	& img {
		float: left;
		max-width: 120px;
		margin-top: 5px;

		@media (max-width: 767px) {
			margin-top: 13px;
		}
	}


`;
