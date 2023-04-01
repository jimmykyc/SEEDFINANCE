(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888], {
    83454: function (t, e, r) {
      "use strict";
      var n, i;
      t.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(77663)
    },
    6840: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
        return r(8216)
      }])
    },
    8216: function (t, e, r) {
      "use strict";
      r.r(e), r.d(e, {
        default: function () {
          return f
        }
      });
      var n = r(85893),
        i = r(5095),
        s = r(9008),
        o = r.n(s);
      let u = "Build a diverse portfolio with $HAMI. Arbitrum's first multi-currency rewards token",
        a = "https://hamachi.finance/images/banner.webp",
        l = t => {
          let {
            title: e = "Hamachi Finance"
          } = t;
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(o(), {
              children: [(0, n.jsx)("meta", {
                charSet: "utf-8"
              }), (0, n.jsx)("meta", {
                name: "language",
                content: "english"
              }), (0, n.jsx)("meta", {
                httpEquiv: "content-type",
                content: "text/html"
              }), (0, n.jsx)("link", {
                rel: "shortcut icon",
                href: "icons/favicon.ico"
              }), (0, n.jsx)("title", {
                children: e
              }), (0, n.jsx)("meta", {
                name: "description",
                content: u
              }), (0, n.jsx)("meta", {
                name: "keywords",
                content: "Hamachi, Arbitrum, Reward Token, Multi-Currency, Community, Farming, Web3, Rewards, $HAMI"
              }), (0, n.jsx)("meta", {
                name: "robots",
                content: "index,follow"
              }), (0, n.jsx)("meta", {
                name: "distribution",
                content: "web"
              }), (0, n.jsx)("meta", {
                name: "og:title",
                content: e
              }), (0, n.jsx)("meta", {
                name: "og:type",
                content: "website"
              }), (0, n.jsx)("meta", {
                name: "og:url",
                content: "https://hamachi.finance/"
              }), (0, n.jsx)("meta", {
                name: "og:image",
                content: a
              }), (0, n.jsx)("meta", {
                name: "og:site_name",
                content: e
              }), (0, n.jsx)("meta", {
                name: "og:description",
                content: u
              }), (0, n.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "icons/apple-touch-icon.png"
              }), (0, n.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "icons/favicon-32x32.png"
              }), (0, n.jsx)("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "icons/favicon-16x16.png"
              }), (0, n.jsx)("link", {
                rel: "manifest",
                href: "site.webmanifest"
              }), (0, n.jsx)("link", {
                rel: "mask-icon",
                href: "icons/safari-pinned-tab.svg",
                color: "#5bbad5"
              }), (0, n.jsx)("meta", {
                name: "msapplication-TileColor",
                content: "#da532c"
              }), (0, n.jsx)("meta", {
                name: "theme-color",
                content: "#ffffff"
              }), (0, n.jsx)("meta", {
                name: "format-detection",
                content: "telephone=yes"
              }), (0, n.jsx)("meta", {
                name: "HandheldFriendly",
                content: "true"
              }), (0, n.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, minimum-scale=1, initial-scale=1.0"
              }), (0, n.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }), (0, n.jsx)("meta", {
                name: "twitter:title",
                content: e
              }), (0, n.jsx)("meta", {
                name: "twitter:description",
                content: u
              }), (0, n.jsx)("meta", {
                name: "twitter:image",
                content: a
              }), (0, n.jsx)("meta", {
                name: "twitter:site",
                content: "@HamachiFinance"
              }), (0, n.jsx)("meta", {
                name: "twitter:creator",
                content: "@HamachiFinance"
              })]
            })
          })
        };
      r(14222);
      let c = t => {
        let {
          Component: e,
          pageProps: {
            title: r,
            ...i
          }
        } = t;
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l, {
            title: r
          }), (0, n.jsx)(e, {
            ...i
          })]
        })
      };
      var f = i.h.withTRPC(c)
    },
    5095: function (t, e, r) {
      "use strict";

      function n(t) {
        return t
      }

      function i(t) {
        let e = {
          subscribe(e) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;

            function o() {
              if (null === r) {
                s = !0;
                return
              }!i && (i = !0, "function" == typeof r ? r() : r && r.unsubscribe())
            }
            return r = t({
              next(t) {
                n || e.next ? .(t)
              },
              error(t) {
                n || (n = !0, e.error ? .(t), o())
              },
              complete() {
                n || (n = !0, e.complete ? .(), o())
              }
            }), s && o(), {
              unsubscribe: o
            }
          },
          pipe: (...t) => (0 === t.length ? n : 1 === t.length ? t[0] : function (e) {
            return t.reduce((t, e) => e(t), e)
          })(e)
        };
        return e
      }
      r.d(e, {
        h: function () {
          return ry
        }
      });
      class s extends Error {
        constructor(t) {
          super(t), this.name = "ObservableAbortError", Object.setPrototypeOf(this, s.prototype)
        }
      }
      class o extends Error {
        static from(t, e = {}) {
          return t instanceof Error ? "TRPCClientError" === t.name ? t : new o(t.message, {
            ...e,
            cause: t,
            result: null
          }) : new o(t.error.message ? ? "", {
            ...e,
            cause: void 0,
            result: t
          })
        }
        constructor(t, e) {
          let r = e ? .cause;
          super(t, {
            cause: r
          }), this.meta = e ? .meta, this.cause = r, this.shape = e ? .result ? .error, this.data = e ? .result ? .error.data, this.name = "TRPCClientError", Object.setPrototypeOf(this, o.prototype)
        }
      }

      function u(t) {
        return !!t && !Array.isArray(t) && "object" == typeof t
      }

      function a() {
        return "undefined" != typeof window ? window : globalThis
      }
      let l = {
        query: "GET",
        mutation: "POST"
      };

      function c(t) {
        return "input" in t ? t.runtime.transformer.serialize(t.input) : function (t) {
          let e = {};
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e[r] = n
          }
          return e
        }(t.inputs.map(e => t.runtime.transformer.serialize(e)))
      }

      function f(t) {
        let e = t.url + "/" + t.path,
          r = [];
        if ("inputs" in t && r.push("batch=1"), "query" === t.type) {
          let e = c(t);
          void 0 !== e && r.push(`input=${encodeURIComponent(JSON.stringify(e))}`)
        }
        return r.length && (e += "?" + r.join("&")), e
      }
      let h = () => {
        throw Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
      };

      function d(t) {
        let e = null,
          r = null,
          n = () => {
            clearTimeout(r), r = null, e = null
          };

        function i() {
          let r = function (e) {
            let r = [
                []
              ],
              n = 0;
            for (;;) {
              let i = e[n];
              if (!i) break;
              let s = r[r.length - 1];
              if (i.aborted) {
                i.reject(Error("Aborted")), n++;
                continue
              }
              let o = t.validate(s.concat(i).map(t => t.key));
              if (o) {
                s.push(i), n++;
                continue
              }
              if (0 === s.length) {
                i.reject(Error("Input is too big for a single dispatch")), n++;
                continue
              }
              r.push([])
            }
            return r
          }(e);
          for (let e of (n(), r)) {
            if (!e.length) continue;
            let r = {
              items: e,
              cancel: h
            };
            for (let t of e) t.batch = r;
            let {
              promise: n,
              cancel: i
            } = t.fetch(r.items.map(t => t.key));
            r.cancel = i, n.then(t => {
              for (let e = 0; e < t.length; e++) {
                let n = t[e],
                  i = r.items[e];
                i.resolve(n), i.batch = null
              }
            }).catch(t => {
              for (let e of r.items) e.reject(t), e.batch = null
            })
          }
        }
        return {
          load: function (t) {
            let n = {
                aborted: !1,
                key: t,
                batch: null,
                resolve: h,
                reject: h
              },
              s = new Promise((t, r) => {
                n.reject = r, n.resolve = t, e || (e = []), e.push(n)
              });
            r || (r = setTimeout(i));
            let o = () => {
              n.aborted = !0, n.batch ? .items.every(t => t.aborted) && (n.batch.cancel(), n.batch = null)
            };
            return {
              promise: s,
              cancel: o
            }
          }
        }
      }

      function p(t) {
        let e = function (t) {
          let e = t.headers || (() => ({}));
          return {
            url: t.url,
            fetch: function (t) {
              if (t) return t;
              let e = a(),
                r = e.fetch;
              if (r) return "function" == typeof r.bind ? r.bind(e) : r;
              throw Error("No fetch implementation found")
            }(t.fetch),
            AbortController: t.AbortController ? ? a().AbortController ? ? null,
            headers: "function" == typeof e ? e : () => e
          }
        }(t);
        return r => {
          let n = t.maxURLLength || 1 / 0,
            s = t => {
              let i = i => {
                  if (n === 1 / 0) return !0;
                  let s = i.map(t => t.path).join(","),
                    o = i.map(t => t.input),
                    u = f({
                      ...e,
                      runtime: r,
                      type: t,
                      path: s,
                      inputs: o
                    });
                  return u.length <= n
                },
                s = n => {
                  let i = n.map(t => t.path).join(","),
                    s = n.map(t => t.input),
                    {
                      promise: o,
                      cancel: u
                    } = function (t) {
                      let {
                        type: e
                      } = t, r = t.AbortController ? new t.AbortController : null, n = new Promise((n, i) => {
                        let s = f(t),
                          o = function (t) {
                            if ("query" === t.type) return;
                            let e = c(t);
                            return void 0 !== e ? JSON.stringify(e) : void 0
                          }(t),
                          u = {};
                        Promise.resolve(t.headers()).then(n => {
                          if ("subscription" === e) throw Error("Subscriptions should use wsLink");
                          return t.fetch(s, {
                            method: l[e],
                            signal: r ? .signal,
                            body: o,
                            headers: {
                              "content-type": "application/json",
                              ...n
                            }
                          })
                        }).then(t => (u.response = t, t.json())).then(t => {
                          n({
                            json: t,
                            meta: u
                          })
                        }).catch(i)
                      }), i = () => {
                        r ? .abort()
                      };
                      return {
                        promise: n,
                        cancel: i
                      }
                    }({
                      ...e,
                      runtime: r,
                      type: t,
                      path: i,
                      inputs: s
                    });
                  return {
                    promise: o.then(t => {
                      let e = Array.isArray(t.json) ? t.json : n.map(() => t.json),
                        r = e.map(e => ({
                          meta: t.meta,
                          json: e
                        }));
                      return r
                    }),
                    cancel: u
                  }
                };
              return {
                validate: i,
                fetch: s
              }
            },
            a = d(s("query")),
            h = d(s("mutation")),
            p = d(s("subscription")),
            y = {
              query: a,
              subscription: p,
              mutation: h
            };
          return ({
            op: t
          }) => i(e => {
            let n = y[t.type],
              {
                promise: i,
                cancel: s
              } = n.load(t);
            return i.then(t => {
              let n = function (t, e) {
                let r;
                try {
                  r = function (t, e) {
                    if ("error" in t) {
                      let r = e.transformer.deserialize(t.error);
                      return {
                        ok: !1,
                        error: {
                          ...t,
                          error: r
                        }
                      }
                    }
                    let r = {
                      ...t.result,
                      ...(!t.result.type || "data" === t.result.type) && {
                        type: "data",
                        data: e.transformer.deserialize(t.result.data)
                      }
                    };
                    return {
                      ok: !0,
                      result: r
                    }
                  }(t, e)
                } catch (t) {
                  throw new o("Unable to transform response from server")
                }
                if (!r.ok && (!u(r.error.error) || "number" != typeof r.error.error.code) || r.ok && !u(r.result)) throw new o("Badly formatted response from server");
                return r
              }(t.json, r);
              if (!n.ok) {
                e.error(o.from(n.error, {
                  meta: t.meta
                }));
                return
              }
              e.next({
                context: t.meta,
                result: n.result
              }), e.complete()
            }).catch(t => e.error(o.from(t))), () => {
              s()
            }
          })
        }
      }
      let y = () => {},
        m = t => (function t(e, r) {
          let n = new Proxy(y, {
            get(n, i) {
              if ("string" == typeof i && "then" !== i) return t(e, [...r, i])
            },
            apply: (t, n, i) => e({
              args: i,
              path: r
            })
          });
          return n
        })(t, []),
        v = t => new Proxy(y, {
          get(e, r) {
            if ("string" == typeof r && "then" !== r) return t(r)
          }
        }),
        b = {
          query: ["72e3ff", "3fb0d8"],
          mutation: ["c5a3fc", "904dfc"],
          subscription: ["ff49e1", "d83fbe"]
        },
        g = (t = console) => e => {
          let {
            direction: r,
            input: n,
            type: i,
            path: s,
            context: o,
            id: u
          } = e, [a, l] = b[i], c = `
    background-color: #${"up"===r?a:l}; 
    color: ${"up"===r?"black":"white"};
    padding: 2px;
  `, f = ["%c", "up" === r ? ">>" : "<<", i, `#${u}`, `%c${s}%c`, "%O"], h = [c, `${c}; font-weight: bold;`, `${c}; font-weight: normal;`];
          "up" === e.direction ? h.push({
            input: n,
            context: o
          }) : h.push({
            input: n,
            result: e.result,
            elapsedMs: e.elapsedMs,
            context: o
          });
          let d = "down" === e.direction && e.result && (e.result instanceof Error || "error" in e.result.result) ? "error" : "log";
          t[d].apply(null, [f.join(" ")].concat(h))
        };
      class w {
        $request({
          type: t,
          input: e,
          path: r,
          context: n = {}
        }) {
          var s;
          let o = (s = {
            links: this.links,
            op: {
              id: ++this.requestId,
              type: t,
              path: r,
              input: e,
              context: n
            }
          }, i(t => {
            let e = function t(e = 0, r = s.op) {
              let n = s.links[e];
              if (!n) throw Error("No more links to execute - did you forget to add an ending link?");
              let i = n({
                op: r,
                next(r) {
                  let n = t(e + 1, r);
                  return n
                }
              });
              return i
            }();
            return e.subscribe(t)
          }));
          return o.pipe(t => {
            let e = 0,
              r = null,
              n = [];
            return {
              subscribe: i => (e++, n.push(i), r || (r = t.subscribe({
                next(t) {
                  for (let e of n) e.next ? .(t)
                },
                error(t) {
                  for (let e of n) e.error ? .(t)
                },
                complete() {
                  for (let t of n) t.complete ? .()
                }
              })), {
                unsubscribe() {
                  e--,
                  function () {
                    if (0 === e && r) {
                      let t = r;
                      r = null, t.unsubscribe()
                    }
                  }();
                  let t = n.findIndex(t => t === i);
                  t > -1 && n.splice(t, 1)
                }
              })
            }
          })
        }
        requestAsPromise(t) {
          let e = this.$request(t),
            {
              promise: r,
              abort: n
            } = function (t) {
              let e;
              let r = new Promise((r, n) => {
                let i = !1;

                function o() {
                  i || (i = !0, n(new s("This operation was aborted.")), u.unsubscribe())
                }
                let u = t.subscribe({
                  next(t) {
                    i = !0, r(t), o()
                  },
                  error(t) {
                    i = !0, n(t), o()
                  },
                  complete() {
                    i = !0, o()
                  }
                });
                e = o
              });
              return {
                promise: r,
                abort: e
              }
            }(e),
            i = new Promise((e, i) => {
              t.signal ? .addEventListener("abort", n), r.then(t => {
                e(t.result.data)
              }).catch(t => {
                i(o.from(t))
              })
            });
          return i
        }
        query(t, e, r) {
          return this.requestAsPromise({
            type: "query",
            path: t,
            input: e,
            context: r ? .context,
            signal: r ? .signal
          })
        }
        mutation(t, e, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: t,
            input: e,
            context: r ? .context,
            signal: r ? .signal
          })
        }
        subscription(t, e, r) {
          let n = this.$request({
            type: "subscription",
            path: t,
            input: e,
            context: r ? .context
          });
          return n.subscribe({
            next(t) {
              "started" === t.result.type ? r.onStarted ? .() : "stopped" === t.result.type ? r.onStopped ? .() : r.onData ? .(t.result.data)
            },
            error(t) {
              r.onError ? .(t)
            },
            complete() {
              r.onComplete ? .()
            }
          })
        }
        constructor(t) {
          this.requestId = 0, this.runtime = {
            transformer: t.transformer ? "input" in t.transformer ? {
              serialize: t.transformer.input.serialize,
              deserialize: t.transformer.output.deserialize
            } : t.transformer : {
              serialize: t => t,
              deserialize: t => t
            }
          }, this.links = t.links.map(t => t(this.runtime))
        }
      }

      function x(t) {
        let e = new w({
          transformer: t.transformer,
          links: "links" in t ? t.links : [p(t)]
        });
        return e
      }
      let S = {
        query: "query",
        mutate: "mutation",
        subscribe: "subscription"
      };
      var C, O = r(85945),
        E = r(67294),
        R = r(27224);
      let P = ({
        children: t,
        options: e,
        state: r
      }) => (! function (t, e = {}) {
        let r = (0, O.NL)({
            context: e.context
          }),
          n = E.useRef(e);
        n.current = e, E.useMemo(() => {
          t && (0, R.Z)(r, t, n.current)
        }, [r, t])
      }(r, e), t);
      var q = r(32161),
        I = r(52924),
        j = r(464),
        Q = r(30081),
        k = r(91784),
        M = r(37122),
        T = r(24798);
      let A = (t, e) => {
          (t.suspense || t.useErrorBoundary) && !e.isReset() && (t.retryOnMount = !1)
        },
        F = t => {
          E.useEffect(() => {
            t.clearReset()
          }, [t])
        },
        D = ({
          result: t,
          errorResetBoundary: e,
          useErrorBoundary: r,
          query: n
        }) => t.isError && !e.isReset() && !t.isFetching && (0, T.L)(r, [t.error, n]),
        _ = t => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
        },
        U = (t, e) => t.isLoading && t.isFetching && !e,
        N = (t, e, r) => (null == t ? void 0 : t.suspense) && U(e, r),
        V = (t, e, r) => e.fetchOptimistic(t).then(({
          data: e
        }) => {
          null == t.onSuccess || t.onSuccess(e), null == t.onSettled || t.onSettled(e, null)
        }).catch(e => {
          r.clearReset(), null == t.onError || t.onError(e), null == t.onSettled || t.onSettled(void 0, e)
        });

      function K(t, e) {
        let r = (0, O.NL)({
            context: t.context
          }),
          n = (0, M.S)(),
          i = (0, k._)(),
          s = r.defaultQueryOptions(t);
        s._optimisticResults = n ? "isRestoring" : "optimistic", s.onError && (s.onError = Q.V.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = Q.V.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = Q.V.batchCalls(s.onSettled)), _(s), A(s, i), F(i);
        let [o] = E.useState(() => new e(r, s)), u = o.getOptimisticResult(s);
        if ((0, j.$)(E.useCallback(t => n ? () => void 0 : o.subscribe(Q.V.batchCalls(t)), [o, n]), () => o.getCurrentResult(), () => o.getCurrentResult()), E.useEffect(() => {
            o.setOptions(s, {
              listeners: !1
            })
          }, [s, o]), N(s, u, n)) throw V(s, o, i);
        if (D({
            result: u,
            errorResetBoundary: i,
            useErrorBoundary: s.useErrorBoundary,
            query: o.getCurrentQuery()
          })) throw u.error;
        return s.notifyOnChangeProps ? u : o.trackResult(u)
      }
      var L = r(48228),
        z = r(9499);
      class H extends I.z {
        constructor(t, e) {
          super(t, e)
        }
        bindMethods() {
          super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(t, e) {
          super.setOptions({
            ...t,
            behavior: (0, z.Gm)()
          }, e)
        }
        getOptimisticResult(t) {
          return t.behavior = (0, z.Gm)(), super.getOptimisticResult(t)
        }
        fetchNextPage({
          pageParam: t,
          ...e
        } = {}) {
          return this.fetch({
            ...e,
            meta: {
              fetchMore: {
                direction: "forward",
                pageParam: t
              }
            }
          })
        }
        fetchPreviousPage({
          pageParam: t,
          ...e
        } = {}) {
          return this.fetch({
            ...e,
            meta: {
              fetchMore: {
                direction: "backward",
                pageParam: t
              }
            }
          })
        }
        createResult(t, e) {
          var r, n, i, s, o, u;
          let {
            state: a
          } = t, l = super.createResult(t, e), {
            isFetching: c,
            isRefetching: f
          } = l, h = c && (null == (r = a.fetchMeta) ? void 0 : null == (n = r.fetchMore) ? void 0 : n.direction) === "forward", d = c && (null == (i = a.fetchMeta) ? void 0 : null == (s = i.fetchMore) ? void 0 : s.direction) === "backward";
          return {
            ...l,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, z.Qy)(e, null == (o = a.data) ? void 0 : o.pages),
            hasPreviousPage: (0, z.ZF)(e, null == (u = a.data) ? void 0 : u.pages),
            isFetchingNextPage: h,
            isFetchingPreviousPage: d,
            isRefetching: f && !h && !d
          }
        }
      }

      function B(t, e) {
        let r = Array.isArray(t) ? t : [t],
          [n, i] = r,
          s = "string" != typeof n || "" === n ? [] : n.split(".");
        return [s, {
          ...i && {
            input: i
          },
          ...e && "any" !== e && {
            type: e
          }
        }]
      }

      function G(t, e) {
        return void 0 === e ? [t] : [t, e]
      }

      function $(t, e) {
        return m(r => {
          let n = r.args,
            i = [t, ...r.path],
            s = i.pop(),
            o = i.join(".");
          if ("useMutation" === s) return e[s](o, ...n);
          let [u, ...a] = n, l = G(o, u);
          if (s.startsWith("useSuspense")) {
            let t = a[0] || {},
              r = e["useSuspenseQuery" === s ? "useQuery" : "useInfiniteQuery"](l, {
                ...t,
                suspense: !0,
                enabled: !0
              });
            return [r.data, r]
          }
          return e[s](l, ...a)
        })
      }
      let Z = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
        W = (0, E.createContext)(null);

      function J(t) {
        return v(e => {
          if ("client" === e) {
            var r;
            return r = t.client, v(t => r.hasOwnProperty(t) ? r[t] : m(({
              path: e,
              args: n
            }) => {
              let i = [t, ...e],
                s = i.pop(),
                o = S[s],
                u = i.join(".");
              return r[o](u, ...n)
            }))
          }
          return Z.includes(e) ? t[e] : m(({
            path: r,
            args: n
          }) => {
            let i = [e, ...r],
              s = i.pop(),
              o = i.join("."),
              {
                queryKey: u,
                rest: a,
                updater: l
              } = (t => {
                if (["setData", "setInfiniteData"].includes(t)) {
                  let [t, e, ...r] = n, i = G(o, t);
                  return {
                    queryKey: i,
                    updater: e,
                    rest: r
                  }
                }
                let [e, ...r] = n, i = G(o, e);
                return {
                  queryKey: i,
                  rest: r
                }
              })(s);
            return ({
              fetch: () => t.fetchQuery(u, ...a),
              fetchInfinite: () => t.fetchInfiniteQuery(u, ...a),
              prefetch: () => t.prefetchQuery(u, ...a),
              prefetchInfinite: () => t.prefetchInfiniteQuery(u, ...a),
              invalidate: () => t.invalidateQueries(u, ...a),
              reset: () => t.resetQueries(u, ...a),
              refetch: () => t.refetchQueries(u, ...a),
              cancel: () => t.cancelQuery(u, ...a),
              setData: () => t.setQueryData(u, l, ...a),
              setInfiniteData: () => t.setInfiniteQueryData(u, l, ...a),
              getData: () => t.getQueryData(u),
              getInfiniteData: () => t.getInfiniteQueryData(u)
            })[s]()
          })
        })
      }

      function X(t, e) {
        let [r, n] = t;
        return [r, n, e ? .trpc]
      }

      function Y(t) {
        let e = (0, E.useRef)(t);
        return e.current.path = t.path, e.current
      }

      function tt(t) {
        let e = t ? .unstable_overrides ? .useMutation ? .onSuccess ? ? (t => t.originalFn()),
          r = t ? .context ? ? W,
          n = t ? .reactQueryContext,
          i = t => x(t),
          s = t => {
            let {
              abortOnUnmount: e = !1,
              client: n,
              queryClient: i,
              ssrContext: s
            } = t, [o, u] = (0, E.useState)(t.ssrState ? ? !1);
            return (0, E.useEffect)(() => {
              u(t => !!t && "mounted")
            }, []), E.createElement(r.Provider, {
              value: {
                abortOnUnmount: e,
                queryClient: i,
                client: n,
                ssrContext: s || null,
                ssrState: o,
                fetchQuery: (0, E.useCallback)((t, e) => i.fetchQuery(B(t, "query"), () => n.query(...X(t, e)), e), [n, i]),
                fetchInfiniteQuery: (0, E.useCallback)((t, e) => i.fetchInfiniteQuery(B(t, "infinite"), ({
                  pageParam: r
                }) => {
                  let [i, s] = t, o = {
                    ...s,
                    cursor: r
                  };
                  return n.query(...X([i, o], e))
                }, e), [n, i]),
                prefetchQuery: (0, E.useCallback)((t, e) => i.prefetchQuery(B(t, "query"), () => n.query(...X(t, e)), e), [n, i]),
                prefetchInfiniteQuery: (0, E.useCallback)((t, e) => i.prefetchInfiniteQuery(B(t, "infinite"), ({
                  pageParam: r
                }) => {
                  let [i, s] = t, o = {
                    ...s,
                    cursor: r
                  };
                  return n.query(...X([i, o], e))
                }, e), [n, i]),
                invalidateQueries: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.invalidateQueries(B(e, "any"), ...r)
                }, [i]),
                resetQueries: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.resetQueries(B(e, "any"), ...r)
                }, [i]),
                refetchQueries: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.refetchQueries(B(e, "any"), ...r)
                }, [i]),
                cancelQuery: (0, E.useCallback)(t => i.cancelQueries(B(t, "any")), [i]),
                setQueryData: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.setQueryData(B(e, "query"), ...r)
                }, [i]),
                getQueryData: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.getQueryData(B(e, "query"), ...r)
                }, [i]),
                setInfiniteQueryData: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.setQueryData(B(e, "infinite"), ...r)
                }, [i]),
                getInfiniteQueryData: (0, E.useCallback)((...t) => {
                  let [e, ...r] = t;
                  return i.getQueryData(B(e, "infinite"), ...r)
                }, [i])
              }
            }, t.children)
          };

        function o() {
          return E.useContext(r)
        }

        function u(t, e, r) {
          let {
            queryClient: n,
            ssrState: i
          } = o();
          return i && "mounted" !== i && "error" === n.getQueryCache().find(B(t, e)) ? .state.status ? {
            retryOnMount: !1,
            ...r
          } : r
        }
        let a = (t, e) => {
          let r = (0, E.useMemo)(() => e ? t.runtime.transformer.deserialize(e) : e, [e, t]);
          return r
        };
        return {
          Provider: s,
          createClient: i,
          useContext: o,
          useQuery: function (t, e) {
            let {
              abortOnUnmount: r,
              client: i,
              ssrState: s,
              queryClient: a,
              prefetchQuery: l
            } = o();
            "undefined" != typeof window || "prepass" !== s || e ? .trpc ? .ssr === !1 || e ? .enabled === !1 || a.getQueryCache().find(B(t, "query")) || l(t, e);
            let c = u(t, "query", e),
              f = e ? .trpc ? .abortOnUnmount ? ? r,
              h = function (t, e, r) {
                let n = (0, q._v)(t, e, r);
                return K(n, I.z)
              }(B(t, "query"), e => {
                let r = {
                  ...c,
                  trpc: {
                    ...c ? .trpc,
                    ...f ? {
                      signal: e.signal
                    } : {}
                  }
                };
                return i.query(...X(t, r))
              }, {
                context: n,
                ...c
              });
            return h.trpc = Y({
              path: t[0]
            }), h
          },
          useMutation: function (t, r) {
            let {
              client: i
            } = o(), s = (0, O.NL)({
              context: n
            }), u = (0, L.D)(e => {
              let n = Array.isArray(t) ? t[0] : t;
              return i.mutation(...X([n, e], r))
            }, {
              context: n,
              ...r,
              onSuccess(...t) {
                let n = () => r ? .onSuccess ? .(...t);
                return e({
                  originalFn: n,
                  queryClient: s,
                  meta: r ? .meta ? ? {}
                })
              }
            });
            return u.trpc = Y({
              path: Array.isArray(t) ? t[0] : t
            }), u
          },
          useSubscription: function (t, e) {
            let r = e ? .enabled ? ? !0,
              n = (0, q.yF)(t),
              {
                client: i
              } = o();
            return (0, E.useEffect)(() => {
              if (!r) return;
              let [n, s] = t, o = !1, u = i.subscription(n, s ? ? void 0, {
                onStarted: () => {
                  o || e.onStarted ? .()
                },
                onData: t => {
                  o || e.onData(t)
                },
                onError: t => {
                  o || e.onError ? .(t)
                }
              });
              return () => {
                o = !0, u.unsubscribe()
              }
            }, [n, r])
          },
          useDehydratedState: a,
          useInfiniteQuery: function (t, e) {
            let [r, i] = t, {
              client: s,
              ssrState: a,
              prefetchInfiniteQuery: l,
              queryClient: c,
              abortOnUnmount: f
            } = o();
            "undefined" != typeof window || "prepass" !== a || e ? .trpc ? .ssr === !1 || e ? .enabled === !1 || c.getQueryCache().find(B(t, "infinite")) || l(t, e);
            let h = u(t, "infinite", e),
              d = e ? .trpc ? .abortOnUnmount ? ? f,
              p = function (t, e, r) {
                let n = (0, q._v)(t, e, r);
                return K(n, H)
              }(B(t, "infinite"), t => {
                let e = {
                    ...h,
                    trpc: {
                      ...h ? .trpc,
                      ...d ? {
                        signal: t.signal
                      } : {}
                    }
                  },
                  n = {
                    ...i ? ? {},
                    cursor : t.pageParam
                  };
                return s.query(...X([r, n], e))
              }, {
                context: n,
                ...h
              });
            return p.trpc = Y({
              path: r
            }), p
          }
        }
      }
      var te = r(51767);
      let tr = t => t.queryClient ? ? new te.S(t.queryClientConfig);

      function tn() {
        return (tn = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
          }
          return t
        }).apply(this, arguments)
      }
      var ti = 60103,
        ts = 60106,
        to = 60107,
        tu = 60108,
        ta = 60114,
        tl = 60109,
        tc = 60110,
        tf = 60111,
        th = 60112,
        td = 60113,
        tp = 60115,
        ty = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var tm = Symbol.for;
        ti = tm("react.element"), ts = tm("react.portal"), to = tm("react.fragment"), tu = tm("react.strict_mode"), ta = tm("react.profiler"), tl = tm("react.provider"), tc = tm("react.context"), tf = Symbol.for("react.concurrent_mode"), th = tm("react.forward_ref"), td = tm("react.suspense"), tp = tm("react.memo"), ty = tm("react.lazy")
      }
      var tv = ti,
        tb = ts,
        tg = to,
        tw = tu,
        tx = ta,
        tS = tl,
        tC = tc,
        tO = tf,
        tE = th,
        tR = td,
        tP = tp,
        tq = ty,
        tI = E.Children.toArray,
        tj = function (t) {
          return null !== t && "object" == typeof t
        },
        tQ = function (t) {
          return tI(t).filter(tj)
        },
        tk = function (t, e) {
          return "object" == typeof e ? tn({}, e, t) : t
        },
        tM = new Map,
        tT = {},
        tA = void 0,
        tF = void 0,
        tD = function () {
          return tn({}, tT)
        },
        t_ = function () {
          return new Map(tM)
        },
        tU = function () {
          var t = tA;
          return tA = void 0, t
        },
        tN = function () {
          var t = tF;
          return tF = void 0, t
        },
        tV = function (t) {
          void 0 !== t && tn(tT, t)
        },
        tK = function (t) {
          void 0 !== t && tM.set(t[0], t[1])
        },
        tL = function (t) {
          tA = void 0, tT = t
        },
        tz = function (t) {
          tF = void 0, tM = t
        },
        tH = function (t) {
          var e = tM.get(t);
          return void 0 !== e ? e : t._currentValue
        },
        tB = {},
        tG = function (t) {
          var e = t.contextType,
            r = t.contextTypes;
          if (e) return tH(e);
          if (!r) return tB;
          var n = {};
          for (var i in r) n[i] = tT[i];
          return n
        },
        t$ = null,
        tZ = function () {
          return t$
        },
        tW = function (t) {
          t$ = t || null
        },
        tJ = {
          current: {
            uniqueID: 0
          }
        },
        tX = "function" == typeof Object.is ? Object.is : function (t, e) {
          return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        },
        tY = null,
        t0 = function (t) {
          tY = t
        },
        t1 = function () {
          if (null === tY) throw Error("[react-ssr-prepass] Hooks can only be called inside the body of a function component. (https://fb.me/react-invalid-hook-call)");
          return tY
        },
        t2 = null,
        t6 = null,
        t3 = !1,
        t8 = null,
        t9 = 0,
        t4 = function (t) {
          t2 = t
        };

      function t7() {
        return null === t6 ? null === t2 ? t2 = t6 = {
          memoizedState: null,
          queue: null,
          next: null
        } : t6 = t2 : t6 = null === t6.next ? t6.next = {
          memoizedState: null,
          queue: null,
          next: null
        } : t6.next
      }

      function t5(t, e) {
        return "function" == typeof e ? e(t) : e
      }

      function et(t, e, r) {
        var n, i = t1();
        null === (t6 = t7()).queue && (n = t === t5 ? "function" == typeof e ? e() : e : void 0 !== r ? r(e) : e, t6.memoizedState = n);
        var s = t6.queue || (t6.queue = {
            last: null,
            dispatch: null
          }),
          o = s.dispatch || (s.dispatch = en.bind(null, i, s));
        if (null !== t8) {
          var u = t8.get(s);
          if (void 0 !== u) {
            t8.delete(s);
            var a = t6.memoizedState,
              l = u;
            do a = t(a, l.action), l = l.next; while (null !== l);
            t6.memoizedState = a
          }
        }
        return [t6.memoizedState, o]
      }

      function ee(t, e) {
        t1();
        var r = void 0 === e ? null : e,
          n = (t6 = t7()).memoizedState;
        if (null !== n && null !== r && function (t, e) {
            if (null === e) return !1;
            for (var r = 0; r < e.length && r < t.length; r++)
              if (!tX(t[r], e[r])) return !1;
            return !0
          }(r, n[1])) return n[0];
        var i = t();
        return t6.memoizedState = [i, r], i
      }

      function er() {
        return t1(), (t6 = t7()).memoizedState || (t6.memoizedState = "R:" + (tJ.current.uniqueID++).toString(36)), t6.memoizedState
      }

      function en(t, e, r) {
        if (t === tY) {
          t3 = !0;
          var n = {
            action: r,
            next: null
          };
          null === t8 && (t8 = new Map);
          var i = t8.get(e);
          if (void 0 === i) t8.set(e, n);
          else {
            for (var s = i; null !== s.next;) s = s.next;
            s.next = n
          }
        }
      }

      function ei() {}

      function es(t) {
        t()
      }
      var eo = {
          readContext: function (t, e) {
            return tH(t)
          },
          useSyncExternalStore: function (t, e, r) {
            return e()
          },
          useContext: function (t, e) {
            return t1(), tH(t)
          },
          useMemo: ee,
          useReducer: et,
          useRef: function (t) {
            t1();
            var e = (t6 = t7()).memoizedState;
            if (null !== e) return e;
            var r = {
              current: t
            };
            return t6.memoizedState = r, r
          },
          useState: function (t) {
            return et(t5, t)
          },
          useCallback: function (t, e) {
            return ee(function () {
              return t
            }, e)
          },
          useMutableSource: function (t, e, r) {
            return t1(), e(t._source)
          },
          useTransition: function () {
            return [es, !1]
          },
          useDeferredValue: function (t) {
            return t
          },
          useOpaqueIdentifier: er,
          useId: er,
          unstable_useId: er,
          unstable_useOpaqueIdentifier: er,
          useLayoutEffect: ei,
          useImperativeHandle: ei,
          useEffect: ei,
          useDebugValue: ei
        },
        eu = function (t) {
          var e = t._payload || t;
          return 0 === e._status ? e._result : 1 === e._status ? Promise.resolve(e._result) : 2 === e._status ? Promise.reject(e._result) : (e._status = 0, e._result = (e._ctor || e._result)().then(function (t) {
            e._result = t, "function" == typeof t ? e._status = 1 : null !== t && "object" == typeof t && "function" == typeof t.default ? (e._result = t.default, e._status = 1) : e._status = 2
          }).catch(function (t) {
            return e._status = 2, e._result = t, Promise.reject(t)
          }))
        },
        ea = function (t, e, r) {
          var n = t._payload || t;
          return 1 === n._status ? (0, E.createElement)(n._result, e) : null
        },
        el = function (t, e, r) {
          return {
            contextMap: tD(),
            contextStore: t_(),
            id: t1(),
            hook: t2,
            kind: "frame.hooks",
            errorFrame: tZ(),
            thenable: r,
            props: e,
            type: t
          }
        },
        ec = function (t, e, r) {
          try {
            return function (t, e, r) {
              t6 = null;
              for (var n = t(e, r); t9 < 25 && t3;) t3 = !1, t9 += 1, t6 = null, n = t(e, r);
              return t9 = 0, t8 = null, t6 = null, n
            }(t, tk(e, t.defaultProps), tG(t))
          } catch (n) {
            if ("function" != typeof n.then) throw n;
            return r.push(el(t, e, n)), null
          }
        };

      function ef() {
        return !1
      }

      function eh() {
        return null
      }
      var ed = function (t, e) {
          var r, n = {
              _thrown: 0,
              queue: r = [],
              isMounted: ef,
              enqueueForceUpdate: eh,
              enqueueReplaceState: function (t, e) {
                t._isMounted && (r.length = 0, r.push(e))
              },
              enqueueSetState: function (t, e) {
                t._isMounted && r.push(e)
              }
            },
            i = tk(e, t.defaultProps),
            s = tG(t),
            o = new t(i, s, n);
          if (o.props = i, o.context = s, o.updater = n, o._isMounted = !0, void 0 === o.state && (o.state = null), "function" == typeof o.componentDidCatch || "function" == typeof t.getDerivedStateFromError) {
            var u = ep(t, o, null);
            u.errorFrame = u, tW(u)
          }
          if ("function" == typeof t.getDerivedStateFromProps) {
            var a = (0, t.getDerivedStateFromProps)(o.props, o.state);
            null != a && (o.state = tn({}, o.state, a))
          } else "function" == typeof o.componentWillMount ? o.componentWillMount() : "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount();
          return o
        },
        ep = function (t, e, r) {
          return {
            contextMap: tD(),
            contextStore: t_(),
            errorFrame: tZ(),
            thenable: r,
            kind: "frame.class",
            error: null,
            instance: e,
            type: t
          }
        },
        ey = function (t, e, r) {
          ! function (t) {
            var e = t.updater.queue;
            if (e.length > 0) {
              for (var r = tn({}, t.state), n = 0, i = e.length; n < i; n++) {
                var s = e[n],
                  o = "function" == typeof s ? s.call(t, r, t.props, t.context) : s;
                null !== o && tn(r, o)
              }
              t.state = r, e.length = 0
            }
          }(e);
          var n = null;
          try {
            n = e.render()
          } catch (n) {
            if ("function" != typeof n.then) throw n;
            return r.push(ep(t, e, n)), null
          }
          if (void 0 !== t.childContextTypes && "function" == typeof e.getChildContext) {
            var i = e.getChildContext();
            null !== i && "object" == typeof i && function (t) {
              for (var e in tA = {}, t) tA[e] = tT[e], tT[e] = t[e]
            }(i)
          }
          if ("function" != typeof e.getDerivedStateFromProps && ("function" == typeof e.componentWillMount || "function" == typeof e.UNSAFE_componentWillMount) && "function" == typeof e.componentWillUnmount) try {
            e.componentWillUnmount()
          } catch (t) {}
          return e._isMounted = !1, n
        },
        em = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,
        ev = "function" == typeof setImmediate,
        eb = function (t, e, r, n, i) {
          var s, o, u;
          return t.prototype && t.prototype.isReactComponent ? (t0(null), (o = n(i, s = ed(t, e))) ? (r.push(ep(t, s, o)), null) : ey(t, s, r)) : (t4(null), t0({}), (u = n(i)) ? (r.push(el(t, e, u)), null) : ec(t, e, r))
        },
        eg = function (t, e, r) {
          switch (function (t) {
            switch (t.$$typeof) {
              case tb:
                return tb;
              case tv:
                switch (t.type) {
                  case tO:
                    return tO;
                  case tg:
                    return tg;
                  case tx:
                    return tx;
                  case tw:
                    return tw;
                  case tR:
                    return tR;
                  default:
                    switch (t.type && t.type.$$typeof) {
                      case tq:
                        return tq;
                      case tP:
                        return tP;
                      case tC:
                        return tC;
                      case tS:
                        return tS;
                      case tE:
                        return tE;
                      default:
                        return tv
                    }
                }
                default:
                  return
            }
          }(t)) {
            case tR:
            case tw:
            case tO:
            case tx:
            case tg:
              return tQ(t.props.children);
            case tS:
              var n, i, s, o, u = t.props,
                a = u.children;
              return s = t.type._context, o = u.value, tF = [s, tM.get(s)], tM.set(s, o), tQ(a);
            case tC:
              var l = t.props.children;
              if ("function" != typeof l) return [];
              var c = t.type;
              return tQ(l(tH("object" == typeof c._context ? c._context : c)));
            case tq:
              return tQ((n = t.type, i = t.props, (n._payload || n)._status <= 0 ? (e.push({
                kind: "frame.lazy",
                contextMap: tD(),
                contextStore: t_(),
                errorFrame: tZ(),
                thenable: eu(n),
                props: i,
                type: n
              }), null) : ea(n, i)));
            case tP:
              return tQ((0, E.createElement)(t.type.type, t.props));
            case tE:
              var f = t.type,
                h = f.render,
                d = tk(t.props, f.defaultProps);
              return tQ((0, E.createElement)(h, d));
            case tv:
              if ("string" == typeof t.type) return tQ(t.props.children);
              return tQ(eb(t.type, t.props, e, r, t));
            default:
              return []
          }
        },
        ew = function (t, e, r, n, i, s) {
          var o = em.current,
            u = Date.now();
          try {
            for (em.current = eo; t.length > 0;) {
              var a = t[t.length - 1].shift();
              if (void 0 !== a) {
                var l = eg(a, i, s);
                t.push(l), e.push(tU()), r.push(tN()), n.push(tZ())
              } else t.pop(), tV(e.pop()), tK(r.pop()), tW(n.pop());
              if (ev && Date.now() - u > 5) return !0
            }
            return !1
          } catch (t) {
            var c = tZ();
            if (!c) throw t;
            return c.error = t, i.unshift(c), !1
          } finally {
            em.current = o
          }
        },
        ex = function (t, e, r, n) {
          return {
            contextMap: tD(),
            contextStore: t_(),
            errorFrame: tZ(),
            thenable: null,
            kind: "frame.yield",
            traversalChildren: t,
            traversalMap: e,
            traversalStore: r,
            traversalErrorFrame: n
          }
        },
        eS = function (t, e, r) {
          var n = [t],
            i = [tU()],
            s = [tN()],
            o = [tZ()];
          ew(n, i, s, o, e, r) && e.unshift(ex(n, i, s, o))
        },
        eC = function (t, e, r) {
          if ("frame.yield" === t.kind) t0(null), tL(t.contextMap), tz(t.contextStore), tW(t.errorFrame), ew(t.traversalChildren, t.traversalMap, t.traversalStore, t.traversalErrorFrame, e, r) && e.unshift(ex(t.traversalChildren, t.traversalMap, t.traversalStore, t.traversalErrorFrame));
          else {
            var n = em.current,
              i = null;
            em.current = eo;
            try {
              "frame.class" === t.kind ? i = function (t, e) {
                if (t0(null), tL(e.contextMap), tz(e.contextStore), tW(e.errorFrame), e.error) {
                  if (++e.instance.updater._thrown >= 25) return null;
                  e.instance._isMounted = !0, "function" == typeof e.instance.componentDidCatch && e.instance.componentDidCatch(e.error), "function" == typeof e.type.getDerivedStateFromError && e.instance.updater.enqueueSetState(e.instance, e.type.getDerivedStateFromError(e.error))
                }
                return ey(e.type, e.instance, t)
              }(e, t) : "frame.hooks" === t.kind ? (t4(t.hook), t0(t.id), tL(t.contextMap), tz(t.contextStore), tW(t.errorFrame), i = ec(t.type, t.props, e)) : "frame.lazy" === t.kind && (t0(null), tL(t.contextMap), tz(t.contextStore), tW(t.errorFrame), i = ea(t.type, t.props))
            } catch (t) {
              var s = tZ();
              if (!s) throw t;
              s.error = t, e.unshift(s), i = null
            } finally {
              em.current = n
            }
            eS(tQ(i), e, r)
          }
        };

      function eO(t, e) {
        setImmediate(t)
      }
      var eE = function (t, e, r) {
          var n = t.shift();
          return n ? (ev && "frame.yield" === n.kind && (n.thenable = new Promise(eO)), Promise.resolve(n.thenable).then(function () {
            return tJ.current = r, eC(n, t, e), eE(t, e, r)
          }, function (r) {
            if (!n.errorFrame) throw r;
            n.errorFrame.error = r, eC(n.errorFrame, t, e)
          })) : Promise.resolve()
        },
        eR = function () {},
        eP = function (t, e) {
          e || (e = eR);
          var r = [],
            n = tJ.current = {
              uniqueID: 0
            };
          tL({}), tz(new Map), tW(null);
          try {
            eS(tQ(t), r, e)
          } catch (t) {
            return Promise.reject(t)
          }
          return eE(r, e, n)
        };

      function eq(t) {
        let e = t.state.error;
        if (e instanceof Error && "TRPCClientError" === e.name) {
          let r = {
            message: e.message,
            data: e.data,
            shape: e.shape
          };
          return {
            ...t,
            state: {
              ...t.state,
              error: r
            }
          }
        }
        return t
      }
      var eI = function () {
          function t() {
            this.keyToValue = new Map, this.valueToKey = new Map
          }
          return t.prototype.set = function (t, e) {
            this.keyToValue.set(t, e), this.valueToKey.set(e, t)
          }, t.prototype.getByKey = function (t) {
            return this.keyToValue.get(t)
          }, t.prototype.getByValue = function (t) {
            return this.valueToKey.get(t)
          }, t.prototype.clear = function () {
            this.keyToValue.clear(), this.valueToKey.clear()
          }, t
        }(),
        ej = function () {
          function t(t) {
            this.generateIdentifier = t, this.kv = new eI
          }
          return t.prototype.register = function (t, e) {
            this.kv.getByValue(t) || (e || (e = this.generateIdentifier(t)), this.kv.set(e, t))
          }, t.prototype.clear = function () {
            this.kv.clear()
          }, t.prototype.getIdentifier = function (t) {
            return this.kv.getByValue(t)
          }, t.prototype.getValue = function (t) {
            return this.kv.getByKey(t)
          }, t
        }(),
        eQ = (C = function (t, e) {
          return (C = Object.setPrototypeOf || ({
            __proto__: []
          }) instanceof Array && function (t, e) {
            t.__proto__ = e
          } || function (t, e) {
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
          })(t, e)
        }, function (t, e) {
          if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function r() {
            this.constructor = t
          }
          C(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }),
        ek = function (t) {
          function e() {
            var e = t.call(this, function (t) {
              return t.name
            }) || this;
            return e.classToAllowedProps = new Map, e
          }
          return eQ(e, t), e.prototype.register = function (e, r) {
            "object" == typeof r ? (r.allowProps && this.classToAllowedProps.set(e, r.allowProps), t.prototype.register.call(this, e, r.identifier)) : t.prototype.register.call(this, e, r)
          }, e.prototype.getAllowedProps = function (t) {
            return this.classToAllowedProps.get(t)
          }, e
        }(ej),
        eM = function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n, i, s = r.call(t),
            o = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(n = s.next()).done;) o.push(n.value)
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              n && !n.done && (r = s.return) && r.call(s)
            } finally {
              if (i) throw i.error
            }
          }
          return o
        };

      function eT(t, e) {
        Object.entries(t).forEach(function (t) {
          var r = eM(t, 2),
            n = r[0];
          return e(r[1], n)
        })
      }

      function eA(t, e) {
        return -1 !== t.indexOf(e)
      }

      function eF(t, e) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          if (e(n)) return n
        }
      }
      var eD = function () {
          function t() {
            this.transfomers = {}
          }
          return t.prototype.register = function (t) {
            this.transfomers[t.name] = t
          }, t.prototype.findApplicable = function (t) {
            return function (t, e) {
              var r = function (t) {
                if ("values" in Object) return Object.values(t);
                var e = [];
                for (var r in t) t.hasOwnProperty(r) && e.push(t[r]);
                return e
              }(t);
              if ("find" in r) return r.find(e);
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                if (e(i)) return i
              }
            }(this.transfomers, function (e) {
              return e.isApplicable(t)
            })
          }, t.prototype.findByName = function (t) {
            return this.transfomers[t]
          }, t
        }(),
        e_ = function (t) {
          return void 0 === t
        },
        eU = function (t) {
          return "object" == typeof t && null !== t && t !== Object.prototype && (null === Object.getPrototypeOf(t) || t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype)
        },
        eN = function (t) {
          return eU(t) && 0 === Object.keys(t).length
        },
        eV = function (t) {
          return Array.isArray(t)
        },
        eK = function (t) {
          return t instanceof Map
        },
        eL = function (t) {
          return t instanceof Set
        },
        ez = function (t) {
          return "Symbol" === Object.prototype.toString.call(t).slice(8, -1)
        },
        eH = function (t) {
          return "number" == typeof t && isNaN(t)
        },
        eB = function (t) {
          return "boolean" == typeof t || null === t || e_(t) || "number" == typeof t && !isNaN(t) || "string" == typeof t || ez(t)
        },
        eG = function (t) {
          return t.replace(/\./g, "\\.")
        },
        e$ = function (t) {
          return t.map(String).map(eG).join(".")
        },
        eZ = function (t) {
          for (var e = [], r = "", n = 0; n < t.length; n++) {
            var i = t.charAt(n);
            if ("\\" === i && "." === t.charAt(n + 1)) {
              r += ".", n++;
              continue
            }
            if ("." === i) {
              e.push(r), r = "";
              continue
            }
            r += i
          }
          var s = r;
          return e.push(s), e
        },
        eW = function () {
          return (eW = Object.assign || function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        eJ = function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n, i, s = r.call(t),
            o = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(n = s.next()).done;) o.push(n.value)
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              n && !n.done && (r = s.return) && r.call(s)
            } finally {
              if (i) throw i.error
            }
          }
          return o
        },
        eX = function (t, e) {
          for (var r = 0, n = e.length, i = t.length; r < n; r++, i++) t[i] = e[r];
          return t
        };

      function eY(t, e, r, n) {
        return {
          isApplicable: t,
          annotation: e,
          transform: r,
          untransform: n
        }
      }
      var e0 = [eY(e_, "undefined", function () {
        return null
      }, function () {}), eY(function (t) {
        return "bigint" == typeof t
      }, "bigint", function (t) {
        return t.toString()
      }, function (t) {
        return "undefined" != typeof BigInt ? BigInt(t) : (console.error("Please add a BigInt polyfill."), t)
      }), eY(function (t) {
        return t instanceof Date && !isNaN(t.valueOf())
      }, "Date", function (t) {
        return t.toISOString()
      }, function (t) {
        return new Date(t)
      }), eY(function (t) {
        return t instanceof Error
      }, "Error", function (t, e) {
        var r = {
          name: t.name,
          message: t.message
        };
        return e.allowedErrorProps.forEach(function (e) {
          r[e] = t[e]
        }), r
      }, function (t, e) {
        var r = Error(t.message);
        return r.name = t.name, r.stack = t.stack, e.allowedErrorProps.forEach(function (e) {
          r[e] = t[e]
        }), r
      }), eY(function (t) {
        return t instanceof RegExp
      }, "regexp", function (t) {
        return "" + t
      }, function (t) {
        return RegExp(t.slice(1, t.lastIndexOf("/")), t.slice(t.lastIndexOf("/") + 1))
      }), eY(eL, "set", function (t) {
        return eX([], eJ(t.values()))
      }, function (t) {
        return new Set(t)
      }), eY(eK, "map", function (t) {
        return eX([], eJ(t.entries()))
      }, function (t) {
        return new Map(t)
      }), eY(function (t) {
        var e;
        return eH(t) || (e = t) === 1 / 0 || e === -1 / 0
      }, "number", function (t) {
        return eH(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity"
      }, Number), eY(function (t) {
        return 0 === t && 1 / t == -1 / 0
      }, "number", function () {
        return "-0"
      }, Number), eY(function (t) {
        return t instanceof URL
      }, "URL", function (t) {
        return t.toString()
      }, function (t) {
        return new URL(t)
      })];

      function e1(t, e, r, n) {
        return {
          isApplicable: t,
          annotation: e,
          transform: r,
          untransform: n
        }
      }
      var e2 = e1(function (t, e) {
          return !!ez(t) && !!e.symbolRegistry.getIdentifier(t)
        }, function (t, e) {
          return ["symbol", e.symbolRegistry.getIdentifier(t)]
        }, function (t) {
          return t.description
        }, function (t, e, r) {
          var n = r.symbolRegistry.getValue(e[1]);
          if (!n) throw Error("Trying to deserialize unknown symbol");
          return n
        }),
        e6 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce(function (t, e) {
          return t[e.name] = e, t
        }, {}),
        e3 = e1(function (t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }, function (t) {
          return ["typed-array", t.constructor.name]
        }, function (t) {
          return eX([], eJ(t))
        }, function (t, e) {
          var r = e6[e[1]];
          if (!r) throw Error("Trying to deserialize unknown typed array");
          return new r(t)
        });

      function e8(t, e) {
        return null != t && !!t.constructor && !!e.classRegistry.getIdentifier(t.constructor)
      }
      var e9 = e1(e8, function (t, e) {
          return ["class", e.classRegistry.getIdentifier(t.constructor)]
        }, function (t, e) {
          var r = e.classRegistry.getAllowedProps(t.constructor);
          if (!r) return eW({}, t);
          var n = {};
          return r.forEach(function (e) {
            n[e] = t[e]
          }), n
        }, function (t, e, r) {
          var n = r.classRegistry.getValue(e[1]);
          if (!n) throw Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
          return Object.assign(Object.create(n.prototype), t)
        }),
        e4 = e1(function (t, e) {
          return !!e.customTransformerRegistry.findApplicable(t)
        }, function (t, e) {
          return ["custom", e.customTransformerRegistry.findApplicable(t).name]
        }, function (t, e) {
          return e.customTransformerRegistry.findApplicable(t).serialize(t)
        }, function (t, e, r) {
          var n = r.customTransformerRegistry.findByName(e[1]);
          if (!n) throw Error("Trying to deserialize unknown custom value");
          return n.deserialize(t)
        }),
        e7 = [e9, e2, e4, e3],
        e5 = function (t, e) {
          var r = eF(e7, function (r) {
            return r.isApplicable(t, e)
          });
          if (r) return {
            value: r.transform(t, e),
            type: r.annotation(t, e)
          };
          var n = eF(e0, function (r) {
            return r.isApplicable(t, e)
          });
          if (n) return {
            value: n.transform(t, e),
            type: n.annotation
          }
        },
        rt = {};
      e0.forEach(function (t) {
        rt[t.annotation] = t
      });
      var re = function (t, e, r) {
          if (eV(e)) switch (e[0]) {
            case "symbol":
              return e2.untransform(t, e, r);
            case "class":
              return e9.untransform(t, e, r);
            case "custom":
              return e4.untransform(t, e, r);
            case "typed-array":
              return e3.untransform(t, e, r);
            default:
              throw Error("Unknown transformation: " + e)
          } else {
            var n = rt[e];
            if (!n) throw Error("Unknown transformation: " + e);
            return n.untransform(t, r)
          }
        },
        rr = function (t, e) {
          for (var r = t.keys(); e > 0;) r.next(), e--;
          return r.next().value
        };

      function rn(t) {
        if (eA(t, "__proto__")) throw Error("__proto__ is not allowed as a property");
        if (eA(t, "prototype")) throw Error("prototype is not allowed as a property");
        if (eA(t, "constructor")) throw Error("constructor is not allowed as a property")
      }
      var ri = function (t, e, r) {
          if (rn(e), 0 === e.length) return r(t);
          for (var n = t, i = 0; i < e.length - 1; i++) {
            var s = e[i];
            if (eV(n)) n = n[+s];
            else if (eU(n)) n = n[s];
            else if (eL(n)) {
              var o = +s;
              n = rr(n, o)
            } else if (eK(n)) {
              if (i === e.length - 2) break;
              var o = +s,
                u = 0 == +e[++i] ? "key" : "value",
                a = rr(n, o);
              switch (u) {
                case "key":
                  n = a;
                  break;
                case "value":
                  n = n.get(a)
              }
            }
          }
          var l = e[e.length - 1];
          if ((eV(n) || eU(n)) && (n[l] = r(n[l])), eL(n)) {
            var c = rr(n, +l),
              f = r(c);
            c !== f && (n.delete(c), n.add(f))
          }
          if (eK(n)) {
            var o = +e[e.length - 2],
              h = rr(n, o),
              u = 0 == +l ? "key" : "value";
            switch (u) {
              case "key":
                var d = r(h);
                n.set(d, n.get(h)), d !== h && n.delete(h);
                break;
              case "value":
                n.set(h, r(n.get(h)))
            }
          }
          return t
        },
        rs = function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n, i, s = r.call(t),
            o = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(n = s.next()).done;) o.push(n.value)
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              n && !n.done && (r = s.return) && r.call(s)
            } finally {
              if (i) throw i.error
            }
          }
          return o
        },
        ro = function (t, e) {
          for (var r = 0, n = e.length, i = t.length; r < n; r++, i++) t[i] = e[r];
          return t
        },
        ru = function (t, e, r, n, i) {
          if (void 0 === n && (n = []), void 0 === i && (i = []), eB(t) || (s = t, o = n, (a = (u = e).get(s)) ? a.push(o) : u.set(s, [o])), !(eU(t) || eV(t) || eK(t) || eL(t) || e8(t, r))) {
            var s, o, u, a, l, c = e5(t, r);
            return c ? {
              transformedValue: c.value,
              annotations: [c.type]
            } : {
              transformedValue: t
            }
          }
          if (eA(i, t)) return {
            transformedValue: null
          };
          var f = e5(t, r),
            h = null !== (l = null == f ? void 0 : f.value) && void 0 !== l ? l : t;
          eB(t) || (i = ro(ro([], rs(i)), [t]));
          var d = eV(h) ? [] : {},
            p = {};
          return (eT(h, function (t, s) {
            var o = ru(t, e, r, ro(ro([], rs(n)), [s]), i);
            d[s] = o.transformedValue, eV(o.annotations) ? p[s] = o.annotations : eU(o.annotations) && eT(o.annotations, function (t, e) {
              p[eG(s) + "." + e] = t
            })
          }), eN(p)) ? {
            transformedValue: d,
            annotations: f ? [f.type] : void 0
          } : {
            transformedValue: d,
            annotations: f ? [f.type, p] : p
          }
        };

      function ra(t) {
        return Object.prototype.toString.call(t).slice(8, -1)
      }

      function rl(t) {
        return "Array" === ra(t)
      }
      var rc = function () {
          return (rc = Object.assign || function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
          }).apply(this, arguments)
        },
        rf = function (t, e) {
          var r = "function" == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n, i, s = r.call(t),
            o = [];
          try {
            for (;
              (void 0 === e || e-- > 0) && !(n = s.next()).done;) o.push(n.value)
          } catch (t) {
            i = {
              error: t
            }
          } finally {
            try {
              n && !n.done && (r = s.return) && r.call(s)
            } finally {
              if (i) throw i.error
            }
          }
          return o
        },
        rh = function (t, e) {
          for (var r = 0, n = e.length, i = t.length; r < n; r++, i++) t[i] = e[r];
          return t
        },
        rd = function () {
          function t() {
            this.classRegistry = new ek, this.symbolRegistry = new ej(function (t) {
              var e;
              return null !== (e = t.description) && void 0 !== e ? e : ""
            }), this.customTransformerRegistry = new eD, this.allowedErrorProps = []
          }
          return t.prototype.serialize = function (t) {
            var e, r, n = new Map,
              i = ru(t, n, this),
              s = {
                json: i.transformedValue
              };
            i.annotations && (s.meta = rc(rc({}, s.meta), {
              values: i.annotations
            }));
            var o = (e = {}, r = void 0, (n.forEach(function (t) {
              if (!(t.length <= 1)) {
                var n = rs(t.map(function (t) {
                    return t.map(String)
                  }).sort(function (t, e) {
                    return t.length - e.length
                  })),
                  i = n[0],
                  s = n.slice(1);
                0 === i.length ? r = s.map(e$) : e[e$(i)] = s.map(e$)
              }
            }), r) ? eN(e) ? [r] : [r, e] : eN(e) ? void 0 : e);
            return o && (s.meta = rc(rc({}, s.meta), {
              referentialEqualities: o
            })), s
          }, t.prototype.deserialize = function (t) {
            var e, r, n, i = t.json,
              s = t.meta,
              o = function t(e, r = {}) {
                if (rl(e)) return e.map(e => t(e, r));
                if (! function (t) {
                    if ("Object" !== ra(t)) return !1;
                    let e = Object.getPrototypeOf(t);
                    return e.constructor === Object && e === Object.prototype
                  }(e)) return e;
                let n = Object.getOwnPropertyNames(e),
                  i = Object.getOwnPropertySymbols(e);
                return [...n, ...i].reduce((n, i) => {
                  if (rl(r.props) && !r.props.includes(i)) return n;
                  let s = e[i],
                    o = t(s, r);
                  return function (t, e, r, n, i) {
                    let s = ({}).propertyIsEnumerable.call(n, e) ? "enumerable" : "nonenumerable";
                    "enumerable" === s && (t[e] = r), i && "nonenumerable" === s && Object.defineProperty(t, e, {
                      value: r,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    })
                  }(n, i, o, e, r.nonenumerable), n
                }, {})
              }(i);
            return (null == s ? void 0 : s.values) && (e = o, r = s.values, n = this, function t(e, r, n) {
              if (void 0 === n && (n = []), e) {
                if (!eV(e)) {
                  eT(e, function (e, i) {
                    return t(e, r, ro(ro([], rs(n)), rs(eZ(i))))
                  });
                  return
                }
                var i = rs(e, 2),
                  s = i[0],
                  o = i[1];
                o && eT(o, function (e, i) {
                  t(e, r, ro(ro([], rs(n)), rs(eZ(i))))
                }), r(s, n)
              }
            }(r, function (t, r) {
              e = ri(e, r, function (e) {
                return re(e, t, n)
              })
            }), o = e), (null == s ? void 0 : s.referentialEqualities) && (o = function (t, e) {
              function r(e, r) {
                var n, i, s = (n = t, rn(i = eZ(r)), i.forEach(function (t) {
                  n = n[t]
                }), n);
                e.map(eZ).forEach(function (e) {
                  t = ri(t, e, function () {
                    return s
                  })
                })
              }
              if (eV(e)) {
                var n = rs(e, 2),
                  i = n[0],
                  s = n[1];
                i.forEach(function (e) {
                  t = ri(t, eZ(e), function () {
                    return t
                  })
                }), s && eT(s, r)
              } else eT(e, r);
              return t
            }(o, s.referentialEqualities)), o
          }, t.prototype.stringify = function (t) {
            return JSON.stringify(this.serialize(t))
          }, t.prototype.parse = function (t) {
            return this.deserialize(JSON.parse(t))
          }, t.prototype.registerClass = function (t, e) {
            this.classRegistry.register(t, e)
          }, t.prototype.registerSymbol = function (t, e) {
            this.symbolRegistry.register(t, e)
          }, t.prototype.registerCustom = function (t, e) {
            this.customTransformerRegistry.register(rc({
              name: e
            }, t))
          }, t.prototype.allowErrorProps = function () {
            for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            (t = this.allowedErrorProps).push.apply(t, rh([], rf(e)))
          }, t.defaultInstance = new t, t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance), t.deserialize = t.defaultInstance.deserialize.bind(t.defaultInstance), t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance), t.parse = t.defaultInstance.parse.bind(t.defaultInstance), t.registerClass = t.defaultInstance.registerClass.bind(t.defaultInstance), t.registerSymbol = t.defaultInstance.registerSymbol.bind(t.defaultInstance), t.registerCustom = t.defaultInstance.registerCustom.bind(t.defaultInstance), t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(t.defaultInstance), t
        }();
      rd.serialize, rd.deserialize, rd.stringify, rd.parse, r(83454);
      let rp = () => "",
        ry = function (t) {
          let e = tt({
              unstable_overrides: t.unstable_overrides
            }),
            r = function (t) {
              let {
                config: e
              } = t;
              return r => {
                let n = function (t) {
                    let e = tt(t),
                      r = v(t => "useContext" === t ? () => {
                        let t = e.useContext();
                        return (0, E.useMemo)(() => J(t), [t])
                      } : e.hasOwnProperty(t) ? e[t] : $(t, e));
                    return {
                      ...e,
                      proxy: r
                    }
                  }({
                    unstable_overrides: t.unstable_overrides
                  }),
                  i = i => {
                    let [s] = (0, E.useState)(() => {
                      if (i.trpc) return i.trpc;
                      let r = e({}),
                        s = tr(r),
                        o = n.createClient(r);
                      return {
                        abortOnUnmount: r.abortOnUnmount,
                        queryClient: s,
                        trpcClient: o,
                        ssrState: !!t.ssr && "mounting",
                        ssrContext: null
                      }
                    }), {
                      queryClient: o,
                      trpcClient: u,
                      ssrState: a,
                      ssrContext: l
                    } = s, c = n.useDehydratedState(u, i.pageProps.trpcState);
                    return E.createElement(n.Provider, {
                      abortOnUnmount: s.abortOnUnmount ? ? !1,
                      client: u,
                      queryClient: o,
                      ssrState: a,
                      ssrContext: l
                    }, E.createElement(O.aH, {
                      client: o
                    }, E.createElement(P, {
                      state: c
                    }, E.createElement(r, Object.assign({}, i)))))
                  };
                (r.getInitialProps || t.ssr) && (i.getInitialProps = async n => {
                  let i = n.AppTree,
                    s = !!n.Component,
                    o = s ? n.ctx : n,
                    u = {};
                  if (r.getInitialProps) {
                    let t = await r.getInitialProps(n),
                      e = s ? t.pageProps ? ? {} : t;
                    u = {
                      ...e,
                      ...u
                    }
                  }
                  let a = t => s ? {
                    pageProps: t
                  } : t;
                  if ("undefined" != typeof window || !t.ssr) return a(u);
                  let l = e({
                      ctx: o
                    }),
                    c = x(l),
                    f = tr(l),
                    h = {
                      pageProps: u,
                      trpc: {
                        config: l,
                        trpcClient: c,
                        queryClient: f,
                        ssrState: "prepass",
                        ssrContext: o
                      }
                    };
                  for (; await eP((0, E.createElement)(i, h)), f.isFetching();) await new Promise(t => {
                    let e = f.getQueryCache().subscribe(r => {
                      0 === r ? .query.getObserversCount() && (t(), e())
                    })
                  });
                  let d = (0, R.D)(f, {
                      shouldDehydrateQuery: () => !0
                    }),
                    p = {
                      ...d,
                      queries: d.queries.map(eq),
                      mutations: d.mutations.map(eq)
                    };
                  u.trpcState = c.runtime.transformer.serialize(p);
                  let y = a(u),
                    m = t.responseMeta ? .({
                      ctx: o,
                      clientErrors: [...d.queries, ...d.mutations].map(t => t.state.error).flatMap(t => t instanceof Error && "TRPCClientError" === t.name ? [t] : [])
                    }) || {};
                  for (let [t, e] of Object.entries(m.headers || {})) "string" == typeof e && o.res ? .setHeader(t, e);
                  return m.status && o.res && (o.res.statusCode = m.status), y
                });
                let s = r.displayName || r.name || "Component";
                return i.displayName = `withTRPC(${s})`, i
              }
            }(t);
          return v(t => "useContext" === t ? () => {
            let t = e.useContext();
            return (0, E.useMemo)(() => J(t), [t])
          } : "withTRPC" === t ? r : $(t, e))
        }({
          config: () => ({
            transformer: rd,
            links: [function (t = {}) {
              let {
                enabled: e = () => !0
              } = t, {
                logger: r = g(t.console)
              } = t;
              return () => ({
                op: t,
                next: n
              }) => i(i => {
                var s;
                e({
                  ...t,
                  direction: "up"
                }) && r({
                  ...t,
                  direction: "up"
                });
                let o = Date.now();

                function u(n) {
                  let i = Date.now() - o;
                  e({
                    ...t,
                    direction: "down",
                    result: n
                  }) && r({
                    ...t,
                    direction: "down",
                    elapsedMs: i,
                    result: n
                  })
                }
                return n(t).pipe((s = {
                  next(t) {
                    u(t)
                  },
                  error(t) {
                    u(t)
                  }
                }, t => ({
                  subscribe: e => t.subscribe({
                    next(t) {
                      s.next ? .(t), e.next ? .(t)
                    },
                    error(t) {
                      s.error ? .(t), e.error ? .(t)
                    },
                    complete() {
                      s.complete ? .(), e.complete ? .()
                    }
                  })
                }))).subscribe(i)
              })
            }({
              enabled: t => "down" === t.direction && t.result instanceof Error
            }), p({
              url: "".concat(rp(), "/api/trpc")
            })]
          }),
          ssr: !1
        })
    },
    14222: function () {},
    77663: function (t) {
      ! function () {
        var e = {
            229: function (t) {
              var e, r, n, i = t.exports = {};

              function s() {
                throw Error("setTimeout has not been defined")
              }

              function o() {
                throw Error("clearTimeout has not been defined")
              }

              function u(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                  return e(t, 0)
                } catch (r) {
                  try {
                    return e.call(null, t, 0)
                  } catch (r) {
                    return e.call(this, t, 0)
                  }
                }
              }! function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : s
                } catch (t) {
                  e = s
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                  r = o
                }
              }();
              var a = [],
                l = !1,
                c = -1;

              function f() {
                l && n && (l = !1, n.length ? a = n.concat(a) : c = -1, a.length && h())
              }

              function h() {
                if (!l) {
                  var t = u(f);
                  l = !0;
                  for (var e = a.length; e;) {
                    for (n = a, a = []; ++c < e;) n && n[c].run();
                    c = -1, e = a.length
                  }
                  n = null, l = !1,
                    function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                      try {
                        r(t)
                      } catch (e) {
                        try {
                          return r.call(null, t)
                        } catch (e) {
                          return r.call(this, t)
                        }
                      }
                    }(t)
                }
              }

              function d(t, e) {
                this.fun = t, this.array = e
              }

              function p() {}
              i.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                a.push(new d(t, e)), 1 !== a.length || l || u(h)
              }, d.prototype.run = function () {
                this.fun.apply(null, this.array)
              }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = p, i.addListener = p, i.once = p, i.off = p, i.removeListener = p, i.removeAllListeners = p, i.emit = p, i.prependListener = p, i.prependOnceListener = p, i.listeners = function (t) {
                return []
              }, i.binding = function (t) {
                throw Error("process.binding is not supported")
              }, i.cwd = function () {
                return "/"
              }, i.chdir = function (t) {
                throw Error("process.chdir is not supported")
              }, i.umask = function () {
                return 0
              }
            }
          },
          r = {};

        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var s = r[t] = {
              exports: {}
            },
            o = !0;
          try {
            e[t](s, s.exports, n), o = !1
          } finally {
            o && delete r[t]
          }
          return s.exports
        }
        n.ab = "//";
        var i = n(229);
        t.exports = i
      }()
    },
    9008: function (t, e, r) {
      t.exports = r(83121)
    },
    53250: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var n = r(67294),
        i = "function" == typeof Object.is ? Object.is : function (t, e) {
          return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
        },
        s = n.useState,
        o = n.useEffect,
        u = n.useLayoutEffect,
        a = n.useDebugValue;

      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r)
        } catch (t) {
          return !0
        }
      }
      var c = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function (t, e) {
        return e()
      } : function (t, e) {
        var r = e(),
          n = s({
            inst: {
              value: r,
              getSnapshot: e
            }
          }),
          i = n[0].inst,
          c = n[1];
        return u(function () {
          i.value = r, i.getSnapshot = e, l(i) && c({
            inst: i
          })
        }, [t, r, e]), o(function () {
          return l(i) && c({
            inst: i
          }), t(function () {
            l(i) && c({
              inst: i
            })
          })
        }, [t]), a(r), r
      };
      e.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
    },
    61688: function (t, e, r) {
      "use strict";
      t.exports = r(53250)
    },
    15761: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return o
        }
      });
      var n = r(33989),
        i = r(32161);
      class s extends n.l {
        constructor() {
          super(), this.setup = t => {
            if (!i.sk && window.addEventListener) {
              let e = () => t();
              return window.addEventListener("visibilitychange", e, !1), window.addEventListener("focus", e, !1), () => {
                window.removeEventListener("visibilitychange", e), window.removeEventListener("focus", e)
              }
            }
          }
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var t;
            null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
          }
        }
        setEventListener(t) {
          var e;
          this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
          })
        }
        setFocused(t) {
          this.focused = t, t && this.onFocus()
        }
        onFocus() {
          this.listeners.forEach(t => {
            t()
          })
        }
        isFocused() {
          return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
        }
      }
      let o = new s
    },
    27224: function (t, e, r) {
      "use strict";

      function n(t) {
        return t.state.isPaused
      }

      function i(t) {
        return "success" === t.state.status
      }

      function s(t, e = {}) {
        let r = [],
          s = [];
        if (!1 !== e.dehydrateMutations) {
          let i = e.shouldDehydrateMutation || n;
          t.getMutationCache().getAll().forEach(t => {
            i(t) && r.push({
              mutationKey: t.options.mutationKey,
              state: t.state
            })
          })
        }
        if (!1 !== e.dehydrateQueries) {
          let r = e.shouldDehydrateQuery || i;
          t.getQueryCache().getAll().forEach(t => {
            r(t) && s.push({
              state: t.state,
              queryKey: t.queryKey,
              queryHash: t.queryHash
            })
          })
        }
        return {
          mutations: r,
          queries: s
        }
      }

      function o(t, e, r) {
        if ("object" != typeof e || null === e) return;
        let n = t.getMutationCache(),
          i = t.getQueryCache(),
          s = e.mutations || [],
          o = e.queries || [];
        s.forEach(e => {
          var i;
          n.build(t, {
            ...null == r ? void 0 : null == (i = r.defaultOptions) ? void 0 : i.mutations,
            mutationKey: e.mutationKey
          }, e.state)
        }), o.forEach(e => {
          var n;
          let s = i.get(e.queryHash);
          if (s) {
            s.state.dataUpdatedAt < e.state.dataUpdatedAt && s.setState(e.state);
            return
          }
          i.build(t, {
            ...null == r ? void 0 : null == (n = r.defaultOptions) ? void 0 : n.queries,
            queryKey: e.queryKey,
            queryHash: e.queryHash
          }, e.state)
        })
      }
      r.d(e, {
        D: function () {
          return s
        },
        Z: function () {
          return o
        }
      })
    },
    9499: function (t, e, r) {
      "use strict";

      function n() {
        return {
          onFetch: t => {
            t.fetchFn = () => {
              var e, r, n, o, u, a;
              let l;
              let c = null == (e = t.fetchOptions) ? void 0 : null == (r = e.meta) ? void 0 : r.refetchPage,
                f = null == (n = t.fetchOptions) ? void 0 : null == (o = n.meta) ? void 0 : o.fetchMore,
                h = null == f ? void 0 : f.pageParam,
                d = (null == f ? void 0 : f.direction) === "forward",
                p = (null == f ? void 0 : f.direction) === "backward",
                y = (null == (u = t.state.data) ? void 0 : u.pages) || [],
                m = (null == (a = t.state.data) ? void 0 : a.pageParams) || [],
                v = m,
                b = !1,
                g = e => {
                  Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => {
                      var e, r;
                      return null != (e = t.signal) && e.aborted ? b = !0 : null == (r = t.signal) || r.addEventListener("abort", () => {
                        b = !0
                      }), t.signal
                    }
                  })
                },
                w = t.options.queryFn || (() => Promise.reject("Missing queryFn")),
                x = (t, e, r, n) => (v = n ? [e, ...v] : [...v, e], n ? [r, ...t] : [...t, r]),
                S = (e, r, n, i) => {
                  if (b) return Promise.reject("Cancelled");
                  if (void 0 === n && !r && e.length) return Promise.resolve(e);
                  let s = {
                    queryKey: t.queryKey,
                    pageParam: n,
                    meta: t.options.meta
                  };
                  g(s);
                  let o = w(s),
                    u = Promise.resolve(o).then(t => x(e, n, t, i));
                  return u
                };
              if (y.length) {
                if (d) {
                  let e = void 0 !== h,
                    r = e ? h : i(t.options, y);
                  l = S(y, e, r)
                } else if (p) {
                  let e = void 0 !== h,
                    r = e ? h : s(t.options, y);
                  l = S(y, e, r, !0)
                } else {
                  v = [];
                  let e = void 0 === t.options.getNextPageParam,
                    r = !c || !y[0] || c(y[0], 0, y);
                  l = r ? S([], e, m[0]) : Promise.resolve(x([], m[0], y[0]));
                  for (let r = 1; r < y.length; r++) l = l.then(n => {
                    let s = !c || !y[r] || c(y[r], r, y);
                    if (s) {
                      let s = e ? m[r] : i(t.options, n);
                      return S(n, e, s)
                    }
                    return Promise.resolve(x(n, m[r], y[r]))
                  })
                }
              } else l = S([]);
              let C = l.then(t => ({
                pages: t,
                pageParams: v
              }));
              return C
            }
          }
        }
      }

      function i(t, e) {
        return null == t.getNextPageParam ? void 0 : t.getNextPageParam(e[e.length - 1], e)
      }

      function s(t, e) {
        return null == t.getPreviousPageParam ? void 0 : t.getPreviousPageParam(e[0], e)
      }

      function o(t, e) {
        if (t.getNextPageParam && Array.isArray(e)) {
          let r = i(t, e);
          return null != r && !1 !== r
        }
      }

      function u(t, e) {
        if (t.getPreviousPageParam && Array.isArray(e)) {
          let r = s(t, e);
          return null != r && !1 !== r
        }
      }
      r.d(e, {
        Gm: function () {
          return n
        },
        Qy: function () {
          return o
        },
        ZF: function () {
          return u
        }
      })
    },
    30819: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n
        }
      });
      let n = console
    },
    89886: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return a
        },
        m: function () {
          return u
        }
      });
      var n = r(30819),
        i = r(30081),
        s = r(89643),
        o = r(72379);
      class u extends s.F {
        constructor(t) {
          super(), this.options = {
            ...t.defaultOptions,
            ...t.options
          }, this.mutationId = t.mutationId, this.mutationCache = t.mutationCache, this.logger = t.logger || n._, this.observers = [], this.state = t.state || a(), this.updateCacheTime(this.options.cacheTime), this.scheduleGc()
        }
        get meta() {
          return this.options.meta
        }
        setState(t) {
          this.dispatch({
            type: "setState",
            state: t
          })
        }
        addObserver(t) {
          -1 === this.observers.indexOf(t) && (this.observers.push(t), this.clearGcTimeout(), this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
          }))
        }
        removeObserver(t) {
          this.observers = this.observers.filter(e => e !== t), this.scheduleGc(), this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
          })
        }
        optionalRemove() {
          this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
        }
        continue () {
          return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute()
        }
        async execute() {
          var t, e, r, n, i, s, u, a, l, c, f, h, d, p, y, m;
          let v = "loading" === this.state.status;
          try {
            if (!v) {
              this.dispatch({
                type: "loading",
                variables: this.options.variables
              }), await (null == (u = (a = this.mutationCache.config).onMutate) ? void 0 : u.call(a, this.state.variables, this));
              let t = await (null == (l = (c = this.options).onMutate) ? void 0 : l.call(c, this.state.variables));
              t !== this.state.context && this.dispatch({
                type: "loading",
                context: t,
                variables: this.state.variables
              })
            }
            let f = await (() => {
              var t;
              return this.retryer = (0, o.Mz)({
                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                onFail: (t, e) => {
                  this.dispatch({
                    type: "failed",
                    failureCount: t,
                    error: e
                  })
                },
                onPause: () => {
                  this.dispatch({
                    type: "pause"
                  })
                },
                onContinue: () => {
                  this.dispatch({
                    type: "continue"
                  })
                },
                retry: null != (t = this.options.retry) ? t : 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode
              }), this.retryer.promise
            })();
            return await (null == (t = (e = this.mutationCache.config).onSuccess) ? void 0 : t.call(e, f, this.state.variables, this.state.context, this)), await (null == (r = (n = this.options).onSuccess) ? void 0 : r.call(n, f, this.state.variables, this.state.context)), await (null == (i = (s = this.options).onSettled) ? void 0 : i.call(s, f, null, this.state.variables, this.state.context)), this.dispatch({
              type: "success",
              data: f
            }), f
          } catch (t) {
            try {
              throw await (null == (f = (h = this.mutationCache.config).onError) ? void 0 : f.call(h, t, this.state.variables, this.state.context, this)), await (null == (d = (p = this.options).onError) ? void 0 : d.call(p, t, this.state.variables, this.state.context)), await (null == (y = (m = this.options).onSettled) ? void 0 : y.call(m, void 0, t, this.state.variables, this.state.context)), t
            } finally {
              this.dispatch({
                type: "error",
                error: t
              })
            }
          }
        }
        dispatch(t) {
          this.state = (e => {
            switch (t.type) {
              case "failed":
                return {
                  ...e, failureCount: t.failureCount, failureReason: t.error
                };
              case "pause":
                return {
                  ...e, isPaused: !0
                };
              case "continue":
                return {
                  ...e, isPaused: !1
                };
              case "loading":
                return {
                  ...e, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !(0, o.Kw)(this.options.networkMode), status: "loading", variables: t.variables
                };
              case "success":
                return {
                  ...e, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                };
              case "error":
                return {
                  ...e, data: void 0, error: t.error, failureCount: e.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                };
              case "setState":
                return {
                  ...e, ...t.state
                }
            }
          })(this.state), i.V.batch(() => {
            this.observers.forEach(e => {
              e.onMutationUpdate(t)
            }), this.mutationCache.notify({
              mutation: this,
              type: "updated",
              action: t
            })
          })
        }
      }

      function a() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0
        }
      }
    },
    30081: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return i
        }
      });
      var n = r(32161);
      let i = function () {
        let t = [],
          e = 0,
          r = t => {
            t()
          },
          i = t => {
            t()
          },
          s = t => {
            let r;
            e++;
            try {
              r = t()
            } finally {
              --e || a()
            }
            return r
          },
          o = i => {
            e ? t.push(i) : (0, n.A4)(() => {
              r(i)
            })
          },
          u = t => (...e) => {
            o(() => {
              t(...e)
            })
          },
          a = () => {
            let e = t;
            t = [], e.length && (0, n.A4)(() => {
              i(() => {
                e.forEach(t => {
                  r(t)
                })
              })
            })
          },
          l = t => {
            r = t
          },
          c = t => {
            i = t
          };
        return {
          batch: s,
          batchCalls: u,
          schedule: o,
          setNotifyFunction: l,
          setBatchNotifyFunction: c
        }
      }()
    },
    96474: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return o
        }
      });
      var n = r(33989),
        i = r(32161);
      class s extends n.l {
        constructor() {
          super(), this.setup = t => {
            if (!i.sk && window.addEventListener) {
              let e = () => t();
              return window.addEventListener("online", e, !1), window.addEventListener("offline", e, !1), () => {
                window.removeEventListener("online", e), window.removeEventListener("offline", e)
              }
            }
          }
        }
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup)
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var t;
            null == (t = this.cleanup) || t.call(this), this.cleanup = void 0
          }
        }
        setEventListener(t) {
          var e;
          this.setup = t, null == (e = this.cleanup) || e.call(this), this.cleanup = t(t => {
            "boolean" == typeof t ? this.setOnline(t) : this.onOnline()
          })
        }
        setOnline(t) {
          this.online = t, t && this.onOnline()
        }
        onOnline() {
          this.listeners.forEach(t => {
            t()
          })
        }
        isOnline() {
          return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
        }
      }
      let o = new s
    },
    51767: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return m
        }
      });
      var n = r(32161),
        i = r(30819),
        s = r(30081),
        o = r(72379),
        u = r(89643);
      class a extends u.F {
        constructor(t) {
          super(), this.abortSignalConsumed = !1, this.defaultOptions = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.cache = t.cache, this.logger = t.logger || i._, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.initialState = t.state || function (t) {
            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
              r = void 0 !== e,
              n = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
            return {
              data: e,
              dataUpdateCount: 0,
              dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
              error: null,
              errorUpdateCount: 0,
              errorUpdatedAt: 0,
              fetchFailureCount: 0,
              fetchFailureReason: null,
              fetchMeta: null,
              isInvalidated: !1,
              status: r ? "success" : "loading",
              fetchStatus: "idle"
            }
          }(this.options), this.state = this.initialState
        }
        get meta() {
          return this.options.meta
        }
        setOptions(t) {
          this.options = {
            ...this.defaultOptions,
            ...t
          }, this.updateCacheTime(this.options.cacheTime)
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
        }
        setData(t, e) {
          let r = (0, n.oE)(this.state.data, t, this.options);
          return this.dispatch({
            data: r,
            type: "success",
            dataUpdatedAt: null == e ? void 0 : e.updatedAt,
            manual: null == e ? void 0 : e.manual
          }), r
        }
        setState(t, e) {
          this.dispatch({
            type: "setState",
            state: t,
            setStateOptions: e
          })
        }
        cancel(t) {
          var e;
          let r = this.promise;
          return null == (e = this.retryer) || e.cancel(t), r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
        }
        destroy() {
          super.destroy(), this.cancel({
            silent: !0
          })
        }
        reset() {
          this.destroy(), this.setState(this.initialState)
        }
        isActive() {
          return this.observers.some(t => !1 !== t.options.enabled)
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
          return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
        }
        isStaleByTime(t = 0) {
          return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, n.Kp)(this.state.dataUpdatedAt, t)
        }
        onFocus() {
          var t;
          let e = this.observers.find(t => t.shouldFetchOnWindowFocus());
          e && e.refetch({
            cancelRefetch: !1
          }), null == (t = this.retryer) || t.continue()
        }
        onOnline() {
          var t;
          let e = this.observers.find(t => t.shouldFetchOnReconnect());
          e && e.refetch({
            cancelRefetch: !1
          }), null == (t = this.retryer) || t.continue()
        }
        addObserver(t) {
          -1 === this.observers.indexOf(t) && (this.observers.push(t), this.clearGcTimeout(), this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: t
          }))
        }
        removeObserver(t) {
          -1 !== this.observers.indexOf(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
          }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: t
          }))
        }
        getObserversCount() {
          return this.observers.length
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({
            type: "invalidate"
          })
        }
        fetch(t, e) {
          var r, i, s, u;
          if ("idle" !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != e && e.cancelRefetch) this.cancel({
              silent: !0
            });
            else if (this.promise) return null == (s = this.retryer) || s.continueRetry(), this.promise
          }
          if (t && this.setOptions(t), !this.options.queryFn) {
            let t = this.observers.find(t => t.options.queryFn);
            t && this.setOptions(t.options)
          }
          Array.isArray(this.options.queryKey);
          let a = (0, n.G9)(),
            l = {
              queryKey: this.queryKey,
              pageParam: void 0,
              meta: this.meta
            },
            c = t => {
              Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => {
                  if (a) return this.abortSignalConsumed = !0, a.signal
                }
              })
            };
          c(l);
          let f = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(l)) : Promise.reject("Missing queryFn"),
            h = {
              fetchOptions: e,
              options: this.options,
              queryKey: this.queryKey,
              state: this.state,
              fetchFn: f
            };
          c(h), null == (r = this.options.behavior) || r.onFetch(h), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (i = h.fetchOptions) ? void 0 : i.meta)) && this.dispatch({
            type: "fetch",
            meta: null == (u = h.fetchOptions) ? void 0 : u.meta
          });
          let d = t => {
            if ((0, o.DV)(t) && t.silent || this.dispatch({
                type: "error",
                error: t
              }), !(0, o.DV)(t)) {
              var e, r;
              null == (e = (r = this.cache.config).onError) || e.call(r, t, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
          };
          return this.retryer = (0, o.Mz)({
            fn: h.fetchFn,
            abort: null == a ? void 0 : a.abort.bind(a),
            onSuccess: t => {
              var e, r;
              if (void 0 === t) {
                d(Error("undefined"));
                return
              }
              this.setData(t), null == (e = (r = this.cache.config).onSuccess) || e.call(r, t, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            },
            onError: d,
            onFail: (t, e) => {
              this.dispatch({
                type: "failed",
                failureCount: t,
                error: e
              })
            },
            onPause: () => {
              this.dispatch({
                type: "pause"
              })
            },
            onContinue: () => {
              this.dispatch({
                type: "continue"
              })
            },
            retry: h.options.retry,
            retryDelay: h.options.retryDelay,
            networkMode: h.options.networkMode
          }), this.promise = this.retryer.promise, this.promise
        }
        dispatch(t) {
          this.state = (e => {
            var r, n;
            switch (t.type) {
              case "failed":
                return {
                  ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                };
              case "pause":
                return {
                  ...e, fetchStatus: "paused"
                };
              case "continue":
                return {
                  ...e, fetchStatus: "fetching"
                };
              case "fetch":
                return {
                  ...e, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null != (r = t.meta) ? r : null, fetchStatus: (0, o.Kw)(this.options.networkMode) ? "fetching" : "paused", ...!e.dataUpdatedAt && {
                    error: null,
                    status: "loading"
                  }
                };
              case "success":
                return {
                  ...e, data: t.data, dataUpdateCount: e.dataUpdateCount + 1, dataUpdatedAt: null != (n = t.dataUpdatedAt) ? n : Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                  }
                };
              case "error":
                let i = t.error;
                if ((0, o.DV)(i) && i.revert && this.revertState) return {
                  ...this.revertState
                };
                return {
                  ...e, error: i, errorUpdateCount: e.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: e.fetchFailureCount + 1, fetchFailureReason: i, fetchStatus: "idle", status: "error"
                };
              case "invalidate":
                return {
                  ...e, isInvalidated: !0
                };
              case "setState":
                return {
                  ...e, ...t.state
                }
            }
          })(this.state), s.V.batch(() => {
            this.observers.forEach(e => {
              e.onQueryUpdate(t)
            }), this.cache.notify({
              query: this,
              type: "updated",
              action: t
            })
          })
        }
      }
      var l = r(33989);
      class c extends l.l {
        constructor(t) {
          super(), this.config = t || {}, this.queries = [], this.queriesMap = {}
        }
        build(t, e, r) {
          var i;
          let s = e.queryKey,
            o = null != (i = e.queryHash) ? i : (0, n.Rm)(s, e),
            u = this.get(o);
          return u || (u = new a({
            cache: this,
            logger: t.getLogger(),
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(e),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
          }), this.add(u)), u
        }
        add(t) {
          this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t, this.queries.push(t), this.notify({
            type: "added",
            query: t
          }))
        }
        remove(t) {
          let e = this.queriesMap[t.queryHash];
          e && (t.destroy(), this.queries = this.queries.filter(e => e !== t), e === t && delete this.queriesMap[t.queryHash], this.notify({
            type: "removed",
            query: t
          }))
        }
        clear() {
          s.V.batch(() => {
            this.queries.forEach(t => {
              this.remove(t)
            })
          })
        }
        get(t) {
          return this.queriesMap[t]
        }
        getAll() {
          return this.queries
        }
        find(t, e) {
          let [r] = (0, n.I6)(t, e);
          return void 0 === r.exact && (r.exact = !0), this.queries.find(t => (0, n._x)(r, t))
        }
        findAll(t, e) {
          let [r] = (0, n.I6)(t, e);
          return Object.keys(r).length > 0 ? this.queries.filter(t => (0, n._x)(r, t)) : this.queries
        }
        notify(t) {
          s.V.batch(() => {
            this.listeners.forEach(e => {
              e(t)
            })
          })
        }
        onFocus() {
          s.V.batch(() => {
            this.queries.forEach(t => {
              t.onFocus()
            })
          })
        }
        onOnline() {
          s.V.batch(() => {
            this.queries.forEach(t => {
              t.onOnline()
            })
          })
        }
      }
      var f = r(89886);
      class h extends l.l {
        constructor(t) {
          super(), this.config = t || {}, this.mutations = [], this.mutationId = 0
        }
        build(t, e, r) {
          let n = new f.m({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(e),
            state: r,
            defaultOptions: e.mutationKey ? t.getMutationDefaults(e.mutationKey) : void 0
          });
          return this.add(n), n
        }
        add(t) {
          this.mutations.push(t), this.notify({
            type: "added",
            mutation: t
          })
        }
        remove(t) {
          this.mutations = this.mutations.filter(e => e !== t), this.notify({
            type: "removed",
            mutation: t
          })
        }
        clear() {
          s.V.batch(() => {
            this.mutations.forEach(t => {
              this.remove(t)
            })
          })
        }
        getAll() {
          return this.mutations
        }
        find(t) {
          return void 0 === t.exact && (t.exact = !0), this.mutations.find(e => (0, n.X7)(t, e))
        }
        findAll(t) {
          return this.mutations.filter(e => (0, n.X7)(t, e))
        }
        notify(t) {
          s.V.batch(() => {
            this.listeners.forEach(e => {
              e(t)
            })
          })
        }
        resumePausedMutations() {
          let t = this.mutations.filter(t => t.state.isPaused);
          return s.V.batch(() => t.reduce((t, e) => t.then(() => e.continue().catch(n.ZT)), Promise.resolve()))
        }
      }
      var d = r(15761),
        p = r(96474),
        y = r(9499);
      class m {
        constructor(t = {}) {
          this.queryCache = t.queryCache || new c, this.mutationCache = t.mutationCache || new h, this.logger = t.logger || i._, this.defaultOptions = t.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
        }
        mount() {
          this.unsubscribeFocus = d.j.subscribe(() => {
            d.j.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
          }), this.unsubscribeOnline = p.N.subscribe(() => {
            p.N.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
          })
        }
        unmount() {
          var t, e;
          null == (t = this.unsubscribeFocus) || t.call(this), null == (e = this.unsubscribeOnline) || e.call(this)
        }
        isFetching(t, e) {
          let [r] = (0, n.I6)(t, e);
          return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
        }
        isMutating(t) {
          return this.mutationCache.findAll({
            ...t,
            fetching: !0
          }).length
        }
        getQueryData(t, e) {
          var r;
          return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state.data
        }
        ensureQueryData(t, e, r) {
          let i = (0, n._v)(t, e, r),
            s = this.getQueryData(i.queryKey);
          return s ? Promise.resolve(s) : this.fetchQuery(i)
        }
        getQueriesData(t) {
          return this.getQueryCache().findAll(t).map(({
            queryKey: t,
            state: e
          }) => {
            let r = e.data;
            return [t, r]
          })
        }
        setQueryData(t, e, r) {
          let i = this.queryCache.find(t),
            s = null == i ? void 0 : i.state.data,
            o = (0, n.SE)(e, s);
          if (void 0 === o) return;
          let u = (0, n._v)(t),
            a = this.defaultQueryOptions(u);
          return this.queryCache.build(this, a).setData(o, {
            ...r,
            manual: !0
          })
        }
        setQueriesData(t, e, r) {
          return s.V.batch(() => this.getQueryCache().findAll(t).map(({
            queryKey: t
          }) => [t, this.setQueryData(t, e, r)]))
        }
        getQueryState(t, e) {
          var r;
          return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state
        }
        removeQueries(t, e) {
          let [r] = (0, n.I6)(t, e), i = this.queryCache;
          s.V.batch(() => {
            i.findAll(r).forEach(t => {
              i.remove(t)
            })
          })
        }
        resetQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r), u = this.queryCache, a = {
            type: "active",
            ...i
          };
          return s.V.batch(() => (u.findAll(i).forEach(t => {
            t.reset()
          }), this.refetchQueries(a, o)))
        }
        cancelQueries(t, e, r) {
          let [i, o = {}] = (0, n.I6)(t, e, r);
          void 0 === o.revert && (o.revert = !0);
          let u = s.V.batch(() => this.queryCache.findAll(i).map(t => t.cancel(o)));
          return Promise.all(u).then(n.ZT).catch(n.ZT)
        }
        invalidateQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r);
          return s.V.batch(() => {
            var t, e;
            if (this.queryCache.findAll(i).forEach(t => {
                t.invalidate()
              }), "none" === i.refetchType) return Promise.resolve();
            let r = {
              ...i,
              type: null != (t = null != (e = i.refetchType) ? e : i.type) ? t : "active"
            };
            return this.refetchQueries(r, o)
          })
        }
        refetchQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r), u = s.V.batch(() => this.queryCache.findAll(i).filter(t => !t.isDisabled()).map(t => {
            var e;
            return t.fetch(void 0, {
              ...o,
              cancelRefetch: null == (e = null == o ? void 0 : o.cancelRefetch) || e,
              meta: {
                refetchPage: i.refetchPage
              }
            })
          })), a = Promise.all(u).then(n.ZT);
          return null != o && o.throwOnError || (a = a.catch(n.ZT)), a
        }
        fetchQuery(t, e, r) {
          let i = (0, n._v)(t, e, r),
            s = this.defaultQueryOptions(i);
          void 0 === s.retry && (s.retry = !1);
          let o = this.queryCache.build(this, s);
          return o.isStaleByTime(s.staleTime) ? o.fetch(s) : Promise.resolve(o.state.data)
        }
        prefetchQuery(t, e, r) {
          return this.fetchQuery(t, e, r).then(n.ZT).catch(n.ZT)
        }
        fetchInfiniteQuery(t, e, r) {
          let i = (0, n._v)(t, e, r);
          return i.behavior = (0, y.Gm)(), this.fetchQuery(i)
        }
        prefetchInfiniteQuery(t, e, r) {
          return this.fetchInfiniteQuery(t, e, r).then(n.ZT).catch(n.ZT)
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations()
        }
        getQueryCache() {
          return this.queryCache
        }
        getMutationCache() {
          return this.mutationCache
        }
        getLogger() {
          return this.logger
        }
        getDefaultOptions() {
          return this.defaultOptions
        }
        setDefaultOptions(t) {
          this.defaultOptions = t
        }
        setQueryDefaults(t, e) {
          let r = this.queryDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.queryKey));
          r ? r.defaultOptions = e : this.queryDefaults.push({
            queryKey: t,
            defaultOptions: e
          })
        }
        getQueryDefaults(t) {
          if (!t) return;
          let e = this.queryDefaults.find(e => (0, n.to)(t, e.queryKey));
          return null == e ? void 0 : e.defaultOptions
        }
        setMutationDefaults(t, e) {
          let r = this.mutationDefaults.find(e => (0, n.yF)(t) === (0, n.yF)(e.mutationKey));
          r ? r.defaultOptions = e : this.mutationDefaults.push({
            mutationKey: t,
            defaultOptions: e
          })
        }
        getMutationDefaults(t) {
          if (!t) return;
          let e = this.mutationDefaults.find(e => (0, n.to)(t, e.mutationKey));
          return null == e ? void 0 : e.defaultOptions
        }
        defaultQueryOptions(t) {
          if (null != t && t._defaulted) return t;
          let e = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
            ...t,
            _defaulted: !0
          };
          return !e.queryHash && e.queryKey && (e.queryHash = (0, n.Rm)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.useErrorBoundary && (e.useErrorBoundary = !!e.suspense), e
        }
        defaultMutationOptions(t) {
          return null != t && t._defaulted ? t : {
            ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
            ...t,
            _defaulted: !0
          }
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear()
        }
      }
    },
    52924: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return a
        }
      });
      var n = r(32161),
        i = r(30081),
        s = r(15761),
        o = r(33989),
        u = r(72379);
      class a extends o.l {
        constructor(t, e) {
          super(), this.client = t, this.options = e, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(e)
        }
        bindMethods() {
          this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
          1 === this.listeners.length && (this.currentQuery.addObserver(this), l(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
        }
        onUnsubscribe() {
          this.listeners.length || this.destroy()
        }
        shouldFetchOnReconnect() {
          return c(this.currentQuery, this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
          return c(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
          this.listeners = [], this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
        }
        setOptions(t, e) {
          let r = this.options,
            i = this.currentQuery;
          if (this.options = this.client.defaultQueryOptions(t), (0, n.VS)(r, this.options) || this.client.getQueryCache().notify({
              type: "observerOptionsUpdated",
              query: this.currentQuery,
              observer: this
            }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
          this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery();
          let s = this.hasListeners();
          s && f(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(e), s && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
          let o = this.computeRefetchInterval();
          s && (this.currentQuery !== i || this.options.enabled !== r.enabled || o !== this.currentRefetchInterval) && this.updateRefetchInterval(o)
        }
        getOptimisticResult(t) {
          let e = this.client.getQueryCache().build(this.client, t);
          return this.createResult(e, t)
        }
        getCurrentResult() {
          return this.currentResult
        }
        trackResult(t) {
          let e = {};
          return Object.keys(t).forEach(r => {
            Object.defineProperty(e, r, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackedProps.add(r), t[r])
            })
          }), e
        }
        getCurrentQuery() {
          return this.currentQuery
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery)
        }
        refetch({
          refetchPage: t,
          ...e
        } = {}) {
          return this.fetch({
            ...e,
            meta: {
              refetchPage: t
            }
          })
        }
        fetchOptimistic(t) {
          let e = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, e);
          return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, e))
        }
        fetch(t) {
          var e;
          return this.executeFetch({
            ...t,
            cancelRefetch: null == (e = t.cancelRefetch) || e
          }).then(() => (this.updateResult(), this.currentResult))
        }
        executeFetch(t) {
          this.updateQuery();
          let e = this.currentQuery.fetch(this.options, t);
          return null != t && t.throwOnError || (e = e.catch(n.ZT)), e
        }
        updateStaleTimeout() {
          if (this.clearStaleTimeout(), n.sk || this.currentResult.isStale || !(0, n.PN)(this.options.staleTime)) return;
          let t = (0, n.Kp)(this.currentResult.dataUpdatedAt, this.options.staleTime);
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
          }, t + 1)
        }
        computeRefetchInterval() {
          var t;
          return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (t = this.options.refetchInterval) && t
        }
        updateRefetchInterval(t) {
          this.clearRefetchInterval(), this.currentRefetchInterval = t, !n.sk && !1 !== this.options.enabled && (0, n.PN)(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
            (this.options.refetchIntervalInBackground || s.j.isFocused()) && this.executeFetch()
          }, this.currentRefetchInterval))
        }
        updateTimers() {
          this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
        }
        clearStaleTimeout() {
          this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
        }
        clearRefetchInterval() {
          this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
        }
        createResult(t, e) {
          let r;
          let i = this.currentQuery,
            s = this.options,
            o = this.currentResult,
            a = this.currentResultState,
            c = this.currentResultOptions,
            d = t !== i,
            p = d ? t.state : this.currentQueryInitialState,
            y = d ? this.currentResult : this.previousQueryResult,
            {
              state: m
            } = t,
            {
              dataUpdatedAt: v,
              error: b,
              errorUpdatedAt: g,
              fetchStatus: w,
              status: x
            } = m,
            S = !1,
            C = !1;
          if (e._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && l(t, e),
              o = r && f(t, i, e, s);
            (n || o) && (w = (0, u.Kw)(t.options.networkMode) ? "fetching" : "paused", v || (x = "loading")), "isRestoring" === e._optimisticResults && (w = "idle")
          }
          if (e.keepPreviousData && !m.dataUpdatedAt && null != y && y.isSuccess && "error" !== x) r = y.data, v = y.dataUpdatedAt, x = y.status, S = !0;
          else if (e.select && void 0 !== m.data) {
            if (o && m.data === (null == a ? void 0 : a.data) && e.select === this.selectFn) r = this.selectResult;
            else try {
              this.selectFn = e.select, r = e.select(m.data), r = (0, n.oE)(null == o ? void 0 : o.data, r, e), this.selectResult = r, this.selectError = null
            } catch (t) {
              this.selectError = t
            }
          } else r = m.data;
          if (void 0 !== e.placeholderData && void 0 === r && "loading" === x) {
            let t;
            if (null != o && o.isPlaceholderData && e.placeholderData === (null == c ? void 0 : c.placeholderData)) t = o.data;
            else if (t = "function" == typeof e.placeholderData ? e.placeholderData() : e.placeholderData, e.select && void 0 !== t) try {
              t = e.select(t), this.selectError = null
            } catch (t) {
              this.selectError = t
            }
            void 0 !== t && (x = "success", r = (0, n.oE)(null == o ? void 0 : o.data, t, e), C = !0)
          }
          this.selectError && (b = this.selectError, r = this.selectResult, g = Date.now(), x = "error");
          let O = "fetching" === w,
            E = "loading" === x,
            R = "error" === x,
            P = {
              status: x,
              fetchStatus: w,
              isLoading: E,
              isSuccess: "success" === x,
              isError: R,
              isInitialLoading: E && O,
              data: r,
              dataUpdatedAt: v,
              error: b,
              errorUpdatedAt: g,
              failureCount: m.fetchFailureCount,
              failureReason: m.fetchFailureReason,
              errorUpdateCount: m.errorUpdateCount,
              isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
              isFetchedAfterMount: m.dataUpdateCount > p.dataUpdateCount || m.errorUpdateCount > p.errorUpdateCount,
              isFetching: O,
              isRefetching: O && !E,
              isLoadingError: R && 0 === m.dataUpdatedAt,
              isPaused: "paused" === w,
              isPlaceholderData: C,
              isPreviousData: S,
              isRefetchError: R && 0 !== m.dataUpdatedAt,
              isStale: h(t, e),
              refetch: this.refetch,
              remove: this.remove
            };
          return P
        }
        updateResult(t) {
          let e = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
          if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, (0, n.VS)(r, e)) return;
          this.currentResult = r;
          let i = {
            cache: !0
          };
          (null == t ? void 0 : t.listeners) !== !1 && (() => {
            if (!e) return !0;
            let {
              notifyOnChangeProps: t
            } = this.options;
            if ("all" === t || !t && !this.trackedProps.size) return !0;
            let r = new Set(null != t ? t : this.trackedProps);
            return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some(t => {
              let n = this.currentResult[t] !== e[t];
              return n && r.has(t)
            })
          })() && (i.listeners = !0), this.notify({
            ...i,
            ...t
          })
        }
        updateQuery() {
          let t = this.client.getQueryCache().build(this.client, this.options);
          if (t === this.currentQuery) return;
          let e = this.currentQuery;
          this.currentQuery = t, this.currentQueryInitialState = t.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == e || e.removeObserver(this), t.addObserver(this))
        }
        onQueryUpdate(t) {
          let e = {};
          "success" === t.type ? e.onSuccess = !t.manual : "error" !== t.type || (0, u.DV)(t.error) || (e.onError = !0), this.updateResult(e), this.hasListeners() && this.updateTimers()
        }
        notify(t) {
          i.V.batch(() => {
            var e, r, n, i, s, o, u, a;
            t.onSuccess ? (null == (e = (r = this.options).onSuccess) || e.call(r, this.currentResult.data), null == (n = (i = this.options).onSettled) || n.call(i, this.currentResult.data, null)) : t.onError && (null == (s = (o = this.options).onError) || s.call(o, this.currentResult.error), null == (u = (a = this.options).onSettled) || u.call(a, void 0, this.currentResult.error)), t.listeners && this.listeners.forEach(t => {
              t(this.currentResult)
            }), t.cache && this.client.getQueryCache().notify({
              query: this.currentQuery,
              type: "observerResultsUpdated"
            })
          })
        }
      }

      function l(t, e) {
        return !1 !== e.enabled && !t.state.dataUpdatedAt && !("error" === t.state.status && !1 === e.retryOnMount) || t.state.dataUpdatedAt > 0 && c(t, e, e.refetchOnMount)
      }

      function c(t, e, r) {
        if (!1 !== e.enabled) {
          let n = "function" == typeof r ? r(t) : r;
          return "always" === n || !1 !== n && h(t, e)
        }
        return !1
      }

      function f(t, e, r, n) {
        return !1 !== r.enabled && (t !== e || !1 === n.enabled) && (!r.suspense || "error" !== t.state.status) && h(t, r)
      }

      function h(t, e) {
        return t.isStaleByTime(e.staleTime)
      }
    },
    89643: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return i
        }
      });
      var n = r(32161);
      class i {
        destroy() {
          this.clearGcTimeout()
        }
        scheduleGc() {
          this.clearGcTimeout(), (0, n.PN)(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
            this.optionalRemove()
          }, this.cacheTime))
        }
        updateCacheTime(t) {
          this.cacheTime = Math.max(this.cacheTime || 0, null != t ? t : n.sk ? 1 / 0 : 3e5)
        }
        clearGcTimeout() {
          this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
        }
      }
    },
    72379: function (t, e, r) {
      "use strict";
      r.d(e, {
        DV: function () {
          return l
        },
        Kw: function () {
          return u
        },
        Mz: function () {
          return c
        }
      });
      var n = r(15761),
        i = r(96474),
        s = r(32161);

      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4)
      }

      function u(t) {
        return (null != t ? t : "online") !== "online" || i.N.isOnline()
      }
      class a {
        constructor(t) {
          this.revert = null == t ? void 0 : t.revert, this.silent = null == t ? void 0 : t.silent
        }
      }

      function l(t) {
        return t instanceof a
      }

      function c(t) {
        let e, r, l, c = !1,
          f = 0,
          h = !1,
          d = new Promise((t, e) => {
            r = t, l = e
          }),
          p = e => {
            h || (g(new a(e)), null == t.abort || t.abort())
          },
          y = () => {
            c = !0
          },
          m = () => {
            c = !1
          },
          v = () => !n.j.isFocused() || "always" !== t.networkMode && !i.N.isOnline(),
          b = n => {
            h || (h = !0, null == t.onSuccess || t.onSuccess(n), null == e || e(), r(n))
          },
          g = r => {
            h || (h = !0, null == t.onError || t.onError(r), null == e || e(), l(r))
          },
          w = () => new Promise(r => {
            e = t => {
              if (h || !v()) return r(t)
            }, null == t.onPause || t.onPause()
          }).then(() => {
            e = void 0, h || null == t.onContinue || t.onContinue()
          }),
          x = () => {
            let e;
            if (!h) {
              try {
                e = t.fn()
              } catch (t) {
                e = Promise.reject(t)
              }
              Promise.resolve(e).then(b).catch(e => {
                var r, n;
                if (h) return;
                let i = null != (r = t.retry) ? r : 3,
                  u = null != (n = t.retryDelay) ? n : o,
                  a = "function" == typeof u ? u(f, e) : u,
                  l = !0 === i || "number" == typeof i && f < i || "function" == typeof i && i(f, e);
                if (c || !l) {
                  g(e);
                  return
                }
                f++, null == t.onFail || t.onFail(f, e), (0, s.Gh)(a).then(() => {
                  if (v()) return w()
                }).then(() => {
                  c ? g(e) : x()
                })
              })
            }
          };
        return u(t.networkMode) ? x() : w().then(x), {
          promise: d,
          cancel: p,
          continue: () => {
            null == e || e()
          },
          cancelRetry: y,
          continueRetry: m
        }
      }
    },
    33989: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n
        }
      });
      class n {
        constructor() {
          this.listeners = [], this.subscribe = this.subscribe.bind(this)
        }
        subscribe(t) {
          return this.listeners.push(t), this.onSubscribe(), () => {
            this.listeners = this.listeners.filter(e => e !== t), this.onUnsubscribe()
          }
        }
        hasListeners() {
          return this.listeners.length > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
      }
    },
    32161: function (t, e, r) {
      "use strict";
      r.d(e, {
        A4: function () {
          return C
        },
        G9: function () {
          return O
        },
        Gh: function () {
          return S
        },
        I6: function () {
          return c
        },
        Kp: function () {
          return u
        },
        PN: function () {
          return o
        },
        Rm: function () {
          return d
        },
        SE: function () {
          return s
        },
        VS: function () {
          return v
        },
        X7: function () {
          return h
        },
        ZT: function () {
          return i
        },
        _v: function () {
          return a
        },
        _x: function () {
          return f
        },
        lV: function () {
          return l
        },
        oE: function () {
          return E
        },
        sk: function () {
          return n
        },
        to: function () {
          return y
        },
        yF: function () {
          return p
        }
      });
      let n = "undefined" == typeof window || "Deno" in window;

      function i() {}

      function s(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0
      }

      function u(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0)
      }

      function a(t, e, r) {
        return x(t) ? "function" == typeof e ? {
          ...r,
          queryKey: t,
          queryFn: e
        } : {
          ...e,
          queryKey: t
        } : t
      }

      function l(t, e, r) {
        return x(t) ? "function" == typeof e ? {
          ...r,
          mutationKey: t,
          mutationFn: e
        } : {
          ...e,
          mutationKey: t
        } : "function" == typeof t ? {
          ...e,
          mutationFn: t
        } : {
          ...t
        }
      }

      function c(t, e, r) {
        return x(t) ? [{
          ...e,
          queryKey: t
        }, r] : [t || {}, e]
      }

      function f(t, e) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: o,
          stale: u
        } = t;
        if (x(o)) {
          if (n) {
            if (e.queryHash !== d(o, e.options)) return !1
          } else {
            if (!m(e.queryKey, o)) return !1
          }
        }
        if ("all" !== r) {
          let t = e.isActive();
          if ("active" === r && !t || "inactive" === r && t) return !1
        }
        return ("boolean" != typeof u || e.isStale() === u) && (void 0 === i || i === e.state.fetchStatus) && (!s || !!s(e))
      }

      function h(t, e) {
        let {
          exact: r,
          fetching: n,
          predicate: i,
          mutationKey: s
        } = t;
        if (x(s)) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (p(e.options.mutationKey) !== p(s)) return !1
          } else {
            if (!m(e.options.mutationKey, s)) return !1
          }
        }
        return ("boolean" != typeof n || "loading" === e.state.status === n) && (!i || !!i(e))
      }

      function d(t, e) {
        let r = (null == e ? void 0 : e.queryKeyHashFn) || p;
        return r(t)
      }

      function p(t) {
        return JSON.stringify(t, (t, e) => g(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
      }

      function y(t, e) {
        return m(t, e)
      }

      function m(t, e) {
        return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(r => !m(t[r], e[r]))
      }

      function v(t, e) {
        if (t && !e || e && !t) return !1;
        for (let r in t)
          if (t[r] !== e[r]) return !1;
        return !0
      }

      function b(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length
      }

      function g(t) {
        if (!w(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!(w(r) && r.hasOwnProperty("isPrototypeOf"))
      }

      function w(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
      }

      function x(t) {
        return Array.isArray(t)
      }

      function S(t) {
        return new Promise(e => {
          setTimeout(e, t)
        })
      }

      function C(t) {
        S(0).then(t)
      }

      function O() {
        if ("function" == typeof AbortController) return new AbortController
      }

      function E(t, e, r) {
        return null != r.isDataEqual && r.isDataEqual(t, e) ? t : "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? function t(e, r) {
          if (e === r) return e;
          let n = b(e) && b(r);
          if (n || g(e) && g(r)) {
            let i = n ? e.length : Object.keys(e).length,
              s = n ? r : Object.keys(r),
              o = s.length,
              u = n ? [] : {},
              a = 0;
            for (let i = 0; i < o; i++) {
              let o = n ? i : s[i];
              u[o] = t(e[o], r[o]), u[o] === e[o] && a++
            }
            return i === o && a === i ? e : u
          }
          return r
        }(t, e) : e
      }
    },
    85945: function (t, e, r) {
      "use strict";
      r.d(e, {
        NL: function () {
          return u
        },
        aH: function () {
          return a
        }
      });
      var n = r(67294);
      let i = n.createContext(void 0),
        s = n.createContext(!1);

      function o(t, e) {
        return t || (e && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = i), window.ReactQueryClientContext) : i)
      }
      let u = ({
          context: t
        } = {}) => {
          let e = n.useContext(o(t, n.useContext(s)));
          if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
          return e
        },
        a = ({
          client: t,
          children: e,
          context: r,
          contextSharing: i = !1
        }) => {
          n.useEffect(() => (t.mount(), () => {
            t.unmount()
          }), [t]);
          let u = o(r, i);
          return n.createElement(s.Provider, {
            value: !r && i
          }, n.createElement(u.Provider, {
            value: t
          }, e))
        }
    },
    91784: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        _: function () {
          return o
        }
      });
      var i = r(67294);
      let s = i.createContext((n = !1, {
          clearReset: () => {
            n = !1
          },
          reset: () => {
            n = !0
          },
          isReset: () => n
        })),
        o = () => i.useContext(s)
    },
    37122: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return s
        }
      });
      var n = r(67294);
      let i = n.createContext(!1),
        s = () => n.useContext(i);
      i.Provider
    },
    48228: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return h
        }
      });
      var n = r(67294),
        i = r(464),
        s = r(32161),
        o = r(89886),
        u = r(30081),
        a = r(33989);
      class l extends a.l {
        constructor(t, e) {
          super(), this.client = t, this.setOptions(e), this.bindMethods(), this.updateResult()
        }
        bindMethods() {
          this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
        }
        setOptions(t) {
          let e = this.options;
          this.options = this.client.defaultMutationOptions(t), (0, s.VS)(e, this.options) || this.client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.currentMutation,
            observer: this
          })
        }
        onUnsubscribe() {
          if (!this.listeners.length) {
            var t;
            null == (t = this.currentMutation) || t.removeObserver(this)
          }
        }
        onMutationUpdate(t) {
          this.updateResult();
          let e = {
            listeners: !0
          };
          "success" === t.type ? e.onSuccess = !0 : "error" === t.type && (e.onError = !0), this.notify(e)
        }
        getCurrentResult() {
          return this.currentResult
        }
        reset() {
          this.currentMutation = void 0, this.updateResult(), this.notify({
            listeners: !0
          })
        }
        mutate(t, e) {
          return this.mutateOptions = e, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, {
            ...this.options,
            variables: void 0 !== t ? t : this.options.variables
          }), this.currentMutation.addObserver(this), this.currentMutation.execute()
        }
        updateResult() {
          let t = this.currentMutation ? this.currentMutation.state : (0, o.R)(),
            e = {
              ...t,
              isLoading: "loading" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset
            };
          this.currentResult = e
        }
        notify(t) {
          u.V.batch(() => {
            if (this.mutateOptions) {
              var e, r, n, i, s, o, u, a;
              t.onSuccess ? (null == (e = (r = this.mutateOptions).onSuccess) || e.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (i = this.mutateOptions).onSettled) || n.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : t.onError && (null == (s = (o = this.mutateOptions).onError) || s.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (u = (a = this.mutateOptions).onSettled) || u.call(a, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
            }
            t.listeners && this.listeners.forEach(t => {
              t(this.currentResult)
            })
          })
        }
      }
      var c = r(85945),
        f = r(24798);

      function h(t, e, r) {
        let o = (0, s.lV)(t, e, r),
          a = (0, c.NL)({
            context: o.context
          }),
          [h] = n.useState(() => new l(a, o));
        n.useEffect(() => {
          h.setOptions(o)
        }, [h, o]);
        let p = (0, i.$)(n.useCallback(t => h.subscribe(u.V.batchCalls(t)), [h]), () => h.getCurrentResult(), () => h.getCurrentResult()),
          y = n.useCallback((t, e) => {
            h.mutate(t, e).catch(d)
          }, [h]);
        if (p.error && (0, f.L)(h.options.useErrorBoundary, [p.error])) throw p.error;
        return {
          ...p,
          mutate: y,
          mutateAsync: p.mutate
        }
      }

      function d() {}
    },
    464: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return i
        }
      });
      var n = r(61688);
      let i = n.useSyncExternalStore
    },
    24798: function (t, e, r) {
      "use strict";

      function n(t, e) {
        return "function" == typeof t ? t(...e) : !!t
      }
      r.d(e, {
        L: function () {
          return n
        }
      })
    }
  },
  function (t) {
    var e = function (e) {
      return t(t.s = e)
    };
    t.O(0, [774, 179], function () {
      return e(6840), e(80880)
    }), _N_E = t.O()
  }
]);