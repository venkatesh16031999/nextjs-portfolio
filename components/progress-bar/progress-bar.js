import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = ({ percentage }) => {
    return <>
        <Wrapper>
            <ProgressBarWrapper variant="determinate" value = {percentage} ></ProgressBarWrapper>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    width: 100%;
`;

const ProgressBarWrapper = styled(LinearProgress)`
    & ${'.MuiLinearProgress-barColorPrimary'} {
        background-color: ${(props) => props.theme.colors.primaryColor} !important;
    }
`;

export default ProgressBar;