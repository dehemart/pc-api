import { v4 as uuidV4 } from 'uuid';

export abstract class BaseEntity<T> {
  protected props: T;
  private _id: string;
  private _createAt: Date;

  constructor( props:T, id?:string ){
    this._id = id || uuidV4();
    this.props = props;
    this._createAt = new Date();
  }

  protected get id(): string {
    return this._id;
  }

  public get createAt(): Date {
    return this._createAt;
  }

}