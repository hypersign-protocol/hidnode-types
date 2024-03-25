export declare const protobufPackage = "gogoproto";
export declare const goprotoEnumPrefix: Extension<boolean>;
export declare const goprotoEnumStringer: Extension<boolean>;
export declare const enumStringer: Extension<boolean>;
export declare const enumCustomname: Extension<string>;
export declare const enumdecl: Extension<boolean>;
export declare const enumvalueCustomname: Extension<string>;
export declare const goprotoGettersAll: Extension<boolean>;
export declare const goprotoEnumPrefixAll: Extension<boolean>;
export declare const goprotoStringerAll: Extension<boolean>;
export declare const verboseEqualAll: Extension<boolean>;
export declare const faceAll: Extension<boolean>;
export declare const gostringAll: Extension<boolean>;
export declare const populateAll: Extension<boolean>;
export declare const stringerAll: Extension<boolean>;
export declare const onlyoneAll: Extension<boolean>;
export declare const equalAll: Extension<boolean>;
export declare const descriptionAll: Extension<boolean>;
export declare const testgenAll: Extension<boolean>;
export declare const benchgenAll: Extension<boolean>;
export declare const marshalerAll: Extension<boolean>;
export declare const unmarshalerAll: Extension<boolean>;
export declare const stableMarshalerAll: Extension<boolean>;
export declare const sizerAll: Extension<boolean>;
export declare const goprotoEnumStringerAll: Extension<boolean>;
export declare const enumStringerAll: Extension<boolean>;
export declare const unsafeMarshalerAll: Extension<boolean>;
export declare const unsafeUnmarshalerAll: Extension<boolean>;
export declare const goprotoExtensionsMapAll: Extension<boolean>;
export declare const goprotoUnrecognizedAll: Extension<boolean>;
export declare const gogoprotoImport: Extension<boolean>;
export declare const protosizerAll: Extension<boolean>;
export declare const compareAll: Extension<boolean>;
export declare const typedeclAll: Extension<boolean>;
export declare const enumdeclAll: Extension<boolean>;
export declare const goprotoRegistration: Extension<boolean>;
export declare const messagenameAll: Extension<boolean>;
export declare const goprotoSizecacheAll: Extension<boolean>;
export declare const goprotoUnkeyedAll: Extension<boolean>;
export declare const goprotoGetters: Extension<boolean>;
export declare const goprotoStringer: Extension<boolean>;
export declare const verboseEqual: Extension<boolean>;
export declare const face: Extension<boolean>;
export declare const gostring: Extension<boolean>;
export declare const populate: Extension<boolean>;
export declare const stringer: Extension<boolean>;
export declare const onlyone: Extension<boolean>;
export declare const equal: Extension<boolean>;
export declare const description: Extension<boolean>;
export declare const testgen: Extension<boolean>;
export declare const benchgen: Extension<boolean>;
export declare const marshaler: Extension<boolean>;
export declare const unmarshaler: Extension<boolean>;
export declare const stableMarshaler: Extension<boolean>;
export declare const sizer: Extension<boolean>;
export declare const unsafeMarshaler: Extension<boolean>;
export declare const unsafeUnmarshaler: Extension<boolean>;
export declare const goprotoExtensionsMap: Extension<boolean>;
export declare const goprotoUnrecognized: Extension<boolean>;
export declare const protosizer: Extension<boolean>;
export declare const compare: Extension<boolean>;
export declare const typedecl: Extension<boolean>;
export declare const messagename: Extension<boolean>;
export declare const goprotoSizecache: Extension<boolean>;
export declare const goprotoUnkeyed: Extension<boolean>;
export declare const nullable: Extension<boolean>;
export declare const embed: Extension<boolean>;
export declare const customtype: Extension<string>;
export declare const customname: Extension<string>;
export declare const jsontag: Extension<string>;
export declare const moretags: Extension<string>;
export declare const casttype: Extension<string>;
export declare const castkey: Extension<string>;
export declare const castvalue: Extension<string>;
export declare const stdtime: Extension<boolean>;
export declare const stdduration: Extension<boolean>;
export declare const wktpointer: Extension<boolean>;
export declare const castrepeated: Extension<string>;
export interface Extension<T> {
    number: number;
    tag: number;
    singularTag?: number;
    encode?: (message: T) => Uint8Array[];
    decode?: (tag: number, input: Uint8Array[]) => T;
    repeated: boolean;
    packed: boolean;
}
//# sourceMappingURL=gogo.d.ts.map