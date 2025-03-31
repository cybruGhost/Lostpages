/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function $s(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const Z = {}
  , Tt = []
  , Be = () => {}
  , Wo = () => !1
  , en = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Hs = e => e.startsWith("onUpdate:")
  , de = Object.assign
  , Ds = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Ko = Object.prototype.hasOwnProperty
  , z = (e, t) => Ko.call(e, t)
  , K = Array.isArray
  , Ct = e => $n(e) === "[object Map]"
  , si = e => $n(e) === "[object Set]"
  , q = e => typeof e == "function"
  , re = e => typeof e == "string"
  , Ye = e => typeof e == "symbol"
  , ne = e => e !== null && typeof e == "object"
  , ri = e => (ne(e) || q(e)) && q(e.then) && q(e.catch)
  , ii = Object.prototype.toString
  , $n = e => ii.call(e)
  , qo = e => $n(e).slice(8, -1)
  , oi = e => $n(e) === "[object Object]"
  , js = e => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , At = $s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Hn = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Go = /-(\w)/g
  , Le = Hn(e => e.replace(Go, (t, n) => n ? n.toUpperCase() : ""))
  , Yo = /\B([A-Z])/g
  , st = Hn(e => e.replace(Yo, "-$1").toLowerCase())
  , Dn = Hn(e => e.charAt(0).toUpperCase() + e.slice(1))
  , _n = Hn(e => e ? `on${Dn(e)}` : "")
  , tt = (e, t) => !Object.is(e, t)
  , wn = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , li = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , bs = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Xo = e => {
    const t = re(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let fr;
const jn = () => fr || (fr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vs(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , r = re(s) ? Zo(s) : Vs(s);
            if (r)
                for (const i in r)
                    t[i] = r[i]
        }
        return t
    } else if (re(e) || ne(e))
        return e
}
const Jo = /;(?![^(]*\))/g
  , zo = /:([^]+)/
  , Qo = /\/\*[^]*?\*\//g;
function Zo(e) {
    const t = {};
    return e.replace(Qo, "").split(Jo).forEach(n => {
        if (n) {
            const s = n.split(zo);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function Us(e) {
    let t = "";
    if (re(e))
        t = e;
    else if (K(e))
        for (let n = 0; n < e.length; n++) {
            const s = Us(e[n]);
            s && (t += s + " ")
        }
    else if (ne(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const el = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , tl = $s(el);
function ci(e) {
    return !!e || e === ""
}
const ai = e => !!(e && e.__v_isRef === !0)
  , nl = e => re(e) ? e : e == null ? "" : K(e) || ne(e) && (e.toString === ii || !q(e.toString)) ? ai(e) ? nl(e.value) : JSON.stringify(e, fi, 2) : String(e)
  , fi = (e, t) => ai(t) ? fi(e, t.value) : Ct(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,r], i) => (n[Qn(s, i) + " =>"] = r,
    n), {})
} : si(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Qn(n))
} : Ye(t) ? Qn(t) : ne(t) && !K(t) && !oi(t) ? String(t) : t
  , Qn = (e, t="") => {
    var n;
    return Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let we;
class sl {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = we,
        !t && we && (this.index = (we.scopes || (we.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = we;
            try {
                return we = this,
                t()
            } finally {
                we = n
            }
        }
    }
    on() {
        we = this
    }
    off() {
        we = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function ui() {
    return we
}
function rl(e, t=!1) {
    we && we.cleanups.push(e)
}
let te;
const Zn = new WeakSet;
class di {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        we && we.active && we.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Zn.has(this) && (Zn.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pi(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        ur(this),
        gi(this);
        const t = te
          , n = Ne;
        te = this,
        Ne = !0;
        try {
            return this.fn()
        } finally {
            mi(this),
            te = t,
            Ne = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Ws(t);
            this.deps = this.depsTail = void 0,
            ur(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        _s(this) && this.run()
    }
    get dirty() {
        return _s(this)
    }
}
let hi = 0, Vt, Ut;
function pi(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Ut,
        Ut = e;
        return
    }
    e.next = Vt,
    Vt = e
}
function Bs() {
    hi++
}
function ks() {
    if (--hi > 0)
        return;
    if (Ut) {
        let t = Ut;
        for (Ut = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; Vt; ) {
        let t = Vt;
        for (Vt = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (s) {
                    e || (e = s)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function gi(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function mi(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r),
        Ws(s),
        il(s)) : t = s,
        s.dep.activeLink = s.prevActiveLink,
        s.prevActiveLink = void 0,
        s = r
    }
    e.deps = t,
    e.depsTail = n
}
function _s(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (yi(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function yi(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === qt))
        return;
    e.globalVersion = qt;
    const t = e.dep;
    if (e.flags |= 2,
    t.version > 0 && !e.isSSR && e.deps && !_s(e)) {
        e.flags &= -3;
        return
    }
    const n = te
      , s = Ne;
    te = e,
    Ne = !0;
    try {
        gi(e);
        const r = e.fn(e._value);
        (t.version === 0 || tt(r, e._value)) && (e._value = r,
        t.version++)
    } catch (r) {
        throw t.version++,
        r
    } finally {
        te = n,
        Ne = s,
        mi(e),
        e.flags &= -3
    }
}
function Ws(e, t=!1) {
    const {dep: n, prevSub: s, nextSub: r} = e;
    if (s && (s.nextSub = r,
    e.prevSub = void 0),
    r && (r.prevSub = s,
    e.nextSub = void 0),
    n.subs === e && (n.subs = s,
    !s && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep)
            Ws(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function il(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Ne = !0;
const vi = [];
function rt() {
    vi.push(Ne),
    Ne = !1
}
function it() {
    const e = vi.pop();
    Ne = e === void 0 ? !0 : e
}
function ur(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = te;
        te = void 0;
        try {
            t()
        } finally {
            te = n
        }
    }
}
let qt = 0;
class ol {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Vn {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!te || !Ne || te === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== te)
            n = this.activeLink = new ol(te,this),
            te.deps ? (n.prevDep = te.depsTail,
            te.depsTail.nextDep = n,
            te.depsTail = n) : te.deps = te.depsTail = n,
            bi(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = s),
            n.prevDep = te.depsTail,
            n.nextDep = void 0,
            te.depsTail.nextDep = n,
            te.depsTail = n,
            te.deps === n && (te.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++,
        qt++,
        this.notify(t)
    }
    notify(t) {
        Bs();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            ks()
        }
    }
}
function bi(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep)
                bi(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const An = new WeakMap
  , dt = Symbol("")
  , ws = Symbol("")
  , Gt = Symbol("");
function me(e, t, n) {
    if (Ne && te) {
        let s = An.get(e);
        s || An.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new Vn),
        r.map = s,
        r.key = n),
        r.track()
    }
}
function qe(e, t, n, s, r, i) {
    const o = An.get(e);
    if (!o) {
        qt++;
        return
    }
    const l = c => {
        c && c.trigger()
    }
    ;
    if (Bs(),
    t === "clear")
        o.forEach(l);
    else {
        const c = K(e)
          , f = c && js(n);
        if (c && n === "length") {
            const a = Number(s);
            o.forEach( (d, y) => {
                (y === "length" || y === Gt || !Ye(y) && y >= a) && l(d)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)),
            f && l(o.get(Gt)),
            t) {
            case "add":
                c ? f && l(o.get("length")) : (l(o.get(dt)),
                Ct(e) && l(o.get(ws)));
                break;
            case "delete":
                c || (l(o.get(dt)),
                Ct(e) && l(o.get(ws)));
                break;
            case "set":
                Ct(e) && l(o.get(dt));
                break
            }
    }
    ks()
}
function ll(e, t) {
    const n = An.get(e);
    return n && n.get(t)
}
function _t(e) {
    const t = J(e);
    return t === e ? t : (me(t, "iterate", Gt),
    Pe(e) ? t : t.map(ye))
}
function Un(e) {
    return me(e = J(e), "iterate", Gt),
    e
}
const cl = {
    __proto__: null,
    [Symbol.iterator]() {
        return es(this, Symbol.iterator, ye)
    },
    concat(...e) {
        return _t(this).concat(...e.map(t => K(t) ? _t(t) : t))
    },
    entries() {
        return es(this, "entries", e => (e[1] = ye(e[1]),
        e))
    },
    every(e, t) {
        return We(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return We(this, "filter", e, t, n => n.map(ye), arguments)
    },
    find(e, t) {
        return We(this, "find", e, t, ye, arguments)
    },
    findIndex(e, t) {
        return We(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return We(this, "findLast", e, t, ye, arguments)
    },
    findLastIndex(e, t) {
        return We(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return We(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return ts(this, "includes", e)
    },
    indexOf(...e) {
        return ts(this, "indexOf", e)
    },
    join(e) {
        return _t(this).join(e)
    },
    lastIndexOf(...e) {
        return ts(this, "lastIndexOf", e)
    },
    map(e, t) {
        return We(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Ht(this, "pop")
    },
    push(...e) {
        return Ht(this, "push", e)
    },
    reduce(e, ...t) {
        return dr(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return dr(this, "reduceRight", e, t)
    },
    shift() {
        return Ht(this, "shift")
    },
    some(e, t) {
        return We(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Ht(this, "splice", e)
    },
    toReversed() {
        return _t(this).toReversed()
    },
    toSorted(e) {
        return _t(this).toSorted(e)
    },
    toSpliced(...e) {
        return _t(this).toSpliced(...e)
    },
    unshift(...e) {
        return Ht(this, "unshift", e)
    },
    values() {
        return es(this, "values", ye)
    }
};
function es(e, t, n) {
    const s = Un(e)
      , r = s[t]();
    return s !== e && !Pe(e) && (r._next = r.next,
    r.next = () => {
        const i = r._next();
        return i.value && (i.value = n(i.value)),
        i
    }
    ),
    r
}
const al = Array.prototype;
function We(e, t, n, s, r, i) {
    const o = Un(e)
      , l = o !== e && !Pe(e)
      , c = o[t];
    if (c !== al[t]) {
        const d = c.apply(e, i);
        return l ? ye(d) : d
    }
    let f = n;
    o !== e && (l ? f = function(d, y) {
        return n.call(this, ye(d), y, e)
    }
    : n.length > 2 && (f = function(d, y) {
        return n.call(this, d, y, e)
    }
    ));
    const a = c.call(o, f, s);
    return l && r ? r(a) : a
}
function dr(e, t, n, s) {
    const r = Un(e);
    let i = n;
    return r !== e && (Pe(e) ? n.length > 3 && (i = function(o, l, c) {
        return n.call(this, o, l, c, e)
    }
    ) : i = function(o, l, c) {
        return n.call(this, o, ye(l), c, e)
    }
    ),
    r[t](i, ...s)
}
function ts(e, t, n) {
    const s = J(e);
    me(s, "iterate", Gt);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Gs(n[0]) ? (n[0] = J(n[0]),
    s[t](...n)) : r
}
function Ht(e, t, n=[]) {
    rt(),
    Bs();
    const s = J(e)[t].apply(e, n);
    return ks(),
    it(),
    s
}
const fl = $s("__proto__,__v_isRef,__isVue")
  , _i = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ye));
function ul(e) {
    Ye(e) || (e = String(e));
    const t = J(this);
    return me(t, "has", e),
    t.hasOwnProperty(e)
}
class wi {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        const r = this._isReadonly
          , i = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return s === (r ? i ? wl : Ti : i ? Ei : xi).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = K(t);
        if (!r) {
            let c;
            if (o && (c = cl[n]))
                return c;
            if (n === "hasOwnProperty")
                return ul
        }
        const l = Reflect.get(t, n, ae(t) ? t : s);
        return (Ye(n) ? _i.has(n) : fl(n)) || (r || me(t, "get", n),
        i) ? l : ae(l) ? o && js(n) ? l : l.value : ne(l) ? r ? kn(l) : Bn(l) : l
    }
}
class Si extends wi {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let i = t[n];
        if (!this._isShallow) {
            const c = yt(i);
            if (!Pe(s) && !yt(s) && (i = J(i),
            s = J(s)),
            !K(t) && ae(i) && !ae(s))
                return c ? !1 : (i.value = s,
                !0)
        }
        const o = K(t) && js(n) ? Number(n) < t.length : z(t, n)
          , l = Reflect.set(t, n, s, ae(t) ? t : r);
        return t === J(r) && (o ? tt(s, i) && qe(t, "set", n, s) : qe(t, "add", n, s)),
        l
    }
    deleteProperty(t, n) {
        const s = z(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && qe(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!Ye(n) || !_i.has(n)) && me(t, "has", n),
        s
    }
    ownKeys(t) {
        return me(t, "iterate", K(t) ? "length" : dt),
        Reflect.ownKeys(t)
    }
}
class dl extends wi {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const hl = new Si
  , pl = new dl
  , gl = new Si(!0);
const Ss = e => e
  , an = e => Reflect.getPrototypeOf(e);
function ml(e, t, n) {
    return function(...s) {
        const r = this.__v_raw
          , i = J(r)
          , o = Ct(i)
          , l = e === "entries" || e === Symbol.iterator && o
          , c = e === "keys" && o
          , f = r[e](...s)
          , a = n ? Ss : t ? xs : ye;
        return !t && me(i, "iterate", c ? ws : dt),
        {
            next() {
                const {value: d, done: y} = f.next();
                return y ? {
                    value: d,
                    done: y
                } : {
                    value: l ? [a(d[0]), a(d[1])] : a(d),
                    done: y
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function fn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function yl(e, t) {
    const n = {
        get(r) {
            const i = this.__v_raw
              , o = J(i)
              , l = J(r);
            e || (tt(r, l) && me(o, "get", r),
            me(o, "get", l));
            const {has: c} = an(o)
              , f = t ? Ss : e ? xs : ye;
            if (c.call(o, r))
                return f(i.get(r));
            if (c.call(o, l))
                return f(i.get(l));
            i !== o && i.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && me(J(r), "iterate", dt),
            Reflect.get(r, "size", r)
        },
        has(r) {
            const i = this.__v_raw
              , o = J(i)
              , l = J(r);
            return e || (tt(r, l) && me(o, "has", r),
            me(o, "has", l)),
            r === l ? i.has(r) : i.has(r) || i.has(l)
        },
        forEach(r, i) {
            const o = this
              , l = o.__v_raw
              , c = J(l)
              , f = t ? Ss : e ? xs : ye;
            return !e && me(c, "iterate", dt),
            l.forEach( (a, d) => r.call(i, f(a), f(d), o))
        }
    };
    return de(n, e ? {
        add: fn("add"),
        set: fn("set"),
        delete: fn("delete"),
        clear: fn("clear")
    } : {
        add(r) {
            !t && !Pe(r) && !yt(r) && (r = J(r));
            const i = J(this);
            return an(i).has.call(i, r) || (i.add(r),
            qe(i, "add", r, r)),
            this
        },
        set(r, i) {
            !t && !Pe(i) && !yt(i) && (i = J(i));
            const o = J(this)
              , {has: l, get: c} = an(o);
            let f = l.call(o, r);
            f || (r = J(r),
            f = l.call(o, r));
            const a = c.call(o, r);
            return o.set(r, i),
            f ? tt(i, a) && qe(o, "set", r, i) : qe(o, "add", r, i),
            this
        },
        delete(r) {
            const i = J(this)
              , {has: o, get: l} = an(i);
            let c = o.call(i, r);
            c || (r = J(r),
            c = o.call(i, r)),
            l && l.call(i, r);
            const f = i.delete(r);
            return c && qe(i, "delete", r, void 0),
            f
        },
        clear() {
            const r = J(this)
              , i = r.size !== 0
              , o = r.clear();
            return i && qe(r, "clear", void 0, void 0),
            o
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = ml(r, e, t)
    }
    ),
    n
}
function Ks(e, t) {
    const n = yl(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(z(n, r) && r in s ? n : s, r, i)
}
const vl = {
    get: Ks(!1, !1)
}
  , bl = {
    get: Ks(!1, !0)
}
  , _l = {
    get: Ks(!0, !1)
};
const xi = new WeakMap
  , Ei = new WeakMap
  , Ti = new WeakMap
  , wl = new WeakMap;
function Sl(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function xl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Sl(qo(e))
}
function Bn(e) {
    return yt(e) ? e : qs(e, !1, hl, vl, xi)
}
function El(e) {
    return qs(e, !1, gl, bl, Ei)
}
function kn(e) {
    return qs(e, !0, pl, _l, Ti)
}
function qs(e, t, n, s, r) {
    if (!ne(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = r.get(e);
    if (i)
        return i;
    const o = xl(e);
    if (o === 0)
        return e;
    const l = new Proxy(e,o === 2 ? s : n);
    return r.set(e, l),
    l
}
function ht(e) {
    return yt(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function yt(e) {
    return !!(e && e.__v_isReadonly)
}
function Pe(e) {
    return !!(e && e.__v_isShallow)
}
function Gs(e) {
    return e ? !!e.__v_raw : !1
}
function J(e) {
    const t = e && e.__v_raw;
    return t ? J(t) : e
}
function Sn(e) {
    return !z(e, "__v_skip") && Object.isExtensible(e) && li(e, "__v_skip", !0),
    e
}
const ye = e => ne(e) ? Bn(e) : e
  , xs = e => ne(e) ? kn(e) : e;
function ae(e) {
    return e ? e.__v_isRef === !0 : !1
}
function oe(e) {
    return Ci(e, !1)
}
function Ys(e) {
    return Ci(e, !0)
}
function Ci(e, t) {
    return ae(e) ? e : new Tl(e,t)
}
class Tl {
    constructor(t, n) {
        this.dep = new Vn,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : J(t),
        this._value = n ? t : ye(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , s = this.__v_isShallow || Pe(t) || yt(t);
        t = s ? t : J(t),
        tt(t, n) && (this._rawValue = t,
        this._value = s ? t : ye(t),
        this.dep.trigger())
    }
}
function Ai(e) {
    return ae(e) ? e.value : e
}
const Cl = {
    get: (e, t, n) => t === "__v_raw" ? e : Ai(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return ae(r) && !ae(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function Ri(e) {
    return ht(e) ? e : new Proxy(e,Cl)
}
class Al {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new Vn
          , {get: s, set: r} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = s,
        this._set = r
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Rl(e) {
    return new Al(e)
}
class Ol {
    constructor(t, n, s) {
        this._object = t,
        this._key = n,
        this._defaultValue = s,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return ll(J(this._object), this._key)
    }
}
class Ml {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function Pl(e, t, n) {
    return ae(e) ? e : q(e) ? new Ml(e) : ne(e) && arguments.length > 1 ? Ll(e, t, n) : oe(e)
}
function Ll(e, t, n) {
    const s = e[t];
    return ae(s) ? s : new Ol(e,t,n)
}
class Il {
    constructor(t, n, s) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Vn(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = qt - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = s
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && te !== this)
            return pi(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return yi(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Nl(e, t, n=!1) {
    let s, r;
    return q(e) ? s = e : (s = e.get,
    r = e.set),
    new Il(s,r,n)
}
const un = {}
  , Rn = new WeakMap;
let ft;
function Fl(e, t=!1, n=ft) {
    if (n) {
        let s = Rn.get(n);
        s || Rn.set(n, s = []),
        s.push(e)
    }
}
function $l(e, t, n=Z) {
    const {immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c} = n
      , f = g => r ? g : Pe(g) || r === !1 || r === 0 ? Ge(g, 1) : Ge(g);
    let a, d, y, v, S = !1, b = !1;
    if (ae(e) ? (d = () => e.value,
    S = Pe(e)) : ht(e) ? (d = () => f(e),
    S = !0) : K(e) ? (b = !0,
    S = e.some(g => ht(g) || Pe(g)),
    d = () => e.map(g => {
        if (ae(g))
            return g.value;
        if (ht(g))
            return f(g);
        if (q(g))
            return c ? c(g, 2) : g()
    }
    )) : q(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
        if (y) {
            rt();
            try {
                y()
            } finally {
                it()
            }
        }
        const g = ft;
        ft = a;
        try {
            return c ? c(e, 3, [v]) : e(v)
        } finally {
            ft = g
        }
    }
    : d = Be,
    t && r) {
        const g = d
          , M = r === !0 ? 1 / 0 : r;
        d = () => Ge(g(), M)
    }
    const k = ui()
      , N = () => {
        a.stop(),
        k && Ds(k.effects, a)
    }
    ;
    if (i && t) {
        const g = t;
        t = (...M) => {
            g(...M),
            N()
        }
    }
    let j = b ? new Array(e.length).fill(un) : un;
    const p = g => {
        if (!(!(a.flags & 1) || !a.dirty && !g))
            if (t) {
                const M = a.run();
                if (r || S || (b ? M.some( (F, H) => tt(F, j[H])) : tt(M, j))) {
                    y && y();
                    const F = ft;
                    ft = a;
                    try {
                        const H = [M, j === un ? void 0 : b && j[0] === un ? [] : j, v];
                        c ? c(t, 3, H) : t(...H),
                        j = M
                    } finally {
                        ft = F
                    }
                }
            } else
                a.run()
    }
    ;
    return l && l(p),
    a = new di(d),
    a.scheduler = o ? () => o(p, !1) : p,
    v = g => Fl(g, !1, a),
    y = a.onStop = () => {
        const g = Rn.get(a);
        if (g) {
            if (c)
                c(g, 4);
            else
                for (const M of g)
                    M();
            Rn.delete(a)
        }
    }
    ,
    t ? s ? p(!0) : j = a.run() : o ? o(p.bind(null, !0), !0) : a.run(),
    N.pause = a.pause.bind(a),
    N.resume = a.resume.bind(a),
    N.stop = N,
    N
}
function Ge(e, t=1 / 0, n) {
    if (t <= 0 || !ne(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    ae(e))
        Ge(e.value, t, n);
    else if (K(e))
        for (let s = 0; s < e.length; s++)
            Ge(e[s], t, n);
    else if (si(e) || Ct(e))
        e.forEach(s => {
            Ge(s, t, n)
        }
        );
    else if (oi(e)) {
        for (const s in e)
            Ge(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && Ge(e[s], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function tn(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        nn(r, t, n)
    }
}
function $e(e, t, n, s) {
    if (q(e)) {
        const r = tn(e, t, n, s);
        return r && ri(r) && r.catch(i => {
            nn(i, t, n)
        }
        ),
        r
    }
    if (K(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            r.push($e(e[i], t, n, s));
        return r
    }
}
function nn(e, t, n, s=!0) {
    const r = t ? t.vnode : null
      , {errorHandler: i, throwUnhandledErrorInProduction: o} = t && t.appContext.config || Z;
    if (t) {
        let l = t.parent;
        const c = t.proxy
          , f = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let d = 0; d < a.length; d++)
                    if (a[d](e, c, f) === !1)
                        return
            }
            l = l.parent
        }
        if (i) {
            rt(),
            tn(i, null, 10, [e, c, f]),
            it();
            return
        }
    }
    Hl(e, n, r, s, o)
}
function Hl(e, t, n, s=!0, r=!1) {
    if (r)
        throw e;
    console.error(e)
}
const Se = [];
let Ve = -1;
const Rt = [];
let Qe = null
  , St = 0;
const Oi = Promise.resolve();
let On = null;
function Wn(e) {
    const t = On || Oi;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Dl(e) {
    let t = Ve + 1
      , n = Se.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , r = Se[s]
          , i = Yt(r);
        i < e || i === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}
function Xs(e) {
    if (!(e.flags & 1)) {
        const t = Yt(e)
          , n = Se[Se.length - 1];
        !n || !(e.flags & 2) && t >= Yt(n) ? Se.push(e) : Se.splice(Dl(t), 0, e),
        e.flags |= 1,
        Mi()
    }
}
function Mi() {
    On || (On = Oi.then(Pi))
}
function jl(e) {
    K(e) ? Rt.push(...e) : Qe && e.id === -1 ? Qe.splice(St + 1, 0, e) : e.flags & 1 || (Rt.push(e),
    e.flags |= 1),
    Mi()
}
function hr(e, t, n=Ve + 1) {
    for (; n < Se.length; n++) {
        const s = Se[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid)
                continue;
            Se.splice(n, 1),
            n--,
            s.flags & 4 && (s.flags &= -2),
            s(),
            s.flags & 4 || (s.flags &= -2)
        }
    }
}
function Mn(e) {
    if (Rt.length) {
        const t = [...new Set(Rt)].sort( (n, s) => Yt(n) - Yt(s));
        if (Rt.length = 0,
        Qe) {
            Qe.push(...t);
            return
        }
        for (Qe = t,
        St = 0; St < Qe.length; St++) {
            const n = Qe[St];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        Qe = null,
        St = 0
    }
}
const Yt = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pi(e) {
    try {
        for (Ve = 0; Ve < Se.length; Ve++) {
            const t = Se[Ve];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            tn(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Ve < Se.length; Ve++) {
            const t = Se[Ve];
            t && (t.flags &= -2)
        }
        Ve = -1,
        Se.length = 0,
        Mn(),
        On = null,
        (Se.length || Rt.length) && Pi()
    }
}
let ue = null
  , Li = null;
function Pn(e) {
    const t = ue;
    return ue = e,
    Li = e && e.type.__scopeId || null,
    t
}
function Vl(e, t=ue, n) {
    if (!t || e._n)
        return e;
    const s = (...r) => {
        s._d && Ar(-1);
        const i = Pn(t);
        let o;
        try {
            o = e(...r)
        } finally {
            Pn(i),
            s._d && Ar(1)
        }
        return o
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function wf(e, t) {
    if (ue === null)
        return e;
    const n = Yn(ue)
      , s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[i,o,l,c=Z] = t[r];
        i && (q(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && Ge(o),
        s.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}
function Ue(e, t, n, s) {
    const r = e.dirs
      , i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let c = l.dir[s];
        c && (rt(),
        $e(c, n, 8, [e.el, l, e, t]),
        it())
    }
}
const Ii = Symbol("_vte")
  , Ni = e => e.__isTeleport
  , Bt = e => e && (e.disabled || e.disabled === "")
  , Ul = e => e && (e.defer || e.defer === "")
  , pr = e => typeof SVGElement < "u" && e instanceof SVGElement
  , gr = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Es = (e, t) => {
    const n = e && e.to;
    return re(n) ? t ? t(n) : null : n
}
  , Bl = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, s, r, i, o, l, c, f) {
        const {mc: a, pc: d, pbc: y, o: {insert: v, querySelector: S, createText: b, createComment: k}} = f
          , N = Bt(t.props);
        let {shapeFlag: j, children: p, dynamicChildren: g} = t;
        if (e == null) {
            const M = t.el = b("")
              , F = t.anchor = b("");
            v(M, n, s),
            v(F, n, s);
            const H = (R, _) => {
                j & 16 && (r && r.isCE && (r.ce._teleportTarget = R),
                a(p, R, _, r, i, o, l, c))
            }
              , V = () => {
                const R = t.target = Es(t.props, S)
                  , _ = Fi(R, t, b, v);
                R && (o !== "svg" && pr(R) ? o = "svg" : o !== "mathml" && gr(R) && (o = "mathml"),
                N || (H(R, _),
                xn(t, !1)))
            }
            ;
            N && (H(n, F),
            xn(t, !0)),
            Ul(t.props) ? xe(V, i) : V()
        } else {
            t.el = e.el,
            t.targetStart = e.targetStart;
            const M = t.anchor = e.anchor
              , F = t.target = e.target
              , H = t.targetAnchor = e.targetAnchor
              , V = Bt(e.props)
              , R = V ? n : F
              , _ = V ? M : H;
            if (o === "svg" || pr(F) ? o = "svg" : (o === "mathml" || gr(F)) && (o = "mathml"),
            g ? (y(e.dynamicChildren, g, R, r, i, o, l),
            Zs(e, t, !0)) : c || d(e, t, R, _, r, i, o, l, !1),
            N)
                V ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dn(t, n, M, f, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const I = t.target = Es(t.props, S);
                I && dn(t, I, null, f, 0)
            } else
                V && dn(t, F, H, f, 1);
            xn(t, N)
        }
    },
    remove(e, t, n, {um: s, o: {remove: r}}, i) {
        const {shapeFlag: o, children: l, anchor: c, targetStart: f, targetAnchor: a, target: d, props: y} = e;
        if (d && (r(f),
        r(a)),
        i && r(c),
        o & 16) {
            const v = i || !Bt(y);
            for (let S = 0; S < l.length; S++) {
                const b = l[S];
                s(b, t, n, v, !!b.dynamicChildren)
            }
        }
    },
    move: dn,
    hydrate: kl
};
function dn(e, t, n, {o: {insert: s}, m: r}, i=2) {
    i === 0 && s(e.targetAnchor, t, n);
    const {el: o, anchor: l, shapeFlag: c, children: f, props: a} = e
      , d = i === 2;
    if (d && s(o, t, n),
    (!d || Bt(a)) && c & 16)
        for (let y = 0; y < f.length; y++)
            r(f[y], t, n, 2);
    d && s(l, t, n)
}
function kl(e, t, n, s, r, i, {o: {nextSibling: o, parentNode: l, querySelector: c, insert: f, createText: a}}, d) {
    const y = t.target = Es(t.props, c);
    if (y) {
        const v = Bt(t.props)
          , S = y._lpa || y.firstChild;
        if (t.shapeFlag & 16)
            if (v)
                t.anchor = d(o(e), t, l(e), n, s, r, i),
                t.targetStart = S,
                t.targetAnchor = S && o(S);
            else {
                t.anchor = o(e);
                let b = S;
                for (; b; ) {
                    if (b && b.nodeType === 8) {
                        if (b.data === "teleport start anchor")
                            t.targetStart = b;
                        else if (b.data === "teleport anchor") {
                            t.targetAnchor = b,
                            y._lpa = t.targetAnchor && o(t.targetAnchor);
                            break
                        }
                    }
                    b = o(b)
                }
                t.targetAnchor || Fi(y, t, a, f),
                d(S && o(S), t, y, n, s, r, i)
            }
        xn(t, v)
    }
    return t.anchor && o(t.anchor)
}
const Sf = Bl;
function xn(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let s, r;
        for (t ? (s = e.el,
        r = e.anchor) : (s = e.targetStart,
        r = e.targetAnchor); s && s !== r; )
            s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid),
            s = s.nextSibling;
        n.ut()
    }
}
function Fi(e, t, n, s) {
    const r = t.targetStart = n("")
      , i = t.targetAnchor = n("");
    return r[Ii] = i,
    e && (s(r, e),
    s(i, e)),
    i
}
const Ze = Symbol("_leaveCb")
  , hn = Symbol("_enterCb");
function Wl() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return vt( () => {
        e.isMounted = !0
    }
    ),
    ki( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Re = [Function, Array]
  , $i = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Re,
    onEnter: Re,
    onAfterEnter: Re,
    onEnterCancelled: Re,
    onBeforeLeave: Re,
    onLeave: Re,
    onAfterLeave: Re,
    onLeaveCancelled: Re,
    onBeforeAppear: Re,
    onAppear: Re,
    onAfterAppear: Re,
    onAppearCancelled: Re
}
  , Hi = e => {
    const t = e.subTree;
    return t.component ? Hi(t.component) : t
}
  , Kl = {
    name: "BaseTransition",
    props: $i,
    setup(e, {slots: t}) {
        const n = Nt()
          , s = Wl();
        return () => {
            const r = t.default && Vi(t.default(), !0);
            if (!r || !r.length)
                return;
            const i = Di(r)
              , o = J(e)
              , {mode: l} = o;
            if (s.isLeaving)
                return ns(i);
            const c = mr(i);
            if (!c)
                return ns(i);
            let f = Ts(c, o, s, n, y => f = y);
            c.type !== be && Xt(c, f);
            const a = n.subTree
              , d = a && mr(a);
            if (d && d.type !== be && !ut(c, d) && Hi(n).type !== be) {
                const y = Ts(d, o, s, n);
                if (Xt(d, y),
                l === "out-in" && c.type !== be)
                    return s.isLeaving = !0,
                    y.afterLeave = () => {
                        s.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete y.afterLeave
                    }
                    ,
                    ns(i);
                l === "in-out" && c.type !== be && (y.delayLeave = (v, S, b) => {
                    const k = ji(s, d);
                    k[String(d.key)] = d,
                    v[Ze] = () => {
                        S(),
                        v[Ze] = void 0,
                        delete f.delayedLeave
                    }
                    ,
                    f.delayedLeave = b
                }
                )
            }
            return i
        }
    }
};
function Di(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== be) {
                t = n;
                break
            }
    }
    return t
}
const ql = Kl;
function ji(e, t) {
    const {leavingVNodes: n} = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null),
    n.set(t.type, s)),
    s
}
function Ts(e, t, n, s, r) {
    const {appear: i, mode: o, persisted: l=!1, onBeforeEnter: c, onEnter: f, onAfterEnter: a, onEnterCancelled: d, onBeforeLeave: y, onLeave: v, onAfterLeave: S, onLeaveCancelled: b, onBeforeAppear: k, onAppear: N, onAfterAppear: j, onAppearCancelled: p} = t
      , g = String(e.key)
      , M = ji(n, e)
      , F = (R, _) => {
        R && $e(R, s, 9, _)
    }
      , H = (R, _) => {
        const I = _[1];
        F(R, _),
        K(R) ? R.every(E => E.length <= 1) && I() : R.length <= 1 && I()
    }
      , V = {
        mode: o,
        persisted: l,
        beforeEnter(R) {
            let _ = c;
            if (!n.isMounted)
                if (i)
                    _ = k || c;
                else
                    return;
            R[Ze] && R[Ze](!0);
            const I = M[g];
            I && ut(e, I) && I.el[Ze] && I.el[Ze](),
            F(_, [R])
        },
        enter(R) {
            let _ = f
              , I = a
              , E = d;
            if (!n.isMounted)
                if (i)
                    _ = N || f,
                    I = j || a,
                    E = p || d;
                else
                    return;
            let W = !1;
            const se = R[hn] = ce => {
                W || (W = !0,
                ce ? F(E, [R]) : F(I, [R]),
                V.delayedLeave && V.delayedLeave(),
                R[hn] = void 0)
            }
            ;
            _ ? H(_, [R, se]) : se()
        },
        leave(R, _) {
            const I = String(e.key);
            if (R[hn] && R[hn](!0),
            n.isUnmounting)
                return _();
            F(y, [R]);
            let E = !1;
            const W = R[Ze] = se => {
                E || (E = !0,
                _(),
                se ? F(b, [R]) : F(S, [R]),
                R[Ze] = void 0,
                M[I] === e && delete M[I])
            }
            ;
            M[I] = e,
            v ? H(v, [R, W]) : W()
        },
        clone(R) {
            const _ = Ts(R, t, n, s, r);
            return r && r(_),
            _
        }
    };
    return V
}
function ns(e) {
    if (sn(e))
        return e = nt(e),
        e.children = null,
        e
}
function mr(e) {
    if (!sn(e))
        return Ni(e.type) && e.children ? Di(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && q(n.default))
            return n.default()
    }
}
function Xt(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Xt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Vi(e, t=!1, n) {
    let s = []
      , r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === ve ? (o.patchFlag & 128 && r++,
        s = s.concat(Vi(o.children, t, l))) : (t || o.type !== be) && s.push(l != null ? nt(o, {
            key: l
        }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++)
            s[i].patchFlag = -2;
    return s
}
/*! #__NO_SIDE_EFFECTS__ */
function Js(e, t) {
    return q(e) ? de({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function xf() {
    const e = Nt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}
function zs(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ln(e, t, n, s, r=!1) {
    if (K(e)) {
        e.forEach( (S, b) => Ln(S, t && (K(t) ? t[b] : t), n, s, r));
        return
    }
    if (pt(s) && !r)
        return;
    const i = s.shapeFlag & 4 ? Yn(s.component) : s.el
      , o = r ? null : i
      , {i: l, r: c} = e
      , f = t && t.r
      , a = l.refs === Z ? l.refs = {} : l.refs
      , d = l.setupState
      , y = J(d)
      , v = d === Z ? () => !1 : S => z(y, S);
    if (f != null && f !== c && (re(f) ? (a[f] = null,
    v(f) && (d[f] = null)) : ae(f) && (f.value = null)),
    q(c))
        tn(c, l, 12, [o, a]);
    else {
        const S = re(c)
          , b = ae(c);
        if (S || b) {
            const k = () => {
                if (e.f) {
                    const N = S ? v(c) ? d[c] : a[c] : c.value;
                    r ? K(N) && Ds(N, i) : K(N) ? N.includes(i) || N.push(i) : S ? (a[c] = [i],
                    v(c) && (d[c] = a[c])) : (c.value = [i],
                    e.k && (a[e.k] = c.value))
                } else
                    S ? (a[c] = o,
                    v(c) && (d[c] = o)) : b && (c.value = o,
                    e.k && (a[e.k] = o))
            }
            ;
            o ? (k.id = -1,
            xe(k, n)) : k()
        }
    }
}
let yr = !1;
const wt = () => {
    yr || (console.error("Hydration completed but contains mismatches."),
    yr = !0)
}
  , Gl = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject"
  , Yl = e => e.namespaceURI.includes("MathML")
  , pn = e => {
    if (e.nodeType === 1) {
        if (Gl(e))
            return "svg";
        if (Yl(e))
            return "mathml"
    }
}
  , Et = e => e.nodeType === 8;
function Xl(e) {
    const {mt: t, p: n, o: {patchProp: s, createText: r, nextSibling: i, parentNode: o, remove: l, insert: c, createComment: f}} = e
      , a = (p, g) => {
        if (!g.hasChildNodes()) {
            n(null, p, g),
            Mn(),
            g._vnode = p;
            return
        }
        d(g.firstChild, p, null, null, null),
        Mn(),
        g._vnode = p
    }
      , d = (p, g, M, F, H, V=!1) => {
        V = V || !!g.dynamicChildren;
        const R = Et(p) && p.data === "["
          , _ = () => b(p, g, M, F, H, R)
          , {type: I, ref: E, shapeFlag: W, patchFlag: se} = g;
        let ce = p.nodeType;
        g.el = p,
        se === -2 && (V = !1,
        g.dynamicChildren = null);
        let U = null;
        switch (I) {
        case gt:
            ce !== 3 ? g.children === "" ? (c(g.el = r(""), o(p), p),
            U = p) : U = _() : (p.data !== g.children && (wt(),
            p.data = g.children),
            U = i(p));
            break;
        case be:
            j(p) ? (U = i(p),
            N(g.el = p.content.firstChild, p, M)) : ce !== 8 || R ? U = _() : U = i(p);
            break;
        case Pt:
            if (R && (p = i(p),
            ce = p.nodeType),
            ce === 1 || ce === 3) {
                U = p;
                const Y = !g.children.length;
                for (let D = 0; D < g.staticCount; D++)
                    Y && (g.children += U.nodeType === 1 ? U.outerHTML : U.data),
                    D === g.staticCount - 1 && (g.anchor = U),
                    U = i(U);
                return R ? i(U) : U
            } else
                _();
            break;
        case ve:
            R ? U = S(p, g, M, F, H, V) : U = _();
            break;
        default:
            if (W & 1)
                (ce !== 1 || g.type.toLowerCase() !== p.tagName.toLowerCase()) && !j(p) ? U = _() : U = y(p, g, M, F, H, V);
            else if (W & 6) {
                g.slotScopeIds = H;
                const Y = o(p);
                if (R ? U = k(p) : Et(p) && p.data === "teleport start" ? U = k(p, p.data, "teleport end") : U = i(p),
                t(g, Y, null, M, F, pn(Y), V),
                pt(g)) {
                    let D;
                    R ? (D = le(ve),
                    D.anchor = U ? U.previousSibling : Y.lastChild) : D = p.nodeType === 3 ? yo("") : le("div"),
                    D.el = p,
                    g.component.subTree = D
                }
            } else
                W & 64 ? ce !== 8 ? U = _() : U = g.type.hydrate(p, g, M, F, H, V, e, v) : W & 128 && (U = g.type.hydrate(p, g, M, F, pn(o(p)), H, V, e, d))
        }
        return E != null && Ln(E, null, F, g),
        U
    }
      , y = (p, g, M, F, H, V) => {
        V = V || !!g.dynamicChildren;
        const {type: R, props: _, patchFlag: I, shapeFlag: E, dirs: W, transition: se} = g
          , ce = R === "input" || R === "option";
        if (ce || I !== -1) {
            W && Ue(g, null, M, "created");
            let U = !1;
            if (j(p)) {
                U = lo(null, se) && M && M.vnode.props && M.vnode.props.appear;
                const D = p.content.firstChild;
                U && se.beforeEnter(D),
                N(D, p, M),
                g.el = p = D
            }
            if (E & 16 && !(_ && (_.innerHTML || _.textContent))) {
                let D = v(p.firstChild, g, p, M, F, H, V);
                for (; D; ) {
                    gn(p, 1) || wt();
                    const he = D;
                    D = D.nextSibling,
                    l(he)
                }
            } else if (E & 8) {
                let D = g.children;
                D[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (D = D.slice(1)),
                p.textContent !== D && (gn(p, 0) || wt(),
                p.textContent = g.children)
            }
            if (_) {
                if (ce || !V || I & 48) {
                    const D = p.tagName.includes("-");
                    for (const he in _)
                        (ce && (he.endsWith("value") || he === "indeterminate") || en(he) && !At(he) || he[0] === "." || D) && s(p, he, null, _[he], void 0, M)
                } else if (_.onClick)
                    s(p, "onClick", null, _.onClick, void 0, M);
                else if (I & 4 && ht(_.style))
                    for (const D in _.style)
                        _.style[D]
            }
            let Y;
            (Y = _ && _.onVnodeBeforeMount) && Oe(Y, M, g),
            W && Ue(g, null, M, "beforeMount"),
            ((Y = _ && _.onVnodeMounted) || W || U) && ho( () => {
                Y && Oe(Y, M, g),
                U && se.enter(p),
                W && Ue(g, null, M, "mounted")
            }
            , F)
        }
        return p.nextSibling
    }
      , v = (p, g, M, F, H, V, R) => {
        R = R || !!g.dynamicChildren;
        const _ = g.children
          , I = _.length;
        for (let E = 0; E < I; E++) {
            const W = R ? _[E] : _[E] = Me(_[E])
              , se = W.type === gt;
            p ? (se && !R && E + 1 < I && Me(_[E + 1]).type === gt && (c(r(p.data.slice(W.children.length)), M, i(p)),
            p.data = W.children),
            p = d(p, W, F, H, V, R)) : se && !W.children ? c(W.el = r(""), M) : (gn(M, 1) || wt(),
            n(null, W, M, null, F, H, pn(M), V))
        }
        return p
    }
      , S = (p, g, M, F, H, V) => {
        const {slotScopeIds: R} = g;
        R && (H = H ? H.concat(R) : R);
        const _ = o(p)
          , I = v(i(p), g, _, M, F, H, V);
        return I && Et(I) && I.data === "]" ? i(g.anchor = I) : (wt(),
        c(g.anchor = f("]"), _, I),
        I)
    }
      , b = (p, g, M, F, H, V) => {
        if (gn(p.parentElement, 1) || wt(),
        g.el = null,
        V) {
            const I = k(p);
            for (; ; ) {
                const E = i(p);
                if (E && E !== I)
                    l(E);
                else
                    break
            }
        }
        const R = i(p)
          , _ = o(p);
        return l(p),
        n(null, g, _, R, M, F, pn(_), H),
        R
    }
      , k = (p, g="[", M="]") => {
        let F = 0;
        for (; p; )
            if (p = i(p),
            p && Et(p) && (p.data === g && F++,
            p.data === M)) {
                if (F === 0)
                    return i(p);
                F--
            }
        return p
    }
      , N = (p, g, M) => {
        const F = g.parentNode;
        F && F.replaceChild(p, g);
        let H = M;
        for (; H; )
            H.vnode.el === g && (H.vnode.el = H.subTree.el = p),
            H = H.parent
    }
      , j = p => p.nodeType === 1 && p.tagName === "TEMPLATE";
    return [a, d]
}
const vr = "data-allow-mismatch"
  , Jl = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
};
function gn(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(vr); )
            e = e.parentElement;
    const n = e && e.getAttribute(vr);
    if (n == null)
        return !1;
    if (n === "")
        return !0;
    {
        const s = n.split(",");
        return t === 0 && s.includes("children") ? !0 : n.split(",").includes(Jl[t])
    }
}
jn().requestIdleCallback;
jn().cancelIdleCallback;
function zl(e, t) {
    if (Et(e) && e.data === "[") {
        let n = 1
          , s = e.nextSibling;
        for (; s; ) {
            if (s.nodeType === 1) {
                if (t(s) === !1)
                    break
            } else if (Et(s))
                if (s.data === "]") {
                    if (--n === 0)
                        break
                } else
                    s.data === "[" && n++;
            s = s.nextSibling
        }
    } else
        t(e)
}
const pt = e => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
function Ef(e) {
    q(e) && (e = {
        loader: e
    });
    const {loader: t, loadingComponent: n, errorComponent: s, delay: r=200, hydrate: i, timeout: o, suspensible: l=!0, onError: c} = e;
    let f = null, a, d = 0;
    const y = () => (d++,
    f = null,
    v())
      , v = () => {
        let S;
        return f || (S = f = t().catch(b => {
            if (b = b instanceof Error ? b : new Error(String(b)),
            c)
                return new Promise( (k, N) => {
                    c(b, () => k(y()), () => N(b), d + 1)
                }
                );
            throw b
        }
        ).then(b => S !== f && f ? f : (b && (b.__esModule || b[Symbol.toStringTag] === "Module") && (b = b.default),
        a = b,
        b)))
    }
    ;
    return Js({
        name: "AsyncComponentWrapper",
        __asyncLoader: v,
        __asyncHydrate(S, b, k) {
            const N = i ? () => {
                const j = i(k, p => zl(S, p));
                j && (b.bum || (b.bum = [])).push(j)
            }
            : k;
            a ? N() : v().then( () => !b.isUnmounted && N())
        },
        get __asyncResolved() {
            return a
        },
        setup() {
            const S = fe;
            if (zs(S),
            a)
                return () => ss(a, S);
            const b = p => {
                f = null,
                nn(p, S, 13, !s)
            }
            ;
            if (l && S.suspense || Lt)
                return v().then(p => () => ss(p, S)).catch(p => (b(p),
                () => s ? le(s, {
                    error: p
                }) : null));
            const k = oe(!1)
              , N = oe()
              , j = oe(!!r);
            return r && setTimeout( () => {
                j.value = !1
            }
            , r),
            o != null && setTimeout( () => {
                if (!k.value && !N.value) {
                    const p = new Error(`Async component timed out after ${o}ms.`);
                    b(p),
                    N.value = p
                }
            }
            , o),
            v().then( () => {
                k.value = !0,
                S.parent && sn(S.parent.vnode) && S.parent.update()
            }
            ).catch(p => {
                b(p),
                N.value = p
            }
            ),
            () => {
                if (k.value && a)
                    return ss(a, S);
                if (N.value && s)
                    return le(s, {
                        error: N.value
                    });
                if (n && !j.value)
                    return le(n)
            }
        }
    })
}
function ss(e, t) {
    const {ref: n, props: s, children: r, ce: i} = t.vnode
      , o = le(e, s, r);
    return o.ref = n,
    o.ce = i,
    delete t.vnode.ce,
    o
}
const sn = e => e.type.__isKeepAlive;
function Ql(e, t) {
    Ui(e, "a", t)
}
function Zl(e, t) {
    Ui(e, "da", t)
}
function Ui(e, t, n=fe) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (Kn(t, s, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            sn(r.parent.vnode) && ec(s, t, n, r),
            r = r.parent
    }
}
function ec(e, t, n, s) {
    const r = Kn(t, e, s, !0);
    rn( () => {
        Ds(s[t], r)
    }
    , n)
}
function Kn(e, t, n=fe, s=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , i = t.__weh || (t.__weh = (...o) => {
            rt();
            const l = on(n)
              , c = $e(t, n, e, o);
            return l(),
            it(),
            c
        }
        );
        return s ? r.unshift(i) : r.push(i),
        i
    }
}
const Xe = e => (t, n=fe) => {
    (!Lt || e === "sp") && Kn(e, (...s) => t(...s), n)
}
  , Bi = Xe("bm")
  , vt = Xe("m")
  , tc = Xe("bu")
  , nc = Xe("u")
  , ki = Xe("bum")
  , rn = Xe("um")
  , sc = Xe("sp")
  , rc = Xe("rtg")
  , ic = Xe("rtc");
function oc(e, t=fe) {
    Kn("ec", e, t)
}
const Wi = "components";
function Tf(e, t) {
    return qi(Wi, e, !0, t) || e
}
const Ki = Symbol.for("v-ndc");
function Cf(e) {
    return re(e) ? qi(Wi, e, !1) || e : e || Ki
}
function qi(e, t, n=!0, s=!1) {
    const r = ue || fe;
    if (r) {
        const i = r.type;
        {
            const l = qc(i, !1);
            if (l && (l === t || l === Le(t) || l === Dn(Le(t))))
                return i
        }
        const o = br(r[e] || i[e], t) || br(r.appContext[e], t);
        return !o && s ? i : o
    }
}
function br(e, t) {
    return e && (e[t] || e[Le(t)] || e[Dn(Le(t))])
}
function Af(e, t, n, s) {
    let r;
    const i = n
      , o = K(e);
    if (o || re(e)) {
        const l = o && ht(e);
        let c = !1;
        l && (c = !Pe(e),
        e = Un(e)),
        r = new Array(e.length);
        for (let f = 0, a = e.length; f < a; f++)
            r[f] = t(c ? ye(e[f]) : e[f], f, void 0, i)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++)
            r[l] = t(l + 1, l, void 0, i)
    } else if (ne(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (l, c) => t(l, c, void 0, i));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, f = l.length; c < f; c++) {
                const a = l[c];
                r[c] = t(e[a], a, c, i)
            }
        }
    else
        r = [];
    return r
}
function Rf(e, t, n={}, s, r) {
    if (ue.ce || ue.parent && pt(ue.parent) && ue.parent.ce)
        return t !== "default" && (n.name = t),
        Ms(),
        Ps(ve, null, [le("slot", n, s && s())], 64);
    let i = e[t];
    i && i._c && (i._d = !1),
    Ms();
    const o = i && Gi(i(n))
      , l = n.key || o && o.key
      , c = Ps(ve, {
        key: (l && !Ye(l) ? l : `_${t}`) + (!o && s ? "_fb" : "")
    }, o || (s ? s() : []), o && e._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    c
}
function Gi(e) {
    return e.some(t => zt(t) ? !(t.type === be || t.type === ve && !Gi(t.children)) : !0) ? e : null
}
function Of(e, t) {
    const n = {};
    for (const s in e)
        n[/[A-Z]/.test(s) ? `on:${s}` : _n(s)] = e[s];
    return n
}
const Cs = e => e ? vo(e) ? Yn(e) : Cs(e.parent) : null
  , kt = de(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Cs(e.parent),
    $root: e => Cs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Xi(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Xs(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = Wn.bind(e.proxy)),
    $watch: e => Oc.bind(e)
})
  , rs = (e, t) => e !== Z && !e.__isScriptSetup && z(e, t)
  , lc = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c} = e;
        let f;
        if (t[0] !== "$") {
            const v = o[t];
            if (v !== void 0)
                switch (v) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
                }
            else {
                if (rs(s, t))
                    return o[t] = 1,
                    s[t];
                if (r !== Z && z(r, t))
                    return o[t] = 2,
                    r[t];
                if ((f = e.propsOptions[0]) && z(f, t))
                    return o[t] = 3,
                    i[t];
                if (n !== Z && z(n, t))
                    return o[t] = 4,
                    n[t];
                As && (o[t] = 0)
            }
        }
        const a = kt[t];
        let d, y;
        if (a)
            return t === "$attrs" && me(e.attrs, "get", ""),
            a(e);
        if ((d = l.__cssModules) && (d = d[t]))
            return d;
        if (n !== Z && z(n, t))
            return o[t] = 4,
            n[t];
        if (y = c.config.globalProperties,
        z(y, t))
            return y[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: i} = e;
        return rs(r, t) ? (r[t] = n,
        !0) : s !== Z && z(s, t) ? (s[t] = n,
        !0) : z(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i}}, o) {
        let l;
        return !!n[o] || e !== Z && z(e, o) || rs(t, o) || (l = i[0]) && z(l, o) || z(s, o) || z(kt, o) || z(r.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Mf() {
    return cc().slots
}
function cc() {
    const e = Nt();
    return e.setupContext || (e.setupContext = _o(e))
}
function _r(e) {
    return K(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let As = !0;
function ac(e) {
    const t = Xi(e)
      , n = e.proxy
      , s = e.ctx;
    As = !1,
    t.beforeCreate && wr(t.beforeCreate, e, "bc");
    const {data: r, computed: i, methods: o, watch: l, provide: c, inject: f, created: a, beforeMount: d, mounted: y, beforeUpdate: v, updated: S, activated: b, deactivated: k, beforeDestroy: N, beforeUnmount: j, destroyed: p, unmounted: g, render: M, renderTracked: F, renderTriggered: H, errorCaptured: V, serverPrefetch: R, expose: _, inheritAttrs: I, components: E, directives: W, filters: se} = t;
    if (f && fc(f, s, null),
    o)
        for (const Y in o) {
            const D = o[Y];
            q(D) && (s[Y] = D.bind(n))
        }
    if (r) {
        const Y = r.call(n, n);
        ne(Y) && (e.data = Bn(Y))
    }
    if (As = !0,
    i)
        for (const Y in i) {
            const D = i[Y]
              , he = q(D) ? D.bind(n, n) : q(D.get) ? D.get.bind(n, n) : Be
              , ln = !q(D) && q(D.set) ? D.set.bind(n) : Be
              , ot = ie({
                get: he,
                set: ln
            });
            Object.defineProperty(s, Y, {
                enumerable: !0,
                configurable: !0,
                get: () => ot.value,
                set: De => ot.value = De
            })
        }
    if (l)
        for (const Y in l)
            Yi(l[Y], s, n, Y);
    if (c) {
        const Y = q(c) ? c.call(n) : c;
        Reflect.ownKeys(Y).forEach(D => {
            mc(D, Y[D])
        }
        )
    }
    a && wr(a, e, "c");
    function U(Y, D) {
        K(D) ? D.forEach(he => Y(he.bind(n))) : D && Y(D.bind(n))
    }
    if (U(Bi, d),
    U(vt, y),
    U(tc, v),
    U(nc, S),
    U(Ql, b),
    U(Zl, k),
    U(oc, V),
    U(ic, F),
    U(rc, H),
    U(ki, j),
    U(rn, g),
    U(sc, R),
    K(_))
        if (_.length) {
            const Y = e.exposed || (e.exposed = {});
            _.forEach(D => {
                Object.defineProperty(Y, D, {
                    get: () => n[D],
                    set: he => n[D] = he
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    M && e.render === Be && (e.render = M),
    I != null && (e.inheritAttrs = I),
    E && (e.components = E),
    W && (e.directives = W),
    R && zs(e)
}
function fc(e, t, n=Be) {
    K(e) && (e = Rs(e));
    for (const s in e) {
        const r = e[s];
        let i;
        ne(r) ? "default"in r ? i = Mt(r.from || s, r.default, !0) : i = Mt(r.from || s) : i = Mt(r),
        ae(i) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[s] = i
    }
}
function wr(e, t, n) {
    $e(K(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function Yi(e, t, n, s) {
    let r = s.includes(".") ? ao(n, s) : () => n[s];
    if (re(e)) {
        const i = t[e];
        q(i) && Fe(r, i)
    } else if (q(e))
        Fe(r, e.bind(n));
    else if (ne(e))
        if (K(e))
            e.forEach(i => Yi(i, t, n, s));
        else {
            const i = q(e.handler) ? e.handler.bind(n) : t[e.handler];
            q(i) && Fe(r, i, e)
        }
}
function Xi(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: r, optionsCache: i, config: {optionMergeStrategies: o}} = e.appContext
      , l = i.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {},
    r.length && r.forEach(f => In(c, f, o, !0)),
    In(c, t, o)),
    ne(t) && i.set(t, c),
    c
}
function In(e, t, n, s=!1) {
    const {mixins: r, extends: i} = t;
    i && In(e, i, n, !0),
    r && r.forEach(o => In(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = uc[o] || n && n[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const uc = {
    data: Sr,
    props: xr,
    emits: xr,
    methods: jt,
    computed: jt,
    beforeCreate: _e,
    created: _e,
    beforeMount: _e,
    mounted: _e,
    beforeUpdate: _e,
    updated: _e,
    beforeDestroy: _e,
    beforeUnmount: _e,
    destroyed: _e,
    unmounted: _e,
    activated: _e,
    deactivated: _e,
    errorCaptured: _e,
    serverPrefetch: _e,
    components: jt,
    directives: jt,
    watch: hc,
    provide: Sr,
    inject: dc
};
function Sr(e, t) {
    return t ? e ? function() {
        return de(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t)
    }
    : t : e
}
function dc(e, t) {
    return jt(Rs(e), Rs(t))
}
function Rs(e) {
    if (K(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function _e(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function jt(e, t) {
    return e ? de(Object.create(null), e, t) : t
}
function xr(e, t) {
    return e ? K(e) && K(t) ? [...new Set([...e, ...t])] : de(Object.create(null), _r(e), _r(t ?? {})) : t
}
function hc(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = de(Object.create(null), e);
    for (const s in t)
        n[s] = _e(e[s], t[s]);
    return n
}
function Ji() {
    return {
        app: null,
        config: {
            isNativeTag: Wo,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let pc = 0;
function gc(e, t) {
    return function(s, r=null) {
        q(s) || (s = de({}, s)),
        r != null && !ne(r) && (r = null);
        const i = Ji()
          , o = new WeakSet
          , l = [];
        let c = !1;
        const f = i.app = {
            _uid: pc++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Yc,
            get config() {
                return i.config
            },
            set config(a) {},
            use(a, ...d) {
                return o.has(a) || (a && q(a.install) ? (o.add(a),
                a.install(f, ...d)) : q(a) && (o.add(a),
                a(f, ...d))),
                f
            },
            mixin(a) {
                return i.mixins.includes(a) || i.mixins.push(a),
                f
            },
            component(a, d) {
                return d ? (i.components[a] = d,
                f) : i.components[a]
            },
            directive(a, d) {
                return d ? (i.directives[a] = d,
                f) : i.directives[a]
            },
            mount(a, d, y) {
                if (!c) {
                    const v = f._ceVNode || le(s, r);
                    return v.appContext = i,
                    y === !0 ? y = "svg" : y === !1 && (y = void 0),
                    d && t ? t(v, a) : e(v, a, y),
                    c = !0,
                    f._container = a,
                    a.__vue_app__ = f,
                    Yn(v.component)
                }
            },
            onUnmount(a) {
                l.push(a)
            },
            unmount() {
                c && ($e(l, f._instance, 16),
                e(null, f._container),
                delete f._container.__vue_app__)
            },
            provide(a, d) {
                return i.provides[a] = d,
                f
            },
            runWithContext(a) {
                const d = Ot;
                Ot = f;
                try {
                    return a()
                } finally {
                    Ot = d
                }
            }
        };
        return f
    }
}
let Ot = null;
function mc(e, t) {
    if (fe) {
        let n = fe.provides;
        const s = fe.parent && fe.parent.provides;
        s === n && (n = fe.provides = Object.create(s)),
        n[e] = t
    }
}
function Mt(e, t, n=!1) {
    const s = fe || ue;
    if (s || Ot) {
        const r = Ot ? Ot._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && q(t) ? t.call(s && s.proxy) : t
    }
}
const zi = {}
  , Qi = () => Object.create(zi)
  , Zi = e => Object.getPrototypeOf(e) === zi;
function yc(e, t, n, s=!1) {
    const r = {}
      , i = Qi();
    e.propsDefaults = Object.create(null),
    eo(e, t, r, i);
    for (const o in e.propsOptions[0])
        o in r || (r[o] = void 0);
    n ? e.props = s ? r : El(r) : e.type.props ? e.props = r : e.props = i,
    e.attrs = i
}
function vc(e, t, n, s) {
    const {props: r, attrs: i, vnode: {patchFlag: o}} = e
      , l = J(r)
      , [c] = e.propsOptions;
    let f = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const a = e.vnode.dynamicProps;
            for (let d = 0; d < a.length; d++) {
                let y = a[d];
                if (Gn(e.emitsOptions, y))
                    continue;
                const v = t[y];
                if (c)
                    if (z(i, y))
                        v !== i[y] && (i[y] = v,
                        f = !0);
                    else {
                        const S = Le(y);
                        r[S] = Os(c, l, S, v, e, !1)
                    }
                else
                    v !== i[y] && (i[y] = v,
                    f = !0)
            }
        }
    } else {
        eo(e, t, r, i) && (f = !0);
        let a;
        for (const d in l)
            (!t || !z(t, d) && ((a = st(d)) === d || !z(t, a))) && (c ? n && (n[d] !== void 0 || n[a] !== void 0) && (r[d] = Os(c, l, d, void 0, e, !0)) : delete r[d]);
        if (i !== l)
            for (const d in i)
                (!t || !z(t, d)) && (delete i[d],
                f = !0)
    }
    f && qe(e.attrs, "set", "")
}
function eo(e, t, n, s) {
    const [r,i] = e.propsOptions;
    let o = !1, l;
    if (t)
        for (let c in t) {
            if (At(c))
                continue;
            const f = t[c];
            let a;
            r && z(r, a = Le(c)) ? !i || !i.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : Gn(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f,
            o = !0)
        }
    if (i) {
        const c = J(n)
          , f = l || Z;
        for (let a = 0; a < i.length; a++) {
            const d = i[a];
            n[d] = Os(r, c, d, f[d], e, !z(f, d))
        }
    }
    return o
}
function Os(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
        const l = z(o, "default");
        if (l && s === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && q(c)) {
                const {propsDefaults: f} = r;
                if (n in f)
                    s = f[n];
                else {
                    const a = on(r);
                    s = f[n] = c.call(null, t),
                    a()
                }
            } else
                s = c;
            r.ce && r.ce._setProp(n, s)
        }
        o[0] && (i && !l ? s = !1 : o[1] && (s === "" || s === st(n)) && (s = !0))
    }
    return s
}
const bc = new WeakMap;
function to(e, t, n=!1) {
    const s = n ? bc : t.propsCache
      , r = s.get(e);
    if (r)
        return r;
    const i = e.props
      , o = {}
      , l = [];
    let c = !1;
    if (!q(e)) {
        const a = d => {
            c = !0;
            const [y,v] = to(d, t, !0);
            de(o, y),
            v && l.push(...v)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(a),
        e.extends && a(e.extends),
        e.mixins && e.mixins.forEach(a)
    }
    if (!i && !c)
        return ne(e) && s.set(e, Tt),
        Tt;
    if (K(i))
        for (let a = 0; a < i.length; a++) {
            const d = Le(i[a]);
            Er(d) && (o[d] = Z)
        }
    else if (i)
        for (const a in i) {
            const d = Le(a);
            if (Er(d)) {
                const y = i[a]
                  , v = o[d] = K(y) || q(y) ? {
                    type: y
                } : de({}, y)
                  , S = v.type;
                let b = !1
                  , k = !0;
                if (K(S))
                    for (let N = 0; N < S.length; ++N) {
                        const j = S[N]
                          , p = q(j) && j.name;
                        if (p === "Boolean") {
                            b = !0;
                            break
                        } else
                            p === "String" && (k = !1)
                    }
                else
                    b = q(S) && S.name === "Boolean";
                v[0] = b,
                v[1] = k,
                (b || z(v, "default")) && l.push(d)
            }
        }
    const f = [o, l];
    return ne(e) && s.set(e, f),
    f
}
function Er(e) {
    return e[0] !== "$" && !At(e)
}
const no = e => e[0] === "_" || e === "$stable"
  , Qs = e => K(e) ? e.map(Me) : [Me(e)]
  , _c = (e, t, n) => {
    if (t._n)
        return t;
    const s = Vl( (...r) => Qs(t(...r)), n);
    return s._c = !1,
    s
}
  , so = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (no(r))
            continue;
        const i = e[r];
        if (q(i))
            t[r] = _c(r, i, s);
        else if (i != null) {
            const o = Qs(i);
            t[r] = () => o
        }
    }
}
  , ro = (e, t) => {
    const n = Qs(t);
    e.slots.default = () => n
}
  , io = (e, t, n) => {
    for (const s in t)
        (n || s !== "_") && (e[s] = t[s])
}
  , wc = (e, t, n) => {
    const s = e.slots = Qi();
    if (e.vnode.shapeFlag & 32) {
        const r = t._;
        r ? (io(s, t, n),
        n && li(s, "_", r, !0)) : so(t, s)
    } else
        t && ro(e, t)
}
  , Sc = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let i = !0
      , o = Z;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? i = !1 : io(r, t, n) : (i = !t.$stable,
        so(t, r)),
        o = t
    } else
        t && (ro(e, t),
        o = {
            default: 1
        });
    if (i)
        for (const l in r)
            !no(l) && o[l] == null && delete r[l]
}
  , xe = ho;
function xc(e) {
    return oo(e)
}
function Ec(e) {
    return oo(e, Xl)
}
function oo(e, t) {
    const n = jn();
    n.__VUE__ = !0;
    const {insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: c, setText: f, setElementText: a, parentNode: d, nextSibling: y, setScopeId: v=Be, insertStaticContent: S} = e
      , b = (u, h, m, T=null, w=null, x=null, P=void 0, O=null, A=!!h.dynamicChildren) => {
        if (u === h)
            return;
        u && !ut(u, h) && (T = cn(u),
        De(u, w, x, !0),
        u = null),
        h.patchFlag === -2 && (A = !1,
        h.dynamicChildren = null);
        const {type: C, ref: B, shapeFlag: L} = h;
        switch (C) {
        case gt:
            k(u, h, m, T);
            break;
        case be:
            N(u, h, m, T);
            break;
        case Pt:
            u == null && j(h, m, T, P);
            break;
        case ve:
            E(u, h, m, T, w, x, P, O, A);
            break;
        default:
            L & 1 ? M(u, h, m, T, w, x, P, O, A) : L & 6 ? W(u, h, m, T, w, x, P, O, A) : (L & 64 || L & 128) && C.process(u, h, m, T, w, x, P, O, A, bt)
        }
        B != null && w && Ln(B, u && u.ref, x, h || u, !h)
    }
      , k = (u, h, m, T) => {
        if (u == null)
            s(h.el = l(h.children), m, T);
        else {
            const w = h.el = u.el;
            h.children !== u.children && f(w, h.children)
        }
    }
      , N = (u, h, m, T) => {
        u == null ? s(h.el = c(h.children || ""), m, T) : h.el = u.el
    }
      , j = (u, h, m, T) => {
        [u.el,u.anchor] = S(u.children, h, m, T, u.el, u.anchor)
    }
      , p = ({el: u, anchor: h}, m, T) => {
        let w;
        for (; u && u !== h; )
            w = y(u),
            s(u, m, T),
            u = w;
        s(h, m, T)
    }
      , g = ({el: u, anchor: h}) => {
        let m;
        for (; u && u !== h; )
            m = y(u),
            r(u),
            u = m;
        r(h)
    }
      , M = (u, h, m, T, w, x, P, O, A) => {
        h.type === "svg" ? P = "svg" : h.type === "math" && (P = "mathml"),
        u == null ? F(h, m, T, w, x, P, O, A) : R(u, h, w, x, P, O, A)
    }
      , F = (u, h, m, T, w, x, P, O) => {
        let A, C;
        const {props: B, shapeFlag: L, transition: $, dirs: G} = u;
        if (A = u.el = o(u.type, x, B && B.is, B),
        L & 8 ? a(A, u.children) : L & 16 && V(u.children, A, null, T, w, is(u, x), P, O),
        G && Ue(u, null, T, "created"),
        H(A, u, u.scopeId, P, T),
        B) {
            for (const ee in B)
                ee !== "value" && !At(ee) && i(A, ee, null, B[ee], x, T);
            "value"in B && i(A, "value", null, B.value, x),
            (C = B.onVnodeBeforeMount) && Oe(C, T, u)
        }
        G && Ue(u, null, T, "beforeMount");
        const X = lo(w, $);
        X && $.beforeEnter(A),
        s(A, h, m),
        ((C = B && B.onVnodeMounted) || X || G) && xe( () => {
            C && Oe(C, T, u),
            X && $.enter(A),
            G && Ue(u, null, T, "mounted")
        }
        , w)
    }
      , H = (u, h, m, T, w) => {
        if (m && v(u, m),
        T)
            for (let x = 0; x < T.length; x++)
                v(u, T[x]);
        if (w) {
            let x = w.subTree;
            if (h === x || uo(x.type) && (x.ssContent === h || x.ssFallback === h)) {
                const P = w.vnode;
                H(u, P, P.scopeId, P.slotScopeIds, w.parent)
            }
        }
    }
      , V = (u, h, m, T, w, x, P, O, A=0) => {
        for (let C = A; C < u.length; C++) {
            const B = u[C] = O ? et(u[C]) : Me(u[C]);
            b(null, B, h, m, T, w, x, P, O)
        }
    }
      , R = (u, h, m, T, w, x, P) => {
        const O = h.el = u.el;
        let {patchFlag: A, dynamicChildren: C, dirs: B} = h;
        A |= u.patchFlag & 16;
        const L = u.props || Z
          , $ = h.props || Z;
        let G;
        if (m && lt(m, !1),
        (G = $.onVnodeBeforeUpdate) && Oe(G, m, h, u),
        B && Ue(h, u, m, "beforeUpdate"),
        m && lt(m, !0),
        (L.innerHTML && $.innerHTML == null || L.textContent && $.textContent == null) && a(O, ""),
        C ? _(u.dynamicChildren, C, O, m, T, is(h, w), x) : P || D(u, h, O, null, m, T, is(h, w), x, !1),
        A > 0) {
            if (A & 16)
                I(O, L, $, m, w);
            else if (A & 2 && L.class !== $.class && i(O, "class", null, $.class, w),
            A & 4 && i(O, "style", L.style, $.style, w),
            A & 8) {
                const X = h.dynamicProps;
                for (let ee = 0; ee < X.length; ee++) {
                    const Q = X[ee]
                      , Ee = L[Q]
                      , pe = $[Q];
                    (pe !== Ee || Q === "value") && i(O, Q, Ee, pe, w, m)
                }
            }
            A & 1 && u.children !== h.children && a(O, h.children)
        } else
            !P && C == null && I(O, L, $, m, w);
        ((G = $.onVnodeUpdated) || B) && xe( () => {
            G && Oe(G, m, h, u),
            B && Ue(h, u, m, "updated")
        }
        , T)
    }
      , _ = (u, h, m, T, w, x, P) => {
        for (let O = 0; O < h.length; O++) {
            const A = u[O]
              , C = h[O]
              , B = A.el && (A.type === ve || !ut(A, C) || A.shapeFlag & 70) ? d(A.el) : m;
            b(A, C, B, null, T, w, x, P, !0)
        }
    }
      , I = (u, h, m, T, w) => {
        if (h !== m) {
            if (h !== Z)
                for (const x in h)
                    !At(x) && !(x in m) && i(u, x, h[x], null, w, T);
            for (const x in m) {
                if (At(x))
                    continue;
                const P = m[x]
                  , O = h[x];
                P !== O && x !== "value" && i(u, x, O, P, w, T)
            }
            "value"in m && i(u, "value", h.value, m.value, w)
        }
    }
      , E = (u, h, m, T, w, x, P, O, A) => {
        const C = h.el = u ? u.el : l("")
          , B = h.anchor = u ? u.anchor : l("");
        let {patchFlag: L, dynamicChildren: $, slotScopeIds: G} = h;
        G && (O = O ? O.concat(G) : G),
        u == null ? (s(C, m, T),
        s(B, m, T),
        V(h.children || [], m, B, w, x, P, O, A)) : L > 0 && L & 64 && $ && u.dynamicChildren ? (_(u.dynamicChildren, $, m, w, x, P, O),
        (h.key != null || w && h === w.subTree) && Zs(u, h, !0)) : D(u, h, m, B, w, x, P, O, A)
    }
      , W = (u, h, m, T, w, x, P, O, A) => {
        h.slotScopeIds = O,
        u == null ? h.shapeFlag & 512 ? w.ctx.activate(h, m, T, P, A) : se(h, m, T, w, x, P, A) : ce(u, h, A)
    }
      , se = (u, h, m, T, w, x, P) => {
        const O = u.component = Bc(u, T, w);
        if (sn(u) && (O.ctx.renderer = bt),
        kc(O, !1, P),
        O.asyncDep) {
            if (w && w.registerDep(O, U, P),
            !u.el) {
                const A = O.subTree = le(be);
                N(null, A, h, m)
            }
        } else
            U(O, u, h, m, w, x, P)
    }
      , ce = (u, h, m) => {
        const T = h.component = u.component;
        if (Nc(u, h, m))
            if (T.asyncDep && !T.asyncResolved) {
                Y(T, h, m);
                return
            } else
                T.next = h,
                T.update();
        else
            h.el = u.el,
            T.vnode = h
    }
      , U = (u, h, m, T, w, x, P) => {
        const O = () => {
            if (u.isMounted) {
                let {next: L, bu: $, u: G, parent: X, vnode: ee} = u;
                {
                    const Te = co(u);
                    if (Te) {
                        L && (L.el = ee.el,
                        Y(u, L, P)),
                        Te.asyncDep.then( () => {
                            u.isUnmounted || O()
                        }
                        );
                        return
                    }
                }
                let Q = L, Ee;
                lt(u, !1),
                L ? (L.el = ee.el,
                Y(u, L, P)) : L = ee,
                $ && wn($),
                (Ee = L.props && L.props.onVnodeBeforeUpdate) && Oe(Ee, X, L, ee),
                lt(u, !0);
                const pe = os(u)
                  , Ie = u.subTree;
                u.subTree = pe,
                b(Ie, pe, d(Ie.el), cn(Ie), u, w, x),
                L.el = pe.el,
                Q === null && Fc(u, pe.el),
                G && xe(G, w),
                (Ee = L.props && L.props.onVnodeUpdated) && xe( () => Oe(Ee, X, L, ee), w)
            } else {
                let L;
                const {el: $, props: G} = h
                  , {bm: X, m: ee, parent: Q, root: Ee, type: pe} = u
                  , Ie = pt(h);
                if (lt(u, !1),
                X && wn(X),
                !Ie && (L = G && G.onVnodeBeforeMount) && Oe(L, Q, h),
                lt(u, !0),
                $ && zn) {
                    const Te = () => {
                        u.subTree = os(u),
                        zn($, u.subTree, u, w, null)
                    }
                    ;
                    Ie && pe.__asyncHydrate ? pe.__asyncHydrate($, u, Te) : Te()
                } else {
                    Ee.ce && Ee.ce._injectChildStyle(pe);
                    const Te = u.subTree = os(u);
                    b(null, Te, m, T, u, w, x),
                    h.el = Te.el
                }
                if (ee && xe(ee, w),
                !Ie && (L = G && G.onVnodeMounted)) {
                    const Te = h;
                    xe( () => Oe(L, Q, Te), w)
                }
                (h.shapeFlag & 256 || Q && pt(Q.vnode) && Q.vnode.shapeFlag & 256) && u.a && xe(u.a, w),
                u.isMounted = !0,
                h = m = T = null
            }
        }
        ;
        u.scope.on();
        const A = u.effect = new di(O);
        u.scope.off();
        const C = u.update = A.run.bind(A)
          , B = u.job = A.runIfDirty.bind(A);
        B.i = u,
        B.id = u.uid,
        A.scheduler = () => Xs(B),
        lt(u, !0),
        C()
    }
      , Y = (u, h, m) => {
        h.component = u;
        const T = u.vnode.props;
        u.vnode = h,
        u.next = null,
        vc(u, h.props, T, m),
        Sc(u, h.children, m),
        rt(),
        hr(u),
        it()
    }
      , D = (u, h, m, T, w, x, P, O, A=!1) => {
        const C = u && u.children
          , B = u ? u.shapeFlag : 0
          , L = h.children
          , {patchFlag: $, shapeFlag: G} = h;
        if ($ > 0) {
            if ($ & 128) {
                ln(C, L, m, T, w, x, P, O, A);
                return
            } else if ($ & 256) {
                he(C, L, m, T, w, x, P, O, A);
                return
            }
        }
        G & 8 ? (B & 16 && Ft(C, w, x),
        L !== C && a(m, L)) : B & 16 ? G & 16 ? ln(C, L, m, T, w, x, P, O, A) : Ft(C, w, x, !0) : (B & 8 && a(m, ""),
        G & 16 && V(L, m, T, w, x, P, O, A))
    }
      , he = (u, h, m, T, w, x, P, O, A) => {
        u = u || Tt,
        h = h || Tt;
        const C = u.length
          , B = h.length
          , L = Math.min(C, B);
        let $;
        for ($ = 0; $ < L; $++) {
            const G = h[$] = A ? et(h[$]) : Me(h[$]);
            b(u[$], G, m, null, w, x, P, O, A)
        }
        C > B ? Ft(u, w, x, !0, !1, L) : V(h, m, T, w, x, P, O, A, L)
    }
      , ln = (u, h, m, T, w, x, P, O, A) => {
        let C = 0;
        const B = h.length;
        let L = u.length - 1
          , $ = B - 1;
        for (; C <= L && C <= $; ) {
            const G = u[C]
              , X = h[C] = A ? et(h[C]) : Me(h[C]);
            if (ut(G, X))
                b(G, X, m, null, w, x, P, O, A);
            else
                break;
            C++
        }
        for (; C <= L && C <= $; ) {
            const G = u[L]
              , X = h[$] = A ? et(h[$]) : Me(h[$]);
            if (ut(G, X))
                b(G, X, m, null, w, x, P, O, A);
            else
                break;
            L--,
            $--
        }
        if (C > L) {
            if (C <= $) {
                const G = $ + 1
                  , X = G < B ? h[G].el : T;
                for (; C <= $; )
                    b(null, h[C] = A ? et(h[C]) : Me(h[C]), m, X, w, x, P, O, A),
                    C++
            }
        } else if (C > $)
            for (; C <= L; )
                De(u[C], w, x, !0),
                C++;
        else {
            const G = C
              , X = C
              , ee = new Map;
            for (C = X; C <= $; C++) {
                const Ce = h[C] = A ? et(h[C]) : Me(h[C]);
                Ce.key != null && ee.set(Ce.key, C)
            }
            let Q, Ee = 0;
            const pe = $ - X + 1;
            let Ie = !1
              , Te = 0;
            const $t = new Array(pe);
            for (C = 0; C < pe; C++)
                $t[C] = 0;
            for (C = G; C <= L; C++) {
                const Ce = u[C];
                if (Ee >= pe) {
                    De(Ce, w, x, !0);
                    continue
                }
                let je;
                if (Ce.key != null)
                    je = ee.get(Ce.key);
                else
                    for (Q = X; Q <= $; Q++)
                        if ($t[Q - X] === 0 && ut(Ce, h[Q])) {
                            je = Q;
                            break
                        }
                je === void 0 ? De(Ce, w, x, !0) : ($t[je - X] = C + 1,
                je >= Te ? Te = je : Ie = !0,
                b(Ce, h[je], m, null, w, x, P, O, A),
                Ee++)
            }
            const cr = Ie ? Tc($t) : Tt;
            for (Q = cr.length - 1,
            C = pe - 1; C >= 0; C--) {
                const Ce = X + C
                  , je = h[Ce]
                  , ar = Ce + 1 < B ? h[Ce + 1].el : T;
                $t[C] === 0 ? b(null, je, m, ar, w, x, P, O, A) : Ie && (Q < 0 || C !== cr[Q] ? ot(je, m, ar, 2) : Q--)
            }
        }
    }
      , ot = (u, h, m, T, w=null) => {
        const {el: x, type: P, transition: O, children: A, shapeFlag: C} = u;
        if (C & 6) {
            ot(u.component.subTree, h, m, T);
            return
        }
        if (C & 128) {
            u.suspense.move(h, m, T);
            return
        }
        if (C & 64) {
            P.move(u, h, m, bt);
            return
        }
        if (P === ve) {
            s(x, h, m);
            for (let L = 0; L < A.length; L++)
                ot(A[L], h, m, T);
            s(u.anchor, h, m);
            return
        }
        if (P === Pt) {
            p(u, h, m);
            return
        }
        if (T !== 2 && C & 1 && O)
            if (T === 0)
                O.beforeEnter(x),
                s(x, h, m),
                xe( () => O.enter(x), w);
            else {
                const {leave: L, delayLeave: $, afterLeave: G} = O
                  , X = () => s(x, h, m)
                  , ee = () => {
                    L(x, () => {
                        X(),
                        G && G()
                    }
                    )
                }
                ;
                $ ? $(x, X, ee) : ee()
            }
        else
            s(x, h, m)
    }
      , De = (u, h, m, T=!1, w=!1) => {
        const {type: x, props: P, ref: O, children: A, dynamicChildren: C, shapeFlag: B, patchFlag: L, dirs: $, cacheIndex: G} = u;
        if (L === -2 && (w = !1),
        O != null && Ln(O, null, m, u, !0),
        G != null && (h.renderCache[G] = void 0),
        B & 256) {
            h.ctx.deactivate(u);
            return
        }
        const X = B & 1 && $
          , ee = !pt(u);
        let Q;
        if (ee && (Q = P && P.onVnodeBeforeUnmount) && Oe(Q, h, u),
        B & 6)
            ko(u.component, m, T);
        else {
            if (B & 128) {
                u.suspense.unmount(m, T);
                return
            }
            X && Ue(u, null, h, "beforeUnmount"),
            B & 64 ? u.type.remove(u, h, m, bt, T) : C && !C.hasOnce && (x !== ve || L > 0 && L & 64) ? Ft(C, h, m, !1, !0) : (x === ve && L & 384 || !w && B & 16) && Ft(A, h, m),
            T && or(u)
        }
        (ee && (Q = P && P.onVnodeUnmounted) || X) && xe( () => {
            Q && Oe(Q, h, u),
            X && Ue(u, null, h, "unmounted")
        }
        , m)
    }
      , or = u => {
        const {type: h, el: m, anchor: T, transition: w} = u;
        if (h === ve) {
            Bo(m, T);
            return
        }
        if (h === Pt) {
            g(u);
            return
        }
        const x = () => {
            r(m),
            w && !w.persisted && w.afterLeave && w.afterLeave()
        }
        ;
        if (u.shapeFlag & 1 && w && !w.persisted) {
            const {leave: P, delayLeave: O} = w
              , A = () => P(m, x);
            O ? O(u.el, x, A) : A()
        } else
            x()
    }
      , Bo = (u, h) => {
        let m;
        for (; u !== h; )
            m = y(u),
            r(u),
            u = m;
        r(h)
    }
      , ko = (u, h, m) => {
        const {bum: T, scope: w, job: x, subTree: P, um: O, m: A, a: C} = u;
        Tr(A),
        Tr(C),
        T && wn(T),
        w.stop(),
        x && (x.flags |= 8,
        De(P, u, h, m)),
        O && xe(O, h),
        xe( () => {
            u.isUnmounted = !0
        }
        , h),
        h && h.pendingBranch && !h.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === h.pendingId && (h.deps--,
        h.deps === 0 && h.resolve())
    }
      , Ft = (u, h, m, T=!1, w=!1, x=0) => {
        for (let P = x; P < u.length; P++)
            De(u[P], h, m, T, w)
    }
      , cn = u => {
        if (u.shapeFlag & 6)
            return cn(u.component.subTree);
        if (u.shapeFlag & 128)
            return u.suspense.next();
        const h = y(u.anchor || u.el)
          , m = h && h[Ii];
        return m ? y(m) : h
    }
    ;
    let Xn = !1;
    const lr = (u, h, m) => {
        u == null ? h._vnode && De(h._vnode, null, null, !0) : b(h._vnode || null, u, h, null, null, null, m),
        h._vnode = u,
        Xn || (Xn = !0,
        hr(),
        Mn(),
        Xn = !1)
    }
      , bt = {
        p: b,
        um: De,
        m: ot,
        r: or,
        mt: se,
        mc: V,
        pc: D,
        pbc: _,
        n: cn,
        o: e
    };
    let Jn, zn;
    return t && ([Jn,zn] = t(bt)),
    {
        render: lr,
        hydrate: Jn,
        createApp: gc(lr, Jn)
    }
}
function is({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function lt({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function lo(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Zs(e, t, n=!1) {
    const s = e.children
      , r = t.children;
    if (K(s) && K(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let l = r[i];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = et(r[i]),
            l.el = o.el),
            !n && l.patchFlag !== -2 && Zs(o, l)),
            l.type === gt && (l.el = o.el)
        }
}
function Tc(e) {
    const t = e.slice()
      , n = [0];
    let s, r, i, o, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const f = e[s];
        if (f !== 0) {
            if (r = n[n.length - 1],
            e[r] < f) {
                t[s] = r,
                n.push(s);
                continue
            }
            for (i = 0,
            o = n.length - 1; i < o; )
                l = i + o >> 1,
                e[n[l]] < f ? i = l + 1 : o = l;
            f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]),
            n[i] = s)
        }
    }
    for (i = n.length,
    o = n[i - 1]; i-- > 0; )
        n[i] = o,
        o = t[o];
    return n
}
function co(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : co(t)
}
function Tr(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const Cc = Symbol.for("v-scx")
  , Ac = () => Mt(Cc);
function er(e, t) {
    return qn(e, null, t)
}
function Rc(e, t) {
    return qn(e, null, {
        flush: "post"
    })
}
function Fe(e, t, n) {
    return qn(e, t, n)
}
function qn(e, t, n=Z) {
    const {immediate: s, deep: r, flush: i, once: o} = n
      , l = de({}, n)
      , c = t && s || !t && i !== "post";
    let f;
    if (Lt) {
        if (i === "sync") {
            const v = Ac();
            f = v.__watcherHandles || (v.__watcherHandles = [])
        } else if (!c) {
            const v = () => {}
            ;
            return v.stop = Be,
            v.resume = Be,
            v.pause = Be,
            v
        }
    }
    const a = fe;
    l.call = (v, S, b) => $e(v, a, S, b);
    let d = !1;
    i === "post" ? l.scheduler = v => {
        xe(v, a && a.suspense)
    }
    : i !== "sync" && (d = !0,
    l.scheduler = (v, S) => {
        S ? v() : Xs(v)
    }
    ),
    l.augmentJob = v => {
        t && (v.flags |= 4),
        d && (v.flags |= 2,
        a && (v.id = a.uid,
        v.i = a))
    }
    ;
    const y = $l(e, t, l);
    return Lt && (f ? f.push(y) : c && y()),
    y
}
function Oc(e, t, n) {
    const s = this.proxy
      , r = re(e) ? e.includes(".") ? ao(s, e) : () => s[e] : e.bind(s, s);
    let i;
    q(t) ? i = t : (i = t.handler,
    n = t);
    const o = on(this)
      , l = qn(r, i.bind(s), n);
    return o(),
    l
}
function ao(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++)
            s = s[n[r]];
        return s
    }
}
const Mc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Le(t)}Modifiers`] || e[`${st(t)}Modifiers`];
function Pc(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || Z;
    let r = n;
    const i = t.startsWith("update:")
      , o = i && Mc(s, t.slice(7));
    o && (o.trim && (r = n.map(a => re(a) ? a.trim() : a)),
    o.number && (r = n.map(bs)));
    let l, c = s[l = _n(t)] || s[l = _n(Le(t))];
    !c && i && (c = s[l = _n(st(t))]),
    c && $e(c, e, 6, r);
    const f = s[l + "Once"];
    if (f) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        $e(f, e, 6, r)
    }
}
function fo(e, t, n=!1) {
    const s = t.emitsCache
      , r = s.get(e);
    if (r !== void 0)
        return r;
    const i = e.emits;
    let o = {}
      , l = !1;
    if (!q(e)) {
        const c = f => {
            const a = fo(f, t, !0);
            a && (l = !0,
            de(o, a))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !i && !l ? (ne(e) && s.set(e, null),
    null) : (K(i) ? i.forEach(c => o[c] = null) : de(o, i),
    ne(e) && s.set(e, o),
    o)
}
function Gn(e, t) {
    return !e || !en(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    z(e, t[0].toLowerCase() + t.slice(1)) || z(e, st(t)) || z(e, t))
}
function os(e) {
    const {type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: c, render: f, renderCache: a, props: d, data: y, setupState: v, ctx: S, inheritAttrs: b} = e
      , k = Pn(e);
    let N, j;
    try {
        if (n.shapeFlag & 4) {
            const g = r || s
              , M = g;
            N = Me(f.call(M, g, a, d, v, y, S)),
            j = l
        } else {
            const g = t;
            N = Me(g.length > 1 ? g(d, {
                attrs: l,
                slots: o,
                emit: c
            }) : g(d, null)),
            j = t.props ? l : Lc(l)
        }
    } catch (g) {
        Wt.length = 0,
        nn(g, e, 1),
        N = le(be)
    }
    let p = N;
    if (j && b !== !1) {
        const g = Object.keys(j)
          , {shapeFlag: M} = p;
        g.length && M & 7 && (i && g.some(Hs) && (j = Ic(j, i)),
        p = nt(p, j, !1, !0))
    }
    return n.dirs && (p = nt(p, null, !1, !0),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && Xt(p, n.transition),
    N = p,
    Pn(k),
    N
}
const Lc = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || en(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , Ic = (e, t) => {
    const n = {};
    for (const s in e)
        (!Hs(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function Nc(e, t, n) {
    const {props: s, children: r, component: i} = e
      , {props: o, children: l, patchFlag: c} = t
      , f = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return s ? Cr(s, o, f) : !!o;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let d = 0; d < a.length; d++) {
                const y = a[d];
                if (o[y] !== s[y] && !Gn(f, y))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Cr(s, o, f) : !0 : !!o;
    return !1
}
function Cr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (t[i] !== e[i] && !Gn(n, i))
            return !0
    }
    return !1
}
function Fc({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const uo = e => e.__isSuspense;
function ho(e, t) {
    t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : jl(e)
}
const ve = Symbol.for("v-fgt")
  , gt = Symbol.for("v-txt")
  , be = Symbol.for("v-cmt")
  , Pt = Symbol.for("v-stc")
  , Wt = [];
let Ae = null;
function Ms(e=!1) {
    Wt.push(Ae = e ? null : [])
}
function $c() {
    Wt.pop(),
    Ae = Wt[Wt.length - 1] || null
}
let Jt = 1;
function Ar(e) {
    Jt += e,
    e < 0 && Ae && (Ae.hasOnce = !0)
}
function po(e) {
    return e.dynamicChildren = Jt > 0 ? Ae || Tt : null,
    $c(),
    Jt > 0 && Ae && Ae.push(e),
    e
}
function Pf(e, t, n, s, r, i) {
    return po(mo(e, t, n, s, r, i, !0))
}
function Ps(e, t, n, s, r) {
    return po(le(e, t, n, s, r, !0))
}
function zt(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
    return e.type === t.type && e.key === t.key
}
const go = ({key: e}) => e ?? null
  , En = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? re(e) || ae(e) || q(e) ? {
    i: ue,
    r: e,
    k: t,
    f: !!n
} : e : null);
function mo(e, t=null, n=null, s=0, r=null, i=e === ve ? 0 : 1, o=!1, l=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && go(t),
        ref: t && En(t),
        scopeId: Li,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ue
    };
    return l ? (tr(c, n),
    i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16),
    Jt > 0 && !o && Ae && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Ae.push(c),
    c
}
const le = Hc;
function Hc(e, t=null, n=null, s=0, r=null, i=!1) {
    if ((!e || e === Ki) && (e = be),
    zt(e)) {
        const l = nt(e, t, !0);
        return n && tr(l, n),
        Jt > 0 && !i && Ae && (l.shapeFlag & 6 ? Ae[Ae.indexOf(e)] = l : Ae.push(l)),
        l.patchFlag = -2,
        l
    }
    if (Gc(e) && (e = e.__vccOpts),
    t) {
        t = Dc(t);
        let {class: l, style: c} = t;
        l && !re(l) && (t.class = Us(l)),
        ne(c) && (Gs(c) && !K(c) && (c = de({}, c)),
        t.style = Vs(c))
    }
    const o = re(e) ? 1 : uo(e) ? 128 : Ni(e) ? 64 : ne(e) ? 4 : q(e) ? 2 : 0;
    return mo(e, t, n, s, r, o, i, !0)
}
function Dc(e) {
    return e ? Gs(e) || Zi(e) ? de({}, e) : e : null
}
function nt(e, t, n=!1, s=!1) {
    const {props: r, ref: i, patchFlag: o, children: l, transition: c} = e
      , f = t ? jc(r || {}, t) : r
      , a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && go(f),
        ref: t && t.ref ? n && i ? K(i) ? i.concat(En(t)) : [i, En(t)] : En(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && nt(e.ssContent),
        ssFallback: e.ssFallback && nt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && Xt(a, c.clone(a)),
    a
}
function yo(e=" ", t=0) {
    return le(gt, null, e, t)
}
function Lf(e, t) {
    const n = le(Pt, null, e);
    return n.staticCount = t,
    n
}
function If(e="", t=!1) {
    return t ? (Ms(),
    Ps(be, null, e)) : le(be, null, e)
}
function Me(e) {
    return e == null || typeof e == "boolean" ? le(be) : K(e) ? le(ve, null, e.slice()) : zt(e) ? et(e) : le(gt, null, String(e))
}
function et(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e)
}
function tr(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (K(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            tr(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Zi(t) ? t._ctx = ue : r === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        q(t) ? (t = {
            default: t,
            _ctx: ue
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [yo(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function jc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = Us([t.class, s.class]));
            else if (r === "style")
                t.style = Vs([t.style, s.style]);
            else if (en(r)) {
                const i = t[r]
                  , o = s[r];
                o && i !== o && !(K(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
            } else
                r !== "" && (t[r] = s[r])
    }
    return t
}
function Oe(e, t, n, s=null) {
    $e(e, t, 7, [n, s])
}
const Vc = Ji();
let Uc = 0;
function Bc(e, t, n) {
    const s = e.type
      , r = (t ? t.appContext : e.appContext) || Vc
      , i = {
        uid: Uc++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new sl(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: to(s, r),
        emitsOptions: fo(s, r),
        emit: null,
        emitted: null,
        propsDefaults: Z,
        inheritAttrs: s.inheritAttrs,
        ctx: Z,
        data: Z,
        props: Z,
        attrs: Z,
        slots: Z,
        refs: Z,
        setupState: Z,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = Pc.bind(null, i),
    e.ce && e.ce(i),
    i
}
let fe = null;
const Nt = () => fe || ue;
let Nn, Ls;
{
    const e = jn()
      , t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(s),
        i => {
            r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
        }
    }
    ;
    Nn = t("__VUE_INSTANCE_SETTERS__", n => fe = n),
    Ls = t("__VUE_SSR_SETTERS__", n => Lt = n)
}
const on = e => {
    const t = fe;
    return Nn(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Nn(t)
    }
}
  , Rr = () => {
    fe && fe.scope.off(),
    Nn(null)
}
;
function vo(e) {
    return e.vnode.shapeFlag & 4
}
let Lt = !1;
function kc(e, t=!1, n=!1) {
    t && Ls(t);
    const {props: s, children: r} = e.vnode
      , i = vo(e);
    yc(e, s, i, t),
    wc(e, r, n);
    const o = i ? Wc(e, t) : void 0;
    return t && Ls(!1),
    o
}
function Wc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,lc);
    const {setup: s} = n;
    if (s) {
        rt();
        const r = e.setupContext = s.length > 1 ? _o(e) : null
          , i = on(e)
          , o = tn(s, e, 0, [e.props, r])
          , l = ri(o);
        if (it(),
        i(),
        (l || e.sp) && !pt(e) && zs(e),
        l) {
            if (o.then(Rr, Rr),
            t)
                return o.then(c => {
                    Or(e, c)
                }
                ).catch(c => {
                    nn(c, e, 0)
                }
                );
            e.asyncDep = o
        } else
            Or(e, o)
    } else
        bo(e)
}
function Or(e, t, n) {
    q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) && (e.setupState = Ri(t)),
    bo(e)
}
function bo(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Be);
    {
        const r = on(e);
        rt();
        try {
            ac(e)
        } finally {
            it(),
            r()
        }
    }
}
const Kc = {
    get(e, t) {
        return me(e, "get", ""),
        e[t]
    }
};
function _o(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Kc),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function Yn(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ri(Sn(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in kt)
                return kt[n](e)
        },
        has(t, n) {
            return n in t || n in kt
        }
    })) : e.proxy
}
function qc(e, t=!0) {
    return q(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Gc(e) {
    return q(e) && "__vccOpts"in e
}
const ie = (e, t) => Nl(e, t, Lt);
function Is(e, t, n) {
    const s = arguments.length;
    return s === 2 ? ne(t) && !K(t) ? zt(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && zt(n) && (n = [n]),
    le(e, t, n))
}
const Yc = "3.5.12";
/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ns;
const Mr = typeof window < "u" && window.trustedTypes;
if (Mr)
    try {
        Ns = Mr.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const wo = Ns ? e => Ns.createHTML(e) : e => e
  , Xc = "http://www.w3.org/2000/svg"
  , Jc = "http://www.w3.org/1998/Math/MathML"
  , Ke = typeof document < "u" ? document : null
  , Pr = Ke && Ke.createElement("template")
  , zc = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const r = t === "svg" ? Ke.createElementNS(Xc, e) : t === "mathml" ? Ke.createElementNS(Jc, e) : n ? Ke.createElement(e, {
            is: n
        }) : Ke.createElement(e);
        return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: e => Ke.createTextNode(e),
    createComment: e => Ke.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ke.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, r, i) {
        const o = n ? n.previousSibling : t.lastChild;
        if (r && (r === i || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling)); )
                ;
        else {
            Pr.innerHTML = wo(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
            const l = Pr.content;
            if (s === "svg" || s === "mathml") {
                const c = l.firstChild;
                for (; c.firstChild; )
                    l.appendChild(c.firstChild);
                l.removeChild(c)
            }
            t.insertBefore(l, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Je = "transition"
  , Dt = "animation"
  , Qt = Symbol("_vtc")
  , So = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Qc = de({}, $i, So)
  , Zc = e => (e.displayName = "Transition",
e.props = Qc,
e)
  , Nf = Zc( (e, {slots: t}) => Is(ql, ea(e), t))
  , ct = (e, t=[]) => {
    K(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Lr = e => e ? K(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function ea(e) {
    const t = {};
    for (const E in e)
        E in So || (t[E] = e[E]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: s, duration: r, enterFromClass: i=`${n}-enter-from`, enterActiveClass: o=`${n}-enter-active`, enterToClass: l=`${n}-enter-to`, appearFromClass: c=i, appearActiveClass: f=o, appearToClass: a=l, leaveFromClass: d=`${n}-leave-from`, leaveActiveClass: y=`${n}-leave-active`, leaveToClass: v=`${n}-leave-to`} = e
      , S = ta(r)
      , b = S && S[0]
      , k = S && S[1]
      , {onBeforeEnter: N, onEnter: j, onEnterCancelled: p, onLeave: g, onLeaveCancelled: M, onBeforeAppear: F=N, onAppear: H=j, onAppearCancelled: V=p} = t
      , R = (E, W, se) => {
        at(E, W ? a : l),
        at(E, W ? f : o),
        se && se()
    }
      , _ = (E, W) => {
        E._isLeaving = !1,
        at(E, d),
        at(E, v),
        at(E, y),
        W && W()
    }
      , I = E => (W, se) => {
        const ce = E ? H : j
          , U = () => R(W, E, se);
        ct(ce, [W, U]),
        Ir( () => {
            at(W, E ? c : i),
            ze(W, E ? a : l),
            Lr(ce) || Nr(W, s, b, U)
        }
        )
    }
    ;
    return de(t, {
        onBeforeEnter(E) {
            ct(N, [E]),
            ze(E, i),
            ze(E, o)
        },
        onBeforeAppear(E) {
            ct(F, [E]),
            ze(E, c),
            ze(E, f)
        },
        onEnter: I(!1),
        onAppear: I(!0),
        onLeave(E, W) {
            E._isLeaving = !0;
            const se = () => _(E, W);
            ze(E, d),
            ze(E, y),
            ra(),
            Ir( () => {
                E._isLeaving && (at(E, d),
                ze(E, v),
                Lr(g) || Nr(E, s, k, se))
            }
            ),
            ct(g, [E, se])
        },
        onEnterCancelled(E) {
            R(E, !1),
            ct(p, [E])
        },
        onAppearCancelled(E) {
            R(E, !0),
            ct(V, [E])
        },
        onLeaveCancelled(E) {
            _(E),
            ct(M, [E])
        }
    })
}
function ta(e) {
    if (e == null)
        return null;
    if (ne(e))
        return [ls(e.enter), ls(e.leave)];
    {
        const t = ls(e);
        return [t, t]
    }
}
function ls(e) {
    return Xo(e)
}
function ze(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[Qt] || (e[Qt] = new Set)).add(t)
}
function at(e, t) {
    t.split(/\s+/).forEach(s => s && e.classList.remove(s));
    const n = e[Qt];
    n && (n.delete(t),
    n.size || (e[Qt] = void 0))
}
function Ir(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let na = 0;
function Nr(e, t, n, s) {
    const r = e._endId = ++na
      , i = () => {
        r === e._endId && s()
    }
    ;
    if (n != null)
        return setTimeout(i, n);
    const {type: o, timeout: l, propCount: c} = sa(e, t);
    if (!o)
        return s();
    const f = o + "end";
    let a = 0;
    const d = () => {
        e.removeEventListener(f, y),
        i()
    }
      , y = v => {
        v.target === e && ++a >= c && d()
    }
    ;
    setTimeout( () => {
        a < c && d()
    }
    , l + 1),
    e.addEventListener(f, y)
}
function sa(e, t) {
    const n = window.getComputedStyle(e)
      , s = S => (n[S] || "").split(", ")
      , r = s(`${Je}Delay`)
      , i = s(`${Je}Duration`)
      , o = Fr(r, i)
      , l = s(`${Dt}Delay`)
      , c = s(`${Dt}Duration`)
      , f = Fr(l, c);
    let a = null
      , d = 0
      , y = 0;
    t === Je ? o > 0 && (a = Je,
    d = o,
    y = i.length) : t === Dt ? f > 0 && (a = Dt,
    d = f,
    y = c.length) : (d = Math.max(o, f),
    a = d > 0 ? o > f ? Je : Dt : null,
    y = a ? a === Je ? i.length : c.length : 0);
    const v = a === Je && /\b(transform|all)(,|$)/.test(s(`${Je}Property`).toString());
    return {
        type: a,
        timeout: d,
        propCount: y,
        hasTransform: v
    }
}
function Fr(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, s) => $r(n) + $r(e[s])))
}
function $r(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function ra() {
    return document.body.offsetHeight
}
function ia(e, t, n) {
    const s = e[Qt];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Hr = Symbol("_vod")
  , oa = Symbol("_vsh")
  , xo = Symbol("");
function Ff(e) {
    const t = Nt();
    if (!t)
        return;
    const n = t.ut = (r=e(t.proxy)) => {
        Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i => Fn(i, r))
    }
      , s = () => {
        const r = e(t.proxy);
        t.ce ? Fn(t.ce, r) : Fs(t.subTree, r),
        n(r)
    }
    ;
    Bi( () => {
        Rc(s)
    }
    ),
    vt( () => {
        const r = new MutationObserver(s);
        r.observe(t.subTree.el.parentNode, {
            childList: !0
        }),
        rn( () => r.disconnect())
    }
    )
}
function Fs(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch,
        n.pendingBranch && !n.isHydrating && n.effects.push( () => {
            Fs(n.activeBranch, t)
        }
        )
    }
    for (; e.component; )
        e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
        Fn(e.el, t);
    else if (e.type === ve)
        e.children.forEach(n => Fs(n, t));
    else if (e.type === Pt) {
        let {el: n, anchor: s} = e;
        for (; n && (Fn(n, t),
        n !== s); )
            n = n.nextSibling
    }
}
function Fn(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        let s = "";
        for (const r in t)
            n.setProperty(`--${r}`, t[r]),
            s += `--${r}: ${t[r]};`;
        n[xo] = s
    }
}
const la = /(^|;)\s*display\s*:/;
function ca(e, t, n) {
    const s = e.style
      , r = re(n);
    let i = !1;
    if (n && !r) {
        if (t)
            if (re(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && Tn(s, l, "")
                }
            else
                for (const o in t)
                    n[o] == null && Tn(s, o, "");
        for (const o in n)
            o === "display" && (i = !0),
            Tn(s, o, n[o])
    } else if (r) {
        if (t !== n) {
            const o = s[xo];
            o && (n += ";" + o),
            s.cssText = n,
            i = la.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Hr in e && (e[Hr] = i ? s.display : "",
    e[oa] && (s.display = "none"))
}
const Dr = /\s*!important$/;
function Tn(e, t, n) {
    if (K(n))
        n.forEach(s => Tn(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = aa(e, t);
        Dr.test(n) ? e.setProperty(st(s), n.replace(Dr, ""), "important") : e[s] = n
    }
}
const jr = ["Webkit", "Moz", "ms"]
  , cs = {};
function aa(e, t) {
    const n = cs[t];
    if (n)
        return n;
    let s = Le(t);
    if (s !== "filter" && s in e)
        return cs[t] = s;
    s = Dn(s);
    for (let r = 0; r < jr.length; r++) {
        const i = jr[r] + s;
        if (i in e)
            return cs[t] = i
    }
    return t
}
const Vr = "http://www.w3.org/1999/xlink";
function Ur(e, t, n, s, r, i=tl(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vr, t.slice(6, t.length)) : e.setAttributeNS(Vr, t, n) : n == null || i && !ci(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ye(n) ? String(n) : n)
}
function Br(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? wo(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value
          , c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value"in e)) && (e.value = c),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = ci(n) : n == null && l === "string" ? (n = "",
        o = !0) : l === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(r || t)
}
function xt(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function fa(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const kr = Symbol("_vei");
function ua(e, t, n, s, r=null) {
    const i = e[kr] || (e[kr] = {})
      , o = i[t];
    if (s && o)
        o.value = s;
    else {
        const [l,c] = da(t);
        if (s) {
            const f = i[t] = ga(s, r);
            xt(e, l, f, c)
        } else
            o && (fa(e, l, o, c),
            i[t] = void 0)
    }
}
const Wr = /(?:Once|Passive|Capture)$/;
function da(e) {
    let t;
    if (Wr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Wr); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : st(e.slice(2)), t]
}
let as = 0;
const ha = Promise.resolve()
  , pa = () => as || (ha.then( () => as = 0),
as = Date.now());
function ga(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        $e(ma(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = pa(),
    n
}
function ma(e, t) {
    if (K(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => r => !r._stopped && s && s(r))
    } else
        return t
}
const Kr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , ya = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class" ? ia(e, s, o) : t === "style" ? ca(e, n, s) : en(t) ? Hs(t) || ua(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : va(e, t, s, o)) ? (Br(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ur(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !re(s)) ? Br(e, Le(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Ur(e, t, s, o))
}
;
function va(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Kr(t) && q(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return Kr(t) && re(n) ? !1 : t in e
}
const qr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return K(t) ? n => wn(t, n) : t
}
;
function ba(e) {
    e.target.composing = !0
}
function Gr(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const fs = Symbol("_assign")
  , $f = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, r) {
        e[fs] = qr(r);
        const i = s || r.props && r.props.type === "number";
        xt(e, t ? "change" : "input", o => {
            if (o.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            i && (l = bs(l)),
            e[fs](l)
        }
        ),
        n && xt(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (xt(e, "compositionstart", ba),
        xt(e, "compositionend", Gr),
        xt(e, "change", Gr))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: s, trim: r, number: i}}, o) {
        if (e[fs] = qr(o),
        e.composing)
            return;
        const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? bs(e.value) : e.value
          , c = t ?? "";
        l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c))
    }
}
  , _a = ["ctrl", "shift", "alt", "meta"]
  , wa = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => _a.some(n => e[`${n}Key`] && !t.includes(n))
}
  , Hf = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , s = t.join(".");
    return n[s] || (n[s] = (r, ...i) => {
        for (let o = 0; o < t.length; o++) {
            const l = wa[t[o]];
            if (l && l(r, t))
                return
        }
        return e(r, ...i)
    }
    )
}
  , Sa = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Df = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , s = t.join(".");
    return n[s] || (n[s] = r => {
        if (!("key"in r))
            return;
        const i = st(r.key);
        if (t.some(o => o === i || Sa[o] === i))
            return e(r)
    }
    )
}
  , Eo = de({
    patchProp: ya
}, zc);
let Kt, Yr = !1;
function xa() {
    return Kt || (Kt = xc(Eo))
}
function Ea() {
    return Kt = Yr ? Kt : Ec(Eo),
    Yr = !0,
    Kt
}
const jf = (...e) => {
    const t = xa().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const r = Co(s);
        if (!r)
            return;
        const i = t._component;
        !q(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
        const o = n(r, !1, To(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        o
    }
    ,
    t
}
  , Vf = (...e) => {
    const t = Ea().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const r = Co(s);
        if (r)
            return n(r, !0, To(r))
    }
    ,
    t
}
;
function To(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Co(e) {
    return re(e) ? document.querySelector(e) : e
}
const Uf = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,r] of t)
        n[s] = r;
    return n
}
  , Ta = window.__VP_SITE_DATA__;
function nr(e) {
    return ui() ? (rl(e),
    !0) : !1
}
function ke(e) {
    return typeof e == "function" ? e() : Ai(e)
}
const Ao = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bf = e => e != null
  , Ca = Object.prototype.toString
  , Aa = e => Ca.call(e) === "[object Object]"
  , Zt = () => {}
  , Xr = Ra();
function Ra() {
    var e, t;
    return Ao && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}
function Oa(e, t) {
    function n(...s) {
        return new Promise( (r, i) => {
            Promise.resolve(e( () => t.apply(this, s), {
                fn: t,
                thisArg: this,
                args: s
            })).then(r).catch(i)
        }
        )
    }
    return n
}
const Ro = e => e();
function Ma(e, t={}) {
    let n, s, r = Zt;
    const i = l => {
        clearTimeout(l),
        r(),
        r = Zt
    }
    ;
    return l => {
        const c = ke(e)
          , f = ke(t.maxWait);
        return n && i(n),
        c <= 0 || f !== void 0 && f <= 0 ? (s && (i(s),
        s = null),
        Promise.resolve(l())) : new Promise( (a, d) => {
            r = t.rejectOnCancel ? d : a,
            f && !s && (s = setTimeout( () => {
                n && i(n),
                s = null,
                a(l())
            }
            , f)),
            n = setTimeout( () => {
                s && i(s),
                s = null,
                a(l())
            }
            , c)
        }
        )
    }
}
function Pa(e=Ro) {
    const t = oe(!0);
    function n() {
        t.value = !1
    }
    function s() {
        t.value = !0
    }
    const r = (...i) => {
        t.value && e(...i)
    }
    ;
    return {
        isActive: kn(t),
        pause: n,
        resume: s,
        eventFilter: r
    }
}
function La(e) {
    return Nt()
}
function Oo(...e) {
    if (e.length !== 1)
        return Pl(...e);
    const t = e[0];
    return typeof t == "function" ? kn(Rl( () => ({
        get: t,
        set: Zt
    }))) : oe(t)
}
function Mo(e, t, n={}) {
    const {eventFilter: s=Ro, ...r} = n;
    return Fe(e, Oa(s, t), r)
}
function Ia(e, t, n={}) {
    const {eventFilter: s, ...r} = n
      , {eventFilter: i, pause: o, resume: l, isActive: c} = Pa(s);
    return {
        stop: Mo(e, t, {
            ...r,
            eventFilter: i
        }),
        pause: o,
        resume: l,
        isActive: c
    }
}
function sr(e, t=!0, n) {
    La() ? vt(e, n) : t ? e() : Wn(e)
}
function kf(e, t, n={}) {
    const {debounce: s=0, maxWait: r=void 0, ...i} = n;
    return Mo(e, t, {
        ...i,
        eventFilter: Ma(s, {
            maxWait: r
        })
    })
}
function Wf(e, t, n) {
    let s;
    ae(n) ? s = {
        evaluating: n
    } : s = {};
    const {lazy: r=!1, evaluating: i=void 0, shallow: o=!0, onError: l=Zt} = s
      , c = oe(!r)
      , f = o ? Ys(t) : oe(t);
    let a = 0;
    return er(async d => {
        if (!c.value)
            return;
        a++;
        const y = a;
        let v = !1;
        i && Promise.resolve().then( () => {
            i.value = !0
        }
        );
        try {
            const S = await e(b => {
                d( () => {
                    i && (i.value = !1),
                    v || b()
                }
                )
            }
            );
            y === a && (f.value = S)
        } catch (S) {
            l(S)
        } finally {
            i && y === a && (i.value = !1),
            v = !0
        }
    }
    ),
    r ? ie( () => (c.value = !0,
    f.value)) : f
}
const He = Ao ? window : void 0;
function Po(e) {
    var t;
    const n = ke(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
function It(...e) {
    let t, n, s, r;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,s,r] = e,
    t = He) : [t,n,s,r] = e,
    !t)
        return Zt;
    Array.isArray(n) || (n = [n]),
    Array.isArray(s) || (s = [s]);
    const i = []
      , o = () => {
        i.forEach(a => a()),
        i.length = 0
    }
      , l = (a, d, y, v) => (a.addEventListener(d, y, v),
    () => a.removeEventListener(d, y, v))
      , c = Fe( () => [Po(t), ke(r)], ([a,d]) => {
        if (o(),
        !a)
            return;
        const y = Aa(d) ? {
            ...d
        } : d;
        i.push(...n.flatMap(v => s.map(S => l(a, v, S, y))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , f = () => {
        c(),
        o()
    }
    ;
    return nr(f),
    f
}
function Na(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function Kf(...e) {
    let t, n, s = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    s = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    s = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: r=He, eventName: i="keydown", passive: o=!1, dedupe: l=!1} = s
      , c = Na(t);
    return It(r, i, a => {
        a.repeat && ke(l) || c(a) && n(a)
    }
    , o)
}
function Fa() {
    const e = oe(!1)
      , t = Nt();
    return t && vt( () => {
        e.value = !0
    }
    , t),
    e
}
function $a(e) {
    const t = Fa();
    return ie( () => (t.value,
    !!e()))
}
function Lo(e, t={}) {
    const {window: n=He} = t
      , s = $a( () => n && "matchMedia"in n && typeof n.matchMedia == "function");
    let r;
    const i = oe(!1)
      , o = f => {
        i.value = f.matches
    }
      , l = () => {
        r && ("removeEventListener"in r ? r.removeEventListener("change", o) : r.removeListener(o))
    }
      , c = er( () => {
        s.value && (l(),
        r = n.matchMedia(ke(e)),
        "addEventListener"in r ? r.addEventListener("change", o) : r.addListener(o),
        i.value = r.matches)
    }
    );
    return nr( () => {
        c(),
        l(),
        r = void 0
    }
    ),
    i
}
const mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , yn = "__vueuse_ssr_handlers__"
  , Ha = Da();
function Da() {
    return yn in mn || (mn[yn] = mn[yn] || {}),
    mn[yn]
}
function Io(e, t) {
    return Ha[e] || t
}
function rr(e) {
    return Lo("(prefers-color-scheme: dark)", e)
}
function ja(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const Va = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , Jr = "vueuse-storage";
function ir(e, t, n, s={}) {
    var r;
    const {flush: i="pre", deep: o=!0, listenToStorageChanges: l=!0, writeDefaults: c=!0, mergeDefaults: f=!1, shallow: a, window: d=He, eventFilter: y, onError: v=_ => {
        console.error(_)
    }
    , initOnMounted: S} = s
      , b = (a ? Ys : oe)(typeof t == "function" ? t() : t);
    if (!n)
        try {
            n = Io("getDefaultStorage", () => {
                var _;
                return (_ = He) == null ? void 0 : _.localStorage
            }
            )()
        } catch (_) {
            v(_)
        }
    if (!n)
        return b;
    const k = ke(t)
      , N = ja(k)
      , j = (r = s.serializer) != null ? r : Va[N]
      , {pause: p, resume: g} = Ia(b, () => F(b.value), {
        flush: i,
        deep: o,
        eventFilter: y
    });
    d && l && sr( () => {
        n instanceof Storage ? It(d, "storage", V) : It(d, Jr, R),
        S && V()
    }
    ),
    S || V();
    function M(_, I) {
        if (d) {
            const E = {
                key: e,
                oldValue: _,
                newValue: I,
                storageArea: n
            };
            d.dispatchEvent(n instanceof Storage ? new StorageEvent("storage",E) : new CustomEvent(Jr,{
                detail: E
            }))
        }
    }
    function F(_) {
        try {
            const I = n.getItem(e);
            if (_ == null)
                M(I, null),
                n.removeItem(e);
            else {
                const E = j.write(_);
                I !== E && (n.setItem(e, E),
                M(I, E))
            }
        } catch (I) {
            v(I)
        }
    }
    function H(_) {
        const I = _ ? _.newValue : n.getItem(e);
        if (I == null)
            return c && k != null && n.setItem(e, j.write(k)),
            k;
        if (!_ && f) {
            const E = j.read(I);
            return typeof f == "function" ? f(E, k) : N === "object" && !Array.isArray(E) ? {
                ...k,
                ...E
            } : E
        } else
            return typeof I != "string" ? I : j.read(I)
    }
    function V(_) {
        if (!(_ && _.storageArea !== n)) {
            if (_ && _.key == null) {
                b.value = k;
                return
            }
            if (!(_ && _.key !== e)) {
                p();
                try {
                    (_ == null ? void 0 : _.newValue) !== j.write(b.value) && (b.value = H(_))
                } catch (I) {
                    v(I)
                } finally {
                    _ ? Wn(g) : g()
                }
            }
        }
    }
    function R(_) {
        V(_.detail)
    }
    return b
}
const Ua = "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ba(e={}) {
    const {selector: t="html", attribute: n="class", initialValue: s="auto", window: r=He, storage: i, storageKey: o="vueuse-color-scheme", listenToStorageChanges: l=!0, storageRef: c, emitAuto: f, disableTransition: a=!0} = e
      , d = {
        auto: "",
        light: "light",
        dark: "dark",
        ...e.modes || {}
    }
      , y = rr({
        window: r
    })
      , v = ie( () => y.value ? "dark" : "light")
      , S = c || (o == null ? Oo(s) : ir(o, s, i, {
        window: r,
        listenToStorageChanges: l
    }))
      , b = ie( () => S.value === "auto" ? v.value : S.value)
      , k = Io("updateHTMLAttrs", (g, M, F) => {
        const H = typeof g == "string" ? r == null ? void 0 : r.document.querySelector(g) : Po(g);
        if (!H)
            return;
        const V = new Set
          , R = new Set;
        let _ = null;
        if (M === "class") {
            const E = F.split(/\s/g);
            Object.values(d).flatMap(W => (W || "").split(/\s/g)).filter(Boolean).forEach(W => {
                E.includes(W) ? V.add(W) : R.add(W)
            }
            )
        } else
            _ = {
                key: M,
                value: F
            };
        if (V.size === 0 && R.size === 0 && _ === null)
            return;
        let I;
        a && (I = r.document.createElement("style"),
        I.appendChild(document.createTextNode(Ua)),
        r.document.head.appendChild(I));
        for (const E of V)
            H.classList.add(E);
        for (const E of R)
            H.classList.remove(E);
        _ && H.setAttribute(_.key, _.value),
        a && (r.getComputedStyle(I).opacity,
        document.head.removeChild(I))
    }
    );
    function N(g) {
        var M;
        k(t, n, (M = d[g]) != null ? M : g)
    }
    function j(g) {
        e.onChanged ? e.onChanged(g, N) : N(g)
    }
    Fe(b, j, {
        flush: "post",
        immediate: !0
    }),
    sr( () => j(b.value));
    const p = ie({
        get() {
            return f ? S.value : b.value
        },
        set(g) {
            S.value = g
        }
    });
    try {
        return Object.assign(p, {
            store: S,
            system: v,
            state: b
        })
    } catch {
        return p
    }
}
function ka(e={}) {
    const {valueDark: t="dark", valueLight: n="", window: s=He} = e
      , r = Ba({
        ...e,
        onChanged: (l, c) => {
            var f;
            e.onChanged ? (f = e.onChanged) == null || f.call(e, l === "dark", c, l) : c(l)
        }
        ,
        modes: {
            dark: t,
            light: n
        }
    })
      , i = ie( () => r.system ? r.system.value : rr({
        window: s
    }).value ? "dark" : "light");
    return ie({
        get() {
            return r.value === "dark"
        },
        set(l) {
            const c = l ? "dark" : "light";
            i.value === c ? r.value = "auto" : r.value = c
        }
    })
}
function us(e) {
    return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e
}
function qf(e, t, n={}) {
    const {window: s=He} = n;
    return ir(e, t, s == null ? void 0 : s.localStorage, n)
}
function No(e) {
    const t = window.getComputedStyle(e);
    if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
        return !0;
    {
        const n = e.parentNode;
        return !n || n.tagName === "BODY" ? !1 : No(n)
    }
}
function Wa(e) {
    const t = e || window.event
      , n = t.target;
    return No(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(),
    !1)
}
const ds = new WeakMap;
function Gf(e, t=!1) {
    const n = oe(t);
    let s = null
      , r = "";
    Fe(Oo(e), l => {
        const c = us(ke(l));
        if (c) {
            const f = c;
            if (ds.get(f) || ds.set(f, f.style.overflow),
            f.style.overflow !== "hidden" && (r = f.style.overflow),
            f.style.overflow === "hidden")
                return n.value = !0;
            if (n.value)
                return f.style.overflow = "hidden"
        }
    }
    , {
        immediate: !0
    });
    const i = () => {
        const l = us(ke(e));
        !l || n.value || (Xr && (s = It(l, "touchmove", c => {
            Wa(c)
        }
        , {
            passive: !1
        })),
        l.style.overflow = "hidden",
        n.value = !0)
    }
      , o = () => {
        const l = us(ke(e));
        !l || !n.value || (Xr && (s == null || s()),
        l.style.overflow = r,
        ds.delete(l),
        n.value = !1)
    }
    ;
    return nr(o),
    ie({
        get() {
            return n.value
        },
        set(l) {
            l ? i() : o()
        }
    })
}
function Yf(e, t, n={}) {
    const {window: s=He} = n;
    return ir(e, t, s == null ? void 0 : s.sessionStorage, n)
}
function Xf(e={}) {
    const {window: t=He, behavior: n="auto"} = e;
    if (!t)
        return {
            x: oe(0),
            y: oe(0)
        };
    const s = oe(t.scrollX)
      , r = oe(t.scrollY)
      , i = ie({
        get() {
            return s.value
        },
        set(l) {
            scrollTo({
                left: l,
                behavior: n
            })
        }
    })
      , o = ie({
        get() {
            return r.value
        },
        set(l) {
            scrollTo({
                top: l,
                behavior: n
            })
        }
    });
    return It(t, "scroll", () => {
        s.value = t.scrollX,
        r.value = t.scrollY
    }
    , {
        capture: !1,
        passive: !0
    }),
    {
        x: i,
        y: o
    }
}
function Jf(e={}) {
    const {window: t=He, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: s=Number.POSITIVE_INFINITY, listenOrientation: r=!0, includeScrollbar: i=!0, type: o="inner"} = e
      , l = oe(n)
      , c = oe(s)
      , f = () => {
        t && (o === "outer" ? (l.value = t.outerWidth,
        c.value = t.outerHeight) : i ? (l.value = t.innerWidth,
        c.value = t.innerHeight) : (l.value = t.document.documentElement.clientWidth,
        c.value = t.document.documentElement.clientHeight))
    }
    ;
    if (f(),
    sr(f),
    It("resize", f, {
        passive: !0
    }),
    r) {
        const a = Lo("(orientation: portrait)");
        Fe(a, () => f())
    }
    return {
        width: l,
        height: c
    }
}
const hs = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1
};
var ps = {};
const Fo = /^(?:[a-z]+:|\/\/)/i
  , Ka = "vitepress-theme-appearance"
  , qa = /#.*$/
  , Ga = /[?#].*$/
  , Ya = /(?:(^|\/)index)?\.(?:md|html)$/
  , ge = typeof document < "u"
  , $o = {
    relativePath: "404.md",
    filePath: "",
    title: "404",
    description: "Not Found",
    headers: [],
    frontmatter: {
        sidebar: !1,
        layout: "page"
    },
    lastUpdated: 0,
    isNotFound: !0
};
function Xa(e, t, n=!1) {
    if (t === void 0)
        return !1;
    if (e = zr(`/${e}`),
    n)
        return new RegExp(t).test(e);
    if (zr(t) !== e)
        return !1;
    const s = t.match(qa);
    return s ? (ge ? location.hash : "") === s[0] : !0
}
function zr(e) {
    return decodeURI(e).replace(Ga, "").replace(Ya, "$1")
}
function Ja(e) {
    return Fo.test(e)
}
function za(e, t) {
    return Object.keys((e == null ? void 0 : e.locales) || {}).find(n => n !== "root" && !Ja(n) && Xa(t, `/${n}/`, !0)) || "root"
}
function Qa(e, t) {
    var s, r, i, o, l, c, f;
    const n = za(e, t);
    return Object.assign({}, e, {
        localeIndex: n,
        lang: ((s = e.locales[n]) == null ? void 0 : s.lang) ?? e.lang,
        dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
        title: ((i = e.locales[n]) == null ? void 0 : i.title) ?? e.title,
        titleTemplate: ((o = e.locales[n]) == null ? void 0 : o.titleTemplate) ?? e.titleTemplate,
        description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
        head: Do(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
        themeConfig: {
            ...e.themeConfig,
            ...(f = e.locales[n]) == null ? void 0 : f.themeConfig
        }
    })
}
function Ho(e, t) {
    const n = t.title || e.title
      , s = t.titleTemplate ?? e.titleTemplate;
    if (typeof s == "string" && s.includes(":title"))
        return s.replace(/:title/g, n);
    const r = Za(e.title, s);
    return n === r.slice(3) ? n : `${n}${r}`
}
function Za(e, t) {
    return t === !1 ? "" : t === !0 || t === void 0 ? ` | ${e}` : e === t ? "" : ` | ${t}`
}
function ef(e, t) {
    const [n,s] = t;
    if (n !== "meta")
        return !1;
    const r = Object.entries(s)[0];
    return r == null ? !1 : e.some( ([i,o]) => i === n && o[r[0]] === r[1])
}
function Do(e, t) {
    return [...e.filter(n => !ef(t, n)), ...t]
}
const tf = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
  , nf = /^[a-z]:/i;
function Qr(e) {
    const t = nf.exec(e)
      , n = t ? t[0] : "";
    return n + e.slice(n.length).replace(tf, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1")
}
const gs = new Set;
function sf(e) {
    if (gs.size === 0) {
        const n = typeof process == "object" && (ps == null ? void 0 : ps.VITE_EXTRA_EXTENSIONS) || (hs == null ? void 0 : hs.VITE_EXTRA_EXTENSIONS) || "";
        ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (n && typeof n == "string" ? "," + n : "")).split(",").forEach(s => gs.add(s))
    }
    const t = e.split(".").pop();
    return t == null || !gs.has(t.toLowerCase())
}
function zf(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
}
const rf = Symbol()
  , mt = Ys(Ta);
function Qf(e) {
    const t = ie( () => Qa(mt.value, e.data.relativePath))
      , n = t.value.appearance
      , s = n === "force-dark" ? oe(!0) : n === "force-auto" ? rr() : n ? ka({
        storageKey: Ka,
        initialValue: () => n === "dark" ? "dark" : "auto",
        ...typeof n == "object" ? n : {}
    }) : oe(!1)
      , r = oe(ge ? location.hash : "");
    return ge && window.addEventListener("hashchange", () => {
        r.value = location.hash
    }
    ),
    Fe( () => e.data, () => {
        r.value = ge ? location.hash : ""
    }
    ),
    {
        site: t,
        theme: ie( () => t.value.themeConfig),
        page: ie( () => e.data),
        frontmatter: ie( () => e.data.frontmatter),
        params: ie( () => e.data.params),
        lang: ie( () => t.value.lang),
        dir: ie( () => e.data.frontmatter.dir || t.value.dir),
        localeIndex: ie( () => t.value.localeIndex || "root"),
        title: ie( () => Ho(t.value, e.data)),
        description: ie( () => e.data.description || t.value.description),
        isDark: s,
        hash: ie( () => r.value)
    }
}
function of() {
    const e = Mt(rf);
    if (!e)
        throw new Error("vitepress data not properly injected in app");
    return e
}
function lf(e, t) {
    return `${e}${t}`.replace(/\/+/g, "/")
}
function Zr(e) {
    return Fo.test(e) || !e.startsWith("/") ? e : lf(mt.value.base, e)
}
function cf(e) {
    let t = e.replace(/\.html$/, "");
    if (t = decodeURIComponent(t),
    t = t.replace(/\/$/, "/index"),
    ge) {
        const n = "/";
        t = Qr(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
        let s = __VP_HASH_MAP__[t.toLowerCase()];
        if (s || (t = t.endsWith("_index.md") ? t.slice(0, -9) + ".md" : t.slice(0, -3) + "_index.md",
        s = __VP_HASH_MAP__[t.toLowerCase()]),
        !s)
            return null;
        t = `${n}assets/${t}.${s}.js`
    } else
        t = `./${Qr(t.slice(1).replace(/\//g, "_"))}.md.js`;
    return t
}
let Cn = [];
function Zf(e) {
    Cn.push(e),
    rn( () => {
        Cn = Cn.filter(t => t !== e)
    }
    )
}
function af() {
    let e = mt.value.scrollOffset
      , t = 0
      , n = 24;
    if (typeof e == "object" && "padding"in e && (n = e.padding,
    e = e.selector),
    typeof e == "number")
        t = e;
    else if (typeof e == "string")
        t = ei(e, n);
    else if (Array.isArray(e))
        for (const s of e) {
            const r = ei(s, n);
            if (r) {
                t = r;
                break
            }
        }
    return t
}
function ei(e, t) {
    const n = document.querySelector(e);
    if (!n)
        return 0;
    const s = n.getBoundingClientRect().bottom;
    return s < 0 ? 0 : s + t
}
const ff = Symbol()
  , jo = "http://a.com"
  , uf = () => ({
    path: "/",
    component: null,
    data: $o
});
function eu(e, t) {
    const n = Bn(uf())
      , s = {
        route: n,
        go: r
    };
    async function r(l=ge ? location.href : "/") {
        var c, f;
        l = ms(l),
        await ((c = s.onBeforeRouteChange) == null ? void 0 : c.call(s, l)) !== !1 && (ge && l !== ms(location.href) && (history.replaceState({
            scrollPosition: window.scrollY
        }, ""),
        history.pushState({}, "", l)),
        await o(l),
        await ((f = s.onAfterRouteChanged) == null ? void 0 : f.call(s, l)))
    }
    let i = null;
    async function o(l, c=0, f=!1) {
        var y, v;
        if (await ((y = s.onBeforePageLoad) == null ? void 0 : y.call(s, l)) === !1)
            return;
        const a = new URL(l,jo)
          , d = i = a.pathname;
        try {
            let S = await e(d);
            if (!S)
                throw new Error(`Page not found: ${d}`);
            if (i === d) {
                i = null;
                const {default: b, __pageData: k} = S;
                if (!b)
                    throw new Error(`Invalid route component: ${b}`);
                await ((v = s.onAfterPageLoad) == null ? void 0 : v.call(s, l)),
                n.path = ge ? d : Zr(d),
                n.component = Sn(b),
                n.data = Sn(k),
                ge && Wn( () => {
                    let N = mt.value.base + k.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
                    if (!mt.value.cleanUrls && !N.endsWith("/") && (N += ".html"),
                    N !== a.pathname && (a.pathname = N,
                    l = N + a.search + a.hash,
                    history.replaceState({}, "", l)),
                    a.hash && !c) {
                        let j = null;
                        try {
                            j = document.getElementById(decodeURIComponent(a.hash).slice(1))
                        } catch (p) {
                            console.warn(p)
                        }
                        if (j) {
                            ti(j, a.hash);
                            return
                        }
                    }
                    window.scrollTo(0, c)
                }
                )
            }
        } catch (S) {
            if (!/fetch|Page not found/.test(S.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(S),
            !f)
                try {
                    const b = await fetch(mt.value.base + "hashmap.json");
                    window.__VP_HASH_MAP__ = await b.json(),
                    await o(l, c, !0);
                    return
                } catch {}
            if (i === d) {
                i = null,
                n.path = ge ? d : Zr(d),
                n.component = t ? Sn(t) : null;
                const b = ge ? d.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
                n.data = {
                    ...$o,
                    relativePath: b
                }
            }
        }
    }
    return ge && (history.state === null && history.replaceState({}, ""),
    window.addEventListener("click", l => {
        if (l.defaultPrevented || !(l.target instanceof Element) || l.target.closest("button") || l.button !== 0 || l.ctrlKey || l.shiftKey || l.altKey || l.metaKey)
            return;
        const c = l.target.closest("a");
        if (!c || c.closest(".vp-raw") || c.hasAttribute("download") || c.hasAttribute("target"))
            return;
        const f = c.getAttribute("href") ?? (c instanceof SVGAElement ? c.getAttribute("xlink:href") : null);
        if (f == null)
            return;
        const {href: a, origin: d, pathname: y, hash: v, search: S} = new URL(f,c.baseURI)
          , b = new URL(location.href);
        d === b.origin && sf(y) && (l.preventDefault(),
        y === b.pathname && S === b.search ? (v !== b.hash && (history.pushState({}, "", a),
        window.dispatchEvent(new HashChangeEvent("hashchange",{
            oldURL: b.href,
            newURL: a
        }))),
        v ? ti(c, v, c.classList.contains("header-anchor")) : window.scrollTo(0, 0)) : r(a))
    }
    , {
        capture: !0
    }),
    window.addEventListener("popstate", async l => {
        var c;
        l.state !== null && (await o(ms(location.href), l.state && l.state.scrollPosition || 0),
        (c = s.onAfterRouteChanged) == null || c.call(s, location.href))
    }
    ),
    window.addEventListener("hashchange", l => {
        l.preventDefault()
    }
    )),
    s
}
function df() {
    const e = Mt(ff);
    if (!e)
        throw new Error("useRouter() is called without provider.");
    return e
}
function Vo() {
    return df().route
}
function ti(e, t, n=!1) {
    let s = null;
    try {
        s = e.classList.contains("header-anchor") ? e : document.getElementById(decodeURIComponent(t).slice(1))
    } catch (r) {
        console.warn(r)
    }
    if (s) {
        let r = function() {
            !n || Math.abs(o - window.scrollY) > window.innerHeight ? window.scrollTo(0, o) : window.scrollTo({
                left: 0,
                top: o,
                behavior: "smooth"
            })
        };
        const i = parseInt(window.getComputedStyle(s).paddingTop, 10)
          , o = window.scrollY + s.getBoundingClientRect().top - af() + i;
        requestAnimationFrame(r)
    }
}
function ms(e) {
    const t = new URL(e,jo);
    return t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1"),
    mt.value.cleanUrls ? t.pathname = t.pathname.replace(/\.html$/, "") : !t.pathname.endsWith("/") && !t.pathname.endsWith(".html") && (t.pathname += ".html"),
    t.pathname + t.search + t.hash
}
const vn = () => Cn.forEach(e => e())
  , tu = Js({
    name: "VitePressContent",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e) {
        const t = Vo()
          , {frontmatter: n, site: s} = of();
        return Fe(n, vn, {
            deep: !0,
            flush: "post"
        }),
        () => Is(e.as, s.value.contentProps ?? {
            style: {
                position: "relative"
            }
        }, [t.component ? Is(t.component, {
            onVnodeMounted: vn,
            onVnodeUpdated: vn,
            onVnodeUnmounted: vn
        }) : "404 Page Not Found"])
    }
})
  , hf = "modulepreload"
  , pf = function(e) {
    return "/" + e
}
  , ni = {}
  , nu = function(t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        r = Promise.allSettled(n.map(c => {
            if (c = pf(c),
            c in ni)
                return;
            ni[c] = !0;
            const f = c.endsWith(".css")
              , a = f ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${c}"]${a}`))
                return;
            const d = document.createElement("link");
            if (d.rel = f ? "stylesheet" : hf,
            f || (d.as = "script"),
            d.crossOrigin = "",
            d.href = c,
            l && d.setAttribute("nonce", l),
            document.head.appendChild(d),
            f)
                return new Promise( (y, v) => {
                    d.addEventListener("load", y),
                    d.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function i(o) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = o,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw o
    }
    return r.then(o => {
        for (const l of o || [])
            l.status === "rejected" && i(l.reason);
        return t().catch(i)
    }
    )
}
  , su = Js({
    setup(e, {slots: t}) {
        const n = oe(!1);
        return vt( () => {
            n.value = !0
        }
        ),
        () => n.value && t.default ? t.default() : null
    }
});
function ru() {
    ge && window.addEventListener("click", e => {
        var n;
        const t = e.target;
        if (t.matches(".vp-code-group input")) {
            const s = (n = t.parentElement) == null ? void 0 : n.parentElement;
            if (!s)
                return;
            const r = Array.from(s.querySelectorAll("input")).indexOf(t);
            if (r < 0)
                return;
            const i = s.querySelector(".blocks");
            if (!i)
                return;
            const o = Array.from(i.children).find(f => f.classList.contains("active"));
            if (!o)
                return;
            const l = i.children[r];
            if (!l || o === l)
                return;
            o.classList.remove("active"),
            l.classList.add("active");
            const c = s == null ? void 0 : s.querySelector(`label[for="${t.id}"]`);
            c == null || c.scrollIntoView({
                block: "nearest"
            })
        }
    }
    )
}
function iu() {
    if (ge) {
        const e = new WeakMap;
        window.addEventListener("click", t => {
            var s;
            const n = t.target;
            if (n.matches('div[class*="language-"] > button.copy')) {
                const r = n.parentElement
                  , i = (s = n.nextElementSibling) == null ? void 0 : s.nextElementSibling;
                if (!r || !i)
                    return;
                const o = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className)
                  , l = [".vp-copy-ignore", ".diff.remove"]
                  , c = i.cloneNode(!0);
                c.querySelectorAll(l.join(",")).forEach(a => a.remove());
                let f = c.textContent || "";
                o && (f = f.replace(/^ *(\$|>) /gm, "").trim()),
                gf(f).then( () => {
                    n.classList.add("copied"),
                    clearTimeout(e.get(n));
                    const a = setTimeout( () => {
                        n.classList.remove("copied"),
                        n.blur(),
                        e.delete(n)
                    }
                    , 2e3);
                    e.set(n, a)
                }
                )
            }
        }
        )
    }
}
async function gf(e) {
    try {
        return navigator.clipboard.writeText(e)
    } catch {
        const t = document.createElement("textarea")
          , n = document.activeElement;
        t.value = e,
        t.setAttribute("readonly", ""),
        t.style.contain = "strict",
        t.style.position = "absolute",
        t.style.left = "-9999px",
        t.style.fontSize = "12pt";
        const s = document.getSelection()
          , r = s ? s.rangeCount > 0 && s.getRangeAt(0) : null;
        document.body.appendChild(t),
        t.select(),
        t.selectionStart = 0,
        t.selectionEnd = e.length,
        document.execCommand("copy"),
        document.body.removeChild(t),
        r && (s.removeAllRanges(),
        s.addRange(r)),
        n && n.focus()
    }
}
function ou(e, t) {
    let n = !0
      , s = [];
    const r = i => {
        if (n) {
            n = !1,
            i.forEach(l => {
                const c = ys(l);
                for (const f of document.head.children)
                    if (f.isEqualNode(c)) {
                        s.push(f);
                        return
                    }
            }
            );
            return
        }
        const o = i.map(ys);
        s.forEach( (l, c) => {
            const f = o.findIndex(a => a == null ? void 0 : a.isEqualNode(l ?? null));
            f !== -1 ? delete o[f] : (l == null || l.remove(),
            delete s[c])
        }
        ),
        o.forEach(l => l && document.head.appendChild(l)),
        s = [...s, ...o].filter(Boolean)
    }
    ;
    er( () => {
        const i = e.data
          , o = t.value
          , l = i && i.description
          , c = i && i.frontmatter.head || []
          , f = Ho(o, i);
        f !== document.title && (document.title = f);
        const a = l || o.description;
        let d = document.querySelector("meta[name=description]");
        d ? d.getAttribute("content") !== a && d.setAttribute("content", a) : ys(["meta", {
            name: "description",
            content: a
        }]),
        r(Do(o.head, yf(c)))
    }
    )
}
function ys([e,t,n]) {
    const s = document.createElement(e);
    for (const r in t)
        s.setAttribute(r, t[r]);
    return n && (s.innerHTML = n),
    e === "script" && t.async == null && (s.async = !1),
    s
}
function mf(e) {
    return e[0] === "meta" && e[1] && e[1].name === "description"
}
function yf(e) {
    return e.filter(t => !mf(t))
}
const vs = new Set
  , Uo = () => document.createElement("link")
  , vf = e => {
    const t = Uo();
    t.rel = "prefetch",
    t.href = e,
    document.head.appendChild(t)
}
  , bf = e => {
    const t = new XMLHttpRequest;
    t.open("GET", e, t.withCredentials = !0),
    t.send()
}
;
let bn;
const _f = ge && (bn = Uo()) && bn.relList && bn.relList.supports && bn.relList.supports("prefetch") ? vf : bf;
function lu() {
    if (!ge || !window.IntersectionObserver)
        return;
    let e;
    if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
        return;
    const t = window.requestIdleCallback || setTimeout;
    let n = null;
    const s = () => {
        n && n.disconnect(),
        n = new IntersectionObserver(i => {
            i.forEach(o => {
                if (o.isIntersecting) {
                    const l = o.target;
                    n.unobserve(l);
                    const {pathname: c} = l;
                    if (!vs.has(c)) {
                        vs.add(c);
                        const f = cf(c);
                        f && _f(f)
                    }
                }
            }
            )
        }
        ),
        t( () => {
            document.querySelectorAll("#app a").forEach(i => {
                const {hostname: o, pathname: l} = new URL(i.href instanceof SVGAnimatedString ? i.href.animVal : i.href,i.baseURI)
                  , c = l.match(/\.\w+$/);
                c && c[0] !== ".html" || i.target !== "_blank" && o === location.hostname && (l !== location.pathname ? n.observe(i) : vs.add(l))
            }
            )
        }
        )
    }
    ;
    vt(s);
    const r = Vo();
    Fe( () => r.path, s),
    rn( () => {
        n && n.disconnect()
    }
    )
}
export {Df as $, Rc as A, nc as B, af as C, Tf as D, Ys as E, ve as F, Zf as G, le as H, Cf as I, Fo as J, Vo as K, jc as L, Mt as M, Jf as N, Vs as O, Kf as P, Wn as Q, Xf as R, Lf as S, Nf as T, ge as U, kn as V, Ef as W, nu as X, Gf as Y, mc as Z, Uf as _, Pf as a, Of as a0, ki as a1, Hf as a2, Mf as a3, xf as a4, nt as a5, Is as a6, df as a7, Bn as a8, wf as a9, jf as aA, zf as aB, $f as aa, ou as ab, ff as ac, Qf as ad, rf as ae, tu as af, su as ag, mt as ah, Vf as ai, eu as aj, cf as ak, lu as al, iu as am, ru as an, ke as ao, Po as ap, Bf as aq, nr as ar, Wf as as, Yf as at, qf as au, kf as av, It as aw, ae as ax, Sf as ay, Sn as az, mo as b, ie as c, Js as d, If as e, of as f, Ps as g, Rf as h, yo as i, Ja as j, sf as k, Zr as l, Ai as m, Us as n, Ms as o, Xa as p, Lo as q, Af as r, oe as s, nl as t, Ff as u, Fe as v, Vl as w, er as x, vt as y, rn as z};
