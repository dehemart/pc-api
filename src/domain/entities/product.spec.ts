import { Product, ProductCreateProps, ProductStatus } from './product';

describe( '', () => {
  // test( '', () => {

  // } );

  test( '', () => {
    const productProps : ProductCreateProps = {
      sku: 'sku',
      slug: 'slug',
      name: 'name',
      description: 'description',
      properties: new Map().set( 'propsMame1', 'propsValue1' ).set( 'propsMame2', 'propsValue2' ),
      deleted: false,
      active: true,
      status:  ProductStatus.SELLING,
      imageUrl:  new Map().set( 'urlName1', 'urlVAlue1' ).set( 'urlName2', 'urlVAlue2' )
    };

    const sut = new Product( productProps );

    expect( sut ).toBeInstanceOf( Product );
  } );
} );
