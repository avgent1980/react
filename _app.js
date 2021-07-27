import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const ReactCMS = ({ Component }) => {
    return (
        <>
            <Head>
                <title>ReactCMS</title>
            </Head>
            <Component />
        </>
    )
}

ReactCMS.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default ReactCMS;