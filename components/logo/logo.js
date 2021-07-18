import styled from 'styled-components';

const Logo = (props) => {
    return <>
        <Wrapper>
            My portfolio
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    text-transform: capitalize;
    text-shadow: 3px 3px #29282852;
    color: ${(props) => props.theme.colors.whiteColor};
`;

export default Logo;