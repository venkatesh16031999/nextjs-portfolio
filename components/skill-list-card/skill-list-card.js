import styled from 'styled-components';
import Skill from '../skill/skill';

const SkillListCard = ({ heading, skills = [] }) => {
    return <>
        <Wrapper>
            <SkillCardHeading>
                <div>{heading}</div>
            </SkillCardHeading>
            <SkillsList>
            {
                skills.map((skill, index) => {
                    return (
                    <Skill 
                        key={index} 
                        skillName={skill.skillName}
                        percentage={skill.percentage}
                        icon={skill.logo}
                    >
                    </Skill>
                    );
                })
            }
            </SkillsList>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
    width: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.04,1.04);
        box-shadow: 0 5px 20px rgb(0 0 0 / 30%);
    }
`;

const SkillCardHeading = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px 4px;
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};
`;

const SkillsList = styled.div`
    padding: 15px;
`;

export default SkillListCard;