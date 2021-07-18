import styled from 'styled-components';

const DescriptionPanel = ({heading = '', counter = 1, points = []}) => {
    return <>
        <Wrapper>
            <HistoryMarker>
                <ExperienceCounter>{counter}</ExperienceCounter>
                <DescriptionHeaderWrapper>
                    <h1>{heading}</h1>
                </DescriptionHeaderWrapper>
                <DescriptionContentWrapper>
                    {
                        points.map((point) => {
                            return (
                                <p>{point}</p>           
                            );
                        })
                    }
                </DescriptionContentWrapper>
            </HistoryMarker>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
    padding: 0px 40px;
    font-size: clamp(1rem, 1.8vw, 1.8rem);
    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 0px 10px;
    }
`;

const DescriptionHeaderWrapper = styled.div`
    padding-left: 100px; 
    margin: 5px 0px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding-left: 30px; 
    }
`;

const HistoryMarker = styled.div`
    border-left: 10px dotted ${(props) => props.theme.colors.secondaryColor};
    position: relative;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        border-left: 6px dotted ${(props) => props.theme.colors.secondaryColor};
    }
`;

const DescriptionContentWrapper = styled.div`
    padding-left: 140px; 
    padding-bottom: 20px;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding-left: 50px; 
    }

    & p{
        font-size: 1.4rem;

        @media (${(props) => props.theme.queries.mobileQuery}) {
            font-size: 1rem;
        }
    }
`;

const ExperienceCounter = styled.div`
    background-color: ${(props) => props.theme.colors.whiteColor};
    border: 4px solid ${(props) => props.theme.colors.primaryColor};
    display: inline-block;
    padding: 20px 30px;
    position: absolute;
    top: -20px;
    left: -47px;
    border-radius: 50%;

    @media (${(props) => props.theme.queries.mobileQuery}) {
        padding: 5px 10px;
        top: 0px;
        left: -22px;
    }
`;

export default DescriptionPanel;