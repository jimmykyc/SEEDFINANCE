"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51], {
        14157: function (e, t, n) {
            n.d(t, {
                f: function () {
                    return a
                }
            });
            var i = n(67294),
                r = n(16723);

            function s(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }

            function a(e, t) {
                let [n, a] = (0, i.useState)(() => s(e));
                return (0, r.e)(() => {
                    a(s(e))
                }, [e.type, e.as]), (0, r.e)(() => {
                    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button")
                }, [n, t]), n
            }
        },
        41818: function (e, t, n) {
            function i(e, t) {
                let n = Boolean(e);
                if (!n) throw Error(t)
            }

            function r(e, t) {
                switch (typeof e) {
                    case "string":
                        return JSON.stringify(e);
                    case "function":
                        return e.name ? `[function ${e.name}]` : "[function]";
                    case "object":
                        return function (e, t) {
                            if (null === e) return "null";
                            if (t.includes(e)) return "[Circular]";
                            let n = [...t, e];
                            if ("function" == typeof e.toJSON) {
                                let t = e.toJSON();
                                if (t !== e) return "string" == typeof t ? t : r(t, n)
                            } else if (Array.isArray(e)) return function (e, t) {
                                if (0 === e.length) return "[]";
                                if (t.length > 2) return "[Array]";
                                let n = Math.min(10, e.length),
                                    i = e.length - n,
                                    s = [];
                                for (let i = 0; i < n; ++i) s.push(r(e[i], t));
                                return 1 === i ? s.push("... 1 more item") : i > 1 && s.push(`... ${i} more items`), "[" + s.join(", ") + "]"
                            }(e, n);
                            return function (e, t) {
                                let n = Object.entries(e);
                                if (0 === n.length) return "{}";
                                if (t.length > 2) return "[" + function (e) {
                                    let t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
                                    if ("Object" === t && "function" == typeof e.constructor) {
                                        let t = e.constructor.name;
                                        if ("string" == typeof t && "" !== t) return t
                                    }
                                    return t
                                }(e) + "]";
                                let i = n.map(([e, n]) => e + ": " + r(n, t));
                                return "{ " + i.join(", ") + " }"
                            }(e, n)
                        }(e, t);
                    default:
                        return String(e)
                }
            }
            n.d(t, {
                eI: function () {
                    return e7
                }
            }), (Y = z || (z = {})).NAME = "Name", Y.DOCUMENT = "Document", Y.OPERATION_DEFINITION = "OperationDefinition", Y.VARIABLE_DEFINITION = "VariableDefinition", Y.SELECTION_SET = "SelectionSet", Y.FIELD = "Field", Y.ARGUMENT = "Argument", Y.FRAGMENT_SPREAD = "FragmentSpread", Y.INLINE_FRAGMENT = "InlineFragment", Y.FRAGMENT_DEFINITION = "FragmentDefinition", Y.VARIABLE = "Variable", Y.INT = "IntValue", Y.FLOAT = "FloatValue", Y.STRING = "StringValue", Y.BOOLEAN = "BooleanValue", Y.NULL = "NullValue", Y.ENUM = "EnumValue", Y.LIST = "ListValue", Y.OBJECT = "ObjectValue", Y.OBJECT_FIELD = "ObjectField", Y.DIRECTIVE = "Directive", Y.NAMED_TYPE = "NamedType", Y.LIST_TYPE = "ListType", Y.NON_NULL_TYPE = "NonNullType", Y.SCHEMA_DEFINITION = "SchemaDefinition", Y.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", Y.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", Y.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", Y.FIELD_DEFINITION = "FieldDefinition", Y.INPUT_VALUE_DEFINITION = "InputValueDefinition", Y.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", Y.UNION_TYPE_DEFINITION = "UnionTypeDefinition", Y.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", Y.ENUM_VALUE_DEFINITION = "EnumValueDefinition", Y.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", Y.DIRECTIVE_DEFINITION = "DirectiveDefinition", Y.SCHEMA_EXTENSION = "SchemaExtension", Y.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", Y.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", Y.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", Y.UNION_TYPE_EXTENSION = "UnionTypeExtension", Y.ENUM_TYPE_EXTENSION = "EnumTypeExtension", Y.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
            class s {
                constructor(e, t, n) {
                    this.start = e.start, this.end = t.end, this.startToken = e, this.endToken = t, this.source = n
                }
                get[Symbol.toStringTag]() {
                    return "Location"
                }
                toJSON() {
                    return {
                        start: this.start,
                        end: this.end
                    }
                }
            }
            class a {
                constructor(e, t, n, i, r, s) {
                    this.kind = e, this.start = t, this.end = n, this.line = i, this.column = r, this.value = s, this.prev = null, this.next = null
                }
                get[Symbol.toStringTag]() {
                    return "Token"
                }
                toJSON() {
                    return {
                        kind: this.kind,
                        value: this.value,
                        line: this.line,
                        column: this.column
                    }
                }
            }
            let o = {
                    Name: [],
                    Document: ["definitions"],
                    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
                    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
                    Variable: ["name"],
                    SelectionSet: ["selections"],
                    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
                    Argument: ["name", "value"],
                    FragmentSpread: ["name", "directives"],
                    InlineFragment: ["typeCondition", "directives", "selectionSet"],
                    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
                    IntValue: [],
                    FloatValue: [],
                    StringValue: [],
                    BooleanValue: [],
                    NullValue: [],
                    EnumValue: [],
                    ListValue: ["values"],
                    ObjectValue: ["fields"],
                    ObjectField: ["name", "value"],
                    Directive: ["name", "arguments"],
                    NamedType: ["name"],
                    ListType: ["type"],
                    NonNullType: ["type"],
                    SchemaDefinition: ["description", "directives", "operationTypes"],
                    OperationTypeDefinition: ["type"],
                    ScalarTypeDefinition: ["description", "name", "directives"],
                    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
                    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
                    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
                    UnionTypeDefinition: ["description", "name", "directives", "types"],
                    EnumTypeDefinition: ["description", "name", "directives", "values"],
                    EnumValueDefinition: ["description", "name", "directives"],
                    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
                    DirectiveDefinition: ["description", "name", "arguments", "locations"],
                    SchemaExtension: ["directives", "operationTypes"],
                    ScalarTypeExtension: ["name", "directives"],
                    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
                    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
                    UnionTypeExtension: ["name", "directives", "types"],
                    EnumTypeExtension: ["name", "directives", "values"],
                    InputObjectTypeExtension: ["name", "directives", "fields"]
                },
                l = new Set(Object.keys(o));

            function u(e) {
                let t = null == e ? void 0 : e.kind;
                return "string" == typeof t && l.has(t)
            }(J = H || (H = {})).QUERY = "query", J.MUTATION = "mutation", J.SUBSCRIPTION = "subscription";
            let c = Object.freeze({});

            function p(e, t, n = o) {
                let s, a, l;
                let p = new Map;
                for (let e of Object.values(z)) p.set(e, function (e, t) {
                    let n = e[t];
                    return "object" == typeof n ? n : "function" == typeof n ? {
                        enter: n,
                        leave: void 0
                    } : {
                        enter: e.enter,
                        leave: e.leave
                    }
                }(t, e));
                let h = Array.isArray(e),
                    d = [e],
                    f = -1,
                    E = [],
                    v = e,
                    y = [],
                    T = [];
                do {
                    var m, N, x;
                    let e;
                    f++;
                    let o = f === d.length,
                        I = o && 0 !== E.length;
                    if (o) {
                        if (a = 0 === T.length ? void 0 : y[y.length - 1], v = l, l = T.pop(), I) {
                            if (h) {
                                v = v.slice();
                                let e = 0;
                                for (let [t, n] of E) {
                                    let i = t - e;
                                    null === n ? (v.splice(i, 1), e++) : v[i] = n
                                }
                            } else
                                for (let [e, t] of (v = Object.defineProperties({}, Object.getOwnPropertyDescriptors(v)), E)) v[e] = t
                        }
                        f = s.index, d = s.keys, E = s.edits, h = s.inArray, s = s.prev
                    } else if (l) {
                        if (null == (v = l[a = h ? f : d[f]])) continue;
                        y.push(a)
                    }
                    if (!Array.isArray(v)) {
                        u(v) || i(!1, `Invalid AST Node: ${r(v,[])}.`);
                        let n = o ? null === (m = p.get(v.kind)) || void 0 === m ? void 0 : m.leave : null === (N = p.get(v.kind)) || void 0 === N ? void 0 : N.enter;
                        if ((e = null == n ? void 0 : n.call(t, v, a, l, y, T)) === c) break;
                        if (!1 === e) {
                            if (!o) {
                                y.pop();
                                continue
                            }
                        } else if (void 0 !== e && (E.push([a, e]), !o)) {
                            if (u(e)) v = e;
                            else {
                                y.pop();
                                continue
                            }
                        }
                    }
                    void 0 === e && I && E.push([a, v]), o ? y.pop() : (s = {
                        inArray: h,
                        index: f,
                        keys: d,
                        edits: E,
                        prev: s
                    }, d = (h = Array.isArray(v)) ? v : null !== (x = n[v.kind]) && void 0 !== x ? x : [], f = -1, E = [], l && T.push(l), l = v)
                } while (void 0 !== s);
                return 0 !== E.length ? E[E.length - 1][1] : e
            }
            let h = /\r\n|[\n\r]/g;

            function d(e, t) {
                let n = 0,
                    i = 1;
                for (let r of e.body.matchAll(h)) {
                    if ("number" == typeof r.index || function (e, t) {
                            let n = Boolean(e);
                            if (!n) throw Error(null != t ? t : "Unexpected invariant triggered.")
                        }(!1), r.index >= t) break;
                    n = r.index + r[0].length, i += 1
                }
                return {
                    line: i,
                    column: t + 1 - n
                }
            }

            function f(e, t) {
                let n = e.locationOffset.column - 1,
                    i = "".padStart(n) + e.body,
                    r = t.line - 1,
                    s = e.locationOffset.line - 1,
                    a = t.line + s,
                    o = 1 === t.line ? n : 0,
                    l = t.column + o,
                    u = `${e.name}:${a}:${l}
`,
                    c = i.split(/\r\n|[\n\r]/g),
                    p = c[r];
                if (p.length > 120) {
                    let e = Math.floor(l / 80),
                        t = [];
                    for (let e = 0; e < p.length; e += 80) t.push(p.slice(e, e + 80));
                    return u + E([
                        [`${a} |`, t[0]], ...t.slice(1, e + 1).map(e => ["|", e]), ["|", "^".padStart(l % 80)],
                        ["|", t[e + 1]]
                    ])
                }
                return u + E([
                    [`${a-1} |`, c[r - 1]],
                    [`${a} |`, p],
                    ["|", "^".padStart(l)],
                    [`${a+1} |`, c[r + 1]]
                ])
            }

            function E(e) {
                let t = e.filter(([e, t]) => void 0 !== t),
                    n = Math.max(...t.map(([e]) => e.length));
                return t.map(([e, t]) => e.padStart(n) + (t ? " " + t : "")).join("\n")
            }
            class v extends Error {
                constructor(e, ...t) {
                    var n, i, r, s;
                    let {
                        nodes: a,
                        source: o,
                        positions: l,
                        path: u,
                        originalError: c,
                        extensions: p
                    } = function (e) {
                        let t = e[0];
                        return null == t || "kind" in t || "length" in t ? {
                            nodes: t,
                            source: e[1],
                            positions: e[2],
                            path: e[3],
                            originalError: e[4],
                            extensions: e[5]
                        } : t
                    }(t);
                    super(e), this.name = "GraphQLError", this.path = null != u ? u : void 0, this.originalError = null != c ? c : void 0, this.nodes = y(Array.isArray(a) ? a : a ? [a] : void 0);
                    let h = y(null === (n = this.nodes) || void 0 === n ? void 0 : n.map(e => e.loc).filter(e => null != e));
                    this.source = null != o ? o : null == h ? void 0 : null === (i = h[0]) || void 0 === i ? void 0 : i.source, this.positions = null != l ? l : null == h ? void 0 : h.map(e => e.start), this.locations = l && o ? l.map(e => d(o, e)) : null == h ? void 0 : h.map(e => d(e.source, e.start));
                    let f = "object" == typeof (s = null == c ? void 0 : c.extensions) && null !== s ? null == c ? void 0 : c.extensions : void 0;
                    this.extensions = null !== (r = null != p ? p : f) && void 0 !== r ? r : Object.create(null), Object.defineProperties(this, {
                        message: {
                            writable: !0,
                            enumerable: !0
                        },
                        name: {
                            enumerable: !1
                        },
                        nodes: {
                            enumerable: !1
                        },
                        source: {
                            enumerable: !1
                        },
                        positions: {
                            enumerable: !1
                        },
                        originalError: {
                            enumerable: !1
                        }
                    }), null != c && c.stack ? Object.defineProperty(this, "stack", {
                        value: c.stack,
                        writable: !0,
                        configurable: !0
                    }) : Error.captureStackTrace ? Error.captureStackTrace(this, v) : Object.defineProperty(this, "stack", {
                        value: Error().stack,
                        writable: !0,
                        configurable: !0
                    })
                }
                get[Symbol.toStringTag]() {
                    return "GraphQLError"
                }
                toString() {
                    let e = this.message;
                    if (this.nodes) {
                        for (let n of this.nodes)
                            if (n.loc) {
                                var t;
                                e += "\n\n" + f((t = n.loc).source, d(t.source, t.start))
                            }
                    } else if (this.source && this.locations)
                        for (let t of this.locations) e += "\n\n" + f(this.source, t);
                    return e
                }
                toJSON() {
                    let e = {
                        message: this.message
                    };
                    return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
                }
            }

            function y(e) {
                return void 0 === e || 0 === e.length ? void 0 : e
            }

            function T(e) {
                return 9 === e || 32 === e
            }

            function m(e) {
                return e >= 48 && e <= 57
            }

            function N(e) {
                return e >= 97 && e <= 122 || e >= 65 && e <= 90
            }

            function x(e) {
                return N(e) || 95 === e
            }
            let I = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

            function O(e) {
                return k[e.charCodeAt(0)]
            }
            let k = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
                _ = {
                    Name: {
                        leave: e => e.value
                    },
                    Variable: {
                        leave: e => "$" + e.name
                    },
                    Document: {
                        leave: e => A(e.definitions, "\n\n")
                    },
                    OperationDefinition: {
                        leave(e) {
                            let t = D("(", A(e.variableDefinitions, ", "), ")"),
                                n = A([e.operation, A([e.name, t]), A(e.directives, " ")], " ");
                            return ("query" === n ? "" : n + " ") + e.selectionSet
                        }
                    },
                    VariableDefinition: {
                        leave: ({
                            variable: e,
                            type: t,
                            defaultValue: n,
                            directives: i
                        }) => e + ": " + t + D(" = ", n) + D(" ", A(i, " "))
                    },
                    SelectionSet: {
                        leave: ({
                            selections: e
                        }) => g(e)
                    },
                    Field: {
                        leave({
                            alias: e,
                            name: t,
                            arguments: n,
                            directives: i,
                            selectionSet: r
                        }) {
                            let s = D("", e, ": ") + t,
                                a = s + D("(", A(n, ", "), ")");
                            return a.length > 80 && (a = s + D("(\n", S(A(n, "\n")), "\n)")), A([a, A(i, " "), r], " ")
                        }
                    },
                    Argument: {
                        leave: ({
                            name: e,
                            value: t
                        }) => e + ": " + t
                    },
                    FragmentSpread: {
                        leave: ({
                            name: e,
                            directives: t
                        }) => "..." + e + D(" ", A(t, " "))
                    },
                    InlineFragment: {
                        leave: ({
                            typeCondition: e,
                            directives: t,
                            selectionSet: n
                        }) => A(["...", D("on ", e), A(t, " "), n], " ")
                    },
                    FragmentDefinition: {
                        leave: ({
                            name: e,
                            typeCondition: t,
                            variableDefinitions: n,
                            directives: i,
                            selectionSet: r
                        }) => `fragment ${e}${D("(",A(n,", "),")")} on ${t} ${D("",A(i," ")," ")}` + r
                    },
                    IntValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    FloatValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    StringValue: {
                        leave: ({
                            value: e,
                            block: t
                        }) => t ? function (e, t) {
                            let n = e.replace(/"""/g, '\\"""'),
                                i = n.split(/\r\n|[\n\r]/g),
                                r = 1 === i.length,
                                s = i.length > 1 && i.slice(1).every(e => 0 === e.length || T(e.charCodeAt(0))),
                                a = n.endsWith('\\"""'),
                                o = e.endsWith('"') && !a,
                                l = e.endsWith("\\"),
                                u = o || l,
                                c = !(null != t && t.minimize) && (!r || e.length > 70 || u || s || a),
                                p = "",
                                h = r && T(e.charCodeAt(0));
                            return (c && !h || s) && (p += "\n"), p += n, (c || u) && (p += "\n"), '"""' + p + '"""'
                        }(e) : `"${e.replace(I,O)}"`
                    },
                    BooleanValue: {
                        leave: ({
                            value: e
                        }) => e ? "true" : "false"
                    },
                    NullValue: {
                        leave: () => "null"
                    },
                    EnumValue: {
                        leave: ({
                            value: e
                        }) => e
                    },
                    ListValue: {
                        leave: ({
                            values: e
                        }) => "[" + A(e, ", ") + "]"
                    },
                    ObjectValue: {
                        leave: ({
                            fields: e
                        }) => "{" + A(e, ", ") + "}"
                    },
                    ObjectField: {
                        leave: ({
                            name: e,
                            value: t
                        }) => e + ": " + t
                    },
                    Directive: {
                        leave: ({
                            name: e,
                            arguments: t
                        }) => "@" + e + D("(", A(t, ", "), ")")
                    },
                    NamedType: {
                        leave: ({
                            name: e
                        }) => e
                    },
                    ListType: {
                        leave: ({
                            type: e
                        }) => "[" + e + "]"
                    },
                    NonNullType: {
                        leave: ({
                            type: e
                        }) => e + "!"
                    },
                    SchemaDefinition: {
                        leave: ({
                            description: e,
                            directives: t,
                            operationTypes: n
                        }) => D("", e, "\n") + A(["schema", A(t, " "), g(n)], " ")
                    },
                    OperationTypeDefinition: {
                        leave: ({
                            operation: e,
                            type: t
                        }) => e + ": " + t
                    },
                    ScalarTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n
                        }) => D("", e, "\n") + A(["scalar", t, A(n, " ")], " ")
                    },
                    ObjectTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            interfaces: n,
                            directives: i,
                            fields: r
                        }) => D("", e, "\n") + A(["type", t, D("implements ", A(n, " & ")), A(i, " "), g(r)], " ")
                    },
                    FieldDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            arguments: n,
                            type: i,
                            directives: r
                        }) => D("", e, "\n") + t + (b(n) ? D("(\n", S(A(n, "\n")), "\n)") : D("(", A(n, ", "), ")")) + ": " + i + D(" ", A(r, " "))
                    },
                    InputValueDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            type: n,
                            defaultValue: i,
                            directives: r
                        }) => D("", e, "\n") + A([t + ": " + n, D("= ", i), A(r, " ")], " ")
                    },
                    InterfaceTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            interfaces: n,
                            directives: i,
                            fields: r
                        }) => D("", e, "\n") + A(["interface", t, D("implements ", A(n, " & ")), A(i, " "), g(r)], " ")
                    },
                    UnionTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            types: i
                        }) => D("", e, "\n") + A(["union", t, A(n, " "), D("= ", A(i, " | "))], " ")
                    },
                    EnumTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            values: i
                        }) => D("", e, "\n") + A(["enum", t, A(n, " "), g(i)], " ")
                    },
                    EnumValueDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n
                        }) => D("", e, "\n") + A([t, A(n, " ")], " ")
                    },
                    InputObjectTypeDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            directives: n,
                            fields: i
                        }) => D("", e, "\n") + A(["input", t, A(n, " "), g(i)], " ")
                    },
                    DirectiveDefinition: {
                        leave: ({
                            description: e,
                            name: t,
                            arguments: n,
                            repeatable: i,
                            locations: r
                        }) => D("", e, "\n") + "directive @" + t + (b(n) ? D("(\n", S(A(n, "\n")), "\n)") : D("(", A(n, ", "), ")")) + (i ? " repeatable" : "") + " on " + A(r, " | ")
                    },
                    SchemaExtension: {
                        leave: ({
                            directives: e,
                            operationTypes: t
                        }) => A(["extend schema", A(e, " "), g(t)], " ")
                    },
                    ScalarTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t
                        }) => A(["extend scalar", e, A(t, " ")], " ")
                    },
                    ObjectTypeExtension: {
                        leave: ({
                            name: e,
                            interfaces: t,
                            directives: n,
                            fields: i
                        }) => A(["extend type", e, D("implements ", A(t, " & ")), A(n, " "), g(i)], " ")
                    },
                    InterfaceTypeExtension: {
                        leave: ({
                            name: e,
                            interfaces: t,
                            directives: n,
                            fields: i
                        }) => A(["extend interface", e, D("implements ", A(t, " & ")), A(n, " "), g(i)], " ")
                    },
                    UnionTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            types: n
                        }) => A(["extend union", e, A(t, " "), D("= ", A(n, " | "))], " ")
                    },
                    EnumTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            values: n
                        }) => A(["extend enum", e, A(t, " "), g(n)], " ")
                    },
                    InputObjectTypeExtension: {
                        leave: ({
                            name: e,
                            directives: t,
                            fields: n
                        }) => A(["extend input", e, A(t, " "), g(n)], " ")
                    }
                };

            function A(e, t = "") {
                var n;
                return null !== (n = null == e ? void 0 : e.filter(e => e).join(t)) && void 0 !== n ? n : ""
            }

            function g(e) {
                return D("{\n", S(A(e, "\n")), "\n}")
            }

            function D(e, t, n = "") {
                return null != t && "" !== t ? e + t + n : ""
            }

            function S(e) {
                return D("  ", e.replace(/\n/g, "\n  "))
            }

            function b(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.some(e => e.includes("\n"))) && void 0 !== t && t
            }

            function C(e, t, n) {
                return new v(`Syntax Error: ${n}`, {
                    source: e,
                    positions: [t]
                })
            }(Q = W || (W = {})).QUERY = "QUERY", Q.MUTATION = "MUTATION", Q.SUBSCRIPTION = "SUBSCRIPTION", Q.FIELD = "FIELD", Q.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", Q.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", Q.INLINE_FRAGMENT = "INLINE_FRAGMENT", Q.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", Q.SCHEMA = "SCHEMA", Q.SCALAR = "SCALAR", Q.OBJECT = "OBJECT", Q.FIELD_DEFINITION = "FIELD_DEFINITION", Q.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", Q.INTERFACE = "INTERFACE", Q.UNION = "UNION", Q.ENUM = "ENUM", Q.ENUM_VALUE = "ENUM_VALUE", Q.INPUT_OBJECT = "INPUT_OBJECT", Q.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION", (X = Z || (Z = {})).SOF = "<SOF>", X.EOF = "<EOF>", X.BANG = "!", X.DOLLAR = "$", X.AMP = "&", X.PAREN_L = "(", X.PAREN_R = ")", X.SPREAD = "...", X.COLON = ":", X.EQUALS = "=", X.AT = "@", X.BRACKET_L = "[", X.BRACKET_R = "]", X.BRACE_L = "{", X.PIPE = "|", X.BRACE_R = "}", X.NAME = "Name", X.INT = "Int", X.FLOAT = "Float", X.STRING = "String", X.BLOCK_STRING = "BlockString", X.COMMENT = "Comment";
            class L {
                constructor(e) {
                    let t = new a(Z.SOF, 0, 0, 0, 0);
                    this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
                }
                get[Symbol.toStringTag]() {
                    return "Lexer"
                }
                advance() {
                    this.lastToken = this.token;
                    let e = this.token = this.lookahead();
                    return e
                }
                lookahead() {
                    let e = this.token;
                    if (e.kind !== Z.EOF)
                        do
                            if (e.next) e = e.next;
                            else {
                                let t = function (e, t) {
                                    let n = e.source.body,
                                        i = n.length,
                                        r = t;
                                    for (; r < i;) {
                                        let t = n.charCodeAt(r);
                                        switch (t) {
                                            case 65279:
                                            case 9:
                                            case 32:
                                            case 44:
                                                ++r;
                                                continue;
                                            case 10:
                                                ++r, ++e.line, e.lineStart = r;
                                                continue;
                                            case 13:
                                                10 === n.charCodeAt(r + 1) ? r += 2 : ++r, ++e.line, e.lineStart = r;
                                                continue;
                                            case 35:
                                                return function (e, t) {
                                                    let n = e.source.body,
                                                        i = n.length,
                                                        r = t + 1;
                                                    for (; r < i;) {
                                                        let e = n.charCodeAt(r);
                                                        if (10 === e || 13 === e) break;
                                                        if (R(e)) ++r;
                                                        else if (w(n, r)) r += 2;
                                                        else break
                                                    }
                                                    return U(e, Z.COMMENT, t, r, n.slice(t + 1, r))
                                                }(e, r);
                                            case 33:
                                                return U(e, Z.BANG, r, r + 1);
                                            case 36:
                                                return U(e, Z.DOLLAR, r, r + 1);
                                            case 38:
                                                return U(e, Z.AMP, r, r + 1);
                                            case 40:
                                                return U(e, Z.PAREN_L, r, r + 1);
                                            case 41:
                                                return U(e, Z.PAREN_R, r, r + 1);
                                            case 46:
                                                if (46 === n.charCodeAt(r + 1) && 46 === n.charCodeAt(r + 2)) return U(e, Z.SPREAD, r, r + 3);
                                                break;
                                            case 58:
                                                return U(e, Z.COLON, r, r + 1);
                                            case 61:
                                                return U(e, Z.EQUALS, r, r + 1);
                                            case 64:
                                                return U(e, Z.AT, r, r + 1);
                                            case 91:
                                                return U(e, Z.BRACKET_L, r, r + 1);
                                            case 93:
                                                return U(e, Z.BRACKET_R, r, r + 1);
                                            case 123:
                                                return U(e, Z.BRACE_L, r, r + 1);
                                            case 124:
                                                return U(e, Z.PIPE, r, r + 1);
                                            case 125:
                                                return U(e, Z.BRACE_R, r, r + 1);
                                            case 34:
                                                if (34 === n.charCodeAt(r + 1) && 34 === n.charCodeAt(r + 2)) return function (e, t) {
                                                    let n = e.source.body,
                                                        i = n.length,
                                                        r = e.lineStart,
                                                        s = t + 3,
                                                        a = s,
                                                        o = "",
                                                        l = [];
                                                    for (; s < i;) {
                                                        let i = n.charCodeAt(s);
                                                        if (34 === i && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)) {
                                                            o += n.slice(a, s), l.push(o);
                                                            let i = U(e, Z.BLOCK_STRING, t, s + 3, (function (e) {
                                                                var t, n;
                                                                let i = Number.MAX_SAFE_INTEGER,
                                                                    r = null,
                                                                    s = -1;
                                                                for (let t = 0; t < e.length; ++t) {
                                                                    let a = e[t],
                                                                        o = function (e) {
                                                                            let t = 0;
                                                                            for (; t < e.length && T(e.charCodeAt(t));) ++t;
                                                                            return t
                                                                        }(a);
                                                                    o !== a.length && (r = null !== (n = r) && void 0 !== n ? n : t, s = t, 0 !== t && o < i && (i = o))
                                                                }
                                                                return e.map((e, t) => 0 === t ? e : e.slice(i)).slice(null !== (t = r) && void 0 !== t ? t : 0, s + 1)
                                                            })(l).join("\n"));
                                                            return e.line += l.length - 1, e.lineStart = r, i
                                                        }
                                                        if (92 === i && 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2) && 34 === n.charCodeAt(s + 3)) {
                                                            o += n.slice(a, s), a = s + 1, s += 4;
                                                            continue
                                                        }
                                                        if (10 === i || 13 === i) {
                                                            o += n.slice(a, s), l.push(o), 13 === i && 10 === n.charCodeAt(s + 1) ? s += 2 : ++s, o = "", a = s, r = s;
                                                            continue
                                                        }
                                                        if (R(i)) ++s;
                                                        else if (w(n, s)) s += 2;
                                                        else throw C(e.source, s, `Invalid character within String: ${M(e,s)}.`)
                                                    }
                                                    throw C(e.source, s, "Unterminated string.")
                                                }(e, r);
                                                return function (e, t) {
                                                    let n = e.source.body,
                                                        i = n.length,
                                                        r = t + 1,
                                                        s = r,
                                                        a = "";
                                                    for (; r < i;) {
                                                        let i = n.charCodeAt(r);
                                                        if (34 === i) return a += n.slice(s, r), U(e, Z.STRING, t, r + 1, a);
                                                        if (92 === i) {
                                                            a += n.slice(s, r);
                                                            let t = 117 === n.charCodeAt(r + 1) ? 123 === n.charCodeAt(r + 2) ? function (e, t) {
                                                                let n = e.source.body,
                                                                    i = 0,
                                                                    r = 3;
                                                                for (; r < 12;) {
                                                                    let e = n.charCodeAt(t + r++);
                                                                    if (125 === e) {
                                                                        if (r < 5 || !R(i)) break;
                                                                        return {
                                                                            value: String.fromCodePoint(i),
                                                                            size: r
                                                                        }
                                                                    }
                                                                    if ((i = i << 4 | j(e)) < 0) break
                                                                }
                                                                throw C(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)
                                                            }(e, r) : function (e, t) {
                                                                let n = e.source.body,
                                                                    i = V(n, t + 2);
                                                                if (R(i)) return {
                                                                    value: String.fromCodePoint(i),
                                                                    size: 6
                                                                };
                                                                if (F(i) && 92 === n.charCodeAt(t + 6) && 117 === n.charCodeAt(t + 7)) {
                                                                    let e = V(n, t + 8);
                                                                    if (P(e)) return {
                                                                        value: String.fromCodePoint(i, e),
                                                                        size: 12
                                                                    }
                                                                }
                                                                throw C(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
                                                            }(e, r) : function (e, t) {
                                                                let n = e.source.body,
                                                                    i = n.charCodeAt(t + 1);
                                                                switch (i) {
                                                                    case 34:
                                                                        return {
                                                                            value: '"', size: 2
                                                                        };
                                                                    case 92:
                                                                        return {
                                                                            value: "\\", size: 2
                                                                        };
                                                                    case 47:
                                                                        return {
                                                                            value: "/", size: 2
                                                                        };
                                                                    case 98:
                                                                        return {
                                                                            value: "\b", size: 2
                                                                        };
                                                                    case 102:
                                                                        return {
                                                                            value: "\f", size: 2
                                                                        };
                                                                    case 110:
                                                                        return {
                                                                            value: "\n", size: 2
                                                                        };
                                                                    case 114:
                                                                        return {
                                                                            value: "\r", size: 2
                                                                        };
                                                                    case 116:
                                                                        return {
                                                                            value: "	", size: 2
                                                                        }
                                                                }
                                                                throw C(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
                                                            }(e, r);
                                                            a += t.value, r += t.size, s = r;
                                                            continue
                                                        }
                                                        if (10 === i || 13 === i) break;
                                                        if (R(i)) ++r;
                                                        else if (w(n, r)) r += 2;
                                                        else throw C(e.source, r, `Invalid character within String: ${M(e,r)}.`)
                                                    }
                                                    throw C(e.source, r, "Unterminated string.")
                                                }(e, r)
                                        }
                                        if (m(t) || 45 === t) return function (e, t, n) {
                                            let i = e.source.body,
                                                r = t,
                                                s = n,
                                                a = !1;
                                            if (45 === s && (s = i.charCodeAt(++r)), 48 === s) {
                                                if (m(s = i.charCodeAt(++r))) throw C(e.source, r, `Invalid number, unexpected digit after 0: ${M(e,r)}.`)
                                            } else r = B(e, r, s), s = i.charCodeAt(r);
                                            if (46 === s && (a = !0, s = i.charCodeAt(++r), r = B(e, r, s), s = i.charCodeAt(r)), (69 === s || 101 === s) && (a = !0, (43 === (s = i.charCodeAt(++r)) || 45 === s) && (s = i.charCodeAt(++r)), r = B(e, r, s), s = i.charCodeAt(r)), 46 === s || x(s)) throw C(e.source, r, `Invalid number, expected digit but got: ${M(e,r)}.`);
                                            return U(e, a ? Z.FLOAT : Z.INT, t, r, i.slice(t, r))
                                        }(e, r, t);
                                        if (x(t)) return function (e, t) {
                                            let n = e.source.body,
                                                i = n.length,
                                                r = t + 1;
                                            for (; r < i;) {
                                                let e = n.charCodeAt(r);
                                                if (N(e) || m(e) || 95 === e) ++r;
                                                else break
                                            }
                                            return U(e, Z.NAME, t, r, n.slice(t, r))
                                        }(e, r);
                                        throw C(e.source, r, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : R(t) || w(n, r) ? `Unexpected character: ${M(e,r)}.` : `Invalid character: ${M(e,r)}.`)
                                    }
                                    return U(e, Z.EOF, i, i)
                                }(this, e.end);
                                e.next = t, t.prev = e, e = t
                            } while (e.kind === Z.COMMENT);
                    return e
                }
            }

            function R(e) {
                return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
            }

            function w(e, t) {
                return F(e.charCodeAt(t)) && P(e.charCodeAt(t + 1))
            }

            function F(e) {
                return e >= 55296 && e <= 56319
            }

            function P(e) {
                return e >= 56320 && e <= 57343
            }

            function M(e, t) {
                let n = e.source.body.codePointAt(t);
                if (void 0 === n) return Z.EOF;
                if (n >= 32 && n <= 126) {
                    let e = String.fromCodePoint(n);
                    return '"' === e ? "'\"'" : `"${e}"`
                }
                return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
            }

            function U(e, t, n, i, r) {
                let s = e.line,
                    o = 1 + n - e.lineStart;
                return new a(t, n, i, s, o, r)
            }

            function B(e, t, n) {
                if (!m(n)) throw C(e.source, t, `Invalid number, expected digit but got: ${M(e,t)}.`);
                let i = e.source.body,
                    r = t + 1;
                for (; m(i.charCodeAt(r));) ++r;
                return r
            }

            function V(e, t) {
                return j(e.charCodeAt(t)) << 12 | j(e.charCodeAt(t + 1)) << 8 | j(e.charCodeAt(t + 2)) << 4 | j(e.charCodeAt(t + 3))
            }

            function j(e) {
                return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
            }
            class q {
                constructor(e, t = "GraphQL request", n = {
                    line: 1,
                    column: 1
                }) {
                    "string" == typeof e || i(!1, `Body must be a string. Received: ${r(e,[])}.`), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || i(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || i(!1, "column in locationOffset is 1-indexed and must be positive.")
                }
                get[Symbol.toStringTag]() {
                    return "Source"
                }
            }
            class $ {
                constructor(e, t = {}) {
                    let n = e instanceof q ? e : new q(e);
                    this._lexer = new L(n), this._options = t, this._tokenCounter = 0
                }
                parseName() {
                    let e = this.expectToken(Z.NAME);
                    return this.node(e, {
                        kind: z.NAME,
                        value: e.value
                    })
                }
                parseDocument() {
                    return this.node(this._lexer.token, {
                        kind: z.DOCUMENT,
                        definitions: this.many(Z.SOF, this.parseDefinition, Z.EOF)
                    })
                }
                parseDefinition() {
                    if (this.peek(Z.BRACE_L)) return this.parseOperationDefinition();
                    let e = this.peekDescription(),
                        t = e ? this._lexer.lookahead() : this._lexer.token;
                    if (t.kind === Z.NAME) {
                        switch (t.value) {
                            case "schema":
                                return this.parseSchemaDefinition();
                            case "scalar":
                                return this.parseScalarTypeDefinition();
                            case "type":
                                return this.parseObjectTypeDefinition();
                            case "interface":
                                return this.parseInterfaceTypeDefinition();
                            case "union":
                                return this.parseUnionTypeDefinition();
                            case "enum":
                                return this.parseEnumTypeDefinition();
                            case "input":
                                return this.parseInputObjectTypeDefinition();
                            case "directive":
                                return this.parseDirectiveDefinition()
                        }
                        if (e) throw C(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
                        switch (t.value) {
                            case "query":
                            case "mutation":
                            case "subscription":
                                return this.parseOperationDefinition();
                            case "fragment":
                                return this.parseFragmentDefinition();
                            case "extend":
                                return this.parseTypeSystemExtension()
                        }
                    }
                    throw this.unexpected(t)
                }
                parseOperationDefinition() {
                    let e;
                    let t = this._lexer.token;
                    if (this.peek(Z.BRACE_L)) return this.node(t, {
                        kind: z.OPERATION_DEFINITION,
                        operation: H.QUERY,
                        name: void 0,
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: this.parseSelectionSet()
                    });
                    let n = this.parseOperationType();
                    return this.peek(Z.NAME) && (e = this.parseName()), this.node(t, {
                        kind: z.OPERATION_DEFINITION,
                        operation: n,
                        name: e,
                        variableDefinitions: this.parseVariableDefinitions(),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseOperationType() {
                    let e = this.expectToken(Z.NAME);
                    switch (e.value) {
                        case "query":
                            return H.QUERY;
                        case "mutation":
                            return H.MUTATION;
                        case "subscription":
                            return H.SUBSCRIPTION
                    }
                    throw this.unexpected(e)
                }
                parseVariableDefinitions() {
                    return this.optionalMany(Z.PAREN_L, this.parseVariableDefinition, Z.PAREN_R)
                }
                parseVariableDefinition() {
                    return this.node(this._lexer.token, {
                        kind: z.VARIABLE_DEFINITION,
                        variable: this.parseVariable(),
                        type: (this.expectToken(Z.COLON), this.parseTypeReference()),
                        defaultValue: this.expectOptionalToken(Z.EQUALS) ? this.parseConstValueLiteral() : void 0,
                        directives: this.parseConstDirectives()
                    })
                }
                parseVariable() {
                    let e = this._lexer.token;
                    return this.expectToken(Z.DOLLAR), this.node(e, {
                        kind: z.VARIABLE,
                        name: this.parseName()
                    })
                }
                parseSelectionSet() {
                    return this.node(this._lexer.token, {
                        kind: z.SELECTION_SET,
                        selections: this.many(Z.BRACE_L, this.parseSelection, Z.BRACE_R)
                    })
                }
                parseSelection() {
                    return this.peek(Z.SPREAD) ? this.parseFragment() : this.parseField()
                }
                parseField() {
                    let e, t;
                    let n = this._lexer.token,
                        i = this.parseName();
                    return this.expectOptionalToken(Z.COLON) ? (e = i, t = this.parseName()) : t = i, this.node(n, {
                        kind: z.FIELD,
                        alias: e,
                        name: t,
                        arguments: this.parseArguments(!1),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.peek(Z.BRACE_L) ? this.parseSelectionSet() : void 0
                    })
                }
                parseArguments(e) {
                    let t = e ? this.parseConstArgument : this.parseArgument;
                    return this.optionalMany(Z.PAREN_L, t, Z.PAREN_R)
                }
                parseArgument(e = !1) {
                    let t = this._lexer.token,
                        n = this.parseName();
                    return this.expectToken(Z.COLON), this.node(t, {
                        kind: z.ARGUMENT,
                        name: n,
                        value: this.parseValueLiteral(e)
                    })
                }
                parseConstArgument() {
                    return this.parseArgument(!0)
                }
                parseFragment() {
                    let e = this._lexer.token;
                    this.expectToken(Z.SPREAD);
                    let t = this.expectOptionalKeyword("on");
                    return !t && this.peek(Z.NAME) ? this.node(e, {
                        kind: z.FRAGMENT_SPREAD,
                        name: this.parseFragmentName(),
                        directives: this.parseDirectives(!1)
                    }) : this.node(e, {
                        kind: z.INLINE_FRAGMENT,
                        typeCondition: t ? this.parseNamedType() : void 0,
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseFragmentDefinition() {
                    let e = this._lexer.token;
                    return (this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables) ? this.node(e, {
                        kind: z.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    }) : this.node(e, {
                        kind: z.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet()
                    })
                }
                parseFragmentName() {
                    if ("on" === this._lexer.token.value) throw this.unexpected();
                    return this.parseName()
                }
                parseValueLiteral(e) {
                    let t = this._lexer.token;
                    switch (t.kind) {
                        case Z.BRACKET_L:
                            return this.parseList(e);
                        case Z.BRACE_L:
                            return this.parseObject(e);
                        case Z.INT:
                            return this.advanceLexer(), this.node(t, {
                                kind: z.INT,
                                value: t.value
                            });
                        case Z.FLOAT:
                            return this.advanceLexer(), this.node(t, {
                                kind: z.FLOAT,
                                value: t.value
                            });
                        case Z.STRING:
                        case Z.BLOCK_STRING:
                            return this.parseStringLiteral();
                        case Z.NAME:
                            switch (this.advanceLexer(), t.value) {
                                case "true":
                                    return this.node(t, {
                                        kind: z.BOOLEAN,
                                        value: !0
                                    });
                                case "false":
                                    return this.node(t, {
                                        kind: z.BOOLEAN,
                                        value: !1
                                    });
                                case "null":
                                    return this.node(t, {
                                        kind: z.NULL
                                    });
                                default:
                                    return this.node(t, {
                                        kind: z.ENUM,
                                        value: t.value
                                    })
                            }
                            case Z.DOLLAR:
                                if (e) {
                                    if (this.expectToken(Z.DOLLAR), this._lexer.token.kind === Z.NAME) {
                                        let e = this._lexer.token.value;
                                        throw C(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
                                    }
                                    throw this.unexpected(t)
                                }
                                return this.parseVariable();
                            default:
                                throw this.unexpected()
                    }
                }
                parseConstValueLiteral() {
                    return this.parseValueLiteral(!0)
                }
                parseStringLiteral() {
                    let e = this._lexer.token;
                    return this.advanceLexer(), this.node(e, {
                        kind: z.STRING,
                        value: e.value,
                        block: e.kind === Z.BLOCK_STRING
                    })
                }
                parseList(e) {
                    let t = () => this.parseValueLiteral(e);
                    return this.node(this._lexer.token, {
                        kind: z.LIST,
                        values: this.any(Z.BRACKET_L, t, Z.BRACKET_R)
                    })
                }
                parseObject(e) {
                    let t = () => this.parseObjectField(e);
                    return this.node(this._lexer.token, {
                        kind: z.OBJECT,
                        fields: this.any(Z.BRACE_L, t, Z.BRACE_R)
                    })
                }
                parseObjectField(e) {
                    let t = this._lexer.token,
                        n = this.parseName();
                    return this.expectToken(Z.COLON), this.node(t, {
                        kind: z.OBJECT_FIELD,
                        name: n,
                        value: this.parseValueLiteral(e)
                    })
                }
                parseDirectives(e) {
                    let t = [];
                    for (; this.peek(Z.AT);) t.push(this.parseDirective(e));
                    return t
                }
                parseConstDirectives() {
                    return this.parseDirectives(!0)
                }
                parseDirective(e) {
                    let t = this._lexer.token;
                    return this.expectToken(Z.AT), this.node(t, {
                        kind: z.DIRECTIVE,
                        name: this.parseName(),
                        arguments: this.parseArguments(e)
                    })
                }
                parseTypeReference() {
                    let e;
                    let t = this._lexer.token;
                    if (this.expectOptionalToken(Z.BRACKET_L)) {
                        let n = this.parseTypeReference();
                        this.expectToken(Z.BRACKET_R), e = this.node(t, {
                            kind: z.LIST_TYPE,
                            type: n
                        })
                    } else e = this.parseNamedType();
                    return this.expectOptionalToken(Z.BANG) ? this.node(t, {
                        kind: z.NON_NULL_TYPE,
                        type: e
                    }) : e
                }
                parseNamedType() {
                    return this.node(this._lexer.token, {
                        kind: z.NAMED_TYPE,
                        name: this.parseName()
                    })
                }
                peekDescription() {
                    return this.peek(Z.STRING) || this.peek(Z.BLOCK_STRING)
                }
                parseDescription() {
                    if (this.peekDescription()) return this.parseStringLiteral()
                }
                parseSchemaDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("schema");
                    let n = this.parseConstDirectives(),
                        i = this.many(Z.BRACE_L, this.parseOperationTypeDefinition, Z.BRACE_R);
                    return this.node(e, {
                        kind: z.SCHEMA_DEFINITION,
                        description: t,
                        directives: n,
                        operationTypes: i
                    })
                }
                parseOperationTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseOperationType();
                    this.expectToken(Z.COLON);
                    let n = this.parseNamedType();
                    return this.node(e, {
                        kind: z.OPERATION_TYPE_DEFINITION,
                        operation: t,
                        type: n
                    })
                }
                parseScalarTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("scalar");
                    let n = this.parseName(),
                        i = this.parseConstDirectives();
                    return this.node(e, {
                        kind: z.SCALAR_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i
                    })
                }
                parseObjectTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("type");
                    let n = this.parseName(),
                        i = this.parseImplementsInterfaces(),
                        r = this.parseConstDirectives(),
                        s = this.parseFieldsDefinition();
                    return this.node(e, {
                        kind: z.OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: i,
                        directives: r,
                        fields: s
                    })
                }
                parseImplementsInterfaces() {
                    return this.expectOptionalKeyword("implements") ? this.delimitedMany(Z.AMP, this.parseNamedType) : []
                }
                parseFieldsDefinition() {
                    return this.optionalMany(Z.BRACE_L, this.parseFieldDefinition, Z.BRACE_R)
                }
                parseFieldDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseName(),
                        i = this.parseArgumentDefs();
                    this.expectToken(Z.COLON);
                    let r = this.parseTypeReference(),
                        s = this.parseConstDirectives();
                    return this.node(e, {
                        kind: z.FIELD_DEFINITION,
                        description: t,
                        name: n,
                        arguments: i,
                        type: r,
                        directives: s
                    })
                }
                parseArgumentDefs() {
                    return this.optionalMany(Z.PAREN_L, this.parseInputValueDef, Z.PAREN_R)
                }
                parseInputValueDef() {
                    let e;
                    let t = this._lexer.token,
                        n = this.parseDescription(),
                        i = this.parseName();
                    this.expectToken(Z.COLON);
                    let r = this.parseTypeReference();
                    this.expectOptionalToken(Z.EQUALS) && (e = this.parseConstValueLiteral());
                    let s = this.parseConstDirectives();
                    return this.node(t, {
                        kind: z.INPUT_VALUE_DEFINITION,
                        description: n,
                        name: i,
                        type: r,
                        defaultValue: e,
                        directives: s
                    })
                }
                parseInterfaceTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("interface");
                    let n = this.parseName(),
                        i = this.parseImplementsInterfaces(),
                        r = this.parseConstDirectives(),
                        s = this.parseFieldsDefinition();
                    return this.node(e, {
                        kind: z.INTERFACE_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        interfaces: i,
                        directives: r,
                        fields: s
                    })
                }
                parseUnionTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("union");
                    let n = this.parseName(),
                        i = this.parseConstDirectives(),
                        r = this.parseUnionMemberTypes();
                    return this.node(e, {
                        kind: z.UNION_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        types: r
                    })
                }
                parseUnionMemberTypes() {
                    return this.expectOptionalToken(Z.EQUALS) ? this.delimitedMany(Z.PIPE, this.parseNamedType) : []
                }
                parseEnumTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("enum");
                    let n = this.parseName(),
                        i = this.parseConstDirectives(),
                        r = this.parseEnumValuesDefinition();
                    return this.node(e, {
                        kind: z.ENUM_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        values: r
                    })
                }
                parseEnumValuesDefinition() {
                    return this.optionalMany(Z.BRACE_L, this.parseEnumValueDefinition, Z.BRACE_R)
                }
                parseEnumValueDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription(),
                        n = this.parseEnumValueName(),
                        i = this.parseConstDirectives();
                    return this.node(e, {
                        kind: z.ENUM_VALUE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i
                    })
                }
                parseEnumValueName() {
                    if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw C(this._lexer.source, this._lexer.token.start, `${K(this._lexer.token)} is reserved and cannot be used for an enum value.`);
                    return this.parseName()
                }
                parseInputObjectTypeDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("input");
                    let n = this.parseName(),
                        i = this.parseConstDirectives(),
                        r = this.parseInputFieldsDefinition();
                    return this.node(e, {
                        kind: z.INPUT_OBJECT_TYPE_DEFINITION,
                        description: t,
                        name: n,
                        directives: i,
                        fields: r
                    })
                }
                parseInputFieldsDefinition() {
                    return this.optionalMany(Z.BRACE_L, this.parseInputValueDef, Z.BRACE_R)
                }
                parseTypeSystemExtension() {
                    let e = this._lexer.lookahead();
                    if (e.kind === Z.NAME) switch (e.value) {
                        case "schema":
                            return this.parseSchemaExtension();
                        case "scalar":
                            return this.parseScalarTypeExtension();
                        case "type":
                            return this.parseObjectTypeExtension();
                        case "interface":
                            return this.parseInterfaceTypeExtension();
                        case "union":
                            return this.parseUnionTypeExtension();
                        case "enum":
                            return this.parseEnumTypeExtension();
                        case "input":
                            return this.parseInputObjectTypeExtension()
                    }
                    throw this.unexpected(e)
                }
                parseSchemaExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("schema");
                    let t = this.parseConstDirectives(),
                        n = this.optionalMany(Z.BRACE_L, this.parseOperationTypeDefinition, Z.BRACE_R);
                    if (0 === t.length && 0 === n.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.SCHEMA_EXTENSION,
                        directives: t,
                        operationTypes: n
                    })
                }
                parseScalarTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("scalar");
                    let t = this.parseName(),
                        n = this.parseConstDirectives();
                    if (0 === n.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.SCALAR_TYPE_EXTENSION,
                        name: t,
                        directives: n
                    })
                }
                parseObjectTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("type");
                    let t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        i = this.parseConstDirectives(),
                        r = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.OBJECT_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: i,
                        fields: r
                    })
                }
                parseInterfaceTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("interface");
                    let t = this.parseName(),
                        n = this.parseImplementsInterfaces(),
                        i = this.parseConstDirectives(),
                        r = this.parseFieldsDefinition();
                    if (0 === n.length && 0 === i.length && 0 === r.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.INTERFACE_TYPE_EXTENSION,
                        name: t,
                        interfaces: n,
                        directives: i,
                        fields: r
                    })
                }
                parseUnionTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("union");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        i = this.parseUnionMemberTypes();
                    if (0 === n.length && 0 === i.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.UNION_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        types: i
                    })
                }
                parseEnumTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("enum");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        i = this.parseEnumValuesDefinition();
                    if (0 === n.length && 0 === i.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.ENUM_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        values: i
                    })
                }
                parseInputObjectTypeExtension() {
                    let e = this._lexer.token;
                    this.expectKeyword("extend"), this.expectKeyword("input");
                    let t = this.parseName(),
                        n = this.parseConstDirectives(),
                        i = this.parseInputFieldsDefinition();
                    if (0 === n.length && 0 === i.length) throw this.unexpected();
                    return this.node(e, {
                        kind: z.INPUT_OBJECT_TYPE_EXTENSION,
                        name: t,
                        directives: n,
                        fields: i
                    })
                }
                parseDirectiveDefinition() {
                    let e = this._lexer.token,
                        t = this.parseDescription();
                    this.expectKeyword("directive"), this.expectToken(Z.AT);
                    let n = this.parseName(),
                        i = this.parseArgumentDefs(),
                        r = this.expectOptionalKeyword("repeatable");
                    this.expectKeyword("on");
                    let s = this.parseDirectiveLocations();
                    return this.node(e, {
                        kind: z.DIRECTIVE_DEFINITION,
                        description: t,
                        name: n,
                        arguments: i,
                        repeatable: r,
                        locations: s
                    })
                }
                parseDirectiveLocations() {
                    return this.delimitedMany(Z.PIPE, this.parseDirectiveLocation)
                }
                parseDirectiveLocation() {
                    let e = this._lexer.token,
                        t = this.parseName();
                    if (Object.prototype.hasOwnProperty.call(W, t.value)) return t;
                    throw this.unexpected(e)
                }
                node(e, t) {
                    return !0 !== this._options.noLocation && (t.loc = new s(e, this._lexer.lastToken, this._lexer.source)), t
                }
                peek(e) {
                    return this._lexer.token.kind === e
                }
                expectToken(e) {
                    let t = this._lexer.token;
                    if (t.kind === e) return this.advanceLexer(), t;
                    throw C(this._lexer.source, t.start, `Expected ${G(e)}, found ${K(t)}.`)
                }
                expectOptionalToken(e) {
                    let t = this._lexer.token;
                    return t.kind === e && (this.advanceLexer(), !0)
                }
                expectKeyword(e) {
                    let t = this._lexer.token;
                    if (t.kind === Z.NAME && t.value === e) this.advanceLexer();
                    else throw C(this._lexer.source, t.start, `Expected "${e}", found ${K(t)}.`)
                }
                expectOptionalKeyword(e) {
                    let t = this._lexer.token;
                    return t.kind === Z.NAME && t.value === e && (this.advanceLexer(), !0)
                }
                unexpected(e) {
                    let t = null != e ? e : this._lexer.token;
                    return C(this._lexer.source, t.start, `Unexpected ${K(t)}.`)
                }
                any(e, t, n) {
                    this.expectToken(e);
                    let i = [];
                    for (; !this.expectOptionalToken(n);) i.push(t.call(this));
                    return i
                }
                optionalMany(e, t, n) {
                    if (this.expectOptionalToken(e)) {
                        let e = [];
                        do e.push(t.call(this)); while (!this.expectOptionalToken(n));
                        return e
                    }
                    return []
                }
                many(e, t, n) {
                    this.expectToken(e);
                    let i = [];
                    do i.push(t.call(this)); while (!this.expectOptionalToken(n));
                    return i
                }
                delimitedMany(e, t) {
                    this.expectOptionalToken(e);
                    let n = [];
                    do n.push(t.call(this)); while (this.expectOptionalToken(e));
                    return n
                }
                advanceLexer() {
                    let {
                        maxTokens: e
                    } = this._options, t = this._lexer.advance();
                    if (void 0 !== e && t.kind !== Z.EOF && (++this._tokenCounter, this._tokenCounter > e)) throw C(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
                }
            }

            function K(e) {
                let t = e.value;
                return G(e.kind) + (null != t ? ` "${t}"` : "")
            }

            function G(e) {
                return e === Z.BANG || e === Z.DOLLAR || e === Z.AMP || e === Z.PAREN_L || e === Z.PAREN_R || e === Z.SPREAD || e === Z.COLON || e === Z.EQUALS || e === Z.AT || e === Z.BRACKET_L || e === Z.BRACKET_R || e === Z.BRACE_L || e === Z.PIPE || e === Z.BRACE_R ? `"${e}"` : e
            }
            var Y, J, Q, X, z, H, W, Z, ee = () => {};

            function et(e) {
                var t = [e];
                return t.tag = 0, t
            }

            function en(e) {
                var t = [e];
                return t.tag = 1, t
            }
            var ei = e => e;

            function er(e) {
                return t => n => {
                    var i = ee;
                    t(t => {
                        0 === t ? n(0) : 0 === t.tag ? (i = t[0], n(t)) : e(t[0]) ? n(t) : i(0)
                    })
                }
            }

            function es(e) {
                return t => n => t(t => {
                    0 === t || 0 === t.tag ? n(t) : n(en(e(t[0])))
                })
            }

            function ea(e) {
                return t => n => {
                    var i = [],
                        r = ee,
                        s = !1,
                        a = !1;
                    t(t => {
                        if (a);
                        else if (0 === t) a = !0, i.length || n(0);
                        else if (0 === t.tag) r = t[0];
                        else {
                            var o, l;
                            s = !1, o = e(t[0]), l = ee, o(e => {
                                if (0 === e) {
                                    if (i.length) {
                                        var t = i.indexOf(l);
                                        t > -1 && (i = i.slice()).splice(t, 1), i.length || (a ? n(0) : s || (s = !0, r(0)))
                                    }
                                } else 0 === e.tag ? (i.push(l = e[0]), l(0)) : i.length && (n(e), l(0))
                            }), s || (s = !0, r(0))
                        }
                    }), n(et(e => {
                        if (1 === e) {
                            a || (a = !0, r(1));
                            for (var t = 0, n = i, o = i.length; t < o; t++) n[t](1);
                            i.length = 0
                        } else {
                            a || s ? s = !1 : (s = !0, r(0));
                            for (var l = 0, u = i, c = i.length; l < c; l++) u[l](0)
                        }
                    }))
                }
            }

            function eo(e) {
                var t;
                return t = ef(e), ea(ei)(t)
            }

            function el(e) {
                return t => n => {
                    var i = !1;
                    t(t => {
                        if (i);
                        else if (0 === t) i = !0, n(0), e();
                        else if (0 === t.tag) {
                            var r = t[0];
                            n(et(t => {
                                1 === t ? (i = !0, r(1), e()) : r(t)
                            }))
                        } else n(t)
                    })
                }
            }

            function eu(e) {
                return t => n => {
                    var i = !1;
                    t(t => {
                        if (i);
                        else if (0 === t) i = !0, n(0);
                        else if (0 === t.tag) {
                            var r = t[0];
                            n(et(e => {
                                1 === e && (i = !0), r(e)
                            }))
                        } else e(t[0]), n(t)
                    })
                }
            }

            function ec(e) {
                return t => n => t(t => {
                    0 === t ? n(0) : 0 === t.tag ? (n(t), e()) : n(t)
                })
            }

            function ep(e) {
                var t = [],
                    n = ee,
                    i = !1;
                return r => {
                    t.push(r), 1 === t.length && e(e => {
                        if (0 === e) {
                            for (var r = 0, s = t, a = t.length; r < a; r++) s[r](0);
                            t.length = 0
                        } else if (0 === e.tag) n = e[0];
                        else {
                            i = !1;
                            for (var o = 0, l = t, u = t.length; o < u; o++) l[o](e)
                        }
                    }), r(et(e => {
                        if (1 === e) {
                            var s = t.indexOf(r);
                            s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1)
                        } else i || (i = !0, n(0))
                    }))
                }
            }

            function eh(e) {
                return t => n => {
                    var i = ee,
                        r = !1,
                        s = 0;
                    t(t => {
                        r || (0 === t ? (r = !0, n(0)) : 0 === t.tag ? e <= 0 ? (r = !0, n(0), t[0](1)) : i = t[0] : s++ < e ? (n(t), !r && s >= e && (r = !0, n(0), i(1))) : n(t))
                    }), n(et(t => {
                        1 !== t || r ? 0 === t && !r && s < e && i(0) : (r = !0, i(1))
                    }))
                }
            }

            function ed(e) {
                return t => n => {
                    var i = ee,
                        r = ee,
                        s = !1;
                    t(t => {
                        s || (0 === t ? (s = !0, r(1), n(0)) : 0 === t.tag ? (i = t[0], e(e => {
                            0 === e || (0 === e.tag ? (r = e[0])(0) : (s = !0, r(1), i(1), n(0)))
                        })) : n(t))
                    }), n(et(e => {
                        1 !== e || s ? s || i(0) : (s = !0, i(1), r(1))
                    }))
                }
            }
            var ef = function (e) {
                return e[Symbol.asyncIterator] ? t => {
                    var n, i = e[Symbol.asyncIterator](),
                        r = !1,
                        s = !1,
                        a = !1;
                    t(et(async e => {
                        if (1 === e) r = !0, i.return && i.return();
                        else if (s) a = !0;
                        else {
                            for (a = s = !0; a && !r;)
                                if ((n = await i.next()).done) r = !0, i.return && await i.return(), t(0);
                                else try {
                                    a = !1, t(en(n.value))
                                } catch (e) {
                                    if (i.throw)(r = !!(await i.throw(e)).done) && t(0);
                                    else throw e
                                }
                            s = !1
                        }
                    }))
                } : t => {
                    var n, i = e[Symbol.iterator](),
                        r = !1,
                        s = !1,
                        a = !1;
                    t(et(e => {
                        if (1 === e) r = !0, i.return && i.return();
                        else if (s) a = !0;
                        else {
                            for (a = s = !0; a && !r;)
                                if ((n = i.next()).done) r = !0, i.return && i.return(), t(0);
                                else try {
                                    a = !1, t(en(n.value))
                                } catch (e) {
                                    if (i.throw)(r = !!i.throw(e).done) && t(0);
                                    else throw e
                                }
                            s = !1
                        }
                    }))
                }
            };

            function eE(e) {
                return t => {
                    var n = !1;
                    t(et(i => {
                        1 === i ? n = !0 : n || (n = !0, t(en(e)), t(0))
                    }))
                }
            }

            function ev(e) {
                return t => {
                    var n = !1,
                        i = e({
                            next(e) {
                                n || t(en(e))
                            },
                            complete() {
                                n || (n = !0, t(0))
                            }
                        });
                    t(et(e => {
                        1 !== e || n || (n = !0, i())
                    }))
                }
            }

            function ey(e) {
                return t => {
                    var n = ee,
                        i = !1;
                    return t(t => {
                        0 === t ? i = !0 : 0 === t.tag ? (n = t[0])(0) : i || (e(t[0]), n(0))
                    }), {
                        unsubscribe() {
                            i || (i = !0, n(1))
                        }
                    }
                }
            }
            var eT = e => "string" == typeof e ? new v(e) : "object" == typeof e && e.message ? new v(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {}) : e;
            class em extends Error {
                constructor(e) {
                    var t = (e.graphQLErrors || []).map(eT),
                        n = ((e, t) => {
                            var n = "";
                            if (e) return `[Network] ${e.message}`;
                            if (t)
                                for (var i of t) n && (n += "\n"), n += `[GraphQL] ${i.message}`;
                            return n
                        })(e.networkError, t);
                    super(n), this.name = "CombinedError", this.message = n, this.graphQLErrors = t, this.networkError = e.networkError, this.response = e.response
                }
                toString() {
                    return this.message
                }
            }
            var eN = (e, t) => {
                    for (var n = "number" == typeof t ? 0 | t : 5381, i = 0, r = 0 | e.length; i < r; i++) n = (n << 5) + n + e.charCodeAt(i);
                    return n
                },
                ex = new Set,
                eI = new WeakMap,
                eO = e => {
                    if (null === e || ex.has(e)) return "null";
                    if ("object" != typeof e) return JSON.stringify(e) || "";
                    if (e.toJSON) return eO(e.toJSON());
                    if (Array.isArray(e)) {
                        var t = "[";
                        for (var n of e) "[" !== t && (t += ","), t += (n = eO(n)).length > 0 ? n : "null";
                        return t + "]"
                    }
                    var i = Object.keys(e).sort();
                    if (!i.length && e.constructor && e.constructor !== Object) {
                        var r = eI.get(e) || Math.random().toString(36).slice(2);
                        return eI.set(e, r), `{"__key":"${r}"}`
                    }
                    ex.add(e);
                    var s = "{";
                    for (var a of i) {
                        var o = eO(e[a]);
                        o && (s.length > 1 && (s += ","), s += eO(a) + ":" + o)
                    }
                    return ex.delete(e), s + "}"
                },
                ek = e => (ex.clear(), eO(e)),
                e_ = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
                eA = /(#[^\n\r]+)?(?:\n|\r\n?|$)+/g,
                eg = (e, t) => t % 2 == 0 ? e.replace(eA, "\n") : e,
                eD = e => e.split(e_).map(eg).join("").trim(),
                eS = new Map,
                eb = new Map,
                eC = e => {
                    var t;
                    return "string" == typeof e ? t = eD(e) : e.loc && eb.get(e.__key) === e ? t = e.loc.source.body : (t = eS.get(e) || eD(p(e, _)), eS.set(e, t)), "string" == typeof e || e.loc || (e.loc = {
                        start: 0,
                        end: t.length,
                        source: {
                            body: t,
                            name: "gql",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }), t
                },
                eL = e => {
                    var t = eN(eC(e));
                    if ("object" == typeof e && "definitions" in e) {
                        var n = eF(e);
                        n && (t = eN(`
# ${n}`, t))
                    }
                    return t
                },
                eR = e => {
                    var t, n;
                    return "string" == typeof e ? (t = eL(e), n = eb.get(t) || function (e, t) {
                        let n = new $(e, t);
                        return n.parseDocument()
                    }(e, {
                        noLocation: !0
                    })) : (t = e.__key || eL(e), n = eb.get(t) || e), n.loc || eC(n), n.__key = t, eb.set(t, n), n
                },
                ew = (e, t) => {
                    t || (t = {});
                    var n = eR(e),
                        i = ek(t),
                        r = n.__key;
                    return "{}" !== i && (r = eN(i, r)), {
                        key: r,
                        query: n,
                        variables: t
                    }
                },
                eF = e => {
                    for (var t of e.definitions)
                        if (t.kind === z.OPERATION_DEFINITION && t.name) return t.name.value
                },
                eP = e => {
                    for (var t of e.definitions)
                        if (t.kind === z.OPERATION_DEFINITION) return t.operation
                },
                eM = (e, t, n) => {
                    if (!("data" in t) && !("errors" in t) || "path" in t) throw Error("No Content");
                    return {
                        operation: e,
                        data: t.data,
                        error: Array.isArray(t.errors) ? new em({
                            graphQLErrors: t.errors,
                            response: n
                        }) : void 0,
                        extensions: "object" == typeof t.extensions && t.extensions || void 0,
                        hasNext: !!t.hasNext
                    }
                },
                eU = (e, t, n) => {
                    var i, r = {
                        ...e
                    };
                    if (r.hasNext = !!t.hasNext, !("path" in t)) return "data" in t && (r.data = t.data), r;
                    Array.isArray(t.errors) && (r.error = new em({
                        graphQLErrors: r.error ? [...r.error.graphQLErrors, ...t.errors] : t.errors,
                        response: n
                    }));
                    for (var s = r.data = {
                            ...r.data
                        }, a = 0; a < t.path.length;) s = s[i = t.path[a++]] = Array.isArray(s[i]) ? [...s[i]] : {
                        ...s[i]
                    };
                    return Object.assign(s, t.data), r
                },
                eB = (e, t, n) => ({
                    operation: e,
                    data: void 0,
                    error: new em({
                        networkError: t,
                        response: n
                    }),
                    extensions: void 0
                }),
                eV = (e, t) => {
                    var n = "query" === e.kind && e.context.preferGetMethod;
                    if (!n || !t) return e.context.url;
                    var i = new URL(e.context.url),
                        r = i.searchParams;
                    t.operationName && r.set("operationName", t.operationName), t.query && r.set("query", t.query), t.variables && r.set("variables", ek(t.variables)), t.extensions && r.set("extensions", ek(t.extensions));
                    var s = i.toString();
                    return s.length > 2047 && "force" !== n ? (e.context.preferGetMethod = !1, e.context.url) : s
                },
                ej = (e, t) => {
                    var n = "query" === e.kind && !!e.context.preferGetMethod,
                        i = {
                            accept: "application/graphql+json, application/json"
                        };
                    n || (i["content-type"] = "application/json");
                    var r = ("function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions) || {};
                    if (r.headers)
                        for (var s in r.headers) i[s.toLowerCase()] = r.headers[s];
                    return {
                        ...r,
                        body: !n && t ? JSON.stringify(t) : void 0,
                        method: n ? "GET" : "POST",
                        headers: i
                    }
                },
                eq = "undefined" != typeof TextDecoder ? new TextDecoder : null,
                e$ = /content-type:[^\r\n]*application\/json/i,
                eK = /boundary="?([^=";]+)"?/i,
                eG = (e, t, n) => {
                    var i = "manual" === n.redirect ? 400 : 300,
                        r = e.context.fetch;
                    return ev(({
                        next: s,
                        complete: a
                    }) => {
                        var o, l = "undefined" != typeof AbortController ? new AbortController : null;
                        l && (n.signal = l.signal);
                        var u = !1,
                            c = (e, t, n) => {
                                var i, r = n.headers && n.headers.get("Content-Type") || "";
                                if (/text\//i.test(r)) return n.text().then(i => {
                                    e(eB(t, Error(i), n))
                                });
                                if (!/multipart\/mixed/i.test(r)) return n.text().then(i => {
                                    e(eM(t, JSON.parse(i), n))
                                });
                                var s = "---",
                                    a = r.match(eK);
                                a && (s = "--" + a[1]);
                                var o = () => {};
                                if (n[Symbol.asyncIterator]) {
                                    var l = n[Symbol.asyncIterator]();
                                    i = l.next.bind(l)
                                } else if ("body" in n && n.body) {
                                    var c = n.body.getReader();
                                    o = () => c.cancel(), i = () => c.read()
                                } else throw TypeError("Streaming requests unsupported");
                                var p = "",
                                    h = !0,
                                    d = null,
                                    f = null;
                                return i().then(function r(a) {
                                    if (a.done) u = !0;
                                    else {
                                        var o, l = "Buffer" === (o = a.value).constructor.name ? o.toString() : eq.decode(o),
                                            c = l.indexOf(s);
                                        for (c > -1 ? c += p.length : c = p.indexOf(s), p += l; c > -1;) {
                                            var E = p.slice(0, c),
                                                v = p.slice(c + s.length);
                                            if (h) h = !1;
                                            else {
                                                var y = E.indexOf("\r\n\r\n") + 4,
                                                    T = E.slice(0, y),
                                                    m = E.slice(y, E.lastIndexOf("\r\n")),
                                                    N = void 0;
                                                if (e$.test(T)) try {
                                                    N = JSON.parse(m), d = f = f ? eU(f, N, n) : eM(t, N, n)
                                                } catch (e) {}
                                                if ("--" === v.slice(0, 2) || N && !N.hasNext) {
                                                    if (!f) return e(eM(t, {}, n));
                                                    break
                                                }
                                            }
                                            c = (p = v).indexOf(s)
                                        }
                                    }
                                    if (d && (e(d), d = null), !a.done && (!f || f.hasNext)) return i().then(r)
                                }).finally(o)
                            },
                            p = !1,
                            h = !1;
                        return Promise.resolve().then(() => {
                            if (!p) return (r || fetch)(t, n)
                        }).then(t => {
                            if (t) return h = (o = t).status < 200 || o.status >= i, c(s, e, o)
                        }).then(a).catch(t => {
                            if (u) throw t;
                            s(eB(e, h && o.statusText ? Error(o.statusText) : t, o)), a()
                        }), () => {
                            p = !0, l && l.abort()
                        }
                    })
                },
                eY = (e, t) => {
                    if (Array.isArray(e))
                        for (var n of e) eY(n, t);
                    else if ("object" == typeof e && null !== e)
                        for (var i in e) "__typename" === i && "string" == typeof e[i] ? t.add(e[i]) : eY(e[i], t);
                    return t
                },
                eJ = e => {
                    if (!e.selectionSet) return e;
                    for (var t of e.selectionSet.selections)
                        if (t.kind === z.FIELD && "__typename" === t.name.value && !t.alias) return e;
                    return {
                        ...e,
                        selectionSet: {
                            ...e.selectionSet,
                            selections: [...e.selectionSet.selections, {
                                kind: z.FIELD,
                                name: {
                                    kind: z.NAME,
                                    value: "__typename"
                                }
                            }]
                        }
                    }
                },
                eQ = new Map,
                eX = e => {
                    var t = eR(e),
                        n = eQ.get(t.__key);
                    return n || (Object.defineProperty(n = p(t, {
                        Field: eJ,
                        InlineFragment: eJ
                    }), "__key", {
                        value: t.__key,
                        enumerable: !1
                    }), eQ.set(t.__key, n)), n
                },
                ez = (e, t) => {
                    if (!e || "object" != typeof e) return e;
                    if (Array.isArray(e)) return e.map(e => ez(e));
                    if (!e || "object" != typeof e || !t && !("__typename" in e)) return e;
                    var n = {};
                    for (var i in e) "__typename" === i ? Object.defineProperty(n, "__typename", {
                        enumerable: !1,
                        value: e.__typename
                    }) : n[i] = ez(e[i]);
                    return n
                };

            function eH(e) {
                return e.toPromise = () => new Promise(t => {
                    var n = ey(e => {
                        e.stale || e.hasNext || Promise.resolve().then(() => {
                            n.unsubscribe(), t(e)
                        })
                    })(e)
                }), e
            }

            function eW(e, t, n) {
                return n || (n = t.context), {
                    key: t.key,
                    query: t.query,
                    variables: t.variables,
                    kind: e,
                    context: n
                }
            }
            var eZ = (e, t) => eW(e.kind, e, {
                    ...e.context,
                    meta: {
                        ...e.context.meta,
                        ...t
                    }
                }),
                e0 = () => {},
                e1 = ({
                    kind: e
                }) => "mutation" !== e && "query" !== e,
                e2 = ({
                    forward: e,
                    client: t,
                    dispatchDebug: n
                }) => {
                    var i = new Map,
                        r = new Map,
                        s = e => {
                            var t = eW(e.kind, e);
                            return t.query = eX(e.query), t
                        },
                        a = e => {
                            var {
                                key: t,
                                kind: n,
                                context: {
                                    requestPolicy: r
                                }
                            } = e;
                            return "query" === n && "network-only" !== r && ("cache-only" === r || i.has(t))
                        };
                    return n => {
                        var o = ep(n),
                            l = es(e => {
                                var n = i.get(e.key),
                                    r = {
                                        ...n,
                                        operation: eZ(e, {
                                            cacheOutcome: n ? "hit" : "miss"
                                        })
                                    };
                                return "cache-and-network" === e.context.requestPolicy && (r.stale = !0, e3(t, e)), r
                            })(er(e => !e1(e) && a(e))(o)),
                            u = eu(e => {
                                var {
                                    operation: n
                                } = e;
                                if (n) {
                                    var s = [...eY(e.data, new Set)].concat(n.context.additionalTypenames || []);
                                    if ("mutation" === e.operation.kind) {
                                        for (var a = new Set, o = 0; o < s.length; o++) {
                                            var l = s[o],
                                                u = r.get(l);
                                            for (var c of (u || r.set(l, u = new Set), u.values())) a.add(c);
                                            u.clear()
                                        }
                                        for (var p of a.values()) i.has(p) && (n = i.get(p).operation, i.delete(p), e3(t, n))
                                    } else if ("query" === n.kind && e.data) {
                                        i.set(n.key, e);
                                        for (var h = 0; h < s.length; h++) {
                                            var d = s[h],
                                                f = r.get(d);
                                            f || r.set(d, f = new Set), f.add(n.key)
                                        }
                                    }
                                }
                            })(e(er(e => "query" !== e.kind || "cache-only" !== e.context.requestPolicy)(es(e => eZ(e, {
                                cacheOutcome: "miss"
                            }))(eo([es(s)(er(e => !e1(e) && !a(e))(o)), er(e => e1(e))(o)])))));
                        return eo([l, u])
                    }
                },
                e3 = (e, t) => e.reexecuteOperation(eW(t.kind, t, {
                    ...t.context,
                    requestPolicy: "network-only"
                })),
                e4 = ({
                    forward: e,
                    dispatchDebug: t
                }) => {
                    var n = new Set,
                        i = e => {
                            var {
                                key: t,
                                kind: i
                            } = e;
                            if ("teardown" === i || "mutation" === i) return n.delete(t), !0;
                            var r = n.has(t);
                            return n.add(t), !r
                        },
                        r = ({
                            operation: e,
                            hasNext: t
                        }) => {
                            t || n.delete(e.key)
                        };
                    return t => {
                        var n = er(i)(t);
                        return eu(r)(e(n))
                    }
                },
                e9 = ({
                    forward: e,
                    dispatchDebug: t
                }) => t => {
                    var n = ep(t);
                    return eo([ea(e => {
                        var {
                            key: t
                        } = e, i = {
                            query: eC(e.query),
                            operationName: eF(e.query),
                            variables: e.variables || void 0,
                            extensions: void 0
                        }, r = eV(e, i), s = ej(e, i);
                        return ed(er(e => "teardown" === e.kind && e.key === t)(n))(eG(e, r, s))
                    })(er(e => "query" === e.kind || "mutation" === e.kind)(n)), e(er(e => "query" !== e.kind && "mutation" !== e.kind)(n))])
                },
                e8 = ({
                    dispatchDebug: e
                }) => e => er(() => !1)(eu(e => {
                    e.kind
                })(e));
            e8({
                dispatchDebug: e0
            });
            var e5 = e => ({
                    client: t,
                    forward: n,
                    dispatchDebug: i
                }) => e.reduceRight((e, n) => n({
                    client: t,
                    forward: e,
                    dispatchDebug(e) {}
                }), n),
                e6 = [e4, e2, e9],
                e7 = function e(t) {
                    var n, i, r = 0,
                        s = new Map,
                        a = new Map,
                        o = [],
                        l = {
                            url: t.url,
                            fetchOptions: t.fetchOptions,
                            fetch: t.fetch,
                            preferGetMethod: !!t.preferGetMethod,
                            requestPolicy: t.requestPolicy || "cache-first"
                        },
                        {
                            source: u,
                            next: c
                        } = {
                            source: ep(ev(e => (n = e.next, i = e.complete, ee))),
                            next(e) {
                                n && n(e)
                            },
                            complete() {
                                i && i()
                            }
                        },
                        p = !1;

                    function h(e) {
                        if (e && c(e), !p) {
                            for (p = !0; p && (e = o.shift());) c(e);
                            p = !1
                        }
                    }
                    var d = e => {
                            var n, i = er(t => t.operation.kind === e.kind && t.operation.key === e.key && (!t.operation.context._instance || t.operation.context._instance === e.context._instance))(E);
                            return (t.maskTypename && (i = es(e => ({
                                ...e,
                                data: ez(e.data, !0)
                            }))(i)), "mutation" === e.kind) ? eh(1)(ec(() => c(e))(i)) : ep(el(() => {
                                s.delete(e.key), a.delete(e.key);
                                for (var t = o.length - 1; t >= 0; t--) o[t].key === e.key && o.splice(t, 1);
                                c(eW("teardown", e, e.context))
                            })(eu(t => {
                                s.set(e.key, t)
                            })((n = t => "query" !== e.kind || t.stale ? eE(t) : eo([eE(t), es(() => ({
                                ...t,
                                stale: !0
                            }))(eh(1)(er(t => "query" === t.kind && t.key === e.key && "cache-only" !== t.context.requestPolicy)(u)))]), e => t => {
                                var i = ee,
                                    r = ee,
                                    s = !1,
                                    a = !1,
                                    o = !1,
                                    l = !1;
                                e(e => {
                                    l || (0 === e ? (l = !0, o || t(0)) : 0 === e.tag ? i = e[0] : (o && (r(1), r = ee), s ? s = !1 : (s = !0, i(0)), o = !0, n(e[0])(e => {
                                        o && (0 === e ? (o = !1, l ? t(0) : s || (s = !0, i(0))) : 0 === e.tag ? (a = !1, (r = e[0])(0)) : (t(e), a ? a = !1 : r(0)))
                                    })))
                                }), t(et(e => {
                                    1 === e ? (l || (l = !0, i(1)), o && (o = !1, r(1))) : (l || s || (s = !0, i(0)), o && !a && (a = !0, r(0)))
                                }))
                            })(ed(er(t => "teardown" === t.kind && t.key === e.key)(u))(i)))))
                        },
                        f = Object.assign(this instanceof e ? this : Object.create(e.prototype), {
                            suspense: !!t.suspense,
                            operations$: u,
                            reexecuteOperation(e) {
                                ("mutation" === e.kind || a.has(e.key)) && (o.push(e), Promise.resolve().then(h))
                            },
                            createRequestOperation: (e, t, n) => (n || (n = {}), eP(t.query), eW(e, t, {
                                _instance: "mutation" === e ? r = r + 1 | 0 : void 0,
                                ...l,
                                ...n,
                                requestPolicy: n.requestPolicy || l.requestPolicy,
                                suspense: n.suspense || !1 !== n.suspense && f.suspense
                            })),
                            executeRequestOperation: e => "mutation" === e.kind ? d(e) : ev(t => {
                                var n = a.get(e.key);
                                n || a.set(e.key, n = d(e));
                                var i = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
                                return ey(t.next)(el(() => {
                                    p = !1, t.complete()
                                })(ec(() => {
                                    var n = s.get(e.key);
                                    if ("subscription" === e.kind) return h(e);
                                    i && h(e), null != n && n === s.get(e.key) ? t.next(i ? {
                                        ...n,
                                        stale: !0
                                    } : n) : i || h(e)
                                })(n))).unsubscribe
                            }),
                            executeQuery(e, t) {
                                var n = f.createRequestOperation("query", e, t);
                                return f.executeRequestOperation(n)
                            },
                            executeSubscription(e, t) {
                                var n = f.createRequestOperation("subscription", e, t);
                                return f.executeRequestOperation(n)
                            },
                            executeMutation(e, t) {
                                var n = f.createRequestOperation("mutation", e, t);
                                return f.executeRequestOperation(n)
                            },
                            query: (e, t, n) => (n && "boolean" == typeof n.suspense || (n = {
                                ...n,
                                suspense: !1
                            }), eH(f.executeQuery(ew(e, t), n))),
                            readQuery(e, t, n) {
                                var i = null;
                                return ey(e => {
                                    i = e
                                })(f.query(e, t, n)).unsubscribe(), i
                            },
                            subscription: (e, t, n) => f.executeSubscription(ew(e, t), n),
                            mutation: (e, t, n) => eH(f.executeMutation(ew(e, t), n))
                        }),
                        E = ep(e5(void 0 !== t.exchanges ? t.exchanges : e6)({
                            client: f,
                            dispatchDebug: e0,
                            forward: e8({
                                dispatchDebug: e0
                            })
                        })(u));
                    return ey(e => {})(E), f
                }
        }
    }
]);