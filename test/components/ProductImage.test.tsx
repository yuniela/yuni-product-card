import React from "react";
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('Should render an image', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Should render a component with a product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})