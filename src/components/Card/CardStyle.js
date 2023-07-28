import styled from 'styled-components';

const CardStyle = styled.div`
    padding: 6px;
    background-color: rgb(208, 238, 207);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    border-radius: 10px;
    margin: 30px 20px;
    background-color: ${props => props.backgroundColor};
    color: beige;
`;

export default CardStyle;