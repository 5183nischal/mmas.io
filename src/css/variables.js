export const colors = {
    bg: '#fff',
    border: '#eaeaea',
    heading: '#000',
    highlight: '#f8f8f8',
    text: '#343a40',
    textWeak: '#ccc'
};

export const fonts = {
    heading: `
        font-family: 'Roboto mono', monospace;
        font-weight: 500;
        color: ${colors.heading};
        letter-spacing: 1px;
    `,
    text: `
        font-family: 'Roboto', monospace;
        font-weight: 300;
        color: ${colors.text};
    `
};

export const sizes = {
    xl: '15vw',
    l: '12vw'
};

export const linkStyle = `
    border-bottom: 1px dotted ${colors.heading};
    color: ${colors.heading};

    &:hover {
        background-color: ${colors.heading};
        color: #fff;
    }
`;
