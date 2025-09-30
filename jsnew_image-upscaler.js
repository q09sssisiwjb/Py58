"use strict";
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(h, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var n = [],
        u = n.slice,
        g = n.concat,
        a = n.push,
        o = n.indexOf,
        i = {},
        r = i.toString,
        m = i.hasOwnProperty,
        v = {},
        y = h.document,
        s = "2.1.1 -css/hiddenVisibleSelectors,-effects/animatedSelector",
        w = function e(t, n) {
            return new e.fn.init(t, n)
        },
        l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        c = /^-ms-/,
        d = /-([\da-z])/gi;

    function f(e) {
        var t = e.length,
            n = w.type(e);
        return "function" !== n && !w.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    w.fn = w.prototype = {
        jquery: s,
        constructor: w,
        selector: "",
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function(e) {
            e = w.merge(this.constructor(), e);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(e, t) {
            return w.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(w.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {},
            s = 1,
            a = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[s] || {}, s++), "object" == (void 0 === r ? "undefined" : _typeof(r)) || w.isFunction(r) || (r = {}), s === a && (r = this, s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e) o = r[t], r !== (n = e[t]) && (l && n && (w.isPlainObject(n) || (i = w.isArray(n))) ? (o = i ? (i = !1, o && w.isArray(o) ? o : []) : o && w.isPlainObject(o) ? o : {}, r[t] = w.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }, w.extend({
        expando: "jQuery" + (s + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === w.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !w.isArray(e) && 0 <= e - parseFloat(e)
        },
        isPlainObject: function(e) {
            return "object" === w.type(e) && !e.nodeType && !w.isWindow(e) && !(e.constructor && !m.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? i[r.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = w.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(c, "ms-").replace(d, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0,
                o = e.length,
                r = f(e);
            if (n) {
                if (r)
                    for (; i < o && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break
            } else if (r)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(l, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (f(Object(e)) ? w.merge(t, "string" == typeof e ? [e] : e) : a.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : o.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) != s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o = 0,
                r = e.length,
                s = [];
            if (f(e))
                for (; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), w.isFunction(e) ? (n = u.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(u.call(arguments)))
            }).guid = e.guid = e.guid || w.guid++, i) : void 0
        },
        now: Date.now,
        support: v
    }), w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });

    function p(e, t) {
        if (e === t) return b = !0, 0;
        var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return n ? 1 & n ? e === y || w.contains(y, e) ? -1 : t === y || w.contains(y, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
    }
    var b, x = (Dt = h.document.documentElement).matches || Dt.webkitMatchesSelector || Dt.mozMatchesSelector || Dt.oMatchesSelector || Dt.msMatchesSelector;
    w.extend({
        find: function(e, t, n, i) {
            var o, r, s = 0;
            if (n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (r = (t = t || y).nodeType) && 9 !== r) return [];
            if (i)
                for (; o = i[s++];) w.find.matchesSelector(o, e) && n.push(o);
            else w.merge(n, t.querySelectorAll(e));
            return n
        },
        unique: function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (b = !1, e.sort(p), b) {
                for (; t = e[i++];) t === e[i] && (o = n.push(i));
                for (; o--;) e.splice(n[o], 1)
            }
            return e
        },
        text: function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) return e.textContent;
                if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += w.text(t);
            return n
        },
        contains: function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                t = t && t.parentNode;
            return e === t || !(!t || 1 !== t.nodeType || !n.contains(t))
        },
        isXMLDoc: function(e) {
            return "HTML" !== (e.ownerDocument || e).documentElement.nodeName
        },
        expr: {
            attrHandle: {},
            match: {
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]/
            }
        }
    }), w.extend(w.find, {
        matches: function(e, t) {
            return w.find(e, null, null, t)
        },
        matchesSelector: function(e, t) {
            return x.call(e, t)
        },
        attr: function(e, t) {
            return e.getAttribute(t)
        }
    });
    var $ = w.expr.match.needsContext,
        _ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function T(e, n, i) {
        if (w.isFunction(n)) return w.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        });
        if (n.nodeType) return w.grep(e, function(e) {
            return e === n !== i
        });
        if ("string" == typeof n) {
            if (C.test(n)) return w.filter(n, e, i);
            n = w.filter(n, e)
        }
        return w.grep(e, function(e) {
            return 0 <= o.call(n, e) !== i
        })
    }
    w.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < n; t++)
                    if (w.contains(o[t], this)) return !0
            }));
            for (t = 0; t < n; t++) w.find(e, o[t], i);
            return (i = this.pushStack(1 < n ? w.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(T(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(T(this, e || [], !0))
        },
        is: function(e) {
            return !!T(this, "string" == typeof e && $.test(e) ? w(e) : e || [], !1).length
        }
    });
    var k, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (w.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : w.isFunction(e) ? void 0 !== k.ready ? k.ready(e) : e(w) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), w.makeArray(e, this));
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || !n[1] && t) return (!t || t.jquery ? t || k : this.constructor(t)).find(e);
        if (n[1]) {
            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), _.test(n[1]) && w.isPlainObject(t))
                for (n in t) w.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        return (i = y.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = y, this.selector = e, this
    }).prototype = w.fn, k = w(y);
    var q = /^(?:parents|prev(?:Until|All))/,
        N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function E(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    w.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && w(e).is(n)) break;
                    i.push(e)
                } return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, o = this.length, r = [], s = $.test(e) || "string" != typeof e ? w(e, t || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                        r.push(n);
                        break
                    } return this.pushStack(1 < r.length ? w.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? o.call(w(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.unique(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), w.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w.dir(e, "parentNode", n)
        },
        next: function(e) {
            return E(e, "nextSibling")
        },
        prev: function(e) {
            return E(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || w.merge([], e.childNodes)
        }
    }, function(i, o) {
        w.fn[i] = function(e, t) {
            var n = w.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = w.filter(t, n)), 1 < this.length && (N[i] || w.unique(n), q.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var S, D = /\S+/g,
        A = {};

    function L() {
        y.removeEventListener("DOMContentLoaded", L, !1), h.removeEventListener("load", L, !1), w.ready()
    }
    w.Callbacks = function(o) {
        var e, n;
        o = "string" == typeof o ? A[o] || (n = A[e = o] = {}, w.each(e.match(D) || [], function(e, t) {
            n[t] = !0
        }), n) : w.extend({}, o);

        function i(e) {
            for (t = o.memory && e, r = !0, c = a || 0, a = 0, l = u.length, s = !0; u && c < l; c++)
                if (!1 === u[c].apply(e[0], e[1]) && o.stopOnFalse) {
                    t = !1;
                    break
                } s = !1, u && (d ? d.length && i(d.shift()) : t ? u = [] : f.disable())
        }
        var t, r, s, a, l, c, u = [],
            d = !o.once && [],
            f = {
                add: function() {
                    var e;
                    return u && (e = u.length, function i(e) {
                        w.each(e, function(e, t) {
                            var n = w.type(t);
                            "function" === n ? o.unique && f.has(t) || u.push(t) : t && t.length && "string" !== n && i(t)
                        })
                    }(arguments), s ? l = u.length : t && (a = e, i(t))), this
                },
                remove: function() {
                    return u && w.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = w.inArray(t, u, n));) u.splice(n, 1), s && (n <= l && l--, n <= c && c--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < w.inArray(e, u) : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], l = 0, this
                },
                disable: function() {
                    return u = d = t = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return d = void 0, t || f.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return !u || r && !d || (t = [e, (t = t || []).slice ? t.slice() : t], s ? d.push(t) : i(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return f
    }, w.extend({
        Deferred: function(e) {
            var r = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                o = "pending",
                s = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return w.Deferred(function(i) {
                            w.each(r, function(e, t) {
                                var n = w.isFunction(o[e]) && o[e];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && w.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, w.each(r, function(e, t) {
                var n = t[2],
                    i = t[3];
                s[t[1]] = n.add, i && n.add(function() {
                    o = i
                }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t, n, i) {
                return function(e) {
                    n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === o ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                }
            }
            var o, n, i, r = 0,
                s = u.call(arguments),
                a = s.length,
                l = 1 !== a || e && w.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : w.Deferred();
            if (1 < a)
                for (o = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) s[r] && w.isFunction(s[r].promise) ? s[r].promise().done(t(r, i, s)).fail(c.reject).progress(t(r, n, o)) : --l;
            return l || c.resolveWith(i, s), c.promise()
        }
    }), w.fn.ready = function(e) {
        return w.ready.promise().done(e), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? w.readyWait++ : w.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait || (S.resolveWith(y, [w]), w.fn.triggerHandler && (w(y).triggerHandler("ready"), w(y).off("ready"))))
        }
    }), w.ready.promise = function(e) {
        return S || (S = w.Deferred(), "complete" === y.readyState ? setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", L, !1), h.addEventListener("load", L, !1))), S.promise(e)
    }, w.ready.promise();
    var O = w.access = function(e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === w.type(n))
            for (a in o = !0, n) w.access(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, w.isFunction(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
                return c.call(w(e), n)
            })), t))
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    };

    function P() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = w.expando + Math.random()
    }
    w.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, P.uid = 1, P.accepts = w.acceptData, P.prototype = {
        key: function(t) {
            if (!P.accepts(t)) return 0;
            var n = {},
                i = t[this.expando];
            if (!i) {
                i = P.uid++;
                try {
                    n[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, n)
                } catch (e) {
                    n[this.expando] = i, w.extend(t, n)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(e, t, n) {
            var i, e = this.key(e),
                o = this.cache[e];
            if ("string" == typeof t) o[t] = n;
            else if (w.isEmptyObject(o)) w.extend(this.cache[e], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            e = this.cache[this.key(e)];
            return void 0 === t ? e : e[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, w.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, e = this.key(e),
                o = this.cache[e];
            if (void 0 === t) this.cache[e] = {};
            else {
                n = (i = w.isArray(t) ? t.concat(t.map(w.camelCase)) : (e = w.camelCase(t), t in o ? [t, e] : (i = e) in o ? [i] : i.match(D) || [])).length;
                for (; n--;) delete o[i[n]]
            }
        },
        hasData: function(e) {
            return !w.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var H = new P,
        M = new P,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        F = /([A-Z])/g;

    function R(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(F, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : I.test(n) ? w.parseJSON(n) : n)
                } catch (e) {}
                M.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return M.hasData(e) || H.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return H.access(e, t, n)
        },
        _removeData: function(e, t) {
            H.remove(e, t)
        }
    }), w.fn.extend({
        data: function(i, e) {
            var t, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 !== i) return "object" == (void 0 === i ? "undefined" : _typeof(i)) ? this.each(function() {
                M.set(this, i)
            }) : O(this, function(t) {
                var e, n = w.camelCase(i);
                if (r && void 0 === t) return void 0 !== (e = M.get(r, i)) || void 0 !== (e = M.get(r, n)) ? e : void 0 !== (e = R(r, n, void 0)) ? e : void 0;
                this.each(function() {
                    var e = M.get(this, n);
                    M.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && M.set(this, i, t)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = M.get(r), 1 === r.nodeType && !H.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = w.camelCase(n.slice(5)), R(r, n, o[n])));
                H.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = H.get(e, t), n && (!i || w.isArray(n) ? i = H.access(e, t, w.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = w._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                w.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return H.get(e, n) || H.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    H.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? w.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = w.queue(this, t, n);
                w._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && w.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || r.resolveWith(s, [s])
            }
            var i, o = 1,
                r = w.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = H.get(s[a], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });

    function W(e, t) {
        return e = t || e, "none" === w.css(e, "display") || !w.contains(e.ownerDocument, e)
    }
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        B = ["Top", "Right", "Bottom", "Left"],
        X = /^(?:checkbox|radio)$/i;
    n = y.createDocumentFragment().appendChild(y.createElement("div")), (s = y.createElement("input")).setAttribute("type", "radio"), s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), n.appendChild(s), v.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, n.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
    var Q = "undefined";
    v.focusinBubbles = "onfocusin" in h;
    var U = /^key/,
        V = /^(?:mouse|pointer|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;

    function J() {
        return !0
    }

    function K() {
        return !1
    }

    function Z() {
        try {
            return y.activeElement
        } catch (e) {}
    }
    w.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, f, p, h = H.get(t);
            if (h)
                for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = w.guid++), (a = h.events) || (a = h.events = {}), (s = h.handle) || (s = h.handle = function(e) {
                        return (void 0 === w ? "undefined" : _typeof(w)) !== Q && w.event.triggered !== e.type ? w.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(D) || [""]).length; l--;) d = p = (c = G.exec(e[l]) || [])[1], f = (c[2] || "").split(".").sort(), d && (u = w.event.special[d] || {}, d = (o ? u.delegateType : u.bindType) || d, u = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: p,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && w.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, r), (p = a[d]) || ((p = a[d] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(d, s, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, f, p, h, g, m = H.hasData(e) && H.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(D) || [""]).length; c--;)
                    if (p = g = (a = G.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = w.event.special[p] || {}, f = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || w.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) w.event.remove(e, p + t[c], n, i, !0);
                w.isEmptyObject(l) && (delete m.handle, H.remove(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var o, r, s, a, l, c, u = [n || y],
                d = m.call(e, "type") ? e.type : e,
                f = m.call(e, "namespace") ? e.namespace.split(".") : [],
                p = r = n = n || y;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Y.test(d + w.event.triggered) && (0 <= d.indexOf(".") && (d = (f = d.split(".")).shift(), f.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[w.expando] ? e : new w.Event(d, "object" == (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : w.makeArray(t, [e]), c = w.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!i && !c.noBubble && !w.isWindow(n)) {
                    for (s = c.delegateType || d, Y.test(s + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), r = p;
                    r === (n.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || h)
                }
                for (o = 0;
                    (p = u[o++]) && !e.isPropagationStopped();) e.type = 1 < o ? s : c.bindType || d, (l = (H.get(p, "events") || {})[e.type] && H.get(p, "handle")) && l.apply(p, t), (l = a && p[a]) && l.apply && w.acceptData(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), t) || !w.acceptData(n) || a && w.isFunction(n[d]) && !w.isWindow(n) && ((r = n[a]) && (n[a] = null), n[w.event.triggered = d](), w.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        dispatch: function(e) {
            e = w.event.fix(e);
            var t, n, i, o, r, s = u.call(arguments),
                a = (H.get(this, "events") || {})[e.type] || [],
                l = w.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (r = w.event.handlers.call(this, e, a), t = 0;
                    (i = r[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (o = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = t[n]).selector + " "] && (i[o] = r.needsContext ? 0 <= w(o, this).index(l) : w.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || y).documentElement, i = i.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[w.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = V.test(o) ? this.mouseHooks : U.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new w.Event(r), t = i.length; t--;) e[n = i[t]] = r[n];
            return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== Z() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === Z() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && w.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            e = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? w.event.trigger(e, null, t) : w.event.dispatch.call(t, e), e.isDefaultPrevented() && n.preventDefault()
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, w.Event = function(e, t) {
        return this instanceof w.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? J : K) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || w.now(), void(this[w.expando] = !0)) : new w.Event(e, t)
    }, w.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = J, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = J, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = J, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        w.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || w.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), v.focusinBubbles || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function o(e) {
            w.event.simulate(i, e.target, w.event.fix(e), !0)
        }
        w.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = H.access(e, i);
                t || e.addEventListener(n, o, !0), H.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = H.access(e, i) - 1;
                t ? H.access(e, i, t) : (e.removeEventListener(n, o, !0), H.remove(e, i))
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, i, o) {
            var r, s;
            if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = K;
            else if (!i) return this;
            return 1 === o && (r = i, (i = function(e) {
                return w().off(e), r.apply(this, arguments)
            }).guid = r.guid || (r.guid = w.guid++)), this.each(function() {
                w.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != (void 0 === e ? "undefined" : _typeof(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = K), this.each(function() {
                w.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? w.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        te = /<([\w:]+)/,
        ne = /<|&#?\w+;/,
        ie = /<(?:script|style|link)/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^$|\/(?:java|ecma)script/i,
        se = /^true\/(.*)/,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        return w.nodeName(e, "table") && w.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function de(e) {
        var t = se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function fe(e, t) {
        for (var n = 0, i = e.length; n < i; n++) H.set(e[n], "globalEval", !t || H.get(t[n], "globalEval"))
    }

    function pe(e, t) {
        var n, i, o, r, s, a;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (r = H.access(e), s = H.set(t, r), a = r.events))
                for (o in delete s.handle, s.events = {}, a)
                    for (n = 0, i = a[o].length; n < i; n++) w.event.add(t, o, a[o][n]);
            M.hasData(e) && (e = M.access(e), e = w.extend({}, e), M.set(t, e))
        }
    }

    function he(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && w.nodeName(e, t) ? w.merge([e], n) : n
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, w.extend({
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                d = w.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (s = he(u), i = 0, o = (r = he(e)).length; i < o; i++) a = r[i], l = s[i], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && X.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || he(e), s = s || he(u), i = 0, o = r.length; i < o; i++) pe(r[i], s[i]);
                else pe(e, u);
            return 0 < (s = he(u, "script")).length && fe(s, !d && he(e, "script")), u
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, s, a, l, c = t.createDocumentFragment(), u = [], d = 0, f = e.length; d < f; d++)
                if ((o = e[d]) || 0 === o)
                    if ("object" === w.type(o)) w.merge(u, o.nodeType ? [o] : o);
                    else if (ne.test(o)) {
                for (r = r || c.appendChild(t.createElement("div")), s = (te.exec(o) || ["", ""])[1].toLowerCase(), s = le[s] || le._default, r.innerHTML = s[1] + o.replace(ee, "<$1></$2>") + s[2], l = s[0]; l--;) r = r.lastChild;
                w.merge(u, r.childNodes), (r = c.firstChild).textContent = ""
            } else u.push(t.createTextNode(o));
            for (c.textContent = "", d = 0; o = u[d++];)
                if ((!i || -1 === w.inArray(o, i)) && (a = w.contains(o.ownerDocument, o), r = he(c.appendChild(o), "script"), a && fe(r), n))
                    for (l = 0; o = r[l++];) re.test(o.type || "") && n.push(o);
            return c
        },
        cleanData: function(e) {
            for (var t, n, i, o, r = w.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (w.acceptData(n) && ((o = n[H.expando]) && (t = H.cache[o]))) {
                    if (t.events)
                        for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                    H.cache[o] && delete H.cache[o]
                }
                delete M.cache[n[M.expando]]
            }
        }
    }), w.fn.extend({
        text: function(e) {
            return O(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = ce(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? w.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || w.cleanData(he(n)), n.parentNode && (t && w.contains(n.ownerDocument, n) && fe(he(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(he(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return O(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ie.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ee, "<$1></$2>");
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function(e) {
            var t = e;
            return this.domManip(arguments, function(e) {
                t = this.parentNode, w.cleanData(he(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = g.apply([], n);
            var e, t, o, r, s, a, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                f = n[0],
                p = w.isFunction(f);
            if (p || 1 < c && "string" == typeof f && !v.checkClone && oe.test(f)) return this.each(function(e) {
                var t = u.eq(e);
                p && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
            });
            if (c && (t = (e = w.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (r = (o = w.map(he(e, "script"), ue)).length; l < c; l++) s = e, l !== d && (s = w.clone(s, !0, !0), r && w.merge(o, he(s, "script"))), i.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, w.map(o, de), l = 0; l < r; l++) s = o[l], re.test(s.type || "") && !H.access(s, "globalEval") && w.contains(a, s) && (s.src ? w._evalUrl && w._evalUrl(s.src) : w.globalEval(s.textContent.replace(ae, "")))
            }
            return this
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        w.fn[e] = function(e) {
            for (var t, n = [], i = w(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), w(i[r])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ge, me = {};

    function ve(e, t) {
        var t = w(t.createElement(e)).appendTo(t.body),
            n = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(t[0])) ? n.display : w.css(t[0], "display");
        return t.detach(), n
    }

    function ye(e) {
        var t = y,
            n = me[e];
        return n || ("none" !== (n = ve(e, t)) && n || ((t = (ge = (ge || w("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ve(e, t), ge.detach()), me[e] = n), n
    }
    var be, xe, we, $e, _e, Ce, Te = /^margin/,
        ke = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        je = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };

    function qe(e, t, n) {
        var i, o, r = e.style;
        return (n = n || je(e)) && (o = n.getPropertyValue(t) || n[t]), n && ("" !== o || w.contains(e.ownerDocument, e) || (o = w.style(e, t)), ke.test(o) && Te.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o
    }

    function Ne(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    $e = y.documentElement, _e = y.createElement("div"), (Ce = y.createElement("div")).style && (we = function() {
        Ce.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", Ce.innerHTML = "", $e.appendChild(_e);
        var e = h.getComputedStyle(Ce, null);
        be = "1%" !== e.top, xe = "4px" === e.width, $e.removeChild(_e)
    }, Ce.style.backgroundClip = "content-box", Ce.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === Ce.style.backgroundClip, _e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", _e.appendChild(Ce), h.getComputedStyle && w.extend(v, {
        pixelPosition: function() {
            return we(), be
        },
        boxSizingReliable: function() {
            return null == xe && we(), xe
        },
        reliableMarginRight: function() {
            var e = Ce.appendChild(y.createElement("div"));
            return e.style.cssText = Ce.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", Ce.style.width = "1px", $e.appendChild(_e), e = !parseFloat(h.getComputedStyle(e, null).marginRight), $e.removeChild(_e), e
        }
    })), w.swap = function(e, t, n, i) {
        var o, r = {};
        for (o in t) r[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, i || []), t) e.style[o] = r[o];
        return i
    };
    var Ee = /^(none|table(?!-c[ea]).+)/,
        Se = new RegExp("^(" + z + ")(.*)$", "i"),
        De = new RegExp("^([+-])=(" + z + ")", "i"),
        Ae = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Le = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Oe = ["Webkit", "O", "Moz", "ms"];

    function Pe(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Oe.length; o--;)
            if ((t = Oe[o] + n) in e) return t;
        return i
    }

    function He(e, t, n) {
        var i = Se.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function Me(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += w.css(e, n + B[r], !0, o)), i ? ("content" === n && (s -= w.css(e, "padding" + B[r], !0, o)), "margin" !== n && (s -= w.css(e, "border" + B[r] + "Width", !0, o))) : (s += w.css(e, "padding" + B[r], !0, o), "padding" !== n && (s += w.css(e, "border" + B[r] + "Width", !0, o)));
        return s
    }

    function Ie(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = je(e),
            s = "border-box" === w.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = qe(e, t, r)) < 0 || null == o) && (o = e.style[t]), ke.test(o)) return o;
            i = s && (v.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Me(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }

    function Fe(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (r[s] = H.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && W(i) && (r[s] = H.access(i, "olddisplay", ye(i.nodeName)))) : (o = W(i), "none" === n && o || H.set(i, "olddisplay", o ? n : w.css(i, "display"))));
        for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function Re(e, t, n, i, o) {
        return new Re.prototype.init(e, t, n, i, o)
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = qe(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = w.camelCase(t),
                    l = e.style;
                return t = w.cssProps[a] || (w.cssProps[a] = Pe(l, a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : ("string" === (r = void 0 === n ? "undefined" : _typeof(n)) && (o = De.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(w.css(e, t)), r = "number"), void(null != n && n == n && ("number" !== r || w.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r = w.camelCase(t);
            return t = w.cssProps[r] || (w.cssProps[r] = Pe(e.style, r)), (r = w.cssHooks[t] || w.cssHooks[r]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = qe(e, t, i)), "normal" === o && t in Le && (o = Le[t]), "" === n || n ? (t = parseFloat(o), !0 === n || w.isNumeric(t) ? t || 0 : o) : o
        }
    }), w.each(["height", "width"], function(e, o) {
        w.cssHooks[o] = {
            get: function(e, t, n) {
                return t ? Ee.test(w.css(e, "display")) && 0 === e.offsetWidth ? w.swap(e, Ae, function() {
                    return Ie(e, o, n)
                }) : Ie(e, o, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && je(e);
                return He(0, t, n ? Me(e, o, n, "border-box" === w.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), w.cssHooks.marginRight = Ne(v.reliableMarginRight, function(e, t) {
        return t ? w.swap(e, {
            display: "inline-block"
        }, qe, [e, "marginRight"]) : void 0
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        w.cssHooks[o + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + B[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, Te.test(o) || (w.cssHooks[o + r].set = He)
    }), w.fn.extend({
        css: function(e, t) {
            return O(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (w.isArray(t)) {
                    for (i = je(e), o = t.length; s < o; s++) r[t[s]] = w.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Fe(this, !0)
        },
        hide: function() {
            return Fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                W(this) ? w(this).show() : w(this).hide()
            })
        }
    }), (w.Tween = Re).prototype = {
        constructor: Re,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Re.propHooks[this.prop];
            return (e && e.get ? e : Re.propHooks._default).get(this)
        },
        run: function(e) {
            var t = Re.propHooks[this.prop];
            return this.pos = e = this.options.duration ? w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (t && t.set ? t : Re.propHooks._default).set(this), this
        }
    }, Re.prototype.init.prototype = Re.prototype, Re.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[w.cssProps[e.prop]] || w.cssHooks[e.prop]) ? w.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Re.propHooks.scrollTop = Re.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, w.fx = Re.prototype.init, w.fx.step = {};
    var We, ze, Be = /^(?:toggle|show|hide)$/,
        Xe = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        Qe = /queueHooks$/,
        Ue = [function(t, e, n) {
            var i, o, r, s, a, l, c, u = this,
                d = {},
                f = t.style,
                p = t.nodeType && W(t),
                h = H.get(t, "fxshow");
            for (i in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, w.queue(t, "fx").length || a.empty.fire()
                    })
                })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = w.css(t, "display"), "inline" === ("none" === c ? H.get(t, "olddisplay") || ye(t.nodeName) : c) && "none" === w.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), e)
                if (o = e[i], Be.exec(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !h || void 0 === h[i]) continue;
                        p = !0
                    }
                    d[i] = h && h[i] || w.style(t, i)
                } else c = void 0;
            if (w.isEmptyObject(d)) "inline" === ("none" === c ? ye(t.nodeName) : c) && (f.display = c);
            else
                for (i in h ? "hidden" in h && (p = h.hidden) : h = H.access(t, "fxshow", {}), r && (h.hidden = !p), p ? w(t).show() : u.done(function() {
                        w(t).hide()
                    }), u.done(function() {
                        for (var e in H.remove(t, "fxshow"), d) w.style(t, e, d[e])
                    }), d) s = Je(p ? h[i] : 0, i, u), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        Ve = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    t = Xe.exec(t),
                    o = t && t[3] || (w.cssNumber[e] ? "" : "px"),
                    r = (w.cssNumber[e] || "px" !== o && +i) && Xe.exec(w.css(n.elem, e)),
                    s = 1,
                    a = 20;
                if (r && r[3] !== o)
                    for (o = o || r[3], t = t || [], r = +i || 1; r /= s = s || ".5", w.style(n.elem, e, r + o), s !== (s = n.cur() / i) && 1 !== s && --a;);
                return t && (r = n.start = +r || +i || 0, n.unit = o, n.end = t[1] ? r + (t[1] + 1) * t[2] : +t[2]), n
            }]
        };

    function Ye() {
        return setTimeout(function() {
            We = void 0
        }), We = w.now()
    }

    function Ge(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = B[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Je(e, t, n) {
        for (var i, o = (Ve[t] || []).concat(Ve["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function Ke(o, e, t) {
        var n, r, i = 0,
            s = Ue.length,
            a = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = We || Ye(), e = Math.max(0, c.startTime + c.duration - e), t = 1 - (e / c.duration || 0), n = 0, i = c.tweens.length; n < i; n++) c.tweens[n].run(t);
                return a.notifyWith(o, [c, t, e]), t < 1 && i ? e : (a.resolveWith(o, [c]), !1)
            },
            c = a.promise({
                elem: o,
                props: w.extend({}, e),
                opts: w.extend(!0, {
                    specialEasing: {}
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: We || Ye(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = w.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? a.resolveWith(o, [c, e]) : a.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = w.camelCase(n)], r = e[n], w.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); i < s; i++)
            if (n = Ue[i].call(c, o, u, c.opts)) return n;
        return w.map(u, Je, c), w.isFunction(c.opts.start) && c.opts.start.call(o, c), w.fx.timer(w.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    w.Animation = w.extend(Ke, {
        tweener: function(e, t) {
            for (var n, i = 0, o = (e = w.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < o; i++) n = e[i], Ve[n] = Ve[n] || [], Ve[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Ue.unshift(e) : Ue.push(e)
        }
    }), w.speed = function(e, t, n) {
        var i = e && "object" == (void 0 === e ? "undefined" : _typeof(e)) ? w.extend({}, e) : {
            complete: n || !n && t || w.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !w.isFunction(t) && t
        };
        return i.duration = w.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in w.fx.speeds ? w.fx.speeds[i.duration] : w.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            w.isFunction(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
        }, i
    }, w.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var o = w.isEmptyObject(t),
                r = w.speed(e, n, i),
                i = function() {
                    var e = Ke(this, w.extend({}, t), r);
                    (o || H.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(o, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = w.timers,
                    i = H.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Qe.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || w.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = H.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = w.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, w.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), w.each(["toggle", "show", "hide"], function(e, i) {
        var o = w.fn[i];
        w.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(Ge(i, !0), e, t, n)
        }
    }), w.each({
        slideDown: Ge("show"),
        slideUp: Ge("hide"),
        slideToggle: Ge("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        w.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), w.timers = [], w.fx.tick = function() {
        var e, t = 0,
            n = w.timers;
        for (We = w.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), We = void 0
    }, w.fx.timer = function(e) {
        w.timers.push(e), e() ? w.fx.start() : w.timers.pop()
    }, w.fx.interval = 13, w.fx.start = function() {
        ze = ze || setInterval(w.fx.tick, w.fx.interval)
    }, w.fx.stop = function() {
        clearInterval(ze), ze = null
    }, w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w.fn.delay = function(i, e) {
        return i = w.fx && w.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }, s = y.createElement("input"), n = y.createElement("select"), z = n.appendChild(y.createElement("option")), s.type = "checkbox", v.checkOn = "" !== s.value, v.optSelected = z.selected, n.disabled = !0, v.optDisabled = !z.disabled, (s = y.createElement("input")).value = "t", s.type = "radio", v.radioValue = "t" === s.value;
    var Ze, et = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return O(this, w.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return _typeof(e.getAttribute) === Q ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (t = t.toLowerCase(), i = w.attrHooks[t] || (w.expr.match.bool.test(t) ? Ze : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : null == (o = w.find.attr(e, t)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void w.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
                r = t && t.match(D);
            if (r && 1 === e.nodeType)
                for (; n = r[o++];) i = w.propFix[n] || n, w.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && w.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), Ze = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = et[t] || w.find.attr;
        et[t] = function(e, t, n) {
            var i, o;
            return n || (o = et[t], et[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, et[t] = o), i
        }
    });
    var tt = /^(?:input|select|textarea|button)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return O(this, w.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !w.isXMLDoc(e)) && (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || tt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), v.optSelected || (w.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    var nt = /[\t\r\n\f]/g;
    w.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (w.isFunction(t)) return this.each(function(e) {
                w(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(D) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(nt, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = w.trim(i), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                c = this.length;
            if (w.isFunction(t)) return this.each(function(e) {
                w(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(D) || []; l < c; l++)
                    if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(nt, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        s = t ? w.trim(i) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(o, t) {
            var r = void 0 === o ? "undefined" : _typeof(o);
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : this.each(w.isFunction(o) ? function(e) {
                w(this).toggleClass(o.call(this, e, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var e, t = 0, n = w(this), i = o.match(D) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else r !== Q && "boolean" !== r || (this.className && H.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && H.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(nt, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var it = /\r/g;
    w.fn.extend({
        val: function(t) {
            var n, e, i, o = this[0];
            return arguments.length ? (i = w.isFunction(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, w(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : w.isArray(e) && (e = w.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : o ? (n = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(it, "") : null == e ? "" : e : void 0
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : w.trim(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, r = o ? null : [], s = o ? i + 1 : n.length, a = i < 0 ? s : o ? i : 0; a < s; a++)
                        if (!(!(t = n[a]).selected && a !== i || (v.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && w.nodeName(t.parentNode, "optgroup"))) {
                            if (t = w(t).val(), o) return t;
                            r.push(t)
                        } return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;)((i = o[s]).selected = 0 <= w.inArray(i.value, r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                return w.isArray(t) ? e.checked = 0 <= w.inArray(w(e).val(), t) : void 0
            }
        }, v.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        w.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ot = w.now(),
        rt = /\?/;
    w.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, w.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), t
    };
    var st, at, lt = /#.*$/,
        ct = /([?&])_=[^&]*/,
        ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        dt = /^(?:GET|HEAD)$/,
        ft = /^\/\//,
        pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ht = {},
        gt = {},
        mt = "*/".concat("*");
    try {
        at = location.href
    } catch (e) {
        (at = y.createElement("a")).href = "", at = at.href
    }

    function vt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(D) || [];
            if (w.isFunction(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function yt(t, i, o, r) {
        var s = {},
            a = t === gt;

        function l(e) {
            var n;
            return s[e] = !0, w.each(t[e] || [], function(e, t) {
                t = t(i, o, r);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
            }), n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function bt(e, t) {
        var n, i, o = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]);
        return i && w.extend(!0, e, i), e
    }
    st = pt.exec(at.toLowerCase()) || [], w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(st[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? bt(bt(e, w.ajaxSettings), t) : bt(w.ajaxSettings, e)
        },
        ajaxPrefilter: vt(ht),
        ajaxTransport: vt(gt),
        ajax: function(e, t) {
            "object" == (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};
            var l, c, u, n, d, f, i, p = w.ajaxSetup({}, t),
                h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                m = w.Deferred(),
                v = w.Callbacks("once memory"),
                y = p.statusCode || {},
                o = {},
                r = {},
                b = 0,
                s = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!n)
                                for (n = {}; t = ut.exec(u);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = r[n] = r[n] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (b < 2)
                                for (var t in e) y[t] = [y[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        e = e || s;
                        return l && l.abort(e), a(0, e), this
                    }
                };
            if (m.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, p.url = ((e || p.url || at) + "").replace(lt, "").replace(ft, st[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = w.trim(p.dataType || "*").toLowerCase().match(D) || [""], null == p.crossDomain && (e = pt.exec(p.url.toLowerCase()), p.crossDomain = !(!e || e[1] === st[1] && e[2] === st[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (st[3] || ("http:" === st[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), yt(ht, p, t, x), 2 === b) return x;
            for (i in (f = p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !dt.test(p.type), c = p.url, p.hasContent || (p.data && (c = p.url += (rt.test(c) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = ct.test(c) ? c.replace(ct, "$1_=" + ot++) : c + (rt.test(c) ? "&" : "?") + "_=" + ot++)), p.ifModified && (w.lastModified[c] && x.setRequestHeader("If-Modified-Since", w.lastModified[c]), w.etag[c] && x.setRequestHeader("If-None-Match", w.etag[c])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + mt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, x, p) || 2 === b)) return x.abort();
            for (i in s = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](p[i]);
            if (l = yt(gt, p, t, x)) {
                x.readyState = 1, f && g.trigger("ajaxSend", [x, p]), p.async && 0 < p.timeout && (d = setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, l.send(o, a)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    a(-1, e)
                }
            } else a(-1, "No Transport");

            function a(e, t, n, i) {
                var o, r, s, a = t;
                2 !== b && (b = 2, d && clearTimeout(d), l = void 0, u = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            } if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s = s || o
                        }
                        r = r || s
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(p, x, n)), s = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, s, x, i), i ? (p.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (w.lastModified[c] = n), (n = x.getResponseHeader("etag")) && (w.etag[c] = n)), 204 === e || "HEAD" === p.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, o = s.data, i = !(r = s.error))) : (r = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? m.resolveWith(h, [o, a, x]) : m.rejectWith(h, [x, a, r]), x.statusCode(y), y = void 0, f && g.trigger(i ? "ajaxSuccess" : "ajaxError", [x, p, i ? o : r]), v.fireWith(h, [x, a]), f && (g.trigger("ajaxComplete", [x, p]), --w.active || w.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, o) {
        w[o] = function(e, t, n, i) {
            return w.isFunction(t) && (i = i || n, n = t, t = void 0), w.ajax({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            })
        }
    }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, w.fn.extend({
        wrapAll: function(t) {
            var e;
            return w.isFunction(t) ? this.each(function(e) {
                w(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(w.isFunction(n) ? function(e) {
                w(this).wrapInner(n.call(this, e))
            } : function() {
                var e = w(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = w.isFunction(t);
            return this.each(function(e) {
                w(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                w.nodeName(this, "body") || w(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var xt = /%20/g,
        wt = /\[\]$/,
        $t = /\r?\n/g,
        _t = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    w.param = function(e, t) {
        function n(e, t) {
            t = w.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, o = [];
        if (void 0 === t && (t = w.ajaxSettings && w.ajaxSettings.traditional), w.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, o, r) {
                if (w.isArray(e)) w.each(e, function(e, t) {
                    o || wt.test(i) ? r(i, t) : n(i + "[" + ("object" == (void 0 === t ? "undefined" : _typeof(t)) ? e : "") + "]", t, o, r)
                });
                else if (o || "object" !== w.type(e)) r(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&").replace(xt, "+")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && Ct.test(this.nodeName) && !_t.test(e) && (this.checked || !X.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : w.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace($t, "\r\n")
                }
            }).get()
        }
    }), w.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Tt = 0,
        kt = {},
        jt = {
            0: 200,
            1223: 204
        },
        qt = w.ajaxSettings.xhr();
    h.ActiveXObject && w(h).on("unload", function() {
        for (var e in kt) kt[e]()
    }), v.cors = !!qt && "withCredentials" in qt, v.ajax = qt = !!qt, w.ajaxTransport(function(r) {
        var s;
        return v.cors || qt && !r.crossDomain ? {
            send: function(e, t) {
                var n, i = r.xhr(),
                    o = ++Tt;
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function(e) {
                    return function() {
                        s && (delete kt[o], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(jt[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
                            text: i.responseText
                        } : void 0, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), i.onerror = s("error"), s = kt[o] = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(n) {
        var i, o;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = w("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function(e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), y.head.appendChild(i[0])
            },
            abort: function() {
                o && o()
            }
        }
    });
    var Nt = [],
        Et = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || w.expando + "_" + ot++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (Et.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Et.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = w.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Et, "$1" + i) : !1 !== e.jsonp && (e.url += (rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return r || w.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = h[i], h[i] = function() {
            r = arguments
        }, n.always(function() {
            h[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Nt.push(i)), r && w.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), w.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || y;
        var i = _.exec(e),
            n = !n && [];
        return i ? [t.createElement(i[1])] : (i = w.buildFragment([e], t, n), n && n.length && w(n).remove(), w.merge([], i.childNodes))
    };
    var St = w.fn.load;
    w.fn.load = function(e, t, n) {
        if ("string" != typeof e && St) return St.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return 0 <= a && (i = w.trim(e.slice(a)), e = e.slice(0, a)), w.isFunction(t) ? (n = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (o = "POST"), 0 < s.length && w.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            s.each(n, r || [e.responseText, t, e])
        }), this
    };
    var Dt = h.document.documentElement;

    function At(e) {
        return w.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    w.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a = w.css(e, "position"),
                l = w(e),
                c = {};
            "static" === a && (e.style.position = "relative"), r = l.offset(), i = w.css(e, "top"), s = w.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (o = (a = l.position()).top, a.left) : (o = parseFloat(i) || 0, parseFloat(s) || 0), w.isFunction(t) && (t = t.call(e, n, r)), null != t.top && (c.top = t.top - r.top + o), null != t.left && (c.left = t.left - r.left + s), "using" in t ? t.using.call(e, c) : l.css(c)
        }
    }, w.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                w.offset.setOffset(this, t, e)
            });
            var e, n = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            return o ? (e = o.documentElement, w.contains(e, n) ? (_typeof(n.getBoundingClientRect) !== Q && (i = n.getBoundingClientRect()), o = At(o), {
                top: i.top + o.pageYOffset - e.clientTop,
                left: i.left + o.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === w.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), w.nodeName(e[0], "html") || (i = e.offset()), i.top += w.css(e[0], "borderTopWidth", !0), i.left += w.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - w.css(n, "marginTop", !0),
                    left: t.left - i.left - w.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Dt; e && !w.nodeName(e, "html") && "static" === w.css(e, "position");) e = e.offsetParent;
                return e || Dt
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, o) {
        var r = "pageYOffset" === o;
        w.fn[t] = function(e) {
            return O(this, function(e, t, n) {
                var i = At(e);
                return void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? h.pageXOffset : n, r ? n : h.pageYOffset) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }), w.each(["top", "left"], function(e, n) {
        w.cssHooks[n] = Ne(v.pixelPosition, function(e, t) {
            return t ? (t = qe(e, n), ke.test(t) ? w(e).position()[n] + "px" : t) : void 0
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(r, s) {
        w.each({
            padding: "inner" + r,
            content: s,
            "": "outer" + r
        }, function(i, e) {
            w.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return O(this, function(e, t, n) {
                    var i;
                    return w.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + r], i["scroll" + r], e.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? w.css(e, t, o) : w.style(e, t, n, o)
                }, s, n ? e : void 0, n, null)
            }
        })
    }), w.fn.size = function() {
        return this.length
    }, w.fn.andSelf = w.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Lt = h.jQuery,
        Ot = h.$;
    return w.noConflict = function(e) {
        return h.$ === w && (h.$ = Ot), e && h.jQuery === w && (h.jQuery = Lt), w
    }, (void 0 === e ? "undefined" : _typeof(e)) === Q && (h.jQuery = h.$ = w), w
}), jQuery.browser = {}, jQuery.browser.msie = !1, jQuery.browser.version = 0, navigator.userAgent.match(/MSIE ([0-9]+)./) && (jQuery.browser.msie = !0, jQuery.browser.version = RegExp.$1);
var Sizzle = function(n) {
    function d(e, t, n) {
        var i = "0x" + t - 65536;
        return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
    }
    var e, p, x, r, t, h, f, g, w, c, u, m, $, i, v, y, o, s, b, _ = "sizzle" + -new Date,
        C = n.document,
        T = 0,
        k = 0,
        a = oe(),
        j = oe(),
        l = oe(),
        q = function(e, t) {
            return e === t && (u = !0), 0
        },
        N = "undefined",
        E = {}.hasOwnProperty,
        S = [],
        D = S.pop,
        A = S.push,
        L = S.push,
        O = S.slice,
        P = S.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        F = I.replace("w", "w#"),
        R = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
        W = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        B = new RegExp("^" + M + "*," + M + "*"),
        X = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        Q = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        U = new RegExp(W),
        V = new RegExp("^" + F + "$"),
        Y = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + H + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
        G = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = /'|\\/g,
        ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig");
    try {
        L.apply(S = O.call(C.childNodes), C.childNodes), S[C.childNodes.length].nodeType
    } catch (e) {
        L = {
            apply: S.length ? function(e, t) {
                A.apply(e, O.call(t))
            } : function(e, t) {
                for (var n = e.length, i = 0; e[n++] = t[i++];);
                e.length = n - 1
            }
        }
    }

    function ie(e, t, n, i) {
        var o, r, s, a, l, c, u, d, f;
        if ((t ? t.ownerDocument || t : C) !== $ && m(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (s = (t = t || $).nodeType) && 9 !== s) return [];
        if (v && !i) {
            if (o = Z.exec(e))
                if (c = o[1]) {
                    if (9 === s) {
                        if (!(r = t.getElementById(c)) || !r.parentNode) return n;
                        if (r.id === c) return n.push(r), n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(c)) && b(t, r) && r.id === c) return n.push(r), n
                } else {
                    if (o[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                    if ((c = o[3]) && p.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(c)), n
                } if (p.qsa && (!y || !y.test(e))) {
                if (u = c = _, d = t, f = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                    for (l = h(e), (c = t.getAttribute("id")) ? u = c.replace(te, "\\$&") : t.setAttribute("id", u), u = "[id='" + u + "'] ", a = l.length; a--;) l[a] = u + fe(l[a]);
                    d = ee.test(e) && ue(t.parentNode) || t, f = l.join(",")
                }
                if (f) try {
                    return L.apply(n, d.querySelectorAll(f)), n
                } catch (e) {} finally {
                    c || t.removeAttribute("id")
                }
            }
        }
        return g(e.replace(z, "$1"), t, n, i)
    }

    function oe() {
        var n = [];

        function i(e, t) {
            return n.push(e + " ") > x.cacheLength && delete i[n.shift()], i[e + " "] = t
        }
        return i
    }

    function re(e) {
        return e[_] = !0, e
    }

    function se(e) {
        var t = $.createElement("div");
        try {
            return !!e(t)
        } catch (e) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
        }
    }

    function ae(e, t) {
        for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
    }

    function le(e, t) {
        var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (i) return i;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function ce(s) {
        return re(function(r) {
            return r = +r, re(function(e, t) {
                for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
            })
        })
    }

    function ue(e) {
        return e && _typeof(e.getElementsByTagName) !== N && e
    }
    for (e in p = ie.support = {}, t = ie.isXML = function(e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, m = ie.setDocument = function(e) {
            var l = e ? e.ownerDocument || e : C,
                e = l.defaultView;
            return l !== $ && 9 === l.nodeType && l.documentElement ? (i = ($ = l).documentElement, v = !t(l), e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", function() {
                m()
            }, !1) : e.attachEvent && e.attachEvent("onunload", function() {
                m()
            })), p.attributes = se(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), p.getElementsByTagName = se(function(e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
            }), p.getElementsByClassName = K.test(l.getElementsByClassName) && se(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), p.getById = se(function(e) {
                return i.appendChild(e).id = _, !l.getElementsByName || !l.getElementsByName(_).length
            }), p.getById ? (x.find.ID = function(e, t) {
                if (_typeof(t.getElementById) !== N && v) {
                    e = t.getElementById(e);
                    return e && e.parentNode ? [e] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(ne, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(ne, d);
                return function(e) {
                    e = _typeof(e.getAttributeNode) !== N && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                if (_typeof(t.getElementsByTagName) !== N) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" !== e) return r;
                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                return i
            }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (_typeof(t.getElementsByClassName) !== N && v) return t.getElementsByClassName(e)
            }, o = [], y = [], (p.qsa = K.test(l.querySelectorAll)) && (se(function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || y.push(":checked")
            }), se(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (p.matchesSelector = K.test(s = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && se(function(e) {
                p.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), o.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), o = o.length && new RegExp(o.join("|")), e = K.test(i.compareDocumentPosition), b = e || K.test(i.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = e ? function(e, t) {
                if (e === t) return u = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === C && b(C, e) ? -1 : t === l || t.ownerDocument === C && b(C, t) ? 1 : c ? P.call(c, e) - P.call(c, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return u = !0, 0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    s = [e],
                    a = [t];
                if (!o || !r) return e === l ? -1 : t === l ? 1 : o ? -1 : r ? 1 : c ? P.call(c, e) - P.call(c, t) : 0;
                if (o === r) return le(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? le(s[i], a[i]) : s[i] === C ? -1 : a[i] === C ? 1 : 0
            }, l) : $
        }, ie.matches = function(e, t) {
            return ie(e, null, null, t)
        }, ie.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== $ && m(e), t = t.replace(Q, "='$1']"), p.matchesSelector && v && (!o || !o.test(t)) && (!y || !y.test(t))) try {
                var n = s.call(e, t);
                if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {}
            return 0 < ie(t, $, null, [e]).length
        }, ie.contains = function(e, t) {
            return (e.ownerDocument || e) !== $ && m(e), b(e, t)
        }, ie.attr = function(e, t) {
            (e.ownerDocument || e) !== $ && m(e);
            var n = x.attrHandle[t.toLowerCase()],
                n = n && E.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !v) : void 0;
            return void 0 !== n ? n : p.attributes || !v ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ie.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ie.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (u = !p.detectDuplicates, c = !p.sortStable && e.slice(0), e.sort(q), u) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return c = null, e
        }, r = ie.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[i++];) n += r(t);
            return n
        }, (x = ie.selectors = {
            cacheLength: 50,
            createPseudo: re,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ne, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ne, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = a[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && a(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== N && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(e) {
                        e = ie.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, e, t, h, g) {
                    var m = "nth" !== p.slice(0, 3),
                        v = "last" !== p.slice(-4),
                        y = "of-type" === e;
                    return 1 === h && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var i, o, r, s, a, l, c = m != v ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            d = y && e.nodeName.toLowerCase(),
                            f = !n && !y;
                        if (u) {
                            if (m) {
                                for (; c;) {
                                    for (r = e; r = r[c];)
                                        if (y ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
                                    l = c = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? u.firstChild : u.lastChild], v && f) {
                                for (a = (i = (o = u[_] || (u[_] = {}))[p] || [])[0] === T && i[1], s = i[0] === T && i[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
                                    if (1 === r.nodeType && ++s && r === e) {
                                        o[p] = [T, a, s];
                                        break
                                    }
                            } else if (f && (i = (e[_] || (e[_] = {}))[p]) && i[0] === T) s = i[1];
                            else
                                for (;
                                    (r = ++a && r && r[c] || (s = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++s || (f && ((r[_] || (r[_] = {}))[p] = [T, s]), r !== e)););
                            return (s -= g) === h || s % h == 0 && 0 <= s / h
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
                    return s[_] ? s(r) : 1 < s.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                        for (var n, i = s(e, r), o = i.length; o--;) e[n = P.call(e, i[o])] = !(t[n] = i[o])
                    }) : function(e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: re(function(e) {
                    var i = [],
                        o = [],
                        a = f(e.replace(z, "$1"));
                    return a[_] ? re(function(e, t, n, i) {
                        for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, t, n) {
                        return i[0] = e, a(i, null, n, o), !o.pop()
                    }
                }),
                has: re(function(t) {
                    return function(e) {
                        return 0 < ie(t, e).length
                    }
                }),
                contains: re(function(t) {
                    return function(e) {
                        return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                    }
                }),
                lang: re(function(n) {
                    return V.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, d).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === i
                },
                focus: function(e) {
                    return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: ce(function() {
                    return [0]
                }),
                last: ce(function(e, t) {
                    return [t - 1]
                }),
                eq: ce(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ce(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ce(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ce(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                    return e
                }),
                gt: ce(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[e] = function(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }(e);
    for (e in {
            submit: !0,
            reset: !0
        }) x.pseudos[e] = function(n) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n
        }
    }(e);

    function de() {}

    function fe(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
    }

    function pe(s, e, t) {
        var a = e.dir,
            l = t && "parentNode" === a,
            c = k++;
        return e.first ? function(e, t, n) {
            for (; e = e[a];)
                if (1 === e.nodeType || l) return s(e, t, n)
        } : function(e, t, n) {
            var i, o, r = [T, c];
            if (n) {
                for (; e = e[a];)
                    if ((1 === e.nodeType || l) && s(e, t, n)) return !0
            } else
                for (; e = e[a];)
                    if (1 === e.nodeType || l) {
                        if ((i = (o = e[_] || (e[_] = {}))[a]) && i[0] === T && i[1] === c) return r[2] = i[2];
                        if ((o[a] = r)[2] = s(e, t, n)) return !0
                    }
        }
    }

    function he(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var i = o.length; i--;)
                if (!o[i](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function ge(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
        return s
    }

    function me(p, h, g, m, v, e) {
        return m && !m[_] && (m = me(m)), v && !v[_] && (v = me(v, e)), re(function(e, t, n, i) {
            var o, r, s, a = [],
                l = [],
                c = t.length,
                u = e || function(e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []),
                d = !p || !e && h ? u : ge(u, a, p, n, i),
                f = g ? v || (e ? p : c || m) ? [] : t : d;
            if (g && g(d, f, n, i), m)
                for (o = ge(f, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (f[l[r]] = !(d[l[r]] = s));
            if (e) {
                if (v || p) {
                    if (v) {
                        for (o = [], r = f.length; r--;)(s = f[r]) && o.push(d[r] = s);
                        v(null, f = [], o, i)
                    }
                    for (r = f.length; r--;)(s = f[r]) && -1 < (o = v ? P.call(e, s) : a[r]) && (e[o] = !(t[o] = s))
                }
            } else f = ge(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : L.apply(t, f)
        })
    }

    function ve(m, v) {
        function e(e, t, n, i, o) {
            var r, s, a, l = 0,
                c = "0",
                u = e && [],
                d = [],
                f = w,
                p = e || b && x.find.TAG("*", o),
                h = T += null == f ? 1 : Math.random() || .1,
                g = p.length;
            for (o && (w = t !== $ && t); c !== g && null != (r = p[c]); c++) {
                if (b && r) {
                    for (s = 0; a = m[s++];)
                        if (a(r, t, n)) {
                            i.push(r);
                            break
                        } o && (T = h)
                }
                y && ((r = !a && r) && l--, e && u.push(r))
            }
            if (l += c, y && c !== l) {
                for (s = 0; a = v[s++];) a(u, d, t, n);
                if (e) {
                    if (0 < l)
                        for (; c--;) u[c] || d[c] || (d[c] = D.call(i));
                    d = ge(d)
                }
                L.apply(i, d), o && !e && 0 < d.length && 1 < l + v.length && ie.uniqueSort(i)
            }
            return o && (T = h, w = f), u
        }
        var y = 0 < v.length,
            b = 0 < m.length;
        return y ? re(e) : e
    }
    return de.prototype = x.filters = x.pseudos, x.setFilters = new de, h = ie.tokenize = function(e, t) {
        var n, i, o, r, s, a, l, c = j[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, a = [], l = x.preFilter; s;) {
            for (r in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(z, " ")
                }), s = s.slice(n.length)), x.filter) !(i = Y[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                value: n,
                type: r,
                matches: i
            }), s = s.slice(n.length));
            if (!n) break
        }
        return t ? s.length : s ? ie.error(e) : j(e, a).slice(0)
    }, f = ie.compile = function(e, t) {
        var n, i = [],
            o = [],
            r = l[e + " "];
        if (!r) {
            for (n = (t = t || h(e)).length; n--;)((r = function e(t) {
                for (var i, n, o, r = t.length, s = x.relative[t[0].type], a = s || x.relative[" "], l = s ? 1 : 0, c = pe(function(e) {
                        return e === i
                    }, a, !0), u = pe(function(e) {
                        return -1 < P.call(i, e)
                    }, a, !0), d = [function(e, t, n) {
                        return !s && (n || t !== w) || ((i = t).nodeType ? c : u)(e, t, n)
                    }]; l < r; l++)
                    if (n = x.relative[t[l].type]) d = [pe(he(d), n)];
                    else {
                        if ((n = x.filter[t[l].type].apply(null, t[l].matches))[_]) {
                            for (o = ++l; o < r && !x.relative[t[o].type]; o++);
                            return me(1 < l && he(d), 1 < l && fe(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, l < o && e(t.slice(l, o)), o < r && e(t = t.slice(o)), o < r && fe(t))
                        }
                        d.push(n)
                    } return he(d)
            }(t[n]))[_] ? i : o).push(r);
            (r = l(e, ve(o, i))).selector = e
        }
        return r
    }, g = ie.select = function(e, t, n, i) {
        var o, r, s, a, l, c = "function" == typeof e && e,
            u = !i && h(e = c.selector || e);
        if (n = n || [], 1 === u.length) {
            if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && p.getById && 9 === t.nodeType && v && x.relative[r[1].type]) {
                if (!(t = (x.find.ID(s.matches[0].replace(ne, d), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(r.shift().value.length)
            }
            for (o = Y.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                if ((l = x.find[a]) && (i = l(s.matches[0].replace(ne, d), ee.test(r[0].type) && ue(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && fe(r))) return L.apply(n, i), n;
                    break
                }
        }
        return (c || f(e, u))(i, t, !v, n, ee.test(e) && ue(t.parentNode) || t), n
    }, p.sortStable = _.split("").sort(q).join("") === _, p.detectDuplicates = !!u, m(), p.sortDetached = se(function(e) {
        return 1 & e.compareDocumentPosition($.createElement("div"))
    }), se(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ae("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), p.attributes && se(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ae("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), se(function(e) {
        return null == e.getAttribute("disabled")
    }) || ae(H, function(e, t, n) {
        if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
    }), ie
}(window);
jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains,
    function() {
        var u, r, o, n, i, t;
        u = jQuery, r = window, o = document, i = {
            width: 940,
            height: 988,
            start: 1,
            navigation: {
                active: !0,
                effect: "slide"
            },
            pagination: {
                active: !0,
                effect: "slide"
            },
            play: {
                active: !(n = "slidesjs"),
                effect: "slide",
                interval: 5e3,
                auto: !1,
                swap: !0,
                pauseOnHover: !1,
                restartDelay: 2500
            },
            effect: {
                slide: {
                    speed: 500
                },
                fade: {
                    speed: 300,
                    crossfade: !0
                }
            },
            callback: {
                loaded: function() {},
                start: function() {},
                complete: function() {}
            }
        }, (t = function(e, t) {
            this.element = e, this.options = u.extend(!0, {}, i, t), this._defaults = i, this._name = n, this.init()
        }).prototype.init = function() {
            var n, e, t, i = this,
                o = u(this.element);
            return this.data = u.data(this), u.data(this, "animating", !1), u.data(this, "total", o.children().not(".slidesjs-navigation", o).length), u.data(this, "current", this.options.start - 1), u.data(this, "vendorPrefix", this._getVendorPrefix()), "undefined" != typeof TouchEvent && (u.data(this, "touch", !0), this.options.effect.slide.speed = this.options.effect.slide.speed / 2), o.css({
                overflow: "hidden"
            }), o.slidesContainer = o.children().not(".slidesjs-navigation", o).wrapAll("<div class='slidesjs-container'>", o).parent().css({
                overflow: "hidden",
                position: "relative"
            }), u(".slidesjs-container", o).wrapInner("<div class='slidesjs-control'>", o).children(), u(".slidesjs-control", o).css({
                position: "relative",
                left: 0
            }), u(".slidesjs-control", o).children().addClass("slidesjs-slide").css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 0,
                display: "none",
                webkitBackfaceVisibility: "hidden"
            }), u.each(u(".slidesjs-control", o).children(), function(e) {
                return u(this).attr("slidesjs-index", e)
            }), this.data.touch && (u(".slidesjs-control", o).on("touchstart", function(e) {
                return i._touchstart(e)
            }), u(".slidesjs-control", o).on("touchmove", function(e) {
                return i._touchmove(e)
            }), u(".slidesjs-control", o).on("touchend", function(e) {
                return i._touchend(e)
            })), o.fadeIn(0), this.update(), this.data.touch && this._setuptouch(), u(".slidesjs-control", o).children(":eq(" + this.data.current + ")").eq(0).fadeIn(0, function() {
                return u(this).css({
                    zIndex: 10
                })
            }), this.options.navigation.active && (u("<a>", {
                class: "slidesjs-previous slidesjs-navigation",
                href: "#",
                title: "Previous",
                text: "ã€€"
            }).appendTo(o), u("<a>", {
                class: "slidesjs-next slidesjs-navigation",
                href: "#",
                title: "Next",
                text: "ã€€"
            }).appendTo(o)), u(".slidesjs-next", o).click(function(e) {
                return e.preventDefault(), i.stop(!0), i.next(i.options.navigation.effect)
            }), u(".slidesjs-previous", o).click(function(e) {
                return e.preventDefault(), i.stop(!0), i.previous(i.options.navigation.effect)
            }), this.options.play.active && (e = u("<a>", {
                class: "slidesjs-play slidesjs-navigation",
                href: "#",
                title: "Play",
                text: "Play"
            }).appendTo(o), t = u("<a>", {
                class: "slidesjs-stop slidesjs-navigation",
                href: "#",
                title: "Stop",
                text: "Stop"
            }).appendTo(o), e.click(function(e) {
                return e.preventDefault(), i.play(!0)
            }), t.click(function(e) {
                return e.preventDefault(), i.stop(!0)
            }), this.options.play.swap && t.css({
                display: "none"
            })), this.options.pagination.active && (n = u("<ul>", {
                class: "slidesjs-pagination"
            }).appendTo(o), u.each(new Array(this.data.total), function(e) {
                var t = u("<li>", {
                    class: "slidesjs-pagination-item"
                }).appendTo(n);
                return u("<a>", {
                    href: "#",
                    "data-slidesjs-item": e
                }).appendTo(t).click(function(e) {
                    return e.preventDefault(), i.stop(!0), i.goto(+u(e.currentTarget).attr("data-slidesjs-item") + 1)
                })
            })), u(r).bind("resize", function() {
                return i.update()
            }), this._setActive(), this.options.play.auto && this.play(), this.options.callback.loaded(this.options.start)
        }, t.prototype._setActive = function(e) {
            var t = u(this.element);
            return this.data = u.data(this), e = -1 < e ? e : this.data.current, u(".active", t).removeClass("active"), u(".slidesjs-pagination li:eq(" + e + ") a", t).addClass("active")
        }, t.prototype.update = function() {
            var e, t, n = u(this.element);
            return this.data = u.data(this), u(".slidesjs-control", n).children(":not(:eq(" + this.data.current + "))").css({
                display: "none",
                left: 0,
                zIndex: 0
            }), t = n.width(), e = this.options.height / this.options.width * t, this.options.width = t, this.options.height = e, u(".slidesjs-control, .slidesjs-container", n).css({
                width: t,
                height: e
            })
        }, t.prototype.next = function(e) {
            u(this.element);
            return this.data = u.data(this), u.data(this, "direction", "next"), void 0 === e && (e = this.options.navigation.effect), "fade" === e ? this._fade() : this._slide()
        }, t.prototype.previous = function(e) {
            u(this.element);
            return this.data = u.data(this), u.data(this, "direction", "previous"), void 0 === e && (e = this.options.navigation.effect), "fade" === e ? this._fade() : this._slide()
        }, t.prototype.goto = function(e) {
            var t;
            u(this.element);
            return this.data = u.data(this), void 0 === t && (t = this.options.pagination.effect), e > this.data.total ? e = this.data.total : e < 1 && (e = 1), "number" == typeof e ? "fade" === t ? this._fade(e) : this._slide(e) : "string" == typeof e ? "first" === e ? "fade" === t ? this._fade(0) : this._slide(0) : "last" === e ? "fade" === t ? this._fade(this.data.total) : this._slide(this.data.total) : void 0 : void 0
        }, t.prototype._setuptouch = function() {
            var e, t, n = u(this.element);
            return this.data = u.data(this), t = u(".slidesjs-control", n), e = this.data.current + 1, (n = this.data.current - 1) < 0 && (n = this.data.total - 1), e > this.data.total - 1 && (e = 0), t.children(":eq(" + e + ")").css({
                display: "block",
                left: this.options.width
            }), t.children(":eq(" + n + ")").css({
                display: "block",
                left: -this.options.width
            })
        }, t.prototype._touchstart = function(e) {
            var t;
            u(this.element);
            return this.data = u.data(this), t = e.originalEvent.touches[0], this._setuptouch(), u.data(this, "touchtimer", Number(new Date)), u.data(this, "touchstartx", t.pageX), u.data(this, "touchstarty", t.pageY), e.stopPropagation()
        }, t.prototype._touchend = function(e) {
            var t, n, i, o, r, s = this,
                a = u(this.element);
            return this.data = u.data(this), e.originalEvent.touches[0], (i = u(".slidesjs-control", a)).position().left > .5 * this.options.width || i.position().left > .1 * this.options.width && Number(new Date) - this.data.touchtimer < 250 ? (u.data(this, "direction", "previous"), this._slide()) : i.position().left < -.5 * this.options.width || i.position().left < -.1 * this.options.width && Number(new Date) - this.data.touchtimer < 250 ? (u.data(this, "direction", "next"), this._slide()) : (n = this.data.vendorPrefix, r = n + "Transform", t = n + "TransitionDuration", o = n + "TransitionTimingFunction", i[0].style[r] = "translateX(0px)", i[0].style[t] = .85 * this.options.effect.slide.speed + "ms"), i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                return n = s.data.vendorPrefix, r = n + "Transform", t = n + "TransitionDuration", o = n + "TransitionTimingFunction", i[0].style[r] = "", i[0].style[t] = "", i[0].style[o] = ""
            }), e.stopPropagation()
        }, t.prototype._touchmove = function(e) {
            var t, n, i = u(this.element);
            return this.data = u.data(this), t = e.originalEvent.touches[0], n = this.data.vendorPrefix, i = u(".slidesjs-control", i), n = n + "Transform", u.data(this, "scrolling", Math.abs(t.pageX - this.data.touchstartx) < Math.abs(t.pageY - this.data.touchstarty)), this.data.animating || this.data.scrolling || (e.preventDefault(), this._setuptouch(), i[0].style[n] = "translateX(" + (t.pageX - this.data.touchstartx) + "px)"), e.stopPropagation()
        }, t.prototype.play = function(e) {
            var t = this,
                n = u(this.element);
            if (this.data = u.data(this), !this.data.playInterval && (e && (this.data.current, this.data.direction = "next", "fade" === this.options.play.effect ? this._fade() : this._slide()), u.data(this, "playInterval", setInterval(function() {
                    return t.data.current, t.data.direction = "next", "fade" === t.options.play.effect ? t._fade() : t._slide()
                }, this.options.play.interval)), e = u(".slidesjs-container", n), this.options.play.pauseOnHover && (e.unbind(), e.bind("mouseenter", function() {
                    return t.stop()
                }), e.bind("mouseleave", function() {
                    return t.options.play.restartDelay ? u.data(t, "restartDelay", setTimeout(function() {
                        return t.play(!0)
                    }, t.options.play.restartDelay)) : t.play()
                })), u.data(this, "playing", !0), u(".slidesjs-play", n).addClass("slidesjs-playing"), this.options.play.swap)) return u(".slidesjs-play", n).hide(), u(".slidesjs-stop", n).show()
        }, t.prototype.stop = function(e) {
            var t = u(this.element);
            if (this.data = u.data(this), clearInterval(this.data.playInterval), this.options.play.pauseOnHover && e && u(".slidesjs-container", t).unbind(), u.data(this, "playInterval", null), u.data(this, "playing", !1), u(".slidesjs-play", t).removeClass("slidesjs-playing"), this.options.play.swap) return u(".slidesjs-stop", t).hide(), u(".slidesjs-play", t).show()
        }, t.prototype._slide = function(e) {
            var t, n, i, o, r, s, a, l = this,
                c = u(this.element);
            if (this.data = u.data(this), !this.data.animating && e !== this.data.current + 1) return u.data(this, "animating", !0), t = this.data.current, -1 === (o = -1 < e ? (a = t < --e ? 1 : -1, n = t < e ? -this.options.width : this.options.width, e) : (a = "next" === this.data.direction ? 1 : -1, n = "next" === this.data.direction ? -this.options.width : this.options.width, t + a)) && (o = this.data.total - 1), o === this.data.total && (o = 0), this._setActive(o), r = u(".slidesjs-control", c), -1 < e && r.children(":not(:eq(" + t + "))").css({
                display: "none",
                left: 0,
                zIndex: 0
            }), r.children(":eq(" + o + ")").css({
                display: "block",
                left: a * this.options.width,
                zIndex: 10
            }), this.options.callback.start(t + 1), this.data.vendorPrefix ? (a = this.data.vendorPrefix, s = a + "Transform", i = a + "TransitionDuration", r[0].style[s] = "translateX(" + n + "px)", r[0].style[i] = this.options.effect.slide.speed + "ms", r.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                return r[0].style[s] = "", r[0].style[i] = "", r.children(":eq(" + o + ")").css({
                    left: 0
                }), r.children(":eq(" + t + ")").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                }), u.data(l, "current", o), u.data(l, "animating", !1), r.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"), r.children(":not(:eq(" + o + "))").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                }), l.data.touch && l._setuptouch(), l.options.callback.complete(o + 1)
            })) : r.stop().animate({
                left: n
            }, this.options.effect.slide.speed, function() {
                return r.css({
                    left: 0
                }), r.children(":eq(" + o + ")").css({
                    left: 0
                }), r.children(":eq(" + t + ")").css({
                    display: "none",
                    left: 0,
                    zIndex: 0
                }, u.data(l, "current", o), u.data(l, "animating", !1), l.options.callback.complete(o + 1))
            })
        }, t.prototype._fade = function(e) {
            var t, n, i, o = this,
                r = u(this.element);
            if (this.data = u.data(this), !this.data.animating && e !== this.data.current + 1) return u.data(this, "animating", !0), t = this.data.current, -1 === (n = e ? (--e, e) : t + ("next" === this.data.direction ? 1 : -1)) && (n = this.data.total - 1), n === this.data.total && (n = 0), this._setActive(n), (i = u(".slidesjs-control", r)).children(":eq(" + n + ")").css({
                display: "none",
                left: 0,
                zIndex: 10
            }), this.options.callback.start(t + 1), this.options.effect.fade.crossfade ? (i.children(":eq(" + this.data.current + ")").stop().fadeOut(this.options.effect.fade.speed), i.children(":eq(" + n + ")").stop().fadeIn(this.options.effect.fade.speed, function() {
                return i.children(":eq(" + n + ")").css({
                    zIndex: 0
                }), u.data(o, "animating", !1), u.data(o, "current", n), o.options.callback.complete(n + 1)
            })) : i.children(":eq(" + t + ")").stop().fadeOut(this.options.effect.fade.speed, function() {
                return i.children(":eq(" + n + ")").stop().fadeIn(o.options.effect.fade.speed, function() {
                    return i.children(":eq(" + n + ")").css({
                        zIndex: 10
                    })
                }), u.data(o, "animating", !1), u.data(o, "current", n), o.options.callback.complete(n + 1)
            })
        }, t.prototype._getVendorPrefix = function() {
            var e, t, n = (o.body || o.documentElement).style,
                i = ["Moz", "Webkit", "Khtml", "O", "ms"];
            for (t = "transition".charAt(0).toUpperCase() + "transition".substr(1), e = 0; e < i.length;) {
                if ("string" == typeof n[i[e] + t]) return i[e];
                e++
            }
            return !1
        }, u.fn[n] = function(e) {
            return this.each(function() {
                if (!u.data(this, "plugin_" + n)) return u.data(this, "plugin_" + n, new t(this, e))
            })
        }
    }.call(void 0), jQuery.fn.extend({
        tab: function(e, t) {
            $(this).children().click(function() {
                $(this).addClass(t).siblings().removeClass(t), e.children().eq($(this).index()).addClass(t).siblings().removeClass(t)
            })
        },
        click_t: function(e) {
            $(this).click(function() {
                e.toggle()
            })
        },
        click_h: function(e, t) {
            $(this).click(function() {
                e.toggleClass("active"), "function" == typeof t && t()
            })
        },
        roll: function(e, t) {
            "undefined" == t && (t = 0);
            var n = $(this);
            $(window).scroll(function() {
                try {
                    $(document).scrollTop() >= n.offset().top - t && e()
                } catch (e) {
                    console.log(e)
                }
            })
        }
    }),
    function() {
        $(".toggle_nav").click_t($(".toggle_nav_box")), $(".toggle_nav").click_t($(".header_bg")), $(".toggle_nav").on("click", function() {
            $(this).toggleClass("active")
        }), $(".banner .format_box span").click_t($(".banner .format_box span ul"));
        for (var e = 0; e < $(".banner .format_box span ul li").length; e++) $(".banner .format_box span ul li").eq(e).click(function() {
            $(".banner .format_box span i").html($(this).html())
        });
        1180 < $(window).width() ? $(".header>.center>ul li.products").hover(function() {
            $(".product_main_box").addClass("active"), $(this).find("i").addClass("active"), $(".header_bg").show(), $(".toggle_nav").addClass("active"), $(this).find(".header_slider").addClass("active")
        }, function() {
            $(".product_main_box").removeClass("active"), $(this).find("i").removeClass("active"), $(".header_bg").hide(), $(".toggle_nav").removeClass("active"), $(".header_slider").removeClass("active")
        }) : ($(".header>.center>ul li").removeClass("products"), $(".header>.center>ul li").click(function() {
            $(this).toggleClass("active").siblings().removeClass("active"), $(".product_main_box").toggleClass("active"), $(this).find("i").toggleClass("active").parent().siblings("li").find("i").removeClass("active"), $(this).find(".header_slider").toggleClass("active").parent().siblings("li").find(".header_slider").removeClass("active")
        }), $(".header_slider .title,.header_slider .clearfix").removeClass("active"), $(".header .header_slider p").click(function(e) {
            e = window.event || e, window.event ? window.event.cancelBubble = !0 : e.stopPropagation(), $(this).toggleClass("active").siblings("p").removeClass("active"), $(this).parent(".slider_inner").siblings(".slider_inner").find("p").removeClass("active"), $(".header_slider .clearfix").eq($(this).index() / 2).toggleClass("active").siblings(".clearfix").removeClass("active")
        })), $(".header_bg").click(function() {
            $(this).hide(), $(".toggle_nav_box").hide(), $(".toggle_nav").removeClass("active")
        })
    }(),
    function() {
        var e = window.location.href; - 1 < e.indexOf("/resource/") || -1 < e.indexOf("/category/") || -1 < e.indexOf("/convert-mts/") || -1 < e.indexOf("/convert-ts/") || -1 < e.indexOf("/mov-converting/") || -1 < e.indexOf("/mp3-converting/") || -1 < e.indexOf("/mp4-converting/") || -1 < e.indexOf("/player/") || -1 < e.indexOf("/screen-recording/") || -1 < e.indexOf("/tips/") || -1 < e.indexOf("/video-editing/") || -1 < e.indexOf("/search/") ? $(".toggle_nav_box").children("li").eq(1).children("a").addClass("cuur") : -1 < e.indexOf("/support/") && $(".toggle_nav_box").children("li").eq(2).children("a").addClass("cuur")
    }(),
    function() {
        for (var e = 0; e < $(".footer-list").length; e++) $(".footer-list").eq(e).find(".title").click(function() {
            $(this).parent().toggleClass("active"), $(this).siblings().toggleClass("ul-active")
        })
    }();
for (var i = 0; i < $(".footer .center ul").length; i++) $(".footer .center ul").eq(i).find("li").eq(0).click(function() {
    $(this).parent().toggleClass("active")
});

function IsPC() {
    for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, i = 0; i < t.length; i++)
        if (0 < e.indexOf(t[i])) {
            n = !1;
            break
        } return n
}
var device_id = IsPC(),
    isMac = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform;
try {
    "mac" == system_confirm() ? isMac = !0 : "win" == system_confirm() && (isMac = !1), 1 == device_confirm() ? device_id = !0 : 0 == device_confirm() && (device_id = !1)
} catch (error) {}
isMac && 1 == device_id ? ($(".mac_btn_box").css({
        display: "flex"
    }), $(".mac_btn").css({
        display: "block"
    }), $(".mac_line").css({
        display: "inline-block"
    }), $(".free_sup_ver_mac").css({
        display: "block"
    }), $(".win_btn_box").css({
        display: "none"
    }), $(".win_btn").css({
        display: "none"
    }), $(".win_line").css({
        display: "none"
    }), $(".free_sup_ver_win").css({
        display: "none"
    })) : isMac || 1 != device_id ? 0 == device_id && ($(".pc_btn").css({
        display: "none"
    }), $(".mac_line").css({
        display: "none"
    })) : ($(".win_btn_box").css({
        display: "flex"
    }), $(".win_btn").css({
        display: "block"
    }), $(".win_line").css({
        display: "inline-block"
    }), $(".free_sup_ver_win").css({
        display: "block"
    }), $(".mac_btn_box").css({
        display: "none"
    }), $(".mac_btn").css({
        display: "none"
    }), $(".mac_line").css({
        display: "none"
    }), $(".free_sup_ver_mac").css({
        display: "none"
    })),
    function() {
        var e, t, n, i, o, r;
        900 <= $(this).width() ? (e = function() {
            3 <= o && (o = 0), $(".mobietrans_main div img").eq(o).css("filter", "blur(0)").css("z-index", 3).stop().animate({
                left: "30%",
                width: 480,
                top: "0%"
            }, 1e3);
            var e = o + 1;
            e >= $(".mobietrans_main div img").length && (e = 0), $(".mobietrans_main div img").eq(e).css("filter", "blur(.8px)").css("z-index", 2).stop().animate({
                left: "10%",
                width: 338,
                top: "25%"
            }, 1e3);
            e = o - 1;
            e < 0 && (e = $(".mobietrans_main div img").length - 1), $(".mobietrans_main div img").eq(e).css("filter", "blur(.8px)").css("z-index", 1).stop().animate({
                left: "62%",
                width: 338,
                top: "25%"
            }, 1e3), $(".mobietrans_main div p").eq(o).css("display", "block").siblings().css("display", "none"), $(".mobietrans_main div i").eq(o).css("background", "#2effff").siblings().css("background", "#9efbfb"), $(".mobietrans_main div i").eq(o).stop().animate({
                width: "45px"
            }, 200).siblings().stop().animate({
                width: "9px"
            }, 500)
        }, t = function() {
            r = setInterval(function() {
                o++, e()
            }, 4e3)
        }, o = 0, r = null, clearInterval(r), $(".mobietrans_main div i").click(function() {
            clearInterval(r), o = $(this).index(), e(), t()
        }), t()) : 500 <= $(this).width() ? (n = function() {
            3 <= o && (o = 0), $(".mobietrans_main div img").eq(o).css("filter", "blur(0)").css("z-index", 3).stop().animate({
                left: "15%",
                width: 480,
                top: "0%"
            }, 1e3);
            var e = o + 1;
            e >= $(".mobietrans_main div img").length && (e = 0), $(".mobietrans_main div img").eq(e).css("filter", "blur(.8px)").css("z-index", 2).animate({
                left: "-35%",
                width: 338,
                top: "25%"
            }, 1e3);
            e = o - 1;
            e < 0 && (e = $(".mobietrans_main div img").length - 1), $(".mobietrans_main div img").eq(e).css("filter", "blur(.8px)").css("z-index", 1).stop().animate({
                left: "85%",
                width: 338,
                top: "25%"
            }, 1e3), $(".mobietrans_main div p").eq(o).css("display", "block").siblings().css("display", "none"), $(".mobietrans_main div i").eq(o).css("background", "#2effff").siblings().css("background", "#9efbfb"), $(".mobietrans_main div i").eq(o).stop().animate({
                width: "45px"
            }, 200).siblings().stop().animate({
                width: "9px"
            }, 500)
        }, i = function() {
            clearInterval(r), r = setInterval(function() {
                o++, n()
            }, 4e3)
        }, o = 0, $(".mobietrans_main div i").click(function() {
            clearInterval(r), o = $(this).index(), n(), i()
        }), i()) : ($(".mobietrans_main div img").eq(0).addClass("active"), $(".mobietrans_main div i").click(function() {
            var e = $(this).index();
            $(".mobietrans_main div img").eq(e).addClass("active").siblings().removeClass("active"), $(".mobietrans_main div i").eq(e).css("background", "#2effff").siblings().css("background", "#9efbfb"), $(".mobietrans_main div i").eq(e).stop().animate({
                width: "45px"
            }, 200).siblings().stop().animate({
                width: "9px"
            }, 500)
        })), $(window).scroll(function() {
            700 < $(window).scrollTop() ? $(".fix-box").css("position", "fixed") : $(".fix-box").css("position", "static")
        }), $(".faq-item .answer").hide(), $(".faq-item .question").click(function() {
            $(this).parent().toggleClass("active").siblings().removeClass("active"), $(this).next().slideToggle().parent().siblings().find(".answer").slideUp()
        }), $(".footer .language>p").click(function() {
            console.log(1), $(this).parent().toggleClass("active")
        }), $(".footer .language .notranslate").attr("href", "https://www.free-videoconverter.net/"), $(".footer .language>p *").click(function() {
            $(this).parent().parent().toggleClass("active")
        }), $(".footer .language *").click(function(e) {
            e.stopPropagation()
        }), $(document).click(function() {
            $(".footer .language").removeClass("active")
        });
        var s = window.location.href.split("net")[1];
        if ("/" != s)
            for (var a = 0; a < $(".footer .language>div a").length; a++) - 1 < $(".footer .language>div a").eq(a).attr("href").indexOf(s) && $(".footer .language>p span").html($(".footer .language>div a").eq(a).text())
    }(), $(".m_content_head_box").height($(".m_content_head").height()), $(window).scroll(function() {
        try {
            1030 < $(window).width() && ($(document).scrollTop() >= $(".g_main").offset().top ? $(".g_main_left").addClass("active") : $(".g_main_left").removeClass("active"))
        } catch (e) {}
    });
try {
    var m_content_head_top = $(".m_content_head").offset().top;
    $(window).scroll(function() {
        var t, n;
        $(document).scrollTop() >= m_content_head_top ? ((500 <= $(window).width() ? t = function(e) {
            e = arguments[0];
            $(".m_content_products").eq(e).find("img").eq(0).show(), $(".m_content_products").eq(e).find("img").eq(1).show().animate({
                top: 44,
                left: 132
            }, 400, function() {
                $(this).next().show().animate({
                    top: 44,
                    left: 187
                }, 400, function() {
                    return $(this).next().show().animate({
                        top: 83,
                        left: 228
                    }, 400), 3 <= e ? (t = null, !1) : void setTimeout(function() {
                        t(e + 1)
                    }, 500)
                })
            })
        } : n = function(e) {
            e = arguments[0];
            $(".m_content_products").eq(e).find("img").eq(0).show(), $(".m_content_products").eq(e).find("img").eq(1).show().animate({
                top: 44,
                left: 102
            }, 400, function() {
                $(this).next().show().animate({
                    top: 44,
                    left: 157
                }, 400, function() {
                    return $(this).next().show().animate({
                        top: 83,
                        left: 198
                    }, 400), 3 <= e ? (n = null, !1) : void setTimeout(function() {
                        n(e + 1)
                    }, 500)
                })
            })
        })(0), $(".m_content_head").addClass("m_content_head_active").next(), $(window).width()) : ($(".m_content_head").removeClass("m_content_head_active"), $(".m_content_head>div>div").hide())
    })
} catch (e) {}

function system_confirm() {
    var e = navigator.userAgent;
    return -1 < e.indexOf("Win") ? "win" : -1 < e.indexOf("Mac") ? "mac" : void 0
}

function device_confirm() {
    for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !0, i = 0; i < t.length; i++)
        if (0 < e.indexOf(t[i])) {
            n = !1;
            break
        } return n
}
$(window).width() <= 850 && $(".iphone-eraser-nav>.container>span").click(function() {
    $(".iphone-eraser-nav>.container>span>i").toggleClass("active"), $(".iphone-eraser-nav>.container>ul").toggle(), $(".nav_bg").toggle()
}), $(".toggle_nav").click(function() {
    try {
        $(".login_box ul").is(":hidden") || $(".login_box ul").hide()
    } catch (e) {
        console.log(e)
    }
    $(".nav").is(":hidden") ? ($(".nav").show(), $(".nav_bg").show()) : ($(".nav").hide(), $(".nav_bg").hide()), $(".iphone-eraser-nav>.center>ul").hide(), $(".iphone-eraser-nav>.center>span>i").removeClass("active")
}), $("body").append('<div class="nav_bg"></div>'), $(".nav_bg").click(function() {
    $(this).hide(), $(".iphone-eraser-nav>.center>span>i").removeClass("active"), $(".iphone-eraser-nav>.center>ul").hide(), $(window).width() < 500 && ($(".nav").hide(), $(".login_box ul").hide())
}), $(".g_main_left>ul>li").click(function() {
    "active" == $(this).attr("class") ? $(this).removeClass("active").find("ol").animate({
        height: 0
    }) : ($("body,html").scrollTop($(".g_main.active").eq(0).offset().top - 50), $(this).addClass("active").siblings().removeClass("active"), $(this).find("ol").animate({
        height: $(this).find("ol").find("li").height() * $(this).find("ol").find("li").length
    }).parent().siblings().find("ol").animate({
        height: 0
    }))
}), $(".g_main_left>ul>li>ol>li").click(function(e) {
    var n;
    e.stopPropagation(), $(this).addClass("active").siblings().removeClass("active"), $(this).parent().parent().addClass("active").siblings().removeClass("active"), $(this).parent().parent().siblings().find("ol").find("li").removeClass("active"), e = $(this).parent().parent().index(), n = void 0, $(".subnav .container div b").each(function(e, t) {
        $(t).hasClass("active") && (n = 0 == e ? 1 : 0)
    }), $(".g_main").eq(n).find(".g_main_right>div").eq(e).css({
        display: "block"
    }).siblings().css({
        display: "none"
    })
}), $(".subnav div b").click(function() {
    $(this).addClass("active").siblings().removeClass("active"), (1 == $(this).index() ? $(".g_main").eq(0) : $(".g_main").eq(1)).addClass("active").siblings().removeClass("active")
}), $(".g_main_win>div:last-child div").eq(0).show().siblings().hide(), $(".g_main_win>div>ul>li").click(function() {
    $(".g_main_win>div:last-child div").eq($(this).index()).show().siblings().hide()
}), $(".g_main_mac>div:last-child div").eq(0).show().siblings().hide(), $(".g_main_mac>div>ul>li").click(function() {
    $(".g_main_mac>div:last-child div").eq($(this).index()).show().siblings().hide()
}), $(".left_part .top").click(function() {
    console.log(1), $(this).toggleClass("active"), $(this).siblings(".bottom").toggle()
}), $(window).scroll(function() {
    500 <= $(document).scrollTop() ? $(".gotop").show() : $(".gotop").hide()
}), $("body").append('<i class="gotop"></i>'), $(document).on("click", ".gotop", function() {
    $(window).scrollTop(0)
}), $(".see_price").click(function() {
    console.log(1), $(".vcu_buy_bg").css("display", "block"), $(".vcu_buy").css({
        display: "block",
        "overflow-y": "scroll"
    }), $("body").css({
        overflow: "hidden"
    })
}), $(".vcu_buy .buy_close").click(function() {
    $(".vcu_buy_bg").css("display", "none"), $(".vcu_buy").css("display", "none"), $("body").removeAttr("style")
}), $(function() {
    ($(window).width() <= 1200 ? $(".change-box .comment-block") : $(".change-box .comment-page")).width($(window).width());
    var t = $(".label-box").outerHeight();
    $(".label-box").addClass("inactive"), $(".label-box-btn").click(function() {
        var e = $(".label-box").attr("class");
        /inactive/.test(e) ? /inactive/.test(e) && ($(".label-box").css("height", t + "px").removeClass("inactive"), $(".label-box-btn").children("img").addClass("active")) : ($(".label-box").attr("style", "").addClass("inactive"), $(".label-box-btn").children("img").removeClass("active"))
    }), $(".img-box .list-box").css("width", ($(".img-box .list-box img").outerWidth() + 8) * $(".img-box .list-box img").length + "px");
    var e = 0;
    $(".comment .next").click(function() {
        $(window).width() <= 1200 ? (e < $(".change-box .comment-block").length - 1 ? e++ : e = 0, $(".change-box").css("left", "-" + $(".change-box .comment-block").outerWidth() * e + "px")) : (e < $(".change-box .comment-page").length - 1 ? e++ : e = 0, $(".change-box").css("left", "-" + $(".change-box .comment-page").outerWidth() * e + "px"))
    }), $(".comment .prev").click(function() {
        $(window).width() <= 1200 ? (0 < e ? e-- : e = $(".change-box .comment-block").length - 1, $(".change-box").css("left", "-" + $(".change-box .comment-block").outerWidth() * e + "px")) : (0 < e ? e-- : e = $(".change-box .comment-page").length - 1, $(".change-box").css("left", "-" + $(".change-box .comment-page").outerWidth() * e + "px"))
    }), $(".how-to-use .prev").click(function() {
        $(".how-to-use .img-box>img").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img") - 1).addClass("active").siblings("img").removeClass("active"), $(".how-to-use .img-list img").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img")).addClass("now-page").siblings("img").removeClass("now-page"), $(".how-to-use .step-text").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img")).addClass("step-active").siblings(".step-text").removeClass("step-active"), $(".img-list").scrollLeft($(".now-page").scrollLeft())
    }), $(".how-to-use .next").click(function() {
        $(".how-to-use .img-box .active").index(".how-to-use .img-box>img") + 1 > $(".how-to-use .list-box").children().length - 1 ? ($(".how-to-use .img-box>img").eq(0).addClass("active").siblings("img").removeClass("active"), $(".how-to-use .img-list img").eq(0).addClass("now-page").siblings("img").removeClass("now-page"), $(".how-to-use .step-text").eq(0).addClass("step-active").siblings(".step-text").removeClass("step-active")) : ($(".how-to-use .img-box>img").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img") + 1).addClass("active").siblings("img").removeClass("active"), $(".how-to-use .img-list img").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img")).addClass("now-page").siblings("img").removeClass("now-page"), $(".how-to-use .step-text").eq($(".how-to-use .img-box .active").index(".how-to-use .img-box>img")).addClass("step-active").siblings(".step-text").removeClass("step-active")), $(".img-list").scrollLeft($(".now-page").scrollLeft())
    }), $(".how-to-use .img-list img").click(function() {
        $(".how-to-use .img-box>img").eq($(this).index(".how-to-use .img-list img")).addClass("active").siblings("img").removeClass("active"), $(".how-to-use .img-list img").eq($(this).index(".how-to-use .img-list img")).addClass("now-page").siblings("img").removeClass("now-page"), $(".how-to-use .step-text").eq($(this).index(".how-to-use .img-list img")).addClass("step-active").siblings(".step-text").removeClass("step-active")
    })
}), "mac" == system_confirm() && device_confirm() ? ($(".banner .free_sup_ver_win").css("display", "none"), $(".banner .free_sup_ver_mac").css("display", "block"), $(".free_sup_ver_win").css("display", "none"), $(".free_sup_ver_mac").css("display", "block"), $("#banner.video_converter .free_sup_ver_win").css("display", "none"), $("#banner.video_converter .free_sup_ver_mac").css("display", "inline-block")) : "win" == system_confirm() && device_confirm() ? ($(".banner .free_sup_ver_win").css("display", "block"), $(".banner .free_sup_ver_mac").css("display", "none"), $(".free_sup_ver_win").css("display", "block"), $(".free_sup_ver_mac").css("display", "none"), $("#banner.video_converter .free_sup_ver_win").css("display", "inline-block"), $("#banner.video_converter .free_sup_ver_mac").css("display", "none")) : ($(".free_sup_ver_mac").css("display", "none"), $("#banner.video_converter .free_sup_ver_mac").css("display", "none"), $("#banner.video_converter .free_sup_ver_win").css("display", "inline-block")), "trigger_start" == window.location.href.split("?").pop() && (console.log(1), setTimeout(function() {
    $(".free_btn").trigger("click")
}, 1e3));
//# sourceMappingURL=maps/image-upscaler.js.map