import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';

export class UserDomain {
  @IsOptional()
  readonly id?: number;

  @IsString({ message: 'Name should be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  @MaxLength(100, { message: 'Name cannot exceed 100 characters' })
  readonly name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsString({ message: 'Email must be a string' })
  @IsNotEmpty({ message: 'Email is required' })
  readonly email: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(50, { message: 'Password cannot exceed 50 characters' })
  readonly password?: string;

  @IsOptional()
  @IsString({ message: 'CreatedAt must be a string' })
  @IsNotEmpty({ message: 'CreatedAt is required' })
  readonly createdAt?: string;

  @IsOptional()
  @IsString({ message: 'UpdatedAt must be a string' })
  @IsNotEmpty({ message: 'UpdatedAt is required' })
  readonly updatedAt?: string;
}
