(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6], {
        21277: function (e, t, a) {
            "use strict";
            a.d(t, {
                A: function () {
                    return m
                }
            });
            var r = a(85893),
                n = a(75145),
                s = a(11163),
                l = a(86501),
                i = a(41664),
                o = a.n(i);
            let c = () => (0, r.jsx)("div", {
                    className: "relative bg-hamReallyPink",
                    children: (0, r.jsxs)("div", {
                        className: "mx-auto max-w-7xl max-xs:text-xs py-3 px-3 text-center font-medium text-white sm:px-6 lg:px-8",
                        children: ["Be aware of scams! $HAMI contract", (0, r.jsx)(o(), {
                            href: "https://arbiscan.io/address/0x02150e97271fDC0D6E3A16d9094A0948266F07dD",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "ml-2 underline hover:text-hamSalmon",
                            children: "0x0215....07dD"
                        })]
                    })
                }),
                m = e => {
                    let {
                        className: t,
                        children: a
                    } = e, {
                        pathname: i
                    } = (0, s.useRouter)();
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(c, {}), "/" !== i && (0, r.jsx)(n.W, {
                            className: "max-md:p-8 py-8"
                        }), (0, r.jsx)("main", {
                            className: t,
                            children: a
                        }), (0, r.jsx)(l.x7, {
                            position: "bottom-right",
                            reverseOrder: !1,
                            toastOptions: {
                                duration: 3e3
                            },
                            containerStyle: {
                                bottom: "40px"
                            }
                        })]
                    })
                }
        },
        75145: function (e, t, a) {
            "use strict";
            a.d(t, {
                W: function () {
                    return N
                }
            });
            var r = a(85893),
                n = a(84539),
                s = a(45332),
                l = a(25675),
                i = a.n(l),
                o = a(41664),
                c = a.n(o),
                m = a(11163),
                d = a(67294),
                x = a(93423),
                h = a(31764),
                u = a(32610);
            let p = e => "walletConnect" === e ? "/images/wallets/walletconnect.svg" : "coinbaseWallet" === e ? "/images/wallets/coinbase.svg" : "/images/wallets/metamask.svg",
                f = e => {
                    let {
                        className: t
                    } = e, [a, s] = (0, d.useState)(!1), {
                        connect: l,
                        connectors: o
                    } = (0, u.$4)(), c = () => s(!1), m = () => s(!0);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("button", {
                            onClick: m,
                            className: t,
                            children: "Connect"
                        }), (0, r.jsx)(n.u, {
                            appear: !0,
                            show: a,
                            as: d.Fragment,
                            children: (0, r.jsxs)(h.V, {
                                as: "div",
                                className: "relative z-[100]",
                                onClose: c,
                                children: [(0, r.jsx)(n.u.Child, {
                                    as: d.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, r.jsx)("div", {
                                        className: "fixed inset-0 bg-black/25"
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "fixed inset-0 overflow-y-auto",
                                    children: (0, r.jsx)("div", {
                                        className: "flex min-h-full items-center justify-center p-4 text-center",
                                        children: (0, r.jsx)(n.u.Child, {
                                            as: d.Fragment,
                                            enter: "ease-out duration-300",
                                            enterFrom: "opacity-0 scale-95",
                                            enterTo: "opacity-100 scale-100",
                                            leave: "ease-in duration-200",
                                            leaveFrom: "opacity-100 scale-100",
                                            leaveTo: "opacity-0 scale-95",
                                            children: (0, r.jsx)(h.V.Panel, {
                                                className: "w-full max-w-md space-y-5 overflow-hidden pixel-corners bg-white p-4",
                                                children: (0, r.jsx)("div", {
                                                    className: "flex w-full flex-col justify-center gap-2",
                                                    children: o.map(e => (0, r.jsx)("div", {
                                                        className: "mx-auto w-full border-t-2 border-opacity-70 pt-2 first:border-none first:pt-0",
                                                        children: (0, r.jsx)("button", {
                                                            disabled: !e.ready,
                                                            onClick: () => l({
                                                                connector: e
                                                            }),
                                                            className: "w-full hover:bg-gray-200",
                                                            children: (0, r.jsx)(i(), {
                                                                src: p(e.id),
                                                                width: 321,
                                                                height: 134,
                                                                alt: e.name,
                                                                className: "w-full object-contain py-2"
                                                            })
                                                        })
                                                    }, e.id))
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                };
            var g = a(24484);
            let j = e => {
                let {
                    className: t,
                    connectClassName: a
                } = e, {
                    chain: n
                } = (0, u.LN)(), {
                    address: l
                } = (0, u.mA)(), {
                    switchNetwork: i
                } = (0, u.g0)(), {
                    disconnect: o
                } = (0, u.qL)(), c = function () {
                    let [e, t] = (0, d.useState)(!1);
                    return (0, d.useEffect)(() => t(!0), []), e
                }();
                return c ? (0, r.jsx)(r.Fragment, {
                    children: l ? (0, r.jsx)(r.Fragment, {
                        children: (null == n ? void 0 : n.unsupported) ? (0, r.jsx)("button", {
                            className: (0, s.AK)(null != t ? t : "", "hover:bg-hamReallyPink hover:text-white"),
                            onClick: () => i && i(g.yX.id),
                            children: "Switch Network"
                        }) : (0, r.jsx)("button", {
                            onClick: () => o(),
                            className: t,
                            children: (0, s.Xn)(l)
                        })
                    }) : (0, r.jsx)(f, {
                        className: a
                    })
                }) : null
            };
            var w = a(89583);
            let b = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, s.AK)(null != t ? t : "", "flex gap-4"),
                        children: [(0, r.jsx)("a", {
                            href: "https://t.me/hamachifinance",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, r.jsx)(w.Ww5, {
                                color: "white",
                                size: "24px",
                                className: "hover:fill-hamSalmon"
                            })
                        }), (0, r.jsx)("a", {
                            href: "https://twitter.com/HamachiFinance",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: (0, r.jsx)(w.fWC, {
                                color: "white",
                                size: "24px",
                                className: "hover:fill-hamSalmon"
                            })
                        })]
                    })
                },
                v = [{
                    name: "How to Buy",
                    href: "https://www.youtube.com/watch?v=Habg-fEYnCc",
                    external: !0
                }, {
                    name: "Litepaper",
                    href: "/litepaper"
                }, {
                    name: "Tokenomics",
                    href: "/#tokenomics",
                    hide: !0
                }, {
                    name: "FAQ",
                    href: "/#faq",
                    hide: !0
                }],
                y = () => (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("span", {
                        className: "sr-only",
                        children: "Hamachi"
                    }), (0, r.jsx)(c(), {
                        href: "/",
                        className: "relative text-white",
                        children: (0, r.jsx)(i(), {
                            src: "/images/logo.webp",
                            alt: "Hamachi Logo",
                            height: 346,
                            width: 1467,
                            draggable: !1,
                            className: "w-[10rem] max-xs:w-[8rem]"
                        })
                    })]
                }),
                N = e => {
                    let {
                        className: t
                    } = e, a = (0, m.useRouter)(), [l, o] = (0, d.useState)(!1), h = "h-[2px] w-6 my-1 bg-white transition ease transform duration-300", u = "/app" === a.pathname, [p, f] = (0, d.useState)(!1);
                    (0, x.Z)(p);
                    let g = () => {
                        !1 === l ? (o(!0), f(!0)) : (o(!1), f(!1))
                    };
                    return (0, r.jsxs)("header", {
                        className: (0, s.AK)(null != t ? t : "", "z-20 flex w-full items-center justify-between max-lg:mb-4 lg:justify-start lg:space-x-10 py-2 px-8 xl:px-16"),
                        children: [(0, r.jsxs)("nav", {
                            className: "relative flex w-full items-center justify-between px-0",
                            children: [(0, r.jsxs)("div", {
                                className: "z-30 flex flex-1 items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "flex w-full items-center justify-between lg:w-auto",
                                    children: (0, r.jsx)(y, {})
                                }), (0, r.jsxs)("div", {
                                    onClick: g,
                                    className: "relative z-10 flex cursor-pointer flex-col items-center justify-center p-2 lg:hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: (0, s.AK)(h, l ? "translate-y-[5px] rotate-45" : "")
                                    }), (0, r.jsx)("div", {
                                        className: (0, s.AK)(h, l ? "-translate-y-[5px] -rotate-45" : "")
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "hidden lg:flex lg:items-center",
                                children: [!u && (0, r.jsxs)(c(), {
                                    href: "https://ponzusauce.xyz",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    className: "mx-2 flex items-center justify-center gap-1 rounded-xl border-l-2 bg-[url('/images/tile.png')] p-1.5 pr-2 text-sm tracking-wider",
                                    children: [(0, r.jsx)(i(), {
                                        src: "/images/ponzu_logo.webp",
                                        width: 24,
                                        height: 24,
                                        alt: "Ponzu Logo"
                                    }), "Ponzu Protocol"]
                                }), (0, r.jsx)("div", {
                                    className: "hidden text-sm lg:flex px-4",
                                    children: v.map(e => (0, r.jsx)(c(), {
                                        onClick: () => f(!1),
                                        href: e.href,
                                        target: e.external ? "_blank" : void 0,
                                        rel: e.external ? "noreferrer noopener" : void 0,
                                        className: (0, s.AK)(u ? "first:border-l-0" : "", e.hide ? "max-xl:hidden" : "", "flex items-center justify-center border-l-2 px-4 tracking-wider text-white duration-200 hover:text-hamSalmon"),
                                        children: e.name
                                    }, e.name))
                                }), (0, r.jsx)(b, {
                                    className: "lg:px-6 xl:px-8"
                                }), u ? (0, r.jsx)(j, {
                                    className: "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-hamPink px-8 py-2 text-base font-semibold text-white shadow-sm",
                                    connectClassName: "bg-hamPink hover:bg-hamReallyPink px-10 text-white rounded-full py-2"
                                }) : (0, r.jsx)(c(), {
                                    href: "/app",
                                    className: "inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-hamPink py-2 px-12 text-base font-semibold text-white shadow-sm",
                                    children: "App"
                                })]
                            })]
                        }), (0, r.jsx)(n.u, {
                            appear: !0,
                            show: l,
                            as: d.Fragment,
                            enter: "ease-out duration-[500ms]",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-[500ms]",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, r.jsx)("div", {
                                className: (0, s.AK)(l ? "absolute inset-0 z-[10] h-screen animate-[fadeInSmooth_1s_ease-in-out] backdrop-blur-md lg:hidden" : "hidden"),
                                children: (0, r.jsxs)("div", {
                                    className: "space-y-2 px-10 pt-48 text-lg font-bold uppercase",
                                    children: [u ? (0, r.jsx)(j, {
                                        className: "py-2 text-white",
                                        connectClassName: "bg-none py-2 uppercase text-white"
                                    }) : (0, r.jsx)(c(), {
                                        href: "/app",
                                        className: "py-2 text-white",
                                        children: "App"
                                    }), (0, r.jsx)("div", {
                                        className: "border-b pt-2"
                                    }), v.map(e => (0, r.jsx)(c(), {
                                        href: e.href,
                                        target: e.external ? "_blank" : void 0,
                                        rel: e.external ? "noreferrer noopener" : void 0,
                                        className: "block py-2 text-white",
                                        onClick: () => {
                                            f(!1), o(!1)
                                        },
                                        children: e.name
                                    }, e.name)), (0, r.jsxs)(c(), {
                                        href: "https://ponzusauce.xyz",
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        className: "inline-flex items-center justify-center gap-1 rounded-xl border-l-2 bg-[url('/images/tile.png')] p-2 text-sm tracking-wider",
                                        children: [(0, r.jsx)(i(), {
                                            src: "/images/ponzu_logo.webp",
                                            width: 24,
                                            height: 24,
                                            alt: "Ponzu Logo",
                                            className: "inline-block mr-2 items-center"
                                        }), "Ponzu Protocol"]
                                    }), (0, r.jsx)(b, {
                                        className: "pt-4"
                                    })]
                                })
                            })
                        })]
                    })
                }
        },
        45332: function (e, t, a) {
            "use strict";
            a.d(t, {
                AK: function () {
                    return n
                },
                Xn: function () {
                    return l
                },
                u4: function () {
                    return i
                },
                zW: function () {
                    return s
                }
            });
            let r = ["", "K", "M", "B", "T", "Q"];

            function n() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return t.filter(Boolean).join(" ")
            }
            let s = Intl.NumberFormat("en", {
                notation: "standard",
                currency: "USD"
            });

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                return e ? "".concat(e.slice(0, t), "...").concat(e.slice(-t)) : ""
            }
            let i = (e, t) => {
                var a;
                if (!e) return 0;
                let n = parseFloat(e.toString()),
                    s = 0;
                for (; Math.floor(n / 1e3) >= 1;) n = Math.round(n / 100) / 10, s += 1;
                let l = null !== (a = r[s]) && void 0 !== a ? a : "";
                return n.toFixed(null != t ? t : 1).replace(/\.0+$/, "") + l
            }
        },
        46601: function () {}
    }
]);