import styled from 'styled-components';

const ConditionStyle = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 10px;
    width: 200px;
    height: 90px;
    border-radius: 8px;
    font-weight: bold;
    font-size: larger;
    background-color: #f6f4f1;
    color: ${props => props.fontcolor};
`;

export default ConditionStyle;