var Ft = Object.defineProperty;
var Ot = (a, e, t) => e in a ? Ft(a, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[e] = t;
var Me = (a, e, t) => Ot(a, typeof e != "symbol" ? e + "" : e, t);
import {X as Rt, s as ie, c as me, ao as et, ap as Ct, aq as Mt, v as $e, ar as At, d as Lt, E as xe, as as tt, at as Dt, au as zt, x as Pt, av as jt, y as Ae, Q as he, P as Se, a7 as Vt, aw as $t, Y as Bt, U as Wt, a1 as Kt, o as Q, g as Jt, b as S, a2 as Ut, m as L, a9 as qt, aa as Gt, ax as Qt, a as Z, n as st, e as _e, r as nt, F as it, i as fe, t as pe, ay as Ht, az as rt, aA as Yt, ae as Zt, ak as Xt, aB as es, _ as ts} from "./framework.DX1C7ho2.js";
import {u as ss, c as ns} from "./assets/chunks/theme.D9WTzb2l.js";
const is = {
    root: () => Rt( () => import("./assets/chunks/@localSearchIndexroot.C9v2XC1r.js"), [])
};
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var mt = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , Ne = mt.join(",")
  , gt = typeof Element > "u"
  , ae = gt ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , Fe = !gt && Element.prototype.getRootNode ? function(a) {
    var e;
    return a == null || (e = a.getRootNode) === null || e === void 0 ? void 0 : e.call(a)
}
: function(a) {
    return a == null ? void 0 : a.ownerDocument
}
  , Oe = function a(e, t) {
    var s;
    t === void 0 && (t = !0);
    var n = e == null || (s = e.getAttribute) === null || s === void 0 ? void 0 : s.call(e, "inert")
      , r = n === "" || n === "true"
      , i = r || t && e && a(e.parentNode);
    return i
}
  , rs = function(e) {
    var t, s = e == null || (t = e.getAttribute) === null || t === void 0 ? void 0 : t.call(e, "contenteditable");
    return s === "" || s === "true"
}
  , bt = function(e, t, s) {
    if (Oe(e))
        return [];
    var n = Array.prototype.slice.apply(e.querySelectorAll(Ne));
    return t && ae.call(e, Ne) && n.unshift(e),
    n = n.filter(s),
    n
}
  , yt = function a(e, t, s) {
    for (var n = [], r = Array.from(e); r.length; ) {
        var i = r.shift();
        if (!Oe(i, !1))
            if (i.tagName === "SLOT") {
                var o = i.assignedElements()
                  , l = o.length ? o : i.children
                  , c = a(l, !0, s);
                s.flatten ? n.push.apply(n, c) : n.push({
                    scopeParent: i,
                    candidates: c
                })
            } else {
                var h = ae.call(i, Ne);
                h && s.filter(i) && (t || !e.includes(i)) && n.push(i);
                var m = i.shadowRoot || typeof s.getShadowRoot == "function" && s.getShadowRoot(i)
                  , f = !Oe(m, !1) && (!s.shadowRootFilter || s.shadowRootFilter(i));
                if (m && f) {
                    var b = a(m === !0 ? i.children : m.children, !0, s);
                    s.flatten ? n.push.apply(n, b) : n.push({
                        scopeParent: i,
                        candidates: b
                    })
                } else
                    r.unshift.apply(r, i.children)
            }
    }
    return n
}
  , wt = function(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
}
  , re = function(e) {
    if (!e)
        throw new Error("No node provided");
    return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || rs(e)) && !wt(e) ? 0 : e.tabIndex
}
  , as = function(e, t) {
    var s = re(e);
    return s < 0 && t && !wt(e) ? 0 : s
}
  , os = function(e, t) {
    return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
}
  , xt = function(e) {
    return e.tagName === "INPUT"
}
  , ls = function(e) {
    return xt(e) && e.type === "hidden"
}
  , cs = function(e) {
    var t = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(s) {
        return s.tagName === "SUMMARY"
    });
    return t
}
  , us = function(e, t) {
    for (var s = 0; s < e.length; s++)
        if (e[s].checked && e[s].form === t)
            return e[s]
}
  , ds = function(e) {
    if (!e.name)
        return !0;
    var t = e.form || Fe(e), s = function(o) {
        return t.querySelectorAll('input[type="radio"][name="' + o + '"]')
    }, n;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        n = s(window.CSS.escape(e.name));
    else
        try {
            n = s(e.name)
        } catch (i) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message),
            !1
        }
    var r = us(n, e.form);
    return !r || r === e
}
  , hs = function(e) {
    return xt(e) && e.type === "radio"
}
  , fs = function(e) {
    return hs(e) && !ds(e)
}
  , ps = function(e) {
    var t, s = e && Fe(e), n = (t = s) === null || t === void 0 ? void 0 : t.host, r = !1;
    if (s && s !== e) {
        var i, o, l;
        for (r = !!((i = n) !== null && i !== void 0 && (o = i.ownerDocument) !== null && o !== void 0 && o.contains(n) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !r && n; ) {
            var c, h, m;
            s = Fe(n),
            n = (c = s) === null || c === void 0 ? void 0 : c.host,
            r = !!((h = n) !== null && h !== void 0 && (m = h.ownerDocument) !== null && m !== void 0 && m.contains(n))
        }
    }
    return r
}
  , at = function(e) {
    var t = e.getBoundingClientRect()
      , s = t.width
      , n = t.height;
    return s === 0 && n === 0
}
  , vs = function(e, t) {
    var s = t.displayCheck
      , n = t.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    var r = ae.call(e, "details>summary:first-of-type")
      , i = r ? e.parentElement : e;
    if (ae.call(i, "details:not([open]) *"))
        return !0;
    if (!s || s === "full" || s === "legacy-full") {
        if (typeof n == "function") {
            for (var o = e; e; ) {
                var l = e.parentElement
                  , c = Fe(e);
                if (l && !l.shadowRoot && n(l) === !0)
                    return at(e);
                e.assignedSlot ? e = e.assignedSlot : !l && c !== e.ownerDocument ? e = c.host : e = l
            }
            e = o
        }
        if (ps(e))
            return !e.getClientRects().length;
        if (s !== "legacy-full")
            return !0
    } else if (s === "non-zero-area")
        return at(e);
    return !1
}
  , ms = function(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
        for (var t = e.parentElement; t; ) {
            if (t.tagName === "FIELDSET" && t.disabled) {
                for (var s = 0; s < t.children.length; s++) {
                    var n = t.children.item(s);
                    if (n.tagName === "LEGEND")
                        return ae.call(t, "fieldset[disabled] *") ? !0 : !n.contains(e)
                }
                return !0
            }
            t = t.parentElement
        }
    return !1
}
  , Re = function(e, t) {
    return !(t.disabled || Oe(t) || ls(t) || vs(t, e) || cs(t) || ms(t))
}
  , Be = function(e, t) {
    return !(fs(t) || re(t) < 0 || !Re(e, t))
}
  , gs = function(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(t) || t >= 0)
}
  , bs = function a(e) {
    var t = []
      , s = [];
    return e.forEach(function(n, r) {
        var i = !!n.scopeParent
          , o = i ? n.scopeParent : n
          , l = as(o, i)
          , c = i ? a(n.candidates) : o;
        l === 0 ? i ? t.push.apply(t, c) : t.push(o) : s.push({
            documentOrder: r,
            tabIndex: l,
            item: n,
            isScope: i,
            content: c
        })
    }),
    s.sort(os).reduce(function(n, r) {
        return r.isScope ? n.push.apply(n, r.content) : n.push(r.content),
        n
    }, []).concat(t)
}
  , ys = function(e, t) {
    t = t || {};
    var s;
    return t.getShadowRoot ? s = yt([e], t.includeContainer, {
        filter: Be.bind(null, t),
        flatten: !1,
        getShadowRoot: t.getShadowRoot,
        shadowRootFilter: gs
    }) : s = bt(e, t.includeContainer, Be.bind(null, t)),
    bs(s)
}
  , ws = function(e, t) {
    t = t || {};
    var s;
    return t.getShadowRoot ? s = yt([e], t.includeContainer, {
        filter: Re.bind(null, t),
        flatten: !0,
        getShadowRoot: t.getShadowRoot
    }) : s = bt(e, t.includeContainer, Re.bind(null, t)),
    s
}
  , oe = function(e, t) {
    if (t = t || {},
    !e)
        throw new Error("No node provided");
    return ae.call(e, Ne) === !1 ? !1 : Be(t, e)
}
  , xs = mt.concat("iframe").join(",")
  , Le = function(e, t) {
    if (t = t || {},
    !e)
        throw new Error("No node provided");
    return ae.call(e, xs) === !1 ? !1 : Re(t, e)
};
/*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Ss(a, e, t) {
    return (e = Es(e))in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t,
    a
}
function ot(a, e) {
    var t = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(a);
        e && (s = s.filter(function(n) {
            return Object.getOwnPropertyDescriptor(a, n).enumerable
        })),
        t.push.apply(t, s)
    }
    return t
}
function lt(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ot(Object(t), !0).forEach(function(s) {
            Ss(a, s, t[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : ot(Object(t)).forEach(function(s) {
            Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s))
        })
    }
    return a
}
function _s(a, e) {
    if (typeof a != "object" || !a)
        return a;
    var t = a[Symbol.toPrimitive];
    if (t !== void 0) {
        var s = t.call(a, e || "default");
        if (typeof s != "object")
            return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(a)
}
function Es(a) {
    var e = _s(a, "string");
    return typeof e == "symbol" ? e : e + ""
}
var ct = {
    activateTrap: function(e, t) {
        if (e.length > 0) {
            var s = e[e.length - 1];
            s !== t && s.pause()
        }
        var n = e.indexOf(t);
        n === -1 || e.splice(n, 1),
        e.push(t)
    },
    deactivateTrap: function(e, t) {
        var s = e.indexOf(t);
        s !== -1 && e.splice(s, 1),
        e.length > 0 && e[e.length - 1].unpause()
    }
}
  , Ts = function(e) {
    return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function"
}
  , Is = function(e) {
    return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27
}
  , ge = function(e) {
    return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9
}
  , ks = function(e) {
    return ge(e) && !e.shiftKey
}
  , Ns = function(e) {
    return ge(e) && e.shiftKey
}
  , ut = function(e) {
    return setTimeout(e, 0)
}
  , dt = function(e, t) {
    var s = -1;
    return e.every(function(n, r) {
        return t(n) ? (s = r,
        !1) : !0
    }),
    s
}
  , ve = function(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        s[n - 1] = arguments[n];
    return typeof e == "function" ? e.apply(void 0, s) : e
}
  , Ee = function(e) {
    return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target
}
  , Fs = []
  , Os = function(e, t) {
    var s = (t == null ? void 0 : t.document) || document, n = (t == null ? void 0 : t.trapStack) || Fs, r = lt({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: ks,
        isKeyBackward: Ns
    }, t), i = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
    }, o, l = function(d, u, g) {
        return d && d[u] !== void 0 ? d[u] : r[g || u]
    }, c = function(d, u) {
        var g = typeof (u == null ? void 0 : u.composedPath) == "function" ? u.composedPath() : void 0;
        return i.containerGroups.findIndex(function(E) {
            var T = E.container
              , N = E.tabbableNodes;
            return T.contains(d) || (g == null ? void 0 : g.includes(T)) || N.find(function(O) {
                return O === d
            })
        })
    }, h = function(d) {
        var u = r[d];
        if (typeof u == "function") {
            for (var g = arguments.length, E = new Array(g > 1 ? g - 1 : 0), T = 1; T < g; T++)
                E[T - 1] = arguments[T];
            u = u.apply(void 0, E)
        }
        if (u === !0 && (u = void 0),
        !u) {
            if (u === void 0 || u === !1)
                return u;
            throw new Error("`".concat(d, "` was specified but was not a node, or did not return a node"))
        }
        var N = u;
        if (typeof u == "string" && (N = s.querySelector(u),
        !N))
            throw new Error("`".concat(d, "` as selector refers to no known node"));
        return N
    }, m = function() {
        var d = h("initialFocus");
        if (d === !1)
            return !1;
        if (d === void 0 || !Le(d, r.tabbableOptions))
            if (c(s.activeElement) >= 0)
                d = s.activeElement;
            else {
                var u = i.tabbableGroups[0]
                  , g = u && u.firstTabbableNode;
                d = g || h("fallbackFocus")
            }
        if (!d)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return d
    }, f = function() {
        if (i.containerGroups = i.containers.map(function(d) {
            var u = ys(d, r.tabbableOptions)
              , g = ws(d, r.tabbableOptions)
              , E = u.length > 0 ? u[0] : void 0
              , T = u.length > 0 ? u[u.length - 1] : void 0
              , N = g.find(function(v) {
                return oe(v)
            })
              , O = g.slice().reverse().find(function(v) {
                return oe(v)
            })
              , A = !!u.find(function(v) {
                return re(v) > 0
            });
            return {
                container: d,
                tabbableNodes: u,
                focusableNodes: g,
                posTabIndexesFound: A,
                firstTabbableNode: E,
                lastTabbableNode: T,
                firstDomTabbableNode: N,
                lastDomTabbableNode: O,
                nextTabbableNode: function(p) {
                    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                      , F = u.indexOf(p);
                    return F < 0 ? _ ? g.slice(g.indexOf(p) + 1).find(function(z) {
                        return oe(z)
                    }) : g.slice(0, g.indexOf(p)).reverse().find(function(z) {
                        return oe(z)
                    }) : u[F + (_ ? 1 : -1)]
                }
            }
        }),
        i.tabbableGroups = i.containerGroups.filter(function(d) {
            return d.tabbableNodes.length > 0
        }),
        i.tabbableGroups.length <= 0 && !h("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (i.containerGroups.find(function(d) {
            return d.posTabIndexesFound
        }) && i.containerGroups.length > 1)
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }, b = function(d) {
        var u = d.activeElement;
        if (u)
            return u.shadowRoot && u.shadowRoot.activeElement !== null ? b(u.shadowRoot) : u
    }, y = function(d) {
        if (d !== !1 && d !== b(document)) {
            if (!d || !d.focus) {
                y(m());
                return
            }
            d.focus({
                preventScroll: !!r.preventScroll
            }),
            i.mostRecentlyFocusedNode = d,
            Ts(d) && d.select()
        }
    }, x = function(d) {
        var u = h("setReturnFocus", d);
        return u || (u === !1 ? !1 : d)
    }, w = function(d) {
        var u = d.target
          , g = d.event
          , E = d.isBackward
          , T = E === void 0 ? !1 : E;
        u = u || Ee(g),
        f();
        var N = null;
        if (i.tabbableGroups.length > 0) {
            var O = c(u, g)
              , A = O >= 0 ? i.containerGroups[O] : void 0;
            if (O < 0)
                T ? N = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode : N = i.tabbableGroups[0].firstTabbableNode;
            else if (T) {
                var v = dt(i.tabbableGroups, function(j) {
                    var I = j.firstTabbableNode;
                    return u === I
                });
                if (v < 0 && (A.container === u || Le(u, r.tabbableOptions) && !oe(u, r.tabbableOptions) && !A.nextTabbableNode(u, !1)) && (v = O),
                v >= 0) {
                    var p = v === 0 ? i.tabbableGroups.length - 1 : v - 1
                      , _ = i.tabbableGroups[p];
                    N = re(u) >= 0 ? _.lastTabbableNode : _.lastDomTabbableNode
                } else
                    ge(g) || (N = A.nextTabbableNode(u, !1))
            } else {
                var F = dt(i.tabbableGroups, function(j) {
                    var I = j.lastTabbableNode;
                    return u === I
                });
                if (F < 0 && (A.container === u || Le(u, r.tabbableOptions) && !oe(u, r.tabbableOptions) && !A.nextTabbableNode(u)) && (F = O),
                F >= 0) {
                    var z = F === i.tabbableGroups.length - 1 ? 0 : F + 1
                      , P = i.tabbableGroups[z];
                    N = re(u) >= 0 ? P.firstTabbableNode : P.firstDomTabbableNode
                } else
                    ge(g) || (N = A.nextTabbableNode(u))
            }
        } else
            N = h("fallbackFocus");
        return N
    }, R = function(d) {
        var u = Ee(d);
        if (!(c(u, d) >= 0)) {
            if (ve(r.clickOutsideDeactivates, d)) {
                o.deactivate({
                    returnFocus: r.returnFocusOnDeactivate
                });
                return
            }
            ve(r.allowOutsideClick, d) || d.preventDefault()
        }
    }, C = function(d) {
        var u = Ee(d)
          , g = c(u, d) >= 0;
        if (g || u instanceof Document)
            g && (i.mostRecentlyFocusedNode = u);
        else {
            d.stopImmediatePropagation();
            var E, T = !0;
            if (i.mostRecentlyFocusedNode)
                if (re(i.mostRecentlyFocusedNode) > 0) {
                    var N = c(i.mostRecentlyFocusedNode)
                      , O = i.containerGroups[N].tabbableNodes;
                    if (O.length > 0) {
                        var A = O.findIndex(function(v) {
                            return v === i.mostRecentlyFocusedNode
                        });
                        A >= 0 && (r.isKeyForward(i.recentNavEvent) ? A + 1 < O.length && (E = O[A + 1],
                        T = !1) : A - 1 >= 0 && (E = O[A - 1],
                        T = !1))
                    }
                } else
                    i.containerGroups.some(function(v) {
                        return v.tabbableNodes.some(function(p) {
                            return re(p) > 0
                        })
                    }) || (T = !1);
            else
                T = !1;
            T && (E = w({
                target: i.mostRecentlyFocusedNode,
                isBackward: r.isKeyBackward(i.recentNavEvent)
            })),
            y(E || i.mostRecentlyFocusedNode || m())
        }
        i.recentNavEvent = void 0
    }, J = function(d) {
        var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        i.recentNavEvent = d;
        var g = w({
            event: d,
            isBackward: u
        });
        g && (ge(d) && d.preventDefault(),
        y(g))
    }, H = function(d) {
        (r.isKeyForward(d) || r.isKeyBackward(d)) && J(d, r.isKeyBackward(d))
    }, W = function(d) {
        Is(d) && ve(r.escapeDeactivates, d) !== !1 && (d.preventDefault(),
        o.deactivate())
    }, V = function(d) {
        var u = Ee(d);
        c(u, d) >= 0 || ve(r.clickOutsideDeactivates, d) || ve(r.allowOutsideClick, d) || (d.preventDefault(),
        d.stopImmediatePropagation())
    }, $ = function() {
        if (i.active)
            return ct.activateTrap(n, o),
            i.delayInitialFocusTimer = r.delayInitialFocus ? ut(function() {
                y(m())
            }) : y(m()),
            s.addEventListener("focusin", C, !0),
            s.addEventListener("mousedown", R, {
                capture: !0,
                passive: !1
            }),
            s.addEventListener("touchstart", R, {
                capture: !0,
                passive: !1
            }),
            s.addEventListener("click", V, {
                capture: !0,
                passive: !1
            }),
            s.addEventListener("keydown", H, {
                capture: !0,
                passive: !1
            }),
            s.addEventListener("keydown", W),
            o
    }, be = function() {
        if (i.active)
            return s.removeEventListener("focusin", C, !0),
            s.removeEventListener("mousedown", R, !0),
            s.removeEventListener("touchstart", R, !0),
            s.removeEventListener("click", V, !0),
            s.removeEventListener("keydown", H, !0),
            s.removeEventListener("keydown", W),
            o
    }, M = function(d) {
        var u = d.some(function(g) {
            var E = Array.from(g.removedNodes);
            return E.some(function(T) {
                return T === i.mostRecentlyFocusedNode
            })
        });
        u && y(m())
    }, U = typeof window < "u" && "MutationObserver"in window ? new MutationObserver(M) : void 0, q = function() {
        U && (U.disconnect(),
        i.active && !i.paused && i.containers.map(function(d) {
            U.observe(d, {
                subtree: !0,
                childList: !0
            })
        }))
    };
    return o = {
        get active() {
            return i.active
        },
        get paused() {
            return i.paused
        },
        activate: function(d) {
            if (i.active)
                return this;
            var u = l(d, "onActivate")
              , g = l(d, "onPostActivate")
              , E = l(d, "checkCanFocusTrap");
            E || f(),
            i.active = !0,
            i.paused = !1,
            i.nodeFocusedBeforeActivation = s.activeElement,
            u == null || u();
            var T = function() {
                E && f(),
                $(),
                q(),
                g == null || g()
            };
            return E ? (E(i.containers.concat()).then(T, T),
            this) : (T(),
            this)
        },
        deactivate: function(d) {
            if (!i.active)
                return this;
            var u = lt({
                onDeactivate: r.onDeactivate,
                onPostDeactivate: r.onPostDeactivate,
                checkCanReturnFocus: r.checkCanReturnFocus
            }, d);
            clearTimeout(i.delayInitialFocusTimer),
            i.delayInitialFocusTimer = void 0,
            be(),
            i.active = !1,
            i.paused = !1,
            q(),
            ct.deactivateTrap(n, o);
            var g = l(u, "onDeactivate")
              , E = l(u, "onPostDeactivate")
              , T = l(u, "checkCanReturnFocus")
              , N = l(u, "returnFocus", "returnFocusOnDeactivate");
            g == null || g();
            var O = function() {
                ut(function() {
                    N && y(x(i.nodeFocusedBeforeActivation)),
                    E == null || E()
                })
            };
            return N && T ? (T(x(i.nodeFocusedBeforeActivation)).then(O, O),
            this) : (O(),
            this)
        },
        pause: function(d) {
            if (i.paused || !i.active)
                return this;
            var u = l(d, "onPause")
              , g = l(d, "onPostPause");
            return i.paused = !0,
            u == null || u(),
            be(),
            q(),
            g == null || g(),
            this
        },
        unpause: function(d) {
            if (!i.paused || !i.active)
                return this;
            var u = l(d, "onUnpause")
              , g = l(d, "onPostUnpause");
            return i.paused = !1,
            u == null || u(),
            f(),
            $(),
            q(),
            g == null || g(),
            this
        },
        updateContainerElements: function(d) {
            var u = [].concat(d).filter(Boolean);
            return i.containers = u.map(function(g) {
                return typeof g == "string" ? s.querySelector(g) : g
            }),
            i.active && f(),
            q(),
            this
        }
    },
    o.updateContainerElements(e),
    o
};
function Rs(a, e={}) {
    let t;
    const {immediate: s, ...n} = e
      , r = ie(!1)
      , i = ie(!1)
      , o = f => t && t.activate(f)
      , l = f => t && t.deactivate(f)
      , c = () => {
        t && (t.pause(),
        i.value = !0)
    }
      , h = () => {
        t && (t.unpause(),
        i.value = !1)
    }
      , m = me( () => {
        const f = et(a);
        return (Array.isArray(f) ? f : [f]).map(b => {
            const y = et(b);
            return typeof y == "string" ? y : Ct(y)
        }
        ).filter(Mt)
    }
    );
    return $e(m, f => {
        f.length && (t = Os(f, {
            ...n,
            onActivate() {
                r.value = !0,
                e.onActivate && e.onActivate()
            },
            onDeactivate() {
                r.value = !1,
                e.onDeactivate && e.onDeactivate()
            }
        }),
        s && o())
    }
    , {
        flush: "post"
    }),
    At( () => l()),
    {
        hasFocus: r,
        isPaused: i,
        activate: o,
        deactivate: l,
        pause: c,
        unpause: h
    }
}
class ce {
    constructor(e, t=!0, s=[], n=5e3) {
        this.ctx = e,
        this.iframes = t,
        this.exclude = s,
        this.iframesTimeout = n
    }
    static matches(e, t) {
        const s = typeof t == "string" ? [t] : t
          , n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
        if (n) {
            let r = !1;
            return s.every(i => n.call(e, i) ? (r = !0,
            !1) : !0),
            r
        } else
            return !1
    }
    getContexts() {
        let e, t = [];
        return typeof this.ctx > "u" || !this.ctx ? e = [] : NodeList.prototype.isPrototypeOf(this.ctx) ? e = Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? e = this.ctx : typeof this.ctx == "string" ? e = Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : e = [this.ctx],
        e.forEach(s => {
            const n = t.filter(r => r.contains(s)).length > 0;
            t.indexOf(s) === -1 && !n && t.push(s)
        }
        ),
        t
    }
    getIframeContents(e, t, s= () => {}
    ) {
        let n;
        try {
            const r = e.contentWindow;
            if (n = r.document,
            !r || !n)
                throw new Error("iframe inaccessible")
        } catch {
            s()
        }
        n && t(n)
    }
    isIframeBlank(e) {
        const t = "about:blank"
          , s = e.getAttribute("src").trim();
        return e.contentWindow.location.href === t && s !== t && s
    }
    observeIframeLoad(e, t, s) {
        let n = !1
          , r = null;
        const i = () => {
            if (!n) {
                n = !0,
                clearTimeout(r);
                try {
                    this.isIframeBlank(e) || (e.removeEventListener("load", i),
                    this.getIframeContents(e, t, s))
                } catch {
                    s()
                }
            }
        }
        ;
        e.addEventListener("load", i),
        r = setTimeout(i, this.iframesTimeout)
    }
    onIframeReady(e, t, s) {
        try {
            e.contentWindow.document.readyState === "complete" ? this.isIframeBlank(e) ? this.observeIframeLoad(e, t, s) : this.getIframeContents(e, t, s) : this.observeIframeLoad(e, t, s)
        } catch {
            s()
        }
    }
    waitForIframes(e, t) {
        let s = 0;
        this.forEachIframe(e, () => !0, n => {
            s++,
            this.waitForIframes(n.querySelector("html"), () => {
                --s || t()
            }
            )
        }
        , n => {
            n || t()
        }
        )
    }
    forEachIframe(e, t, s, n= () => {}
    ) {
        let r = e.querySelectorAll("iframe")
          , i = r.length
          , o = 0;
        r = Array.prototype.slice.call(r);
        const l = () => {
            --i <= 0 && n(o)
        }
        ;
        i || l(),
        r.forEach(c => {
            ce.matches(c, this.exclude) ? l() : this.onIframeReady(c, h => {
                t(c) && (o++,
                s(h)),
                l()
            }
            , l)
        }
        )
    }
    createIterator(e, t, s) {
        return document.createNodeIterator(e, t, s, !1)
    }
    createInstanceOnIframe(e) {
        return new ce(e.querySelector("html"),this.iframes)
    }
    compareNodeIframe(e, t, s) {
        const n = e.compareDocumentPosition(s)
          , r = Node.DOCUMENT_POSITION_PRECEDING;
        if (n & r)
            if (t !== null) {
                const i = t.compareDocumentPosition(s)
                  , o = Node.DOCUMENT_POSITION_FOLLOWING;
                if (i & o)
                    return !0
            } else
                return !0;
        return !1
    }
    getIteratorNode(e) {
        const t = e.previousNode();
        let s;
        return t === null ? s = e.nextNode() : s = e.nextNode() && e.nextNode(),
        {
            prevNode: t,
            node: s
        }
    }
    checkIframeFilter(e, t, s, n) {
        let r = !1
          , i = !1;
        return n.forEach( (o, l) => {
            o.val === s && (r = l,
            i = o.handled)
        }
        ),
        this.compareNodeIframe(e, t, s) ? (r === !1 && !i ? n.push({
            val: s,
            handled: !0
        }) : r !== !1 && !i && (n[r].handled = !0),
        !0) : (r === !1 && n.push({
            val: s,
            handled: !1
        }),
        !1)
    }
    handleOpenIframes(e, t, s, n) {
        e.forEach(r => {
            r.handled || this.getIframeContents(r.val, i => {
                this.createInstanceOnIframe(i).forEachNode(t, s, n)
            }
            )
        }
        )
    }
    iterateThroughNodes(e, t, s, n, r) {
        const i = this.createIterator(t, e, n);
        let o = [], l = [], c, h, m = () => ({prevNode: h, node: c} = this.getIteratorNode(i),
        c);
        for (; m(); )
            this.iframes && this.forEachIframe(t, f => this.checkIframeFilter(c, h, f, o), f => {
                this.createInstanceOnIframe(f).forEachNode(e, b => l.push(b), n)
            }
            ),
            l.push(c);
        l.forEach(f => {
            s(f)
        }
        ),
        this.iframes && this.handleOpenIframes(o, e, s, n),
        r()
    }
    forEachNode(e, t, s, n= () => {}
    ) {
        const r = this.getContexts();
        let i = r.length;
        i || n(),
        r.forEach(o => {
            const l = () => {
                this.iterateThroughNodes(e, o, t, s, () => {
                    --i <= 0 && n()
                }
                )
            }
            ;
            this.iframes ? this.waitForIframes(o, l) : l()
        }
        )
    }
}
let Cs = class {
    constructor(e) {
        this.ctx = e,
        this.ie = !1;
        const t = window.navigator.userAgent;
        (t.indexOf("MSIE") > -1 || t.indexOf("Trident") > -1) && (this.ie = !0)
    }
    set opt(e) {
        this._opt = Object.assign({}, {
            element: "",
            className: "",
            exclude: [],
            iframes: !1,
            iframesTimeout: 5e3,
            separateWordSearch: !0,
            diacritics: !0,
            synonyms: {},
            accuracy: "partially",
            acrossElements: !1,
            caseSensitive: !1,
            ignoreJoiners: !1,
            ignoreGroups: 0,
            ignorePunctuation: [],
            wildcards: "disabled",
            each: () => {}
            ,
            noMatch: () => {}
            ,
            filter: () => !0,
            done: () => {}
            ,
            debug: !1,
            log: window.console
        }, e)
    }
    get opt() {
        return this._opt
    }
    get iterator() {
        return new ce(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)
    }
    log(e, t="debug") {
        const s = this.opt.log;
        this.opt.debug && typeof s == "object" && typeof s[t] == "function" && s[t](`mark.js: ${e}`)
    }
    escapeStr(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }
    createRegExp(e) {
        return this.opt.wildcards !== "disabled" && (e = this.setupWildcardsRegExp(e)),
        e = this.escapeStr(e),
        Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)),
        (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)),
        this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
        e = this.createMergedBlanksRegExp(e),
        (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)),
        this.opt.wildcards !== "disabled" && (e = this.createWildcardsRegExp(e)),
        e = this.createAccuracyRegExp(e),
        e
    }
    createSynonymsRegExp(e) {
        const t = this.opt.synonyms
          , s = this.opt.caseSensitive ? "" : "i"
          , n = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
        for (let r in t)
            if (t.hasOwnProperty(r)) {
                const i = t[r]
                  , o = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(r) : this.escapeStr(r)
                  , l = this.opt.wildcards !== "disabled" ? this.setupWildcardsRegExp(i) : this.escapeStr(i);
                o !== "" && l !== "" && (e = e.replace(new RegExp(`(${this.escapeStr(o)}|${this.escapeStr(l)})`,`gm${s}`), n + `(${this.processSynomyms(o)}|${this.processSynomyms(l)})` + n))
            }
        return e
    }
    processSynomyms(e) {
        return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)),
        e
    }
    setupWildcardsRegExp(e) {
        return e = e.replace(/(?:\\)*\?/g, t => t.charAt(0) === "\\" ? "?" : ""),
        e.replace(/(?:\\)*\*/g, t => t.charAt(0) === "\\" ? "*" : "")
    }
    createWildcardsRegExp(e) {
        let t = this.opt.wildcards === "withSpaces";
        return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*")
    }
    setupIgnoreJoinersRegExp(e) {
        return e.replace(/[^(|)\\]/g, (t, s, n) => {
            let r = n.charAt(s + 1);
            return /[(|)\\]/.test(r) || r === "" ? t : t + "\0"
        }
        )
    }
    createJoinersRegExp(e) {
        let t = [];
        const s = this.opt.ignorePunctuation;
        return Array.isArray(s) && s.length && t.push(this.escapeStr(s.join(""))),
        this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"),
        t.length ? e.split(/\u0000+/).join(`[${t.join("")}]*`) : e
    }
    createDiacriticsRegExp(e) {
        const t = this.opt.caseSensitive ? "" : "i"
          , s = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"];
        let n = [];
        return e.split("").forEach(r => {
            s.every(i => {
                if (i.indexOf(r) !== -1) {
                    if (n.indexOf(i) > -1)
                        return !1;
                    e = e.replace(new RegExp(`[${i}]`,`gm${t}`), `[${i}]`),
                    n.push(i)
                }
                return !0
            }
            )
        }
        ),
        e
    }
    createMergedBlanksRegExp(e) {
        return e.replace(/[\s]+/gmi, "[\\s]+")
    }
    createAccuracyRegExp(e) {
        const t = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿";
        let s = this.opt.accuracy
          , n = typeof s == "string" ? s : s.value
          , r = typeof s == "string" ? [] : s.limiters
          , i = "";
        switch (r.forEach(o => {
            i += `|${this.escapeStr(o)}`
        }
        ),
        n) {
        case "partially":
        default:
            return `()(${e})`;
        case "complementary":
            return i = "\\s" + (i || this.escapeStr(t)),
            `()([^${i}]*${e}[^${i}]*)`;
        case "exactly":
            return `(^|\\s${i})(${e})(?=$|\\s${i})`
        }
    }
    getSeparatedKeywords(e) {
        let t = [];
        return e.forEach(s => {
            this.opt.separateWordSearch ? s.split(" ").forEach(n => {
                n.trim() && t.indexOf(n) === -1 && t.push(n)
            }
            ) : s.trim() && t.indexOf(s) === -1 && t.push(s)
        }
        ),
        {
            keywords: t.sort( (s, n) => n.length - s.length),
            length: t.length
        }
    }
    isNumeric(e) {
        return Number(parseFloat(e)) == e
    }
    checkRanges(e) {
        if (!Array.isArray(e) || Object.prototype.toString.call(e[0]) !== "[object Object]")
            return this.log("markRanges() will only accept an array of objects"),
            this.opt.noMatch(e),
            [];
        const t = [];
        let s = 0;
        return e.sort( (n, r) => n.start - r.start).forEach(n => {
            let {start: r, end: i, valid: o} = this.callNoMatchOnInvalidRanges(n, s);
            o && (n.start = r,
            n.length = i - r,
            t.push(n),
            s = i)
        }
        ),
        t
    }
    callNoMatchOnInvalidRanges(e, t) {
        let s, n, r = !1;
        return e && typeof e.start < "u" ? (s = parseInt(e.start, 10),
        n = s + parseInt(e.length, 10),
        this.isNumeric(e.start) && this.isNumeric(e.length) && n - t > 0 && n - s > 0 ? r = !0 : (this.log(`Ignoring invalid or overlapping range: ${JSON.stringify(e)}`),
        this.opt.noMatch(e))) : (this.log(`Ignoring invalid range: ${JSON.stringify(e)}`),
        this.opt.noMatch(e)),
        {
            start: s,
            end: n,
            valid: r
        }
    }
    checkWhitespaceRanges(e, t, s) {
        let n, r = !0, i = s.length, o = t - i, l = parseInt(e.start, 10) - o;
        return l = l > i ? i : l,
        n = l + parseInt(e.length, 10),
        n > i && (n = i,
        this.log(`End range automatically set to the max value of ${i}`)),
        l < 0 || n - l < 0 || l > i || n > i ? (r = !1,
        this.log(`Invalid range: ${JSON.stringify(e)}`),
        this.opt.noMatch(e)) : s.substring(l, n).replace(/\s+/g, "") === "" && (r = !1,
        this.log("Skipping whitespace only range: " + JSON.stringify(e)),
        this.opt.noMatch(e)),
        {
            start: l,
            end: n,
            valid: r
        }
    }
    getTextNodes(e) {
        let t = ""
          , s = [];
        this.iterator.forEachNode(NodeFilter.SHOW_TEXT, n => {
            s.push({
                start: t.length,
                end: (t += n.textContent).length,
                node: n
            })
        }
        , n => this.matchesExclude(n.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT, () => {
            e({
                value: t,
                nodes: s
            })
        }
        )
    }
    matchesExclude(e) {
        return ce.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"]))
    }
    wrapRangeInTextNode(e, t, s) {
        const n = this.opt.element ? this.opt.element : "mark"
          , r = e.splitText(t)
          , i = r.splitText(s - t);
        let o = document.createElement(n);
        return o.setAttribute("data-markjs", "true"),
        this.opt.className && o.setAttribute("class", this.opt.className),
        o.textContent = r.textContent,
        r.parentNode.replaceChild(o, r),
        i
    }
    wrapRangeInMappedTextNode(e, t, s, n, r) {
        e.nodes.every( (i, o) => {
            const l = e.nodes[o + 1];
            if (typeof l > "u" || l.start > t) {
                if (!n(i.node))
                    return !1;
                const c = t - i.start
                  , h = (s > i.end ? i.end : s) - i.start
                  , m = e.value.substr(0, i.start)
                  , f = e.value.substr(h + i.start);
                if (i.node = this.wrapRangeInTextNode(i.node, c, h),
                e.value = m + f,
                e.nodes.forEach( (b, y) => {
                    y >= o && (e.nodes[y].start > 0 && y !== o && (e.nodes[y].start -= h),
                    e.nodes[y].end -= h)
                }
                ),
                s -= h,
                r(i.node.previousSibling, i.start),
                s > i.end)
                    t = i.end;
                else
                    return !1
            }
            return !0
        }
        )
    }
    wrapMatches(e, t, s, n, r) {
        const i = t === 0 ? 0 : t + 1;
        this.getTextNodes(o => {
            o.nodes.forEach(l => {
                l = l.node;
                let c;
                for (; (c = e.exec(l.textContent)) !== null && c[i] !== ""; ) {
                    if (!s(c[i], l))
                        continue;
                    let h = c.index;
                    if (i !== 0)
                        for (let m = 1; m < i; m++)
                            h += c[m].length;
                    l = this.wrapRangeInTextNode(l, h, h + c[i].length),
                    n(l.previousSibling),
                    e.lastIndex = 0
                }
            }
            ),
            r()
        }
        )
    }
    wrapMatchesAcrossElements(e, t, s, n, r) {
        const i = t === 0 ? 0 : t + 1;
        this.getTextNodes(o => {
            let l;
            for (; (l = e.exec(o.value)) !== null && l[i] !== ""; ) {
                let c = l.index;
                if (i !== 0)
                    for (let m = 1; m < i; m++)
                        c += l[m].length;
                const h = c + l[i].length;
                this.wrapRangeInMappedTextNode(o, c, h, m => s(l[i], m), (m, f) => {
                    e.lastIndex = f,
                    n(m)
                }
                )
            }
            r()
        }
        )
    }
    wrapRangeFromIndex(e, t, s, n) {
        this.getTextNodes(r => {
            const i = r.value.length;
            e.forEach( (o, l) => {
                let {start: c, end: h, valid: m} = this.checkWhitespaceRanges(o, i, r.value);
                m && this.wrapRangeInMappedTextNode(r, c, h, f => t(f, o, r.value.substring(c, h), l), f => {
                    s(f, o)
                }
                )
            }
            ),
            n()
        }
        )
    }
    unwrapMatches(e) {
        const t = e.parentNode;
        let s = document.createDocumentFragment();
        for (; e.firstChild; )
            s.appendChild(e.removeChild(e.firstChild));
        t.replaceChild(s, e),
        this.ie ? this.normalizeTextNode(t) : t.normalize()
    }
    normalizeTextNode(e) {
        if (e) {
            if (e.nodeType === 3)
                for (; e.nextSibling && e.nextSibling.nodeType === 3; )
                    e.nodeValue += e.nextSibling.nodeValue,
                    e.parentNode.removeChild(e.nextSibling);
            else
                this.normalizeTextNode(e.firstChild);
            this.normalizeTextNode(e.nextSibling)
        }
    }
    markRegExp(e, t) {
        this.opt = t,
        this.log(`Searching with expression "${e}"`);
        let s = 0
          , n = "wrapMatches";
        const r = i => {
            s++,
            this.opt.each(i)
        }
        ;
        this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
        this[n](e, this.opt.ignoreGroups, (i, o) => this.opt.filter(o, i, s), r, () => {
            s === 0 && this.opt.noMatch(e),
            this.opt.done(s)
        }
        )
    }
    mark(e, t) {
        this.opt = t;
        let s = 0
          , n = "wrapMatches";
        const {keywords: r, length: i} = this.getSeparatedKeywords(typeof e == "string" ? [e] : e)
          , o = this.opt.caseSensitive ? "" : "i"
          , l = c => {
            let h = new RegExp(this.createRegExp(c),`gm${o}`)
              , m = 0;
            this.log(`Searching with expression "${h}"`),
            this[n](h, 1, (f, b) => this.opt.filter(b, c, s, m), f => {
                m++,
                s++,
                this.opt.each(f)
            }
            , () => {
                m === 0 && this.opt.noMatch(c),
                r[i - 1] === c ? this.opt.done(s) : l(r[r.indexOf(c) + 1])
            }
            )
        }
        ;
        this.opt.acrossElements && (n = "wrapMatchesAcrossElements"),
        i === 0 ? this.opt.done(s) : l(r[0])
    }
    markRanges(e, t) {
        this.opt = t;
        let s = 0
          , n = this.checkRanges(e);
        n && n.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(n)),
        this.wrapRangeFromIndex(n, (r, i, o, l) => this.opt.filter(r, i, o, l), (r, i) => {
            s++,
            this.opt.each(r, i)
        }
        , () => {
            this.opt.done(s)
        }
        )) : this.opt.done(s)
    }
    unmark(e) {
        this.opt = e;
        let t = this.opt.element ? this.opt.element : "*";
        t += "[data-markjs]",
        this.opt.className && (t += `.${this.opt.className}`),
        this.log(`Removal selector "${t}"`),
        this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, s => {
            this.unwrapMatches(s)
        }
        , s => {
            const n = ce.matches(s, t)
              , r = this.matchesExclude(s);
            return !n || r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        }
        , this.opt.done)
    }
}
;
function Ms(a) {
    const e = new Cs(a);
    return this.mark = (t, s) => (e.mark(t, s),
    this),
    this.markRegExp = (t, s) => (e.markRegExp(t, s),
    this),
    this.markRanges = (t, s) => (e.markRanges(t, s),
    this),
    this.unmark = t => (e.unmark(t),
    this),
    this
}
function ke(a, e, t, s) {
    function n(r) {
        return r instanceof t ? r : new t(function(i) {
            i(r)
        }
        )
    }
    return new (t || (t = Promise))(function(r, i) {
        function o(h) {
            try {
                c(s.next(h))
            } catch (m) {
                i(m)
            }
        }
        function l(h) {
            try {
                c(s.throw(h))
            } catch (m) {
                i(m)
            }
        }
        function c(h) {
            h.done ? r(h.value) : n(h.value).then(o, l)
        }
        c((s = s.apply(a, [])).next())
    }
    )
}
const As = "ENTRIES"
  , St = "KEYS"
  , _t = "VALUES"
  , D = "";
