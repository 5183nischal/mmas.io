import React from 'react';
import styled from 'styled-components';

import { colors, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import ContainerT from './ContainerT';

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

const RootT = styled(ContainerT)`
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
        <RootT>
            <h1>{props.title}</h1>
        </RootT>
        <Root>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Root>
    );
}
