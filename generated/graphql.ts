/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../src/context/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type AcceptedDocument = {
  __typename?: 'AcceptedDocument';
  acceptedDocumentDate?: Maybe<Scalars['Date']>;
  acceptedDocumentId?: Maybe<Scalars['ID']>;
  /** @deprecated Field is no longer available. */
  acceptedDocumentString?: Maybe<Scalars['String']>;
  document?: Maybe<Document>;
};

export type Account = {
  __typename?: 'Account';
  accountId: Scalars['String'];
  accountNumber: Scalars['String'];
  status: CustomerAccountStatus;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  countryCode: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  line5?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  subdivision: Scalars['String'];
  type: AddressEnum;
};

export enum AddressEnum {
  MAILING = 'MAILING',
  RESIDENTIAL = 'RESIDENTIAL'
}

export type AddressInput = {
  city: Scalars['String'];
  countryCode: Scalars['String'];
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  line5?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  subdivision: Scalars['String'];
  type: AddressEnum;
};

export enum AnnualIncomeBracket {
  LESS_THAN_RM12000 = 'LESS_THAN_RM12000',
  RM12000_RM17999 = 'RM12000_RM17999',
  RM18000_RM23999 = 'RM18000_RM23999',
  RM24000_RM35999 = 'RM24000_RM35999',
  RM36000_RM47999 = 'RM36000_RM47999',
  RM48000_RM71999 = 'RM48000_RM71999',
  RM72000_RM95999 = 'RM72000_RM95999',
  RM96000_RM119999 = 'RM96000_RM119999',
  RM120000_AND_ABOVE = 'RM120000_AND_ABOVE'
}

export type CheckUsernameUniquenessResponse = {
  __typename?: 'CheckUsernameUniquenessResponse';
  usernameIsUnique?: Maybe<Scalars['Boolean']>;
};

export type CreateCustomerResponse = {
  __typename?: 'CreateCustomerResponse';
  customer?: Maybe<CustomerDetailsResponse>;
  /** @deprecated Use customerId available in `customer` objectt */
  customerId?: Maybe<Scalars['String']>;
};

