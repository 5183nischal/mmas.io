import React from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../css/variables';
import noltImg from '../../public/sponsors/nolt.png';
import fomoImg from '../../public/sponsors/fomo.svg';
import OutgoingLink from './OutgoingLink';
import Container from './Container';

const Root = styled.div`
    padding: 0 2rem ${sizes.l};

    @media (min-width: 500px) {
        padding: 0 ${sizes.xl} ${sizes.l};
    }
`;

const Box = styled.div`
    margin: 1rem 0 0;

    a {
        display: flex;
        align-items: center;
        padding: 2rem 3rem;
        border: 1px solid ${colors.border};
        color: ${colors.text};
    }

    img {
        min-width: 3rem;
        width: 3rem;
        height: 3rem;
        margin-right: 2rem;
    }

    strong {
        color: ${colors.heading};
    }
`;

const sponsors = [
    {
        name: 'Nolt',
        descritpion: 'Collect feedback in a central place that your users will love.',
        url: 'https://nolt.io/?utm_source=DigitalPsychology&utm_medium=referral&utm_campaign=footer',
        image: noltImg
    },
    {
        name: 'Fomo',
        descritpion: 'Increase trust, traffic, and sales with social proof automation.',
        url: 'https://fomo.com/?utm_source=DigitalPsychology&utm_medium=referral&utm_campaign=footer',
        image: fomoImg
    }
];

const sponsor = sponsors[0];

function Sponsor() {
    return (
        <Root>
            <Container>
                <h3>Sponsor</h3>
                <Box>
                    <OutgoingLink to={sponsor.url}>
                        <img src={sponsor.image} />
                        <span>
                            <strong>{sponsor.name}</strong> – {sponsor.descritpion}
                        </span>
                    </OutgoingLink>
                </Box>
            </Container>
        </Root>
    );
}

export default Sponsor;
