import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../components/button/button';

const HeroSection = (props) => {
    return <>
        <Wrapper>
            <HeadingWrapper>
                <HeadingText>
                    Hi, I am <br />
                    <HeadingSubText>
                        Venkatesh Rajendran
                    </HeadingSubText>
                </HeadingText>
                <Paragrapgh>
                    I am a full stack developer who have a <SubText>1.5 years</SubText> of experience in software development, 
                    I have master of expertise in MERN stack technology and built a large scale applications for start up multiple companies.
                </Paragrapgh>
                <ButtonWrapper>
                    <Button color="secondary">Github</Button>
                    <Button color="secondary">Linkedin</Button>
                </ButtonWrapper>
            </HeadingWrapper>
            <ImageWrapper>
                <Image
                    src="/home-hero.jpg"
                    layout="responsive"
                    width={700}
                    height={475}
                >
                </Image>
            </ImageWrapper>
        </Wrapper>
    </>;
};

const HeadingText = styled.h1`
    font-size: clamp(1.5rem, 3vw, 3rem);
    line-height: 30px;
`;

const HeadingSubText = styled.span`
    color: ${(props) => props.theme.colors.primaryColor};
`;

const SubText = styled(HeadingSubText)`
    color: ${(props) => props.theme.colors.primaryColor};
    font-weight: 700;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    padding: 50px 75px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        flex-direction: column;
        padding: 0px 20px;
    }
`;

const ImageWrapper = styled.div`
    flex: 1;
    margin-left: auto;
    padding-top: 30px;
    width: 60%;
    transform: rotate(-15deg);

    @media (${(props) => props.theme.queries.mobileQuery}) {
        width: 100%;
        transform: rotate(0deg);
        padding-top: 15px;
    }
`;

const HeadingWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (${(props) => props.theme.queries.mobileQuery}) {
      text-align: center;
      padding-top: 50px;
    }
`;

const Paragrapgh = styled.div`
    font-size: 1rem;
    max-width: 95%;
    line-height: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 0px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
      justify-content: center;
      padding: 20px 0px;
    }
`;

export default HeroSection;