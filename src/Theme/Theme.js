// Styled Components
import styled from 'styled-components';
import { Colors } from './Global';

const H1 = styled.h1`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts
    font-size: 40px;
`;

const H2 = styled.h2`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts
`;

const H3 = styled.h3`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts
`;

const H4 = styled.h4`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts  
`;

const H5 = styled.h5`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts
`;

const H6 = styled.h6`
    color: ${props => (props.active ? Colors.Active : Colors.Primary)}
    text-align: center;
    font-family: AsparagusSprouts 
`;

const Paragraph = styled.p`
    font-size: 25px;
    font-family: AsparagusSprouts 
    color: ${props => (props.active ? Colors.Active : Colors.Primary)};
`;

const ParagraphMeta = styled.p`
    font-size: 12;
    font-family: AsparagusSprouts 
    color: ${props => (props.active ? Colors.Active : Colors.Primary)};
`;

const Description = styled.p`
    font-size: 14;
    font-weight: light;
    font-family: AsparagusSprouts 
`;

export { H1, H2, H3, H4, H5, H6, Paragraph, ParagraphMeta, Description };
