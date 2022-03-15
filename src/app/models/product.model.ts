export class Product {
  private _id: number;
  private _idMag: string;
  private _name: string;
  private _price: number;
  private _stock: number;
  private _description: string;
  private _nbCmd: number;
  private _photoPath: string;

  static productLength = 1;

  constructor(
    idMag: string,
    name: string,
    price: number,
    stock: number,
    description: string,
    nbCmd: number,
    photoPath: string
  ) {
    this._id = Product.productLength;
    this._idMag = idMag;
    this._name = name;
    this._price = price;
    this._stock = stock;
    this._description = description;
    this._nbCmd = nbCmd;
    this._photoPath = photoPath;

    Product.productLength++;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter idMag
   * @return {string}
   */
  public get idMag(): string {
    return this._idMag;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Getter stock
   * @return {number}
   */
  public get stock(): number {
    return this._stock;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter nbCmd
   * @return {number}
   */
  public get nbCmd(): number {
    return this._nbCmd;
  }

  /**
   * Getter photoPath
   * @return {string}
   */
  public get photoPath(): string {
    return this._photoPath;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter idMag
   * @param {string} value
   */
  public set idMag(value: string) {
    this._idMag = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }

  /**
   * Setter stock
   * @param {number} value
   */
  public set stock(value: number) {
    this._stock = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter nbCmd
   * @param {number} value
   */
  public set nbCmd(value: number) {
    this._nbCmd = value;
  }

  /**
   * Setter photoPath
   * @param {string} value
   */
  public set photoPath(value: string) {
    this._photoPath = value;
  }
}
