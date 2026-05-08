import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import User from "./user.models";

@Table({
  tableName: "products",
  modelName: "Product",
  timestamps: true,
})
export default class Product extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare price: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare originalPrice: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare sizes: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare category: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare rating: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare reviews: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  declare stock: number;

  @Column({
    type: DataType.ENUM("available", "notAvailable"),

    allowNull: false,
    defaultValue: "available",
  })
  declare status: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare images: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare userId: string;

  @BelongsTo(() => User)
  declare user: User;
}
