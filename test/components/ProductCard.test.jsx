import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
    test('Should render a component', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product card</h1>
                    )
                }

            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Should increment the counter', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product card</h1>
                            <span>{count}</span>
                            <button onClick={ () => increaseBy(1) }></button>
                        </>
                    )
                }

            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();

        act( () =>{
            tree.children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        expect( tree.children[1].children[0] ).toBe('1');
    })

})