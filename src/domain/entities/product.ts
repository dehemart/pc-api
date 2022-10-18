import { v4 as uuidV4 } from 'uuid';

export enum ProductStatus {
  SELLING,
}

export interface  ProductCreateProps  {
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

export class Product {

  private _sku: string;
  private _slug: string;
  private _name: string;
  private _description: string;
  private _properties: Map<string, string>;
  private _deleted: boolean;
  private _active: boolean;
  private _status:  ProductStatus;
  private _imageUrl: Map<string, string>;
  private _id: string;
  private _createAt: Date;


  constructor(
    props: ProductCreateProps,
    id?: string ){
    this._sku = props.sku;
    this._slug = props.slug;
    this._name = props.name;
    this._description = props.description;
    this._properties = props.properties;
    this._deleted = props.deleted;
    this._active = props.active;
    this._status = props.status;
    this._imageUrl = props.imageUrl;
    this._id = id || uuidV4();
    this._createAt = new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get createAt(): Date {
    return this._createAt;
  }

  public get sku(): string {
    return this._sku;
  }

  public set sku( sku: string ) {
    this._sku = sku;
  }

  public get slug(): string {
    return this._slug;
  }

  public set slug( slug: string ) {
    this._slug = slug;
  }

  public get name(): string {
    return this._name;
  }

  public set name( name: string ) {
    this._name = name;
  }

  public get description(): string {
    return this._description;
  }

  public set description( description: string ) {
    this._description = description;
  }

  public get properties(): Map<string, string> {
    return this._properties;
  }

  public set properties( properties: Map<string, string> ) {
    this._properties = properties;
  }

  public get deleted(): boolean {
    return this._deleted;
  }

  public set deleted( deleted: boolean ) {
    this._deleted = deleted;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active( active: boolean ) {
    this._active = active;
  }

  public get status(): ProductStatus {
    return this._status;
  }

  public set status( status: ProductStatus ) {
    this._status = status;
  }

  public get imageUrl(): Map<string, string> {
    return this._imageUrl;
  }

  public set imageUrl( imageUrl: Map<string, string> ) {
    this._imageUrl = imageUrl;
  }



}
