import { Product } from '@Entities/product';
import { ProductStatus } from '@Entities/productStatus';
import { ProductCreateProps } from '@Ports/createProductProps';

describe( 'Test over Product class', () => {
  test( 'Create new product of Product', () => {
    const productProps : ProductCreateProps = getProductProps( {} );
    const sut = new Product( productProps );

    expect( sut ).toBeInstanceOf( Product );
  } );

  test( 'id is generated', () => {
    const productProps : ProductCreateProps = getProductProps( {} );
    const sut = new Product( productProps );

    expect( sut.id ).not.toBeNull();
    expect( sut.id.length ).toBeGreaterThanOrEqual( 1 );
  } );

  test( 'id informed and used', () => {
    const productProps : ProductCreateProps = getProductProps( {  } );
    const sut = 'informedId';
    const product = new Product( productProps, sut );

    expect( product.id ).toEqual( sut );
  } );

  test( 'createAt is generated', () => {
    const productProps : ProductCreateProps = getProductProps( {} );
    const sut = new Product( productProps );

    expect( sut.createAt ).not.toBeNull();
  } );

  test( 'createAt is equal today', () => {
    const productProps : ProductCreateProps = getProductProps( {} );
    const sut = new Product( productProps );

    expect( sut.createAt.getDate() ).toEqual( new Date().getDate() );
  } );

  test( 'ProductStatus added', () => {
    const sut = new ProductStatus( 'ProductStatusName' );
    const productProps : ProductCreateProps = getProductProps( { status: sut } );
    const product = new Product( productProps );

    expect( product.status.name ).toEqual( sut.name );
  } );

} );

function getProductProps( {
  sku = 'sku',
  slug = 'slug',
  name = 'name',
  description = 'description',
  properties = new Map().set( 'propsMame1', 'propsValue1' ).set( 'propsMame2', 'propsValue2' ),
  deleted =false,
  active = true,
  status = new ProductStatus( 'ProductStatusName' ),
  imageUrl = new Map().set( 'urlName1', 'urlVAlue1' ).set( 'urlName2', 'urlVAlue2' )
} ): ProductCreateProps {
  return {
    sku: sku,
    slug: slug,
    name: name,
    description: description,
    properties: properties,
    deleted: deleted,
    active: active,
    status: status,
    imageUrl: imageUrl
  };
}

