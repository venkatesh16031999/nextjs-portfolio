
const colors = {
    primaryColor: '#f84d58',
    primaryColorLight: '#f84d582b',
    primaryColorMedium: '#f84d588a',
    secondaryColor: '#192d35',
    backgroundLight: '#e1e1e166',
    whiteColor: '#f8fafb',
}

const breakPoints = {
    mobile: 600,
    tablet: 900,
    laptop: 1250,
};

const queries = {
    mobileQuery: `max-width: ${breakPoints.mobile}px`,
    tabletQuery: `max-width: ${breakPoints.tablet}px`,
    laptopQuery: `max-width: ${breakPoints.laptop}px`
};

export const theme = {
    breakPoints,
    queries,
    colors,
};