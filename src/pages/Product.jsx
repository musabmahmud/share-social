import React from 'react'
import { useParams } from 'react-router';
import SEO from '../components/SEO';

const Product = () => {

    const { id } = useParams();

    return (
        <div>
            <SEO
                title="Musab"
                description="Checking My Website"
                image="https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/image/8171_1733980951.webp"
            />
            Product
        </div>
    )
}

export default Product