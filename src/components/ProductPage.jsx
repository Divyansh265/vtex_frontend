import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';
import { Link } from 'react-router-dom'; // Import Link for routing

const ProductPage = () => {
    const skuId = useParams().id; // Get SKU ID from URL
    const [sku, setSku] = useState(null);
    const [price, setPrice] = useState(null);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch SKU details
                // const skuResponse = await axios.get(`http://localhost:3000/sku/${skuId}`);
                const skuResponse = await axios.get(`https://vtex-backend.onrender.com/sku/${skuId}`);
                setSku(skuResponse.data);

                // Fetch Pricing details
                // const pricingResponse = await axios.get(`http://localhost:3000/pricing/${skuId}`);
                const pricingResponse = await axios.get(`https://vtex-backend.onrender.com/pricing/${skuId}`);
                setPrice(pricingResponse.data.basePrice); // Extract `basePrice` from the pricing response

                // Fetch recommended products
                const recommendationsResponse = await axios.get(
                    `https://vtex-backend.onrender.com/recommendations/${skuId}`
                    // `http://localhost:3000/recommendations/${skuId}`
                );
                setRecommendedProducts(recommendationsResponse.data);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [skuId]);

    if (loading) {
        return (
            <div className="loading-spinner">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return sku ? (
        <div className="single_product-page-container">
            {/* Main Product Display */}
            <div className="single_product-header">
                <h1>{sku.NameComplete || 'Product Name Not Available'}</h1>
            </div>
            <div className="single_product-details">
                <div className="single_product-images">
                    {sku.Images?.length > 0 ? (
                        <>
                            {/* First image large */}
                            <img
                                src={sku.Images[0].ImageUrl}
                                alt={sku.Images[0].ImageName || 'Main Image'}
                                className="single_product-main-img"
                            />
                            {/* Other images smaller */}
                            <div className="single_product-thumbnails">
                                {sku.Images.slice(1).map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.ImageUrl}
                                        alt={image.ImageName || `Thumbnail ${index + 1}`}
                                        className="single_product-thumbnail-img"
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <img
                            src="default-image.jpg"
                            alt="Default Product"
                            className="single_product-main-img"
                        />
                    )}
                </div>
                <div className="single_product-info">
                    <h1>{sku.NameComplete || 'Product Name Not Available'}</h1>
                    <p className="single_product-description">
                        {sku.ProductDescription || 'No description available'}
                    </p>
                    <p className="single_product-price">
                        Price: {price ? `$${(price / 100).toFixed(2)}` : `${0}`}
                    </p>
                </div>
            </div>
            {/* Recommended Products Grid */}
            <div className="recommended_products-section">
                <h2>Recommended Products</h2>
                <div className="recommended_products-grid">
                    {recommendedProducts.length > 0 ? (
                        recommendedProducts.map((product) => (
                            <Link
                                key={product.productId}
                                to={`/product/${product.items[0]?.itemId}`} // Use the item's SKU ID for redirection
                                className="recommended_product-link"
                            >
                                <div className="recommended_product-card">
                                    <img
                                        src={product.items[0]?.images[0]?.imageUrl || 'default-image.jpg'}
                                        alt={product.productName || 'Recommended Product'}
                                        className="recommended_product-img"
                                    />
                                    <h3 className="recommended_product-name">
                                        {product.productName || 'Product Name'}
                                    </h3>
                                    <p className="recommended_product-price">
                                        {product.items[0]?.sellers[0]?.commertialOffer?.Price
                                            ? `$${product.items[0]?.sellers[0]?.commertialOffer?.Price.toFixed(2)}`
                                            : 'Price not available'}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No recommended products available.</p>
                    )}
                </div>
            </div>
        </div>

    ) : (
        <div className="not-found-message">SKU not found</div>
    );
};

export default ProductPage;
