import styled from 'styled-components';

const Button = ({ size = 'small', color, type, children}) => {
    let ButtonType;
    let ButtonSize;
    let ButtonColor;

    switch(color) {
        case 'primary': 
            ButtonColor = 'primaryColor';
            break;
        case 'secondary': 
            ButtonColor = 'secondaryColor';
            break;
        default: 
            ButtonColor = 'primaryColor';
            break;
    }

    switch(size) {
        case 'small': 
            ButtonSize = 'max-content';
            break;
        case 'medium': 
            ButtonSize = '50%';
            break;
        case 'large': 
            ButtonSize = '100%';
            break;
        default: 
            ButtonSize = 'max-content';
            break;
    }

    switch(type) {
        case 'outline': 
            ButtonType = OutlineButton;
            break;
        case 'Base': 
            ButtonType = BaseButton;
            break;
        default: 
            ButtonType = BaseButton;
            break;
    }

    return <>
        <ButtonType 
        size={ButtonSize}
        color={ButtonColor}
        >
            {children}
        </ButtonType>
    </>;
};

const BaseButton = styled.button`
    border-radius: 4px;
    padding: 10px 32px;
    border: none;
    background: ${(props) => props.theme.colors[props.color]};
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
    color: white;
    font-weight: 700;
    font-size: 1rem;
    width: ${(props) => props.size};
`;

const OutlineButton = styled(BaseButton)`
    border: 2px solid #f84e59;
    color: #f84e59;
    background: white;
`;

export default Button;