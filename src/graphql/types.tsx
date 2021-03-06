import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
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
  lastName: Scalars["String"];
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
  AuctionsMVC: ResolverTypeWrapper<AuctionsMvc>;
  CurrencyMVC: ResolverTypeWrapper<CurrencyMvc>;
  DeliveryTypesMVC: ResolverTypeWrapper<DeliveryTypesMvc>;
  OpinionsMVC: ResolverTypeWrapper<OpinionsMvc>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  UsersMVC: ResolverTypeWrapper<UsersMvc>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateUserInput: CreateUserInput;
  UpdateUserBasicDataInput: UpdateUserBasicDataInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
  UpdateUserRateInput: UpdateUserRateInput;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Date: Scalars["Date"];
  AuctionItemsMVC: AuctionItemsMvc;
  ID: Scalars["ID"];
  Float: Scalars["Float"];
  String: Scalars["String"];
  AuctionsMVC: AuctionsMvc;
  CurrencyMVC: CurrencyMvc;
  DeliveryTypesMVC: DeliveryTypesMvc;
  OpinionsMVC: OpinionsMvc;
  Int: Scalars["Int"];
  UsersMVC: UsersMvc;
  Query: {};
  Mutation: {};
  CreateUserInput: CreateUserInput;
  UpdateUserBasicDataInput: UpdateUserBasicDataInput;
  UpdateUserPasswordInput: UpdateUserPasswordInput;
  UpdateUserRateInput: UpdateUserRateInput;
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

export type AuctionsMvcResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuctionsMVC"] = ResolversParentTypes["AuctionsMVC"]
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
  ratesValue?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  ratesCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
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
    ResolversTypes["UsersMVC"],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createUser?: Resolver<
    ResolversTypes["UsersMVC"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "data">
  >;
  updateUserBasicData?: Resolver<
    Maybe<ResolversTypes["UsersMVC"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserBasicDataArgs, "id" | "data">
  >;
  updateUserPassword?: Resolver<
    Maybe<ResolversTypes["UsersMVC"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserPasswordArgs, "id" | "data">
  >;
  updateUserRate?: Resolver<
    Maybe<ResolversTypes["UsersMVC"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserRateArgs, "id" | "data">
  >;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  AuctionItemsMVC?: AuctionItemsMvcResolvers<ContextType>;
  AuctionsMVC?: AuctionsMvcResolvers<ContextType>;
  CurrencyMVC?: CurrencyMvcResolvers<ContextType>;
  DeliveryTypesMVC?: DeliveryTypesMvcResolvers<ContextType>;
  OpinionsMVC?: OpinionsMvcResolvers<ContextType>;
  UsersMVC?: UsersMvcResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;

export type CreateUserMutation = {
  createUser: Pick<
    UsersMvc,
    "id" | "firstName" | "lastName" | "email" | "password" | "phone" | "city"
  >;
};

export type UserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type UserQuery = {
  User: Pick<
    UsersMvc,
    | "firstName"
    | "lastName"
    | "email"
    | "phone"
    | "city"
    | "ratesValue"
    | "ratesCount"
  >;
};

export type UpdateUserBasicDataMutationVariables = Exact<{
  id: Scalars["ID"];
  data: UpdateUserBasicDataInput;
}>;

export type UpdateUserBasicDataMutation = {
  updateUserBasicData?: Maybe<
    Pick<
      UsersMvc,
      "firstName" | "lastName" | "email" | "password" | "phone" | "city"
    >
  >;
};

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = { allUsers: Array<Pick<UsersMvc, "id">> };

export const CreateUserDocument = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id
      firstName
      lastName
      email
      password
      phone
      city
    }
  }
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, baseOptions);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UserDocument = gql`
  query User($id: ID!) {
    User(id: $id) {
      firstName
      lastName
      email
      phone
      city
      ratesValue
      ratesCount
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export function useUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    UserQuery,
    UserQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<
  UserQuery,
  UserQueryVariables
>;
export const UpdateUserBasicDataDocument = gql`
  mutation UpdateUserBasicData($id: ID!, $data: UpdateUserBasicDataInput!) {
    updateUserBasicData(id: $id, data: $data) {
      firstName
      lastName
      email
      password
      phone
      city
    }
  }
`;
export type UpdateUserBasicDataMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserBasicDataMutation,
  UpdateUserBasicDataMutationVariables
>;

/**
 * __useUpdateUserBasicDataMutation__
 *
 * To run a mutation, you first call `useUpdateUserBasicDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBasicDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBasicDataMutation, { data, loading, error }] = useUpdateUserBasicDataMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserBasicDataMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserBasicDataMutation,
    UpdateUserBasicDataMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateUserBasicDataMutation,
    UpdateUserBasicDataMutationVariables
  >(UpdateUserBasicDataDocument, baseOptions);
}
export type UpdateUserBasicDataMutationHookResult = ReturnType<
  typeof useUpdateUserBasicDataMutation
>;
export type UpdateUserBasicDataMutationResult = ApolloReactCommon.MutationResult<UpdateUserBasicDataMutation>;
export type UpdateUserBasicDataMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserBasicDataMutation,
  UpdateUserBasicDataMutationVariables
>;
export const IndexDocument = gql`
  query Index {
    allUsers {
      id
    }
  }
`;

/**
 * __useIndexQuery__
 *
 * To run a query within a React component, call `useIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export function useIndexLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    IndexQuery,
    IndexQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<IndexQuery, IndexQueryVariables>(
    IndexDocument,
    baseOptions
  );
}
export type IndexQueryHookResult = ReturnType<typeof useIndexQuery>;
export type IndexLazyQueryHookResult = ReturnType<typeof useIndexLazyQuery>;
export type IndexQueryResult = ApolloReactCommon.QueryResult<
  IndexQuery,
  IndexQueryVariables
>;
