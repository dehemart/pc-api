import { Product } from '@Entities/product';
import { ProductCreateProps } from '@Ports/in/createProductProps';

export class CreateProductUseCase {

  execute( props: ProductCreateProps ): Product {
    const product = new Product( props );

    return product;
  }
}