import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';

function DetailProductPage(props) {

    const productId = props.match.params.productId
    const [Product, setProduct] = useState({})

    useEffect(() => {

        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
        .then(response => {
                console.log(response.data)
                setProduct(response.data[0])
        })
        .catch(err => alert(err))

    }, [])
    return (
        <div>
            <div style={{ width: '100%', padding: '3rem 4rem' }}>
                <div stype={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{Product.title}</h1>
                </div>

                <br />


                <Row gutter={[16, 16]} >
                    <Col lg={12} sm={24}>
                        {/* ProductImage */}
                        <ProductImage detail={Product}/>
                    </Col>
                        

                    <Col lg={12} sm={24}>
                        {/* ProductInfo */}
                        <ProductInfo detail={Product} />
                    </Col>
                </Row>
                


                
            </div>
        </div>
    )
}

export default DetailProductPage
