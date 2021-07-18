import styled from 'styled-components';
import Image from 'next/image';
import ExperianceChart from '../../components/bar-chart/bar-chart';
import DescriptionPanel from '../../components/description-panel/description-panel';
import { experienceData } from '../../data/experience';

const ExperianceSection = (props) => {

    const experiences = experienceData && experienceData.length > 0 ? experienceData : [];

    const ExperienceDescriptionComponent = experienceData.map((experience, index) => {
        return (
            <DescriptionPanel 
              key={`experiance.heading` + index}
              heading={experience.heading}
              counter={index + 1}
              points={experience.points}
            >    
            </DescriptionPanel>
        )
    });

    return <>
        <Wrapper>
            <HeadingWrapper>
                <h2>
                    Professional&nbsp;
                    <HeadingSubText>
                        Experience
                    </HeadingSubText>
                </h2>
            </HeadingWrapper>
            <ExperienceWrapper>
                <SideImageWrapper>
                    <Image
                        src="/experience_two.png"
                        layout="responsive"
                        width={700}
                        height={580}
                    >
                    </Image>
                </SideImageWrapper>
                <ExperienceChartWrapper>
                    <ExperianceChart></ExperianceChart>
                </ExperienceChartWrapper>
                <SideImageWrapper>
                    <Image
                        src="/experience_one.png"
                        layout="responsive"
                        width={700}
                        height={580}
                    >
                    </Image>
                </SideImageWrapper>
            </ExperienceWrapper>
            <CompanyLogoWrapper>
                <LogoCard>
                    <ComapnyLogo>
                        <img
                            src="/rays.png"
                            layout="responsive"
                            height={80}
                            width={80}
                        >
                        </img>
                    </ComapnyLogo>
                    <ComapnyLogo>
                        <img
                            src="/boxigo.png"
                            layout="responsive"
                            height={80}
                            width={130}
                        >
                        </img>
                    </ComapnyLogo>
                    <ComapnyLogo>
                        <img
                            src="/maximl-logo.jpg"
                            layout="responsive"
                            height={100}
                            width={100}
                        >
                        </img>
                    </ComapnyLogo>
                    <ComapnyLogo>
                        <img
                            src="/springworks.png"
                            layout="responsive"
                            height={50}
                            width={80}
                        >
                        </img>
                    </ComapnyLogo>
                </LogoCard>
            </CompanyLogoWrapper>
            <ExperienceDescriptionWrapper>
                {ExperienceDescriptionComponent}
            </ExperienceDescriptionWrapper>
        </Wrapper>
    </>;
};

const SideImageWrapper = styled.div`
    flex: 1;
    @media (${(props) => props.theme.queries.mobileQuery}) {
        display: none;
        flex: 0;
    }
`;

const ExperienceChartWrapper = styled.div`
    flex: 2;
    width: 100%;
    padding: 0px 40px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 0px 0px;
    }
`;

const ExperienceWrapper = styled.div`
    display: flex;
    align-items: baseline;
    width: 100%;
`;

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.5rem, 2vw, 2rem);
    padding-bottom: 40px;
    width: 100%;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        flex-direction: column;
        padding: 20px 12px;
        padding-bottom: 40px;
    }
`;

const ExperienceDescriptionWrapper = styled.div`
    padding: 0px 75px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 0px 12px;
    }
`;

const HeadingSubText = styled.span`
    color: ${(props) => props.theme.colors.primaryColor};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 50px 0px;
    align-items: baseline;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 0px 20px;
    }
`;

const CompanyLogoWrapper = styled.div`
    padding: 50px 75px;
    width: 100%;
    @media (${(props) => props.theme.queries.mobileQuery}) {
        flex-direction: column;
        padding: 0px 20px;
    }
`;

const LogoCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
    padding: 10px;
    width: 100%;
    border-radius: 10px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        display: none;
    }
`;

const ComapnyLogo = styled.div`
    width: 8%;
    height: 8%;
`;

export default ExperianceSection;