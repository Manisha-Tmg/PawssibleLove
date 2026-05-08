import {
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import Product from "./product.models";

@Table({
  tableName: "users",
  modelName: "User",
  timestamps: true,
})
class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare profileImage: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare phoneNumber: string;

  @Column({
    type: DataType.ENUM("active", "onLeave", "inActive"),
    defaultValue: "active",
  })
  declare status: "active" | "inActive";

  // user
  @Column({
    type: DataType.ENUM("user", "superAdmin"),

    defaultValue: "user",
  })
  declare role: "user" | " superadmin";

  @Column({
    type: DataType.STRING(125),
    allowNull: true,
  })
  declare passwordOtp?: string | null;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  declare passwordOtpExpiresAt?: Date | null;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  declare otpLastSentAt?: Date | null;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare otpResendCount: number;

  @Default(0)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  declare otpAttempts: number;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  declare isOtPVerified: boolean;

  @HasMany(() => Product)
  declare product: Product[];
}

export default User;
