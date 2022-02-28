import { Fragment } from "react";

import NextLink from 'next/link';

const Home = () => {
    return (
        <Fragment>
            <NextLink
                href='/encryption-techniques'
            >
                <a>Encryption Techniques</a>
            </NextLink>
        </Fragment>
    )
}

export default Home;

