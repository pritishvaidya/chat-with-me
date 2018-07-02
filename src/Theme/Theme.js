// Styled Components
import styled from 'styled-components';
import {Colors, media} from './Global';

const H1 = styled.h1`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;
`;

const H2 = styled.h2`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;

`;

const H3 = styled.h3`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;

`;

const H4 = styled.h4`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;
    
`;

const H5 = styled.h5`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;
    
`;

const H6 = styled.h6`
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
    font-weight: normal;
    font-family: serif;
    text-align: center;
    text-transform: capitalize;
    
`;

const Paragraph = styled.p`
    font-size: 16;
    font-weight: normal;
    color: ${props => (props.active ? Colors.Active : Colors.Text)}

`;

const ParagraphMeta = styled.p`
    font-size: 12;
    font-weight: light;
    color: ${props => (props.active ? Colors.Active : Colors.Text)}
`;

const Description = styled.p`
    font-size: 14;
    font-weight: light;
`;

export { H1, H2, H3, H4, H5, H6, Paragraph, ParagraphMeta, Description };
