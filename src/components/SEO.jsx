import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
    </Helmet>
);

export default SEO;
