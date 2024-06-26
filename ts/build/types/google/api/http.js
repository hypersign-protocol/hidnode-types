"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpPattern = exports.HttpRule = exports.Http = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.api";
function createBaseHttp() {
    return {};
}
exports.Http = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rules !== undefined && message.rules.length !== 0) {
            for (const v of message.rules) {
                exports.HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    if (message.rules === undefined) {
                        message.rules = [];
                    }
                    message.rules.push(exports.HttpRule.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.fullyDecodeReservedExpansion = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            rules: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.rules) ? object.rules.map((e) => exports.HttpRule.fromJSON(e)) : undefined,
            fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion)
                ? globalThis.Boolean(object.fullyDecodeReservedExpansion)
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.rules) === null || _a === void 0 ? void 0 : _a.length) {
            obj.rules = message.rules.map((e) => exports.HttpRule.toJSON(e));
        }
        if (message.fullyDecodeReservedExpansion === true) {
            obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
        }
        return obj;
    },
    create(base) {
        return exports.Http.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHttp();
        message.rules = ((_a = object.rules) === null || _a === void 0 ? void 0 : _a.map((e) => exports.HttpRule.fromPartial(e))) || undefined;
        message.fullyDecodeReservedExpansion = (_b = object.fullyDecodeReservedExpansion) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseHttpRule() {
    return {};
}
exports.HttpRule = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.selector !== undefined && message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            exports.CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== undefined && message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== undefined && message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        if (message.additionalBindings !== undefined && message.additionalBindings.length !== 0) {
            for (const v of message.additionalBindings) {
                exports.HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
            }
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHttpRule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.selector = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.get = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.put = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.post = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.delete = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.patch = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.custom = exports.CustomHttpPattern.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.body = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.responseBody = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    if (message.additionalBindings === undefined) {
                        message.additionalBindings = [];
                    }
                    message.additionalBindings.push(exports.HttpRule.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            selector: isSet(object.selector) ? globalThis.String(object.selector) : undefined,
            get: isSet(object.get) ? globalThis.String(object.get) : undefined,
            put: isSet(object.put) ? globalThis.String(object.put) : undefined,
            post: isSet(object.post) ? globalThis.String(object.post) : undefined,
            delete: isSet(object.delete) ? globalThis.String(object.delete) : undefined,
            patch: isSet(object.patch) ? globalThis.String(object.patch) : undefined,
            custom: isSet(object.custom) ? exports.CustomHttpPattern.fromJSON(object.custom) : undefined,
            body: isSet(object.body) ? globalThis.String(object.body) : undefined,
            responseBody: isSet(object.responseBody) ? globalThis.String(object.responseBody) : undefined,
            additionalBindings: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.additionalBindings)
                ? object.additionalBindings.map((e) => exports.HttpRule.fromJSON(e))
                : undefined,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.selector !== undefined && message.selector !== "") {
            obj.selector = message.selector;
        }
        if (message.get !== undefined) {
            obj.get = message.get;
        }
        if (message.put !== undefined) {
            obj.put = message.put;
        }
        if (message.post !== undefined) {
            obj.post = message.post;
        }
        if (message.delete !== undefined) {
            obj.delete = message.delete;
        }
        if (message.patch !== undefined) {
            obj.patch = message.patch;
        }
        if (message.custom !== undefined) {
            obj.custom = exports.CustomHttpPattern.toJSON(message.custom);
        }
        if (message.body !== undefined && message.body !== "") {
            obj.body = message.body;
        }
        if (message.responseBody !== undefined && message.responseBody !== "") {
            obj.responseBody = message.responseBody;
        }
        if ((_a = message.additionalBindings) === null || _a === void 0 ? void 0 : _a.length) {
            obj.additionalBindings = message.additionalBindings.map((e) => exports.HttpRule.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.HttpRule.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseHttpRule();
        message.selector = (_a = object.selector) !== null && _a !== void 0 ? _a : undefined;
        message.get = (_b = object.get) !== null && _b !== void 0 ? _b : undefined;
        message.put = (_c = object.put) !== null && _c !== void 0 ? _c : undefined;
        message.post = (_d = object.post) !== null && _d !== void 0 ? _d : undefined;
        message.delete = (_e = object.delete) !== null && _e !== void 0 ? _e : undefined;
        message.patch = (_f = object.patch) !== null && _f !== void 0 ? _f : undefined;
        message.custom = (object.custom !== undefined && object.custom !== null)
            ? exports.CustomHttpPattern.fromPartial(object.custom)
            : undefined;
        message.body = (_g = object.body) !== null && _g !== void 0 ? _g : undefined;
        message.responseBody = (_h = object.responseBody) !== null && _h !== void 0 ? _h : undefined;
        message.additionalBindings = ((_j = object.additionalBindings) === null || _j === void 0 ? void 0 : _j.map((e) => exports.HttpRule.fromPartial(e))) || undefined;
        return message;
    },
};
function createBaseCustomHttpPattern() {
    return {};
}
exports.CustomHttpPattern = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.kind !== undefined && message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== undefined && message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomHttpPattern();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            kind: isSet(object.kind) ? globalThis.String(object.kind) : undefined,
            path: isSet(object.path) ? globalThis.String(object.path) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== undefined && message.kind !== "") {
            obj.kind = message.kind;
        }
        if (message.path !== undefined && message.path !== "") {
            obj.path = message.path;
        }
        return obj;
    },
    create(base) {
        return exports.CustomHttpPattern.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCustomHttpPattern();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : undefined;
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
