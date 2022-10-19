import { v4 as uuidV4 } from 'uuid';

export class ProductStatus {
  private _name: string;
  private _id: string;
  private _createAt: Date;

  constructor( name: string, id?: string ){
    this._name = name;
    this._id = id || uuidV4();
    this._createAt = new Date();
  }

  public get name(): string {
    return this._name;
  }

  public set name( name: string ) {
    this._name = name;
  }

  public get id(): string {
    return this._id;
  }

  public get createAt(): Date {
    return this._createAt;
  }

}