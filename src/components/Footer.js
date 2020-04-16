import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import OutgoingLink from './OutgoingLink';

const Root = styled.div`
    padding: ${sizes.l} 2rem;
    background-color: ${colors.highlight};
    border-top: 1px solid ${colors.border};

    @media (min-width: 500px) {
        padding: ${sizes.l} ${sizes.xl};
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li + li {
        margin-top: 1rem;
    }

    a {
        ${linkStyle};
    }
`;

const Info = styled.div`
    margin-bottom: 2.5rem;
`;

const Anchor = styled(OutgoingLink)`
    ${fonts.heading};
`;

function Footer(props) {
    const siteDescription
        = `mmas - a blog on mind, machine, art, & society`
        + ` might contain: math, musings, analysis, and reflections.`
        + ` Also speculations.`;

    return (
        <Root>
            <Container>
                <Info>
                    {siteDescription}. by{' '}
                    <OutgoingLink to={`https://nischalmainali.xyz`}>
                        nischal mainali
                    </OutgoingLink>
                    .
                </Info>

            </Container>
        </Root>
    );
}

export default Footer;
