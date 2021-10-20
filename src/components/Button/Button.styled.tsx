import styled from 'styled-components'

export const Button = styled.button<{ primary?: boolean}>`
  background: ${props => props.primary ? '#1E3240' : "transparent"};
  color: ${props => props.primary ? "white" : '#1E3240'};

  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  padding: 18px 24px;
  border: 1px solid '#1E3240';
`;
