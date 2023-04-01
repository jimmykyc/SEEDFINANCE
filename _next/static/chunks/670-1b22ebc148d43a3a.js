(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [670], {
    95851: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n
        }
      });
      let n = "abi/5.7.0"
    },
    84243: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return O
        },
        $: function () {
          return N
        }
      });
      var n = r(16441),
        i = r(6881),
        o = r(1581),
        s = r(95851),
        a = r(61184),
        u = r(19485);
      class l extends a.XI {
        constructor(e) {
          super("address", "address", e, !1)
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000"
        }
        encode(e, t) {
          try {
            t = (0, u.getAddress)(t)
          } catch (e) {
            this._throwError(e.message, t)
          }
          return e.writeValue(t)
        }
        decode(e) {
          return (0, u.getAddress)((0, n.hexZeroPad)(e.readValue().toHexString(), 20))
        }
      }
      class c extends a.XI {
        constructor(e) {
          super(e.name, e.type, void 0, e.dynamic), this.coder = e
        }
        defaultValue() {
          return this.coder.defaultValue()
        }
        encode(e, t) {
          return this.coder.encode(e, t)
        }
        decode(e) {
          return this.coder.decode(e)
        }
      }
      let h = new o.Logger(s.i);

      function f(e, t, r) {
        let n = null;
        if (Array.isArray(r)) n = r;
        else if (r && "object" == typeof r) {
          let e = {};
          n = t.map(t => {
            let n = t.localName;
            return n || h.throwError("cannot encode object for signature with missing names", o.Logger.errors.INVALID_ARGUMENT, {
              argument: "values",
              coder: t,
              value: r
            }), e[n] && h.throwError("cannot encode object for signature with duplicate names", o.Logger.errors.INVALID_ARGUMENT, {
              argument: "values",
              coder: t,
              value: r
            }), e[n] = !0, r[n]
          })
        } else h.throwArgumentError("invalid tuple value", "tuple", r);
        t.length !== n.length && h.throwArgumentError("types/value length mismatch", "tuple", r);
        let i = new a.QV(e.wordSize),
          s = new a.QV(e.wordSize),
          u = [];
        return t.forEach((e, t) => {
          let r = n[t];
          if (e.dynamic) {
            let t = s.length;
            e.encode(s, r);
            let n = i.writeUpdatableValue();
            u.push(e => {
              n(e + t)
            })
          } else e.encode(i, r)
        }), u.forEach(e => {
          e(i.length)
        }), e.appendWriter(i) + e.appendWriter(s)
      }

      function d(e, t) {
        let r = [],
          n = e.subReader(0);
        t.forEach(t => {
          let i = null;
          if (t.dynamic) {
            let r = e.readValue(),
              s = n.subReader(r.toNumber());
            try {
              i = t.decode(s)
            } catch (e) {
              if (e.code === o.Logger.errors.BUFFER_OVERRUN) throw e;
              (i = e).baseType = t.name, i.name = t.localName, i.type = t.type
            }
          } else try {
            i = t.decode(e)
          } catch (e) {
            if (e.code === o.Logger.errors.BUFFER_OVERRUN) throw e;
            (i = e).baseType = t.name, i.name = t.localName, i.type = t.type
          }
          void 0 != i && r.push(i)
        });
        let i = t.reduce((e, t) => {
          let r = t.localName;
          return r && (e[r] || (e[r] = 0), e[r]++), e
        }, {});
        t.forEach((e, t) => {
          let n = e.localName;
          if (!n || 1 !== i[n] || ("length" === n && (n = "_length"), null != r[n])) return;
          let o = r[t];
          o instanceof Error ? Object.defineProperty(r, n, {
            enumerable: !0,
            get: () => {
              throw o
            }
          }) : r[n] = o
        });
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          t instanceof Error && Object.defineProperty(r, e, {
            enumerable: !0,
            get: () => {
              throw t
            }
          })
        }
        return Object.freeze(r)
      }
      class p extends a.XI {
        constructor(e, t, r) {
          let n = e.type + "[" + (t >= 0 ? t : "") + "]",
            i = -1 === t || e.dynamic;
          super("array", n, r, i), this.coder = e, this.length = t
        }
        defaultValue() {
          let e = this.coder.defaultValue(),
            t = [];
          for (let r = 0; r < this.length; r++) t.push(e);
          return t
        }
        encode(e, t) {
          Array.isArray(t) || this._throwError("expected array value", t);
          let r = this.length; - 1 === r && (r = t.length, e.writeValue(t.length)), h.checkArgumentCount(t.length, r, "coder array" + (this.localName ? " " + this.localName : ""));
          let n = [];
          for (let e = 0; e < t.length; e++) n.push(this.coder);
          return f(e, n, t)
        }
        decode(e) {
          let t = this.length; - 1 === t && 32 * (t = e.readValue().toNumber()) > e._data.length && h.throwError("insufficient data length", o.Logger.errors.BUFFER_OVERRUN, {
            length: e._data.length,
            count: t
          });
          let r = [];
          for (let e = 0; e < t; e++) r.push(new c(this.coder));
          return e.coerce(this.name, d(e, r))
        }
      }
      class g extends a.XI {
        constructor(e) {
          super("bool", "bool", e, !1)
        }
        defaultValue() {
          return !1
        }
        encode(e, t) {
          return e.writeValue(t ? 1 : 0)
        }
        decode(e) {
          return e.coerce(this.type, !e.readValue().isZero())
        }
      }
      class m extends a.XI {
        constructor(e, t) {
          super(e, e, t, !0)
        }
        defaultValue() {
          return "0x"
        }
        encode(e, t) {
          return t = (0, n.arrayify)(t), e.writeValue(t.length) + e.writeBytes(t)
        }
        decode(e) {
          return e.readBytes(e.readValue().toNumber(), !0)
        }
      }
      class y extends m {
        constructor(e) {
          super("bytes", e)
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(super.decode(e)))
        }
      }
      class v extends a.XI {
        constructor(e, t) {
          let r = "bytes" + String(e);
          super(r, r, t, !1), this.size = e
        }
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + 2 * this.size)
        }
        encode(e, t) {
          let r = (0, n.arrayify)(t);
          return r.length !== this.size && this._throwError("incorrect data length", t), e.writeBytes(r)
        }
        decode(e) {
          return e.coerce(this.name, (0, n.hexlify)(e.readBytes(this.size)))
        }
      }
      class b extends a.XI {
        constructor(e) {
          super("null", "", e, !1)
        }
        defaultValue() {
          return null
        }
        encode(e, t) {
          return null != t && this._throwError("not null", t), e.writeBytes([])
        }
        decode(e) {
          return e.readBytes(0), e.coerce(this.name, null)
        }
      }
      var w = r(2593),
        A = r(21046);
      class E extends a.XI {
        constructor(e, t, r) {
          let n = (t ? "int" : "uint") + 8 * e;
          super(n, n, r, !1), this.size = e, this.signed = t
        }
        defaultValue() {
          return 0
        }
        encode(e, t) {
          let r = w.O$.from(t),
            n = A.Bz.mask(8 * e.wordSize);
          if (this.signed) {
            let e = n.mask(8 * this.size - 1);
            (r.gt(e) || r.lt(e.add(A.fh).mul(A.tL))) && this._throwError("value out-of-bounds", t)
          } else(r.lt(A._Y) || r.gt(n.mask(8 * this.size))) && this._throwError("value out-of-bounds", t);
          return r = r.toTwos(8 * this.size).mask(8 * this.size), this.signed && (r = r.fromTwos(8 * this.size).toTwos(8 * e.wordSize)), e.writeValue(r)
        }
        decode(e) {
          let t = e.readValue().mask(8 * this.size);
          return this.signed && (t = t.fromTwos(8 * this.size)), e.coerce(this.name, t)
        }
      }
      var S = r(29251);
      class x extends m {
        constructor(e) {
          super("string", e)
        }
        defaultValue() {
          return ""
        }
        encode(e, t) {
          return super.encode(e, (0, S.Y0)(t))
        }
        decode(e) {
          return (0, S.ZN)(super.decode(e))
        }
      }
      class k extends a.XI {
        constructor(e, t) {
          let r = !1,
            n = [];
          e.forEach(e => {
            e.dynamic && (r = !0), n.push(e.type)
          });
          let i = "tuple(" + n.join(",") + ")";
          super("tuple", i, t, r), this.coders = e
        }
        defaultValue() {
          let e = [];
          this.coders.forEach(t => {
            e.push(t.defaultValue())
          });
          let t = this.coders.reduce((e, t) => {
            let r = t.localName;
            return r && (e[r] || (e[r] = 0), e[r]++), e
          }, {});
          return this.coders.forEach((r, n) => {
            let i = r.localName;
            i && 1 === t[i] && ("length" === i && (i = "_length"), null == e[i] && (e[i] = e[n]))
          }), Object.freeze(e)
        }
        encode(e, t) {
          return f(e, this.coders, t)
        }
        decode(e) {
          return e.coerce(this.name, d(e, this.coders))
        }
      }
      var P = r(11388);
      let C = new o.Logger(s.i),
        _ = RegExp(/^bytes([0-9]*)$/),
        M = RegExp(/^(u?int)([0-9]*)$/);
      class O {
        constructor(e) {
          (0, i.defineReadOnly)(this, "coerceFunc", e || null)
        }
        _getCoder(e) {
          switch (e.baseType) {
            case "address":
              return new l(e.name);
            case "bool":
              return new g(e.name);
            case "string":
              return new x(e.name);
            case "bytes":
              return new y(e.name);
            case "array":
              return new p(this._getCoder(e.arrayChildren), e.arrayLength, e.name);
            case "tuple":
              return new k((e.components || []).map(e => this._getCoder(e)), e.name);
            case "":
              return new b(e.name)
          }
          let t = e.type.match(M);
          if (t) {
            let r = parseInt(t[2] || "256");
            return (0 === r || r > 256 || r % 8 != 0) && C.throwArgumentError("invalid " + t[1] + " bit length", "param", e), new E(r / 8, "int" === t[1], e.name)
          }
          if (t = e.type.match(_)) {
            let r = parseInt(t[1]);
            return (0 === r || r > 32) && C.throwArgumentError("invalid bytes length", "param", e), new v(r, e.name)
          }
          return C.throwArgumentError("invalid type", "type", e.type)
        }
        _getWordSize() {
          return 32
        }
        _getReader(e, t) {
          return new a.Ej(e, this._getWordSize(), this.coerceFunc, t)
        }
        _getWriter() {
          return new a.QV(this._getWordSize())
        }
        getDefaultValue(e) {
          let t = e.map(e => this._getCoder(P._R.from(e))),
            r = new k(t, "_");
          return r.defaultValue()
        }
        encode(e, t) {
          e.length !== t.length && C.throwError("types/values length mismatch", o.Logger.errors.INVALID_ARGUMENT, {
            count: {
              types: e.length,
              values: t.length
            },
            value: {
              types: e,
              values: t
            }
          });
          let r = e.map(e => this._getCoder(P._R.from(e))),
            n = new k(r, "_"),
            i = this._getWriter();
          return n.encode(i, t), i.data
        }
        decode(e, t, r) {
          let i = e.map(e => this._getCoder(P._R.from(e))),
            o = new k(i, "_");
          return o.decode(this._getReader((0, n.arrayify)(t), r))
        }
      }
      let N = new O
    },
    61184: function (e, t, r) {
      "use strict";
      r.d(t, {
        BR: function () {
          return l
        },
        Ej: function () {
          return f
        },
        QV: function () {
          return h
        },
        XI: function () {
          return c
        }
      });
      var n = r(16441),
        i = r(2593),
        o = r(6881),
        s = r(1581),
        a = r(95851);
      let u = new s.Logger(a.i);

      function l(e) {
        let t = [],
          r = function (e, n) {
            if (Array.isArray(n))
              for (let i in n) {
                let o = e.slice();
                o.push(i);
                try {
                  r(o, n[i])
                } catch (e) {
                  t.push({
                    path: o,
                    error: e
                  })
                }
              }
          };
        return r([], e), t
      }
      class c {
        constructor(e, t, r, n) {
          this.name = e, this.type = t, this.localName = r, this.dynamic = n
        }
        _throwError(e, t) {
          u.throwArgumentError(e, this.localName, t)
        }
      }
      class h {
        constructor(e) {
          (0, o.defineReadOnly)(this, "wordSize", e || 32), this._data = [], this._dataLength = 0, this._padding = new Uint8Array(e)
        }
        get data() {
          return (0, n.hexConcat)(this._data)
        }
        get length() {
          return this._dataLength
        }
        _writeData(e) {
          return this._data.push(e), this._dataLength += e.length, e.length
        }
        appendWriter(e) {
          return this._writeData((0, n.concat)(e._data))
        }
        writeBytes(e) {
          let t = (0, n.arrayify)(e),
            r = t.length % this.wordSize;
          return r && (t = (0, n.concat)([t, this._padding.slice(r)])), this._writeData(t)
        }
        _getValue(e) {
          let t = (0, n.arrayify)(i.O$.from(e));
          return t.length > this.wordSize && u.throwError("value out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
            length: this.wordSize,
            offset: t.length
          }), t.length % this.wordSize && (t = (0, n.concat)([this._padding.slice(t.length % this.wordSize), t])), t
        }
        writeValue(e) {
          return this._writeData(this._getValue(e))
        }
        writeUpdatableValue() {
          let e = this._data.length;
          return this._data.push(this._padding), this._dataLength += this.wordSize, t => {
            this._data[e] = this._getValue(t)
          }
        }
      }
      class f {
        constructor(e, t, r, i) {
          (0, o.defineReadOnly)(this, "_data", (0, n.arrayify)(e)), (0, o.defineReadOnly)(this, "wordSize", t || 32), (0, o.defineReadOnly)(this, "_coerceFunc", r), (0, o.defineReadOnly)(this, "allowLoose", i), this._offset = 0
        }
        get data() {
          return (0, n.hexlify)(this._data)
        }
        get consumed() {
          return this._offset
        }
        static coerce(e, t) {
          let r = e.match("^u?int([0-9]+)$");
          return r && 48 >= parseInt(r[1]) && (t = t.toNumber()), t
        }
        coerce(e, t) {
          return this._coerceFunc ? this._coerceFunc(e, t) : f.coerce(e, t)
        }
        _peekBytes(e, t, r) {
          let n = Math.ceil(t / this.wordSize) * this.wordSize;
          return this._offset + n > this._data.length && (this.allowLoose && r && this._offset + t <= this._data.length ? n = t : u.throwError("data out-of-bounds", s.Logger.errors.BUFFER_OVERRUN, {
            length: this._data.length,
            offset: this._offset + n
          })), this._data.slice(this._offset, this._offset + n)
        }
        subReader(e) {
          return new f(this._data.slice(this._offset + e), this.wordSize, this._coerceFunc, this.allowLoose)
        }
        readBytes(e, t) {
          let r = this._peekBytes(0, e, !!t);
          return this._offset += r.length, r.slice(0, e)
        }
        readValue() {
          return i.O$.from(this.readBytes(this.wordSize))
        }
      }
    },
    11388: function (e, t, r) {
      "use strict";
      r.d(t, {
        HY: function () {
          return y
        },
        IC: function () {
          return k
        },
        QV: function () {
          return v
        },
        Xg: function () {
          return E
        },
        YW: function () {
          return S
        },
        _R: function () {
          return g
        },
        pc: function () {
          return d
        }
      });
      var n = r(2593),
        i = r(6881),
        o = r(1581),
        s = r(95851);
      let a = new o.Logger(s.i),
        u = {},
        l = {
          calldata: !0,
          memory: !0,
          storage: !0
        },
        c = {
          calldata: !0,
          memory: !0
        };

      function h(e, t) {
        if ("bytes" === e || "string" === e) {
          if (l[t]) return !0
        } else if ("address" === e) {
          if ("payable" === t) return !0
        } else if ((e.indexOf("[") >= 0 || "tuple" === e) && c[t]) return !0;
        return (l[t] || "payable" === t) && a.throwArgumentError("invalid modifier", "name", t), !1
      }

      function f(e, t) {
        for (let r in t)(0, i.defineReadOnly)(e, r, t[r])
      }
      let d = Object.freeze({
          sighash: "sighash",
          minimal: "minimal",
          full: "full",
          json: "json"
        }),
        p = RegExp(/^(.*)\[([0-9]*)\]$/);
      class g {
        constructor(e, t) {
          e !== u && a.throwError("use fromString", o.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new ParamType()"
          }), f(this, t);
          let r = this.type.match(p);
          r ? f(this, {
            arrayLength: parseInt(r[2] || "-1"),
            arrayChildren: g.fromObject({
              type: r[1],
              components: this.components
            }),
            baseType: "array"
          }) : f(this, {
            arrayLength: null,
            arrayChildren: null,
            baseType: null != this.components ? "tuple" : this.type
          }), this._isParamType = !0, Object.freeze(this)
        }
        format(e) {
          if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) {
            let t = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: this.name || void 0
            };
            return "boolean" == typeof this.indexed && (t.indexed = this.indexed), this.components && (t.components = this.components.map(t => JSON.parse(t.format(e)))), JSON.stringify(t)
          }
          let t = "";
          return "array" === this.baseType ? t += this.arrayChildren.format(e) + "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]" : "tuple" === this.baseType ? (e !== d.sighash && (t += this.type), t += "(" + this.components.map(t => t.format(e)).join(e === d.full ? ", " : ",") + ")") : t += this.type, e !== d.sighash && (!0 === this.indexed && (t += " indexed"), e === d.full && this.name && (t += " " + this.name)), t
        }
        static from(e, t) {
          return "string" == typeof e ? g.fromString(e, t) : g.fromObject(e)
        }
        static fromObject(e) {
          return g.isParamType(e) ? e : new g(u, {
            name: e.name || null,
            type: P(e.type),
            indexed: null == e.indexed ? null : !!e.indexed,
            components: e.components ? e.components.map(g.fromObject) : null
          })
        }
        static fromString(e, t) {
          var r;
          return r = function (e, t) {
            let r = e;

            function n(t) {
              a.throwArgumentError(`unexpected character at position ${t}`, "param", e)
            }

            function i(e) {
              let r = {
                type: "",
                name: "",
                parent: e,
                state: {
                  allowType: !0
                }
              };
              return t && (r.indexed = !1), r
            }
            e = e.replace(/\s/g, " ");
            let o = {
                type: "",
                name: "",
                state: {
                  allowType: !0
                }
              },
              s = o;
            for (let r = 0; r < e.length; r++) {
              let o = e[r];
              switch (o) {
                case "(":
                  s.state.allowType && "" === s.type ? s.type = "tuple" : s.state.allowParams || n(r), s.state.allowType = !1, s.type = P(s.type), s.components = [i(s)], s = s.components[0];
                  break;
                case ")":
                  delete s.state, "indexed" === s.name && (t || n(r), s.indexed = !0, s.name = ""), h(s.type, s.name) && (s.name = ""), s.type = P(s.type);
                  let a = s;
                  (s = s.parent) || n(r), delete a.parent, s.state.allowParams = !1, s.state.allowName = !0, s.state.allowArray = !0;
                  break;
                case ",":
                  delete s.state, "indexed" === s.name && (t || n(r), s.indexed = !0, s.name = ""), h(s.type, s.name) && (s.name = ""), s.type = P(s.type);
                  let u = i(s.parent);
                  s.parent.components.push(u), delete s.parent, s = u;
                  break;
                case " ":
                  s.state.allowType && "" !== s.type && (s.type = P(s.type), delete s.state.allowType, s.state.allowName = !0, s.state.allowParams = !0), s.state.allowName && "" !== s.name && ("indexed" === s.name ? (t || n(r), s.indexed && n(r), s.indexed = !0, s.name = "") : h(s.type, s.name) ? s.name = "" : s.state.allowName = !1);
                  break;
                case "[":
                  s.state.allowArray || n(r), s.type += o, s.state.allowArray = !1, s.state.allowName = !1, s.state.readArray = !0;
                  break;
                case "]":
                  s.state.readArray || n(r), s.type += o, s.state.readArray = !1, s.state.allowArray = !0, s.state.allowName = !0;
                  break;
                default:
                  s.state.allowType ? (s.type += o, s.state.allowParams = !0, s.state.allowArray = !0) : s.state.allowName ? (s.name += o, delete s.state.allowArray) : s.state.readArray ? s.type += o : n(r)
              }
            }
            return s.parent && a.throwArgumentError("unexpected eof", "param", e), delete o.state, "indexed" === s.name ? (t || n(r.length - 7), s.indexed && n(r.length - 7), s.indexed = !0, s.name = "") : h(s.type, s.name) && (s.name = ""), o.type = P(o.type), o
          }(e, !!t), g.fromObject({
            name: r.name,
            type: r.type,
            indexed: r.indexed,
            components: r.components
          })
        }
        static isParamType(e) {
          return !!(null != e && e._isParamType)
        }
      }

      function m(e, t) {
        return (function (e) {
          e = e.trim();
          let t = [],
            r = "",
            n = 0;
          for (let i = 0; i < e.length; i++) {
            let o = e[i];
            "," === o && 0 === n ? (t.push(r), r = "") : (r += o, "(" === o ? n++ : ")" === o && -1 == --n && a.throwArgumentError("unbalanced parenthesis", "value", e))
          }
          return r && t.push(r), t
        })(e).map(e => g.fromString(e, t))
      }
      class y {
        constructor(e, t) {
          e !== u && a.throwError("use a static from method", o.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new Fragment()"
          }), f(this, t), this._isFragment = !0, Object.freeze(this)
        }
        static from(e) {
          return y.isFragment(e) ? e : "string" == typeof e ? y.fromString(e) : y.fromObject(e)
        }
        static fromObject(e) {
          if (y.isFragment(e)) return e;
          switch (e.type) {
            case "function":
              return S.fromObject(e);
            case "event":
              return v.fromObject(e);
            case "constructor":
              return E.fromObject(e);
            case "error":
              return k.fromObject(e);
            case "fallback":
            case "receive":
              return null
          }
          return a.throwArgumentError("invalid fragment object", "value", e)
        }
        static fromString(e) {
          return "event" === (e = (e = (e = e.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).split(" ")[0] ? v.fromString(e.substring(5).trim()) : "function" === e.split(" ")[0] ? S.fromString(e.substring(8).trim()) : "constructor" === e.split("(")[0].trim() ? E.fromString(e.trim()) : "error" === e.split(" ")[0] ? k.fromString(e.substring(5).trim()) : a.throwArgumentError("unsupported fragment", "value", e)
        }
        static isFragment(e) {
          return !!(e && e._isFragment)
        }
      }
      class v extends y {
        format(e) {
          if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
            type: "event",
            anonymous: this.anonymous,
            name: this.name,
            inputs: this.inputs.map(t => JSON.parse(t.format(e)))
          });
          let t = "";
          return e !== d.sighash && (t += "event "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && this.anonymous && (t += "anonymous "), t.trim()
        }
        static from(e) {
          return "string" == typeof e ? v.fromString(e) : v.fromObject(e)
        }
        static fromObject(e) {
          if (v.isEventFragment(e)) return e;
          "event" !== e.type && a.throwArgumentError("invalid event object", "value", e);
          let t = {
            name: _(e.name),
            anonymous: e.anonymous,
            inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
            type: "event"
          };
          return new v(u, t)
        }
        static fromString(e) {
          let t = e.match(M);
          t || a.throwArgumentError("invalid event string", "value", e);
          let r = !1;
          return t[3].split(" ").forEach(e => {
            switch (e.trim()) {
              case "anonymous":
                r = !0;
                break;
              case "":
                break;
              default:
                a.warn("unknown modifier: " + e)
            }
          }), v.fromObject({
            name: t[1].trim(),
            anonymous: r,
            inputs: m(t[2], !0),
            type: "event"
          })
        }
        static isEventFragment(e) {
          return e && e._isFragment && "event" === e.type
        }
      }

      function b(e, t) {
        t.gas = null;
        let r = e.split("@");
        return 1 !== r.length ? (r.length > 2 && a.throwArgumentError("invalid human-readable ABI signature", "value", e), r[1].match(/^[0-9]+$/) || a.throwArgumentError("invalid human-readable ABI signature gas", "value", e), t.gas = n.O$.from(r[1]), r[0]) : e
      }

      function w(e, t) {
        t.constant = !1, t.payable = !1, t.stateMutability = "nonpayable", e.split(" ").forEach(e => {
          switch (e.trim()) {
            case "constant":
              t.constant = !0;
              break;
            case "payable":
              t.payable = !0, t.stateMutability = "payable";
              break;
            case "nonpayable":
              t.payable = !1, t.stateMutability = "nonpayable";
              break;
            case "pure":
              t.constant = !0, t.stateMutability = "pure";
              break;
            case "view":
              t.constant = !0, t.stateMutability = "view";
              break;
            case "external":
            case "public":
            case "":
              break;
            default:
              console.log("unknown modifier: " + e)
          }
        })
      }

      function A(e) {
        let t = {
          constant: !1,
          payable: !0,
          stateMutability: "payable"
        };
        return null != e.stateMutability ? (t.stateMutability = e.stateMutability, t.constant = "view" === t.stateMutability || "pure" === t.stateMutability, null != e.constant && !!e.constant !== t.constant && a.throwArgumentError("cannot have constant function with mutability " + t.stateMutability, "value", e), t.payable = "payable" === t.stateMutability, null != e.payable && !!e.payable !== t.payable && a.throwArgumentError("cannot have payable function with mutability " + t.stateMutability, "value", e)) : null != e.payable ? (t.payable = !!e.payable, null != e.constant || t.payable || "constructor" === e.type || a.throwArgumentError("unable to determine stateMutability", "value", e), t.constant = !!e.constant, t.constant ? t.stateMutability = "view" : t.stateMutability = t.payable ? "payable" : "nonpayable", t.payable && t.constant && a.throwArgumentError("cannot have constant payable function", "value", e)) : null != e.constant ? (t.constant = !!e.constant, t.payable = !t.constant, t.stateMutability = t.constant ? "view" : "payable") : "constructor" !== e.type && a.throwArgumentError("unable to determine stateMutability", "value", e), t
      }
      class E extends y {
        format(e) {
          if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
            type: "constructor",
            stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
            payable: this.payable,
            gas: this.gas ? this.gas.toNumber() : void 0,
            inputs: this.inputs.map(t => JSON.parse(t.format(e)))
          });
          e === d.sighash && a.throwError("cannot format a constructor for sighash", o.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "format(sighash)"
          });
          let t = "constructor(" + this.inputs.map(t => t.format(e)).join(e === d.full ? ", " : ",") + ") ";
          return this.stateMutability && "nonpayable" !== this.stateMutability && (t += this.stateMutability + " "), t.trim()
        }
        static from(e) {
          return "string" == typeof e ? E.fromString(e) : E.fromObject(e)
        }
        static fromObject(e) {
          if (E.isConstructorFragment(e)) return e;
          "constructor" !== e.type && a.throwArgumentError("invalid constructor object", "value", e);
          let t = A(e);
          t.constant && a.throwArgumentError("constructor cannot be constant", "value", e);
          let r = {
            name: null,
            type: e.type,
            inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
            payable: t.payable,
            stateMutability: t.stateMutability,
            gas: e.gas ? n.O$.from(e.gas) : null
          };
          return new E(u, r)
        }
        static fromString(e) {
          let t = {
              type: "constructor"
            },
            r = (e = b(e, t)).match(M);
          return r && "constructor" === r[1].trim() || a.throwArgumentError("invalid constructor string", "value", e), t.inputs = m(r[2].trim(), !1), w(r[3].trim(), t), E.fromObject(t)
        }
        static isConstructorFragment(e) {
          return e && e._isFragment && "constructor" === e.type
        }
      }
      class S extends E {
        format(e) {
          if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
            type: "function",
            name: this.name,
            constant: this.constant,
            stateMutability: "nonpayable" !== this.stateMutability ? this.stateMutability : void 0,
            payable: this.payable,
            gas: this.gas ? this.gas.toNumber() : void 0,
            inputs: this.inputs.map(t => JSON.parse(t.format(e))),
            outputs: this.outputs.map(t => JSON.parse(t.format(e)))
          });
          let t = "";
          return e !== d.sighash && (t += "function "), t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === d.full ? ", " : ",") + ") ", e !== d.sighash && (this.stateMutability ? "nonpayable" !== this.stateMutability && (t += this.stateMutability + " ") : this.constant && (t += "view "), this.outputs && this.outputs.length && (t += "returns (" + this.outputs.map(t => t.format(e)).join(", ") + ") "), null != this.gas && (t += "@" + this.gas.toString() + " ")), t.trim()
        }
        static from(e) {
          return "string" == typeof e ? S.fromString(e) : S.fromObject(e)
        }
        static fromObject(e) {
          if (S.isFunctionFragment(e)) return e;
          "function" !== e.type && a.throwArgumentError("invalid function object", "value", e);
          let t = A(e),
            r = {
              type: e.type,
              name: _(e.name),
              constant: t.constant,
              inputs: e.inputs ? e.inputs.map(g.fromObject) : [],
              outputs: e.outputs ? e.outputs.map(g.fromObject) : [],
              payable: t.payable,
              stateMutability: t.stateMutability,
              gas: e.gas ? n.O$.from(e.gas) : null
            };
          return new S(u, r)
        }
        static fromString(e) {
          let t = {
              type: "function"
            },
            r = (e = b(e, t)).split(" returns ");
          r.length > 2 && a.throwArgumentError("invalid function string", "value", e);
          let n = r[0].match(M);
          if (n || a.throwArgumentError("invalid function signature", "value", e), t.name = n[1].trim(), t.name && _(t.name), t.inputs = m(n[2], !1), w(n[3].trim(), t), r.length > 1) {
            let n = r[1].match(M);
            ("" != n[1].trim() || "" != n[3].trim()) && a.throwArgumentError("unexpected tokens", "value", e), t.outputs = m(n[2], !1)
          } else t.outputs = [];
          return S.fromObject(t)
        }
        static isFunctionFragment(e) {
          return e && e._isFragment && "function" === e.type
        }
      }

      function x(e) {
        let t = e.format();
        return ("Error(string)" === t || "Panic(uint256)" === t) && a.throwArgumentError(`cannot specify user defined ${t} error`, "fragment", e), e
      }
      class k extends y {
        format(e) {
          if (e || (e = d.sighash), d[e] || a.throwArgumentError("invalid format type", "format", e), e === d.json) return JSON.stringify({
            type: "error",
            name: this.name,
            inputs: this.inputs.map(t => JSON.parse(t.format(e)))
          });
          let t = "";
          return e !== d.sighash && (t += "error "), (t += this.name + "(" + this.inputs.map(t => t.format(e)).join(e === d.full ? ", " : ",") + ") ").trim()
        }
        static from(e) {
          return "string" == typeof e ? k.fromString(e) : k.fromObject(e)
        }
        static fromObject(e) {
          if (k.isErrorFragment(e)) return e;
          "error" !== e.type && a.throwArgumentError("invalid error object", "value", e);
          let t = {
            type: e.type,
            name: _(e.name),
            inputs: e.inputs ? e.inputs.map(g.fromObject) : []
          };
          return x(new k(u, t))
        }
        static fromString(e) {
          let t = {
              type: "error"
            },
            r = e.match(M);
          return r || a.throwArgumentError("invalid error signature", "value", e), t.name = r[1].trim(), t.name && _(t.name), t.inputs = m(r[2], !1), x(k.fromObject(t))
        }
        static isErrorFragment(e) {
          return e && e._isFragment && "error" === e.type
        }
      }

      function P(e) {
        return e.match(/^uint($|[^1-9])/) ? e = "uint256" + e.substring(4) : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)), e
      }
      let C = RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");

      function _(e) {
        return e && e.match(C) || a.throwArgumentError(`invalid identifier "${e}"`, "value", e), e
      }
      let M = RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$")
    },
    83893: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        AbiCoder: function () {
          return i.R
        },
        ConstructorFragment: function () {
          return n.Xg
        },
        ErrorFragment: function () {
          return n.IC
        },
        EventFragment: function () {
          return n.QV
        },
        FormatTypes: function () {
          return n.pc
        },
        Fragment: function () {
          return n.HY
        },
        FunctionFragment: function () {
          return n.YW
        },
        Indexed: function () {
          return o.Hk
        },
        Interface: function () {
          return o.vU
        },
        LogDescription: function () {
          return o.CC
        },
        ParamType: function () {
          return n._R
        },
        TransactionDescription: function () {
          return o.vk
        },
        checkResultErrors: function () {
          return s.BR
        },
        defaultAbiCoder: function () {
          return i.$
        }
      });
      var n = r(11388),
        i = r(84243),
        o = r(8198),
        s = r(61184)
    },
    8198: function (e, t, r) {
      "use strict";
      r.d(t, {
        CC: function () {
          return p
        },
        Hk: function () {
          return y
        },
        vU: function () {
          return w
        },
        vk: function () {
          return g
        }
      });
      var n = r(19485),
        i = r(2593),
        o = r(16441),
        s = r(32046),
        a = r(38197),
        u = r(6881),
        l = r(84243),
        c = r(11388),
        h = r(1581),
        f = r(95851);
      let d = new h.Logger(f.i);
      class p extends u.Description {}
      class g extends u.Description {}
      class m extends u.Description {}
      class y extends u.Description {
        static isIndexed(e) {
          return !!(e && e._isIndexed)
        }
      }
      let v = {
        "0x08c379a0": {
          signature: "Error(string)",
          name: "Error",
          inputs: ["string"],
          reason: !0
        },
        "0x4e487b71": {
          signature: "Panic(uint256)",
          name: "Panic",
          inputs: ["uint256"]
        }
      };

      function b(e, t) {
        let r = Error(`deferred error during ABI decoding triggered accessing ${e}`);
        return r.error = t, r
      }
      class w {
        constructor(e) {
          let t = [];
          t = "string" == typeof e ? JSON.parse(e) : e, (0, u.defineReadOnly)(this, "fragments", t.map(e => c.HY.from(e)).filter(e => null != e)), (0, u.defineReadOnly)(this, "_abiCoder", (0, u.getStatic)(new.target, "getAbiCoder")()), (0, u.defineReadOnly)(this, "functions", {}), (0, u.defineReadOnly)(this, "errors", {}), (0, u.defineReadOnly)(this, "events", {}), (0, u.defineReadOnly)(this, "structs", {}), this.fragments.forEach(e => {
            let t = null;
            switch (e.type) {
              case "constructor":
                if (this.deploy) {
                  d.warn("duplicate definition - constructor");
                  return
                }(0, u.defineReadOnly)(this, "deploy", e);
                return;
              case "function":
                t = this.functions;
                break;
              case "event":
                t = this.events;
                break;
              case "error":
                t = this.errors;
                break;
              default:
                return
            }
            let r = e.format();
            if (t[r]) {
              d.warn("duplicate definition - " + r);
              return
            }
            t[r] = e
          }), this.deploy || (0, u.defineReadOnly)(this, "deploy", c.Xg.from({
            payable: !1,
            type: "constructor"
          })), (0, u.defineReadOnly)(this, "_isInterface", !0)
        }
        format(e) {
          e || (e = c.pc.full), e === c.pc.sighash && d.throwArgumentError("interface does not support formatting sighash", "format", e);
          let t = this.fragments.map(t => t.format(e));
          return e === c.pc.json ? JSON.stringify(t.map(e => JSON.parse(e))) : t
        }
        static getAbiCoder() {
          return l.$
        }
        static getAddress(e) {
          return (0, n.getAddress)(e)
        }
        static getSighash(e) {
          return (0, o.hexDataSlice)((0, s.id)(e.format()), 0, 4)
        }
        static getEventTopic(e) {
          return (0, s.id)(e.format())
        }
        getFunction(e) {
          if ((0, o.isHexString)(e)) {
            for (let t in this.functions)
              if (e === this.getSighash(t)) return this.functions[t];
            d.throwArgumentError("no matching function", "sighash", e)
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.functions).filter(e => e.split("(")[0] === t);
            return 0 === r.length ? d.throwArgumentError("no matching function", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching functions", "name", t), this.functions[r[0]]
          }
          let t = this.functions[c.YW.fromString(e).format()];
          return t || d.throwArgumentError("no matching function", "signature", e), t
        }
        getEvent(e) {
          if ((0, o.isHexString)(e)) {
            let t = e.toLowerCase();
            for (let e in this.events)
              if (t === this.getEventTopic(e)) return this.events[e];
            d.throwArgumentError("no matching event", "topichash", t)
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.events).filter(e => e.split("(")[0] === t);
            return 0 === r.length ? d.throwArgumentError("no matching event", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching events", "name", t), this.events[r[0]]
          }
          let t = this.events[c.QV.fromString(e).format()];
          return t || d.throwArgumentError("no matching event", "signature", e), t
        }
        getError(e) {
          if ((0, o.isHexString)(e)) {
            let t = (0, u.getStatic)(this.constructor, "getSighash");
            for (let r in this.errors) {
              let n = this.errors[r];
              if (e === t(n)) return this.errors[r]
            }
            d.throwArgumentError("no matching error", "sighash", e)
          }
          if (-1 === e.indexOf("(")) {
            let t = e.trim(),
              r = Object.keys(this.errors).filter(e => e.split("(")[0] === t);
            return 0 === r.length ? d.throwArgumentError("no matching error", "name", t) : r.length > 1 && d.throwArgumentError("multiple matching errors", "name", t), this.errors[r[0]]
          }
          let t = this.errors[c.YW.fromString(e).format()];
          return t || d.throwArgumentError("no matching error", "signature", e), t
        }
        getSighash(e) {
          if ("string" == typeof e) try {
            e = this.getFunction(e)
          } catch (t) {
            try {
              e = this.getError(e)
            } catch (e) {
              throw t
            }
          }
          return (0, u.getStatic)(this.constructor, "getSighash")(e)
        }
        getEventTopic(e) {
          return "string" == typeof e && (e = this.getEvent(e)), (0, u.getStatic)(this.constructor, "getEventTopic")(e)
        }
        _decodeParams(e, t) {
          return this._abiCoder.decode(e, t)
        }
        _encodeParams(e, t) {
          return this._abiCoder.encode(e, t)
        }
        encodeDeploy(e) {
          return this._encodeParams(this.deploy.inputs, e || [])
        }
        decodeErrorResult(e, t) {
          "string" == typeof e && (e = this.getError(e));
          let r = (0, o.arrayify)(t);
          return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) && d.throwArgumentError(`data signature does not match error ${e.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(e.inputs, r.slice(4))
        }
        encodeErrorResult(e, t) {
          return "string" == typeof e && (e = this.getError(e)), (0, o.hexlify)((0, o.concat)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
        }
        decodeFunctionData(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, o.arrayify)(t);
          return (0, o.hexlify)(r.slice(0, 4)) !== this.getSighash(e) && d.throwArgumentError(`data signature does not match function ${e.name}.`, "data", (0, o.hexlify)(r)), this._decodeParams(e.inputs, r.slice(4))
        }
        encodeFunctionData(e, t) {
          return "string" == typeof e && (e = this.getFunction(e)), (0, o.hexlify)((0, o.concat)([this.getSighash(e), this._encodeParams(e.inputs, t || [])]))
        }
        decodeFunctionResult(e, t) {
          "string" == typeof e && (e = this.getFunction(e));
          let r = (0, o.arrayify)(t),
            n = null,
            i = "",
            s = null,
            a = null,
            u = null;
          switch (r.length % this._abiCoder._getWordSize()) {
            case 0:
              try {
                return this._abiCoder.decode(e.outputs, r)
              } catch (e) {}
              break;
            case 4: {
              let e = (0, o.hexlify)(r.slice(0, 4)),
                t = v[e];
              if (t) s = this._abiCoder.decode(t.inputs, r.slice(4)), a = t.name, u = t.signature, t.reason && (n = s[0]), "Error" === a ? i = `; VM Exception while processing transaction: reverted with reason string ${JSON.stringify(s[0])}` : "Panic" === a && (i = `; VM Exception while processing transaction: reverted with panic code ${s[0]}`);
              else try {
                let t = this.getError(e);
                s = this._abiCoder.decode(t.inputs, r.slice(4)), a = t.name, u = t.format()
              } catch (e) {}
            }
          }
          return d.throwError("call revert exception" + i, h.Logger.errors.CALL_EXCEPTION, {
            method: e.format(),
            data: (0, o.hexlify)(t),
            errorArgs: s,
            errorName: a,
            errorSignature: u,
            reason: n
          })
        }
        encodeFunctionResult(e, t) {
          return "string" == typeof e && (e = this.getFunction(e)), (0, o.hexlify)(this._abiCoder.encode(e.outputs, t || []))
        }
        encodeFilterTopics(e, t) {
          "string" == typeof e && (e = this.getEvent(e)), t.length > e.inputs.length && d.throwError("too many arguments for " + e.format(), h.Logger.errors.UNEXPECTED_ARGUMENT, {
            argument: "values",
            value: t
          });
          let r = [];
          e.anonymous || r.push(this.getEventTopic(e));
          let n = (e, t) => "string" === e.type ? (0, s.id)(t) : "bytes" === e.type ? (0, a.keccak256)((0, o.hexlify)(t)) : ("bool" === e.type && "boolean" == typeof t && (t = t ? "0x01" : "0x00"), e.type.match(/^u?int/) && (t = i.O$.from(t).toHexString()), "address" === e.type && this._abiCoder.encode(["address"], [t]), (0, o.hexZeroPad)((0, o.hexlify)(t), 32));
          for (t.forEach((t, i) => {
              let o = e.inputs[i];
              if (!o.indexed) {
                null != t && d.throwArgumentError("cannot filter non-indexed parameters; must be null", "contract." + o.name, t);
                return
              }
              null == t ? r.push(null) : "array" === o.baseType || "tuple" === o.baseType ? d.throwArgumentError("filtering with tuples or arrays not supported", "contract." + o.name, t) : Array.isArray(t) ? r.push(t.map(e => n(o, e))) : r.push(n(o, t))
            }); r.length && null === r[r.length - 1];) r.pop();
          return r
        }
        encodeEventLog(e, t) {
          "string" == typeof e && (e = this.getEvent(e));
          let r = [],
            n = [],
            i = [];
          return e.anonymous || r.push(this.getEventTopic(e)), t.length !== e.inputs.length && d.throwArgumentError("event arguments/values mismatch", "values", t), e.inputs.forEach((e, o) => {
            let u = t[o];
            if (e.indexed) {
              if ("string" === e.type) r.push((0, s.id)(u));
              else if ("bytes" === e.type) r.push((0, a.keccak256)(u));
              else if ("tuple" === e.baseType || "array" === e.baseType) throw Error("not implemented");
              else r.push(this._abiCoder.encode([e.type], [u]))
            } else n.push(e), i.push(u)
          }), {
            data: this._abiCoder.encode(n, i),
            topics: r
          }
        }
        decodeEventLog(e, t, r) {
          if ("string" == typeof e && (e = this.getEvent(e)), null != r && !e.anonymous) {
            let t = this.getEventTopic(e);
            (0, o.isHexString)(r[0], 32) && r[0].toLowerCase() === t || d.throwError("fragment/topic mismatch", h.Logger.errors.INVALID_ARGUMENT, {
              argument: "topics[0]",
              expected: t,
              value: r[0]
            }), r = r.slice(1)
          }
          let n = [],
            i = [],
            s = [];
          e.inputs.forEach((e, t) => {
            e.indexed ? "string" === e.type || "bytes" === e.type || "tuple" === e.baseType || "array" === e.baseType ? (n.push(c._R.fromObject({
              type: "bytes32",
              name: e.name
            })), s.push(!0)) : (n.push(e), s.push(!1)) : (i.push(e), s.push(!1))
          });
          let a = null != r ? this._abiCoder.decode(n, (0, o.concat)(r)) : null,
            u = this._abiCoder.decode(i, t, !0),
            l = [],
            f = 0,
            p = 0;
          e.inputs.forEach((e, t) => {
            if (e.indexed) {
              if (null == a) l[t] = new y({
                _isIndexed: !0,
                hash: null
              });
              else if (s[t]) l[t] = new y({
                _isIndexed: !0,
                hash: a[p++]
              });
              else try {
                l[t] = a[p++]
              } catch (e) {
                l[t] = e
              }
            } else try {
              l[t] = u[f++]
            } catch (e) {
              l[t] = e
            }
            if (e.name && null == l[e.name]) {
              let r = l[t];
              r instanceof Error ? Object.defineProperty(l, e.name, {
                enumerable: !0,
                get: () => {
                  throw b(`property ${JSON.stringify(e.name)}`, r)
                }
              }) : l[e.name] = r
            }
          });
          for (let e = 0; e < l.length; e++) {
            let t = l[e];
            t instanceof Error && Object.defineProperty(l, e, {
              enumerable: !0,
              get: () => {
                throw b(`index ${e}`, t)
              }
            })
          }
          return Object.freeze(l)
        }
        parseTransaction(e) {
          let t = this.getFunction(e.data.substring(0, 10).toLowerCase());
          return t ? new g({
            args: this._abiCoder.decode(t.inputs, "0x" + e.data.substring(10)),
            functionFragment: t,
            name: t.name,
            signature: t.format(),
            sighash: this.getSighash(t),
            value: i.O$.from(e.value || "0")
          }) : null
        }
        parseLog(e) {
          let t = this.getEvent(e.topics[0]);
          return !t || t.anonymous ? null : new p({
            eventFragment: t,
            name: t.name,
            signature: t.format(),
            topic: this.getEventTopic(t),
            args: this.decodeEventLog(t, e.data, e.topics)
          })
        }
        parseError(e) {
          let t = (0, o.hexlify)(e),
            r = this.getError(t.substring(0, 10).toLowerCase());
          return r ? new m({
            args: this._abiCoder.decode(r.inputs, "0x" + t.substring(10)),
            errorFragment: r,
            name: r.name,
            signature: r.format(),
            sighash: this.getSighash(r)
          }) : null
        }
        static isInterface(e) {
          return !!(e && e._isInterface)
        }
      }
    },
    81556: function (e, t, r) {
      "use strict";
      r.d(t, {
        Sg: function () {
          return a
        },
        zt: function () {
          return u
        }
      });
      var n = r(2593),
        i = r(6881),
        o = r(1581);
      let s = new o.Logger("abstract-provider/5.7.0");
      class a extends i.Description {
        static isForkEvent(e) {
          return !!(e && e._isForkEvent)
        }
      }
      class u {
        constructor() {
          s.checkAbstract(new.target, u), (0, i.defineReadOnly)(this, "_isProvider", !0)
        }
        getFeeData() {
          var e, t, r, o;
          return e = this, t = void 0, r = void 0, o = function* () {
            let {
              block: e,
              gasPrice: t
            } = yield(0, i.resolveProperties)({
              block: this.getBlock("latest"),
              gasPrice: this.getGasPrice().catch(e => null)
            }), r = null, o = null, s = null;
            return e && e.baseFeePerGas && (r = e.baseFeePerGas, s = n.O$.from("1500000000"), o = e.baseFeePerGas.mul(2).add(s)), {
              lastBaseFeePerGas: r,
              maxFeePerGas: o,
              maxPriorityFeePerGas: s,
              gasPrice: t
            }
          }, new(r || (r = Promise))(function (n, i) {
            function s(e) {
              try {
                u(o.next(e))
              } catch (e) {
                i(e)
              }
            }

            function a(e) {
              try {
                u(o.throw(e))
              } catch (e) {
                i(e)
              }
            }

            function u(e) {
              var t;
              e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((o = o.apply(e, t || [])).next())
          })
        }
        addListener(e, t) {
          return this.on(e, t)
        }
        removeListener(e, t) {
          return this.off(e, t)
        }
        static isProvider(e) {
          return !!(e && e._isProvider)
        }
      }
    },
    48088: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return l
        },
        b: function () {
          return c
        }
      });
      var n = r(6881),
        i = r(1581),
        o = function (e, t, r, n) {
          return new(r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function a(e) {
              try {
                u(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function u(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
          })
        };
      let s = new i.Logger("abstract-signer/5.7.0"),
        a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"],
        u = [i.Logger.errors.INSUFFICIENT_FUNDS, i.Logger.errors.NONCE_EXPIRED, i.Logger.errors.REPLACEMENT_UNDERPRICED];
      class l {
        constructor() {
          s.checkAbstract(new.target, l), (0, n.defineReadOnly)(this, "_isSigner", !0)
        }
        getBalance(e) {
          return o(this, void 0, void 0, function* () {
            return this._checkProvider("getBalance"), yield this.provider.getBalance(this.getAddress(), e)
          })
        }
        getTransactionCount(e) {
          return o(this, void 0, void 0, function* () {
            return this._checkProvider("getTransactionCount"), yield this.provider.getTransactionCount(this.getAddress(), e)
          })
        }
        estimateGas(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            let t = yield(0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.estimateGas(t)
          })
        }
        call(e, t) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("call");
            let r = yield(0, n.resolveProperties)(this.checkTransaction(e));
            return yield this.provider.call(r, t)
          })
        }
        sendTransaction(e) {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            let t = yield this.populateTransaction(e), r = yield this.signTransaction(t);
            return yield this.provider.sendTransaction(r)
          })
        }
        getChainId() {
          return o(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            let e = yield this.provider.getNetwork();
            return e.chainId
          })
        }
        getGasPrice() {
          return o(this, void 0, void 0, function* () {
            return this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
          })
        }
        getFeeData() {
          return o(this, void 0, void 0, function* () {
            return this._checkProvider("getFeeData"), yield this.provider.getFeeData()
          })
        }
        resolveName(e) {
          return o(this, void 0, void 0, function* () {
            return this._checkProvider("resolveName"), yield this.provider.resolveName(e)
          })
        }
        checkTransaction(e) {
          for (let t in e) - 1 === a.indexOf(t) && s.throwArgumentError("invalid transaction key: " + t, "transaction", e);
          let t = (0, n.shallowCopy)(e);
          return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then(t => (t[0].toLowerCase() !== t[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", e), t[0])), t
        }
        populateTransaction(e) {
          return o(this, void 0, void 0, function* () {
            let t = yield(0, n.resolveProperties)(this.checkTransaction(e));
            null != t.to && (t.to = Promise.resolve(t.to).then(e => o(this, void 0, void 0, function* () {
              if (null == e) return null;
              let t = yield this.resolveName(e);
              return null == t && s.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
            })), t.to.catch(e => {}));
            let r = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
            if (null != t.gasPrice && (2 === t.type || r) ? s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e) : (0 === t.type || 1 === t.type) && r && s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e), (2 === t.type || null == t.type) && null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) t.type = 2;
            else if (0 === t.type || 1 === t.type) null == t.gasPrice && (t.gasPrice = this.getGasPrice());
            else {
              let e = yield this.getFeeData();
              if (null == t.type) {
                if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas) {
                  if (t.type = 2, null != t.gasPrice) {
                    let e = t.gasPrice;
                    delete t.gasPrice, t.maxFeePerGas = e, t.maxPriorityFeePerGas = e
                  } else null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas)
                } else null != e.gasPrice ? (r && s.throwError("network does not support EIP-1559", i.Logger.errors.UNSUPPORTED_OPERATION, {
                  operation: "populateTransaction"
                }), null == t.gasPrice && (t.gasPrice = e.gasPrice), t.type = 0) : s.throwError("failed to get consistent fee data", i.Logger.errors.UNSUPPORTED_OPERATION, {
                  operation: "signer.getFeeData"
                })
              } else 2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas), null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
            }
            return null == t.nonce && (t.nonce = this.getTransactionCount("pending")), null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch(e => {
              if (u.indexOf(e.code) >= 0) throw e;
              return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: e,
                tx: t
              })
            })), null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then(t => (0 !== t[1] && t[0] !== t[1] && s.throwArgumentError("chainId address mismatch", "transaction", e), t[0])), yield(0, n.resolveProperties)(t)
          })
        }
        _checkProvider(e) {
          this.provider || s.throwError("missing provider", i.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: e || "_checkProvider"
          })
        }
        static isSigner(e) {
          return !!(e && e._isSigner)
        }
      }
      class c extends l {
        constructor(e, t) {
          super(), (0, n.defineReadOnly)(this, "address", e), (0, n.defineReadOnly)(this, "provider", t || null)
        }
        getAddress() {
          return Promise.resolve(this.address)
        }
        _fail(e, t) {
          return Promise.resolve().then(() => {
            s.throwError(e, i.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: t
            })
          })
        }
        signMessage(e) {
          return this._fail("VoidSigner cannot sign messages", "signMessage")
        }
        signTransaction(e) {
          return this._fail("VoidSigner cannot sign transactions", "signTransaction")
        }
        _signTypedData(e, t, r) {
          return this._fail("VoidSigner cannot sign typed data", "signTypedData")
        }
        connect(e) {
          return new c(this.address, e)
        }
      }
    },
    19485: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        getAddress: function () {
          return d
        },
        getContractAddress: function () {
          return m
        },
        getCreate2Address: function () {
          return y
        },
        getIcapAddress: function () {
          return g
        },
        isAddress: function () {
          return p
        }
      });
      var n = r(16441),
        i = r(2593),
        o = r(38197),
        s = r(59052),
        a = r(1581);
      let u = new a.Logger("address/5.7.0");

      function l(e) {
        (0, n.isHexString)(e, 20) || u.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
        let t = e.substring(2).split(""),
          r = new Uint8Array(40);
        for (let e = 0; e < 40; e++) r[e] = t[e].charCodeAt(0);
        let i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let e = 0; e < 40; e += 2) i[e >> 1] >> 4 >= 8 && (t[e] = t[e].toUpperCase()), (15 & i[e >> 1]) >= 8 && (t[e + 1] = t[e + 1].toUpperCase());
        return "0x" + t.join("")
      }
      let c = {};
      for (let e = 0; e < 10; e++) c[String(e)] = String(e);
      for (let e = 0; e < 26; e++) c[String.fromCharCode(65 + e)] = String(10 + e);
      let h = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);

      function f(e) {
        let t = (e = (e = e.toUpperCase()).substring(4) + e.substring(0, 2) + "00").split("").map(e => c[e]).join("");
        for (; t.length >= h;) {
          let e = t.substring(0, h);
          t = parseInt(e, 10) % 97 + t.substring(e.length)
        }
        let r = String(98 - parseInt(t, 10) % 97);
        for (; r.length < 2;) r = "0" + r;
        return r
      }

      function d(e) {
        let t = null;
        if ("string" != typeof e && u.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== e.substring(0, 2) && (e = "0x" + e), t = l(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && u.throwArgumentError("bad address checksum", "address", e);
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (e.substring(2, 4) !== f(e) && u.throwArgumentError("bad icap checksum", "address", e), t = (0, i.g$)(e.substring(4)); t.length < 40;) t = "0" + t;
          t = l("0x" + t)
        } else u.throwArgumentError("invalid address", "address", e);
        return t
      }

      function p(e) {
        try {
          return d(e), !0
        } catch (e) {}
        return !1
      }

      function g(e) {
        let t = (0, i.t2)(d(e).substring(2)).toUpperCase();
        for (; t.length < 30;) t = "0" + t;
        return "XE" + f("XE00" + t) + t
      }

      function m(e) {
        let t = null;
        try {
          t = d(e.from)
        } catch (t) {
          u.throwArgumentError("missing from address", "transaction", e)
        }
        let r = (0, n.stripZeros)((0, n.arrayify)(i.O$.from(e.nonce).toHexString()));
        return d((0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12))
      }

      function y(e, t, r) {
        return 32 !== (0, n.hexDataLength)(t) && u.throwArgumentError("salt must be 32 bytes", "salt", t), 32 !== (0, n.hexDataLength)(r) && u.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", r), d((0, n.hexDataSlice)((0, o.keccak256)((0, n.concat)(["0xff", d(e), t, r])), 12))
      }
    },
    59567: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return i
        },
        c: function () {
          return o
        }
      });
      var n = r(16441);

      function i(e) {
        e = atob(e);
        let t = [];
        for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
        return (0, n.arrayify)(t)
      }

      function o(e) {
        e = (0, n.arrayify)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return btoa(t)
      }
    },
    4089: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        decode: function () {
          return n.J
        },
        encode: function () {
          return n.c
        }
      });
      var n = r(59567)
    },
    57727: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        Base32: function () {
          return s
        },
        Base58: function () {
          return a
        },
        BaseX: function () {
          return o
        }
      });
      var n = r(16441),
        i = r(6881);
      class o {
        constructor(e) {
          (0, i.defineReadOnly)(this, "alphabet", e), (0, i.defineReadOnly)(this, "base", e.length), (0, i.defineReadOnly)(this, "_alphabetMap", {}), (0, i.defineReadOnly)(this, "_leader", e.charAt(0));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t
        }
        encode(e) {
          let t = (0, n.arrayify)(e);
          if (0 === t.length) return "";
          let r = [0];
          for (let e = 0; e < t.length; ++e) {
            let n = t[e];
            for (let e = 0; e < r.length; ++e) n += r[e] << 8, r[e] = n % this.base, n = n / this.base | 0;
            for (; n > 0;) r.push(n % this.base), n = n / this.base | 0
          }
          let i = "";
          for (let e = 0; 0 === t[e] && e < t.length - 1; ++e) i += this._leader;
          for (let e = r.length - 1; e >= 0; --e) i += this.alphabet[r[e]];
          return i
        }
        decode(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n) throw Error("Non-base" + this.base + " character");
            let i = n;
            for (let e = 0; e < t.length; ++e) i += t[e] * this.base, t[e] = 255 & i, i >>= 8;
            for (; i > 0;) t.push(255 & i), i >>= 8
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r) t.push(0);
          return (0, n.arrayify)(new Uint8Array(t.reverse()))
        }
      }
      let s = new o("abcdefghijklmnopqrstuvwxyz234567"),
        a = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
    },
    48794: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n
        }
      });
      let n = "bignumber/5.7.0"
    },
    2593: function (e, t, r) {
      "use strict";
      r.d(t, {
        O$: function () {
          return d
        },
        Zm: function () {
          return h
        },
        g$: function () {
          return v
        },
        t2: function () {
          return b
        }
      });
      var n = r(13550),
        i = r.n(n),
        o = r(16441),
        s = r(1581),
        a = r(48794),
        u = i().BN;
      let l = new s.Logger(a.i),
        c = {};

      function h(e) {
        return null != e && (d.isBigNumber(e) || "number" == typeof e && e % 1 == 0 || "string" == typeof e && !!e.match(/^-?[0-9]+$/) || (0, o.isHexString)(e) || "bigint" == typeof e || (0, o.isBytes)(e))
      }
      let f = !1;
      class d {
        constructor(e, t) {
          e !== c && l.throwError("cannot call constructor directly; use BigNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new (BigNumber)"
          }), this._hex = t, this._isBigNumber = !0, Object.freeze(this)
        }
        fromTwos(e) {
          return g(m(this).fromTwos(e))
        }
        toTwos(e) {
          return g(m(this).toTwos(e))
        }
        abs() {
          return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
        }
        add(e) {
          return g(m(this).add(m(e)))
        }
        sub(e) {
          return g(m(this).sub(m(e)))
        }
        div(e) {
          let t = d.from(e);
          return t.isZero() && y("division-by-zero", "div"), g(m(this).div(m(e)))
        }
        mul(e) {
          return g(m(this).mul(m(e)))
        }
        mod(e) {
          let t = m(e);
          return t.isNeg() && y("division-by-zero", "mod"), g(m(this).umod(t))
        }
        pow(e) {
          let t = m(e);
          return t.isNeg() && y("negative-power", "pow"), g(m(this).pow(t))
        }
        and(e) {
          let t = m(e);
          return (this.isNegative() || t.isNeg()) && y("unbound-bitwise-result", "and"), g(m(this).and(t))
        }
        or(e) {
          let t = m(e);
          return (this.isNegative() || t.isNeg()) && y("unbound-bitwise-result", "or"), g(m(this).or(t))
        }
        xor(e) {
          let t = m(e);
          return (this.isNegative() || t.isNeg()) && y("unbound-bitwise-result", "xor"), g(m(this).xor(t))
        }
        mask(e) {
          return (this.isNegative() || e < 0) && y("negative-width", "mask"), g(m(this).maskn(e))
        }
        shl(e) {
          return (this.isNegative() || e < 0) && y("negative-width", "shl"), g(m(this).shln(e))
        }
        shr(e) {
          return (this.isNegative() || e < 0) && y("negative-width", "shr"), g(m(this).shrn(e))
        }
        eq(e) {
          return m(this).eq(m(e))
        }
        lt(e) {
          return m(this).lt(m(e))
        }
        lte(e) {
          return m(this).lte(m(e))
        }
        gt(e) {
          return m(this).gt(m(e))
        }
        gte(e) {
          return m(this).gte(m(e))
        }
        isNegative() {
          return "-" === this._hex[0]
        }
        isZero() {
          return m(this).isZero()
        }
        toNumber() {
          try {
            return m(this).toNumber()
          } catch (e) {
            y("overflow", "toNumber", this.toString())
          }
          return null
        }
        toBigInt() {
          try {
            return BigInt(this.toString())
          } catch (e) {}
          return l.throwError("this platform does not support BigInt", s.Logger.errors.UNSUPPORTED_OPERATION, {
            value: this.toString()
          })
        }
        toString() {
          return arguments.length > 0 && (10 === arguments[0] ? f || (f = !0, l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Logger.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", s.Logger.errors.UNEXPECTED_ARGUMENT, {})), m(this).toString(10)
        }
        toHexString() {
          return this._hex
        }
        toJSON(e) {
          return {
            type: "BigNumber",
            hex: this.toHexString()
          }
        }
        static from(e) {
          if (e instanceof d) return e;
          if ("string" == typeof e) return e.match(/^-?0x[0-9a-f]+$/i) ? new d(c, p(e)) : e.match(/^-?[0-9]+$/) ? new d(c, p(new u(e))) : l.throwArgumentError("invalid BigNumber string", "value", e);
          if ("number" == typeof e) return e % 1 && y("underflow", "BigNumber.from", e), (e >= 9007199254740991 || e <= -9007199254740991) && y("overflow", "BigNumber.from", e), d.from(String(e));
          if ("bigint" == typeof e) return d.from(e.toString());
          if ((0, o.isBytes)(e)) return d.from((0, o.hexlify)(e));
          if (e) {
            if (e.toHexString) {
              let t = e.toHexString();
              if ("string" == typeof t) return d.from(t)
            } else {
              let t = e._hex;
              if (null == t && "BigNumber" === e.type && (t = e.hex), "string" == typeof t && ((0, o.isHexString)(t) || "-" === t[0] && (0, o.isHexString)(t.substring(1)))) return d.from(t)
            }
          }
          return l.throwArgumentError("invalid BigNumber value", "value", e)
        }
        static isBigNumber(e) {
          return !!(e && e._isBigNumber)
        }
      }

      function p(e) {
        if ("string" != typeof e) return p(e.toString(16));
        if ("-" === e[0]) return ("-" === (e = e.substring(1))[0] && l.throwArgumentError("invalid hex", "value", e), "0x00" === (e = p(e))) ? e : "-" + e;
        if ("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e) return "0x00";
        for (e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && "0x00" === e.substring(0, 4);) e = "0x" + e.substring(4);
        return e
      }

      function g(e) {
        return d.from(p(e))
      }

      function m(e) {
        let t = d.from(e).toHexString();
        return "-" === t[0] ? new u("-" + t.substring(3), 16) : new u(t.substring(2), 16)
      }

      function y(e, t, r) {
        let n = {
          fault: e,
          operation: t
        };
        return null != r && (n.value = r), l.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
      }

      function v(e) {
        return new u(e, 36).toString(16)
      }

      function b(e) {
        return new u(e, 16).toString(36)
      }
    },
    16441: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        arrayify: function () {
          return c
        },
        concat: function () {
          return h
        },
        hexConcat: function () {
          return b
        },
        hexDataLength: function () {
          return y
        },
        hexDataSlice: function () {
          return v
        },
        hexStripZeros: function () {
          return A
        },
        hexValue: function () {
          return w
        },
        hexZeroPad: function () {
          return E
        },
        hexlify: function () {
          return m
        },
        isBytes: function () {
          return l
        },
        isBytesLike: function () {
          return a
        },
        isHexString: function () {
          return p
        },
        joinSignature: function () {
          return x
        },
        splitSignature: function () {
          return S
        },
        stripZeros: function () {
          return f
        },
        zeroPad: function () {
          return d
        }
      });
      var n = r(1581);
      let i = new n.Logger("bytes/5.7.0");

      function o(e) {
        return !!e.toHexString
      }

      function s(e) {
        return e.slice || (e.slice = function () {
          let t = Array.prototype.slice.call(arguments);
          return s(new Uint8Array(Array.prototype.slice.apply(e, t)))
        }), e
      }

      function a(e) {
        return p(e) && !(e.length % 2) || l(e)
      }

      function u(e) {
        return "number" == typeof e && e == e && e % 1 == 0
      }

      function l(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" == typeof e || !u(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          let r = e[t];
          if (!u(r) || r < 0 || r >= 256) return !1
        }
        return !0
      }

      function c(e, t) {
        if (t || (t = {}), "number" == typeof e) {
          i.checkSafeUint53(e, "invalid arrayify value");
          let t = [];
          for (; e;) t.unshift(255 & e), e = parseInt(String(e / 256));
          return 0 === t.length && t.push(0), s(new Uint8Array(t))
        }
        if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e) && (e = e.toHexString()), p(e)) {
          let r = e.substring(2);
          r.length % 2 && ("left" === t.hexPad ? r = "0" + r : "right" === t.hexPad ? r += "0" : i.throwArgumentError("hex data is odd-length", "value", e));
          let n = [];
          for (let e = 0; e < r.length; e += 2) n.push(parseInt(r.substring(e, e + 2), 16));
          return s(new Uint8Array(n))
        }
        return l(e) ? s(new Uint8Array(e)) : i.throwArgumentError("invalid arrayify value", "value", e)
      }

      function h(e) {
        let t = e.map(e => c(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return t.reduce((e, t) => (n.set(t, e), e + t.length), 0), s(n)
      }

      function f(e) {
        let t = c(e);
        if (0 === t.length) return t;
        let r = 0;
        for (; r < t.length && 0 === t[r];) r++;
        return r && (t = t.slice(r)), t
      }

      function d(e, t) {
        (e = c(e)).length > t && i.throwArgumentError("value out of range", "value", arguments[0]);
        let r = new Uint8Array(t);
        return r.set(e, t - e.length), s(r)
      }

      function p(e, t) {
        return "string" == typeof e && !!e.match(/^0x[0-9A-Fa-f]*$/) && (!t || e.length === 2 + 2 * t)
      }
      let g = "0123456789abcdef";

      function m(e, t) {
        if (t || (t = {}), "number" == typeof e) {
          i.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          for (; e;) t = g[15 & e] + t, e = Math.floor(e / 16);
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00"
        }
        if ("bigint" == typeof e) return (e = e.toString(16)).length % 2 ? "0x0" + e : "0x" + e;
        if (t.allowMissingPrefix && "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), o(e)) return e.toHexString();
        if (p(e)) return e.length % 2 && ("left" === t.hexPad ? e = "0x0" + e.substring(2) : "right" === t.hexPad ? e += "0" : i.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
        if (l(e)) {
          let t = "0x";
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += g[(240 & n) >> 4] + g[15 & n]
          }
          return t
        }
        return i.throwArgumentError("invalid hexlify value", "value", e)
      }

      function y(e) {
        if ("string" != typeof e) e = m(e);
        else if (!p(e) || e.length % 2) return null;
        return (e.length - 2) / 2
      }

      function v(e, t, r) {
        return ("string" != typeof e ? e = m(e) : (!p(e) || e.length % 2) && i.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, null != r) ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
      }

      function b(e) {
        let t = "0x";
        return e.forEach(e => {
          t += m(e).substring(2)
        }), t
      }

      function w(e) {
        let t = A(m(e, {
          hexPad: "left"
        }));
        return "0x" === t ? "0x0" : t
      }

      function A(e) {
        "string" != typeof e && (e = m(e)), p(e) || i.throwArgumentError("invalid hex string", "value", e), e = e.substring(2);
        let t = 0;
        for (; t < e.length && "0" === e[t];) t++;
        return "0x" + e.substring(t)
      }

      function E(e, t) {
        for ("string" != typeof e ? e = m(e) : p(e) || i.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && i.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;) e = "0x0" + e.substring(2);
        return e
      }

      function S(e) {
        let t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x"
        };
        if (a(e)) {
          let r = c(e);
          64 === r.length ? (t.v = 27 + (r[32] >> 7), r[32] &= 127, t.r = m(r.slice(0, 32)), t.s = m(r.slice(32, 64))) : 65 === r.length ? (t.r = m(r.slice(0, 32)), t.s = m(r.slice(32, 64)), t.v = r[64]) : i.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (0 === t.v || 1 === t.v ? t.v += 27 : i.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = m(r.slice(32, 64))
        } else {
          if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, null != t._vs) {
            let r = d(c(t._vs), 32);
            t._vs = m(r);
            let n = r[0] >= 128 ? 1 : 0;
            null == t.recoveryParam ? t.recoveryParam = n : t.recoveryParam !== n && i.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), r[0] &= 127;
            let o = m(r);
            null == t.s ? t.s = o : t.s !== o && i.throwArgumentError("signature v mismatch _vs", "signature", e)
          }
          if (null == t.recoveryParam) null == t.v ? i.throwArgumentError("signature missing v and recoveryParam", "signature", e) : 0 === t.v || 1 === t.v ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            let r = 0 === t.v || 1 === t.v ? t.v : 1 - t.v % 2;
            t.recoveryParam !== r && i.throwArgumentError("signature recoveryParam mismatch v", "signature", e)
          }
          null != t.r && p(t.r) ? t.r = E(t.r, 32) : i.throwArgumentError("signature missing or invalid r", "signature", e), null != t.s && p(t.s) ? t.s = E(t.s, 32) : i.throwArgumentError("signature missing or invalid s", "signature", e);
          let r = c(t.s);
          r[0] >= 128 && i.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
          let n = m(r);
          t._vs && (p(t._vs) || i.throwArgumentError("signature invalid _vs", "signature", e), t._vs = E(t._vs, 32)), null == t._vs ? t._vs = n : t._vs !== n && i.throwArgumentError("signature _vs mismatch v and s", "signature", e)
        }
        return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t
      }

      function x(e) {
        return m(h([(e = S(e)).r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
      }
    },
    21046: function (e, t, r) {
      "use strict";
      r.d(t, {
        Bz: function () {
          return a
        },
        _Y: function () {
          return o
        },
        fh: function () {
          return s
        },
        tL: function () {
          return i
        }
      });
      var n = r(2593);
      let i = n.O$.from(-1),
        o = n.O$.from(0),
        s = n.O$.from(1),
        a = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    },
    57218: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return n
        }
      });
      let n = "0x0000000000000000000000000000000000000000000000000000000000000000"
    },
    35644: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n
        }
      });
      let n = "hash/5.7.0"
    },
    32046: function (e, t, r) {
      "use strict";
      r.d(t, {
        id: function () {
          return o
        }
      });
      var n = r(38197),
        i = r(29251);

      function o(e) {
        return (0, n.keccak256)((0, i.Y0)(e))
      }
    },
    75931: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        _TypedDataEncoder: function () {
          return s.E
        },
        dnsEncode: function () {
          return i.Kn
        },
        ensNormalize: function () {
          return i.w3
        },
        hashMessage: function () {
          return o.r
        },
        id: function () {
          return n.id
        },
        isValidName: function () {
          return i.r1
        },
        messagePrefix: function () {
          return o.B
        },
        namehash: function () {
          return i.VM
        }
      });
      var n = r(32046),
        i = r(27586),
        o = r(93684),
        s = r(67827)
    },
    93684: function (e, t, r) {
      "use strict";
      r.d(t, {
        B: function () {
          return s
        },
        r: function () {
          return a
        }
      });
      var n = r(16441),
        i = r(38197),
        o = r(29251);
      let s = "\x19Ethereum Signed Message:\n";

      function a(e) {
        return "string" == typeof e && (e = (0, o.Y0)(e)), (0, i.keccak256)((0, n.concat)([(0, o.Y0)(s), (0, o.Y0)(String(e.length)), e]))
      }
    },
    27586: function (e, t, r) {
      "use strict";
      let n, i;
      r.d(t, {
        Kn: function () {
          return O
        },
        w3: function () {
          return C
        },
        r1: function () {
          return _
        },
        VM: function () {
          return M
        }
      });
      var o, s = r(16441),
        a = r(29251),
        u = r(38197),
        l = r(1581),
        c = r(35644),
        h = r(59567);

      function f(e, t) {
        null == t && (t = 1);
        let r = [],
          n = r.forEach,
          i = function (e, t) {
            n.call(e, function (e) {
              t > 0 && Array.isArray(e) ? i(e, t - 1) : r.push(e)
            })
          };
        return i(e, t), r
      }

      function d(e, t) {
        let r = Array(e);
        for (let n = 0, i = -1; n < e; n++) r[n] = i += 1 + t();
        return r
      }

      function p(e, t) {
        let r = d(e(), e),
          n = e(),
          i = d(n, e),
          o = function (e, t) {
            let r = Array(e);
            for (let n = 0; n < e; n++) r[n] = 1 + t();
            return r
          }(n, e);
        for (let e = 0; e < n; e++)
          for (let t = 0; t < o[e]; t++) r.push(i[e] + t);
        return t ? r.map(e => t[e]) : r
      }

      function g(e, t, r) {
        let n = Array(e).fill(void 0).map(() => []);
        for (let i = 0; i < t; i++)(function (e, t) {
          let r = Array(e);
          for (let i = 0, o = 0; i < e; i++) {
            var n;
            r[i] = o += 1 & (n = t()) ? ~n >> 1 : n >> 1
          }
          return r
        })(e, r).forEach((e, t) => n[t].push(e));
        return n
      }
      let m = (o = function (e) {
          let t = 0;

          function r() {
            return e[t++] << 8 | e[t++]
          }
          let n = r(),
            i = 1,
            o = [0, 1];
          for (let e = 1; e < n; e++) o.push(i += r());
          let s = r(),
            a = t;
          t += s;
          let u = 0,
            l = 0;

          function c() {
            return 0 == u && (l = l << 8 | e[t++], u = 8), l >> --u & 1
          }
          let h = 0;
          for (let e = 0; e < 31; e++) h = h << 1 | c();
          let f = [],
            d = 0,
            p = 2147483648;
          for (;;) {
            let e = Math.floor(((h - d + 1) * i - 1) / p),
              t = 0,
              r = n;
            for (; r - t > 1;) {
              let n = t + r >>> 1;
              e < o[n] ? r = n : t = n
            }
            if (0 == t) break;
            f.push(t);
            let s = d + Math.floor(p * o[t] / i),
              a = d + Math.floor(p * o[t + 1] / i) - 1;
            for (;
              ((s ^ a) & 1073741824) == 0;) h = h << 1 & 2147483647 | c(), s = s << 1 & 2147483647, a = a << 1 & 2147483647 | 1;
            for (; s & ~a & 536870912;) h = 1073741824 & h | h << 1 & 1073741823 | c(), s = s << 1 ^ 1073741824, a = (1073741824 ^ a) << 1 | 1073741825;
            d = s, p = 1 + a - s
          }
          let g = n - 4;
          return f.map(t => {
            switch (t - g) {
              case 3:
                return g + 65792 + (e[a++] << 16 | e[a++] << 8 | e[a++]);
              case 2:
                return g + 256 + (e[a++] << 8 | e[a++]);
              case 1:
                return g + e[a++];
              default:
                return t - 1
            }
          })
        }((0, h.J)("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")), i = 0, () => o[i++]),
        y = new Set(p(m)),
        v = new Set(p(m)),
        b = function (e) {
          let t = [];
          for (;;) {
            let r = e();
            if (0 == r) break;
            t.push(function (e, t) {
              let r = 1 + t(),
                n = t(),
                i = function (e) {
                  let t = [];
                  for (;;) {
                    let r = e();
                    if (0 == r) break;
                    t.push(r)
                  }
                  return t
                }(t);
              return f(g(i.length, 1 + e, t).map((e, t) => {
                let o = e[0],
                  s = e.slice(1);
                return Array(i[t]).fill(void 0).map((e, t) => {
                  let i = t * n;
                  return [o + t * r, s.map(e => e + i)]
                })
              }))
            }(r, e))
          }
          for (;;) {
            let r = e() - 1;
            if (r < 0) break;
            t.push(g(1 + e(), 1 + r, e).map(e => [e[0], e.slice(1)]))
          }
          return function (e) {
            let t = {};
            for (let r = 0; r < e.length; r++) {
              let n = e[r];
              t[n[0]] = n[1]
            }
            return t
          }(f(t))
        }(m),
        w = (n = p(m).sort((e, t) => e - t), function e() {
          let t = [];
          for (;;) {
            let r = p(m, n);
            if (0 == r.length) break;
            t.push({
              set: new Set(r),
              node: e()
            })
          }
          t.sort((e, t) => t.set.size - e.set.size);
          let r = m(),
            i = r % 3,
            o = !!(1 & (r = r / 3 | 0)),
            s = 1 == (r >>= 1),
            a = 2 == r;
          return {
            branches: t,
            valid: i,
            fe0f: o,
            save: s,
            check: a
          }
        }());

      function A(e) {
        return e.filter(e => 65039 != e)
      }

      function E(e) {
        for (let r of e.split(".")) {
          var t;
          let e = (t = r, (0, a.XL)(t));
          try {
            for (let t = e.lastIndexOf(95) - 1; t >= 0; t--)
              if (95 !== e[t]) throw Error("underscore only allowed at start");
            if (e.length >= 4 && e.every(e => e < 128) && 45 === e[2] && 45 === e[3]) throw Error("invalid label extension")
          } catch (e) {
            throw Error(`Invalid label "${r}": ${e.message}`)
          }
        }
        return e
      }
      let S = new l.Logger(c.i),
        x = new Uint8Array(32);

      function k(e) {
        if (0 === e.length) throw Error("invalid ENS name; empty component");
        return e
      }

      function P(e) {
        let t = (0, a.Y0)(E(function (e, t) {
            let r = (0, a.XL)(e).reverse(),
              n = [];
            for (; r.length;) {
              let e = function (e, t) {
                var r;
                let n, i;
                let o = w,
                  s = [],
                  a = e.length;
                for (t && (t.length = 0); a;) {
                  let u = e[--a];
                  if (!(o = null === (r = o.branches.find(e => e.set.has(u))) || void 0 === r ? void 0 : r.node)) break;
                  if (o.save) i = u;
                  else if (o.check && u === i) break;
                  s.push(u), o.fe0f && (s.push(65039), a > 0 && 65039 == e[a - 1] && a--), o.valid && (n = s.slice(), 2 == o.valid && n.splice(1, 1), t && t.push(...e.slice(a).reverse()), e.length = a)
                }
                return n
              }(r);
              if (e) {
                n.push(...t(e));
                continue
              }
              let i = r.pop();
              if (y.has(i)) {
                n.push(i);
                continue
              }
              if (v.has(i)) continue;
              let o = b[i];
              if (o) {
                n.push(...o);
                continue
              }
              throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`)
            }
            return E(String.fromCodePoint(...n).normalize("NFC"))
          }(e, A))),
          r = [];
        if (0 === e.length) return r;
        let n = 0;
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          46 === i && (r.push(k(t.slice(n, e))), n = e + 1)
        }
        if (n >= t.length) throw Error("invalid ENS name; empty component");
        return r.push(k(t.slice(n))), r
      }

      function C(e) {
        return P(e).map(e => (0, a.ZN)(e)).join(".")
      }

      function _(e) {
        try {
          return 0 !== P(e).length
        } catch (e) {}
        return !1
      }

      function M(e) {
        "string" != typeof e && S.throwArgumentError("invalid ENS name; not a string", "name", e);
        let t = x,
          r = P(e);
        for (; r.length;) t = (0, u.keccak256)((0, s.concat)([t, (0, u.keccak256)(r.pop())]));
        return (0, s.hexlify)(t)
      }

      function O(e) {
        return (0, s.hexlify)((0, s.concat)(P(e).map(e => {
          if (e.length > 63) throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
          let t = new Uint8Array(e.length + 1);
          return t.set(e, 1), t[0] = t.length - 1, t
        }))) + "00"
      }
      x.fill(0)
    },
    67827: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return k
        }
      });
      var n = r(19485),
        i = r(2593),
        o = r(16441),
        s = r(38197),
        a = r(6881),
        u = r(1581),
        l = r(35644),
        c = r(32046);
      let h = new u.Logger(l.i),
        f = new Uint8Array(32);
      f.fill(0);
      let d = i.O$.from(-1),
        p = i.O$.from(0),
        g = i.O$.from(1),
        m = i.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
        y = (0, o.hexZeroPad)(g.toHexString(), 32),
        v = (0, o.hexZeroPad)(p.toHexString(), 32),
        b = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32"
        },
        w = ["name", "version", "chainId", "verifyingContract", "salt"];

      function A(e) {
        return function (t) {
          return "string" != typeof t && h.throwArgumentError(`invalid domain value for ${JSON.stringify(e)}`, `domain.${e}`, t), t
        }
      }
      let E = {
        name: A("name"),
        version: A("version"),
        chainId: function (e) {
          try {
            return i.O$.from(e).toString()
          } catch (e) {}
          return h.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", e)
        },
        verifyingContract: function (e) {
          try {
            return (0, n.getAddress)(e).toLowerCase()
          } catch (e) {}
          return h.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", e)
        },
        salt: function (e) {
          try {
            let t = (0, o.arrayify)(e);
            if (32 !== t.length) throw Error("bad length");
            return (0, o.hexlify)(t)
          } catch (e) {}
          return h.throwArgumentError('invalid domain value "salt"', "domain.salt", e)
        }
      };

      function S(e) {
        {
          let t = e.match(/^(u?)int(\d*)$/);
          if (t) {
            let r = "" === t[1],
              n = parseInt(t[2] || "256");
            (n % 8 != 0 || n > 256 || t[2] && t[2] !== String(n)) && h.throwArgumentError("invalid numeric width", "type", e);
            let s = m.mask(r ? n - 1 : n),
              a = r ? s.add(g).mul(d) : p;
            return function (t) {
              let r = i.O$.from(t);
              return (r.lt(a) || r.gt(s)) && h.throwArgumentError(`value out-of-bounds for ${e}`, "value", t), (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
            }
          }
        } {
          let t = e.match(/^bytes(\d+)$/);
          if (t) {
            let r = parseInt(t[1]);
            return (0 === r || r > 32 || t[1] !== String(r)) && h.throwArgumentError("invalid bytes width", "type", e),
              function (t) {
                let n = (0, o.arrayify)(t);
                return n.length !== r && h.throwArgumentError(`invalid length for ${e}`, "value", t),
                  function (e) {
                    let t = (0, o.arrayify)(e),
                      r = t.length % 32;
                    return r ? (0, o.hexConcat)([t, f.slice(r)]) : (0, o.hexlify)(t)
                  }(t)
              }
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, o.hexZeroPad)((0, n.getAddress)(e), 32)
            };
          case "bool":
            return function (e) {
              return e ? y : v
            };
          case "bytes":
            return function (e) {
              return (0, s.keccak256)(e)
            };
          case "string":
            return function (e) {
              return (0, c.id)(e)
            }
        }
        return null
      }

      function x(e, t) {
        return `${e}(${t.map(({name:e,type:t})=>t+" "+e).join(",")})`
      }
      class k {
        constructor(e) {
          (0, a.defineReadOnly)(this, "types", Object.freeze((0, a.deepCopy)(e))), (0, a.defineReadOnly)(this, "_encoderCache", {}), (0, a.defineReadOnly)(this, "_types", {});
          let t = {},
            r = {},
            n = {};
          for (let i in Object.keys(e).forEach(e => {
              t[e] = {}, r[e] = [], n[e] = {}
            }), e) {
            let n = {};
            e[i].forEach(o => {
              n[o.name] && h.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", e), n[o.name] = !0;
              let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              s === i && h.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", e);
              let a = S(s);
              a || (r[s] || h.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", e), r[s].push(i), t[i][s] = !0)
            })
          }
          let i = Object.keys(r).filter(e => 0 === r[e].length);
          for (let o in 0 === i.length ? h.throwArgumentError("missing primary type", "types", e) : i.length > 1 && h.throwArgumentError(`ambiguous primary types or unused types: ${i.map(e=>JSON.stringify(e)).join(", ")}`, "types", e), (0, a.defineReadOnly)(this, "primaryType", i[0]), ! function i(o, s) {
              s[o] && h.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", e), s[o] = !0, Object.keys(t[o]).forEach(e => {
                r[e] && (i(e, s), Object.keys(s).forEach(t => {
                  n[t][e] = !0
                }))
              }), delete s[o]
            }(this.primaryType, {}), n) {
            let t = Object.keys(n[o]);
            t.sort(), this._types[o] = x(o, e[o]) + t.map(t => x(t, e[t])).join("")
          }
        }
        getEncoder(e) {
          let t = this._encoderCache[e];
          return t || (t = this._encoderCache[e] = this._getEncoder(e)), t
        }
        _getEncoder(e) {
          {
            let t = S(e);
            if (t) return t
          }
          let t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (t) {
            let e = t[1],
              r = this.getEncoder(e),
              n = parseInt(t[3]);
            return t => {
              n >= 0 && t.length !== n && h.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t);
              let i = t.map(r);
              return this._types[e] && (i = i.map(s.keccak256)), (0, s.keccak256)((0, o.hexConcat)(i))
            }
          }
          let r = this.types[e];
          if (r) {
            let t = (0, c.id)(this._types[e]);
            return e => {
              let n = r.map(({
                name: t,
                type: r
              }) => {
                let n = this.getEncoder(r)(e[t]);
                return this._types[r] ? (0, s.keccak256)(n) : n
              });
              return n.unshift(t), (0, o.hexConcat)(n)
            }
          }
          return h.throwArgumentError(`unknown type: ${e}`, "type", e)
        }
        encodeType(e) {
          let t = this._types[e];
          return t || h.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e), t
        }
        encodeData(e, t) {
          return this.getEncoder(e)(t)
        }
        hashStruct(e, t) {
          return (0, s.keccak256)(this.encodeData(e, t))
        }
        encode(e) {
          return this.encodeData(this.primaryType, e)
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e)
        }
        _visit(e, t, r) {
          {
            let n = S(e);
            if (n) return r(e, t)
          }
          let n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            let e = n[1],
              i = parseInt(n[3]);
            return i >= 0 && t.length !== i && h.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", t), t.map(t => this._visit(e, t, r))
          }
          let i = this.types[e];
          return i ? i.reduce((e, {
            name: n,
            type: i
          }) => (e[n] = this._visit(i, t[n], r), e), {}) : h.throwArgumentError(`unknown type: ${e}`, "type", e)
        }
        visit(e, t) {
          return this._visit(this.primaryType, e, t)
        }
        static from(e) {
          return new k(e)
        }
        static getPrimaryType(e) {
          return k.from(e).primaryType
        }
        static hashStruct(e, t, r) {
          return k.from(t).hashStruct(e, r)
        }
        static hashDomain(e) {
          let t = [];
          for (let r in e) {
            let n = b[r];
            n || h.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), t.push({
              name: r,
              type: n
            })
          }
          return t.sort((e, t) => w.indexOf(e.name) - w.indexOf(t.name)), k.hashStruct("EIP712Domain", {
            EIP712Domain: t
          }, e)
        }
        static encode(e, t, r) {
          return (0, o.hexConcat)(["0x1901", k.hashDomain(e), k.from(t).hash(r)])
        }
        static hash(e, t, r) {
          return (0, s.keccak256)(k.encode(e, t, r))
        }
        static resolveNames(e, t, r, n) {
          var i, s, u, l;
          return i = this, s = void 0, u = void 0, l = function* () {
            e = (0, a.shallowCopy)(e);
            let i = {};
            e.verifyingContract && !(0, o.isHexString)(e.verifyingContract, 20) && (i[e.verifyingContract] = "0x");
            let s = k.from(t);
            for (let e in s.visit(r, (e, t) => ("address" !== e || (0, o.isHexString)(t, 20) || (i[t] = "0x"), t)), i) i[e] = yield n(e);
            return e.verifyingContract && i[e.verifyingContract] && (e.verifyingContract = i[e.verifyingContract]), r = s.visit(r, (e, t) => "address" === e && i[t] ? i[t] : t), {
              domain: e,
              value: r
            }
          }, new(u || (u = Promise))(function (e, t) {
            function r(e) {
              try {
                o(l.next(e))
              } catch (e) {
                t(e)
              }
            }

            function n(e) {
              try {
                o(l.throw(e))
              } catch (e) {
                t(e)
              }
            }

            function o(t) {
              var i;
              t.done ? e(t.value) : ((i = t.value) instanceof u ? i : new u(function (e) {
                e(i)
              })).then(r, n)
            }
            o((l = l.apply(i, s || [])).next())
          })
        }
        static getPayload(e, t, r) {
          k.hashDomain(e);
          let n = {},
            s = [];
          w.forEach(t => {
            let r = e[t];
            null != r && (n[t] = E[t](r), s.push({
              name: t,
              type: b[t]
            }))
          });
          let u = k.from(t),
            l = (0, a.shallowCopy)(t);
          return l.EIP712Domain ? h.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", t) : l.EIP712Domain = s, u.encode(r), {
            types: l,
            domain: n,
            primaryType: u.primaryType,
            message: u.visit(r, (e, t) => {
              if (e.match(/^bytes(\d*)/)) return (0, o.hexlify)((0, o.arrayify)(t));
              if (e.match(/^u?int/)) return i.O$.from(t).toString();
              switch (e) {
                case "address":
                  return t.toLowerCase();
                case "bool":
                  return !!t;
                case "string":
                  return "string" != typeof t && h.throwArgumentError("invalid string", "value", t), t
              }
              return h.throwArgumentError("unsupported type", "type", e)
            })
          }
        }
      }
    },
    86507: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        HDNode: function () {
          return O
        },
        defaultPath: function () {
          return M
        },
        entropyToMnemonic: function () {
          return T
        },
        getAccountPath: function () {
          return B
        },
        isValidMnemonic: function () {
          return I
        },
        mnemonicToEntropy: function () {
          return R
        },
        mnemonicToSeed: function () {
          return N
        }
      });
      var n = r(57727),
        i = r(16441),
        o = r(2593),
        s = r(29251),
        a = r(85306),
        u = r(6881),
        l = r(67669),
        c = r(2006),
        h = r(21261),
        f = r(83875),
        d = r(32046),
        p = r(1581);
      let g = new p.Logger("wordlists/5.7.0");
      class m {
        constructor(e) {
          g.checkAbstract(new.target, m), (0, u.defineReadOnly)(this, "locale", e)
        }
        split(e) {
          return e.toLowerCase().split(/ +/g)
        }
        join(e) {
          return e.join(" ")
        }
        static check(e) {
          let t = [];
          for (let r = 0; r < 2048; r++) {
            let n = e.getWord(r);
            if (r !== e.getWordIndex(n)) return "0x";
            t.push(n)
          }
          return (0, d.id)(t.join("\n") + "\n")
        }
        static register(e, t) {
          t || (t = e.locale)
        }
      }
      let y = null;

      function v(e) {
        if (null == y && (y = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== m.check(e))) throw y = null, Error("BIP39 Wordlist for en (English) FAILED")
      }
      let b = new class extends m {
        constructor() {
          super("en")
        }
        getWord(e) {
          return v(this), y[e]
        }
        getWordIndex(e) {
          return v(this), y.indexOf(e)
        }
      };
      m.register(b);
      let w = {
          en: b
        },
        A = new p.Logger("hdnode/5.7.0"),
        E = o.O$.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
        S = (0, s.Y0)("Bitcoin seed");

      function x(e) {
        return (1 << e) - 1 << 8 - e
      }

      function k(e) {
        return (0, i.hexZeroPad)((0, i.hexlify)(e), 32)
      }

      function P(e) {
        return n.Base58.encode((0, i.concat)([e, (0, i.hexDataSlice)((0, c.JQ)((0, c.JQ)(e)), 0, 4)]))
      }

      function C(e) {
        if (null == e) return w.en;
        if ("string" == typeof e) {
          let t = w[e];
          return null == t && A.throwArgumentError("unknown locale", "wordlist", e), t
        }
        return e
      }
      let _ = {},
        M = "m/44'/60'/0'/0/0";
      class O {
        constructor(e, t, r, n, o, s, a, h) {
          if (e !== _) throw Error("HDNode constructor cannot be called directly");
          if (t) {
            let e = new l.SigningKey(t);
            (0, u.defineReadOnly)(this, "privateKey", e.privateKey), (0, u.defineReadOnly)(this, "publicKey", e.compressedPublicKey)
          } else(0, u.defineReadOnly)(this, "privateKey", null), (0, u.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r));
          (0, u.defineReadOnly)(this, "parentFingerprint", n), (0, u.defineReadOnly)(this, "fingerprint", (0, i.hexDataSlice)((0, c.bP)((0, c.JQ)(this.publicKey)), 0, 4)), (0, u.defineReadOnly)(this, "address", (0, f.computeAddress)(this.publicKey)), (0, u.defineReadOnly)(this, "chainCode", o), (0, u.defineReadOnly)(this, "index", s), (0, u.defineReadOnly)(this, "depth", a), null == h ? ((0, u.defineReadOnly)(this, "mnemonic", null), (0, u.defineReadOnly)(this, "path", null)) : "string" == typeof h ? ((0, u.defineReadOnly)(this, "mnemonic", null), (0, u.defineReadOnly)(this, "path", h)) : ((0, u.defineReadOnly)(this, "mnemonic", h), (0, u.defineReadOnly)(this, "path", h.path))
        }
        get extendedKey() {
          if (this.depth >= 256) throw Error("Depth too large!");
          return P((0, i.concat)([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", (0, i.hexlify)(this.depth), this.parentFingerprint, (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4), this.chainCode, null != this.privateKey ? (0, i.concat)(["0x00", this.privateKey]) : this.publicKey]))
        }
        neuter() {
          return new O(_, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path)
        }
        _derive(e) {
          if (e > 4294967295) throw Error("invalid index - " + String(e));
          let t = this.path;
          t && (t += "/" + (2147483647 & e));
          let r = new Uint8Array(37);
          if (2147483648 & e) {
            if (!this.privateKey) throw Error("cannot derive child of neutered node");
            r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'")
          } else r.set((0, i.arrayify)(this.publicKey));
          for (let t = 24; t >= 0; t -= 8) r[33 + (t >> 3)] = e >> 24 - t & 255;
          let n = (0, i.arrayify)((0, c.Gy)(h.p.sha512, this.chainCode, r)),
            s = n.slice(0, 32),
            a = n.slice(32),
            u = null,
            f = null;
          if (this.privateKey) u = k(o.O$.from(s).add(this.privateKey).mod(E));
          else {
            let e = new l.SigningKey((0, i.hexlify)(s));
            f = e._addPoint(this.publicKey)
          }
          let d = t,
            p = this.mnemonic;
          return p && (d = Object.freeze({
            phrase: p.phrase,
            path: t,
            locale: p.locale || "en"
          })), new O(_, u, f, this.fingerprint, k(a), e, this.depth + 1, d)
        }
        derivePath(e) {
          let t = e.split("/");
          if (0 === t.length || "m" === t[0] && 0 !== this.depth) throw Error("invalid path - " + e);
          "m" === t[0] && t.shift();
          let r = this;
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (n.match(/^[0-9]+'$/)) {
              let e = parseInt(n.substring(0, n.length - 1));
              if (e >= 2147483648) throw Error("invalid path index - " + n);
              r = r._derive(2147483648 + e)
            } else if (n.match(/^[0-9]+$/)) {
              let e = parseInt(n);
              if (e >= 2147483648) throw Error("invalid path index - " + n);
              r = r._derive(e)
            } else throw Error("invalid path component - " + n)
          }
          return r
        }
        static _fromSeed(e, t) {
          let r = (0, i.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw Error("invalid seed");
          let n = (0, i.arrayify)((0, c.Gy)(h.p.sha512, S, r));
          return new O(_, k(n.slice(0, 32)), null, "0x00000000", k(n.slice(32)), 0, 0, t)
        }
        static fromMnemonic(e, t, r) {
          return e = T(R(e, r = C(r)), r), O._fromSeed(N(e, t), {
            phrase: e,
            path: "m",
            locale: r.locale
          })
        }
        static fromSeed(e) {
          return O._fromSeed(e, null)
        }
        static fromExtendedKey(e) {
          let t = n.Base58.decode(e);
          (82 !== t.length || P(t.slice(0, 78)) !== e) && A.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
          let r = t[4],
            o = (0, i.hexlify)(t.slice(5, 9)),
            s = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16),
            a = (0, i.hexlify)(t.slice(13, 45)),
            u = t.slice(45, 78);
          switch ((0, i.hexlify)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new O(_, null, (0, i.hexlify)(u), o, a, s, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== u[0]) break;
              return new O(_, (0, i.hexlify)(u.slice(1)), null, o, a, s, r, null)
          }
          return A.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]")
        }
      }

      function N(e, t) {
        t || (t = "");
        let r = (0, s.Y0)("mnemonic" + t, s.Uj.NFKD);
        return (0, a.n)((0, s.Y0)(e, s.Uj.NFKD), r, 2048, 64, "sha512")
      }

      function R(e, t) {
        t = C(t), A.checkNormalize();
        let r = t.split(e);
        if (r.length % 3 != 0) throw Error("invalid mnemonic");
        let n = (0, i.arrayify)(new Uint8Array(Math.ceil(11 * r.length / 8))),
          o = 0;
        for (let e = 0; e < r.length; e++) {
          let i = t.getWordIndex(r[e].normalize("NFKD"));
          if (-1 === i) throw Error("invalid mnemonic");
          for (let e = 0; e < 11; e++) i & 1 << 10 - e && (n[o >> 3] |= 1 << 7 - o % 8), o++
        }
        let s = 32 * r.length / 3,
          a = r.length / 3,
          u = x(a),
          l = (0, i.arrayify)((0, c.JQ)(n.slice(0, s / 8)))[0] & u;
        if (l !== (n[n.length - 1] & u)) throw Error("invalid checksum");
        return (0, i.hexlify)(n.slice(0, s / 8))
      }

      function T(e, t) {
        if (t = C(t), (e = (0, i.arrayify)(e)).length % 4 != 0 || e.length < 16 || e.length > 32) throw Error("invalid entropy");
        let r = [0],
          n = 11;
        for (let t = 0; t < e.length; t++) n > 8 ? (r[r.length - 1] <<= 8, r[r.length - 1] |= e[t], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= e[t] >> 8 - n, r.push(e[t] & (1 << 8 - n) - 1), n += 3);
        let o = e.length / 4,
          s = (0, i.arrayify)((0, c.JQ)(e))[0] & x(o);
        return r[r.length - 1] <<= o, r[r.length - 1] |= s >> 8 - o, t.join(r.map(e => t.getWord(e)))
      }

      function I(e, t) {
        try {
          return R(e, t), !0
        } catch (e) {}
        return !1
      }

      function B(e) {
        return ("number" != typeof e || e < 0 || e >= 2147483648 || e % 1) && A.throwArgumentError("invalid account index", "index", e), `m/44'/60'/${e}'/0/0`
      }
    },
    29816: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n
        }
      });
      let n = "json-wallets/5.7.0"
    },
    45659: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        decryptCrowdsale: function () {
          return m
        },
        decryptJsonWallet: function () {
          return A
        },
        decryptJsonWalletSync: function () {
          return E
        },
        decryptKeystore: function () {
          return w.pe
        },
        decryptKeystoreSync: function () {
          return w.hb
        },
        encryptKeystore: function () {
          return w.HI
        },
        getJsonWalletAddress: function () {
          return b
        },
        isCrowdsaleWallet: function () {
          return y
        },
        isKeystoreWallet: function () {
          return v
        }
      });
      var n = r(78826),
        i = r.n(n),
        o = r(19485),
        s = r(16441),
        a = r(38197),
        u = r(85306),
        l = r(29251),
        c = r(6881),
        h = r(1581),
        f = r(29816),
        d = r(97013);
      let p = new h.Logger(f.i);
      class g extends c.Description {
        isCrowdsaleAccount(e) {
          return !!(e && e._isCrowdsaleAccount)
        }
      }

      function m(e, t) {
        let r = JSON.parse(e);
        t = (0, d.Ij)(t);
        let n = (0, o.getAddress)((0, d.gx)(r, "ethaddr")),
          c = (0, d.p3)((0, d.gx)(r, "encseed"));
        c && c.length % 16 == 0 || p.throwArgumentError("invalid encseed", "json", e);
        let h = (0, s.arrayify)((0, u.n)(t, t, 2e3, 32, "sha256")).slice(0, 16),
          f = c.slice(0, 16),
          m = c.slice(16),
          y = new(i()).ModeOfOperation.cbc(h, f),
          v = i().padding.pkcs7.strip((0, s.arrayify)(y.decrypt(m))),
          b = "";
        for (let e = 0; e < v.length; e++) b += String.fromCharCode(v[e]);
        let w = (0, l.Y0)(b),
          A = (0, a.keccak256)(w);
        return new g({
          _isCrowdsaleAccount: !0,
          address: n,
          privateKey: A
        })
      }

      function y(e) {
        let t = null;
        try {
          t = JSON.parse(e)
        } catch (e) {
          return !1
        }
        return t.encseed && t.ethaddr
      }

      function v(e) {
        let t = null;
        try {
          t = JSON.parse(e)
        } catch (e) {
          return !1
        }
        return !!t.version && parseInt(t.version) === t.version && 3 === parseInt(t.version)
      }

      function b(e) {
        if (y(e)) try {
          return (0, o.getAddress)(JSON.parse(e).ethaddr)
        } catch (e) {
          return null
        }
        if (v(e)) try {
          return (0, o.getAddress)(JSON.parse(e).address)
        } catch (e) {}
        return null
      }
      var w = r(81964);

      function A(e, t, r) {
        if (y(e)) {
          r && r(0);
          let n = m(e, t);
          return r && r(1), Promise.resolve(n)
        }
        return v(e) ? (0, w.pe)(e, t, r) : Promise.reject(Error("invalid JSON wallet"))
      }

      function E(e, t) {
        if (y(e)) return m(e, t);
        if (v(e)) return (0, w.hb)(e, t);
        throw Error("invalid JSON wallet")
      }
    },
    81964: function (e, t, r) {
      "use strict";
      r.d(t, {
        HI: function () {
          return C
        },
        hb: function () {
          return k
        },
        pe: function () {
          return P
        }
      });
      var n = r(78826),
        i = r.n(n),
        o = r(17635),
        s = r.n(o),
        a = r(19485),
        u = r(16441),
        l = r(86507),
        c = r(38197),
        h = r(85306),
        f = r(5634),
        d = r(6881),
        p = r(83875),
        g = r(97013),
        m = r(1581),
        y = r(29816);
      let v = new m.Logger(y.i);

      function b(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase
      }
      class w extends d.Description {
        isKeystoreAccount(e) {
          return !!(e && e._isKeystoreAccount)
        }
      }

      function A(e, t) {
        let r = (0, g.p3)((0, g.gx)(e, "crypto/ciphertext")),
          n = (0, u.hexlify)((0, c.keccak256)((0, u.concat)([t.slice(16, 32), r]))).substring(2);
        if (n !== (0, g.gx)(e, "crypto/mac").toLowerCase()) throw Error("invalid password");
        let o = function (e, t, r) {
          let n = (0, g.gx)(e, "crypto/cipher");
          if ("aes-128-ctr" === n) {
            let n = (0, g.p3)((0, g.gx)(e, "crypto/cipherparams/iv")),
              o = new(i()).Counter(n),
              s = new(i()).ModeOfOperation.ctr(t, o);
            return (0, u.arrayify)(s.decrypt(r))
          }
          return null
        }(e, t.slice(0, 16), r);
        o || v.throwError("unsupported cipher", m.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "decrypt"
        });
        let s = t.slice(32, 64),
          h = (0, p.computeAddress)(o);
        if (e.address) {
          let t = e.address.toLowerCase();
          if ("0x" !== t.substring(0, 2) && (t = "0x" + t), (0, a.getAddress)(t) !== h) throw Error("address mismatch")
        }
        let f = {
          _isKeystoreAccount: !0,
          address: h,
          privateKey: (0, u.hexlify)(o)
        };
        if ("0.1" === (0, g.gx)(e, "x-ethers/version")) {
          let t = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCiphertext")),
            r = (0, g.p3)((0, g.gx)(e, "x-ethers/mnemonicCounter")),
            n = new(i()).Counter(r),
            o = new(i()).ModeOfOperation.ctr(s, n),
            a = (0, g.gx)(e, "x-ethers/path") || l.defaultPath,
            c = (0, g.gx)(e, "x-ethers/locale") || "en",
            h = (0, u.arrayify)(o.decrypt(t));
          try {
            let e = (0, l.entropyToMnemonic)(h, c),
              t = l.HDNode.fromMnemonic(e, null, c).derivePath(a);
            if (t.privateKey != f.privateKey) throw Error("mnemonic mismatch");
            f.mnemonic = t.mnemonic
          } catch (e) {
            if (e.code !== m.Logger.errors.INVALID_ARGUMENT || "wordlist" !== e.argument) throw e
          }
        }
        return new w(f)
      }

      function E(e, t, r, n, i) {
        return (0, u.arrayify)((0, h.n)(e, t, r, n, i))
      }

      function S(e, t, r, n, i) {
        return Promise.resolve(E(e, t, r, n, i))
      }

      function x(e, t, r, n, i) {
        let o = (0, g.Ij)(t),
          s = (0, g.gx)(e, "crypto/kdf");
        if (s && "string" == typeof s) {
          let t = function (e, t) {
            return v.throwArgumentError("invalid key-derivation function parameters", e, t)
          };
          if ("scrypt" === s.toLowerCase()) {
            let r = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt")),
              a = parseInt((0, g.gx)(e, "crypto/kdfparams/n")),
              u = parseInt((0, g.gx)(e, "crypto/kdfparams/r")),
              l = parseInt((0, g.gx)(e, "crypto/kdfparams/p"));
            a && u && l || t("kdf", s), (a & a - 1) != 0 && t("N", a);
            let c = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
            return 32 !== c && t("dklen", c), n(o, r, a, u, l, 64, i)
          }
          if ("pbkdf2" === s.toLowerCase()) {
            let n = (0, g.p3)((0, g.gx)(e, "crypto/kdfparams/salt")),
              i = null,
              s = (0, g.gx)(e, "crypto/kdfparams/prf");
            "hmac-sha256" === s ? i = "sha256" : "hmac-sha512" === s ? i = "sha512" : t("prf", s);
            let a = parseInt((0, g.gx)(e, "crypto/kdfparams/c")),
              u = parseInt((0, g.gx)(e, "crypto/kdfparams/dklen"));
            return 32 !== u && t("dklen", u), r(o, n, a, u, i)
          }
        }
        return v.throwArgumentError("unsupported key-derivation function", "kdf", s)
      }

      function k(e, t) {
        let r = JSON.parse(e),
          n = x(r, t, E, s().syncScrypt);
        return A(r, n)
      }

      function P(e, t, r) {
        var n, i, o, a;
        return n = this, i = void 0, o = void 0, a = function* () {
          let n = JSON.parse(e),
            i = yield x(n, t, S, s().scrypt, r);
          return A(n, i)
        }, new(o || (o = Promise))(function (e, t) {
          function r(e) {
            try {
              u(a.next(e))
            } catch (e) {
              t(e)
            }
          }

          function s(e) {
            try {
              u(a.throw(e))
            } catch (e) {
              t(e)
            }
          }

          function u(t) {
            var n;
            t.done ? e(t.value) : ((n = t.value) instanceof o ? n : new o(function (e) {
              e(n)
            })).then(r, s)
          }
          u((a = a.apply(n, i || [])).next())
        })
      }

      function C(e, t, r, n) {
        try {
          if ((0, a.getAddress)(e.address) !== (0, p.computeAddress)(e.privateKey)) throw Error("address/privateKey mismatch");
          if (b(e)) {
            let t = e.mnemonic,
              r = l.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(t.path || l.defaultPath);
            if (r.privateKey != e.privateKey) throw Error("mnemonic mismatch")
          }
        } catch (e) {
          return Promise.reject(e)
        }
        "function" != typeof r || n || (n = r, r = {}), r || (r = {});
        let o = (0, u.arrayify)(e.privateKey),
          h = (0, g.Ij)(t),
          d = null,
          m = null,
          y = null;
        if (b(e)) {
          let t = e.mnemonic;
          d = (0, u.arrayify)((0, l.mnemonicToEntropy)(t.phrase, t.locale || "en")), m = t.path || l.defaultPath, y = t.locale || "en"
        }
        let v = r.client;
        v || (v = "ethers.js");
        let w = null;
        w = r.salt ? (0, u.arrayify)(r.salt) : (0, f.O)(32);
        let A = null;
        if (r.iv) {
          if (16 !== (A = (0, u.arrayify)(r.iv)).length) throw Error("invalid iv")
        } else A = (0, f.O)(16);
        let E = null;
        if (r.uuid) {
          if (16 !== (E = (0, u.arrayify)(r.uuid)).length) throw Error("invalid uuid")
        } else E = (0, f.O)(16);
        let S = 131072,
          x = 8,
          k = 1;
        return r.scrypt && (r.scrypt.N && (S = r.scrypt.N), r.scrypt.r && (x = r.scrypt.r), r.scrypt.p && (k = r.scrypt.p)), s().scrypt(h, w, S, x, k, 64, n).then(t => {
          t = (0, u.arrayify)(t);
          let r = t.slice(0, 16),
            n = t.slice(16, 32),
            s = t.slice(32, 64),
            a = new(i()).Counter(A),
            l = new(i()).ModeOfOperation.ctr(r, a),
            h = (0, u.arrayify)(l.encrypt(o)),
            p = (0, c.keccak256)((0, u.concat)([n, h])),
            b = {
              address: e.address.substring(2).toLowerCase(),
              id: (0, g.EH)(E),
              version: 3,
              crypto: {
                cipher: "aes-128-ctr",
                cipherparams: {
                  iv: (0, u.hexlify)(A).substring(2)
                },
                ciphertext: (0, u.hexlify)(h).substring(2),
                kdf: "scrypt",
                kdfparams: {
                  salt: (0, u.hexlify)(w).substring(2),
                  n: S,
                  dklen: 32,
                  p: k,
                  r: x
                },
                mac: p.substring(2)
              }
            };
          if (d) {
            let e = (0, f.O)(16),
              t = new(i()).Counter(e),
              r = new(i()).ModeOfOperation.ctr(s, t),
              n = (0, u.arrayify)(r.encrypt(d)),
              o = new Date,
              a = o.getUTCFullYear() + "-" + (0, g.VP)(o.getUTCMonth() + 1, 2) + "-" + (0, g.VP)(o.getUTCDate(), 2) + "T" + (0, g.VP)(o.getUTCHours(), 2) + "-" + (0, g.VP)(o.getUTCMinutes(), 2) + "-" + (0, g.VP)(o.getUTCSeconds(), 2) + ".0Z";
            b["x-ethers"] = {
              client: v,
              gethFilename: "UTC--" + a + "--" + b.address,
              mnemonicCounter: (0, u.hexlify)(e).substring(2),
              mnemonicCiphertext: (0, u.hexlify)(n).substring(2),
              path: m,
              locale: y,
              version: "0.1"
            }
          }
          return JSON.stringify(b)
        })
      }
    },
    97013: function (e, t, r) {
      "use strict";
      r.d(t, {
        EH: function () {
          return l
        },
        Ij: function () {
          return a
        },
        VP: function () {
          return s
        },
        gx: function () {
          return u
        },
        p3: function () {
          return o
        }
      });
      var n = r(16441),
        i = r(29251);

      function o(e) {
        return "string" == typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e), (0, n.arrayify)(e)
      }

      function s(e, t) {
        for (e = String(e); e.length < t;) e = "0" + e;
        return e
      }

      function a(e) {
        return "string" == typeof e ? (0, i.Y0)(e, i.Uj.NFKC) : (0, n.arrayify)(e)
      }

      function u(e, t) {
        let r = e,
          n = t.toLowerCase().split("/");
        for (let e = 0; e < n.length; e++) {
          let t = null;
          for (let i in r)
            if (i.toLowerCase() === n[e]) {
              t = r[i];
              break
            } if (null === t) return null;
          r = t
        }
        return r
      }

      function l(e) {
        let t = (0, n.arrayify)(e);
        t[6] = 15 & t[6] | 64, t[8] = 63 & t[8] | 128;
        let r = (0, n.hexlify)(t);
        return [r.substring(2, 10), r.substring(10, 14), r.substring(14, 18), r.substring(18, 22), r.substring(22, 34)].join("-")
      }
    },
    38197: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        keccak256: function () {
          return s
        }
      });
      var n = r(91094),
        i = r.n(n),
        o = r(16441);

      function s(e) {
        return "0x" + i().keccak_256((0, o.arrayify)(e))
      }
    },
    1581: function (e, t, r) {
      "use strict";
      var n, i, o, s;
      r.r(t), r.d(t, {
        ErrorCode: function () {
          return i
        },
        LogLevel: function () {
          return n
        },
        Logger: function () {
          return p
        }
      });
      let a = !1,
        u = !1,
        l = {
          debug: 1,
          default: 2,
          info: 2,
          warning: 3,
          error: 4,
          off: 5
        },
        c = l.default,
        h = null,
        f = function () {
          try {
            let e = [];
            if (["NFD", "NFC", "NFKD", "NFKC"].forEach(t => {
                try {
                  if ("test" !== "test".normalize(t)) throw Error("bad normalize")
                } catch (r) {
                  e.push(t)
                }
              }), e.length) throw Error("missing " + e.join(", "));
            if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw Error("broken implementation")
          } catch (e) {
            return e.message
          }
          return null
        }();
      (o = n || (n = {})).DEBUG = "DEBUG", o.INFO = "INFO", o.WARNING = "WARNING", o.ERROR = "ERROR", o.OFF = "OFF", (s = i || (i = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR", s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", s.NETWORK_ERROR = "NETWORK_ERROR", s.SERVER_ERROR = "SERVER_ERROR", s.TIMEOUT = "TIMEOUT", s.BUFFER_OVERRUN = "BUFFER_OVERRUN", s.NUMERIC_FAULT = "NUMERIC_FAULT", s.MISSING_NEW = "MISSING_NEW", s.INVALID_ARGUMENT = "INVALID_ARGUMENT", s.MISSING_ARGUMENT = "MISSING_ARGUMENT", s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", s.CALL_EXCEPTION = "CALL_EXCEPTION", s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", s.NONCE_EXPIRED = "NONCE_EXPIRED", s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", s.ACTION_REJECTED = "ACTION_REJECTED";
      let d = "0123456789abcdef";
      class p {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1
          })
        }
        _log(e, t) {
          let r = e.toLowerCase();
          null == l[r] && this.throwArgumentError("invalid log level name", "logLevel", e), c > l[r] || console.log.apply(console, t)
        }
        debug(...e) {
          this._log(p.levels.DEBUG, e)
        }
        info(...e) {
          this._log(p.levels.INFO, e)
        }
        warn(...e) {
          this._log(p.levels.WARNING, e)
        }
        makeError(e, t, r) {
          if (u) return this.makeError("censored error", t, {});
          t || (t = p.errors.UNKNOWN_ERROR), r || (r = {});
          let n = [];
          Object.keys(r).forEach(e => {
            let t = r[e];
            try {
              if (t instanceof Uint8Array) {
                let r = "";
                for (let e = 0; e < t.length; e++) r += d[t[e] >> 4] + d[15 & t[e]];
                n.push(e + "=Uint8Array(0x" + r + ")")
              } else n.push(e + "=" + JSON.stringify(t))
            } catch (t) {
              n.push(e + "=" + JSON.stringify(r[e].toString()))
            }
          }), n.push(`code=${t}`), n.push(`version=${this.version}`);
          let o = e,
            s = "";
          switch (t) {
            case i.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              let t = e;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + t;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result"
              }
              break
            }
            case i.CALL_EXCEPTION:
            case i.INSUFFICIENT_FUNDS:
            case i.MISSING_NEW:
            case i.NONCE_EXPIRED:
            case i.REPLACEMENT_UNDERPRICED:
            case i.TRANSACTION_REPLACED:
            case i.UNPREDICTABLE_GAS_LIMIT:
              s = t
          }
          s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"), n.length && (e += " (" + n.join(", ") + ")");
          let a = Error(e);
          return a.reason = o, a.code = t, Object.keys(r).forEach(function (e) {
            a[e] = r[e]
          }), a
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r)
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, p.errors.INVALID_ARGUMENT, {
            argument: t,
            value: r
          })
        }
        assert(e, t, r, n) {
          e || this.throwError(t, r, n)
        }
        assertArgument(e, t, r, n) {
          e || this.throwArgumentError(t, r, n)
        }
        checkNormalize(e) {
          null == e && (e = "platform missing String.prototype.normalize"), f && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: f
          })
        }
        checkSafeUint53(e, t) {
          "number" == typeof e && (null == t && (t = "value not safe"), (e < 0 || e >= 9007199254740991) && this.throwError(t, p.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: e
          }), e % 1 && this.throwError(t, p.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: e
          }))
        }
        checkArgumentCount(e, t, r) {
          r = r ? ": " + r : "", e < t && this.throwError("missing argument" + r, p.errors.MISSING_ARGUMENT, {
            count: e,
            expectedCount: t
          }), e > t && this.throwError("too many arguments" + r, p.errors.UNEXPECTED_ARGUMENT, {
            count: e,
            expectedCount: t
          })
        }
        checkNew(e, t) {
          (e === Object || null == e) && this.throwError("missing new", p.errors.MISSING_NEW, {
            name: t.name
          })
        }
        checkAbstract(e, t) {
          e === t ? this.throwError("cannot instantiate abstract class " + JSON.stringify(t.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
            name: e.name,
            operation: "new"
          }) : (e === Object || null == e) && this.throwError("missing new", p.errors.MISSING_NEW, {
            name: t.name
          })
        }
        static globalLogger() {
          return h || (h = new p("logger/5.7.0")), h
        }
        static setCensorship(e, t) {
          if (!e && t && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship"
            }), a) {
            if (!e) return;
            this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
              operation: "setCensorship"
            })
          }
          u = !!e, a = !!t
        }
        static setLogLevel(e) {
          let t = l[e.toLowerCase()];
          if (null == t) {
            p.globalLogger().warn("invalid log level - " + e);
            return
          }
          c = t
        }
        static from(e) {
          return new p(e)
        }
      }
      p.errors = i, p.levels = n
    },
    85306: function (e, t, r) {
      "use strict";
      r.d(t, {
        n: function () {
          return o
        }
      });
      var n = r(16441),
        i = r(2006);

      function o(e, t, r, o, s) {
        let a, u, l;
        e = (0, n.arrayify)(e), t = (0, n.arrayify)(t);
        let c = 1,
          h = new Uint8Array(o),
          f = new Uint8Array(t.length + 4);
        f.set(t);
        for (let d = 1; d <= c; d++) {
          f[t.length] = d >> 24 & 255, f[t.length + 1] = d >> 16 & 255, f[t.length + 2] = d >> 8 & 255, f[t.length + 3] = 255 & d;
          let p = (0, n.arrayify)((0, i.Gy)(s, e, f));
          a || (a = p.length, l = new Uint8Array(a), c = Math.ceil(o / a), u = o - (c - 1) * a), l.set(p);
          for (let t = 1; t < r; t++) {
            p = (0, n.arrayify)((0, i.Gy)(s, e, p));
            for (let e = 0; e < a; e++) l[e] ^= p[e]
          }
          let g = (d - 1) * a,
            m = d === c ? u : a;
          h.set((0, n.arrayify)(l).slice(0, m), g)
        }
        return (0, n.hexlify)(h)
      }
    },
    6881: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        Description: function () {
          return f
        },
        checkProperties: function () {
          return u
        },
        deepCopy: function () {
          return h
        },
        defineReadOnly: function () {
          return o
        },
        getStatic: function () {
          return s
        },
        resolveProperties: function () {
          return a
        },
        shallowCopy: function () {
          return l
        }
      });
      var n = r(1581);
      let i = new n.Logger("properties/5.7.0");

      function o(e, t, r) {
        Object.defineProperty(e, t, {
          enumerable: !0,
          value: r,
          writable: !1
        })
      }

      function s(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || "object" != typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor
        }
        return null
      }

      function a(e) {
        var t, r, n, i;
        return t = this, r = void 0, n = void 0, i = function* () {
          let t = Object.keys(e).map(t => {
              let r = e[t];
              return Promise.resolve(r).then(e => ({
                key: t,
                value: e
              }))
            }),
            r = yield Promise.all(t);
          return r.reduce((e, t) => (e[t.key] = t.value, e), {})
        }, new(n || (n = Promise))(function (e, o) {
          function s(e) {
            try {
              u(i.next(e))
            } catch (e) {
              o(e)
            }
          }

          function a(e) {
            try {
              u(i.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function u(t) {
            var r;
            t.done ? e(t.value) : ((r = t.value) instanceof n ? r : new n(function (e) {
              e(r)
            })).then(s, a)
          }
          u((i = i.apply(t, r || [])).next())
        })
      }

      function u(e, t) {
        e && "object" == typeof e || i.throwArgumentError("invalid object", "object", e), Object.keys(e).forEach(r => {
          t[r] || i.throwArgumentError("invalid object key - " + r, "transaction:" + r, e)
        })
      }

      function l(e) {
        let t = {};
        for (let r in e) t[r] = e[r];
        return t
      }
      let c = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0
      };

      function h(e) {
        return function (e) {
          if (function e(t) {
              if (null == t || c[typeof t]) return !0;
              if (Array.isArray(t) || "object" == typeof t) {
                if (!Object.isFrozen(t)) return !1;
                let r = Object.keys(t);
                for (let n = 0; n < r.length; n++) {
                  let i = null;
                  try {
                    i = t[r[n]]
                  } catch (e) {
                    continue
                  }
                  if (!e(i)) return !1
                }
                return !0
              }
              return i.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
            }(e)) return e;
          if (Array.isArray(e)) return Object.freeze(e.map(e => h(e)));
          if ("object" == typeof e) {
            let t = {};
            for (let r in e) {
              let n = e[r];
              void 0 !== n && o(t, r, h(n))
            }
            return t
          }
          return i.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
        }(e)
      }
      class f {
        constructor(e) {
          for (let t in e) this[t] = h(e[t])
        }
      }
    },
    34216: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return n
        }
      });
      let n = "providers/5.7.2"
    },
    57408: function (e, t, r) {
      "use strict";
      r.d(t, {
        Zk: function () {
          return W
        }
      });
      var n = r(81556),
        i = r(59567),
        o = r(57727),
        s = r(2593),
        a = r(16441),
        u = r(57218),
        l = r(27586),
        c = r(1581);
      let h = new c.Logger("networks/5.7.1");

      function f(e) {
        let t = function (t, r) {
          null == r && (r = {});
          let n = [];
          if (t.InfuraProvider && "-" !== r.infura) try {
            n.push(new t.InfuraProvider(e, r.infura))
          } catch (e) {}
          if (t.EtherscanProvider && "-" !== r.etherscan) try {
            n.push(new t.EtherscanProvider(e, r.etherscan))
          } catch (e) {}
          if (t.AlchemyProvider && "-" !== r.alchemy) try {
            n.push(new t.AlchemyProvider(e, r.alchemy))
          } catch (e) {}
          if (t.PocketProvider && "-" !== r.pocket) try {
            let i = new t.PocketProvider(e, r.pocket);
            i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
          } catch (e) {}
          if (t.CloudflareProvider && "-" !== r.cloudflare) try {
            n.push(new t.CloudflareProvider(e))
          } catch (e) {}
          if (t.AnkrProvider && "-" !== r.ankr) try {
            let i = new t.AnkrProvider(e, r.ankr);
            i.network && -1 === ["ropsten"].indexOf(i.network.name) && n.push(i)
          } catch (e) {}
          if (0 === n.length) return null;
          if (t.FallbackProvider) {
            let i = 1;
            return null != r.quorum ? i = r.quorum : "homestead" === e && (i = 2), new t.FallbackProvider(n, i)
          }
          return n[0]
        };
        return t.renetwork = function (e) {
          return f(e)
        }, t
      }

      function d(e, t) {
        let r = function (r, n) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(e, t) : null
        };
        return r.renetwork = function (t) {
          return d(e, t)
        }, r
      }
      let p = {
          chainId: 1,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "homestead",
          _defaultProvider: f("homestead")
        },
        g = {
          chainId: 3,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "ropsten",
          _defaultProvider: f("ropsten")
        },
        m = {
          chainId: 63,
          name: "classicMordor",
          _defaultProvider: d("https://www.ethercluster.com/mordor", "classicMordor")
        },
        y = {
          unspecified: {
            chainId: 0,
            name: "unspecified"
          },
          homestead: p,
          mainnet: p,
          morden: {
            chainId: 2,
            name: "morden"
          },
          ropsten: g,
          testnet: g,
          rinkeby: {
            chainId: 4,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "rinkeby",
            _defaultProvider: f("rinkeby")
          },
          kovan: {
            chainId: 42,
            name: "kovan",
            _defaultProvider: f("kovan")
          },
          goerli: {
            chainId: 5,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "goerli",
            _defaultProvider: f("goerli")
          },
          kintsugi: {
            chainId: 1337702,
            name: "kintsugi"
          },
          sepolia: {
            chainId: 11155111,
            name: "sepolia",
            _defaultProvider: f("sepolia")
          },
          classic: {
            chainId: 61,
            name: "classic",
            _defaultProvider: d("https://www.ethercluster.com/etc", "classic")
          },
          classicMorden: {
            chainId: 62,
            name: "classicMorden"
          },
          classicMordor: m,
          classicTestnet: m,
          classicKotti: {
            chainId: 6,
            name: "classicKotti",
            _defaultProvider: d("https://www.ethercluster.com/kotti", "classicKotti")
          },
          xdai: {
            chainId: 100,
            name: "xdai"
          },
          matic: {
            chainId: 137,
            name: "matic",
            _defaultProvider: f("matic")
          },
          maticmum: {
            chainId: 80001,
            name: "maticmum"
          },
          optimism: {
            chainId: 10,
            name: "optimism",
            _defaultProvider: f("optimism")
          },
          "optimism-kovan": {
            chainId: 69,
            name: "optimism-kovan"
          },
          "optimism-goerli": {
            chainId: 420,
            name: "optimism-goerli"
          },
          arbitrum: {
            chainId: 42161,
            name: "arbitrum"
          },
          "arbitrum-rinkeby": {
            chainId: 421611,
            name: "arbitrum-rinkeby"
          },
          "arbitrum-goerli": {
            chainId: 421613,
            name: "arbitrum-goerli"
          },
          bnb: {
            chainId: 56,
            name: "bnb"
          },
          bnbt: {
            chainId: 97,
            name: "bnbt"
          }
        };
      var v = r(6881),
        b = r(2006),
        w = r(29251),
        A = r(37707),
        E = r(92882),
        S = r.n(E),
        x = r(34216),
        k = r(39934),
        P = function (e, t, r, n) {
          return new(r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function a(e) {
              try {
                u(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function u(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
          })
        };
      let C = new c.Logger(x.i);

      function _(e) {
        return null == e ? "null" : (32 !== (0, a.hexDataLength)(e) && C.throwArgumentError("invalid topic", "topic", e), e.toLowerCase())
      }

      function M(e) {
        for (e = e.slice(); e.length > 0 && null == e[e.length - 1];) e.pop();
        return e.map(e => {
          if (!Array.isArray(e)) return _(e); {
            let t = {};
            e.forEach(e => {
              t[_(e)] = !0
            });
            let r = Object.keys(t);
            return r.sort(), r.join("|")
          }
        }).join("&")
      }

      function O(e) {
        if ("string" == typeof e) {
          if (e = e.toLowerCase(), 32 === (0, a.hexDataLength)(e)) return "tx:" + e;
          if (-1 === e.indexOf(":")) return e
        } else if (Array.isArray(e)) return "filter:*:" + M(e);
        else if (n.Sg.isForkEvent(e)) throw C.warn("not implemented"), Error("not implemented");
        else if (e && "object" == typeof e) return "filter:" + (e.address || "*") + ":" + M(e.topics || []);
        throw Error("invalid event - " + e)
      }

      function N() {
        return new Date().getTime()
      }

      function R(e) {
        return new Promise(t => {
          setTimeout(t, e)
        })
      }
      let T = ["block", "network", "pending", "poll"];
      class I {
        constructor(e, t, r) {
          (0, v.defineReadOnly)(this, "tag", e), (0, v.defineReadOnly)(this, "listener", t), (0, v.defineReadOnly)(this, "once", r), this._lastBlockNumber = -2, this._inflight = !1
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter
          }
          return this.tag
        }
        get type() {
          return this.tag.split(":")[0]
        }
        get hash() {
          let e = this.tag.split(":");
          return "tx" !== e[0] ? null : e[1]
        }
        get filter() {
          var e;
          let t = this.tag.split(":");
          if ("filter" !== t[0]) return null;
          let r = t[1],
            n = "" === (e = t[2]) ? [] : e.split(/&/g).map(e => {
              if ("" === e) return [];
              let t = e.split("|").map(e => "null" === e ? null : e);
              return 1 === t.length ? t[0] : t
            }),
            i = {};
          return n.length > 0 && (i.topics = n), r && "*" !== r && (i.address = r), i
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || T.indexOf(this.tag) >= 0
        }
      }
      let B = {
        0: {
          symbol: "btc",
          p2pkh: 0,
          p2sh: 5,
          prefix: "bc"
        },
        2: {
          symbol: "ltc",
          p2pkh: 48,
          p2sh: 50,
          prefix: "ltc"
        },
        3: {
          symbol: "doge",
          p2pkh: 30,
          p2sh: 22
        },
        60: {
          symbol: "eth",
          ilk: "eth"
        },
        61: {
          symbol: "etc",
          ilk: "eth"
        },
        700: {
          symbol: "xdai",
          ilk: "eth"
        }
      };

      function L(e) {
        return (0, a.hexZeroPad)(s.O$.from(e).toHexString(), 32)
      }

      function F(e) {
        return o.Base58.encode((0, a.concat)([e, (0, a.hexDataSlice)((0, b.JQ)((0, b.JQ)(e)), 0, 4)]))
      }
      let D = RegExp("^(ipfs)://(.*)$", "i"),
        U = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), D, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];

      function j(e, t) {
        try {
          return (0, w.ZN)(z(e, t))
        } catch (e) {}
        return null
      }

      function z(e, t) {
        if ("0x" === e) return null;
        let r = s.O$.from((0, a.hexDataSlice)(e, t, t + 32)).toNumber(),
          n = s.O$.from((0, a.hexDataSlice)(e, r, r + 32)).toNumber();
        return (0, a.hexDataSlice)(e, r + 32, r + 32 + n)
      }

      function H(e) {
        return e.match(/^ipfs:\/\/ipfs\//i) ? e = e.substring(12) : e.match(/^ipfs:\/\//i) ? e = e.substring(7) : C.throwArgumentError("unsupported IPFS format", "link", e), `https://gateway.ipfs.io/ipfs/${e}`
      }

      function G(e) {
        let t = (0, a.arrayify)(e);
        if (t.length > 32) throw Error("internal; should not happen");
        let r = new Uint8Array(32);
        return r.set(t, 32 - t.length), r
      }

      function q(e) {
        let t = [],
          r = 0;
        for (let n = 0; n < e.length; n++) t.push(null), r += 32;
        for (let n = 0; n < e.length; n++) {
          let i = (0, a.arrayify)(e[n]);
          t[n] = G(r), t.push(G(i.length)), t.push(function (e) {
            if (e.length % 32 == 0) return e;
            let t = new Uint8Array(32 * Math.ceil(e.length / 32));
            return t.set(e), t
          }(i)), r += 32 + 32 * Math.ceil(i.length / 32)
        }
        return (0, a.hexConcat)(t)
      }
      class K {
        constructor(e, t, r, n) {
          (0, v.defineReadOnly)(this, "provider", e), (0, v.defineReadOnly)(this, "name", r), (0, v.defineReadOnly)(this, "address", e.formatter.address(t)), (0, v.defineReadOnly)(this, "_resolvedAddress", n)
        }
        supportsWildcard() {
          return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
            to: this.address,
            data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
          }).then(e => s.O$.from(e).eq(1)).catch(e => {
            if (e.code === c.Logger.errors.CALL_EXCEPTION) return !1;
            throw this._supportsEip2544 = null, e
          })), this._supportsEip2544
        }
        _fetch(e, t) {
          return P(this, void 0, void 0, function* () {
            let r = {
                to: this.address,
                ccipReadEnabled: !0,
                data: (0, a.hexConcat)([e, (0, l.VM)(this.name), t || "0x"])
              },
              n = !1;
            (yield this.supportsWildcard()) && (n = !0, r.data = (0, a.hexConcat)(["0x9061b923", q([(0, l.Kn)(this.name), r.data])]));
            try {
              let e = yield this.provider.call(r);
              return (0, a.arrayify)(e).length % 32 == 4 && C.throwError("resolver threw error", c.Logger.errors.CALL_EXCEPTION, {
                transaction: r,
                data: e
              }), n && (e = z(e, 0)), e
            } catch (e) {
              if (e.code === c.Logger.errors.CALL_EXCEPTION) return null;
              throw e
            }
          })
        }
        _fetchBytes(e, t) {
          return P(this, void 0, void 0, function* () {
            let r = yield this._fetch(e, t);
            return null != r ? z(r, 0) : null
          })
        }
        _getAddress(e, t) {
          let r = B[String(e)];
          if (null == r && C.throwError(`unsupported coin type: ${e}`, c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: `getAddress(${e})`
            }), "eth" === r.ilk) return this.provider.formatter.address(t);
          let n = (0, a.arrayify)(t);
          if (null != r.p2pkh) {
            let e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e) {
              let t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75) return F((0, a.concat)([
                [r.p2pkh], "0x" + e[2]
              ]))
            }
          }
          if (null != r.p2sh) {
            let e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e) {
              let t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75) return F((0, a.concat)([
                [r.p2sh], "0x" + e[2]
              ]))
            }
          }
          if (null != r.prefix) {
            let e = n[1],
              t = n[0];
            if (0 === t ? 20 !== e && 32 !== e && (t = -1) : t = -1, t >= 0 && n.length === 2 + e && e >= 1 && e <= 75) {
              let e = S().toWords(n.slice(2));
              return e.unshift(t), S().encode(r.prefix, e)
            }
          }
          return null
        }
        getAddress(e) {
          return P(this, void 0, void 0, function* () {
            if (null == e && (e = 60), 60 === e) try {
              let e = yield this._fetch("0x3b3b57de");
              if ("0x" === e || e === u.R) return null;
              return this.provider.formatter.callAddress(e)
            } catch (e) {
              if (e.code === c.Logger.errors.CALL_EXCEPTION) return null;
              throw e
            }
            let t = yield this._fetchBytes("0xf1cb7e06", L(e));
            if (null == t || "0x" === t) return null;
            let r = this._getAddress(e, t);
            return null == r && C.throwError("invalid or unsupported coin data", c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: `getAddress(${e})`,
              coinType: e,
              data: t
            }), r
          })
        }
        getAvatar() {
          return P(this, void 0, void 0, function* () {
            let e = [{
              type: "name",
              content: this.name
            }];
            try {
              let t = yield this.getText("avatar");
              if (null == t) return null;
              for (let r = 0; r < U.length; r++) {
                let n = t.match(U[r]);
                if (null == n) continue;
                let i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                    return e.push({
                      type: "url",
                      content: t
                    }), {
                      linkage: e,
                      url: t
                    };
                  case "data":
                    return e.push({
                      type: "data",
                      content: t
                    }), {
                      linkage: e,
                      url: t
                    };
                  case "ipfs":
                    return e.push({
                      type: "ipfs",
                      content: t
                    }), {
                      linkage: e,
                      url: H(t)
                    };
                  case "erc721":
                  case "erc1155": {
                    let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                    e.push({
                      type: i,
                      content: t
                    });
                    let o = this._resolvedAddress || (yield this.getAddress()),
                      u = (n[2] || "").split("/");
                    if (2 !== u.length) return null;
                    let l = yield this.provider.formatter.address(u[0]), c = (0, a.hexZeroPad)(s.O$.from(u[1]).toHexString(), 32);
                    if ("erc721" === i) {
                      let t = this.provider.formatter.callAddress((yield this.provider.call({
                        to: l,
                        data: (0, a.hexConcat)(["0x6352211e", c])
                      })));
                      if (o !== t) return null;
                      e.push({
                        type: "owner",
                        content: t
                      })
                    } else if ("erc1155" === i) {
                      let t = s.O$.from((yield this.provider.call({
                        to: l,
                        data: (0, a.hexConcat)(["0x00fdd58e", (0, a.hexZeroPad)(o, 32), c])
                      })));
                      if (t.isZero()) return null;
                      e.push({
                        type: "balance",
                        content: t.toString()
                      })
                    }
                    let h = {
                        to: this.provider.formatter.address(u[0]),
                        data: (0, a.hexConcat)([r, c])
                      },
                      f = j((yield this.provider.call(h)), 0);
                    if (null == f) return null;
                    e.push({
                      type: "metadata-url-base",
                      content: f
                    }), "erc1155" === i && (f = f.replace("{id}", c.substring(2)), e.push({
                      type: "metadata-url-expanded",
                      content: f
                    })), f.match(/^ipfs:/i) && (f = H(f)), e.push({
                      type: "metadata-url",
                      content: f
                    });
                    let d = yield(0, A.fetchJson)(f);
                    if (!d) return null;
                    e.push({
                      type: "metadata",
                      content: JSON.stringify(d)
                    });
                    let p = d.image;
                    if ("string" != typeof p) return null;
                    if (p.match(/^(https:\/\/|data:)/i));
                    else {
                      let t = p.match(D);
                      if (null == t) return null;
                      e.push({
                        type: "url-ipfs",
                        content: p
                      }), p = H(p)
                    }
                    return e.push({
                      type: "url",
                      content: p
                    }), {
                      linkage: e,
                      url: p
                    }
                  }
                }
              }
            } catch (e) {}
            return null
          })
        }
        getContentHash() {
          return P(this, void 0, void 0, function* () {
            let e = yield this._fetchBytes("0xbc1c58d1");
            if (null == e || "0x" === e) return null;
            let t = e.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (t) {
              let e = parseInt(t[3], 16);
              if (t[4].length === 2 * e) return "ipfs://" + o.Base58.encode("0x" + t[1])
            }
            let r = e.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
            if (r) {
              let e = parseInt(r[3], 16);
              if (r[4].length === 2 * e) return "ipns://" + o.Base58.encode("0x" + r[1])
            }
            let n = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (n && 64 === n[1].length) return "bzz://" + n[1];
            let s = e.match(/^0x90b2c605([0-9a-f]*)$/);
            if (s && 68 === s[1].length) {
              let e = {
                  "=": "",
                  "+": "-",
                  "/": "_"
                },
                t = (0, i.c)("0x" + s[1]).replace(/[=+\/]/g, t => e[t]);
              return "sia://" + t
            }
            return C.throwError("invalid or unsupported content hash data", c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "getContentHash()",
              data: e
            })
          })
        }
        getText(e) {
          return P(this, void 0, void 0, function* () {
            let t = (0, w.Y0)(e);
            (t = (0, a.concat)([L(64), L(t.length), t])).length % 32 != 0 && (t = (0, a.concat)([t, (0, a.hexZeroPad)("0x", 32 - e.length % 32)]));
            let r = yield this._fetchBytes("0x59d1d43c", (0, a.hexlify)(t));
            return null == r || "0x" === r ? null : (0, w.ZN)(r)
          })
        }
      }
      let V = null,
        J = 1;
      class W extends n.zt {
        constructor(e) {
          if (super(), this._events = [], this._emitted = {
              block: -2
            }, this.disableCcipRead = !1, this.formatter = new.target.getFormatter(), (0, v.defineReadOnly)(this, "anyNetwork", "any" === e), this.anyNetwork && (e = this.detectNetwork()), e instanceof Promise) this._networkPromise = e, e.catch(e => {}), this._ready().catch(e => {});
          else {
            let t = (0, v.getStatic)(new.target, "getNetwork")(e);
            t ? ((0, v.defineReadOnly)(this, "_network", t), this.emit("network", t, null)) : C.throwArgumentError("invalid network", "network", e)
          }
          this._maxInternalBlockNumber = -1024, this._lastBlockNumber = -2, this._maxFilterBlockRange = 10, this._pollingInterval = 4e3, this._fastQueryDate = 0
        }
        _ready() {
          return P(this, void 0, void 0, function* () {
            if (null == this._network) {
              let e = null;
              if (this._networkPromise) try {
                e = yield this._networkPromise
              } catch (e) {}
              null == e && (e = yield this.detectNetwork()), e || C.throwError("no network detected", c.Logger.errors.UNKNOWN_ERROR, {}), null == this._network && (this.anyNetwork ? this._network = e : (0, v.defineReadOnly)(this, "_network", e), this.emit("network", e, null))
            }
            return this._network
          })
        }
        get ready() {
          return (0, A.poll)(() => this._ready().then(e => e, e => {
            if (e.code !== c.Logger.errors.NETWORK_ERROR || "noNetwork" !== e.event) throw e
          }))
        }
        static getFormatter() {
          return null == V && (V = new k.Mb), V
        }
        static getNetwork(e) {
          return function (e) {
            if (null == e) return null;
            if ("number" == typeof e) {
              for (let t in y) {
                let r = y[t];
                if (r.chainId === e) return {
                  name: r.name,
                  chainId: r.chainId,
                  ensAddress: r.ensAddress || null,
                  _defaultProvider: r._defaultProvider || null
                }
              }
              return {
                chainId: e,
                name: "unknown"
              }
            }
            if ("string" == typeof e) {
              let t = y[e];
              return null == t ? null : {
                name: t.name,
                chainId: t.chainId,
                ensAddress: t.ensAddress,
                _defaultProvider: t._defaultProvider || null
              }
            }
            let t = y[e.name];
            if (!t) return "number" != typeof e.chainId && h.throwArgumentError("invalid network chainId", "network", e), e;
            0 !== e.chainId && e.chainId !== t.chainId && h.throwArgumentError("network chainId mismatch", "network", e);
            let r = e._defaultProvider || null;
            if (null == r && t._defaultProvider) {
              var n;
              r = (n = t._defaultProvider) && "function" == typeof n.renetwork ? t._defaultProvider.renetwork(e) : t._defaultProvider
            }
            return {
              name: e.name,
              chainId: t.chainId,
              ensAddress: e.ensAddress || t.ensAddress || null,
              _defaultProvider: r
            }
          }(null == e ? "homestead" : e)
        }
        ccipReadFetch(e, t, r) {
          return P(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            let n = e.to.toLowerCase(),
              i = t.toLowerCase(),
              o = [];
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                s = t.replace("{sender}", n).replace("{data}", i),
                a = t.indexOf("{data}") >= 0 ? null : JSON.stringify({
                  data: i,
                  sender: n
                }),
                u = yield(0, A.fetchJson)({
                  url: s,
                  errorPassThrough: !0
                }, a, (e, t) => (e.status = t.statusCode, e));
              if (u.data) return u.data;
              let l = u.message || "unknown error";
              if (u.status >= 400 && u.status < 500) return C.throwError(`response not found during CCIP fetch: ${l}`, c.Logger.errors.SERVER_ERROR, {
                url: t,
                errorMessage: l
              });
              o.push(l)
            }
            return C.throwError(`error encountered during CCIP fetch: ${o.map(e=>JSON.stringify(e)).join(", ")}`, c.Logger.errors.SERVER_ERROR, {
              urls: r,
              errorMessages: o
            })
          })
        }
        _getInternalBlockNumber(e) {
          return P(this, void 0, void 0, function* () {
            if (yield this._ready(), e > 0)
              for (; this._internalBlockNumber;) {
                let t = this._internalBlockNumber;
                try {
                  let r = yield t;
                  if (N() - r.respTime <= e) return r.blockNumber;
                  break
                } catch (e) {
                  if (this._internalBlockNumber === t) break
                }
              }
            let t = N(),
              r = (0, v.resolveProperties)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(e => null, e => e)
              }).then(({
                blockNumber: e,
                networkError: n
              }) => {
                if (n) throw this._internalBlockNumber === r && (this._internalBlockNumber = null), n;
                let i = N();
                return (e = s.O$.from(e).toNumber()) < this._maxInternalBlockNumber && (e = this._maxInternalBlockNumber), this._maxInternalBlockNumber = e, this._setFastBlockNumber(e), {
                  blockNumber: e,
                  reqTime: t,
                  respTime: i
                }
              });
            return this._internalBlockNumber = r, r.catch(e => {
              this._internalBlockNumber === r && (this._internalBlockNumber = null)
            }), (yield r).blockNumber
          })
        }
        poll() {
          return P(this, void 0, void 0, function* () {
            let e = J++,
              t = [],
              r = null;
            try {
              r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
            } catch (e) {
              this.emit("error", e);
              return
            }
            if (this._setFastBlockNumber(r), this.emit("poll", e, r), r === this._lastBlockNumber) {
              this.emit("didPoll", e);
              return
            }
            if (-2 === this._emitted.block && (this._emitted.block = r - 1), Math.abs(this._emitted.block - r) > 1e3) C.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`), this.emit("error", C.makeError("network block skew detected", c.Logger.errors.NETWORK_ERROR, {
              blockNumber: r,
              event: "blockSkew",
              previousBlockNumber: this._emitted.block
            })), this.emit("block", r);
            else
              for (let e = this._emitted.block + 1; e <= r; e++) this.emit("block", e);
            this._emitted.block !== r && (this._emitted.block = r, Object.keys(this._emitted).forEach(e => {
              if ("block" === e) return;
              let t = this._emitted[e];
              "pending" !== t && r - t > 12 && delete this._emitted[e]
            })), -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1), this._events.forEach(e => {
              switch (e.type) {
                case "tx": {
                  let r = e.hash,
                    n = this.getTransactionReceipt(r).then(e => (e && null != e.blockNumber && (this._emitted["t:" + r] = e.blockNumber, this.emit(r, e)), null)).catch(e => {
                      this.emit("error", e)
                    });
                  t.push(n);
                  break
                }
                case "filter":
                  if (!e._inflight) {
                    e._inflight = !0, -2 === e._lastBlockNumber && (e._lastBlockNumber = r - 1);
                    let n = e.filter;
                    n.fromBlock = e._lastBlockNumber + 1, n.toBlock = r;
                    let i = n.toBlock - this._maxFilterBlockRange;
                    i > n.fromBlock && (n.fromBlock = i), n.fromBlock < 0 && (n.fromBlock = 0);
                    let o = this.getLogs(n).then(t => {
                      e._inflight = !1, 0 !== t.length && t.forEach(t => {
                        t.blockNumber > e._lastBlockNumber && (e._lastBlockNumber = t.blockNumber), this._emitted["b:" + t.blockHash] = t.blockNumber, this._emitted["t:" + t.transactionHash] = t.blockNumber, this.emit(n, t)
                      })
                    }).catch(t => {
                      this.emit("error", t), e._inflight = !1
                    });
                    t.push(o)
                  }
              }
            }), this._lastBlockNumber = r, Promise.all(t).then(() => {
              this.emit("didPoll", e)
            }).catch(e => {
              this.emit("error", e)
            })
          })
        }
        resetEventsBlock(e) {
          this._lastBlockNumber = e - 1, this.polling && this.poll()
        }
        get network() {
          return this._network
        }
        detectNetwork() {
          return P(this, void 0, void 0, function* () {
            return C.throwError("provider does not support network detection", c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "provider.detectNetwork"
            })
          })
        }
        getNetwork() {
          return P(this, void 0, void 0, function* () {
            let e = yield this._ready(), t = yield this.detectNetwork();
            if (e.chainId !== t.chainId) {
              if (this.anyNetwork) return this._network = t, this._lastBlockNumber = -2, this._fastBlockNumber = null, this._fastBlockNumberPromise = null, this._fastQueryDate = 0, this._emitted.block = -2, this._maxInternalBlockNumber = -1024, this._internalBlockNumber = null, this.emit("network", t, e), yield R(0), this._network;
              let r = C.makeError("underlying network changed", c.Logger.errors.NETWORK_ERROR, {
                event: "changed",
                network: e,
                detectedNetwork: t
              });
              throw this.emit("error", r), r
            }
            return e
          })
        }
        get blockNumber() {
          return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(e => {
            this._setFastBlockNumber(e)
          }, e => {}), null != this._fastBlockNumber ? this._fastBlockNumber : -1
        }
        get polling() {
          return null != this._poller
        }
        set polling(e) {
          e && !this._poller ? (this._poller = setInterval(() => {
            this.poll()
          }, this.pollingInterval), this._bootstrapPoll || (this._bootstrapPoll = setTimeout(() => {
            this.poll(), this._bootstrapPoll = setTimeout(() => {
              this._poller || this.poll(), this._bootstrapPoll = null
            }, this.pollingInterval)
          }, 0))) : !e && this._poller && (clearInterval(this._poller), this._poller = null)
        }
        get pollingInterval() {
          return this._pollingInterval
        }
        set pollingInterval(e) {
          if ("number" != typeof e || e <= 0 || parseInt(String(e)) != e) throw Error("invalid polling interval");
          this._pollingInterval = e, this._poller && (clearInterval(this._poller), this._poller = setInterval(() => {
            this.poll()
          }, this._pollingInterval))
        }
        _getFastBlockNumber() {
          let e = N();
          return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then(e => ((null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e), this._fastBlockNumber))), this._fastBlockNumberPromise
        }
        _setFastBlockNumber(e) {
          (null == this._fastBlockNumber || !(e < this._fastBlockNumber)) && (this._fastQueryDate = N(), (null == this._fastBlockNumber || e > this._fastBlockNumber) && (this._fastBlockNumber = e, this._fastBlockNumberPromise = Promise.resolve(e)))
        }
        waitForTransaction(e, t, r) {
          return P(this, void 0, void 0, function* () {
            return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null)
          })
        }
        _waitForTransaction(e, t, r, n) {
          return P(this, void 0, void 0, function* () {
            let i = yield this.getTransactionReceipt(e);
            return (i ? i.confirmations : 0) >= t ? i : new Promise((i, o) => {
              let s = [],
                a = !1,
                u = function () {
                  return !!a || (a = !0, s.forEach(e => {
                    e()
                  }), !1)
                },
                l = e => {
                  e.confirmations < t || u() || i(e)
                };
              if (this.on(e, l), s.push(() => {
                  this.removeListener(e, l)
                }), n) {
                let r = n.startBlock,
                  i = null,
                  l = s => P(this, void 0, void 0, function* () {
                    a || (yield R(1e3), this.getTransactionCount(n.from).then(h => P(this, void 0, void 0, function* () {
                      if (!a) {
                        if (h <= n.nonce) r = s;
                        else {
                          {
                            let t = yield this.getTransaction(e);
                            if (t && null != t.blockNumber) return
                          }
                          for (null == i && (i = r - 3) < n.startBlock && (i = n.startBlock); i <= s;) {
                            if (a) return;
                            let r = yield this.getBlockWithTransactions(i);
                            for (let i = 0; i < r.transactions.length; i++) {
                              let s = r.transactions[i];
                              if (s.hash === e) return;
                              if (s.from === n.from && s.nonce === n.nonce) {
                                if (a) return;
                                let r = yield this.waitForTransaction(s.hash, t);
                                if (u()) return;
                                let i = "replaced";
                                s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"), o(C.makeError("transaction was replaced", c.Logger.errors.TRANSACTION_REPLACED, {
                                  cancelled: "replaced" === i || "cancelled" === i,
                                  reason: i,
                                  replacement: this._wrapTransaction(s),
                                  hash: e,
                                  receipt: r
                                }));
                                return
                              }
                            }
                            i++
                          }
                        }
                        a || this.once("block", l)
                      }
                    }), e => {
                      a || this.once("block", l)
                    }))
                  });
                if (a) return;
                this.once("block", l), s.push(() => {
                  this.removeListener("block", l)
                })
              }
              if ("number" == typeof r && r > 0) {
                let e = setTimeout(() => {
                  u() || o(C.makeError("timeout exceeded", c.Logger.errors.TIMEOUT, {
                    timeout: r
                  }))
                }, r);
                e.unref && e.unref(), s.push(() => {
                  clearTimeout(e)
                })
              }
            })
          })
        }
        getBlockNumber() {
          return P(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0)
          })
        }
        getGasPrice() {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let e = yield this.perform("getGasPrice", {});
            try {
              return s.O$.from(e)
            } catch (t) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "getGasPrice",
                result: e,
                error: t
              })
            }
          })
        }
        getBalance(e, t) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield(0, v.resolveProperties)({
              address: this._getAddress(e),
              blockTag: this._getBlockTag(t)
            }), n = yield this.perform("getBalance", r);
            try {
              return s.O$.from(n)
            } catch (e) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "getBalance",
                params: r,
                result: n,
                error: e
              })
            }
          })
        }
        getTransactionCount(e, t) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield(0, v.resolveProperties)({
              address: this._getAddress(e),
              blockTag: this._getBlockTag(t)
            }), n = yield this.perform("getTransactionCount", r);
            try {
              return s.O$.from(n).toNumber()
            } catch (e) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "getTransactionCount",
                params: r,
                result: n,
                error: e
              })
            }
          })
        }
        getCode(e, t) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield(0, v.resolveProperties)({
              address: this._getAddress(e),
              blockTag: this._getBlockTag(t)
            }), n = yield this.perform("getCode", r);
            try {
              return (0, a.hexlify)(n)
            } catch (e) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "getCode",
                params: r,
                result: n,
                error: e
              })
            }
          })
        }
        getStorageAt(e, t, r) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let n = yield(0, v.resolveProperties)({
              address: this._getAddress(e),
              blockTag: this._getBlockTag(r),
              position: Promise.resolve(t).then(e => (0, a.hexValue)(e))
            }), i = yield this.perform("getStorageAt", n);
            try {
              return (0, a.hexlify)(i)
            } catch (e) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "getStorageAt",
                params: n,
                result: i,
                error: e
              })
            }
          })
        }
        _wrapTransaction(e, t, r) {
          if (null != t && 32 !== (0, a.hexDataLength)(t)) throw Error("invalid response - sendTransaction");
          let n = e;
          return null != t && e.hash !== t && C.throwError("Transaction hash mismatch from Provider.sendTransaction.", c.Logger.errors.UNKNOWN_ERROR, {
            expectedHash: e.hash,
            returnedHash: t
          }), n.wait = (t, n) => P(this, void 0, void 0, function* () {
            let i;
            null == t && (t = 1), null == n && (n = 0), 0 !== t && null != r && (i = {
              data: e.data,
              from: e.from,
              nonce: e.nonce,
              to: e.to,
              value: e.value,
              startBlock: r
            });
            let o = yield this._waitForTransaction(e.hash, t, n, i);
            return null == o && 0 === t ? null : (this._emitted["t:" + e.hash] = o.blockNumber, 0 === o.status && C.throwError("transaction failed", c.Logger.errors.CALL_EXCEPTION, {
              transactionHash: e.hash,
              transaction: e,
              receipt: o
            }), o)
          }), n
        }
        sendTransaction(e) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield Promise.resolve(e).then(e => (0, a.hexlify)(e)), r = this.formatter.transaction(e);
            null == r.confirmations && (r.confirmations = 0);
            let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
            try {
              let e = yield this.perform("sendTransaction", {
                signedTransaction: t
              });
              return this._wrapTransaction(r, e, n)
            } catch (e) {
              throw e.transaction = r, e.transactionHash = r.hash, e
            }
          })
        }
        _getTransactionRequest(e) {
          return P(this, void 0, void 0, function* () {
            let t = yield e, r = {};
            return ["from", "to"].forEach(e => {
              null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? this._getAddress(e) : null))
            }), ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(e => {
              null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? s.O$.from(e) : null))
            }), ["type"].forEach(e => {
              null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => null != e ? e : null))
            }), t.accessList && (r.accessList = this.formatter.accessList(t.accessList)), ["data"].forEach(e => {
              null != t[e] && (r[e] = Promise.resolve(t[e]).then(e => e ? (0, a.hexlify)(e) : null))
            }), this.formatter.transactionRequest((yield(0, v.resolveProperties)(r)))
          })
        }
        _getFilter(e) {
          return P(this, void 0, void 0, function* () {
            e = yield e;
            let t = {};
            return null != e.address && (t.address = this._getAddress(e.address)), ["blockHash", "topics"].forEach(r => {
              null != e[r] && (t[r] = e[r])
            }), ["fromBlock", "toBlock"].forEach(r => {
              null != e[r] && (t[r] = this._getBlockTag(e[r]))
            }), this.formatter.filter((yield(0, v.resolveProperties)(t)))
          })
        }
        _call(e, t, r) {
          return P(this, void 0, void 0, function* () {
            r >= 10 && C.throwError("CCIP read exceeded maximum redirections", c.Logger.errors.SERVER_ERROR, {
              redirects: r,
              transaction: e
            });
            let n = e.to,
              i = yield this.perform("call", {
                transaction: e,
                blockTag: t
              });
            if (r >= 0 && "latest" === t && null != n && "0x556f1830" === i.substring(0, 10) && (0, a.hexDataLength)(i) % 32 == 4) try {
              let o = (0, a.hexDataSlice)(i, 4),
                u = (0, a.hexDataSlice)(o, 0, 32);
              s.O$.from(u).eq(n) || C.throwError("CCIP Read sender did not match", c.Logger.errors.CALL_EXCEPTION, {
                name: "OffchainLookup",
                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: i
              });
              let l = [],
                h = s.O$.from((0, a.hexDataSlice)(o, 32, 64)).toNumber(),
                f = s.O$.from((0, a.hexDataSlice)(o, h, h + 32)).toNumber(),
                d = (0, a.hexDataSlice)(o, h + 32);
              for (let t = 0; t < f; t++) {
                let r = j(d, 32 * t);
                null == r && C.throwError("CCIP Read contained corrupt URL string", c.Logger.errors.CALL_EXCEPTION, {
                  name: "OffchainLookup",
                  signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                  transaction: e,
                  data: i
                }), l.push(r)
              }
              let p = z(o, 64);
              s.O$.from((0, a.hexDataSlice)(o, 100, 128)).isZero() || C.throwError("CCIP Read callback selector included junk", c.Logger.errors.CALL_EXCEPTION, {
                name: "OffchainLookup",
                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: i
              });
              let g = (0, a.hexDataSlice)(o, 96, 100),
                m = z(o, 128),
                y = yield this.ccipReadFetch(e, p, l);
              null == y && C.throwError("CCIP Read disabled or provided no URLs", c.Logger.errors.CALL_EXCEPTION, {
                name: "OffchainLookup",
                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: i
              });
              let v = {
                to: n,
                data: (0, a.hexConcat)([g, q([y, m])])
              };
              return this._call(v, t, r + 1)
            } catch (e) {
              if (e.code === c.Logger.errors.SERVER_ERROR) throw e
            }
            try {
              return (0, a.hexlify)(i)
            } catch (r) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "call",
                params: {
                  transaction: e,
                  blockTag: t
                },
                result: i,
                error: r
              })
            }
          })
        }
        call(e, t) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let r = yield(0, v.resolveProperties)({
              transaction: this._getTransactionRequest(e),
              blockTag: this._getBlockTag(t),
              ccipReadEnabled: Promise.resolve(e.ccipReadEnabled)
            });
            return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
          })
        }
        estimateGas(e) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield(0, v.resolveProperties)({
              transaction: this._getTransactionRequest(e)
            }), r = yield this.perform("estimateGas", t);
            try {
              return s.O$.from(r)
            } catch (e) {
              return C.throwError("bad result from backend", c.Logger.errors.SERVER_ERROR, {
                method: "estimateGas",
                params: t,
                result: r,
                error: e
              })
            }
          })
        }
        _getAddress(e) {
          return P(this, void 0, void 0, function* () {
            "string" != typeof (e = yield e) && C.throwArgumentError("invalid address or ENS name", "name", e);
            let t = yield this.resolveName(e);
            return null == t && C.throwError("ENS name not configured", c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: `resolveName(${JSON.stringify(e)})`
            }), t
          })
        }
        _getBlock(e, t) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork(), e = yield e;
            let r = -128,
              n = {
                includeTransactions: !!t
              };
            if ((0, a.isHexString)(e, 32)) n.blockHash = e;
            else try {
              n.blockTag = yield this._getBlockTag(e), (0, a.isHexString)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
            } catch (t) {
              C.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", e)
            }
            return (0, A.poll)(() => P(this, void 0, void 0, function* () {
              let e = yield this.perform("getBlock", n);
              if (null == e) return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
              if (t) {
                let t = null;
                for (let r = 0; r < e.transactions.length; r++) {
                  let n = e.transactions[r];
                  if (null == n.blockNumber) n.confirmations = 0;
                  else if (null == n.confirmations) {
                    null == t && (t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                    let e = t - n.blockNumber + 1;
                    e <= 0 && (e = 1), n.confirmations = e
                  }
                }
                let r = this.formatter.blockWithTransactions(e);
                return r.transactions = r.transactions.map(e => this._wrapTransaction(e)), r
              }
              return this.formatter.block(e)
            }), {
              oncePoll: this
            })
          })
        }
        getBlock(e) {
          return this._getBlock(e, !1)
        }
        getBlockWithTransactions(e) {
          return this._getBlock(e, !0)
        }
        getTransaction(e) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork(), e = yield e;
            let t = {
              transactionHash: this.formatter.hash(e, !0)
            };
            return (0, A.poll)(() => P(this, void 0, void 0, function* () {
              let r = yield this.perform("getTransaction", t);
              if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
              let n = this.formatter.transactionResponse(r);
              if (null == n.blockNumber) n.confirmations = 0;
              else if (null == n.confirmations) {
                let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), t = e - n.blockNumber + 1;
                t <= 0 && (t = 1), n.confirmations = t
              }
              return this._wrapTransaction(n)
            }), {
              oncePoll: this
            })
          })
        }
        getTransactionReceipt(e) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork(), e = yield e;
            let t = {
              transactionHash: this.formatter.hash(e, !0)
            };
            return (0, A.poll)(() => P(this, void 0, void 0, function* () {
              let r = yield this.perform("getTransactionReceipt", t);
              if (null == r) return null == this._emitted["t:" + e] ? null : void 0;
              if (null == r.blockHash) return;
              let n = this.formatter.receipt(r);
              if (null == n.blockNumber) n.confirmations = 0;
              else if (null == n.confirmations) {
                let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval), t = e - n.blockNumber + 1;
                t <= 0 && (t = 1), n.confirmations = t
              }
              return n
            }), {
              oncePoll: this
            })
          })
        }
        getLogs(e) {
          return P(this, void 0, void 0, function* () {
            yield this.getNetwork();
            let t = yield(0, v.resolveProperties)({
              filter: this._getFilter(e)
            }), r = yield this.perform("getLogs", t);
            return r.forEach(e => {
              null == e.removed && (e.removed = !1)
            }), k.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
          })
        }
        getEtherPrice() {
          return P(this, void 0, void 0, function* () {
            return yield this.getNetwork(), this.perform("getEtherPrice", {})
          })
        }
        _getBlockTag(e) {
          return P(this, void 0, void 0, function* () {
            if ("number" == typeof (e = yield e) && e < 0) {
              e % 1 && C.throwArgumentError("invalid BlockTag", "blockTag", e);
              let t = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
              return (t += e) < 0 && (t = 0), this.formatter.blockTag(t)
            }
            return this.formatter.blockTag(e)
          })
        }
        getResolver(e) {
          return P(this, void 0, void 0, function* () {
            let t = e;
            for (;;) {
              if ("" === t || "." === t || "eth" !== e && "eth" === t) return null;
              let r = yield this._getResolver(t, "getResolver");
              if (null != r) {
                let n = new K(this, r, e);
                if (t !== e && !(yield n.supportsWildcard())) return null;
                return n
              }
              t = t.split(".").slice(1).join(".")
            }
          })
        }
        _getResolver(e, t) {
          return P(this, void 0, void 0, function* () {
            null == t && (t = "ENS");
            let r = yield this.getNetwork();
            r.ensAddress || C.throwError("network does not support ENS", c.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: t,
              network: r.name
            });
            try {
              let t = yield this.call({
                to: r.ensAddress,
                data: "0x0178b8bf" + (0, l.VM)(e).substring(2)
              });
              return this.formatter.callAddress(t)
            } catch (e) {}
            return null
          })
        }
        resolveName(e) {
          return P(this, void 0, void 0, function* () {
            e = yield e;
            try {
              return Promise.resolve(this.formatter.address(e))
            } catch (t) {
              if ((0, a.isHexString)(e)) throw t
            }
            "string" != typeof e && C.throwArgumentError("invalid ENS name", "name", e);
            let t = yield this.getResolver(e);
            return t ? yield t.getAddress(): null
          })
        }
        lookupAddress(e) {
          return P(this, void 0, void 0, function* () {
            e = yield e, e = this.formatter.address(e);
            let t = e.substring(2).toLowerCase() + ".addr.reverse",
              r = yield this._getResolver(t, "lookupAddress");
            if (null == r) return null;
            let n = j((yield this.call({
                to: r,
                data: "0x691f3431" + (0, l.VM)(t).substring(2)
              })), 0),
              i = yield this.resolveName(n);
            return i != e ? null : n
          })
        }
        getAvatar(e) {
          return P(this, void 0, void 0, function* () {
            let t = null;
            if ((0, a.isHexString)(e)) {
              let r = this.formatter.address(e),
                n = r.substring(2).toLowerCase() + ".addr.reverse",
                i = yield this._getResolver(n, "getAvatar");
              if (!i) return null;
              t = new K(this, i, n);
              try {
                let e = yield t.getAvatar();
                if (e) return e.url
              } catch (e) {
                if (e.code !== c.Logger.errors.CALL_EXCEPTION) throw e
              }
              try {
                let e = j((yield this.call({
                  to: i,
                  data: "0x691f3431" + (0, l.VM)(n).substring(2)
                })), 0);
                t = yield this.getResolver(e)
              } catch (e) {
                if (e.code !== c.Logger.errors.CALL_EXCEPTION) throw e;
                return null
              }
            } else if (!(t = yield this.getResolver(e))) return null;
            let r = yield t.getAvatar();
            return null == r ? null : r.url
          })
        }
        perform(e, t) {
          return C.throwError(e + " not implemented", c.Logger.errors.NOT_IMPLEMENTED, {
            operation: e
          })
        }
        _startEvent(e) {
          this.polling = this._events.filter(e => e.pollable()).length > 0
        }
        _stopEvent(e) {
          this.polling = this._events.filter(e => e.pollable()).length > 0
        }
        _addEventListener(e, t, r) {
          let n = new I(O(e), t, r);
          return this._events.push(n), this._startEvent(n), this
        }
        on(e, t) {
          return this._addEventListener(e, t, !1)
        }
        once(e, t) {
          return this._addEventListener(e, t, !0)
        }
        emit(e, ...t) {
          let r = !1,
            n = [],
            i = O(e);
          return this._events = this._events.filter(e => e.tag !== i || (setTimeout(() => {
            e.listener.apply(this, t)
          }, 0), r = !0, !e.once || (n.push(e), !1))), n.forEach(e => {
            this._stopEvent(e)
          }), r
        }
        listenerCount(e) {
          if (!e) return this._events.length;
          let t = O(e);
          return this._events.filter(e => e.tag === t).length
        }
        listeners(e) {
          if (null == e) return this._events.map(e => e.listener);
          let t = O(e);
          return this._events.filter(e => e.tag === t).map(e => e.listener)
        }
        off(e, t) {
          if (null == t) return this.removeAllListeners(e);
          let r = [],
            n = !1,
            i = O(e);
          return this._events = this._events.filter(e => e.tag !== i || e.listener != t || !!n || (n = !0, r.push(e), !1)), r.forEach(e => {
            this._stopEvent(e)
          }), this
        }
        removeAllListeners(e) {
          let t = [];
          if (null == e) t = this._events, this._events = [];
          else {
            let r = O(e);
            this._events = this._events.filter(e => e.tag !== r || (t.push(e), !1))
          }
          return t.forEach(e => {
            this._stopEvent(e)
          }), this
        }
      }
    },
    39934: function (e, t, r) {
      "use strict";
      r.d(t, {
        Mb: function () {
          return h
        },
        Gp: function () {
          return f
        },
        vh: function () {
          return p
        }
      });
      var n = r(19485),
        i = r(2593),
        o = r(16441),
        s = r(6881),
        a = r(83875),
        u = r(1581),
        l = r(34216);
      let c = new u.Logger(l.i);
      class h {
        constructor() {
          this.formats = this.getDefaultFormats()
        }
        getDefaultFormats() {
          let e = {},
            t = this.address.bind(this),
            r = this.bigNumber.bind(this),
            n = this.blockTag.bind(this),
            i = this.data.bind(this),
            o = this.hash.bind(this),
            a = this.hex.bind(this),
            u = this.number.bind(this),
            l = this.type.bind(this),
            c = e => this.data(e, !0);
          return e.transaction = {
            hash: o,
            type: l,
            accessList: h.allowNull(this.accessList.bind(this), null),
            blockHash: h.allowNull(o, null),
            blockNumber: h.allowNull(u, null),
            transactionIndex: h.allowNull(u, null),
            confirmations: h.allowNull(u, null),
            from: t,
            gasPrice: h.allowNull(r),
            maxPriorityFeePerGas: h.allowNull(r),
            maxFeePerGas: h.allowNull(r),
            gasLimit: r,
            to: h.allowNull(t, null),
            value: r,
            nonce: u,
            data: i,
            r: h.allowNull(this.uint256),
            s: h.allowNull(this.uint256),
            v: h.allowNull(u),
            creates: h.allowNull(t, null),
            raw: h.allowNull(i)
          }, e.transactionRequest = {
            from: h.allowNull(t),
            nonce: h.allowNull(u),
            gasLimit: h.allowNull(r),
            gasPrice: h.allowNull(r),
            maxPriorityFeePerGas: h.allowNull(r),
            maxFeePerGas: h.allowNull(r),
            to: h.allowNull(t),
            value: h.allowNull(r),
            data: h.allowNull(c),
            type: h.allowNull(u),
            accessList: h.allowNull(this.accessList.bind(this), null)
          }, e.receiptLog = {
            transactionIndex: u,
            blockNumber: u,
            transactionHash: o,
            address: t,
            topics: h.arrayOf(o),
            data: i,
            logIndex: u,
            blockHash: o
          }, e.receipt = {
            to: h.allowNull(this.address, null),
            from: h.allowNull(this.address, null),
            contractAddress: h.allowNull(t, null),
            transactionIndex: u,
            root: h.allowNull(a),
            gasUsed: r,
            logsBloom: h.allowNull(i),
            blockHash: o,
            transactionHash: o,
            logs: h.arrayOf(this.receiptLog.bind(this)),
            blockNumber: u,
            confirmations: h.allowNull(u, null),
            cumulativeGasUsed: r,
            effectiveGasPrice: h.allowNull(r),
            status: h.allowNull(u),
            type: l
          }, e.block = {
            hash: h.allowNull(o),
            parentHash: o,
            number: u,
            timestamp: u,
            nonce: h.allowNull(a),
            difficulty: this.difficulty.bind(this),
            gasLimit: r,
            gasUsed: r,
            miner: h.allowNull(t),
            extraData: i,
            transactions: h.allowNull(h.arrayOf(o)),
            baseFeePerGas: h.allowNull(r)
          }, e.blockWithTransactions = (0, s.shallowCopy)(e.block), e.blockWithTransactions.transactions = h.allowNull(h.arrayOf(this.transactionResponse.bind(this))), e.filter = {
            fromBlock: h.allowNull(n, void 0),
            toBlock: h.allowNull(n, void 0),
            blockHash: h.allowNull(o, void 0),
            address: h.allowNull(t, void 0),
            topics: h.allowNull(this.topics.bind(this), void 0)
          }, e.filterLog = {
            blockNumber: h.allowNull(u),
            blockHash: h.allowNull(o),
            transactionIndex: u,
            removed: h.allowNull(this.boolean.bind(this)),
            address: t,
            data: h.allowFalsish(i, "0x"),
            topics: h.arrayOf(o),
            transactionHash: o,
            logIndex: u
          }, e
        }
        accessList(e) {
          return (0, a.accessListify)(e || [])
        }
        number(e) {
          return "0x" === e ? 0 : i.O$.from(e).toNumber()
        }
        type(e) {
          return "0x" === e || null == e ? 0 : i.O$.from(e).toNumber()
        }
        bigNumber(e) {
          return i.O$.from(e)
        }
        boolean(e) {
          if ("boolean" == typeof e) return e;
          if ("string" == typeof e) {
            if ("true" === (e = e.toLowerCase())) return !0;
            if ("false" === e) return !1
          }
          throw Error("invalid boolean - " + e)
        }
        hex(e, t) {
          return "string" == typeof e && (t || "0x" === e.substring(0, 2) || (e = "0x" + e), (0, o.isHexString)(e)) ? e.toLowerCase() : c.throwArgumentError("invalid hash", "value", e)
        }
        data(e, t) {
          let r = this.hex(e, t);
          if (r.length % 2 != 0) throw Error("invalid data; odd-length - " + e);
          return r
        }
        address(e) {
          return (0, n.getAddress)(e)
        }
        callAddress(e) {
          if (!(0, o.isHexString)(e, 32)) return null;
          let t = (0, n.getAddress)((0, o.hexDataSlice)(e, 12));
          return "0x0000000000000000000000000000000000000000" === t ? null : t
        }
        contractAddress(e) {
          return (0, n.getContractAddress)(e)
        }
        blockTag(e) {
          if (null == e) return "latest";
          if ("earliest" === e) return "0x0";
          switch (e) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return e
          }
          if ("number" == typeof e || (0, o.isHexString)(e)) return (0, o.hexValue)(e);
          throw Error("invalid blockTag")
        }
        hash(e, t) {
          let r = this.hex(e, t);
          return 32 !== (0, o.hexDataLength)(r) ? c.throwArgumentError("invalid hash", "value", e) : r
        }
        difficulty(e) {
          if (null == e) return null;
          let t = i.O$.from(e);
          try {
            return t.toNumber()
          } catch (e) {}
          return null
        }
        uint256(e) {
          if (!(0, o.isHexString)(e)) throw Error("invalid uint256");
          return (0, o.hexZeroPad)(e, 32)
        }
        _block(e, t) {
          null != e.author && null == e.miner && (e.miner = e.author);
          let r = null != e._difficulty ? e._difficulty : e.difficulty,
            n = h.check(t, e);
          return n._difficulty = null == r ? null : i.O$.from(r), n
        }
        block(e) {
          return this._block(e, this.formats.block)
        }
        blockWithTransactions(e) {
          return this._block(e, this.formats.blockWithTransactions)
        }
        transactionRequest(e) {
          return h.check(this.formats.transactionRequest, e)
        }
        transactionResponse(e) {
          null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas), e.to && i.O$.from(e.to).isZero() && (e.to = "0x0000000000000000000000000000000000000000"), null != e.input && null == e.data && (e.data = e.input), null == e.to && null == e.creates && (e.creates = this.contractAddress(e)), (1 === e.type || 2 === e.type) && null == e.accessList && (e.accessList = []);
          let t = h.check(this.formats.transaction, e);
          if (null != e.chainId) {
            let r = e.chainId;
            (0, o.isHexString)(r) && (r = i.O$.from(r).toNumber()), t.chainId = r
          } else {
            let r = e.networkId;
            null == r && null == t.v && (r = e.chainId), (0, o.isHexString)(r) && (r = i.O$.from(r).toNumber()), "number" != typeof r && null != t.v && ((r = (t.v - 35) / 2) < 0 && (r = 0), r = parseInt(r)), "number" != typeof r && (r = 0), t.chainId = r
          }
          return t.blockHash && "x" === t.blockHash.replace(/0/g, "") && (t.blockHash = null), t
        }
        transaction(e) {
          return (0, a.parse)(e)
        }
        receiptLog(e) {
          return h.check(this.formats.receiptLog, e)
        }
        receipt(e) {
          let t = h.check(this.formats.receipt, e);
          if (null != t.root) {
            if (t.root.length <= 4) {
              let e = i.O$.from(t.root).toNumber();
              0 === e || 1 === e ? (null != t.status && t.status !== e && c.throwArgumentError("alt-root-status/status mismatch", "value", {
                root: t.root,
                status: t.status
              }), t.status = e, delete t.root) : c.throwArgumentError("invalid alt-root-status", "value.root", t.root)
            } else 66 !== t.root.length && c.throwArgumentError("invalid root hash", "value.root", t.root)
          }
          return null != t.status && (t.byzantium = !0), t
        }
        topics(e) {
          return Array.isArray(e) ? e.map(e => this.topics(e)) : null != e ? this.hash(e, !0) : null
        }
        filter(e) {
          return h.check(this.formats.filter, e)
        }
        filterLog(e) {
          return h.check(this.formats.filterLog, e)
        }
        static check(e, t) {
          let r = {};
          for (let n in e) try {
            let i = e[n](t[n]);
            void 0 !== i && (r[n] = i)
          } catch (e) {
            throw e.checkKey = n, e.checkValue = t[n], e
          }
          return r
        }
        static allowNull(e, t) {
          return function (r) {
            return null == r ? t : e(r)
          }
        }
        static allowFalsish(e, t) {
          return function (r) {
            return r ? e(r) : t
          }
        }
        static arrayOf(e) {
          return function (t) {
            if (!Array.isArray(t)) throw Error("not an array");
            let r = [];
            return t.forEach(function (t) {
              r.push(e(t))
            }), r
          }
        }
      }

      function f(e) {
        return e && "function" == typeof e.isCommunityResource && e.isCommunityResource()
      }
      let d = !1;

      function p() {
        d || (d = !0, console.log("========= NOTICE ========="), console.log("Request-Rate Exceeded  (this message will not be repeated)"), console.log(""), console.log("The default API keys for each service are provided as a highly-throttled,"), console.log("community resource for low-traffic projects and early prototyping."), console.log(""), console.log("While your application will continue to function, we highly recommended"), console.log("signing up for your own API keys to improve performance, increase your"), console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."), console.log(""), console.log("For more details: https://docs.ethers.io/api-keys/"), console.log("=========================="))
      }
    },
    82169: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return P
        }
      });
      var n = r(48088),
        i = r(2593),
        o = r(16441),
        s = r(67827),
        a = r(6881),
        u = r(29251),
        l = r(83875),
        c = r(37707),
        h = r(1581),
        f = r(34216),
        d = r(57408),
        p = function (e, t, r, n) {
          return new(r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function a(e) {
              try {
                u(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function u(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
          })
        };
      let g = new h.Logger(f.i),
        m = ["call", "estimateGas"];

      function y(e, t) {
        if (null == e) return null;
        if ("string" == typeof e.message && e.message.match("reverted")) {
          let r = (0, o.isHexString)(e.data) ? e.data : null;
          if (!t || r) return {
            message: e.message,
            data: r
          }
        }
        if ("object" == typeof e) {
          for (let r in e) {
            let n = y(e[r], t);
            if (n) return n
          }
          return null
        }
        if ("string" == typeof e) try {
          return y(JSON.parse(e), t)
        } catch (e) {}
        return null
      }

      function v(e, t, r) {
        let n = r.transaction || r.signedTransaction;
        if ("call" === e) {
          let e = y(t, !0);
          if (e) return e.data;
          g.throwError("missing revert data in call exception; Transaction reverted without a reason string", h.Logger.errors.CALL_EXCEPTION, {
            data: "0x",
            transaction: n,
            error: t
          })
        }
        if ("estimateGas" === e) {
          let r = y(t.body, !1);
          null == r && (r = y(t, !1)), r && g.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
            reason: r.message,
            method: e,
            transaction: n,
            error: t
          })
        }
        let i = t.message;
        throw t.code === h.Logger.errors.SERVER_ERROR && t.error && "string" == typeof t.error.message ? i = t.error.message : "string" == typeof t.body ? i = t.body : "string" == typeof t.responseText && (i = t.responseText), (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && g.throwError("insufficient funds for intrinsic transaction cost", h.Logger.errors.INSUFFICIENT_FUNDS, {
          error: t,
          method: e,
          transaction: n
        }), i.match(/nonce (is )?too low/i) && g.throwError("nonce has already been used", h.Logger.errors.NONCE_EXPIRED, {
          error: t,
          method: e,
          transaction: n
        }), i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && g.throwError("replacement fee too low", h.Logger.errors.REPLACEMENT_UNDERPRICED, {
          error: t,
          method: e,
          transaction: n
        }), i.match(/only replay-protected/i) && g.throwError("legacy pre-eip-155 transactions not supported", h.Logger.errors.UNSUPPORTED_OPERATION, {
          error: t,
          method: e,
          transaction: n
        }), m.indexOf(e) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && g.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", h.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
          error: t,
          method: e,
          transaction: n
        }), t
      }

      function b(e) {
        return new Promise(function (t) {
          setTimeout(t, e)
        })
      }

      function w(e) {
        if (e.error) {
          let t = Error(e.error.message);
          throw t.code = e.error.code, t.data = e.error.data, t
        }
        return e.result
      }

      function A(e) {
        return e ? e.toLowerCase() : e
      }
      let E = {};
      class S extends n.E {
        constructor(e, t, r) {
          if (super(), e !== E) throw Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
          (0, a.defineReadOnly)(this, "provider", t), null == r && (r = 0), "string" == typeof r ? ((0, a.defineReadOnly)(this, "_address", this.provider.formatter.address(r)), (0, a.defineReadOnly)(this, "_index", null)) : "number" == typeof r ? ((0, a.defineReadOnly)(this, "_index", r), (0, a.defineReadOnly)(this, "_address", null)) : g.throwArgumentError("invalid address or index", "addressOrIndex", r)
        }
        connect(e) {
          return g.throwError("cannot alter JSON-RPC Signer connection", h.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "connect"
          })
        }
        connectUnchecked() {
          return new x(E, this.provider, this._address || this._index)
        }
        getAddress() {
          return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(e => (e.length <= this._index && g.throwError("unknown account #" + this._index, h.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "getAddress"
          }), this.provider.formatter.address(e[this._index])))
        }
        sendUncheckedTransaction(e) {
          e = (0, a.shallowCopy)(e);
          let t = this.getAddress().then(e => (e && (e = e.toLowerCase()), e));
          if (null == e.gasLimit) {
            let r = (0, a.shallowCopy)(e);
            r.from = t, e.gasLimit = this.provider.estimateGas(r)
          }
          return null != e.to && (e.to = Promise.resolve(e.to).then(e => p(this, void 0, void 0, function* () {
            if (null == e) return null;
            let t = yield this.provider.resolveName(e);
            return null == t && g.throwArgumentError("provided ENS name resolves to null", "tx.to", e), t
          }))), (0, a.resolveProperties)({
            tx: (0, a.resolveProperties)(e),
            sender: t
          }).then(({
            tx: t,
            sender: r
          }) => {
            null != t.from ? t.from.toLowerCase() !== r && g.throwArgumentError("from address mismatch", "transaction", e) : t.from = r;
            let n = this.provider.constructor.hexlifyTransaction(t, {
              from: !0
            });
            return this.provider.send("eth_sendTransaction", [n]).then(e => e, e => ("string" == typeof e.message && e.message.match(/user denied/i) && g.throwError("user rejected transaction", h.Logger.errors.ACTION_REJECTED, {
              action: "sendTransaction",
              transaction: t
            }), v("sendTransaction", e, n)))
          })
        }
        signTransaction(e) {
          return g.throwError("signing transactions is unsupported", h.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "signTransaction"
          })
        }
        sendTransaction(e) {
          return p(this, void 0, void 0, function* () {
            let t = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval), r = yield this.sendUncheckedTransaction(e);
            try {
              return yield(0, c.poll)(() => p(this, void 0, void 0, function* () {
                let e = yield this.provider.getTransaction(r);
                if (null !== e) return this.provider._wrapTransaction(e, r, t)
              }), {
                oncePoll: this.provider
              })
            } catch (e) {
              throw e.transactionHash = r, e
            }
          })
        }
        signMessage(e) {
          return p(this, void 0, void 0, function* () {
            let t = "string" == typeof e ? (0, u.Y0)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [(0, o.hexlify)(t), r.toLowerCase()])
            } catch (t) {
              throw "string" == typeof t.message && t.message.match(/user denied/i) && g.throwError("user rejected signing", h.Logger.errors.ACTION_REJECTED, {
                action: "signMessage",
                from: r,
                messageData: e
              }), t
            }
          })
        }
        _legacySignMessage(e) {
          return p(this, void 0, void 0, function* () {
            let t = "string" == typeof e ? (0, u.Y0)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [r.toLowerCase(), (0, o.hexlify)(t)])
            } catch (t) {
              throw "string" == typeof t.message && t.message.match(/user denied/i) && g.throwError("user rejected signing", h.Logger.errors.ACTION_REJECTED, {
                action: "_legacySignMessage",
                from: r,
                messageData: e
              }), t
            }
          })
        }
        _signTypedData(e, t, r) {
          return p(this, void 0, void 0, function* () {
            let n = yield s.E.resolveNames(e, t, r, e => this.provider.resolveName(e)), i = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(s.E.getPayload(n.domain, t, n.value))])
            } catch (e) {
              throw "string" == typeof e.message && e.message.match(/user denied/i) && g.throwError("user rejected signing", h.Logger.errors.ACTION_REJECTED, {
                action: "_signTypedData",
                from: i,
                messageData: {
                  domain: n.domain,
                  types: t,
                  value: n.value
                }
              }), e
            }
          })
        }
        unlock(e) {
          return p(this, void 0, void 0, function* () {
            let t = this.provider,
              r = yield this.getAddress();
            return t.send("personal_unlockAccount", [r.toLowerCase(), e, null])
          })
        }
      }
      class x extends S {
        sendTransaction(e) {
          return this.sendUncheckedTransaction(e).then(e => ({
            hash: e,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: t => this.provider.waitForTransaction(e, t)
          }))
        }
      }
      let k = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0
      };
      class P extends d.Zk {
        constructor(e, t) {
          let r = t;
          null == r && (r = new Promise((e, t) => {
            setTimeout(() => {
              this.detectNetwork().then(t => {
                e(t)
              }, e => {
                t(e)
              })
            }, 0)
          })), super(r), e || (e = (0, a.getStatic)(this.constructor, "defaultUrl")()), "string" == typeof e ? (0, a.defineReadOnly)(this, "connection", Object.freeze({
            url: e
          })) : (0, a.defineReadOnly)(this, "connection", Object.freeze((0, a.shallowCopy)(e))), this._nextId = 42
        }
        get _cache() {
          return null == this._eventLoopCache && (this._eventLoopCache = {}), this._eventLoopCache
        }
        static defaultUrl() {
          return "http://localhost:8545"
        }
        detectNetwork() {
          return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(), setTimeout(() => {
            this._cache.detectNetwork = null
          }, 0)), this._cache.detectNetwork
        }
        _uncachedDetectNetwork() {
          return p(this, void 0, void 0, function* () {
            yield b(0);
            let e = null;
            try {
              e = yield this.send("eth_chainId", [])
            } catch (t) {
              try {
                e = yield this.send("net_version", [])
              } catch (e) {}
            }
            if (null != e) {
              let t = (0, a.getStatic)(this.constructor, "getNetwork");
              try {
                return t(i.O$.from(e).toNumber())
              } catch (t) {
                return g.throwError("could not detect network", h.Logger.errors.NETWORK_ERROR, {
                  chainId: e,
                  event: "invalidNetwork",
                  serverError: t
                })
              }
            }
            return g.throwError("could not detect network", h.Logger.errors.NETWORK_ERROR, {
              event: "noNetwork"
            })
          })
        }
        getSigner(e) {
          return new S(E, this, e)
        }
        getUncheckedSigner(e) {
          return this.getSigner(e).connectUnchecked()
        }
        listAccounts() {
          return this.send("eth_accounts", []).then(e => e.map(e => this.formatter.address(e)))
        }
        send(e, t) {
          let r = {
            method: e,
            params: t,
            id: this._nextId++,
            jsonrpc: "2.0"
          };
          this.emit("debug", {
            action: "request",
            request: (0, a.deepCopy)(r),
            provider: this
          });
          let n = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
          if (n && this._cache[e]) return this._cache[e];
          let i = (0, c.fetchJson)(this.connection, JSON.stringify(r), w).then(e => (this.emit("debug", {
            action: "response",
            request: r,
            response: e,
            provider: this
          }), e), e => {
            throw this.emit("debug", {
              action: "response",
              error: e,
              request: r,
              provider: this
            }), e
          });
          return n && (this._cache[e] = i, setTimeout(() => {
            this._cache[e] = null
          }, 0)), i
        }
        prepareRequest(e, t) {
          switch (e) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [A(t.address), t.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [A(t.address), t.blockTag]];
            case "getCode":
              return ["eth_getCode", [A(t.address), t.blockTag]];
            case "getStorageAt":
              return ["eth_getStorageAt", [A(t.address), (0, o.hexZeroPad)(t.position, 32), t.blockTag]];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [t.signedTransaction]];
            case "getBlock":
              if (t.blockTag) return ["eth_getBlockByNumber", [t.blockTag, !!t.includeTransactions]];
              if (t.blockHash) return ["eth_getBlockByHash", [t.blockHash, !!t.includeTransactions]];
              break;
            case "getTransaction":
              return ["eth_getTransactionByHash", [t.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [t.transactionHash]];
            case "call": {
              let e = (0, a.getStatic)(this.constructor, "hexlifyTransaction");
              return ["eth_call", [e(t.transaction, {
                from: !0
              }), t.blockTag]]
            }
            case "estimateGas": {
              let e = (0, a.getStatic)(this.constructor, "hexlifyTransaction");
              return ["eth_estimateGas", [e(t.transaction, {
                from: !0
              })]]
            }
            case "getLogs":
              return t.filter && null != t.filter.address && (t.filter.address = A(t.filter.address)), ["eth_getLogs", [t.filter]]
          }
          return null
        }
        perform(e, t) {
          return p(this, void 0, void 0, function* () {
            if ("call" === e || "estimateGas" === e) {
              let e = t.transaction;
              if (e && null != e.type && i.O$.from(e.type).isZero() && null == e.maxFeePerGas && null == e.maxPriorityFeePerGas) {
                let r = yield this.getFeeData();
                null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((t = (0, a.shallowCopy)(t)).transaction = (0, a.shallowCopy)(e), delete t.transaction.type)
              }
            }
            let r = this.prepareRequest(e, t);
            null == r && g.throwError(e + " not implemented", h.Logger.errors.NOT_IMPLEMENTED, {
              operation: e
            });
            try {
              return yield this.send(r[0], r[1])
            } catch (r) {
              return v(e, r, t)
            }
          })
        }
        _startEvent(e) {
          "pending" === e.tag && this._startPending(), super._startEvent(e)
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          let e = this,
            t = this.send("eth_newPendingTransactionFilter", []);
          this._pendingFilter = t, t.then(function (r) {
            return function n() {
              e.send("eth_getFilterChanges", [r]).then(function (r) {
                if (e._pendingFilter != t) return null;
                let n = Promise.resolve();
                return r.forEach(function (t) {
                  e._emitted["t:" + t.toLowerCase()] = "pending", n = n.then(function () {
                    return e.getTransaction(t).then(function (t) {
                      return e.emit("pending", t), null
                    })
                  })
                }), n.then(function () {
                  return b(1e3)
                })
              }).then(function () {
                if (e._pendingFilter != t) {
                  e.send("eth_uninstallFilter", [r]);
                  return
                }
                return setTimeout(function () {
                  n()
                }, 0), null
              }).catch(e => {})
            }(), r
          }).catch(e => {})
        }
        _stopEvent(e) {
          "pending" === e.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null), super._stopEvent(e)
        }
        static hexlifyTransaction(e, t) {
          let r = (0, a.shallowCopy)(k);
          if (t)
            for (let e in t) t[e] && (r[e] = !0);
          (0, a.checkProperties)(e, r);
          let n = {};
          return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function (t) {
            if (null == e[t]) return;
            let r = (0, o.hexValue)(i.O$.from(e[t]));
            "gasLimit" === t && (t = "gas"), n[t] = r
          }), ["from", "to", "data"].forEach(function (t) {
            null != e[t] && (n[t] = (0, o.hexlify)(e[t]))
          }), e.accessList && (n.accessList = (0, l.accessListify)(e.accessList)), n
        }
      }
    },
    241: function (e, t, r) {
      "use strict";
      r.d(t, {
        Q: function () {
          return c
        }
      });
      var n = r(6881),
        i = r(1581),
        o = r(34216),
        s = r(82169);
      let a = new i.Logger(o.i),
        u = 1;

      function l(e, t) {
        let r = "Web3LegacyFetcher";
        return function (e, i) {
          let o = {
            method: e,
            params: i,
            id: u++,
            jsonrpc: "2.0"
          };
          return new Promise((e, i) => {
            this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, n.deepCopy)(o),
              provider: this
            }), t(o, (t, n) => {
              if (t) return this.emit("debug", {
                action: "response",
                fetcher: r,
                error: t,
                request: o,
                provider: this
              }), i(t);
              if (this.emit("debug", {
                  action: "response",
                  fetcher: r,
                  request: o,
                  response: n,
                  provider: this
                }), n.error) {
                let e = Error(n.error.message);
                return e.code = n.error.code, e.data = n.error.data, i(e)
              }
              e(n.result)
            })
          })
        }
      }
      class c extends s.r {
        constructor(e, t) {
          null == e && a.throwArgumentError("missing provider", "provider", e);
          let r = null,
            i = null,
            o = null;
          "function" == typeof e ? (r = "unknown:", i = e) : (((r = e.host || e.path || "") || !e.isMetaMask || (r = "metamask"), o = e, e.request) ? ("" === r && (r = "eip-1193:"), i = function (t, r) {
            null == r && (r = []);
            let i = {
              method: t,
              params: r
            };
            return this.emit("debug", {
              action: "request",
              fetcher: "Eip1193Fetcher",
              request: (0, n.deepCopy)(i),
              provider: this
            }), e.request(i).then(e => (this.emit("debug", {
              action: "response",
              fetcher: "Eip1193Fetcher",
              request: i,
              response: e,
              provider: this
            }), e), e => {
              throw this.emit("debug", {
                action: "response",
                fetcher: "Eip1193Fetcher",
                request: i,
                error: e,
                provider: this
              }), e
            })
          }) : e.sendAsync ? i = l(e, e.sendAsync.bind(e)) : e.send ? i = l(e, e.send.bind(e)) : a.throwArgumentError("unsupported provider", "provider", e), r || (r = "unknown:")), super(r, t), (0, n.defineReadOnly)(this, "jsonRpcFetchFunc", i), (0, n.defineReadOnly)(this, "provider", o)
        }
        send(e, t) {
          return this.jsonRpcFetchFunc(e, t)
        }
      }
    },
    22118: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        randomBytes: function () {
          return n.O
        },
        shuffled: function () {
          return i.y
        }
      });
      var n = r(5634),
        i = r(52472)
    },
    5634: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return u
        }
      });
      var n = r(16441),
        i = r(1581);
      let o = new i.Logger("random/5.7.0"),
        s = function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== r.g) return r.g;
          throw Error("unable to locate global object")
        }(),
        a = s.crypto || s.msCrypto;

      function u(e) {
        (e <= 0 || e > 1024 || e % 1 || e != e) && o.throwArgumentError("invalid length", "length", e);
        let t = new Uint8Array(e);
        return a.getRandomValues(t), (0, n.arrayify)(t)
      }
      a && a.getRandomValues || (o.warn("WARNING: Missing strong random number source"), a = {
        getRandomValues: function (e) {
          return o.throwError("no secure random source avaialble", i.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "crypto.getRandomValues"
          })
        }
      })
    },
    52472: function (e, t, r) {
      "use strict";

      function n(e) {
        e = e.slice();
        for (let t = e.length - 1; t > 0; t--) {
          let r = Math.floor(Math.random() * (t + 1)),
            n = e[t];
          e[t] = e[r], e[r] = n
        }
        return e
      }
      r.d(t, {
        y: function () {
          return n
        }
      })
    },
    59052: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        decode: function () {
          return h
        },
        encode: function () {
          return u
        }
      });
      var n = r(16441),
        i = r(1581);
      let o = new i.Logger("rlp/5.7.0");

      function s(e) {
        let t = [];
        for (; e;) t.unshift(255 & e), e >>= 8;
        return t
      }

      function a(e, t, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
        return n
      }

      function u(e) {
        return (0, n.hexlify)(function e(t) {
          if (Array.isArray(t)) {
            let r = [];
            if (t.forEach(function (t) {
                r = r.concat(e(t))
              }), r.length <= 55) return r.unshift(192 + r.length), r;
            let n = s(r.length);
            return n.unshift(247 + n.length), n.concat(r)
          }(0, n.isBytesLike)(t) || o.throwArgumentError("RLP object must be BytesLike", "object", t);
          let r = Array.prototype.slice.call((0, n.arrayify)(t));
          if (1 === r.length && r[0] <= 127) return r;
          if (r.length <= 55) return r.unshift(128 + r.length), r;
          let i = s(r.length);
          return i.unshift(183 + i.length), i.concat(r)
        }(e))
      }

      function l(e, t, r, n) {
        let s = [];
        for (; r < t + 1 + n;) {
          let a = c(e, r);
          s.push(a.result), (r += a.consumed) > t + 1 + n && o.throwError("child data too short", i.Logger.errors.BUFFER_OVERRUN, {})
        }
        return {
          consumed: 1 + n,
          result: s
        }
      }

      function c(e, t) {
        if (0 === e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}), e[t] >= 248) {
          let r = e[t] - 247;
          t + 1 + r > e.length && o.throwError("data short segment too short", i.Logger.errors.BUFFER_OVERRUN, {});
          let n = a(e, t + 1, r);
          return t + 1 + r + n > e.length && o.throwError("data long segment too short", i.Logger.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1 + r, r + n)
        }
        if (e[t] >= 192) {
          let r = e[t] - 192;
          return t + 1 + r > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {}), l(e, t, t + 1, r)
        }
        if (e[t] >= 184) {
          let r = e[t] - 183;
          t + 1 + r > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
          let s = a(e, t + 1, r);
          t + 1 + r + s > e.length && o.throwError("data array too short", i.Logger.errors.BUFFER_OVERRUN, {});
          let u = (0, n.hexlify)(e.slice(t + 1 + r, t + 1 + r + s));
          return {
            consumed: 1 + r + s,
            result: u
          }
        }
        if (e[t] >= 128) {
          let r = e[t] - 128;
          t + 1 + r > e.length && o.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          let s = (0, n.hexlify)(e.slice(t + 1, t + 1 + r));
          return {
            consumed: 1 + r,
            result: s
          }
        }
        return {
          consumed: 1,
          result: (0, n.hexlify)(e[t])
        }
      }

      function h(e) {
        let t = (0, n.arrayify)(e),
          r = c(t, 0);
        return r.consumed !== t.length && o.throwArgumentError("invalid rlp data", "data", e), r.result
      }
    },
    91278: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        SupportedAlgorithm: function () {
          return i.p
        },
        computeHmac: function () {
          return n.Gy
        },
        ripemd160: function () {
          return n.bP
        },
        sha256: function () {
          return n.JQ
        },
        sha512: function () {
          return n.o
        }
      });
      var n = r(2006),
        i = r(21261)
    },
    2006: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gy: function () {
          return f
        },
        bP: function () {
          return l
        },
        JQ: function () {
          return c
        },
        o: function () {
          return h
        }
      });
      var n = r(33715),
        i = r.n(n),
        o = r(16441),
        s = r(21261),
        a = r(1581);
      let u = new a.Logger("sha2/5.7.0");

      function l(e) {
        return "0x" + i().ripemd160().update((0, o.arrayify)(e)).digest("hex")
      }

      function c(e) {
        return "0x" + i().sha256().update((0, o.arrayify)(e)).digest("hex")
      }

      function h(e) {
        return "0x" + i().sha512().update((0, o.arrayify)(e)).digest("hex")
      }

      function f(e, t, r) {
        return s.p[e] || u.throwError("unsupported algorithm " + e, a.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "hmac",
          algorithm: e
        }), "0x" + i().hmac(i()[e], (0, o.arrayify)(t)).update((0, o.arrayify)(r)).digest("hex")
      }
    },
    21261: function (e, t, r) {
      "use strict";
      var n, i;
      r.d(t, {
        p: function () {
          return n
        }
      }), (i = n || (n = {})).sha256 = "sha256", i.sha512 = "sha512"
    },
    67669: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        SigningKey: function () {
          return G
        },
        computePublicKey: function () {
          return K
        },
        recoverPublicKey: function () {
          return q
        }
      });
      var n = r(13550),
        i = r.n(n),
        o = r(33715),
        s = r.n(o);

      function a(e, t, r) {
        return e(r = {
          path: t,
          exports: {},
          require: function (e, t) {
            return function () {
              throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(e, null == t ? r.path : t)
          }
        }, r.exports), r.exports
      }
      "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
      var u = l;

      function l(e, t) {
        if (!e) throw Error(t || "Assertion failed")
      }
      l.equal = function (e, t, r) {
        if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
      };
      var c = a(function (e, t) {
          var r = t;

          function n(e) {
            return 1 === e.length ? "0" + e : e
          }

          function i(e) {
            for (var t = "", r = 0; r < e.length; r++) t += n(e[r].toString(16));
            return t
          }
          r.toArray = function (e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var r = [];
            if ("string" != typeof e) {
              for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
              return r
            }
            if ("hex" === t) {
              (e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e);
              for (var n = 0; n < e.length; n += 2) r.push(parseInt(e[n] + e[n + 1], 16))
            } else
              for (var n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n),
                  o = i >> 8,
                  s = 255 & i;
                o ? r.push(o, s) : r.push(s)
              }
            return r
          }, r.zero2 = n, r.toHex = i, r.encode = function (e, t) {
            return "hex" === t ? i(e) : e
          }
        }),
        h = a(function (e, t) {
          var r = t;
          r.assert = u, r.toArray = c.toArray, r.zero2 = c.zero2, r.toHex = c.toHex, r.encode = c.encode, r.getNAF = function (e, t, r) {
            var n = Array(Math.max(e.bitLength(), r) + 1);
            n.fill(0);
            for (var i = 1 << t + 1, o = e.clone(), s = 0; s < n.length; s++) {
              var a, u = o.andln(i - 1);
              o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1)
            }
            return n
          }, r.getJSF = function (e, t) {
            var r = [
              [],
              []
            ];
            e = e.clone(), t = t.clone();
            for (var n = 0, i = 0; e.cmpn(-n) > 0 || t.cmpn(-i) > 0;) {
              var o, s, a, u = e.andln(3) + n & 3,
                l = t.andln(3) + i & 3;
              3 === u && (u = -1), 3 === l && (l = -1), s = (1 & u) == 0 ? 0 : (3 == (o = e.andln(7) + n & 7) || 5 === o) && 2 === l ? -u : u, r[0].push(s), a = (1 & l) == 0 ? 0 : (3 == (o = t.andln(7) + i & 7) || 5 === o) && 2 === u ? -l : l, r[1].push(a), 2 * n === s + 1 && (n = 1 - n), 2 * i === a + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
            }
            return r
          }, r.cachedProperty = function (e, t, r) {
            var n = "_" + t;
            e.prototype[t] = function () {
              return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
            }
          }, r.parseBytes = function (e) {
            return "string" == typeof e ? r.toArray(e, "hex") : e
          }, r.intFromLE = function (e) {
            return new(i())(e, "hex", "le")
          }
        }),
        f = h.getNAF,
        d = h.getJSF,
        p = h.assert;

      function g(e, t) {
        this.type = e, this.p = new(i())(t.p, 16), this.red = t.prime ? i().red(t.prime) : i().mont(this.p), this.zero = new(i())(0).toRed(this.red), this.one = new(i())(1).toRed(this.red), this.two = new(i())(2).toRed(this.red), this.n = t.n && new(i())(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
      }

      function m(e, t) {
        this.curve = e, this.type = t, this.precomputed = null
      }
      g.prototype.point = function () {
        throw Error("Not implemented")
      }, g.prototype.validate = function () {
        throw Error("Not implemented")
      }, g.prototype._fixedNafMul = function (e, t) {
        p(e.precomputed);
        var r, n, i = e._getDoubles(),
          o = f(t, 1, this._bitLength),
          s = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
        s /= 3;
        var a = [];
        for (r = 0; r < o.length; r += i.step) {
          n = 0;
          for (var u = r + i.step - 1; u >= r; u--) n = (n << 1) + o[u];
          a.push(n)
        }
        for (var l = this.jpoint(null, null, null), c = this.jpoint(null, null, null), h = s; h > 0; h--) {
          for (r = 0; r < a.length; r++)(n = a[r]) === h ? c = c.mixedAdd(i.points[r]) : n === -h && (c = c.mixedAdd(i.points[r].neg()));
          l = l.add(c)
        }
        return l.toP()
      }, g.prototype._wnafMul = function (e, t) {
        var r = 4,
          n = e._getNAFPoints(r);
        r = n.wnd;
        for (var i = n.points, o = f(t, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
          for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
          if (a >= 0 && u++, s = s.dblp(u), a < 0) break;
          var l = o[a];
          p(0 !== l), s = "affine" === e.type ? l > 0 ? s.mixedAdd(i[l - 1 >> 1]) : s.mixedAdd(i[-l - 1 >> 1].neg()) : l > 0 ? s.add(i[l - 1 >> 1]) : s.add(i[-l - 1 >> 1].neg())
        }
        return "affine" === e.type ? s.toP() : s
      }, g.prototype._wnafMulAdd = function (e, t, r, n, i) {
        var o, s, a, u = this._wnafT1,
          l = this._wnafT2,
          c = this._wnafT3,
          h = 0;
        for (o = 0; o < n; o++) {
          var p = (a = t[o])._getNAFPoints(e);
          u[o] = p.wnd, l[o] = p.points
        }
        for (o = n - 1; o >= 1; o -= 2) {
          var g = o - 1,
            m = o;
          if (1 !== u[g] || 1 !== u[m]) {
            c[g] = f(r[g], u[g], this._bitLength), c[m] = f(r[m], u[m], this._bitLength), h = Math.max(c[g].length, h), h = Math.max(c[m].length, h);
            continue
          }
          var y = [t[g], null, null, t[m]];
          0 === t[g].y.cmp(t[m].y) ? (y[1] = t[g].add(t[m]), y[2] = t[g].toJ().mixedAdd(t[m].neg())) : 0 === t[g].y.cmp(t[m].y.redNeg()) ? (y[1] = t[g].toJ().mixedAdd(t[m]), y[2] = t[g].add(t[m].neg())) : (y[1] = t[g].toJ().mixedAdd(t[m]), y[2] = t[g].toJ().mixedAdd(t[m].neg()));
          var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
            b = d(r[g], r[m]);
          for (s = 0, h = Math.max(b[0].length, h), c[g] = Array(h), c[m] = Array(h); s < h; s++) {
            var w = 0 | b[0][s],
              A = 0 | b[1][s];
            c[g][s] = v[(w + 1) * 3 + (A + 1)], c[m][s] = 0, l[g] = y
          }
        }
        var E = this.jpoint(null, null, null),
          S = this._wnafT4;
        for (o = h; o >= 0; o--) {
          for (var x = 0; o >= 0;) {
            var k = !0;
            for (s = 0; s < n; s++) S[s] = 0 | c[s][o], 0 !== S[s] && (k = !1);
            if (!k) break;
            x++, o--
          }
          if (o >= 0 && x++, E = E.dblp(x), o < 0) break;
          for (s = 0; s < n; s++) {
            var P = S[s];
            0 !== P && (P > 0 ? a = l[s][P - 1 >> 1] : P < 0 && (a = l[s][-P - 1 >> 1].neg()), E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
          }
        }
        for (o = 0; o < n; o++) l[o] = null;
        return i ? E : E.toP()
      }, g.BasePoint = m, m.prototype.eq = function () {
        throw Error("Not implemented")
      }, m.prototype.validate = function () {
        return this.curve.validate(this)
      }, g.prototype.decodePoint = function (e, t) {
        e = h.toArray(e, t);
        var r = this.p.byteLength();
        if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * r) return 6 === e[0] ? p(e[e.length - 1] % 2 == 0) : 7 === e[0] && p(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
        if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r) return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
        throw Error("Unknown point format")
      }, m.prototype.encodeCompressed = function (e) {
        return this.encode(e, !0)
      }, m.prototype._encode = function (e) {
        var t = this.curve.p.byteLength(),
          r = this.getX().toArray("be", t);
        return e ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", t))
      }, m.prototype.encode = function (e, t) {
        return h.encode(this._encode(t), e)
      }, m.prototype.precompute = function (e) {
        if (this.precomputed) return this;
        var t = {
          doubles: null,
          naf: null,
          beta: null
        };
        return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
      }, m.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;
        var t = this.precomputed.doubles;
        return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
      }, m.prototype._getDoubles = function (e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var r = [this], n = this, i = 0; i < t; i += e) {
          for (var o = 0; o < e; o++) n = n.dbl();
          r.push(n)
        }
        return {
          step: e,
          points: r
        }
      }, m.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var t = [this], r = (1 << e) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) t[i] = t[i - 1].add(n);
        return {
          wnd: e,
          points: t
        }
      }, m.prototype._getBeta = function () {
        return null
      }, m.prototype.dblp = function (e) {
        for (var t = this, r = 0; r < e; r++) t = t.dbl();
        return t
      };
      var y = a(function (e) {
          "function" == typeof Object.create ? e.exports = function (e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }))
          } : e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var r = function () {};
              r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
          }
        }),
        v = h.assert;

      function b(e) {
        g.call(this, "short", e), this.a = new(i())(e.a, 16).toRed(this.red), this.b = new(i())(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ]
      }

      function w(e, t, r, n) {
        g.BasePoint.call(this, e, "affine"), null === t && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new(i())(t, 16), this.y = new(i())(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
      }

      function A(e, t, r, n) {
        g.BasePoint.call(this, e, "jacobian"), null === t && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new(i())(0)) : (this.x = new(i())(t, 16), this.y = new(i())(r, 16), this.z = new(i())(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
      }
      y(b, g), b.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          if (e.beta) t = new(i())(e.beta, 16).toRed(this.red);
          else {
            var t, r, n, o = this._getEndoRoots(this.p);
            t = (t = 0 > o[0].cmp(o[1]) ? o[0] : o[1]).toRed(this.red)
          }
          if (e.lambda) r = new(i())(e.lambda, 16);
          else {
            var s = this._getEndoRoots(this.n);
            0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t)) ? r = s[0] : (r = s[1], v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))))
          }
          return n = e.basis ? e.basis.map(function (e) {
            return {
              a: new(i())(e.a, 16),
              b: new(i())(e.b, 16)
            }
          }) : this._getEndoBasis(r), {
            beta: t,
            lambda: r,
            basis: n
          }
        }
      }, b.prototype._getEndoRoots = function (e) {
        var t = e === this.p ? this.red : i().mont(e),
          r = new(i())(2).toRed(t).redInvm(),
          n = r.redNeg(),
          o = new(i())(3).toRed(t).redNeg().redSqrt().redMul(r);
        return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()]
      }, b.prototype._getEndoBasis = function (e) {
        for (var t, r, n, o, s, a, u, l, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = e, d = this.n.clone(), p = new(i())(1), g = new(i())(0), m = new(i())(0), y = new(i())(1), v = 0; 0 !== f.cmpn(0);) {
          var b = d.div(f);
          l = d.sub(b.mul(f)), c = m.sub(b.mul(p));
          var w = y.sub(b.mul(g));
          if (!n && 0 > l.cmp(h)) t = u.neg(), r = p, n = l.neg(), o = c;
          else if (n && 2 == ++v) break;
          u = l, d = f, f = l, m = p, p = c, y = g, g = w
        }
        s = l.neg(), a = c;
        var A = n.sqr().add(o.sqr());
        return s.sqr().add(a.sqr()).cmp(A) >= 0 && (s = t, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
          a: n,
          b: o
        }, {
          a: s,
          b: a
        }]
      }, b.prototype._endoSplit = function (e) {
        var t = this.endo.basis,
          r = t[0],
          n = t[1],
          i = n.b.mul(e).divRound(this.n),
          o = r.b.neg().mul(e).divRound(this.n),
          s = i.mul(r.a),
          a = o.mul(n.a),
          u = i.mul(r.b),
          l = o.mul(n.b);
        return {
          k1: e.sub(s).sub(a),
          k2: u.add(l).neg()
        }
      }, b.prototype.pointFromX = function (e, t) {
        (e = new(i())(e, 16)).red || (e = e.toRed(this.red));
        var r = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
          n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw Error("invalid point");
        var o = n.fromRed().isOdd();
        return (t && !o || !t && o) && (n = n.redNeg()), this.point(e, n)
      }, b.prototype.validate = function (e) {
        if (e.inf) return !0;
        var t = e.x,
          r = e.y,
          n = this.a.redMul(t),
          i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0)
      }, b.prototype._endoWnafMulAdd = function (e, t, r) {
        for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < e.length; o++) {
          var s = this._endoSplit(t[o]),
            a = e[o],
            u = a._getBeta();
          s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2
        }
        for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) n[c] = null, i[c] = null;
        return l
      }, y(w, g.BasePoint), b.prototype.point = function (e, t, r) {
        return new w(this, e, t, r)
      }, b.prototype.pointFromJSON = function (e, t) {
        return w.fromJSON(this, e, t)
      }, w.prototype._getBeta = function () {
        if (this.curve.endo) {
          var e = this.precomputed;
          if (e && e.beta) return e.beta;
          var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
          if (e) {
            var r = this.curve,
              n = function (e) {
                return r.point(e.x.redMul(r.endo.beta), e.y)
              };
            e.beta = t, t.precomputed = {
              beta: null,
              naf: e.naf && {
                wnd: e.naf.wnd,
                points: e.naf.points.map(n)
              },
              doubles: e.doubles && {
                step: e.doubles.step,
                points: e.doubles.points.map(n)
              }
            }
          }
          return t
        }
      }, w.prototype.toJSON = function () {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
          }
        }] : [this.x, this.y]
      }, w.fromJSON = function (e, t, r) {
        "string" == typeof t && (t = JSON.parse(t));
        var n = e.point(t[0], t[1], r);
        if (!t[2]) return n;

        function i(t) {
          return e.point(t[0], t[1], r)
        }
        var o = t[2];
        return n.precomputed = {
          beta: null,
          doubles: o.doubles && {
            step: o.doubles.step,
            points: [n].concat(o.doubles.points.map(i))
          },
          naf: o.naf && {
            wnd: o.naf.wnd,
            points: [n].concat(o.naf.points.map(i))
          }
        }, n
      }, w.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
      }, w.prototype.isInfinity = function () {
        return this.inf
      }, w.prototype.add = function (e) {
        if (this.inf) return e;
        if (e.inf) return this;
        if (this.eq(e)) return this.dbl();
        if (this.neg().eq(e) || 0 === this.x.cmp(e.x)) return this.curve.point(null, null);
        var t = this.y.redSub(e.y);
        0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
        var r = t.redSqr().redISub(this.x).redISub(e.x),
          n = t.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n)
      }, w.prototype.dbl = function () {
        if (this.inf) return this;
        var e = this.y.redAdd(this.y);
        if (0 === e.cmpn(0)) return this.curve.point(null, null);
        var t = this.curve.a,
          r = this.x.redSqr(),
          n = e.redInvm(),
          i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
          o = i.redSqr().redISub(this.x.redAdd(this.x)),
          s = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s)
      }, w.prototype.getX = function () {
        return this.x.fromRed()
      }, w.prototype.getY = function () {
        return this.y.fromRed()
      }, w.prototype.mul = function (e) {
        return (e = new(i())(e, 16), this.isInfinity()) ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
      }, w.prototype.mulAdd = function (e, t, r) {
        var n = [this, t],
          i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
      }, w.prototype.jmulAdd = function (e, t, r) {
        var n = [this, t],
          i = [e, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
      }, w.prototype.eq = function (e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
      }, w.prototype.neg = function (e) {
        if (this.inf) return this;
        var t = this.curve.point(this.x, this.y.redNeg());
        if (e && this.precomputed) {
          var r = this.precomputed,
            n = function (e) {
              return e.neg()
            };
          t.precomputed = {
            naf: r.naf && {
              wnd: r.naf.wnd,
              points: r.naf.points.map(n)
            },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(n)
            }
          }
        }
        return t
      }, w.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
      }, y(A, g.BasePoint), b.prototype.jpoint = function (e, t, r) {
        return new A(this, e, t, r)
      }, A.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var e = this.z.redInvm(),
          t = e.redSqr(),
          r = this.x.redMul(t),
          n = this.y.redMul(t).redMul(e);
        return this.curve.point(r, n)
      }, A.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
      }, A.prototype.add = function (e) {
        if (this.isInfinity()) return e;
        if (e.isInfinity()) return this;
        var t = e.z.redSqr(),
          r = this.z.redSqr(),
          n = this.x.redMul(t),
          i = e.x.redMul(r),
          o = this.y.redMul(t.redMul(e.z)),
          s = e.y.redMul(r.redMul(this.z)),
          a = n.redSub(i),
          u = o.redSub(s);
        if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var l = a.redSqr(),
          c = l.redMul(a),
          h = n.redMul(l),
          f = u.redSqr().redIAdd(c).redISub(h).redISub(h),
          d = u.redMul(h.redISub(f)).redISub(o.redMul(c)),
          p = this.z.redMul(e.z).redMul(a);
        return this.curve.jpoint(f, d, p)
      }, A.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();
        if (e.isInfinity()) return this;
        var t = this.z.redSqr(),
          r = this.x,
          n = e.x.redMul(t),
          i = this.y,
          o = e.y.redMul(t).redMul(this.z),
          s = r.redSub(n),
          a = i.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = s.redSqr(),
          l = u.redMul(s),
          c = r.redMul(u),
          h = a.redSqr().redIAdd(l).redISub(c).redISub(c),
          f = a.redMul(c.redISub(h)).redISub(i.redMul(l)),
          d = this.z.redMul(s);
        return this.curve.jpoint(h, f, d)
      }, A.prototype.dblp = function (e) {
        if (0 === e || this.isInfinity()) return this;
        if (!e) return this.dbl();
        if (this.curve.zeroA || this.curve.threeA) {
          var t, r = this;
          for (t = 0; t < e; t++) r = r.dbl();
          return r
        }
        var n = this.curve.a,
          i = this.curve.tinv,
          o = this.x,
          s = this.y,
          a = this.z,
          u = a.redSqr().redSqr(),
          l = s.redAdd(s);
        for (t = 0; t < e; t++) {
          var c = o.redSqr(),
            h = l.redSqr(),
            f = h.redSqr(),
            d = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(u)),
            p = o.redMul(h),
            g = d.redSqr().redISub(p.redAdd(p)),
            m = p.redISub(g),
            y = d.redMul(m);
          y = y.redIAdd(y).redISub(f);
          var v = l.redMul(a);
          t + 1 < e && (u = u.redMul(f)), o = g, a = v, l = y
        }
        return this.curve.jpoint(o, l.redMul(i), a)
      }, A.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
      }, A.prototype._zeroDbl = function () {
        if (this.zOne) {
          var e, t, r, n = this.x.redSqr(),
            i = this.y.redSqr(),
            o = i.redSqr(),
            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n),
            u = a.redSqr().redISub(s).redISub(s),
            l = o.redIAdd(o);
          l = (l = l.redIAdd(l)).redIAdd(l), e = u, t = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
        } else {
          var c = this.x.redSqr(),
            h = this.y.redSqr(),
            f = h.redSqr(),
            d = this.x.redAdd(h).redSqr().redISub(c).redISub(f);
          d = d.redIAdd(d);
          var p = c.redAdd(c).redIAdd(c),
            g = p.redSqr(),
            m = f.redIAdd(f);
          m = (m = m.redIAdd(m)).redIAdd(m), e = g.redISub(d).redISub(d), t = p.redMul(d.redISub(e)).redISub(m), r = (r = this.y.redMul(this.z)).redIAdd(r)
        }
        return this.curve.jpoint(e, t, r)
      }, A.prototype._threeDbl = function () {
        if (this.zOne) {
          var e, t, r, n = this.x.redSqr(),
            i = this.y.redSqr(),
            o = i.redSqr(),
            s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
            u = a.redSqr().redISub(s).redISub(s);
          e = u;
          var l = o.redIAdd(o);
          l = (l = l.redIAdd(l)).redIAdd(l), t = a.redMul(s.redISub(u)).redISub(l), r = this.y.redAdd(this.y)
        } else {
          var c = this.z.redSqr(),
            h = this.y.redSqr(),
            f = this.x.redMul(h),
            d = this.x.redSub(c).redMul(this.x.redAdd(c));
          d = d.redAdd(d).redIAdd(d);
          var p = f.redIAdd(f),
            g = (p = p.redIAdd(p)).redAdd(p);
          e = d.redSqr().redISub(g), r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c);
          var m = h.redSqr();
          m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m), t = d.redMul(p.redISub(e)).redISub(m)
        }
        return this.curve.jpoint(e, t, r)
      }, A.prototype._dbl = function () {
        var e = this.curve.a,
          t = this.x,
          r = this.y,
          n = this.z,
          i = n.redSqr().redSqr(),
          o = t.redSqr(),
          s = r.redSqr(),
          a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
          u = t.redAdd(t),
          l = (u = u.redIAdd(u)).redMul(s),
          c = a.redSqr().redISub(l.redAdd(l)),
          h = l.redISub(c),
          f = s.redSqr();
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = a.redMul(h).redISub(f),
          p = r.redAdd(r).redMul(n);
        return this.curve.jpoint(c, d, p)
      }, A.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var e = this.x.redSqr(),
          t = this.y.redSqr(),
          r = this.z.redSqr(),
          n = t.redSqr(),
          i = e.redAdd(e).redIAdd(e),
          o = i.redSqr(),
          s = this.x.redAdd(t).redSqr().redISub(e).redISub(n),
          a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
          u = n.redIAdd(n);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var l = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
          c = t.redMul(l);
        c = (c = c.redIAdd(c)).redIAdd(c);
        var h = this.x.redMul(a).redISub(c);
        h = (h = h.redIAdd(h)).redIAdd(h);
        var f = this.y.redMul(l.redMul(u.redISub(l)).redISub(s.redMul(a)));
        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
        var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
        return this.curve.jpoint(h, f, d)
      }, A.prototype.mul = function (e, t) {
        return e = new(i())(e, t), this.curve._wnafMul(this, e)
      }, A.prototype.eq = function (e) {
        if ("affine" === e.type) return this.eq(e.toJ());
        if (this === e) return !0;
        var t = this.z.redSqr(),
          r = e.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
        var n = t.redMul(this.z),
          i = r.redMul(e.z);
        return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0)
      }, A.prototype.eqXToP = function (e) {
        var t = this.z.redSqr(),
          r = e.toRed(this.curve.red).redMul(t);
        if (0 === this.x.cmp(r)) return !0;
        for (var n = e.clone(), i = this.curve.redN.redMul(t);;) {
          if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
          if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0
        }
      }, A.prototype.inspect = function () {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
      }, A.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0)
      };
      var E = a(function (e, t) {
          var r = t;
          r.base = g, r.short = b, r.mont = null, r.edwards = null
        }),
        S = a(function (e, t) {
          var r, n = t,
            i = h.assert;

          function o(e) {
            "short" === e.type ? this.curve = new E.short(e) : "edwards" === e.type ? this.curve = new E.edwards(e) : this.curve = new E.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
          }

          function a(e, t) {
            Object.defineProperty(n, e, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                var r = new o(t);
                return Object.defineProperty(n, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: r
                }), r
              }
            })
          }
          n.PresetCurve = o, a("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: s().sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
          }), a("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: s().sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
          }), a("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: s().sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
          }), a("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: s().sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
          }), a("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: s().sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
          }), a("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: s().sha256,
            gRed: !1,
            g: ["9"]
          }), a("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: s().sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
          });
          try {
            r = null.crash()
          } catch (e) {
            r = void 0
          }
          a("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: s().sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
              a: "3086d221a7d46bcde86c90e49284eb15",
              b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
              a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
              b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
          })
        });

      function x(e) {
        if (!(this instanceof x)) return new x(e);
        this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var t = c.toArray(e.entropy, e.entropyEnc || "hex"),
          r = c.toArray(e.nonce, e.nonceEnc || "hex"),
          n = c.toArray(e.pers, e.persEnc || "hex");
        u(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, n)
      }
      x.prototype._init = function (e, t, r) {
        var n = e.concat(t).concat(r);
        this.K = Array(this.outLen / 8), this.V = Array(this.outLen / 8);
        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
        this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656
      }, x.prototype._hmac = function () {
        return new(s()).hmac(this.hash, this.K)
      }, x.prototype._update = function (e) {
        var t = this._hmac().update(this.V).update([0]);
        e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
      }, x.prototype.reseed = function (e, t, r, n) {
        "string" != typeof t && (n = r, r = t, t = null), e = c.toArray(e, t), r = c.toArray(r, n), u(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(r || [])), this._reseed = 1
      }, x.prototype.generate = function (e, t, r, n) {
        if (this._reseed > this.reseedInterval) throw Error("Reseed is required");
        "string" != typeof t && (n = r, r = t, t = null), r && (r = c.toArray(r, n || "hex"), this._update(r));
        for (var i = []; i.length < e;) this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
        var o = i.slice(0, e);
        return this._update(r), this._reseed++, c.encode(o, t)
      };
      var k = h.assert;

      function P(e, t) {
        this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
      }
      P.fromPublic = function (e, t, r) {
        return t instanceof P ? t : new P(e, {
          pub: t,
          pubEnc: r
        })
      }, P.fromPrivate = function (e, t, r) {
        return t instanceof P ? t : new P(e, {
          priv: t,
          privEnc: r
        })
      }, P.prototype.validate = function () {
        var e = this.getPublic();
        return e.isInfinity() ? {
          result: !1,
          reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
          result: !0,
          reason: null
        } : {
          result: !1,
          reason: "Public key * N != O"
        } : {
          result: !1,
          reason: "Public key is not a point"
        }
      }, P.prototype.getPublic = function (e, t) {
        return ("string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t) ? this.pub.encode(t, e) : this.pub
      }, P.prototype.getPrivate = function (e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv
      }, P.prototype._importPrivate = function (e, t) {
        this.priv = new(i())(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
      }, P.prototype._importPublic = function (e, t) {
        if (e.x || e.y) {
          "mont" === this.ec.curve.type ? k(e.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && k(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
          return
        }
        this.pub = this.ec.curve.decodePoint(e, t)
      }, P.prototype.derive = function (e) {
        return e.validate() || k(e.validate(), "public point not validated"), e.mul(this.priv).getX()
      }, P.prototype.sign = function (e, t, r) {
        return this.ec.sign(e, this, t, r)
      }, P.prototype.verify = function (e, t) {
        return this.ec.verify(e, t, this)
      }, P.prototype.inspect = function () {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
      };
      var C = h.assert;

      function _(e, t) {
        if (e instanceof _) return e;
        this._importDER(e, t) || (C(e.r && e.s, "Signature without r or s"), this.r = new(i())(e.r, 16), this.s = new(i())(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
      }

      function M() {
        this.place = 0
      }

      function O(e, t) {
        var r = e[t.place++];
        if (!(128 & r)) return r;
        var n = 15 & r;
        if (0 === n || n > 4) return !1;
        for (var i = 0, o = 0, s = t.place; o < n; o++, s++) i <<= 8, i |= e[s], i >>>= 0;
        return !(i <= 127) && (t.place = s, i)
      }

      function N(e) {
        for (var t = 0, r = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < r;) t++;
        return 0 === t ? e : e.slice(t)
      }

      function R(e, t) {
        if (t < 128) {
          e.push(t);
          return
        }
        var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
        for (e.push(128 | r); --r;) e.push(t >>> (r << 3) & 255);
        e.push(t)
      }
      _.prototype._importDER = function (e, t) {
        e = h.toArray(e, t);
        var r = new M;
        if (48 !== e[r.place++]) return !1;
        var n = O(e, r);
        if (!1 === n || n + r.place !== e.length || 2 !== e[r.place++]) return !1;
        var o = O(e, r);
        if (!1 === o) return !1;
        var s = e.slice(r.place, o + r.place);
        if (r.place += o, 2 !== e[r.place++]) return !1;
        var a = O(e, r);
        if (!1 === a || e.length !== a + r.place) return !1;
        var u = e.slice(r.place, a + r.place);
        if (0 === s[0]) {
          if (!(128 & s[1])) return !1;
          s = s.slice(1)
        }
        if (0 === u[0]) {
          if (!(128 & u[1])) return !1;
          u = u.slice(1)
        }
        return this.r = new(i())(s), this.s = new(i())(u), this.recoveryParam = null, !0
      }, _.prototype.toDER = function (e) {
        var t = this.r.toArray(),
          r = this.s.toArray();
        for (128 & t[0] && (t = [0].concat(t)), 128 & r[0] && (r = [0].concat(r)), t = N(t), r = N(r); !r[0] && !(128 & r[1]);) r = r.slice(1);
        var n = [2];
        R(n, t.length), (n = n.concat(t)).push(2), R(n, r.length);
        var i = n.concat(r),
          o = [48];
        return R(o, i.length), o = o.concat(i), h.encode(o, e)
      };
      var T = function () {
          throw Error("unsupported")
        },
        I = h.assert;

      function B(e) {
        if (!(this instanceof B)) return new B(e);
        "string" == typeof e && (I(Object.prototype.hasOwnProperty.call(S, e), "Unknown curve " + e), e = S[e]), e instanceof S.PresetCurve && (e = {
          curve: e
        }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
      }
      B.prototype.keyPair = function (e) {
        return new P(this, e)
      }, B.prototype.keyFromPrivate = function (e, t) {
        return P.fromPrivate(this, e, t)
      }, B.prototype.keyFromPublic = function (e, t) {
        return P.fromPublic(this, e, t)
      }, B.prototype.genKeyPair = function (e) {
        e || (e = {});
        for (var t = new x({
            hash: this.hash,
            pers: e.pers,
            persEnc: e.persEnc || "utf8",
            entropy: e.entropy || T(this.hash.hmacStrength),
            entropyEnc: e.entropy && e.entropyEnc || "utf8",
            nonce: this.n.toArray()
          }), r = this.n.byteLength(), n = this.n.sub(new(i())(2));;) {
          var o = new(i())(t.generate(r));
          if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
        }
      }, B.prototype._truncateToN = function (e, t) {
        var r = 8 * e.byteLength() - this.n.bitLength();
        return (r > 0 && (e = e.ushrn(r)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e
      }, B.prototype.sign = function (e, t, r, n) {
        "object" == typeof r && (n = r, r = null), n || (n = {}), t = this.keyFromPrivate(t, r), e = this._truncateToN(new(i())(e, 16));
        for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), a = e.toArray("be", o), u = new x({
            hash: this.hash,
            entropy: s,
            nonce: a,
            pers: n.pers,
            persEnc: n.persEnc || "utf8"
          }), l = this.n.sub(new(i())(1)), c = 0;; c++) {
          var h = n.k ? n.k(c) : new(i())(u.generate(this.n.byteLength()));
          if (!(0 >= (h = this._truncateToN(h, !0)).cmpn(1) || h.cmp(l) >= 0)) {
            var f = this.g.mul(h);
            if (!f.isInfinity()) {
              var d = f.getX(),
                p = d.umod(this.n);
              if (0 !== p.cmpn(0)) {
                var g = h.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));
                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                  var m = (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                  return n.canonical && g.cmp(this.nh) > 0 && (g = this.n.sub(g), m ^= 1), new _({
                    r: p,
                    s: g,
                    recoveryParam: m
                  })
                }
              }
            }
          }
        }
      }, B.prototype.verify = function (e, t, r, n) {
        e = this._truncateToN(new(i())(e, 16)), r = this.keyFromPublic(r, n);
        var o, s = (t = new _(t, "hex")).r,
          a = t.s;
        if (0 > s.cmpn(1) || s.cmp(this.n) >= 0 || 0 > a.cmpn(1) || a.cmp(this.n) >= 0) return !1;
        var u = a.invm(this.n),
          l = u.mul(e).umod(this.n),
          c = u.mul(s).umod(this.n);
        return this.curve._maxwellTrick ? !(o = this.g.jmulAdd(l, r.getPublic(), c)).isInfinity() && o.eqXToP(s) : !(o = this.g.mulAdd(l, r.getPublic(), c)).isInfinity() && 0 === o.getX().umod(this.n).cmp(s)
      }, B.prototype.recoverPubKey = function (e, t, r, n) {
        I((3 & r) === r, "The recovery param is more than two bits"), t = new _(t, n);
        var o = this.n,
          s = new(i())(e),
          a = t.r,
          u = t.s,
          l = 1 & r,
          c = r >> 1;
        if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && c) throw Error("Unable to find sencond key candinate");
        a = c ? this.curve.pointFromX(a.add(this.curve.n), l) : this.curve.pointFromX(a, l);
        var h = t.r.invm(o),
          f = o.sub(s).mul(h).umod(o),
          d = u.mul(h).umod(o);
        return this.g.mulAdd(f, a, d)
      }, B.prototype.getKeyRecoveryParam = function (e, t, r, n) {
        if (null !== (t = new _(t, n)).recoveryParam) return t.recoveryParam;
        for (var i, o = 0; o < 4; o++) {
          try {
            i = this.recoverPubKey(e, t, o)
          } catch (e) {
            continue
          }
          if (i.eq(r)) return o
        }
        throw Error("Unable to find valid recovery factor")
      };
      var L = a(function (e, t) {
          var r = t;
          r.version = "6.5.4", r.utils = h, r.rand = function () {
            throw Error("unsupported")
          }, r.curve = E, r.curves = S, r.ec = B, r.eddsa = null
        }).ec,
        F = r(16441),
        D = r(6881),
        U = r(1581);
      let j = new U.Logger("signing-key/5.7.0"),
        z = null;

      function H() {
        return z || (z = new L("secp256k1")), z
      }
      class G {
        constructor(e) {
          (0, D.defineReadOnly)(this, "curve", "secp256k1"), (0, D.defineReadOnly)(this, "privateKey", (0, F.hexlify)(e)), 32 !== (0, F.hexDataLength)(this.privateKey) && j.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
          let t = H().keyFromPrivate((0, F.arrayify)(this.privateKey));
          (0, D.defineReadOnly)(this, "publicKey", "0x" + t.getPublic(!1, "hex")), (0, D.defineReadOnly)(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")), (0, D.defineReadOnly)(this, "_isSigningKey", !0)
        }
        _addPoint(e) {
          let t = H().keyFromPublic((0, F.arrayify)(this.publicKey)),
            r = H().keyFromPublic((0, F.arrayify)(e));
          return "0x" + t.pub.add(r.pub).encodeCompressed("hex")
        }
        signDigest(e) {
          let t = H().keyFromPrivate((0, F.arrayify)(this.privateKey)),
            r = (0, F.arrayify)(e);
          32 !== r.length && j.throwArgumentError("bad digest length", "digest", e);
          let n = t.sign(r, {
            canonical: !0
          });
          return (0, F.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, F.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, F.hexZeroPad)("0x" + n.s.toString(16), 32)
          })
        }
        computeSharedSecret(e) {
          let t = H().keyFromPrivate((0, F.arrayify)(this.privateKey)),
            r = H().keyFromPublic((0, F.arrayify)(K(e)));
          return (0, F.hexZeroPad)("0x" + t.derive(r.getPublic()).toString(16), 32)
        }
        static isSigningKey(e) {
          return !!(e && e._isSigningKey)
        }
      }

      function q(e, t) {
        let r = (0, F.splitSignature)(t),
          n = {
            r: (0, F.arrayify)(r.r),
            s: (0, F.arrayify)(r.s)
          };
        return "0x" + H().recoverPubKey((0, F.arrayify)(e), n, r.recoveryParam).encode("hex", !1)
      }

      function K(e, t) {
        let r = (0, F.arrayify)(e);
        if (32 === r.length) {
          let e = new G(r);
          return t ? "0x" + H().keyFromPrivate(r).getPublic(!0, "hex") : e.publicKey
        }
        return 33 === r.length ? t ? (0, F.hexlify)(r) : "0x" + H().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? t ? "0x" + H().keyFromPublic(r).getPublic(!0, "hex") : (0, F.hexlify)(r) : j.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
      }
    },
    31886: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        keccak256: function () {
          return p
        },
        pack: function () {
          return d
        },
        sha256: function () {
          return g
        }
      });
      var n = r(2593),
        i = r(16441),
        o = r(38197),
        s = r(2006),
        a = r(29251),
        u = r(1581);
      let l = RegExp("^bytes([0-9]+)$"),
        c = RegExp("^(u?int)([0-9]*)$"),
        h = RegExp("^(.*)\\[([0-9]*)\\]$"),
        f = new u.Logger("solidity/5.7.0");

      function d(e, t) {
        e.length != t.length && f.throwArgumentError("wrong number of values; expected ${ types.length }", "values", t);
        let r = [];
        return e.forEach(function (e, o) {
          r.push(function e(t, r, o) {
            switch (t) {
              case "address":
                if (o) return (0, i.zeroPad)(r, 32);
                return (0, i.arrayify)(r);
              case "string":
                return (0, a.Y0)(r);
              case "bytes":
                return (0, i.arrayify)(r);
              case "bool":
                if (r = r ? "0x01" : "0x00", o) return (0, i.zeroPad)(r, 32);
                return (0, i.arrayify)(r)
            }
            let s = t.match(c);
            if (s) {
              let e = parseInt(s[2] || "256");
              return (s[2] && String(e) !== s[2] || e % 8 != 0 || 0 === e || e > 256) && f.throwArgumentError("invalid number type", "type", t), o && (e = 256), r = n.O$.from(r).toTwos(e), (0, i.zeroPad)(r, e / 8)
            }
            if (s = t.match(l)) {
              let e = parseInt(s[1]);
              return ((String(e) !== s[1] || 0 === e || e > 32) && f.throwArgumentError("invalid bytes type", "type", t), (0, i.arrayify)(r).byteLength !== e && f.throwArgumentError(`invalid value for ${t}`, "value", r), o) ? (0, i.arrayify)((r + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : r
            }
            if ((s = t.match(h)) && Array.isArray(r)) {
              let n = s[1],
                o = parseInt(s[2] || String(r.length));
              o != r.length && f.throwArgumentError(`invalid array length for ${t}`, "value", r);
              let a = [];
              return r.forEach(function (t) {
                a.push(e(n, t, !0))
              }), (0, i.concat)(a)
            }
            return f.throwArgumentError("invalid type", "type", t)
          }(e, t[o]))
        }), (0, i.hexlify)((0, i.concat)(r))
      }

      function p(e, t) {
        return (0, o.keccak256)(d(e, t))
      }

      function g(e, t) {
        return (0, s.JQ)(d(e, t))
      }
    },
    22384: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        UnicodeNormalizationForm: function () {
          return o.Uj
        },
        Utf8ErrorFuncs: function () {
          return o.te
        },
        Utf8ErrorReason: function () {
          return o.Uw
        },
        _toEscapedUtf8String: function () {
          return o.U$
        },
        formatBytes32String: function () {
          return s
        },
        nameprep: function () {
          return v
        },
        parseBytes32String: function () {
          return a
        },
        toUtf8Bytes: function () {
          return o.Y0
        },
        toUtf8CodePoints: function () {
          return o.XL
        },
        toUtf8String: function () {
          return o.ZN
        }
      });
      var n = r(57218),
        i = r(16441),
        o = r(29251);

      function s(e) {
        let t = (0, o.Y0)(e);
        if (t.length > 31) throw Error("bytes32 string must be less than 32 bytes");
        return (0, i.hexlify)((0, i.concat)([t, n.R]).slice(0, 32))
      }

      function a(e) {
        let t = (0, i.arrayify)(e);
        if (32 !== t.length) throw Error("invalid bytes32 - not 32 bytes long");
        if (0 !== t[31]) throw Error("invalid bytes32 string - no null terminator");
        let r = 31;
        for (; 0 === t[r - 1];) r--;
        return (0, o.ZN)(t.slice(0, r))
      }

      function u(e, t) {
        t || (t = function (e) {
          return [parseInt(e, 16)]
        });
        let r = 0,
          n = {};
        return e.split(",").forEach(e => {
          let i = e.split(":");
          n[r += parseInt(i[0], 16)] = t(i[1])
        }), n
      }

      function l(e) {
        let t = 0;
        return e.split(",").map(e => {
          let r = e.split("-");
          return 1 === r.length ? r[1] = "0" : "" === r[1] && (r[1] = "1"), {
            l: t + parseInt(r[0], 16),
            h: t = parseInt(r[1], 16)
          }
        })
      }

      function c(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (e >= (r += i.l) && e <= r + i.h && (e - r) % (i.d || 1) == 0) {
            if (i.e && -1 !== i.e.indexOf(e - r)) continue;
            return i
          }
        }
        return null
      }
      let h = l("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),
        f = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map(e => parseInt(e, 16)),
        d = [{
          h: 25,
          s: 32,
          l: 65
        }, {
          h: 30,
          s: 32,
          e: [23],
          l: 127
        }, {
          h: 54,
          s: 1,
          e: [48],
          l: 64,
          d: 2
        }, {
          h: 14,
          s: 1,
          l: 57,
          d: 2
        }, {
          h: 44,
          s: 1,
          l: 17,
          d: 2
        }, {
          h: 10,
          s: 1,
          e: [2, 6, 8],
          l: 61,
          d: 2
        }, {
          h: 16,
          s: 1,
          l: 68,
          d: 2
        }, {
          h: 84,
          s: 1,
          e: [18, 24, 66],
          l: 19,
          d: 2
        }, {
          h: 26,
          s: 32,
          e: [17],
          l: 435
        }, {
          h: 22,
          s: 1,
          l: 71,
          d: 2
        }, {
          h: 15,
          s: 80,
          l: 40
        }, {
          h: 31,
          s: 32,
          l: 16
        }, {
          h: 32,
          s: 1,
          l: 80,
          d: 2
        }, {
          h: 52,
          s: 1,
          l: 42,
          d: 2
        }, {
          h: 12,
          s: 1,
          l: 55,
          d: 2
        }, {
          h: 40,
          s: 1,
          e: [38],
          l: 15,
          d: 2
        }, {
          h: 14,
          s: 1,
          l: 48,
          d: 2
        }, {
          h: 37,
          s: 48,
          l: 49
        }, {
          h: 148,
          s: 1,
          l: 6351,
          d: 2
        }, {
          h: 88,
          s: 1,
          l: 160,
          d: 2
        }, {
          h: 15,
          s: 16,
          l: 704
        }, {
          h: 25,
          s: 26,
          l: 854
        }, {
          h: 25,
          s: 32,
          l: 55915
        }, {
          h: 37,
          s: 40,
          l: 1247
        }, {
          h: 25,
          s: -119711,
          l: 53248
        }, {
          h: 25,
          s: -119763,
          l: 52
        }, {
          h: 25,
          s: -119815,
          l: 52
        }, {
          h: 25,
          s: -119867,
          e: [1, 4, 5, 7, 8, 11, 12, 17],
          l: 52
        }, {
          h: 25,
          s: -119919,
          l: 52
        }, {
          h: 24,
          s: -119971,
          e: [2, 7, 8, 17],
          l: 52
        }, {
          h: 24,
          s: -120023,
          e: [2, 7, 13, 15, 16, 17],
          l: 52
        }, {
          h: 25,
          s: -120075,
          l: 52
        }, {
          h: 25,
          s: -120127,
          l: 52
        }, {
          h: 25,
          s: -120179,
          l: 52
        }, {
          h: 25,
          s: -120231,
          l: 52
        }, {
          h: 25,
          s: -120283,
          l: 52
        }, {
          h: 25,
          s: -120335,
          l: 52
        }, {
          h: 24,
          s: -119543,
          e: [17],
          l: 56
        }, {
          h: 24,
          s: -119601,
          e: [17],
          l: 58
        }, {
          h: 24,
          s: -119659,
          e: [17],
          l: 58
        }, {
          h: 24,
          s: -119717,
          e: [17],
          l: 58
        }, {
          h: 24,
          s: -119775,
          e: [17],
          l: 58
        }],
        p = u("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),
        g = u("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),
        m = u("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", function (e) {
          if (e.length % 4 != 0) throw Error("bad data");
          let t = [];
          for (let r = 0; r < e.length; r += 4) t.push(parseInt(e.substring(r, r + 4), 16));
          return t
        }),
        y = l("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");

      function v(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let t = (0, o.XL)(e);
        t = t.map(e => f.indexOf(e) >= 0 || e >= 65024 && e <= 65039 ? [] : function (e) {
          let t = c(e, d);
          if (t) return [e + t.s];
          let r = p[e];
          if (r) return r;
          let n = g[e];
          return n ? [e + n[0]] : m[e] || null
        }(e) || [e]).reduce((e, t) => (t.forEach(t => {
          e.push(t)
        }), e), []), (t = (0, o.XL)((0, o.uu)(t), o.Uj.NFKC)).forEach(e => {
          if (c(e, y)) throw Error("STRINGPREP_CONTAINS_PROHIBITED")
        }), t.forEach(e => {
          if (c(e, h)) throw Error("STRINGPREP_CONTAINS_UNASSIGNED")
        });
        let r = (0, o.uu)(t);
        if ("-" === r.substring(0, 1) || "--" === r.substring(2, 4) || "-" === r.substring(r.length - 1)) throw Error("invalid hyphen");
        return r
      }
    },
    29251: function (e, t, r) {
      "use strict";
      r.d(t, {
        Uj: function () {
          return o
        },
        te: function () {
          return h
        },
        Uw: function () {
          return s
        },
        U$: function () {
          return g
        },
        uu: function () {
          return m
        },
        Y0: function () {
          return d
        },
        XL: function () {
          return v
        },
        ZN: function () {
          return y
        }
      });
      var n, i, o, s, a = r(16441),
        u = r(1581);
      let l = new u.Logger("strings/5.7.0");

      function c(e, t, r, n, i) {
        if (e === s.BAD_PREFIX || e === s.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length && r[n] >> 6 == 2; n++) e++;
          return e
        }
        return e === s.OVERRUN ? r.length - t - 1 : 0
      }(n = o || (o = {})).current = "", n.NFC = "NFC", n.NFD = "NFD", n.NFKC = "NFKC", n.NFKD = "NFKD", (i = s || (s = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte", i.BAD_PREFIX = "bad codepoint prefix", i.OVERRUN = "string overrun", i.MISSING_CONTINUE = "missing continuation byte", i.OUT_OF_RANGE = "out of UTF-8 range", i.UTF16_SURROGATE = "UTF-16 surrogate", i.OVERLONG = "overlong representation";
      let h = Object.freeze({
        error: function (e, t, r, n, i) {
          return l.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r)
        },
        ignore: c,
        replace: function (e, t, r, n, i) {
          return e === s.OVERLONG ? (n.push(i), 0) : (n.push(65533), c(e, t, r, n, i))
        }
      });

      function f(e, t) {
        null == t && (t = h.error), e = (0, a.arrayify)(e);
        let r = [],
          n = 0;
        for (; n < e.length;) {
          let i = e[n++];
          if (i >> 7 == 0) {
            r.push(i);
            continue
          }
          let o = null,
            a = null;
          if ((224 & i) == 192) o = 1, a = 127;
          else if ((240 & i) == 224) o = 2, a = 2047;
          else if ((248 & i) == 240) o = 3, a = 65535;
          else {
            (192 & i) == 128 ? n += t(s.UNEXPECTED_CONTINUE, n - 1, e, r) : n += t(s.BAD_PREFIX, n - 1, e, r);
            continue
          }
          if (n - 1 + o >= e.length) {
            n += t(s.OVERRUN, n - 1, e, r);
            continue
          }
          let u = i & (1 << 8 - o - 1) - 1;
          for (let i = 0; i < o; i++) {
            let i = e[n];
            if ((192 & i) != 128) {
              n += t(s.MISSING_CONTINUE, n, e, r), u = null;
              break
            }
            u = u << 6 | 63 & i, n++
          }
          if (null !== u) {
            if (u > 1114111) {
              n += t(s.OUT_OF_RANGE, n - 1 - o, e, r, u);
              continue
            }
            if (u >= 55296 && u <= 57343) {
              n += t(s.UTF16_SURROGATE, n - 1 - o, e, r, u);
              continue
            }
            if (u <= a) {
              n += t(s.OVERLONG, n - 1 - o, e, r, u);
              continue
            }
            r.push(u)
          }
        }
        return r
      }

      function d(e, t = o.current) {
        t != o.current && (l.checkNormalize(), e = e.normalize(t));
        let r = [];
        for (let t = 0; t < e.length; t++) {
          let n = e.charCodeAt(t);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push(n >> 6 | 192), r.push(63 & n | 128);
          else if ((64512 & n) == 55296) {
            t++;
            let i = e.charCodeAt(t);
            if (t >= e.length || (64512 & i) != 56320) throw Error("invalid utf-8 string");
            let o = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128)
          } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(63 & n | 128)
        }
        return (0, a.arrayify)(r)
      }

      function p(e) {
        let t = "0000" + e.toString(16);
        return "\\u" + t.substring(t.length - 4)
      }

      function g(e, t) {
        return '"' + f(e, t).map(e => {
          if (e < 256) {
            switch (e) {
              case 8:
                return "\\b";
              case 9:
                return "\\t";
              case 10:
                return "\\n";
              case 13:
                return "\\r";
              case 34:
                return '\\"';
              case 92:
                return "\\\\"
            }
            if (e >= 32 && e < 127) return String.fromCharCode(e)
          }
          return e <= 65535 ? p(e) : p(((e -= 65536) >> 10 & 1023) + 55296) + p((1023 & e) + 56320)
        }).join("") + '"'
      }

      function m(e) {
        return e.map(e => e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10 & 1023) + 55296, (1023 & e) + 56320)).join("")
      }

      function y(e, t) {
        return m(f(e, t))
      }

      function v(e, t = o.current) {
        return f(d(e, t))
      }
    },
    83875: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        TransactionTypes: function () {
          return i
        },
        accessListify: function () {
          return S
        },
        computeAddress: function () {
          return b
        },
        parse: function () {
          return M
        },
        recoverAddress: function () {
          return w
        },
        serialize: function () {
          return C
        }
      });
      var n, i, o = r(19485),
        s = r(2593),
        a = r(16441),
        u = r(21046),
        l = r(38197),
        c = r(6881),
        h = r(59052),
        f = r(67669),
        d = r(1581);
      let p = new d.Logger("transactions/5.7.0");

      function g(e) {
        return "0x" === e ? null : (0, o.getAddress)(e)
      }

      function m(e) {
        return "0x" === e ? u._Y : s.O$.from(e)
      }(n = i || (i = {}))[n.legacy = 0] = "legacy", n[n.eip2930 = 1] = "eip2930", n[n.eip1559 = 2] = "eip1559";
      let y = [{
          name: "nonce",
          maxLength: 32,
          numeric: !0
        }, {
          name: "gasPrice",
          maxLength: 32,
          numeric: !0
        }, {
          name: "gasLimit",
          maxLength: 32,
          numeric: !0
        }, {
          name: "to",
          length: 20
        }, {
          name: "value",
          maxLength: 32,
          numeric: !0
        }, {
          name: "data"
        }],
        v = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0
        };

      function b(e) {
        let t = (0, f.computePublicKey)(e);
        return (0, o.getAddress)((0, a.hexDataSlice)((0, l.keccak256)((0, a.hexDataSlice)(t, 1)), 12))
      }

      function w(e, t) {
        return b((0, f.recoverPublicKey)((0, a.arrayify)(e), t))
      }

      function A(e, t) {
        let r = (0, a.stripZeros)(s.O$.from(e).toHexString());
        return r.length > 32 && p.throwArgumentError("invalid length for " + t, "transaction:" + t, e), r
      }

      function E(e, t) {
        return {
          address: (0, o.getAddress)(e),
          storageKeys: (t || []).map((t, r) => (32 !== (0, a.hexDataLength)(t) && p.throwArgumentError("invalid access list storageKey", `accessList[${e}:${r}]`, t), t.toLowerCase()))
        }
      }

      function S(e) {
        if (Array.isArray(e)) return e.map((e, t) => Array.isArray(e) ? (e.length > 2 && p.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${t}]`, e), E(e[0], e[1])) : E(e.address, e.storageKeys));
        let t = Object.keys(e).map(t => {
          let r = e[t].reduce((e, t) => (e[t] = !0, e), {});
          return E(t, Object.keys(r).sort())
        });
        return t.sort((e, t) => e.address.localeCompare(t.address)), t
      }

      function x(e) {
        return S(e).map(e => [e.address, e.storageKeys])
      }

      function k(e, t) {
        if (null != e.gasPrice) {
          let t = s.O$.from(e.gasPrice),
            r = s.O$.from(e.maxFeePerGas || 0);
          t.eq(r) || p.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
            gasPrice: t,
            maxFeePerGas: r
          })
        }
        let r = [A(e.chainId || 0, "chainId"), A(e.nonce || 0, "nonce"), A(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), A(e.maxFeePerGas || 0, "maxFeePerGas"), A(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, o.getAddress)(e.to) : "0x", A(e.value || 0, "value"), e.data || "0x", x(e.accessList || [])];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(A(e.recoveryParam, "recoveryParam")), r.push((0, a.stripZeros)(e.r)), r.push((0, a.stripZeros)(e.s))
        }
        return (0, a.hexConcat)(["0x02", h.encode(r)])
      }

      function P(e, t) {
        let r = [A(e.chainId || 0, "chainId"), A(e.nonce || 0, "nonce"), A(e.gasPrice || 0, "gasPrice"), A(e.gasLimit || 0, "gasLimit"), null != e.to ? (0, o.getAddress)(e.to) : "0x", A(e.value || 0, "value"), e.data || "0x", x(e.accessList || [])];
        if (t) {
          let e = (0, a.splitSignature)(t);
          r.push(A(e.recoveryParam, "recoveryParam")), r.push((0, a.stripZeros)(e.r)), r.push((0, a.stripZeros)(e.s))
        }
        return (0, a.hexConcat)(["0x01", h.encode(r)])
      }

      function C(e, t) {
        if (null == e.type || 0 === e.type) return null != e.accessList && p.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", e),
          function (e, t) {
            (0, c.checkProperties)(e, v);
            let r = [];
            y.forEach(function (t) {
              let n = e[t.name] || [],
                i = {};
              t.numeric && (i.hexPad = "left"), n = (0, a.arrayify)((0, a.hexlify)(n, i)), t.length && n.length !== t.length && n.length > 0 && p.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), t.maxLength && (n = (0, a.stripZeros)(n)).length > t.maxLength && p.throwArgumentError("invalid length for " + t.name, "transaction:" + t.name, n), r.push((0, a.hexlify)(n))
            });
            let n = 0;
            if (null != e.chainId ? "number" != typeof (n = e.chainId) && p.throwArgumentError("invalid transaction.chainId", "transaction", e) : t && !(0, a.isBytesLike)(t) && t.v > 28 && (n = Math.floor((t.v - 35) / 2)), 0 !== n && (r.push((0, a.hexlify)(n)), r.push("0x"), r.push("0x")), !t) return h.encode(r);
            let i = (0, a.splitSignature)(t),
              o = 27 + i.recoveryParam;
            return 0 !== n ? (r.pop(), r.pop(), r.pop(), o += 2 * n + 8, i.v > 28 && i.v !== o && p.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t)) : i.v !== o && p.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", t), r.push((0, a.hexlify)(o)), r.push((0, a.stripZeros)((0, a.arrayify)(i.r))), r.push((0, a.stripZeros)((0, a.arrayify)(i.s))), h.encode(r)
          }(e, t);
        switch (e.type) {
          case 1:
            return P(e, t);
          case 2:
            return k(e, t)
        }
        return p.throwError(`unsupported transaction type: ${e.type}`, d.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "serializeTransaction",
          transactionType: e.type
        })
      }

      function _(e, t, r) {
        try {
          let r = m(t[0]).toNumber();
          if (0 !== r && 1 !== r) throw Error("bad recid");
          e.v = r
        } catch (e) {
          p.throwArgumentError("invalid v for transaction type: 1", "v", t[0])
        }
        e.r = (0, a.hexZeroPad)(t[1], 32), e.s = (0, a.hexZeroPad)(t[2], 32);
        try {
          let t = (0, l.keccak256)(r(e));
          e.from = w(t, {
            r: e.r,
            s: e.s,
            recoveryParam: e.v
          })
        } catch (e) {}
      }

      function M(e) {
        let t = (0, a.arrayify)(e);
        if (t[0] > 127) return function (e) {
          let t = h.decode(e);
          9 !== t.length && 6 !== t.length && p.throwArgumentError("invalid raw transaction", "rawTransaction", e);
          let r = {
            nonce: m(t[0]).toNumber(),
            gasPrice: m(t[1]),
            gasLimit: m(t[2]),
            to: g(t[3]),
            value: m(t[4]),
            data: t[5],
            chainId: 0
          };
          if (6 === t.length) return r;
          try {
            r.v = s.O$.from(t[6]).toNumber()
          } catch (e) {
            return r
          }
          if (r.r = (0, a.hexZeroPad)(t[7], 32), r.s = (0, a.hexZeroPad)(t[8], 32), s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero()) r.chainId = r.v, r.v = 0;
          else {
            r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
            let n = r.v - 27,
              i = t.slice(0, 6);
            0 !== r.chainId && (i.push((0, a.hexlify)(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
            let o = (0, l.keccak256)(h.encode(i));
            try {
              r.from = w(o, {
                r: (0, a.hexlify)(r.r),
                s: (0, a.hexlify)(r.s),
                recoveryParam: n
              })
            } catch (e) {}
            r.hash = (0, l.keccak256)(e)
          }
          return r.type = null, r
        }(t);
        switch (t[0]) {
          case 1:
            return function (e) {
              let t = h.decode(e.slice(1));
              8 !== t.length && 11 !== t.length && p.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, a.hexlify)(e));
              let r = {
                type: 1,
                chainId: m(t[0]).toNumber(),
                nonce: m(t[1]).toNumber(),
                gasPrice: m(t[2]),
                gasLimit: m(t[3]),
                to: g(t[4]),
                value: m(t[5]),
                data: t[6],
                accessList: S(t[7])
              };
              return 8 === t.length || (r.hash = (0, l.keccak256)(e), _(r, t.slice(8), P)), r
            }(t);
          case 2:
            return function (e) {
              let t = h.decode(e.slice(1));
              9 !== t.length && 12 !== t.length && p.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, a.hexlify)(e));
              let r = m(t[2]),
                n = m(t[3]),
                i = {
                  type: 2,
                  chainId: m(t[0]).toNumber(),
                  nonce: m(t[1]).toNumber(),
                  maxPriorityFeePerGas: r,
                  maxFeePerGas: n,
                  gasPrice: null,
                  gasLimit: m(t[4]),
                  to: g(t[5]),
                  value: m(t[6]),
                  data: t[7],
                  accessList: S(t[8])
                };
              return 9 === t.length || (i.hash = (0, l.keccak256)(e), _(i, t.slice(9), k)), i
            }(t)
        }
        return p.throwError(`unsupported transaction type: ${t[0]}`, d.Logger.errors.UNSUPPORTED_OPERATION, {
          operation: "parseTransaction",
          transactionType: t[0]
        })
      }
    },
    35553: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        commify: function () {
          return E
        },
        formatEther: function () {
          return k
        },
        formatUnits: function () {
          return S
        },
        parseEther: function () {
          return P
        },
        parseUnits: function () {
          return x
        }
      });
      var n = r(16441),
        i = r(1581),
        o = r(48794),
        s = r(2593);
      let a = new i.Logger(o.i),
        u = {},
        l = s.O$.from(0),
        c = s.O$.from(-1);

      function h(e, t, r, n) {
        let o = {
          fault: t,
          operation: r
        };
        return void 0 !== n && (o.value = n), a.throwError(e, i.Logger.errors.NUMERIC_FAULT, o)
      }
      let f = "0";
      for (; f.length < 256;) f += f;

      function d(e) {
        if ("number" != typeof e) try {
          e = s.O$.from(e).toNumber()
        } catch (e) {}
        return "number" == typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + f.substring(0, e) : a.throwArgumentError("invalid decimal size", "decimals", e)
      }

      function p(e, t) {
        null == t && (t = 0);
        let r = d(t);
        e = s.O$.from(e);
        let n = e.lt(l);
        n && (e = e.mul(c));
        let i = e.mod(r).toString();
        for (; i.length < r.length - 1;) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        let o = e.div(r).toString();
        return e = 1 === r.length ? o : o + "." + i, n && (e = "-" + e), e
      }

      function g(e, t) {
        null == t && (t = 0);
        let r = d(t);
        "string" == typeof e && e.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", e);
        let n = "-" === e.substring(0, 1);
        n && (e = e.substring(1)), "." === e && a.throwArgumentError("missing value", "value", e);
        let i = e.split(".");
        i.length > 2 && a.throwArgumentError("too many decimal points", "value", e);
        let o = i[0],
          u = i[1];
        for (o || (o = "0"), u || (u = "0");
          "0" === u[u.length - 1];) u = u.substring(0, u.length - 1);
        for (u.length > r.length - 1 && h("fractional component exceeds decimals", "underflow", "parseFixed"), "" === u && (u = "0"); u.length < r.length - 1;) u += "0";
        let l = s.O$.from(o),
          f = s.O$.from(u),
          p = l.mul(r).add(f);
        return n && (p = p.mul(c)), p
      }
      class m {
        constructor(e, t, r, n) {
          e !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.signed = t, this.width = r, this.decimals = n, this.name = (t ? "" : "u") + "fixed" + String(r) + "x" + String(n), this._multiplier = d(n), Object.freeze(this)
        }
        static from(e) {
          if (e instanceof m) return e;
          "number" == typeof e && (e = `fixed128x${e}`);
          let t = !0,
            r = 128,
            n = 18;
          if ("string" == typeof e) {
            if ("fixed" === e);
            else if ("ufixed" === e) t = !1;
            else {
              let i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              i || a.throwArgumentError("invalid fixed format", "format", e), t = "u" !== i[1], r = parseInt(i[2]), n = parseInt(i[3])
            }
          } else if (e) {
            let i = (t, r, n) => null == e[t] ? n : (typeof e[t] !== r && a.throwArgumentError("invalid fixed format (" + t + " not " + r + ")", "format." + t, e[t]), e[t]);
            t = i("signed", "boolean", t), r = i("width", "number", r), n = i("decimals", "number", n)
          }
          return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r), n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new m(u, t, r, n)
        }
      }
      class y {
        constructor(e, t, r, n) {
          e !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
          }), this.format = n, this._hex = t, this._value = r, this._isFixedNumber = !0, Object.freeze(this)
        }
        _checkFormat(e) {
          this.format.name !== e.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
        }
        addUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.add(r), this.format.decimals, this.format)
        }
        subUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.sub(r), this.format.decimals, this.format)
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
        }
        divUnsafe(e) {
          this._checkFormat(e);
          let t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return y.fromValue(t.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
        }
        floor() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = y.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return this.isNegative() && r && (t = t.subUnsafe(v.toFormat(t.format))), t
        }
        ceiling() {
          let e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = y.from(e[0], this.format),
            r = !e[1].match(/^(0*)$/);
          return !this.isNegative() && r && (t = t.addUnsafe(v.toFormat(t.format))), t
        }
        round(e) {
          null == e && (e = 0);
          let t = this.toString().split(".");
          if (1 === t.length && t.push("0"), (e < 0 || e > 80 || e % 1) && a.throwArgumentError("invalid decimal count", "decimals", e), t[1].length <= e) return this;
          let r = y.from("1" + f.substring(0, e), this.format),
            n = b.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value
        }
        isNegative() {
          return "-" === this._value[0]
        }
        toString() {
          return this._value
        }
        toHexString(e) {
          if (null == e) return this._hex;
          e % 8 && a.throwArgumentError("invalid byte width", "width", e);
          let t = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
          return (0, n.hexZeroPad)(t, e / 8)
        }
        toUnsafeFloat() {
          return parseFloat(this.toString())
        }
        toFormat(e) {
          return y.fromString(this._value, e)
        }
        static fromValue(e, t, r) {
          return null != r || null == t || (0, s.Zm)(t) || (r = t, t = null), null == t && (t = 0), null == r && (r = "fixed"), y.fromString(p(e, t), m.from(r))
        }
        static fromString(e, t) {
          null == t && (t = "fixed");
          let r = m.from(t),
            i = g(e, r.decimals);
          !r.signed && i.lt(l) && h("unsigned value cannot be negative", "overflow", "value", e);
          let o = null;
          r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(), o = (0, n.hexZeroPad)(o, r.width / 8));
          let s = p(i, r.decimals);
          return new y(u, o, s, r)
        }
        static fromBytes(e, t) {
          null == t && (t = "fixed");
          let r = m.from(t);
          if ((0, n.arrayify)(e).length > r.width / 8) throw Error("overflow");
          let i = s.O$.from(e);
          r.signed && (i = i.fromTwos(r.width));
          let o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = p(i, r.decimals);
          return new y(u, o, a, r)
        }
        static from(e, t) {
          if ("string" == typeof e) return y.fromString(e, t);
          if ((0, n.isBytes)(e)) return y.fromBytes(e, t);
          try {
            return y.fromValue(e, 0, t)
          } catch (e) {
            if (e.code !== i.Logger.errors.INVALID_ARGUMENT) throw e
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", e)
        }
        static isFixedNumber(e) {
          return !!(e && e._isFixedNumber)
        }
      }
      let v = y.from(1),
        b = y.from("0.5"),
        w = new i.Logger("units/5.7.0"),
        A = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];

      function E(e) {
        let t = String(e).split(".");
        (t.length > 2 || !t[0].match(/^-?[0-9]*$/) || t[1] && !t[1].match(/^[0-9]*$/) || "." === e || "-." === e) && w.throwArgumentError("invalid value", "value", e);
        let r = t[0],
          n = "";
        for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1));
          "0" === r.substring(0, 1);) r = r.substring(1);
        "" === r && (r = "0");
        let i = "";
        for (2 === t.length && (i = "." + (t[1] || "0")); i.length > 2 && "0" === i[i.length - 1];) i = i.substring(0, i.length - 1);
        let o = [];
        for (; r.length;) {
          if (r.length <= 3) {
            o.unshift(r);
            break
          } {
            let e = r.length - 3;
            o.unshift(r.substring(e)), r = r.substring(0, e)
          }
        }
        return n + o.join(",") + i
      }

      function S(e, t) {
        if ("string" == typeof t) {
          let e = A.indexOf(t); - 1 !== e && (t = 3 * e)
        }
        return p(e, null != t ? t : 18)
      }

      function x(e, t) {
        if ("string" != typeof e && w.throwArgumentError("value must be a string", "value", e), "string" == typeof t) {
          let e = A.indexOf(t); - 1 !== e && (t = 3 * e)
        }
        return g(e, null != t ? t : 18)
      }

      function k(e) {
        return S(e, 18)
      }

      function P(e) {
        return x(e, 18)
      }
    },
    79911: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        Wallet: function () {
          return w
        },
        verifyMessage: function () {
          return A
        },
        verifyTypedData: function () {
          return E
        }
      });
      var n = r(19485),
        i = r(81556),
        o = r(48088),
        s = r(16441),
        a = r(93684),
        u = r(67827),
        l = r(86507),
        c = r(38197),
        h = r(6881),
        f = r(5634),
        d = r(67669),
        p = r(81964),
        g = r(45659),
        m = r(83875),
        y = r(1581),
        v = function (e, t, r, n) {
          return new(r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function a(e) {
              try {
                u(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function u(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
          })
        };
      let b = new y.Logger("wallet/5.7.0");
      class w extends o.E {
        constructor(e, t) {
          var r;
          if (super(), null != (r = e) && (0, s.isHexString)(r.privateKey, 32) && null != r.address) {
            let t = new d.SigningKey(e.privateKey);
            if ((0, h.defineReadOnly)(this, "_signingKey", () => t), (0, h.defineReadOnly)(this, "address", (0, m.computeAddress)(this.publicKey)), this.address !== (0, n.getAddress)(e.address) && b.throwArgumentError("privateKey/address mismatch", "privateKey", "[REDACTED]"), function (e) {
                let t = e.mnemonic;
                return t && t.phrase
              }(e)) {
              let t = e.mnemonic;
              (0, h.defineReadOnly)(this, "_mnemonic", () => ({
                phrase: t.phrase,
                path: t.path || l.defaultPath,
                locale: t.locale || "en"
              }));
              let r = this.mnemonic,
                n = l.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(r.path);
              (0, m.computeAddress)(n.privateKey) !== this.address && b.throwArgumentError("mnemonic/address mismatch", "privateKey", "[REDACTED]")
            } else(0, h.defineReadOnly)(this, "_mnemonic", () => null)
          } else {
            if (d.SigningKey.isSigningKey(e)) "secp256k1" !== e.curve && b.throwArgumentError("unsupported curve; must be secp256k1", "privateKey", "[REDACTED]"), (0, h.defineReadOnly)(this, "_signingKey", () => e);
            else {
              "string" == typeof e && e.match(/^[0-9a-f]*$/i) && 64 === e.length && (e = "0x" + e);
              let t = new d.SigningKey(e);
              (0, h.defineReadOnly)(this, "_signingKey", () => t)
            }(0, h.defineReadOnly)(this, "_mnemonic", () => null), (0, h.defineReadOnly)(this, "address", (0, m.computeAddress)(this.publicKey))
          }
          t && !i.zt.isProvider(t) && b.throwArgumentError("invalid provider", "provider", t), (0, h.defineReadOnly)(this, "provider", t || null)
        }
        get mnemonic() {
          return this._mnemonic()
        }
        get privateKey() {
          return this._signingKey().privateKey
        }
        get publicKey() {
          return this._signingKey().publicKey
        }
        getAddress() {
          return Promise.resolve(this.address)
        }
        connect(e) {
          return new w(this, e)
        }
        signTransaction(e) {
          return (0, h.resolveProperties)(e).then(t => {
            null != t.from && ((0, n.getAddress)(t.from) !== this.address && b.throwArgumentError("transaction from address mismatch", "transaction.from", e.from), delete t.from);
            let r = this._signingKey().signDigest((0, c.keccak256)((0, m.serialize)(t)));
            return (0, m.serialize)(t, r)
          })
        }
        signMessage(e) {
          return v(this, void 0, void 0, function* () {
            return (0, s.joinSignature)(this._signingKey().signDigest((0, a.r)(e)))
          })
        }
        _signTypedData(e, t, r) {
          return v(this, void 0, void 0, function* () {
            let n = yield u.E.resolveNames(e, t, r, e => (null == this.provider && b.throwError("cannot resolve ENS names without a provider", y.Logger.errors.UNSUPPORTED_OPERATION, {
              operation: "resolveName",
              value: e
            }), this.provider.resolveName(e)));
            return (0, s.joinSignature)(this._signingKey().signDigest(u.E.hash(n.domain, t, n.value)))
          })
        }
        encrypt(e, t, r) {
          if ("function" != typeof t || r || (r = t, t = {}), r && "function" != typeof r) throw Error("invalid callback");
          return t || (t = {}), (0, p.HI)(this, e, t, r)
        }
        static createRandom(e) {
          let t = (0, f.O)(16);
          e || (e = {}), e.extraEntropy && (t = (0, s.arrayify)((0, s.hexDataSlice)((0, c.keccak256)((0, s.concat)([t, e.extraEntropy])), 0, 16)));
          let r = (0, l.entropyToMnemonic)(t, e.locale);
          return w.fromMnemonic(r, e.path, e.locale)
        }
        static fromEncryptedJson(e, t, r) {
          return (0, g.decryptJsonWallet)(e, t, r).then(e => new w(e))
        }
        static fromEncryptedJsonSync(e, t) {
          return new w((0, g.decryptJsonWalletSync)(e, t))
        }
        static fromMnemonic(e, t, r) {
          return t || (t = l.defaultPath), new w(l.HDNode.fromMnemonic(e, null, r).derivePath(t))
        }
      }

      function A(e, t) {
        return (0, m.recoverAddress)((0, a.r)(e), t)
      }

      function E(e, t, r, n) {
        return (0, m.recoverAddress)(u.E.hash(e, t, r), n)
      }
    },
    37707: function (e, t, r) {
      "use strict";
      r.r(t), r.d(t, {
        _fetchData: function () {
          return h
        },
        fetchJson: function () {
          return f
        },
        poll: function () {
          return d
        }
      });
      var n = r(59567),
        i = r(16441),
        o = r(6881),
        s = r(29251),
        a = r(1581);
      let u = new a.Logger("web/5.7.1");

      function l(e) {
        return new Promise(t => {
          setTimeout(t, e)
        })
      }

      function c(e, t) {
        if (null == e) return null;
        if ("string" == typeof e) return e;
        if ((0, i.isBytesLike)(e)) {
          if (t && ("text" === t.split("/")[0] || "application/json" === t.split(";")[0].trim())) try {
            return (0, s.ZN)(e)
          } catch (e) {}
          return (0, i.hexlify)(e)
        }
        return e
      }

      function h(e, t, r) {
        let h = "object" == typeof e && null != e.throttleLimit ? e.throttleLimit : 12;
        u.assertArgument(h > 0 && h % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", h);
        let f = "object" == typeof e ? e.throttleCallback : null,
          d = "object" == typeof e && "number" == typeof e.throttleSlotInterval ? e.throttleSlotInterval : 100;
        u.assertArgument(d > 0 && d % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", d);
        let p = "object" == typeof e && !!e.errorPassThrough,
          g = {},
          m = null,
          y = {
            method: "GET"
          },
          v = !1,
          b = 12e4;
        if ("string" == typeof e) m = e;
        else if ("object" == typeof e) {
          if ((null == e || null == e.url) && u.throwArgumentError("missing URL", "connection.url", e), m = e.url, "number" == typeof e.timeout && e.timeout > 0 && (b = e.timeout), e.headers)
            for (let t in e.headers) g[t.toLowerCase()] = {
              key: t,
              value: String(e.headers[t])
            }, ["if-none-match", "if-modified-since"].indexOf(t.toLowerCase()) >= 0 && (v = !0);
          if (y.allowGzip = !!e.allowGzip, null != e.user && null != e.password) {
            "https:" !== m.substring(0, 6) && !0 !== e.allowInsecureAuthentication && u.throwError("basic authentication requires a secure https url", a.Logger.errors.INVALID_ARGUMENT, {
              argument: "url",
              url: m,
              user: e.user,
              password: "[REDACTED]"
            });
            let t = e.user + ":" + e.password;
            g.authorization = {
              key: "Authorization",
              value: "Basic " + (0, n.c)((0, s.Y0)(t))
            }
          }
          null != e.skipFetchSetup && (y.skipFetchSetup = !!e.skipFetchSetup), null != e.fetchOptions && (y.fetchOptions = (0, o.shallowCopy)(e.fetchOptions))
        }
        let w = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
          A = m ? m.match(w) : null;
        if (A) try {
          var E;
          let e = {
              statusCode: 200,
              statusMessage: "OK",
              headers: {
                "content-type": A[1] || "text/plain"
              },
              body: A[2] ? (0, n.J)(A[3]) : (E = A[3], (0, s.Y0)(E.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) => String.fromCharCode(parseInt(t, 16)))))
            },
            t = e.body;
          return r && (t = r(e.body, e)), Promise.resolve(t)
        } catch (e) {
          u.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
            body: c(A[1], A[2]),
            error: e,
            requestBody: null,
            requestMethod: "GET",
            url: m
          })
        }
        t && (y.method = "POST", y.body = t, null == g["content-type"] && (g["content-type"] = {
          key: "Content-Type",
          value: "application/octet-stream"
        }), null == g["content-length"] && (g["content-length"] = {
          key: "Content-Length",
          value: String(t.length)
        }));
        let S = {};
        Object.keys(g).forEach(e => {
          let t = g[e];
          S[t.key] = t.value
        }), y.headers = S;
        let x = function () {
            let e = null,
              t = new Promise(function (t, r) {
                b && (e = setTimeout(() => {
                  null != e && (e = null, r(u.makeError("timeout", a.Logger.errors.TIMEOUT, {
                    requestBody: c(y.body, S["content-type"]),
                    requestMethod: y.method,
                    timeout: b,
                    url: m
                  })))
                }, b))
              });
            return {
              promise: t,
              cancel: function () {
                null != e && (clearTimeout(e), e = null)
              }
            }
          }(),
          k = function () {
            var e, t, n, o;
            return e = this, t = void 0, n = void 0, o = function* () {
              for (let e = 0; e < h; e++) {
                let t = null;
                try {
                  if (t = yield function (e, t) {
                      var r, n, o, s;
                      return r = this, n = void 0, o = void 0, s = function* () {
                        null == t && (t = {});
                        let r = {
                          method: t.method || "GET",
                          headers: t.headers || {},
                          body: t.body || void 0
                        };
                        if (!0 !== t.skipFetchSetup && (r.mode = "cors", r.cache = "no-cache", r.credentials = "same-origin", r.redirect = "follow", r.referrer = "client"), null != t.fetchOptions) {
                          let e = t.fetchOptions;
                          e.mode && (r.mode = e.mode), e.cache && (r.cache = e.cache), e.credentials && (r.credentials = e.credentials), e.redirect && (r.redirect = e.redirect), e.referrer && (r.referrer = e.referrer)
                        }
                        let n = yield fetch(e, r), o = yield n.arrayBuffer(), s = {};
                        return n.headers.forEach ? n.headers.forEach((e, t) => {
                          s[t.toLowerCase()] = e
                        }) : n.headers.keys().forEach(e => {
                          s[e.toLowerCase()] = n.headers.get(e)
                        }), {
                          headers: s,
                          statusCode: n.status,
                          statusMessage: n.statusText,
                          body: (0, i.arrayify)(new Uint8Array(o))
                        }
                      }, new(o || (o = Promise))(function (e, t) {
                        function i(e) {
                          try {
                            u(s.next(e))
                          } catch (e) {
                            t(e)
                          }
                        }

                        function a(e) {
                          try {
                            u(s.throw(e))
                          } catch (e) {
                            t(e)
                          }
                        }

                        function u(t) {
                          var r;
                          t.done ? e(t.value) : ((r = t.value) instanceof o ? r : new o(function (e) {
                            e(r)
                          })).then(i, a)
                        }
                        u((s = s.apply(r, n || [])).next())
                      })
                    }(m, y), e < h) {
                    if (301 === t.statusCode || 302 === t.statusCode) {
                      let e = t.headers.location || "";
                      if ("GET" === y.method && e.match(/^https:/)) {
                        m = t.headers.location;
                        continue
                      }
                    } else if (429 === t.statusCode) {
                      let r = !0;
                      if (f && (r = yield f(e, m)), r) {
                        let r = t.headers["retry-after"];
                        yield l("string" == typeof r && r.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(r) : d * parseInt(String(Math.random() * Math.pow(2, e))));
                        continue
                      }
                    }
                  }
                } catch (e) {
                  null == (t = e.response) && (x.cancel(), u.throwError("missing response", a.Logger.errors.SERVER_ERROR, {
                    requestBody: c(y.body, S["content-type"]),
                    requestMethod: y.method,
                    serverError: e,
                    url: m
                  }))
                }
                let n = t.body;
                if (v && 304 === t.statusCode ? n = null : !p && (t.statusCode < 200 || t.statusCode >= 300) && (x.cancel(), u.throwError("bad response", a.Logger.errors.SERVER_ERROR, {
                    status: t.statusCode,
                    headers: t.headers,
                    body: c(n, t.headers ? t.headers["content-type"] : null),
                    requestBody: c(y.body, S["content-type"]),
                    requestMethod: y.method,
                    url: m
                  })), r) try {
                  let e = yield r(n, t);
                  return x.cancel(), e
                } catch (r) {
                  if (r.throttleRetry && e < h) {
                    let t = !0;
                    if (f && (t = yield f(e, m)), t) {
                      let t = d * parseInt(String(Math.random() * Math.pow(2, e)));
                      yield l(t);
                      continue
                    }
                  }
                  x.cancel(), u.throwError("processing response error", a.Logger.errors.SERVER_ERROR, {
                    body: c(n, t.headers ? t.headers["content-type"] : null),
                    error: r,
                    requestBody: c(y.body, S["content-type"]),
                    requestMethod: y.method,
                    url: m
                  })
                }
                return x.cancel(), n
              }
              return u.throwError("failed response", a.Logger.errors.SERVER_ERROR, {
                requestBody: c(y.body, S["content-type"]),
                requestMethod: y.method,
                url: m
              })
            }, new(n || (n = Promise))(function (r, i) {
              function s(e) {
                try {
                  u(o.next(e))
                } catch (e) {
                  i(e)
                }
              }

              function a(e) {
                try {
                  u(o.throw(e))
                } catch (e) {
                  i(e)
                }
              }

              function u(e) {
                var t;
                e.done ? r(e.value) : ((t = e.value) instanceof n ? t : new n(function (e) {
                  e(t)
                })).then(s, a)
              }
              u((o = o.apply(e, t || [])).next())
            })
          }();
        return Promise.race([x.promise, k])
      }

      function f(e, t, r) {
        let n = (e, t) => {
            let n = null;
            if (null != e) try {
              n = JSON.parse((0, s.ZN)(e))
            } catch (t) {
              u.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                body: e,
                error: t
              })
            }
            return r && (n = r(n, t)), n
          },
          i = null;
        if (null != t) {
          i = (0, s.Y0)(t);
          let r = "string" == typeof e ? {
            url: e
          } : (0, o.shallowCopy)(e);
          if (r.headers) {
            let e = 0 !== Object.keys(r.headers).filter(e => "content-type" === e.toLowerCase()).length;
            e || (r.headers = (0, o.shallowCopy)(r.headers), r.headers["content-type"] = "application/json")
          } else r.headers = {
            "content-type": "application/json"
          };
          e = r
        }
        return h(e, i, n)
      }

      function d(e, t) {
        return t || (t = {}), null == (t = (0, o.shallowCopy)(t)).floor && (t.floor = 0), null == t.ceiling && (t.ceiling = 1e4), null == t.interval && (t.interval = 250), new Promise(function (r, n) {
          let i = null,
            o = !1,
            s = () => !o && (o = !0, i && clearTimeout(i), !0);
          t.timeout && (i = setTimeout(() => {
            s() && n(Error("timeout"))
          }, t.timeout));
          let a = t.retryLimit,
            u = 0;
          ! function i() {
            return e().then(function (e) {
              if (void 0 !== e) s() && r(e);
              else if (t.oncePoll) t.oncePoll.once("poll", i);
              else if (t.onceBlock) t.onceBlock.once("block", i);
              else if (!o) {
                if (++u > a) {
                  s() && n(Error("retry limit reached"));
                  return
                }
                let e = t.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                e < t.floor && (e = t.floor), e > t.ceiling && (e = t.ceiling), setTimeout(i, e)
              }
              return null
            }, function (e) {
              s() && n(e)
            })
          }()
        })
      }
    },
    78826: function (e) {
      "use strict";
      ! function (t) {
        function r(e) {
          return parseInt(e) === e
        }

        function n(e) {
          if (!r(e.length)) return !1;
          for (var t = 0; t < e.length; t++)
            if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
          return !0
        }

        function i(e, t) {
          if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
          if (Array.isArray(e)) {
            if (!n(e)) throw Error("Array contains invalid value: " + e);
            return new Uint8Array(e)
          }
          if (r(e.length) && n(e)) return new Uint8Array(e);
          throw Error("unsupported array-like object")
        }

        function o(e) {
          return new Uint8Array(e)
        }

        function s(e, t, r, n, i) {
          (null != n || null != i) && (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)), t.set(e, r)
        }
        var a, u = (a = "0123456789abcdef", {
            toBytes: function (e) {
              for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
              return t
            },
            fromBytes: function (e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                t.push(a[(240 & n) >> 4] + a[15 & n])
              }
              return t.join("")
            }
          }),
          l = {
            16: 10,
            24: 12,
            32: 14
          },
          c = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
          h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
          f = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
          d = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
          p = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
          g = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
          m = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
          y = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
          v = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
          b = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
          w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
          A = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
          E = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
          S = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
          x = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

        function k(e) {
          for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
          return t
        }
        var P = function (e) {
          if (!(this instanceof P)) throw Error("AES must be instanitated with `new`");
          Object.defineProperty(this, "key", {
            value: i(e, !0)
          }), this._prepare()
        };
        P.prototype._prepare = function () {
          var e = l[this.key.length];
          if (null == e) throw Error("invalid key size (must be 16, 24 or 32 bytes)");
          this._Ke = [], this._Kd = [];
          for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          for (var r = (e + 1) * 4, n = this.key.length / 4, i = k(this.key), t = 0; t < n; t++) o = t >> 2, this._Ke[o][t % 4] = i[t], this._Kd[e - o][t % 4] = i[t];
          for (var o, s, a = 0, u = n; u < r;) {
            if (s = i[n - 1], i[0] ^= h[s >> 16 & 255] << 24 ^ h[s >> 8 & 255] << 16 ^ h[255 & s] << 8 ^ h[s >> 24 & 255] ^ c[a] << 24, a += 1, 8 != n)
              for (var t = 1; t < n; t++) i[t] ^= i[t - 1];
            else {
              for (var t = 1; t < n / 2; t++) i[t] ^= i[t - 1];
              s = i[n / 2 - 1], i[n / 2] ^= h[255 & s] ^ h[s >> 8 & 255] << 8 ^ h[s >> 16 & 255] << 16 ^ h[s >> 24 & 255] << 24;
              for (var t = n / 2 + 1; t < n; t++) i[t] ^= i[t - 1]
            }
            for (var f, d, t = 0; t < n && u < r;) f = u >> 2, d = u % 4, this._Ke[f][d] = i[t], this._Kd[e - f][d] = i[t++], u++
          }
          for (var f = 1; f < e; f++)
            for (var d = 0; d < 4; d++) s = this._Kd[f][d], this._Kd[f][d] = A[s >> 24 & 255] ^ E[s >> 16 & 255] ^ S[s >> 8 & 255] ^ x[255 & s]
        }, P.prototype.encrypt = function (e) {
          if (16 != e.length) throw Error("invalid plaintext size (must be 16 bytes)");
          for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = k(e), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
          for (var s = 1; s < t; s++) {
            for (var i = 0; i < 4; i++) r[i] = d[n[i] >> 24 & 255] ^ p[n[(i + 1) % 4] >> 16 & 255] ^ g[n[(i + 2) % 4] >> 8 & 255] ^ m[255 & n[(i + 3) % 4]] ^ this._Ke[s][i];
            n = r.slice()
          }
          for (var a, u = o(16), i = 0; i < 4; i++) a = this._Ke[t][i], u[4 * i] = (h[n[i] >> 24 & 255] ^ a >> 24) & 255, u[4 * i + 1] = (h[n[(i + 1) % 4] >> 16 & 255] ^ a >> 16) & 255, u[4 * i + 2] = (h[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8) & 255, u[4 * i + 3] = (h[255 & n[(i + 3) % 4]] ^ a) & 255;
          return u
        }, P.prototype.decrypt = function (e) {
          if (16 != e.length) throw Error("invalid ciphertext size (must be 16 bytes)");
          for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = k(e), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
          for (var s = 1; s < t; s++) {
            for (var i = 0; i < 4; i++) r[i] = y[n[i] >> 24 & 255] ^ v[n[(i + 3) % 4] >> 16 & 255] ^ b[n[(i + 2) % 4] >> 8 & 255] ^ w[255 & n[(i + 1) % 4]] ^ this._Kd[s][i];
            n = r.slice()
          }
          for (var a, u = o(16), i = 0; i < 4; i++) a = this._Kd[t][i], u[4 * i] = (f[n[i] >> 24 & 255] ^ a >> 24) & 255, u[4 * i + 1] = (f[n[(i + 3) % 4] >> 16 & 255] ^ a >> 16) & 255, u[4 * i + 2] = (f[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8) & 255, u[4 * i + 3] = (f[255 & n[(i + 1) % 4]] ^ a) & 255;
          return u
        };
        var C = function (e) {
          if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
          this.description = "Electronic Code Block", this.name = "ecb", this._aes = new P(e)
        };
        C.prototype.encrypt = function (e) {
          if ((e = i(e)).length % 16 != 0) throw Error("invalid plaintext size (must be multiple of 16 bytes)");
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) s(e, r, 0, n, n + 16), s(r = this._aes.encrypt(r), t, n);
          return t
        }, C.prototype.decrypt = function (e) {
          if ((e = i(e)).length % 16 != 0) throw Error("invalid ciphertext size (must be multiple of 16 bytes)");
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) s(e, r, 0, n, n + 16), s(r = this._aes.decrypt(r), t, n);
          return t
        };
        var _ = function (e, t) {
          if (!(this instanceof _)) throw Error("AES must be instanitated with `new`");
          if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
            if (16 != t.length) throw Error("invalid initialation vector size (must be 16 bytes)")
          } else t = o(16);
          this._lastCipherblock = i(t, !0), this._aes = new P(e)
        };
        _.prototype.encrypt = function (e) {
          if ((e = i(e)).length % 16 != 0) throw Error("invalid plaintext size (must be multiple of 16 bytes)");
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            s(e, r, 0, n, n + 16);
            for (var a = 0; a < 16; a++) r[a] ^= this._lastCipherblock[a];
            this._lastCipherblock = this._aes.encrypt(r), s(this._lastCipherblock, t, n)
          }
          return t
        }, _.prototype.decrypt = function (e) {
          if ((e = i(e)).length % 16 != 0) throw Error("invalid ciphertext size (must be multiple of 16 bytes)");
          for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
            s(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
            for (var a = 0; a < 16; a++) t[n + a] = r[a] ^ this._lastCipherblock[a];
            s(e, this._lastCipherblock, 0, n, n + 16)
          }
          return t
        };
        var M = function (e, t, r) {
          if (!(this instanceof M)) throw Error("AES must be instanitated with `new`");
          if (this.description = "Cipher Feedback", this.name = "cfb", t) {
            if (16 != t.length) throw Error("invalid initialation vector size (must be 16 size)")
          } else t = o(16);
          r || (r = 1), this.segmentSize = r, this._shiftRegister = i(t, !0), this._aes = new P(e)
        };
        M.prototype.encrypt = function (e) {
          if (e.length % this.segmentSize != 0) throw Error("invalid plaintext size (must be segmentSize bytes)");
          for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
          }
          return r
        }, M.prototype.decrypt = function (e) {
          if (e.length % this.segmentSize != 0) throw Error("invalid ciphertext size (must be segmentSize bytes)");
          for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
            t = this._aes.encrypt(this._shiftRegister);
            for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
            s(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), s(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
          }
          return r
        };
        var O = function (e, t) {
          if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");
          if (this.description = "Output Feedback", this.name = "ofb", t) {
            if (16 != t.length) throw Error("invalid initialation vector size (must be 16 bytes)")
          } else t = o(16);
          this._lastPrecipher = i(t, !0), this._lastPrecipherIndex = 16, this._aes = new P(e)
        };
        O.prototype.encrypt = function (e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
          return t
        }, O.prototype.decrypt = O.prototype.encrypt;
        var N = function (e) {
          if (!(this instanceof N)) throw Error("Counter must be instanitated with `new`");
          0 === e || e || (e = 1), "number" == typeof e ? (this._counter = o(16), this.setValue(e)) : this.setBytes(e)
        };
        N.prototype.setValue = function (e) {
          if ("number" != typeof e || parseInt(e) != e) throw Error("invalid counter value (must be an integer)");
          for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e >>= 8
        }, N.prototype.setBytes = function (e) {
          if (16 != (e = i(e, !0)).length) throw Error("invalid counter bytes size (must be 16 bytes)");
          this._counter = e
        }, N.prototype.increment = function () {
          for (var e = 15; e >= 0; e--)
            if (255 === this._counter[e]) this._counter[e] = 0;
            else {
              this._counter[e]++;
              break
            }
        };
        var R = function (e, t) {
          if (!(this instanceof R)) throw Error("AES must be instanitated with `new`");
          this.description = "Counter", this.name = "ctr", t instanceof N || (t = new N(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new P(e)
        };
        R.prototype.encrypt = function (e) {
          for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
          return t
        }, R.prototype.decrypt = R.prototype.encrypt, e.exports = {
          AES: P,
          Counter: N,
          ModeOfOperation: {
            ecb: C,
            cbc: _,
            cfb: M,
            ofb: O,
            ctr: R
          },
          utils: {
            hex: u,
            utf8: {
              toBytes: function (e) {
                var t = [],
                  r = 0;
                for (e = encodeURI(e); r < e.length;) {
                  var n = e.charCodeAt(r++);
                  37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
                }
                return i(t)
              },
              fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length;) {
                  var n = e[r];
                  n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                }
                return t.join("")
              }
            }
          },
          padding: {
            pkcs7: {
              pad: function (e) {
                var t = 16 - (e = i(e, !0)).length % 16,
                  r = o(e.length + t);
                s(e, r);
                for (var n = e.length; n < r.length; n++) r[n] = t;
                return r
              },
              strip: function (e) {
                if ((e = i(e, !0)).length < 16) throw Error("PKCS#7 invalid length");
                var t = e[e.length - 1];
                if (t > 16) throw Error("PKCS#7 padding byte out of range");
                for (var r = e.length - t, n = 0; n < t; n++)
                  if (e[r + n] !== t) throw Error("PKCS#7 invalid padding byte");
                var a = o(r);
                return s(e, a, 0, 0, r), a
              }
            }
          },
          _arrayTest: {
            coerceArray: i,
            createArray: o,
            copyArray: s
          }
        }
      }(0)
    },
    92882: function (e) {
      "use strict";
      for (var t = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < t.length; n++) {
        var i = t.charAt(n);
        if (void 0 !== r[i]) throw TypeError(i + " is ambiguous");
        r[i] = n
      }

      function o(e) {
        var t = e >> 25;
        return (33554431 & e) << 5 ^ 996825010 & -(t >> 0 & 1) ^ 642813549 & -(t >> 1 & 1) ^ 513874426 & -(t >> 2 & 1) ^ 1027748829 & -(t >> 3 & 1) ^ 705979059 & -(t >> 4 & 1)
      }

      function s(e) {
        for (var t = 1, r = 0; r < e.length; ++r) {
          var n = e.charCodeAt(r);
          if (n < 33 || n > 126) return "Invalid prefix (" + e + ")";
          t = o(t) ^ n >> 5
        }
        for (r = 0, t = o(t); r < e.length; ++r) {
          var i = e.charCodeAt(r);
          t = o(t) ^ 31 & i
        }
        return t
      }

      function a(e, t) {
        if (t = t || 90, e.length < 8) return e + " too short";
        if (e.length > t) return "Exceeds length limit";
        var n = e.toLowerCase(),
          i = e.toUpperCase();
        if (e !== n && e !== i) return "Mixed-case string " + e;
        var a = (e = n).lastIndexOf("1");
        if (-1 === a) return "No separator character for " + e;
        if (0 === a) return "Missing prefix for " + e;
        var u = e.slice(0, a),
          l = e.slice(a + 1);
        if (l.length < 6) return "Data too short";
        var c = s(u);
        if ("string" == typeof c) return c;
        for (var h = [], f = 0; f < l.length; ++f) {
          var d = l.charAt(f),
            p = r[d];
          if (void 0 === p) return "Unknown character " + d;
          c = o(c) ^ p, f + 6 >= l.length || h.push(p)
        }
        return 1 !== c ? "Invalid checksum for " + e : {
          prefix: u,
          words: h
        }
      }

      function u(e, t, r, n) {
        for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < e.length; ++u)
          for (i = i << t | e[u], o += t; o >= r;) a.push(i >> (o -= r) & s);
        if (n) o > 0 && a.push(i << r - o & s);
        else {
          if (o >= t) return "Excess padding";
          if (i << r - o & s) return "Non-zero padding"
        }
        return a
      }
      e.exports = {
        decodeUnsafe: function () {
          var e = a.apply(null, arguments);
          if ("object" == typeof e) return e
        },
        decode: function (e) {
          var t = a.apply(null, arguments);
          if ("object" == typeof t) return t;
          throw Error(t)
        },
        encode: function (e, r, n) {
          if (n = n || 90, e.length + 7 + r.length > n) throw TypeError("Exceeds length limit");
          var i = s(e = e.toLowerCase());
          if ("string" == typeof i) throw Error(i);
          for (var a = e + "1", u = 0; u < r.length; ++u) {
            var l = r[u];
            if (l >> 5 != 0) throw Error("Non 5-bit word");
            i = o(i) ^ l, a += t.charAt(l)
          }
          for (u = 0; u < 6; ++u) i = o(i);
          for (i ^= 1, u = 0; u < 6; ++u) {
            var c = i >> (5 - u) * 5 & 31;
            a += t.charAt(c)
          }
          return a
        },
        toWordsUnsafe: function (e) {
          var t = u(e, 8, 5, !0);
          if (Array.isArray(t)) return t
        },
        toWords: function (e) {
          var t = u(e, 8, 5, !0);
          if (Array.isArray(t)) return t;
          throw Error(t)
        },
        fromWordsUnsafe: function (e) {
          var t = u(e, 5, 8, !1);
          if (Array.isArray(t)) return t
        },
        fromWords: function (e) {
          var t = u(e, 5, 8, !1);
          if (Array.isArray(t)) return t;
          throw Error(t)
        }
      }
    },
    13550: function (e, t, r) {
      ! function (e, t) {
        "use strict";

        function n(e, t) {
          if (!e) throw Error(t || "Assertion failed")
        }

        function i(e, t) {
          e.super_ = t;
          var r = function () {};
          r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }

        function o(e, t, r) {
          if (o.isBN(e)) return e;
          this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (("le" === t || "be" === t) && (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
        }
        "object" == typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
        try {
          h = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer
        } catch (e) {}

        function s(e, t) {
          var r = e.charCodeAt(t);
          return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + e)
        }

        function a(e, t, r) {
          var n = s(e, r);
          return r - 1 >= t && (n |= s(e, r - 1) << 4), n
        }

        function u(e, t, r, i) {
          for (var o = 0, s = 0, a = Math.min(e.length, r), u = t; u < a; u++) {
            var l = e.charCodeAt(u) - 48;
            o *= i, s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l, n(l >= 0 && s < i, "Invalid character"), o += s
          }
          return o
        }

        function l(e, t) {
          e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red
        }
        if (o.isBN = function (e) {
            return e instanceof o || null !== e && "object" == typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
          }, o.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t
          }, o.min = function (e, t) {
            return 0 > e.cmp(t) ? e : t
          }, o.prototype._init = function (e, t, r) {
            if ("number" == typeof e) return this._initNumber(e, t, r);
            if ("object" == typeof e) return this._initArray(e, t, r);
            "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
            var i = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, r) : (this._parseBase(e, t, i), "le" === r && this._initArray(this.toArray(), t, r)))
          }, o.prototype._initNumber = function (e, t, r) {
            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
          }, o.prototype._initArray = function (e, t, r) {
            if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = e.length - 1, i = 0; s >= 0; s -= 3) o = e[s] | e[s - 1] << 8 | e[s - 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < e.length; s += 3) o = e[s] | e[s + 1] << 8 | e[s + 2] << 16, this.words[i] |= o << a & 67108863, this.words[i + 1] = o >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, i++);
            return this._strip()
          }, o.prototype._parseHex = function (e, t, r) {
            this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = e.length - 1; i >= t; i -= 2) n = a(e, t, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            else
              for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2) n = a(e, t, i) << o, this.words[s] |= 67108863 & n, o >= 18 ? (o -= 18, s += 1, this.words[s] |= n >>> 26) : o += 8;
            this._strip()
          }, o.prototype._parseBase = function (e, t, r) {
            this.words = [0], this.length = 1;
            for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
            n--, i = i / t | 0;
            for (var o = e.length - r, s = o % n, a = Math.min(o, o - s) + r, l = 0, c = r; c < a; c += n) l = u(e, c, c + n, t), this.imuln(i), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
            if (0 !== s) {
              var h = 1;
              for (l = u(e, c, e.length, t), c = 0; c < s; c++) h *= t;
              this.imuln(h), this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l)
            }
            this._strip()
          }, o.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
            e.length = this.length, e.negative = this.negative, e.red = this.red
          }, o.prototype._move = function (e) {
            l(e, this)
          }, o.prototype.clone = function () {
            var e = new o(null);
            return this.copy(e), e
          }, o.prototype._expand = function (e) {
            for (; this.length < e;) this.words[this.length++] = 0;
            return this
          }, o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
            return this._normSign()
          }, o.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
          }, "undefined" != typeof Symbol && "function" == typeof Symbol.for) try {
          o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c
        } catch (e) {
          o.prototype.inspect = c
        } else o.prototype.inspect = c;

        function c() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var h, f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
          d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

        function g(e, t, r) {
          r.negative = t.negative ^ e.negative;
          var n = e.length + t.length | 0;
          r.length = n, n = n - 1 | 0;
          var i = 0 | e.words[0],
            o = 0 | t.words[0],
            s = i * o,
            a = 67108863 & s,
            u = s / 67108864 | 0;
          r.words[0] = a;
          for (var l = 1; l < n; l++) {
            for (var c = u >>> 26, h = 67108863 & u, f = Math.min(l, t.length - 1), d = Math.max(0, l - e.length + 1); d <= f; d++) {
              var p = l - d | 0;
              c += (s = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + h) / 67108864 | 0, h = 67108863 & s
            }
            r.words[l] = 0 | h, u = 0 | c
          }
          return 0 !== u ? r.words[l] = 0 | u : r.length--, r._strip()
        }
        o.prototype.toString = function (e, t) {
          if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = ((a << i | o) & 16777215).toString(16);
              o = a >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, s--), r = 0 !== o || s !== this.length - 1 ? f[6 - u.length] + u + r : u + r
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % t != 0;) r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var l = d[e],
              c = p[e];
            r = "";
            var h = this.clone();
            for (h.negative = 0; !h.isZero();) {
              var g = h.modrn(c).toString(e);
              r = (h = h.idivn(c)).isZero() ? g + r : f[l - g.length] + g + r
            }
            for (this.isZero() && (r = "0" + r); r.length % t != 0;) r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r
          }
          n(!1, "Base should be between 2 and 36")
        }, o.prototype.toNumber = function () {
          var e = this.words[0];
          return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
        }, o.prototype.toJSON = function () {
          return this.toString(16, 2)
        }, h && (o.prototype.toBuffer = function (e, t) {
          return this.toArrayLike(h, e, t)
        }), o.prototype.toArray = function (e, t) {
          return this.toArrayLike(Array, e, t)
        }, o.prototype.toArrayLike = function (e, t, r) {
          this._strip();
          var i = this.byteLength(),
            o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
          var s = e.allocUnsafe ? e.allocUnsafe(o) : new e(o);
          return this["_toArrayLike" + ("le" === t ? "LE" : "BE")](s, i), s
        }, o.prototype._toArrayLikeLE = function (e, t) {
          for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
            var s = this.words[i] << o | n;
            e[r++] = 255 & s, r < e.length && (e[r++] = s >> 8 & 255), r < e.length && (e[r++] = s >> 16 & 255), 6 === o ? (r < e.length && (e[r++] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
          }
          if (r < e.length)
            for (e[r++] = n; r < e.length;) e[r++] = 0
        }, o.prototype._toArrayLikeBE = function (e, t) {
          for (var r = e.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
            var s = this.words[i] << o | n;
            e[r--] = 255 & s, r >= 0 && (e[r--] = s >> 8 & 255), r >= 0 && (e[r--] = s >> 16 & 255), 6 === o ? (r >= 0 && (e[r--] = s >> 24 & 255), n = 0, o = 0) : (n = s >>> 24, o += 2)
          }
          if (r >= 0)
            for (e[r--] = n; r >= 0;) e[r--] = 0
        }, Math.clz32 ? o.prototype._countBits = function (e) {
          return 32 - Math.clz32(e)
        } : o.prototype._countBits = function (e) {
          var t = e,
            r = 0;
          return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
        }, o.prototype._zeroBits = function (e) {
          if (0 === e) return 26;
          var t = e,
            r = 0;
          return (8191 & t) == 0 && (r += 13, t >>>= 13), (127 & t) == 0 && (r += 7, t >>>= 7), (15 & t) == 0 && (r += 4, t >>>= 4), (3 & t) == 0 && (r += 2, t >>>= 2), (1 & t) == 0 && r++, r
        }, o.prototype.bitLength = function () {
          var e = this.words[this.length - 1],
            t = this._countBits(e);
          return (this.length - 1) * 26 + t
        }, o.prototype.zeroBits = function () {
          if (this.isZero()) return 0;
          for (var e = 0, t = 0; t < this.length; t++) {
            var r = this._zeroBits(this.words[t]);
            if (e += r, 26 !== r) break
          }
          return e
        }, o.prototype.byteLength = function () {
          return Math.ceil(this.bitLength() / 8)
        }, o.prototype.toTwos = function (e) {
          return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
        }, o.prototype.fromTwos = function (e) {
          return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
        }, o.prototype.isNeg = function () {
          return 0 !== this.negative
        }, o.prototype.neg = function () {
          return this.clone().ineg()
        }, o.prototype.ineg = function () {
          return this.isZero() || (this.negative ^= 1), this
        }, o.prototype.iuor = function (e) {
          for (; this.length < e.length;) this.words[this.length++] = 0;
          for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
          return this._strip()
        }, o.prototype.ior = function (e) {
          return n((this.negative | e.negative) == 0), this.iuor(e)
        }, o.prototype.or = function (e) {
          return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
        }, o.prototype.uor = function (e) {
          return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
        }, o.prototype.iuand = function (e) {
          var t;
          t = this.length > e.length ? e : this;
          for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
          return this.length = t.length, this._strip()
        }, o.prototype.iand = function (e) {
          return n((this.negative | e.negative) == 0), this.iuand(e)
        }, o.prototype.and = function (e) {
          return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
        }, o.prototype.uand = function (e) {
          return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
        }, o.prototype.iuxor = function (e) {
          this.length > e.length ? (t = this, r = e) : (t = e, r = this);
          for (var t, r, n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
          if (this !== t)
            for (; n < t.length; n++) this.words[n] = t.words[n];
          return this.length = t.length, this._strip()
        }, o.prototype.ixor = function (e) {
          return n((this.negative | e.negative) == 0), this.iuxor(e)
        }, o.prototype.xor = function (e) {
          return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
        }, o.prototype.uxor = function (e) {
          return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
        }, o.prototype.inotn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = 0 | Math.ceil(e / 26),
            r = e % 26;
          this._expand(t), r > 0 && t--;
          for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
          return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this._strip()
        }, o.prototype.notn = function (e) {
          return this.clone().inotn(e)
        }, o.prototype.setn = function (e, t) {
          n("number" == typeof e && e >= 0);
          var r = e / 26 | 0,
            i = e % 26;
          return this._expand(r + 1), t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this._strip()
        }, o.prototype.iadd = function (e) {
          if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
          if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
          this.length > e.length ? (r = this, n = e) : (r = e, n = this);
          for (var t, r, n, i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
          for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
          if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
          else if (r !== this)
            for (; o < r.length; o++) this.words[o] = r.words[o];
          return this
        }, o.prototype.add = function (e) {
          var t;
          return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
        }, o.prototype.isub = function (e) {
          if (0 !== e.negative) {
            e.negative = 0;
            var t, r, n = this.iadd(e);
            return e.negative = 1, n._normSign()
          }
          if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
          var i = this.cmp(e);
          if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          i > 0 ? (t = this, r = e) : (t = e, r = this);
          for (var o = 0, s = 0; s < r.length; s++) o = (n = (0 | t.words[s]) - (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
          for (; 0 !== o && s < t.length; s++) o = (n = (0 | t.words[s]) + o) >> 26, this.words[s] = 67108863 & n;
          if (0 === o && s < t.length && t !== this)
            for (; s < t.length; s++) this.words[s] = t.words[s];
          return this.length = Math.max(this.length, s), t !== this && (this.negative = 1), this._strip()
        }, o.prototype.sub = function (e) {
          return this.clone().isub(e)
        };
        var m = function (e, t, r) {
          var n, i, o, s = e.words,
            a = t.words,
            u = r.words,
            l = 0,
            c = 0 | s[0],
            h = 8191 & c,
            f = c >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            g = d >>> 13,
            m = 0 | s[2],
            y = 8191 & m,
            v = m >>> 13,
            b = 0 | s[3],
            w = 8191 & b,
            A = b >>> 13,
            E = 0 | s[4],
            S = 8191 & E,
            x = E >>> 13,
            k = 0 | s[5],
            P = 8191 & k,
            C = k >>> 13,
            _ = 0 | s[6],
            M = 8191 & _,
            O = _ >>> 13,
            N = 0 | s[7],
            R = 8191 & N,
            T = N >>> 13,
            I = 0 | s[8],
            B = 8191 & I,
            L = I >>> 13,
            F = 0 | s[9],
            D = 8191 & F,
            U = F >>> 13,
            j = 0 | a[0],
            z = 8191 & j,
            H = j >>> 13,
            G = 0 | a[1],
            q = 8191 & G,
            K = G >>> 13,
            V = 0 | a[2],
            J = 8191 & V,
            W = V >>> 13,
            Q = 0 | a[3],
            Y = 8191 & Q,
            Z = Q >>> 13,
            X = 0 | a[4],
            $ = 8191 & X,
            ee = X >>> 13,
            et = 0 | a[5],
            er = 8191 & et,
            en = et >>> 13,
            ei = 0 | a[6],
            eo = 8191 & ei,
            es = ei >>> 13,
            ea = 0 | a[7],
            eu = 8191 & ea,
            el = ea >>> 13,
            ec = 0 | a[8],
            eh = 8191 & ec,
            ef = ec >>> 13,
            ed = 0 | a[9],
            ep = 8191 & ed,
            eg = ed >>> 13;
          r.negative = e.negative ^ t.negative, r.length = 19;
          var em = (l + (n = Math.imul(h, z)) | 0) + ((8191 & (i = (i = Math.imul(h, H)) + Math.imul(f, z) | 0)) << 13) | 0;
          l = ((o = Math.imul(f, H)) + (i >>> 13) | 0) + (em >>> 26) | 0, em &= 67108863, n = Math.imul(p, z), i = (i = Math.imul(p, H)) + Math.imul(g, z) | 0, o = Math.imul(g, H);
          var ey = (l + (n = n + Math.imul(h, q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, K) | 0) + Math.imul(f, q) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, K) | 0) + (i >>> 13) | 0) + (ey >>> 26) | 0, ey &= 67108863, n = Math.imul(y, z), i = (i = Math.imul(y, H)) + Math.imul(v, z) | 0, o = Math.imul(v, H), n = n + Math.imul(p, q) | 0, i = (i = i + Math.imul(p, K) | 0) + Math.imul(g, q) | 0, o = o + Math.imul(g, K) | 0;
          var ev = (l + (n = n + Math.imul(h, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, W) | 0) + Math.imul(f, J) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, W) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0, ev &= 67108863, n = Math.imul(w, z), i = (i = Math.imul(w, H)) + Math.imul(A, z) | 0, o = Math.imul(A, H), n = n + Math.imul(y, q) | 0, i = (i = i + Math.imul(y, K) | 0) + Math.imul(v, q) | 0, o = o + Math.imul(v, K) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(g, J) | 0, o = o + Math.imul(g, W) | 0;
          var eb = (l + (n = n + Math.imul(h, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, Z) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, Z) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0, eb &= 67108863, n = Math.imul(S, z), i = (i = Math.imul(S, H)) + Math.imul(x, z) | 0, o = Math.imul(x, H), n = n + Math.imul(w, q) | 0, i = (i = i + Math.imul(w, K) | 0) + Math.imul(A, q) | 0, o = o + Math.imul(A, K) | 0, n = n + Math.imul(y, J) | 0, i = (i = i + Math.imul(y, W) | 0) + Math.imul(v, J) | 0, o = o + Math.imul(v, W) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, Z) | 0) + Math.imul(g, Y) | 0, o = o + Math.imul(g, Z) | 0;
          var ew = (l + (n = n + Math.imul(h, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ee) | 0) + Math.imul(f, $) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, ee) | 0) + (i >>> 13) | 0) + (ew >>> 26) | 0, ew &= 67108863, n = Math.imul(P, z), i = (i = Math.imul(P, H)) + Math.imul(C, z) | 0, o = Math.imul(C, H), n = n + Math.imul(S, q) | 0, i = (i = i + Math.imul(S, K) | 0) + Math.imul(x, q) | 0, o = o + Math.imul(x, K) | 0, n = n + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, W) | 0) + Math.imul(A, J) | 0, o = o + Math.imul(A, W) | 0, n = n + Math.imul(y, Y) | 0, i = (i = i + Math.imul(y, Z) | 0) + Math.imul(v, Y) | 0, o = o + Math.imul(v, Z) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(g, $) | 0, o = o + Math.imul(g, ee) | 0;
          var eA = (l + (n = n + Math.imul(h, er) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, en) | 0) + Math.imul(f, er) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, en) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, n = Math.imul(M, z), i = (i = Math.imul(M, H)) + Math.imul(O, z) | 0, o = Math.imul(O, H), n = n + Math.imul(P, q) | 0, i = (i = i + Math.imul(P, K) | 0) + Math.imul(C, q) | 0, o = o + Math.imul(C, K) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, W) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, W) | 0, n = n + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, Z) | 0) + Math.imul(A, Y) | 0, o = o + Math.imul(A, Z) | 0, n = n + Math.imul(y, $) | 0, i = (i = i + Math.imul(y, ee) | 0) + Math.imul(v, $) | 0, o = o + Math.imul(v, ee) | 0, n = n + Math.imul(p, er) | 0, i = (i = i + Math.imul(p, en) | 0) + Math.imul(g, er) | 0, o = o + Math.imul(g, en) | 0;
          var eE = (l + (n = n + Math.imul(h, eo) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, es) | 0) + Math.imul(f, eo) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, es) | 0) + (i >>> 13) | 0) + (eE >>> 26) | 0, eE &= 67108863, n = Math.imul(R, z), i = (i = Math.imul(R, H)) + Math.imul(T, z) | 0, o = Math.imul(T, H), n = n + Math.imul(M, q) | 0, i = (i = i + Math.imul(M, K) | 0) + Math.imul(O, q) | 0, o = o + Math.imul(O, K) | 0, n = n + Math.imul(P, J) | 0, i = (i = i + Math.imul(P, W) | 0) + Math.imul(C, J) | 0, o = o + Math.imul(C, W) | 0, n = n + Math.imul(S, Y) | 0, i = (i = i + Math.imul(S, Z) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, Z) | 0, n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(y, er) | 0, i = (i = i + Math.imul(y, en) | 0) + Math.imul(v, er) | 0, o = o + Math.imul(v, en) | 0, n = n + Math.imul(p, eo) | 0, i = (i = i + Math.imul(p, es) | 0) + Math.imul(g, eo) | 0, o = o + Math.imul(g, es) | 0;
          var eS = (l + (n = n + Math.imul(h, eu) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, el) | 0) + Math.imul(f, eu) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, el) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0, eS &= 67108863, n = Math.imul(B, z), i = (i = Math.imul(B, H)) + Math.imul(L, z) | 0, o = Math.imul(L, H), n = n + Math.imul(R, q) | 0, i = (i = i + Math.imul(R, K) | 0) + Math.imul(T, q) | 0, o = o + Math.imul(T, K) | 0, n = n + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, W) | 0) + Math.imul(O, J) | 0, o = o + Math.imul(O, W) | 0, n = n + Math.imul(P, Y) | 0, i = (i = i + Math.imul(P, Z) | 0) + Math.imul(C, Y) | 0, o = o + Math.imul(C, Z) | 0, n = n + Math.imul(S, $) | 0, i = (i = i + Math.imul(S, ee) | 0) + Math.imul(x, $) | 0, o = o + Math.imul(x, ee) | 0, n = n + Math.imul(w, er) | 0, i = (i = i + Math.imul(w, en) | 0) + Math.imul(A, er) | 0, o = o + Math.imul(A, en) | 0, n = n + Math.imul(y, eo) | 0, i = (i = i + Math.imul(y, es) | 0) + Math.imul(v, eo) | 0, o = o + Math.imul(v, es) | 0, n = n + Math.imul(p, eu) | 0, i = (i = i + Math.imul(p, el) | 0) + Math.imul(g, eu) | 0, o = o + Math.imul(g, el) | 0;
          var ex = (l + (n = n + Math.imul(h, eh) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, ef) | 0) + Math.imul(f, eh) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, ef) | 0) + (i >>> 13) | 0) + (ex >>> 26) | 0, ex &= 67108863, n = Math.imul(D, z), i = (i = Math.imul(D, H)) + Math.imul(U, z) | 0, o = Math.imul(U, H), n = n + Math.imul(B, q) | 0, i = (i = i + Math.imul(B, K) | 0) + Math.imul(L, q) | 0, o = o + Math.imul(L, K) | 0, n = n + Math.imul(R, J) | 0, i = (i = i + Math.imul(R, W) | 0) + Math.imul(T, J) | 0, o = o + Math.imul(T, W) | 0, n = n + Math.imul(M, Y) | 0, i = (i = i + Math.imul(M, Z) | 0) + Math.imul(O, Y) | 0, o = o + Math.imul(O, Z) | 0, n = n + Math.imul(P, $) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(C, $) | 0, o = o + Math.imul(C, ee) | 0, n = n + Math.imul(S, er) | 0, i = (i = i + Math.imul(S, en) | 0) + Math.imul(x, er) | 0, o = o + Math.imul(x, en) | 0, n = n + Math.imul(w, eo) | 0, i = (i = i + Math.imul(w, es) | 0) + Math.imul(A, eo) | 0, o = o + Math.imul(A, es) | 0, n = n + Math.imul(y, eu) | 0, i = (i = i + Math.imul(y, el) | 0) + Math.imul(v, eu) | 0, o = o + Math.imul(v, el) | 0, n = n + Math.imul(p, eh) | 0, i = (i = i + Math.imul(p, ef) | 0) + Math.imul(g, eh) | 0, o = o + Math.imul(g, ef) | 0;
          var ek = (l + (n = n + Math.imul(h, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(h, eg) | 0) + Math.imul(f, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(f, eg) | 0) + (i >>> 13) | 0) + (ek >>> 26) | 0, ek &= 67108863, n = Math.imul(D, q), i = (i = Math.imul(D, K)) + Math.imul(U, q) | 0, o = Math.imul(U, K), n = n + Math.imul(B, J) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, W) | 0, n = n + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, Z) | 0) + Math.imul(T, Y) | 0, o = o + Math.imul(T, Z) | 0, n = n + Math.imul(M, $) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(O, $) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(P, er) | 0, i = (i = i + Math.imul(P, en) | 0) + Math.imul(C, er) | 0, o = o + Math.imul(C, en) | 0, n = n + Math.imul(S, eo) | 0, i = (i = i + Math.imul(S, es) | 0) + Math.imul(x, eo) | 0, o = o + Math.imul(x, es) | 0, n = n + Math.imul(w, eu) | 0, i = (i = i + Math.imul(w, el) | 0) + Math.imul(A, eu) | 0, o = o + Math.imul(A, el) | 0, n = n + Math.imul(y, eh) | 0, i = (i = i + Math.imul(y, ef) | 0) + Math.imul(v, eh) | 0, o = o + Math.imul(v, ef) | 0;
          var eP = (l + (n = n + Math.imul(p, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, eg) | 0) + Math.imul(g, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(g, eg) | 0) + (i >>> 13) | 0) + (eP >>> 26) | 0, eP &= 67108863, n = Math.imul(D, J), i = (i = Math.imul(D, W)) + Math.imul(U, J) | 0, o = Math.imul(U, W), n = n + Math.imul(B, Y) | 0, i = (i = i + Math.imul(B, Z) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, Z) | 0, n = n + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(T, $) | 0, o = o + Math.imul(T, ee) | 0, n = n + Math.imul(M, er) | 0, i = (i = i + Math.imul(M, en) | 0) + Math.imul(O, er) | 0, o = o + Math.imul(O, en) | 0, n = n + Math.imul(P, eo) | 0, i = (i = i + Math.imul(P, es) | 0) + Math.imul(C, eo) | 0, o = o + Math.imul(C, es) | 0, n = n + Math.imul(S, eu) | 0, i = (i = i + Math.imul(S, el) | 0) + Math.imul(x, eu) | 0, o = o + Math.imul(x, el) | 0, n = n + Math.imul(w, eh) | 0, i = (i = i + Math.imul(w, ef) | 0) + Math.imul(A, eh) | 0, o = o + Math.imul(A, ef) | 0;
          var eC = (l + (n = n + Math.imul(y, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(y, eg) | 0) + Math.imul(v, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(v, eg) | 0) + (i >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, n = Math.imul(D, Y), i = (i = Math.imul(D, Z)) + Math.imul(U, Y) | 0, o = Math.imul(U, Z), n = n + Math.imul(B, $) | 0, i = (i = i + Math.imul(B, ee) | 0) + Math.imul(L, $) | 0, o = o + Math.imul(L, ee) | 0, n = n + Math.imul(R, er) | 0, i = (i = i + Math.imul(R, en) | 0) + Math.imul(T, er) | 0, o = o + Math.imul(T, en) | 0, n = n + Math.imul(M, eo) | 0, i = (i = i + Math.imul(M, es) | 0) + Math.imul(O, eo) | 0, o = o + Math.imul(O, es) | 0, n = n + Math.imul(P, eu) | 0, i = (i = i + Math.imul(P, el) | 0) + Math.imul(C, eu) | 0, o = o + Math.imul(C, el) | 0, n = n + Math.imul(S, eh) | 0, i = (i = i + Math.imul(S, ef) | 0) + Math.imul(x, eh) | 0, o = o + Math.imul(x, ef) | 0;
          var e_ = (l + (n = n + Math.imul(w, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, eg) | 0) + Math.imul(A, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(A, eg) | 0) + (i >>> 13) | 0) + (e_ >>> 26) | 0, e_ &= 67108863, n = Math.imul(D, $), i = (i = Math.imul(D, ee)) + Math.imul(U, $) | 0, o = Math.imul(U, ee), n = n + Math.imul(B, er) | 0, i = (i = i + Math.imul(B, en) | 0) + Math.imul(L, er) | 0, o = o + Math.imul(L, en) | 0, n = n + Math.imul(R, eo) | 0, i = (i = i + Math.imul(R, es) | 0) + Math.imul(T, eo) | 0, o = o + Math.imul(T, es) | 0, n = n + Math.imul(M, eu) | 0, i = (i = i + Math.imul(M, el) | 0) + Math.imul(O, eu) | 0, o = o + Math.imul(O, el) | 0, n = n + Math.imul(P, eh) | 0, i = (i = i + Math.imul(P, ef) | 0) + Math.imul(C, eh) | 0, o = o + Math.imul(C, ef) | 0;
          var eM = (l + (n = n + Math.imul(S, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, eg) | 0) + Math.imul(x, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(x, eg) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0, eM &= 67108863, n = Math.imul(D, er), i = (i = Math.imul(D, en)) + Math.imul(U, er) | 0, o = Math.imul(U, en), n = n + Math.imul(B, eo) | 0, i = (i = i + Math.imul(B, es) | 0) + Math.imul(L, eo) | 0, o = o + Math.imul(L, es) | 0, n = n + Math.imul(R, eu) | 0, i = (i = i + Math.imul(R, el) | 0) + Math.imul(T, eu) | 0, o = o + Math.imul(T, el) | 0, n = n + Math.imul(M, eh) | 0, i = (i = i + Math.imul(M, ef) | 0) + Math.imul(O, eh) | 0, o = o + Math.imul(O, ef) | 0;
          var eO = (l + (n = n + Math.imul(P, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, eg) | 0) + Math.imul(C, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(C, eg) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, n = Math.imul(D, eo), i = (i = Math.imul(D, es)) + Math.imul(U, eo) | 0, o = Math.imul(U, es), n = n + Math.imul(B, eu) | 0, i = (i = i + Math.imul(B, el) | 0) + Math.imul(L, eu) | 0, o = o + Math.imul(L, el) | 0, n = n + Math.imul(R, eh) | 0, i = (i = i + Math.imul(R, ef) | 0) + Math.imul(T, eh) | 0, o = o + Math.imul(T, ef) | 0;
          var eN = (l + (n = n + Math.imul(M, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(M, eg) | 0) + Math.imul(O, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(O, eg) | 0) + (i >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, n = Math.imul(D, eu), i = (i = Math.imul(D, el)) + Math.imul(U, eu) | 0, o = Math.imul(U, el), n = n + Math.imul(B, eh) | 0, i = (i = i + Math.imul(B, ef) | 0) + Math.imul(L, eh) | 0, o = o + Math.imul(L, ef) | 0;
          var eR = (l + (n = n + Math.imul(R, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, eg) | 0) + Math.imul(T, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(T, eg) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, n = Math.imul(D, eh), i = (i = Math.imul(D, ef)) + Math.imul(U, eh) | 0, o = Math.imul(U, ef);
          var eT = (l + (n = n + Math.imul(B, ep) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, eg) | 0) + Math.imul(L, ep) | 0)) << 13) | 0;
          l = ((o = o + Math.imul(L, eg) | 0) + (i >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863;
          var eI = (l + (n = Math.imul(D, ep)) | 0) + ((8191 & (i = (i = Math.imul(D, eg)) + Math.imul(U, ep) | 0)) << 13) | 0;
          return l = ((o = Math.imul(U, eg)) + (i >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, u[0] = em, u[1] = ey, u[2] = ev, u[3] = eb, u[4] = ew, u[5] = eA, u[6] = eE, u[7] = eS, u[8] = ex, u[9] = ek, u[10] = eP, u[11] = eC, u[12] = e_, u[13] = eM, u[14] = eO, u[15] = eN, u[16] = eR, u[17] = eT, u[18] = eI, 0 !== l && (u[19] = l, r.length++), r
        };

        function y(e, t, r) {
          r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (var a = 67108863 & n, u = Math.min(o, t.length - 1), l = Math.max(0, o - e.length + 1); l <= u; l++) {
              var c = o - l,
                h = (0 | e.words[c]) * (0 | t.words[l]),
                f = 67108863 & h;
              s = s + (h / 67108864 | 0) | 0, a = 67108863 & (f = f + a | 0), i += (s = s + (f >>> 26) | 0) >>> 26, s &= 67108863
            }
            r.words[o] = a, n = s, s = i
          }
          return 0 !== n ? r.words[o] = n : r.length--, r._strip()
        }

        function v(e, t) {
          this.x = e, this.y = t
        }
        Math.imul || (m = g), o.prototype.mulTo = function (e, t) {
          var r, n = this.length + e.length;
          return 10 === this.length && 10 === e.length ? m(this, e, t) : n < 63 ? g(this, e, t) : y(this, e, t)
        }, v.prototype.makeRBT = function (e) {
          for (var t = Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
          return t
        }, v.prototype.revBin = function (e, t, r) {
          if (0 === e || e === r - 1) return e;
          for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
          return n
        }, v.prototype.permute = function (e, t, r, n, i, o) {
          for (var s = 0; s < o; s++) n[s] = t[e[s]], i[s] = r[e[s]]
        }, v.prototype.transform = function (e, t, r, n, i, o) {
          this.permute(o, e, t, r, n, i);
          for (var s = 1; s < i; s <<= 1)
            for (var a = s << 1, u = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), c = 0; c < i; c += a)
              for (var h = u, f = l, d = 0; d < s; d++) {
                var p = r[c + d],
                  g = n[c + d],
                  m = r[c + d + s],
                  y = n[c + d + s],
                  v = h * m - f * y;
                y = h * y + f * m, m = v, r[c + d] = p + m, n[c + d] = g + y, r[c + d + s] = p - m, n[c + d + s] = g - y, d !== a && (v = u * h - l * f, f = u * f + l * h, h = v)
              }
        }, v.prototype.guessLen13b = function (e, t) {
          var r = 1 | Math.max(t, e),
            n = 1 & r,
            i = 0;
          for (r = r / 2 | 0; r; r >>>= 1) i++;
          return 1 << i + 1 + n
        }, v.prototype.conjugate = function (e, t, r) {
          if (!(r <= 1))
            for (var n = 0; n < r / 2; n++) {
              var i = e[n];
              e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
            }
        }, v.prototype.normalize13b = function (e, t) {
          for (var r = 0, n = 0; n < t / 2; n++) {
            var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
            e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
          }
          return e
        }, v.prototype.convert13b = function (e, t, r, i) {
          for (var o = 0, s = 0; s < t; s++) o += 0 | e[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;
          for (s = 2 * t; s < i; ++s) r[s] = 0;
          n(0 === o), n((-8192 & o) == 0)
        }, v.prototype.stub = function (e) {
          for (var t = Array(e), r = 0; r < e; r++) t[r] = 0;
          return t
        }, v.prototype.mulp = function (e, t, r) {
          var n = 2 * this.guessLen13b(e.length, t.length),
            i = this.makeRBT(n),
            o = this.stub(n),
            s = Array(n),
            a = Array(n),
            u = Array(n),
            l = Array(n),
            c = Array(n),
            h = Array(n),
            f = r.words;
          f.length = n, this.convert13b(e.words, e.length, s, n), this.convert13b(t.words, t.length, l, n), this.transform(s, o, a, u, n, i), this.transform(l, o, c, h, n, i);
          for (var d = 0; d < n; d++) {
            var p = a[d] * c[d] - u[d] * h[d];
            u[d] = a[d] * h[d] + u[d] * c[d], a[d] = p
          }
          return this.conjugate(a, u, n), this.transform(a, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r._strip()
        }, o.prototype.mul = function (e) {
          var t = new o(null);
          return t.words = Array(this.length + e.length), this.mulTo(e, t)
        }, o.prototype.mulf = function (e) {
          var t = new o(null);
          return t.words = Array(this.length + e.length), y(this, e, t)
        }, o.prototype.imul = function (e) {
          return this.clone().mulTo(e, this)
        }, o.prototype.imuln = function (e) {
          var t = e < 0;
          t && (e = -e), n("number" == typeof e), n(e < 67108864);
          for (var r = 0, i = 0; i < this.length; i++) {
            var o = (0 | this.words[i]) * e,
              s = (67108863 & o) + (67108863 & r);
            r >>= 26, r += (o / 67108864 | 0) + (s >>> 26), this.words[i] = 67108863 & s
          }
          return 0 !== r && (this.words[i] = r, this.length++), t ? this.ineg() : this
        }, o.prototype.muln = function (e) {
          return this.clone().imuln(e)
        }, o.prototype.sqr = function () {
          return this.mul(this)
        }, o.prototype.isqr = function () {
          return this.imul(this.clone())
        }, o.prototype.pow = function (e) {
          var t = function (e) {
            for (var t = Array(e.bitLength()), r = 0; r < t.length; r++) {
              var n = r / 26 | 0,
                i = r % 26;
              t[r] = e.words[n] >>> i & 1
            }
            return t
          }(e);
          if (0 === t.length) return new o(1);
          for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
          if (++n < t.length)
            for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
          return r
        }, o.prototype.iushln = function (e) {
          n("number" == typeof e && e >= 0);
          var t, r = e % 26,
            i = (e - r) / 26,
            o = 67108863 >>> 26 - r << 26 - r;
          if (0 !== r) {
            var s = 0;
            for (t = 0; t < this.length; t++) {
              var a = this.words[t] & o,
                u = (0 | this.words[t]) - a << r;
              this.words[t] = u | s, s = a >>> 26 - r
            }
            s && (this.words[t] = s, this.length++)
          }
          if (0 !== i) {
            for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
            for (t = 0; t < i; t++) this.words[t] = 0;
            this.length += i
          }
          return this._strip()
        }, o.prototype.ishln = function (e) {
          return n(0 === this.negative), this.iushln(e)
        }, o.prototype.iushrn = function (e, t, r) {
          n("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
          var i, o = e % 26,
            s = Math.min((e - o) / 26, this.length),
            a = 67108863 ^ 67108863 >>> o << o,
            u = r;
          if (i -= s, i = Math.max(0, i), u) {
            for (var l = 0; l < s; l++) u.words[l] = this.words[l];
            u.length = s
          }
          if (0 === s);
          else if (this.length > s)
            for (this.length -= s, l = 0; l < this.length; l++) this.words[l] = this.words[l + s];
          else this.words[0] = 0, this.length = 1;
          var c = 0;
          for (l = this.length - 1; l >= 0 && (0 !== c || l >= i); l--) {
            var h = 0 | this.words[l];
            this.words[l] = c << 26 - o | h >>> o, c = h & a
          }
          return u && 0 !== c && (u.words[u.length++] = c), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
        }, o.prototype.ishrn = function (e, t, r) {
          return n(0 === this.negative), this.iushrn(e, t, r)
        }, o.prototype.shln = function (e) {
          return this.clone().ishln(e)
        }, o.prototype.ushln = function (e) {
          return this.clone().iushln(e)
        }, o.prototype.shrn = function (e) {
          return this.clone().ishrn(e)
        }, o.prototype.ushrn = function (e) {
          return this.clone().iushrn(e)
        }, o.prototype.testn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = e % 26,
            r = (e - t) / 26;
          return !(this.length <= r) && !!(this.words[r] & 1 << t)
        }, o.prototype.imaskn = function (e) {
          n("number" == typeof e && e >= 0);
          var t = e % 26,
            r = (e - t) / 26;
          return (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) ? this : (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this._strip())
        }, o.prototype.maskn = function (e) {
          return this.clone().imaskn(e)
        }, o.prototype.iaddn = function (e) {
          return (n("number" == typeof e), n(e < 67108864), e < 0) ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
        }, o.prototype._iaddn = function (e) {
          this.words[0] += e;
          for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
          return this.length = Math.max(this.length, t + 1), this
        }, o.prototype.isubn = function (e) {
          if (n("number" == typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
          if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
          if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
          else
            for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
          return this._strip()
        }, o.prototype.addn = function (e) {
          return this.clone().iaddn(e)
        }, o.prototype.subn = function (e) {
          return this.clone().isubn(e)
        }, o.prototype.iabs = function () {
          return this.negative = 0, this
        }, o.prototype.abs = function () {
          return this.clone().iabs()
        }, o.prototype._ishlnsubmul = function (e, t, r) {
          var i, o, s = e.length + r;
          this._expand(s);
          var a = 0;
          for (i = 0; i < e.length; i++) {
            o = (0 | this.words[i + r]) + a;
            var u = (0 | e.words[i]) * t;
            o -= 67108863 & u, a = (o >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
          }
          for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;
          if (0 === a) return this._strip();
          for (n(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;
          return this.negative = 1, this._strip()
        }, o.prototype._wordDiv = function (e, t) {
          var r, n = this.length - e.length,
            i = this.clone(),
            s = e,
            a = 0 | s.words[s.length - 1];
          0 != (n = 26 - this._countBits(a)) && (s = s.ushln(n), i.iushln(n), a = 0 | s.words[s.length - 1]);
          var u = i.length - s.length;
          if ("mod" !== t) {
            (r = new o(null)).length = u + 1, r.words = Array(r.length);
            for (var l = 0; l < r.length; l++) r.words[l] = 0
          }
          var c = i.clone()._ishlnsubmul(s, 1, u);
          0 === c.negative && (i = c, r && (r.words[u] = 1));
          for (var h = u - 1; h >= 0; h--) {
            var f = (0 | i.words[s.length + h]) * 67108864 + (0 | i.words[s.length + h - 1]);
            for (f = Math.min(f / a | 0, 67108863), i._ishlnsubmul(s, f, h); 0 !== i.negative;) f--, i.negative = 0, i._ishlnsubmul(s, 1, h), i.isZero() || (i.negative ^= 1);
            r && (r.words[h] = f)
          }
          return r && r._strip(), i._strip(), "div" !== t && 0 !== n && i.iushrn(n), {
            div: r || null,
            mod: i
          }
        }, o.prototype.divmod = function (e, t, r) {
          var i, s, a;
          return (n(!e.isZero()), this.isZero()) ? {
            div: new o(0),
            mod: new o(0)
          } : 0 !== this.negative && 0 === e.negative ? (a = this.neg().divmod(e, t), "mod" !== t && (i = a.div.neg()), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(e)), {
            div: i,
            mod: s
          }) : 0 === this.negative && 0 !== e.negative ? (a = this.divmod(e.neg(), t), "mod" !== t && (i = a.div.neg()), {
            div: i,
            mod: a.mod
          }) : (this.negative & e.negative) != 0 ? (a = this.neg().divmod(e.neg(), t), "div" !== t && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(e)), {
            div: a.div,
            mod: s
          }) : e.length > this.length || 0 > this.cmp(e) ? {
            div: new o(0),
            mod: this
          } : 1 === e.length ? "div" === t ? {
            div: this.divn(e.words[0]),
            mod: null
          } : "mod" === t ? {
            div: null,
            mod: new o(this.modrn(e.words[0]))
          } : {
            div: this.divn(e.words[0]),
            mod: new o(this.modrn(e.words[0]))
          } : this._wordDiv(e, t)
        }, o.prototype.div = function (e) {
          return this.divmod(e, "div", !1).div
        }, o.prototype.mod = function (e) {
          return this.divmod(e, "mod", !1).mod
        }, o.prototype.umod = function (e) {
          return this.divmod(e, "mod", !0).mod
        }, o.prototype.divRound = function (e) {
          var t = this.divmod(e);
          if (t.mod.isZero()) return t.div;
          var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
            n = e.ushrn(1),
            i = e.andln(1),
            o = r.cmp(n);
          return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
        }, o.prototype.modrn = function (e) {
          var t = e < 0;
          t && (e = -e), n(e <= 67108863);
          for (var r = 67108864 % e, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % e;
          return t ? -i : i
        }, o.prototype.modn = function (e) {
          return this.modrn(e)
        }, o.prototype.idivn = function (e) {
          var t = e < 0;
          t && (e = -e), n(e <= 67108863);
          for (var r = 0, i = this.length - 1; i >= 0; i--) {
            var o = (0 | this.words[i]) + 67108864 * r;
            this.words[i] = o / e | 0, r = o % e
          }
          return this._strip(), t ? this.ineg() : this
        }, o.prototype.divn = function (e) {
          return this.clone().idivn(e)
        }, o.prototype.egcd = function (e) {
          n(0 === e.negative), n(!e.isZero());
          var t = this,
            r = e.clone();
          t = 0 !== t.negative ? t.umod(e) : t.clone();
          for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), l = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++l;
          for (var c = r.clone(), h = t.clone(); !t.isZero();) {
            for (var f = 0, d = 1;
              (t.words[0] & d) == 0 && f < 26; ++f, d <<= 1);
            if (f > 0)
              for (t.iushrn(f); f-- > 0;)(i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)), i.iushrn(1), s.iushrn(1);
            for (var p = 0, g = 1;
              (r.words[0] & g) == 0 && p < 26; ++p, g <<= 1);
            if (p > 0)
              for (r.iushrn(p); p-- > 0;)(a.isOdd() || u.isOdd()) && (a.iadd(c), u.isub(h)), a.iushrn(1), u.iushrn(1);
            t.cmp(r) >= 0 ? (t.isub(r), i.isub(a), s.isub(u)) : (r.isub(t), a.isub(i), u.isub(s))
          }
          return {
            a: a,
            b: u,
            gcd: r.iushln(l)
          }
        }, o.prototype._invmp = function (e) {
          n(0 === e.negative), n(!e.isZero());
          var t, r = this,
            i = e.clone();
          r = 0 !== r.negative ? r.umod(e) : r.clone();
          for (var s = new o(1), a = new o(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0;) {
            for (var l = 0, c = 1;
              (r.words[0] & c) == 0 && l < 26; ++l, c <<= 1);
            if (l > 0)
              for (r.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
            for (var h = 0, f = 1;
              (i.words[0] & f) == 0 && h < 26; ++h, f <<= 1);
            if (h > 0)
              for (i.iushrn(h); h-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
            r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s))
          }
          return 0 > (t = 0 === r.cmpn(1) ? s : a).cmpn(0) && t.iadd(e), t
        }, o.prototype.gcd = function (e) {
          if (this.isZero()) return e.abs();
          if (e.isZero()) return this.abs();
          var t = this.clone(),
            r = e.clone();
          t.negative = 0, r.negative = 0;
          for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
          for (;;) {
            for (; t.isEven();) t.iushrn(1);
            for (; r.isEven();) r.iushrn(1);
            var i = t.cmp(r);
            if (i < 0) {
              var o = t;
              t = r, r = o
            } else if (0 === i || 0 === r.cmpn(1)) break;
            t.isub(r)
          }
          return r.iushln(n)
        }, o.prototype.invm = function (e) {
          return this.egcd(e).a.umod(e)
        }, o.prototype.isEven = function () {
          return (1 & this.words[0]) == 0
        }, o.prototype.isOdd = function () {
          return (1 & this.words[0]) == 1
        }, o.prototype.andln = function (e) {
          return this.words[0] & e
        }, o.prototype.bincn = function (e) {
          n("number" == typeof e);
          var t = e % 26,
            r = (e - t) / 26,
            i = 1 << t;
          if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
          for (var o = i, s = r; 0 !== o && s < this.length; s++) {
            var a = 0 | this.words[s];
            a += o, o = a >>> 26, a &= 67108863, this.words[s] = a
          }
          return 0 !== o && (this.words[s] = o, this.length++), this
        }, o.prototype.isZero = function () {
          return 1 === this.length && 0 === this.words[0]
        }, o.prototype.cmpn = function (e) {
          var t, r = e < 0;
          if (0 !== this.negative && !r) return -1;
          if (0 === this.negative && r) return 1;
          if (this._strip(), this.length > 1) t = 1;
          else {
            r && (e = -e), n(e <= 67108863, "Number is too big");
            var i = 0 | this.words[0];
            t = i === e ? 0 : i < e ? -1 : 1
          }
          return 0 !== this.negative ? 0 | -t : t
        }, o.prototype.cmp = function (e) {
          if (0 !== this.negative && 0 === e.negative) return -1;
          if (0 === this.negative && 0 !== e.negative) return 1;
          var t = this.ucmp(e);
          return 0 !== this.negative ? 0 | -t : t
        }, o.prototype.ucmp = function (e) {
          if (this.length > e.length) return 1;
          if (this.length < e.length) return -1;
          for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var n = 0 | this.words[r],
              i = 0 | e.words[r];
            if (n !== i) {
              n < i ? t = -1 : n > i && (t = 1);
              break
            }
          }
          return t
        }, o.prototype.gtn = function (e) {
          return 1 === this.cmpn(e)
        }, o.prototype.gt = function (e) {
          return 1 === this.cmp(e)
        }, o.prototype.gten = function (e) {
          return this.cmpn(e) >= 0
        }, o.prototype.gte = function (e) {
          return this.cmp(e) >= 0
        }, o.prototype.ltn = function (e) {
          return -1 === this.cmpn(e)
        }, o.prototype.lt = function (e) {
          return -1 === this.cmp(e)
        }, o.prototype.lten = function (e) {
          return 0 >= this.cmpn(e)
        }, o.prototype.lte = function (e) {
          return 0 >= this.cmp(e)
        }, o.prototype.eqn = function (e) {
          return 0 === this.cmpn(e)
        }, o.prototype.eq = function (e) {
          return 0 === this.cmp(e)
        }, o.red = function (e) {
          return new k(e)
        }, o.prototype.toRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
        }, o.prototype.fromRed = function () {
          return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, o.prototype._forceRed = function (e) {
          return this.red = e, this
        }, o.prototype.forceRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
        }, o.prototype.redAdd = function (e) {
          return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
        }, o.prototype.redIAdd = function (e) {
          return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
        }, o.prototype.redSub = function (e) {
          return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
        }, o.prototype.redISub = function (e) {
          return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
        }, o.prototype.redShl = function (e) {
          return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
        }, o.prototype.redMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
        }, o.prototype.redIMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
        }, o.prototype.redSqr = function () {
          return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, o.prototype.redISqr = function () {
          return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, o.prototype.redSqrt = function () {
          return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, o.prototype.redInvm = function () {
          return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, o.prototype.redNeg = function () {
          return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, o.prototype.redPow = function (e) {
          return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
        };
        var b = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };

        function w(e, t) {
          this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }

        function A() {
          w.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }

        function E() {
          w.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }

        function S() {
          w.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }

        function x() {
          w.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }

        function k(e) {
          if ("string" == typeof e) {
            var t = o._prime(e);
            this.m = t.p, this.prime = t
          } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
        }

        function P(e) {
          k.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        w.prototype._tmp = function () {
          var e = new o(null);
          return e.words = Array(Math.ceil(this.n / 13)), e
        }, w.prototype.ireduce = function (e) {
          var t, r = e;
          do this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength(); while (t > this.n);
          var n = t < this.n ? -1 : r.ucmp(this.p);
          return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r
        }, w.prototype.split = function (e, t) {
          e.iushrn(this.n, 0, t)
        }, w.prototype.imulK = function (e) {
          return e.imul(this.k)
        }, i(A, w), A.prototype.split = function (e, t) {
          for (var r = Math.min(e.length, 9), n = 0; n < r; n++) t.words[n] = e.words[n];
          if (t.length = r, e.length <= 9) {
            e.words[0] = 0, e.length = 1;
            return
          }
          var i = e.words[9];
          for (n = 10, t.words[t.length++] = 4194303 & i; n < e.length; n++) {
            var o = 0 | e.words[n];
            e.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o
          }
          i >>>= 22, e.words[n - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
        }, A.prototype.imulK = function (e) {
          e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
          for (var t = 0, r = 0; r < e.length; r++) {
            var n = 0 | e.words[r];
            t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
          }
          return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
        }, i(E, w), i(S, w), i(x, w), x.prototype.imulK = function (e) {
          for (var t = 0, r = 0; r < e.length; r++) {
            var n = (0 | e.words[r]) * 19 + t,
              i = 67108863 & n;
            n >>>= 26, e.words[r] = i, t = n
          }
          return 0 !== t && (e.words[e.length++] = t), e
        }, o._prime = function (e) {
          var t;
          if (b[e]) return b[e];
          if ("k256" === e) t = new A;
          else if ("p224" === e) t = new E;
          else if ("p192" === e) t = new S;
          else if ("p25519" === e) t = new x;
          else throw Error("Unknown prime " + e);
          return b[e] = t, t
        }, k.prototype._verify1 = function (e) {
          n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
        }, k.prototype._verify2 = function (e, t) {
          n((e.negative | t.negative) == 0, "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
        }, k.prototype.imod = function (e) {
          return this.prime ? this.prime.ireduce(e)._forceRed(this) : (l(e, e.umod(this.m)._forceRed(this)), e)
        }, k.prototype.neg = function (e) {
          return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
        }, k.prototype.add = function (e, t) {
          this._verify2(e, t);
          var r = e.add(t);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
        }, k.prototype.iadd = function (e, t) {
          this._verify2(e, t);
          var r = e.iadd(t);
          return r.cmp(this.m) >= 0 && r.isub(this.m), r
        }, k.prototype.sub = function (e, t) {
          this._verify2(e, t);
          var r = e.sub(t);
          return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this)
        }, k.prototype.isub = function (e, t) {
          this._verify2(e, t);
          var r = e.isub(t);
          return 0 > r.cmpn(0) && r.iadd(this.m), r
        }, k.prototype.shl = function (e, t) {
          return this._verify1(e), this.imod(e.ushln(t))
        }, k.prototype.imul = function (e, t) {
          return this._verify2(e, t), this.imod(e.imul(t))
        }, k.prototype.mul = function (e, t) {
          return this._verify2(e, t), this.imod(e.mul(t))
        }, k.prototype.isqr = function (e) {
          return this.imul(e, e.clone())
        }, k.prototype.sqr = function (e) {
          return this.mul(e, e)
        }, k.prototype.sqrt = function (e) {
          if (e.isZero()) return e.clone();
          var t = this.m.andln(3);
          if (n(t % 2 == 1), 3 === t) {
            var r = this.m.add(new o(1)).iushrn(2);
            return this.pow(e, r)
          }
          for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);
          n(!i.isZero());
          var a = new o(1).toRed(this),
            u = a.redNeg(),
            l = this.m.subn(1).iushrn(1),
            c = this.m.bitLength();
          for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, l).cmp(u);) c.redIAdd(u);
          for (var h = this.pow(c, i), f = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = s; 0 !== d.cmp(a);) {
            for (var g = d, m = 0; 0 !== g.cmp(a); m++) g = g.redSqr();
            n(m < p);
            var y = this.pow(h, new o(1).iushln(p - m - 1));
            f = f.redMul(y), h = y.redSqr(), d = d.redMul(h), p = m
          }
          return f
        }, k.prototype.invm = function (e) {
          var t = e._invmp(this.m);
          return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
        }, k.prototype.pow = function (e, t) {
          if (t.isZero()) return new o(1).toRed(this);
          if (0 === t.cmpn(1)) return e.clone();
          var r = Array(16);
          r[0] = new o(1).toRed(this), r[1] = e;
          for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
          var i = r[0],
            s = 0,
            a = 0,
            u = t.bitLength() % 26;
          for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
            for (var l = t.words[n], c = u - 1; c >= 0; c--) {
              var h = l >> c & 1;
              if (i !== r[0] && (i = this.sqr(i)), 0 === h && 0 === s) {
                a = 0;
                continue
              }
              s <<= 1, s |= h, (4 == ++a || 0 === n && 0 === c) && (i = this.mul(i, r[s]), a = 0, s = 0)
            }
            u = 26
          }
          return i
        }, k.prototype.convertTo = function (e) {
          var t = e.umod(this.m);
          return t === e ? t.clone() : t
        }, k.prototype.convertFrom = function (e) {
          var t = e.clone();
          return t.red = null, t
        }, o.mont = function (e) {
          return new P(e)
        }, i(P, k), P.prototype.convertTo = function (e) {
          return this.imod(e.ushln(this.shift))
        }, P.prototype.convertFrom = function (e) {
          var t = this.imod(e.mul(this.rinv));
          return t.red = null, t
        }, P.prototype.imul = function (e, t) {
          if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
          var r = e.imul(t),
            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            i = r.isub(n).iushrn(this.shift),
            o = i;
          return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this)
        }, P.prototype.mul = function (e, t) {
          if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
          var r = e.mul(t),
            n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
            i = r.isub(n).iushrn(this.shift),
            s = i;
          return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)), s._forceRed(this)
        }, P.prototype.invm = function (e) {
          return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
        }
      }(e = r.nmd(e), this)
    },
    56371: function (e, t, r) {
      "use strict";
      var n = this && this.__createBinding || (Object.create ? function (e, t, r, n) {
          void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function () {
              return t[r]
            }
          })
        } : function (e, t, r, n) {
          void 0 === n && (n = r), e[n] = t[r]
        }),
        i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function (e, t) {
          e.default = t
        }),
        o = this && this.__importStar || function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
          return i(t, e), t
        };
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.formatBytes32String = t.Utf8ErrorFuncs = t.toUtf8String = t.toUtf8CodePoints = t.toUtf8Bytes = t._toEscapedUtf8String = t.nameprep = t.hexDataSlice = t.hexDataLength = t.hexZeroPad = t.hexValue = t.hexStripZeros = t.hexConcat = t.isHexString = t.hexlify = t.base64 = t.base58 = t.TransactionDescription = t.LogDescription = t.Interface = t.SigningKey = t.HDNode = t.defaultPath = t.isBytesLike = t.isBytes = t.zeroPad = t.stripZeros = t.concat = t.arrayify = t.shallowCopy = t.resolveProperties = t.getStatic = t.defineReadOnly = t.deepCopy = t.checkProperties = t.poll = t.fetchJson = t._fetchData = t.RLP = t.Logger = t.checkResultErrors = t.FormatTypes = t.ParamType = t.FunctionFragment = t.EventFragment = t.ErrorFragment = t.ConstructorFragment = t.Fragment = t.defaultAbiCoder = t.AbiCoder = void 0, t.Indexed = t.Utf8ErrorReason = t.UnicodeNormalizationForm = t.SupportedAlgorithm = t.mnemonicToSeed = t.isValidMnemonic = t.entropyToMnemonic = t.mnemonicToEntropy = t.getAccountPath = t.verifyTypedData = t.verifyMessage = t.recoverPublicKey = t.computePublicKey = t.recoverAddress = t.computeAddress = t.getJsonWalletAddress = t.TransactionTypes = t.serializeTransaction = t.parseTransaction = t.accessListify = t.joinSignature = t.splitSignature = t.soliditySha256 = t.solidityKeccak256 = t.solidityPack = t.shuffled = t.randomBytes = t.sha512 = t.sha256 = t.ripemd160 = t.keccak256 = t.computeHmac = t.commify = t.parseUnits = t.formatUnits = t.parseEther = t.formatEther = t.isAddress = t.getCreate2Address = t.getContractAddress = t.getIcapAddress = t.getAddress = t._TypedDataEncoder = t.id = t.isValidName = t.namehash = t.hashMessage = t.dnsEncode = t.parseBytes32String = void 0;
      var s = r(83893);
      Object.defineProperty(t, "AbiCoder", {
        enumerable: !0,
        get: function () {
          return s.AbiCoder
        }
      }), Object.defineProperty(t, "checkResultErrors", {
        enumerable: !0,
        get: function () {
          return s.checkResultErrors
        }
      }), Object.defineProperty(t, "ConstructorFragment", {
        enumerable: !0,
        get: function () {
          return s.ConstructorFragment
        }
      }), Object.defineProperty(t, "defaultAbiCoder", {
        enumerable: !0,
        get: function () {
          return s.defaultAbiCoder
        }
      }), Object.defineProperty(t, "ErrorFragment", {
        enumerable: !0,
        get: function () {
          return s.ErrorFragment
        }
      }), Object.defineProperty(t, "EventFragment", {
        enumerable: !0,
        get: function () {
          return s.EventFragment
        }
      }), Object.defineProperty(t, "FormatTypes", {
        enumerable: !0,
        get: function () {
          return s.FormatTypes
        }
      }), Object.defineProperty(t, "Fragment", {
        enumerable: !0,
        get: function () {
          return s.Fragment
        }
      }), Object.defineProperty(t, "FunctionFragment", {
        enumerable: !0,
        get: function () {
          return s.FunctionFragment
        }
      }), Object.defineProperty(t, "Indexed", {
        enumerable: !0,
        get: function () {
          return s.Indexed
        }
      }), Object.defineProperty(t, "Interface", {
        enumerable: !0,
        get: function () {
          return s.Interface
        }
      }), Object.defineProperty(t, "LogDescription", {
        enumerable: !0,
        get: function () {
          return s.LogDescription
        }
      }), Object.defineProperty(t, "ParamType", {
        enumerable: !0,
        get: function () {
          return s.ParamType
        }
      }), Object.defineProperty(t, "TransactionDescription", {
        enumerable: !0,
        get: function () {
          return s.TransactionDescription
        }
      });
      var a = r(19485);
      Object.defineProperty(t, "getAddress", {
        enumerable: !0,
        get: function () {
          return a.getAddress
        }
      }), Object.defineProperty(t, "getCreate2Address", {
        enumerable: !0,
        get: function () {
          return a.getCreate2Address
        }
      }), Object.defineProperty(t, "getContractAddress", {
        enumerable: !0,
        get: function () {
          return a.getContractAddress
        }
      }), Object.defineProperty(t, "getIcapAddress", {
        enumerable: !0,
        get: function () {
          return a.getIcapAddress
        }
      }), Object.defineProperty(t, "isAddress", {
        enumerable: !0,
        get: function () {
          return a.isAddress
        }
      });
      var u = o(r(4089));
      t.base64 = u;
      var l = r(57727);
      Object.defineProperty(t, "base58", {
        enumerable: !0,
        get: function () {
          return l.Base58
        }
      });
      var c = r(16441);
      Object.defineProperty(t, "arrayify", {
        enumerable: !0,
        get: function () {
          return c.arrayify
        }
      }), Object.defineProperty(t, "concat", {
        enumerable: !0,
        get: function () {
          return c.concat
        }
      }), Object.defineProperty(t, "hexConcat", {
        enumerable: !0,
        get: function () {
          return c.hexConcat
        }
      }), Object.defineProperty(t, "hexDataSlice", {
        enumerable: !0,
        get: function () {
          return c.hexDataSlice
        }
      }), Object.defineProperty(t, "hexDataLength", {
        enumerable: !0,
        get: function () {
          return c.hexDataLength
        }
      }), Object.defineProperty(t, "hexlify", {
        enumerable: !0,
        get: function () {
          return c.hexlify
        }
      }), Object.defineProperty(t, "hexStripZeros", {
        enumerable: !0,
        get: function () {
          return c.hexStripZeros
        }
      }), Object.defineProperty(t, "hexValue", {
        enumerable: !0,
        get: function () {
          return c.hexValue
        }
      }), Object.defineProperty(t, "hexZeroPad", {
        enumerable: !0,
        get: function () {
          return c.hexZeroPad
        }
      }), Object.defineProperty(t, "isBytes", {
        enumerable: !0,
        get: function () {
          return c.isBytes
        }
      }), Object.defineProperty(t, "isBytesLike", {
        enumerable: !0,
        get: function () {
          return c.isBytesLike
        }
      }), Object.defineProperty(t, "isHexString", {
        enumerable: !0,
        get: function () {
          return c.isHexString
        }
      }), Object.defineProperty(t, "joinSignature", {
        enumerable: !0,
        get: function () {
          return c.joinSignature
        }
      }), Object.defineProperty(t, "zeroPad", {
        enumerable: !0,
        get: function () {
          return c.zeroPad
        }
      }), Object.defineProperty(t, "splitSignature", {
        enumerable: !0,
        get: function () {
          return c.splitSignature
        }
      }), Object.defineProperty(t, "stripZeros", {
        enumerable: !0,
        get: function () {
          return c.stripZeros
        }
      });
      var h = r(75931);
      Object.defineProperty(t, "_TypedDataEncoder", {
        enumerable: !0,
        get: function () {
          return h._TypedDataEncoder
        }
      }), Object.defineProperty(t, "dnsEncode", {
        enumerable: !0,
        get: function () {
          return h.dnsEncode
        }
      }), Object.defineProperty(t, "hashMessage", {
        enumerable: !0,
        get: function () {
          return h.hashMessage
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function () {
          return h.id
        }
      }), Object.defineProperty(t, "isValidName", {
        enumerable: !0,
        get: function () {
          return h.isValidName
        }
      }), Object.defineProperty(t, "namehash", {
        enumerable: !0,
        get: function () {
          return h.namehash
        }
      });
      var f = r(86507);
      Object.defineProperty(t, "defaultPath", {
        enumerable: !0,
        get: function () {
          return f.defaultPath
        }
      }), Object.defineProperty(t, "entropyToMnemonic", {
        enumerable: !0,
        get: function () {
          return f.entropyToMnemonic
        }
      }), Object.defineProperty(t, "getAccountPath", {
        enumerable: !0,
        get: function () {
          return f.getAccountPath
        }
      }), Object.defineProperty(t, "HDNode", {
        enumerable: !0,
        get: function () {
          return f.HDNode
        }
      }), Object.defineProperty(t, "isValidMnemonic", {
        enumerable: !0,
        get: function () {
          return f.isValidMnemonic
        }
      }), Object.defineProperty(t, "mnemonicToEntropy", {
        enumerable: !0,
        get: function () {
          return f.mnemonicToEntropy
        }
      }), Object.defineProperty(t, "mnemonicToSeed", {
        enumerable: !0,
        get: function () {
          return f.mnemonicToSeed
        }
      });
      var d = r(45659);
      Object.defineProperty(t, "getJsonWalletAddress", {
        enumerable: !0,
        get: function () {
          return d.getJsonWalletAddress
        }
      });
      var p = r(38197);
      Object.defineProperty(t, "keccak256", {
        enumerable: !0,
        get: function () {
          return p.keccak256
        }
      });
      var g = r(1581);
      Object.defineProperty(t, "Logger", {
        enumerable: !0,
        get: function () {
          return g.Logger
        }
      });
      var m = r(91278);
      Object.defineProperty(t, "computeHmac", {
        enumerable: !0,
        get: function () {
          return m.computeHmac
        }
      }), Object.defineProperty(t, "ripemd160", {
        enumerable: !0,
        get: function () {
          return m.ripemd160
        }
      }), Object.defineProperty(t, "sha256", {
        enumerable: !0,
        get: function () {
          return m.sha256
        }
      }), Object.defineProperty(t, "sha512", {
        enumerable: !0,
        get: function () {
          return m.sha512
        }
      });
      var y = r(31886);
      Object.defineProperty(t, "solidityKeccak256", {
        enumerable: !0,
        get: function () {
          return y.keccak256
        }
      }), Object.defineProperty(t, "solidityPack", {
        enumerable: !0,
        get: function () {
          return y.pack
        }
      }), Object.defineProperty(t, "soliditySha256", {
        enumerable: !0,
        get: function () {
          return y.sha256
        }
      });
      var v = r(22118);
      Object.defineProperty(t, "randomBytes", {
        enumerable: !0,
        get: function () {
          return v.randomBytes
        }
      }), Object.defineProperty(t, "shuffled", {
        enumerable: !0,
        get: function () {
          return v.shuffled
        }
      });
      var b = r(6881);
      Object.defineProperty(t, "checkProperties", {
        enumerable: !0,
        get: function () {
          return b.checkProperties
        }
      }), Object.defineProperty(t, "deepCopy", {
        enumerable: !0,
        get: function () {
          return b.deepCopy
        }
      }), Object.defineProperty(t, "defineReadOnly", {
        enumerable: !0,
        get: function () {
          return b.defineReadOnly
        }
      }), Object.defineProperty(t, "getStatic", {
        enumerable: !0,
        get: function () {
          return b.getStatic
        }
      }), Object.defineProperty(t, "resolveProperties", {
        enumerable: !0,
        get: function () {
          return b.resolveProperties
        }
      }), Object.defineProperty(t, "shallowCopy", {
        enumerable: !0,
        get: function () {
          return b.shallowCopy
        }
      });
      var w = o(r(59052));
      t.RLP = w;
      var A = r(67669);
      Object.defineProperty(t, "computePublicKey", {
        enumerable: !0,
        get: function () {
          return A.computePublicKey
        }
      }), Object.defineProperty(t, "recoverPublicKey", {
        enumerable: !0,
        get: function () {
          return A.recoverPublicKey
        }
      }), Object.defineProperty(t, "SigningKey", {
        enumerable: !0,
        get: function () {
          return A.SigningKey
        }
      });
      var E = r(22384);
      Object.defineProperty(t, "formatBytes32String", {
        enumerable: !0,
        get: function () {
          return E.formatBytes32String
        }
      }), Object.defineProperty(t, "nameprep", {
        enumerable: !0,
        get: function () {
          return E.nameprep
        }
      }), Object.defineProperty(t, "parseBytes32String", {
        enumerable: !0,
        get: function () {
          return E.parseBytes32String
        }
      }), Object.defineProperty(t, "_toEscapedUtf8String", {
        enumerable: !0,
        get: function () {
          return E._toEscapedUtf8String
        }
      }), Object.defineProperty(t, "toUtf8Bytes", {
        enumerable: !0,
        get: function () {
          return E.toUtf8Bytes
        }
      }), Object.defineProperty(t, "toUtf8CodePoints", {
        enumerable: !0,
        get: function () {
          return E.toUtf8CodePoints
        }
      }), Object.defineProperty(t, "toUtf8String", {
        enumerable: !0,
        get: function () {
          return E.toUtf8String
        }
      }), Object.defineProperty(t, "Utf8ErrorFuncs", {
        enumerable: !0,
        get: function () {
          return E.Utf8ErrorFuncs
        }
      });
      var S = r(83875);
      Object.defineProperty(t, "accessListify", {
        enumerable: !0,
        get: function () {
          return S.accessListify
        }
      }), Object.defineProperty(t, "computeAddress", {
        enumerable: !0,
        get: function () {
          return S.computeAddress
        }
      }), Object.defineProperty(t, "parseTransaction", {
        enumerable: !0,
        get: function () {
          return S.parse
        }
      }), Object.defineProperty(t, "recoverAddress", {
        enumerable: !0,
        get: function () {
          return S.recoverAddress
        }
      }), Object.defineProperty(t, "serializeTransaction", {
        enumerable: !0,
        get: function () {
          return S.serialize
        }
      }), Object.defineProperty(t, "TransactionTypes", {
        enumerable: !0,
        get: function () {
          return S.TransactionTypes
        }
      });
      var x = r(35553);
      Object.defineProperty(t, "commify", {
        enumerable: !0,
        get: function () {
          return x.commify
        }
      }), Object.defineProperty(t, "formatEther", {
        enumerable: !0,
        get: function () {
          return x.formatEther
        }
      }), Object.defineProperty(t, "parseEther", {
        enumerable: !0,
        get: function () {
          return x.parseEther
        }
      }), Object.defineProperty(t, "formatUnits", {
        enumerable: !0,
        get: function () {
          return x.formatUnits
        }
      }), Object.defineProperty(t, "parseUnits", {
        enumerable: !0,
        get: function () {
          return x.parseUnits
        }
      });
      var k = r(79911);
      Object.defineProperty(t, "verifyMessage", {
        enumerable: !0,
        get: function () {
          return k.verifyMessage
        }
      }), Object.defineProperty(t, "verifyTypedData", {
        enumerable: !0,
        get: function () {
          return k.verifyTypedData
        }
      });
      var P = r(37707);
      Object.defineProperty(t, "_fetchData", {
        enumerable: !0,
        get: function () {
          return P._fetchData
        }
      }), Object.defineProperty(t, "fetchJson", {
        enumerable: !0,
        get: function () {
          return P.fetchJson
        }
      }), Object.defineProperty(t, "poll", {
        enumerable: !0,
        get: function () {
          return P.poll
        }
      });
      var C = r(91278);
      Object.defineProperty(t, "SupportedAlgorithm", {
        enumerable: !0,
        get: function () {
          return C.SupportedAlgorithm
        }
      });
      var _ = r(22384);
      Object.defineProperty(t, "UnicodeNormalizationForm", {
        enumerable: !0,
        get: function () {
          return _.UnicodeNormalizationForm
        }
      }), Object.defineProperty(t, "Utf8ErrorReason", {
        enumerable: !0,
        get: function () {
          return _.Utf8ErrorReason
        }
      })
    },
    26729: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";

      function n() {}

      function i(e, t, r) {
        this.fn = e, this.context = t, this.once = r || !1
      }

      function o(e, t, n, o, s) {
        if ("function" != typeof n) throw TypeError("The listener must be a function");
        var a = new i(n, o || e, s),
          u = r ? r + t : t;
        return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], a] : e._events[u].push(a) : (e._events[u] = a, e._eventsCount++), e
      }

      function s(e, t) {
        0 == --e._eventsCount ? e._events = new n : delete e._events[t]
      }

      function a() {
        this._events = new n, this._eventsCount = 0
      }
      Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), a.prototype.eventNames = function () {
        var e, n, i = [];
        if (0 === this._eventsCount) return i;
        for (n in e = this._events) t.call(e, n) && i.push(r ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
      }, a.prototype.listeners = function (e) {
        var t = r ? r + e : e,
          n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, o = n.length, s = Array(o); i < o; i++) s[i] = n[i].fn;
        return s
      }, a.prototype.listenerCount = function (e) {
        var t = r ? r + e : e,
          n = this._events[t];
        return n ? n.fn ? 1 : n.length : 0
      }, a.prototype.emit = function (e, t, n, i, o, s) {
        var a = r ? r + e : e;
        if (!this._events[a]) return !1;
        var u, l, c = this._events[a],
          h = arguments.length;
        if (c.fn) {
          switch (c.once && this.removeListener(e, c.fn, void 0, !0), h) {
            case 1:
              return c.fn.call(c.context), !0;
            case 2:
              return c.fn.call(c.context, t), !0;
            case 3:
              return c.fn.call(c.context, t, n), !0;
            case 4:
              return c.fn.call(c.context, t, n, i), !0;
            case 5:
              return c.fn.call(c.context, t, n, i, o), !0;
            case 6:
              return c.fn.call(c.context, t, n, i, o, s), !0
          }
          for (l = 1, u = Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
          c.fn.apply(c.context, u)
        } else {
          var f, d = c.length;
          for (l = 0; l < d; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), h) {
            case 1:
              c[l].fn.call(c[l].context);
              break;
            case 2:
              c[l].fn.call(c[l].context, t);
              break;
            case 3:
              c[l].fn.call(c[l].context, t, n);
              break;
            case 4:
              c[l].fn.call(c[l].context, t, n, i);
              break;
            default:
              if (!u)
                for (f = 1, u = Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
              c[l].fn.apply(c[l].context, u)
          }
        }
        return !0
      }, a.prototype.on = function (e, t, r) {
        return o(this, e, t, r, !1)
      }, a.prototype.once = function (e, t, r) {
        return o(this, e, t, r, !0)
      }, a.prototype.removeListener = function (e, t, n, i) {
        var o = r ? r + e : e;
        if (!this._events[o]) return this;
        if (!t) return s(this, o), this;
        var a = this._events[o];
        if (a.fn) a.fn !== t || i && !a.once || n && a.context !== n || s(this, o);
        else {
          for (var u = 0, l = [], c = a.length; u < c; u++)(a[u].fn !== t || i && !a[u].once || n && a[u].context !== n) && l.push(a[u]);
          l.length ? this._events[o] = 1 === l.length ? l[0] : l : s(this, o)
        }
        return this
      }, a.prototype.removeAllListeners = function (e) {
        var t;
        return e ? (t = r ? r + e : e, this._events[t] && s(this, t)) : (this._events = new n, this._eventsCount = 0), this
      }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, e.exports = a
    },
    33715: function (e, t, r) {
      var n = t;
      n.utils = r(26436), n.common = r(95772), n.sha = r(89041), n.ripemd = r(12949), n.hmac = r(52344), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160
    },
    95772: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(79746);

      function o() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
      }
      t.BlockHash = o, o.prototype.update = function (e, t) {
        if (e = n.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
          var r = (e = this.pending).length % this._delta8;
          this.pending = e.slice(e.length - r, e.length), 0 === this.pending.length && (this.pending = null), e = n.join32(e, 0, e.length - r, this.endian);
          for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
        }
        return this
      }, o.prototype.digest = function (e) {
        return this.update(this._pad()), i(null === this.pending), this._digest(e)
      }, o.prototype._pad = function () {
        var e = this.pendingTotal,
          t = this._delta8,
          r = t - (e + this.padLength) % t,
          n = Array(r + this.padLength);
        n[0] = 128;
        for (var i = 1; i < r; i++) n[i] = 0;
        if (e <<= 3, "big" === this.endian) {
          for (var o = 8; o < this.padLength; o++) n[i++] = 0;
          n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = e >>> 24 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 8 & 255, n[i++] = 255 & e
        } else
          for (o = 8, n[i++] = 255 & e, n[i++] = e >>> 8 & 255, n[i++] = e >>> 16 & 255, n[i++] = e >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0; o < this.padLength; o++) n[i++] = 0;
        return n
      }
    },
    52344: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(79746);

      function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(t, r))
      }
      e.exports = o, o.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), i(e.length <= this.blockSize);
        for (var t = e.length; t < this.blockSize; t++) e.push(0);
        for (t = 0; t < e.length; t++) e[t] ^= 54;
        for (t = 0, this.inner = new this.Hash().update(e); t < e.length; t++) e[t] ^= 106;
        this.outer = new this.Hash().update(e)
      }, o.prototype.update = function (e, t) {
        return this.inner.update(e, t), this
      }, o.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e)
      }
    },
    12949: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(95772),
        o = n.rotl32,
        s = n.sum32,
        a = n.sum32_3,
        u = n.sum32_4,
        l = i.BlockHash;

      function c() {
        if (!(this instanceof c)) return new c;
        l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
      }

      function h(e, t, r, n) {
        return e <= 15 ? t ^ r ^ n : e <= 31 ? t & r | ~t & n : e <= 47 ? (t | ~r) ^ n : e <= 63 ? t & n | r & ~n : t ^ (r | ~n)
      }
      n.inherits(c, l), t.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function (e, t) {
        for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], c = this.h[4], m = r, y = n, v = i, b = l, w = c, A = 0; A < 80; A++) {
          var E, S, x = s(o(u(r, h(A, n, i, l), e[f[A] + t], (E = A) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), p[A]), c);
          r = c, c = l, l = o(i, 10), i = n, n = x, x = s(o(u(m, h(79 - A, y, v, b), e[d[A] + t], (S = A) <= 15 ? 1352829926 : S <= 31 ? 1548603684 : S <= 47 ? 1836072691 : S <= 63 ? 2053994217 : 0), g[A]), w), m = w, w = b, b = o(v, 10), v = y, y = x
        }
        x = a(this.h[1], i, b), this.h[1] = a(this.h[2], l, w), this.h[2] = a(this.h[3], c, m), this.h[3] = a(this.h[4], r, y), this.h[4] = a(this.h[0], n, v), this.h[0] = x
      }, c.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
      };
      var f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        d = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        p = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    },
    89041: function (e, t, r) {
      "use strict";
      t.sha1 = r(84761), t.sha224 = r(10799), t.sha256 = r(89344), t.sha384 = r(80772), t.sha512 = r(45900)
    },
    84761: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(95772),
        o = r(37038),
        s = n.rotl32,
        a = n.sum32,
        u = n.sum32_5,
        l = o.ft_1,
        c = i.BlockHash,
        h = [1518500249, 1859775393, 2400959708, 3395469782];

      function f() {
        if (!(this instanceof f)) return new f;
        c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
      }
      n.inherits(f, c), e.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function (e, t) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
        for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
        var i = this.h[0],
          o = this.h[1],
          c = this.h[2],
          f = this.h[3],
          d = this.h[4];
        for (n = 0; n < r.length; n++) {
          var p = ~~(n / 20),
            g = u(s(i, 5), l(p, o, c, f), d, r[n], h[p]);
          d = f, f = c, c = s(o, 30), o = i, i = g
        }
        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], c), this.h[3] = a(this.h[3], f), this.h[4] = a(this.h[4], d)
      }, f.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
      }
    },
    10799: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(89344);

      function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
      }
      n.inherits(o, i), e.exports = o, o.blockSize = 512, o.outSize = 224, o.hmacStrength = 192, o.padLength = 64, o.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
      }
    },
    89344: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(95772),
        o = r(37038),
        s = r(79746),
        a = n.sum32,
        u = n.sum32_4,
        l = n.sum32_5,
        c = o.ch32,
        h = o.maj32,
        f = o.s0_256,
        d = o.s1_256,
        p = o.g0_256,
        g = o.g1_256,
        m = i.BlockHash,
        y = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

      function v() {
        if (!(this instanceof v)) return new v;
        m.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = y, this.W = Array(64)
      }
      n.inherits(v, m), e.exports = v, v.blockSize = 512, v.outSize = 256, v.hmacStrength = 192, v.padLength = 64, v.prototype._update = function (e, t) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = e[t + n];
        for (; n < r.length; n++) r[n] = u(g(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
        var i = this.h[0],
          o = this.h[1],
          m = this.h[2],
          y = this.h[3],
          v = this.h[4],
          b = this.h[5],
          w = this.h[6],
          A = this.h[7];
        for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
          var E = l(A, d(v), c(v, b, w), this.k[n], r[n]),
            S = a(f(i), h(i, o, m));
          A = w, w = b, b = v, v = a(y, E), y = m, m = o, o = i, i = a(E, S)
        }
        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], m), this.h[3] = a(this.h[3], y), this.h[4] = a(this.h[4], v), this.h[5] = a(this.h[5], b), this.h[6] = a(this.h[6], w), this.h[7] = a(this.h[7], A)
      }, v.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
      }
    },
    80772: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(45900);

      function o() {
        if (!(this instanceof o)) return new o;
        i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
      }
      n.inherits(o, i), e.exports = o, o.blockSize = 1024, o.outSize = 384, o.hmacStrength = 192, o.padLength = 128, o.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
      }
    },
    45900: function (e, t, r) {
      "use strict";
      var n = r(26436),
        i = r(95772),
        o = r(79746),
        s = n.rotr64_hi,
        a = n.rotr64_lo,
        u = n.shr64_hi,
        l = n.shr64_lo,
        c = n.sum64,
        h = n.sum64_hi,
        f = n.sum64_lo,
        d = n.sum64_4_hi,
        p = n.sum64_4_lo,
        g = n.sum64_5_hi,
        m = n.sum64_5_lo,
        y = i.BlockHash,
        v = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

      function b() {
        if (!(this instanceof b)) return new b;
        y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = v, this.W = Array(160)
      }
      n.inherits(b, y), e.exports = b, b.blockSize = 1024, b.outSize = 512, b.hmacStrength = 192, b.padLength = 128, b.prototype._prepareBlock = function (e, t) {
        for (var r = this.W, n = 0; n < 32; n++) r[n] = e[t + n];
        for (; n < r.length; n += 2) {
          var i = function (e, t) {
              var r = s(e, t, 19) ^ s(t, e, 29) ^ u(e, t, 6);
              return r < 0 && (r += 4294967296), r
            }(r[n - 4], r[n - 3]),
            o = function (e, t) {
              var r = a(e, t, 19) ^ a(t, e, 29) ^ l(e, t, 6);
              return r < 0 && (r += 4294967296), r
            }(r[n - 4], r[n - 3]),
            c = r[n - 14],
            h = r[n - 13],
            f = function (e, t) {
              var r = s(e, t, 1) ^ s(e, t, 8) ^ u(e, t, 7);
              return r < 0 && (r += 4294967296), r
            }(r[n - 30], r[n - 29]),
            g = function (e, t) {
              var r = a(e, t, 1) ^ a(e, t, 8) ^ l(e, t, 7);
              return r < 0 && (r += 4294967296), r
            }(r[n - 30], r[n - 29]),
            m = r[n - 32],
            y = r[n - 31];
          r[n] = d(i, o, c, h, f, g, m, y), r[n + 1] = p(i, o, c, h, f, g, m, y)
        }
      }, b.prototype._update = function (e, t) {
        this._prepareBlock(e, t);
        var r = this.W,
          n = this.h[0],
          i = this.h[1],
          u = this.h[2],
          l = this.h[3],
          d = this.h[4],
          p = this.h[5],
          y = this.h[6],
          v = this.h[7],
          b = this.h[8],
          w = this.h[9],
          A = this.h[10],
          E = this.h[11],
          S = this.h[12],
          x = this.h[13],
          k = this.h[14],
          P = this.h[15];
        o(this.k.length === r.length);
        for (var C = 0; C < r.length; C += 2) {
          var _ = k,
            M = P,
            O = function (e, t) {
              var r = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
              return r < 0 && (r += 4294967296), r
            }(b, w),
            N = function (e, t) {
              var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
              return r < 0 && (r += 4294967296), r
            }(b, w),
            R = function (e, t, r, n, i) {
              var o = e & r ^ ~e & i;
              return o < 0 && (o += 4294967296), o
            }(b, 0, A, 0, S, x),
            T = function (e, t, r, n, i, o) {
              var s = t & n ^ ~t & o;
              return s < 0 && (s += 4294967296), s
            }(0, w, 0, E, 0, x),
            I = this.k[C],
            B = this.k[C + 1],
            L = r[C],
            F = r[C + 1],
            D = g(_, M, O, N, R, T, I, B, L, F),
            U = m(_, M, O, N, R, T, I, B, L, F);
          _ = function (e, t) {
            var r = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
            return r < 0 && (r += 4294967296), r
          }(n, i), M = function (e, t) {
            var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
            return r < 0 && (r += 4294967296), r
          }(n, i), O = function (e, t, r, n, i) {
            var o = e & r ^ e & i ^ r & i;
            return o < 0 && (o += 4294967296), o
          }(n, 0, u, 0, d, p), N = function (e, t, r, n, i, o) {
            var s = t & n ^ t & o ^ n & o;
            return s < 0 && (s += 4294967296), s
          }(0, i, 0, l, 0, p);
          var j = h(_, M, O, N),
            z = f(_, M, O, N);
          k = S, P = x, S = A, x = E, A = b, E = w, b = h(y, v, D, U), w = f(v, v, D, U), y = d, v = p, d = u, p = l, u = n, l = i, n = h(D, U, j, z), i = f(D, U, j, z)
        }
        c(this.h, 0, n, i), c(this.h, 2, u, l), c(this.h, 4, d, p), c(this.h, 6, y, v), c(this.h, 8, b, w), c(this.h, 10, A, E), c(this.h, 12, S, x), c(this.h, 14, k, P)
      }, b.prototype._digest = function (e) {
        return "hex" === e ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
      }
    },
    37038: function (e, t, r) {
      "use strict";
      var n = r(26436).rotr32;

      function i(e, t, r) {
        return e & t ^ e & r ^ t & r
      }
      t.ft_1 = function (e, t, r, n) {
        return 0 === e ? t & r ^ ~t & n : 1 === e || 3 === e ? t ^ r ^ n : 2 === e ? i(t, r, n) : void 0
      }, t.ch32 = function (e, t, r) {
        return e & t ^ ~e & r
      }, t.maj32 = i, t.p32 = function (e, t, r) {
        return e ^ t ^ r
      }, t.s0_256 = function (e) {
        return n(e, 2) ^ n(e, 13) ^ n(e, 22)
      }, t.s1_256 = function (e) {
        return n(e, 6) ^ n(e, 11) ^ n(e, 25)
      }, t.g0_256 = function (e) {
        return n(e, 7) ^ n(e, 18) ^ e >>> 3
      }, t.g1_256 = function (e) {
        return n(e, 17) ^ n(e, 19) ^ e >>> 10
      }
    },
    26436: function (e, t, r) {
      "use strict";
      var n = r(79746),
        i = r(35717);

      function o(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
      }

      function s(e) {
        return 1 === e.length ? "0" + e : e
      }

      function a(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        if (4 === e.length) return "0000" + e;
        if (3 === e.length) return "00000" + e;
        if (2 === e.length) return "000000" + e;
        if (1 === e.length) return "0000000" + e;
        else return e
      }
      t.inherits = i, t.toArray = function (e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" == typeof e) {
          if (t) {
            if ("hex" === t)
              for ((e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) r.push(parseInt(e[i] + e[i + 1], 16))
          } else
            for (var n = 0, i = 0; i < e.length; i++) {
              var o, s, a = e.charCodeAt(i);
              a < 128 ? r[n++] = a : a < 2048 ? (r[n++] = a >> 6 | 192, r[n++] = 63 & a | 128) : (o = e, s = i, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) ? (r[n++] = a >> 12 | 224, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128) : (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = a >> 18 | 240, r[n++] = a >> 12 & 63 | 128, r[n++] = a >> 6 & 63 | 128, r[n++] = 63 & a | 128)
            }
        } else
          for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
        return r
      }, t.toHex = function (e) {
        for (var t = "", r = 0; r < e.length; r++) t += s(e[r].toString(16));
        return t
      }, t.htonl = o, t.toHex32 = function (e, t) {
        for (var r = "", n = 0; n < e.length; n++) {
          var i = e[n];
          "little" === t && (i = o(i)), r += a(i.toString(16))
        }
        return r
      }, t.zero2 = s, t.zero8 = a, t.join32 = function (e, t, r, i) {
        var o, s = r - t;
        n(s % 4 == 0);
        for (var a = Array(s / 4), u = 0, l = t; u < a.length; u++, l += 4) o = "big" === i ? e[l] << 24 | e[l + 1] << 16 | e[l + 2] << 8 | e[l + 3] : e[l + 3] << 24 | e[l + 2] << 16 | e[l + 1] << 8 | e[l], a[u] = o >>> 0;
        return a
      }, t.split32 = function (e, t) {
        for (var r = Array(4 * e.length), n = 0, i = 0; n < e.length; n++, i += 4) {
          var o = e[n];
          "big" === t ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o)
        }
        return r
      }, t.rotr32 = function (e, t) {
        return e >>> t | e << 32 - t
      }, t.rotl32 = function (e, t) {
        return e << t | e >>> 32 - t
      }, t.sum32 = function (e, t) {
        return e + t >>> 0
      }, t.sum32_3 = function (e, t, r) {
        return e + t + r >>> 0
      }, t.sum32_4 = function (e, t, r, n) {
        return e + t + r + n >>> 0
      }, t.sum32_5 = function (e, t, r, n, i) {
        return e + t + r + n + i >>> 0
      }, t.sum64 = function (e, t, r, n) {
        var i = e[t],
          o = n + e[t + 1] >>> 0;
        e[t] = (o < n ? 1 : 0) + r + i >>> 0, e[t + 1] = o
      }, t.sum64_hi = function (e, t, r, n) {
        return (t + n >>> 0 < t ? 1 : 0) + e + r >>> 0
      }, t.sum64_lo = function (e, t, r, n) {
        return t + n >>> 0
      }, t.sum64_4_hi = function (e, t, r, n, i, o, s, a) {
        var u, l = t;
        return e + r + i + s + (0 + ((l = l + n >>> 0) < t ? 1 : 0) + ((l = l + o >>> 0) < o ? 1 : 0) + ((l = l + a >>> 0) < a ? 1 : 0)) >>> 0
      }, t.sum64_4_lo = function (e, t, r, n, i, o, s, a) {
        return t + n + o + a >>> 0
      }, t.sum64_5_hi = function (e, t, r, n, i, o, s, a, u, l) {
        var c, h = t;
        return e + r + i + s + u + (0 + ((h = h + n >>> 0) < t ? 1 : 0) + ((h = h + o >>> 0) < o ? 1 : 0) + ((h = h + a >>> 0) < a ? 1 : 0) + ((h = h + l >>> 0) < l ? 1 : 0)) >>> 0
      }, t.sum64_5_lo = function (e, t, r, n, i, o, s, a, u, l) {
        return t + n + o + a + l >>> 0
      }, t.rotr64_hi = function (e, t, r) {
        return (t << 32 - r | e >>> r) >>> 0
      }, t.rotr64_lo = function (e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
      }, t.shr64_hi = function (e, t, r) {
        return e >>> r
      }, t.shr64_lo = function (e, t, r) {
        return (e << 32 - r | t >>> r) >>> 0
      }
    },
    35717: function (e) {
      "function" == typeof Object.create ? e.exports = function (e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }))
      } : e.exports = function (e, t) {
        if (t) {
          e.super_ = t;
          var r = function () {};
          r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
        }
      }
    },
    91094: function (e, t, r) {
      var n, i = r(83454);
      ! function () {
        "use strict";
        var o = "input is invalid type",
          s = "object" == typeof window,
          a = s ? window : {};
        a.JS_SHA3_NO_WINDOW && (s = !1);
        var u = !s && "object" == typeof self;
        !a.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? a = r.g : u && (a = self);
        var l = !a.JS_SHA3_NO_COMMON_JS && e.exports,
          c = r.amdO,
          h = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
          f = "0123456789abcdef".split(""),
          d = [4, 1024, 262144, 67108864],
          p = [0, 8, 16, 24],
          g = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
          m = [224, 256, 384, 512],
          y = [128, 256],
          v = ["hex", "buffer", "arrayBuffer", "array", "digest"],
          b = {
            128: 168,
            256: 136
          };
        (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function (e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        }), h && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function (e) {
          return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
        });
        for (var w = function (e, t, r) {
            return function (n) {
              return new B(e, t, e).update(n)[r]()
            }
          }, A = function (e, t, r) {
            return function (n, i) {
              return new B(e, t, i).update(n)[r]()
            }
          }, E = function (e, t, r) {
            return function (t, n, i, o) {
              return C["cshake" + e].update(t, n, i, o)[r]()
            }
          }, S = function (e, t, r) {
            return function (t, n, i, o) {
              return C["kmac" + e].update(t, n, i, o)[r]()
            }
          }, x = function (e, t, r, n) {
            for (var i = 0; i < v.length; ++i) {
              var o = v[i];
              e[o] = t(r, n, o)
            }
            return e
          }, k = function (e, t) {
            var r = w(e, t, "hex");
            return r.create = function () {
              return new B(e, t, e)
            }, r.update = function (e) {
              return r.create().update(e)
            }, x(r, w, e, t)
          }, P = [{
            name: "keccak",
            padding: [1, 256, 65536, 16777216],
            bits: m,
            createMethod: k
          }, {
            name: "sha3",
            padding: [6, 1536, 393216, 100663296],
            bits: m,
            createMethod: k
          }, {
            name: "shake",
            padding: [31, 7936, 2031616, 520093696],
            bits: y,
            createMethod: function (e, t) {
              var r = A(e, t, "hex");
              return r.create = function (r) {
                return new B(e, t, r)
              }, r.update = function (e, t) {
                return r.create(t).update(e)
              }, x(r, A, e, t)
            }
          }, {
            name: "cshake",
            padding: d,
            bits: y,
            createMethod: function (e, t) {
              var r = b[e],
                n = E(e, t, "hex");
              return n.create = function (n, i, o) {
                return i || o ? new B(e, t, n).bytepad([i, o], r) : C["shake" + e].create(n)
              }, n.update = function (e, t, r, i) {
                return n.create(t, r, i).update(e)
              }, x(n, E, e, t)
            }
          }, {
            name: "kmac",
            padding: d,
            bits: y,
            createMethod: function (e, t) {
              var r = b[e],
                n = S(e, t, "hex");
              return n.create = function (n, i, o) {
                return new L(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
              }, n.update = function (e, t, r, i) {
                return n.create(e, r, i).update(t)
              }, x(n, S, e, t)
            }
          }], C = {}, _ = [], M = 0; M < P.length; ++M)
          for (var O = P[M], N = O.bits, R = 0; R < N.length; ++R) {
            var T = O.name + "_" + N[R];
            if (_.push(T), C[T] = O.createMethod(N[R], O.padding), "sha3" !== O.name) {
              var I = O.name + N[R];
              _.push(I), C[I] = C[T]
            }
          }

        function B(e, t, r) {
          this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
          for (var n = 0; n < 50; ++n) this.s[n] = 0
        }

        function L(e, t, r) {
          B.call(this, e, t, r)
        }
        B.prototype.update = function (e) {
          if (this.finalized) throw Error("finalize already called");
          var t, r = typeof e;
          if ("string" !== r) {
            if ("object" === r) {
              if (null === e) throw Error(o);
              if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(o)
            } else throw Error(o);
            t = !0
          }
          for (var n, i, s = this.blocks, a = this.byteCount, u = e.length, l = this.blockCount, c = 0, f = this.s; c < u;) {
            if (this.reset)
              for (n = 1, this.reset = !1, s[0] = this.block; n < l + 1; ++n) s[n] = 0;
            if (t)
              for (n = this.start; c < u && n < a; ++c) s[n >> 2] |= e[c] << p[3 & n++];
            else
              for (n = this.start; c < u && n < a; ++c)(i = e.charCodeAt(c)) < 128 ? s[n >> 2] |= i << p[3 & n++] : i < 2048 ? (s[n >> 2] |= (192 | i >> 6) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]) : i < 55296 || i >= 57344 ? (s[n >> 2] |= (224 | i >> 12) << p[3 & n++], s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++c)), s[n >> 2] |= (240 | i >> 18) << p[3 & n++], s[n >> 2] |= (128 | i >> 12 & 63) << p[3 & n++], s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++], s[n >> 2] |= (128 | 63 & i) << p[3 & n++]);
            if (this.lastByteIndex = n, n >= a) {
              for (this.start = n - a, this.block = s[l], n = 0; n < l; ++n) f[n] ^= s[n];
              F(f), this.reset = !0
            } else this.start = n
          }
          return this
        }, B.prototype.encode = function (e, t) {
          var r = 255 & e,
            n = 1,
            i = [r];
          for (e >>= 8, r = 255 & e; r > 0;) i.unshift(r), e >>= 8, r = 255 & e, ++n;
          return t ? i.push(n) : i.unshift(n), this.update(i), i.length
        }, B.prototype.encodeString = function (e) {
          var t, r = typeof e;
          if ("string" !== r) {
            if ("object" === r) {
              if (null === e) throw Error(o);
              if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw Error(o)
            } else throw Error(o);
            t = !0
          }
          var n = 0,
            i = e.length;
          if (t) n = i;
          else
            for (var s = 0; s < e.length; ++s) {
              var a = e.charCodeAt(s);
              a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), n += 4)
            }
          return n += this.encode(8 * n), this.update(e), n
        }, B.prototype.bytepad = function (e, t) {
          for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
          var i = t - r % t,
            o = [];
          return o.length = i, this.update(o), this
        }, B.prototype.finalize = function () {
          if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks,
              t = this.lastByteIndex,
              r = this.blockCount,
              n = this.s;
            if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
              for (t = 1, e[0] = e[r]; t < r + 1; ++t) e[t] = 0;
            for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
            F(n)
          }
        }, B.prototype.toString = B.prototype.hex = function () {
          this.finalize();
          for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n;) {
            for (o = 0; o < t && s < n; ++o, ++s) a += f[(e = r[o]) >> 4 & 15] + f[15 & e] + f[e >> 12 & 15] + f[e >> 8 & 15] + f[e >> 20 & 15] + f[e >> 16 & 15] + f[e >> 28 & 15] + f[e >> 24 & 15];
            s % t == 0 && (F(r), o = 0)
          }
          return i && (a += f[(e = r[o]) >> 4 & 15] + f[15 & e], i > 1 && (a += f[e >> 12 & 15] + f[e >> 8 & 15]), i > 2 && (a += f[e >> 20 & 15] + f[e >> 16 & 15])), a
        }, B.prototype.arrayBuffer = function () {
          this.finalize();
          var e, t = this.blockCount,
            r = this.s,
            n = this.outputBlocks,
            i = this.extraBytes,
            o = 0,
            s = 0,
            a = this.outputBits >> 3;
          e = new ArrayBuffer(i ? n + 1 << 2 : a);
          for (var u = new Uint32Array(e); s < n;) {
            for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o];
            s % t == 0 && F(r)
          }
          return i && (u[o] = r[o], e = e.slice(0, a)), e
        }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.digest = B.prototype.array = function () {
          this.finalize();
          for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
            for (s = 0; s < r && a < i; ++s, ++a) e = a << 2, t = n[s], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
            a % r == 0 && F(n)
          }
          return o && (e = a << 2, t = n[s], u[e] = 255 & t, o > 1 && (u[e + 1] = t >> 8 & 255), o > 2 && (u[e + 2] = t >> 16 & 255)), u
        }, L.prototype = new B, L.prototype.finalize = function () {
          return this.encode(this.outputBits, !0), B.prototype.finalize.call(this)
        };
        var F = function (e) {
          var t, r, n, i, o, s, a, u, l, c, h, f, d, p, m, y, v, b, w, A, E, S, x, k, P, C, _, M, O, N, R, T, I, B, L, F, D, U, j, z, H, G, q, K, V, J, W, Q, Y, Z, X, $, ee, et, er, en, ei, eo, es, ea, eu, el, ec;
          for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], f = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48], d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49], t = f ^ (s << 1 | a >>> 31), r = d ^ (a << 1 | s >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (u << 1 | l >>> 31), r = o ^ (l << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = s ^ (c << 1 | h >>> 31), r = a ^ (h << 1 | c >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (f << 1 | d >>> 31), r = l ^ (d << 1 | f >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = c ^ (i << 1 | o >>> 31), r = h ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], m = e[1], J = e[11] << 4 | e[10] >>> 28, W = e[10] << 4 | e[11] >>> 28, M = e[20] << 3 | e[21] >>> 29, O = e[21] << 3 | e[20] >>> 29, ea = e[31] << 9 | e[30] >>> 23, eu = e[30] << 9 | e[31] >>> 23, G = e[40] << 18 | e[41] >>> 14, q = e[41] << 18 | e[40] >>> 14, B = e[2] << 1 | e[3] >>> 31, L = e[3] << 1 | e[2] >>> 31, y = e[13] << 12 | e[12] >>> 20, v = e[12] << 12 | e[13] >>> 20, Q = e[22] << 10 | e[23] >>> 22, Y = e[23] << 10 | e[22] >>> 22, N = e[33] << 13 | e[32] >>> 19, R = e[32] << 13 | e[33] >>> 19, el = e[42] << 2 | e[43] >>> 30, ec = e[43] << 2 | e[42] >>> 30, et = e[5] << 30 | e[4] >>> 2, er = e[4] << 30 | e[5] >>> 2, F = e[14] << 6 | e[15] >>> 26, D = e[15] << 6 | e[14] >>> 26, b = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, Z = e[34] << 15 | e[35] >>> 17, X = e[35] << 15 | e[34] >>> 17, T = e[45] << 29 | e[44] >>> 3, I = e[44] << 29 | e[45] >>> 3, k = e[6] << 28 | e[7] >>> 4, P = e[7] << 28 | e[6] >>> 4, en = e[17] << 23 | e[16] >>> 9, ei = e[16] << 23 | e[17] >>> 9, U = e[26] << 25 | e[27] >>> 7, j = e[27] << 25 | e[26] >>> 7, A = e[36] << 21 | e[37] >>> 11, E = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, K = e[8] << 27 | e[9] >>> 5, V = e[9] << 27 | e[8] >>> 5, C = e[18] << 20 | e[19] >>> 12, _ = e[19] << 20 | e[18] >>> 12, eo = e[29] << 7 | e[28] >>> 25, es = e[28] << 7 | e[29] >>> 25, z = e[38] << 8 | e[39] >>> 24, H = e[39] << 8 | e[38] >>> 24, S = e[48] << 14 | e[49] >>> 18, x = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~y & b, e[1] = m ^ ~v & w, e[10] = k ^ ~C & M, e[11] = P ^ ~_ & O, e[20] = B ^ ~F & U, e[21] = L ^ ~D & j, e[30] = K ^ ~J & Q, e[31] = V ^ ~W & Y, e[40] = et ^ ~en & eo, e[41] = er ^ ~ei & es, e[2] = y ^ ~b & A, e[3] = v ^ ~w & E, e[12] = C ^ ~M & N, e[13] = _ ^ ~O & R, e[22] = F ^ ~U & z, e[23] = D ^ ~j & H, e[32] = J ^ ~Q & Z, e[33] = W ^ ~Y & X, e[42] = en ^ ~eo & ea, e[43] = ei ^ ~es & eu, e[4] = b ^ ~A & S, e[5] = w ^ ~E & x, e[14] = M ^ ~N & T, e[15] = O ^ ~R & I, e[24] = U ^ ~z & G, e[25] = j ^ ~H & q, e[34] = Q ^ ~Z & $, e[35] = Y ^ ~X & ee, e[44] = eo ^ ~ea & el, e[45] = es ^ ~eu & ec, e[6] = A ^ ~S & p, e[7] = E ^ ~x & m, e[16] = N ^ ~T & k, e[17] = R ^ ~I & P, e[26] = z ^ ~G & B, e[27] = H ^ ~q & L, e[36] = Z ^ ~$ & K, e[37] = X ^ ~ee & V, e[46] = ea ^ ~el & et, e[47] = eu ^ ~ec & er, e[8] = S ^ ~p & y, e[9] = x ^ ~m & v, e[18] = T ^ ~k & C, e[19] = I ^ ~P & _, e[28] = G ^ ~B & F, e[29] = q ^ ~L & D, e[38] = $ ^ ~K & J, e[39] = ee ^ ~V & W, e[48] = el ^ ~et & en, e[49] = ec ^ ~er & ei, e[0] ^= g[n], e[1] ^= g[n + 1]
        };
        if (l) e.exports = C;
        else {
          for (M = 0; M < _.length; ++M) a[_[M]] = C[_[M]];
          c && void 0 !== (n = (function () {
            return C
          }).call(t, r, t, e)) && (e.exports = n)
        }
      }()
    },
    79746: function (e) {
      function t(e, t) {
        if (!e) throw Error(t || "Assertion failed")
      }
      e.exports = t, t.equal = function (e, t, r) {
        if (e != t) throw Error(r || "Assertion failed: " + e + " != " + t)
      }
    },
    10227: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getDomainLocale = function (e, t, n, i) {
        {
          let o = r(72554).normalizeLocalePath,
            s = r(84643).detectDomainLocale,
            a = t || o(e, n).detectedLocale,
            u = s(i, void 0, a);
          if (u) {
            let t = "http".concat(u.http ? "" : "s", "://"),
              r = a === u.defaultLocale ? "" : "/".concat(a);
            return "".concat(t).concat(u.domain).concat("").concat(r).concat(e)
          }
          return !1
        }
      }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    19749: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = r(6495).Z,
        i = r(92648).Z,
        o = r(91598).Z,
        s = r(17273).Z,
        a = o(r(67294)),
        u = i(r(83121)),
        l = r(2675),
        c = r(10139),
        h = r(28730);
      r(57238);
      var f = i(r(89824));
      let d = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
      };

      function p(e) {
        return void 0 !== e.default
      }

      function g(e) {
        return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
      }

      function m(e, t, r, i, o, s, a) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let u = "decode" in e ? e.decode() : Promise.resolve();
        u.catch(() => {}).then(() => {
          if (e.parentNode) {
            if ("blur" === r && s(!0), null == i ? void 0 : i.current) {
              let t = new Event("load");
              Object.defineProperty(t, "target", {
                writable: !1,
                value: e
              });
              let r = !1,
                o = !1;
              i.current(n({}, t, {
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => r,
                isPropagationStopped: () => o,
                persist: () => {},
                preventDefault: () => {
                  r = !0, t.preventDefault()
                },
                stopPropagation: () => {
                  o = !0, t.stopPropagation()
                }
              }))
            }(null == o ? void 0 : o.current) && o.current(e)
          }
        })
      }
      let y = a.forwardRef((e, t) => {
          var {
            imgAttributes: r,
            heightInt: i,
            widthInt: o,
            qualityInt: u,
            className: l,
            imgStyle: c,
            blurStyle: h,
            isLazy: f,
            fill: d,
            placeholder: p,
            loading: g,
            srcString: y,
            config: v,
            unoptimized: b,
            loader: w,
            onLoadRef: A,
            onLoadingCompleteRef: E,
            setBlurComplete: S,
            setShowAltText: x,
            onLoad: k,
            onError: P
          } = e, C = s(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
          return g = f ? "lazy" : g, a.default.createElement(a.default.Fragment, null, a.default.createElement("img", Object.assign({}, C, r, {
            width: o,
            height: i,
            decoding: "async",
            "data-nimg": d ? "fill" : "1",
            className: l,
            loading: g,
            style: n({}, c, h),
            ref: a.useCallback(e => {
              t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (P && (e.src = e.src), e.complete && m(e, y, p, A, E, S, b))
            }, [y, p, A, E, S, P, b, t]),
            onLoad: e => {
              let t = e.currentTarget;
              m(t, y, p, A, E, S, b)
            },
            onError: e => {
              x(!0), "blur" === p && S(!0), P && P(e)
            }
          })))
        }),
        v = a.forwardRef((e, t) => {
          let r, i;
          var o, {
              src: m,
              sizes: v,
              unoptimized: b = !1,
              priority: w = !1,
              loading: A,
              className: E,
              quality: S,
              width: x,
              height: k,
              fill: P,
              style: C,
              onLoad: _,
              onLoadingComplete: M,
              placeholder: O = "empty",
              blurDataURL: N,
              layout: R,
              objectFit: T,
              objectPosition: I,
              lazyBoundary: B,
              lazyRoot: L
            } = e,
            F = s(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
          let D = a.useContext(h.ImageConfigContext),
            U = a.useMemo(() => {
              let e = d || D || c.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return n({}, e, {
                allSizes: t,
                deviceSizes: r
              })
            }, [D]),
            j = F,
            z = j.loader || f.default;
          delete j.loader;
          let H = "__next_img_default" in z;
          if (H) {
            if ("custom" === U.loader) throw Error('Image with src "'.concat(m, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
          } else {
            let e = z;
            z = t => {
              let {
                config: r
              } = t, n = s(t, ["config"]);
              return e(n)
            }
          }
          if (R) {
            "fill" === R && (P = !0);
            let e = {
              intrinsic: {
                maxWidth: "100%",
                height: "auto"
              },
              responsive: {
                width: "100%",
                height: "auto"
              }
            } [R];
            e && (C = n({}, C, e));
            let t = {
              responsive: "100vw",
              fill: "100vw"
            } [R];
            t && !v && (v = t)
          }
          let G = "",
            q = g(x),
            K = g(k);
          if ("object" == typeof (o = m) && (p(o) || void 0 !== o.src)) {
            let e = p(m) ? m.default : m;
            if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
            if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
            if (r = e.blurWidth, i = e.blurHeight, N = N || e.blurDataURL, G = e.src, !P) {
              if (q || K) {
                if (q && !K) {
                  let t = q / e.width;
                  K = Math.round(e.height * t)
                } else if (!q && K) {
                  let t = K / e.height;
                  q = Math.round(e.width * t)
                }
              } else q = e.width, K = e.height
            }
          }
          let V = !w && ("lazy" === A || void 0 === A);
          ((m = "string" == typeof m ? m : G).startsWith("data:") || m.startsWith("blob:")) && (b = !0, V = !1), U.unoptimized && (b = !0), H && m.endsWith(".svg") && !U.dangerouslyAllowSVG && (b = !0);
          let [J, W] = a.useState(!1), [Q, Y] = a.useState(!1), Z = g(S), X = Object.assign(P ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: T,
            objectPosition: I
          } : {}, Q ? {} : {
            color: "transparent"
          }, C), $ = "blur" === O && N && !J ? {
            backgroundSize: X.objectFit || "cover",
            backgroundPosition: X.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({
              widthInt: q,
              heightInt: K,
              blurWidth: r,
              blurHeight: i,
              blurDataURL: N
            }), '")')
          } : {}, ee = function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: s,
              loader: a
            } = e;
            if (n) return {
              src: r,
              srcSet: void 0,
              sizes: void 0
            };
            let {
              widths: u,
              kind: l
            } = function (e, t, r) {
              let {
                deviceSizes: n,
                allSizes: i
              } = e;
              if (r) {
                let e = /(^|\s)(1?\d?\d)vw/g,
                  t = [];
                for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
                if (t.length) {
                  let e = .01 * Math.min(...t);
                  return {
                    widths: i.filter(t => t >= n[0] * e),
                    kind: "w"
                  }
                }
                return {
                  widths: i,
                  kind: "w"
                }
              }
              if ("number" != typeof t) return {
                widths: n,
                kind: "w"
              };
              let o = [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))];
              return {
                widths: o,
                kind: "x"
              }
            }(t, i, s), c = u.length - 1;
            return {
              sizes: s || "w" !== l ? s : "100vw",
              srcSet: u.map((e, n) => "".concat(a({
                config: t,
                src: r,
                quality: o,
                width: e
              }), " ").concat("w" === l ? e : n + 1).concat(l)).join(", "),
              src: a({
                config: t,
                src: r,
                quality: o,
                width: u[c]
              })
            }
          }({
            config: U,
            src: m,
            unoptimized: b,
            width: q,
            quality: Z,
            sizes: v,
            loader: z
          }), et = m, er = {
            imageSrcSet: ee.srcSet,
            imageSizes: ee.sizes,
            crossOrigin: j.crossOrigin
          }, en = a.useRef(_);
          a.useEffect(() => {
            en.current = _
          }, [_]);
          let ei = a.useRef(M);
          a.useEffect(() => {
            ei.current = M
          }, [M]);
          let eo = n({
            isLazy: V,
            imgAttributes: ee,
            heightInt: K,
            widthInt: q,
            qualityInt: Z,
            className: E,
            imgStyle: X,
            blurStyle: $,
            loading: A,
            config: U,
            fill: P,
            unoptimized: b,
            placeholder: O,
            loader: z,
            srcString: et,
            onLoadRef: en,
            onLoadingCompleteRef: ei,
            setBlurComplete: W,
            setShowAltText: Y
          }, j);
          return a.default.createElement(a.default.Fragment, null, a.default.createElement(y, Object.assign({}, eo, {
            ref: t
          })), w ? a.default.createElement(u.default, null, a.default.createElement("link", Object.assign({
            key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
            rel: "preload",
            as: "image",
            href: ee.srcSet ? void 0 : ee.src
          }, er))) : null)
        });
      t.default = v, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    31551: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = r(92648).Z,
        i = r(17273).Z,
        o = n(r(67294)),
        s = r(41003),
        a = r(67795),
        u = r(54465),
        l = r(72692),
        c = r(48245),
        h = r(69246),
        f = r(10227),
        d = r(33468);
      let p = new Set;

      function g(e, t, r, n) {
        if (s.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let i = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
              o = t + "%" + r + "%" + i;
            if (p.has(o)) return;
            p.add(o)
          }
          Promise.resolve(e.prefetch(t, r, n)).catch(e => {})
        }
      }

      function m(e) {
        return "string" == typeof e ? e : a.formatUrl(e)
      }
      let y = o.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: a,
          as: p,
          children: y,
          prefetch: v,
          passHref: b,
          replace: w,
          shallow: A,
          scroll: E,
          locale: S,
          onClick: x,
          onMouseEnter: k,
          onTouchStart: P,
          legacyBehavior: C = !1
        } = e, _ = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
        r = y, C && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
        let M = !1 !== v,
          O = o.default.useContext(l.RouterContext),
          N = o.default.useContext(c.AppRouterContext),
          R = null != O ? O : N,
          T = !O,
          {
            href: I,
            as: B
          } = o.default.useMemo(() => {
            if (!O) {
              let e = m(a);
              return {
                href: e,
                as: p ? m(p) : e
              }
            }
            let [e, t] = s.resolveHref(O, a, !0);
            return {
              href: e,
              as: p ? s.resolveHref(O, p) : t || e
            }
          }, [O, a, p]),
          L = o.default.useRef(I),
          F = o.default.useRef(B);
        C && (n = o.default.Children.only(r));
        let D = C ? n && "object" == typeof n && n.ref : t,
          [U, j, z] = h.useIntersection({
            rootMargin: "200px"
          }),
          H = o.default.useCallback(e => {
            (F.current !== B || L.current !== I) && (z(), F.current = B, L.current = I), U(e), D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
          }, [B, D, I, z, U]);
        o.default.useEffect(() => {
          R && j && M && g(R, I, B, {
            locale: S
          })
        }, [B, I, j, S, M, null == O ? void 0 : O.locale, R]);
        let G = {
          ref: H,
          onClick(e) {
            C || "function" != typeof x || x(e), C && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), R && !e.defaultPrevented && function (e, t, r, n, i, a, u, l, c, h) {
              let {
                nodeName: f
              } = e.currentTarget, d = "A" === f.toUpperCase();
              if (d && (function (e) {
                  let {
                    target: t
                  } = e.currentTarget;
                  return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                }(e) || !s.isLocalURL(r))) return;
              e.preventDefault();
              let p = () => {
                "beforePopState" in t ? t[i ? "replace" : "push"](r, n, {
                  shallow: a,
                  locale: l,
                  scroll: u
                }) : t[i ? "replace" : "push"](n || r, {
                  forceOptimisticNavigation: !h
                })
              };
              c ? o.default.startTransition(p) : p()
            }(e, R, I, B, w, A, E, S, T, M)
          },
          onMouseEnter(e) {
            C || "function" != typeof k || k(e), C && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), R && (M || !T) && g(R, I, B, {
              locale: S,
              priority: !0,
              bypassPrefetchedCheck: !0
            })
          },
          onTouchStart(e) {
            C || "function" != typeof P || P(e), C && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), R && (M || !T) && g(R, I, B, {
              locale: S,
              priority: !0,
              bypassPrefetchedCheck: !0
            })
          }
        };
        if (!C || b || "a" === n.type && !("href" in n.props)) {
          let e = void 0 !== S ? S : null == O ? void 0 : O.locale,
            t = (null == O ? void 0 : O.isLocaleDomain) && f.getDomainLocale(B, e, null == O ? void 0 : O.locales, null == O ? void 0 : O.domainLocales);
          G.href = t || d.addBasePath(u.addLocale(B, e, null == O ? void 0 : O.defaultLocale))
        }
        return C ? o.default.cloneElement(n, G) : o.default.createElement("a", Object.assign({}, _, G), r)
      });
      t.default = y, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    72554: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.normalizeLocalePath = void 0;
      let n = (e, t) => r(24769).normalizeLocalePath(e, t);
      t.normalizeLocalePath = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    69246: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.useIntersection = function (e) {
        let {
          rootRef: t,
          rootMargin: r,
          disabled: u
        } = e, l = u || !o, [c, h] = n.useState(!1), f = n.useRef(null), d = n.useCallback(e => {
          f.current = e
        }, []);
        n.useEffect(() => {
          if (o) {
            if (l || c) return;
            let e = f.current;
            if (e && e.tagName) {
              let n = function (e, t, r) {
                let {
                  id: n,
                  observer: i,
                  elements: o
                } = function (e) {
                  let t;
                  let r = {
                      root: e.root || null,
                      margin: e.rootMargin || ""
                    },
                    n = a.find(e => e.root === r.root && e.margin === r.margin);
                  if (n && (t = s.get(n))) return t;
                  let i = new Map,
                    o = new IntersectionObserver(e => {
                      e.forEach(e => {
                        let t = i.get(e.target),
                          r = e.isIntersecting || e.intersectionRatio > 0;
                        t && r && t(r)
                      })
                    }, e);
                  return t = {
                    id: r,
                    observer: o,
                    elements: i
                  }, a.push(r), s.set(r, t), t
                }(r);
                return o.set(e, t), i.observe(e),
                  function () {
                    if (o.delete(e), i.unobserve(e), 0 === o.size) {
                      i.disconnect(), s.delete(n);
                      let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                      e > -1 && a.splice(e, 1)
                    }
                  }
              }(e, e => e && h(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r
              });
              return n
            }
          } else if (!c) {
            let e = i.requestIdleCallback(() => h(!0));
            return () => i.cancelIdleCallback(e)
          }
        }, [l, r, t, c, f.current]);
        let p = n.useCallback(() => {
          h(!1)
        }, []);
        return [d, c, p]
      };
      var n = r(67294),
        i = r(44686);
      let o = "function" == typeof IntersectionObserver,
        s = new Map,
        a = [];
      ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
        value: !0
      }), Object.assign(t.default, t), e.exports = t.default)
    },
    2675: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getImageBlurSvg = function (e) {
        let {
          widthInt: t,
          heightInt: r,
          blurWidth: n,
          blurHeight: i,
          blurDataURL: o
        } = e, s = n || t, a = i || r, u = o.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
        return s && a ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s, " ").concat(a, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n && i ? "1" : "20", "'/%3E").concat(u, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o, "'/%3E%3C/svg%3E")
      }
    },
    89824: function (e, t) {
      "use strict";

      function r(e) {
        let {
          config: t,
          src: r,
          width: n,
          quality: i
        } = e;
        return "".concat(t.path, "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(i || 75)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, r.__next_img_default = !0, t.default = r
    },
    25675: function (e, t, r) {
      e.exports = r(19749)
    },
    41664: function (e, t, r) {
      e.exports = r(31551)
    },
    11163: function (e, t, r) {
      e.exports = r(80880)
    },
    88357: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return u
        }
      });
      var n = r(67294),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0
        },
        o = n.createContext && n.createContext(i),
        s = function () {
          return (s = Object.assign || function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
          }).apply(this, arguments)
        },
        a = function (e, t) {
          var r = {};
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
          return r
        };

      function u(e) {
        return function (t) {
          return n.createElement(l, s({
            attr: s({}, e.attr)
          }, t), function e(t) {
            return t && t.map(function (t, r) {
              return n.createElement(t.tag, s({
                key: r
              }, t.attr), e(t.child))
            })
          }(e.child))
        }
      }

      function l(e) {
        var t = function (t) {
          var r, i = e.attr,
            o = e.size,
            u = e.title,
            l = a(e, ["attr", "size", "title"]),
            c = o || t.size || "1em";
          return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", s({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
          }, t.attr, i, l, {
            className: r,
            style: s(s({
              color: e.color || t.color
            }, t.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg"
          }), u && n.createElement("title", null, u), e.children)
        };
        return void 0 !== o ? n.createElement(o.Consumer, null, function (e) {
          return t(e)
        }) : t(i)
      }
    },
    93423: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return c
        }
      });
      var n = r(67294);

      function i(e) {
        if (!e) return null;
        if ("BODY" === e.tagName) return e;
        if ("IFRAME" === e.tagName) {
          var t = e.contentDocument;
          return t ? t.body : null
        }
        return e.offsetParent ? i(e.offsetParent) : null
      }

      function o(e) {
        var t = e || window.event;
        return t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
      }
      var s = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform),
        a = new Map,
        u = "object" == typeof document ? document : void 0,
        l = !1,
        c = u ? function (e, t) {
          void 0 === e && (e = !0);
          var r = (0, n.useRef)(u.body);
          t = t || r;
          var c = function (e) {
              var t = a.get(e);
              t ? a.set(e, {
                counter: t.counter + 1,
                initialOverflow: t.initialOverflow
              }) : (a.set(e, {
                counter: 1,
                initialOverflow: e.style.overflow
              }), s ? l || (function (e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                e && e.addEventListener && e.addEventListener.apply(e, t)
              }(document, "touchmove", o, {
                passive: !1
              }), l = !0) : e.style.overflow = "hidden")
            },
            h = function (e) {
              var t = a.get(e);
              t && (1 === t.counter ? (a.delete(e), s ? (e.ontouchmove = null, l && (function (e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                e && e.removeEventListener && e.removeEventListener.apply(e, t)
              }(document, "touchmove", o), l = !1)) : e.style.overflow = t.initialOverflow) : a.set(e, {
                counter: t.counter - 1,
                initialOverflow: t.initialOverflow
              }))
            };
          (0, n.useEffect)(function () {
            var r = i(t.current);
            r && (e ? c(r) : h(r))
          }, [e, t.current]), (0, n.useEffect)(function () {
            var e = i(t.current);
            if (e) return function () {
              h(e)
            }
          }, [])
        } : function (e, t) {
          void 0 === e && (e = !0)
        }
    },
    17635: function (e) {
      "use strict";
      ! function (t) {
        function r(e) {
          let t = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
            r = 1779033703,
            n = 3144134277,
            i = 1013904242,
            o = 2773480762,
            s = 1359893119,
            a = 2600822924,
            u = 528734635,
            l = 1541459225,
            c = new Uint32Array(64);

          function h(e) {
            let h = 0,
              f = e.length;
            for (; f >= 64;) {
              let d = r,
                p = n,
                g = i,
                m = o,
                y = s,
                v = a,
                b = u,
                w = l,
                A, E, S, x, k;
              for (E = 0; E < 16; E++) S = h + 4 * E, c[E] = (255 & e[S]) << 24 | (255 & e[S + 1]) << 16 | (255 & e[S + 2]) << 8 | 255 & e[S + 3];
              for (E = 16; E < 64; E++) x = ((A = c[E - 2]) >>> 17 | A << 15) ^ (A >>> 19 | A << 13) ^ A >>> 10, k = ((A = c[E - 15]) >>> 7 | A << 25) ^ (A >>> 18 | A << 14) ^ A >>> 3, c[E] = (x + c[E - 7] | 0) + (k + c[E - 16] | 0) | 0;
              for (E = 0; E < 64; E++) x = (((y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) + (y & v ^ ~y & b) | 0) + (w + (t[E] + c[E] | 0) | 0) | 0, k = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & p ^ d & g ^ p & g) | 0, w = b, b = v, v = y, y = m + x | 0, m = g, g = p, p = d, d = x + k | 0;
              r = r + d | 0, n = n + p | 0, i = i + g | 0, o = o + m | 0, s = s + y | 0, a = a + v | 0, u = u + b | 0, l = l + w | 0, h += 64, f -= 64
            }
          }
          h(e);
          let f, d = e.length % 64,
            p = e.length / 536870912 | 0,
            g = e.length << 3,
            m = d < 56 ? 56 : 120,
            y = e.slice(e.length - d, e.length);
          for (y.push(128), f = d + 1; f < m; f++) y.push(0);
          return y.push(p >>> 24 & 255), y.push(p >>> 16 & 255), y.push(p >>> 8 & 255), y.push(p >>> 0 & 255), y.push(g >>> 24 & 255), y.push(g >>> 16 & 255), y.push(g >>> 8 & 255), y.push(g >>> 0 & 255), h(y), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u >>> 0 & 255, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, l >>> 0 & 255]
        }

        function n(e, t, n) {
          let i;
          e = e.length <= 64 ? e : r(e);
          let o = 64 + t.length + 4,
            s = Array(o),
            a = Array(64),
            u = [];
          for (i = 0; i < 64; i++) s[i] = 54;
          for (i = 0; i < e.length; i++) s[i] ^= e[i];
          for (i = 0; i < t.length; i++) s[64 + i] = t[i];
          for (i = o - 4; i < o; i++) s[i] = 0;
          for (i = 0; i < 64; i++) a[i] = 92;
          for (i = 0; i < e.length; i++) a[i] ^= e[i];

          function l() {
            for (let e = o - 1; e >= o - 4; e--) {
              if (s[e]++, s[e] <= 255) return;
              s[e] = 0
            }
          }
          for (; n >= 32;) l(), u = u.concat(r(a.concat(r(s)))), n -= 32;
          return n > 0 && (l(), u = u.concat(r(a.concat(r(s))).slice(0, n))), u
        }

        function i(e, t, r, n, i) {
          let u;
          for (a(e, (2 * r - 1) * 16, i, 0, 16), u = 0; u < 2 * r; u++) s(e, 16 * u, i, 16),
            function (e, t) {
              a(e, 0, t, 0, 16);
              for (let e = 8; e > 0; e -= 2) t[4] ^= o(t[0] + t[12], 7), t[8] ^= o(t[4] + t[0], 9), t[12] ^= o(t[8] + t[4], 13), t[0] ^= o(t[12] + t[8], 18), t[9] ^= o(t[5] + t[1], 7), t[13] ^= o(t[9] + t[5], 9), t[1] ^= o(t[13] + t[9], 13), t[5] ^= o(t[1] + t[13], 18), t[14] ^= o(t[10] + t[6], 7), t[2] ^= o(t[14] + t[10], 9), t[6] ^= o(t[2] + t[14], 13), t[10] ^= o(t[6] + t[2], 18), t[3] ^= o(t[15] + t[11], 7), t[7] ^= o(t[3] + t[15], 9), t[11] ^= o(t[7] + t[3], 13), t[15] ^= o(t[11] + t[7], 18), t[1] ^= o(t[0] + t[3], 7), t[2] ^= o(t[1] + t[0], 9), t[3] ^= o(t[2] + t[1], 13), t[0] ^= o(t[3] + t[2], 18), t[6] ^= o(t[5] + t[4], 7), t[7] ^= o(t[6] + t[5], 9), t[4] ^= o(t[7] + t[6], 13), t[5] ^= o(t[4] + t[7], 18), t[11] ^= o(t[10] + t[9], 7), t[8] ^= o(t[11] + t[10], 9), t[9] ^= o(t[8] + t[11], 13), t[10] ^= o(t[9] + t[8], 18), t[12] ^= o(t[15] + t[14], 7), t[13] ^= o(t[12] + t[15], 9), t[14] ^= o(t[13] + t[12], 13), t[15] ^= o(t[14] + t[13], 18);
              for (let r = 0; r < 16; ++r) e[r] += t[r]
            }(i, n), a(i, 0, e, t + 16 * u, 16);
          for (u = 0; u < r; u++) a(e, t + 32 * u, e, 16 * u, 16);
          for (u = 0; u < r; u++) a(e, t + (2 * u + 1) * 16, e, (u + r) * 16, 16)
        }

        function o(e, t) {
          return e << t | e >>> 32 - t
        }

        function s(e, t, r, n) {
          for (let i = 0; i < n; i++) r[i] ^= e[t + i]
        }

        function a(e, t, r, n, i) {
          for (; i--;) r[n++] = e[t++]
        }

        function u(e) {
          if (!e || "number" != typeof e.length) return !1;
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            if ("number" != typeof r || r % 1 || r < 0 || r >= 256) return !1
          }
          return !0
        }

        function l(e, t) {
          if ("number" != typeof e || e % 1) throw Error("invalid " + t);
          return e
        }

        function c(e, t, r, o, c, h, f) {
          let d;
          if (r = l(r, "N"), o = l(o, "r"), c = l(c, "p"), h = l(h, "dkLen"), 0 === r || (r & r - 1) != 0) throw Error("N must be power of 2");
          if (r > 2147483647 / 128 / o) throw Error("N too large");
          if (o > 2147483647 / 128 / c) throw Error("r too large");
          if (!u(e)) throw Error("password must be an array or buffer");
          if (e = Array.prototype.slice.call(e), !u(t)) throw Error("salt must be an array or buffer");
          let p = n(e, t = Array.prototype.slice.call(t), 128 * c * o),
            g = new Uint32Array(32 * c * o);
          for (let e = 0; e < g.length; e++) {
            let t = 4 * e;
            g[e] = (255 & p[t + 3]) << 24 | (255 & p[t + 2]) << 16 | (255 & p[t + 1]) << 8 | (255 & p[t + 0]) << 0
          }
          let m = new Uint32Array(64 * o),
            y = new Uint32Array(32 * o * r),
            v = 32 * o,
            b = new Uint32Array(16),
            w = new Uint32Array(16),
            A = c * r * 2,
            E = 0,
            S = null,
            x = !1,
            k = 0,
            P = 0,
            C, _ = f ? parseInt(1e3 / o) : 4294967295,
            M = "undefined" != typeof setImmediate ? setImmediate : setTimeout,
            O = function () {
              let t;
              if (x) return f(Error("cancelled"), E / A);
              switch (k) {
                case 0:
                  a(g, d = 32 * P * o, m, 0, v), k = 1, C = 0;
                case 1:
                  (t = r - C) > _ && (t = _);
                  for (let e = 0; e < t; e++) a(m, 0, y, (C + e) * v, v), i(m, v, o, b, w);
                  if (C += t, E += t, f) {
                    let e = parseInt(1e3 * E / A);
                    if (e !== S) {
                      if (x = f(null, E / A)) break;
                      S = e
                    }
                  }
                  if (C < r) break;
                  C = 0, k = 2;
                case 2:
                  (t = r - C) > _ && (t = _);
                  for (let e = 0; e < t; e++) {
                    let e = (2 * o - 1) * 16,
                      t = m[e] & r - 1;
                    s(y, t * v, m, v), i(m, v, o, b, w)
                  }
                  if (C += t, E += t, f) {
                    let e = parseInt(1e3 * E / A);
                    if (e !== S) {
                      if (x = f(null, E / A)) break;
                      S = e
                    }
                  }
                  if (C < r) break;
                  if (a(m, 0, g, d, v), ++P < c) {
                    k = 0;
                    break
                  }
                  p = [];
                  for (let e = 0; e < g.length; e++) p.push(g[e] >> 0 & 255), p.push(g[e] >> 8 & 255), p.push(g[e] >> 16 & 255), p.push(g[e] >> 24 & 255);
                  let u = n(e, p, h);
                  return f && f(null, 1, u), u
              }
              f && M(O)
            };
          if (!f)
            for (;;) {
              let e = O();
              if (void 0 != e) return e
            }
          O()
        }
        e.exports = {
          scrypt: function (e, t, r, n, i, o, s) {
            return new Promise(function (a, u) {
              let l = 0;
              s && s(0), c(e, t, r, n, i, o, function (e, t, r) {
                if (e) u(e);
                else if (r) s && 1 !== l && s(1), a(new Uint8Array(r));
                else if (s && t !== l) return l = t, s(t)
              })
            })
          },
          syncScrypt: function (e, t, r, n, i, o) {
            return new Uint8Array(c(e, t, r, n, i, o))
          }
        }
      }(0)
    },
    50139: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var n = r(67294),
        i = r(61688),
        o = "function" == typeof Object.is ? Object.is : function (e, t) {
          return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        s = i.useSyncExternalStore,
        a = n.useRef,
        u = n.useEffect,
        l = n.useMemo,
        c = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var h = a(null);
        if (null === h.current) {
          var f = {
            hasValue: !1,
            value: null
          };
          h.current = f
        } else f = h.current;
        h = l(function () {
          function e(e) {
            if (!u) {
              if (u = !0, s = e, e = n(e), void 0 !== i && f.hasValue) {
                var t = f.value;
                if (i(t, e)) return a = t
              }
              return a = e
            }
            if (t = a, o(s, e)) return t;
            var r = n(e);
            return void 0 !== i && i(t, r) ? t : (s = e, a = r)
          }
          var s, a, u = !1,
            l = void 0 === r ? null : r;
          return [function () {
            return e(t())
          }, null === l ? void 0 : function () {
            return e(l())
          }]
        }, [t, r, n, i]);
        var d = s(e, h[0], h[1]);
        return u(function () {
          f.hasValue = !0, f.value = d
        }, [d]), c(d), d
      }
    },
    52798: function (e, t, r) {
      "use strict";
      e.exports = r(50139)
    },
    39516: function (e, t, r) {
      "use strict";
      r.d(t, {
        d: function () {
          return h
        },
        f: function () {
          return c
        }
      });
      var n = r(67294),
        i = r(19946),
        o = r(12351),
        s = r(16723),
        a = r(23784),
        u = r(73781);
      let l = (0, n.createContext)(null);

      function c() {
        let [e, t] = (0, n.useState)([]);
        return [e.length > 0 ? e.join(" ") : void 0, (0, n.useMemo)(() => function (e) {
          let r = (0, u.z)(e => (t(t => [...t, e]), () => t(t => {
              let r = t.slice(),
                n = r.indexOf(e);
              return -1 !== n && r.splice(n, 1), r
            }))),
            i = (0, n.useMemo)(() => ({
              register: r,
              slot: e.slot,
              name: e.name,
              props: e.props
            }), [r, e.slot, e.name, e.props]);
          return n.createElement(l.Provider, {
            value: i
          }, e.children)
        }, [t])]
      }
      let h = (0, o.yV)(function (e, t) {
        let r = (0, i.M)(),
          {
            id: u = `headlessui-description-${r}`,
            ...c
          } = e,
          h = function e() {
            let t = (0, n.useContext)(l);
            if (null === t) {
              let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
              throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
            }
            return t
          }(),
          f = (0, a.T)(t);
        (0, s.e)(() => h.register(u), [u, h.register]);
        let d = {
          ref: f,
          ...h.props,
          id: u
        };
        return (0, o.sY)({
          ourProps: d,
          theirProps: c,
          slot: h.slot || {},
          defaultTag: "p",
          name: h.name || "Description"
        })
      })
    },
    31764: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return ea
        }
      });
      var n, i, o, s, a, u = r(67294),
        l = r(32984),
        c = r(12351),
        h = r(23784),
        f = r(61363),
        d = r(64103),
        p = r(19946),
        g = r(82180),
        m = r(46045),
        y = r(84575),
        v = r(73781),
        b = r(3855),
        w = ((n = w || {})[n.Forwards = 0] = "Forwards", n[n.Backwards = 1] = "Backwards", n),
        A = r(14879),
        E = r(15466);

      function S(...e) {
        return (0, u.useMemo)(() => (0, E.r)(...e), [...e])
      }

      function x(e, t, r, n) {
        let i = (0, b.E)(r);
        (0, u.useEffect)(() => {
          function r(e) {
            i.current(e)
          }
          return (e = null != e ? e : window).addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
        }, [e, t, n])
      }
      var k = r(81021);

      function P(e, t) {
        let r = (0, u.useRef)([]),
          n = (0, v.z)(e);
        (0, u.useEffect)(() => {
          let e = [...r.current];
          for (let [i, o] of t.entries())
            if (r.current[i] !== o) {
              let i = n(t, e);
              return r.current = t, i
            }
        }, [n, ...t])
      }
      var C = r(94192),
        _ = ((i = _ || {})[i.None = 1] = "None", i[i.InitialFocus = 2] = "InitialFocus", i[i.TabLock = 4] = "TabLock", i[i.FocusLock = 8] = "FocusLock", i[i.RestoreFocus = 16] = "RestoreFocus", i[i.All = 30] = "All", i);
      let M = Object.assign((0, c.yV)(function (e, t) {
        var r, n;
        let i, o, s = (0, u.useRef)(null),
          a = (0, h.T)(s, t),
          {
            initialFocus: f,
            containers: d,
            features: p = 30,
            ...E
          } = e;
        (0, g.H)() || (p = 1);
        let _ = S(s);
        ! function ({
          ownerDocument: e
        }, t) {
          let r = (0, u.useRef)(null);
          x(null == e ? void 0 : e.defaultView, "focusout", e => {
            !t || r.current || (r.current = e.target)
          }, !0), P(() => {
            t || ((null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, y.C5)(r.current), r.current = null)
          }, [t]);
          let n = (0, u.useRef)(!1);
          (0, u.useEffect)(() => (n.current = !1, () => {
            n.current = !0, (0, k.Y)(() => {
              n.current && ((0, y.C5)(r.current), r.current = null)
            })
          }), [])
        }({
          ownerDocument: _
        }, Boolean(16 & p));
        let M = function ({
          ownerDocument: e,
          container: t,
          initialFocus: r
        }, n) {
          let i = (0, u.useRef)(null),
            o = (0, A.t)();
          return P(() => {
            if (!n) return;
            let s = t.current;
            s && (0, k.Y)(() => {
              if (!o.current) return;
              let t = null == e ? void 0 : e.activeElement;
              if (null != r && r.current) {
                if ((null == r ? void 0 : r.current) === t) {
                  i.current = t;
                  return
                }
              } else if (s.contains(t)) {
                i.current = t;
                return
              }
              null != r && r.current ? (0, y.C5)(r.current) : (0, y.jA)(s, y.TO.First) === y.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = null == e ? void 0 : e.activeElement
            })
          }, [n]), i
        }({
          ownerDocument: _,
          container: s,
          initialFocus: f
        }, Boolean(2 & p));
        ! function ({
          ownerDocument: e,
          container: t,
          containers: r,
          previousActiveElement: n
        }, i) {
          let o = (0, A.t)();
          x(null == e ? void 0 : e.defaultView, "focus", e => {
            if (!i || !o.current) return;
            let s = new Set(null == r ? void 0 : r.current);
            s.add(t);
            let a = n.current;
            if (!a) return;
            let u = e.target;
            u && u instanceof HTMLElement ? O(s, u) ? (n.current = u, (0, y.C5)(u)) : (e.preventDefault(), e.stopPropagation(), (0, y.C5)(a)) : (0, y.C5)(n.current)
          }, !0)
        }({
          ownerDocument: _,
          container: s,
          containers: d,
          previousActiveElement: M
        }, Boolean(8 & p));
        let N = (i = (0, u.useRef)(0), r = "keydown", n = e => {
            "Tab" === e.key && (i.current = e.shiftKey ? 1 : 0)
          }, o = (0, b.E)(n), (0, u.useEffect)(() => {
            function e(e) {
              o.current(e)
            }
            return window.addEventListener(r, e, !0), () => window.removeEventListener(r, e, !0)
          }, [r, !0]), i),
          R = (0, v.z)(e => {
            let t = s.current;
            t && (0, l.E)(N.current, {
              [w.Forwards]: () => (0, y.jA)(t, y.TO.First, {
                skipElements: [e.relatedTarget]
              }),
              [w.Backwards]: () => (0, y.jA)(t, y.TO.Last, {
                skipElements: [e.relatedTarget]
              })
            })
          }),
          T = (0, C.G)(),
          I = (0, u.useRef)(!1);
        return u.createElement(u.Fragment, null, Boolean(4 & p) && u.createElement(m._, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": !0,
          onFocus: R,
          features: m.A.Focusable
        }), (0, c.sY)({
          ourProps: {
            ref: a,
            onKeyDown(e) {
              "Tab" == e.key && (I.current = !0, T.requestAnimationFrame(() => {
                I.current = !1
              }))
            },
            onBlur(e) {
              let t = new Set(null == d ? void 0 : d.current);
              t.add(s);
              let r = e.relatedTarget;
              !r || "true" !== r.dataset.headlessuiFocusGuard && (O(t, r) || (I.current ? (0, y.jA)(s.current, (0, l.E)(N.current, {
                [w.Forwards]: () => y.TO.Next,
                [w.Backwards]: () => y.TO.Previous
              }) | y.TO.WrapAround, {
                relativeTo: e.target
              }) : e.target instanceof HTMLElement && (0, y.C5)(e.target)))
            }
          },
          theirProps: E,
          defaultTag: "div",
          name: "FocusTrap"
        }), Boolean(4 & p) && u.createElement(m._, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": !0,
          onFocus: R,
          features: m.A.Focusable
        }))
      }), {
        features: _
      });

      function O(e, t) {
        var r;
        for (let n of e)
          if (null != (r = n.current) && r.contains(t)) return !0;
        return !1
      }
      var N = r(16723);
      let R = new Set,
        T = new Map;

      function I(e) {
        e.setAttribute("aria-hidden", "true"), e.inert = !0
      }

      function B(e) {
        let t = T.get(e);
        t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
      }
      var L = r(73935);
      let F = (0, u.createContext)(!1);

      function D(e) {
        return u.createElement(F.Provider, {
          value: e.force
        }, e.children)
      }
      var U = r(43393);
      let j = u.Fragment,
        z = (0, c.yV)(function (e, t) {
          let r = (0, u.useRef)(null),
            n = (0, h.T)((0, h.h)(e => {
              r.current = e
            }), t),
            i = S(r),
            o = function (e) {
              let t = (0, u.useContext)(F),
                r = (0, u.useContext)(G),
                n = S(e),
                [i, o] = (0, u.useState)(() => {
                  if (!t && null !== r || U.s) return null;
                  let e = null == n ? void 0 : n.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === n) return null;
                  let i = n.createElement("div");
                  return i.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(i)
                });
              return (0, u.useEffect)(() => {
                null !== i && (null != n && n.body.contains(i) || null == n || n.body.appendChild(i))
              }, [i, n]), (0, u.useEffect)(() => {
                t || null !== r && o(r.current)
              }, [r, o, t]), i
            }(r),
            [s] = (0, u.useState)(() => {
              var e;
              return U.s ? null : null != (e = null == i ? void 0 : i.createElement("div")) ? e : null
            }),
            a = (0, g.H)(),
            l = (0, u.useRef)(!1);
          return (0, N.e)(() => {
            if (l.current = !1, !(!o || !s)) return o.contains(s) || (s.setAttribute("data-headlessui-portal", ""), o.appendChild(s)), () => {
              l.current = !0, (0, k.Y)(() => {
                var e;
                l.current && o && s && (o.removeChild(s), o.childNodes.length <= 0 && (null == (e = o.parentElement) || e.removeChild(o)))
              })
            }
          }, [o, s]), a && o && s ? (0, L.createPortal)((0, c.sY)({
            ourProps: {
              ref: n
            },
            theirProps: e,
            defaultTag: j,
            name: "Portal"
          }), s) : null
        }),
        H = u.Fragment,
        G = (0, u.createContext)(null),
        q = Object.assign(z, {
          Group: (0, c.yV)(function (e, t) {
            let {
              target: r,
              ...n
            } = e, i = {
              ref: (0, h.T)(t)
            };
            return u.createElement(G.Provider, {
              value: r
            }, (0, c.sY)({
              ourProps: i,
              theirProps: n,
              defaultTag: H,
              name: "Popover.Group"
            }))
          })
        });
      var K = r(39516),
        V = r(16567);
      let J = (0, u.createContext)(() => {});
      J.displayName = "StackContext";
      var W = ((o = W || {})[o.Add = 0] = "Add", o[o.Remove = 1] = "Remove", o);

      function Q({
        children: e,
        onUpdate: t,
        type: r,
        element: n,
        enabled: i
      }) {
        let o = (0, u.useContext)(J),
          s = (0, v.z)((...e) => {
            null == t || t(...e), o(...e)
          });
        return (0, N.e)(() => {
          let e = void 0 === i || !0 === i;
          return e && s(0, r, n), () => {
            e && s(1, r, n)
          }
        }, [s, r, n, i]), u.createElement(J.Provider, {
          value: s
        }, e)
      }

      function Y(e, t, r) {
        let n = (0, b.E)(t);
        (0, u.useEffect)(() => {
          function t(e) {
            n.current(e)
          }
          return document.addEventListener(e, t, r), () => document.removeEventListener(e, t, r)
        }, [e, r])
      }
      var Z = r(9362),
        X = ((s = X || {})[s.Open = 0] = "Open", s[s.Closed = 1] = "Closed", s),
        $ = ((a = $ || {})[a.SetTitleId = 0] = "SetTitleId", a);
      let ee = {
          0: (e, t) => e.titleId === t.id ? e : {
            ...e,
            titleId: t.id
          }
        },
        et = (0, u.createContext)(null);

      function er(e) {
        let t = (0, u.useContext)(et);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw Error.captureStackTrace && Error.captureStackTrace(t, er), t
        }
        return t
      }

      function en(e, t) {
        return (0, l.E)(t.type, ee, e, t)
      }
      et.displayName = "DialogContext";
      let ei = c.AN.RenderStrategy | c.AN.Static,
        eo = (0, c.yV)(function (e, t) {
          let r = (0, p.M)(),
            {
              id: n = `headlessui-dialog-${r}`,
              open: i,
              onClose: o,
              initialFocus: s,
              __demoMode: a = !1,
              ...d
            } = e,
            [b, w] = (0, u.useState)(0),
            A = (0, V.oJ)();
          void 0 === i && null !== A && (i = (0, l.E)(A, {
            [V.ZM.Open]: !0,
            [V.ZM.Closed]: !1
          }));
          let k = (0, u.useRef)(new Set),
            P = (0, u.useRef)(null),
            C = (0, h.T)(P, t),
            _ = (0, u.useRef)(null),
            O = S(P),
            L = e.hasOwnProperty("open") || null !== A,
            F = e.hasOwnProperty("onClose");
          if (!L && !F) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
          if (!L) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
          if (!F) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
          if ("boolean" != typeof i) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);
          if ("function" != typeof o) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);
          let U = i ? 0 : 1,
            [j, z] = (0, u.useReducer)(en, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, u.createRef)()
            }),
            H = (0, v.z)(() => o(!1)),
            G = (0, v.z)(e => z({
              type: 0,
              id: e
            })),
            J = !!(0, g.H)() && !a && 0 === U,
            X = b > 1,
            $ = null !== (0, u.useContext)(et);
          ! function (e, t = !0) {
            (0, N.e)(() => {
              if (!t || !e.current) return;
              let r = e.current,
                n = (0, E.r)(r);
              if (n) {
                for (let e of (R.add(r), T.keys())) e.contains(r) && (B(e), T.delete(e));
                return n.querySelectorAll("body > *").forEach(e => {
                  if (e instanceof HTMLElement) {
                    for (let t of R)
                      if (e.contains(t)) return;
                    1 === R.size && (T.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert
                    }), I(e))
                  }
                }), () => {
                  if (R.delete(r), R.size > 0) n.querySelectorAll("body > *").forEach(e => {
                    if (e instanceof HTMLElement && !T.has(e)) {
                      for (let t of R)
                        if (e.contains(t)) return;
                      T.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert
                      }), I(e)
                    }
                  });
                  else
                    for (let e of T.keys()) B(e), T.delete(e)
                }
              }
            }, [t])
          }(P, !!X && J);
          let ee = (0, v.z)(() => {
            var e, t;
            return [...Array.from(null != (e = null == O ? void 0 : O.querySelectorAll("body > *, [data-headlessui-portal]")) ? e : []).filter(e => !(!(e instanceof HTMLElement) || e.contains(_.current) || j.panelRef.current && e.contains(j.panelRef.current))), null != (t = j.panelRef.current) ? t : P.current]
          });
          (function (e, t, r = !0) {
            let n = (0, u.useRef)(!1);

            function i(r, i) {
              if (!n.current || r.defaultPrevented) return;
              let o = function e(t) {
                  return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                }(e),
                s = i(r);
              if (null !== s && s.getRootNode().contains(s)) {
                for (let e of o) {
                  if (null === e) continue;
                  let t = e instanceof HTMLElement ? e : e.current;
                  if (null != t && t.contains(s) || r.composed && r.composedPath().includes(t)) return
                }
                return (0, y.sP)(s, y.tJ.Loose) || -1 === s.tabIndex || r.preventDefault(), t(r, s)
              }
            }(0, u.useEffect)(() => {
              requestAnimationFrame(() => {
                n.current = r
              })
            }, [r]);
            let o = (0, u.useRef)(null);
            Y("mousedown", e => {
              var t, r;
              n.current && (o.current = (null == (r = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : r[0]) || e.target)
            }, !0), Y("click", e => {
              o.current && (i(e, () => o.current), o.current = null)
            }, !0), Y("blur", e => i(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
          })(() => ee(), H, J && !X), x(null == O ? void 0 : O.defaultView, "keydown", e => {
              e.defaultPrevented || e.key === f.R.Escape && 0 === U && (X || (e.preventDefault(), e.stopPropagation(), H()))
            }),
            function (e, t, r = () => [document.body]) {
              (0, u.useEffect)(() => {
                var n;
                if (!t || !e) return;
                let i = (0, Z.k)(),
                  o = window.pageYOffset;

                function s(e, t, r) {
                  let n = e.style.getPropertyValue(t);
                  return Object.assign(e.style, {
                    [t]: r
                  }), i.add(() => {
                    Object.assign(e.style, {
                      [t]: n
                    })
                  })
                }
                let a = e.documentElement,
                  u = (null != (n = e.defaultView) ? n : window).innerWidth - a.clientWidth;
                if (s(a, "overflow", "hidden"), u > 0) {
                  let e = a.clientWidth - a.offsetWidth;
                  s(a, "paddingRight", `${u-e}px`)
                }
                if (/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0) {
                  s(e.body, "marginTop", `-${o}px`), window.scrollTo(0, 0);
                  let t = null;
                  i.addEventListener(e, "click", n => {
                    if (n.target instanceof HTMLElement) try {
                      let i = n.target.closest("a");
                      if (!i) return;
                      let {
                        hash: o
                      } = new URL(i.href), s = e.querySelector(o);
                      s && !r().some(e => e.contains(s)) && (t = s)
                    } catch {}
                  }, !0), i.addEventListener(e, "touchmove", e => {
                    e.target instanceof HTMLElement && !r().some(t => t.contains(e.target)) && e.preventDefault()
                  }, {
                    passive: !1
                  }), i.add(() => {
                    window.scrollTo(0, window.pageYOffset + o), t && t.isConnected && (t.scrollIntoView({
                      block: "nearest"
                    }), t = null)
                  })
                }
                return i.dispose
              }, [e, t])
            }(O, 0 === U && !$, ee), (0, u.useEffect)(() => {
              if (0 !== U || !P.current) return;
              let e = new IntersectionObserver(e => {
                for (let t of e) 0 === t.boundingClientRect.x && 0 === t.boundingClientRect.y && 0 === t.boundingClientRect.width && 0 === t.boundingClientRect.height && H()
              });
              return e.observe(P.current), () => e.disconnect()
            }, [U, P, H]);
          let [er, eo] = (0, K.f)(), es = (0, u.useMemo)(() => [{
            dialogState: U,
            close: H,
            setTitleId: G
          }, j], [U, j, H, G]), ea = (0, u.useMemo)(() => ({
            open: 0 === U
          }), [U]), eu = {
            ref: C,
            id: n,
            role: "dialog",
            "aria-modal": 0 === U || void 0,
            "aria-labelledby": j.titleId,
            "aria-describedby": er
          };
          return u.createElement(Q, {
            type: "Dialog",
            enabled: 0 === U,
            element: P,
            onUpdate: (0, v.z)((e, t, r) => {
              "Dialog" === t && (0, l.E)(e, {
                [W.Add]() {
                  k.current.add(r), w(e => e + 1)
                },
                [W.Remove]() {
                  k.current.add(r), w(e => e - 1)
                }
              })
            })
          }, u.createElement(D, {
            force: !0
          }, u.createElement(q, null, u.createElement(et.Provider, {
            value: es
          }, u.createElement(q.Group, {
            target: P
          }, u.createElement(D, {
            force: !1
          }, u.createElement(eo, {
            slot: ea,
            name: "Dialog.Description"
          }, u.createElement(M, {
            initialFocus: s,
            containers: k,
            features: J ? (0, l.E)(X ? "parent" : "leaf", {
              parent: M.features.RestoreFocus,
              leaf: M.features.All & ~M.features.FocusLock
            }) : M.features.None
          }, (0, c.sY)({
            ourProps: eu,
            theirProps: d,
            slot: ea,
            defaultTag: "div",
            features: ei,
            visible: 0 === U,
            name: "Dialog"
          })))))))), u.createElement(m._, {
            features: m.A.Hidden,
            ref: _
          }))
        }),
        es = (0, c.yV)(function (e, t) {
          let r = (0, p.M)(),
            {
              id: n = `headlessui-dialog-overlay-${r}`,
              ...i
            } = e,
            [{
              dialogState: o,
              close: s
            }] = er("Dialog.Overlay"),
            a = (0, h.T)(t),
            l = (0, v.z)(e => {
              if (e.target === e.currentTarget) {
                if ((0, d.P)(e.currentTarget)) return e.preventDefault();
                e.preventDefault(), e.stopPropagation(), s()
              }
            }),
            f = (0, u.useMemo)(() => ({
              open: 0 === o
            }), [o]);
          return (0, c.sY)({
            ourProps: {
              ref: a,
              id: n,
              "aria-hidden": !0,
              onClick: l
            },
            theirProps: i,
            slot: f,
            defaultTag: "div",
            name: "Dialog.Overlay"
          })
        }),
        ea = Object.assign(eo, {
          Backdrop: (0, c.yV)(function (e, t) {
            let r = (0, p.M)(),
              {
                id: n = `headlessui-dialog-backdrop-${r}`,
                ...i
              } = e,
              [{
                dialogState: o
              }, s] = er("Dialog.Backdrop"),
              a = (0, h.T)(t);
            (0, u.useEffect)(() => {
              if (null === s.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
            }, [s.panelRef]);
            let l = (0, u.useMemo)(() => ({
              open: 0 === o
            }), [o]);
            return u.createElement(D, {
              force: !0
            }, u.createElement(q, null, (0, c.sY)({
              ourProps: {
                ref: a,
                id: n,
                "aria-hidden": !0
              },
              theirProps: i,
              slot: l,
              defaultTag: "div",
              name: "Dialog.Backdrop"
            })))
          }),
          Panel: (0, c.yV)(function (e, t) {
            let r = (0, p.M)(),
              {
                id: n = `headlessui-dialog-panel-${r}`,
                ...i
              } = e,
              [{
                dialogState: o
              }, s] = er("Dialog.Panel"),
              a = (0, h.T)(t, s.panelRef),
              l = (0, u.useMemo)(() => ({
                open: 0 === o
              }), [o]),
              f = (0, v.z)(e => {
                e.stopPropagation()
              });
            return (0, c.sY)({
              ourProps: {
                ref: a,
                id: n,
                onClick: f
              },
              theirProps: i,
              slot: l,
              defaultTag: "div",
              name: "Dialog.Panel"
            })
          }),
          Overlay: es,
          Title: (0, c.yV)(function (e, t) {
            let r = (0, p.M)(),
              {
                id: n = `headlessui-dialog-title-${r}`,
                ...i
              } = e,
              [{
                dialogState: o,
                setTitleId: s
              }] = er("Dialog.Title"),
              a = (0, h.T)(t);
            (0, u.useEffect)(() => (s(n), () => s(null)), [n, s]);
            let l = (0, u.useMemo)(() => ({
              open: 0 === o
            }), [o]);
            return (0, c.sY)({
              ourProps: {
                ref: a,
                id: n
              },
              theirProps: i,
              slot: l,
              defaultTag: "h2",
              name: "Dialog.Title"
            })
          }),
          Description: K.d
        })
    },
    61363: function (e, t, r) {
      "use strict";
      r.d(t, {
        R: function () {
          return i
        }
      });
      var n, i = ((n = i || {}).Space = " ", n.Enter = "Enter", n.Escape = "Escape", n.Backspace = "Backspace", n.Delete = "Delete", n.ArrowLeft = "ArrowLeft", n.ArrowUp = "ArrowUp", n.ArrowRight = "ArrowRight", n.ArrowDown = "ArrowDown", n.Home = "Home", n.End = "End", n.PageUp = "PageUp", n.PageDown = "PageDown", n.Tab = "Tab", n)
    },
    84539: function (e, t, r) {
      "use strict";
      r.d(t, {
        u: function () {
          return N
        }
      });
      var n, i = r(67294),
        o = r(12351),
        s = r(16567),
        a = r(32984),
        u = r(14879),
        l = r(16723),
        c = r(3855),
        h = r(82180),
        f = r(23784),
        d = r(9362);

      function p(e, ...t) {
        e && t.length > 0 && e.classList.add(...t)
      }

      function g(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t)
      }
      var m = r(94192),
        y = r(73781);

      function v(e = "") {
        return e.split(" ").filter(e => e.trim().length > 1)
      }
      let b = (0, i.createContext)(null);
      b.displayName = "TransitionContext";
      var w = ((n = w || {}).Visible = "visible", n.Hidden = "hidden", n);
      let A = (0, i.createContext)(null);

      function E(e) {
        return "children" in e ? E(e.children) : e.current.filter(({
          el: e
        }) => null !== e.current).filter(({
          state: e
        }) => "visible" === e).length > 0
      }

      function S(e, t) {
        let r = (0, c.E)(e),
          n = (0, i.useRef)([]),
          s = (0, u.t)(),
          l = (0, m.G)(),
          h = (0, y.z)((e, t = o.l4.Hidden) => {
            let i = n.current.findIndex(({
              el: t
            }) => t === e); - 1 !== i && ((0, a.E)(t, {
              [o.l4.Unmount]() {
                n.current.splice(i, 1)
              },
              [o.l4.Hidden]() {
                n.current[i].state = "hidden"
              }
            }), l.microTask(() => {
              var e;
              !E(n) && s.current && (null == (e = r.current) || e.call(r))
            }))
          }),
          f = (0, y.z)(e => {
            let t = n.current.find(({
              el: t
            }) => t === e);
            return t ? "visible" !== t.state && (t.state = "visible") : n.current.push({
              el: e,
              state: "visible"
            }), () => h(e, o.l4.Unmount)
          }),
          d = (0, i.useRef)([]),
          p = (0, i.useRef)(Promise.resolve()),
          g = (0, i.useRef)({
            enter: [],
            leave: [],
            idle: []
          }),
          v = (0, y.z)((e, r, n) => {
            d.current.splice(0), t && (t.chains.current[r] = t.chains.current[r].filter(([t]) => t !== e)), null == t || t.chains.current[r].push([e, new Promise(e => {
              d.current.push(e)
            })]), null == t || t.chains.current[r].push([e, new Promise(e => {
              Promise.all(g.current[r].map(([e, t]) => t)).then(() => e())
            })]), "enter" === r ? p.current = p.current.then(() => null == t ? void 0 : t.wait.current).then(() => n(r)) : n(r)
          }),
          b = (0, y.z)((e, t, r) => {
            Promise.all(g.current[t].splice(0).map(([e, t]) => t)).then(() => {
              var e;
              null == (e = d.current.shift()) || e()
            }).then(() => r(t))
          });
        return (0, i.useMemo)(() => ({
          children: n,
          register: f,
          unregister: h,
          onStart: v,
          onStop: b,
          wait: p,
          chains: g
        }), [f, h, n, v, b, g, p])
      }

      function x() {}
      A.displayName = "NestingContext";
      let k = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

      function P(e) {
        var t;
        let r = {};
        for (let n of k) r[n] = null != (t = e[n]) ? t : x;
        return r
      }
      let C = o.AN.RenderStrategy,
        _ = (0, o.yV)(function (e, t) {
          var r;
          let n, {
              beforeEnter: w,
              afterEnter: x,
              beforeLeave: k,
              afterLeave: _,
              enter: M,
              enterFrom: O,
              enterTo: N,
              entered: R,
              leave: T,
              leaveFrom: I,
              leaveTo: B,
              ...L
            } = e,
            F = (0, i.useRef)(null),
            D = (0, f.T)(F, t),
            U = L.unmount ? o.l4.Unmount : o.l4.Hidden,
            {
              show: j,
              appear: z,
              initial: H
            } = function () {
              let e = (0, i.useContext)(b);
              if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
              return e
            }(),
            [G, q] = (0, i.useState)(j ? "visible" : "hidden"),
            K = function () {
              let e = (0, i.useContext)(A);
              if (null === e) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
              return e
            }(),
            {
              register: V,
              unregister: J
            } = K,
            W = (0, i.useRef)(null);
          (0, i.useEffect)(() => V(F), [V, F]), (0, i.useEffect)(() => {
            if (U === o.l4.Hidden && F.current) {
              if (j && "visible" !== G) {
                q("visible");
                return
              }
              return (0, a.E)(G, {
                hidden: () => J(F),
                visible: () => V(F)
              })
            }
          }, [G, F, V, J, j, U]);
          let Q = (0, c.E)({
              enter: v(M),
              enterFrom: v(O),
              enterTo: v(N),
              entered: v(R),
              leave: v(T),
              leaveFrom: v(I),
              leaveTo: v(B)
            }),
            Y = (r = {
              beforeEnter: w,
              afterEnter: x,
              beforeLeave: k,
              afterLeave: _
            }, n = (0, i.useRef)(P(r)), (0, i.useEffect)(() => {
              n.current = P(r)
            }, [r]), n),
            Z = (0, h.H)();
          (0, i.useEffect)(() => {
            if (Z && "visible" === G && null === F.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
          }, [F, G, Z]);
          let X = H && !z,
            $ = !Z || X || W.current === j ? "idle" : j ? "enter" : "leave",
            ee = (0, y.z)(e => (0, a.E)(e, {
              enter: () => Y.current.beforeEnter(),
              leave: () => Y.current.beforeLeave(),
              idle: () => {}
            })),
            et = (0, y.z)(e => (0, a.E)(e, {
              enter: () => Y.current.afterEnter(),
              leave: () => Y.current.afterLeave(),
              idle: () => {}
            })),
            er = S(() => {
              q("hidden"), J(F)
            }, K);
          (function ({
            container: e,
            direction: t,
            classes: r,
            onStart: n,
            onStop: i
          }) {
            let o = (0, u.t)(),
              s = (0, m.G)(),
              h = (0, c.E)(t);
            (0, l.e)(() => {
              let t = (0, d.k)();
              s.add(t.dispose);
              let u = e.current;
              if (u && "idle" !== h.current && o.current) {
                var l, c, f, m;
                let e, o, s, y, v, b, w;
                return t.dispose(), n.current(h.current), t.add((l = u, c = r.current, f = "enter" === h.current, m = () => {
                  t.dispose(), i.current(h.current)
                }, o = f ? "enter" : "leave", s = (0, d.k)(), y = void 0 !== m ? (e = {
                  called: !1
                }, (...t) => {
                  if (!e.called) return e.called = !0, m(...t)
                }) : () => {}, "enter" === o && (l.removeAttribute("hidden"), l.style.display = ""), v = (0, a.E)(o, {
                  enter: () => c.enter,
                  leave: () => c.leave
                }), b = (0, a.E)(o, {
                  enter: () => c.enterTo,
                  leave: () => c.leaveTo
                }), w = (0, a.E)(o, {
                  enter: () => c.enterFrom,
                  leave: () => c.leaveFrom
                }), g(l, ...c.enter, ...c.enterTo, ...c.enterFrom, ...c.leave, ...c.leaveFrom, ...c.leaveTo, ...c.entered), p(l, ...v, ...w), s.nextFrame(() => {
                  g(l, ...w), p(l, ...b),
                    function (e, t) {
                      let r = (0, d.k)();
                      if (!e) return r.dispose;
                      let {
                        transitionDuration: n,
                        transitionDelay: i
                      } = getComputedStyle(e), [o, s] = [n, i].map(e => {
                        let [t = 0] = e.split(",").filter(Boolean).map(e => e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e, t) => t - e);
                        return t
                      });
                      if (o + s !== 0) {
                        let n = r.addEventListener(e, "transitionend", e => {
                          e.target === e.currentTarget && (t(), n())
                        })
                      } else t();
                      r.add(() => t()), r.dispose
                    }(l, () => (g(l, ...v), p(l, ...c.entered), y()))
                }), s.dispose)), t.dispose
              }
            }, [t])
          })({
            container: F,
            classes: Q,
            direction: $,
            onStart: (0, c.E)(e => {
              er.onStart(F, e, ee)
            }),
            onStop: (0, c.E)(e => {
              er.onStop(F, e, et), "leave" !== e || E(er) || (q("hidden"), J(F))
            })
          }), (0, i.useEffect)(() => {
            X && (U === o.l4.Hidden ? W.current = null : W.current = j)
          }, [j, X, G]);
          let en = L;
          return z && j && ("undefined" == typeof window || "undefined" == typeof document) && (en = {
            ...en,
            className: function (...e) {
              return e.filter(Boolean).join(" ")
            }(L.className, ...Q.current.enter, ...Q.current.enterFrom)
          }), i.createElement(A.Provider, {
            value: er
          }, i.createElement(s.up, {
            value: (0, a.E)(G, {
              visible: s.ZM.Open,
              hidden: s.ZM.Closed
            })
          }, (0, o.sY)({
            ourProps: {
              ref: D
            },
            theirProps: en,
            defaultTag: "div",
            features: C,
            visible: "visible" === G,
            name: "Transition.Child"
          })))
        }),
        M = (0, o.yV)(function (e, t) {
          let {
            show: r,
            appear: n = !1,
            unmount: u,
            ...c
          } = e, d = (0, i.useRef)(null), p = (0, f.T)(d, t);
          (0, h.H)();
          let g = (0, s.oJ)();
          if (void 0 === r && null !== g && (r = (0, a.E)(g, {
              [s.ZM.Open]: !0,
              [s.ZM.Closed]: !1
            })), ![!0, !1].includes(r)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
          let [m, y] = (0, i.useState)(r ? "visible" : "hidden"), v = S(() => {
            y("hidden")
          }), [w, x] = (0, i.useState)(!0), k = (0, i.useRef)([r]);
          (0, l.e)(() => {
            !1 !== w && k.current[k.current.length - 1] !== r && (k.current.push(r), x(!1))
          }, [k, r]);
          let P = (0, i.useMemo)(() => ({
            show: r,
            appear: n,
            initial: w
          }), [r, n, w]);
          (0, i.useEffect)(() => {
            if (r) y("visible");
            else if (E(v)) {
              let e = d.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && y("hidden")
            } else y("hidden")
          }, [r, v]);
          let M = {
            unmount: u
          };
          return i.createElement(A.Provider, {
            value: v
          }, i.createElement(b.Provider, {
            value: P
          }, (0, o.sY)({
            ourProps: {
              ...M,
              as: i.Fragment,
              children: i.createElement(_, {
                ref: p,
                ...M,
                ...c
              })
            },
            theirProps: {},
            defaultTag: i.Fragment,
            features: C,
            visible: "visible" === m,
            name: "Transition"
          })))
        }),
        O = (0, o.yV)(function (e, t) {
          let r = null !== (0, i.useContext)(b),
            n = null !== (0, s.oJ)();
          return i.createElement(i.Fragment, null, !r && n ? i.createElement(M, {
            ref: t,
            ...e
          }) : i.createElement(_, {
            ref: t,
            ...e
          }))
        }),
        N = Object.assign(M, {
          Child: O,
          Root: M
        })
    },
    94192: function (e, t, r) {
      "use strict";
      r.d(t, {
        G: function () {
          return o
        }
      });
      var n = r(67294),
        i = r(9362);

      function o() {
        let [e] = (0, n.useState)(i.k);
        return (0, n.useEffect)(() => () => e.dispose(), [e]), e
      }
    },
    73781: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return o
        }
      });
      var n = r(67294),
        i = r(3855);
      let o = function (e) {
        let t = (0, i.E)(e);
        return n.useCallback((...e) => t.current(...e), [t])
      }
    },
    19946: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return l
        }
      });
      var n, i = r(67294),
        o = r(16723),
        s = r(82180);
      let a = 0;

      function u() {
        return ++a
      }
      let l = null != (n = i.useId) ? n : function () {
        let e = (0, s.H)(),
          [t, r] = i.useState(e ? u : null);
        return (0, o.e)(() => {
          null === t && r(u())
        }, [t]), null != t ? "" + t : void 0
      }
    },
    14879: function (e, t, r) {
      "use strict";
      r.d(t, {
        t: function () {
          return o
        }
      });
      var n = r(67294),
        i = r(16723);

      function o() {
        let e = (0, n.useRef)(!1);
        return (0, i.e)(() => (e.current = !0, () => {
          e.current = !1
        }), []), e
      }
    },
    16723: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return i
        }
      });
      var n = r(67294);
      let i = r(43393).s ? n.useEffect : n.useLayoutEffect
    },
    3855: function (e, t, r) {
      "use strict";
      r.d(t, {
        E: function () {
          return o
        }
      });
      var n = r(67294),
        i = r(16723);

      function o(e) {
        let t = (0, n.useRef)(e);
        return (0, i.e)(() => {
          t.current = e
        }, [e]), t
      }
    },
    82180: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return o
        }
      });
      var n = r(67294);
      let i = {
        serverHandoffComplete: !1
      };

      function o() {
        let [e, t] = (0, n.useState)(i.serverHandoffComplete);
        return (0, n.useEffect)(() => {
          !0 !== e && t(!0)
        }, [e]), (0, n.useEffect)(() => {
          !1 === i.serverHandoffComplete && (i.serverHandoffComplete = !0)
        }, []), e
      }
    },
    23784: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return a
        },
        h: function () {
          return s
        }
      });
      var n = r(67294),
        i = r(73781);
      let o = Symbol();

      function s(e, t = !0) {
        return Object.assign(e, {
          [o]: t
        })
      }

      function a(...e) {
        let t = (0, n.useRef)(e);
        (0, n.useEffect)(() => {
          t.current = e
        }, [e]);
        let r = (0, i.z)(e => {
          for (let r of t.current) null != r && ("function" == typeof r ? r(e) : r.current = e)
        });
        return e.every(e => null == e || (null == e ? void 0 : e[o])) ? void 0 : r
      }
    },
    46045: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return o
        },
        _: function () {
          return s
        }
      });
      var n, i = r(12351),
        o = ((n = o || {})[n.None = 1] = "None", n[n.Focusable = 2] = "Focusable", n[n.Hidden = 4] = "Hidden", n);
      let s = (0, i.yV)(function (e, t) {
        let {
          features: r = 1,
          ...n
        } = e, o = {
          ref: t,
          "aria-hidden": (2 & r) == 2 || void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(4 & r) == 4 && (2 & r) != 2 && {
              display: "none"
            }
          }
        };
        return (0, i.sY)({
          ourProps: o,
          theirProps: n,
          slot: {},
          defaultTag: "div",
          name: "Hidden"
        })
      })
    },
    16567: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZM: function () {
          return s
        },
        oJ: function () {
          return a
        },
        up: function () {
          return u
        }
      });
      var n, i = r(67294);
      let o = (0, i.createContext)(null);
      o.displayName = "OpenClosedContext";
      var s = ((n = s || {})[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n);

      function a() {
        return (0, i.useContext)(o)
      }

      function u({
        value: e,
        children: t
      }) {
        return i.createElement(o.Provider, {
          value: e
        }, t)
      }
    },
    64103: function (e, t, r) {
      "use strict";

      function n(e) {
        let t = e.parentElement,
          r = null;
        for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
        let n = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return !(n && function (e) {
          if (!e) return !1;
          let t = e.previousElementSibling;
          for (; null !== t;) {
            if (t instanceof HTMLLegendElement) return !1;
            t = t.previousElementSibling
          }
          return !0
        }(r)) && n
      }
      r.d(t, {
        P: function () {
          return n
        }
      })
    },
    9362: function (e, t, r) {
      "use strict";
      r.d(t, {
        k: function () {
          return i
        }
      });
      var n = r(81021);

      function i() {
        let e = [],
          t = [],
          r = {
            enqueue(e) {
              t.push(e)
            },
            addEventListener: (e, t, n, i) => (e.addEventListener(t, n, i), r.add(() => e.removeEventListener(t, n, i))),
            requestAnimationFrame(...e) {
              let t = requestAnimationFrame(...e);
              return r.add(() => cancelAnimationFrame(t))
            },
            nextFrame: (...e) => r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let t = setTimeout(...e);
              return r.add(() => clearTimeout(t))
            },
            microTask(...e) {
              let t = {
                current: !0
              };
              return (0, n.Y)(() => {
                t.current && e[0]()
              }), r.add(() => {
                t.current = !1
              })
            },
            add: t => (e.push(t), () => {
              let r = e.indexOf(t);
              if (r >= 0) {
                let [t] = e.splice(r, 1);
                t()
              }
            }),
            dispose() {
              for (let t of e.splice(0)) t()
            },
            async workQueue() {
              for (let e of t.splice(0)) await e()
            }
          };
        return r
      }
    },
    84575: function (e, t, r) {
      "use strict";
      r.d(t, {
        C5: function () {
          return g
        },
        TO: function () {
          return c
        },
        fE: function () {
          return h
        },
        jA: function () {
          return y
        },
        sP: function () {
          return p
        },
        tJ: function () {
          return d
        },
        z2: function () {
          return m
        }
      });
      var n, i, o, s, a = r(32984),
        u = r(15466);
      let l = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
      var c = ((n = c || {})[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n),
        h = ((i = h || {})[i.Error = 0] = "Error", i[i.Overflow = 1] = "Overflow", i[i.Success = 2] = "Success", i[i.Underflow = 3] = "Underflow", i),
        f = ((o = f || {})[o.Previous = -1] = "Previous", o[o.Next = 1] = "Next", o),
        d = ((s = d || {})[s.Strict = 0] = "Strict", s[s.Loose = 1] = "Loose", s);

      function p(e, t = 0) {
        var r;
        return e !== (null == (r = (0, u.r)(e)) ? void 0 : r.body) && (0, a.E)(t, {
          0: () => e.matches(l),
          1() {
            let t = e;
            for (; null !== t;) {
              if (t.matches(l)) return !0;
              t = t.parentElement
            }
            return !1
          }
        })
      }

      function g(e) {
        null == e || e.focus({
          preventScroll: !0
        })
      }

      function m(e, t = e => e) {
        return e.slice().sort((e, r) => {
          let n = t(e),
            i = t(r);
          if (null === n || null === i) return 0;
          let o = n.compareDocumentPosition(i);
          return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
        })
      }

      function y(e, t, {
        sorted: r = !0,
        relativeTo: n = null,
        skipElements: i = []
      } = {}) {
        var o, s, a;
        let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
          c = Array.isArray(e) ? r ? m(e) : e : function (e = document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(l)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
          }(e);
        i.length > 0 && (c = c.filter(e => !i.includes(e))), n = null != n ? n : u.activeElement;
        let h = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
          })(),
          f = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, c.indexOf(n)) - 1;
            if (4 & t) return Math.max(0, c.indexOf(n)) + 1;
            if (8 & t) return c.length - 1;
            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
          })(),
          d = 32 & t ? {
            preventScroll: !0
          } : {},
          p = 0,
          g = c.length,
          y;
        do {
          if (p >= g || p + g <= 0) return 0;
          let e = f + p;
          if (16 & t) e = (e + g) % g;
          else {
            if (e < 0) return 3;
            if (e >= g) return 1
          }
          null == (y = c[e]) || y.focus(d), p += h
        } while (y !== u.activeElement);
        return 6 & t && null != (a = null == (s = null == (o = y) ? void 0 : o.matches) ? void 0 : s.call(o, "textarea,input")) && a && y.select(), y.hasAttribute("tabindex") || y.setAttribute("tabindex", "0"), 2
      }
    },
    32984: function (e, t, r) {
      "use strict";

      function n(e, t, ...r) {
        if (e in t) {
          let n = t[e];
          return "function" == typeof n ? n(...r) : n
        }
        let i = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
        throw Error.captureStackTrace && Error.captureStackTrace(i, n), i
      }
      r.d(t, {
        E: function () {
          return n
        }
      })
    },
    81021: function (e, t, r) {
      "use strict";

      function n(e) {
        "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e => setTimeout(() => {
          throw e
        }))
      }
      r.d(t, {
        Y: function () {
          return n
        }
      })
    },
    15466: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return i
        }
      });
      var n = r(43393);

      function i(e) {
        return n.s ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
      }
    },
    12351: function (e, t, r) {
      "use strict";
      r.d(t, {
        AN: function () {
          return a
        },
        l4: function () {
          return u
        },
        oA: function () {
          return d
        },
        sY: function () {
          return l
        },
        yV: function () {
          return f
        }
      });
      var n, i, o = r(67294),
        s = r(32984),
        a = ((n = a || {})[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n),
        u = ((i = u || {})[i.Unmount = 0] = "Unmount", i[i.Hidden = 1] = "Hidden", i);

      function l({
        ourProps: e,
        theirProps: t,
        slot: r,
        defaultTag: n,
        features: i,
        visible: o = !0,
        name: a
      }) {
        let u = h(t, e);
        if (o) return c(u, r, n, a);
        let l = null != i ? i : 0;
        if (2 & l) {
          let {
            static: e = !1,
            ...t
          } = u;
          if (e) return c(t, r, n, a)
        }
        if (1 & l) {
          let {
            unmount: e = !0,
            ...t
          } = u;
          return (0, s.E)(e ? 0 : 1, {
            0: () => null,
            1: () => c({
              ...t,
              hidden: !0,
              style: {
                display: "none"
              }
            }, r, n, a)
          })
        }
        return c(u, r, n, a)
      }

      function c(e, t = {}, r, n) {
        let {
          as: i = r,
          children: s,
          refName: a = "ref",
          ...u
        } = p(e, ["unmount", "static"]), l = void 0 !== e.ref ? {
          [a]: e.ref
        } : {}, c = "function" == typeof s ? s(t) : s;
        u.className && "function" == typeof u.className && (u.className = u.className(t));
        let f = {};
        if (t) {
          let e = !1,
            r = [];
          for (let [n, i] of Object.entries(t)) "boolean" == typeof i && (e = !0), !0 === i && r.push(n);
          e && (f["data-headlessui-state"] = r.join(" "))
        }
        if (i === o.Fragment && Object.keys(d(u)).length > 0) {
          if (!(0, o.isValidElement)(c) || Array.isArray(c) && c.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
          return (0, o.cloneElement)(c, Object.assign({}, h(c.props, d(p(u, ["ref"]))), f, l, function (...e) {
            return {
              ref: e.every(e => null == e) ? void 0 : t => {
                for (let r of e) null != r && ("function" == typeof r ? r(t) : r.current = t)
              }
            }
          }(c.ref, l.ref)))
        }
        return (0, o.createElement)(i, Object.assign({}, p(u, ["ref"]), i !== o.Fragment && l, i !== o.Fragment && f), c)
      }

      function h(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          r = {};
        for (let n of e)
          for (let e in n) e.startsWith("on") && "function" == typeof n[e] ? (null != r[e] || (r[e] = []), r[e].push(n[e])) : t[e] = n[e];
        if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(e => [e, void 0])));
        for (let e in r) Object.assign(t, {
          [e](t, ...n) {
            for (let i of r[e]) {
              if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
              i(t, ...n)
            }
          }
        });
        return t
      }

      function f(e) {
        var t;
        return Object.assign((0, o.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name
        })
      }

      function d(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t
      }

      function p(e, t = []) {
        let r = Object.assign({}, e);
        for (let e of t) e in r && delete r[e];
        return r
      }
    },
    43393: function (e, t, r) {
      "use strict";
      r.d(t, {
        s: function () {
          return n
        }
      });
      let n = "undefined" == typeof window || "undefined" == typeof document
    },
    24484: function (e, t, r) {
      "use strict";
      r.d(t, {
        RJ: function () {
          return o
        },
        ws: function () {
          return i
        },
        yX: function () {
          return n
        }
      });
      var n = {
          id: 42161,
          name: "Arbitrum One",
          network: "arbitrum",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
          },
          rpcUrls: {
            alchemy: {
              http: ["https://arb-mainnet.g.alchemy.com/v2"],
              webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
            },
            infura: {
              http: ["https://arbitrum-mainnet.infura.io/v3"],
              webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
            },
            default: {
              http: ["https://arb1.arbitrum.io/rpc"]
            }
          },
          blockExplorers: {
            etherscan: {
              name: "Arbiscan",
              url: "https://arbiscan.io"
            },
            default: {
              name: "Arbiscan",
              url: "https://arbiscan.io"
            }
          },
          contracts: {
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 7654707
            }
          }
        },
        i = {
          id: 5,
          network: "goerli",
          name: "Goerli",
          nativeCurrency: {
            name: "Goerli Ether",
            symbol: "ETH",
            decimals: 18
          },
          rpcUrls: {
            alchemy: {
              http: ["https://eth-goerli.g.alchemy.com/v2"],
              webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
            },
            infura: {
              http: ["https://goerli.infura.io/v3"],
              webSocket: ["wss://goerli.infura.io/ws/v3"]
            },
            default: {
              http: ["https://rpc.ankr.com/eth_goerli"]
            }
          },
          blockExplorers: {
            etherscan: {
              name: "Etherscan",
              url: "https://goerli.etherscan.io"
            },
            default: {
              name: "Etherscan",
              url: "https://goerli.etherscan.io"
            }
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 6507670
            }
          },
          testnet: !0
        },
        o = {
          id: 1,
          network: "homestead",
          name: "Ethereum",
          nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
          },
          rpcUrls: {
            alchemy: {
              http: ["https://eth-mainnet.g.alchemy.com/v2"],
              webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
            },
            infura: {
              http: ["https://mainnet.infura.io/v3"],
              webSocket: ["wss://mainnet.infura.io/ws/v3"]
            },
            default: {
              http: ["https://cloudflare-eth.com"]
            }
          },
          blockExplorers: {
            etherscan: {
              name: "Etherscan",
              url: "https://etherscan.io"
            },
            default: {
              name: "Etherscan",
              url: "https://etherscan.io"
            }
          },
          contracts: {
            ensRegistry: {
              address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
            },
            multicall3: {
              address: "0xca11bde05977b3631167028862be2a173976ca11",
              blockCreated: 14353601
            }
          }
        }
    },
    80647: function (e, t, r) {
      "use strict";
      r.d(t, {
        Ko: function () {
          return c
        },
        U9: function () {
          return f
        },
        ac: function () {
          return l
        },
        ov: function () {
          return a
        },
        qx: function () {
          return h
        },
        wR: function () {
          return d
        }
      });
      var n = r(24484),
        i = r(26729),
        o = Object.defineProperty,
        s = (e, t, r) => t in e ? o(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: r
        }) : e[t] = r,
        a = (e, t, r) => (s(e, "symbol" != typeof t ? t + "" : t, r), r),
        u = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r)
        },
        l = (e, t, r) => (u(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
        c = (e, t, r) => {
          if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
          t instanceof WeakSet ? t.add(e) : t.set(e, r)
        },
        h = (e, t, r, n) => (u(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
        f = (e, t, r) => (u(e, t, "access private method"), r),
        d = class extends i {
          constructor({
            chains: e = [n.RJ, n.ws],
            options: t
          }) {
            super(), a(this, "chains"), a(this, "options"), this.chains = e, this.options = t
          }
          getBlockExplorerUrls(e) {
            let {
              default: t,
              ...r
            } = e.blockExplorers ? ? {};
            if (t) return [t.url, ...Object.values(r).map(e => e.url)]
          }
          isChainUnsupported(e) {
            return !this.chains.some(t => t.id === e)
          }
        }
    },
    65892: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return l
        }
      });
      var n, i, o = r(80647),
        s = r(30526),
        a = r(241),
        u = r(56371),
        l = class extends o.wR {
          constructor({
            chains: e,
            options: t
          } = {}) {
            let r = {
              shimDisconnect: !0,
              shimChainChangedDisconnect: !0,
              getProvider: () => "undefined" != typeof window ? window.ethereum : void 0,
              ...t
            };
            super({
              chains: e,
              options: r
            }), (0, o.ov)(this, "id"), (0, o.ov)(this, "name"), (0, o.ov)(this, "ready"), (0, o.Ko)(this, n, void 0), (0, o.Ko)(this, i, void 0), (0, o.ov)(this, "shimDisconnectKey", "injected.shimDisconnect"), (0, o.ov)(this, "onAccountsChanged", e => {
              0 === e.length ? this.emit("disconnect") : this.emit("change", {
                account: (0, u.getAddress)(e[0])
              })
            }), (0, o.ov)(this, "onChainChanged", e => {
              let t = (0, s.Jk)(e),
                r = this.isChainUnsupported(t);
              this.emit("change", {
                chain: {
                  id: t,
                  unsupported: r
                }
              })
            }), (0, o.ov)(this, "onDisconnect", () => {
              if (this.options.shimChainChangedDisconnect && (0, o.ac)(this, i)) {
                (0, o.qx)(this, i, !1);
                return
              }
              this.emit("disconnect"), this.options.shimDisconnect && s.s3().storage ? .removeItem(this.shimDisconnectKey)
            });
            let a = r.getProvider();
            if ("string" == typeof r.name) this.name = r.name;
            else if (a) {
              let e = function (e) {
                if (!e) return "Injected";
                let t = e => e.isAvalanche ? "Core Wallet" : e.isBitKeep ? "BitKeep" : e.isBraveWallet ? "Brave Wallet" : e.isCoinbaseWallet ? "Coinbase Wallet" : e.isExodus ? "Exodus" : e.isFrame ? "Frame" : e.isKuCoinWallet ? "KuCoin Wallet" : e.isMathWallet ? "MathWallet" : e.isOneInchIOSWallet || e.isOneInchAndroidWallet ? "1inch Wallet" : e.isOpera ? "Opera" : e.isPortal ? "Ripio Portal" : e.isRainbow ? "Rainbow" : e.isTally ? "Tally" : e.isTokenPocket ? "TokenPocket" : e.isTokenary ? "Tokenary" : e.isTrust || e.isTrustWallet ? "Trust Wallet" : e.isMetaMask ? "MetaMask" : void 0;
                if (e.providers ? .length) {
                  let r = new Set,
                    n = 1;
                  for (let i of e.providers) {
                    let e = t(i);
                    e || (e = `Unknown Wallet #${n}`, n += 1), r.add(e)
                  }
                  let i = [...r];
                  return i.length ? i : i[0] ? ? "Injected"
                }
                return t(e) ? ? "Injected"
              }(a);
              r.name ? this.name = r.name(e) : "string" == typeof e ? this.name = e : this.name = e[0]
            } else this.name = "Injected";
            this.id = "injected", this.ready = !!a
          }
          async connect({
            chainId: e
          } = {}) {
            try {
              let t = await this.getProvider();
              if (!t) throw new s.Nu;
              t.on && (t.on("accountsChanged", this.onAccountsChanged), t.on("chainChanged", this.onChainChanged), t.on("disconnect", this.onDisconnect)), this.emit("message", {
                type: "connecting"
              });
              let r = await t.request({
                  method: "eth_requestAccounts"
                }),
                n = (0, u.getAddress)(r[0]),
                i = await this.getChainId(),
                o = this.isChainUnsupported(i);
              if (e && i !== e) {
                let t = await this.switchChain(e);
                i = t.id, o = this.isChainUnsupported(i)
              }
              return this.options.shimDisconnect && s.s3().storage ? .setItem(this.shimDisconnectKey, !0), {
                account: n,
                chain: {
                  id: i,
                  unsupported: o
                },
                provider: t
              }
            } catch (e) {
              if (this.isUserRejectedRequestError(e)) throw new s.ab(e);
              if (-32002 === e.code) throw new s.TA(e);
              throw e
            }
          }
          async disconnect() {
            let e = await this.getProvider();
            e ? .removeListener && (e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && s.s3().storage ? .removeItem(this.shimDisconnectKey))
          }
          async getAccount() {
            let e = await this.getProvider();
            if (!e) throw new s.Nu;
            let t = await e.request({
              method: "eth_accounts"
            });
            return (0, u.getAddress)(t[0])
          }
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new s.Nu;
            return e.request({
              method: "eth_chainId"
            }).then(s.Jk)
          }
          async getProvider() {
            let e = this.options.getProvider();
            return e && (0, o.qx)(this, n, e), (0, o.ac)(this, n)
          }
          async getSigner({
            chainId: e
          } = {}) {
            let [t, r] = await Promise.all([this.getProvider(), this.getAccount()]);
            return new a.Q(t, e).getSigner(r)
          }
          async isAuthorized() {
            try {
              if (this.options.shimDisconnect && !s.s3().storage ? .getItem(this.shimDisconnectKey)) return !1;
              let e = await this.getProvider();
              if (!e) throw new s.Nu;
              let t = await this.getAccount();
              return !!t
            } catch {
              return !1
            }
          }
          async switchChain(e) {
            this.options.shimChainChangedDisconnect && (0, o.qx)(this, i, !0);
            let t = await this.getProvider();
            if (!t) throw new s.Nu;
            let r = (0, u.hexValue)(e);
            try {
              return await t.request({
                method: "wallet_switchEthereumChain",
                params: [{
                  chainId: r
                }]
              }), this.chains.find(t => t.id === e) ? ? {
                id: e,
                name: `Chain ${r}`,
                network: `${r}`,
                nativeCurrency: {
                  name: "Ether",
                  decimals: 18,
                  symbol: "ETH"
                },
                rpcUrls: {
                  default: {
                    http: [""]
                  }
                }
              }
            } catch (i) {
              let n = this.chains.find(t => t.id === e);
              if (!n) throw new s.X4({
                chainId: e,
                connectorId: this.id
              });
              if (4902 === i.code || i ? .data ? .originalError ? .code === 4902) try {
                return await t.request({
                  method: "wallet_addEthereumChain",
                  params: [{
                    chainId: r,
                    chainName: n.name,
                    nativeCurrency: n.nativeCurrency,
                    rpcUrls: [n.rpcUrls.public ? .http[0] ? ? n.rpcUrls.default.http[0] ? ? ""],
                    blockExplorerUrls: this.getBlockExplorerUrls(n)
                  }]
                }), n
              } catch (e) {
                if (this.isUserRejectedRequestError(e)) throw new s.ab(i);
                throw new s.iA
              }
              if (this.isUserRejectedRequestError(i)) throw new s.ab(i);
              throw new s.x3(i)
            }
          }
          async watchAsset({
            address: e,
            decimals: t = 18,
            image: r,
            symbol: n
          }) {
            let i = await this.getProvider();
            if (!i) throw new s.Nu;
            return i.request({
              method: "wallet_watchAsset",
              params: {
                type: "ERC20",
                options: {
                  address: e,
                  decimals: t,
                  image: r,
                  symbol: n
                }
              }
            })
          }
          isUserRejectedRequestError(e) {
            return 4001 === e.code
          }
        };
      n = new WeakMap, i = new WeakMap
    },
    30526: function (e, t, r) {
      "use strict";
      r.d(t, {
        iA: function () {
          return ey
        },
        X4: function () {
          return ev
        },
        Nu: function () {
          return ew
        },
        TA: function () {
          return eA
        },
        x3: function () {
          return eE
        },
        ab: function () {
          return ex
        },
        QB: function () {
          return K
        },
        $j: function () {
          return ei
        },
        eI: function () {
          return er
        },
        o6: function () {
          return $
        },
        vZ: function () {
          return function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              let n, i;
              if (t.constructor !== r.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(r)) {
                if ((n = t.length) != r.length) return !1;
                for (i = n; 0 != i--;)
                  if (!e(t[i], r[i])) return !1;
                return !0
              }
              if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
              let o = Object.keys(t);
              if ((n = o.length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--;)
                if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
              for (i = n; 0 != i--;) {
                let n = o[i];
                if (n && !e(t[n], r[n])) return !1
              }
              return !0
            }
            return t != t && r != r
          }
        },
        zP: function () {
          return eo
        },
        DG: function () {
          return eu
        },
        D0: function () {
          return el
        },
        s3: function () {
          return en
        },
        Hy: function () {
          return ec
        },
        VH: function () {
          return es
        },
        wp: function () {
          return X
        },
        Jk: function () {
          return W
        },
        If: function () {
          return eh
        },
        uH: function () {
          return ef
        },
        QC: function () {
          return ed
        },
        b0: function () {
          return ea
        },
        rn: function () {
          return ep
        }
      });
      var n, i, o, s, a, u = r(65892),
        l = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r)
        },
        c = (e, t, r) => (l(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
        h = (e, t, r) => {
          if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
          t instanceof WeakSet ? t.add(e) : t.set(e, r)
        },
        f = (e, t, r, n) => (l(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
        d = (e, t, r) => (l(e, t, "access private method"), r),
        p = r(81556),
        g = r(2593),
        m = r(16441),
        y = r(6881),
        v = r(52472),
        b = r(37707),
        w = r(57408),
        A = r(39934),
        E = r(1581),
        S = r(34216),
        x = function (e, t, r, n) {
          return new(r || (r = Promise))(function (i, o) {
            function s(e) {
              try {
                u(n.next(e))
              } catch (e) {
                o(e)
              }
            }

            function a(e) {
              try {
                u(n.throw(e))
              } catch (e) {
                o(e)
              }
            }

            function u(e) {
              var t;
              e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function (e) {
                e(t)
              })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
          })
        };
      let k = new E.Logger(S.i);

      function P() {
        return new Date().getTime()
      }

      function C(e) {
        let t = null;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (null == n) return null;
          t ? t.name === n.name && t.chainId === n.chainId && (t.ensAddress === n.ensAddress || null == t.ensAddress && null == n.ensAddress) || k.throwArgumentError("provider mismatch", "networks", e) : t = n
        }
        return t
      }

      function _(e, t) {
        e = e.slice().sort();
        let r = Math.floor(e.length / 2);
        if (e.length % 2) return e[r];
        let n = e[r - 1],
          i = e[r];
        return null != t && Math.abs(n - i) > t ? null : (n + i) / 2
      }

      function M(e) {
        if (null === e) return "null";
        if ("number" == typeof e || "boolean" == typeof e) return JSON.stringify(e);
        if ("string" == typeof e) return e;
        if (g.O$.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map(e => M(e)));
        if ("object" == typeof e) {
          let t = Object.keys(e);
          return t.sort(), "{" + t.map(t => {
            let r = e[t];
            return r = "function" == typeof r ? "[function]" : M(r), JSON.stringify(t) + ":" + r
          }).join(",") + "}"
        }
        throw Error("unknown value type: " + typeof e)
      }
      let O = 1;

      function N(e) {
        let t = null,
          r = null,
          n = new Promise(n => {
            r = setTimeout(t = function () {
              r && (clearTimeout(r), r = null), n()
            }, e)
          }),
          i = e => n = n.then(e);
        return {
          cancel: t,
          getPromise: function () {
            return n
          },
          wait: i
        }
      }
      let R = [E.Logger.errors.CALL_EXCEPTION, E.Logger.errors.INSUFFICIENT_FUNDS, E.Logger.errors.NONCE_EXPIRED, E.Logger.errors.REPLACEMENT_UNDERPRICED, E.Logger.errors.UNPREDICTABLE_GAS_LIMIT],
        T = ["address", "args", "errorArgs", "errorSignature", "method", "transaction"];

      function I(e, t) {
        let r = {
          weight: e.weight
        };
        return Object.defineProperty(r, "provider", {
          get: () => e.provider
        }), e.start && (r.start = e.start), t && (r.duration = t - e.start), e.done && (e.error ? r.error = e.error : r.result = e.result || null), r
      }

      function B(e, t) {
        return x(this, void 0, void 0, function* () {
          let r = e.provider;
          return null != r.blockNumber && r.blockNumber >= t || -1 === t ? r : (0, b.poll)(() => new Promise((n, i) => {
            setTimeout(function () {
              return r.blockNumber >= t ? n(r) : e.cancelled ? n(null) : n(void 0)
            }, 0)
          }), {
            oncePoll: r
          })
        })
      }
      class L extends w.Zk {
        constructor(e, t) {
          0 === e.length && k.throwArgumentError("missing providers", "providers", e);
          let r = e.map((e, t) => {
              if (p.zt.isProvider(e)) {
                let t = (0, A.Gp)(e) ? 2e3 : 750;
                return Object.freeze({
                  provider: e,
                  weight: 1,
                  stallTimeout: t,
                  priority: 1
                })
              }
              let r = (0, y.shallowCopy)(e);
              null == r.priority && (r.priority = 1), null == r.stallTimeout && (r.stallTimeout = (0, A.Gp)(e) ? 2e3 : 750), null == r.weight && (r.weight = 1);
              let n = r.weight;
              return (n % 1 || n > 512 || n < 1) && k.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${t}].weight`, n), Object.freeze(r)
            }),
            n = r.reduce((e, t) => e + t.weight, 0);
          null == t ? t = n / 2 : t > n && k.throwArgumentError("quorum will always fail; larger than total weight", "quorum", t);
          let i = C(r.map(e => e.provider.network));
          null == i && (i = new Promise((e, t) => {
            setTimeout(() => {
              this.detectNetwork().then(e, t)
            }, 0)
          })), super(i), (0, y.defineReadOnly)(this, "providerConfigs", Object.freeze(r)), (0, y.defineReadOnly)(this, "quorum", t), this._highestBlockNumber = -1
        }
        detectNetwork() {
          return x(this, void 0, void 0, function* () {
            let e = yield Promise.all(this.providerConfigs.map(e => e.provider.getNetwork()));
            return C(e)
          })
        }
        perform(e, t) {
          return x(this, void 0, void 0, function* () {
            if ("sendTransaction" === e) {
              let e = yield Promise.all(this.providerConfigs.map(e => e.provider.sendTransaction(t.signedTransaction).then(e => e.hash, e => e)));
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                if ("string" == typeof r) return r
              }
              throw e[0]
            } - 1 === this._highestBlockNumber && "getBlockNumber" !== e && (yield this.getBlockNumber());
            let r = function (e, t, r) {
                var n, i;
                let o = M;
                switch (t) {
                  case "getBlockNumber":
                    return function (t) {
                      let r = t.map(e => e.result),
                        n = _(t.map(e => e.result), 2);
                      if (null != n) return n = Math.ceil(n), r.indexOf(n + 1) >= 0 && n++, n >= e._highestBlockNumber && (e._highestBlockNumber = n), e._highestBlockNumber
                    };
                  case "getGasPrice":
                    return function (e) {
                      let t = e.map(e => e.result);
                      return t.sort(), t[Math.floor(t.length / 2)]
                    };
                  case "getEtherPrice":
                    return function (e) {
                      return _(e.map(e => e.result))
                    };
                  case "getBalance":
                  case "getTransactionCount":
                  case "getCode":
                  case "getStorageAt":
                  case "call":
                  case "estimateGas":
                  case "getLogs":
                    break;
                  case "getTransaction":
                  case "getTransactionReceipt":
                    o = function (e) {
                      return null == e ? null : ((e = (0, y.shallowCopy)(e)).confirmations = -1, M(e))
                    };
                    break;
                  case "getBlock":
                    o = r.includeTransactions ? function (e) {
                      return null == e ? null : ((e = (0, y.shallowCopy)(e)).transactions = e.transactions.map(e => ((e = (0, y.shallowCopy)(e)).confirmations = -1, e)), M(e))
                    } : function (e) {
                      return null == e ? null : M(e)
                    };
                    break;
                  default:
                    throw Error("unknown method: " + t)
                }
                return n = o, i = e.quorum,
                  function (e) {
                    let t = {};
                    e.forEach(e => {
                      let r = n(e.result);
                      t[r] || (t[r] = {
                        count: 0,
                        result: e.result
                      }), t[r].count++
                    });
                    let r = Object.keys(t);
                    for (let e = 0; e < r.length; e++) {
                      let n = t[r[e]];
                      if (n.count >= i) return n.result
                    }
                  }
              }(this, e, t),
              n = (0, v.y)(this.providerConfigs.map(y.shallowCopy));
            n.sort((e, t) => e.priority - t.priority);
            let i = this._highestBlockNumber,
              o = 0,
              s = !0;
            for (;;) {
              let a = P(),
                u = n.filter(e => e.runner && a - e.start < e.stallTimeout).reduce((e, t) => e + t.weight, 0);
              for (; u < this.quorum && o < n.length;) {
                let r = n[o++],
                  s = O++;
                r.start = P(), r.staller = N(r.stallTimeout), r.staller.wait(() => {
                  r.staller = null
                }), r.runner = (function (e, t, r, n) {
                  return x(this, void 0, void 0, function* () {
                    let i = e.provider;
                    switch (r) {
                      case "getBlockNumber":
                      case "getGasPrice":
                        return i[r]();
                      case "getEtherPrice":
                        if (i.getEtherPrice) return i.getEtherPrice();
                        break;
                      case "getBalance":
                      case "getTransactionCount":
                      case "getCode":
                        return n.blockTag && (0, m.isHexString)(n.blockTag) && (i = yield B(e, t)), i[r](n.address, n.blockTag || "latest");
                      case "getStorageAt":
                        return n.blockTag && (0, m.isHexString)(n.blockTag) && (i = yield B(e, t)), i.getStorageAt(n.address, n.position, n.blockTag || "latest");
                      case "getBlock":
                        return n.blockTag && (0, m.isHexString)(n.blockTag) && (i = yield B(e, t)), i[n.includeTransactions ? "getBlockWithTransactions" : "getBlock"](n.blockTag || n.blockHash);
                      case "call":
                      case "estimateGas":
                        if (n.blockTag && (0, m.isHexString)(n.blockTag) && (i = yield B(e, t)), "call" === r && n.blockTag) return i[r](n.transaction, n.blockTag);
                        return i[r](n.transaction);
                      case "getTransaction":
                      case "getTransactionReceipt":
                        return i[r](n.transactionHash);
                      case "getLogs": {
                        let r = n.filter;
                        return (r.fromBlock && (0, m.isHexString)(r.fromBlock) || r.toBlock && (0, m.isHexString)(r.toBlock)) && (i = yield B(e, t)), i.getLogs(r)
                      }
                    }
                    return k.throwError("unknown method error", E.Logger.errors.UNKNOWN_ERROR, {
                      method: r,
                      params: n
                    })
                  })
                })(r, i, e, t).then(n => {
                  r.done = !0, r.result = n, this.listenerCount("debug") && this.emit("debug", {
                    action: "request",
                    rid: s,
                    backend: I(r, P()),
                    request: {
                      method: e,
                      params: (0, y.deepCopy)(t)
                    },
                    provider: this
                  })
                }, n => {
                  r.done = !0, r.error = n, this.listenerCount("debug") && this.emit("debug", {
                    action: "request",
                    rid: s,
                    backend: I(r, P()),
                    request: {
                      method: e,
                      params: (0, y.deepCopy)(t)
                    },
                    provider: this
                  })
                }), this.listenerCount("debug") && this.emit("debug", {
                  action: "request",
                  rid: s,
                  backend: I(r, null),
                  request: {
                    method: e,
                    params: (0, y.deepCopy)(t)
                  },
                  provider: this
                }), u += r.weight
              }
              let l = [];
              n.forEach(e => {
                !e.done && e.runner && (l.push(e.runner), e.staller && l.push(e.staller.getPromise()))
              }), l.length && (yield Promise.race(l));
              let c = n.filter(e => e.done && null == e.error);
              if (c.length >= this.quorum) {
                let e = r(c);
                if (void 0 !== e) return n.forEach(e => {
                  e.staller && e.staller.cancel(), e.cancelled = !0
                }), e;
                s || (yield N(100).getPromise()), s = !1
              }
              let h = n.reduce((e, t) => {
                if (!t.done || null == t.error) return e;
                let r = t.error.code;
                return R.indexOf(r) >= 0 && (e[r] || (e[r] = {
                  error: t.error,
                  weight: 0
                }), e[r].weight += t.weight), e
              }, {});
              if (Object.keys(h).forEach(e => {
                  let t = h[e];
                  if (t.weight < this.quorum) return;
                  n.forEach(e => {
                    e.staller && e.staller.cancel(), e.cancelled = !0
                  });
                  let r = t.error,
                    i = {};
                  T.forEach(e => {
                    null != r[e] && (i[e] = r[e])
                  }), k.throwError(r.reason || r.message, e, i)
                }), 0 === n.filter(e => !e.done).length) break
            }
            return n.forEach(e => {
              e.staller && e.staller.cancel(), e.cancelled = !0
            }), k.throwError("failed to meet quorum", E.Logger.errors.SERVER_ERROR, {
              method: e,
              params: t,
              results: n.map(e => I(e)),
              provider: this
            })
          })
        }
      }
      let F = e => (t, r, n) => {
          let i = n.subscribe;
          n.subscribe = (e, t, r) => {
            let o = e;
            if (t) {
              let i = (null == r ? void 0 : r.equalityFn) || Object.is,
                s = e(n.getState());
              o = r => {
                let n = e(r);
                if (!i(s, n)) {
                  let e = s;
                  t(s = n, e)
                }
              }, (null == r ? void 0 : r.fireImmediately) && t(s, s)
            }
            return i(o)
          };
          let o = e(t, r, n);
          return o
        },
        D = e => t => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: e => D(e)(r),
              catch (e) {
                return this
              }
            }
          } catch (e) {
            return {
              then(e) {
                return this
              },
              catch: t => D(t)(e)
            }
          }
        },
        U = (e, t) => (r, n, i) => {
          let o, s, a = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: e => e,
              version: 0,
              merge: (e, t) => ({
                ...t,
                ...e
              }),
              ...t
            },
            u = !1,
            l = new Set,
            c = new Set;
          try {
            o = a.getStorage()
          } catch (e) {}
          if (!o) return e((...e) => {
            console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), r(...e)
          }, n, i);
          let h = D(a.serialize),
            f = () => {
              let e;
              let t = a.partialize({
                  ...n()
                }),
                r = h({
                  state: t,
                  version: a.version
                }).then(e => o.setItem(a.name, e)).catch(t => {
                  e = t
                });
              if (e) throw e;
              return r
            },
            d = i.setState;
          i.setState = (e, t) => {
            d(e, t), f()
          };
          let p = e((...e) => {
              r(...e), f()
            }, n, i),
            g = () => {
              var e;
              if (!o) return;
              u = !1, l.forEach(e => e(n()));
              let t = (null == (e = a.onRehydrateStorage) ? void 0 : e.call(a, n())) || void 0;
              return D(o.getItem.bind(o))(a.name).then(e => {
                if (e) return a.deserialize(e)
              }).then(e => {
                if (e) {
                  if ("number" != typeof e.version || e.version === a.version) return e.state;
                  if (a.migrate) return a.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
              }).then(e => {
                var t;
                return r(s = a.merge(e, null != (t = n()) ? t : p), !0), f()
              }).then(() => {
                null == t || t(s, void 0), u = !0, c.forEach(e => e(s))
              }).catch(e => {
                null == t || t(void 0, e)
              })
            };
          return i.persist = {
            setOptions: e => {
              a = {
                ...a,
                ...e
              }, e.getStorage && (o = e.getStorage())
            },
            clearStorage: () => {
              null == o || o.removeItem(a.name)
            },
            getOptions: () => a,
            rehydrate: () => g(),
            hasHydrated: () => u,
            onHydrate: e => (l.add(e), () => {
              l.delete(e)
            }),
            onFinishHydration: e => (c.add(e), () => {
              c.delete(e)
            })
          }, g(), s || p
        },
        j = (e, t) => (r, n, i) => {
          let o, s = {
              storage: function (e) {
                let t;
                try {
                  t = e()
                } catch (e) {
                  return
                }
                return {
                  getItem: e => {
                    var r;
                    let n = e => null === e ? null : JSON.parse(e),
                      i = null != (r = t.getItem(e)) ? r : null;
                    return i instanceof Promise ? i.then(n) : n(i)
                  },
                  setItem: (e, r) => t.setItem(e, JSON.stringify(r)),
                  removeItem: e => t.removeItem(e)
                }
              }(() => localStorage),
              partialize: e => e,
              version: 0,
              merge: (e, t) => ({
                ...t,
                ...e
              }),
              ...t
            },
            a = !1,
            u = new Set,
            l = new Set,
            c = s.storage;
          if (!c) return e((...e) => {
            console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), r(...e)
          }, n, i);
          let h = () => {
              let e = s.partialize({
                ...n()
              });
              return c.setItem(s.name, {
                state: e,
                version: s.version
              })
            },
            f = i.setState;
          i.setState = (e, t) => {
            f(e, t), h()
          };
          let d = e((...e) => {
              r(...e), h()
            }, n, i),
            p = () => {
              var e;
              if (!c) return;
              a = !1, u.forEach(e => e(n()));
              let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, n())) || void 0;
              return D(c.getItem.bind(c))(s.name).then(e => {
                if (e) {
                  if ("number" != typeof e.version || e.version === s.version) return e.state;
                  if (s.migrate) return s.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
              }).then(e => {
                var t;
                return r(o = s.merge(e, null != (t = n()) ? t : d), !0), h()
              }).then(() => {
                null == t || t(o, void 0), a = !0, l.forEach(e => e(o))
              }).catch(e => {
                null == t || t(void 0, e)
              })
            };
          return i.persist = {
            setOptions: e => {
              s = {
                ...s,
                ...e
              }, e.storage && (c = e.storage)
            },
            clearStorage: () => {
              null == c || c.removeItem(s.name)
            },
            getOptions: () => s,
            rehydrate: () => p(),
            hasHydrated: () => a,
            onHydrate: e => (u.add(e), () => {
              u.delete(e)
            }),
            onFinishHydration: e => (l.add(e), () => {
              l.delete(e)
            })
          }, p(), o || d
        },
        z = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Please use `storage` option instead."), U(e, t)) : j(e, t),
        H = e => {
          let t;
          let r = new Set,
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                t = (null != n ? n : "object" != typeof i) ? i : Object.assign({}, t, i), r.forEach(r => r(t, e))
              }
            },
            i = () => t,
            o = e => (r.add(e), () => r.delete(e)),
            s = () => {
              console.warn("[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."), r.clear()
            },
            a = {
              setState: n,
              getState: i,
              subscribe: o,
              destroy: s
            };
          return t = e(n, i, a), a
        },
        G = e => e ? H(e) : H;

      function q(e, t) {
        if (Object.is(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        if (e instanceof Map && t instanceof Map) {
          if (e.size !== t.size) return !1;
          for (let [r, n] of e)
            if (!Object.is(n, t.get(r))) return !1;
          return !0
        }
        if (e instanceof Set && t instanceof Set) {
          if (e.size !== t.size) return !1;
          for (let r of e)
            if (!t.has(r)) return !1;
          return !0
        }
        let r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let n = 0; n < r.length; n++)
          if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]])) return !1;
        return !0
      }

      function K(e, t, {
        minQuorum: r = 1,
        pollingInterval: n = 4e3,
        targetQuorum: i = 1,
        stallTimeout: o
      } = {}) {
        if (!e.length) throw Error("must have at least one chain");
        if (i < r) throw Error("quorum cannot be lower than minQuorum");
        let s = [],
          a = {},
          u = {};
        for (let r of e) {
          let e = !1;
          for (let n of t) {
            let t = n(r);
            t && (e = !0, s.some(({
              id: e
            }) => e === r.id) || (s = [...s, t.chain]), a[r.id] = [...a[r.id] || [], t.provider], t.webSocketProvider && (u[r.id] = [...u[r.id] || [], t.webSocketProvider]))
          }
          if (!e) throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/react/providers/jsonRpc`)
        }
        return {
          chains: s,
          provider: ({
            chainId: t
          }) => {
            let u;
            let l = s.find(e => e.id === t) ? ? e[0],
              c = a[l.id];
            if (!c || !c[0]) throw Error(`No providers configured for chain "${l.id}"`);
            return u = 1 === c.length ? c[0]() : function e(t, r, n, {
              stallTimeout: i
            }) {
              try {
                return new L(n.map((e, t) => {
                  let r = e();
                  return {
                    provider: r,
                    priority: r.priority ? ? t,
                    stallTimeout: r.stallTimeout ? ? i,
                    weight: r.weight
                  }
                }), t)
              } catch (o) {
                if (o ? .message ? .includes("quorum will always fail; larger than total weight")) {
                  if (t === r) throw o;
                  return e(t - 1, r, n, {
                    stallTimeout: i
                  })
                }
                throw o
              }
            }(i, r, c, {
              stallTimeout: o
            }), 42220 === l.id && (u.formatter.formats.block = {
              ...u.formatter.formats.block,
              difficulty: () => 0,
              gasLimit: () => 0
            }), Object.assign(u, {
              chains: s,
              pollingInterval: n
            })
          },
          webSocketProvider: ({
            chainId: t
          }) => {
            let r = s.find(e => e.id === t) ? ? e[0],
              n = u[r.id];
            if (!n) return;
            let i = n[0] ? .();
            return i && 42220 === r.id && (i.formatter.formats.block = {
              ...i.formatter.formats.block,
              difficulty: () => 0,
              gasLimit: () => 0
            }), Object.assign(i || {}, {
              chains: s
            })
          }
        }
      }
      var V = (e, {
        find: t,
        replace: r
      }) => e && t(e) ? r(e) : "object" != typeof e ? e : Array.isArray(e) ? e.map(e => V(e, {
        find: t,
        replace: r
      })) : e instanceof Object ? Object.entries(e).reduce((e, [n, i]) => ({
        ...e,
        [n]: V(i, {
          find: t,
          replace: r
        })
      }), {}) : e;

      function J(e) {
        let t = JSON.parse(e),
          r = V(t, {
            find: e => "BigNumber" === e.type,
            replace: e => g.O$.from(e.hex)
          });
        return r
      }

      function W(e) {
        return "string" == typeof e ? Number.parseInt(e, "0x" === e.trim().substring(0, 2) ? 16 : 10) : "bigint" == typeof e ? Number(e) : e
      }

      function Q(e, t) {
        return e.slice(0, t).join(".") || "."
      }

      function Y(e, t) {
        let {
          length: r
        } = e;
        for (let n = 0; n < r; ++n)
          if (e[n] === t) return n + 1;
        return 0
      }

      function Z(e, t, r, n) {
        return JSON.stringify(e, function (e, t) {
          let r = "function" == typeof e,
            n = "function" == typeof t,
            i = [],
            o = [];
          return function (s, a) {
            if ("object" == typeof a) {
              if (i.length) {
                let e = Y(i, this);
                0 === e ? i[i.length] = this : (i.splice(e), o.splice(e)), o[o.length] = s;
                let r = Y(i, a);
                if (0 !== r) return n ? t.call(this, s, a, Q(o, r)) : `[ref=${Q(o,r)}]`
              } else i[0] = a, o[0] = s
            }
            return r ? e.call(this, s, a) : a
          }
        }(t, n), r ? ? void 0)
      }
      var X = {
        getItem: e => "",
        setItem: (e, t) => null,
        removeItem: e => null
      };

      function $({
        deserialize: e = J,
        key: t = "wagmi",
        serialize: r = Z,
        storage: n
      }) {
        return {
          ...n,
          getItem: (r, i = null) => {
            let o = n.getItem(`${t}.${r}`);
            try {
              return o ? e(o) : i
            } catch (e) {
              return console.warn(e), i
            }
          },
          setItem: (e, i) => {
            if (null === i) n.removeItem(`${t}.${e}`);
            else try {
              n.setItem(`${t}.${e}`, r(i))
            } catch (e) {
              console.error(e)
            }
          },
          removeItem: e => n.removeItem(`${t}.${e}`)
        }
      }
      var ee = "store",
        et = class {
          constructor({
            autoConnect: e = !1,
            connectors: t = [new u._],
            provider: r,
            storage: a = $({
              storage: "undefined" != typeof window ? window.localStorage : X
            }),
            logger: l = {
              warn: console.warn
            },
            webSocketProvider: c
          }) {
            let p;
            h(this, o), this.providers = new Map, this.webSocketProviders = new Map, h(this, n, void 0), h(this, i, void 0), this.config = {
              autoConnect: e,
              connectors: t,
              logger: l,
              provider: r,
              storage: a,
              webSocketProvider: c
            };
            let g = "disconnected";
            if (e) try {
              let e = a.getItem(ee),
                t = e ? .state ? .data;
              g = t ? .account ? "reconnecting" : "connecting", p = t ? .chain ? .id
            } catch (e) {}
            this.store = G(F(z(() => ({
              connectors: "function" == typeof t ? t() : t,
              provider: this.getProvider({
                chainId: p
              }),
              status: g,
              webSocketProvider: this.getWebSocketProvider({
                chainId: p
              })
            }), {
              name: ee,
              storage: a,
              partialize: t => ({
                ...e && {
                  data: {
                    account: t ? .data ? .account,
                    chain: t ? .data ? .chain
                  }
                },
                chains: t ? .chains
              }),
              version: 2
            }))), this.storage = a, f(this, i, a ? .getItem("wallet")), d(this, o, s).call(this), e && "undefined" != typeof window && setTimeout(async () => await this.autoConnect(), 0)
          }
          get chains() {
            return this.store.getState().chains
          }
          get connectors() {
            return this.store.getState().connectors
          }
          get connector() {
            return this.store.getState().connector
          }
          get data() {
            return this.store.getState().data
          }
          get error() {
            return this.store.getState().error
          }
          get lastUsedChainId() {
            return this.data ? .chain ? .id
          }
          get provider() {
            return this.store.getState().provider
          }
          get status() {
            return this.store.getState().status
          }
          get subscribe() {
            return this.store.subscribe
          }
          get webSocketProvider() {
            return this.store.getState().webSocketProvider
          }
          setState(e) {
            let t = "function" == typeof e ? e(this.store.getState()) : e;
            this.store.setState(t, !0)
          }
          clearState() {
            this.setState(e => ({
              ...e,
              chains: void 0,
              connector: void 0,
              data: void 0,
              error: void 0,
              status: "disconnected"
            }))
          }
          async destroy() {
            this.connector && await this.connector.disconnect ? .(), f(this, n, !1), this.clearState(), this.store.destroy()
          }
          async autoConnect() {
            if (c(this, n)) return;
            f(this, n, !0), this.setState(e => ({
              ...e,
              status: e.data ? .account ? "reconnecting" : "connecting"
            }));
            let e = c(this, i) ? [...this.connectors].sort(e => e.id === c(this, i) ? -1 : 1) : this.connectors,
              t = !1;
            for (let r of e) {
              if (!r.ready || !r.isAuthorized) continue;
              let e = await r.isAuthorized();
              if (!e) continue;
              let n = await r.connect();
              this.setState(e => ({
                ...e,
                connector: r,
                chains: r ? .chains,
                data: n,
                status: "connected"
              })), t = !0;
              break
            }
            return t || this.setState(e => ({
              ...e,
              data: void 0,
              status: "disconnected"
            })), f(this, n, !1), this.data
          }
          getProvider({
            bust: e,
            chainId: t
          } = {}) {
            let r = this.providers.get(t ? ? -1);
            if (r && !e) return r;
            let {
              provider: n
            } = this.config;
            return r = "function" == typeof n ? n({
              chainId: t
            }) : n, this.providers.set(t ? ? -1, r), r
          }
          getWebSocketProvider({
            bust: e,
            chainId: t
          } = {}) {
            let r = this.webSocketProviders.get(t ? ? -1);
            if (r && !e) return r;
            let {
              webSocketProvider: n
            } = this.config;
            return (r = "function" == typeof n ? n({
              chainId: t
            }) : n) && this.webSocketProviders.set(t ? ? -1, r), r
          }
          setLastUsedConnector(e = null) {
            this.storage ? .setItem("wallet", e)
          }
        };

      function er(e) {
        let t = new et(e);
        return a = t, t
      }

      function en() {
        if (!a) throw Error("No wagmi client found. Ensure you have set up a client: https://wagmi.sh/react/client");
        return a
      }
      async function ei({
        chainId: e,
        connector: t
      }) {
        let r = en(),
          n = r.connector;
        if (n && t.id === n.id) throw new eb;
        try {
          r.setState(e => ({
            ...e,
            status: "connecting"
          }));
          let n = await t.connect({
            chainId: e
          });
          return r.setLastUsedConnector(t.id), r.setState(e => ({
            ...e,
            connector: t,
            chains: t ? .chains,
            data: n,
            status: "connected"
          })), r.storage.setItem("connected", !0), {
            ...n,
            connector: t
          }
        } catch (e) {
          throw r.setState(e => ({
            ...e,
            status: e.connector ? "connected" : "disconnected"
          })), e
        }
      }
      async function eo() {
        let e = en();
        e.connector && await e.connector.disconnect(), e.clearState(), e.storage.removeItem("connected")
      }

      function es({
        chainId: e
      } = {}) {
        let t = en();
        return e && t.getProvider({
          chainId: e
        }) || t.provider
      }

      function ea(e, t) {
        let r = en(),
          n = async () => t(es(e)), i = r.subscribe(({
            provider: e
          }) => e, n);
        return i
      }
      async function eu({
        chainId: e
      } = {}) {
        let t = en(),
          r = await t.connector ? .getSigner ? .({
            chainId: e
          }) || null;
        return r
      }

      function el() {
        let {
          data: e,
          connector: t,
          status: r
        } = en();
        switch (r) {
          case "connected":
            return {
              address: e ? .account, connector : t, isConnected: !0, isConnecting: !1, isDisconnected: !1, isReconnecting: !1, status: r
            };
          case "reconnecting":
            return {
              address: e ? .account, connector : t, isConnected: !!e ? .account, isConnecting : !1, isDisconnected: !1, isReconnecting: !0, status: r
            };
          case "connecting":
            return {
              address: e ? .account, connector : t, isConnected: !1, isConnecting: !0, isDisconnected: !1, isReconnecting: !1, status: r
            };
          case "disconnected":
            return {
              address: void 0, connector: void 0, isConnected: !1, isConnecting: !1, isDisconnected: !0, isReconnecting: !1, status: r
            }
        }
      }

      function ec() {
        let e = en(),
          t = e.data ? .chain ? .id,
          r = e.chains ? ? [],
          n = [...e.provider.chains || [], ...r].find(e => e.id === t) ? ? {
            id: t,
            name: `Chain ${t}`,
            network: `${t}`,
            nativeCurrency: {
              name: "Ether",
              decimals: 18,
              symbol: "ETH"
            },
            rpcUrls: {
              default: {
                http: [""]
              }
            }
          };
        return {
          chain: t ? {
            ...n,
            ...e.data ? .chain,
            id : t
          } : void 0,
          chains: r
        }
      }
      async function eh({
        chainId: e
      }) {
        let {
          connector: t
        } = en();
        if (!t) throw new ew;
        if (!t.switchChain) throw new eS({
          connector: t
        });
        return t.switchChain(e)
      }

      function ef(e, {
        selector: t = e => e
      } = {}) {
        let r = en(),
          n = () => e(el()),
          i = r.subscribe(({
            data: e,
            connector: r,
            status: n
          }) => t({
            address: e ? .account,
            connector: r,
            status: n
          }), n, {
            equalityFn: q
          });
        return i
      }

      function ed(e, {
        selector: t = e => e
      } = {}) {
        let r = en(),
          n = () => e(ec()),
          i = r.subscribe(({
            data: e,
            chains: r
          }) => t({
            chainId: e ? .chain ? .id,
            chains: r
          }), n, {
            equalityFn: q
          });
        return i
      }

      function ep({
        chainId: e
      }, t) {
        let r = en(),
          n = async () => {
            let r = await eu({
              chainId: e
            });
            return en().connector ? t(r) : t(null)
          }, i = r.subscribe(({
            data: e,
            connector: t
          }) => ({
            account: e ? .account,
            chainId: e ? .chain ? .id,
            connector: t
          }), n, {
            equalityFn: q
          });
        return i
      }
      n = new WeakMap, i = new WeakMap, o = new WeakSet, s = function () {
        let e = e => {
            this.setState(t => ({
              ...t,
              data: {
                ...t.data,
                ...e
              }
            }))
          },
          t = () => {
            this.clearState()
          },
          r = e => {
            this.setState(t => ({
              ...t,
              error: e
            }))
          };
        this.store.subscribe(({
          connector: e
        }) => e, (n, i) => {
          i ? .off ? .("change", e), i ? .off ? .("disconnect", t), i ? .off ? .("error", r), n && (n.on ? .("change", e), n.on ? .("disconnect", t), n.on ? .("error", r))
        });
        let {
          provider: n,
          webSocketProvider: i
        } = this.config;
        ("function" == typeof n || "function" == typeof i) && this.store.subscribe(({
          data: e
        }) => e ? .chain ? .id, e => {
          this.setState(t => ({
            ...t,
            provider: this.getProvider({
              bust: !0,
              chainId: e
            }),
            webSocketProvider: this.getWebSocketProvider({
              bust: !0,
              chainId: e
            })
          }))
        })
      };
      var eg = class extends Error {
          constructor(e, t) {
            let {
              cause: r,
              code: n,
              data: i
            } = t;
            if (!Number.isInteger(n)) throw Error('"code" must be an integer.');
            if (!e || "string" != typeof e) throw Error('"message" must be a nonempty string.');
            super(e), this.cause = r, this.code = n, this.data = i
          }
        },
        em = class extends eg {
          constructor(e, t) {
            let {
              cause: r,
              code: n,
              data: i
            } = t;
            if (!(Number.isInteger(n) && n >= 1e3 && n <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
            super(e, {
              cause: r,
              code: n,
              data: i
            })
          }
        },
        ey = class extends Error {
          constructor() {
            super(...arguments), this.name = "AddChainError", this.message = "Error adding chain"
          }
        },
        ev = class extends Error {
          constructor({
            chainId: e,
            connectorId: t
          }) {
            super(`Chain "${e}" not configured for connector "${t}".`), this.name = "ChainNotConfigured"
          }
        },
        eb = class extends Error {
          constructor() {
            super(...arguments), this.name = "ConnectorAlreadyConnectedError", this.message = "Connector already connected"
          }
        },
        ew = class extends Error {
          constructor() {
            super(...arguments), this.name = "ConnectorNotFoundError", this.message = "Connector not found"
          }
        },
        eA = class extends eg {
          constructor(e) {
            super("Resource unavailable", {
              cause: e,
              code: -32002
            }), this.name = "ResourceUnavailable"
          }
        },
        eE = class extends em {
          constructor(e) {
            super("Error switching chain", {
              cause: e,
              code: 4902
            }), this.name = "SwitchChainError"
          }
        },
        eS = class extends Error {
          constructor({
            connector: e
          }) {
            super(`"${e.name}" does not support programmatic chain switching.`), this.name = "SwitchChainNotSupportedError"
          }
        },
        ex = class extends em {
          constructor(e) {
            super("User rejected request", {
              cause: e,
              code: 4001
            }), this.name = "UserRejectedRequestError"
          }
        }
    },
    86501: function (e, t, r) {
      "use strict";
      let n, i;
      r.d(t, {
        x7: function () {
          return ei
        },
        ZP: function () {
          return eo
        }
      });
      var o, s = r(67294);
      let a = {
          data: ""
        },
        u = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
          innerHTML: " ",
          id: "_goober"
        })).firstChild : e || a,
        l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        c = /\/\*[^]*?\*\/|  +/g,
        h = /\n+/g,
        f = (e, t) => {
          let r = "",
            n = "",
            i = "";
          for (let o in e) {
            let s = e[o];
            "@" == o[0] ? "i" == o[1] ? r = o + " " + s + ";" : n += "f" == o[1] ? f(s, o) : o + "{" + f(s, "k" == o[1] ? "" : t) + "}" : "object" == typeof s ? n += f(s, t ? t.replace(/([^,])+/g, e => o.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : o) : null != s && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += f.p ? f.p(o, s) : o + ":" + s + ";")
          }
          return r + (t && i ? t + "{" + i + "}" : i) + n
        },
        d = {},
        p = e => {
          if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + p(e[r]);
            return t
          }
          return e
        },
        g = (e, t, r, n, i) => {
          var o, s;
          let a = p(e),
            u = d[a] || (d[a] = (e => {
              let t = 0,
                r = 11;
              for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
              return "go" + r
            })(a));
          if (!d[u]) {
            let t = a !== e ? e : (e => {
              let t, r, n = [{}];
              for (; t = l.exec(e.replace(c, ""));) t[4] ? n.shift() : t[3] ? (r = t[3].replace(h, " ").trim(), n.unshift(n[0][r] = n[0][r] || {})) : n[0][t[1]] = t[2].replace(h, " ").trim();
              return n[0]
            })(e);
            d[u] = f(i ? {
              ["@keyframes " + u]: t
            } : t, r ? "" : "." + u)
          }
          let g = r && d.g ? d.g : null;
          return r && (d.g = d[u]), o = d[u], s = t, g ? s.data = s.data.replace(g, o) : -1 === s.data.indexOf(o) && (s.data = n ? o + s.data : s.data + o), u
        },
        m = (e, t, r) => e.reduce((e, n, i) => {
          let o = t[i];
          if (o && o.call) {
            let e = o(r),
              t = e && e.props && e.props.className || /^go/.test(e) && e;
            o = t ? "." + t : e && "object" == typeof e ? e.props ? "" : f(e, "") : !1 === e ? "" : e
          }
          return e + n + (null == o ? "" : o)
        }, "");

      function y(e) {
        let t = this || {},
          r = e.call ? e(t.p) : e;
        return g(r.unshift ? r.raw ? m(r, [].slice.call(arguments, 1), t.p) : r.reduce((e, r) => Object.assign(e, r && r.call ? r(t.p) : r), {}) : r, u(t.target), t.g, t.o, t.k)
      }
      y.bind({
        g: 1
      });
      let v, b, w, A = y.bind({
        k: 1
      });

      function E(e, t) {
        let r = this || {};
        return function () {
          let n = arguments;

          function i(o, s) {
            let a = Object.assign({}, o),
              u = a.className || i.className;
            r.p = Object.assign({
              theme: b && b()
            }, a), r.o = / *go\d+/.test(u), a.className = y.apply(r, n) + (u ? " " + u : ""), t && (a.ref = s);
            let l = e;
            return e[0] && (l = a.as || e, delete a.as), w && l[0] && w(a), v(l, a)
          }
          return t ? t(i) : i
        }
      }
      var S = e => "function" == typeof e,
        x = (e, t) => S(e) ? e(t) : e,
        k = (n = 0, () => (++n).toString()),
        P = () => {
          if (void 0 === i && "u" > typeof window) {
            let e = matchMedia("(prefers-reduced-motion: reduce)");
            i = !e || e.matches
          }
          return i
        },
        C = new Map,
        _ = e => {
          if (C.has(e)) return;
          let t = setTimeout(() => {
            C.delete(e), T({
              type: 4,
              toastId: e
            })
          }, 1e3);
          C.set(e, t)
        },
        M = e => {
          let t = C.get(e);
          t && clearTimeout(t)
        },
        O = (e, t) => {
          switch (t.type) {
            case 0:
              return {
                ...e, toasts: [t.toast, ...e.toasts].slice(0, 20)
              };
            case 1:
              return t.toast.id && M(t.toast.id), {
                ...e,
                toasts: e.toasts.map(e => e.id === t.toast.id ? {
                  ...e,
                  ...t.toast
                } : e)
              };
            case 2:
              let {
                toast: r
              } = t;
              return e.toasts.find(e => e.id === r.id) ? O(e, {
                type: 1,
                toast: r
              }) : O(e, {
                type: 0,
                toast: r
              });
            case 3:
              let {
                toastId: n
              } = t;
              return n ? _(n) : e.toasts.forEach(e => {
                _(e.id)
              }), {
                ...e,
                toasts: e.toasts.map(e => e.id === n || void 0 === n ? {
                  ...e,
                  visible: !1
                } : e)
              };
            case 4:
              return void 0 === t.toastId ? {
                ...e,
                toasts: []
              } : {
                ...e,
                toasts: e.toasts.filter(e => e.id !== t.toastId)
              };
            case 5:
              return {
                ...e, pausedAt: t.time
              };
            case 6:
              let i = t.time - (e.pausedAt || 0);
              return {
                ...e, pausedAt: void 0, toasts: e.toasts.map(e => ({
                  ...e,
                  pauseDuration: e.pauseDuration + i
                }))
              }
          }
        },
        N = [],
        R = {
          toasts: [],
          pausedAt: void 0
        },
        T = e => {
          R = O(R, e), N.forEach(e => {
            e(R)
          })
        },
        I = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3
        },
        B = (e = {}) => {
          let [t, r] = (0, s.useState)(R);
          (0, s.useEffect)(() => (N.push(r), () => {
            let e = N.indexOf(r);
            e > -1 && N.splice(e, 1)
          }), [t]);
          let n = t.toasts.map(t => {
            var r, n;
            return {
              ...e,
              ...e[t.type],
              ...t,
              duration: t.duration || (null == (r = e[t.type]) ? void 0 : r.duration) || (null == e ? void 0 : e.duration) || I[t.type],
              style: {
                ...e.style,
                ...null == (n = e[t.type]) ? void 0 : n.style,
                ...t.style
              }
            }
          });
          return {
            ...t,
            toasts: n
          }
        },
        L = (e, t = "blank", r) => ({
          createdAt: Date.now(),
          visible: !0,
          type: t,
          ariaProps: {
            role: "status",
            "aria-live": "polite"
          },
          message: e,
          pauseDuration: 0,
          ...r,
          id: (null == r ? void 0 : r.id) || k()
        }),
        F = e => (t, r) => {
          let n = L(t, e, r);
          return T({
            type: 2,
            toast: n
          }), n.id
        },
        D = (e, t) => F("blank")(e, t);
      D.error = F("error"), D.success = F("success"), D.loading = F("loading"), D.custom = F("custom"), D.dismiss = e => {
        T({
          type: 3,
          toastId: e
        })
      }, D.remove = e => T({
        type: 4,
        toastId: e
      }), D.promise = (e, t, r) => {
        let n = D.loading(t.loading, {
          ...r,
          ...null == r ? void 0 : r.loading
        });
        return e.then(e => (D.success(x(t.success, e), {
          id: n,
          ...r,
          ...null == r ? void 0 : r.success
        }), e)).catch(e => {
          D.error(x(t.error, e), {
            id: n,
            ...r,
            ...null == r ? void 0 : r.error
          })
        }), e
      };
      var U = (e, t) => {
          T({
            type: 1,
            toast: {
              id: e,
              height: t
            }
          })
        },
        j = () => {
          T({
            type: 5,
            time: Date.now()
          })
        },
        z = e => {
          let {
            toasts: t,
            pausedAt: r
          } = B(e);
          (0, s.useEffect)(() => {
            if (r) return;
            let e = Date.now(),
              n = t.map(t => {
                if (t.duration === 1 / 0) return;
                let r = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                if (r < 0) {
                  t.visible && D.dismiss(t.id);
                  return
                }
                return setTimeout(() => D.dismiss(t.id), r)
              });
            return () => {
              n.forEach(e => e && clearTimeout(e))
            }
          }, [t, r]);
          let n = (0, s.useCallback)(() => {
              r && T({
                type: 6,
                time: Date.now()
              })
            }, [r]),
            i = (0, s.useCallback)((e, r) => {
              let {
                reverseOrder: n = !1,
                gutter: i = 8,
                defaultPosition: o
              } = r || {}, s = t.filter(t => (t.position || o) === (e.position || o) && t.height), a = s.findIndex(t => t.id === e.id), u = s.filter((e, t) => t < a && e.visible).length;
              return s.filter(e => e.visible).slice(...n ? [u + 1] : [0, u]).reduce((e, t) => e + (t.height || 0) + i, 0)
            }, [t]);
          return {
            toasts: t,
            handlers: {
              updateHeight: U,
              startPause: j,
              endPause: n,
              calculateOffset: i
            }
          }
        },
        H = E("div")
      `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, G = E("div")
      `
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`, q = E("div")
      `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${A`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, K = E("div")
      `
  position: absolute;
`, V = E("div")
      `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, J = E("div")
      `
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${A`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, W = ({
        toast: e
      }) => {
        let {
          icon: t,
          type: r,
          iconTheme: n
        } = e;
        return void 0 !== t ? "string" == typeof t ? s.createElement(J, null, t) : t : "blank" === r ? null : s.createElement(V, null, s.createElement(G, {
          ...n
        }), "loading" !== r && s.createElement(K, null, "error" === r ? s.createElement(H, {
          ...n
        }) : s.createElement(q, {
          ...n
        })))
      }, Q = e => `
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, Y = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`, Z = E("div")
      `
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, X = E("div")
      `
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, $ = (e, t) => {
        let r = e.includes("top") ? 1 : -1,
          [n, i] = P() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [Q(r), Y(r)];
        return {
          animation: t ? `${A(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${A(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
        }
      }, ee = s.memo(({
        toast: e,
        position: t,
        style: r,
        children: n
      }) => {
        let i = e.height ? $(e.position || t || "top-center", e.visible) : {
            opacity: 0
          },
          o = s.createElement(W, {
            toast: e
          }),
          a = s.createElement(X, {
            ...e.ariaProps
          }, x(e.message, e));
        return s.createElement(Z, {
          className: e.className,
          style: {
            ...i,
            ...r,
            ...e.style
          }
        }, "function" == typeof n ? n({
          icon: o,
          message: a
        }) : s.createElement(s.Fragment, null, o, a))
      });
      o = s.createElement, f.p = void 0, v = o, b = void 0, w = void 0;
      var et = ({
          id: e,
          className: t,
          style: r,
          onHeightUpdate: n,
          children: i
        }) => {
          let o = s.useCallback(t => {
            if (t) {
              let r = () => {
                n(e, t.getBoundingClientRect().height)
              };
              r(), new MutationObserver(r).observe(t, {
                subtree: !0,
                childList: !0,
                characterData: !0
              })
            }
          }, [e, n]);
          return s.createElement("div", {
            ref: o,
            className: t,
            style: r
          }, i)
        },
        er = (e, t) => {
          let r = e.includes("top"),
            n = e.includes("center") ? {
              justifyContent: "center"
            } : e.includes("right") ? {
              justifyContent: "flex-end"
            } : {};
          return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: P() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t*(r?1:-1)}px)`,
            ...r ? {
              top: 0
            } : {
              bottom: 0
            },
            ...n
          }
        },
        en = y `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
        ei = ({
          reverseOrder: e,
          position: t = "top-center",
          toastOptions: r,
          gutter: n,
          children: i,
          containerStyle: o,
          containerClassName: a
        }) => {
          let {
            toasts: u,
            handlers: l
          } = z(r);
          return s.createElement("div", {
            style: {
              position: "fixed",
              zIndex: 9999,
              top: 16,
              left: 16,
              right: 16,
              bottom: 16,
              pointerEvents: "none",
              ...o
            },
            className: a,
            onMouseEnter: l.startPause,
            onMouseLeave: l.endPause
          }, u.map(r => {
            let o = r.position || t,
              a = er(o, l.calculateOffset(r, {
                reverseOrder: e,
                gutter: n,
                defaultPosition: t
              }));
            return s.createElement(et, {
              id: r.id,
              key: r.id,
              onHeightUpdate: l.updateHeight,
              className: r.visible ? en : "",
              style: a
            }, "custom" === r.type ? x(r.message, r) : i ? i(r) : s.createElement(ee, {
              toast: r,
              position: o
            }))
          }))
        },
        eo = D
    },
    32610: function (e, t, r) {
      "use strict";

      function n() {}
      r.d(t, {
        eM: function () {
          return E
        },
        eI: function () {
          return b
        },
        mA: function () {
          return M
        },
        $4: function () {
          return R
        },
        qL: function () {
          return B
        },
        LN: function () {
          return L
        },
        mx: function () {
          return U
        },
        g0: function () {
          return H
        }
      });
      var i = r(51767),
        o = r(27224);
      async function s({
        queryClient: e,
        persister: t,
        maxAge: r = 864e5,
        buster: n = "",
        hydrateOptions: i
      }) {
        try {
          let s = await t.restoreClient();
          if (s) {
            if (s.timestamp) {
              let a = Date.now() - s.timestamp > r,
                u = s.buster !== n;
              a || u ? t.removeClient() : (0, o.Z)(e, s.clientState, i)
            } else t.removeClient()
          }
        } catch (e) {
          t.removeClient()
        }
      }
      async function a({
        queryClient: e,
        persister: t,
        buster: r = "",
        dehydrateOptions: n
      }) {
        let i = {
          buster: r,
          timestamp: Date.now(),
          clientState: (0, o.D)(e, n)
        };
        await t.persistClient(i)
      }
      var u = r(30526),
        l = r(85945),
        c = r(67294),
        h = r(37122),
        f = r(91784),
        d = r(30081),
        p = r(61688),
        g = r(32161),
        m = r(48228),
        y = r(52924),
        v = r(52798);

      function b({
        queryClient: e = new i.S({
          defaultOptions: {
            queries: {
              cacheTime: 864e5,
              networkMode: "offlineFirst",
              refetchOnWindowFocus: !1,
              retry: 0
            },
            mutations: {
              networkMode: "offlineFirst"
            }
          }
        }),
        storage: t = (0, u.o6)({
          storage: "undefined" != typeof window && window.localStorage ? window.localStorage : u.wp
        }),
        persister: r = "undefined" != typeof window ? function ({
          storage: e,
          key: t = "REACT_QUERY_OFFLINE_CACHE",
          throttleTime: r = 1e3,
          serialize: i = JSON.stringify,
          deserialize: o = JSON.parse,
          retry: s
        }) {
          if (void 0 !== e) {
            let n = r => {
              try {
                e.setItem(t, i(r));
                return
              } catch (e) {
                return e
              }
            };
            return {
              persistClient: function (e, t = 100) {
                let r = null;
                return function (...n) {
                  null === r && (r = setTimeout(() => {
                    e(...n), r = null
                  }, t))
                }
              }(e => {
                let t = e,
                  r = n(t),
                  i = 0;
                for (; r && t;) i++, (t = null == s ? void 0 : s({
                  persistedClient: t,
                  error: r,
                  errorCount: i
                })) && (r = n(t))
              }, r),
              restoreClient: () => {
                let r = e.getItem(t);
                if (r) return o(r)
              },
              removeClient: () => {
                e.removeItem(t)
              }
            }
          }
          return {
            persistClient: n,
            restoreClient: () => void 0,
            removeClient: n
          }
        }({
          key: "cache",
          storage: t,
          serialize: e => e,
          deserialize: e => e
        }) : void 0,
        ...o
      }) {
        let l = (0, u.eI)({
          ...o,
          storage: t
        });
        return r && function (e) {
          let t;
          s(e).then(() => {
            (function (e) {
              let t = e.queryClient.getQueryCache().subscribe(() => {
                  a(e)
                }),
                r = e.queryClient.getMutationCache().subscribe(() => {
                  a(e)
                });
              () => {
                t(), r()
              }
            })(e)
          })
        }({
          queryClient: e,
          persister: r,
          dehydrateOptions: {
            shouldDehydrateQuery: e => 0 !== e.cacheTime && !1 !== e.queryKey[0].persist
          }
        }), Object.assign(l, {
          queryClient: e
        })
      }
      var w = c.createContext(void 0),
        A = c.createContext(void 0);

      function E({
        children: e,
        client: t
      }) {
        return c.createElement(w.Provider, {
          children: c.createElement(l.aH, {
            children: e,
            client: t.queryClient,
            context: A
          }),
          value: t
        })
      }

      function S() {
        let e = c.useContext(w);
        if (!e) throw Error("`useClient` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");
        return e
      }
      var x = p.useSyncExternalStore;

      function k(e, t, r) {
        let n = (0, g.lV)(e, t, r);
        return (0, m.D)({
          context: A,
          ...n
        })
      }
      var P = () => (0, l.NL)({
          context: A
        }),
        C = e => "object" == typeof e && !Array.isArray(e);

      function _(e, t, r = t, n = u.vZ) {
        let i = c.useRef([]),
          o = (0, v.useSyncExternalStoreWithSelector)(e, t, r, e => e, (e, t) => {
            if (C(e) && C(t) && i.current.length) {
              for (let r of i.current) {
                let i = n(e[r], t[r]);
                if (!i) return !1
              }
              return !0
            }
            return n(e, t)
          });
        if (C(o)) {
          let e = {
            ...o
          };
          return Object.defineProperties(e, Object.entries(e).reduce((e, [t, r]) => ({
            ...e,
            [t]: {
              configurable: !1,
              enumerable: !0,
              get: () => (i.current.includes(t) || i.current.push(t), r)
            }
          }), {})), e
        }
        return o
      }

      function M({
        onConnect: e,
        onDisconnect: t
      } = {}) {
        let r = _(u.uH, u.D0),
          n = c.useRef(),
          i = n.current ? ? {};
        return e && ("connected" !== i.status || void 0 === i.status) && "connected" === r.status && e({
          address: r.address,
          connector: r.connector,
          isReconnected: "reconnecting" === i.status || void 0 === i.status
        }), t && "connected" === i.status && "disconnected" === r.status && t(), n.current = r, r
      }
      var O = e => [{
          entity: "connect",
          ...e
        }],
        N = e => {
          let {
            connector: t,
            chainId: r
          } = e;
          if (!t) throw Error("connector is required");
          return (0, u.$j)({
            connector: t,
            chainId: r
          })
        };

      function R({
        chainId: e,
        connector: t,
        onError: r,
        onMutate: n,
        onSettled: i,
        onSuccess: o
      } = {}) {
        let s = S(),
          {
            data: a,
            error: u,
            isError: l,
            isIdle: h,
            isLoading: f,
            isSuccess: d,
            mutate: p,
            mutateAsync: g,
            reset: m,
            status: y,
            variables: v
          } = k(O({
            connector: t,
            chainId: e
          }), N, {
            onError: r,
            onMutate: n,
            onSettled: i,
            onSuccess: o
          }),
          b = c.useCallback(r => p({
            chainId: r ? .chainId ? ? e,
            connector: r ? .connector ? ? t
          }), [e, t, p]),
          w = c.useCallback(r => g({
            chainId: r ? .chainId ? ? e,
            connector: r ? .connector ? ? t
          }), [e, t, g]);
        return {
          connect: b,
          connectAsync: w,
          connectors: s.connectors,
          data: a,
          error: u,
          isError: l,
          isIdle: h,
          isLoading: f,
          isSuccess: d,
          pendingConnector: v ? .connector,
          reset: m,
          status: y,
          variables: v
        }
      }
      var T = [{
          entity: "disconnect"
        }],
        I = () => (0, u.zP)();

      function B({
        onError: e,
        onMutate: t,
        onSettled: r,
        onSuccess: n
      } = {}) {
        let {
          error: i,
          isError: o,
          isIdle: s,
          isLoading: a,
          isSuccess: u,
          mutate: l,
          mutateAsync: c,
          reset: h,
          status: f
        } = k(T, I, {
          ...e ? {
            onError(t, r, n) {
              e(t, n)
            }
          } : {},
          onMutate: t,
          ...r ? {
            onSettled(e, t, n, i) {
              r(t, i)
            }
          } : {},
          ...n ? {
            onSuccess(e, t, r) {
              n(r)
            }
          } : {}
        });
        return {
          disconnect: l,
          disconnectAsync: c,
          error: i,
          isError: o,
          isIdle: s,
          isLoading: a,
          isSuccess: u,
          reset: h,
          status: f
        }
      }

      function L() {
        return _(u.QC, u.Hy)
      }

      function F({
        chainId: e
      }) {
        return [{
          entity: "signer",
          chainId: e,
          persist: !1
        }]
      }

      function D({
        queryKey: [{
          chainId: e
        }]
      }) {
        return (0, u.DG)({
          chainId: e
        })
      }

      function U({
        chainId: e,
        suspense: t,
        onError: r,
        onSettled: n,
        onSuccess: i
      } = {}) {
        let {
          connector: o
        } = M(), s = function ({
          chainId: e
        } = {}) {
          let t = function ({
            chainId: e
          } = {}) {
            return (0, v.useSyncExternalStoreWithSelector)(t => (0, u.b0)({
              chainId: e
            }, t), () => (0, u.VH)({
              chainId: e
            }), () => (0, u.VH)({
              chainId: e
            }), e => e, (e, t) => e.network.chainId === t.network.chainId)
          }({
            chainId: e
          });
          return t.network.chainId
        }({
          chainId: e
        }), a = function (e, t, r) {
          let n = Array.isArray(e) ? "function" == typeof t ? {
              ...r,
              queryKey: e,
              queryFn: t
            } : {
              ...t,
              queryKey: e
            } : e,
            i = function (e, t) {
              var r, n;
              let i = (0, l.NL)({
                  context: e.context
                }),
                o = (0, h.S)(),
                s = (0, f._)(),
                a = i.defaultQueryOptions(e);
              a._optimisticResults = o ? "isRestoring" : "optimistic", a.onError && (a.onError = d.V.batchCalls(a.onError)), a.onSuccess && (a.onSuccess = d.V.batchCalls(a.onSuccess)), a.onSettled && (a.onSettled = d.V.batchCalls(a.onSettled)), a.suspense && "number" != typeof a.staleTime && (a.staleTime = 1e3), (a.suspense || a.useErrorBoundary) && !s.isReset() && (a.retryOnMount = !1);
              let [u] = c.useState(() => new t(i, a)), p = u.getOptimisticResult(a);
              if (x(c.useCallback(e => o ? () => void 0 : u.subscribe(d.V.batchCalls(e)), [u, o]), () => u.getCurrentResult(), () => u.getCurrentResult()), c.useEffect(() => {
                  s.clearReset()
                }, [s]), c.useEffect(() => {
                  u.setOptions(a, {
                    listeners: !1
                  })
                }, [a, u]), a.suspense && p.isLoading && p.isFetching && !o) throw u.fetchOptimistic(a).then(({
                data: e
              }) => {
                a.onSuccess ? .(e), a.onSettled ? .(e, null)
              }).catch(e => {
                s.clearReset(), a.onError ? .(e), a.onSettled ? .(void 0, e)
              });
              if (p.isError && !s.isReset() && !p.isFetching && (r = a.useErrorBoundary, n = [p.error, u.getCurrentQuery()], "function" == typeof r ? r(...n) : !!r)) throw p.error;
              let g = "loading" === p.status && "idle" === p.fetchStatus ? "idle" : p.status,
                m = "loading" === g && "fetching" === p.fetchStatus;
              return {
                ...p,
                defaultedOptions: a,
                isIdle: "idle" === g,
                isLoading: m,
                observer: u,
                status: g
              }
            }({
              context: A,
              ...n
            }, y.z),
            o = {
              data: i.data,
              error: i.error,
              fetchStatus: i.fetchStatus,
              isError: i.isError,
              isFetched: i.isFetched,
              isFetchedAfterMount: i.isFetchedAfterMount,
              isFetching: i.isFetching,
              isIdle: i.isIdle,
              isLoading: i.isLoading,
              isRefetching: i.isRefetching,
              isSuccess: i.isSuccess,
              refetch: i.refetch,
              status: i.status,
              internal: {
                dataUpdatedAt: i.dataUpdatedAt,
                errorUpdatedAt: i.errorUpdatedAt,
                failureCount: i.failureCount,
                isFetchedAfterMount: i.isFetchedAfterMount,
                isLoadingError: i.isLoadingError,
                isPaused: i.isPaused,
                isPlaceholderData: i.isPlaceholderData,
                isPreviousData: i.isPreviousData,
                isRefetchError: i.isRefetchError,
                isStale: i.isStale,
                remove: i.remove
              }
            };
          return i.defaultedOptions.notifyOnChangeProps ? o : function (e, t) {
            let r = {};
            return Object.keys(e).forEach(n => {
              Object.defineProperty(r, n, {
                configurable: !1,
                enumerable: !0,
                get: () => (t.trackedProps.add(n), e[n])
              })
            }), r
          }(o, i.observer)
        }(F({
          chainId: s
        }), D, {
          cacheTime: 0,
          enabled: Boolean(o),
          staleTime: 1 / 0,
          suspense: t,
          onError: r,
          onSettled: n,
          onSuccess: i
        }), p = P();
        return c.useEffect(() => {
          let e = (0, u.rn)({
            chainId: s
          }, e => {
            e ? p.invalidateQueries(F({
              chainId: s
            })) : p.removeQueries(F({
              chainId: s
            }))
          });
          return e
        }, [p, s]), a
      }
      var j = e => [{
          entity: "switchNetwork",
          ...e
        }],
        z = e => {
          let {
            chainId: t
          } = e;
          if (!t) throw Error("chainId is required");
          return (0, u.If)({
            chainId: t
          })
        };

      function H({
        chainId: e,
        throwForSwitchChainNotSupported: t,
        onError: r,
        onMutate: n,
        onSettled: i,
        onSuccess: o
      } = {}) {
        let s, a;
        let u = S(),
          l = function () {
            let [, e] = c.useReducer(e => e + 1, 0);
            return e
          }(),
          {
            data: h,
            error: f,
            isError: d,
            isIdle: p,
            isLoading: g,
            isSuccess: m,
            mutate: y,
            mutateAsync: v,
            reset: b,
            status: w,
            variables: A
          } = k(j({
            chainId: e
          }), z, {
            onError: r,
            onMutate: n,
            onSettled: i,
            onSuccess: o
          }),
          E = c.useCallback(t => y({
            chainId: t ? ? e
          }), [e, y]),
          x = c.useCallback(t => v({
            chainId: t ? ? e
          }), [e, v]);
        c.useEffect(() => {
          let e = u.subscribe(({
            chains: e,
            connector: t
          }) => ({
            chains: e,
            connector: t
          }), l);
          return e
        }, [u, l]);
        let P = !!u.connector ? .switchChain;
        return (t || P) && (s = E, a = x), {
          chains: u.chains ? ? [],
          data: h,
          error: f,
          isError: d,
          isIdle: p,
          isLoading: g,
          isSuccess: m,
          pendingChainId: A ? .chainId,
          reset: b,
          status: w,
          switchNetwork: s,
          switchNetworkAsync: a,
          variables: A
        }
      }
    }
  }
]);