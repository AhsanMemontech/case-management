
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Case
 * 
 */
export type Case = $Result.DefaultSelection<Prisma.$CasePayload>
/**
 * Model Memos
 * 
 */
export type Memos = $Result.DefaultSelection<Prisma.$MemosPayload>
/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model CaseTypes
 * 
 */
export type CaseTypes = $Result.DefaultSelection<Prisma.$CaseTypesPayload>
/**
 * Model Taluka
 * 
 */
export type Taluka = $Result.DefaultSelection<Prisma.$TalukaPayload>
/**
 * Model Deh
 * 
 */
export type Deh = $Result.DefaultSelection<Prisma.$DehPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCases
 * 
 */
export type UserCases = $Result.DefaultSelection<Prisma.$UserCasesPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cases
 * const cases = await prisma.case.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cases
   * const cases = await prisma.case.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.case`: Exposes CRUD operations for the **Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cases
    * const cases = await prisma.case.findMany()
    * ```
    */
  get case(): Prisma.CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memos`: Exposes CRUD operations for the **Memos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memos
    * const memos = await prisma.memos.findMany()
    * ```
    */
  get memos(): Prisma.MemosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.caseTypes`: Exposes CRUD operations for the **CaseTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseTypes
    * const caseTypes = await prisma.caseTypes.findMany()
    * ```
    */
  get caseTypes(): Prisma.CaseTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taluka`: Exposes CRUD operations for the **Taluka** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Talukas
    * const talukas = await prisma.taluka.findMany()
    * ```
    */
  get taluka(): Prisma.TalukaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deh`: Exposes CRUD operations for the **Deh** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dehs
    * const dehs = await prisma.deh.findMany()
    * ```
    */
  get deh(): Prisma.DehDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCases`: Exposes CRUD operations for the **UserCases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCases
    * const userCases = await prisma.userCases.findMany()
    * ```
    */
  get userCases(): Prisma.UserCasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Case: 'Case',
    Memos: 'Memos',
    Notes: 'Notes',
    CaseTypes: 'CaseTypes',
    Taluka: 'Taluka',
    Deh: 'Deh',
    User: 'User',
    UserCases: 'UserCases',
    Report: 'Report',
    Log: 'Log'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "case" | "memos" | "notes" | "caseTypes" | "taluka" | "deh" | "user" | "userCases" | "report" | "log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Case: {
        payload: Prisma.$CasePayload<ExtArgs>
        fields: Prisma.CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findFirst: {
            args: Prisma.CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          findMany: {
            args: Prisma.CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>[]
          }
          create: {
            args: Prisma.CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          createMany: {
            args: Prisma.CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          update: {
            args: Prisma.CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          deleteMany: {
            args: Prisma.CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CasePayload>
          }
          aggregate: {
            args: Prisma.CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCase>
          }
          groupBy: {
            args: Prisma.CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseCountArgs<ExtArgs>
            result: $Utils.Optional<CaseCountAggregateOutputType> | number
          }
        }
      }
      Memos: {
        payload: Prisma.$MemosPayload<ExtArgs>
        fields: Prisma.MemosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          findFirst: {
            args: Prisma.MemosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          findMany: {
            args: Prisma.MemosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>[]
          }
          create: {
            args: Prisma.MemosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          createMany: {
            args: Prisma.MemosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          update: {
            args: Prisma.MemosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          deleteMany: {
            args: Prisma.MemosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemosPayload>
          }
          aggregate: {
            args: Prisma.MemosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemos>
          }
          groupBy: {
            args: Prisma.MemosGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemosGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemosCountArgs<ExtArgs>
            result: $Utils.Optional<MemosCountAggregateOutputType> | number
          }
        }
      }
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      CaseTypes: {
        payload: Prisma.$CaseTypesPayload<ExtArgs>
        fields: Prisma.CaseTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          findFirst: {
            args: Prisma.CaseTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          findMany: {
            args: Prisma.CaseTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>[]
          }
          create: {
            args: Prisma.CaseTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          createMany: {
            args: Prisma.CaseTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CaseTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          update: {
            args: Prisma.CaseTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          deleteMany: {
            args: Prisma.CaseTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaseTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CaseTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaseTypesPayload>
          }
          aggregate: {
            args: Prisma.CaseTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaseTypes>
          }
          groupBy: {
            args: Prisma.CaseTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaseTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseTypesCountArgs<ExtArgs>
            result: $Utils.Optional<CaseTypesCountAggregateOutputType> | number
          }
        }
      }
      Taluka: {
        payload: Prisma.$TalukaPayload<ExtArgs>
        fields: Prisma.TalukaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalukaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalukaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          findFirst: {
            args: Prisma.TalukaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalukaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          findMany: {
            args: Prisma.TalukaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>[]
          }
          create: {
            args: Prisma.TalukaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          createMany: {
            args: Prisma.TalukaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TalukaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          update: {
            args: Prisma.TalukaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          deleteMany: {
            args: Prisma.TalukaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalukaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TalukaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalukaPayload>
          }
          aggregate: {
            args: Prisma.TalukaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaluka>
          }
          groupBy: {
            args: Prisma.TalukaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalukaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalukaCountArgs<ExtArgs>
            result: $Utils.Optional<TalukaCountAggregateOutputType> | number
          }
        }
      }
      Deh: {
        payload: Prisma.$DehPayload<ExtArgs>
        fields: Prisma.DehFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DehFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DehFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          findFirst: {
            args: Prisma.DehFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DehFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          findMany: {
            args: Prisma.DehFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>[]
          }
          create: {
            args: Prisma.DehCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          createMany: {
            args: Prisma.DehCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DehDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          update: {
            args: Prisma.DehUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          deleteMany: {
            args: Prisma.DehDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DehUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DehUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DehPayload>
          }
          aggregate: {
            args: Prisma.DehAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeh>
          }
          groupBy: {
            args: Prisma.DehGroupByArgs<ExtArgs>
            result: $Utils.Optional<DehGroupByOutputType>[]
          }
          count: {
            args: Prisma.DehCountArgs<ExtArgs>
            result: $Utils.Optional<DehCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserCases: {
        payload: Prisma.$UserCasesPayload<ExtArgs>
        fields: Prisma.UserCasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          findFirst: {
            args: Prisma.UserCasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          findMany: {
            args: Prisma.UserCasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>[]
          }
          create: {
            args: Prisma.UserCasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          createMany: {
            args: Prisma.UserCasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          update: {
            args: Prisma.UserCasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          deleteMany: {
            args: Prisma.UserCasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCasesPayload>
          }
          aggregate: {
            args: Prisma.UserCasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCases>
          }
          groupBy: {
            args: Prisma.UserCasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCasesCountArgs<ExtArgs>
            result: $Utils.Optional<UserCasesCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    case?: CaseOmit
    memos?: MemosOmit
    notes?: NotesOmit
    caseTypes?: CaseTypesOmit
    taluka?: TalukaOmit
    deh?: DehOmit
    user?: UserOmit
    userCases?: UserCasesOmit
    report?: ReportOmit
    log?: LogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CaseCountOutputType
   */

  export type CaseCountOutputType = {
    reports: number
    memos: number
    notes: number
    userCases: number
  }

  export type CaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | CaseCountOutputTypeCountReportsArgs
    memos?: boolean | CaseCountOutputTypeCountMemosArgs
    notes?: boolean | CaseCountOutputTypeCountNotesArgs
    userCases?: boolean | CaseCountOutputTypeCountUserCasesArgs
  }

  // Custom InputTypes
  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseCountOutputType
     */
    select?: CaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountMemosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemosWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }

  /**
   * CaseCountOutputType without action
   */
  export type CaseCountOutputTypeCountUserCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCasesWhereInput
  }


  /**
   * Count Type TalukaCountOutputType
   */

  export type TalukaCountOutputType = {
    dehs: number
    Case: number
  }

  export type TalukaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dehs?: boolean | TalukaCountOutputTypeCountDehsArgs
    Case?: boolean | TalukaCountOutputTypeCountCaseArgs
  }

  // Custom InputTypes
  /**
   * TalukaCountOutputType without action
   */
  export type TalukaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalukaCountOutputType
     */
    select?: TalukaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TalukaCountOutputType without action
   */
  export type TalukaCountOutputTypeCountDehsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DehWhereInput
  }

  /**
   * TalukaCountOutputType without action
   */
  export type TalukaCountOutputTypeCountCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }


  /**
   * Count Type DehCountOutputType
   */

  export type DehCountOutputType = {
    Case: number
  }

  export type DehCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Case?: boolean | DehCountOutputTypeCountCaseArgs
  }

  // Custom InputTypes
  /**
   * DehCountOutputType without action
   */
  export type DehCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DehCountOutputType
     */
    select?: DehCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DehCountOutputType without action
   */
  export type DehCountOutputTypeCountCaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userCases: number
    assignedCases: number
    forwardedCases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCases?: boolean | UserCountOutputTypeCountUserCasesArgs
    assignedCases?: boolean | UserCountOutputTypeCountAssignedCasesArgs
    forwardedCases?: boolean | UserCountOutputTypeCountForwardedCasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCasesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCasesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForwardedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Case
   */

  export type AggregateCase = {
    _count: CaseCountAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  export type CaseMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    caseType: string | null
    status: string | null
    priority: string | null
    dateOfInstitution: Date | null
    orderOfDate: Date | null
    nextDate: Date | null
    location: string | null
    talukaId: string | null
    dehId: string | null
    description: string | null
    mukhtiarkarACReportUploaded: boolean | null
    mukhtiarkarACReportPath: string | null
    evacueePropertyReportUploaded: boolean | null
    evacueePropertyReportPath: string | null
    barrageBranchReportUploaded: boolean | null
    barrageBranchReportPath: string | null
    newspaperPublicationUploaded: boolean | null
    newspaperPublicationPath: string | null
    forwardedToMukhtiarkarId: string | null
    forwardedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    caseType: string | null
    status: string | null
    priority: string | null
    dateOfInstitution: Date | null
    orderOfDate: Date | null
    nextDate: Date | null
    location: string | null
    talukaId: string | null
    dehId: string | null
    description: string | null
    mukhtiarkarACReportUploaded: boolean | null
    mukhtiarkarACReportPath: string | null
    evacueePropertyReportUploaded: boolean | null
    evacueePropertyReportPath: string | null
    barrageBranchReportUploaded: boolean | null
    barrageBranchReportPath: string | null
    newspaperPublicationUploaded: boolean | null
    newspaperPublicationPath: string | null
    forwardedToMukhtiarkarId: string | null
    forwardedByName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaseCountAggregateOutputType = {
    id: number
    code: number
    title: number
    caseType: number
    status: number
    priority: number
    dateOfInstitution: number
    orderOfDate: number
    nextDate: number
    location: number
    talukaId: number
    dehId: number
    description: number
    mukhtiarkarACReportUploaded: number
    mukhtiarkarACReportPath: number
    evacueePropertyReportUploaded: number
    evacueePropertyReportPath: number
    barrageBranchReportUploaded: number
    barrageBranchReportPath: number
    newspaperPublicationUploaded: number
    newspaperPublicationPath: number
    forwardedToMukhtiarkarId: number
    forwardedByName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaseMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    caseType?: true
    status?: true
    priority?: true
    dateOfInstitution?: true
    orderOfDate?: true
    nextDate?: true
    location?: true
    talukaId?: true
    dehId?: true
    description?: true
    mukhtiarkarACReportUploaded?: true
    mukhtiarkarACReportPath?: true
    evacueePropertyReportUploaded?: true
    evacueePropertyReportPath?: true
    barrageBranchReportUploaded?: true
    barrageBranchReportPath?: true
    newspaperPublicationUploaded?: true
    newspaperPublicationPath?: true
    forwardedToMukhtiarkarId?: true
    forwardedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    caseType?: true
    status?: true
    priority?: true
    dateOfInstitution?: true
    orderOfDate?: true
    nextDate?: true
    location?: true
    talukaId?: true
    dehId?: true
    description?: true
    mukhtiarkarACReportUploaded?: true
    mukhtiarkarACReportPath?: true
    evacueePropertyReportUploaded?: true
    evacueePropertyReportPath?: true
    barrageBranchReportUploaded?: true
    barrageBranchReportPath?: true
    newspaperPublicationUploaded?: true
    newspaperPublicationPath?: true
    forwardedToMukhtiarkarId?: true
    forwardedByName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaseCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    caseType?: true
    status?: true
    priority?: true
    dateOfInstitution?: true
    orderOfDate?: true
    nextDate?: true
    location?: true
    talukaId?: true
    dehId?: true
    description?: true
    mukhtiarkarACReportUploaded?: true
    mukhtiarkarACReportPath?: true
    evacueePropertyReportUploaded?: true
    evacueePropertyReportPath?: true
    barrageBranchReportUploaded?: true
    barrageBranchReportPath?: true
    newspaperPublicationUploaded?: true
    newspaperPublicationPath?: true
    forwardedToMukhtiarkarId?: true
    forwardedByName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Case to aggregate.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cases
    **/
    _count?: true | CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseMaxAggregateInputType
  }

  export type GetCaseAggregateType<T extends CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCase[P]>
      : GetScalarType<T[P], AggregateCase[P]>
  }




  export type CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithAggregationInput | CaseOrderByWithAggregationInput[]
    by: CaseScalarFieldEnum[] | CaseScalarFieldEnum
    having?: CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseCountAggregateInputType | true
    _min?: CaseMinAggregateInputType
    _max?: CaseMaxAggregateInputType
  }

  export type CaseGroupByOutputType = {
    id: string
    code: string
    title: string | null
    caseType: string | null
    status: string | null
    priority: string | null
    dateOfInstitution: Date | null
    orderOfDate: Date | null
    nextDate: Date | null
    location: string | null
    talukaId: string | null
    dehId: string | null
    description: string | null
    mukhtiarkarACReportUploaded: boolean
    mukhtiarkarACReportPath: string | null
    evacueePropertyReportUploaded: boolean
    evacueePropertyReportPath: string | null
    barrageBranchReportUploaded: boolean
    barrageBranchReportPath: string | null
    newspaperPublicationUploaded: boolean
    newspaperPublicationPath: string | null
    forwardedToMukhtiarkarId: string | null
    forwardedByName: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: CaseCountAggregateOutputType | null
    _min: CaseMinAggregateOutputType | null
    _max: CaseMaxAggregateOutputType | null
  }

  type GetCaseGroupByPayload<T extends CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseGroupByOutputType[P]>
            : GetScalarType<T[P], CaseGroupByOutputType[P]>
        }
      >
    >


  export type CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    caseType?: boolean
    status?: boolean
    priority?: boolean
    dateOfInstitution?: boolean
    orderOfDate?: boolean
    nextDate?: boolean
    location?: boolean
    talukaId?: boolean
    dehId?: boolean
    description?: boolean
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: boolean
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: boolean
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: boolean
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: boolean
    forwardedToMukhtiarkarId?: boolean
    forwardedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taluka?: boolean | Case$talukaArgs<ExtArgs>
    deh?: boolean | Case$dehArgs<ExtArgs>
    forwardedToMukhtiarkar?: boolean | Case$forwardedToMukhtiarkarArgs<ExtArgs>
    reports?: boolean | Case$reportsArgs<ExtArgs>
    memos?: boolean | Case$memosArgs<ExtArgs>
    notes?: boolean | Case$notesArgs<ExtArgs>
    userCases?: boolean | Case$userCasesArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["case"]>



  export type CaseSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    caseType?: boolean
    status?: boolean
    priority?: boolean
    dateOfInstitution?: boolean
    orderOfDate?: boolean
    nextDate?: boolean
    location?: boolean
    talukaId?: boolean
    dehId?: boolean
    description?: boolean
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: boolean
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: boolean
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: boolean
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: boolean
    forwardedToMukhtiarkarId?: boolean
    forwardedByName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "caseType" | "status" | "priority" | "dateOfInstitution" | "orderOfDate" | "nextDate" | "location" | "talukaId" | "dehId" | "description" | "mukhtiarkarACReportUploaded" | "mukhtiarkarACReportPath" | "evacueePropertyReportUploaded" | "evacueePropertyReportPath" | "barrageBranchReportUploaded" | "barrageBranchReportPath" | "newspaperPublicationUploaded" | "newspaperPublicationPath" | "forwardedToMukhtiarkarId" | "forwardedByName" | "createdAt" | "updatedAt", ExtArgs["result"]["case"]>
  export type CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taluka?: boolean | Case$talukaArgs<ExtArgs>
    deh?: boolean | Case$dehArgs<ExtArgs>
    forwardedToMukhtiarkar?: boolean | Case$forwardedToMukhtiarkarArgs<ExtArgs>
    reports?: boolean | Case$reportsArgs<ExtArgs>
    memos?: boolean | Case$memosArgs<ExtArgs>
    notes?: boolean | Case$notesArgs<ExtArgs>
    userCases?: boolean | Case$userCasesArgs<ExtArgs>
    _count?: boolean | CaseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Case"
    objects: {
      taluka: Prisma.$TalukaPayload<ExtArgs> | null
      deh: Prisma.$DehPayload<ExtArgs> | null
      forwardedToMukhtiarkar: Prisma.$UserPayload<ExtArgs> | null
      reports: Prisma.$ReportPayload<ExtArgs>[]
      memos: Prisma.$MemosPayload<ExtArgs>[]
      notes: Prisma.$NotesPayload<ExtArgs>[]
      userCases: Prisma.$UserCasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string | null
      caseType: string | null
      status: string | null
      priority: string | null
      dateOfInstitution: Date | null
      orderOfDate: Date | null
      nextDate: Date | null
      location: string | null
      talukaId: string | null
      dehId: string | null
      description: string | null
      mukhtiarkarACReportUploaded: boolean
      mukhtiarkarACReportPath: string | null
      evacueePropertyReportUploaded: boolean
      evacueePropertyReportPath: string | null
      barrageBranchReportUploaded: boolean
      barrageBranchReportPath: string | null
      newspaperPublicationUploaded: boolean
      newspaperPublicationPath: string | null
      forwardedToMukhtiarkarId: string | null
      forwardedByName: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["case"]>
    composites: {}
  }

  type CaseGetPayload<S extends boolean | null | undefined | CaseDefaultArgs> = $Result.GetResult<Prisma.$CasePayload, S>

  type CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseCountAggregateInputType | true
    }

  export interface CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Case'], meta: { name: 'Case' } }
    /**
     * Find zero or one Case that matches the filter.
     * @param {CaseFindUniqueArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseFindUniqueArgs>(args: SelectSubset<T, CaseFindUniqueArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseFindUniqueOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseFindFirstArgs>(args?: SelectSubset<T, CaseFindFirstArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindFirstOrThrowArgs} args - Arguments to find a Case
     * @example
     * // Get one Case
     * const case = await prisma.case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cases
     * const cases = await prisma.case.findMany()
     * 
     * // Get first 10 Cases
     * const cases = await prisma.case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseWithIdOnly = await prisma.case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseFindManyArgs>(args?: SelectSubset<T, CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Case.
     * @param {CaseCreateArgs} args - Arguments to create a Case.
     * @example
     * // Create one Case
     * const Case = await prisma.case.create({
     *   data: {
     *     // ... data to create a Case
     *   }
     * })
     * 
     */
    create<T extends CaseCreateArgs>(args: SelectSubset<T, CaseCreateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cases.
     * @param {CaseCreateManyArgs} args - Arguments to create many Cases.
     * @example
     * // Create many Cases
     * const case = await prisma.case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseCreateManyArgs>(args?: SelectSubset<T, CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Case.
     * @param {CaseDeleteArgs} args - Arguments to delete one Case.
     * @example
     * // Delete one Case
     * const Case = await prisma.case.delete({
     *   where: {
     *     // ... filter to delete one Case
     *   }
     * })
     * 
     */
    delete<T extends CaseDeleteArgs>(args: SelectSubset<T, CaseDeleteArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Case.
     * @param {CaseUpdateArgs} args - Arguments to update one Case.
     * @example
     * // Update one Case
     * const case = await prisma.case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseUpdateArgs>(args: SelectSubset<T, CaseUpdateArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cases.
     * @param {CaseDeleteManyArgs} args - Arguments to filter Cases to delete.
     * @example
     * // Delete a few Cases
     * const { count } = await prisma.case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseDeleteManyArgs>(args?: SelectSubset<T, CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cases
     * const case = await prisma.case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseUpdateManyArgs>(args: SelectSubset<T, CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Case.
     * @param {CaseUpsertArgs} args - Arguments to update or create a Case.
     * @example
     * // Update or create a Case
     * const case = await prisma.case.upsert({
     *   create: {
     *     // ... data to create a Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Case we want to update
     *   }
     * })
     */
    upsert<T extends CaseUpsertArgs>(args: SelectSubset<T, CaseUpsertArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseCountArgs} args - Arguments to filter Cases to count.
     * @example
     * // Count the number of Cases
     * const count = await prisma.case.count({
     *   where: {
     *     // ... the filter for the Cases we want to count
     *   }
     * })
    **/
    count<T extends CaseCountArgs>(
      args?: Subset<T, CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseAggregateArgs>(args: Subset<T, CaseAggregateArgs>): Prisma.PrismaPromise<GetCaseAggregateType<T>>

    /**
     * Group by Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseGroupByArgs['orderBy'] }
        : { orderBy?: CaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Case model
   */
  readonly fields: CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taluka<T extends Case$talukaArgs<ExtArgs> = {}>(args?: Subset<T, Case$talukaArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deh<T extends Case$dehArgs<ExtArgs> = {}>(args?: Subset<T, Case$dehArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    forwardedToMukhtiarkar<T extends Case$forwardedToMukhtiarkarArgs<ExtArgs> = {}>(args?: Subset<T, Case$forwardedToMukhtiarkarArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reports<T extends Case$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Case$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memos<T extends Case$memosArgs<ExtArgs> = {}>(args?: Subset<T, Case$memosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Case$notesArgs<ExtArgs> = {}>(args?: Subset<T, Case$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userCases<T extends Case$userCasesArgs<ExtArgs> = {}>(args?: Subset<T, Case$userCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Case model
   */
  interface CaseFieldRefs {
    readonly id: FieldRef<"Case", 'String'>
    readonly code: FieldRef<"Case", 'String'>
    readonly title: FieldRef<"Case", 'String'>
    readonly caseType: FieldRef<"Case", 'String'>
    readonly status: FieldRef<"Case", 'String'>
    readonly priority: FieldRef<"Case", 'String'>
    readonly dateOfInstitution: FieldRef<"Case", 'DateTime'>
    readonly orderOfDate: FieldRef<"Case", 'DateTime'>
    readonly nextDate: FieldRef<"Case", 'DateTime'>
    readonly location: FieldRef<"Case", 'String'>
    readonly talukaId: FieldRef<"Case", 'String'>
    readonly dehId: FieldRef<"Case", 'String'>
    readonly description: FieldRef<"Case", 'String'>
    readonly mukhtiarkarACReportUploaded: FieldRef<"Case", 'Boolean'>
    readonly mukhtiarkarACReportPath: FieldRef<"Case", 'String'>
    readonly evacueePropertyReportUploaded: FieldRef<"Case", 'Boolean'>
    readonly evacueePropertyReportPath: FieldRef<"Case", 'String'>
    readonly barrageBranchReportUploaded: FieldRef<"Case", 'Boolean'>
    readonly barrageBranchReportPath: FieldRef<"Case", 'String'>
    readonly newspaperPublicationUploaded: FieldRef<"Case", 'Boolean'>
    readonly newspaperPublicationPath: FieldRef<"Case", 'String'>
    readonly forwardedToMukhtiarkarId: FieldRef<"Case", 'String'>
    readonly forwardedByName: FieldRef<"Case", 'String'>
    readonly createdAt: FieldRef<"Case", 'DateTime'>
    readonly updatedAt: FieldRef<"Case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Case findUnique
   */
  export type CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findUniqueOrThrow
   */
  export type CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case findFirst
   */
  export type CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findFirstOrThrow
   */
  export type CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Case to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cases.
     */
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case findMany
   */
  export type CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter, which Cases to fetch.
     */
    where?: CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cases to fetch.
     */
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cases.
     */
    cursor?: CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cases.
     */
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Case create
   */
  export type CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Case.
     */
    data: XOR<CaseCreateInput, CaseUncheckedCreateInput>
  }

  /**
   * Case createMany
   */
  export type CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cases.
     */
    data: CaseCreateManyInput | CaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Case update
   */
  export type CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Case.
     */
    data: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
    /**
     * Choose, which Case to update.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case updateMany
   */
  export type CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cases.
     */
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyInput>
    /**
     * Filter which Cases to update
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to update.
     */
    limit?: number
  }

  /**
   * Case upsert
   */
  export type CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Case to update in case it exists.
     */
    where: CaseWhereUniqueInput
    /**
     * In case the Case found by the `where` argument doesn't exist, create a new Case with this data.
     */
    create: XOR<CaseCreateInput, CaseUncheckedCreateInput>
    /**
     * In case the Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseUpdateInput, CaseUncheckedUpdateInput>
  }

  /**
   * Case delete
   */
  export type CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    /**
     * Filter which Case to delete.
     */
    where: CaseWhereUniqueInput
  }

  /**
   * Case deleteMany
   */
  export type CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cases to delete
     */
    where?: CaseWhereInput
    /**
     * Limit how many Cases to delete.
     */
    limit?: number
  }

  /**
   * Case.taluka
   */
  export type Case$talukaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    where?: TalukaWhereInput
  }

  /**
   * Case.deh
   */
  export type Case$dehArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    where?: DehWhereInput
  }

  /**
   * Case.forwardedToMukhtiarkar
   */
  export type Case$forwardedToMukhtiarkarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Case.reports
   */
  export type Case$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Case.memos
   */
  export type Case$memosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    where?: MemosWhereInput
    orderBy?: MemosOrderByWithRelationInput | MemosOrderByWithRelationInput[]
    cursor?: MemosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemosScalarFieldEnum | MemosScalarFieldEnum[]
  }

  /**
   * Case.notes
   */
  export type Case$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Case.userCases
   */
  export type Case$userCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    where?: UserCasesWhereInput
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    cursor?: UserCasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * Case without action
   */
  export type CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
  }


  /**
   * Model Memos
   */

  export type AggregateMemos = {
    _count: MemosCountAggregateOutputType | null
    _min: MemosMinAggregateOutputType | null
    _max: MemosMaxAggregateOutputType | null
  }

  export type MemosMinAggregateOutputType = {
    id: string | null
    code: string | null
    filePath: string | null
    description: string | null
    dateCollected: Date | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemosMaxAggregateOutputType = {
    id: string | null
    code: string | null
    filePath: string | null
    description: string | null
    dateCollected: Date | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemosCountAggregateOutputType = {
    id: number
    code: number
    filePath: number
    description: number
    dateCollected: number
    caseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemosMinAggregateInputType = {
    id?: true
    code?: true
    filePath?: true
    description?: true
    dateCollected?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemosMaxAggregateInputType = {
    id?: true
    code?: true
    filePath?: true
    description?: true
    dateCollected?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemosCountAggregateInputType = {
    id?: true
    code?: true
    filePath?: true
    description?: true
    dateCollected?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memos to aggregate.
     */
    where?: MemosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: MemosOrderByWithRelationInput | MemosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memos
    **/
    _count?: true | MemosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemosMaxAggregateInputType
  }

  export type GetMemosAggregateType<T extends MemosAggregateArgs> = {
        [P in keyof T & keyof AggregateMemos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemos[P]>
      : GetScalarType<T[P], AggregateMemos[P]>
  }




  export type MemosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemosWhereInput
    orderBy?: MemosOrderByWithAggregationInput | MemosOrderByWithAggregationInput[]
    by: MemosScalarFieldEnum[] | MemosScalarFieldEnum
    having?: MemosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemosCountAggregateInputType | true
    _min?: MemosMinAggregateInputType
    _max?: MemosMaxAggregateInputType
  }

  export type MemosGroupByOutputType = {
    id: string
    code: string
    filePath: string | null
    description: string | null
    dateCollected: Date
    caseId: string
    createdAt: Date
    updatedAt: Date | null
    _count: MemosCountAggregateOutputType | null
    _min: MemosMinAggregateOutputType | null
    _max: MemosMaxAggregateOutputType | null
  }

  type GetMemosGroupByPayload<T extends MemosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemosGroupByOutputType[P]>
            : GetScalarType<T[P], MemosGroupByOutputType[P]>
        }
      >
    >


  export type MemosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    filePath?: boolean
    description?: boolean
    dateCollected?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memos"]>



  export type MemosSelectScalar = {
    id?: boolean
    code?: boolean
    filePath?: boolean
    description?: boolean
    dateCollected?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "filePath" | "description" | "dateCollected" | "caseId" | "createdAt" | "updatedAt", ExtArgs["result"]["memos"]>
  export type MemosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $MemosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Memos"
    objects: {
      Case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      filePath: string | null
      description: string | null
      dateCollected: Date
      caseId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["memos"]>
    composites: {}
  }

  type MemosGetPayload<S extends boolean | null | undefined | MemosDefaultArgs> = $Result.GetResult<Prisma.$MemosPayload, S>

  type MemosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemosCountAggregateInputType | true
    }

  export interface MemosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Memos'], meta: { name: 'Memos' } }
    /**
     * Find zero or one Memos that matches the filter.
     * @param {MemosFindUniqueArgs} args - Arguments to find a Memos
     * @example
     * // Get one Memos
     * const memos = await prisma.memos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemosFindUniqueArgs>(args: SelectSubset<T, MemosFindUniqueArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemosFindUniqueOrThrowArgs} args - Arguments to find a Memos
     * @example
     * // Get one Memos
     * const memos = await prisma.memos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemosFindUniqueOrThrowArgs>(args: SelectSubset<T, MemosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosFindFirstArgs} args - Arguments to find a Memos
     * @example
     * // Get one Memos
     * const memos = await prisma.memos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemosFindFirstArgs>(args?: SelectSubset<T, MemosFindFirstArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosFindFirstOrThrowArgs} args - Arguments to find a Memos
     * @example
     * // Get one Memos
     * const memos = await prisma.memos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemosFindFirstOrThrowArgs>(args?: SelectSubset<T, MemosFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memos
     * const memos = await prisma.memos.findMany()
     * 
     * // Get first 10 Memos
     * const memos = await prisma.memos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memosWithIdOnly = await prisma.memos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemosFindManyArgs>(args?: SelectSubset<T, MemosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memos.
     * @param {MemosCreateArgs} args - Arguments to create a Memos.
     * @example
     * // Create one Memos
     * const Memos = await prisma.memos.create({
     *   data: {
     *     // ... data to create a Memos
     *   }
     * })
     * 
     */
    create<T extends MemosCreateArgs>(args: SelectSubset<T, MemosCreateArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memos.
     * @param {MemosCreateManyArgs} args - Arguments to create many Memos.
     * @example
     * // Create many Memos
     * const memos = await prisma.memos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemosCreateManyArgs>(args?: SelectSubset<T, MemosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Memos.
     * @param {MemosDeleteArgs} args - Arguments to delete one Memos.
     * @example
     * // Delete one Memos
     * const Memos = await prisma.memos.delete({
     *   where: {
     *     // ... filter to delete one Memos
     *   }
     * })
     * 
     */
    delete<T extends MemosDeleteArgs>(args: SelectSubset<T, MemosDeleteArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memos.
     * @param {MemosUpdateArgs} args - Arguments to update one Memos.
     * @example
     * // Update one Memos
     * const memos = await prisma.memos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemosUpdateArgs>(args: SelectSubset<T, MemosUpdateArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memos.
     * @param {MemosDeleteManyArgs} args - Arguments to filter Memos to delete.
     * @example
     * // Delete a few Memos
     * const { count } = await prisma.memos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemosDeleteManyArgs>(args?: SelectSubset<T, MemosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memos
     * const memos = await prisma.memos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemosUpdateManyArgs>(args: SelectSubset<T, MemosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Memos.
     * @param {MemosUpsertArgs} args - Arguments to update or create a Memos.
     * @example
     * // Update or create a Memos
     * const memos = await prisma.memos.upsert({
     *   create: {
     *     // ... data to create a Memos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memos we want to update
     *   }
     * })
     */
    upsert<T extends MemosUpsertArgs>(args: SelectSubset<T, MemosUpsertArgs<ExtArgs>>): Prisma__MemosClient<$Result.GetResult<Prisma.$MemosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosCountArgs} args - Arguments to filter Memos to count.
     * @example
     * // Count the number of Memos
     * const count = await prisma.memos.count({
     *   where: {
     *     // ... the filter for the Memos we want to count
     *   }
     * })
    **/
    count<T extends MemosCountArgs>(
      args?: Subset<T, MemosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemosAggregateArgs>(args: Subset<T, MemosAggregateArgs>): Prisma.PrismaPromise<GetMemosAggregateType<T>>

    /**
     * Group by Memos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemosGroupByArgs['orderBy'] }
        : { orderBy?: MemosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Memos model
   */
  readonly fields: MemosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Memos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Memos model
   */
  interface MemosFieldRefs {
    readonly id: FieldRef<"Memos", 'String'>
    readonly code: FieldRef<"Memos", 'String'>
    readonly filePath: FieldRef<"Memos", 'String'>
    readonly description: FieldRef<"Memos", 'String'>
    readonly dateCollected: FieldRef<"Memos", 'DateTime'>
    readonly caseId: FieldRef<"Memos", 'String'>
    readonly createdAt: FieldRef<"Memos", 'DateTime'>
    readonly updatedAt: FieldRef<"Memos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Memos findUnique
   */
  export type MemosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter, which Memos to fetch.
     */
    where: MemosWhereUniqueInput
  }

  /**
   * Memos findUniqueOrThrow
   */
  export type MemosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter, which Memos to fetch.
     */
    where: MemosWhereUniqueInput
  }

  /**
   * Memos findFirst
   */
  export type MemosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter, which Memos to fetch.
     */
    where?: MemosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: MemosOrderByWithRelationInput | MemosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memos.
     */
    cursor?: MemosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memos.
     */
    distinct?: MemosScalarFieldEnum | MemosScalarFieldEnum[]
  }

  /**
   * Memos findFirstOrThrow
   */
  export type MemosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter, which Memos to fetch.
     */
    where?: MemosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: MemosOrderByWithRelationInput | MemosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memos.
     */
    cursor?: MemosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memos.
     */
    distinct?: MemosScalarFieldEnum | MemosScalarFieldEnum[]
  }

  /**
   * Memos findMany
   */
  export type MemosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter, which Memos to fetch.
     */
    where?: MemosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memos to fetch.
     */
    orderBy?: MemosOrderByWithRelationInput | MemosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memos.
     */
    cursor?: MemosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memos.
     */
    skip?: number
    distinct?: MemosScalarFieldEnum | MemosScalarFieldEnum[]
  }

  /**
   * Memos create
   */
  export type MemosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * The data needed to create a Memos.
     */
    data: XOR<MemosCreateInput, MemosUncheckedCreateInput>
  }

  /**
   * Memos createMany
   */
  export type MemosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memos.
     */
    data: MemosCreateManyInput | MemosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Memos update
   */
  export type MemosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * The data needed to update a Memos.
     */
    data: XOR<MemosUpdateInput, MemosUncheckedUpdateInput>
    /**
     * Choose, which Memos to update.
     */
    where: MemosWhereUniqueInput
  }

  /**
   * Memos updateMany
   */
  export type MemosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memos.
     */
    data: XOR<MemosUpdateManyMutationInput, MemosUncheckedUpdateManyInput>
    /**
     * Filter which Memos to update
     */
    where?: MemosWhereInput
    /**
     * Limit how many Memos to update.
     */
    limit?: number
  }

  /**
   * Memos upsert
   */
  export type MemosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * The filter to search for the Memos to update in case it exists.
     */
    where: MemosWhereUniqueInput
    /**
     * In case the Memos found by the `where` argument doesn't exist, create a new Memos with this data.
     */
    create: XOR<MemosCreateInput, MemosUncheckedCreateInput>
    /**
     * In case the Memos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemosUpdateInput, MemosUncheckedUpdateInput>
  }

  /**
   * Memos delete
   */
  export type MemosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
    /**
     * Filter which Memos to delete.
     */
    where: MemosWhereUniqueInput
  }

  /**
   * Memos deleteMany
   */
  export type MemosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memos to delete
     */
    where?: MemosWhereInput
    /**
     * Limit how many Memos to delete.
     */
    limit?: number
  }

  /**
   * Memos without action
   */
  export type MemosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memos
     */
    select?: MemosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memos
     */
    omit?: MemosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemosInclude<ExtArgs> | null
  }


  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    content: string | null
    noteAddedOn: Date | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    content: string | null
    noteAddedOn: Date | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    code: number
    title: number
    content: number
    noteAddedOn: number
    caseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    content?: true
    noteAddedOn?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    content?: true
    noteAddedOn?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    content?: true
    noteAddedOn?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    code: string
    title: string | null
    content: string | null
    noteAddedOn: Date
    caseId: string
    createdAt: Date
    updatedAt: Date | null
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    content?: boolean
    noteAddedOn?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>



  export type NotesSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    content?: boolean
    noteAddedOn?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "content" | "noteAddedOn" | "caseId" | "createdAt" | "updatedAt", ExtArgs["result"]["notes"]>
  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      Case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string | null
      content: string | null
      noteAddedOn: Date
      caseId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notes model
   */
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'String'>
    readonly code: FieldRef<"Notes", 'String'>
    readonly title: FieldRef<"Notes", 'String'>
    readonly content: FieldRef<"Notes", 'String'>
    readonly noteAddedOn: FieldRef<"Notes", 'DateTime'>
    readonly caseId: FieldRef<"Notes", 'String'>
    readonly createdAt: FieldRef<"Notes", 'DateTime'>
    readonly updatedAt: FieldRef<"Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model CaseTypes
   */

  export type AggregateCaseTypes = {
    _count: CaseTypesCountAggregateOutputType | null
    _min: CaseTypesMinAggregateOutputType | null
    _max: CaseTypesMaxAggregateOutputType | null
  }

  export type CaseTypesMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type CaseTypesMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type CaseTypesCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type CaseTypesMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CaseTypesMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type CaseTypesCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type CaseTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseTypes to aggregate.
     */
    where?: CaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseTypes to fetch.
     */
    orderBy?: CaseTypesOrderByWithRelationInput | CaseTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseTypes
    **/
    _count?: true | CaseTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseTypesMaxAggregateInputType
  }

  export type GetCaseTypesAggregateType<T extends CaseTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseTypes[P]>
      : GetScalarType<T[P], AggregateCaseTypes[P]>
  }




  export type CaseTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseTypesWhereInput
    orderBy?: CaseTypesOrderByWithAggregationInput | CaseTypesOrderByWithAggregationInput[]
    by: CaseTypesScalarFieldEnum[] | CaseTypesScalarFieldEnum
    having?: CaseTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseTypesCountAggregateInputType | true
    _min?: CaseTypesMinAggregateInputType
    _max?: CaseTypesMaxAggregateInputType
  }

  export type CaseTypesGroupByOutputType = {
    id: string
    code: string | null
    name: string | null
    _count: CaseTypesCountAggregateOutputType | null
    _min: CaseTypesMinAggregateOutputType | null
    _max: CaseTypesMaxAggregateOutputType | null
  }

  type GetCaseTypesGroupByPayload<T extends CaseTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseTypesGroupByOutputType[P]>
            : GetScalarType<T[P], CaseTypesGroupByOutputType[P]>
        }
      >
    >


  export type CaseTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["caseTypes"]>



  export type CaseTypesSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type CaseTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name", ExtArgs["result"]["caseTypes"]>

  export type $CaseTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseTypes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string | null
      name: string | null
    }, ExtArgs["result"]["caseTypes"]>
    composites: {}
  }

  type CaseTypesGetPayload<S extends boolean | null | undefined | CaseTypesDefaultArgs> = $Result.GetResult<Prisma.$CaseTypesPayload, S>

  type CaseTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaseTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaseTypesCountAggregateInputType | true
    }

  export interface CaseTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseTypes'], meta: { name: 'CaseTypes' } }
    /**
     * Find zero or one CaseTypes that matches the filter.
     * @param {CaseTypesFindUniqueArgs} args - Arguments to find a CaseTypes
     * @example
     * // Get one CaseTypes
     * const caseTypes = await prisma.caseTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaseTypesFindUniqueArgs>(args: SelectSubset<T, CaseTypesFindUniqueArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CaseTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaseTypesFindUniqueOrThrowArgs} args - Arguments to find a CaseTypes
     * @example
     * // Get one CaseTypes
     * const caseTypes = await prisma.caseTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaseTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, CaseTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesFindFirstArgs} args - Arguments to find a CaseTypes
     * @example
     * // Get one CaseTypes
     * const caseTypes = await prisma.caseTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaseTypesFindFirstArgs>(args?: SelectSubset<T, CaseTypesFindFirstArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CaseTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesFindFirstOrThrowArgs} args - Arguments to find a CaseTypes
     * @example
     * // Get one CaseTypes
     * const caseTypes = await prisma.caseTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaseTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, CaseTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CaseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseTypes
     * const caseTypes = await prisma.caseTypes.findMany()
     * 
     * // Get first 10 CaseTypes
     * const caseTypes = await prisma.caseTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseTypesWithIdOnly = await prisma.caseTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaseTypesFindManyArgs>(args?: SelectSubset<T, CaseTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CaseTypes.
     * @param {CaseTypesCreateArgs} args - Arguments to create a CaseTypes.
     * @example
     * // Create one CaseTypes
     * const CaseTypes = await prisma.caseTypes.create({
     *   data: {
     *     // ... data to create a CaseTypes
     *   }
     * })
     * 
     */
    create<T extends CaseTypesCreateArgs>(args: SelectSubset<T, CaseTypesCreateArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CaseTypes.
     * @param {CaseTypesCreateManyArgs} args - Arguments to create many CaseTypes.
     * @example
     * // Create many CaseTypes
     * const caseTypes = await prisma.caseTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaseTypesCreateManyArgs>(args?: SelectSubset<T, CaseTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CaseTypes.
     * @param {CaseTypesDeleteArgs} args - Arguments to delete one CaseTypes.
     * @example
     * // Delete one CaseTypes
     * const CaseTypes = await prisma.caseTypes.delete({
     *   where: {
     *     // ... filter to delete one CaseTypes
     *   }
     * })
     * 
     */
    delete<T extends CaseTypesDeleteArgs>(args: SelectSubset<T, CaseTypesDeleteArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CaseTypes.
     * @param {CaseTypesUpdateArgs} args - Arguments to update one CaseTypes.
     * @example
     * // Update one CaseTypes
     * const caseTypes = await prisma.caseTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaseTypesUpdateArgs>(args: SelectSubset<T, CaseTypesUpdateArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CaseTypes.
     * @param {CaseTypesDeleteManyArgs} args - Arguments to filter CaseTypes to delete.
     * @example
     * // Delete a few CaseTypes
     * const { count } = await prisma.caseTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaseTypesDeleteManyArgs>(args?: SelectSubset<T, CaseTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseTypes
     * const caseTypes = await prisma.caseTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaseTypesUpdateManyArgs>(args: SelectSubset<T, CaseTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CaseTypes.
     * @param {CaseTypesUpsertArgs} args - Arguments to update or create a CaseTypes.
     * @example
     * // Update or create a CaseTypes
     * const caseTypes = await prisma.caseTypes.upsert({
     *   create: {
     *     // ... data to create a CaseTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseTypes we want to update
     *   }
     * })
     */
    upsert<T extends CaseTypesUpsertArgs>(args: SelectSubset<T, CaseTypesUpsertArgs<ExtArgs>>): Prisma__CaseTypesClient<$Result.GetResult<Prisma.$CaseTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesCountArgs} args - Arguments to filter CaseTypes to count.
     * @example
     * // Count the number of CaseTypes
     * const count = await prisma.caseTypes.count({
     *   where: {
     *     // ... the filter for the CaseTypes we want to count
     *   }
     * })
    **/
    count<T extends CaseTypesCountArgs>(
      args?: Subset<T, CaseTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseTypesAggregateArgs>(args: Subset<T, CaseTypesAggregateArgs>): Prisma.PrismaPromise<GetCaseTypesAggregateType<T>>

    /**
     * Group by CaseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseTypesGroupByArgs['orderBy'] }
        : { orderBy?: CaseTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseTypes model
   */
  readonly fields: CaseTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CaseTypes model
   */
  interface CaseTypesFieldRefs {
    readonly id: FieldRef<"CaseTypes", 'String'>
    readonly code: FieldRef<"CaseTypes", 'String'>
    readonly name: FieldRef<"CaseTypes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CaseTypes findUnique
   */
  export type CaseTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter, which CaseTypes to fetch.
     */
    where: CaseTypesWhereUniqueInput
  }

  /**
   * CaseTypes findUniqueOrThrow
   */
  export type CaseTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter, which CaseTypes to fetch.
     */
    where: CaseTypesWhereUniqueInput
  }

  /**
   * CaseTypes findFirst
   */
  export type CaseTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter, which CaseTypes to fetch.
     */
    where?: CaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseTypes to fetch.
     */
    orderBy?: CaseTypesOrderByWithRelationInput | CaseTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseTypes.
     */
    cursor?: CaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseTypes.
     */
    distinct?: CaseTypesScalarFieldEnum | CaseTypesScalarFieldEnum[]
  }

  /**
   * CaseTypes findFirstOrThrow
   */
  export type CaseTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter, which CaseTypes to fetch.
     */
    where?: CaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseTypes to fetch.
     */
    orderBy?: CaseTypesOrderByWithRelationInput | CaseTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseTypes.
     */
    cursor?: CaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseTypes.
     */
    distinct?: CaseTypesScalarFieldEnum | CaseTypesScalarFieldEnum[]
  }

  /**
   * CaseTypes findMany
   */
  export type CaseTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter, which CaseTypes to fetch.
     */
    where?: CaseTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseTypes to fetch.
     */
    orderBy?: CaseTypesOrderByWithRelationInput | CaseTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseTypes.
     */
    cursor?: CaseTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseTypes.
     */
    skip?: number
    distinct?: CaseTypesScalarFieldEnum | CaseTypesScalarFieldEnum[]
  }

  /**
   * CaseTypes create
   */
  export type CaseTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * The data needed to create a CaseTypes.
     */
    data?: XOR<CaseTypesCreateInput, CaseTypesUncheckedCreateInput>
  }

  /**
   * CaseTypes createMany
   */
  export type CaseTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseTypes.
     */
    data: CaseTypesCreateManyInput | CaseTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CaseTypes update
   */
  export type CaseTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * The data needed to update a CaseTypes.
     */
    data: XOR<CaseTypesUpdateInput, CaseTypesUncheckedUpdateInput>
    /**
     * Choose, which CaseTypes to update.
     */
    where: CaseTypesWhereUniqueInput
  }

  /**
   * CaseTypes updateMany
   */
  export type CaseTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseTypes.
     */
    data: XOR<CaseTypesUpdateManyMutationInput, CaseTypesUncheckedUpdateManyInput>
    /**
     * Filter which CaseTypes to update
     */
    where?: CaseTypesWhereInput
    /**
     * Limit how many CaseTypes to update.
     */
    limit?: number
  }

  /**
   * CaseTypes upsert
   */
  export type CaseTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * The filter to search for the CaseTypes to update in case it exists.
     */
    where: CaseTypesWhereUniqueInput
    /**
     * In case the CaseTypes found by the `where` argument doesn't exist, create a new CaseTypes with this data.
     */
    create: XOR<CaseTypesCreateInput, CaseTypesUncheckedCreateInput>
    /**
     * In case the CaseTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseTypesUpdateInput, CaseTypesUncheckedUpdateInput>
  }

  /**
   * CaseTypes delete
   */
  export type CaseTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
    /**
     * Filter which CaseTypes to delete.
     */
    where: CaseTypesWhereUniqueInput
  }

  /**
   * CaseTypes deleteMany
   */
  export type CaseTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseTypes to delete
     */
    where?: CaseTypesWhereInput
    /**
     * Limit how many CaseTypes to delete.
     */
    limit?: number
  }

  /**
   * CaseTypes without action
   */
  export type CaseTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseTypes
     */
    select?: CaseTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CaseTypes
     */
    omit?: CaseTypesOmit<ExtArgs> | null
  }


  /**
   * Model Taluka
   */

  export type AggregateTaluka = {
    _count: TalukaCountAggregateOutputType | null
    _min: TalukaMinAggregateOutputType | null
    _max: TalukaMaxAggregateOutputType | null
  }

  export type TalukaMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TalukaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TalukaCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TalukaMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TalukaMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TalukaCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TalukaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taluka to aggregate.
     */
    where?: TalukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talukas to fetch.
     */
    orderBy?: TalukaOrderByWithRelationInput | TalukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Talukas
    **/
    _count?: true | TalukaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalukaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalukaMaxAggregateInputType
  }

  export type GetTalukaAggregateType<T extends TalukaAggregateArgs> = {
        [P in keyof T & keyof AggregateTaluka]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaluka[P]>
      : GetScalarType<T[P], AggregateTaluka[P]>
  }




  export type TalukaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalukaWhereInput
    orderBy?: TalukaOrderByWithAggregationInput | TalukaOrderByWithAggregationInput[]
    by: TalukaScalarFieldEnum[] | TalukaScalarFieldEnum
    having?: TalukaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalukaCountAggregateInputType | true
    _min?: TalukaMinAggregateInputType
    _max?: TalukaMaxAggregateInputType
  }

  export type TalukaGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TalukaCountAggregateOutputType | null
    _min: TalukaMinAggregateOutputType | null
    _max: TalukaMaxAggregateOutputType | null
  }

  type GetTalukaGroupByPayload<T extends TalukaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalukaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalukaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalukaGroupByOutputType[P]>
            : GetScalarType<T[P], TalukaGroupByOutputType[P]>
        }
      >
    >


  export type TalukaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dehs?: boolean | Taluka$dehsArgs<ExtArgs>
    Case?: boolean | Taluka$CaseArgs<ExtArgs>
    _count?: boolean | TalukaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taluka"]>



  export type TalukaSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TalukaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["taluka"]>
  export type TalukaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dehs?: boolean | Taluka$dehsArgs<ExtArgs>
    Case?: boolean | Taluka$CaseArgs<ExtArgs>
    _count?: boolean | TalukaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TalukaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taluka"
    objects: {
      dehs: Prisma.$DehPayload<ExtArgs>[]
      Case: Prisma.$CasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["taluka"]>
    composites: {}
  }

  type TalukaGetPayload<S extends boolean | null | undefined | TalukaDefaultArgs> = $Result.GetResult<Prisma.$TalukaPayload, S>

  type TalukaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalukaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalukaCountAggregateInputType | true
    }

  export interface TalukaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taluka'], meta: { name: 'Taluka' } }
    /**
     * Find zero or one Taluka that matches the filter.
     * @param {TalukaFindUniqueArgs} args - Arguments to find a Taluka
     * @example
     * // Get one Taluka
     * const taluka = await prisma.taluka.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalukaFindUniqueArgs>(args: SelectSubset<T, TalukaFindUniqueArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taluka that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalukaFindUniqueOrThrowArgs} args - Arguments to find a Taluka
     * @example
     * // Get one Taluka
     * const taluka = await prisma.taluka.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalukaFindUniqueOrThrowArgs>(args: SelectSubset<T, TalukaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taluka that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaFindFirstArgs} args - Arguments to find a Taluka
     * @example
     * // Get one Taluka
     * const taluka = await prisma.taluka.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalukaFindFirstArgs>(args?: SelectSubset<T, TalukaFindFirstArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taluka that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaFindFirstOrThrowArgs} args - Arguments to find a Taluka
     * @example
     * // Get one Taluka
     * const taluka = await prisma.taluka.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalukaFindFirstOrThrowArgs>(args?: SelectSubset<T, TalukaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Talukas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Talukas
     * const talukas = await prisma.taluka.findMany()
     * 
     * // Get first 10 Talukas
     * const talukas = await prisma.taluka.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const talukaWithIdOnly = await prisma.taluka.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TalukaFindManyArgs>(args?: SelectSubset<T, TalukaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taluka.
     * @param {TalukaCreateArgs} args - Arguments to create a Taluka.
     * @example
     * // Create one Taluka
     * const Taluka = await prisma.taluka.create({
     *   data: {
     *     // ... data to create a Taluka
     *   }
     * })
     * 
     */
    create<T extends TalukaCreateArgs>(args: SelectSubset<T, TalukaCreateArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Talukas.
     * @param {TalukaCreateManyArgs} args - Arguments to create many Talukas.
     * @example
     * // Create many Talukas
     * const taluka = await prisma.taluka.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalukaCreateManyArgs>(args?: SelectSubset<T, TalukaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taluka.
     * @param {TalukaDeleteArgs} args - Arguments to delete one Taluka.
     * @example
     * // Delete one Taluka
     * const Taluka = await prisma.taluka.delete({
     *   where: {
     *     // ... filter to delete one Taluka
     *   }
     * })
     * 
     */
    delete<T extends TalukaDeleteArgs>(args: SelectSubset<T, TalukaDeleteArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taluka.
     * @param {TalukaUpdateArgs} args - Arguments to update one Taluka.
     * @example
     * // Update one Taluka
     * const taluka = await prisma.taluka.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalukaUpdateArgs>(args: SelectSubset<T, TalukaUpdateArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Talukas.
     * @param {TalukaDeleteManyArgs} args - Arguments to filter Talukas to delete.
     * @example
     * // Delete a few Talukas
     * const { count } = await prisma.taluka.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalukaDeleteManyArgs>(args?: SelectSubset<T, TalukaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talukas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Talukas
     * const taluka = await prisma.taluka.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalukaUpdateManyArgs>(args: SelectSubset<T, TalukaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taluka.
     * @param {TalukaUpsertArgs} args - Arguments to update or create a Taluka.
     * @example
     * // Update or create a Taluka
     * const taluka = await prisma.taluka.upsert({
     *   create: {
     *     // ... data to create a Taluka
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taluka we want to update
     *   }
     * })
     */
    upsert<T extends TalukaUpsertArgs>(args: SelectSubset<T, TalukaUpsertArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Talukas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaCountArgs} args - Arguments to filter Talukas to count.
     * @example
     * // Count the number of Talukas
     * const count = await prisma.taluka.count({
     *   where: {
     *     // ... the filter for the Talukas we want to count
     *   }
     * })
    **/
    count<T extends TalukaCountArgs>(
      args?: Subset<T, TalukaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalukaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taluka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TalukaAggregateArgs>(args: Subset<T, TalukaAggregateArgs>): Prisma.PrismaPromise<GetTalukaAggregateType<T>>

    /**
     * Group by Taluka.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalukaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TalukaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalukaGroupByArgs['orderBy'] }
        : { orderBy?: TalukaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TalukaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalukaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taluka model
   */
  readonly fields: TalukaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taluka.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalukaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dehs<T extends Taluka$dehsArgs<ExtArgs> = {}>(args?: Subset<T, Taluka$dehsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Case<T extends Taluka$CaseArgs<ExtArgs> = {}>(args?: Subset<T, Taluka$CaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Taluka model
   */
  interface TalukaFieldRefs {
    readonly id: FieldRef<"Taluka", 'String'>
    readonly name: FieldRef<"Taluka", 'String'>
    readonly createdAt: FieldRef<"Taluka", 'DateTime'>
    readonly updatedAt: FieldRef<"Taluka", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Taluka findUnique
   */
  export type TalukaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter, which Taluka to fetch.
     */
    where: TalukaWhereUniqueInput
  }

  /**
   * Taluka findUniqueOrThrow
   */
  export type TalukaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter, which Taluka to fetch.
     */
    where: TalukaWhereUniqueInput
  }

  /**
   * Taluka findFirst
   */
  export type TalukaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter, which Taluka to fetch.
     */
    where?: TalukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talukas to fetch.
     */
    orderBy?: TalukaOrderByWithRelationInput | TalukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talukas.
     */
    cursor?: TalukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talukas.
     */
    distinct?: TalukaScalarFieldEnum | TalukaScalarFieldEnum[]
  }

  /**
   * Taluka findFirstOrThrow
   */
  export type TalukaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter, which Taluka to fetch.
     */
    where?: TalukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talukas to fetch.
     */
    orderBy?: TalukaOrderByWithRelationInput | TalukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talukas.
     */
    cursor?: TalukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talukas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talukas.
     */
    distinct?: TalukaScalarFieldEnum | TalukaScalarFieldEnum[]
  }

  /**
   * Taluka findMany
   */
  export type TalukaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter, which Talukas to fetch.
     */
    where?: TalukaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talukas to fetch.
     */
    orderBy?: TalukaOrderByWithRelationInput | TalukaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Talukas.
     */
    cursor?: TalukaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talukas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talukas.
     */
    skip?: number
    distinct?: TalukaScalarFieldEnum | TalukaScalarFieldEnum[]
  }

  /**
   * Taluka create
   */
  export type TalukaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * The data needed to create a Taluka.
     */
    data: XOR<TalukaCreateInput, TalukaUncheckedCreateInput>
  }

  /**
   * Taluka createMany
   */
  export type TalukaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Talukas.
     */
    data: TalukaCreateManyInput | TalukaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taluka update
   */
  export type TalukaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * The data needed to update a Taluka.
     */
    data: XOR<TalukaUpdateInput, TalukaUncheckedUpdateInput>
    /**
     * Choose, which Taluka to update.
     */
    where: TalukaWhereUniqueInput
  }

  /**
   * Taluka updateMany
   */
  export type TalukaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Talukas.
     */
    data: XOR<TalukaUpdateManyMutationInput, TalukaUncheckedUpdateManyInput>
    /**
     * Filter which Talukas to update
     */
    where?: TalukaWhereInput
    /**
     * Limit how many Talukas to update.
     */
    limit?: number
  }

  /**
   * Taluka upsert
   */
  export type TalukaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * The filter to search for the Taluka to update in case it exists.
     */
    where: TalukaWhereUniqueInput
    /**
     * In case the Taluka found by the `where` argument doesn't exist, create a new Taluka with this data.
     */
    create: XOR<TalukaCreateInput, TalukaUncheckedCreateInput>
    /**
     * In case the Taluka was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalukaUpdateInput, TalukaUncheckedUpdateInput>
  }

  /**
   * Taluka delete
   */
  export type TalukaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
    /**
     * Filter which Taluka to delete.
     */
    where: TalukaWhereUniqueInput
  }

  /**
   * Taluka deleteMany
   */
  export type TalukaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talukas to delete
     */
    where?: TalukaWhereInput
    /**
     * Limit how many Talukas to delete.
     */
    limit?: number
  }

  /**
   * Taluka.dehs
   */
  export type Taluka$dehsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    where?: DehWhereInput
    orderBy?: DehOrderByWithRelationInput | DehOrderByWithRelationInput[]
    cursor?: DehWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DehScalarFieldEnum | DehScalarFieldEnum[]
  }

  /**
   * Taluka.Case
   */
  export type Taluka$CaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Taluka without action
   */
  export type TalukaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taluka
     */
    select?: TalukaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taluka
     */
    omit?: TalukaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalukaInclude<ExtArgs> | null
  }


  /**
   * Model Deh
   */

  export type AggregateDeh = {
    _count: DehCountAggregateOutputType | null
    _min: DehMinAggregateOutputType | null
    _max: DehMaxAggregateOutputType | null
  }

  export type DehMinAggregateOutputType = {
    id: string | null
    name: string | null
    talukaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DehMaxAggregateOutputType = {
    id: string | null
    name: string | null
    talukaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DehCountAggregateOutputType = {
    id: number
    name: number
    talukaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DehMinAggregateInputType = {
    id?: true
    name?: true
    talukaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DehMaxAggregateInputType = {
    id?: true
    name?: true
    talukaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DehCountAggregateInputType = {
    id?: true
    name?: true
    talukaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DehAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deh to aggregate.
     */
    where?: DehWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dehs to fetch.
     */
    orderBy?: DehOrderByWithRelationInput | DehOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DehWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dehs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dehs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dehs
    **/
    _count?: true | DehCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DehMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DehMaxAggregateInputType
  }

  export type GetDehAggregateType<T extends DehAggregateArgs> = {
        [P in keyof T & keyof AggregateDeh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeh[P]>
      : GetScalarType<T[P], AggregateDeh[P]>
  }




  export type DehGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DehWhereInput
    orderBy?: DehOrderByWithAggregationInput | DehOrderByWithAggregationInput[]
    by: DehScalarFieldEnum[] | DehScalarFieldEnum
    having?: DehScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DehCountAggregateInputType | true
    _min?: DehMinAggregateInputType
    _max?: DehMaxAggregateInputType
  }

  export type DehGroupByOutputType = {
    id: string
    name: string
    talukaId: string
    createdAt: Date
    updatedAt: Date
    _count: DehCountAggregateOutputType | null
    _min: DehMinAggregateOutputType | null
    _max: DehMaxAggregateOutputType | null
  }

  type GetDehGroupByPayload<T extends DehGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DehGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DehGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DehGroupByOutputType[P]>
            : GetScalarType<T[P], DehGroupByOutputType[P]>
        }
      >
    >


  export type DehSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    talukaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taluka?: boolean | TalukaDefaultArgs<ExtArgs>
    Case?: boolean | Deh$CaseArgs<ExtArgs>
    _count?: boolean | DehCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deh"]>



  export type DehSelectScalar = {
    id?: boolean
    name?: boolean
    talukaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DehOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "talukaId" | "createdAt" | "updatedAt", ExtArgs["result"]["deh"]>
  export type DehInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taluka?: boolean | TalukaDefaultArgs<ExtArgs>
    Case?: boolean | Deh$CaseArgs<ExtArgs>
    _count?: boolean | DehCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DehPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deh"
    objects: {
      taluka: Prisma.$TalukaPayload<ExtArgs>
      Case: Prisma.$CasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      talukaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deh"]>
    composites: {}
  }

  type DehGetPayload<S extends boolean | null | undefined | DehDefaultArgs> = $Result.GetResult<Prisma.$DehPayload, S>

  type DehCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DehFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DehCountAggregateInputType | true
    }

  export interface DehDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deh'], meta: { name: 'Deh' } }
    /**
     * Find zero or one Deh that matches the filter.
     * @param {DehFindUniqueArgs} args - Arguments to find a Deh
     * @example
     * // Get one Deh
     * const deh = await prisma.deh.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DehFindUniqueArgs>(args: SelectSubset<T, DehFindUniqueArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deh that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DehFindUniqueOrThrowArgs} args - Arguments to find a Deh
     * @example
     * // Get one Deh
     * const deh = await prisma.deh.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DehFindUniqueOrThrowArgs>(args: SelectSubset<T, DehFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deh that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehFindFirstArgs} args - Arguments to find a Deh
     * @example
     * // Get one Deh
     * const deh = await prisma.deh.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DehFindFirstArgs>(args?: SelectSubset<T, DehFindFirstArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deh that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehFindFirstOrThrowArgs} args - Arguments to find a Deh
     * @example
     * // Get one Deh
     * const deh = await prisma.deh.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DehFindFirstOrThrowArgs>(args?: SelectSubset<T, DehFindFirstOrThrowArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dehs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dehs
     * const dehs = await prisma.deh.findMany()
     * 
     * // Get first 10 Dehs
     * const dehs = await prisma.deh.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dehWithIdOnly = await prisma.deh.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DehFindManyArgs>(args?: SelectSubset<T, DehFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deh.
     * @param {DehCreateArgs} args - Arguments to create a Deh.
     * @example
     * // Create one Deh
     * const Deh = await prisma.deh.create({
     *   data: {
     *     // ... data to create a Deh
     *   }
     * })
     * 
     */
    create<T extends DehCreateArgs>(args: SelectSubset<T, DehCreateArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dehs.
     * @param {DehCreateManyArgs} args - Arguments to create many Dehs.
     * @example
     * // Create many Dehs
     * const deh = await prisma.deh.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DehCreateManyArgs>(args?: SelectSubset<T, DehCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Deh.
     * @param {DehDeleteArgs} args - Arguments to delete one Deh.
     * @example
     * // Delete one Deh
     * const Deh = await prisma.deh.delete({
     *   where: {
     *     // ... filter to delete one Deh
     *   }
     * })
     * 
     */
    delete<T extends DehDeleteArgs>(args: SelectSubset<T, DehDeleteArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deh.
     * @param {DehUpdateArgs} args - Arguments to update one Deh.
     * @example
     * // Update one Deh
     * const deh = await prisma.deh.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DehUpdateArgs>(args: SelectSubset<T, DehUpdateArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dehs.
     * @param {DehDeleteManyArgs} args - Arguments to filter Dehs to delete.
     * @example
     * // Delete a few Dehs
     * const { count } = await prisma.deh.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DehDeleteManyArgs>(args?: SelectSubset<T, DehDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dehs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dehs
     * const deh = await prisma.deh.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DehUpdateManyArgs>(args: SelectSubset<T, DehUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deh.
     * @param {DehUpsertArgs} args - Arguments to update or create a Deh.
     * @example
     * // Update or create a Deh
     * const deh = await prisma.deh.upsert({
     *   create: {
     *     // ... data to create a Deh
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deh we want to update
     *   }
     * })
     */
    upsert<T extends DehUpsertArgs>(args: SelectSubset<T, DehUpsertArgs<ExtArgs>>): Prisma__DehClient<$Result.GetResult<Prisma.$DehPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dehs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehCountArgs} args - Arguments to filter Dehs to count.
     * @example
     * // Count the number of Dehs
     * const count = await prisma.deh.count({
     *   where: {
     *     // ... the filter for the Dehs we want to count
     *   }
     * })
    **/
    count<T extends DehCountArgs>(
      args?: Subset<T, DehCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DehCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DehAggregateArgs>(args: Subset<T, DehAggregateArgs>): Prisma.PrismaPromise<GetDehAggregateType<T>>

    /**
     * Group by Deh.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DehGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DehGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DehGroupByArgs['orderBy'] }
        : { orderBy?: DehGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DehGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDehGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deh model
   */
  readonly fields: DehFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deh.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DehClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taluka<T extends TalukaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TalukaDefaultArgs<ExtArgs>>): Prisma__TalukaClient<$Result.GetResult<Prisma.$TalukaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Case<T extends Deh$CaseArgs<ExtArgs> = {}>(args?: Subset<T, Deh$CaseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deh model
   */
  interface DehFieldRefs {
    readonly id: FieldRef<"Deh", 'String'>
    readonly name: FieldRef<"Deh", 'String'>
    readonly talukaId: FieldRef<"Deh", 'String'>
    readonly createdAt: FieldRef<"Deh", 'DateTime'>
    readonly updatedAt: FieldRef<"Deh", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deh findUnique
   */
  export type DehFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter, which Deh to fetch.
     */
    where: DehWhereUniqueInput
  }

  /**
   * Deh findUniqueOrThrow
   */
  export type DehFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter, which Deh to fetch.
     */
    where: DehWhereUniqueInput
  }

  /**
   * Deh findFirst
   */
  export type DehFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter, which Deh to fetch.
     */
    where?: DehWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dehs to fetch.
     */
    orderBy?: DehOrderByWithRelationInput | DehOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dehs.
     */
    cursor?: DehWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dehs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dehs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dehs.
     */
    distinct?: DehScalarFieldEnum | DehScalarFieldEnum[]
  }

  /**
   * Deh findFirstOrThrow
   */
  export type DehFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter, which Deh to fetch.
     */
    where?: DehWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dehs to fetch.
     */
    orderBy?: DehOrderByWithRelationInput | DehOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dehs.
     */
    cursor?: DehWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dehs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dehs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dehs.
     */
    distinct?: DehScalarFieldEnum | DehScalarFieldEnum[]
  }

  /**
   * Deh findMany
   */
  export type DehFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter, which Dehs to fetch.
     */
    where?: DehWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dehs to fetch.
     */
    orderBy?: DehOrderByWithRelationInput | DehOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dehs.
     */
    cursor?: DehWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dehs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dehs.
     */
    skip?: number
    distinct?: DehScalarFieldEnum | DehScalarFieldEnum[]
  }

  /**
   * Deh create
   */
  export type DehCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * The data needed to create a Deh.
     */
    data: XOR<DehCreateInput, DehUncheckedCreateInput>
  }

  /**
   * Deh createMany
   */
  export type DehCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dehs.
     */
    data: DehCreateManyInput | DehCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deh update
   */
  export type DehUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * The data needed to update a Deh.
     */
    data: XOR<DehUpdateInput, DehUncheckedUpdateInput>
    /**
     * Choose, which Deh to update.
     */
    where: DehWhereUniqueInput
  }

  /**
   * Deh updateMany
   */
  export type DehUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dehs.
     */
    data: XOR<DehUpdateManyMutationInput, DehUncheckedUpdateManyInput>
    /**
     * Filter which Dehs to update
     */
    where?: DehWhereInput
    /**
     * Limit how many Dehs to update.
     */
    limit?: number
  }

  /**
   * Deh upsert
   */
  export type DehUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * The filter to search for the Deh to update in case it exists.
     */
    where: DehWhereUniqueInput
    /**
     * In case the Deh found by the `where` argument doesn't exist, create a new Deh with this data.
     */
    create: XOR<DehCreateInput, DehUncheckedCreateInput>
    /**
     * In case the Deh was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DehUpdateInput, DehUncheckedUpdateInput>
  }

  /**
   * Deh delete
   */
  export type DehDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
    /**
     * Filter which Deh to delete.
     */
    where: DehWhereUniqueInput
  }

  /**
   * Deh deleteMany
   */
  export type DehDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dehs to delete
     */
    where?: DehWhereInput
    /**
     * Limit how many Dehs to delete.
     */
    limit?: number
  }

  /**
   * Deh.Case
   */
  export type Deh$CaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * Deh without action
   */
  export type DehDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deh
     */
    select?: DehSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deh
     */
    omit?: DehOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DehInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    designation: string | null
    contact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    designation: string | null
    contact: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    designation: number
    contact: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    designation?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    designation?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    designation?: true
    contact?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: string
    designation: string | null
    contact: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    designation?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userCases?: boolean | User$userCasesArgs<ExtArgs>
    assignedCases?: boolean | User$assignedCasesArgs<ExtArgs>
    forwardedCases?: boolean | User$forwardedCasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    designation?: boolean
    contact?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "designation" | "contact" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCases?: boolean | User$userCasesArgs<ExtArgs>
    assignedCases?: boolean | User$assignedCasesArgs<ExtArgs>
    forwardedCases?: boolean | User$forwardedCasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userCases: Prisma.$UserCasesPayload<ExtArgs>[]
      assignedCases: Prisma.$UserCasesPayload<ExtArgs>[]
      forwardedCases: Prisma.$CasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: string
      designation: string | null
      contact: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCases<T extends User$userCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$userCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedCases<T extends User$assignedCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forwardedCases<T extends User$forwardedCasesArgs<ExtArgs> = {}>(args?: Subset<T, User$forwardedCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userCases
   */
  export type User$userCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    where?: UserCasesWhereInput
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    cursor?: UserCasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * User.assignedCases
   */
  export type User$assignedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    where?: UserCasesWhereInput
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    cursor?: UserCasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * User.forwardedCases
   */
  export type User$forwardedCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Case
     */
    select?: CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Case
     */
    omit?: CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaseInclude<ExtArgs> | null
    where?: CaseWhereInput
    orderBy?: CaseOrderByWithRelationInput | CaseOrderByWithRelationInput[]
    cursor?: CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseScalarFieldEnum | CaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserCases
   */

  export type AggregateUserCases = {
    _count: UserCasesCountAggregateOutputType | null
    _min: UserCasesMinAggregateOutputType | null
    _max: UserCasesMaxAggregateOutputType | null
  }

  export type UserCasesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    caseId: string | null
    assignedToUserId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCasesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    caseId: string | null
    assignedToUserId: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCasesCountAggregateOutputType = {
    id: number
    userId: number
    caseId: number
    assignedToUserId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserCasesMinAggregateInputType = {
    id?: true
    userId?: true
    caseId?: true
    assignedToUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCasesMaxAggregateInputType = {
    id?: true
    userId?: true
    caseId?: true
    assignedToUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCasesCountAggregateInputType = {
    id?: true
    userId?: true
    caseId?: true
    assignedToUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserCasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCases to aggregate.
     */
    where?: UserCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCases to fetch.
     */
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCases
    **/
    _count?: true | UserCasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCasesMaxAggregateInputType
  }

  export type GetUserCasesAggregateType<T extends UserCasesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCases[P]>
      : GetScalarType<T[P], AggregateUserCases[P]>
  }




  export type UserCasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCasesWhereInput
    orderBy?: UserCasesOrderByWithAggregationInput | UserCasesOrderByWithAggregationInput[]
    by: UserCasesScalarFieldEnum[] | UserCasesScalarFieldEnum
    having?: UserCasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCasesCountAggregateInputType | true
    _min?: UserCasesMinAggregateInputType
    _max?: UserCasesMaxAggregateInputType
  }

  export type UserCasesGroupByOutputType = {
    id: string
    userId: string
    caseId: string
    assignedToUserId: string | null
    status: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: UserCasesCountAggregateOutputType | null
    _min: UserCasesMinAggregateOutputType | null
    _max: UserCasesMaxAggregateOutputType | null
  }

  type GetUserCasesGroupByPayload<T extends UserCasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCasesGroupByOutputType[P]>
            : GetScalarType<T[P], UserCasesGroupByOutputType[P]>
        }
      >
    >


  export type UserCasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    caseId?: boolean
    assignedToUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedToUser?: boolean | UserCases$assignedToUserArgs<ExtArgs>
  }, ExtArgs["result"]["userCases"]>



  export type UserCasesSelectScalar = {
    id?: boolean
    userId?: boolean
    caseId?: boolean
    assignedToUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserCasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "caseId" | "assignedToUserId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userCases"]>
  export type UserCasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    assignedToUser?: boolean | UserCases$assignedToUserArgs<ExtArgs>
  }

  export type $UserCasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCases"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      assignedToUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      caseId: string
      assignedToUserId: string | null
      status: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["userCases"]>
    composites: {}
  }

  type UserCasesGetPayload<S extends boolean | null | undefined | UserCasesDefaultArgs> = $Result.GetResult<Prisma.$UserCasesPayload, S>

  type UserCasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCasesCountAggregateInputType | true
    }

  export interface UserCasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCases'], meta: { name: 'UserCases' } }
    /**
     * Find zero or one UserCases that matches the filter.
     * @param {UserCasesFindUniqueArgs} args - Arguments to find a UserCases
     * @example
     * // Get one UserCases
     * const userCases = await prisma.userCases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCasesFindUniqueArgs>(args: SelectSubset<T, UserCasesFindUniqueArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCasesFindUniqueOrThrowArgs} args - Arguments to find a UserCases
     * @example
     * // Get one UserCases
     * const userCases = await prisma.userCases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCasesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesFindFirstArgs} args - Arguments to find a UserCases
     * @example
     * // Get one UserCases
     * const userCases = await prisma.userCases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCasesFindFirstArgs>(args?: SelectSubset<T, UserCasesFindFirstArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesFindFirstOrThrowArgs} args - Arguments to find a UserCases
     * @example
     * // Get one UserCases
     * const userCases = await prisma.userCases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCasesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCases
     * const userCases = await prisma.userCases.findMany()
     * 
     * // Get first 10 UserCases
     * const userCases = await prisma.userCases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCasesWithIdOnly = await prisma.userCases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCasesFindManyArgs>(args?: SelectSubset<T, UserCasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCases.
     * @param {UserCasesCreateArgs} args - Arguments to create a UserCases.
     * @example
     * // Create one UserCases
     * const UserCases = await prisma.userCases.create({
     *   data: {
     *     // ... data to create a UserCases
     *   }
     * })
     * 
     */
    create<T extends UserCasesCreateArgs>(args: SelectSubset<T, UserCasesCreateArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCases.
     * @param {UserCasesCreateManyArgs} args - Arguments to create many UserCases.
     * @example
     * // Create many UserCases
     * const userCases = await prisma.userCases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCasesCreateManyArgs>(args?: SelectSubset<T, UserCasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCases.
     * @param {UserCasesDeleteArgs} args - Arguments to delete one UserCases.
     * @example
     * // Delete one UserCases
     * const UserCases = await prisma.userCases.delete({
     *   where: {
     *     // ... filter to delete one UserCases
     *   }
     * })
     * 
     */
    delete<T extends UserCasesDeleteArgs>(args: SelectSubset<T, UserCasesDeleteArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCases.
     * @param {UserCasesUpdateArgs} args - Arguments to update one UserCases.
     * @example
     * // Update one UserCases
     * const userCases = await prisma.userCases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCasesUpdateArgs>(args: SelectSubset<T, UserCasesUpdateArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCases.
     * @param {UserCasesDeleteManyArgs} args - Arguments to filter UserCases to delete.
     * @example
     * // Delete a few UserCases
     * const { count } = await prisma.userCases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCasesDeleteManyArgs>(args?: SelectSubset<T, UserCasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCases
     * const userCases = await prisma.userCases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCasesUpdateManyArgs>(args: SelectSubset<T, UserCasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCases.
     * @param {UserCasesUpsertArgs} args - Arguments to update or create a UserCases.
     * @example
     * // Update or create a UserCases
     * const userCases = await prisma.userCases.upsert({
     *   create: {
     *     // ... data to create a UserCases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCases we want to update
     *   }
     * })
     */
    upsert<T extends UserCasesUpsertArgs>(args: SelectSubset<T, UserCasesUpsertArgs<ExtArgs>>): Prisma__UserCasesClient<$Result.GetResult<Prisma.$UserCasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesCountArgs} args - Arguments to filter UserCases to count.
     * @example
     * // Count the number of UserCases
     * const count = await prisma.userCases.count({
     *   where: {
     *     // ... the filter for the UserCases we want to count
     *   }
     * })
    **/
    count<T extends UserCasesCountArgs>(
      args?: Subset<T, UserCasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCasesAggregateArgs>(args: Subset<T, UserCasesAggregateArgs>): Prisma.PrismaPromise<GetUserCasesAggregateType<T>>

    /**
     * Group by UserCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCasesGroupByArgs['orderBy'] }
        : { orderBy?: UserCasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCases model
   */
  readonly fields: UserCasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedToUser<T extends UserCases$assignedToUserArgs<ExtArgs> = {}>(args?: Subset<T, UserCases$assignedToUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCases model
   */
  interface UserCasesFieldRefs {
    readonly id: FieldRef<"UserCases", 'String'>
    readonly userId: FieldRef<"UserCases", 'String'>
    readonly caseId: FieldRef<"UserCases", 'String'>
    readonly assignedToUserId: FieldRef<"UserCases", 'String'>
    readonly status: FieldRef<"UserCases", 'Boolean'>
    readonly createdAt: FieldRef<"UserCases", 'DateTime'>
    readonly updatedAt: FieldRef<"UserCases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCases findUnique
   */
  export type UserCasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter, which UserCases to fetch.
     */
    where: UserCasesWhereUniqueInput
  }

  /**
   * UserCases findUniqueOrThrow
   */
  export type UserCasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter, which UserCases to fetch.
     */
    where: UserCasesWhereUniqueInput
  }

  /**
   * UserCases findFirst
   */
  export type UserCasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter, which UserCases to fetch.
     */
    where?: UserCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCases to fetch.
     */
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCases.
     */
    cursor?: UserCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCases.
     */
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * UserCases findFirstOrThrow
   */
  export type UserCasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter, which UserCases to fetch.
     */
    where?: UserCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCases to fetch.
     */
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCases.
     */
    cursor?: UserCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCases.
     */
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * UserCases findMany
   */
  export type UserCasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter, which UserCases to fetch.
     */
    where?: UserCasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCases to fetch.
     */
    orderBy?: UserCasesOrderByWithRelationInput | UserCasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCases.
     */
    cursor?: UserCasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCases.
     */
    skip?: number
    distinct?: UserCasesScalarFieldEnum | UserCasesScalarFieldEnum[]
  }

  /**
   * UserCases create
   */
  export type UserCasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCases.
     */
    data: XOR<UserCasesCreateInput, UserCasesUncheckedCreateInput>
  }

  /**
   * UserCases createMany
   */
  export type UserCasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCases.
     */
    data: UserCasesCreateManyInput | UserCasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCases update
   */
  export type UserCasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCases.
     */
    data: XOR<UserCasesUpdateInput, UserCasesUncheckedUpdateInput>
    /**
     * Choose, which UserCases to update.
     */
    where: UserCasesWhereUniqueInput
  }

  /**
   * UserCases updateMany
   */
  export type UserCasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCases.
     */
    data: XOR<UserCasesUpdateManyMutationInput, UserCasesUncheckedUpdateManyInput>
    /**
     * Filter which UserCases to update
     */
    where?: UserCasesWhereInput
    /**
     * Limit how many UserCases to update.
     */
    limit?: number
  }

  /**
   * UserCases upsert
   */
  export type UserCasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCases to update in case it exists.
     */
    where: UserCasesWhereUniqueInput
    /**
     * In case the UserCases found by the `where` argument doesn't exist, create a new UserCases with this data.
     */
    create: XOR<UserCasesCreateInput, UserCasesUncheckedCreateInput>
    /**
     * In case the UserCases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCasesUpdateInput, UserCasesUncheckedUpdateInput>
  }

  /**
   * UserCases delete
   */
  export type UserCasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
    /**
     * Filter which UserCases to delete.
     */
    where: UserCasesWhereUniqueInput
  }

  /**
   * UserCases deleteMany
   */
  export type UserCasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCases to delete
     */
    where?: UserCasesWhereInput
    /**
     * Limit how many UserCases to delete.
     */
    limit?: number
  }

  /**
   * UserCases.assignedToUser
   */
  export type UserCases$assignedToUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserCases without action
   */
  export type UserCasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCases
     */
    select?: UserCasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCases
     */
    omit?: UserCasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCasesInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    caseId: string | null
    reportType: string | null
    forwardedByMukhiarkar: boolean | null
    forwardedByAC: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    caseId: string | null
    reportType: string | null
    forwardedByMukhiarkar: boolean | null
    forwardedByAC: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    caseId: number
    reportType: number
    forwardedByMukhiarkar: number
    forwardedByAC: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    caseId?: true
    reportType?: true
    forwardedByMukhiarkar?: true
    forwardedByAC?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    caseId?: true
    reportType?: true
    forwardedByMukhiarkar?: true
    forwardedByAC?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    caseId?: true
    reportType?: true
    forwardedByMukhiarkar?: true
    forwardedByAC?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    caseId: string
    reportType: string
    forwardedByMukhiarkar: boolean
    forwardedByAC: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caseId?: boolean
    reportType?: boolean
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    caseId?: boolean
    reportType?: boolean
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caseId" | "reportType" | "forwardedByMukhiarkar" | "forwardedByAC" | "createdAt" | "updatedAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    case?: boolean | CaseDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      case: Prisma.$CasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      caseId: string
      reportType: string
      forwardedByMukhiarkar: boolean
      forwardedByAC: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    case<T extends CaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CaseDefaultArgs<ExtArgs>>): Prisma__CaseClient<$Result.GetResult<Prisma.$CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly caseId: FieldRef<"Report", 'String'>
    readonly reportType: FieldRef<"Report", 'String'>
    readonly forwardedByMukhiarkar: FieldRef<"Report", 'Boolean'>
    readonly forwardedByAC: FieldRef<"Report", 'Boolean'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    level: string | null
    route: string | null
    message: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    level: string | null
    route: string | null
    message: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    timestamp: number
    level: number
    route: number
    message: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    timestamp?: true
    level?: true
    route?: true
    message?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    timestamp?: true
    level?: true
    route?: true
    message?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    timestamp?: true
    level?: true
    route?: true
    message?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    timestamp: Date
    level: string
    route: string
    message: string
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    level?: boolean
    route?: boolean
    message?: boolean
  }, ExtArgs["result"]["log"]>



  export type LogSelectScalar = {
    id?: boolean
    timestamp?: boolean
    level?: boolean
    route?: boolean
    message?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "level" | "route" | "message", ExtArgs["result"]["log"]>

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      level: string
      route: string
      message: string
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly level: FieldRef<"Log", 'String'>
    readonly route: FieldRef<"Log", 'String'>
    readonly message: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CaseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    caseType: 'caseType',
    status: 'status',
    priority: 'priority',
    dateOfInstitution: 'dateOfInstitution',
    orderOfDate: 'orderOfDate',
    nextDate: 'nextDate',
    location: 'location',
    talukaId: 'talukaId',
    dehId: 'dehId',
    description: 'description',
    mukhtiarkarACReportUploaded: 'mukhtiarkarACReportUploaded',
    mukhtiarkarACReportPath: 'mukhtiarkarACReportPath',
    evacueePropertyReportUploaded: 'evacueePropertyReportUploaded',
    evacueePropertyReportPath: 'evacueePropertyReportPath',
    barrageBranchReportUploaded: 'barrageBranchReportUploaded',
    barrageBranchReportPath: 'barrageBranchReportPath',
    newspaperPublicationUploaded: 'newspaperPublicationUploaded',
    newspaperPublicationPath: 'newspaperPublicationPath',
    forwardedToMukhtiarkarId: 'forwardedToMukhtiarkarId',
    forwardedByName: 'forwardedByName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaseScalarFieldEnum = (typeof CaseScalarFieldEnum)[keyof typeof CaseScalarFieldEnum]


  export const MemosScalarFieldEnum: {
    id: 'id',
    code: 'code',
    filePath: 'filePath',
    description: 'description',
    dateCollected: 'dateCollected',
    caseId: 'caseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemosScalarFieldEnum = (typeof MemosScalarFieldEnum)[keyof typeof MemosScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    content: 'content',
    noteAddedOn: 'noteAddedOn',
    caseId: 'caseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const CaseTypesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CaseTypesScalarFieldEnum = (typeof CaseTypesScalarFieldEnum)[keyof typeof CaseTypesScalarFieldEnum]


  export const TalukaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TalukaScalarFieldEnum = (typeof TalukaScalarFieldEnum)[keyof typeof TalukaScalarFieldEnum]


  export const DehScalarFieldEnum: {
    id: 'id',
    name: 'name',
    talukaId: 'talukaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DehScalarFieldEnum = (typeof DehScalarFieldEnum)[keyof typeof DehScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    designation: 'designation',
    contact: 'contact',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCasesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    caseId: 'caseId',
    assignedToUserId: 'assignedToUserId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserCasesScalarFieldEnum = (typeof UserCasesScalarFieldEnum)[keyof typeof UserCasesScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    reportType: 'reportType',
    forwardedByMukhiarkar: 'forwardedByMukhiarkar',
    forwardedByAC: 'forwardedByAC',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    level: 'level',
    route: 'route',
    message: 'message'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CaseOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    caseType: 'caseType',
    status: 'status',
    priority: 'priority',
    location: 'location',
    talukaId: 'talukaId',
    dehId: 'dehId',
    description: 'description',
    mukhtiarkarACReportPath: 'mukhtiarkarACReportPath',
    evacueePropertyReportPath: 'evacueePropertyReportPath',
    barrageBranchReportPath: 'barrageBranchReportPath',
    newspaperPublicationPath: 'newspaperPublicationPath',
    forwardedToMukhtiarkarId: 'forwardedToMukhtiarkarId',
    forwardedByName: 'forwardedByName'
  };

  export type CaseOrderByRelevanceFieldEnum = (typeof CaseOrderByRelevanceFieldEnum)[keyof typeof CaseOrderByRelevanceFieldEnum]


  export const MemosOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    filePath: 'filePath',
    description: 'description',
    caseId: 'caseId'
  };

  export type MemosOrderByRelevanceFieldEnum = (typeof MemosOrderByRelevanceFieldEnum)[keyof typeof MemosOrderByRelevanceFieldEnum]


  export const NotesOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    content: 'content',
    caseId: 'caseId'
  };

  export type NotesOrderByRelevanceFieldEnum = (typeof NotesOrderByRelevanceFieldEnum)[keyof typeof NotesOrderByRelevanceFieldEnum]


  export const CaseTypesOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type CaseTypesOrderByRelevanceFieldEnum = (typeof CaseTypesOrderByRelevanceFieldEnum)[keyof typeof CaseTypesOrderByRelevanceFieldEnum]


  export const TalukaOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TalukaOrderByRelevanceFieldEnum = (typeof TalukaOrderByRelevanceFieldEnum)[keyof typeof TalukaOrderByRelevanceFieldEnum]


  export const DehOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    talukaId: 'talukaId'
  };

  export type DehOrderByRelevanceFieldEnum = (typeof DehOrderByRelevanceFieldEnum)[keyof typeof DehOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    designation: 'designation',
    contact: 'contact'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserCasesOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    caseId: 'caseId',
    assignedToUserId: 'assignedToUserId'
  };

  export type UserCasesOrderByRelevanceFieldEnum = (typeof UserCasesOrderByRelevanceFieldEnum)[keyof typeof UserCasesOrderByRelevanceFieldEnum]


  export const ReportOrderByRelevanceFieldEnum: {
    id: 'id',
    caseId: 'caseId',
    reportType: 'reportType'
  };

  export type ReportOrderByRelevanceFieldEnum = (typeof ReportOrderByRelevanceFieldEnum)[keyof typeof ReportOrderByRelevanceFieldEnum]


  export const LogOrderByRelevanceFieldEnum: {
    id: 'id',
    level: 'level',
    route: 'route',
    message: 'message'
  };

  export type LogOrderByRelevanceFieldEnum = (typeof LogOrderByRelevanceFieldEnum)[keyof typeof LogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type CaseWhereInput = {
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    id?: StringFilter<"Case"> | string
    code?: StringFilter<"Case"> | string
    title?: StringNullableFilter<"Case"> | string | null
    caseType?: StringNullableFilter<"Case"> | string | null
    status?: StringNullableFilter<"Case"> | string | null
    priority?: StringNullableFilter<"Case"> | string | null
    dateOfInstitution?: DateTimeNullableFilter<"Case"> | Date | string | null
    orderOfDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    location?: StringNullableFilter<"Case"> | string | null
    talukaId?: StringNullableFilter<"Case"> | string | null
    dehId?: StringNullableFilter<"Case"> | string | null
    description?: StringNullableFilter<"Case"> | string | null
    mukhtiarkarACReportUploaded?: BoolFilter<"Case"> | boolean
    mukhtiarkarACReportPath?: StringNullableFilter<"Case"> | string | null
    evacueePropertyReportUploaded?: BoolFilter<"Case"> | boolean
    evacueePropertyReportPath?: StringNullableFilter<"Case"> | string | null
    barrageBranchReportUploaded?: BoolFilter<"Case"> | boolean
    barrageBranchReportPath?: StringNullableFilter<"Case"> | string | null
    newspaperPublicationUploaded?: BoolFilter<"Case"> | boolean
    newspaperPublicationPath?: StringNullableFilter<"Case"> | string | null
    forwardedToMukhtiarkarId?: StringNullableFilter<"Case"> | string | null
    forwardedByName?: StringNullableFilter<"Case"> | string | null
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Case"> | Date | string | null
    taluka?: XOR<TalukaNullableScalarRelationFilter, TalukaWhereInput> | null
    deh?: XOR<DehNullableScalarRelationFilter, DehWhereInput> | null
    forwardedToMukhtiarkar?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reports?: ReportListRelationFilter
    memos?: MemosListRelationFilter
    notes?: NotesListRelationFilter
    userCases?: UserCasesListRelationFilter
  }

  export type CaseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    caseType?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    dateOfInstitution?: SortOrderInput | SortOrder
    orderOfDate?: SortOrderInput | SortOrder
    nextDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    talukaId?: SortOrderInput | SortOrder
    dehId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    mukhtiarkarACReportUploaded?: SortOrder
    mukhtiarkarACReportPath?: SortOrderInput | SortOrder
    evacueePropertyReportUploaded?: SortOrder
    evacueePropertyReportPath?: SortOrderInput | SortOrder
    barrageBranchReportUploaded?: SortOrder
    barrageBranchReportPath?: SortOrderInput | SortOrder
    newspaperPublicationUploaded?: SortOrder
    newspaperPublicationPath?: SortOrderInput | SortOrder
    forwardedToMukhtiarkarId?: SortOrderInput | SortOrder
    forwardedByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    taluka?: TalukaOrderByWithRelationInput
    deh?: DehOrderByWithRelationInput
    forwardedToMukhtiarkar?: UserOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
    memos?: MemosOrderByRelationAggregateInput
    notes?: NotesOrderByRelationAggregateInput
    userCases?: UserCasesOrderByRelationAggregateInput
    _relevance?: CaseOrderByRelevanceInput
  }

  export type CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseWhereInput | CaseWhereInput[]
    OR?: CaseWhereInput[]
    NOT?: CaseWhereInput | CaseWhereInput[]
    code?: StringFilter<"Case"> | string
    title?: StringNullableFilter<"Case"> | string | null
    caseType?: StringNullableFilter<"Case"> | string | null
    status?: StringNullableFilter<"Case"> | string | null
    priority?: StringNullableFilter<"Case"> | string | null
    dateOfInstitution?: DateTimeNullableFilter<"Case"> | Date | string | null
    orderOfDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    location?: StringNullableFilter<"Case"> | string | null
    talukaId?: StringNullableFilter<"Case"> | string | null
    dehId?: StringNullableFilter<"Case"> | string | null
    description?: StringNullableFilter<"Case"> | string | null
    mukhtiarkarACReportUploaded?: BoolFilter<"Case"> | boolean
    mukhtiarkarACReportPath?: StringNullableFilter<"Case"> | string | null
    evacueePropertyReportUploaded?: BoolFilter<"Case"> | boolean
    evacueePropertyReportPath?: StringNullableFilter<"Case"> | string | null
    barrageBranchReportUploaded?: BoolFilter<"Case"> | boolean
    barrageBranchReportPath?: StringNullableFilter<"Case"> | string | null
    newspaperPublicationUploaded?: BoolFilter<"Case"> | boolean
    newspaperPublicationPath?: StringNullableFilter<"Case"> | string | null
    forwardedToMukhtiarkarId?: StringNullableFilter<"Case"> | string | null
    forwardedByName?: StringNullableFilter<"Case"> | string | null
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Case"> | Date | string | null
    taluka?: XOR<TalukaNullableScalarRelationFilter, TalukaWhereInput> | null
    deh?: XOR<DehNullableScalarRelationFilter, DehWhereInput> | null
    forwardedToMukhtiarkar?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reports?: ReportListRelationFilter
    memos?: MemosListRelationFilter
    notes?: NotesListRelationFilter
    userCases?: UserCasesListRelationFilter
  }, "id">

  export type CaseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    caseType?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    priority?: SortOrderInput | SortOrder
    dateOfInstitution?: SortOrderInput | SortOrder
    orderOfDate?: SortOrderInput | SortOrder
    nextDate?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    talukaId?: SortOrderInput | SortOrder
    dehId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    mukhtiarkarACReportUploaded?: SortOrder
    mukhtiarkarACReportPath?: SortOrderInput | SortOrder
    evacueePropertyReportUploaded?: SortOrder
    evacueePropertyReportPath?: SortOrderInput | SortOrder
    barrageBranchReportUploaded?: SortOrder
    barrageBranchReportPath?: SortOrderInput | SortOrder
    newspaperPublicationUploaded?: SortOrder
    newspaperPublicationPath?: SortOrderInput | SortOrder
    forwardedToMukhtiarkarId?: SortOrderInput | SortOrder
    forwardedByName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: CaseCountOrderByAggregateInput
    _max?: CaseMaxOrderByAggregateInput
    _min?: CaseMinOrderByAggregateInput
  }

  export type CaseScalarWhereWithAggregatesInput = {
    AND?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    OR?: CaseScalarWhereWithAggregatesInput[]
    NOT?: CaseScalarWhereWithAggregatesInput | CaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Case"> | string
    code?: StringWithAggregatesFilter<"Case"> | string
    title?: StringNullableWithAggregatesFilter<"Case"> | string | null
    caseType?: StringNullableWithAggregatesFilter<"Case"> | string | null
    status?: StringNullableWithAggregatesFilter<"Case"> | string | null
    priority?: StringNullableWithAggregatesFilter<"Case"> | string | null
    dateOfInstitution?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    orderOfDate?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    nextDate?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Case"> | string | null
    talukaId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    dehId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    description?: StringNullableWithAggregatesFilter<"Case"> | string | null
    mukhtiarkarACReportUploaded?: BoolWithAggregatesFilter<"Case"> | boolean
    mukhtiarkarACReportPath?: StringNullableWithAggregatesFilter<"Case"> | string | null
    evacueePropertyReportUploaded?: BoolWithAggregatesFilter<"Case"> | boolean
    evacueePropertyReportPath?: StringNullableWithAggregatesFilter<"Case"> | string | null
    barrageBranchReportUploaded?: BoolWithAggregatesFilter<"Case"> | boolean
    barrageBranchReportPath?: StringNullableWithAggregatesFilter<"Case"> | string | null
    newspaperPublicationUploaded?: BoolWithAggregatesFilter<"Case"> | boolean
    newspaperPublicationPath?: StringNullableWithAggregatesFilter<"Case"> | string | null
    forwardedToMukhtiarkarId?: StringNullableWithAggregatesFilter<"Case"> | string | null
    forwardedByName?: StringNullableWithAggregatesFilter<"Case"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Case"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Case"> | Date | string | null
  }

  export type MemosWhereInput = {
    AND?: MemosWhereInput | MemosWhereInput[]
    OR?: MemosWhereInput[]
    NOT?: MemosWhereInput | MemosWhereInput[]
    id?: StringFilter<"Memos"> | string
    code?: StringFilter<"Memos"> | string
    filePath?: StringNullableFilter<"Memos"> | string | null
    description?: StringNullableFilter<"Memos"> | string | null
    dateCollected?: DateTimeFilter<"Memos"> | Date | string
    caseId?: StringFilter<"Memos"> | string
    createdAt?: DateTimeFilter<"Memos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Memos"> | Date | string | null
    Case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type MemosOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    filePath?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dateCollected?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Case?: CaseOrderByWithRelationInput
    _relevance?: MemosOrderByRelevanceInput
  }

  export type MemosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemosWhereInput | MemosWhereInput[]
    OR?: MemosWhereInput[]
    NOT?: MemosWhereInput | MemosWhereInput[]
    code?: StringFilter<"Memos"> | string
    filePath?: StringNullableFilter<"Memos"> | string | null
    description?: StringNullableFilter<"Memos"> | string | null
    dateCollected?: DateTimeFilter<"Memos"> | Date | string
    caseId?: StringFilter<"Memos"> | string
    createdAt?: DateTimeFilter<"Memos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Memos"> | Date | string | null
    Case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type MemosOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    filePath?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    dateCollected?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MemosCountOrderByAggregateInput
    _max?: MemosMaxOrderByAggregateInput
    _min?: MemosMinOrderByAggregateInput
  }

  export type MemosScalarWhereWithAggregatesInput = {
    AND?: MemosScalarWhereWithAggregatesInput | MemosScalarWhereWithAggregatesInput[]
    OR?: MemosScalarWhereWithAggregatesInput[]
    NOT?: MemosScalarWhereWithAggregatesInput | MemosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Memos"> | string
    code?: StringWithAggregatesFilter<"Memos"> | string
    filePath?: StringNullableWithAggregatesFilter<"Memos"> | string | null
    description?: StringNullableWithAggregatesFilter<"Memos"> | string | null
    dateCollected?: DateTimeWithAggregatesFilter<"Memos"> | Date | string
    caseId?: StringWithAggregatesFilter<"Memos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Memos"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Memos"> | Date | string | null
  }

  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: StringFilter<"Notes"> | string
    code?: StringFilter<"Notes"> | string
    title?: StringNullableFilter<"Notes"> | string | null
    content?: StringNullableFilter<"Notes"> | string | null
    noteAddedOn?: DateTimeFilter<"Notes"> | Date | string
    caseId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Notes"> | Date | string | null
    Case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    noteAddedOn?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Case?: CaseOrderByWithRelationInput
    _relevance?: NotesOrderByRelevanceInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    code?: StringFilter<"Notes"> | string
    title?: StringNullableFilter<"Notes"> | string | null
    content?: StringNullableFilter<"Notes"> | string | null
    noteAddedOn?: DateTimeFilter<"Notes"> | Date | string
    caseId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Notes"> | Date | string | null
    Case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    noteAddedOn?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: NotesCountOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notes"> | string
    code?: StringWithAggregatesFilter<"Notes"> | string
    title?: StringNullableWithAggregatesFilter<"Notes"> | string | null
    content?: StringNullableWithAggregatesFilter<"Notes"> | string | null
    noteAddedOn?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    caseId?: StringWithAggregatesFilter<"Notes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Notes"> | Date | string | null
  }

  export type CaseTypesWhereInput = {
    AND?: CaseTypesWhereInput | CaseTypesWhereInput[]
    OR?: CaseTypesWhereInput[]
    NOT?: CaseTypesWhereInput | CaseTypesWhereInput[]
    id?: StringFilter<"CaseTypes"> | string
    code?: StringNullableFilter<"CaseTypes"> | string | null
    name?: StringNullableFilter<"CaseTypes"> | string | null
  }

  export type CaseTypesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: CaseTypesOrderByRelevanceInput
  }

  export type CaseTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CaseTypesWhereInput | CaseTypesWhereInput[]
    OR?: CaseTypesWhereInput[]
    NOT?: CaseTypesWhereInput | CaseTypesWhereInput[]
    code?: StringNullableFilter<"CaseTypes"> | string | null
    name?: StringNullableFilter<"CaseTypes"> | string | null
  }, "id">

  export type CaseTypesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: CaseTypesCountOrderByAggregateInput
    _max?: CaseTypesMaxOrderByAggregateInput
    _min?: CaseTypesMinOrderByAggregateInput
  }

  export type CaseTypesScalarWhereWithAggregatesInput = {
    AND?: CaseTypesScalarWhereWithAggregatesInput | CaseTypesScalarWhereWithAggregatesInput[]
    OR?: CaseTypesScalarWhereWithAggregatesInput[]
    NOT?: CaseTypesScalarWhereWithAggregatesInput | CaseTypesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CaseTypes"> | string
    code?: StringNullableWithAggregatesFilter<"CaseTypes"> | string | null
    name?: StringNullableWithAggregatesFilter<"CaseTypes"> | string | null
  }

  export type TalukaWhereInput = {
    AND?: TalukaWhereInput | TalukaWhereInput[]
    OR?: TalukaWhereInput[]
    NOT?: TalukaWhereInput | TalukaWhereInput[]
    id?: StringFilter<"Taluka"> | string
    name?: StringFilter<"Taluka"> | string
    createdAt?: DateTimeFilter<"Taluka"> | Date | string
    updatedAt?: DateTimeFilter<"Taluka"> | Date | string
    dehs?: DehListRelationFilter
    Case?: CaseListRelationFilter
  }

  export type TalukaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dehs?: DehOrderByRelationAggregateInput
    Case?: CaseOrderByRelationAggregateInput
    _relevance?: TalukaOrderByRelevanceInput
  }

  export type TalukaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TalukaWhereInput | TalukaWhereInput[]
    OR?: TalukaWhereInput[]
    NOT?: TalukaWhereInput | TalukaWhereInput[]
    createdAt?: DateTimeFilter<"Taluka"> | Date | string
    updatedAt?: DateTimeFilter<"Taluka"> | Date | string
    dehs?: DehListRelationFilter
    Case?: CaseListRelationFilter
  }, "id" | "name">

  export type TalukaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TalukaCountOrderByAggregateInput
    _max?: TalukaMaxOrderByAggregateInput
    _min?: TalukaMinOrderByAggregateInput
  }

  export type TalukaScalarWhereWithAggregatesInput = {
    AND?: TalukaScalarWhereWithAggregatesInput | TalukaScalarWhereWithAggregatesInput[]
    OR?: TalukaScalarWhereWithAggregatesInput[]
    NOT?: TalukaScalarWhereWithAggregatesInput | TalukaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Taluka"> | string
    name?: StringWithAggregatesFilter<"Taluka"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Taluka"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Taluka"> | Date | string
  }

  export type DehWhereInput = {
    AND?: DehWhereInput | DehWhereInput[]
    OR?: DehWhereInput[]
    NOT?: DehWhereInput | DehWhereInput[]
    id?: StringFilter<"Deh"> | string
    name?: StringFilter<"Deh"> | string
    talukaId?: StringFilter<"Deh"> | string
    createdAt?: DateTimeFilter<"Deh"> | Date | string
    updatedAt?: DateTimeFilter<"Deh"> | Date | string
    taluka?: XOR<TalukaScalarRelationFilter, TalukaWhereInput>
    Case?: CaseListRelationFilter
  }

  export type DehOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    talukaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taluka?: TalukaOrderByWithRelationInput
    Case?: CaseOrderByRelationAggregateInput
    _relevance?: DehOrderByRelevanceInput
  }

  export type DehWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_talukaId?: DehNameTalukaIdCompoundUniqueInput
    AND?: DehWhereInput | DehWhereInput[]
    OR?: DehWhereInput[]
    NOT?: DehWhereInput | DehWhereInput[]
    name?: StringFilter<"Deh"> | string
    talukaId?: StringFilter<"Deh"> | string
    createdAt?: DateTimeFilter<"Deh"> | Date | string
    updatedAt?: DateTimeFilter<"Deh"> | Date | string
    taluka?: XOR<TalukaScalarRelationFilter, TalukaWhereInput>
    Case?: CaseListRelationFilter
  }, "id" | "name_talukaId">

  export type DehOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    talukaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DehCountOrderByAggregateInput
    _max?: DehMaxOrderByAggregateInput
    _min?: DehMinOrderByAggregateInput
  }

  export type DehScalarWhereWithAggregatesInput = {
    AND?: DehScalarWhereWithAggregatesInput | DehScalarWhereWithAggregatesInput[]
    OR?: DehScalarWhereWithAggregatesInput[]
    NOT?: DehScalarWhereWithAggregatesInput | DehScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deh"> | string
    name?: StringWithAggregatesFilter<"Deh"> | string
    talukaId?: StringWithAggregatesFilter<"Deh"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Deh"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deh"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    designation?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    userCases?: UserCasesListRelationFilter
    assignedCases?: UserCasesListRelationFilter
    forwardedCases?: CaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    designation?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    userCases?: UserCasesOrderByRelationAggregateInput
    assignedCases?: UserCasesOrderByRelationAggregateInput
    forwardedCases?: CaseOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    designation?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    userCases?: UserCasesListRelationFilter
    assignedCases?: UserCasesListRelationFilter
    forwardedCases?: CaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    designation?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    designation?: StringNullableWithAggregatesFilter<"User"> | string | null
    contact?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserCasesWhereInput = {
    AND?: UserCasesWhereInput | UserCasesWhereInput[]
    OR?: UserCasesWhereInput[]
    NOT?: UserCasesWhereInput | UserCasesWhereInput[]
    id?: StringFilter<"UserCases"> | string
    userId?: StringFilter<"UserCases"> | string
    caseId?: StringFilter<"UserCases"> | string
    assignedToUserId?: StringNullableFilter<"UserCases"> | string | null
    status?: BoolFilter<"UserCases"> | boolean
    createdAt?: DateTimeFilter<"UserCases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserCases"> | Date | string | null
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type UserCasesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
    assignedToUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    case?: CaseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    assignedToUser?: UserOrderByWithRelationInput
    _relevance?: UserCasesOrderByRelevanceInput
  }

  export type UserCasesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCasesWhereInput | UserCasesWhereInput[]
    OR?: UserCasesWhereInput[]
    NOT?: UserCasesWhereInput | UserCasesWhereInput[]
    userId?: StringFilter<"UserCases"> | string
    caseId?: StringFilter<"UserCases"> | string
    assignedToUserId?: StringNullableFilter<"UserCases"> | string | null
    status?: BoolFilter<"UserCases"> | boolean
    createdAt?: DateTimeFilter<"UserCases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserCases"> | Date | string | null
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedToUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserCasesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
    assignedToUserId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCasesCountOrderByAggregateInput
    _max?: UserCasesMaxOrderByAggregateInput
    _min?: UserCasesMinOrderByAggregateInput
  }

  export type UserCasesScalarWhereWithAggregatesInput = {
    AND?: UserCasesScalarWhereWithAggregatesInput | UserCasesScalarWhereWithAggregatesInput[]
    OR?: UserCasesScalarWhereWithAggregatesInput[]
    NOT?: UserCasesScalarWhereWithAggregatesInput | UserCasesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCases"> | string
    userId?: StringWithAggregatesFilter<"UserCases"> | string
    caseId?: StringWithAggregatesFilter<"UserCases"> | string
    assignedToUserId?: StringNullableWithAggregatesFilter<"UserCases"> | string | null
    status?: BoolWithAggregatesFilter<"UserCases"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserCases"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserCases"> | Date | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    caseId?: StringFilter<"Report"> | string
    reportType?: StringFilter<"Report"> | string
    forwardedByMukhiarkar?: BoolFilter<"Report"> | boolean
    forwardedByAC?: BoolFilter<"Report"> | boolean
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    caseId?: SortOrder
    reportType?: SortOrder
    forwardedByMukhiarkar?: SortOrder
    forwardedByAC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    case?: CaseOrderByWithRelationInput
    _relevance?: ReportOrderByRelevanceInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    caseId?: StringFilter<"Report"> | string
    reportType?: StringFilter<"Report"> | string
    forwardedByMukhiarkar?: BoolFilter<"Report"> | boolean
    forwardedByAC?: BoolFilter<"Report"> | boolean
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
    case?: XOR<CaseScalarRelationFilter, CaseWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    caseId?: SortOrder
    reportType?: SortOrder
    forwardedByMukhiarkar?: SortOrder
    forwardedByAC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    caseId?: StringWithAggregatesFilter<"Report"> | string
    reportType?: StringWithAggregatesFilter<"Report"> | string
    forwardedByMukhiarkar?: BoolWithAggregatesFilter<"Report"> | boolean
    forwardedByAC?: BoolWithAggregatesFilter<"Report"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    level?: StringFilter<"Log"> | string
    route?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    level?: SortOrder
    route?: SortOrder
    message?: SortOrder
    _relevance?: LogOrderByRelevanceInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    timestamp?: DateTimeFilter<"Log"> | Date | string
    level?: StringFilter<"Log"> | string
    route?: StringFilter<"Log"> | string
    message?: StringFilter<"Log"> | string
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    level?: SortOrder
    route?: SortOrder
    message?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    level?: StringWithAggregatesFilter<"Log"> | string
    route?: StringWithAggregatesFilter<"Log"> | string
    message?: StringWithAggregatesFilter<"Log"> | string
  }

  export type CaseCreateInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateManyInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemosCreateInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Case: CaseCreateNestedOneWithoutMemosInput
  }

  export type MemosUncheckedCreateInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Case?: CaseUpdateOneRequiredWithoutMemosNestedInput
  }

  export type MemosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemosCreateManyInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesCreateInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Case: CaseCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Case?: CaseUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesCreateManyInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CaseTypesCreateInput = {
    id?: string
    code?: string | null
    name?: string | null
  }

  export type CaseTypesUncheckedCreateInput = {
    id?: string
    code?: string | null
    name?: string | null
  }

  export type CaseTypesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseTypesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseTypesCreateManyInput = {
    id?: string
    code?: string | null
    name?: string | null
  }

  export type CaseTypesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseTypesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TalukaCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dehs?: DehCreateNestedManyWithoutTalukaInput
    Case?: CaseCreateNestedManyWithoutTalukaInput
  }

  export type TalukaUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dehs?: DehUncheckedCreateNestedManyWithoutTalukaInput
    Case?: CaseUncheckedCreateNestedManyWithoutTalukaInput
  }

  export type TalukaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dehs?: DehUpdateManyWithoutTalukaNestedInput
    Case?: CaseUpdateManyWithoutTalukaNestedInput
  }

  export type TalukaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dehs?: DehUncheckedUpdateManyWithoutTalukaNestedInput
    Case?: CaseUncheckedUpdateManyWithoutTalukaNestedInput
  }

  export type TalukaCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TalukaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TalukaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DehCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taluka: TalukaCreateNestedOneWithoutDehsInput
    Case?: CaseCreateNestedManyWithoutDehInput
  }

  export type DehUncheckedCreateInput = {
    id?: string
    name: string
    talukaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Case?: CaseUncheckedCreateNestedManyWithoutDehInput
  }

  export type DehUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taluka?: TalukaUpdateOneRequiredWithoutDehsNestedInput
    Case?: CaseUpdateManyWithoutDehNestedInput
  }

  export type DehUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    talukaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Case?: CaseUncheckedUpdateManyWithoutDehNestedInput
  }

  export type DehCreateManyInput = {
    id?: string
    name: string
    talukaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DehUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DehUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    talukaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesCreateNestedManyWithoutUserInput
    assignedCases?: UserCasesCreateNestedManyWithoutAssignedToUserInput
    forwardedCases?: CaseCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesUncheckedCreateNestedManyWithoutUserInput
    assignedCases?: UserCasesUncheckedCreateNestedManyWithoutAssignedToUserInput
    forwardedCases?: CaseUncheckedCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUpdateManyWithoutUserNestedInput
    assignedCases?: UserCasesUpdateManyWithoutAssignedToUserNestedInput
    forwardedCases?: CaseUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUncheckedUpdateManyWithoutUserNestedInput
    assignedCases?: UserCasesUncheckedUpdateManyWithoutAssignedToUserNestedInput
    forwardedCases?: CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesCreateInput = {
    id?: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    case: CaseCreateNestedOneWithoutUserCasesInput
    user: UserCreateNestedOneWithoutUserCasesInput
    assignedToUser?: UserCreateNestedOneWithoutAssignedCasesInput
  }

  export type UserCasesUncheckedCreateInput = {
    id?: string
    userId: string
    caseId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case?: CaseUpdateOneRequiredWithoutUserCasesNestedInput
    user?: UserUpdateOneRequiredWithoutUserCasesNestedInput
    assignedToUser?: UserUpdateOneWithoutAssignedCasesNestedInput
  }

  export type UserCasesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesCreateManyInput = {
    id?: string
    userId: string
    caseId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCreateInput = {
    id?: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    case: CaseCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    caseId: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    case?: CaseUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    caseId: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateInput = {
    id?: string
    timestamp?: Date | string
    level: string
    route: string
    message: string
  }

  export type LogUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    level: string
    route: string
    message: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    timestamp?: Date | string
    level: string
    route: string
    message: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    level?: StringFieldUpdateOperationsInput | string
    route?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TalukaNullableScalarRelationFilter = {
    is?: TalukaWhereInput | null
    isNot?: TalukaWhereInput | null
  }

  export type DehNullableScalarRelationFilter = {
    is?: DehWhereInput | null
    isNot?: DehWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type MemosListRelationFilter = {
    every?: MemosWhereInput
    some?: MemosWhereInput
    none?: MemosWhereInput
  }

  export type NotesListRelationFilter = {
    every?: NotesWhereInput
    some?: NotesWhereInput
    none?: NotesWhereInput
  }

  export type UserCasesListRelationFilter = {
    every?: UserCasesWhereInput
    some?: UserCasesWhereInput
    none?: UserCasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseOrderByRelevanceInput = {
    fields: CaseOrderByRelevanceFieldEnum | CaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CaseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    caseType?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dateOfInstitution?: SortOrder
    orderOfDate?: SortOrder
    nextDate?: SortOrder
    location?: SortOrder
    talukaId?: SortOrder
    dehId?: SortOrder
    description?: SortOrder
    mukhtiarkarACReportUploaded?: SortOrder
    mukhtiarkarACReportPath?: SortOrder
    evacueePropertyReportUploaded?: SortOrder
    evacueePropertyReportPath?: SortOrder
    barrageBranchReportUploaded?: SortOrder
    barrageBranchReportPath?: SortOrder
    newspaperPublicationUploaded?: SortOrder
    newspaperPublicationPath?: SortOrder
    forwardedToMukhtiarkarId?: SortOrder
    forwardedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    caseType?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dateOfInstitution?: SortOrder
    orderOfDate?: SortOrder
    nextDate?: SortOrder
    location?: SortOrder
    talukaId?: SortOrder
    dehId?: SortOrder
    description?: SortOrder
    mukhtiarkarACReportUploaded?: SortOrder
    mukhtiarkarACReportPath?: SortOrder
    evacueePropertyReportUploaded?: SortOrder
    evacueePropertyReportPath?: SortOrder
    barrageBranchReportUploaded?: SortOrder
    barrageBranchReportPath?: SortOrder
    newspaperPublicationUploaded?: SortOrder
    newspaperPublicationPath?: SortOrder
    forwardedToMukhtiarkarId?: SortOrder
    forwardedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    caseType?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    dateOfInstitution?: SortOrder
    orderOfDate?: SortOrder
    nextDate?: SortOrder
    location?: SortOrder
    talukaId?: SortOrder
    dehId?: SortOrder
    description?: SortOrder
    mukhtiarkarACReportUploaded?: SortOrder
    mukhtiarkarACReportPath?: SortOrder
    evacueePropertyReportUploaded?: SortOrder
    evacueePropertyReportPath?: SortOrder
    barrageBranchReportUploaded?: SortOrder
    barrageBranchReportPath?: SortOrder
    newspaperPublicationUploaded?: SortOrder
    newspaperPublicationPath?: SortOrder
    forwardedToMukhtiarkarId?: SortOrder
    forwardedByName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CaseScalarRelationFilter = {
    is?: CaseWhereInput
    isNot?: CaseWhereInput
  }

  export type MemosOrderByRelevanceInput = {
    fields: MemosOrderByRelevanceFieldEnum | MemosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemosCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    filePath?: SortOrder
    description?: SortOrder
    dateCollected?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemosMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    filePath?: SortOrder
    description?: SortOrder
    dateCollected?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemosMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    filePath?: SortOrder
    description?: SortOrder
    dateCollected?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesOrderByRelevanceInput = {
    fields: NotesOrderByRelevanceFieldEnum | NotesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    noteAddedOn?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    noteAddedOn?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    noteAddedOn?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaseTypesOrderByRelevanceInput = {
    fields: CaseTypesOrderByRelevanceFieldEnum | CaseTypesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CaseTypesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CaseTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type CaseTypesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type DehListRelationFilter = {
    every?: DehWhereInput
    some?: DehWhereInput
    none?: DehWhereInput
  }

  export type CaseListRelationFilter = {
    every?: CaseWhereInput
    some?: CaseWhereInput
    none?: CaseWhereInput
  }

  export type DehOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TalukaOrderByRelevanceInput = {
    fields: TalukaOrderByRelevanceFieldEnum | TalukaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TalukaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalukaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalukaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalukaScalarRelationFilter = {
    is?: TalukaWhereInput
    isNot?: TalukaWhereInput
  }

  export type DehOrderByRelevanceInput = {
    fields: DehOrderByRelevanceFieldEnum | DehOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DehNameTalukaIdCompoundUniqueInput = {
    name: string
    talukaId: string
  }

  export type DehCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    talukaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DehMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    talukaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DehMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    talukaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    designation?: SortOrder
    contact?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserCasesOrderByRelevanceInput = {
    fields: UserCasesOrderByRelevanceFieldEnum | UserCasesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCasesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
    assignedToUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCasesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
    assignedToUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCasesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    caseId?: SortOrder
    assignedToUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportOrderByRelevanceInput = {
    fields: ReportOrderByRelevanceFieldEnum | ReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    reportType?: SortOrder
    forwardedByMukhiarkar?: SortOrder
    forwardedByAC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    reportType?: SortOrder
    forwardedByMukhiarkar?: SortOrder
    forwardedByAC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    caseId?: SortOrder
    reportType?: SortOrder
    forwardedByMukhiarkar?: SortOrder
    forwardedByAC?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LogOrderByRelevanceInput = {
    fields: LogOrderByRelevanceFieldEnum | LogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    level?: SortOrder
    route?: SortOrder
    message?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    level?: SortOrder
    route?: SortOrder
    message?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    level?: SortOrder
    route?: SortOrder
    message?: SortOrder
  }

  export type TalukaCreateNestedOneWithoutCaseInput = {
    create?: XOR<TalukaCreateWithoutCaseInput, TalukaUncheckedCreateWithoutCaseInput>
    connectOrCreate?: TalukaCreateOrConnectWithoutCaseInput
    connect?: TalukaWhereUniqueInput
  }

  export type DehCreateNestedOneWithoutCaseInput = {
    create?: XOR<DehCreateWithoutCaseInput, DehUncheckedCreateWithoutCaseInput>
    connectOrCreate?: DehCreateOrConnectWithoutCaseInput
    connect?: DehWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutForwardedCasesInput = {
    create?: XOR<UserCreateWithoutForwardedCasesInput, UserUncheckedCreateWithoutForwardedCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutForwardedCasesInput
    connect?: UserWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutCaseInput = {
    create?: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput> | ReportCreateWithoutCaseInput[] | ReportUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCaseInput | ReportCreateOrConnectWithoutCaseInput[]
    createMany?: ReportCreateManyCaseInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MemosCreateNestedManyWithoutCaseInput = {
    create?: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput> | MemosCreateWithoutCaseInput[] | MemosUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MemosCreateOrConnectWithoutCaseInput | MemosCreateOrConnectWithoutCaseInput[]
    createMany?: MemosCreateManyCaseInputEnvelope
    connect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
  }

  export type NotesCreateNestedManyWithoutCaseInput = {
    create?: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput> | NotesCreateWithoutCaseInput[] | NotesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutCaseInput | NotesCreateOrConnectWithoutCaseInput[]
    createMany?: NotesCreateManyCaseInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type UserCasesCreateNestedManyWithoutCaseInput = {
    create?: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput> | UserCasesCreateWithoutCaseInput[] | UserCasesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutCaseInput | UserCasesCreateOrConnectWithoutCaseInput[]
    createMany?: UserCasesCreateManyCaseInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput> | ReportCreateWithoutCaseInput[] | ReportUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCaseInput | ReportCreateOrConnectWithoutCaseInput[]
    createMany?: ReportCreateManyCaseInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MemosUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput> | MemosCreateWithoutCaseInput[] | MemosUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MemosCreateOrConnectWithoutCaseInput | MemosCreateOrConnectWithoutCaseInput[]
    createMany?: MemosCreateManyCaseInputEnvelope
    connect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput> | NotesCreateWithoutCaseInput[] | NotesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutCaseInput | NotesCreateOrConnectWithoutCaseInput[]
    createMany?: NotesCreateManyCaseInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type UserCasesUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput> | UserCasesCreateWithoutCaseInput[] | UserCasesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutCaseInput | UserCasesCreateOrConnectWithoutCaseInput[]
    createMany?: UserCasesCreateManyCaseInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TalukaUpdateOneWithoutCaseNestedInput = {
    create?: XOR<TalukaCreateWithoutCaseInput, TalukaUncheckedCreateWithoutCaseInput>
    connectOrCreate?: TalukaCreateOrConnectWithoutCaseInput
    upsert?: TalukaUpsertWithoutCaseInput
    disconnect?: TalukaWhereInput | boolean
    delete?: TalukaWhereInput | boolean
    connect?: TalukaWhereUniqueInput
    update?: XOR<XOR<TalukaUpdateToOneWithWhereWithoutCaseInput, TalukaUpdateWithoutCaseInput>, TalukaUncheckedUpdateWithoutCaseInput>
  }

  export type DehUpdateOneWithoutCaseNestedInput = {
    create?: XOR<DehCreateWithoutCaseInput, DehUncheckedCreateWithoutCaseInput>
    connectOrCreate?: DehCreateOrConnectWithoutCaseInput
    upsert?: DehUpsertWithoutCaseInput
    disconnect?: DehWhereInput | boolean
    delete?: DehWhereInput | boolean
    connect?: DehWhereUniqueInput
    update?: XOR<XOR<DehUpdateToOneWithWhereWithoutCaseInput, DehUpdateWithoutCaseInput>, DehUncheckedUpdateWithoutCaseInput>
  }

  export type UserUpdateOneWithoutForwardedCasesNestedInput = {
    create?: XOR<UserCreateWithoutForwardedCasesInput, UserUncheckedCreateWithoutForwardedCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutForwardedCasesInput
    upsert?: UserUpsertWithoutForwardedCasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForwardedCasesInput, UserUpdateWithoutForwardedCasesInput>, UserUncheckedUpdateWithoutForwardedCasesInput>
  }

  export type ReportUpdateManyWithoutCaseNestedInput = {
    create?: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput> | ReportCreateWithoutCaseInput[] | ReportUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCaseInput | ReportCreateOrConnectWithoutCaseInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutCaseInput | ReportUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: ReportCreateManyCaseInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutCaseInput | ReportUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutCaseInput | ReportUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MemosUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput> | MemosCreateWithoutCaseInput[] | MemosUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MemosCreateOrConnectWithoutCaseInput | MemosCreateOrConnectWithoutCaseInput[]
    upsert?: MemosUpsertWithWhereUniqueWithoutCaseInput | MemosUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MemosCreateManyCaseInputEnvelope
    set?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    disconnect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    delete?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    connect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    update?: MemosUpdateWithWhereUniqueWithoutCaseInput | MemosUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MemosUpdateManyWithWhereWithoutCaseInput | MemosUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MemosScalarWhereInput | MemosScalarWhereInput[]
  }

  export type NotesUpdateManyWithoutCaseNestedInput = {
    create?: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput> | NotesCreateWithoutCaseInput[] | NotesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutCaseInput | NotesCreateOrConnectWithoutCaseInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutCaseInput | NotesUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: NotesCreateManyCaseInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutCaseInput | NotesUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutCaseInput | NotesUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type UserCasesUpdateManyWithoutCaseNestedInput = {
    create?: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput> | UserCasesCreateWithoutCaseInput[] | UserCasesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutCaseInput | UserCasesCreateOrConnectWithoutCaseInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutCaseInput | UserCasesUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: UserCasesCreateManyCaseInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutCaseInput | UserCasesUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutCaseInput | UserCasesUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput> | ReportCreateWithoutCaseInput[] | ReportUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCaseInput | ReportCreateOrConnectWithoutCaseInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutCaseInput | ReportUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: ReportCreateManyCaseInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutCaseInput | ReportUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutCaseInput | ReportUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MemosUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput> | MemosCreateWithoutCaseInput[] | MemosUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: MemosCreateOrConnectWithoutCaseInput | MemosCreateOrConnectWithoutCaseInput[]
    upsert?: MemosUpsertWithWhereUniqueWithoutCaseInput | MemosUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: MemosCreateManyCaseInputEnvelope
    set?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    disconnect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    delete?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    connect?: MemosWhereUniqueInput | MemosWhereUniqueInput[]
    update?: MemosUpdateWithWhereUniqueWithoutCaseInput | MemosUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: MemosUpdateManyWithWhereWithoutCaseInput | MemosUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: MemosScalarWhereInput | MemosScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput> | NotesCreateWithoutCaseInput[] | NotesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutCaseInput | NotesCreateOrConnectWithoutCaseInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutCaseInput | NotesUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: NotesCreateManyCaseInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutCaseInput | NotesUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutCaseInput | NotesUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type UserCasesUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput> | UserCasesCreateWithoutCaseInput[] | UserCasesUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutCaseInput | UserCasesCreateOrConnectWithoutCaseInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutCaseInput | UserCasesUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: UserCasesCreateManyCaseInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutCaseInput | UserCasesUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutCaseInput | UserCasesUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type CaseCreateNestedOneWithoutMemosInput = {
    create?: XOR<CaseCreateWithoutMemosInput, CaseUncheckedCreateWithoutMemosInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMemosInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutMemosNestedInput = {
    create?: XOR<CaseCreateWithoutMemosInput, CaseUncheckedCreateWithoutMemosInput>
    connectOrCreate?: CaseCreateOrConnectWithoutMemosInput
    upsert?: CaseUpsertWithoutMemosInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutMemosInput, CaseUpdateWithoutMemosInput>, CaseUncheckedUpdateWithoutMemosInput>
  }

  export type CaseCreateNestedOneWithoutNotesInput = {
    create?: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotesInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutNotesInput
    upsert?: CaseUpsertWithoutNotesInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutNotesInput, CaseUpdateWithoutNotesInput>, CaseUncheckedUpdateWithoutNotesInput>
  }

  export type DehCreateNestedManyWithoutTalukaInput = {
    create?: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput> | DehCreateWithoutTalukaInput[] | DehUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: DehCreateOrConnectWithoutTalukaInput | DehCreateOrConnectWithoutTalukaInput[]
    createMany?: DehCreateManyTalukaInputEnvelope
    connect?: DehWhereUniqueInput | DehWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutTalukaInput = {
    create?: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput> | CaseCreateWithoutTalukaInput[] | CaseUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTalukaInput | CaseCreateOrConnectWithoutTalukaInput[]
    createMany?: CaseCreateManyTalukaInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type DehUncheckedCreateNestedManyWithoutTalukaInput = {
    create?: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput> | DehCreateWithoutTalukaInput[] | DehUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: DehCreateOrConnectWithoutTalukaInput | DehCreateOrConnectWithoutTalukaInput[]
    createMany?: DehCreateManyTalukaInputEnvelope
    connect?: DehWhereUniqueInput | DehWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutTalukaInput = {
    create?: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput> | CaseCreateWithoutTalukaInput[] | CaseUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTalukaInput | CaseCreateOrConnectWithoutTalukaInput[]
    createMany?: CaseCreateManyTalukaInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type DehUpdateManyWithoutTalukaNestedInput = {
    create?: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput> | DehCreateWithoutTalukaInput[] | DehUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: DehCreateOrConnectWithoutTalukaInput | DehCreateOrConnectWithoutTalukaInput[]
    upsert?: DehUpsertWithWhereUniqueWithoutTalukaInput | DehUpsertWithWhereUniqueWithoutTalukaInput[]
    createMany?: DehCreateManyTalukaInputEnvelope
    set?: DehWhereUniqueInput | DehWhereUniqueInput[]
    disconnect?: DehWhereUniqueInput | DehWhereUniqueInput[]
    delete?: DehWhereUniqueInput | DehWhereUniqueInput[]
    connect?: DehWhereUniqueInput | DehWhereUniqueInput[]
    update?: DehUpdateWithWhereUniqueWithoutTalukaInput | DehUpdateWithWhereUniqueWithoutTalukaInput[]
    updateMany?: DehUpdateManyWithWhereWithoutTalukaInput | DehUpdateManyWithWhereWithoutTalukaInput[]
    deleteMany?: DehScalarWhereInput | DehScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutTalukaNestedInput = {
    create?: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput> | CaseCreateWithoutTalukaInput[] | CaseUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTalukaInput | CaseCreateOrConnectWithoutTalukaInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutTalukaInput | CaseUpsertWithWhereUniqueWithoutTalukaInput[]
    createMany?: CaseCreateManyTalukaInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutTalukaInput | CaseUpdateWithWhereUniqueWithoutTalukaInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutTalukaInput | CaseUpdateManyWithWhereWithoutTalukaInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type DehUncheckedUpdateManyWithoutTalukaNestedInput = {
    create?: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput> | DehCreateWithoutTalukaInput[] | DehUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: DehCreateOrConnectWithoutTalukaInput | DehCreateOrConnectWithoutTalukaInput[]
    upsert?: DehUpsertWithWhereUniqueWithoutTalukaInput | DehUpsertWithWhereUniqueWithoutTalukaInput[]
    createMany?: DehCreateManyTalukaInputEnvelope
    set?: DehWhereUniqueInput | DehWhereUniqueInput[]
    disconnect?: DehWhereUniqueInput | DehWhereUniqueInput[]
    delete?: DehWhereUniqueInput | DehWhereUniqueInput[]
    connect?: DehWhereUniqueInput | DehWhereUniqueInput[]
    update?: DehUpdateWithWhereUniqueWithoutTalukaInput | DehUpdateWithWhereUniqueWithoutTalukaInput[]
    updateMany?: DehUpdateManyWithWhereWithoutTalukaInput | DehUpdateManyWithWhereWithoutTalukaInput[]
    deleteMany?: DehScalarWhereInput | DehScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutTalukaNestedInput = {
    create?: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput> | CaseCreateWithoutTalukaInput[] | CaseUncheckedCreateWithoutTalukaInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutTalukaInput | CaseCreateOrConnectWithoutTalukaInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutTalukaInput | CaseUpsertWithWhereUniqueWithoutTalukaInput[]
    createMany?: CaseCreateManyTalukaInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutTalukaInput | CaseUpdateWithWhereUniqueWithoutTalukaInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutTalukaInput | CaseUpdateManyWithWhereWithoutTalukaInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type TalukaCreateNestedOneWithoutDehsInput = {
    create?: XOR<TalukaCreateWithoutDehsInput, TalukaUncheckedCreateWithoutDehsInput>
    connectOrCreate?: TalukaCreateOrConnectWithoutDehsInput
    connect?: TalukaWhereUniqueInput
  }

  export type CaseCreateNestedManyWithoutDehInput = {
    create?: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput> | CaseCreateWithoutDehInput[] | CaseUncheckedCreateWithoutDehInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutDehInput | CaseCreateOrConnectWithoutDehInput[]
    createMany?: CaseCreateManyDehInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutDehInput = {
    create?: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput> | CaseCreateWithoutDehInput[] | CaseUncheckedCreateWithoutDehInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutDehInput | CaseCreateOrConnectWithoutDehInput[]
    createMany?: CaseCreateManyDehInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type TalukaUpdateOneRequiredWithoutDehsNestedInput = {
    create?: XOR<TalukaCreateWithoutDehsInput, TalukaUncheckedCreateWithoutDehsInput>
    connectOrCreate?: TalukaCreateOrConnectWithoutDehsInput
    upsert?: TalukaUpsertWithoutDehsInput
    connect?: TalukaWhereUniqueInput
    update?: XOR<XOR<TalukaUpdateToOneWithWhereWithoutDehsInput, TalukaUpdateWithoutDehsInput>, TalukaUncheckedUpdateWithoutDehsInput>
  }

  export type CaseUpdateManyWithoutDehNestedInput = {
    create?: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput> | CaseCreateWithoutDehInput[] | CaseUncheckedCreateWithoutDehInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutDehInput | CaseCreateOrConnectWithoutDehInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutDehInput | CaseUpsertWithWhereUniqueWithoutDehInput[]
    createMany?: CaseCreateManyDehInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutDehInput | CaseUpdateWithWhereUniqueWithoutDehInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutDehInput | CaseUpdateManyWithWhereWithoutDehInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutDehNestedInput = {
    create?: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput> | CaseCreateWithoutDehInput[] | CaseUncheckedCreateWithoutDehInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutDehInput | CaseCreateOrConnectWithoutDehInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutDehInput | CaseUpsertWithWhereUniqueWithoutDehInput[]
    createMany?: CaseCreateManyDehInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutDehInput | CaseUpdateWithWhereUniqueWithoutDehInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutDehInput | CaseUpdateManyWithWhereWithoutDehInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type UserCasesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput> | UserCasesCreateWithoutUserInput[] | UserCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutUserInput | UserCasesCreateOrConnectWithoutUserInput[]
    createMany?: UserCasesCreateManyUserInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type UserCasesCreateNestedManyWithoutAssignedToUserInput = {
    create?: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput> | UserCasesCreateWithoutAssignedToUserInput[] | UserCasesUncheckedCreateWithoutAssignedToUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutAssignedToUserInput | UserCasesCreateOrConnectWithoutAssignedToUserInput[]
    createMany?: UserCasesCreateManyAssignedToUserInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type CaseCreateNestedManyWithoutForwardedToMukhtiarkarInput = {
    create?: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput> | CaseCreateWithoutForwardedToMukhtiarkarInput[] | CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput | CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput[]
    createMany?: CaseCreateManyForwardedToMukhtiarkarInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type UserCasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput> | UserCasesCreateWithoutUserInput[] | UserCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutUserInput | UserCasesCreateOrConnectWithoutUserInput[]
    createMany?: UserCasesCreateManyUserInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type UserCasesUncheckedCreateNestedManyWithoutAssignedToUserInput = {
    create?: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput> | UserCasesCreateWithoutAssignedToUserInput[] | UserCasesUncheckedCreateWithoutAssignedToUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutAssignedToUserInput | UserCasesCreateOrConnectWithoutAssignedToUserInput[]
    createMany?: UserCasesCreateManyAssignedToUserInputEnvelope
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
  }

  export type CaseUncheckedCreateNestedManyWithoutForwardedToMukhtiarkarInput = {
    create?: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput> | CaseCreateWithoutForwardedToMukhtiarkarInput[] | CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput | CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput[]
    createMany?: CaseCreateManyForwardedToMukhtiarkarInputEnvelope
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
  }

  export type UserCasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput> | UserCasesCreateWithoutUserInput[] | UserCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutUserInput | UserCasesCreateOrConnectWithoutUserInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutUserInput | UserCasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCasesCreateManyUserInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutUserInput | UserCasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutUserInput | UserCasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type UserCasesUpdateManyWithoutAssignedToUserNestedInput = {
    create?: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput> | UserCasesCreateWithoutAssignedToUserInput[] | UserCasesUncheckedCreateWithoutAssignedToUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutAssignedToUserInput | UserCasesCreateOrConnectWithoutAssignedToUserInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutAssignedToUserInput | UserCasesUpsertWithWhereUniqueWithoutAssignedToUserInput[]
    createMany?: UserCasesCreateManyAssignedToUserInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutAssignedToUserInput | UserCasesUpdateWithWhereUniqueWithoutAssignedToUserInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutAssignedToUserInput | UserCasesUpdateManyWithWhereWithoutAssignedToUserInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type CaseUpdateManyWithoutForwardedToMukhtiarkarNestedInput = {
    create?: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput> | CaseCreateWithoutForwardedToMukhtiarkarInput[] | CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput | CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutForwardedToMukhtiarkarInput | CaseUpsertWithWhereUniqueWithoutForwardedToMukhtiarkarInput[]
    createMany?: CaseCreateManyForwardedToMukhtiarkarInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutForwardedToMukhtiarkarInput | CaseUpdateWithWhereUniqueWithoutForwardedToMukhtiarkarInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutForwardedToMukhtiarkarInput | CaseUpdateManyWithWhereWithoutForwardedToMukhtiarkarInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type UserCasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput> | UserCasesCreateWithoutUserInput[] | UserCasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutUserInput | UserCasesCreateOrConnectWithoutUserInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutUserInput | UserCasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCasesCreateManyUserInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutUserInput | UserCasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutUserInput | UserCasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type UserCasesUncheckedUpdateManyWithoutAssignedToUserNestedInput = {
    create?: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput> | UserCasesCreateWithoutAssignedToUserInput[] | UserCasesUncheckedCreateWithoutAssignedToUserInput[]
    connectOrCreate?: UserCasesCreateOrConnectWithoutAssignedToUserInput | UserCasesCreateOrConnectWithoutAssignedToUserInput[]
    upsert?: UserCasesUpsertWithWhereUniqueWithoutAssignedToUserInput | UserCasesUpsertWithWhereUniqueWithoutAssignedToUserInput[]
    createMany?: UserCasesCreateManyAssignedToUserInputEnvelope
    set?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    disconnect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    delete?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    connect?: UserCasesWhereUniqueInput | UserCasesWhereUniqueInput[]
    update?: UserCasesUpdateWithWhereUniqueWithoutAssignedToUserInput | UserCasesUpdateWithWhereUniqueWithoutAssignedToUserInput[]
    updateMany?: UserCasesUpdateManyWithWhereWithoutAssignedToUserInput | UserCasesUpdateManyWithWhereWithoutAssignedToUserInput[]
    deleteMany?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
  }

  export type CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarNestedInput = {
    create?: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput> | CaseCreateWithoutForwardedToMukhtiarkarInput[] | CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput[]
    connectOrCreate?: CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput | CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput[]
    upsert?: CaseUpsertWithWhereUniqueWithoutForwardedToMukhtiarkarInput | CaseUpsertWithWhereUniqueWithoutForwardedToMukhtiarkarInput[]
    createMany?: CaseCreateManyForwardedToMukhtiarkarInputEnvelope
    set?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    disconnect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    delete?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    connect?: CaseWhereUniqueInput | CaseWhereUniqueInput[]
    update?: CaseUpdateWithWhereUniqueWithoutForwardedToMukhtiarkarInput | CaseUpdateWithWhereUniqueWithoutForwardedToMukhtiarkarInput[]
    updateMany?: CaseUpdateManyWithWhereWithoutForwardedToMukhtiarkarInput | CaseUpdateManyWithWhereWithoutForwardedToMukhtiarkarInput[]
    deleteMany?: CaseScalarWhereInput | CaseScalarWhereInput[]
  }

  export type CaseCreateNestedOneWithoutUserCasesInput = {
    create?: XOR<CaseCreateWithoutUserCasesInput, CaseUncheckedCreateWithoutUserCasesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutUserCasesInput
    connect?: CaseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserCasesInput = {
    create?: XOR<UserCreateWithoutUserCasesInput, UserUncheckedCreateWithoutUserCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedCasesInput = {
    create?: XOR<UserCreateWithoutAssignedCasesInput, UserUncheckedCreateWithoutAssignedCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCasesInput
    connect?: UserWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutUserCasesNestedInput = {
    create?: XOR<CaseCreateWithoutUserCasesInput, CaseUncheckedCreateWithoutUserCasesInput>
    connectOrCreate?: CaseCreateOrConnectWithoutUserCasesInput
    upsert?: CaseUpsertWithoutUserCasesInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutUserCasesInput, CaseUpdateWithoutUserCasesInput>, CaseUncheckedUpdateWithoutUserCasesInput>
  }

  export type UserUpdateOneRequiredWithoutUserCasesNestedInput = {
    create?: XOR<UserCreateWithoutUserCasesInput, UserUncheckedCreateWithoutUserCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserCasesInput
    upsert?: UserUpsertWithoutUserCasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserCasesInput, UserUpdateWithoutUserCasesInput>, UserUncheckedUpdateWithoutUserCasesInput>
  }

  export type UserUpdateOneWithoutAssignedCasesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedCasesInput, UserUncheckedCreateWithoutAssignedCasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedCasesInput
    upsert?: UserUpsertWithoutAssignedCasesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedCasesInput, UserUpdateWithoutAssignedCasesInput>, UserUncheckedUpdateWithoutAssignedCasesInput>
  }

  export type CaseCreateNestedOneWithoutReportsInput = {
    create?: XOR<CaseCreateWithoutReportsInput, CaseUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutReportsInput
    connect?: CaseWhereUniqueInput
  }

  export type CaseUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<CaseCreateWithoutReportsInput, CaseUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CaseCreateOrConnectWithoutReportsInput
    upsert?: CaseUpsertWithoutReportsInput
    connect?: CaseWhereUniqueInput
    update?: XOR<XOR<CaseUpdateToOneWithWhereWithoutReportsInput, CaseUpdateWithoutReportsInput>, CaseUncheckedUpdateWithoutReportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TalukaCreateWithoutCaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dehs?: DehCreateNestedManyWithoutTalukaInput
  }

  export type TalukaUncheckedCreateWithoutCaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dehs?: DehUncheckedCreateNestedManyWithoutTalukaInput
  }

  export type TalukaCreateOrConnectWithoutCaseInput = {
    where: TalukaWhereUniqueInput
    create: XOR<TalukaCreateWithoutCaseInput, TalukaUncheckedCreateWithoutCaseInput>
  }

  export type DehCreateWithoutCaseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    taluka: TalukaCreateNestedOneWithoutDehsInput
  }

  export type DehUncheckedCreateWithoutCaseInput = {
    id?: string
    name: string
    talukaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DehCreateOrConnectWithoutCaseInput = {
    where: DehWhereUniqueInput
    create: XOR<DehCreateWithoutCaseInput, DehUncheckedCreateWithoutCaseInput>
  }

  export type UserCreateWithoutForwardedCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesCreateNestedManyWithoutUserInput
    assignedCases?: UserCasesCreateNestedManyWithoutAssignedToUserInput
  }

  export type UserUncheckedCreateWithoutForwardedCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesUncheckedCreateNestedManyWithoutUserInput
    assignedCases?: UserCasesUncheckedCreateNestedManyWithoutAssignedToUserInput
  }

  export type UserCreateOrConnectWithoutForwardedCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForwardedCasesInput, UserUncheckedCreateWithoutForwardedCasesInput>
  }

  export type ReportCreateWithoutCaseInput = {
    id?: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUncheckedCreateWithoutCaseInput = {
    id?: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutCaseInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput>
  }

  export type ReportCreateManyCaseInputEnvelope = {
    data: ReportCreateManyCaseInput | ReportCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type MemosCreateWithoutCaseInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemosUncheckedCreateWithoutCaseInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemosCreateOrConnectWithoutCaseInput = {
    where: MemosWhereUniqueInput
    create: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput>
  }

  export type MemosCreateManyCaseInputEnvelope = {
    data: MemosCreateManyCaseInput | MemosCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type NotesCreateWithoutCaseInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotesUncheckedCreateWithoutCaseInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotesCreateOrConnectWithoutCaseInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput>
  }

  export type NotesCreateManyCaseInputEnvelope = {
    data: NotesCreateManyCaseInput | NotesCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type UserCasesCreateWithoutCaseInput = {
    id?: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user: UserCreateNestedOneWithoutUserCasesInput
    assignedToUser?: UserCreateNestedOneWithoutAssignedCasesInput
  }

  export type UserCasesUncheckedCreateWithoutCaseInput = {
    id?: string
    userId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesCreateOrConnectWithoutCaseInput = {
    where: UserCasesWhereUniqueInput
    create: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput>
  }

  export type UserCasesCreateManyCaseInputEnvelope = {
    data: UserCasesCreateManyCaseInput | UserCasesCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type TalukaUpsertWithoutCaseInput = {
    update: XOR<TalukaUpdateWithoutCaseInput, TalukaUncheckedUpdateWithoutCaseInput>
    create: XOR<TalukaCreateWithoutCaseInput, TalukaUncheckedCreateWithoutCaseInput>
    where?: TalukaWhereInput
  }

  export type TalukaUpdateToOneWithWhereWithoutCaseInput = {
    where?: TalukaWhereInput
    data: XOR<TalukaUpdateWithoutCaseInput, TalukaUncheckedUpdateWithoutCaseInput>
  }

  export type TalukaUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dehs?: DehUpdateManyWithoutTalukaNestedInput
  }

  export type TalukaUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dehs?: DehUncheckedUpdateManyWithoutTalukaNestedInput
  }

  export type DehUpsertWithoutCaseInput = {
    update: XOR<DehUpdateWithoutCaseInput, DehUncheckedUpdateWithoutCaseInput>
    create: XOR<DehCreateWithoutCaseInput, DehUncheckedCreateWithoutCaseInput>
    where?: DehWhereInput
  }

  export type DehUpdateToOneWithWhereWithoutCaseInput = {
    where?: DehWhereInput
    data: XOR<DehUpdateWithoutCaseInput, DehUncheckedUpdateWithoutCaseInput>
  }

  export type DehUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taluka?: TalukaUpdateOneRequiredWithoutDehsNestedInput
  }

  export type DehUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    talukaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutForwardedCasesInput = {
    update: XOR<UserUpdateWithoutForwardedCasesInput, UserUncheckedUpdateWithoutForwardedCasesInput>
    create: XOR<UserCreateWithoutForwardedCasesInput, UserUncheckedCreateWithoutForwardedCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForwardedCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForwardedCasesInput, UserUncheckedUpdateWithoutForwardedCasesInput>
  }

  export type UserUpdateWithoutForwardedCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUpdateManyWithoutUserNestedInput
    assignedCases?: UserCasesUpdateManyWithoutAssignedToUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForwardedCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUncheckedUpdateManyWithoutUserNestedInput
    assignedCases?: UserCasesUncheckedUpdateManyWithoutAssignedToUserNestedInput
  }

  export type ReportUpsertWithWhereUniqueWithoutCaseInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutCaseInput, ReportUncheckedUpdateWithoutCaseInput>
    create: XOR<ReportCreateWithoutCaseInput, ReportUncheckedCreateWithoutCaseInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutCaseInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutCaseInput, ReportUncheckedUpdateWithoutCaseInput>
  }

  export type ReportUpdateManyWithWhereWithoutCaseInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutCaseInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    caseId?: StringFilter<"Report"> | string
    reportType?: StringFilter<"Report"> | string
    forwardedByMukhiarkar?: BoolFilter<"Report"> | boolean
    forwardedByAC?: BoolFilter<"Report"> | boolean
    createdAt?: DateTimeFilter<"Report"> | Date | string
    updatedAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type MemosUpsertWithWhereUniqueWithoutCaseInput = {
    where: MemosWhereUniqueInput
    update: XOR<MemosUpdateWithoutCaseInput, MemosUncheckedUpdateWithoutCaseInput>
    create: XOR<MemosCreateWithoutCaseInput, MemosUncheckedCreateWithoutCaseInput>
  }

  export type MemosUpdateWithWhereUniqueWithoutCaseInput = {
    where: MemosWhereUniqueInput
    data: XOR<MemosUpdateWithoutCaseInput, MemosUncheckedUpdateWithoutCaseInput>
  }

  export type MemosUpdateManyWithWhereWithoutCaseInput = {
    where: MemosScalarWhereInput
    data: XOR<MemosUpdateManyMutationInput, MemosUncheckedUpdateManyWithoutCaseInput>
  }

  export type MemosScalarWhereInput = {
    AND?: MemosScalarWhereInput | MemosScalarWhereInput[]
    OR?: MemosScalarWhereInput[]
    NOT?: MemosScalarWhereInput | MemosScalarWhereInput[]
    id?: StringFilter<"Memos"> | string
    code?: StringFilter<"Memos"> | string
    filePath?: StringNullableFilter<"Memos"> | string | null
    description?: StringNullableFilter<"Memos"> | string | null
    dateCollected?: DateTimeFilter<"Memos"> | Date | string
    caseId?: StringFilter<"Memos"> | string
    createdAt?: DateTimeFilter<"Memos"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Memos"> | Date | string | null
  }

  export type NotesUpsertWithWhereUniqueWithoutCaseInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutCaseInput, NotesUncheckedUpdateWithoutCaseInput>
    create: XOR<NotesCreateWithoutCaseInput, NotesUncheckedCreateWithoutCaseInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutCaseInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutCaseInput, NotesUncheckedUpdateWithoutCaseInput>
  }

  export type NotesUpdateManyWithWhereWithoutCaseInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutCaseInput>
  }

  export type NotesScalarWhereInput = {
    AND?: NotesScalarWhereInput | NotesScalarWhereInput[]
    OR?: NotesScalarWhereInput[]
    NOT?: NotesScalarWhereInput | NotesScalarWhereInput[]
    id?: StringFilter<"Notes"> | string
    code?: StringFilter<"Notes"> | string
    title?: StringNullableFilter<"Notes"> | string | null
    content?: StringNullableFilter<"Notes"> | string | null
    noteAddedOn?: DateTimeFilter<"Notes"> | Date | string
    caseId?: StringFilter<"Notes"> | string
    createdAt?: DateTimeFilter<"Notes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Notes"> | Date | string | null
  }

  export type UserCasesUpsertWithWhereUniqueWithoutCaseInput = {
    where: UserCasesWhereUniqueInput
    update: XOR<UserCasesUpdateWithoutCaseInput, UserCasesUncheckedUpdateWithoutCaseInput>
    create: XOR<UserCasesCreateWithoutCaseInput, UserCasesUncheckedCreateWithoutCaseInput>
  }

  export type UserCasesUpdateWithWhereUniqueWithoutCaseInput = {
    where: UserCasesWhereUniqueInput
    data: XOR<UserCasesUpdateWithoutCaseInput, UserCasesUncheckedUpdateWithoutCaseInput>
  }

  export type UserCasesUpdateManyWithWhereWithoutCaseInput = {
    where: UserCasesScalarWhereInput
    data: XOR<UserCasesUpdateManyMutationInput, UserCasesUncheckedUpdateManyWithoutCaseInput>
  }

  export type UserCasesScalarWhereInput = {
    AND?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
    OR?: UserCasesScalarWhereInput[]
    NOT?: UserCasesScalarWhereInput | UserCasesScalarWhereInput[]
    id?: StringFilter<"UserCases"> | string
    userId?: StringFilter<"UserCases"> | string
    caseId?: StringFilter<"UserCases"> | string
    assignedToUserId?: StringNullableFilter<"UserCases"> | string | null
    status?: BoolFilter<"UserCases"> | boolean
    createdAt?: DateTimeFilter<"UserCases"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserCases"> | Date | string | null
  }

  export type CaseCreateWithoutMemosInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutMemosInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutMemosInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutMemosInput, CaseUncheckedCreateWithoutMemosInput>
  }

  export type CaseUpsertWithoutMemosInput = {
    update: XOR<CaseUpdateWithoutMemosInput, CaseUncheckedUpdateWithoutMemosInput>
    create: XOR<CaseCreateWithoutMemosInput, CaseUncheckedCreateWithoutMemosInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutMemosInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutMemosInput, CaseUncheckedUpdateWithoutMemosInput>
  }

  export type CaseUpdateWithoutMemosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutMemosInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseCreateWithoutNotesInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutNotesInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutNotesInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
  }

  export type CaseUpsertWithoutNotesInput = {
    update: XOR<CaseUpdateWithoutNotesInput, CaseUncheckedUpdateWithoutNotesInput>
    create: XOR<CaseCreateWithoutNotesInput, CaseUncheckedCreateWithoutNotesInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutNotesInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutNotesInput, CaseUncheckedUpdateWithoutNotesInput>
  }

  export type CaseUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type DehCreateWithoutTalukaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Case?: CaseCreateNestedManyWithoutDehInput
  }

  export type DehUncheckedCreateWithoutTalukaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Case?: CaseUncheckedCreateNestedManyWithoutDehInput
  }

  export type DehCreateOrConnectWithoutTalukaInput = {
    where: DehWhereUniqueInput
    create: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput>
  }

  export type DehCreateManyTalukaInputEnvelope = {
    data: DehCreateManyTalukaInput | DehCreateManyTalukaInput[]
    skipDuplicates?: boolean
  }

  export type CaseCreateWithoutTalukaInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutTalukaInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutTalukaInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput>
  }

  export type CaseCreateManyTalukaInputEnvelope = {
    data: CaseCreateManyTalukaInput | CaseCreateManyTalukaInput[]
    skipDuplicates?: boolean
  }

  export type DehUpsertWithWhereUniqueWithoutTalukaInput = {
    where: DehWhereUniqueInput
    update: XOR<DehUpdateWithoutTalukaInput, DehUncheckedUpdateWithoutTalukaInput>
    create: XOR<DehCreateWithoutTalukaInput, DehUncheckedCreateWithoutTalukaInput>
  }

  export type DehUpdateWithWhereUniqueWithoutTalukaInput = {
    where: DehWhereUniqueInput
    data: XOR<DehUpdateWithoutTalukaInput, DehUncheckedUpdateWithoutTalukaInput>
  }

  export type DehUpdateManyWithWhereWithoutTalukaInput = {
    where: DehScalarWhereInput
    data: XOR<DehUpdateManyMutationInput, DehUncheckedUpdateManyWithoutTalukaInput>
  }

  export type DehScalarWhereInput = {
    AND?: DehScalarWhereInput | DehScalarWhereInput[]
    OR?: DehScalarWhereInput[]
    NOT?: DehScalarWhereInput | DehScalarWhereInput[]
    id?: StringFilter<"Deh"> | string
    name?: StringFilter<"Deh"> | string
    talukaId?: StringFilter<"Deh"> | string
    createdAt?: DateTimeFilter<"Deh"> | Date | string
    updatedAt?: DateTimeFilter<"Deh"> | Date | string
  }

  export type CaseUpsertWithWhereUniqueWithoutTalukaInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutTalukaInput, CaseUncheckedUpdateWithoutTalukaInput>
    create: XOR<CaseCreateWithoutTalukaInput, CaseUncheckedCreateWithoutTalukaInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutTalukaInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutTalukaInput, CaseUncheckedUpdateWithoutTalukaInput>
  }

  export type CaseUpdateManyWithWhereWithoutTalukaInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutTalukaInput>
  }

  export type CaseScalarWhereInput = {
    AND?: CaseScalarWhereInput | CaseScalarWhereInput[]
    OR?: CaseScalarWhereInput[]
    NOT?: CaseScalarWhereInput | CaseScalarWhereInput[]
    id?: StringFilter<"Case"> | string
    code?: StringFilter<"Case"> | string
    title?: StringNullableFilter<"Case"> | string | null
    caseType?: StringNullableFilter<"Case"> | string | null
    status?: StringNullableFilter<"Case"> | string | null
    priority?: StringNullableFilter<"Case"> | string | null
    dateOfInstitution?: DateTimeNullableFilter<"Case"> | Date | string | null
    orderOfDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    nextDate?: DateTimeNullableFilter<"Case"> | Date | string | null
    location?: StringNullableFilter<"Case"> | string | null
    talukaId?: StringNullableFilter<"Case"> | string | null
    dehId?: StringNullableFilter<"Case"> | string | null
    description?: StringNullableFilter<"Case"> | string | null
    mukhtiarkarACReportUploaded?: BoolFilter<"Case"> | boolean
    mukhtiarkarACReportPath?: StringNullableFilter<"Case"> | string | null
    evacueePropertyReportUploaded?: BoolFilter<"Case"> | boolean
    evacueePropertyReportPath?: StringNullableFilter<"Case"> | string | null
    barrageBranchReportUploaded?: BoolFilter<"Case"> | boolean
    barrageBranchReportPath?: StringNullableFilter<"Case"> | string | null
    newspaperPublicationUploaded?: BoolFilter<"Case"> | boolean
    newspaperPublicationPath?: StringNullableFilter<"Case"> | string | null
    forwardedToMukhtiarkarId?: StringNullableFilter<"Case"> | string | null
    forwardedByName?: StringNullableFilter<"Case"> | string | null
    createdAt?: DateTimeFilter<"Case"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Case"> | Date | string | null
  }

  export type TalukaCreateWithoutDehsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Case?: CaseCreateNestedManyWithoutTalukaInput
  }

  export type TalukaUncheckedCreateWithoutDehsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Case?: CaseUncheckedCreateNestedManyWithoutTalukaInput
  }

  export type TalukaCreateOrConnectWithoutDehsInput = {
    where: TalukaWhereUniqueInput
    create: XOR<TalukaCreateWithoutDehsInput, TalukaUncheckedCreateWithoutDehsInput>
  }

  export type CaseCreateWithoutDehInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutDehInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutDehInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput>
  }

  export type CaseCreateManyDehInputEnvelope = {
    data: CaseCreateManyDehInput | CaseCreateManyDehInput[]
    skipDuplicates?: boolean
  }

  export type TalukaUpsertWithoutDehsInput = {
    update: XOR<TalukaUpdateWithoutDehsInput, TalukaUncheckedUpdateWithoutDehsInput>
    create: XOR<TalukaCreateWithoutDehsInput, TalukaUncheckedCreateWithoutDehsInput>
    where?: TalukaWhereInput
  }

  export type TalukaUpdateToOneWithWhereWithoutDehsInput = {
    where?: TalukaWhereInput
    data: XOR<TalukaUpdateWithoutDehsInput, TalukaUncheckedUpdateWithoutDehsInput>
  }

  export type TalukaUpdateWithoutDehsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Case?: CaseUpdateManyWithoutTalukaNestedInput
  }

  export type TalukaUncheckedUpdateWithoutDehsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Case?: CaseUncheckedUpdateManyWithoutTalukaNestedInput
  }

  export type CaseUpsertWithWhereUniqueWithoutDehInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutDehInput, CaseUncheckedUpdateWithoutDehInput>
    create: XOR<CaseCreateWithoutDehInput, CaseUncheckedCreateWithoutDehInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutDehInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutDehInput, CaseUncheckedUpdateWithoutDehInput>
  }

  export type CaseUpdateManyWithWhereWithoutDehInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutDehInput>
  }

  export type UserCasesCreateWithoutUserInput = {
    id?: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    case: CaseCreateNestedOneWithoutUserCasesInput
    assignedToUser?: UserCreateNestedOneWithoutAssignedCasesInput
  }

  export type UserCasesUncheckedCreateWithoutUserInput = {
    id?: string
    caseId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesCreateOrConnectWithoutUserInput = {
    where: UserCasesWhereUniqueInput
    create: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput>
  }

  export type UserCasesCreateManyUserInputEnvelope = {
    data: UserCasesCreateManyUserInput | UserCasesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCasesCreateWithoutAssignedToUserInput = {
    id?: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
    case: CaseCreateNestedOneWithoutUserCasesInput
    user: UserCreateNestedOneWithoutUserCasesInput
  }

  export type UserCasesUncheckedCreateWithoutAssignedToUserInput = {
    id?: string
    userId: string
    caseId: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesCreateOrConnectWithoutAssignedToUserInput = {
    where: UserCasesWhereUniqueInput
    create: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput>
  }

  export type UserCasesCreateManyAssignedToUserInputEnvelope = {
    data: UserCasesCreateManyAssignedToUserInput | UserCasesCreateManyAssignedToUserInput[]
    skipDuplicates?: boolean
  }

  export type CaseCreateWithoutForwardedToMukhtiarkarInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutForwardedToMukhtiarkarInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput>
  }

  export type CaseCreateManyForwardedToMukhtiarkarInputEnvelope = {
    data: CaseCreateManyForwardedToMukhtiarkarInput | CaseCreateManyForwardedToMukhtiarkarInput[]
    skipDuplicates?: boolean
  }

  export type UserCasesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCasesWhereUniqueInput
    update: XOR<UserCasesUpdateWithoutUserInput, UserCasesUncheckedUpdateWithoutUserInput>
    create: XOR<UserCasesCreateWithoutUserInput, UserCasesUncheckedCreateWithoutUserInput>
  }

  export type UserCasesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCasesWhereUniqueInput
    data: XOR<UserCasesUpdateWithoutUserInput, UserCasesUncheckedUpdateWithoutUserInput>
  }

  export type UserCasesUpdateManyWithWhereWithoutUserInput = {
    where: UserCasesScalarWhereInput
    data: XOR<UserCasesUpdateManyMutationInput, UserCasesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCasesUpsertWithWhereUniqueWithoutAssignedToUserInput = {
    where: UserCasesWhereUniqueInput
    update: XOR<UserCasesUpdateWithoutAssignedToUserInput, UserCasesUncheckedUpdateWithoutAssignedToUserInput>
    create: XOR<UserCasesCreateWithoutAssignedToUserInput, UserCasesUncheckedCreateWithoutAssignedToUserInput>
  }

  export type UserCasesUpdateWithWhereUniqueWithoutAssignedToUserInput = {
    where: UserCasesWhereUniqueInput
    data: XOR<UserCasesUpdateWithoutAssignedToUserInput, UserCasesUncheckedUpdateWithoutAssignedToUserInput>
  }

  export type UserCasesUpdateManyWithWhereWithoutAssignedToUserInput = {
    where: UserCasesScalarWhereInput
    data: XOR<UserCasesUpdateManyMutationInput, UserCasesUncheckedUpdateManyWithoutAssignedToUserInput>
  }

  export type CaseUpsertWithWhereUniqueWithoutForwardedToMukhtiarkarInput = {
    where: CaseWhereUniqueInput
    update: XOR<CaseUpdateWithoutForwardedToMukhtiarkarInput, CaseUncheckedUpdateWithoutForwardedToMukhtiarkarInput>
    create: XOR<CaseCreateWithoutForwardedToMukhtiarkarInput, CaseUncheckedCreateWithoutForwardedToMukhtiarkarInput>
  }

  export type CaseUpdateWithWhereUniqueWithoutForwardedToMukhtiarkarInput = {
    where: CaseWhereUniqueInput
    data: XOR<CaseUpdateWithoutForwardedToMukhtiarkarInput, CaseUncheckedUpdateWithoutForwardedToMukhtiarkarInput>
  }

  export type CaseUpdateManyWithWhereWithoutForwardedToMukhtiarkarInput = {
    where: CaseScalarWhereInput
    data: XOR<CaseUpdateManyMutationInput, CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarInput>
  }

  export type CaseCreateWithoutUserCasesInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    reports?: ReportCreateNestedManyWithoutCaseInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutUserCasesInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCaseInput
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutUserCasesInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutUserCasesInput, CaseUncheckedCreateWithoutUserCasesInput>
  }

  export type UserCreateWithoutUserCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    assignedCases?: UserCasesCreateNestedManyWithoutAssignedToUserInput
    forwardedCases?: CaseCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserUncheckedCreateWithoutUserCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    assignedCases?: UserCasesUncheckedCreateNestedManyWithoutAssignedToUserInput
    forwardedCases?: CaseUncheckedCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserCreateOrConnectWithoutUserCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserCasesInput, UserUncheckedCreateWithoutUserCasesInput>
  }

  export type UserCreateWithoutAssignedCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesCreateNestedManyWithoutUserInput
    forwardedCases?: CaseCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserUncheckedCreateWithoutAssignedCasesInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role: string
    designation?: string | null
    contact?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    userCases?: UserCasesUncheckedCreateNestedManyWithoutUserInput
    forwardedCases?: CaseUncheckedCreateNestedManyWithoutForwardedToMukhtiarkarInput
  }

  export type UserCreateOrConnectWithoutAssignedCasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedCasesInput, UserUncheckedCreateWithoutAssignedCasesInput>
  }

  export type CaseUpsertWithoutUserCasesInput = {
    update: XOR<CaseUpdateWithoutUserCasesInput, CaseUncheckedUpdateWithoutUserCasesInput>
    create: XOR<CaseCreateWithoutUserCasesInput, CaseUncheckedCreateWithoutUserCasesInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutUserCasesInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutUserCasesInput, CaseUncheckedUpdateWithoutUserCasesInput>
  }

  export type CaseUpdateWithoutUserCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutUserCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type UserUpsertWithoutUserCasesInput = {
    update: XOR<UserUpdateWithoutUserCasesInput, UserUncheckedUpdateWithoutUserCasesInput>
    create: XOR<UserCreateWithoutUserCasesInput, UserUncheckedCreateWithoutUserCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserCasesInput, UserUncheckedUpdateWithoutUserCasesInput>
  }

  export type UserUpdateWithoutUserCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedCases?: UserCasesUpdateManyWithoutAssignedToUserNestedInput
    forwardedCases?: CaseUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type UserUncheckedUpdateWithoutUserCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedCases?: UserCasesUncheckedUpdateManyWithoutAssignedToUserNestedInput
    forwardedCases?: CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type UserUpsertWithoutAssignedCasesInput = {
    update: XOR<UserUpdateWithoutAssignedCasesInput, UserUncheckedUpdateWithoutAssignedCasesInput>
    create: XOR<UserCreateWithoutAssignedCasesInput, UserUncheckedCreateWithoutAssignedCasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedCasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedCasesInput, UserUncheckedUpdateWithoutAssignedCasesInput>
  }

  export type UserUpdateWithoutAssignedCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUpdateManyWithoutUserNestedInput
    forwardedCases?: CaseUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userCases?: UserCasesUncheckedUpdateManyWithoutUserNestedInput
    forwardedCases?: CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarNestedInput
  }

  export type CaseCreateWithoutReportsInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    taluka?: TalukaCreateNestedOneWithoutCaseInput
    deh?: DehCreateNestedOneWithoutCaseInput
    forwardedToMukhtiarkar?: UserCreateNestedOneWithoutForwardedCasesInput
    memos?: MemosCreateNestedManyWithoutCaseInput
    notes?: NotesCreateNestedManyWithoutCaseInput
    userCases?: UserCasesCreateNestedManyWithoutCaseInput
  }

  export type CaseUncheckedCreateWithoutReportsInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    memos?: MemosUncheckedCreateNestedManyWithoutCaseInput
    notes?: NotesUncheckedCreateNestedManyWithoutCaseInput
    userCases?: UserCasesUncheckedCreateNestedManyWithoutCaseInput
  }

  export type CaseCreateOrConnectWithoutReportsInput = {
    where: CaseWhereUniqueInput
    create: XOR<CaseCreateWithoutReportsInput, CaseUncheckedCreateWithoutReportsInput>
  }

  export type CaseUpsertWithoutReportsInput = {
    update: XOR<CaseUpdateWithoutReportsInput, CaseUncheckedUpdateWithoutReportsInput>
    create: XOR<CaseCreateWithoutReportsInput, CaseUncheckedCreateWithoutReportsInput>
    where?: CaseWhereInput
  }

  export type CaseUpdateToOneWithWhereWithoutReportsInput = {
    where?: CaseWhereInput
    data: XOR<CaseUpdateWithoutReportsInput, CaseUncheckedUpdateWithoutReportsInput>
  }

  export type CaseUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type ReportCreateManyCaseInput = {
    id?: string
    reportType: string
    forwardedByMukhiarkar?: boolean
    forwardedByAC?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemosCreateManyCaseInput = {
    id?: string
    code: string
    filePath?: string | null
    description?: string | null
    dateCollected?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type NotesCreateManyCaseInput = {
    id?: string
    code: string
    title?: string | null
    content?: string | null
    noteAddedOn?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesCreateManyCaseInput = {
    id?: string
    userId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReportUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    forwardedByMukhiarkar?: BoolFieldUpdateOperationsInput | boolean
    forwardedByAC?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemosUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemosUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemosUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateCollected?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotesUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    noteAddedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserCasesNestedInput
    assignedToUser?: UserUpdateOneWithoutAssignedCasesNestedInput
  }

  export type UserCasesUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DehCreateManyTalukaInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaseCreateManyTalukaInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DehUpdateWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Case?: CaseUpdateManyWithoutDehNestedInput
  }

  export type DehUncheckedUpdateWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Case?: CaseUncheckedUpdateManyWithoutDehNestedInput
  }

  export type DehUncheckedUpdateManyWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaseUpdateWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deh?: DehUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutTalukaInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CaseCreateManyDehInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedToMukhtiarkarId?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CaseUpdateWithoutDehInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    forwardedToMukhtiarkar?: UserUpdateOneWithoutForwardedCasesNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutDehInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutDehInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedToMukhtiarkarId?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesCreateManyUserInput = {
    id?: string
    caseId: string
    assignedToUserId?: string | null
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesCreateManyAssignedToUserInput = {
    id?: string
    userId: string
    caseId: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type CaseCreateManyForwardedToMukhtiarkarInput = {
    id?: string
    code: string
    title?: string | null
    caseType?: string | null
    status?: string | null
    priority?: string | null
    dateOfInstitution?: Date | string | null
    orderOfDate?: Date | string | null
    nextDate?: Date | string | null
    location?: string | null
    talukaId?: string | null
    dehId?: string | null
    description?: string | null
    mukhtiarkarACReportUploaded?: boolean
    mukhtiarkarACReportPath?: string | null
    evacueePropertyReportUploaded?: boolean
    evacueePropertyReportPath?: string | null
    barrageBranchReportUploaded?: boolean
    barrageBranchReportPath?: string | null
    newspaperPublicationUploaded?: boolean
    newspaperPublicationPath?: string | null
    forwardedByName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCasesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case?: CaseUpdateOneRequiredWithoutUserCasesNestedInput
    assignedToUser?: UserUpdateOneWithoutAssignedCasesNestedInput
  }

  export type UserCasesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    assignedToUserId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUpdateWithoutAssignedToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case?: CaseUpdateOneRequiredWithoutUserCasesNestedInput
    user?: UserUpdateOneRequiredWithoutUserCasesNestedInput
  }

  export type UserCasesUncheckedUpdateWithoutAssignedToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCasesUncheckedUpdateManyWithoutAssignedToUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CaseUpdateWithoutForwardedToMukhtiarkarInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taluka?: TalukaUpdateOneWithoutCaseNestedInput
    deh?: DehUpdateOneWithoutCaseNestedInput
    reports?: ReportUpdateManyWithoutCaseNestedInput
    memos?: MemosUpdateManyWithoutCaseNestedInput
    notes?: NotesUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateWithoutForwardedToMukhtiarkarInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCaseNestedInput
    memos?: MemosUncheckedUpdateManyWithoutCaseNestedInput
    notes?: NotesUncheckedUpdateManyWithoutCaseNestedInput
    userCases?: UserCasesUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type CaseUncheckedUpdateManyWithoutForwardedToMukhtiarkarInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    caseType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfInstitution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderOfDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    talukaId?: NullableStringFieldUpdateOperationsInput | string | null
    dehId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    mukhtiarkarACReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    mukhtiarkarACReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    evacueePropertyReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    evacueePropertyReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    barrageBranchReportUploaded?: BoolFieldUpdateOperationsInput | boolean
    barrageBranchReportPath?: NullableStringFieldUpdateOperationsInput | string | null
    newspaperPublicationUploaded?: BoolFieldUpdateOperationsInput | boolean
    newspaperPublicationPath?: NullableStringFieldUpdateOperationsInput | string | null
    forwardedByName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}