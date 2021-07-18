import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Image from 'next/image';

const AvatarUI = ({ icon }) => {
    return <>
        <Wrapper>
            <AvatarWrapper>
                    <Image 
                      layout='fill'
                      src={icon} 
                    />
                </AvatarWrapper>
        </Wrapper>
    </>;
};

const Wrapper = styled.div`
`;

const AvatarWrapper = styled(Avatar)`
    border: 2px solid ${(props) => props.theme.colors.backgroundLight};
    background-color: transparent;

   & ${'.MuiAvatar-root .MuiAvatar-circular .MuiAvatar-colorDefault'} {
       background-color: white;
   }
`;


export default AvatarUI;