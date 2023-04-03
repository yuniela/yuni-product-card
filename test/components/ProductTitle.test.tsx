import React from "react";
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTile', () => {
    test('Should render a product tile', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Should render a component with a product name', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})