export type CreateIamAccountInput = {
  customerId: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  secureword?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CreateIamAccountResponse = {
  __typename?: 'CreateIamAccountResponse';
  pingoneUserId?: Maybe<Scalars['String']>;
  requestId?: Maybe<Scalars['String']>;
};

export enum CustomerAccountStatus {
  ACTIVE = 'ACTIVE',
  BLOCKED = 'BLOCKED',
  CLOSED = 'CLOSED',
  DORMANT = 'DORMANT',
  INACTIVE = 'INACTIVE',
  INITIALISATION_FAILURE = 'INITIALISATION_FAILURE',
  INITIATED = 'INITIATED',
  PENDING_CLOSURE = 'PENDING_CLOSURE'
}

export enum CustomerDepositAccountStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type CustomerDetailsResponse = {
  __typename?: 'CustomerDetailsResponse';
  acceptedDocuments?: Maybe<Array<AcceptedDocument>>;
  accounts?: Maybe<Array<Account>>;
  addresses?: Maybe<Array<Address>>;
  createdAt?: Maybe<Scalars['Date']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  devices?: Maybe<Array<Device>>;
  email?: Maybe<Scalars['String']>;
  employments?: Maybe<Array<CustomerEmploymentDataResponse>>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hasRetailAccount?: Maybe<Scalars['Boolean']>;
  hasSmeAccount?: Maybe<Scalars['Boolean']>;
  iam?: Maybe<Iam>;
  id?: Maybe<Scalars['ID']>;
  identityVerifications?: Maybe<Array<IdentityVerificationsResponse>>;
  lastName?: Maybe<Scalars['String']>;
  mailingAddressSameAsResidence?: Maybe<Scalars['Boolean']>;
  mobilePreferences?: Maybe<MobilePreferences>;
  nationality?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  nric?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profiles>;
  /** @deprecated Field is no longer available. */
  status?: Maybe<Scalars['String']>;
  statuses?: Maybe<CustomerStatuses>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** @deprecated Field is no longer available. */
  username?: Maybe<Scalars['String']>;
};

export type CustomerDetailsResponseNew = {
  __typename?: 'CustomerDetailsResponseNew';
  acceptedDocuments?: Maybe<Array<AcceptedDocument>>;
  accounts?: Maybe<Array<Account>>;
  addresses?: Maybe<Array<Address>>;
  createdAt?: Maybe<Scalars['Date']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  devices?: Maybe<Array<Device>>;
  email?: Maybe<Scalars['String']>;
  employments?: Maybe<Array<CustomerEmploymentDataResponseNew>>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hasRetailAccount?: Maybe<Scalars['Boolean']>;
  hasSmeAccount?: Maybe<Scalars['Boolean']>;
  iam?: Maybe<Iam>;
  id?: Maybe<Scalars['ID']>;
  identityVerifications?: Maybe<Array<IdentityVerificationsResponse>>;
  lastName?: Maybe<Scalars['String']>;
  mailingAddressSameAsResidence?: Maybe<Scalars['Boolean']>;
  mobilePreferences?: Maybe<MobilePreferences>;
  nationality?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  nric?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profiles>;
  /** @deprecated Field is no longer available. */
  status?: Maybe<Scalars['String']>;
  statuses?: Maybe<CustomerStatuses>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  /** @deprecated Field is no longer available. */
  username?: Maybe<Scalars['String']>;
};

export type CustomerEmploymentDataResponse = {
  __typename?: 'CustomerEmploymentDataResponse';
  annualIncomeBracket?: Maybe<Scalars['String']>;
  employer?: Maybe<Scalars['String']>;
  /** @deprecated Use employer field. */
  employerName?: Maybe<Scalars['String']>;
  employmentSector?: Maybe<Scalars['String']>;
  employmentType: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  occupation?: Maybe<Scalars['String']>;
};

export type CustomerEmploymentDataResponseNew = {
  __typename?: 'CustomerEmploymentDataResponseNew';
  annualIncome?: Maybe<Values>;
  employer?: Maybe<Scalars['String']>;
  /** @deprecated Use employer field. */
  employerName?: Maybe<Scalars['String']>;
  employmentSector?: Maybe<Scalars['String']>;
  employmentType: ValuesEmployment;
  id?: Maybe<Scalars['ID']>;
  occupation?: Maybe<Scalars['String']>;
};

export type CustomerMobileDeviceInput = {
  deviceInstallationId?: InputMaybe<Scalars['String']>;
  deviceModel: Scalars['String'];
  deviceOs: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type CustomerMobilePreferences = {
  __typename?: 'CustomerMobilePreferences';
  marketingChannels: CustomerMobilePreferencesMarketingChannels;
};

export type CustomerMobilePreferencesMarketingChannels = {
  __typename?: 'CustomerMobilePreferencesMarketingChannels';
  email: Scalars['Boolean'];
  phoneCall: Scalars['Boolean'];
  sms: Scalars['Boolean'];
};

export enum CustomerOverallStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
  FAILED = 'FAILED',
  OFFBOARDED = 'OFFBOARDED',
  OFFBOARDING_PENDING = 'OFFBOARDING_PENDING',
  ONBOARDED = 'ONBOARDED',
  PROSPECT = 'PROSPECT'
}

export enum CustomerStatusValue {
  FAILED = 'FAILED',
  INITIATED = 'INITIATED',
  NOT_INITIATED = 'NOT_INITIATED',
  PASSED = 'PASSED'
}

export type CustomerStatuses = {
  __typename?: 'CustomerStatuses';
  cbs: CustomerStatusValue;
  crr: CustomerStatusValue;
  depositAccounts: CustomerDepositAccountStatus;
  eligibility: CustomerStatusValue;
  identityVerifiaction: CustomerStatusValue;
  overall: CustomerOverallStatus;
};

export type DepositAccount = {
  __typename?: 'DepositAccount';
  balance: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Device = {
  __typename?: 'Device';
  createdAt?: Maybe<Scalars['Date']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceInstallationId?: Maybe<Scalars['String']>;
  deviceModel?: Maybe<Scalars['String']>;
  deviceOs?: Maybe<Scalars['String']>;
  deviceStatus?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer available. */
  phoneNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Document = {
  __typename?: 'Document';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type DocumentIdInput = {
  documentId: Scalars['Int'];
};

export type Employment = {
  __typename?: 'Employment';
  annualIncomeBracket?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  employmentSector?: Maybe<Scalars['String']>;
  employmentType?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
};

export enum EmploymentType {
  EMPLOYER = 'EMPLOYER',
  GOVERNMENT_EMPLOYEE = 'GOVERNMENT_EMPLOYEE',
  HOUSEWIFE_HOUSEHUSBAND = 'HOUSEWIFE_HOUSEHUSBAND',
  OTHER_OUTSIDE_LABOUR_FORCE = 'OTHER_OUTSIDE_LABOUR_FORCE',
  PRIVATE_EMPLOYEE = 'PRIVATE_EMPLOYEE',
  REPORTING_ENTITY_EMPLOYEE = 'REPORTING_ENTITY_EMPLOYEE',
  RETIREE = 'RETIREE',
  SELF_EMPLOYED = 'SELF_EMPLOYED',
  STUDENT = 'STUDENT',
  UNEMPLOYED = 'UNEMPLOYED',
  UNPAID_FAMILY_WORKER = 'UNPAID_FAMILY_WORKER'
}

export type GetCustomerDetailsResponse = {
  __typename?: 'GetCustomerDetailsResponse';
  customer?: Maybe<CustomerDetailsResponseNew>;
};

export type Iam = {
  __typename?: 'Iam';
  pingOneId?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer available. */
  secureWord?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type IdentityVerificationsResponse = {
  __typename?: 'IdentityVerificationsResponse';
  documentCountry?: Maybe<Scalars['String']>;
  documentSubtype?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  identityReferenceId: Scalars['String'];
  startVerificationDate: Scalars['Date'];
  status: Scalars['String'];
};

export type MobilePreferences = {
  __typename?: 'MobilePreferences';
  marketingEmailFlag?: Maybe<Scalars['Boolean']>;
  marketingPhoneCallFlag?: Maybe<Scalars['Boolean']>;
  marketingPushFlag?: Maybe<Scalars['Boolean']>;
  marketingSmsFlag?: Maybe<Scalars['Boolean']>;
  pushNotificationsAllowed?: Maybe<Scalars['Boolean']>;
};

export type MobilePreferencesInput = {
  marketingEmailFlag?: InputMaybe<Scalars['Boolean']>;
  marketingPhoneCallFlag?: InputMaybe<Scalars['Boolean']>;
  marketingPushFlag?: InputMaybe<Scalars['Boolean']>;
  marketingSmsFlag?: InputMaybe<Scalars['Boolean']>;
  pushNotificationsAllowed?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIamAccount: CreateIamAccountResponse;
  createInitialCustomer: CreateCustomerResponse;
  storePersonalDetails: PersonalDetailsResponse;
  validateOtp: OtpValidationResponse;
};


export type MutationCreateIamAccountArgs = {
  iamAccountInput: CreateIamAccountInput;
};


export type MutationCreateInitialCustomerArgs = {
  customerMobileInput: CustomerMobileDeviceInput;
};


export type MutationStorePersonalDetailsArgs = {
  personalDetailsInput: PersonalDetailsInput;
};


export type MutationValidateOtpArgs = {
  otpValidationInput: OtpValidationInput;
};

export type OtpValidationInput = {
  customerId: Scalars['String'];
  deviceInstallationId: Scalars['String'];
  otp: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type OtpValidationResponse = {
  __typename?: 'OtpValidationResponse';
  requestId?: Maybe<Scalars['String']>;
  status?: Maybe<OtpValidationStatus>;
};

export enum OtpValidationStatus {
  APPROVED = 'APPROVED',
  APPROVED_ALREADY_EXISTS = 'APPROVED_ALREADY_EXISTS',
  FAILED = 'FAILED'
}

export type PersonalDetailsInput = {
  acceptedDocuments: Array<DocumentIdInput>;
  customerId: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  employment: SaveEmploymentDataInput;
  mailingAddress?: InputMaybe<AddressInput>;
  mailingAddressSameAsResidence: Scalars['Boolean'];
  mobilePreferences: MobilePreferencesInput;
  nickname?: InputMaybe<Scalars['String']>;
  profiles: ProfilesInput;
};

export type PersonalDetailsResponse = {
  __typename?: 'PersonalDetailsResponse';
  customer?: Maybe<CustomerDetailsResponse>;
  requestId?: Maybe<Scalars['String']>;
};

export type Profiles = {
  __typename?: 'Profiles';
  accountSettingUpReasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  bnmCcc?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer available. */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field is no longer available. */
  employment?: Maybe<Employment>;
  entityType?: Maybe<Scalars['Int']>;
  ethnicity?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  /** @deprecated Use accountSettingUpReasons field. */
  reasonsForSettingUpTheAccount?: Maybe<Array<Scalars['String']>>;
  religion?: Maybe<Scalars['String']>;
  residencyStatus?: Maybe<Scalars['String']>;
};

export type ProfilesInput = {
  accountSettingUpReasons?: InputMaybe<Array<Scalars['String']>>;
  ethnicity?: InputMaybe<Scalars['String']>;
  maritalStatus?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  checkUsernameUniqueness?: Maybe<CheckUsernameUniquenessResponse>;
  depositAccount?: Maybe<Array<Maybe<DepositAccount>>>;
  documents?: Maybe<Array<Document>>;
};


export type QueryCheckUsernameUniquenessArgs = {
  username: Scalars['String'];
};

export type SaveEmploymentDataInput = {
  annualIncomeBracket?: InputMaybe<AnnualIncomeBracket>;
  employer?: InputMaybe<Scalars['String']>;
  employmentSector?: InputMaybe<Scalars['String']>;
  employmentType: EmploymentType;
  occupation?: InputMaybe<Scalars['String']>;
};

export type Values = {
  __typename?: 'Values';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ValuesEmployment = {
  __typename?: 'ValuesEmployment';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  requiresAllEmploymentDetails?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AcceptedDocument: ResolverTypeWrapper<AcceptedDocument>;
  Account: ResolverTypeWrapper<Account>;
  Address: ResolverTypeWrapper<Address>;
  AddressEnum: AddressEnum;
  AddressInput: AddressInput;
  AnnualIncomeBracket: AnnualIncomeBracket;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CheckUsernameUniquenessResponse: ResolverTypeWrapper<CheckUsernameUniquenessResponse>;
  CreateCustomerResponse: ResolverTypeWrapper<CreateCustomerResponse>;
  CreateIamAccountInput: CreateIamAccountInput;
  CreateIamAccountResponse: ResolverTypeWrapper<CreateIamAccountResponse>;
  CustomerAccountStatus: CustomerAccountStatus;
  CustomerDepositAccountStatus: CustomerDepositAccountStatus;
  CustomerDetailsResponse: ResolverTypeWrapper<CustomerDetailsResponse>;
  CustomerDetailsResponseNew: ResolverTypeWrapper<CustomerDetailsResponseNew>;
  CustomerEmploymentDataResponse: ResolverTypeWrapper<CustomerEmploymentDataResponse>;
  CustomerEmploymentDataResponseNew: ResolverTypeWrapper<CustomerEmploymentDataResponseNew>;
  CustomerMobileDeviceInput: CustomerMobileDeviceInput;
  CustomerMobilePreferences: ResolverTypeWrapper<CustomerMobilePreferences>;
  CustomerMobilePreferencesMarketingChannels: ResolverTypeWrapper<CustomerMobilePreferencesMarketingChannels>;
  CustomerOverallStatus: CustomerOverallStatus;
  CustomerStatusValue: CustomerStatusValue;
  CustomerStatuses: ResolverTypeWrapper<CustomerStatuses>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DepositAccount: ResolverTypeWrapper<DepositAccount>;
  Device: ResolverTypeWrapper<Device>;
  Document: ResolverTypeWrapper<Document>;
  DocumentIdInput: DocumentIdInput;
  Employment: ResolverTypeWrapper<Employment>;
  EmploymentType: EmploymentType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetCustomerDetailsResponse: ResolverTypeWrapper<GetCustomerDetailsResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Iam: ResolverTypeWrapper<Iam>;
  IdentityVerificationsResponse: ResolverTypeWrapper<IdentityVerificationsResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MobilePreferences: ResolverTypeWrapper<MobilePreferences>;
  MobilePreferencesInput: MobilePreferencesInput;
  Mutation: ResolverTypeWrapper<{}>;
  OtpValidationInput: OtpValidationInput;
  OtpValidationResponse: ResolverTypeWrapper<OtpValidationResponse>;
  OtpValidationStatus: OtpValidationStatus;
  PersonalDetailsInput: PersonalDetailsInput;
  PersonalDetailsResponse: ResolverTypeWrapper<PersonalDetailsResponse>;
  Profiles: ResolverTypeWrapper<Profiles>;
  ProfilesInput: ProfilesInput;
  Query: ResolverTypeWrapper<{}>;
  SaveEmploymentDataInput: SaveEmploymentDataInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  Values: ResolverTypeWrapper<Values>;
  ValuesEmployment: ResolverTypeWrapper<ValuesEmployment>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AcceptedDocument: AcceptedDocument;
  Account: Account;
  Address: Address;
  AddressInput: AddressInput;
  Boolean: Scalars['Boolean'];
  CheckUsernameUniquenessResponse: CheckUsernameUniquenessResponse;
  CreateCustomerResponse: CreateCustomerResponse;
  CreateIamAccountInput: CreateIamAccountInput;
  CreateIamAccountResponse: CreateIamAccountResponse;
  CustomerDetailsResponse: CustomerDetailsResponse;
  CustomerDetailsResponseNew: CustomerDetailsResponseNew;
  CustomerEmploymentDataResponse: CustomerEmploymentDataResponse;
  CustomerEmploymentDataResponseNew: CustomerEmploymentDataResponseNew;
  CustomerMobileDeviceInput: CustomerMobileDeviceInput;
  CustomerMobilePreferences: CustomerMobilePreferences;
  CustomerMobilePreferencesMarketingChannels: CustomerMobilePreferencesMarketingChannels;
  CustomerStatuses: CustomerStatuses;
  Date: Scalars['Date'];
  DepositAccount: DepositAccount;
  Device: Device;
  Document: Document;
  DocumentIdInput: DocumentIdInput;
  Employment: Employment;
  Float: Scalars['Float'];
  GetCustomerDetailsResponse: GetCustomerDetailsResponse;
  ID: Scalars['ID'];
  Iam: Iam;
  IdentityVerificationsResponse: IdentityVerificationsResponse;
  Int: Scalars['Int'];
  MobilePreferences: MobilePreferences;
  MobilePreferencesInput: MobilePreferencesInput;
  Mutation: {};
  OtpValidationInput: OtpValidationInput;
  OtpValidationResponse: OtpValidationResponse;
  PersonalDetailsInput: PersonalDetailsInput;
  PersonalDetailsResponse: PersonalDetailsResponse;
  Profiles: Profiles;
  ProfilesInput: ProfilesInput;
  Query: {};
  SaveEmploymentDataInput: SaveEmploymentDataInput;
  String: Scalars['String'];
  Values: Values;
  ValuesEmployment: ValuesEmployment;
};

export type AcceptedDocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AcceptedDocument'] = ResolversParentTypes['AcceptedDocument']> = {
  acceptedDocumentDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  acceptedDocumentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  acceptedDocumentString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['Document']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  accountId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CustomerAccountStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  line1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  line5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subdivision?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AddressEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckUsernameUniquenessResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CheckUsernameUniquenessResponse'] = ResolversParentTypes['CheckUsernameUniquenessResponse']> = {
  usernameIsUnique?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCustomerResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateCustomerResponse'] = ResolversParentTypes['CreateCustomerResponse']> = {
  customer?: Resolver<Maybe<ResolversTypes['CustomerDetailsResponse']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateIamAccountResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateIamAccountResponse'] = ResolversParentTypes['CreateIamAccountResponse']> = {
  pingoneUserId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDetailsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerDetailsResponse'] = ResolversParentTypes['CustomerDetailsResponse']> = {
  acceptedDocuments?: Resolver<Maybe<Array<ResolversTypes['AcceptedDocument']>>, ParentType, ContextType>;
  accounts?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType>;
  addresses?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Maybe<Array<ResolversTypes['Device']>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employments?: Resolver<Maybe<Array<ResolversTypes['CustomerEmploymentDataResponse']>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasRetailAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasSmeAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iam?: Resolver<Maybe<ResolversTypes['Iam']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identityVerifications?: Resolver<Maybe<Array<ResolversTypes['IdentityVerificationsResponse']>>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mailingAddressSameAsResidence?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mobilePreferences?: Resolver<Maybe<ResolversTypes['MobilePreferences']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nric?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profiles?: Resolver<Maybe<ResolversTypes['Profiles']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Maybe<ResolversTypes['CustomerStatuses']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerDetailsResponseNewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerDetailsResponseNew'] = ResolversParentTypes['CustomerDetailsResponseNew']> = {
  acceptedDocuments?: Resolver<Maybe<Array<ResolversTypes['AcceptedDocument']>>, ParentType, ContextType>;
  accounts?: Resolver<Maybe<Array<ResolversTypes['Account']>>, ParentType, ContextType>;
  addresses?: Resolver<Maybe<Array<ResolversTypes['Address']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  dateOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Maybe<Array<ResolversTypes['Device']>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employments?: Resolver<Maybe<Array<ResolversTypes['CustomerEmploymentDataResponseNew']>>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasRetailAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasSmeAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  iam?: Resolver<Maybe<ResolversTypes['Iam']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  identityVerifications?: Resolver<Maybe<Array<ResolversTypes['IdentityVerificationsResponse']>>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mailingAddressSameAsResidence?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mobilePreferences?: Resolver<Maybe<ResolversTypes['MobilePreferences']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nric?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeOfBirth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profiles?: Resolver<Maybe<ResolversTypes['Profiles']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statuses?: Resolver<Maybe<ResolversTypes['CustomerStatuses']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerEmploymentDataResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerEmploymentDataResponse'] = ResolversParentTypes['CustomerEmploymentDataResponse']> = {
  annualIncomeBracket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentSector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerEmploymentDataResponseNewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerEmploymentDataResponseNew'] = ResolversParentTypes['CustomerEmploymentDataResponseNew']> = {
  annualIncome?: Resolver<Maybe<ResolversTypes['Values']>, ParentType, ContextType>;
  employer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentSector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentType?: Resolver<ResolversTypes['ValuesEmployment'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerMobilePreferencesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerMobilePreferences'] = ResolversParentTypes['CustomerMobilePreferences']> = {
  marketingChannels?: Resolver<ResolversTypes['CustomerMobilePreferencesMarketingChannels'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerMobilePreferencesMarketingChannelsResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerMobilePreferencesMarketingChannels'] = ResolversParentTypes['CustomerMobilePreferencesMarketingChannels']> = {
  email?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  phoneCall?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  sms?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomerStatusesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CustomerStatuses'] = ResolversParentTypes['CustomerStatuses']> = {
  cbs?: Resolver<ResolversTypes['CustomerStatusValue'], ParentType, ContextType>;
  crr?: Resolver<ResolversTypes['CustomerStatusValue'], ParentType, ContextType>;
  depositAccounts?: Resolver<ResolversTypes['CustomerDepositAccountStatus'], ParentType, ContextType>;
  eligibility?: Resolver<ResolversTypes['CustomerStatusValue'], ParentType, ContextType>;
  identityVerifiaction?: Resolver<ResolversTypes['CustomerStatusValue'], ParentType, ContextType>;
  overall?: Resolver<ResolversTypes['CustomerOverallStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DepositAccountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DepositAccount'] = ResolversParentTypes['DepositAccount']> = {
  balance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Device'] = ResolversParentTypes['Device']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  deviceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceInstallationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceModel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceOs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deviceStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmploymentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Employment'] = ResolversParentTypes['Employment']> = {
  annualIncomeBracket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentSector?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employmentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetCustomerDetailsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GetCustomerDetailsResponse'] = ResolversParentTypes['GetCustomerDetailsResponse']> = {
  customer?: Resolver<Maybe<ResolversTypes['CustomerDetailsResponseNew']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IamResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Iam'] = ResolversParentTypes['Iam']> = {
  pingOneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secureWord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IdentityVerificationsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['IdentityVerificationsResponse'] = ResolversParentTypes['IdentityVerificationsResponse']> = {
  documentCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentSubtype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  identityReferenceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startVerificationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobilePreferencesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['MobilePreferences'] = ResolversParentTypes['MobilePreferences']> = {
  marketingEmailFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  marketingPhoneCallFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  marketingPushFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  marketingSmsFlag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pushNotificationsAllowed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createIamAccount?: Resolver<ResolversTypes['CreateIamAccountResponse'], ParentType, ContextType, RequireFields<MutationCreateIamAccountArgs, 'iamAccountInput'>>;
  createInitialCustomer?: Resolver<ResolversTypes['CreateCustomerResponse'], ParentType, ContextType, RequireFields<MutationCreateInitialCustomerArgs, 'customerMobileInput'>>;
  storePersonalDetails?: Resolver<ResolversTypes['PersonalDetailsResponse'], ParentType, ContextType, RequireFields<MutationStorePersonalDetailsArgs, 'personalDetailsInput'>>;
  validateOtp?: Resolver<ResolversTypes['OtpValidationResponse'], ParentType, ContextType, RequireFields<MutationValidateOtpArgs, 'otpValidationInput'>>;
};

export type OtpValidationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OtpValidationResponse'] = ResolversParentTypes['OtpValidationResponse']> = {
  requestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OtpValidationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonalDetailsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PersonalDetailsResponse'] = ResolversParentTypes['PersonalDetailsResponse']> = {
  customer?: Resolver<Maybe<ResolversTypes['CustomerDetailsResponse']>, ParentType, ContextType>;
  requestId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfilesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Profiles'] = ResolversParentTypes['Profiles']> = {
  accountSettingUpReasons?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  bnmCcc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employment?: Resolver<Maybe<ResolversTypes['Employment']>, ParentType, ContextType>;
  entityType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ethnicity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maritalStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reasonsForSettingUpTheAccount?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  religion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  residencyStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  checkUsernameUniqueness?: Resolver<Maybe<ResolversTypes['CheckUsernameUniquenessResponse']>, ParentType, ContextType, RequireFields<QueryCheckUsernameUniquenessArgs, 'username'>>;
  depositAccount?: Resolver<Maybe<Array<Maybe<ResolversTypes['DepositAccount']>>>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<ResolversTypes['Document']>>, ParentType, ContextType>;
};

export type ValuesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Values'] = ResolversParentTypes['Values']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValuesEmploymentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ValuesEmployment'] = ResolversParentTypes['ValuesEmployment']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  requiresAllEmploymentDetails?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AcceptedDocument?: AcceptedDocumentResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  CheckUsernameUniquenessResponse?: CheckUsernameUniquenessResponseResolvers<ContextType>;
  CreateCustomerResponse?: CreateCustomerResponseResolvers<ContextType>;
  CreateIamAccountResponse?: CreateIamAccountResponseResolvers<ContextType>;
  CustomerDetailsResponse?: CustomerDetailsResponseResolvers<ContextType>;
  CustomerDetailsResponseNew?: CustomerDetailsResponseNewResolvers<ContextType>;
  CustomerEmploymentDataResponse?: CustomerEmploymentDataResponseResolvers<ContextType>;
  CustomerEmploymentDataResponseNew?: CustomerEmploymentDataResponseNewResolvers<ContextType>;
  CustomerMobilePreferences?: CustomerMobilePreferencesResolvers<ContextType>;
  CustomerMobilePreferencesMarketingChannels?: CustomerMobilePreferencesMarketingChannelsResolvers<ContextType>;
  CustomerStatuses?: CustomerStatusesResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DepositAccount?: DepositAccountResolvers<ContextType>;
  Device?: DeviceResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Employment?: EmploymentResolvers<ContextType>;
  GetCustomerDetailsResponse?: GetCustomerDetailsResponseResolvers<ContextType>;
  Iam?: IamResolvers<ContextType>;
  IdentityVerificationsResponse?: IdentityVerificationsResponseResolvers<ContextType>;
  MobilePreferences?: MobilePreferencesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OtpValidationResponse?: OtpValidationResponseResolvers<ContextType>;
  PersonalDetailsResponse?: PersonalDetailsResponseResolvers<ContextType>;
  Profiles?: ProfilesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Values?: ValuesResolvers<ContextType>;
  ValuesEmployment?: ValuesEmploymentResolvers<ContextType>;
};