class De {
    constructor(e, t) {
        const s = e._tree
          , n = Array.from(s.keys());
        this.set = e,
        this._type = t,
        this._path = n.length > 0 ? [{
            node: s,
            keys: n
        }] : []
    }
    next() {
        const e = this.dive();
        return this.backtrack(),
        e
    }
    dive() {
        if (this._path.length === 0)
            return {
                done: !0,
                value: void 0
            };
        const {node: e, keys: t} = le(this._path);
        if (le(t) === D)
            return {
                done: !1,
                value: this.result()
            };
        const s = e.get(le(t));
        return this._path.push({
            node: s,
            keys: Array.from(s.keys())
        }),
        this.dive()
    }
    backtrack() {
        if (this._path.length === 0)
            return;
        const e = le(this._path).keys;
        e.pop(),
        !(e.length > 0) && (this._path.pop(),
        this.backtrack())
    }
    key() {
        return this.set._prefix + this._path.map( ({keys: e}) => le(e)).filter(e => e !== D).join("")
    }
    value() {
        return le(this._path).node.get(D)
    }
    result() {
        switch (this._type) {
        case _t:
            return this.value();
        case St:
            return this.key();
        default:
            return [this.key(), this.value()]
        }
    }
    [Symbol.iterator]() {
        return this
    }
}
const le = a => a[a.length - 1]
  , Ls = (a, e, t) => {
    const s = new Map;
    if (e === void 0)
        return s;
    const n = e.length + 1
      , r = n + t
      , i = new Uint8Array(r * n).fill(t + 1);
    for (let o = 0; o < n; ++o)
        i[o] = o;
    for (let o = 1; o < r; ++o)
        i[o * n] = o;
    return Et(a, e, t, s, i, 1, n, ""),
    s
}
  , Et = (a, e, t, s, n, r, i, o) => {
    const l = r * i;
    e: for (const c of a.keys())
        if (c === D) {
            const h = n[l - 1];
            h <= t && s.set(o, [a.get(c), h])
        } else {
            let h = r;
            for (let m = 0; m < c.length; ++m,
            ++h) {
                const f = c[m]
                  , b = i * h
                  , y = b - i;
                let x = n[b];
                const w = Math.max(0, h - t - 1)
                  , R = Math.min(i - 1, h + t);
                for (let C = w; C < R; ++C) {
                    const J = f !== e[C]
                      , H = n[y + C] + +J
                      , W = n[y + C + 1] + 1
                      , V = n[b + C] + 1
                      , $ = n[b + C + 1] = Math.min(H, W, V);
                    $ < x && (x = $)
                }
                if (x > t)
                    continue e
            }
            Et(a.get(c), e, t, s, n, h, i, o + c)
        }
}
;
class X {
    constructor(e=new Map, t="") {
        this._size = void 0,
        this._tree = e,
        this._prefix = t
    }
    atPrefix(e) {
        if (!e.startsWith(this._prefix))
            throw new Error("Mismatched prefix");
        const [t,s] = Ce(this._tree, e.slice(this._prefix.length));
        if (t === void 0) {
            const [n,r] = Ue(s);
            for (const i of n.keys())
                if (i !== D && i.startsWith(r)) {
                    const o = new Map;
                    return o.set(i.slice(r.length), n.get(i)),
                    new X(o,e)
                }
        }
        return new X(t,e)
    }
    clear() {
        this._size = void 0,
        this._tree.clear()
    }
    delete(e) {
        return this._size = void 0,
        Ds(this._tree, e)
    }
    entries() {
        return new De(this,As)
    }
    forEach(e) {
        for (const [t,s] of this)
            e(t, s, this)
    }
    fuzzyGet(e, t) {
        return Ls(this._tree, e, t)
    }
    get(e) {
        const t = We(this._tree, e);
        return t !== void 0 ? t.get(D) : void 0
    }
    has(e) {
        const t = We(this._tree, e);
        return t !== void 0 && t.has(D)
    }
    keys() {
        return new De(this,St)
    }
    set(e, t) {
        if (typeof e != "string")
            throw new Error("key must be a string");
        return this._size = void 0,
        ze(this._tree, e).set(D, t),
        this
    }
    get size() {
        if (this._size)
            return this._size;
        this._size = 0;
        const e = this.entries();
        for (; !e.next().done; )
            this._size += 1;
        return this._size
    }
    update(e, t) {
        if (typeof e != "string")
            throw new Error("key must be a string");
        this._size = void 0;
        const s = ze(this._tree, e);
        return s.set(D, t(s.get(D))),
        this
    }
    fetch(e, t) {
        if (typeof e != "string")
            throw new Error("key must be a string");
        this._size = void 0;
        const s = ze(this._tree, e);
        let n = s.get(D);
        return n === void 0 && s.set(D, n = t()),
        n
    }
    values() {
        return new De(this,_t)
    }
    [Symbol.iterator]() {
        return this.entries()
    }
    static from(e) {
        const t = new X;
        for (const [s,n] of e)
            t.set(s, n);
        return t
    }
    static fromObject(e) {
        return X.from(Object.entries(e))
    }
}
const Ce = (a, e, t=[]) => {
    if (e.length === 0 || a == null)
        return [a, t];
    for (const s of a.keys())
        if (s !== D && e.startsWith(s))
            return t.push([a, s]),
            Ce(a.get(s), e.slice(s.length), t);
    return t.push([a, e]),
    Ce(void 0, "", t)
}
  , We = (a, e) => {
    if (e.length === 0 || a == null)
        return a;
    for (const t of a.keys())
        if (t !== D && e.startsWith(t))
            return We(a.get(t), e.slice(t.length))
}
  , ze = (a, e) => {
    const t = e.length;
    e: for (let s = 0; a && s < t; ) {
        for (const r of a.keys())
            if (r !== D && e[s] === r[0]) {
                const i = Math.min(t - s, r.length);
                let o = 1;
                for (; o < i && e[s + o] === r[o]; )
                    ++o;
                const l = a.get(r);
                if (o === r.length)
                    a = l;
                else {
                    const c = new Map;
                    c.set(r.slice(o), l),
                    a.set(e.slice(s, s + o), c),
                    a.delete(r),
                    a = c
                }
                s += o;
                continue e
            }
        const n = new Map;
        return a.set(e.slice(s), n),
        n
    }
    return a
}
  , Ds = (a, e) => {
    const [t,s] = Ce(a, e);
    if (t !== void 0) {
        if (t.delete(D),
        t.size === 0)
            Tt(s);
        else if (t.size === 1) {
            const [n,r] = t.entries().next().value;
            It(s, n, r)
        }
    }
}
  , Tt = a => {
    if (a.length === 0)
        return;
    const [e,t] = Ue(a);
    if (e.delete(t),
    e.size === 0)
        Tt(a.slice(0, -1));
    else if (e.size === 1) {
        const [s,n] = e.entries().next().value;
        s !== D && It(a.slice(0, -1), s, n)
    }
}
  , It = (a, e, t) => {
    if (a.length === 0)
        return;
    const [s,n] = Ue(a);
    s.set(n + e, t),
    s.delete(n)
}
  , Ue = a => a[a.length - 1]
  , qe = "or"
  , kt = "and"
  , zs = "and_not";
