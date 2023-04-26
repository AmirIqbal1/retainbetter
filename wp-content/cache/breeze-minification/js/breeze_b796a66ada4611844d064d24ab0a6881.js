window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/retainbetter.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.2"
    }
}; /*!This file is auto-generated*/
! function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        p.clearRect(0, 0, i.width, i.height), p.fillText(e, 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height), p.fillText(t, 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, r = 0; r < o.length; r++) t.supports[o[r]] = function(e) {
        if (p && p.fillText) switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case "flag":
                return s("\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !s("\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !s("\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
            case "emoji":
                return !s("\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (e = t.source || {}).concatemoji ? c(e.concatemoji) : e.wpemoji && e.twemoji && (c(e.twemoji), c(e.wpemoji)))
}(window, document, window._wpemojiSettings);
var breeze_prefetch = {
    "local_url": "https:\/\/retainbetter.com",
    "ignore_remote_prefetch": "1",
    "ignore_list": ["\/wp-admin\/"]
};
/*! Created by Cloudways
On 21-02-2023 */
var timer, ready = e => {
    "loading" != document.readyState ? e() : document.addEventListener("DOMContentLoaded", e)
};

function search_for_banned_links(e, t) {
    var r = !1;
    if (e.length)
        for (i = 0; i < e.length; i++) - 1 === t.indexOf(e[i]) && -1 === e[i].indexOf(t) || (r = !0);
    return r
}
ready(() => {
    var i = [];
    addEventListener("mouseover", function(e) {
        var n;
        e.target instanceof HTMLAnchorElement && (n = e.target.attributes.href.value, timer = setTimeout(function() {
            var e, t, r;
            "#" !== n && (e = n.replace(breeze_prefetch.local_url, ""), r = new URL(breeze_prefetch.local_url).host, t = new URL(n).host, "" !== n.trim()) && !1 === i.includes(n) && r === t && !1 === search_for_banned_links(breeze_prefetch.ignore_list, e) && (i.push(n.trim()), (r = document.createElement("link")).href = n, r.rel = "prefetch", document.head.appendChild(r))
        }, 150))
    }), addEventListener("mouseout", function(e) {
        clearTimeout(timer)
    })
}); /*!jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.4",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssHas = ce(function() {
                    try {
                        return C.querySelector(":has(*,:jqfake)"), !1
                    } catch (e) {
                        return !0
                    }
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), d.cssHas || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= y) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
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
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function() {
                        return [0]
                    }),
                    last: ye(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ye(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[S] && (y = Ce(y)), v && !v[S] && (v = Ce(v, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, y, v, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function $() {
        E.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        S.event.special[t] = {
            setup: function() {
                return Se(this, t, Ce), !1
            },
            trigger: function() {
                return Se(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ie = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t),
            u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = E.createElement("div").style,
        Xe = {};

    function Ve(e) {
        var t = S.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Re.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Me(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0
                    }
                    d[r] = y && y[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return B(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return B(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), v.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function() {
                if (s)
                    for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : yt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, v.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t),
                v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = y.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (y.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
jQuery.noConflict(); /*!jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+n[a] > +o[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.0";
        var t = Object.create(null),
            o = (s.migrateDisablePatches = function() {
                for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
            }, s.migrateEnablePatches = function() {
                for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
            }, s.migrateIsPatchEnabled = function(e) {
                return !t[e]
            }, n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)), {});

        function i(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i(n, o), r
                },
                set: function(e) {
                    i(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && i(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function u(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            a(e, t, r, n, o)
        }

        function d(e, t, r, n) {
            a(e, t, r, n)
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
        var c, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (c in d(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, d(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
        u(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), u(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && u(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (u(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (u(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), u(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), u(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), u(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, d(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function Q(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        d(s.fn, "removeAttr", function(e) {
            var r = this;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), d(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var x, A = !1,
            R = /^[a-z]/,
            T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return A = !0, e = r.apply(this, arguments), A = !1, e
            })
        }), d(s, "swap", function(e, t, r, n) {
            var o, a = {};
            for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"), t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = r.apply(e, n || []), t) e.style[o] = a[o];
            return r
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return i("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, {
            get: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), x = s.fn.css, d(s.fn, "css", function(e, t) {
            var r, n = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(n, e, t)
            }), this) : ("number" == typeof t && (t = Q(e), r = t, R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), x.apply(this, arguments))
        }, "css-number");

        function C(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var S, N, P, k, H, E, M, q = s.data,
            D = (d(s, "data", function(e, t, r) {
                var n, o, a;
                if (t && "object" == typeof t && 2 === arguments.length) {
                    for (a in n = s.hasData(e) && q.call(this, e), o = {}, t) a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                    return q.call(this, e, o), t
                }
                return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : q.apply(this, arguments)
            }, "data-camelCase"), s.fx && (P = s.Tween.prototype.run, k = function(e) {
                return e
            }, d(s.Tween.prototype, "run", function() {
                1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = k), P.apply(this, arguments)
            }, "easing-one-arg"), S = s.fx.interval, N = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n.document.hidden || i("fx-interval", N), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
                },
                set: function(e) {
                    i("fx-interval", N), S = e
                }
            })), s.fn.load),
            F = s.event.add,
            W = s.event.fix,
            O = (s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), d(s.event, "fix", function(e) {
                var t = e.type,
                    r = this.fixHooks[t],
                    n = s.event.props;
                if (n.length) {
                    i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
                    while (n.length) s.event.addProp(n.pop())
                }
                if (r && !r._migrated_ && (r._migrated_ = !0, i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t), (n = r.props) && n.length))
                    while (n.length) s.event.addProp(n.pop());
                return t = W.call(this, e), r && r.filter ? r.filter(t, e) : t
            }, "event-old-patch"), d(s.event, "add", function(e, t) {
                return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), F.apply(this, arguments)
            }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
                d(s.fn, t, function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
                }, "shorthand-removed-v3")
            }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
                u(s.fn, r, function(e, t) {
                    return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
                }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
            }), s(function() {
                s(n.document).triggerHandler("ready")
            }), s.event.special.ready = {
                setup: function() {
                    this === n.document && i("ready-event", "'ready' event is deprecated")
                }
            }, u(s.fn, "bind", function(e, t, r) {
                return this.on(e, null, t, r)
            }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), u(s.fn, "unbind", function(e, t) {
                return this.off(e, null, t)
            }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), u(s.fn, "delegate", function(e, t, r, n) {
                return this.on(t, e, r, n)
            }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), u(s.fn, "undelegate", function(e, t, r) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), u(s.fn, "hover", function(e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e)
            }, "pre-on-methods", "jQuery.fn.hover() is deprecated"), /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
            _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
                s.migrateEnablePatches("self-closed-tags")
            }, d(s, "htmlPrefilter", function(e) {
                var t, r;
                return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(O, "<$1></$2>")
            }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags"), s.fn.offset);
        return d(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (H = s.param, d(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), H.call(this, e, t)
        }, "param-ajax-traditional")), u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (E = s.Deferred, M = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], d(s, "Deferred", function(e) {
            var a = E(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(M, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = E.exceptionHook), s
    });;
var astra = {
    "break_point": "921",
    "isRtl": "",
    "is_scroll_to_id": "1",
    "is_scroll_to_top": "",
    "is_header_footer_builder_active": "1"
};
var astraGetParents = function(e, t) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length; 0 <= --a && t.item(a) !== this;);
            return -1 < a
        });
        for (var a = []; e && e !== document; e = e.parentNode)(!t || e.matches(t)) && a.push(e);
        return a
    },
    getParents = function(e, t) {
        console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."), astraGetParents(e, t)
    },
    astraToggleClass = function(e, t) {
        e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
    },
    toggleClass = function(e, t) {
        console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."), astraToggleClass(e, t)
    },
    astraTriggerEvent = (! function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var a = document.createEvent("CustomEvent");
            return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(), function(e, t) {
        var a = new CustomEvent(t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
        e.dispatchEvent(a)
    });
astraSmoothScroll = function(e, t) {
        e.preventDefault(), window.scrollTo({
            top: t,
            left: 0,
            behavior: "smooth"
        })
    }, astScrollToTopHandler = function(e, t) {
        var a = getComputedStyle(t).content,
            n = t.dataset.onDevices,
            a = a.replace(/[^0-9]/g, "");
        "both" == n || "desktop" == n && "769" == a || "mobile" == n && "" == a ? (n = window.pageYOffset || document.body.scrollTop, e && e.length ? n > e.offsetHeight + 100 ? t.style.display = "block" : t.style.display = "none" : 300 < window.pageYOffset ? t.style.display = "block" : t.style.display = "none") : t.style.display = "none"
    },
    function() {
        var r = document.querySelectorAll("#masthead .main-header-menu-toggle"),
            c = document.getElementById("masthead"),
            i = {},
            d = "",
            u = document.body,
            m = "";

        function e(e) {
            d = e.detail.type;
            var t = document.querySelectorAll(".menu-toggle");
            if ("dropdown" === d && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g("updateHeader")), "off-canvas" === d)
                for (var a = 0; a < t.length; a++) void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
            n(d)
        }

        function g(e) {
            m = c.querySelector("#ast-mobile-header");
            var t = "";
            if (null == m || "dropdown" !== m.dataset.type || "updateHeader" === e) {
                t = (void 0 !== e && "updateHeader" !== e ? e.closest(".ast-mobile-popup-inner") : document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");
                for (var a = 0; a < t.length; a++) {
                    t[a].classList.remove("ast-submenu-expanded");
                    for (var n = t[a].querySelectorAll(".sub-menu"), s = 0; s < n.length; s++) n[s].style.display = "none"
                }
                var o = document.querySelectorAll(".menu-toggle");
                document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), document.documentElement.classList.remove("ast-off-canvas-active");
                for (var r = 0; r < o.length; r++) o[r].classList.remove("toggled"), o[r].style.display = "flex"
            }
        }

        function n(e) {
            var t = document.querySelectorAll("#ast-mobile-header .menu-toggle"),
                a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
            if (void 0 === e && null !== c)
                if (m = c.querySelector("#ast-mobile-header")) e = m.dataset.type;
                else {
                    var n = c.querySelector("#ast-desktop-header");
                    if (!n) return;
                    e = n.dataset.toggleType
                }
            if ("off-canvas" === e) {
                var n = document.getElementById("menu-toggle-close"),
                    s = document.querySelector(".ast-mobile-popup-inner");
                if (null == s) return;
                popupLinks = s.getElementsByTagName("a");
                for (var o = 0; o < t.length; o++) t[o].removeEventListener("click", astraNavMenuToggle, !1), t[o].addEventListener("click", popupTriggerClick, !1), t[o].trigger_type = "mobile";
                for (o = 0; o < a.length; o++) a[o].removeEventListener("click", astraNavMenuToggle, !1), a[o].addEventListener("click", popupTriggerClick, !1), a[o].trigger_type = "desktop";
                n.addEventListener("click", function(e) {
                    document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g(this)
                }), document.addEventListener("keyup", function(e) {
                    27 === e.keyCode && (e.preventDefault(), document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g())
                }), document.addEventListener("click", function(e) {
                    e.target === document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay") && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g())
                });
                for (let e = 0, t = popupLinks.length; e < t; e++) null !== popupLinks[e].getAttribute("href") && (popupLinks[e].getAttribute("href").startsWith("#") || -1 !== popupLinks[e].getAttribute("href").search("#")) && (!popupLinks[e].parentElement.classList.contains("menu-item-has-children") || popupLinks[e].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (popupLinks[e].addEventListener("click", p, !0), popupLinks[e].headerType = "off-canvas");
                AstraToggleSetup()
            } else if ("dropdown" === e) {
                var r = document.querySelectorAll(".ast-mobile-header-content") || !1,
                    s = document.querySelector(".ast-desktop-header-content") || !1;
                if (0 < r.length)
                    for (let e = 0; e < r.length; e++) {
                        var l = r[e].getElementsByTagName("a");
                        for (link = 0, len = l.length; link < len; link++) null !== l[link].getAttribute("href") && (l[link].getAttribute("href").startsWith("#") || -1 !== l[link].getAttribute("href").search("#")) && (!l[link].parentElement.classList.contains("menu-item-has-children") || l[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (l[link].addEventListener("click", p, !0), l[link].headerType = "dropdown")
                    }
                if (s) {
                    var i = s.getElementsByTagName("a");
                    for (link = 0, len = i.length; link < len; link++) i[link].addEventListener("click", p, !0), i[link].headerType = "dropdown"
                }
                for (o = 0; o < t.length; o++) t[o].removeEventListener("click", popupTriggerClick, !1), t[o].addEventListener("click", astraNavMenuToggle, !1), t[o].trigger_type = "mobile";
                for (o = 0; o < a.length; o++) a[o].removeEventListener("click", popupTriggerClick, !1), a[o].addEventListener("click", astraNavMenuToggle, !1), a[o].trigger_type = "desktop";
                AstraToggleSetup()
            }
            v()
        }

        function p(e) {
            switch (e.currentTarget.headerType) {
                case "dropdown":
                    for (var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0; a < t.length; a++) t[a].click();
                    break;
                case "off-canvas":
                    document.getElementById("menu-toggle-close").click()
            }
        }
        "" !== (m = null != c ? c.querySelector("#ast-mobile-header") : m) && null !== m && (d = m.dataset.type), document.addEventListener("astMobileHeaderTypeChange", e, !1), popupTriggerClick = function(e) {
            var e = e.currentTarget.trigger_type,
                t = document.getElementById("ast-mobile-popup"),
                a = document.getElementById("menu-toggle-close");
            a && a.focus(), u.classList.contains("ast-popup-nav-open") || u.classList.add("ast-popup-nav-open"), u.classList.contains("ast-main-header-nav-open") || "mobile" === e || u.classList.add("ast-main-header-nav-open"), document.documentElement.classList.contains("ast-off-canvas-active") || document.documentElement.classList.add("ast-off-canvas-active"), "desktop" === e && (t.querySelector(".ast-mobile-popup-content").style.display = "none", t.querySelector(".ast-desktop-popup-content").style.display = "block"), "mobile" === e && (t.querySelector(".ast-desktop-popup-content").style.display = "none", t.querySelector(".ast-mobile-popup-content").style.display = "block"), this.style.display = "none", t.classList.add("active", "show")
        }, window.addEventListener("load", function() {
            n()
        }), document.addEventListener("astLayoutWidthChanged", function() {
            n()
        }), document.addEventListener("astPartialContentRendered", function() {
            r = document.querySelectorAll(".main-header-menu-toggle"), u.classList.remove("ast-main-header-nav-open"), document.addEventListener("astMobileHeaderTypeChange", e, !1), n(), v()
        });
        var s = null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth;
        window.addEventListener("resize", function() {
            var e, t, a, n;
            "INPUT" !== document.activeElement.tagName && (e = document.getElementById("menu-toggle-close"), t = document.querySelector(".menu-toggle.toggled"), a = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"), n = document.querySelector(".elementor-editor-active"), a && (a.style.display = "none"), (null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth) !== s && (t && null === n && t.click(), document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), e) && null == n && e.click(), h(), AstraToggleSetup())
        }), document.addEventListener("DOMContentLoaded", function() {
            if (AstraToggleSetup(), null !== (e = u.classList.contains("ast-header-break-point") ? document.getElementById("ast-mobile-header") : document.getElementById("ast-desktop-header"))) {
                var e, t = e.querySelector(".navigation-accessibility");
                if (t && e) {
                    var a = e.getElementsByTagName("button")[0];
                    if (void 0 === a) {
                        if (!0 === (a = e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon")) return;
                        if (void 0 === a) return
                    }
                    var n = t.getElementsByTagName("ul")[0];
                    if (void 0 === n) a.style.display = "none";
                    else {
                        if (-1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"), "off-canvas" === d && (document.getElementById("menu-toggle-close").onclick = function() {
                                -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                            }), a.onclick = function() {
                                -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                            }, !astra.is_header_footer_builder_active) {
                            for (var s = n.getElementsByTagName("a"), o = n.getElementsByTagName("ul"), r = 0, l = o.length; r < l; r++) o[r].parentNode.setAttribute("aria-haspopup", "true");
                            for (r = 0, l = s.length; r < l; r++) s[r].addEventListener("focus", k, !0), s[r].addEventListener("blur", k, !0), s[r].addEventListener("click", L, !0)
                        }
                        astra.is_header_footer_builder_active && ! function() {
                            const t = document.querySelectorAll("nav.site-navigation .menu-item-has-children > a .ast-header-navigation-arrow"),
                                a = document.querySelectorAll("nav.site-navigation .sub-menu"),
                                n = document.querySelectorAll("nav.site-navigation .menu-item-has-children"),
                                s = document.querySelectorAll(".astra-full-megamenu-wrapper");
                            t && (t.forEach(e => {
                                e.addEventListener("keydown", function(a) {
                                    "Enter" === a.key && (a.target.closest("li").querySelector(".sub-menu").classList.contains("astra-megamenu") ? setTimeout(() => {
                                        var e = a.target.closest("li").querySelector(".sub-menu"),
                                            t = a.target.closest("li").querySelector(".astra-full-megamenu-wrapper");
                                        e && e.classList.toggle("astra-megamenu-focus"), t && t.classList.toggle("astra-megamenu-wrapper-focus"), a.target.closest("li").classList.toggle("ast-menu-hover"), "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true")
                                    }, 10) : setTimeout(() => {
                                        a.target.closest("li").querySelector(".sub-menu").classList.toggle("toggled-on"), a.target.closest("li").classList.toggle("ast-menu-hover"), "false" !== a.target.getAttribute("aria-expanded") && a.target.getAttribute("aria-expanded") ? a.target.setAttribute("aria-expanded", "false") : a.target.setAttribute("aria-expanded", "true")
                                    }, 10))
                                })
                            }), (a || n) && document.addEventListener("click", function(e) {
                                b(a, t, n, s)
                            }, !1), a || n) && document.addEventListener("keydown", function(e) {
                                "Escape" === e.key && b(a, t, n, s)
                            }, !1);
                            var e = document.querySelectorAll("nav.site-navigation .ast-nav-menu > .menu-item-has-children > a .ast-header-navigation-arrow");
                            e && e.forEach(e => {
                                e.addEventListener("keydown", function(e) {
                                    e.target.closest("li").classList.contains("ast-menu-hover") || "Enter" !== e.key || b(a, t, n, s)
                                }, !1)
                            })
                        }()
                    }
                }
            }
        });
        for (var t, a, o, l, h = function() {
                var e = u.style.overflow,
                    t = (u.style.overflow = "hidden", document.documentElement.clientWidth);
                if (u.style.overflow = e, astra.break_point < t || 0 === t) {
                    if (0 < r.length)
                        for (var a = 0; a < r.length; a++) null !== r[a] && r[a].classList.remove("toggled");
                    u.classList.remove("ast-header-break-point"), u.classList.add("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-enabled")
                } else u.classList.add("ast-header-break-point"), u.classList.remove("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-disabled")
            }, v = function() {
                var e = document.querySelectorAll(".ast-account-action-login");
                if (void 0 !== e) {
                    var a = document.querySelectorAll("#ast-hb-login-close"),
                        n = document.querySelectorAll("#ast-hb-account-login-wrap");
                    if (0 < a.length)
                        for (let t = 0; t < e.length; t++) e[t].onclick = function(e) {
                            e.preventDefault(), e.stopPropagation(), n[t].classList.contains("show") || n[t].classList.add("show")
                        }, a[t].onclick = function(e) {
                            e.preventDefault(), n[t].classList.remove("show")
                        }
                }
            }, f = (h(), AstraToggleSubMenu = function(e) {
                e.preventDefault(), "false" !== e.target.getAttribute("aria-expanded") && e.target.getAttribute("aria-expanded") ? e.target.setAttribute("aria-expanded", "false") : e.target.setAttribute("aria-expanded", "true");
                for (var t = this.parentNode, a = (t.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && (this.classList.contains("ast-menu-toggle") || "" !== (e = t.querySelector("a").getAttribute("href")) && "#" !== e && (window.location = e)), t.querySelectorAll(".menu-item-has-children")), n = 0; n < a.length; n++) {
                    a[n].classList.remove("ast-submenu-expanded");
                    var s = a[n].querySelector(".sub-menu, .children");
                    null !== s && (s.style.display = "none")
                }
                for (var o = t.parentNode.querySelectorAll(".menu-item-has-children"), n = 0; n < o.length; n++)
                    if (o[n] != t) {
                        o[n].classList.remove("ast-submenu-expanded");
                        for (var r = o[n].querySelectorAll(".sub-menu"), l = 0; l < r.length; l++) r[l].style.display = "none"
                    }
                t.classList.contains("menu-item-has-children") && (astraToggleClass(t, "ast-submenu-expanded"), t.classList.contains("ast-submenu-expanded") ? t.querySelector(".sub-menu").style.display = "block" : t.querySelector(".sub-menu").style.display = "none")
            }, AstraToggleSetup = function() {
                if ("undefined" != typeof astraAddon && "function" == typeof astraToggleSetupPro) astraToggleSetupPro(d, u, i);
                else {
                    var e, t, a, n = !1;
                    if (0 < (e = "off-canvas" === d || "full-width" === d ? (t = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length) : (t = document.querySelectorAll("#ast-mobile-header"), (n = !(0 < (e = (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : e)) || n)
                        for (var s = 0; s < e; s++)
                            if (n || (a[s].setAttribute("data-index", s), i[s]) || (i[s] = a[s], a[s].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== t[s])
                                for (var o, r = 0; r < t.length; r++)
                                    if (0 < (o = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? t[r].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : t[r].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                                        for (var l = 0; l < o.length; l++) o[l].addEventListener("click", AstraToggleSubMenu, !1)
                }
            }, astraNavMenuToggle = function(e) {
                if ("undefined" != typeof astraAddon) astraNavMenuTogglePro(e, u, d, this);
                else {
                    e.preventDefault();
                    var e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),
                        t = (r = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0");
                    if (null !== this.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), r = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), t = "0"), void 0 === e[t]) return !1;
                    for (var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0; n < a.length; n++) {
                        a[n].classList.remove("ast-submenu-expanded");
                        for (var s = a[n].querySelectorAll(".sub-menu"), o = 0; o < s.length; o++) s[o].style.display = "none"
                    } - 1 !== (this.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[t], "toggle-on"), astraToggleClass(r[t], "toggled"), e[t].classList.contains("toggle-on") ? (e[t].style.display = "block", u.classList.add("ast-main-header-nav-open")) : (e[t].style.display = "", u.classList.remove("ast-main-header-nav-open")))
                }
            }, u.addEventListener("astra-header-responsive-enabled", function() {
                var e = document.querySelectorAll(".main-header-bar-navigation");
                if (0 < e.length)
                    for (var t = 0; t < e.length; t++) {
                        null != e[t] && (e[t].classList.remove("toggle-on"), e[t].style.display = "");
                        for (var a = e[t].getElementsByClassName("sub-menu"), n = 0; n < a.length; n++) a[n].style.display = "";
                        for (var s = e[t].getElementsByClassName("children"), o = 0; o < s.length; o++) s[o].style.display = "";
                        for (var r = e[t].getElementsByClassName("ast-search-menu-icon"), l = 0; l < r.length; l++) r[l].classList.remove("ast-dropdown-active"), r[l].style.display = ""
                    }
            }, !1), E = navigator.userAgent, a = E.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? t = /\brv[ :]+(\d+)/g.exec(E) || [] : "Chrome" === a[1] && null != (t = E.match(/\bOPR|Edge\/(\d+)/)) || (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = E.match(/version\/(\d+)/i)) && a.splice(1, 1, t[1]), "Safari" === a[0] && a[1] < 11 && document.body.classList.add("ast-safari-browser-less-than-11")), document.getElementsByClassName("astra-search-icon")), y = 0; y < f.length; y++) f[y].onclick = function(e) {
            var t;
            this.classList.contains("slide-search") && (e.preventDefault(), (t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active") ? ("" !== (t.querySelector(".search-field").value || "") && t.querySelector(".search-form").submit(), t.classList.remove("ast-dropdown-active")) : (t.classList.add("ast-dropdown-active"), t.querySelector(".search-field").setAttribute("autocomplete", "off"), setTimeout(function() {
                t.querySelector(".search-field").focus()
            }, 200)))
        };

        function b(e, t, a, n) {
            e && e.forEach(e => {
                e.classList.remove("astra-megamenu-focus"), e.classList.remove("toggled-on")
            }), a && a.forEach(e => {
                e.classList.remove("ast-menu-hover")
            }), n && n.forEach(e => {
                e.classList.remove("astra-megamenu-wrapper-focus")
            }), t && t.forEach(e => {
                e.setAttribute("aria-expanded", "false")
            })
        }

        function L() {
            var e = this || "";
            if (e && !e.classList.contains("astra-search-icon") && null === e.closest(".ast-builder-menu") && -1 !== new String(e).indexOf("#")) {
                var t = e.parentNode;
                if (u.classList.contains("ast-header-break-point")) document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && t.classList.contains("menu-item-has-children") || (document.querySelector(".main-header-menu-toggle").classList.remove("toggled"), (t = document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"), t.style.display = "none", astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked"));
                else
                    for (; - 1 === e.className.indexOf("nav-menu");) "li" === e.tagName.toLowerCase() && -1 !== e.className.indexOf("focus") && (e.className = e.className.replace(" focus", "")), e = e.parentElement
            }
        }

        function k() {
            for (var e = this; - 1 === e.className.indexOf("navigation-accessibility");) "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"), e = e.parentElement
        }
        if (u.onclick = function(e) {
                if (void 0 !== e.target.classList && !e.target.classList.contains("ast-search-menu-icon") && 0 === astraGetParents(e.target, ".ast-search-menu-icon").length && 0 === astraGetParents(e.target, ".ast-search-icon").length)
                    for (var t = document.getElementsByClassName("ast-search-menu-icon"), a = 0; a < t.length; a++) t[a].classList.remove("ast-dropdown-active")
            }, astra.is_header_footer_builder_active || "querySelector" in document && "addEventListener" in window && (u.addEventListener("mousedown", function() {
                u.classList.add("ast-mouse-clicked")
            }), u.addEventListener("keydown", function() {
                u.classList.remove("ast-mouse-clicked")
            })), astra.is_scroll_to_id) {
            var E = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');
            if (E)
                for (const link of E) "" !== link.hash && link.addEventListener("click", S);

            function S(e) {
                let t = 0;
                var a = document.querySelector(".site-header");
                a && ((a = a.querySelectorAll("div[data-stick-support]")) && a.forEach(e => {
                    t += e.clientHeight
                }), a = this.hash) && (a = document.querySelector(a)) && (a = a.offsetTop - t) && astraSmoothScroll(e, a)
            }
        }
        astra.is_scroll_to_top && (o = document.querySelector("#page header"), l = document.getElementById("ast-scroll-top"), astScrollToTopHandler(o, l), window.addEventListener("scroll", function() {
            astScrollToTopHandler(o, l)
        }), l.onclick = function(e) {
            astraSmoothScroll(e, 0)
        }, l.addEventListener("keydown", function(e) {
            "Enter" === e.key && astraSmoothScroll(e, 0)
        }))
    }();

function uagb_carousel_height(e) {
    e = document.querySelector("#wpwrap .uagb-block-" + e + " .is-carousel");
    e && window.UAGBTestimonialCarousel._setHeight(e)
}

function uagb_carousel_unset_height(e) {
    e = document.querySelector("#wpwrap .uagb-slick-carousel.uagb-block-" + e);
    e && window.UAGBTestimonialCarousel._unSetHeight(e)
}
window.UAGBTestimonialCarousel = {
    _setHeight(e) {
        if (0 < e.length) {
            const o = e[0].querySelectorAll(".slick-slide"),
                r = e[0].querySelectorAll(".slick-slide.slick-active");
            let l = -1,
                s = -1,
                c = -1,
                i = (Object.keys(r).forEach(e => {
                    var t = r[e].offsetHeight,
                        e = r[e].querySelector(".uagb-testimonial__wrap").offsetHeight;
                    l < e && (l = e, c = l + 15), s < t && (s = t)
                }), Object.keys(r).forEach(e => {
                    const t = r[e].querySelector(".uagb-testimonial__wrap");
                    t.style.height = l + "px"
                }), e[0].querySelector(".slick-list"));
            i.style.height = c + "px", l = -1, s = -1, Object.keys(o).forEach(e => {
                const t = o[e];
                if (t.classList.contains("slick-active")) return !0;
                e = (i = t.querySelector(".uagb-testimonial__wrap")).offsetHeight;
                i.style.height = e + "px"
            })
        }
    },
    _unSetHeight(e) {
        if (0 < e.length) {
            const s = e[0].querySelectorAll(".slick-slide"),
                l = e[0].querySelectorAll(".slick-slide.slick-active");
            Object.keys(l).forEach(e => {
                const t = l[e].querySelector(".uagb-tm__content");
                t.style.height = "auto"
            }), Object.keys(l).forEach(e => {
                const t = s[e];
                if (t.classList.contains("slick-active")) return !0;
                const l = t.querySelector(".uagb-tm__content");
                l.style.height = "auto"
            })
        }
    }
};
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(global, factory) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", factory) : "object" == typeof module && module.exports ? module.exports = factory() : global.EvEmitter = factory()
}(this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    return proto.on = function(eventName, listener) {
        if (eventName && listener) {
            var events = this._events = this._events || {},
                listeners = events[eventName] = events[eventName] || [];
            return listeners.indexOf(listener) == -1 && listeners.push(listener), this
        }
    }, proto.once = function(eventName, listener) {
        if (eventName && listener) {
            this.on(eventName, listener);
            var onceEvents = this._onceEvents = this._onceEvents || {},
                onceListeners = onceEvents[eventName] = onceEvents[eventName] || [];
            return onceListeners[listener] = !0, this
        }
    }, proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (listeners && listeners.length) {
            var index = listeners.indexOf(listener);
            return index != -1 && listeners.splice(index, 1), this
        }
    }, proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (listeners && listeners.length) {
            var i = 0,
                listener = listeners[i];
            args = args || [];
            for (var onceListeners = this._onceEvents && this._onceEvents[eventName]; listener;) {
                var isOnce = onceListeners && onceListeners[listener];
                isOnce && (this.off(eventName, listener), delete onceListeners[listener]), listener.apply(this, args), i += isOnce ? 0 : 1, listener = listeners[i]
            }
            return this
        }
    }, EvEmitter
}),
function(window, factory) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(EvEmitter) {
        return factory(window, EvEmitter)
    }) : "object" == typeof module && module.exports ? module.exports = factory(window, require("ev-emitter")) : window.imagesLoaded = factory(window, window.EvEmitter)
}(window, function(window, EvEmitter) {
    function extend(a, b) {
        for (var prop in b) a[prop] = b[prop];
        return a
    }

    function makeArray(obj) {
        var ary = [];
        if (Array.isArray(obj)) ary = obj;
        else if ("number" == typeof obj.length)
            for (var i = 0; i < obj.length; i++) ary.push(obj[i]);
        else ary.push(obj);
        return ary
    }

    function ImagesLoaded(elem, options, onAlways) {
        return this instanceof ImagesLoaded ? ("string" == typeof elem && (elem = document.querySelectorAll(elem)), this.elements = makeArray(elem), this.options = extend({}, this.options), "function" == typeof options ? onAlways = options : extend(this.options, options), onAlways && this.on("always", onAlways), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new ImagesLoaded(elem, options, onAlways)
    }

    function LoadingImage(img) {
        this.img = img
    }

    function Background(url, element) {
        this.url = url, this.element = element, this.img = new Image
    }
    var $ = window.jQuery,
        console = window.console;
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype), ImagesLoaded.prototype.options = {}, ImagesLoaded.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, ImagesLoaded.prototype.addElementImages = function(elem) {
        "IMG" == elem.nodeName && this.addImage(elem), this.options.background === !0 && this.addElementBackgroundImages(elem);
        var nodeType = elem.nodeType;
        if (nodeType && elementNodeTypes[nodeType]) {
            for (var childImgs = elem.querySelectorAll("img"), i = 0; i < childImgs.length; i++) {
                var img = childImgs[i];
                this.addImage(img)
            }
            if ("string" == typeof this.options.background) {
                var children = elem.querySelectorAll(this.options.background);
                for (i = 0; i < children.length; i++) {
                    var child = children[i];
                    this.addElementBackgroundImages(child)
                }
            }
        }
    };
    var elementNodeTypes = {
        1: !0,
        9: !0,
        11: !0
    };
    return ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (style)
            for (var reURL = /url\((['"])?(.*?)\1\)/gi, matches = reURL.exec(style.backgroundImage); null !== matches;) {
                var url = matches && matches[2];
                url && this.addBackground(url, elem), matches = reURL.exec(style.backgroundImage)
            }
    }, ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage)
    }, ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background)
    }, ImagesLoaded.prototype.check = function() {
        function onProgress(image, elem, message) {
            setTimeout(function() {
                _this.progress(image, elem, message)
            })
        }
        var _this = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(loadingImage) {
            loadingImage.once("progress", onProgress), loadingImage.check()
        }) : void this.complete()
    }, ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded, this.emitEvent("progress", [this, image, elem]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, image), this.progressedCount == this.images.length && this.complete(), this.options.debug && console && console.log("progress: " + message, image, elem)
    }, ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(eventName, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[jqMethod](this)
        }
    }, LoadingImage.prototype = Object.create(EvEmitter.prototype), LoadingImage.prototype.check = function() {
        var isComplete = this.getIsImageComplete();
        return isComplete ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.img, message])
    }, LoadingImage.prototype.handleEvent = function(event) {
        var method = "on" + event.type;
        this[method] && this[method](event)
    }, LoadingImage.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, LoadingImage.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, Background.prototype = Object.create(LoadingImage.prototype), Background.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var isComplete = this.getIsImageComplete();
        isComplete && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, Background.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded, this.emitEvent("progress", [this, this.element, message])
    }, ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery, jQuery && ($ = jQuery, $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this))
        })
    }, ImagesLoaded.makeJQueryPlugin(), ImagesLoaded
});
(function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
})(function(i) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(e),
                appendDots: i(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(e).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
        var t = 0;
        return e
    }(), e.prototype.activateADA = function() {
        var i = this;
        i.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : o === !0 ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), s.options.vertical === !1 ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this,
            o = t.getNavTarget();
        null !== o && "object" == typeof o && o.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        e.options.fade === !1 ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (i.options.infinite === !1 && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 === 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 0) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || l === !1 || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t, o = this;
        if (e = o.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var s in e) {
                if (i < e[s]) {
                    i = t;
                    break
                }
                t = e[s]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 0 && (i = e.$slides.children().children(), i.removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        var e = this;
        e.shouldClick === !1 && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        t.cssTransitions === !1 ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function(t) {
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && o.is(":focus") && (e.focussed = !0, e.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function(t) {
            i(this);
            e.options.pauseOnFocus && (e.focussed = !1, e.autoPlay())
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var i = this;
        return i.currentSlide
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (i.options.infinite === !0)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (i.options.centerMode === !0) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        var e = this;
        return e.options[i]
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (e.options.infinite === !1 ? i = e.slideCount : (t = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, t, o, s, n = this;
        return s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0, o = n.swipeLeft * -1 + s, n.options.swipeToSlide === !0 ? (n.$slideTrack.find(".slick-slide").each(function(e, s) {
            var r, l, d;
            if (r = i(s).outerWidth(), l = s.offsetLeft, n.options.centerMode !== !0 && (l += r / 2), d = l + r, o < d) return t = s, !1
        }), e = Math.abs(i(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        var t = this;
        t.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), t.options.accessibility === !0 && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            if (i(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + e.instanceUid + t,
                    tabindex: -1
                }), s !== -1) {
                var n = "slick-slide-control" + e.instanceUid + s;
                i("#" + n).length && i(this).attr({
                    "aria-describedby": n
                })
            }
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
            tabindex: "0"
        }) : e.$slides.eq(s).removeAttr("tabindex");
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), i.options.accessibility === !0 && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === i.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: e.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, n.src = t
            })
        }
        var t, o, s, n, r = this;
        if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), t = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
            for (var l = s - 1, d = n, a = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) l < 0 && (l = r.slideCount - 1), t = t.add(a.eq(l)), t = t.add(a.eq(d)), l--, d++;
        e(t), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        if (!t.unslicked && (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && (t.initADA(), t.options.focusOnChange))) {
            var o = i(t.$slides.get(t.currentSlide));
            o.attr("tabindex", 0).focus()
        }
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var i = this;
        i.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), l.options.adaptiveHeight === !0 && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        return "boolean" == typeof i ? (e = i, i = e === !0 ? 0 : o.slideCount - 1) : i = e === !0 ? --i : i, !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) && (o.unload(), t === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        o.options.rtl === !0 && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        i.options.vertical === !1 ? i.options.centerMode === !0 && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), i.options.centerMode === !0 && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), i.options.vertical === !1 && i.options.variableWidth === !1 ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : i.options.variableWidth === !0 ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        i.options.variableWidth === !1 && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, t.options.rtl === !0 ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && i.options.adaptiveHeight === !0 && i.options.vertical === !1) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), i.options.fade === !1 ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = i.options.vertical === !0 ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || i.options.useCSS === !0 && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && i.animType !== !1 && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && i.animType !== !1
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), n.options.centerMode === !0) {
            var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        return s || (s = 0), t.slideCount <= t.options.slidesToShow ? void t.slideHandler(s, !1, !0) : void t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(a.animating === !0 && a.options.waitForAnimate === !0 || a.options.fade === !0 && a.currentSlide === i)) return e === !1 && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, a.options.infinite === !1 && a.options.centerMode === !1 && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : a.options.infinite === !1 && a.options.centerMode === !0 && (i < 0 || i > a.slideCount - a.options.slidesToScroll) ? void(a.options.fade === !1 && (o = a.currentSlide, t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o))) : (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll !== 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll !== 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = a.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide)), a.updateDots(), a.updateArrows(), a.options.fade === !0 ? (t !== !0 ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
            a.postSlide(s)
        })) : a.postSlide(s), void a.animateHeight()) : void(t !== !0 && a.slideCount > a.options.slidesToShow ? a.animateSlide(d, function() {
            a.postSlide(s)
        }) : a.postSlide(s)))
    }, e.prototype.startLoad = function() {
        var i = this;
        i.options.arrows === !0 && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), i.options.dots === !0 && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), o = Math.round(180 * t / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && i.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (l.options.verticalSwiping === !0 && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (l.options.rtl === !1 ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), l.options.verticalSwiping === !0 && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, l.options.infinite === !1 && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), l.options.vertical === !1 ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s), l.options.fade !== !0 && l.options.touchMove !== !1 && (l.animating === !0 ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        return t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow ? (t.touchObject = {}, !1) : (void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, void(t.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i, e = this;
        i = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || "undefined" == typeof s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), "undefined" != typeof t) return t;
        return o
    }
});
document.addEventListener("DOMContentLoaded", function() {
    jQuery(document).ready(function() {
        if (jQuery('.uagb-block-b53969ac').length > 0) {
            jQuery('.uagb-block-b53969ac').find(".is-carousel").slick({
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "autoplaySpeed": "2000",
                "autoplay": !0,
                "infinite": !0,
                "pauseOnHover": !0,
                "speed": "500",
                "arrows": !0,
                "dots": !0,
                "rtl": !1,
                "prevArrow": "<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>",
                "nextArrow": "<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #333;border-radius:0px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='20' width = '20' fill ='#333' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>",
                "responsive": [{
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                }, {
                    "breakpoint": 767,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                }]
            })
        }
        var $scope = jQuery('.uagb-block-b53969ac');
        var enableEqualHeight = ('');
        if (enableEqualHeight) {
            $scope.imagesLoaded(function() {
                UAGBTestimonialCarousel._setHeight($scope)
            });
            $scope.on("afterChange", function() {
                UAGBTestimonialCarousel._setHeight($scope)
            })
        }
    })
});
var complianz = {
    "prefix": "cmplz_",
    "user_banner_id": "1",
    "set_cookies": [],
    "block_ajax_content": "",
    "banner_version": "14",
    "version": "6.4.3",
    "store_consent": "",
    "do_not_track_enabled": "1",
    "consenttype": "optin",
    "region": "uk",
    "geoip": "",
    "dismiss_timeout": "",
    "disable_cookiebanner": "",
    "soft_cookiewall": "",
    "dismiss_on_scroll": "",
    "cookie_expiry": "365",
    "url": "https:\/\/retainbetter.com\/wp-json\/complianz\/v1\/",
    "locale": "lang=en&locale=en_US",
    "set_cookies_on_root": "",
    "cookie_domain": "",
    "current_policy_id": "16",
    "cookie_path": "\/",
    "categories": {
        "statistics": "statistics",
        "marketing": "marketing"
    },
    "tcf_active": "",
    "placeholdertext": "Click to accept {category} cookies and enable this content",
    "css_file": "https:\/\/retainbetter.com\/wp-content\/uploads\/complianz\/css\/banner-{banner_id}-{type}.css?v=14",
    "page_links": {
        "uk": {
            "cookie-statement": {
                "title": "Cookie Policy ",
                "url": "https:\/\/retainbetter.com\/cookie-policy-uk\/"
            },
            "privacy-statement": {
                "title": "Privacy Policy",
                "url": "https:\/\/retainbetter.com\/privacy-policy\/"
            }
        }
    },
    "tm_categories": "",
    "forceEnableStats": "",
    "preview": "",
    "clean_cookies": ""
};
"use strict";

function cmplz_create_element(e, t) {
    e = document.createElement(e);
    return e.innerHtml = t, e
}

function cmplz_add_event(e, t, c) {
    document.addEventListener(e, e => {
        e.target.closest(t) && c(e)
    })
}

function cmplz_is_hidden(e) {
    return null === e.offsetParent
}

function cmplz_html_decode(e) {
    return (new DOMParser).parseFromString(e, "text/html").documentElement.textContent
}
document.addEventListener("cmplz_manage_consent_container_loaded", function(e) {
        var t, c = window.location.href; - 1 != c.indexOf("#") && (t = -1 != c.lastIndexOf("?") ? c.lastIndexOf("?") : void 0, c = c.substring(c.indexOf("#") + 1, t), t = document.getElementById(c)) && (c = t.getBoundingClientRect().top + window.pageYOffset - 200, window.scrollTo({
            top: c,
            behavior: "smooth"
        }))
    }), complianz.locale = complianz.locale + "&token=" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5),
    function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var c = document.createEvent("CustomEvent");
            return c.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), c
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }();
let cmplz_banner, cmplz_banner_container = document.getElementById("cmplz-cookiebanner-container"),
    cmplz_manage_consent_button, cmplz_waiting_inline_scripts = [],
    cmplz_waiting_scripts = [],
    cmplz_fired_scripts = [],
    cmplz_placeholder_class_index = 0,
    cmplz_all_scripts_hook_fired = !1,
    cmplz_consent_stored_once = !1,
    cmplz_categories = ["functional", "preferences", "statistics", "marketing"];

function cmplz_set_category_as_body_class() {
    var t = document.body.className.split(/\s+/);
    for (let e = 0; e < t.length; e++) - 1 !== t[e].indexOf("cmplz-") && "cmplz-document" !== t[e] && document.body.classList.remove(t[e]);
    var e, c = cmplz_accepted_categories();
    for (e in c) c.hasOwnProperty(e) && document.body.classList.add("cmplz-" + c[e]);
    var n, o = cmplz_get_all_service_consents();
    for (n in o) o.hasOwnProperty(n) && o[n] && document.body.classList.add("cmplz-" + n);
    document.body.classList.add("cmplz-" + complianz.region), document.body.classList.add("cmplz-" + complianz.consenttype);
    var a = new CustomEvent("cmplz_set_category_as_bodyclass");
    document.dispatchEvent(a)
}

function cmplz_append_css(e) {
    var t = document.getElementsByTagName("head")[0],
        c = document.createElement("style");
    c.setAttribute("type", "text/css"), c.styleSheet ? c.styleSheet.cssText = e : c.appendChild(document.createTextNode(e)), t.appendChild(c)
}

function cmplz_load_css(e) {
    var t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(t)
}

function cmplz_run_script(t, c, e, n) {
    var o = document.createElement("script");
    if ("inline" !== e ? o.setAttribute("src", t) : ("string" != typeof t && (t = t.innerHTML), o.innerHTML = [t, "cmplzScriptLoaded();"].join("\n")), !cmplz_in_array(t, cmplz_fired_scripts)) {
        cmplzCopyAttributes(n, o);
        try {
            "inline" !== e ? o.onload = function() {
                cmplz_run_after_all_scripts(c), cmplz_maybe_run_waiting_scripts(t, c, n)
            } : window.cmplzScriptLoaded = function() {
                cmplz_run_after_all_scripts(c), cmplz_maybe_run_waiting_scripts(t, c, n)
            }, document.getElementsByTagName("head")[0].appendChild(o)
        } catch (e) {
            throw cmplz_run_after_all_scripts(c), "Something went wrong " + e + " while loading " + t
        }
    }
}

function cmplz_maybe_run_waiting_scripts(e, t, c) {
    var n = cmplz_get_waiting_script(cmplz_waiting_scripts, e),
        n = (n && cmplz_run_script(n, t, "src", c), cmplz_get_waiting_script(cmplz_waiting_inline_scripts, e));
    n && cmplz_run_script(n, t, "inline", c)
}

function cmplz_set_blocked_content_container() {
    document.querySelectorAll(".cmplz-image").forEach(e => {
        var t, c, n, o;
        e.classList.contains("cmplz-processed") || (e.classList.add("cmplz-processed"), t = e.getAttribute("data-service"), c = e.getAttribute("data-category"), (n = e.parentElement).classList.add("cmplz-blocked-content-container"), o = n.getAttribute("data-placeholder_class_index"), "lazy" === e.getAttribute("loading") && (e.removeAttribute("loading"), e.setAttribute("data-deferlazy", 1)), null == o && (cmplz_placeholder_class_index++, n.classList.add("cmplz-placeholder-" + cmplz_placeholder_class_index), n.classList.add("cmplz-blocked-content-container"), n.setAttribute("data-placeholder_class_index", cmplz_placeholder_class_index), cmplz_insert_placeholder_text(n, c, t)))
    }), document.querySelectorAll(".cmplz-placeholder-element").forEach(c => {
        if (!c.classList.contains("cmplz-processed")) {
            c.classList.add("cmplz-processed");
            var n = c.getAttribute("data-service"),
                o = c.getAttribute("data-category");
            let t;
            if (null == (t = c.classList.contains("cmplz-iframe") ? ("lazy" === c.getAttribute("loading") && (c.removeAttribute("loading"), c.setAttribute("data-deferlazy", 1)), c.parentElement) : c).getAttribute("data-placeholder_class_index")) {
                cmplz_placeholder_class_index++, t.classList.add("cmplz-placeholder-" + cmplz_placeholder_class_index), t.classList.add("cmplz-blocked-content-container"), t.setAttribute("data-placeholder_class_index", cmplz_placeholder_class_index), cmplz_insert_placeholder_text(t, o, n);
                let e = c.getAttribute("data-placeholder-image");
                e && void 0 !== e && e.length && (e = e.replace("url(", "").replace(")", "").replace(/\"/gi, ""), cmplz_append_css(".cmplz-placeholder-" + cmplz_placeholder_class_index + " {background-image: url(" + e + ") !important;}"), cmplz_set_blocked_content_container_aspect_ratio(c, e, cmplz_placeholder_class_index))
            }
        }
    }), cmplz_has_consent("statistics") && cmplz_enable_category("statistics"), cmplz_has_consent("marketing") && cmplz_enable_category("marketing")
}

function cmplz_insert_placeholder_text(e, n, o) {
    if (!e.querySelector(".cmplz-blocked-content-notice")) {
        let t = complianz.placeholdertext;
        n = n || "marketing";
        let c;
        if (void 0 !== t) {
            if (1 == complianz.clean_cookies) {
                let e = o ? o.replace("-", " ") : "";
                e = e.charAt(0).toUpperCase() + e.slice(1), t = t.replace("{service}", e), (c = cmplz_create_element("div", t)).innerHTML = t, c.classList.add("cmplz-blocked-content-notice");
                var a = c.querySelector("button"),
                    a = (a.setAttribute("data-service", o), a.setAttribute("data-category", n), a.setAttribute("aria-label", o), complianz.page_links[complianz.region]),
                    i = c.querySelector(".cmplz-links a");
                a && a.hasOwnProperty("cookie-statement") && (i.setAttribute("href", a["cookie-statement"].url), "{title}" === i.innerText) && (i.innerText = a["cookie-statement"].title)
            } else {
                i = cmplz_create_element("button", "");
                let e = "marketing";
                complianz.categories.hasOwnProperty(n) && (e = complianz.categories[n]), t = t.replace("{category}", e), i.innerText = t, i.classList.add("cmplz-blocked-content-notice"), i.classList.add("cmplz-accept-category"), i.classList.add("cmplz-accept-" + n), i.setAttribute("data-service", o), i.setAttribute("data-category", n), i.setAttribute("aria-label", o), c = i
            }("VIDEO" !== e.tagName ? e : e.parentElement).appendChild(c)
        }
    }
}

function cmplz_set_blocked_content_container_aspect_ratio(e, a, i) {
    if (null != e) {
        let o = e.parentElement;
        e = new Image;
        e.addEventListener("load", function() {
            let e = this.naturalWidth;
            var t = this.naturalHeight,
                c = (0 === e && (e = 1), o.clientWidth),
                t = t * (c / e);
            let n = ""; - 1 === a.indexOf("placeholder.jpg") && (n = "height:" + t + "px;"), cmplz_append_css(".cmplz-placeholder-" + i + " {" + n + "}")
        }), e.src = a
    }
}
var cmplzResizeTimer;

function cmplz_has_blocked_scripts() {
    return 0 < document.querySelectorAll("script[data-category], script[data-service]").length
}

function cmplz_enable_category(o, n) {
    if (1 == complianz.tm_categories && "" !== o && cmplz_run_tm_event(o), n = void 0 !== n ? n : "do_not_match", "functional" !== (o = "" === o ? "do_not_match" : o)) {
        "marketing" === o && cmplz_set_integrations_cookies();
        let e;
        e = "do_not_match" !== n ? ".cmplz-blocked-content-notice [data-service=" + n + "]" : 1 != complianz.clean_cookies ? ".cmplz-blocked-content-notice.cmplz-accept-" + o : ".cmplz-blocked-content-notice [data-category=" + o + "]", document.querySelectorAll(e).forEach(e => {
            var t = e.getAttribute("data-service");
            e.parentNode.classList.contains("cmplz-blocked-content-notice") && (e = e.parentNode), cmplz_is_service_denied(t) || e.parentNode.removeChild(e)
        }), document.querySelectorAll("[data-category=" + o + "], [data-service=" + n + "]").forEach(t => {
            var e = t.getAttribute("data-service");
            if (!cmplz_is_service_denied(e) && "functional" !== t.getAttribute("data-category") && !t.classList.contains("cmplz-activated")) {
                var e = t.tagName;
                if ("LINK" === e) t.classList.add("cmplz-activated"), cmplz_load_css(t.getAttribute("data-href"), o);
                else if ("IMG" === e) {
                    t.classList.add("cmplz-activated");
                    var c = t.getAttribute("data-src-cmplz");
                    t.setAttribute("src", c), t.getAttribute("data-deferlazy") && t.setAttribute("loading", "lazy"), cmplz_remove_placeholder(t)
                } else if ("IFRAME" === e) {
                    t.classList.add("cmplz-activated");
                    let e = t.getAttribute("data-src-cmplz");
                    c = t.getAttribute("data-cmplz-target") ? t.getAttribute("data-cmplz-target") : "src";
                    "1" === cmplz_get_url_parameter(t.getAttribute(c), "autoplay") && (e += "&autoplay=1"), t.getAttribute("data-deferlazy") && t.setAttribute("loading", "lazy"), t.addEventListener("load", () => {
                        cmplz_remove_placeholder(t)
                    }), t.setAttribute(c, e)
                } else t.classList.contains("cmplz-placeholder-element") && (t.classList.add("cmplz-activated"), e = t.getAttribute("data-placeholder_class_index"), t.classList.remove("cmplz-blocked-content-container"), t.classList.remove("cmplz-placeholder-" + e));
                c = {}, e = (c.category = o, c.service = n, new CustomEvent("cmplz_category_enabled", {
                    detail: c
                }));
                document.dispatchEvent(e)
            }
        });
        var t = document.querySelectorAll("script[data-category=" + o + "], script[data-service=" + n + "]"),
            t = (t.forEach(e => {
                var t = e.getAttribute("data-waitfor"),
                    c = e.getAttribute("data-cmplz-src");
                t && (c ? cmplz_waiting_scripts[t] = c : 0 < e.innerText.length && (cmplz_waiting_inline_scripts[t] = e)), e.parentElement && e.parentElement.removeChild(e)
            }), t.forEach(e => {
                var t, c, n = e.getAttribute("type");
                !e.classList.contains("cmplz-activated") && n && "text/javascript" !== n && (e.classList.add("cmplz-activated"), (n = e.getAttribute("data-cmplz-src")) ? (e.removeAttribute("type"), cmplz_is_waiting_script(cmplz_waiting_scripts, n) || (e.getAttribute("data-post_scribe_id") ? (t = "#" + e.getAttribute("data-post_scribe_id"), (c = document.querySelector(t)) && (c.innerHtml(""), postscribe(t, "<script src=" + n + "><\/script>"))) : cmplz_run_script(n, o, "src", e))) : 0 < e.innerText.length && (cmplz_is_waiting_script(cmplz_waiting_inline_scripts, e.innerText) || cmplz_run_script(e.innerText, o, "inline", e)))
            }), {}),
            t = (t.category = o, t.service = n, t.categories = cmplz_accepted_categories(), t.services = cmplz_get_all_service_consents(), t.region = complianz.region, new CustomEvent("cmplz_enable_category", {
                detail: t
            }));
        document.dispatchEvent(t), cmplz_has_blocked_scripts() || cmplz_run_after_all_scripts(o)
    }
}

function cmplz_remove_placeholder(e) {
    var t, c = e.closest(".cmplz-blocked-content-container");
    c && (t = c.getAttribute("data-placeholder_class_index"), c.classList.remove("cmplz-blocked-content-container"), c.classList.remove("cmplz-placeholder-" + t)), e.classList.remove("cmplz-iframe-styles"), e.classList.remove("cmplz-iframe"), e.classList.remove("video-wrap")
}

function cmplz_get_waiting_script(e, t) {
    for (var c in e) {
        var n;
        if (e.hasOwnProperty(c))
            if (-1 !== t.indexOf(c)) return n = e[c], delete e[c], n
    }
    return !1
}

function cmplz_array_is_empty(e) {
    for (var t in e)
        if (e.hasOwnProperty(t)) return !1;
    return !0
}

function cmplz_is_waiting_script(t, c) {
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            let e = t[n];
            if ("string" != typeof e && (e = e.innerText), -1 !== c.indexOf(e) || -1 !== e.indexOf(c)) return !0
        }
    return !1
}

function cmplz_run_after_all_scripts(e) {
    !cmplz_all_scripts_hook_fired && cmplz_array_is_empty(cmplz_waiting_inline_scripts) && cmplz_array_is_empty(cmplz_waiting_scripts) && (e = new CustomEvent("cmplz_run_after_all_scripts", {
        detail: e
    }), document.dispatchEvent(e), cmplz_all_scripts_hook_fired = !0)
}
window.cmplz_get_cookie = function(e) {
    if ("undefined" == typeof document) return "";
    e = complianz.prefix + e;
    e = ("; " + document.cookie).split("; " + e + "=");
    return 2 === e.length ? e.pop().split(";").shift() : ""
}, window.cmplz_set_cookie = function(n, o, a) {
    if ("undefined" != typeof document) {
        void 0 === a && (a = !0);
        let e = ";secure";
        var i = new Date,
            i = (i.setTime(i.getTime() + 24 * complianz.cookie_expiry * 60 * 60 * 1e3), ";expires=" + i.toGMTString());
        "https:" !== window.location.protocol && (e = "");
        let t = cmplz_get_cookie_domain(),
            c = (0 < t.length && (t = ";domain=" + t), "");
        a && (c = complianz.prefix), document.cookie = c + n + "=" + o + ";SameSite=Lax" + e + i + t + ";path=" + cmplz_get_cookie_path()
    }
}, window.cmplz_in_array = function(t, c) {
    var n = c.length;
    for (let e = 0; e < n; e++)
        if (c[e] == t) return !0;
    return !1
}, window.cmplz_highest_accepted_category = function() {
    var e = cmplz_accepted_categories();
    return cmplz_in_array("marketing", e) ? "marketing" : cmplz_in_array("statistics", e) ? "statistics" : cmplz_in_array("preferences", e) ? "preferences" : "functional"
}, window.cmplz_accept_all = function() {
    for (var e in cmplz_categories) cmplz_categories.hasOwnProperty(e) && cmplz_set_consent(cmplz_categories[e], "allow")
}, window.addEventListener("resize", function(e) {
    clearTimeout(cmplzResizeTimer), cmplzResizeTimer = setTimeout(cmplz_set_blocked_content_container, 500)
}, !0), 1 == complianz.block_ajax_content && setInterval(function() {
    cmplz_set_blocked_content_container()
}, 2e3);
let cmplz_fired_events = [];

function cmplz_run_tm_event(e) {
    -1 === cmplz_fired_events.indexOf(e) && (cmplz_fired_events.push(e), window.dataLayer = window.dataLayer || [], window.dataLayer.push({
        event: complianz.prefix + "event_" + e
    }), e = new CustomEvent("cmplz_tag_manager_event", {
        detail: e
    }), document.dispatchEvent(e))
}

function cmplz_legacy() {
    let t = !1;
    document.querySelectorAll("[data-service=recaptcha]").forEach(e => {
        e.setAttribute("data-service", "google-recaptcha"), t = !0
    }), t && (console.log("recaptcha as service name is deprecated. Please rename the service in your custom html to google-recaptcha"), document.body.classList.add("cmplz-google-recaptcha"))
}

function cmplz_do_not_track() {
    var e = "doNotTrack" in navigator && "1" === navigator.doNotTrack,
        t = "globalPrivacyControl" in navigator && navigator.globalPrivacyControl;
    return !(!complianz.do_not_track_enabled || !t && !e)
}

function cmplz_get_services_on_page() {
    let c = [];
    return document.querySelectorAll("[data-service]").forEach(e => {
        var t = e.getAttribute("data-service"),
            e = e.getAttribute("data-category"); - 1 == c.indexOf(t) && c.push({
            category: e,
            service: t
        })
    }), c
}

function cmplz_is_bot() {
    var e = new RegExp("(googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)", "i"),
        t = navigator.userAgent;
    return e.test(t)
}

function cmplz_is_speedbot() {
    var e = navigator.userAgent;
    return new RegExp("(GTmetrix|pingdom|pingbot|Lighthouse)", "i").test(e)
}

function cmplz_exists_service_consent() {
    var e, t = cmplz_get_cookie("consented_services");
    try {
        for (const c in e = JSON.parse(t))
            if (e.hasOwnProperty(c) && 1 == e[c]) return !0
    } catch (e) {}
    return !1
}

function cmplz_set_service_consent(e, t) {
    var c = cmplz_get_cookie("consented_services");
    try {
        n = JSON.parse(c)
    } catch (e) {
        n = {}
    }
    n[e] = t, cmplz_set_cookie("consented_services", JSON.stringify(n));
    var c = {},
        n = (c.service = e, c.value = t, c.region = complianz.region, cmplz_all_scripts_hook_fired = !1, new CustomEvent("cmplz_status_change_service", {
            detail: c
        }));
    document.dispatchEvent(n)
}

function cmplz_clear_all_service_consents() {
    cmplz_set_cookie("consented_services", "")
}

function cmplz_get_all_service_consents() {
    var t, e = cmplz_get_cookie("consented_services");
    try {
        t = JSON.parse(e)
    } catch (e) {
        t = {}
    }
    return t
}

function cmplz_get_cookie_path() {
    return void 0 !== complianz.cookie_path && "" !== complianz.cookie_path ? complianz.cookie_path : "/"
}

function cmplz_get_cookie_domain() {
    var e = "";
    return e = -1 !== (e = 1 == complianz.set_cookies_on_root && 3 < complianz.cookie_domain.length ? complianz.cookie_domain : e).indexOf("localhost") ? "" : e
}

function cmplz_reload_browser_compatible() {
    var e; - 1 < navigator.userAgent.toLowerCase().indexOf("firefox") ? ((e = new URL(window.location.href)).searchParams.set("cmplz-force-reload", Date.now().toString()), window.location.href = e.toString()) : window.location.reload()
}
window.conditionally_show_banner = function() {
    complianz = cmplz_merge_object(complianz, cmplz_user_data), cmplz_maybe_auto_redirect(), cmplz_set_blocked_content_container(), cmplz_legacy(), window.wp_consent_type = complianz.consenttype;
    var e, t, c = new CustomEvent("wp_consent_type_defined"),
        n = (document.dispatchEvent(c), c = new CustomEvent("cmplz_before_cookiebanner"), document.dispatchEvent(c), 1 == complianz.forceEnableStats && "optin" === complianz.consenttype && cmplz_set_consent("statistics", "allow"), cmplz_categories.reverse());
    for (e in n) n.hasOwnProperty(e) && (t = cmplz_categories[e], cmplz_has_consent(t)) && cmplz_enable_category(t);
    if (cmplz_exists_service_consent()) {
        cmplz_enable_category("", "general");
        var o, a, i, l = cmplz_get_services_on_page();
        for (o in l) l.hasOwnProperty(o) && (a = l[o].service, i = l[o].category, cmplz_has_service_consent(a, i)) && (document.querySelectorAll(".cmplz-accept-service[data-service=" + a + "]").forEach(e => {
            e.checked = !0
        }), cmplz_enable_category("", a))
    }
    cmplz_sync_category_checkboxes(), cmplz_integrations_init(), cmplz_check_cookie_policy_id(), cmplz_set_up_auto_dismiss(), cmplz_load_manage_consent_container(), c = new CustomEvent("cmplz_cookie_banner_data", {
        detail: complianz
    }), document.dispatchEvent(c), "" === cmplz_get_cookie("saved_categories") && ("optin" !== complianz.consenttype && "optout" !== complianz.consenttype ? cmplz_track_status("no_warning") : cmplz_do_not_track() && cmplz_track_status("do_not_track")), cmplz_set_category_as_body_class(), cmplz_fire_categories_event(), cmplz_do_not_track() ? (console.log("global privacy control or do not track detected: no banner."), cmplz_track_status("do_not_track")) : ("optin" === complianz.consenttype ? (complianz.forceEnableStats && cmplz_enable_category("statistics"), console.log("opt-in"), show_cookie_banner) : "optout" === complianz.consenttype ? (console.log("opt-out"), show_cookie_banner) : (console.log("other consent type, no cookie warning"), cmplz_accept_all))()
}, window.show_cookie_banner = function() {
    let e = complianz.disable_cookiebanner || cmplz_is_speedbot(),
        t = !1;
    (document.querySelector("#cmplz-manage-consent-container") || document.querySelector(".cmplz-dropdown-cookiepolicy")) && (t = !0);
    var c = document.createDocumentFragment(),
        n = document.getElementById("cmplz-cookiebanner-container"),
        n = (n && (c.appendChild(n), document.body.prepend(c)), document.createElement("link"));
    let o = complianz.page_links[complianz.region];
    (cmplz_banner = document.querySelector(".cmplz-cookiebanner.banner-" + complianz.user_banner_id + "." + complianz.consenttype)) || (e = !0), cmplz_manage_consent_button = document.querySelector("#cmplz-manage-consent .cmplz-manage-consent.manage-consent-" + complianz.user_banner_id);
    c = complianz.css_file.replace("{type}", complianz.consenttype).replace("{banner_id}", complianz.user_banner_id), -1 != complianz.css_file.indexOf("cookiebanner/css/defaults/banner") && console.log("Fallback default css file used. Please re-save banner settings, or check file writing permissions in uploads directory"), n.href = c, n.type = "text/css", n.rel = "stylesheet", n.onload = function() {
        e || (cmplz_banner.classList.remove("cmplz-hidden"), cmplz_manage_consent_button.classList.remove("cmplz-hidden"))
    }, document.getElementsByTagName("head")[0].appendChild(n), cmplz_banner && !e && (cmplz_banner.querySelectorAll(".cmplz-links a:not(.cmplz-external), .cmplz-buttons a:not(.cmplz-external)").forEach(e => {
        var t, c = e;
        for (t in c.classList.add("cmplz-hidden"), o) o.hasOwnProperty(t) && c.classList.contains(t) && (c.setAttribute("href", o[t].url + c.getAttribute("data-relative_url")), "{title}" === c.innerText && (c.innerText = cmplz_html_decode(o[t].title)), c.classList.remove("cmplz-hidden"))
    }), cmplz_set_banner_status(), t) && (cmplz_banner.classList.remove("cmplz-show"), cmplz_banner.classList.add("cmplz-dismissed"), cmplz_manage_consent_button.classList.remove("cmplz-dismissed"), cmplz_manage_consent_button.classList.add("cmplz-show")), c = new CustomEvent("cmplz_cookie_warning_loaded", {
        detail: complianz.region
    });
    document.dispatchEvent(c)
}, window.cmplz_get_banner_status = function() {
    return cmplz_get_cookie("banner-status")
}, window.cmplz_set_banner_status = function(e) {
    let t = cmplz_get_cookie("banner-status");
    (e = void 0 !== e ? e : t) !== t && cmplz_set_cookie("banner-status", e), 0 === e.length && (e = "show"), t = "show" === e ? "dismissed" : "show", cmplz_banner && 0 < e.length && (cmplz_banner.classList.remove("cmplz-" + t), cmplz_banner.classList.add("cmplz-" + e), cmplz_manage_consent_button) && (cmplz_manage_consent_button.classList.add("cmplz-" + t), cmplz_manage_consent_button.classList.remove("cmplz-" + e)), cmplz_banner_container && complianz.soft_cookiewall && (cmplz_banner_container.classList.remove("cmplz-" + t), cmplz_banner_container.classList.add("cmplz-" + e), cmplz_banner_container.classList.add("cmplz-soft-cookiewall"));
    e = new CustomEvent("cmplz_banner_status", {
        detail: e
    });
    document.dispatchEvent(e), cmplz_start_clean()
}, window.cmplz_has_consent = function(e) {
    if (cmplz_is_bot()) return !0;
    if ("functional" === e) return !0;
    let t, c;
    return c = cmplz_get_cookie(e), t = ("optout" === complianz.consenttype || "other" === complianz.consenttype) && "" === c || "allow" === c
}, window.cmplz_is_service_denied = function(e) {
    var t, c = cmplz_get_cookie("consented_services");
    try {
        t = JSON.parse(c)
    } catch (e) {
        t = {}
    }
    return !!t.hasOwnProperty(e) && !t[e]
}, window.cmplz_has_service_consent = function(e, t) {
    var c, n = cmplz_get_cookie("consented_services");
    try {
        c = JSON.parse(n)
    } catch (e) {
        c = {}
    }
    return c.hasOwnProperty(e) ? c[e] : cmplz_has_consent(t)
}, window.cmplz_set_consent = function(e, t) {
    cmplz_set_accepted_cookie_policy_id(), t = "functional" === e ? "allow" : t;
    var c, n = cmplz_get_cookie(e);
    let o = "allow" === t;
    document.querySelectorAll("input.cmplz-" + e).forEach(e => {
        e.checked = o
    }), n !== t && (cmplz_set_cookie(e, t), "allow" === t && cmplz_enable_category(e), cmplz_wp_set_consent(e, t), "statistics" === e && cmplz_wp_set_consent("statistics-anonymous", "allow"), (c = new Object).category = e, c.value = t, c.region = complianz.region, c.categories = cmplz_accepted_categories(), cmplz_all_scripts_hook_fired = !1, c = new CustomEvent("cmplz_status_change", {
        detail: c
    }), document.dispatchEvent(c), "marketing" === e) && "deny" === t && "allow" === n && (cmplz_integrations_revoke(), setTimeout(function() {
        cmplz_reload_browser_compatible()
    }, 500))
};
var cmplz_id_cookie, cmplz_id_session, cmplz_id, cmplz_user_data = [];
if ("undefined" != typeof Storage && sessionStorage.cmplz_user_data && (cmplz_user_data = JSON.parse(sessionStorage.cmplz_user_data)), 1 != complianz.geoip || 0 != cmplz_user_data.length && cmplz_user_data.version === complianz.version && cmplz_user_data.banner_version === complianz.banner_version) conditionally_show_banner();
else {
    var request = new XMLHttpRequest;
    let e = cmplz_get_url_parameter(window.location.href, "cmplz_user_region");
    e = e ? "&cmplz_user_region=" + e : "", request.open("GET", complianz.url + "banner?" + complianz.locale + e, !0), request.setRequestHeader("Content-type", "application/json"), request.send(), request.onload = function() {
        cmplz_user_data = JSON.parse(request.response), sessionStorage.cmplz_user_data = JSON.stringify(cmplz_user_data), conditionally_show_banner()
    }
}

function cmplz_track_status_end() {
    cmplz_consent_stored_once || cmplz_track_status()
}

function cmplz_set_up_auto_dismiss() {
    var t, e;
    "optout" === complianz.consenttype && (1 == complianz.dismiss_on_scroll && (t = function(e) {
        window.pageYOffset > Math.floor(400) && (cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status(), window.removeEventListener("scroll", t), this.onWindowScroll = null)
    }, window.addEventListener("scroll", t)), 0 < (e = parseInt(complianz.dismiss_timeout))) && window.setTimeout(function() {
        cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status()
    }, Math.floor(e))
}

function cmplz_fire_categories_event() {
    var e = new Object,
        e = (e.category = cmplz_highest_accepted_category(), e.categories = cmplz_accepted_categories(), e.region = complianz.region, new CustomEvent("cmplz_fire_categories", {
            detail: e
        }));
    document.dispatchEvent(e)
}

function cmplz_track_status(e) {
    var t, c = [],
        n = (e = void 0 !== e && e, new CustomEvent("cmplz_track_status", {
            detail: e
        }));
    document.dispatchEvent(n), c = e ? [e] : cmplz_accepted_categories(), cmplz_set_category_as_body_class();
    try {
        o = JSON.parse(cmplz_get_cookie("saved_categories"))
    } catch (e) {
        o = {}
    }
    try {
        t = JSON.parse(cmplz_get_cookie("saved_services"))
    } catch (e) {
        t = {}
    }
    var o, n = cmplz_get_all_service_consents();
    cmplz_equals(o, c) && cmplz_equals(t, n) || 1 != complianz.store_consent || cmplz_is_bot() || cmplz_is_speedbot() || (cmplz_set_cookie("saved_categories", JSON.stringify(c)), cmplz_set_cookie("saved_services", JSON.stringify(n)), cmplz_consent_stored_once = !0, (e = new XMLHttpRequest).open("POST", complianz.url + "track", !0), o = {
        consented_categories: c,
        consented_services: n,
        consenttype: window.wp_consent_type
    }, e.setRequestHeader("Content-type", "application/json"), e.send(JSON.stringify(o)))
}

function cmplz_accepted_categories() {
    var e, t, c = cmplz_categories,
        n = [];
    for (e in c) c.hasOwnProperty(e) && (t = c[e], cmplz_has_consent(t)) && n.push(t);
    return c = c.filter(function(e, t, c) {
        return cmplz_in_array(e, n)
    })
}

function cmplz_sync_category_checkboxes() {
    for (var e in cmplz_categories) cmplz_categories.hasOwnProperty(e) && (e = cmplz_categories[e], cmplz_has_consent(e) || "functional" === e ? document.querySelectorAll("input.cmplz-" + e).forEach(e => {
        e.checked = !0
    }) : document.querySelectorAll("input.cmplz-" + e).forEach(e => {
        e.checked = !1
    })), document.querySelectorAll(".cmplz-accept-service").forEach(e => {
        var t = e.getAttribute("data-service"),
            c = e.getAttribute("data-category");
        cmplz_has_service_consent(t, c) ? e.checked = !0 : cmplz_is_service_denied(t) ? e.checked = !1 : (c = e.getAttribute("data-category"), e.checked = !!cmplz_has_consent(c))
    })
}

function cmplz_merge_object(e, t) {
    var c, n = [];
    for (c in t) t.hasOwnProperty(c) && (n[c] = t[c]);
    for (c in e) t.hasOwnProperty(c) && void 0 !== t[c] || e.hasOwnProperty(c) && (n[c] = e[c]);
    return n
}

function cmplz_check_cookie_policy_id() {
    var e = cmplz_get_cookie("policy_id");
    e && complianz.current_policy_id !== e && cmplz_clear_cookies("cmplz")
}

function cmplz_clear_cookies(e) {
    var t = !1;
    if ("undefined" != typeof document) {
        for (var c = ";secure", n = new Date, o = (n.setTime(n.getTime() - 864e5), ";expires=" + n.toGMTString()), a = ("https:" !== window.location.protocol && (c = ""), document.cookie.split("; ")), i = location.pathname.replace(/^\/|\/$/g, "").split("/"), l = 0; l < a.length; l++) {
            var r = a[l].split(";")[0].split("=")[0],
                s = window.location.hostname.split("."),
                _ = 1 < s.length;
            if (-1 !== r.indexOf(e)) {
                var t = !0,
                    p = encodeURIComponent(r) + "=;SameSite=Lax" + c + o + ";domain=;path=";
                for (document.cookie = p + "/"; 0 < i.length;) 0 < (m = i.join("/")).length && (document.cookie = p + "/" + m, document.cookie = p + "/" + m + "/"), i.pop();
                for (; 0 < s.length;) {
                    var m, d = encodeURIComponent(r) + "=;SameSite=Lax" + c + o + ";domain=." + s.join(".") + ";path=";
                    for (document.cookie = d + "/"; 0 < i.length;) 0 < (m = i.join("/")).length && (document.cookie = d + "/" + m, document.cookie = d + "/" + m + "/"), i.pop();
                    s.shift(), _ && 1 == s.length && s.shift()
                }
            }
        }
        cmplz_set_accepted_cookie_policy_id()
    }
    return t
}

function cmplz_set_accepted_cookie_policy_id() {
    cmplz_set_cookie("policy_id", complianz.current_policy_id)
}

function cmplz_integrations_init() {
    var e, t = complianz.set_cookies;
    for (e in t) t.hasOwnProperty(e) && "1" === t[e][1] && cmplz_set_cookie(e, t[e][1], !1)
}

function cmplz_integrations_revoke() {
    var e, t = complianz.set_cookies;
    for (e in t) t.hasOwnProperty(e) && (cmplz_set_cookie(e, t[e][1], !1), 0 == t[e][1]) && cmplz_clear_cookies(e)
}

function cmplz_set_integrations_cookies() {
    var e, t = complianz.set_cookies;
    for (e in t) t.hasOwnProperty(e) && cmplz_set_cookie(e, t[e][0], !1)
}

function cmplz_get_url_parameter(e, t) {
    if (e && void 0 !== e && -1 != e.indexOf("?")) {
        e = e.split("?");
        if (1 != e.length)
            for (var c, n = e[1].split("&"), o = 0; o < n.length; o++)
                if (n.hasOwnProperty(o) && (c = n[o].split("="))[0] === t) return void 0 === c[1] || decodeURIComponent(c[1])
    }
    return !1
}

function cmplz_maybe_auto_redirect() {
    var e = cmplz_get_url_parameter(window.location.href, "cmplz_region_redirect"),
        t = cmplz_get_url_parameter(window.location.href, "cmplz-region");
    e && !t && (window.location.href = window.location.href + "&cmplz-region=" + complianz.region)
}

function cmplz_wp_set_consent(e, t) {
    "function" == typeof wp_set_consent && wp_set_consent(e, t)
}
1 == complianz.store_consent && (cmplz_id_cookie = cmplz_get_cookie("id"), cmplz_id = cmplz_id_session = "", "undefined" != typeof Storage && sessionStorage.cmplz_id && (cmplz_id_session = JSON.parse(sessionStorage.cmplz_id)), 0 == cmplz_id_cookie.length && 0 < cmplz_id_session.length && (cmplz_id = cmplz_id_session, cmplz_set_cookie("id", cmplz_id)), 0 < cmplz_id_cookie.length && 0 == cmplz_id_session.length && (cmplz_id = cmplz_id_cookie), "undefined" != typeof Storage) && (sessionStorage.cmplz_id = JSON.stringify(cmplz_id)), document.addEventListener("visibilitychange", function() {
    "hidden" === document.visibilityState && cmplz_track_status_end()
}), window.addEventListener("pagehide", cmplz_track_status_end, !1), window.addEventListener("beforeunload", cmplz_track_status_end, !1), document.addEventListener("cmplz_consent_action", function(e) {
    cmplz_set_consent(e.detail.category, "allow"), cmplz_fire_categories_event(), cmplz_track_status()
}), window.cmplz_accept_all = function() {
    for (var e in cmplz_clear_all_service_consents(), cmplz_categories) cmplz_categories.hasOwnProperty(e) && cmplz_set_consent(cmplz_categories[e], "allow");
    cmplz_sync_category_checkboxes()
}, window.cmplz_deny_all = function() {
    for (var e in cmplz_categories) cmplz_categories.hasOwnProperty(e) && cmplz_set_consent(cmplz_categories[e], "deny");
    var t = !1,
        c = ("functional" === cmplz_highest_accepted_category() && !cmplz_exists_service_consent() || (t = !0), cmplz_clear_cookies("cmplz_service") && (t = !0), cmplz_clear_all_service_consents(), cmplz_integrations_revoke(), cmplz_fire_categories_event(), cmplz_track_status(), new CustomEvent("cmplz_revoke", {
            detail: t
        }));
    document.dispatchEvent(c), !complianz.tcf_active && t && cmplz_reload_browser_compatible()
}, cmplz_add_event("click", ".cmplz-accept", function(e) {
    e.preventDefault(), cmplz_accept_all(), cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status()
}), cmplz_add_event("click", ".cmplz-accept-category, .cmplz-accept-marketing", function(e) {
    e.preventDefault();
    var e = e.target,
        t = e.getAttribute("data-service"),
        e = e.getAttribute("data-category") || "marketing";
    1 == complianz.clean_cookies && void 0 !== t && t ? (cmplz_set_service_consent(t, !0), cmplz_enable_category("", "general"), cmplz_enable_category("", t)) : cmplz_set_consent(e, "allow"), cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status()
}), cmplz_add_event("click", ".cmplz-accept-service", function(e) {
    var e = e.target;
    "INPUT" !== e.tagName && (void 0 !== (e = e.getAttribute("data-service")) && (cmplz_set_service_consent(e, !0), cmplz_enable_category("", "general"), cmplz_enable_category("", e)), cmplz_fire_categories_event(), cmplz_track_status())
}), cmplz_add_event("change", ".cmplz-accept-service", function(e) {
    var t = e.target,
        c = t.tagName,
        n = t.getAttribute("data-service");
    void 0 !== n && ("INPUT" === c ? (cmplz_set_banner_status("dismissed"), t.checked ? (cmplz_set_service_consent(n, !0), cmplz_enable_category("", n)) : (cmplz_set_service_consent(n, !1), setTimeout(function() {
        cmplz_reload_browser_compatible()
    }, 500))) : (e.preventDefault(), cmplz_set_service_consent(n, !0), cmplz_enable_category("", "general"), cmplz_enable_category("", n), setTimeout(function() {
        cmplz_reload_browser_compatible()
    }, 500))), cmplz_fire_categories_event(), cmplz_track_status()
}), cmplz_add_event("click", ".cmplz-save-preferences", function(e) {
    var t, c, n, e = e.target;
    for (t in cmplz_banner = e.closest(".cmplz-cookiebanner"), cmplz_categories) cmplz_categories.hasOwnProperty(t) && (c = cmplz_categories[t], n = cmplz_banner.querySelector("input.cmplz-" + c)) && (n.checked ? cmplz_set_consent(c, "allow") : cmplz_set_consent(c, "deny"));
    cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status()
}), cmplz_add_event("click", ".cmplz-close", function(e) {
    cmplz_set_banner_status("dismissed")
}), cmplz_add_event("click", ".cmplz-view-preferences", function(e) {
    e = e.target;
    (cmplz_banner = e.closest(".cmplz-cookiebanner")).querySelector(".cmplz-categories").classList.contains("cmplz-fade-in") ? (cmplz_banner.classList.remove("cmplz-categories-visible"), cmplz_banner.querySelector(".cmplz-categories").classList.remove("cmplz-fade-in"), cmplz_banner.querySelector(".cmplz-view-preferences").style.display = "block", cmplz_banner.querySelector(".cmplz-save-preferences").style.display = "none") : (cmplz_banner.classList.add("cmplz-categories-visible"), cmplz_banner.querySelector(".cmplz-categories").classList.add("cmplz-fade-in"), cmplz_banner.querySelector(".cmplz-view-preferences").style.display = "none", cmplz_banner.querySelector(".cmplz-save-preferences").style.display = "block")
}), cmplz_add_event("change", ".cmplz-manage-consent-container .cmplz-category", function(e) {
    for (var t in cmplz_categories) {
        var c;
        cmplz_categories.hasOwnProperty(t) && (t = cmplz_categories[t], c = document.querySelector(".cmplz-manage-consent-container input.cmplz-" + t)) && (c.checked ? cmplz_set_consent(t, "allow") : cmplz_set_consent(t, "deny"), cmplz_set_banner_status("dismissed"), cmplz_fire_categories_event(), cmplz_track_status())
    }
}), cmplz_add_event("click", ".cmplz-deny", function(e) {
    e.preventDefault(), cmplz_set_banner_status("dismissed"), cmplz_deny_all()
}), cmplz_add_event("click", "button.cmplz-manage-settings", function(e) {
    e.preventDefault();
    var e = document.querySelector(".cmplz-cookiebanner .cmplz-categories"),
        t = document.querySelector(".cmplz-save-settings"),
        c = document.querySelector("button.cmplz-manage-settings");
    cmplz_is_hidden(e) ? (t.style.display = "block", c.style.display = "none", e.style.display = "block") : (t.style.display = "none", c.style.display = "block", e.style.display = "none")
}), cmplz_add_event("click", "button.cmplz-manage-consent", function(e) {
    e.preventDefault(), cmplz_set_banner_status("show")
});
var cmplzCleanCookieInterval, cmplz_cookie_data = [];

function cmplz_start_clean() {
    var e;
    1 == complianz.clean_cookies && ((cmplz_cookie_data = "undefined" != typeof Storage ? JSON.parse(sessionStorage.getItem("cmplz_cookie_data")) : cmplz_cookie_data) && 0 != cmplz_cookie_data.length ? cmplz_setup_clean_interval() : ((e = new XMLHttpRequest).open("GET", complianz.url + "cookie_data", !0), e.setRequestHeader("Content-type", "application/json"), e.send(), e.onload = function() {
        cmplz_cookie_data = JSON.parse(e.response), sessionStorage.setItem("cmplz_cookie_data", JSON.stringify(cmplz_cookie_data)), cmplz_setup_clean_interval()
    }))
}

function cmplz_do_cleanup() {
    var e, t = ["preferences", "statistics", "marketing"];
    for (e in t) {
        var c = t[e];
        if (!cmplz_has_consent(c) && cmplz_cookie_data.hasOwnProperty(c)) {
            var n, o = cmplz_cookie_data[c];
            for (n in o)
                if (!cmplz_has_service_consent(n, c)) {
                    var a, i = o[n];
                    for (a in i) {
                        var l = i[a];
                        cmplz_clear_cookies(l), cmplz_clear_storage(l)
                    }
                }
        }
    }
}

function cmplz_setup_clean_interval() {
    !cmplz_cookie_data || cmplzCleanCookieInterval || (cmplz_do_cleanup(), cmplzCleanCookieInterval = setInterval(cmplz_do_cleanup, 1e3))
}

function cmplz_clear_storage(e) {
    "undefined" != typeof Storage && (localStorage.item && localStorage.removeItem(e), sessionStorage.item) && sessionStorage.removeItem(e)
}

function cmplz_load_manage_consent_container() {
    let t = document.querySelector(".cmplz-manage-consent-container");
    var c;
    t && ((c = new XMLHttpRequest).open("GET", complianz.url + "manage_consent_html?" + complianz.locale, !0), c.setRequestHeader("Content-type", "application/json"), c.send(), c.onload = function() {
        var e = JSON.parse(c.response);
        t.insertAdjacentHTML("beforeend", e), cmplz_sync_category_checkboxes();
        document.querySelector("#cmplz-manage-consent-container-nojavascript").style.display = "none", t.style.display = "block";
        e = new CustomEvent("cmplz_manage_consent_container_loaded");
        document.dispatchEvent(e)
    })
}

function cmplz_equals(e, t) {
    if (Array.isArray(e) || (e = Object.keys(e), t = Object.keys(t)), !e || !t) return !1;
    if (e.length != t.length) return !1;
    for (var c = 0, n = e.length; c < n; c++)
        if (e[c] instanceof Array && t[c] instanceof Array) {
            if (!cmplz_equals(e[c], t[c])) return !1
        } else if (e[c] != t[c]) return !1;
    return !0
}

function cmplzCopyAttributes(e, t) {
    return Array.from(e.attributes).forEach(e => {
        ["type", "data-service", "data-category", "async"].includes(e.nodeName) || t.setAttribute(e.nodeName, e.nodeValue)
    })
}
cmplz_add_event("keypress", ".cmplz-banner-slider label", function(e) {
    32 == (e.keyCode || e.which) && document.activeElement.click()
}), cmplz_add_event("keypress", ".cmplz-cookiebanner .cmplz-header .cmplz-close", function(e) {
    13 == (e.keyCode || e.which) && document.activeElement.click()
});
let cmplz_has_wp_video = document.querySelector(".cmplz-wp-video-shortcode"),
    cmplz_times_checked = 0;
void 0 !== window.jQuery && jQuery(document).ready(function(r) {
    var e;

    function t() {
        if (document.querySelector(".cmplz-wp-video-shortcode")) {
            var e, t, n, o = cmplz_accepted_categories(),
                a = cmplz_get_all_service_consents(),
                i = [];
            for (e in o)
                if (o.hasOwnProperty(e)) {
                    var l = o[e];
                    if ("functional" === l) break;
                    i.push(".cmplz-wp-video-shortcode[data-category=" + l + "]")
                }
            for (t in a) a.hasOwnProperty(t) && i.push(".cmplz-wp-video-shortcode[data-service=" + t + "]");
            n = i.join(",");
            let c = !1;
            0 < n.length && document.querySelectorAll(n).forEach(e => {
                c = !0, e.setAttribute("controls", "controls"), e.classList.add("wp-video-shortcode"), e.classList.add("cmplz-processed"), e.classList.remove("cmplz-wp-video-shortcode"), e.closest(".cmplz-wp-video").classList.remove("cmplz-wp-video");
                var t = e.closest(".wp-video").querySelector(".cmplz-blocked-content-notice");
                t && t.parentElement.removeChild(t), e.classList.remove("cmplz-blocked-content-container")
            }), c && (window.wp.mediaelement ? window.wp.mediaelement.initialize() : (n = {
                videoWidth: "100%",
                videoHeight: "100%",
                enableAutosize: !0
            }, r(".wp-video-shortcode").mediaelementplayer(n)))
        }
    }
    cmplz_has_wp_video && (document.addEventListener("cmplz_enable_category", function(e) {
        t()
    }), e = setInterval(function() {
        cmplz_times_checked += 1, document.querySelector(".cmplz-wp-video-shortcode") && cmplz_times_checked < 100 ? t() : clearInterval(e)
    }, 500)), document.querySelectorAll(".cmplz-video").forEach(e => {
        e = r(e);
        "function" == typeof e.parent().fitVids && e.parent().fitVids()
    }), r(document).on("cmplz_category_enabled", function(e) {
        document.querySelectorAll(".cmplz-video").forEach(e => {
            e = r(e);
            "function" == typeof e.parent().fitVids && e.parent().fitVids()
        })
    })
});
/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
    var t, e = location.hash.substring(1);
    /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
}, !1)