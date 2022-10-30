import { Product } from '@Entities/product';
import { ProductCreateProps } from '@Ports/in/createProductProps';
import { ProductRepository } from '@Ports/out/productRepository';

export class CreateProductUseCase {

  constructor( private productRepository: ProductRepository ) {
    this.productRepository = productRepository;
  }

  execute( props: ProductCreateProps ): Product {
    const product = new Product( props );

    const savedProduct = this.productRepository.save( product );

    return savedProduct;
  }
}