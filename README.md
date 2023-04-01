# Yunie-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Yuniela Solorzano

## Ejemplo

```
 import {ProductCard, ProductImage, ProductTitle,  ProductButtons} from '';
```

```
<ProductCard 
          product={ product }
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        > 
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            
            </>
          )
        }
        </ProductCard>
```