class ue {
    constructor(e) {
        if ((e == null ? void 0 : e.fields) == null)
            throw new Error('MiniSearch: option "fields" must be provided');
        const t = e.autoVacuum == null || e.autoVacuum === !0 ? Ve : e.autoVacuum;
        this._options = Object.assign(Object.assign(Object.assign({}, je), e), {
            autoVacuum: t,
            searchOptions: Object.assign(Object.assign({}, ht), e.searchOptions || {}),
            autoSuggestOptions: Object.assign(Object.assign({}, Bs), e.autoSuggestOptions || {})
        }),
        this._index = new X,
        this._documentCount = 0,
        this._documentIds = new Map,
        this._idToShortId = new Map,
        this._fieldIds = {},
        this._fieldLength = new Map,
        this._avgFieldLength = [],
        this._nextId = 0,
        this._storedFields = new Map,
        this._dirtCount = 0,
        this._currentVacuum = null,
        this._enqueuedVacuum = null,
        this._enqueuedVacuumConditions = Je,
        this.addFields(this._options.fields)
    }
    add(e) {
        const {extractField: t, tokenize: s, processTerm: n, fields: r, idField: i} = this._options
          , o = t(e, i);
        if (o == null)
            throw new Error(`MiniSearch: document does not have ID field "${i}"`);
        if (this._idToShortId.has(o))
            throw new Error(`MiniSearch: duplicate ID ${o}`);
        const l = this.addDocumentId(o);
        this.saveStoredFields(l, e);
        for (const c of r) {
            const h = t(e, c);
            if (h == null)
                continue;
            const m = s(h.toString(), c)
              , f = this._fieldIds[c]
              , b = new Set(m).size;
            this.addFieldLength(l, f, this._documentCount - 1, b);
            for (const y of m) {
                const x = n(y, c);
                if (Array.isArray(x))
                    for (const w of x)
                        this.addTerm(f, l, w);
                else
                    x && this.addTerm(f, l, x)
            }
        }
    }
    addAll(e) {
        for (const t of e)
            this.add(t)
    }
    addAllAsync(e, t={}) {
        const {chunkSize: s=10} = t
          , n = {
            chunk: [],
            promise: Promise.resolve()
        }
          , {chunk: r, promise: i} = e.reduce( ({chunk: o, promise: l}, c, h) => (o.push(c),
        (h + 1) % s === 0 ? {
            chunk: [],
            promise: l.then( () => new Promise(m => setTimeout(m, 0))).then( () => this.addAll(o))
        } : {
            chunk: o,
            promise: l
        }), n);
        return i.then( () => this.addAll(r))
    }
    remove(e) {
        const {tokenize: t, processTerm: s, extractField: n, fields: r, idField: i} = this._options
          , o = n(e, i);
        if (o == null)
            throw new Error(`MiniSearch: document does not have ID field "${i}"`);
        const l = this._idToShortId.get(o);
        if (l == null)
            throw new Error(`MiniSearch: cannot remove document with ID ${o}: it is not in the index`);
        for (const c of r) {
            const h = n(e, c);
            if (h == null)
                continue;
            const m = t(h.toString(), c)
              , f = this._fieldIds[c]
              , b = new Set(m).size;
            this.removeFieldLength(l, f, this._documentCount, b);
            for (const y of m) {
                const x = s(y, c);
                if (Array.isArray(x))
                    for (const w of x)
                        this.removeTerm(f, l, w);
                else
                    x && this.removeTerm(f, l, x)
            }
        }
        this._storedFields.delete(l),
        this._documentIds.delete(l),
        this._idToShortId.delete(o),
        this._fieldLength.delete(l),
        this._documentCount -= 1
    }
    removeAll(e) {
        if (e)
            for (const t of e)
                this.remove(t);
        else {
            if (arguments.length > 0)
                throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
            this._index = new X,
            this._documentCount = 0,
            this._documentIds = new Map,
            this._idToShortId = new Map,
            this._fieldLength = new Map,
            this._avgFieldLength = [],
            this._storedFields = new Map,
            this._nextId = 0
        }
    }
    discard(e) {
        const t = this._idToShortId.get(e);
        if (t == null)
            throw new Error(`MiniSearch: cannot discard document with ID ${e}: it is not in the index`);
        this._idToShortId.delete(e),
        this._documentIds.delete(t),
        this._storedFields.delete(t),
        (this._fieldLength.get(t) || []).forEach( (s, n) => {
            this.removeFieldLength(t, n, this._documentCount, s)
        }
        ),
        this._fieldLength.delete(t),
        this._documentCount -= 1,
        this._dirtCount += 1,
        this.maybeAutoVacuum()
    }
    maybeAutoVacuum() {
        if (this._options.autoVacuum === !1)
            return;
        const {minDirtFactor: e, minDirtCount: t, batchSize: s, batchWait: n} = this._options.autoVacuum;
        this.conditionalVacuum({
            batchSize: s,
            batchWait: n
        }, {
            minDirtCount: t,
            minDirtFactor: e
        })
    }
    discardAll(e) {
        const t = this._options.autoVacuum;
        try {
            this._options.autoVacuum = !1;
            for (const s of e)
                this.discard(s)
        } finally {
            this._options.autoVacuum = t
        }
        this.maybeAutoVacuum()
    }
    replace(e) {
        const {idField: t, extractField: s} = this._options
          , n = s(e, t);
        this.discard(n),
        this.add(e)
    }
    vacuum(e={}) {
        return this.conditionalVacuum(e)
    }
    conditionalVacuum(e, t) {
        return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && t,
        this._enqueuedVacuum != null ? this._enqueuedVacuum : (this._enqueuedVacuum = this._currentVacuum.then( () => {
            const s = this._enqueuedVacuumConditions;
            return this._enqueuedVacuumConditions = Je,
            this.performVacuuming(e, s)
        }
        ),
        this._enqueuedVacuum)) : this.vacuumConditionsMet(t) === !1 ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(e),
        this._currentVacuum)
    }
    performVacuuming(e, t) {
        return ke(this, void 0, void 0, function*() {
            const s = this._dirtCount;
            if (this.vacuumConditionsMet(t)) {
                const n = e.batchSize || Ke.batchSize
                  , r = e.batchWait || Ke.batchWait;
                let i = 1;
                for (const [o,l] of this._index) {
                    for (const [c,h] of l)
                        for (const [m] of h)
                            this._documentIds.has(m) || (h.size <= 1 ? l.delete(c) : h.delete(m));
                    this._index.get(o).size === 0 && this._index.delete(o),
                    i % n === 0 && (yield new Promise(c => setTimeout(c, r))),
                    i += 1
                }
                this._dirtCount -= s
            }
            yield null,
            this._currentVacuum = this._enqueuedVacuum,
            this._enqueuedVacuum = null
        })
    }
    vacuumConditionsMet(e) {
        if (e == null)
            return !0;
        let {minDirtCount: t, minDirtFactor: s} = e;
        return t = t || Ve.minDirtCount,
        s = s || Ve.minDirtFactor,
        this.dirtCount >= t && this.dirtFactor >= s
    }
    get isVacuuming() {
        return this._currentVacuum != null
    }
    get dirtCount() {
        return this._dirtCount
    }
    get dirtFactor() {
        return this._dirtCount / (1 + this._documentCount + this._dirtCount)
    }
    has(e) {
        return this._idToShortId.has(e)
    }
    getStoredFields(e) {
        const t = this._idToShortId.get(e);
        if (t != null)
            return this._storedFields.get(t)
    }
    search(e, t={}) {
        const s = this.executeQuery(e, t)
          , n = [];
        for (const [r,{score: i, terms: o, match: l}] of s) {
            const c = o.length || 1
              , h = {
                id: this._documentIds.get(r),
                score: i * c,
                terms: Object.keys(l),
                queryTerms: o,
                match: l
            };
            Object.assign(h, this._storedFields.get(r)),
            (t.filter == null || t.filter(h)) && n.push(h)
        }
        return e === ue.wildcard && t.boostDocument == null && this._options.searchOptions.boostDocument == null || n.sort(pt),
        n
    }
    autoSuggest(e, t={}) {
        t = Object.assign(Object.assign({}, this._options.autoSuggestOptions), t);
        const s = new Map;
        for (const {score: r, terms: i} of this.search(e, t)) {
            const o = i.join(" ")
              , l = s.get(o);
            l != null ? (l.score += r,
            l.count += 1) : s.set(o, {
                score: r,
                terms: i,
                count: 1
            })
        }
        const n = [];
        for (const [r,{score: i, terms: o, count: l}] of s)
            n.push({
                suggestion: r,
                terms: o,
                score: i / l
            });
        return n.sort(pt),
        n
    }
    get documentCount() {
        return this._documentCount
    }
    get termCount() {
        return this._index.size
    }
    static loadJSON(e, t) {
        if (t == null)
            throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
        return this.loadJS(JSON.parse(e), t)
    }
    static loadJSONAsync(e, t) {
        return ke(this, void 0, void 0, function*() {
            if (t == null)
                throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
            return this.loadJSAsync(JSON.parse(e), t)
        })
    }
    static getDefault(e) {
        if (je.hasOwnProperty(e))
            return Pe(je, e);
        throw new Error(`MiniSearch: unknown option "${e}"`)
    }
    static loadJS(e, t) {
        const {index: s, documentIds: n, fieldLength: r, storedFields: i, serializationVersion: o} = e
          , l = this.instantiateMiniSearch(e, t);
        l._documentIds = Te(n),
        l._fieldLength = Te(r),
        l._storedFields = Te(i);
        for (const [c,h] of l._documentIds)
            l._idToShortId.set(h, c);
        for (const [c,h] of s) {
            const m = new Map;
            for (const f of Object.keys(h)) {
                let b = h[f];
                o === 1 && (b = b.ds),
                m.set(parseInt(f, 10), Te(b))
            }
            l._index.set(c, m)
        }
        return l
    }
    static loadJSAsync(e, t) {
        return ke(this, void 0, void 0, function*() {
            const {index: s, documentIds: n, fieldLength: r, storedFields: i, serializationVersion: o} = e
              , l = this.instantiateMiniSearch(e, t);
            l._documentIds = yield Ie(n),
            l._fieldLength = yield Ie(r),
            l._storedFields = yield Ie(i);
            for (const [h,m] of l._documentIds)
                l._idToShortId.set(m, h);
            let c = 0;
            for (const [h,m] of s) {
                const f = new Map;
                for (const b of Object.keys(m)) {
                    let y = m[b];
                    o === 1 && (y = y.ds),
                    f.set(parseInt(b, 10), yield Ie(y))
                }
                ++c % 1e3 === 0 && (yield Nt(0)),
                l._index.set(h, f)
            }
            return l
        })
    }
    static instantiateMiniSearch(e, t) {
        const {documentCount: s, nextId: n, fieldIds: r, averageFieldLength: i, dirtCount: o, serializationVersion: l} = e;
        if (l !== 1 && l !== 2)
            throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
        const c = new ue(t);
        return c._documentCount = s,
        c._nextId = n,
        c._idToShortId = new Map,
        c._fieldIds = r,
        c._avgFieldLength = i,
        c._dirtCount = o || 0,
        c._index = new X,
        c
    }
    executeQuery(e, t={}) {
        if (e === ue.wildcard)
            return this.executeWildcardQuery(t);
        if (typeof e != "string") {
            const f = Object.assign(Object.assign(Object.assign({}, t), e), {
                queries: void 0
            })
              , b = e.queries.map(y => this.executeQuery(y, f));
            return this.combineResults(b, f.combineWith)
        }
        const {tokenize: s, processTerm: n, searchOptions: r} = this._options
          , i = Object.assign(Object.assign({
            tokenize: s,
            processTerm: n
        }, r), t)
          , {tokenize: o, processTerm: l} = i
          , m = o(e).flatMap(f => l(f)).filter(f => !!f).map($s(i)).map(f => this.executeQuerySpec(f, i));
        return this.combineResults(m, i.combineWith)
    }
    executeQuerySpec(e, t) {
        const s = Object.assign(Object.assign({}, this._options.searchOptions), t)
          , n = (s.fields || this._options.fields).reduce( (x, w) => Object.assign(Object.assign({}, x), {
            [w]: Pe(s.boost, w) || 1
        }), {})
          , {boostDocument: r, weights: i, maxFuzzy: o, bm25: l} = s
          , {fuzzy: c, prefix: h} = Object.assign(Object.assign({}, ht.weights), i)
          , m = this._index.get(e.term)
          , f = this.termResults(e.term, e.term, 1, e.termBoost, m, n, r, l);
        let b, y;
        if (e.prefix && (b = this._index.atPrefix(e.term)),
        e.fuzzy) {
            const x = e.fuzzy === !0 ? .2 : e.fuzzy
              , w = x < 1 ? Math.min(o, Math.round(e.term.length * x)) : x;
            w && (y = this._index.fuzzyGet(e.term, w))
        }
        if (b)
            for (const [x,w] of b) {
                const R = x.length - e.term.length;
                if (!R)
                    continue;
                y == null || y.delete(x);
                const C = h * x.length / (x.length + .3 * R);
                this.termResults(e.term, x, C, e.termBoost, w, n, r, l, f)
            }
        if (y)
            for (const x of y.keys()) {
                const [w,R] = y.get(x);
                if (!R)
                    continue;
                const C = c * x.length / (x.length + R);
                this.termResults(e.term, x, C, e.termBoost, w, n, r, l, f)
            }
        return f
    }
    executeWildcardQuery(e) {
        const t = new Map
          , s = Object.assign(Object.assign({}, this._options.searchOptions), e);
        for (const [n,r] of this._documentIds) {
            const i = s.boostDocument ? s.boostDocument(r, "", this._storedFields.get(n)) : 1;
            t.set(n, {
                score: i,
                terms: [],
                match: {}
            })
        }
        return t
    }
    combineResults(e, t=qe) {
        if (e.length === 0)
            return new Map;
        const s = t.toLowerCase()
          , n = Ps[s];
        if (!n)
            throw new Error(`Invalid combination operator: ${t}`);
        return e.reduce(n) || new Map
    }
    toJSON() {
        const e = [];
        for (const [t,s] of this._index) {
            const n = {};
            for (const [r,i] of s)
                n[r] = Object.fromEntries(i);
            e.push([t, n])
        }
        return {
            documentCount: this._documentCount,
            nextId: this._nextId,
            documentIds: Object.fromEntries(this._documentIds),
            fieldIds: this._fieldIds,
            fieldLength: Object.fromEntries(this._fieldLength),
            averageFieldLength: this._avgFieldLength,
            storedFields: Object.fromEntries(this._storedFields),
            dirtCount: this._dirtCount,
            index: e,
            serializationVersion: 2
        }
    }
    termResults(e, t, s, n, r, i, o, l, c=new Map) {
        if (r == null)
            return c;
        for (const h of Object.keys(i)) {
            const m = i[h]
              , f = this._fieldIds[h]
              , b = r.get(f);
            if (b == null)
                continue;
            let y = b.size;
            const x = this._avgFieldLength[f];
            for (const w of b.keys()) {
                if (!this._documentIds.has(w)) {
                    this.removeTerm(f, w, t),
                    y -= 1;
                    continue
                }
                const R = o ? o(this._documentIds.get(w), t, this._storedFields.get(w)) : 1;
                if (!R)
                    continue;
                const C = b.get(w)
                  , J = this._fieldLength.get(w)[f]
                  , H = Vs(C, y, this._documentCount, J, x, l)
                  , W = s * n * m * R * H
                  , V = c.get(w);
                if (V) {
                    V.score += W,
                    Ws(V.terms, e);
                    const $ = Pe(V.match, t);
                    $ ? $.push(h) : V.match[t] = [h]
                } else
                    c.set(w, {
                        score: W,
                        terms: [e],
                        match: {
                            [t]: [h]
                        }
                    })
            }
        }
        return c
    }
    addTerm(e, t, s) {
        const n = this._index.fetch(s, vt);
        let r = n.get(e);
        if (r == null)
            r = new Map,
            r.set(t, 1),
            n.set(e, r);
        else {
            const i = r.get(t);
            r.set(t, (i || 0) + 1)
        }
    }
    removeTerm(e, t, s) {
        if (!this._index.has(s)) {
            this.warnDocumentChanged(t, e, s);
            return
        }
        const n = this._index.fetch(s, vt)
          , r = n.get(e);
        r == null || r.get(t) == null ? this.warnDocumentChanged(t, e, s) : r.get(t) <= 1 ? r.size <= 1 ? n.delete(e) : r.delete(t) : r.set(t, r.get(t) - 1),
        this._index.get(s).size === 0 && this._index.delete(s)
    }
    warnDocumentChanged(e, t, s) {
        for (const n of Object.keys(this._fieldIds))
            if (this._fieldIds[n] === t) {
                this._options.logger("warn", `MiniSearch: document with ID ${this._documentIds.get(e)} has changed before removal: term "${s}" was not present in field "${n}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
                return
            }
    }
    addDocumentId(e) {
        const t = this._nextId;
        return this._idToShortId.set(e, t),
        this._documentIds.set(t, e),
        this._documentCount += 1,
        this._nextId += 1,
        t
    }
    addFields(e) {
        for (let t = 0; t < e.length; t++)
            this._fieldIds[e[t]] = t
    }
    addFieldLength(e, t, s, n) {
        let r = this._fieldLength.get(e);
        r == null && this._fieldLength.set(e, r = []),
        r[t] = n;
        const o = (this._avgFieldLength[t] || 0) * s + n;
        this._avgFieldLength[t] = o / (s + 1)
    }
    removeFieldLength(e, t, s, n) {
        if (s === 1) {
            this._avgFieldLength[t] = 0;
            return
        }
        const r = this._avgFieldLength[t] * s - n;
        this._avgFieldLength[t] = r / (s - 1)
    }
    saveStoredFields(e, t) {
        const {storeFields: s, extractField: n} = this._options;
        if (s == null || s.length === 0)
            return;
        let r = this._storedFields.get(e);
        r == null && this._storedFields.set(e, r = {});
        for (const i of s) {
            const o = n(t, i);
            o !== void 0 && (r[i] = o)
        }
    }
}
ue.wildcard = Symbol("*");
const Pe = (a, e) => Object.prototype.hasOwnProperty.call(a, e) ? a[e] : void 0
  , Ps = {
    [qe]: (a, e) => {
        for (const t of e.keys()) {
            const s = a.get(t);
            if (s == null)
                a.set(t, e.get(t));
            else {
                const {score: n, terms: r, match: i} = e.get(t);
                s.score = s.score + n,
                s.match = Object.assign(s.match, i),
                ft(s.terms, r)
            }
        }
        return a
    }
    ,
    [kt]: (a, e) => {
        const t = new Map;
        for (const s of e.keys()) {
            const n = a.get(s);
            if (n == null)
                continue;
            const {score: r, terms: i, match: o} = e.get(s);
            ft(n.terms, i),
            t.set(s, {
                score: n.score + r,
                terms: n.terms,
                match: Object.assign(n.match, o)
            })
        }
        return t
    }
    ,
    [zs]: (a, e) => {
        for (const t of e.keys())
            a.delete(t);
        return a
    }
}
  , js = {
    k: 1.2,
    b: .7,
    d: .5
}
  , Vs = (a, e, t, s, n, r) => {
    const {k: i, b: o, d: l} = r;
    return Math.log(1 + (t - e + .5) / (e + .5)) * (l + a * (i + 1) / (a + i * (1 - o + o * s / n)))
}
  , $s = a => (e, t, s) => {
    const n = typeof a.fuzzy == "function" ? a.fuzzy(e, t, s) : a.fuzzy || !1
      , r = typeof a.prefix == "function" ? a.prefix(e, t, s) : a.prefix === !0
      , i = typeof a.boostTerm == "function" ? a.boostTerm(e, t, s) : 1;
    return {
        term: e,
        fuzzy: n,
        prefix: r,
        termBoost: i
    }
}
  , je = {
    idField: "id",
    extractField: (a, e) => a[e],
    tokenize: a => a.split(Ks),
    processTerm: a => a.toLowerCase(),
    fields: void 0,
    searchOptions: void 0,
    storeFields: [],
    logger: (a, e) => {
        typeof (console == null ? void 0 : console[a]) == "function" && console[a](e)
    }
    ,
    autoVacuum: !0
}
  , ht = {
    combineWith: qe,
    prefix: !1,
    fuzzy: !1,
    maxFuzzy: 6,
    boost: {},
    weights: {
        fuzzy: .45,
        prefix: .375
    },
    bm25: js
}
  , Bs = {
    combineWith: kt,
    prefix: (a, e, t) => e === t.length - 1
}
  , Ke = {
    batchSize: 1e3,
    batchWait: 10
}
  , Je = {
    minDirtFactor: .1,
    minDirtCount: 20
}
  , Ve = Object.assign(Object.assign({}, Ke), Je)
  , Ws = (a, e) => {
    a.includes(e) || a.push(e)
}
  , ft = (a, e) => {
    for (const t of e)
        a.includes(t) || a.push(t)
}
  , pt = ({score: a}, {score: e}) => e - a
  , vt = () => new Map
  , Te = a => {
    const e = new Map;
    for (const t of Object.keys(a))
        e.set(parseInt(t, 10), a[t]);
    return e
}
  , Ie = a => ke(void 0, void 0, void 0, function*() {
    const e = new Map;
    let t = 0;
    for (const s of Object.keys(a))
        e.set(parseInt(s, 10), a[s]),
        ++t % 1e3 === 0 && (yield Nt(0));
    return e
})
  , Nt = a => new Promise(e => setTimeout(e, a))
  , Ks = /[\n\r\p{Z}\p{P}]+/u;
class Js {
    constructor(e=10) {
        Me(this, "max");
        Me(this, "cache");
        this.max = e,
        this.cache = new Map
    }
    get(e) {
        let t = this.cache.get(e);
        return t !== void 0 && (this.cache.delete(e),
        this.cache.set(e, t)),
        t
    }
    set(e, t) {
        this.cache.has(e) ? this.cache.delete(e) : this.cache.size === this.max && this.cache.delete(this.first()),
        this.cache.set(e, t)
    }
    first() {
        return this.cache.keys().next().value
    }
    clear() {
        this.cache.clear()
    }
}
const Us = ["aria-owns"]
  , qs = {
    class: "shell"
}
  , Gs = ["title"]
  , Qs = {
    class: "search-actions before"
}
  , Hs = ["title"]
  , Ys = ["aria-activedescendant", "aria-controls", "placeholder"]
  , Zs = {
    class: "search-actions"
}
  , Xs = ["title"]
  , en = ["disabled", "title"]
  , tn = ["id", "role", "aria-labelledby"]
  , sn = ["id", "aria-selected"]
  , nn = ["href", "aria-label", "onMouseenter", "onFocusin", "data-index"]
  , rn = {
    class: "titles"
}
  , an = ["innerHTML"]
  , on = {
    class: "title main"
}
  , ln = ["innerHTML"]
  , cn = {
    key: 0,
    class: "excerpt-wrapper"
}
  , un = {
    key: 0,
    class: "excerpt",
    inert: ""
}
  , dn = ["innerHTML"]
  , hn = {
    key: 0,
    class: "no-results"
}
  , fn = {
    class: "search-keyboard-shortcuts"
}
  , pn = ["aria-label"]
  , vn = ["aria-label"]
  , mn = ["aria-label"]
  , gn = ["aria-label"]
  , bn = Lt({
    __name: "VPLocalSearchBox",
    emits: ["close"],
    setup(a, {emit: e}) {
        var O, A;
        const t = e
          , s = xe()
          , n = xe()
          , r = xe(is)
          , i = ss()
          , {activate: o} = Rs(s, {
            immediate: !0,
            allowOutsideClick: !0,
            clickOutsideDeactivates: !0,
            escapeDeactivates: !0
        })
          , {localeIndex: l, theme: c} = i
          , h = tt(async () => {
            var v, p, _, F, z, P, j, I, K;
            return rt(ue.loadJSON((_ = await ((p = (v = r.value)[l.value]) == null ? void 0 : p.call(v))) == null ? void 0 : _.default, {
                fields: ["title", "titles", "text"],
                storeFields: ["title", "titles"],
                searchOptions: {
                    fuzzy: .2,
                    prefix: !0,
                    boost: {
                        title: 4,
                        text: 2,
                        titles: 1
                    },
                    ...((F = c.value.search) == null ? void 0 : F.provider) === "local" && ((P = (z = c.value.search.options) == null ? void 0 : z.miniSearch) == null ? void 0 : P.searchOptions)
                },
                ...((j = c.value.search) == null ? void 0 : j.provider) === "local" && ((K = (I = c.value.search.options) == null ? void 0 : I.miniSearch) == null ? void 0 : K.options)
            }))
        }
        )
          , f = me( () => {
            var v, p;
            return ((v = c.value.search) == null ? void 0 : v.provider) === "local" && ((p = c.value.search.options) == null ? void 0 : p.disableQueryPersistence) === !0
        }
        ).value ? ie("") : Dt("vitepress:local-search-filter", "")
          , b = zt("vitepress:local-search-detailed-list", ((O = c.value.search) == null ? void 0 : O.provider) === "local" && ((A = c.value.search.options) == null ? void 0 : A.detailedView) === !0)
          , y = me( () => {
            var v, p, _;
            return ((v = c.value.search) == null ? void 0 : v.provider) === "local" && (((p = c.value.search.options) == null ? void 0 : p.disableDetailedView) === !0 || ((_ = c.value.search.options) == null ? void 0 : _.detailedView) === !1)
        }
        )
          , x = me( () => {
            var p, _, F, z, P, j, I;
            const v = ((p = c.value.search) == null ? void 0 : p.options) ?? c.value.algolia;
            return ((P = (z = (F = (_ = v == null ? void 0 : v.locales) == null ? void 0 : _[l.value]) == null ? void 0 : F.translations) == null ? void 0 : z.button) == null ? void 0 : P.buttonText) || ((I = (j = v == null ? void 0 : v.translations) == null ? void 0 : j.button) == null ? void 0 : I.buttonText) || "Search"
        }
        );
        Pt( () => {
            y.value && (b.value = !1)
        }
        );
        const w = xe([])
          , R = ie(!1);
        $e(f, () => {
            R.value = !1
        }
        );
        const C = tt(async () => {
            if (n.value)
                return rt(new Ms(n.value))
        }
        , null)
          , J = new Js(16);
        jt( () => [h.value, f.value, b.value], async ([v,p,_], F, z) => {
            var ee, ye, Ge, Qe;
            (F == null ? void 0 : F[0]) !== v && J.clear();
            let P = !1;
            if (z( () => {
                P = !0
            }
            ),
            !v)
                return;
            w.value = v.search(p).slice(0, 16),
            R.value = !0;
            const j = _ ? await Promise.all(w.value.map(B => H(B.id))) : [];
            if (P)
                return;
            for (const {id: B, mod: te} of j) {
                const se = B.slice(0, B.indexOf("#"));
                let Y = J.get(se);
                if (Y)
                    continue;
                Y = new Map,
                J.set(se, Y);
                const G = te.default ?? te;
                if (G != null && G.render || G != null && G.setup) {
                    const ne = Yt(G);
                    ne.config.warnHandler = () => {}
                    ,
                    ne.provide(Zt, i),
                    Object.defineProperties(ne.config.globalProperties, {
                        $frontmatter: {
                            get() {
                                return i.frontmatter.value
                            }
                        },
                        $params: {
                            get() {
                                return i.page.value.params
                            }
                        }
                    });
                    const He = document.createElement("div");
                    ne.mount(He),
                    He.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(de => {
                        var Xe;
                        const we = (Xe = de.querySelector("a")) == null ? void 0 : Xe.getAttribute("href")
                          , Ye = (we == null ? void 0 : we.startsWith("#")) && we.slice(1);
                        if (!Ye)
                            return;
                        let Ze = "";
                        for (; (de = de.nextElementSibling) && !/^h[1-6]$/i.test(de.tagName); )
                            Ze += de.outerHTML;
                        Y.set(Ye, Ze)
                    }
                    ),
                    ne.unmount()
                }
                if (P)
                    return
            }
            const I = new Set;
            if (w.value = w.value.map(B => {
                const [te,se] = B.id.split("#")
                  , Y = J.get(te)
                  , G = (Y == null ? void 0 : Y.get(se)) ?? "";
                for (const ne in B.match)
                    I.add(ne);
                return {
                    ...B,
                    text: G
                }
            }
            ),
            await he(),
            P)
                return;
            await new Promise(B => {
                var te;
                (te = C.value) == null || te.unmark({
                    done: () => {
                        var se;
                        (se = C.value) == null || se.markRegExp(T(I), {
                            done: B
                        })
                    }
                })
            }
            );
            const K = ((ee = s.value) == null ? void 0 : ee.querySelectorAll(".result .excerpt")) ?? [];
            for (const B of K)
                (ye = B.querySelector('mark[data-markjs="true"]')) == null || ye.scrollIntoView({
                    block: "center"
                });
            (Qe = (Ge = n.value) == null ? void 0 : Ge.firstElementChild) == null || Qe.scrollIntoView({
                block: "start"
            })
        }
        , {
            debounce: 200,
            immediate: !0
        });
        async function H(v) {
            const p = Xt(v.slice(0, v.indexOf("#")));
            try {
                if (!p)
                    throw new Error(`Cannot find file for id: ${v}`);
                return {
                    id: v,
                    mod: await import(p)
                }
            } catch (_) {
                return console.error(_),
                {
                    id: v,
                    mod: {}
                }
            }
        }
        const W = ie()
          , V = me( () => {
            var v;
            return ((v = f.value) == null ? void 0 : v.length) <= 0
        }
        );
        function $(v=!0) {
            var p, _;
            (p = W.value) == null || p.focus(),
            v && ((_ = W.value) == null || _.select())
        }
        Ae( () => {
            $()
        }
        );
        function be(v) {
            v.pointerType === "mouse" && $()
        }
        const M = ie(-1)
          , U = ie(!0);
        $e(w, v => {
            M.value = v.length ? 0 : -1,
            q()
        }
        );
        function q() {
            he( () => {
                const v = document.querySelector(".result.selected");
                v == null || v.scrollIntoView({
                    block: "nearest"
                })
            }
            )
        }
        Se("ArrowUp", v => {
            v.preventDefault(),
            M.value--,
            M.value < 0 && (M.value = w.value.length - 1),
            U.value = !0,
            q()
        }
        ),
        Se("ArrowDown", v => {
            v.preventDefault(),
            M.value++,
            M.value >= w.value.length && (M.value = 0),
            U.value = !0,
            q()
        }
        );
        const k = Vt();
        Se("Enter", v => {
            if (v.isComposing || v.target instanceof HTMLButtonElement && v.target.type !== "submit")
                return;
            const p = w.value[M.value];
            if (v.target instanceof HTMLInputElement && !p) {
                v.preventDefault();
                return
            }
            p && (k.go(p.id),
            t("close"))
        }
        ),
        Se("Escape", () => {
            t("close")
        }
        );
        const u = ns({
            modal: {
                displayDetails: "Display detailed list",
                resetButtonTitle: "Reset search",
                backButtonTitle: "Close search",
                noResultsText: "No results for",
                footer: {
                    selectText: "to select",
                    selectKeyAriaLabel: "enter",
                    navigateText: "to navigate",
                    navigateUpKeyAriaLabel: "up arrow",
                    navigateDownKeyAriaLabel: "down arrow",
                    closeText: "to close",
                    closeKeyAriaLabel: "escape"
                }
            }
        });
        Ae( () => {
            window.history.pushState(null, "", null)
        }
        ),
        $t("popstate", v => {
            v.preventDefault(),
            t("close")
        }
        );
        const g = Bt(Wt ? document.body : null);
        Ae( () => {
            he( () => {
                g.value = !0,
                he().then( () => o())
            }
            )
        }
        ),
        Kt( () => {
            g.value = !1
        }
        );
        function E() {
            f.value = "",
            he().then( () => $(!1))
        }
        function T(v) {
            return new RegExp([...v].sort( (p, _) => _.length - p.length).map(p => `(${es(p)})`).join("|"),"gi")
        }
        function N(v) {
            var F;
            if (!U.value)
                return;
            const p = (F = v.target) == null ? void 0 : F.closest(".result")
              , _ = Number.parseInt(p == null ? void 0 : p.dataset.index);
            _ >= 0 && _ !== M.value && (M.value = _),
            U.value = !1
        }
        return (v, p) => {
            var _, F, z, P, j;
            return Q(),
            Jt(Ht, {
                to: "body"
            }, [S("div", {
                ref_key: "el",
                ref: s,
                role: "button",
                "aria-owns": (_ = w.value) != null && _.length ? "localsearch-list" : void 0,
                "aria-expanded": "true",
                "aria-haspopup": "listbox",
                "aria-labelledby": "localsearch-label",
                class: "VPLocalSearchBox"
            }, [S("div", {
                class: "backdrop",
                onClick: p[0] || (p[0] = I => v.$emit("close"))
            }), S("div", qs, [S("form", {
                class: "search-bar",
                onPointerup: p[4] || (p[4] = I => be(I)),
                onSubmit: p[5] || (p[5] = Ut( () => {}
                , ["prevent"]))
            }, [S("label", {
                title: x.value,
                id: "localsearch-label",
                for: "localsearch-input"
            }, p[7] || (p[7] = [S("span", {
                "aria-hidden": "true",
                class: "vpi-search search-icon local-search-icon"
            }, null, -1)]), 8, Gs), S("div", Qs, [S("button", {
                class: "back-button",
                title: L(u)("modal.backButtonTitle"),
                onClick: p[1] || (p[1] = I => v.$emit("close"))
            }, p[8] || (p[8] = [S("span", {
                class: "vpi-arrow-left local-search-icon"
            }, null, -1)]), 8, Hs)]), qt(S("input", {
                ref_key: "searchInput",
                ref: W,
                "onUpdate:modelValue": p[2] || (p[2] = I => Qt(f) ? f.value = I : null),
                "aria-activedescendant": M.value > -1 ? "localsearch-item-" + M.value : void 0,
                "aria-autocomplete": "both",
                "aria-controls": (F = w.value) != null && F.length ? "localsearch-list" : void 0,
                "aria-labelledby": "localsearch-label",
                autocapitalize: "off",
                autocomplete: "off",
                autocorrect: "off",
                class: "search-input",
                id: "localsearch-input",
                enterkeyhint: "go",
                maxlength: "64",
                placeholder: x.value,
                spellcheck: "false",
                type: "search"
            }, null, 8, Ys), [[Gt, L(f)]]), S("div", Zs, [y.value ? _e("", !0) : (Q(),
            Z("button", {
                key: 0,
                class: st(["toggle-layout-button", {
                    "detailed-list": L(b)
                }]),
                type: "button",
                title: L(u)("modal.displayDetails"),
                onClick: p[3] || (p[3] = I => M.value > -1 && (b.value = !L(b)))
            }, p[9] || (p[9] = [S("span", {
                class: "vpi-layout-list local-search-icon"
            }, null, -1)]), 10, Xs)), S("button", {
                class: "clear-button",
                type: "reset",
                disabled: V.value,
                title: L(u)("modal.resetButtonTitle"),
                onClick: E
            }, p[10] || (p[10] = [S("span", {
                class: "vpi-delete local-search-icon"
            }, null, -1)]), 8, en)])], 32), S("ul", {
                ref_key: "resultsEl",
                ref: n,
                id: (z = w.value) != null && z.length ? "localsearch-list" : void 0,
                role: (P = w.value) != null && P.length ? "listbox" : void 0,
                "aria-labelledby": (j = w.value) != null && j.length ? "localsearch-label" : void 0,
                class: "results",
                onMousemove: N
            }, [(Q(!0),
            Z(it, null, nt(w.value, (I, K) => (Q(),
            Z("li", {
                key: I.id,
                id: "localsearch-item-" + K,
                "aria-selected": M.value === K ? "true" : "false",
                role: "option"
            }, [S("a", {
                href: I.id,
                class: st(["result", {
                    selected: M.value === K
                }]),
                "aria-label": [...I.titles, I.title].join(" > "),
                onMouseenter: ee => !U.value && (M.value = K),
                onFocusin: ee => M.value = K,
                onClick: p[6] || (p[6] = ee => v.$emit("close")),
                "data-index": K
            }, [S("div", null, [S("div", rn, [p[12] || (p[12] = S("span", {
                class: "title-icon"
            }, "#", -1)), (Q(!0),
            Z(it, null, nt(I.titles, (ee, ye) => (Q(),
            Z("span", {
                key: ye,
                class: "title"
            }, [S("span", {
                class: "text",
                innerHTML: ee
            }, null, 8, an), p[11] || (p[11] = S("span", {
                class: "vpi-chevron-right local-search-icon"
            }, null, -1))]))), 128)), S("span", on, [S("span", {
                class: "text",
                innerHTML: I.title
            }, null, 8, ln)])]), L(b) ? (Q(),
            Z("div", cn, [I.text ? (Q(),
            Z("div", un, [S("div", {
                class: "vp-doc",
                innerHTML: I.text
            }, null, 8, dn)])) : _e("", !0), p[13] || (p[13] = S("div", {
                class: "excerpt-gradient-bottom"
            }, null, -1)), p[14] || (p[14] = S("div", {
                class: "excerpt-gradient-top"
            }, null, -1))])) : _e("", !0)])], 42, nn)], 8, sn))), 128)), L(f) && !w.value.length && R.value ? (Q(),
            Z("li", hn, [fe(pe(L(u)("modal.noResultsText")) + ' "', 1), S("strong", null, pe(L(f)), 1), p[15] || (p[15] = fe('" '))])) : _e("", !0)], 40, tn), S("div", fn, [S("span", null, [S("kbd", {
                "aria-label": L(u)("modal.footer.navigateUpKeyAriaLabel")
            }, p[16] || (p[16] = [S("span", {
                class: "vpi-arrow-up navigate-icon"
            }, null, -1)]), 8, pn), S("kbd", {
                "aria-label": L(u)("modal.footer.navigateDownKeyAriaLabel")
            }, p[17] || (p[17] = [S("span", {
                class: "vpi-arrow-down navigate-icon"
            }, null, -1)]), 8, vn), fe(" " + pe(L(u)("modal.footer.navigateText")), 1)]), S("span", null, [S("kbd", {
                "aria-label": L(u)("modal.footer.selectKeyAriaLabel")
            }, p[18] || (p[18] = [S("span", {
                class: "vpi-corner-down-left navigate-icon"
            }, null, -1)]), 8, mn), fe(" " + pe(L(u)("modal.footer.selectText")), 1)]), S("span", null, [S("kbd", {
                "aria-label": L(u)("modal.footer.closeKeyAriaLabel")
            }, "esc", 8, gn), fe(" " + pe(L(u)("modal.footer.closeText")), 1)])])])], 8, Us)])
        }
    }
})
  , En = ts(bn, [["__scopeId", "data-v-6e9b9e93"]]);
export {En as default};
