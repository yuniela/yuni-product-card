import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;