! function() {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }

    function r(e) {
        return e && e.Math == Math && e
    }

    function f(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }

    function c(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }

    function p(e) {
        return a.call(e).slice(8, -1)
    }

    function h(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }

    function s(e) {
        return b(h(e))
    }

    function k(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }

    function l(e, t) {
        if (!k(e)) return e;
        var r, n;
        if (t && "function" == typeof(r = e.toString) && !k(n = r.call(e))) return n;
        if ("function" == typeof(r = e.valueOf) && !k(n = r.call(e))) return n;
        if (!t && "function" == typeof(r = e.toString) && !k(n = r.call(e))) return n;
        throw TypeError("Can't convert object to primitive value")
    }

    function O(e, t) {
        return v.call(e, t)
    }

    function n(e) {
        return m ? y.createElement(e) : {}
    }

    function T(e) {
        if (!k(e)) throw TypeError(String(e) + " is not an object");
        return e
    }

    function g(t, r) {
        try {
            U(L, t, r)
        } catch (e) {
            L[t] = r
        }
        return r
    }
    var L = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || Function("return this")(),
        M = !f(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }),
        o = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        d = {
            f: i && !o.call({
                1: 2
            }, 1) ? function(e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : o
        },
        a = {}.toString,
        u = "".split,
        b = f(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == p(e) ? u.call(e, "") : Object(e)
        } : Object,
        v = {}.hasOwnProperty,
        y = L.document,
        m = k(y) && k(y.createElement),
        w = !M && !f(function() {
            return 7 != Object.defineProperty(n("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        x = Object.getOwnPropertyDescriptor,
        C = {
            f: M ? x : function(e, t) {
                if (e = s(e), t = l(t, !0), w) try {
                    return x(e, t)
                } catch (e) {}
                if (O(e, t)) return c(!d.f.call(e, t), e[t])
            }
        },
        S = Object.defineProperty,
        B = {
            f: M ? S : function(e, t, r) {
                if (T(e), t = l(t, !0), T(r), w) try {
                    return S(e, t, r)
                } catch (e) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (e[t] = r.value), e
            }
        },
        U = M ? function(e, t, r) {
            return B.f(e, t, c(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        },
        A = "__core-js_shared__",
        E = L[A] || g(A, {}),
        I = Function.toString;
    "function" != typeof E.inspectSource && (E.inspectSource = function(e) {
        return I.call(e)
    });

    function R(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++H + J).toString(36)
    }

    function _(e) {
        return K[e] || (K[e] = R(e))
    }
    var P, F, j, q, D, N, z, Y, V = E.inspectSource,
        W = L.WeakMap,
        G = "function" == typeof W && /native code/.test(V(W)),
        X = t(function(e) {
            (e.exports = function(e, t) {
                return E[e] || (E[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)"
            })
        }),
        H = 0,
        J = Math.random(),
        K = X("keys"),
        Z = {},
        Q = L.WeakMap;
    z = G ? (P = new Q, F = P.get, j = P.has, q = P.set, D = function(e, t) {
        return q.call(P, e, t), t
    }, N = function(e) {
        return F.call(P, e) || {}
    }, function(e) {
        return j.call(P, e)
    }) : (Y = _("state"), Z[Y] = !0, D = function(e, t) {
        return U(e, Y, t), t
    }, N = function(e) {
        return O(e, Y) ? e[Y] : {}
    }, function(e) {
        return O(e, Y)
    });

    function ee(e) {
        return "function" == typeof e ? e : void 0
    }

    function te(e, t) {
        return arguments.length < 2 ? ee(ye[e]) || ee(L[e]) : ye[e] && ye[e][t] || L[e] && L[e][t]
    }

    function re(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? we : me)(e)
    }

    function ne(e) {
        return 0 < e ? be(re(e), 9007199254740991) : 0
    }

    function oe(e, t) {
        var r = re(e);
        return r < 0 ? xe(r + t, 0) : Se(r, t)
    }

    function ie(c) {
        return function(e, t, r) {
            var n, o = s(e),
                i = ne(o.length),
                a = oe(r, i);
            if (c && t != t) {
                for (; a < i;)
                    if ((n = o[a++]) != n) return !0
            } else
                for (; a < i; a++)
                    if ((c || a in o) && o[a] === t) return c || a || 0;
            return !c && -1
        }
    }

    function ae(e, t) {
        var r, n = s(e),
            o = 0,
            i = [];
        for (r in n) !O(Z, r) && O(n, r) && i.push(r);
        for (; t.length > o;) O(n, r = t[o++]) && (~Ee(i, r) || i.push(r));
        return i
    }

    function ce(e, t) {
        var r = Le[Oe(e)];
        return r == Ce || r != Me && ("function" == typeof t ? f(t) : !!t)
    }

    function ue(e, t) {
        var r, n, o, i, a = e.target,
            c = e.global,
            u = e.stat,
            s = c ? L : u ? L[a] || g(a, {}) : (L[a] || {}).prototype;
        if (s)
            for (r in t) {
                if (o = t[r], n = e.noTargetGet ? (i = Ue(s, r)) && i.value : s[r], !Be(c ? r : a + (u ? "." : "#") + r, e.forced) && void 0 !== n) {
                    if (typeof o == typeof n) continue;
                    ! function(e, t) {
                        for (var r = _e(t), n = B.f, o = C.f, i = 0; i < r.length; i++) {
                            var a = r[i];
                            O(e, a) || n(e, a, o(t, a))
                        }
                    }(o, n)
                }(e.sham || n && n.sham) && U(o, "sham", !0), ve(s, r, o, e)
            }
    }

    function se(e) {
        return Object(h(e))
    }

    function le(e, t, r) {
        var n = l(t);
        n in e ? B.f(e, n, c(0, r)) : e[n] = r
    }

    function fe(e) {
        return O(qe, e) || (Fe && O(De, e) ? qe[e] = De[e] : qe[e] = Ne("Symbol." + e)), qe[e]
    }

    function he(e, t) {
        var r;
        return Pe(e) && ("function" == typeof(r = e.constructor) && (r === Array || Pe(r.prototype)) || k(r) && null === (r = r[ze])) && (r = void 0), new(void 0 === r ? Array : r)(0 === t ? 0 : t)
    }
    var pe, ge, de = {
            set: D,
            get: N,
            has: z,
            enforce: function(e) {
                return z(e) ? N(e) : D(e, {})
            },
            getterFor: function(r) {
                return function(e) {
                    var t;
                    if (!k(e) || (t = N(e)).type !== r) throw TypeError("Incompatible receiver, " + r + " required");
                    return t
                }
            }
        },
        ve = t(function(e) {
            var t = de.get,
                c = de.enforce,
                u = String(String).split("String");
            (e.exports = function(e, t, r, n) {
                var o = !!n && !!n.unsafe,
                    i = !!n && !!n.enumerable,
                    a = !!n && !!n.noTargetGet;
                "function" == typeof r && ("string" != typeof t || O(r, "name") || U(r, "name", t), c(r).source = u.join("string" == typeof t ? t : "")), e !== L ? (o ? !a && e[t] && (i = !0) : delete e[t], i ? e[t] = r : U(e, t, r)) : i ? e[t] = r : g(t, r)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && t(this).source || V(this)
            })
        }),
        ye = L,
        me = Math.ceil,
        we = Math.floor,
        be = Math.min,
        xe = Math.max,
        Se = Math.min,
        Ae = {
            includes: ie(!0),
            indexOf: ie(!1)
        },
        Ee = Ae.indexOf,
        Ie = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Te = Ie.concat("length", "prototype"),
        $e = {
            f: Object.getOwnPropertyNames || function(e) {
                return ae(e, Te)
            }
        },
        Re = {
            f: Object.getOwnPropertySymbols
        },
        _e = te("Reflect", "ownKeys") || function(e) {
            var t = $e.f(T(e)),
                r = Re.f;
            return r ? t.concat(r(e)) : t
        },
        ke = /#|\.prototype\./,
        Oe = ce.normalize = function(e) {
            return String(e).replace(ke, ".").toLowerCase()
        },
        Le = ce.data = {},
        Me = ce.NATIVE = "N",
        Ce = ce.POLYFILL = "P",
        Be = ce,
        Ue = C.f,
        Pe = Array.isArray || function(e) {
            return "Array" == p(e)
        },
        Fe = !!Object.getOwnPropertySymbols && !f(function() {
            return !String(Symbol())
        }),
        je = Fe && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        qe = X("wks"),
        De = L.Symbol,
        Ne = je ? De : De && De.withoutSetter || R,
        ze = fe("species"),
        Ye = te("navigator", "userAgent") || "",
        Ve = L.process,
        We = Ve && Ve.versions,
        Ge = We && We.v8;
    Ge ? ge = (pe = Ge.split("."))[0] + pe[1] : Ye && (!(pe = Ye.match(/Edge\/(\d+)/)) || 74 <= pe[1]) && (pe = Ye.match(/Chrome\/(\d+)/)) && (ge = pe[1]);

    function Xe(t) {
        return 51 <= He || !f(function() {
            var e = [];
            return (e.constructor = {})[Je] = function() {
                return {
                    foo: 1
                }
            }, 1 !== e[t](Boolean).foo
        })
    }
    var He = ge && +ge,
        Je = fe("species"),
        Ke = fe("isConcatSpreadable"),
        Ze = 9007199254740991,
        Qe = "Maximum allowed index exceeded",
        et = 51 <= He || !f(function() {
            var e = [];
            return e[Ke] = !1, e.concat()[0] !== e
        }),
        tt = Xe("concat");
    ue({
        target: "Array",
        proto: !0,
        forced: !et || !tt
    }, {
        concat: function(e) {
            for (var t, r, n, o = se(this), i = he(o, 0), a = 0, c = -1, u = arguments.length; c < u; c++)
                if (function(e) {
                        if (!k(e)) return !1;
                        var t = e[Ke];
                        return void 0 !== t ? !!t : Pe(e)
                    }(n = -1 === c ? o : arguments[c])) {
                    if (r = ne(n.length), Ze < a + r) throw TypeError(Qe);
                    for (t = 0; t < r; t++, a++) t in n && le(i, a, n[t])
                } else {
                    if (Ze <= a) throw TypeError(Qe);
                    le(i, a++, n)
                } return i.length = a, i
        }
    });

    function rt(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }

    function nt(n, o, e) {
        if (rt(n), void 0 === o) return n;
        switch (e) {
            case 0:
                return function() {
                    return n.call(o)
                };
            case 1:
                return function(e) {
                    return n.call(o, e)
                };
            case 2:
                return function(e, t) {
                    return n.call(o, e, t)
                };
            case 3:
                return function(e, t, r) {
                    return n.call(o, e, t, r)
                }
        }
        return function() {
            return n.apply(o, arguments)
        }
    }

    function ot(p) {
        var g = 1 == p,
            d = 2 == p,
            v = 3 == p,
            y = 4 == p,
            m = 6 == p,
            w = 5 == p || m;
        return function(e, t, r, n) {
            for (var o, i, a = se(e), c = b(a), u = nt(t, r, 3), s = ne(c.length), l = 0, f = n || he, h = g ? f(e, s) : d ? f(e, 0) : void 0; l < s; l++)
                if ((w || l in c) && (i = u(o = c[l], l, a), p))
                    if (g) h[l] = i;
                    else if (i) switch (p) {
                case 3:
                    return !0;
                case 5:
                    return o;
                case 6:
                    return l;
                case 2:
                    ut.call(h, o)
            } else if (y) return !1;
            return m ? -1 : v || y ? y : h
        }
    }

    function it(e, t) {
        var r = [][e];
        return !!r && f(function() {
            r.call(null, t || function() {
                throw 1
            }, 1)
        })
    }

    function at(e) {
        throw e
    }

    function ct(e, t) {
        if (O(ft, e)) return ft[e];
        var r = [][e],
            n = !!O(t = t || {}, "ACCESSORS") && t.ACCESSORS,
            o = O(t, 0) ? t[0] : at,
            i = O(t, 1) ? t[1] : void 0;
        return ft[e] = !!r && !f(function() {
            if (n && !M) return 1;
            var e = {
                length: -1
            };
            n ? lt(e, 1, {
                enumerable: !0,
                get: at
            }) : e[1] = 1, r.call(e, o, i)
        })
    }
    var ut = [].push,
        st = {
            forEach: ot(0),
            map: ot(1),
            filter: ot(2),
            some: ot(3),
            every: ot(4),
            find: ot(5),
            findIndex: ot(6)
        },
        lt = Object.defineProperty,
        ft = {},
        ht = st.forEach,
        pt = it("forEach"),
        gt = ct("forEach"),
        dt = pt && gt ? [].forEach : function(e, t) {
            return ht(this, e, 1 < arguments.length ? t : void 0)
        };
    ue({
        target: "Array",
        proto: !0,
        forced: [].forEach != dt
    }, {
        forEach: dt
    });

    function vt() {}

    function yt(e) {
        return "<script>" + e + "</" + At + ">"
    }
    var mt, wt = Object.keys || function(e) {
            return ae(e, Ie)
        },
        bt = M ? Object.defineProperties : function(e, t) {
            T(e);
            for (var r, n = wt(t), o = n.length, i = 0; i < o;) B.f(e, r = n[i++], t[r]);
            return e
        },
        xt = te("document", "documentElement"),
        St = "prototype",
        At = "script",
        Et = _("IE_PROTO"),
        It = function() {
            try {
                mt = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            It = mt ? function(e) {
                e.write(yt("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(mt) : ((t = n("iframe")).style.display = "none", xt.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(yt("document.F=Object")), e.close(), e.F);
            for (var r = Ie.length; r--;) delete It[St][Ie[r]];
            return It()
        };
    Z[Et] = !0;
    var Tt = Object.create || function(e, t) {
            var r;
            return null !== e ? (vt[St] = T(e), r = new vt, vt[St] = null, r[Et] = e) : r = It(), void 0 === t ? r : bt(r, t)
        },
        $t = fe("unscopables"),
        Rt = Array.prototype;
    null == Rt[$t] && B.f(Rt, $t, {
        configurable: !0,
        value: Tt(null)
    });

    function _t(e) {
        Rt[$t][e] = !0
    }
    var kt, Ot, Lt, Mt = {},
        Ct = !f(function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        }),
        Bt = _("IE_PROTO"),
        Ut = Object.prototype,
        Pt = Ct ? Object.getPrototypeOf : function(e) {
            return e = se(e), O(e, Bt) ? e[Bt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ut : null
        },
        Ft = fe("iterator"),
        jt = !1;
    [].keys && ("next" in (Lt = [].keys()) ? (Ot = Pt(Pt(Lt))) !== Object.prototype && (kt = Ot) : jt = !0), null == kt && (kt = {}), O(kt, Ft) || U(kt, Ft, function() {
        return this
    });

    function qt(e, t, r) {
        e && !O(e = r ? e : e.prototype, Gt) && Wt(e, Gt, {
            configurable: !0,
            value: t
        })
    }

    function Dt() {
        return this
    }

    function Nt(e, t, r) {
        var n = t + " Iterator";
        return e.prototype = Tt(Xt, {
            next: c(1, r)
        }), qt(e, n, !1), Mt[n] = Dt, e
    }

    function zt() {
        return this
    }

    function Yt(e, t, r, n, o, i, a) {
        function c(e) {
            if (e === o && d) return d;
            if (!Kt && e in p) return p[e];
            switch (e) {
                case "keys":
                case Qt:
                case er:
                    return function() {
                        return new r(this, e)
                    }
            }
            return function() {
                return new r(this)
            }
        }
        Nt(r, t, n);
        var u, s, l, f = t + " Iterator",
            h = !1,
            p = e.prototype,
            g = p[Zt] || p["@@iterator"] || o && p[o],
            d = !Kt && g || c(o),
            v = "Array" == t && p.entries || g;
        if (v && (u = Pt(v.call(new e)), Jt !== Object.prototype && u.next && (Pt(u) !== Jt && (Ht ? Ht(u, Jt) : "function" != typeof u[Zt] && U(u, Zt, zt)), qt(u, f, !0))), o == Qt && g && g.name !== Qt && (h = !0, d = function() {
                return g.call(this)
            }), p[Zt] !== d && U(p, Zt, d), Mt[t] = d, o)
            if (s = {
                    values: c(Qt),
                    keys: i ? d : c("keys"),
                    entries: c(er)
                }, a)
                for (l in s) !Kt && !h && l in p || ve(p, l, s[l]);
            else ue({
                target: t,
                proto: !0,
                forced: Kt || h
            }, s);
        return s
    }
    var Vt = {
            IteratorPrototype: kt,
            BUGGY_SAFARI_ITERATORS: jt
        },
        Wt = B.f,
        Gt = fe("toStringTag"),
        Xt = Vt.IteratorPrototype,
        Ht = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var r, n = !1,
                e = {};
            try {
                (r = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []), n = e instanceof Array
            } catch (e) {}
            return function(e, t) {
                return T(e),
                    function(e) {
                        if (!k(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(t), n ? r.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0),
        Jt = Vt.IteratorPrototype,
        Kt = Vt.BUGGY_SAFARI_ITERATORS,
        Zt = fe("iterator"),
        Qt = "values",
        er = "entries",
        tr = "Array Iterator",
        rr = de.set,
        nr = de.getterFor(tr),
        or = Yt(Array, "Array", function(e, t) {
            rr(this, {
                type: tr,
                target: s(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = nr(this),
                t = e.target,
                r = e.kind,
                n = e.index++;
            return !t || n >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: t[n],
                done: !1
            } : {
                value: [n, t[n]],
                done: !1
            }
        }, "values");
    Mt.Arguments = Mt.Array, _t("keys"), _t("values"), _t("entries");
    var ir = B.f,
        ar = Function.prototype,
        cr = ar.toString,
        ur = /^\s*function ([^ (]*)/;
    !M || "name" in ar || ir(ar, "name", {
        configurable: !0,
        get: function() {
            try {
                return cr.call(this).match(ur)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var sr = {};
    sr[fe("toStringTag")] = "z";
    var lr = "[object z]" === String(sr),
        fr = fe("toStringTag"),
        hr = "Arguments" == p(function() {
            return arguments
        }()),
        pr = lr ? p : function(e) {
            var t, r, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), fr)) ? r : hr ? p(t) : "Object" == (n = p(t)) && "function" == typeof t.callee ? "Arguments" : n
        },
        gr = lr ? {}.toString : function() {
            return "[object " + pr(this) + "]"
        };
    lr || ve(Object.prototype, "toString", gr, {
        unsafe: !0
    });

    function dr() {
        var e = T(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }

    function vr(e, t) {
        return RegExp(e, t)
    }
    var yr, mr, wr = {
            UNSUPPORTED_Y: f(function() {
                var e = vr("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            }),
            BROKEN_CARET: f(function() {
                var e = vr("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            })
        },
        br = RegExp.prototype.exec,
        xr = String.prototype.replace,
        Sr = br,
        Ar = (yr = /a/, mr = /b*/g, br.call(yr, "a"), br.call(mr, "a"), 0 !== yr.lastIndex || 0 !== mr.lastIndex),
        Er = wr.UNSUPPORTED_Y || wr.BROKEN_CARET,
        Ir = void 0 !== /()??/.exec("")[1];
    (Ar || Ir || Er) && (Sr = function(e) {
        var t, r, n, o, i = this,
            a = Er && i.sticky,
            c = dr.call(i),
            u = i.source,
            s = 0,
            l = e;
        return a && (-1 === (c = c.replace("y", "")).indexOf("g") && (c += "g"), l = String(e).slice(i.lastIndex), 0 < i.lastIndex && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (u = "(?: " + u + ")", l = " " + l, s++), r = new RegExp("^(?:" + u + ")", c)), Ir && (r = new RegExp("^" + u + "$(?!\\s)", c)), Ar && (t = i.lastIndex), n = br.call(a ? r : i, l), a ? n ? (n.input = n.input.slice(s), n[0] = n[0].slice(s), n.index = i.lastIndex, i.lastIndex += n[0].length) : i.lastIndex = 0 : Ar && n && (i.lastIndex = i.global ? n.index + n[0].length : t), Ir && n && 1 < n.length && xr.call(n[0], r, function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (n[o] = void 0)
        }), n
    });
    var Tr = Sr;
    ue({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Tr
    }, {
        exec: Tr
    });

    function $r(c) {
        return function(e, t) {
            var r, n, o = String(h(e)),
                i = re(t),
                a = o.length;
            return i < 0 || a <= i ? c ? "" : void 0 : (r = o.charCodeAt(i)) < 55296 || 56319 < r || i + 1 === a || (n = o.charCodeAt(i + 1)) < 56320 || 57343 < n ? c ? o.charAt(i) : r : c ? o.slice(i, i + 2) : n - 56320 + (r - 55296 << 10) + 65536
        }
    }
    var Rr = {
            codeAt: $r(!1),
            charAt: $r(!0)
        },
        _r = Rr.charAt,
        kr = "String Iterator",
        Or = de.set,
        Lr = de.getterFor(kr);
    Yt(String, "String", function(e) {
        Or(this, {
            type: kr,
            string: String(e),
            index: 0
        })
    }, function() {
        var e, t = Lr(this),
            r = t.string,
            n = t.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (e = _r(r, n), t.index += e.length, {
            value: e,
            done: !1
        })
    });

    function Mr(r, e, t, n) {
        var i, o, a, c, u = fe(r),
            s = !f(function() {
                var e = {};
                return e[u] = function() {
                    return 7
                }, 7 != "" [r](e)
            }),
            l = s && !f(function() {
                var e = !1,
                    t = /a/;
                return "split" === r && ((t = {
                    constructor: {}
                }).constructor[Fr] = function() {
                    return t
                }, t.flags = "", t[u] = /./ [u]), t.exec = function() {
                    return e = !0, null
                }, t[u](""), !e
            });
        s && l && ("replace" !== r || jr && qr && !Nr) && ("split" !== r || zr) || (i = /./ [u], a = (o = t(u, "" [r], function(e, t, r, n, o) {
            return t.exec === Tr ? s && !o ? {
                done: !0,
                value: i.call(t, r, n)
            } : {
                done: !0,
                value: e.call(r, t, n)
            } : {
                done: !1
            }
        }, {
            REPLACE_KEEPS_$0: qr,
            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Nr
        }))[0], c = o[1], ve(String.prototype, r, a), ve(RegExp.prototype, u, 2 == e ? function(e, t) {
            return c.call(e, this, t)
        } : function(e) {
            return c.call(e, this)
        })), n && U(RegExp.prototype[u], "sham", !0)
    }

    function Cr(e) {
        var t;
        return k(e) && (void 0 !== (t = e[Yr]) ? !!t : "RegExp" == p(e))
    }

    function Br(e, t) {
        var r, n = T(e).constructor;
        return void 0 === n || null == (r = T(n)[Vr]) ? t : rt(r)
    }

    function Ur(e, t, r) {
        return t + (r ? Wr(e, t).length : 1)
    }

    function Pr(e, t) {
        var r = e.exec;
        if ("function" == typeof r) {
            var n = r.call(e, t);
            if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
            return n
        }
        if ("RegExp" !== p(e)) throw TypeError("RegExp#exec called on incompatible receiver");
        return Tr.call(e, t)
    }
    var Fr = fe("species"),
        jr = !f(function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        qr = "$0" === "a".replace(/./, "$0"),
        Dr = fe("replace"),
        Nr = !!/./ [Dr] && "" === /./ [Dr]("a", "$0"),
        zr = !f(function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var r = "ab".split(e);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        }),
        Yr = fe("match"),
        Vr = fe("species"),
        Wr = Rr.charAt,
        Gr = [].push,
        Xr = Math.min,
        Hr = 4294967295,
        Jr = !f(function() {
            return !RegExp(Hr, "y")
        });
    Mr("split", 2, function(o, v, y) {
        var m = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function(e, t) {
            var r = String(h(this)),
                n = void 0 === t ? Hr : t >>> 0;
            if (0 == n) return [];
            if (void 0 === e) return [r];
            if (!Cr(e)) return v.call(r, e, n);
            for (var o, i, a, c = [], u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), s = 0, l = new RegExp(e.source, u + "g");
                (o = Tr.call(l, r)) && !(s < (i = l.lastIndex) && (c.push(r.slice(s, o.index)), 1 < o.length && o.index < r.length && Gr.apply(c, o.slice(1)), a = o[0].length, s = i, c.length >= n));) l.lastIndex === o.index && l.lastIndex++;
            return s === r.length ? !a && l.test("") || c.push("") : c.push(r.slice(s)), c.length > n ? c.slice(0, n) : c
        } : "0".split(void 0, 0).length ? function(e, t) {
            return void 0 === e && 0 === t ? [] : v.call(this, e, t)
        } : v;
        return [function(e, t) {
            var r = h(this),
                n = null == e ? void 0 : e[o];
            return void 0 !== n ? n.call(e, r, t) : m.call(String(r), e, t)
        }, function(e, t) {
            var r = y(m, e, this, t, m !== v);
            if (r.done) return r.value;
            var n = T(e),
                o = String(this),
                i = Br(n, RegExp),
                a = n.unicode,
                c = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (Jr ? "y" : "g"),
                u = new i(Jr ? n : "^(?:" + n.source + ")", c),
                s = void 0 === t ? Hr : t >>> 0;
            if (0 == s) return [];
            if (0 === o.length) return null === Pr(u, o) ? [o] : [];
            for (var l = 0, f = 0, h = []; f < o.length;) {
                u.lastIndex = Jr ? f : 0;
                var p, g = Pr(u, Jr ? o : o.slice(f));
                if (null === g || (p = Xr(ne(u.lastIndex + (Jr ? 0 : f)), o.length)) === l) f = Ur(o, f, a);
                else {
                    if (h.push(o.slice(l, f)), h.length === s) return h;
                    for (var d = 1; d <= g.length - 1; d++)
                        if (h.push(g[d]), h.length === s) return h;
                    f = l = p
                }
            }
            return h.push(o.slice(l)), h
        }]
    }, !Jr);
    var Kr = fe("iterator"),
        Zr = !1;
    try {
        var Qr = 0,
            en = {
                next: function() {
                    return {
                        done: !!Qr++
                    }
                },
                return: function() {
                    Zr = !0
                }
            };
        en[Kr] = function() {
            return this
        }, Array.from(en, function() {
            throw 2
        })
    } catch (e) {}

    function tn(e) {
        return k(e) && O(mn, pr(e))
    }
    var rn, nn = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        on = B.f,
        an = L.Int8Array,
        cn = an && an.prototype,
        un = L.Uint8ClampedArray,
        sn = un && un.prototype,
        ln = an && Pt(an),
        fn = cn && Pt(cn),
        hn = Object.prototype,
        pn = hn.isPrototypeOf,
        gn = fe("toStringTag"),
        dn = R("TYPED_ARRAY_TAG"),
        vn = nn && !!Ht && "Opera" !== pr(L.opera),
        yn = !1,
        mn = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        };
    for (rn in mn) L[rn] || (vn = !1);
    if ((!vn || "function" != typeof ln || ln === Function.prototype) && (ln = function() {
            throw TypeError("Incorrect invocation")
        }, vn))
        for (rn in mn) L[rn] && Ht(L[rn], ln);
    if ((!vn || !fn || fn === hn) && (fn = ln.prototype, vn))
        for (rn in mn) L[rn] && Ht(L[rn].prototype, fn);
    if (vn && Pt(sn) !== fn && Ht(sn, fn), M && !O(fn, gn))
        for (rn in yn = !0, on(fn, gn, {
                get: function() {
                    return k(this) ? this[dn] : void 0
                }
            }), mn) L[rn] && U(L[rn], dn, rn);

    function wn(e, t, r) {
        for (var n in t) ve(e, n, t[n], r);
        return e
    }

    function bn(e, t, r) {
        if (!(e instanceof t)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return e
    }

    function xn(e) {
        if (void 0 === e) return 0;
        var t = re(e),
            r = ne(t);
        if (t !== r) throw RangeError("Wrong length or index");
        return r
    }

    function Sn(e, t, r) {
        for (var n = se(this), o = ne(n.length), i = arguments.length, a = oe(1 < i ? t : void 0, o), c = 2 < i ? r : void 0, u = void 0 === c ? o : oe(c, o); a < u;) n[a++] = e;
        return n
    }

    function An(e) {
        return [255 & e]
    }

    function En(e) {
        return [255 & e, e >> 8 & 255]
    }

    function In(e) {
        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
    }

    function Tn(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
    }

    function $n(e) {
        return oo(e, 23, 4)
    }

    function Rn(e) {
        return oo(e, 52, 8)
    }

    function _n(e, t) {
        Vn(e[Jn], t, {
            get: function() {
                return Wn(this)[t]
            }
        })
    }

    function kn(e, t, r, n) {
        var o = xn(r),
            i = Wn(e);
        if (o + t > i.byteLength) throw no(Kn);
        var a = Wn(i.buffer).bytes,
            c = o + i.byteOffset,
            u = a.slice(c, c + t);
        return n ? u : u.reverse()
    }

    function On(e, t, r, n, o, i) {
        var a = xn(r),
            c = Wn(e);
        if (a + t > c.byteLength) throw no(Kn);
        for (var u = Wn(c.buffer).bytes, s = a + c.byteOffset, l = n(+o), f = 0; f < t; f++) u[s + f] = l[i ? f : t - f - 1]
    }
    var Ln = {
            NATIVE_ARRAY_BUFFER_VIEWS: vn,
            TYPED_ARRAY_TAG: yn && dn,
            aTypedArray: function(e) {
                if (tn(e)) return e;
                throw TypeError("Target is not a typed array")
            },
            aTypedArrayConstructor: function(e) {
                if (Ht) {
                    if (pn.call(ln, e)) return e
                } else
                    for (var t in mn)
                        if (O(mn, rn)) {
                            var r = L[t];
                            if (r && (e === r || pn.call(r, e))) return e
                        } throw TypeError("Target is not a typed array constructor")
            },
            exportTypedArrayMethod: function(e, t, r) {
                if (M) {
                    if (r)
                        for (var n in mn) {
                            var o = L[n];
                            o && O(o.prototype, e) && delete o.prototype[e]
                        }
                    fn[e] && !r || ve(fn, e, !r && vn && cn[e] || t)
                }
            },
            exportTypedArrayStaticMethod: function(e, t, r) {
                var n, o;
                if (M) {
                    if (Ht) {
                        if (r)
                            for (n in mn)(o = L[n]) && O(o, e) && delete o[e];
                        if (ln[e] && !r) return;
                        try {
                            return ve(ln, e, !r && vn && an[e] || t)
                        } catch (e) {}
                    }
                    for (n in mn) !(o = L[n]) || o[e] && !r || ve(o, e, t)
                }
            },
            isView: function(e) {
                var t = pr(e);
                return "DataView" === t || O(mn, t)
            },
            isTypedArray: tn,
            TypedArray: ln,
            TypedArrayPrototype: fn
        },
        Mn = Ln.NATIVE_ARRAY_BUFFER_VIEWS,
        Cn = L.ArrayBuffer,
        Bn = L.Int8Array,
        Un = !Mn || !f(function() {
            Bn(1)
        }) || !f(function() {
            new Bn(-1)
        }) || ! function(e, t) {
            if (!t && !Zr) return !1;
            var r = !1;
            try {
                var n = {};
                n[Kr] = function() {
                    return {
                        next: function() {
                            return {
                                done: r = !0
                            }
                        }
                    }
                }, e(n)
            } catch (e) {}
            return r
        }(function(e) {
            new Bn, new Bn(null), new Bn(1.5), new Bn(e)
        }, !0) || f(function() {
            return 1 !== new Bn(new Cn(2), 1, void 0).length
        }),
        Pn = Math.abs,
        Fn = Math.pow,
        jn = Math.floor,
        qn = Math.log,
        Dn = Math.LN2,
        Nn = function(e, t, r) {
            var n, o, i, a = new Array(r),
                c = 8 * r - t - 1,
                u = (1 << c) - 1,
                s = u >> 1,
                l = 23 === t ? Fn(2, -24) - Fn(2, -77) : 0,
                f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                h = 0;
            for ((e = Pn(e)) != e || e === 1 / 0 ? (o = e != e ? 1 : 0, n = u) : (n = jn(qn(e) / Dn), e * (i = Fn(2, -n)) < 1 && (n--, i *= 2), 2 <= (e += 1 <= n + s ? l / i : l * Fn(2, 1 - s)) * i && (n++, i /= 2), u <= n + s ? (o = 0, n = u) : 1 <= n + s ? (o = (e * i - 1) * Fn(2, t), n += s) : (o = e * Fn(2, s - 1) * Fn(2, t), n = 0)); 8 <= t; a[h++] = 255 & o, o /= 256, t -= 8);
            for (n = n << t | o, c += t; 0 < c; a[h++] = 255 & n, n /= 256, c -= 8);
            return a[--h] |= 128 * f, a
        },
        zn = function(e, t) {
            var r, n = e.length,
                o = 8 * n - t - 1,
                i = (1 << o) - 1,
                a = i >> 1,
                c = o - 7,
                u = n - 1,
                s = e[u--],
                l = 127 & s;
            for (s >>= 7; 0 < c; l = 256 * l + e[u], u--, c -= 8);
            for (r = l & (1 << -c) - 1, l >>= -c, c += t; 0 < c; r = 256 * r + e[u], u--, c -= 8);
            if (0 === l) l = 1 - a;
            else {
                if (l === i) return r ? NaN : s ? -1 / 0 : 1 / 0;
                r += Fn(2, t), l -= a
            }
            return (s ? -1 : 1) * r * Fn(2, l - t)
        },
        Yn = $e.f,
        Vn = B.f,
        Wn = de.get,
        Gn = de.set,
        Xn = "ArrayBuffer",
        Hn = "DataView",
        Jn = "prototype",
        Kn = "Wrong index",
        Zn = L[Xn],
        Qn = Zn,
        eo = L[Hn],
        to = eo && eo[Jn],
        ro = Object.prototype,
        no = L.RangeError,
        oo = Nn,
        io = zn;
    if (nn) {
        if (!f(function() {
                Zn(1)
            }) || !f(function() {
                new Zn(-1)
            }) || f(function() {
                return new Zn, new Zn(1.5), new Zn(NaN), Zn.name != Xn
            })) {
            for (var ao, co = (Qn = function(e) {
                    return bn(this, Qn), new Zn(xn(e))
                })[Jn] = Zn[Jn], uo = Yn(Zn), so = 0; uo.length > so;)(ao = uo[so++]) in Qn || U(Qn, ao, Zn[ao]);
            co.constructor = Qn
        }
        Ht && Pt(to) !== ro && Ht(to, ro);
        var lo = new eo(new Qn(2)),
            fo = to.setInt8;
        lo.setInt8(0, 2147483648), lo.setInt8(1, 2147483649), !lo.getInt8(0) && lo.getInt8(1) || wn(to, {
            setInt8: function(e, t) {
                fo.call(this, e, t << 24 >> 24)
            },
            setUint8: function(e, t) {
                fo.call(this, e, t << 24 >> 24)
            }
        }, {
            unsafe: !0
        })
    } else Qn = function(e) {
        bn(this, Qn, Xn);
        var t = xn(e);
        Gn(this, {
            bytes: Sn.call(new Array(t), 0),
            byteLength: t
        }), M || (this.byteLength = t)
    }, eo = function(e, t, r) {
        bn(this, eo, Hn), bn(e, Qn, Hn);
        var n = Wn(e).byteLength,
            o = re(t);
        if (o < 0 || n < o) throw no("Wrong offset");
        if (n < o + (r = void 0 === r ? n - o : ne(r))) throw no("Wrong length");
        Gn(this, {
            buffer: e,
            byteLength: r,
            byteOffset: o
        }), M || (this.buffer = e, this.byteLength = r, this.byteOffset = o)
    }, M && (_n(Qn, "byteLength"), _n(eo, "buffer"), _n(eo, "byteLength"), _n(eo, "byteOffset")), wn(eo[Jn], {
        getInt8: function(e) {
            return kn(this, 1, e)[0] << 24 >> 24
        },
        getUint8: function(e) {
            return kn(this, 1, e)[0]
        },
        getInt16: function(e, t) {
            var r = kn(this, 2, e, 1 < arguments.length ? t : void 0);
            return (r[1] << 8 | r[0]) << 16 >> 16
        },
        getUint16: function(e, t) {
            var r = kn(this, 2, e, 1 < arguments.length ? t : void 0);
            return r[1] << 8 | r[0]
        },
        getInt32: function(e, t) {
            return Tn(kn(this, 4, e, 1 < arguments.length ? t : void 0))
        },
        getUint32: function(e, t) {
            return Tn(kn(this, 4, e, 1 < arguments.length ? t : void 0)) >>> 0
        },
        getFloat32: function(e, t) {
            return io(kn(this, 4, e, 1 < arguments.length ? t : void 0), 23)
        },
        getFloat64: function(e, t) {
            return io(kn(this, 8, e, 1 < arguments.length ? t : void 0), 52)
        },
        setInt8: function(e, t) {
            On(this, 1, e, An, t)
        },
        setUint8: function(e, t) {
            On(this, 1, e, An, t)
        },
        setInt16: function(e, t, r) {
            On(this, 2, e, En, t, 2 < arguments.length ? r : void 0)
        },
        setUint16: function(e, t, r) {
            On(this, 2, e, En, t, 2 < arguments.length ? r : void 0)
        },
        setInt32: function(e, t, r) {
            On(this, 4, e, In, t, 2 < arguments.length ? r : void 0)
        },
        setUint32: function(e, t, r) {
            On(this, 4, e, In, t, 2 < arguments.length ? r : void 0)
        },
        setFloat32: function(e, t, r) {
            On(this, 4, e, $n, t, 2 < arguments.length ? r : void 0)
        },
        setFloat64: function(e, t, r) {
            On(this, 8, e, Rn, t, 2 < arguments.length ? r : void 0)
        }
    });
    qt(Qn, Xn), qt(eo, Hn);

    function ho(e, t) {
        var r = function(e) {
            var t = re(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t
        }(e);
        if (r % t) throw RangeError("Wrong offset");
        return r
    }

    function po(e) {
        if (null != e) return e[bo] || e["@@iterator"] || Mt[pr(e)]
    }

    function go(e) {
        return void 0 !== e && (Mt.Array === e || So[xo] === e)
    }

    function vo(e, t, r) {
        var n, o, i, a, c, u, s = se(e),
            l = arguments.length,
            f = 1 < l ? t : void 0,
            h = void 0 !== f,
            p = po(s);
        if (null != p && !go(p))
            for (u = (c = p.call(s)).next, s = []; !(a = u.call(c)).done;) s.push(a.value);
        for (h && 2 < l && (f = nt(f, r, 2)), o = ne(s.length), i = new(Ao(this))(o), n = 0; n < o; n++) i[n] = h ? f(s[n], n) : s[n];
        return i
    }

    function yo(e) {
        var t = te(e),
            r = B.f;
        M && t && !t[Eo] && r(t, Eo, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }

    function mo(e, t, r) {
        var n, o;
        return Ht && "function" == typeof(n = t.constructor) && n !== r && k(o = n.prototype) && o !== r.prototype && Ht(e, o), e
    }
    var wo = {
            ArrayBuffer: Qn,
            DataView: eo
        },
        bo = fe("iterator"),
        xo = fe("iterator"),
        So = Array.prototype,
        Ao = Ln.aTypedArrayConstructor,
        Eo = fe("species");
    t(function(e) {
        function g(e, t) {
            for (var r = 0, n = t.length, o = new(a(e))(n); r < n;) o[r] = t[r++];
            return o
        }

        function t(e, t) {
            m(e, t, {
                get: function() {
                    return v(this)[t]
                }
            })
        }

        function d(e) {
            var t;
            return e instanceof x || "ArrayBuffer" == (t = pr(e)) || "SharedArrayBuffer" == t
        }

        function n(e, t) {
            return $(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
        }

        function r(e, t) {
            return n(e, t = l(t, !0)) ? c(2, e[t]) : i(e, t)
        }

        function o(e, t, r) {
            return !(n(e, t = l(t, !0)) && k(r) && O(r, "value")) || O(r, "get") || O(r, "set") || r.configurable || O(r, "writable") && !r.writable || O(r, "enumerable") && !r.enumerable ? m(e, t, r) : (e[t] = r.value, e)
        }
        var u = $e.f,
            s = st.forEach,
            v = de.get,
            y = de.set,
            m = B.f,
            i = C.f,
            w = Math.round,
            b = L.RangeError,
            x = wo.ArrayBuffer,
            S = wo.DataView,
            A = Ln.NATIVE_ARRAY_BUFFER_VIEWS,
            E = Ln.TYPED_ARRAY_TAG,
            I = Ln.TypedArray,
            T = Ln.TypedArrayPrototype,
            a = Ln.aTypedArrayConstructor,
            $ = Ln.isTypedArray,
            R = "BYTES_PER_ELEMENT",
            _ = "Wrong length";
        M ? (A || (C.f = r, B.f = o, t(T, "buffer"), t(T, "byteOffset"), t(T, "byteLength"), t(T, "length")), ue({
            target: "Object",
            stat: !0,
            forced: !A
        }, {
            getOwnPropertyDescriptor: r,
            defineProperty: o
        }), e.exports = function(e, t, i) {
            function l(e, o) {
                m(e, o, {
                    get: function() {
                        return e = o, (t = v(this)).view[r](e * f + t.byteOffset, !0);
                        var e, t
                    },
                    set: function(e) {
                        return t = o, r = e, n = v(this), i && (r = (r = w(r)) < 0 ? 0 : 255 < r ? 255 : 255 & r), void n.view[a](t * f + n.byteOffset, r, !0);
                        var t, r, n
                    },
                    enumerable: !0
                })
            }
            var f = e.match(/\d+$/)[0] / 8,
                h = e + (i ? "Clamped" : "") + "Array",
                r = "get" + e,
                a = "set" + e,
                o = L[h],
                p = o,
                n = p && p.prototype,
                c = {};
            A ? Un && (p = t(function(e, t, r, n) {
                return bn(e, p, h), mo(k(t) ? d(t) ? void 0 !== n ? new o(t, ho(r, f), n) : void 0 !== r ? new o(t, ho(r, f)) : new o(t) : $(t) ? g(p, t) : vo.call(p, t) : new o(xn(t)), e, p)
            }), Ht && Ht(p, I), s(u(o), function(e) {
                e in p || U(p, e, o[e])
            }), p.prototype = n) : (p = t(function(e, t, r, n) {
                bn(e, p, h);
                var o, i, a, c = 0,
                    u = 0;
                if (k(t)) {
                    if (!d(t)) return $(t) ? g(p, t) : vo.call(p, t);
                    o = t, u = ho(r, f);
                    var s = t.byteLength;
                    if (void 0 === n) {
                        if (s % f) throw b(_);
                        if ((i = s - u) < 0) throw b(_)
                    } else if (s < (i = ne(n) * f) + u) throw b(_);
                    a = i / f
                } else a = xn(t), o = new x(i = a * f);
                for (y(e, {
                        buffer: o,
                        byteOffset: u,
                        byteLength: i,
                        length: a,
                        view: new S(o)
                    }); c < a;) l(e, c++)
            }), Ht && Ht(p, I), n = p.prototype = Tt(T)), n.constructor !== p && U(n, "constructor", p), E && U(n, E, h), c[h] = p, ue({
                global: !0,
                forced: p != o,
                sham: !A
            }, c), R in p || U(p, R, f), R in n || U(n, R, f), yo(h)
        }) : e.exports = function() {}
    })("Uint8", function(n) {
        return function(e, t, r) {
            return n(this, e, t, r)
        }
    });
    var Io = Math.min,
        To = [].copyWithin || function(e, t, r) {
            var n = se(this),
                o = ne(n.length),
                i = oe(e, o),
                a = oe(t, o),
                c = 2 < arguments.length ? r : void 0,
                u = Io((void 0 === c ? o : oe(c, o)) - a, o - i),
                s = 1;
            for (a < i && i < a + u && (s = -1, a += u - 1, i += u - 1); 0 < u--;) a in n ? n[i] = n[a] : delete n[i], i += s, a += s;
            return n
        },
        $o = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("copyWithin", function(e, t, r) {
        return To.call($o(this), e, t, 2 < arguments.length ? r : void 0)
    });
    var Ro = st.every,
        _o = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("every", function(e, t) {
        return Ro(_o(this), e, 1 < arguments.length ? t : void 0)
    });
    var ko = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("fill", function(e) {
        return Sn.apply(ko(this), arguments)
    });
    var Oo = st.filter,
        Lo = Ln.aTypedArray,
        Mo = Ln.aTypedArrayConstructor;
    (0, Ln.exportTypedArrayMethod)("filter", function(e, t) {
        for (var r = Oo(Lo(this), e, 1 < arguments.length ? t : void 0), n = Br(this, this.constructor), o = 0, i = r.length, a = new(Mo(n))(i); o < i;) a[o] = r[o++];
        return a
    });
    var Co = st.find,
        Bo = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("find", function(e, t) {
        return Co(Bo(this), e, 1 < arguments.length ? t : void 0)
    });
    var Uo = st.findIndex,
        Po = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("findIndex", function(e, t) {
        return Uo(Po(this), e, 1 < arguments.length ? t : void 0)
    });
    var Fo = st.forEach,
        jo = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("forEach", function(e, t) {
        Fo(jo(this), e, 1 < arguments.length ? t : void 0)
    });
    var qo = Ae.includes,
        Do = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("includes", function(e, t) {
        return qo(Do(this), e, 1 < arguments.length ? t : void 0)
    });
    var No = Ae.indexOf,
        zo = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("indexOf", function(e, t) {
        return No(zo(this), e, 1 < arguments.length ? t : void 0)
    });

    function Yo() {
        return Go.call(Jo(this))
    }
    var Vo = fe("iterator"),
        Wo = L.Uint8Array,
        Go = or.values,
        Xo = or.keys,
        Ho = or.entries,
        Jo = Ln.aTypedArray,
        Ko = Ln.exportTypedArrayMethod,
        Zo = Wo && Wo.prototype[Vo],
        Qo = !!Zo && ("values" == Zo.name || null == Zo.name);
    Ko("entries", function() {
        return Ho.call(Jo(this))
    }), Ko("keys", function() {
        return Xo.call(Jo(this))
    }), Ko("values", Yo, !Qo), Ko(Vo, Yo, !Qo);
    var ei = Ln.aTypedArray,
        ti = [].join;
    (0, Ln.exportTypedArrayMethod)("join", function(e) {
        return ti.apply(ei(this), arguments)
    });
    var ri = Math.min,
        ni = [].lastIndexOf,
        oi = !!ni && 1 / [1].lastIndexOf(1, -0) < 0,
        ii = it("lastIndexOf"),
        ai = ct("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        ci = oi || !ii || !ai ? function(e, t) {
            if (oi) return ni.apply(this, arguments) || 0;
            var r = s(this),
                n = ne(r.length),
                o = n - 1;
            for (1 < arguments.length && (o = ri(o, re(t))), o < 0 && (o = n + o); 0 <= o; o--)
                if (o in r && r[o] === e) return o || 0;
            return -1
        } : ni,
        ui = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("lastIndexOf", function(e) {
        return ci.apply(ui(this), arguments)
    });
    var si = st.map,
        li = Ln.aTypedArray,
        fi = Ln.aTypedArrayConstructor;
    (0, Ln.exportTypedArrayMethod)("map", function(e, t) {
        return si(li(this), e, 1 < arguments.length ? t : void 0, function(e, t) {
            return new(fi(Br(e, e.constructor)))(t)
        })
    });

    function hi(s) {
        return function(e, t, r, n) {
            rt(t);
            var o = se(e),
                i = b(o),
                a = ne(o.length),
                c = s ? a - 1 : 0,
                u = s ? -1 : 1;
            if (r < 2)
                for (;;) {
                    if (c in i) {
                        n = i[c], c += u;
                        break
                    }
                    if (c += u, s ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; s ? 0 <= c : c < a; c += u) c in i && (n = t(n, i[c], c, o));
            return n
        }
    }
    var pi = {
            left: hi(!1),
            right: hi(!0)
        },
        gi = pi.left,
        di = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("reduce", function(e, t) {
        return gi(di(this), e, arguments.length, 1 < arguments.length ? t : void 0)
    });
    var vi = pi.right,
        yi = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("reduceRight", function(e, t) {
        return vi(yi(this), e, arguments.length, 1 < arguments.length ? t : void 0)
    });
    var mi = Ln.aTypedArray,
        wi = Ln.exportTypedArrayMethod,
        bi = Math.floor;
    wi("reverse", function() {
        for (var e, t = this, r = mi(t).length, n = bi(r / 2), o = 0; o < n;) e = t[o], t[o++] = t[--r], t[r] = e;
        return t
    });
    var xi = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("set", function(e, t) {
        xi(this);
        var r = ho(1 < arguments.length ? t : void 0, 1),
            n = this.length,
            o = se(e),
            i = ne(o.length),
            a = 0;
        if (n < i + r) throw RangeError("Wrong length");
        for (; a < i;) this[r + a] = o[a++]
    }, f(function() {
        new Int8Array(1).set({})
    }));
    var Si = Ln.aTypedArray,
        Ai = Ln.aTypedArrayConstructor,
        Ei = [].slice;
    (0, Ln.exportTypedArrayMethod)("slice", function(e, t) {
        for (var r = Ei.call(Si(this), e, t), n = Br(this, this.constructor), o = 0, i = r.length, a = new(Ai(n))(i); o < i;) a[o] = r[o++];
        return a
    }, f(function() {
        new Int8Array(1).slice()
    }));
    var Ii = st.some,
        Ti = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("some", function(e, t) {
        return Ii(Ti(this), e, 1 < arguments.length ? t : void 0)
    });
    var $i = Ln.aTypedArray,
        Ri = [].sort;
    (0, Ln.exportTypedArrayMethod)("sort", function(e) {
        return Ri.call($i(this), e)
    });
    var _i = Ln.aTypedArray;
    (0, Ln.exportTypedArrayMethod)("subarray", function(e, t) {
        var r = _i(this),
            n = r.length,
            o = oe(e, n);
        return new(Br(r, r.constructor))(r.buffer, r.byteOffset + o * r.BYTES_PER_ELEMENT, ne((void 0 === t ? n : oe(t, n)) - o))
    });
    var ki = L.Int8Array,
        Oi = Ln.aTypedArray,
        Li = Ln.exportTypedArrayMethod,
        Mi = [].toLocaleString,
        Ci = [].slice,
        Bi = !!ki && f(function() {
            Mi.call(new ki(1))
        });
    Li("toLocaleString", function() {
        return Mi.apply(Bi ? Ci.call(Oi(this)) : Oi(this), arguments)
    }, f(function() {
        return [1, 2].toLocaleString() != new ki([1, 2]).toLocaleString()
    }) || !f(function() {
        ki.prototype.toLocaleString.call([1, 2])
    }));
    var Ui = Ln.exportTypedArrayMethod,
        Pi = L.Uint8Array,
        Fi = Pi && Pi.prototype || {},
        ji = [].toString,
        qi = [].join;
    f(function() {
        ji.call({})
    }) && (ji = function() {
        return qi.call(this)
    }), Ui("toString", ji, Fi.toString != ji);
    var Di = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var Ni in Di) {
        var zi = L[Ni],
            Yi = zi && zi.prototype;
        if (Yi && Yi.forEach !== dt) try {
            U(Yi, "forEach", dt)
        } catch (e) {
            Yi.forEach = dt
        }
    }
    var Vi = fe("iterator"),
        Wi = fe("toStringTag"),
        Gi = or.values;
    for (var Xi in Di) {
        var Hi = L[Xi],
            Ji = Hi && Hi.prototype;
        if (Ji) {
            if (Ji[Vi] !== Gi) try {
                U(Ji, Vi, Gi)
            } catch (e) {
                Ji[Vi] = Gi
            }
            if (Ji[Wi] || U(Ji, Wi, Xi), Di[Xi])
                for (var Ki in or)
                    if (Ji[Ki] !== or[Ki]) try {
                        U(Ji, Ki, or[Ki])
                    } catch (e) {
                        Ji[Ki] = or[Ki]
                    }
        }
    }

    function Zi(e, t, r) {
        var n, o, i, a, c, u, s = se(e),
            l = "function" == typeof this ? this : Array,
            f = arguments.length,
            h = 1 < f ? t : void 0,
            p = void 0 !== h,
            g = po(s),
            d = 0;
        if (p && (h = nt(h, 2 < f ? r : void 0, 2)), null == g || l == Array && go(g))
            for (o = new l(n = ne(s.length)); d < n; d++) u = p ? h(s[d], d) : s[d], le(o, d, u);
        else
            for (c = (a = g.call(s)).next, o = new l; !(i = c.call(a)).done; d++) u = p ? function(t, e, r, n) {
                try {
                    return n ? e(T(r)[0], r[1]) : e(r)
                } catch (e) {
                    var o = t.return;
                    throw void 0 !== o && T(o.call(t)), e
                }
            }(a, h, [i.value, d], !0) : i.value, le(o, d, u);
        return o.length = d, o
    }

    function Qi(e) {
        return e + 22 + 75 * (e < 26)
    }

    function ea(e) {
        var t, r = [],
            n = (e = function(e) {
                for (var t = [], r = 0, n = e.length; r < n;) {
                    var o, i = e.charCodeAt(r++);
                    55296 <= i && i <= 56319 && r < n ? 56320 == (64512 & (o = e.charCodeAt(r++))) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), r--) : t.push(i)
                }
                return t
            }(e)).length,
            o = 128,
            i = 0,
            a = 72;
        for (l = 0; l < e.length; l++)(t = e[l]) < 128 && r.push(wa(t));
        var c = r.length,
            u = c;
        for (c && r.push("-"); u < n;) {
            for (var s = ga, l = 0; l < e.length; l++) o <= (t = e[l]) && t < s && (s = t);
            var f = u + 1;
            if (s - o > ma((ga - i) / f)) throw RangeError(ya);
            for (i += (s - o) * f, o = s, l = 0; l < e.length; l++) {
                if ((t = e[l]) < o && ++i > ga) throw RangeError(ya);
                if (t == o) {
                    for (var h = i, p = 36;; p += 36) {
                        var g = p <= a ? 1 : a + 26 <= p ? 26 : p - a;
                        if (h < g) break;
                        var d = h - g,
                            v = 36 - g;
                        r.push(wa(Qi(g + d % v))), h = ma(d / v)
                    }
                    r.push(wa(Qi(h))), a = function(e, t, r) {
                        var n = 0;
                        for (e = r ? ma(e / 700) : e >> 1, e += ma(e / t); 455 < e; n += 36) e = ma(e / 35);
                        return ma(n + 36 * e / (e + 38))
                    }(i, f, u == c), i = 0, ++u
                }
            }++i, ++o
        }
        return r.join("")
    }

    function ta(e) {
        var t = po(e);
        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
        return T(t.call(e))
    }

    function ra(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return t
        }
    }

    function na(e) {
        var t = e.replace(Ra, " "),
            r = 4;
        try {
            return decodeURIComponent(t)
        } catch (e) {
            for (; r;) t = t.replace(function(e) {
                return _a[e - 1] || (_a[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
            }(r--), ra);
            return t
        }
    }

    function oa(e) {
        return Oa[e]
    }

    function ia(e) {
        return encodeURIComponent(e).replace(ka, oa)
    }

    function aa(e, t) {
        if (t)
            for (var r, n, o = t.split("&"), i = 0; i < o.length;)(r = o[i++]).length && (n = r.split("="), e.push({
                key: na(n.shift()),
                value: na(n.join("="))
            }))
    }

    function ca(e) {
        this.entries.length = 0, aa(this.entries, e)
    }

    function ua(e, t) {
        if (e < t) throw TypeError("Not enough arguments")
    }
    var sa = fe("iterator"),
        la = !f(function() {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                r = e.searchParams,
                n = "";
            return e.pathname = "c%20d", r.forEach(function(e, t) {
                r.delete("b"), n += t + e
            }), !r.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== r.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r[sa] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://Ñ‚ÐµÑÑ‚").host || "#%D0%B1" !== new URL("http://a#Ð±").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        }),
        fa = Object.assign,
        ha = Object.defineProperty,
        pa = !fa || f(function() {
            if (M && 1 !== fa({
                    b: 1
                }, fa(ha({}, "a", {
                    enumerable: !0,
                    get: function() {
                        ha(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return 1;
            var e = {},
                t = {},
                r = Symbol(),
                n = "abcdefghijklmnopqrst";
            return e[r] = 7, n.split("").forEach(function(e) {
                t[e] = e
            }), 7 != fa({}, e)[r] || wt(fa({}, t)).join("") != n
        }) ? function(e, t) {
            for (var r = se(e), n = arguments.length, o = 1, i = Re.f, a = d.f; o < n;)
                for (var c, u = b(arguments[o++]), s = i ? wt(u).concat(i(u)) : wt(u), l = s.length, f = 0; f < l;) c = s[f++], M && !a.call(u, c) || (r[c] = u[c]);
            return r
        } : fa,
        ga = 2147483647,
        da = /[^\0-\u007E]/,
        va = /[.\u3002\uFF0E\uFF61]/g,
        ya = "Overflow: input needs wider integers to process",
        ma = Math.floor,
        wa = String.fromCharCode,
        ba = te("fetch"),
        xa = te("Headers"),
        Sa = fe("iterator"),
        Aa = "URLSearchParams",
        Ea = Aa + "Iterator",
        Ia = de.set,
        Ta = de.getterFor(Aa),
        $a = de.getterFor(Ea),
        Ra = /\+/g,
        _a = Array(4),
        ka = /[!'()~]|%20/g,
        Oa = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        La = Nt(function(e, t) {
            Ia(this, {
                type: Ea,
                iterator: ta(Ta(e).entries),
                kind: t
            })
        }, "Iterator", function() {
            var e = $a(this),
                t = e.kind,
                r = e.iterator.next(),
                n = r.value;
            return r.done || (r.value = "keys" === t ? n.key : "values" === t ? n.value : [n.key, n.value]), r
        }),
        Ma = function(e) {
            bn(this, Ma, Aa);
            var t, r, n, o, i, a, c, u, s, l = 0 < arguments.length ? e : void 0,
                f = [];
            if (Ia(this, {
                    type: Aa,
                    entries: f,
                    updateURL: function() {},
                    updateSearchParams: ca
                }), void 0 !== l)
                if (k(l))
                    if ("function" == typeof(t = po(l)))
                        for (n = (r = t.call(l)).next; !(o = n.call(r)).done;) {
                            if ((c = (a = (i = ta(T(o.value))).next).call(i)).done || (u = a.call(i)).done || !a.call(i).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: c.value + "",
                                value: u.value + ""
                            })
                        } else
                            for (s in l) O(l, s) && f.push({
                                key: s,
                                value: l[s] + ""
                            });
                    else aa(f, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "")
        },
        Ca = Ma.prototype;
    wn(Ca, {
        append: function(e, t) {
            ua(arguments.length, 2);
            var r = Ta(this);
            r.entries.push({
                key: e + "",
                value: t + ""
            }), r.updateURL()
        },
        delete: function(e) {
            ua(arguments.length, 1);
            for (var t = Ta(this), r = t.entries, n = e + "", o = 0; o < r.length;) r[o].key === n ? r.splice(o, 1) : o++;
            t.updateURL()
        },
        get: function(e) {
            ua(arguments.length, 1);
            for (var t = Ta(this).entries, r = e + "", n = 0; n < t.length; n++)
                if (t[n].key === r) return t[n].value;
            return null
        },
        getAll: function(e) {
            ua(arguments.length, 1);
            for (var t = Ta(this).entries, r = e + "", n = [], o = 0; o < t.length; o++) t[o].key === r && n.push(t[o].value);
            return n
        },
        has: function(e) {
            ua(arguments.length, 1);
            for (var t = Ta(this).entries, r = e + "", n = 0; n < t.length;)
                if (t[n++].key === r) return !0;
            return !1
        },
        set: function(e, t) {
            ua(arguments.length, 1);
            for (var r, n = Ta(this), o = n.entries, i = !1, a = e + "", c = t + "", u = 0; u < o.length; u++)(r = o[u]).key === a && (i ? o.splice(u--, 1) : (i = !0, r.value = c));
            i || o.push({
                key: a,
                value: c
            }), n.updateURL()
        },
        sort: function() {
            for (var e, t, r = Ta(this), n = r.entries, o = n.slice(), i = n.length = 0; i < o.length; i++) {
                for (e = o[i], t = 0; t < i; t++)
                    if (n[t].key > e.key) {
                        n.splice(t, 0, e);
                        break
                    } t === i && n.push(e)
            }
            r.updateURL()
        },
        forEach: function(e, t) {
            for (var r, n = Ta(this).entries, o = nt(e, 1 < arguments.length ? t : void 0, 3), i = 0; i < n.length;) o((r = n[i++]).value, r.key, this)
        },
        keys: function() {
            return new La(this, "keys")
        },
        values: function() {
            return new La(this, "values")
        },
        entries: function() {
            return new La(this, "entries")
        }
    }, {
        enumerable: !0
    }), ve(Ca, Sa, Ca.entries), ve(Ca, "toString", function() {
        for (var e, t = Ta(this).entries, r = [], n = 0; n < t.length;) e = t[n++], r.push(ia(e.key) + "=" + ia(e.value));
        return r.join("&")
    }, {
        enumerable: !0
    }), qt(Ma, Aa), ue({
        global: !0,
        forced: !la
    }, {
        URLSearchParams: Ma
    }), la || "function" != typeof ba || "function" != typeof xa || ue({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e, t) {
            var r, n, o, i = [e];
            return 1 < arguments.length && (k(r = t) && (n = r.body, pr(n) === Aa && ((o = r.headers ? new xa(r.headers) : new xa).has("content-type") || o.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), r = Tt(r, {
                body: c(0, String(n)),
                headers: c(0, o)
            }))), i.push(r)), ba.apply(this, i)
        }
    });

    function Ba(e, t) {
        var r, n, o;
        if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1)) return nc;
            if (!(r = yc(t.slice(1, -1)))) return nc;
            e.host = r
        } else if (Ec(e)) {
            if (t = function(e) {
                    for (var t, r = [], n = e.toLowerCase().replace(va, ".").split("."), o = 0; o < n.length; o++) t = n[o], r.push(da.test(t) ? "xn--" + ea(t) : t);
                    return r.join(".")
                }(t), hc.test(t)) return nc;
            if (null === (r = vc(t))) return nc;
            e.host = r
        } else {
            if (pc.test(t)) return nc;
            for (r = "", n = Zi(t), o = 0; o < n.length; o++) r += Sc(n[o], mc);
            e.host = r
        }
    }

    function Ua(e) {
        var t, r, n, o;
        if ("number" == typeof e) {
            for (t = [], r = 0; r < 4; r++) t.unshift(e % 256), e = ec(e / 256);
            return t.join(".")
        }
        if ("object" != typeof e) return e;
        for (t = "", n = function(e) {
                for (var t = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (r < o && (t = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                return r < o && (t = n, r = o), t
            }(e), r = 0; r < 8; r++) o && 0 === e[r] || (o = o && !1, n === r ? (t += r ? ":" : "::", o = !0) : (t += e[r].toString(16), r < 7 && (t += ":")));
        return "[" + t + "]"
    }

    function Pa(e) {
        return "" != e.username || "" != e.password
    }

    function Fa(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
    }

    function ja(e, t) {
        var r;
        return 2 == e.length && ic.test(e.charAt(0)) && (":" == (r = e.charAt(1)) || !t && "|" == r)
    }

    function qa(e) {
        var t;
        return 1 < e.length && ja(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
    }

    function Da(e) {
        var t = e.path,
            r = t.length;
        !r || "file" == e.scheme && 1 == r && ja(t[0], !0) || t.pop()
    }

    function Na(e, t, r, n) {
        var o, i, a, c, u, s, l = r || Ic,
            f = 0,
            h = "",
            p = !1,
            g = !1,
            d = !1;
        for (r || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(gc, "")), t = t.replace(dc, ""), o = Zi(t); f <= o.length;) {
            switch (i = o[f], l) {
                case Ic:
                    if (!i || !ic.test(i)) {
                        if (r) return rc;
                        l = $c;
                        continue
                    }
                    h += i.toLowerCase(), l = Tc;
                    break;
                case Tc:
                    if (i && (ac.test(i) || "+" == i || "-" == i || "." == i)) h += i.toLowerCase();
                    else {
                        if (":" != i) {
                            if (r) return rc;
                            h = "", l = $c, f = 0;
                            continue
                        }
                        if (r && (Ec(e) != O(Ac, h) || "file" == h && (Pa(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                        if (e.scheme = h, r) return void(Ec(e) && Ac[e.scheme] == e.port && (e.port = null));
                        h = "", "file" == e.scheme ? l = Fc : Ec(e) && n && n.scheme == e.scheme ? l = Rc : Ec(e) ? l = Lc : "/" == o[f + 1] ? (l = _c, f++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = zc)
                    }
                    break;
                case $c:
                    if (!n || n.cannotBeABaseURL && "#" != i) return rc;
                    if (n.cannotBeABaseURL && "#" == i) {
                        e.scheme = n.scheme, e.path = n.path.slice(), e.query = n.query, e.fragment = "", e.cannotBeABaseURL = !0, l = Vc;
                        break
                    }
                    l = "file" == n.scheme ? Fc : kc;
                    continue;
                case Rc:
                    if ("/" != i || "/" != o[f + 1]) {
                        l = kc;
                        continue
                    }
                    l = Mc, f++;
                    break;
                case _c:
                    if ("/" == i) {
                        l = Cc;
                        break
                    }
                    l = Nc;
                    continue;
                case kc:
                    if (e.scheme = n.scheme, i == Ya) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query;
                    else if ("/" == i || "\\" == i && Ec(e)) l = Oc;
                    else if ("?" == i) e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = "", l = Yc;
                    else {
                        if ("#" != i) {
                            e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.path.pop(), l = Nc;
                            continue
                        }
                        e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, e.path = n.path.slice(), e.query = n.query, e.fragment = "", l = Vc
                    }
                    break;
                case Oc:
                    if (!Ec(e) || "/" != i && "\\" != i) {
                        if ("/" != i) {
                            e.username = n.username, e.password = n.password, e.host = n.host, e.port = n.port, l = Nc;
                            continue
                        }
                        l = Cc
                    } else l = Mc;
                    break;
                case Lc:
                    if (l = Mc, "/" != i || "/" != h.charAt(f + 1)) continue;
                    f++;
                    break;
                case Mc:
                    if ("/" == i || "\\" == i) break;
                    l = Cc;
                    continue;
                case Cc:
                    if ("@" == i) {
                        p && (h = "%40" + h), p = !0, a = Zi(h);
                        for (var v = 0; v < a.length; v++) {
                            var y, m = a[v];
                            ":" != m || d ? (y = Sc(m, xc), d ? e.password += y : e.username += y) : d = !0
                        }
                        h = ""
                    } else if (i == Ya || "/" == i || "?" == i || "#" == i || "\\" == i && Ec(e)) {
                        if (p && "" == h) return "Invalid authority";
                        f -= Zi(h).length + 1, h = "", l = Bc
                    } else h += i;
                    break;
                case Bc:
                case Uc:
                    if (r && "file" == e.scheme) {
                        l = qc;
                        continue
                    }
                    if (":" != i || g) {
                        if (i == Ya || "/" == i || "?" == i || "#" == i || "\\" == i && Ec(e)) {
                            if (Ec(e) && "" == h) return nc;
                            if (r && "" == h && (Pa(e) || null !== e.port)) return;
                            if (c = Ba(e, h)) return c;
                            if (h = "", l = Dc, r) return;
                            continue
                        }
                        "[" == i ? g = !0 : "]" == i && (g = !1), h += i
                    } else {
                        if ("" == h) return nc;
                        if (c = Ba(e, h)) return c;
                        if (h = "", l = Pc, r == Uc) return
                    }
                    break;
                case Pc:
                    if (!cc.test(i)) {
                        if (i == Ya || "/" == i || "?" == i || "#" == i || "\\" == i && Ec(e) || r) {
                            if ("" != h) {
                                var w = parseInt(h, 10);
                                if (65535 < w) return oc;
                                e.port = Ec(e) && w === Ac[e.scheme] ? null : w, h = ""
                            }
                            if (r) return;
                            l = Dc;
                            continue
                        }
                        return oc
                    }
                    h += i;
                    break;
                case Fc:
                    if (e.scheme = "file", "/" == i || "\\" == i) l = jc;
                    else {
                        if (!n || "file" != n.scheme) {
                            l = Nc;
                            continue
                        }
                        if (i == Ya) e.host = n.host, e.path = n.path.slice(), e.query = n.query;
                        else if ("?" == i) e.host = n.host, e.path = n.path.slice(), e.query = "", l = Yc;
                        else {
                            if ("#" != i) {
                                qa(o.slice(f).join("")) || (e.host = n.host, e.path = n.path.slice(), Da(e)), l = Nc;
                                continue
                            }
                            e.host = n.host, e.path = n.path.slice(), e.query = n.query, e.fragment = "", l = Vc
                        }
                    }
                    break;
                case jc:
                    if ("/" == i || "\\" == i) {
                        l = qc;
                        break
                    }
                    n && "file" == n.scheme && !qa(o.slice(f).join("")) && (ja(n.path[0], !0) ? e.path.push(n.path[0]) : e.host = n.host), l = Nc;
                    continue;
                case qc:
                    if (i == Ya || "/" == i || "\\" == i || "?" == i || "#" == i) {
                        if (!r && ja(h)) l = Nc;
                        else if ("" == h) {
                            if (e.host = "", r) return;
                            l = Dc
                        } else {
                            if (c = Ba(e, h)) return c;
                            if ("localhost" == e.host && (e.host = ""), r) return;
                            h = "", l = Dc
                        }
                        continue
                    }
                    h += i;
                    break;
                case Dc:
                    if (Ec(e)) {
                        if (l = Nc, "/" != i && "\\" != i) continue
                    } else if (r || "?" != i)
                        if (r || "#" != i) {
                            if (i != Ya && (l = Nc, "/" != i)) continue
                        } else e.fragment = "", l = Vc;
                    else e.query = "", l = Yc;
                    break;
                case Nc:
                    if (i == Ya || "/" == i || "\\" == i && Ec(e) || !r && ("?" == i || "#" == i)) {
                        if (".." === (s = (s = h).toLowerCase()) || "%2e." === s || ".%2e" === s || "%2e%2e" === s ? (Da(e), "/" == i || "\\" == i && Ec(e) || e.path.push("")) : "." === (u = h) || "%2e" === u.toLowerCase() ? "/" == i || "\\" == i && Ec(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && ja(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (i == Ya || "?" == i || "#" == i))
                            for (; 1 < e.path.length && "" === e.path[0];) e.path.shift();
                        "?" == i ? (e.query = "", l = Yc) : "#" == i && (e.fragment = "", l = Vc)
                    } else h += Sc(i, bc);
                    break;
                case zc:
                    "?" == i ? (e.query = "", l = Yc) : "#" == i ? (e.fragment = "", l = Vc) : i != Ya && (e.path[0] += Sc(i, mc));
                    break;
                case Yc:
                    r || "#" != i ? i != Ya && ("'" == i && Ec(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : Sc(i, mc)) : (e.fragment = "", l = Vc);
                    break;
                case Vc:
                    i != Ya && (e.fragment += Sc(i, wc))
            }
            f++
        }
    }

    function za(e, t) {
        return {
            get: e,
            set: t,
            configurable: !0,
            enumerable: !0
        }
    }
    var Ya, Va, Wa, Ga = {
            URLSearchParams: Ma,
            getState: Ta
        },
        Xa = Rr.codeAt,
        Ha = L.URL,
        Ja = Ga.URLSearchParams,
        Ka = Ga.getState,
        Za = de.set,
        Qa = de.getterFor("URL"),
        ec = Math.floor,
        tc = Math.pow,
        rc = "Invalid scheme",
        nc = "Invalid host",
        oc = "Invalid port",
        ic = /[A-Za-z]/,
        ac = /[\d+-.A-Za-z]/,
        cc = /\d/,
        uc = /^(0x|0X)/,
        sc = /^[0-7]+$/,
        lc = /^\d+$/,
        fc = /^[\dA-Fa-f]+$/,
        hc = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        pc = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        gc = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        dc = /[\u0009\u000A\u000D]/g,
        vc = function(e) {
            var t, r, n, o, i, a, c, u = e.split(".");
            if (u.length && "" == u[u.length - 1] && u.pop(), 4 < (t = u.length)) return e;
            for (r = [], n = 0; n < t; n++) {
                if ("" == (o = u[n])) return e;
                if (i = 10, 1 < o.length && "0" == o.charAt(0) && (i = uc.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;
                else {
                    if (!(10 == i ? lc : 8 == i ? sc : fc).test(o)) return e;
                    a = parseInt(o, i)
                }
                r.push(a)
            }
            for (n = 0; n < t; n++)
                if (a = r[n], n == t - 1) {
                    if (a >= tc(256, 5 - t)) return null
                } else if (255 < a) return null;
            for (c = r.pop(), n = 0; n < r.length; n++) c += r[n] * tc(256, 3 - n);
            return c
        },
        yc = function(e) {
            function t() {
                return e.charAt(h)
            }
            var r, n, o, i, a, c, u, s = [0, 0, 0, 0, 0, 0, 0, 0],
                l = 0,
                f = null,
                h = 0;
            if (":" == t()) {
                if (":" != e.charAt(1)) return;
                h += 2, f = ++l
            }
            for (; t();) {
                if (8 == l) return;
                if (":" != t()) {
                    for (r = n = 0; n < 4 && fc.test(t());) r = 16 * r + parseInt(t(), 16), h++, n++;
                    if ("." == t()) {
                        if (0 == n) return;
                        if (h -= n, 6 < l) return;
                        for (o = 0; t();) {
                            if (i = null, 0 < o) {
                                if (!("." == t() && o < 4)) return;
                                h++
                            }
                            if (!cc.test(t())) return;
                            for (; cc.test(t());) {
                                if (a = parseInt(t(), 10), null === i) i = a;
                                else {
                                    if (0 == i) return;
                                    i = 10 * i + a
                                }
                                if (255 < i) return;
                                h++
                            }
                            s[l] = 256 * s[l] + i, 2 != ++o && 4 != o || l++
                        }
                        if (4 != o) return;
                        break
                    }
                    if (":" == t()) {
                        if (h++, !t()) return
                    } else if (t()) return;
                    s[l++] = r
                } else {
                    if (null !== f) return;
                    h++, f = ++l
                }
            }
            if (null !== f)
                for (c = l - f, l = 7; 0 != l && 0 < c;) u = s[l], s[l--] = s[f + c - 1], s[f + --c] = u;
            else if (8 != l) return;
            return s
        },
        mc = {},
        wc = pa({}, mc, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        bc = pa({}, wc, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        xc = pa({}, bc, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        Sc = function(e, t) {
            var r = Xa(e, 0);
            return 32 < r && r < 127 && !O(t, e) ? e : encodeURIComponent(e)
        },
        Ac = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        Ec = function(e) {
            return O(Ac, e.scheme)
        },
        Ic = {},
        Tc = {},
        $c = {},
        Rc = {},
        _c = {},
        kc = {},
        Oc = {},
        Lc = {},
        Mc = {},
        Cc = {},
        Bc = {},
        Uc = {},
        Pc = {},
        Fc = {},
        jc = {},
        qc = {},
        Dc = {},
        Nc = {},
        zc = {},
        Yc = {},
        Vc = {},
        Wc = function(e, t) {
            var r, n, o = bn(this, Wc, "URL"),
                i = 1 < arguments.length ? t : void 0,
                a = String(e),
                c = Za(o, {
                    type: "URL"
                });
            if (void 0 !== i)
                if (i instanceof Wc) r = Qa(i);
                else if (n = Na(r = {}, String(i))) throw TypeError(n);
            if (n = Na(c, a, null, r)) throw TypeError(n);
            var u = c.searchParams = new Ja,
                s = Ka(u);
            s.updateSearchParams(c.query), s.updateURL = function() {
                c.query = String(u) || null
            }, M || (o.href = Xc.call(o), o.origin = Hc.call(o), o.protocol = Jc.call(o), o.username = Kc.call(o), o.password = Zc.call(o), o.host = Qc.call(o), o.hostname = eu.call(o), o.port = tu.call(o), o.pathname = ru.call(o), o.search = nu.call(o), o.searchParams = ou.call(o), o.hash = iu.call(o))
        },
        Gc = Wc.prototype,
        Xc = function() {
            var e = Qa(this),
                t = e.scheme,
                r = e.username,
                n = e.password,
                o = e.host,
                i = e.port,
                a = e.path,
                c = e.query,
                u = e.fragment,
                s = t + ":";
            return null !== o ? (s += "//", Pa(e) && (s += r + (n ? ":" + n : "") + "@"), s += Ua(o), null !== i && (s += ":" + i)) : "file" == t && (s += "//"), s += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== c && (s += "?" + c), null !== u && (s += "#" + u), s
        },
        Hc = function() {
            var e = Qa(this),
                t = e.scheme,
                r = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && Ec(e) ? t + "://" + Ua(e.host) + (null !== r ? ":" + r : "") : "null"
        },
        Jc = function() {
            return Qa(this).scheme + ":"
        },
        Kc = function() {
            return Qa(this).username
        },
        Zc = function() {
            return Qa(this).password
        },
        Qc = function() {
            var e = Qa(this),
                t = e.host,
                r = e.port;
            return null === t ? "" : null === r ? Ua(t) : Ua(t) + ":" + r
        },
        eu = function() {
            var e = Qa(this).host;
            return null === e ? "" : Ua(e)
        },
        tu = function() {
            var e = Qa(this).port;
            return null === e ? "" : String(e)
        },
        ru = function() {
            var e = Qa(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        nu = function() {
            var e = Qa(this).query;
            return e ? "?" + e : ""
        },
        ou = function() {
            return Qa(this).searchParams
        },
        iu = function() {
            var e = Qa(this).fragment;
            return e ? "#" + e : ""
        };
    M && bt(Gc, {
        href: za(Xc, function(e) {
            var t = Qa(this),
                r = String(e),
                n = Na(t, r);
            if (n) throw TypeError(n);
            Ka(t.searchParams).updateSearchParams(t.query)
        }),
        origin: za(Hc),
        protocol: za(Jc, function(e) {
            var t = Qa(this);
            Na(t, String(e) + ":", Ic)
        }),
        username: za(Kc, function(e) {
            var t = Qa(this),
                r = Zi(String(e));
            if (!Fa(t)) {
                t.username = "";
                for (var n = 0; n < r.length; n++) t.username += Sc(r[n], xc)
            }
        }),
        password: za(Zc, function(e) {
            var t = Qa(this),
                r = Zi(String(e));
            if (!Fa(t)) {
                t.password = "";
                for (var n = 0; n < r.length; n++) t.password += Sc(r[n], xc)
            }
        }),
        host: za(Qc, function(e) {
            var t = Qa(this);
            t.cannotBeABaseURL || Na(t, String(e), Bc)
        }),
        hostname: za(eu, function(e) {
            var t = Qa(this);
            t.cannotBeABaseURL || Na(t, String(e), Uc)
        }),
        port: za(tu, function(e) {
            var t = Qa(this);
            Fa(t) || ("" == (e = String(e)) ? t.port = null : Na(t, e, Pc))
        }),
        pathname: za(ru, function(e) {
            var t = Qa(this);
            t.cannotBeABaseURL || (t.path = [], Na(t, e + "", Dc))
        }),
        search: za(nu, function(e) {
            var t = Qa(this);
            "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Na(t, e, Yc)), Ka(t.searchParams).updateSearchParams(t.query)
        }),
        searchParams: za(ou),
        hash: za(iu, function(e) {
            var t = Qa(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Na(t, e, Vc)) : t.fragment = null
        })
    }), ve(Gc, "toJSON", function() {
        return Xc.call(this)
    }, {
        enumerable: !0
    }), ve(Gc, "toString", function() {
        return Xc.call(this)
    }, {
        enumerable: !0
    }), Ha && (Va = Ha.createObjectURL, Wa = Ha.revokeObjectURL, Va && ve(Wc, "createObjectURL", function(e) {
        return Va.apply(Ha, arguments)
    }), Wa && ve(Wc, "revokeObjectURL", function(e) {
        return Wa.apply(Ha, arguments)
    })), qt(Wc, "URL"), ue({
        global: !0,
        forced: !la,
        sham: !M
    }, {
        URL: Wc
    });
    var au = Ae.includes,
        cu = ct("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    ue({
        target: "Array",
        proto: !0,
        forced: !cu
    }, {
        includes: function(e, t) {
            return au(this, e, 1 < arguments.length ? t : void 0)
        }
    }), _t("includes");
    var uu = Ae.indexOf,
        su = [].indexOf,
        lu = !!su && 1 / [1].indexOf(1, -0) < 0,
        fu = it("indexOf"),
        hu = ct("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    ue({
        target: "Array",
        proto: !0,
        forced: lu || !fu || !hu
    }, {
        indexOf: function(e, t) {
            return lu ? su.apply(this, arguments) || 0 : uu(this, e, 1 < arguments.length ? t : void 0)
        }
    }), ue({
        target: "Array",
        proto: !0,
        forced: ci !== [].lastIndexOf
    }, {
        lastIndexOf: ci
    });
    var pu = Xe("slice"),
        gu = ct("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        du = fe("species"),
        vu = [].slice,
        yu = Math.max;
    ue({
        target: "Array",
        proto: !0,
        forced: !pu || !gu
    }, {
        slice: function(e, t) {
            var r, n, o, i = s(this),
                a = ne(i.length),
                c = oe(e, a),
                u = oe(void 0 === t ? a : t, a);
            if (Pe(i) && (("function" == typeof(r = i.constructor) && (r === Array || Pe(r.prototype)) || k(r) && null === (r = r[du])) && (r = void 0), r === Array || void 0 === r)) return vu.call(i, c, u);
            for (n = new(void 0 === r ? Array : r)(yu(u - c, 0)), o = 0; c < u; c++, o++) c in i && le(n, o, i[c]);
            return n.length = o, n
        }
    });
    var mu = B.f,
        wu = $e.f,
        bu = de.set,
        xu = fe("match"),
        Su = L.RegExp,
        Au = Su.prototype,
        Eu = /a/g,
        Iu = /a/g,
        Tu = new Su(Eu) !== Eu,
        $u = wr.UNSUPPORTED_Y;
    if (M && Be("RegExp", !Tu || $u || f(function() {
            return Iu[xu] = !1, Su(Eu) != Eu || Su(Iu) == Iu || "/a/i" != Su(Eu, "i")
        }))) {
        for (var Ru = function(e, t) {
                var r, n = this instanceof Ru,
                    o = Cr(e),
                    i = void 0 === t;
                if (!n && o && e.constructor === Ru && i) return e;
                Tu ? o && !i && (e = e.source) : e instanceof Ru && (i && (t = dr.call(e)), e = e.source), $u && (r = !!t && -1 < t.indexOf("y")) && (t = t.replace(/y/g, ""));
                var a = mo(Tu ? new Su(e, t) : Su(e, t), n ? this : Au, Ru);
                return $u && r && bu(a, {
                    sticky: r
                }), a
            }, _u = wu(Su), ku = 0; _u.length > ku;) ! function(t) {
            t in Ru || mu(Ru, t, {
                configurable: !0,
                get: function() {
                    return Su[t]
                },
                set: function(e) {
                    Su[t] = e
                }
            })
        }(_u[ku++]);
        (Au.constructor = Ru).prototype = Au, ve(L, "RegExp", Ru)
    }
    yo("RegExp");
    var Ou = "toString",
        Lu = RegExp.prototype,
        Mu = Lu[Ou],
        Cu = f(function() {
            return "/a/b" != Mu.call({
                source: "a",
                flags: "b"
            })
        }),
        Bu = Mu.name != Ou;
    (Cu || Bu) && ve(RegExp.prototype, Ou, function() {
        var e = T(this),
            t = String(e.source),
            r = e.flags;
        return "/" + t + "/" + String(void 0 === r && e instanceof RegExp && !("flags" in Lu) ? dr.call(e) : r)
    }, {
        unsafe: !0
    }), Mr("match", 1, function(n, s, l) {
        return [function(e) {
            var t = h(this),
                r = null == e ? void 0 : e[n];
            return void 0 !== r ? r.call(e, t) : new RegExp(e)[n](String(t))
        }, function(e) {
            var t = l(s, e, this);
            if (t.done) return t.value;
            var r = T(e),
                n = String(this);
            if (!r.global) return Pr(r, n);
            for (var o, i = r.unicode, a = [], c = r.lastIndex = 0; null !== (o = Pr(r, n));) {
                var u = String(o[0]);
                "" === (a[c] = u) && (r.lastIndex = Ur(n, ne(r.lastIndex), i)), c++
            }
            return 0 === c ? null : a
        }]
    });

    function Uu() {
        this.file = "", this.ratio = 1, this.image = ""
    }
    var Pu = {
            bindDragEvent: function(e, t, r) {
                var n = 1 < arguments.length && void 0 !== t && t,
                    o = 2 < arguments.length && void 0 !== r && r;
                $(e).on("drop", function(e) {
                    e.preventDefault();
                    var t = e.originalEvent.dataTransfer.files;
                    if (0 === t.length) return !1;
                    var r = t[0];
                    return n && n(r), !1
                }), $(e).on("dragenter", function(e) {
                    e.preventDefault(), o && o()
                }), $(e).on("dragover", function(e) {
                    e.preventDefault()
                })
            },
            getBase64Image: function(e) {
                var t = document.createElement("canvas");
                t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height);
                var r = e.src.substring(e.src.lastIndexOf(".") + 1).toLowerCase();
                return t.toDataURL("image/" + r)
            },
            getCss: function(e, t) {
                return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, !1)[t]
            },
            ID: function(e) {
                return document.getElementById(e)
            },
            format_time: function() {
                var e = new Date;
                return e.getFullYear() + "-" + e.getMonth() + "-" + e.getDate()
            },
            browserIsPc: function() {
                var e = navigator.userAgent.toLowerCase(),
                    t = "mac" == e.match(/mac/i),
                    r = "ipad" == e.match(/ipad/i),
                    n = "iphone os" == e.match(/iphone os/i),
                    o = "midp" == e.match(/midp/i),
                    i = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
                    a = "ucweb" == e.match(/ucweb/i),
                    c = "android" == e.match(/android/i),
                    u = "windows ce" == e.match(/windows ce/i),
                    s = "windows mobile" == e.match(/windows mobile/i);
                return !(r || n || o || i || a || c || u || s) && !(t && "ontouchend" in document)
            },
            browserIsMobile: function() {
                var e = navigator.userAgent;
                /(?:Windows Phone)/.test(e);
                /(?:SymbianOS)/.test(e);
                var t = /(?:Android)/.test(e),
                    r = /(?:Firefox)/.test(e);
                /(?:Chrome|CriOS)/.test(e);
                var n = /(?:iPad|PlayBook)/.test(e) || t && !/(?:Mobile)/.test(e) || r && /(?:Tablet)/.test(e),
                    o = /(?:iPhone)/.test(e) && !n;
                return !(!t && !o)
            },
            loadImage: function(e, t, r) {
                var n = new Image;
                return n.setAttribute("crossOrigin", "anonymous"), n.crossOrigin = "anonymous", n.src = e, n.onload = function() {
                    t && t(n)
                }, n.onerror = function() {
                    r && r(n)
                }, n
            },
            showMask: function(e) {
                window.scrollTo(0, 0), document.documentElement.style.overflow = "hidden", document.documentElement.style.position = "relative", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%", document.querySelector(".mask").style.display = "block", document.querySelector(".mask").style.zIndex = 1, e && (document.querySelector(e).style.display = "flex")
            },
            closeMask: function(e) {
                app.flag && (document.documentElement.style.overflowY = "auto"), document.documentElement.style.position = "relative", document.querySelector(".mask").style.display = "none", e && (document.querySelector(e).style.display = "none")
            },
            convertBase64UrlToBlob: function(e) {
                for (var t = e.split(","), r = t[0].match(/:(.*?);/)[1], n = atob(t[1]), o = n.length, i = new Uint8Array(o); o--;) i[o] = n.charCodeAt(o);
                return new Blob([i], {
                    type: r
                })
            },
            IEVersion: function() {
                var e = navigator.userAgent,
                    t = -1 < e.indexOf("compatible") && -1 < e.indexOf("MSIE"),
                    r = -1 < e.indexOf("Edge") && !t,
                    n = -1 < e.indexOf("Trident") && -1 < e.indexOf("rv:11.0");
                if (t) {
                    new RegExp("MSIE (\\d+\\.\\d+);").test(e);
                    var o = parseFloat(RegExp.$1);
                    return 7 == o ? 7 : 8 == o ? 8 : 9 == o ? 9 : 10 == o ? 10 : 6
                }
                return r ? "edge" : n ? 11 : -1
            },
            getFileMd5: function(r, t) {
                (new Date).getTime();
                var r = r,
                    n = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                    o = 8097152,
                    i = Math.ceil(r.size / o),
                    a = 0,
                    c = new SparkMD5.ArrayBuffer,
                    u = new FileReader;

                function s() {
                    var e = a * o,
                        t = e + o >= r.size ? r.size : e + o;
                    u.readAsArrayBuffer(n.call(r, e, t))
                }
                u.onload = function(e) {
                    c.append(e.target.result), ++a < i ? s() : t(c.end())
                }, u.onerror = function() {
                    clearTimeout(timeOut), showMessageBox("error", UPLOAD_ERROR)
                }, s()
            },
            encrypt: function(e) {
                var t = CryptoJS.enc.Latin1.parse("KgACJju0JScxBvlP"),
                    r = CryptoJS.enc.Latin1.parse("wmozBgboU9HRzWG6");
                return CryptoJS.AES.encrypt(e, t, {
                    iv: r,
                    mode: CryptoJS.mode.CBC
                }).toString()
            },
            manage: function(e, t) {
                try {
                    console.log(_gaq), _gaq.push(["_trackEvent", "Image Upscaler", e, String(t)])
                } catch (e) {
                    console.log(e)
                }
            }
        },
        Fu = {
            lastFile: "",
            image: "",
            oldImageBlob: "",
            imgBase: "",
            magnification: 6,
            flag: !0,
            result: {},
            first: 0,
            imageMd5: "",
            sign: "",
            transparent: 0
        },
        ju = {
            showMessageBox: function(e, t, r, n, o, i) {
                var a = 1 < arguments.length && void 0 !== t ? t : "",
                    c = !(2 < arguments.length && void 0 !== r) || r,
                    u = 3 < arguments.length ? n : void 0,
                    s = 4 < arguments.length ? o : void 0,
                    l = 5 < arguments.length ? i : void 0;
                switch (window.scrollTo(0, 0), $(".alert-mask").css({
                        display: "block",
                        "z-index": 5
                    }), $(".image-loading-box").show(), $(".show-message-box").hide(), document.documentElement.style.overflow = "hidden", e) {
                    case "warning":
                        $(".image-loading-box").removeClass("active"), $(".load-warning-box").show(), $(".warning-text").html(a);
                        break;
                    case "oversize":
                        $(".oversize-box").show(), $(".warning-text").html(a);
                        break;
                    case "error":
                        $(".load-error-box").show(), $(".error-text").html(a);
                        break;
                    case "loading":
                        $(".loading-box").show(), $(".loading-text").html(a);
                        break;
                    case "alert":
                        $(".load-alert-box").show(), $(".alert-text").html(a);
                }
                l ? ($(".cancel").hide(), $(".confirm").css("float", "none")) : ($(".cancel").show(), $(".confirm").css("float", "left")), $(".confirm").off(), $(".cancel").off(), $(".confirm").click(function() {
                    $(".image-loading-box").hide(), $(".alert-mask").hide(), u && u()
                }), $(".cancel").click(function() {
                    $(".image-loading-box").hide(), $(".alert-mask").hide(), Fu.flag && (document.documentElement.style.overflowY = "auto"), s && s()
                }), c ? $(".feed-back-box").show() : $(".feed-back-box").hide()
            },
            closeMessageBox: function() {
                $(".image-loading-box").hide(), $(".alert-mask").hide()
            }
        },
        qu = ["jpg", "jpeg", "png", "bmp", "webp"],
        Du = aiss.i18n.tr("image_enhancer_oversize"),
        Nu = aiss.i18n.tr("image_enhancer_overresolution"),
        zu = aiss.i18n.tr("watermark_remove_file_type_error"),
        Yu = aiss.i18n.tr("watermark_remove_image_type_error");
    Uu.prototype.upload = function(e, a, t) {
        if (null === e) return !1;
        if (!this.checkImage(e)) return !1;
        var c = this;
        this.file = e, Fu.oldImageBlob = window.URL.createObjectURL(e);
        var r = new FileReader;
        r.readAsDataURL(e), r.onload = function() {
            var i = this;
            Pu.loadImage(this.result, function(e) {
                if (999e3 <= e.width || 999e3 <= e.height) return ju.showMessageBox("error", Nu), !1;
                var t = document.createElement("canvas"),
                    r = t.getContext("2d");
                t.width = e.width, t.height = e.height, r.drawImage(e, 0, 0, e.width, e.height);
                for (var n = r.getImageData(0, 0, e.width, e.height).data, o = 0; o < n.length; o += 4)
                    if (0 == n[o] && 0 == n[o + 1] && 0 == n[o + 2] && 0 == n[o + 3]) {
                        Fu.transparent = 1;
                        break
                    } Fu.imgBase = i.result, Fu.image = e, c.image = e, a && a(i.result, e)
            }, function(e) {
                ju.showMessageBox("error", Yu), t && t(e)
            })
        }, r.onerror = function() {
            showMessageBox("error", Yu)
        }
    }, Uu.prototype.checkImage = function(e) {
        if (!e) return ju.showMessageBox("error", zu), !1;
        if (-1 == e.type.indexOf("image/")) return ju.showMessageBox("error", zu), !1;
        if (10485760 < e.size) return ju.showMessageBox("error", Du), !1;
        var t = e.type.split("/")[1];
        return !!qu.includes(t) || (ju.showMessageBox("error", Yu), !1)
    }, Uu.prototype.imageShowSizeRatio = function(e) {
        var t = document.querySelector(".right").offsetWidth,
            r = document.querySelector(".right").offsetHeight,
            n = .8 * t / e.width,
            o = .8 * r / e.height,
            i = Math.min(n, o);
        this.ratio = i
    };
    var Vu = "".repeat || function(e) {
            var t = String(h(this)),
                r = "",
                n = re(e);
            if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; 0 < n;
                (n >>>= 1) && (t += t)) 1 & n && (r += t);
            return r
        },
        Wu = 1..toFixed,
        Gu = Math.floor,
        Xu = function(e, t, r) {
            return 0 === t ? r : t % 2 == 1 ? Xu(e, t - 1, r * e) : Xu(e * e, t / 2, r)
        },
        Hu = Wu && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !f(function() {
            Wu.call({})
        });
    ue({
        target: "Number",
        proto: !0,
        forced: Hu
    }, {
        toFixed: function(e) {
            function t(e, t) {
                for (var r = -1, n = t; ++r < 6;) n += e * l[r], l[r] = n % 1e7, n = Gu(n / 1e7)
            }

            function r(e) {
                for (var t = 6, r = 0; 0 <= --t;) r += l[t], l[t] = Gu(r / e), r = r % e * 1e7
            }

            function n() {
                for (var e, t = 6, r = ""; 0 <= --t;) {
                    "" === r && 0 !== t && 0 === l[t] || (e = String(l[t]), r = "" === r ? e : r + Vu.call("0", 7 - e.length) + e)
                }
                return r
            }
            var o, i, a, c, u = function(e) {
                    if ("number" != typeof e && "Number" != p(e)) throw TypeError("Incorrect invocation");
                    return +e
                }(this),
                s = re(e),
                l = [0, 0, 0, 0, 0, 0],
                f = "",
                h = "0";
            if (s < 0 || 20 < s) throw RangeError("Incorrect fraction digits");
            if (u != u) return "NaN";
            if (u <= -1e21 || 1e21 <= u) return String(u);
            if (u < 0 && (f = "-", u = -u), 1e-21 < u)
                if (i = (o = function(e) {
                        for (var t = 0, r = e; 4096 <= r;) t += 12, r /= 4096;
                        for (; 2 <= r;) t += 1, r /= 2;
                        return t
                    }(u * Xu(2, 69, 1)) - 69) < 0 ? u * Xu(2, -o, 1) : u / Xu(2, o, 1), i *= 4503599627370496, 0 < (o = 52 - o)) {
                    for (t(0, i), a = s; 7 <= a;) t(1e7, 0), a -= 7;
                    for (t(Xu(10, a, 1), 0), a = o - 1; 23 <= a;) r(1 << 23), a -= 23;
                    r(1 << a), t(1, 1), r(2), h = n()
                } else t(0, i), t(1 << -o, 0), h = n() + Vu.call("0", s);
            return h = 0 < s ? f + ((c = h.length) <= s ? "0." + Vu.call("0", s - c) + h : h.slice(0, c - s) + "." + h.slice(c - s)) : f + h
        }
    }), ue({
        target: "Object",
        stat: !0,
        forced: Object.assign !== pa
    }, {
        assign: pa
    });
    var Ju, Ku, Zu, Qu, es = aiss.i18n.tr("image_enhancer_processing"),
        ts = aiss.i18n.tr("watermark_remove_upload_error"),
        rs = aiss.i18n.tr("image_enhancer_maxsolution_alert");

    function ns(t, r, n) {
        ju.showMessageBox("loading", es, !1);
        var e = new FormData;
        e.append("imgmd5", r), e.append("scale", t), e.append("sign", n);
        Ju = $.ajax({
            url: "https://ai-api.free-videoconverter.net/v4/sr/sr",
            type: "post",
            cache: !1,
            contentType: !1,
            processData: !1,
            data: e,
            success: function(e) {
                Qu = (new Date).getTime(), os(e.key, t, r, n)
            },
            error: function() {
                ju.closeMessageBox(), ju.showMessageBox("warning", ts, !0, function() {
                    ns(t, r, n)
                })
            }
        })
    }

    function os(e, o, i, a) {
        Ju = $.ajax({
            url: "https://ai-api.free-videoconverter.net/v4/sr/status",
            type: "post",
            data: {
                code: e
            },
            success: function(n) {
                console.log("Boing"), 200 == n.status ? (clearTimeout(Ku), Pu.manage("handle", JSON.stringify({
                    time: (((new Date).getTime() - Qu) / 1e3).toFixed(0),
                    fileSize: Fu.uploadFile.file.size
                })), Qu = (new Date).getTime(), Zu = Pu.loadImage(n.urlV, function(e) {
                    ! function(e, t, r, n, o) {
                        Fu.magnification = r, Fu.imageMd5 = n, Fu.sign = o, Fu.resultImg = t, Fu.flag = !1, Fu.saveImage = e;
                        var i = Fu.magnification + "X",
                            a = {},
                            c = Pu.getBase64Image(t);
                        a[i] = c, Object.assign(Fu.result, a);
                        var u = window.URL.createObjectURL(Pu.convertBase64UrlToBlob(c));
                        $(".right_img_show").attr("src", u), $(".left_img_show").attr("src", Fu.oldImageBlob), $(".old-preview").css("background-image", "url(".concat(Fu.oldImageBlob, ")")), $(".new-preview").css("background-image", "url(".concat(u, ")")), ju.closeMessageBox(), Pu.showMask(), $(".photo").addClass("active"), $(".resolution_after").html(t.width + "*" + t.height), $(".resolution_before").html(Fu.uploadFile.image.width + "*" + Fu.uploadFile.image.height),
                            function(e) {
                                $(".scale_num").removeClass("active").eq(e / 2 - 1).addClass("active"), $(".scale_change").attr("checked", !1), $("#" + $(".scale_num").eq(e / 2 - 1).html().toUpperCase()).click()
                            }(Fu.magnification), is(t), !Fu.first && (999e3 < Fu.uploadFile.image.width * Fu.magnification || 999e3 < Fu.uploadFile.image.height * Fu.magnification) && (Fu.first = 1, ju.showMessageBox("alert", rs, !0))
                    }(n.url, e, o, i, a);
                    var t = new XMLHttpRequest;
                    t.open("HEAD", n.url, !1), t.send(null);
                    var r = t.getResponseHeader("Content-Length");
                    Pu.manage("download", JSON.stringify({
                        time: (((new Date).getTime() - Qu) / 1e3).toFixed(0),
                        fileSize: r
                    }))
                }, function() {
                    Zu && (ju.closeMessageBox(), ju.showMessageBox("warning", ts, !0, function() {
                        Ku = setTimeout(function() {
                            os(e, o, i, a)
                        }, 3e3)
                    }))
                })) : Ku = setTimeout(function() {
                    os(e, o, i, a)
                }, 3e3)
            },
            error: function() {
                clearInterval(Ku), ju.closeMessageBox(), ju.showMessageBox("warning", ts, !0, function() {
                    Ku = setTimeout(function() {
                        os(e, o, i, a)
                    }, 3e3)
                })
            }
        })
    }

    function is(e) {
        Fu.uploadFile.imageShowSizeRatio(e), Fu.uploadFile.ratio < 1 ? ($(".img_compare").css({
            width: e.width * Fu.uploadFile.ratio,
            height: e.height * Fu.uploadFile.ratio
        }), $(".old-box").css({
            width: e.width * Fu.uploadFile.ratio,
            height: e.height * Fu.uploadFile.ratio
        })) : ($(".img_compare").css({
            width: e.width,
            height: e.height
        }), $(".old-box").css({
            width: e.width,
            height: e.height
        }))
    }
    $(".cancel-upload").click(function() {
        Ju && Ju.abort(), Ku && clearTimeout(Ku), Zu && (Zu.src = null, Zu = null), Fu.lastFile && (Fu.uploadFile = new Uu, Fu.uploadFile.upload(Fu.lastFile)), ju.closeMessageBox(), Fu.flag && (document.documentElement.style.overflowY = "auto")
    });
    var as = {
            upload: function(e, o, i) {
                var a = Pu.convertBase64UrlToBlob(e);
                Pu.getFileMd5(a, function(e) {
                    ju.showMessageBox("loading", es, !1);
                    var t = (new Date).getTime(),
                        r = Pu.encrypt(e + t),
                        n = new FormData;
                    n.append("img", a), n.append("sign", r), n.append("name", i),
                        function t(r, n, o, i) {
                            Qu = (new Date).getTime();
                            Ju = $.ajax({
                                url: "https://ai-api.free-videoconverter.net/v4/sr/upload",
                                type: "post",
                                cache: !1,
                                contentType: !1,
                                processData: !1,
                                data: r,
                                success: function(e) {
                                    console.log(e), 200 == e.status && (Pu.manage("upload", JSON.stringify({
                                        time: (((new Date).getTime() - Qu) / 1e3).toFixed(0),
                                        fileSize: Fu.uploadFile.file.size
                                    })), ns(n, o, i))
                                },
                                error: function(e) {
                                    503 == e.status ? (ju.closeMessageBox(), ju.showMessageBox("warning", aiss.i18n.tr("frequently"), !0, function() {
                                        t(r, n, o, i)
                                    })) : (ju.closeMessageBox(), ju.showMessageBox("warning", ts, !0, function() {
                                        t(r, n, o, i)
                                    }))
                                }
                            })
                        }(n, o, e, r)
                })
            },
            requestDeal: ns,
            getResult: os,
            setImageShowSize: is
        },
        cs = Math.max,
        us = Math.min,
        ss = Math.floor,
        ls = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        fs = /\$([$&'`]|\d\d?)/g;
    Mr("replace", 2, function(o, x, S, e) {
        var A = e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            E = e.REPLACE_KEEPS_$0,
            I = A ? "$" : "$0";
        return [function(e, t) {
            var r = h(this),
                n = null == e ? void 0 : e[o];
            return void 0 !== n ? n.call(e, r, t) : x.call(String(r), e, t)
        }, function(e, t) {
            if (!A && E || "string" == typeof t && -1 === t.indexOf(I)) {
                var r = S(x, e, this, t);
                if (r.done) return r.value
            }
            var n = T(e),
                o = String(this),
                i = "function" == typeof t;
            i || (t = String(t));
            var a, c = n.global;
            c && (a = n.unicode, n.lastIndex = 0);
            for (var u = [];;) {
                var s = Pr(n, o);
                if (null === s) break;
                if (u.push(s), !c) break;
                "" === String(s[0]) && (n.lastIndex = Ur(o, ne(n.lastIndex), a))
            }
            for (var l, f = "", h = 0, p = 0; p < u.length; p++) {
                s = u[p];
                for (var g = String(s[0]), d = cs(us(re(s.index), o.length), 0), v = [], y = 1; y < s.length; y++) v.push(void 0 === (l = s[y]) ? l : String(l));
                var m, w = s.groups,
                    b = i ? (m = [g].concat(v, d, o), void 0 !== w && m.push(w), String(t.apply(void 0, m))) : function(i, a, c, u, s, e) {
                        var l = c + i.length,
                            f = u.length,
                            t = fs;
                        void 0 !== s && (s = se(s), t = ls);
                        return x.call(e, t, function(e, t) {
                            var r;
                            switch (t.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return i;
                                case "`":
                                    return a.slice(0, c);
                                case "'":
                                    return a.slice(l);
                                case "<":
                                    r = s[t.slice(1, -1)];
                                    break;
                                default:
                                    var n = +t;
                                    if (0 == n) return e;
                                    if (f < n) {
                                        var o = ss(n / 10);
                                        return 0 === o ? e : o <= f ? void 0 === u[o - 1] ? t.charAt(1) : u[o - 1] + t.charAt(1) : e
                                    }
                                    r = u[n - 1]
                            }
                            return void 0 === r ? "" : r
                        })
                    }(g, o, d, v, w, t);
                h <= d && (f += o.slice(h, d) + b, h = d + g.length)
            }
            return f + o.slice(h)
        }]
    });
    var hs = aiss.i18n.tr("image_enhancer_maxsolution");

    function ps(r) {
        window.URL = window.URL || window.webkitURL, Fu.transparent = 0, Fu.first = 0, Fu.result = {}, Fu.oldImageBlob = "", Fu.uploadFile && (Fu.lastFile = Fu.uploadFile.file), Fu.uploadFile = new Uu, Fu.uploadFile.upload(r, function(e, t) {
            as.upload(e, Fu.magnification, r.name), $(".scale_num").eq(Fu.magnification / 2 - 1).addClass("active")
        }, function(e) {})
    }
    $("#upload").change(function() {
        var e = $(this)[0].files[0];
        e && (ps(e), $(this).val(""))
    }), Pu.bindDragEvent("#drag-zone", function(e) {
        ps(e)
    }), Pu.bindDragEvent("#drag-zone2", function(e) {
        ps(e)
    }), $(".scale_change").change(function() {
        Fu.magnification = $(this).val()
    }), $(".scale_num").click(function() {
        if ($(this).hasClass("active")) return !1;
        var e = this,
            t = parseInt($(this).html());
        if (99e3 < Fu.uploadFile.image.width * t || 99e3 < Fu.uploadFile.image.height * t) return ju.showMessageBox("oversize", hs, !0, function() {
            ju.closeMessageBox(), Fu.resultImg.width < 99e3 && Fu.resultImg.height < 99e3 ? as.requestDeal(t, Fu.imageMd5, Fu.sign) : (Fu.magnification = t, $(e).addClass("active").siblings(".scale_num").removeClass("active"), $(".scale_change").attr("checked", !1), $("#" + $(e).html().toUpperCase()).attr("checked", !0))
        }, function() {
            ju.closeMessageBox()
        }), !1;
        var r = t + "X";
        if (Fu.result[r]) {
            Fu.magnification = t;
            var n = Fu.result[r],
                o = window.URL.createObjectURL(Pu.convertBase64UrlToBlob(n));
            return $(this).addClass("active").siblings(".scale_num").removeClass("active"), $(".scale_change").attr("checked", !1), $("#" + $(this).html().toUpperCase()).attr("checked", !0), $(".right_img_show").attr("src", o), $(".new-preview").css("background-image", "url(".concat(o, ")")), Pu.loadImage(n, function(e) {
                Fu.resultImg = e, $(".resolution_after").html(e.width + "*" + e.height), Fu.leftrect = document.querySelector(".old-box").getBoundingClientRect(), Fu.rightrect = document.querySelector(".img_compare").getBoundingClientRect(), as.setImageShowSize(Fu.resultImg)
            }, function(e) {
                ju.showMessageBox("warning", UPLOAD_ERROR, !0, function() {
                    as.requestDeal(Fu.magnification, Fu.imageMd5, Fu.sign)
                })
            }), !1
        }
        as.requestDeal(t, Fu.imageMd5, Fu.sign)
    }), $(".photo .close").click(function() {
          $(".photo").removeClass("active"), $(".mask").hide(), document.documentElement.style.overflowY = "auto"
        }),

        // modified
        $('img.right_img_show').on('load', function () {
          // alert($('img.right_img_show').attr('src'));
          console.log('auto download triggered');
          var e = document.createElement("a");
          e.setAttribute("download", ""), e.setAttribute("href", Fu.saveImage), e.click();
          startNextImageInQuene();
        });

      
        $(".saveBtn").click(function() {
          var e = document.createElement("a");
          e.setAttribute("download", ""), e.setAttribute("href", Fu.saveImage), e.click()
        }), 
        $(".reloadImg").click(function() {
          $("#upload").trigger("click")
        }),
        $(".tab_img").click(function() {
        "flex" === $(".canvas_box .left").css("display") ? ($(".Original-box").toggle(), $(".canvas_box .left").toggle(), $(".canvas_box .right").css({
            width: "100%"
        }), $(this).attr("title", "Show Preview"), Fu.uploadFile.imageShowSizeRatio(Fu.resultImg), Fu.uploadFile.ratio < 1 ? $(".img_compare").css({
            width: Fu.resultImg.width * Fu.uploadFile.ratio,
            height: Fu.resultImg.height * Fu.uploadFile.ratio
        }) : $(".img_compare").css({
            width: Fu.resultImg.width,
            height: Fu.resultImg.height
        })) : ($(".canvas_box .left").toggle(), $(".Original-box ").toggle(), $(".canvas_box .right").css({
            width: "50%"
        }), $(this).attr("title", "Hide Preview"), as.setImageShowSize(Fu.resultImg)), Fu.rightrect = document.querySelector(".img_compare").getBoundingClientRect()
    }), HTMLCanvasElement.prototype.toBlob || Object.defineProperty(HTMLCanvasElement.prototype, "toBlob", {
        value: function(o, i, a) {
            var c = this;
            setTimeout(function() {
                for (var e = atob(c.toDataURL(i, a).split(",")[1]), t = e.length, r = new Uint8Array(t), n = 0; n < t; n++) r[n] = e.charCodeAt(n);
                o(new Blob([r], {
                    type: i || "image/png"
                }))
            })
        }
    }), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
        e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                this.parentNode.removeChild(this)
            }
        })
    }), window.onresize = function() {
        Fu.leftrect = document.querySelector(".old-box").getBoundingClientRect(), Fu.rightrect = document.querySelector(".img_compare").getBoundingClientRect()
    };
    var gs, ds, vs, ys, ms = 2,
        ws = document.querySelector(".old-preview"),
        bs = document.querySelector(".new-preview");

    function xs() {
        Fu.leftrect = document.querySelector(".old-box").getBoundingClientRect(), Fu.rightrect = document.querySelector(".img_compare").getBoundingClientRect();
        var e, t, r = Fu.rightrect.width;
        Fu.rightrect.height, Fu.resultImg.width > r ? ($(".new-select-box, .privew-box").css({
            display: "block"
        }), e = Fu.resultImg.width, t = Fu.resultImg.height, ms = Fu.resultImg.width / r, ds = gs = 200 / ms, $(".privew-box").css({
            "background-size": "".concat(e, "px ").concat(t, "px")
        }), $(".new-select-box").css({
            width: gs,
            height: ds
        })) : $(".new-select-box, .privew-box").css({
            display: "none"
        })
    }

    function Ss(e, t, r, n, o, i) {
        parseInt(e) - o / 2 < 0 ? $(".new-select-box").css({
            left: 0
        }) : parseInt(e) - o / 2 > r - o ? $(".new-select-box").css({
            left: r - o
        }) : $(".new-select-box").css({
            left: parseInt(e) - o / 2
        }), parseInt(t) - i / 2 < 0 ? $(".new-select-box").css({
            top: 0
        }) : parseInt(t) - i / 2 > n - i ? $(".new-select-box").css({
            top: n - i
        }) : $(".new-select-box").css({
            top: parseInt(parseInt(t) - i / 2)
        })
    }
    $(".event-box-left, .event-box-right").mouseleave(function() {
            $(".new-select-box, .privew-box").css({
                display: "none"
            })
        }), $(".event-box-left, .event-box-right").mouseover(function() {
            return !!Pu.browserIsPc() && void xs()
        }), $(".event-box-left").mousemove(function(e) {
            if ("none" == $(".new-select-box").css("display")) return !1;
            if (!Pu.browserIsPc()) return !1;
            Ss(parseInt(e.clientX) - parseInt(Fu.leftrect.left), parseInt(e.clientY) - parseInt(Fu.leftrect.top), Fu.leftrect.width, Fu.leftrect.height, gs, ds), $(".privew-box").css({
                left: document.querySelector(".new-select-box").offsetLeft,
                top: document.querySelector(".new-select-box").offsetTop + ds
            });
            var t = -$(".new-select-box").position().left * ms + "px",
                r = -$(".new-select-box").position().top * ms + "px";
            return ws.style.backgroundPosition = "".concat(t, " ").concat(r), bs.style.backgroundPosition = "".concat(t, " ").concat(r), !1
        }), $(".event-box-right").mousemove(function(e) {
            if ("none" == $(".new-select-box").css("display")) return !1;
            if (!Pu.browserIsPc()) return !1;
            Ss(e.clientX - Fu.rightrect.left, e.clientY - Fu.rightrect.top, Fu.rightrect.width, Fu.rightrect.height, gs, ds), $(".privew-box").css({
                left: $(".old-select-box").position().left,
                top: $(".old-select-box").position().top + ds
            });
            var t = -$(".old-select-box").position().left * ms + "px",
                r = -$(".old-select-box").position().top * ms + "px";
            return ws.style.backgroundPosition = "".concat(t, " ").concat(r), bs.style.backgroundPosition = "".concat(t, " ").concat(r), !1
        }), document.querySelector(".event-box-left").ontouchstart = function(e) {
            Pu.browserIsMobile() || xs()
        }, document.querySelector(".event-box-right").ontouchstart = function(e) {
            Pu.browserIsMobile() || xs()
        }, document.querySelector(".event-box-left").ontouchend = function(e) {
            $(".new-select-box, .privew-box").css({
                display: "none"
            })
        }, document.querySelector(".event-box-right").ontouchend = function(e) {
            $(".new-select-box, .privew-box").css({
                display: "none"
            })
        }, document.querySelector(".event-box-left").ontouchmove = function(e) {
            if ("none" == $(".new-select-box").css("display")) return !1;
            if (!Pu.browserIsMobile()) {
                var t = e.changedTouches[0];
                Ss(parseInt(t.clientX) - parseInt(Fu.leftrect.left), parseInt(t.clientY) - parseInt(Fu.leftrect.top), Fu.leftrect.width, Fu.leftrect.height, gs, ds), $(".privew-box").css({
                    left: document.querySelector(".new-select-box").offsetLeft,
                    top: document.querySelector(".new-select-box").offsetTop + ds
                });
                var r = -$(".new-select-box").position().left * ms + "px",
                    n = -$(".new-select-box").position().top * ms + "px";
                return ws.style.backgroundPosition = "".concat(r, " ").concat(n), bs.style.backgroundPosition = "".concat(r, " ").concat(n), !1
            }
        }, document.querySelector(".event-box-right").ontouchmove = function(e) {
            if ("none" == $(".new-select-box").css("display")) return !1;
            if (!Pu.browserIsMobile()) {
                var t = e.changedTouches[0];
                Ss(t.clientX - Fu.rightrect.left, t.clientY - Fu.rightrect.top, Fu.rightrect.width, Fu.rightrect.height, gs, ds), $(".privew-box").css({
                    left: $(".old-select-box").position().left,
                    top: $(".old-select-box").position().top + ds
                });
                var r = -$(".old-select-box").position().left * ms + "px",
                    n = -$(".old-select-box").position().top * ms + "px";
                return ws.style.backgroundPosition = "".concat(r, " ").concat(n), bs.style.backgroundPosition = "".concat(r, " ").concat(n), !1
            }
        },
        function() {
            try {
                var t, r = 0,
                    n = $(".tab_img_i").length
            } catch (e) {}

            function e(e) {
                clearInterval(t), t = setInterval(function() {
                    r = ++e, $(".tab_img_i").eq(r % n).addClass("active").siblings(".tab_img_i").removeClass("active"), $(".img_tab_o").eq(r % n).addClass("active").siblings(".img_tab_o").removeClass("active")
                }, 2e3)
            }
            clearInterval(t), e(-1), $(".img_tab_o").click(function() {
                r = $(this).index(".img_tab_o"), $(".tab_img_i").eq($(this).index(".img_tab_o")).addClass("active").siblings(".tab_img_i").removeClass("active"), $(".img_tab_o").eq($(this).index(".img_tab_o")).addClass("active").siblings(".img_tab_o").removeClass("active")
            }), $(".tab_img_container").mouseover(function() {
                clearInterval(t)
            }), $(".tab_img_container").mouseleave(function() {
                e()
            })
        }(), vs = $(".high").width(), ys = $(".quality_change").offset().left, $(".low img").width(vs), Pu.browserIsPc() ? ($(".quality_change").mouseenter(function() {
            $(".seperate").addClass("active"), $(".quality_change").mousemove(function(e) {
                var t = (e = window.event || e).pageX || e.clientX;
                $(".low").width(t - ys + 2), $(".seperate").css("left", t - ys)
            })
        }), $(".quality_change").mouseleave(function() {
            $(".seperate").removeClass("active"), $(".seperate").css("left", "50%"), $(".low").width("50%")
        })) : Pu.browserIsPc() || ($(".quality_change").on("touchmove", function(e) {
            var t = (e = window.event || e).changedTouches[0].clientX;
            $(".low").width(t - ys + 2), $(".seperate").css("left", t - ys)
        }), $(".quality_change").on("touchend", function(e) {
            $(".seperate").removeClass("active"), $(".seperate").css("left", "50%"), $(".low").width("50%")
        }))
}();