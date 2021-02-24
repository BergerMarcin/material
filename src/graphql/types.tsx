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

export type AuctionMvc = {
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
  lastName: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  role: RolesTypes;
  phone: Scalars["String"];
  city: Scalars["String"];
  rate: Scalars["Int"];
  createdAt: Scalars["Date"];
  updatedAt: Scalars["Date"];
};
