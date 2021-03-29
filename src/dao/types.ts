export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export enum RolesTypes {
  Superadmin = "SUPERADMIN",
  Admin = "ADMIN",
  User = "USER",
}

export type AuctionItemsMvc = {
  id: Scalars["ID"];
  auction_id: Scalars["ID"];
  delivery_id: Scalars["ID"];
  position: Scalars["Float"];
  name: Scalars["String"];
  quantity: Scalars["Float"];
  description?: Maybe<Scalars["String"]>;
  imgUrls: Array<Maybe<Scalars["String"]>>;
  createdAt: Scalars["Date"];
};

export type AuctionsMvc = {
  id: Scalars["ID"];
  user_id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  imgUrl: Scalars["String"];
  startDate: Scalars["Date"];
  endDate: Scalars["Date"];
  createdAt: Scalars["Date"];
};

export type CurrencyMvc = {
  id: Scalars["ID"];
  name: Scalars["String"];
  valuePln: Scalars["Float"];
  apiUrl?: Maybe<Scalars["String"]>;
  jsonProperty?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};

export type DeliveryTypesMvc = {
  id: Scalars["ID"];
  user_id: Scalars["ID"];
  name: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Float"]>;
  currencyId: Scalars["ID"];
};

export type OpinionsMvc = {
  id: Scalars["ID"];
  auction_id: Scalars["ID"];
  nick: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  rate: Scalars["Int"];
  createdAt: Scalars["Date"];
};

export type UsersMvc = {
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];RolesTypes
  email: Scalars["String"];
  password: Scalars["String"];
  role: RolesTypes;
  phone: Scalars["String"];
  city: Scalars["String"];
  ratesValue: Scalars["Int"];
  ratesCount: Scalars["Int"];
  createdAt: Scalars["Date"];
  updatedAt?: Maybe<Scalars["Date"]>;
};

export type Query = {
  allUsers: Array<UsersMvc>;
  User: UsersMvc;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Mutation = {
  createUser: UsersMvc;
  updateUserBasicData?: Maybe<UsersMvc>;
  updateUserPassword?: Maybe<UsersMvc>;
  updateUserRate?: Maybe<UsersMvc>;
};

export type MutationCreateUserArgs = {
  data: CreateUserInput;
};

export type MutationUpdateUserBasicDataArgs = {
  id: Scalars["ID"];
  data: UpdateUserBasicDataInput;
};

export type MutationUpdateUserPasswordArgs = {
  id: Scalars["ID"];
  data: UpdateUserPasswordInput;
};

export type MutationUpdateUserRateArgs = {
  id: Scalars["ID"];
  data: UpdateUserRateInput;
};

export type CreateUserInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  phone: Scalars["String"];
  city: Scalars["String"];
};

export type UpdateUserBasicDataInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  email: Scalars["String"];
  phone: Scalars["String"];
  city: Scalars["String"];
};

export type UpdateUserPasswordInput = {
  password: Scalars["String"];
};

export type UpdateUserRateInput = {
  ratesValue: Scalars["Int"];
  ratesCount: Scalars["Int"];
};

export type AdditionalEntityFields = {
  path?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

import { ObjectID } from "mongodb";
