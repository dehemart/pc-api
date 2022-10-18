import { BaseEntity } from 'src/core/entities/entity';

export enum ProductStatus {
  SELLING,
}

export type  ProductCreateProps = {
  sku: string
  slug: string
  name: string
  description: string
  properties: Map<string, string>
  deleted: boolean
  active: boolean
  status:  ProductStatus
  imageUrl: Map<string, string>
}

export class Product extends BaseEntity<ProductCreateProps> {

  constructor( props: ProductCreateProps, id?: string ){
    super( props, id );
  }

  public get sku(): string {
    return this.props.sku;
  }

  public set sku( sku: string ) {
    this.props.sku = sku;
  }

  public get slug(): string {
    return this.props.slug;
  }

  public set slug( slug: string ) {
    this.props.slug = slug;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name( name: string ) {
    this.props.name = name;
  }

  public get description(): string {
    return this.props.description;
  }

  public set description( description: string ) {
    this.props.description = description;
  }

  public get properties(): Map<string, string> {
    return this.props.properties;
  }

  public set properties( properties: Map<string, string> ) {
    this.props.properties = properties;
  }

  public get deleted(): boolean {
    return this.props.deleted;
  }

  public set deleted( deleted: boolean ) {
    this.props.deleted = deleted;
  }

  public get active(): boolean {
    return this.props.active;
  }

  public set active( active: boolean ) {
    this.props.active = active;
  }

  public get status(): ProductStatus {
    return this.props.status;
  }

  public set status( status: ProductStatus ) {
    this.props.status = status;
  }

  public get imageUrl(): Map<string, string> {
    return this.props.imageUrl;
  }

  public set imageUrl( imageUrl: Map<string, string> ) {
    this.props.imageUrl = imageUrl;
  }
}