import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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

export type Query = {
  allUsers: Array<UsersMvc>;
  User?: Maybe<UsersMvc>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RolesTypes: RolesTypes;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  AuctionItemsMVC: ResolverTypeWrapper<AuctionItemsMvc>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  AuctionMVC: ResolverTypeWrapper<AuctionMvc>;
  CurrencyMVC: ResolverTypeWrapper<CurrencyMvc>;
  DeliveryTypesMVC: ResolverTypeWrapper<DeliveryTypesMvc>;
  OpinionsMVC: ResolverTypeWrapper<OpinionsMvc>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  UsersMVC: ResolverTypeWrapper<UsersMvc>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars["Date"];
  AuctionItemsMVC: AuctionItemsMvc;
  ID: Scalars["ID"];
  Float: Scalars["Float"];
  String: Scalars["String"];
  AuctionMVC: AuctionMvc;
  CurrencyMVC: CurrencyMvc;
  DeliveryTypesMVC: DeliveryTypesMvc;
  OpinionsMVC: OpinionsMvc;
  Int: Scalars["Int"];
  UsersMVC: UsersMvc;
  Query: {};
  Boolean: Scalars["Boolean"];
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export type AuctionItemsMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuctionItemsMVC"] = ResolversParentTypes["AuctionItemsMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  auction_id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  delivery_id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  imgUrls?: Resolver<
    Array<Maybe<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuctionMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuctionMVC"] = ResolversParentTypes["AuctionMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  imgUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CurrencyMVC"] = ResolversParentTypes["CurrencyMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  valuePln?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  apiUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  jsonProperty?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeliveryTypesMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DeliveryTypesMVC"] = ResolversParentTypes["DeliveryTypesMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  price?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  currencyId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpinionsMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OpinionsMVC"] = ResolversParentTypes["OpinionsMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  auction_id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  nick?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  rate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UsersMVC"] = ResolversParentTypes["UsersMVC"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  password?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  role?: Resolver<ResolversTypes["RolesTypes"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  allUsers?: Resolver<
    Array<ResolversTypes["UsersMVC"]>,
    ParentType,
    ContextType
  >;
  User?: Resolver<
    Maybe<ResolversTypes["UsersMVC"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  AuctionItemsMVC?: AuctionItemsMvcResolvers<ContextType>;
  AuctionMVC?: AuctionMvcResolvers<ContextType>;
  CurrencyMVC?: CurrencyMvcResolvers<ContextType>;
  DeliveryTypesMVC?: DeliveryTypesMvcResolvers<ContextType>;
  OpinionsMVC?: OpinionsMvcResolvers<ContextType>;
  UsersMVC?: UsersMvcResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
