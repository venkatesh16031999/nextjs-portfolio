import styled from 'styled-components';
import Avatar from '../avatar/avatar';
import ProgressBar from '../progress-bar/progress-bar';

const Skill = ({ skillName, percentage, icon }) => {
    return <>
        <Wrapper>
            <SkillAvatarWrapper>
                <Avatar icon={icon}></Avatar>
            </SkillAvatarWrapper>
            <SkillDetailWrapper>
                <SkillName>{skillName}</SkillName>
                <SkillProgress>
                    <ProgressBar percentage={percentage}></ProgressBar>
                </SkillProgress>
            </SkillDetailWrapper>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid ${(props) => props.theme.colors.backgroundLight};
    border-radius: 4px;
    margin: 8px 0px;
    padding: 6px 16px;
    transition: all 3000 ease-in-out;

    &:hover {
        border: 2px solid ${(props) => props.theme.colors.primaryColorMedium};
        background-color: ${(props) => props.theme.colors.primaryColorLight};
        transition: all 0.4s ease-in-out;
    }
`;

const SkillAvatarWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
`;

const SkillDetailWrapper = styled.div`
    padding: 0px 14px;
    width: 100%;
`;

const SkillName = styled.div`
    font-size: 1rem;
`;

const SkillProgress = styled.div`
    font-size: 0.6rem;
    width: 100%;
`;

export default Skill;
