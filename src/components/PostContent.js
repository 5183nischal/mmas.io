import React from 'react';
import styled from 'styled-components';

import { colors, linkStyle, sizes } from '../css/variables';
import Container from './Container';

const Root = styled(Container)`
    margin: ${sizes.l} 2rem 2.5rem;

    @media (min-width: 500px) {
        margin: ${sizes.l} ${sizes.xl} 2.5rem;
    }

    img {
        border: 1px solid ${colors.border};
    }

    a {
        ${linkStyle};
    }
`;

export default function PostContent(props) {
    return (
        <Root>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Root>
    );
}
