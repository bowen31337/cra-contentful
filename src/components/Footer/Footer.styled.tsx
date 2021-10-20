import styled from 'styled-components';

export const FootWrapper = styled.footer`
	background-color: #1e3240;
	padding-top: 90px;
	padding-bottom: 45px;

	& h3 {
		margin: 0;
		color: #fff;
		font-size: 18px;
		font-weight: 700;
		line-height: 23px;
	}

	& p {
		margin: 0;
	}

	& a {
		text-decoration: none;
	}

	& p,
	& a,
	& span {
		font-size: 14px;
		font-weight: 400;
		color: #bdbdbd;
		line-height: 18px;
	}

	& a:hover {
		text-decoration: underline;
	}

	& ul {
		margin: 0;
		padding: 0;
	}

	& ul li {
		padding-top: 0.75rem;
		list-style: none;
	}

	& ul li img {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	& ul li span img {
		vertical-align: top;
		margin-top: 0.1875rem;
	}

	& ul li p {
		display: inline-block;
	}
`;

export const FooterMain = styled.div`
	display: flex;

	@media (max-width: 991px) {
		display: block;
	}

`;

export const Contact = styled.div`
	width: 50%;

	& >img {
	padding: 0.375rem 0;

	& p span:nth-child(3) {
	display: block;
	padding-left: 22px;
}
}
`;

export const QuickLinks = styled.div`
	width: 16.666667%;

	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;

export const LegalLinks = styled.div`
	width: 16.666667%;

	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;

export const SocialMedia = styled.div`
	width: 16.666667%;

	@media (max-width: 991px) {
		width: 100%;
		margin-bottom: 2rem;
	}
`;

export const FooterBottom = styled.div`
	margin-top: 100px;
`;

export const PhoneLink = styled.a`

`;
