import styled from 'styled-components';
import SkillListCard from '../../components/skill-list-card/skill-list-card';
import { skillsData } from '../../data/skills';

const SkillsSection = (props) => {
    return <>
        <Wrapper>
            <HeadingWrapper>
                <h2>
                    Technical&nbsp;
                    <HeadingSubText>
                        Skills
                    </HeadingSubText>
                </h2>
            </HeadingWrapper>
            <SkillsWrapper>
                {skillsData.map((skill) => {
                    return (
                        <SkillListCard heading={skill.category} skills={skill.skills}>
                        </SkillListCard>)
                    })}
            </SkillsWrapper>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    padding: 0px 75px;
    background-color: ${(props) => props.theme.colors.backgroundLight};

    @media (${(props) => props.theme.queries.mobileQuery}) {
        flex-direction: column;
        padding: 0px 12px;
        padding-bottom: 40px;
    }
`;

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.5rem, 2vw, 2rem);
    padding: 32px 0px;
`;

const HeadingSubText = styled.span`
    color: ${(props) => props.theme.colors.primaryColor};
`;

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    gap: 10px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        flex-direction: column;
        padding: 0px 20px;
    }
`;



export default SkillsSection;