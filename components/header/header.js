import styled from 'styled-components';
import Logo from '../logo/logo';

const Button = (props) => {
    return <>
        <Header>
            <Logo></Logo>
        </Header>
    </>;
};

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 0px 75px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.secondaryColor};

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 0px 12px;
        height: 50px;
    }
`;

export default Button;