const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./assets/chunks/VPLocalSearchBox.Ee3Iv9P_.js", "/assets/chunks/framework.DX1C7ho2.js"]))) => i.map(i => d[i]);
import {d as k, c as P, o as l, a as p, b as u, n as D, t as O, e as S, u as Nn, f as Ee, _ as V, F as W, r as J, g as C, h, i as X, w as m, T as Ne, j as Vn, k as In, l as Et, m as d, p as xe, q as $t, s as H, v as ue, x as Qe, y as re, z as Ot, A as Xt, B as Mn, C as En, D as me, E as Qt, G as ht, H as T, I as ie, J as en, K as mt, L as ge, M as Oe, N as On, O as tn, P as wt, Q as At, R as nn, S as An, U as vt, V as jn, W as Zn, X as Rn, Y as sn, Z as jt, $ as Bn, a0 as Dn, a1 as Hn, a2 as zn, a3 as Un, a4 as Fn, a5 as Wn, a6 as xt, a7 as qn, a8 as Gn, a9 as Yn, aa as Kn} from "./framework.DX1C7ho2.js";
const Jn = {
    class: "p-4 sticky top-0 z-10"
}
  , Xn = {
    class: "flex items-center gap-1.5"
}
  , Qn = {
    class: "flex items-start"
}
  , es = ["href"]
  , ts = k({
    __name: "GradientCard",
    props: {
        variant: {
            default: "default"
        },
        link: {},
        title: {},
        tag: {},
        description: {},
        theme: {}
    },
    setup(n) {
        const e = n
          , t = P( () => ({
            title: `text-${e.theme}-100`,
            bgleft: `bg-${e.theme}-800`,
            bgright: `bg-${e.theme}-700`,
            link: `text-${e.theme}-300`,
            description: `text-${e.theme}-100`
        }))
          , s = P( () => e.variant === "thin" ? {
            container: "h-40 text-sm",
            bgleft: "h-40 w-40 blur-2xl -left-20",
            bgright: "h-60 w-60 blur-2xl -top-24",
            title: "text-3xl",
            icon: "top-12 left-4",
            description: "mt-2 text-sm"
        } : {
            container: "h-96",
            bgleft: "h-80 w-80 blur-3xl -left-32",
            bgright: "h-96 w-96 blur-3xl -top-56",
            title: "text-6xl",
            icon: "top-36 left-6",
            description: "mt-4"
        });
        return (a, r) => (l(),
        p("div", {
            style: {
                "box-shadow": "0 10px 40px -12px rgba(16, 24, 40, 0.1)"
            },
            class: D([s.value.container, "rounded-2xl border border-amber overflow-hidden flex flex-col relative text-color bg-zinc-900"])
        }, [u("div", Jn, [u("div", Xn, [u("div", {
            class: D([t.value.tag, "font-medium"])
        }, O(e.tag), 3)])]), u("div", {
            class: D(`${t.value.bgleft} ${s.value.bgleft} absolute top-1/3 -translate-y-1/2 rounded-full mix-blend`)
        }, null, 2), u("div", {
            class: D(`${t.value.bgright} ${s.value.bgright} absolute left-1/2 -translate-x-1/2 rounded-full mix-blend`)
        }, null, 2), u("div", {
            class: D(`absolute ${s.value.icon}`)
        }, [u("div", Qn, [u("div", {
            class: D([s.value.title, "font-normal tracking-tighter text-color-50"])
        }, O(e.title), 3), e.link ? (l(),
        p("a", {
            key: 0,
            href: e.link,
            target: "_blank"
        }, [(l(),
        p("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            class: D([t.value.link, "w-8 h-8 ml-3"])
        }, r[0] || (r[0] = [u("path", {
            "fill-rule": "evenodd",
            d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z",
            "clip-rule": "evenodd"
        }, null, -1)]), 2))], 8, es)) : S("", !0)]), u("div", {
            class: D(`text-color-muted ${t.value.description} ${s.value.description}`)
        }, O(a.description), 3)], 2)], 2))
    }
})
  , ns = ["src", "title"]
  , ss = k({
    __name: "VideoFrame",
    props: {
        title: {
            default: "YouTube video frame"
        },
        src: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("iframe", {
            class: "aspect-16/9 rounded-xl w-full shadow-md border-none",
            src: e.src,
            title: e.title,
            frameborder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: ""
        }, null, 8, ns))
    }
})
  , as = ["href", "target"]
  , rs = {
    key: 1,
    class: "feature-tag"
}
  , os = k({
    __name: "Tag",
    props: {
        text: {},
        href: {},
        target: {}
    },
    setup(n) {
        Nn(i => ({
            "212dce98": o.value[4],
            "212dce1c": o.value[0],
            "212dce79": o.value[3]
        }));
        const e = n
          , {isDark: t} = Ee();
        function s(i, c=1) {
            i += "salt";
            let f = 0;
            for (let g = 0; g < i.length; g++)
                f = i.charCodeAt(g) + ((f << 5) - f);
            const _ = f % 360;
            return a(_, c)
        }
        function a(i, c=1) {
            const f = t.value ? 50 : 65
              , _ = t.value ? 60 : 40;
            return `hsla(${i}, ${f}%, ${_}%, ${c})`
        }
        const r = P( () => {
            const i = e.text.replace(/-/g, " ");
            return i[0].toUpperCase() + i.slice(1)
        }
        )
          , o = P( () => [s(e.text), s(e.text, .7), s(e.text, .5), s(e.text, .2), s(e.text, .1)]);
        return (i, c) => e.href ? (l(),
        p("a", {
            key: 0,
            class: "feature-tag",
            href: e.href,
            target: e.target
        }, O(r.value), 9, as)) : (l(),
        p("span", rs, O(r.value), 1))
    }
})
  , an = V(os, [["__scopeId", "data-v-53fdce08"]])
  , is = ["href", "target"]
  , ls = k({
    __name: "LinkInline",
    props: {
        text: {},
        href: {},
        target: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("a", {
            href: e.href,
            target: e.target,
            class: "bg-$vp-c-default-soft hover:bg-$vp-c-brand-soft rounded px2 py1 !decoration-none"
        }, O(e.text), 9, is))
    }
})
  , cs = ["href", "target"]
  , us = {
    class: "title"
}
  , ds = {
    class: "flex gap-1"
}
  , fs = {
    class: "description"
}
  , ps = k({
    __name: "LinkCard",
    props: {
        title: {},
        tags: {},
        description: {},
        href: {},
        target: {}
    },
    setup(n) {
        const e = n
          , t = P( () => e.tags.split(","));
        return (s, a) => (l(),
        p("a", {
            class: "link-card",
            href: s.href,
            target: s.target
        }, [u("div", us, [u("div", null, O(s.title), 1), a[0] || (a[0] = u("div", {
            class: "flex-grow"
        }, null, -1)), u("div", ds, [(l(!0),
        p(W, null, J(t.value, r => (l(),
        C(an, {
            key: r,
            text: r
        }, null, 8, ["text"]))), 128))])]), u("div", fs, O(s.description), 1)], 8, cs))
    }
})
  , hs = V(ps, [["__scopeId", "data-v-ba9afa07"]])
  , Ft = Object.freeze(Object.defineProperty({
    __proto__: null,
    GradientCard: ts,
    LinkCard: hs,
    LinkInline: ls,
    Tag: an,
    VideoFrame: ss
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ms = {
    install(n) {
        for (const e of Object.keys(Ft))
            n.component(e, Ft[e])
    }
}
  , vs = k({
    __name: "VPBadge",
    props: {
        text: {},
        type: {
            default: "tip"
        }
    },
    setup(n) {
        return (e, t) => (l(),
        p("span", {
            class: D(["VPBadge", e.type])
        }, [h(e.$slots, "default", {}, () => [X(O(e.text), 1)])], 2))
    }
})
  , _s = {
    key: 0,
    class: "VPBackdrop"
}
  , gs = k({
    __name: "VPBackdrop",
    props: {
        show: {
            type: Boolean
        }
    },
    setup(n) {
        return (e, t) => (l(),
        C(Ne, {
            name: "fade"
        }, {
            default: m( () => [e.show ? (l(),
            p("div", _s)) : S("", !0)]),
            _: 1
        }))
    }
})
  , ys = V(gs, [["__scopeId", "data-v-3f120b86"]])
  , z = Ee;
function bs(n, e) {
    let t, s = !1;
    return () => {
        t && clearTimeout(t),
        s ? t = setTimeout(n, e) : (n(),
        (s = !0) && setTimeout( () => s = !1, e))
    }
}
function Tt(n) {
    return /^\//.test(n) ? n : `\${n}`
}
function Zt(n) {
    const { pathname: e, search: t, hash: s, protocol: a } = new URL(n, "http://a.com");

    // Check if the URL is valid and uses the correct protocol
    if (Vn(n) || n.startsWith("#") || !a.startsWith("http") || !In(e)) return n;

    const { site: r } = z();
    
    // Normalize the path by replacing any backslashes with forward slashes
    const normalizedPath = e.replace(/\\/g, "/");

    // If the path doesn't end with .html or /, append .html
    const o = normalizedPath.endsWith("/") || normalizedPath.endsWith(".html") 
        ? n 
        : `${normalizedPath}.html${t}${s}`;
    
    return Et(o); // Return the full URL with .html extension
}
function et({correspondingLink: n=!1}={}) {
    const {site: e, localeIndex: t, page: s, theme: a, hash: r} = z()
      , o = P( () => {
        var c, f;
        return {
            label: (c = e.value.locales[t.value]) == null ? void 0 : c.label,
            link: ((f = e.value.locales[t.value]) == null ? void 0 : f.link) || (t.value === "root" ? "/" : `/${t.value}/`)
        }
    }
    );
    return {
        localeLinks: P( () => Object.entries(e.value.locales).flatMap( ([c,f]) => o.value.label === f.label ? [] : {
            text: f.label,
            link: ks(f.link || (c === "root" ? "/" : `/${c}/`), a.value.i18nRouting !== !1 && n, s.value.relativePath.slice(o.value.link.length - 1), !e.value.cleanUrls) + r.value
        })),
        currentLang: o
    }
}
function ks(n, e, t, s) {
    return e ? n.replace(/\/$/, "") + Tt(t.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, s ? ".html" : "")) : n
}
const $s = {
    class: "NotFound"
}
  , ws = {
    class: "code"
}
  , xs = {
    class: "title"
}
  , Ts = {
    class: "quote"
}
  , Ss = {
    class: "action"
}
  , Ps = ["href", "aria-label"]
  , Ls = k({
    __name: "NotFound",
    setup(n) {
        const {theme: e} = z()
          , {currentLang: t} = et();
        return (s, a) => {
            var r, o, i, c, f;
            return l(),
            p("div", $s, [u("p", ws, O(((r = d(e).notFound) == null ? void 0 : r.code) ?? "404"), 1), u("h1", xs, O(((o = d(e).notFound) == null ? void 0 : o.title) ?? "KINDLY REFRESH,TO LOAD THE PAGE.am working on it"), 1), a[0] || (a[0] = u("div", {
                class: "divider"
            }, null, -1)), u("blockquote", Ts, O(((i = d(e).notFound) == null ? void 0 : i.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1), u("div", Ss, [u("a", {
                class: "link",
                href: d(Et)(d(t).link),
                "aria-label": ((c = d(e).notFound) == null ? void 0 : c.linkLabel) ?? "go to home"
            }, O(((f = d(e).notFound) == null ? void 0 : f.linkText) ?? "Take me home"), 9, Ps)])])
        }
    }
})
  , Cs = V(Ls, [["__scopeId", "data-v-59c219e4"]]);
function rn(n, e) {
    if (Array.isArray(n))
        return at(n);
    if (n == null)
        return [];
    e = Tt(e);
    const t = Object.keys(n).sort( (a, r) => r.split("/").length - a.split("/").length).find(a => e.startsWith(Tt(a)))
      , s = t ? n[t] : [];
    return Array.isArray(s) ? at(s) : at(s.items, s.base)
}
function Ns(n) {
    const e = [];
    let t = 0;
    for (const s in n) {
        const a = n[s];
        if (a.items) {
            t = e.push(a);
            continue
        }
        e[t] || e.push({
            items: []
        }),
        e[t].items.push(a)
    }
    return e
}
function Vs(n) {
    const e = [];
    function t(s) {
        for (const a of s)
            a.text && a.link && e.push({
                text: a.text,
                link: a.link,
                docFooterText: a.docFooterText
            }),
            a.items && t(a.items)
    }
    return t(n),
    e
}
function St(n, e) {
    return Array.isArray(e) ? e.some(t => St(n, t)) : xe(n, e.link) ? !0 : e.items ? St(n, e.items) : !1
}
function at(n, e) {
    return [...n].map(t => {
        const s = {
            ...t
        }
          , a = s.base || e;
        return a && s.link && (s.link = a + s.link),
        s.items && (s.items = at(s.items, a)),
        s
    }
    )
}
function ve() {
    const {frontmatter: n, page: e, theme: t} = z()
      , s = $t("(min-width: 960px)")
      , a = H(!1)
      , r = P( () => {
        const b = t.value.sidebar
          , $ = e.value.relativePath;
        return b ? rn(b, $) : []
    }
    )
      , o = H(r.value);
    ue(r, (b, $) => {
        JSON.stringify(b) !== JSON.stringify($) && (o.value = r.value)
    }
    );
    const i = P( () => n.value.sidebar !== !1 && o.value.length > 0 && n.value.layout !== "home")
      , c = P( () => f ? n.value.aside == null ? t.value.aside === "left" : n.value.aside === "left" : !1)
      , f = P( () => n.value.layout === "home" ? !1 : n.value.aside != null ? !!n.value.aside : t.value.aside !== !1)
      , _ = P( () => i.value && s.value)
      , g = P( () => i.value ? Ns(o.value) : []);
    function L() {
        a.value = !0
    }
    function E() {
        a.value = !1
    }
    function v() {
        a.value ? E() : L()
    }
    return {
        isOpen: a,
        sidebar: o,
        sidebarGroups: g,
        hasSidebar: i,
        hasAside: f,
        leftAside: c,
        isSidebarEnabled: _,
        open: L,
        close: E,
        toggle: v
    }
}
function Is(n, e) {
    let t;
    Qe( () => {
        t = n.value ? document.activeElement : void 0
    }
    ),
    re( () => {
        window.addEventListener("keyup", s)
    }
    ),
    Ot( () => {
        window.removeEventListener("keyup", s)
    }
    );
    function s(a) {
        a.key === "Escape" && n.value && (e(),
        t == null || t.focus())
    }
}
function Ms(n) {
    const {page: e, hash: t} = z()
      , s = H(!1)
      , a = P( () => n.value.collapsed != null)
      , r = P( () => !!n.value.link)
      , o = H(!1)
      , i = () => {
        o.value = xe(e.value.relativePath, n.value.link)
    }
    ;
    ue([e, n, t], i),
    re(i);
    const c = P( () => o.value ? !0 : n.value.items ? St(e.value.relativePath, n.value.items) : !1)
      , f = P( () => !!(n.value.items && n.value.items.length));
    Qe( () => {
        s.value = !!(a.value && n.value.collapsed)
    }
    ),
    Xt( () => {
        (o.value || c.value) && (s.value = !1)
    }
    );
    function _() {
        a.value && (s.value = !s.value)
    }
    return {
        collapsed: s,
        collapsible: a,
        isLink: r,
        isActiveLink: o,
        hasActiveLink: c,
        hasChildren: f,
        toggle: _
    }
}
function Es() {
    const {hasSidebar: n} = ve()
      , e = $t("(min-width: 960px)")
      , t = $t("(min-width: 1280px)");
    return {
        isAsideEnabled: P( () => !t.value && !e.value ? !1 : n.value ? t.value : e.value)
    }
}
const Pt = [];
function on(n) {
    return typeof n.outline == "object" && !Array.isArray(n.outline) && n.outline.label || n.outlineTitle || "On this page"
}
function Rt(n) {
    const e = [...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(t => t.id && t.hasChildNodes()).map(t => {
        const s = Number(t.tagName[1]);
        return {
            element: t,
            title: Os(t),
            link: "#" + t.id,
            level: s
        }
    }
    );
    return As(e, n)
}
function Os(n) {
    let e = "";
    for (const t of n.childNodes)
        if (t.nodeType === 1) {
            if (t.classList.contains("VPBadge") || t.classList.contains("header-anchor") || t.classList.contains("ignore-header"))
                continue;
            e += t.textContent
        } else
            t.nodeType === 3 && (e += t.textContent);
    return e.trim()
}
function As(n, e) {
    if (e === !1)
        return [];
    const t = (typeof e == "object" && !Array.isArray(e) ? e.level : e) || 2
      , [s,a] = typeof t == "number" ? [t, t] : t === "deep" ? [2, 6] : t;
    return Rs(n, s, a)
}
function js(n, e) {
    const {isAsideEnabled: t} = Es()
      , s = bs(r, 100);
    let a = null;
    re( () => {
        requestAnimationFrame(r),
        window.addEventListener("scroll", s)
    }
    ),
    Mn( () => {
        o(location.hash)
    }
    ),
    Ot( () => {
        window.removeEventListener("scroll", s)
    }
    );
    function r() {
        if (!t.value)
            return;
        const i = window.scrollY
          , c = window.innerHeight
          , f = document.body.offsetHeight
          , _ = Math.abs(i + c - f) < 1
          , g = Pt.map( ({element: E, link: v}) => ({
            link: v,
            top: Zs(E)
        })).filter( ({top: E}) => !Number.isNaN(E)).sort( (E, v) => E.top - v.top);
        if (!g.length) {
            o(null);
            return
        }
        if (i < 1) {
            o(null);
            return
        }
        if (_) {
            o(g[g.length - 1].link);
            return
        }
        let L = null;
        for (const {link: E, top: v} of g) {
            if (v > i + En() + 4)
                break;
            L = E
        }
        o(L)
    }
    function o(i) {
        a && a.classList.remove("active"),
        i == null ? a = null : a = n.value.querySelector(`a[href="${decodeURIComponent(i)}"]`);
        const c = a;
        c ? (c.classList.add("active"),
        e.value.style.top = c.offsetTop + 39 + "px",
        e.value.style.opacity = "1") : (e.value.style.top = "33px",
        e.value.style.opacity = "0")
    }
}
function Zs(n) {
    let e = 0;
    for (; n !== document.body; ) {
        if (n === null)
            return NaN;
        e += n.offsetTop,
        n = n.offsetParent
    }
    return e
}
function Rs(n, e, t) {
    Pt.length = 0;
    const s = []
      , a = [];
    return n.forEach(r => {
        const o = {
            ...r,
            children: []
        };
        let i = a[a.length - 1];
        for (; i && i.level >= o.level; )
            a.pop(),
            i = a[a.length - 1];
        if (o.element.classList.contains("ignore-header") || i && "shouldIgnore"in i) {
            a.push({
                level: o.level,
                shouldIgnore: !0
            });
            return
        }
        o.level > t || o.level < e || (Pt.push({
            element: o.element,
            link: o.link
        }),
        i ? i.children.push(o) : s.push(o),
        a.push(o))
    }
    ),
    s
}
const Bs = ["href", "title"]
  , Ds = k({
    __name: "VPDocOutlineItem",
    props: {
        headers: {},
        root: {
            type: Boolean
        }
    },
    setup(n) {
        function e({target: t}) {
            const s = t.href.split("#")[1]
              , a = document.getElementById(decodeURIComponent(s));
            a == null || a.focus({
                preventScroll: !0
            })
        }
        return (t, s) => {
            const a = me("VPDocOutlineItem", !0);
            return l(),
            p("ul", {
                class: D(["VPDocOutlineItem", t.root ? "root" : "nested"])
            }, [(l(!0),
            p(W, null, J(t.headers, ({children: r, link: o, title: i}) => (l(),
            p("li", null, [u("a", {
                class: "outline-link",
                href: o,
                onClick: e,
                title: i
            }, O(i), 9, Bs), r != null && r.length ? (l(),
            C(a, {
                key: 0,
                headers: r
            }, null, 8, ["headers"])) : S("", !0)]))), 256))], 2)
        }
    }
})
  , ln = V(Ds, [["__scopeId", "data-v-6ccf8065"]])
  , Hs = {
    class: "content"
}
  , zs = {
    "aria-level": "2",
    class: "outline-title",
    id: "doc-outline-aria-label",
    role: "heading"
}
  , Us = k({
    __name: "VPDocAsideOutline",
    setup(n) {
        const {frontmatter: e, theme: t} = z()
          , s = Qt([]);
        ht( () => {
            s.value = Rt(e.value.outline ?? t.value.outline)
        }
        );
        const a = H()
          , r = H();
        return js(a, r),
        (o, i) => (l(),
        p("nav", {
            "aria-labelledby": "doc-outline-aria-label",
            class: D(["VPDocAsideOutline", {
                "has-outline": s.value.length > 0
            }]),
            ref_key: "container",
            ref: a
        }, [u("div", Hs, [u("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: r
        }, null, 512), u("div", zs, O(d(on)(d(t))), 1), T(ln, {
            headers: s.value,
            root: !0
        }, null, 8, ["headers"])])], 2))
    }
})
  , Fs = V(Us, [["__scopeId", "data-v-b2aeaafb"]])
  , Ws = {
    class: "VPDocAsideCarbonAds"
}
  , qs = k({
    __name: "VPDocAsideCarbonAds",
    props: {
        carbonAds: {}
    },
    setup(n) {
        const e = () => null;
        return (t, s) => (l(),
        p("div", Ws, [T(d(e), {
            "carbon-ads": t.carbonAds
        }, null, 8, ["carbon-ads"])]))
    }
})
  , Gs = {
    class: "VPDocAside"
}
  , Ys = k({
    __name: "VPDocAside",
    setup(n) {
        const {theme: e} = z();
        return (t, s) => (l(),
        p("div", Gs, [h(t.$slots, "aside-top", {}, void 0, !0), h(t.$slots, "aside-outline-before", {}, void 0, !0), T(Fs), h(t.$slots, "aside-outline-after", {}, void 0, !0), s[0] || (s[0] = u("div", {
            class: "spacer"
        }, null, -1)), h(t.$slots, "aside-ads-before", {}, void 0, !0), d(e).carbonAds ? (l(),
        C(qs, {
            key: 0,
            "carbon-ads": d(e).carbonAds
        }, null, 8, ["carbon-ads"])) : S("", !0), h(t.$slots, "aside-ads-after", {}, void 0, !0), h(t.$slots, "aside-bottom", {}, void 0, !0)]))
    }
})
  , Ks = V(Ys, [["__scopeId", "data-v-c51e0f05"]]);
function Js() {
    const {theme: n, page: e} = z();
    return P( () => {
        const {text: t="Edit this page", pattern: s=""} = n.value.editLink || {};
        let a;
        return typeof s == "function" ? a = s(e.value) : a = s.replace(/:path/g, e.value.filePath),
        {
            url: a,
            text: t
        }
    }
    )
}
function Xs() {
    const {page: n, theme: e, frontmatter: t} = z();
    return P( () => {
        var f, _, g, L, E, v, b, $;
        const s = rn(e.value.sidebar, n.value.relativePath)
          , a = Vs(s)
          , r = Qs(a, B => B.link.replace(/[?#].*$/, ""))
          , o = r.findIndex(B => xe(n.value.relativePath, B.link))
          , i = ((f = e.value.docFooter) == null ? void 0 : f.prev) === !1 && !t.value.prev || t.value.prev === !1
          , c = ((_ = e.value.docFooter) == null ? void 0 : _.next) === !1 && !t.value.next || t.value.next === !1;
        return {
            prev: i ? void 0 : {
                text: (typeof t.value.prev == "string" ? t.value.prev : typeof t.value.prev == "object" ? t.value.prev.text : void 0) ?? ((g = r[o - 1]) == null ? void 0 : g.docFooterText) ?? ((L = r[o - 1]) == null ? void 0 : L.text),
                link: (typeof t.value.prev == "object" ? t.value.prev.link : void 0) ?? ((E = r[o - 1]) == null ? void 0 : E.link)
            },
            next: c ? void 0 : {
                text: (typeof t.value.next == "string" ? t.value.next : typeof t.value.next == "object" ? t.value.next.text : void 0) ?? ((v = r[o + 1]) == null ? void 0 : v.docFooterText) ?? ((b = r[o + 1]) == null ? void 0 : b.text),
                link: (typeof t.value.next == "object" ? t.value.next.link : void 0) ?? (($ = r[o + 1]) == null ? void 0 : $.link)
            }
        }
    }
    )
}
function Qs(n, e) {
    const t = new Set;
    return n.filter(s => {
        const a = e(s);
        return t.has(a) ? !1 : t.add(a)
    }
    )
}
const le = k({
    __name: "VPLink",
    props: {
        tag: {},
        href: {},
        noIcon: {
            type: Boolean
        },
        target: {},
        rel: {}
    },
    setup(n) {
        const e = n
          , t = P( () => e.tag ?? (e.href ? "a" : "span"))
          , s = P( () => e.href && en.test(e.href) || e.target === "_blank");
        return (a, r) => (l(),
        C(ie(t.value), {
            class: D(["VPLink", {
                link: a.href,
                "vp-external-link-icon": s.value,
                "no-icon": a.noIcon
            }]),
            href: a.href ? d(Zt)(a.href) : void 0,
            target: a.target ?? (s.value ? "_blank" : void 0),
            rel: a.rel ?? (s.value ? "noreferrer" : void 0)
        }, {
            default: m( () => [h(a.$slots, "default")]),
            _: 3
        }, 8, ["class", "href", "target", "rel"]))
    }
})
  , ea = {
    class: "VPLastUpdated"
}
  , ta = ["datetime"]
  , na = k({
    __name: "VPDocFooterLastUpdated",
    setup(n) {
        const {theme: e, page: t, lang: s} = z()
          , a = P( () => new Date(t.value.lastUpdated))
          , r = P( () => a.value.toISOString())
          , o = H("");
        return re( () => {
            Qe( () => {
                var i, c, f;
                o.value = new Intl.DateTimeFormat((c = (i = e.value.lastUpdated) == null ? void 0 : i.formatOptions) != null && c.forceLocale ? s.value : void 0,((f = e.value.lastUpdated) == null ? void 0 : f.formatOptions) ?? {
                    dateStyle: "short",
                    timeStyle: "short"
                }).format(a.value)
            }
            )
        }
        ),
        (i, c) => {
            var f;
            return l(),
            p("p", ea, [X(O(((f = d(e).lastUpdated) == null ? void 0 : f.text) || d(e).lastUpdatedText || "Last updated") + ": ", 1), u("time", {
                datetime: r.value
            }, O(o.value), 9, ta)])
        }
    }
})
  , sa = V(na, [["__scopeId", "data-v-3b83f1ce"]])
  , aa = {
    key: 0,
    class: "VPDocFooter"
}
  , ra = {
    key: 0,
    class: "edit-info"
}
  , oa = {
    key: 0,
    class: "edit-link"
}
  , ia = {
    key: 1,
    class: "last-updated"
}
  , la = {
    key: 1,
    class: "prev-next",
    "aria-labelledby": "doc-footer-aria-label"
}
  , ca = {
    class: "pager"
}
  , ua = ["innerHTML"]
  , da = ["innerHTML"]
  , fa = {
    class: "pager"
}
  , pa = ["innerHTML"]
  , ha = ["innerHTML"]
  , ma = k({
    __name: "VPDocFooter",
    setup(n) {
        const {theme: e, page: t, frontmatter: s} = z()
          , a = Js()
          , r = Xs()
          , o = P( () => e.value.editLink && s.value.editLink !== !1)
          , i = P( () => t.value.lastUpdated)
          , c = P( () => o.value || i.value || r.value.prev || r.value.next);
        return (f, _) => {
            var g, L, E, v;
            return c.value ? (l(),
            p("footer", aa, [h(f.$slots, "doc-footer-before", {}, void 0, !0), o.value || i.value ? (l(),
            p("div", ra, [o.value ? (l(),
            p("div", oa, [T(le, {
                class: "edit-link-button",
                href: d(a).url,
                "no-icon": !0
            }, {
                default: m( () => [_[0] || (_[0] = u("span", {
                    class: "vpi-square-pen edit-link-icon"
                }, null, -1)), X(" " + O(d(a).text), 1)]),
                _: 1
            }, 8, ["href"])])) : S("", !0), i.value ? (l(),
            p("div", ia, [T(sa)])) : S("", !0)])) : S("", !0), (g = d(r).prev) != null && g.link || (L = d(r).next) != null && L.link ? (l(),
            p("nav", la, [_[1] || (_[1] = u("span", {
                class: "visually-hidden",
                id: "doc-footer-aria-label"
            }, "Pager", -1)), u("div", ca, [(E = d(r).prev) != null && E.link ? (l(),
            C(le, {
                key: 0,
                class: "pager-link prev",
                href: d(r).prev.link
            }, {
                default: m( () => {
                    var b;
                    return [u("span", {
                        class: "desc",
                        innerHTML: ((b = d(e).docFooter) == null ? void 0 : b.prev) || "Previous page"
                    }, null, 8, ua), u("span", {
                        class: "title",
                        innerHTML: d(r).prev.text
                    }, null, 8, da)]
                }
                ),
                _: 1
            }, 8, ["href"])) : S("", !0)]), u("div", fa, [(v = d(r).next) != null && v.link ? (l(),
            C(le, {
                key: 0,
                class: "pager-link next",
                href: d(r).next.link
            }, {
                default: m( () => {
                    var b;
                    return [u("span", {
                        class: "desc",
                        innerHTML: ((b = d(e).docFooter) == null ? void 0 : b.next) || "Next page"
                    }, null, 8, pa), u("span", {
                        class: "title",
                        innerHTML: d(r).next.text
                    }, null, 8, ha)]
                }
                ),
                _: 1
            }, 8, ["href"])) : S("", !0)])])) : S("", !0)])) : S("", !0)
        }
    }
})
  , va = V(ma, [["__scopeId", "data-v-26c2d8ba"]])
  , _a = {
    class: "container"
}
  , ga = {
    class: "aside-container"
}
  , ya = {
    class: "aside-content"
}
  , ba = {
    class: "content"
}
  , ka = {
    class: "content-container"
}
  , $a = {
    class: "main"
}
  , wa = k({
    __name: "VPDoc",
    setup(n) {
        const {theme: e} = z()
          , t = mt()
          , {hasSidebar: s, hasAside: a, leftAside: r} = ve()
          , o = P( () => t.path.replace(/[./]+/g, "_").replace(/_html$/, ""));
        return (i, c) => {
            const f = me("Content");
            return l(),
            p("div", {
                class: D(["VPDoc", {
                    "has-sidebar": d(s),
                    "has-aside": d(a)
                }])
            }, [h(i.$slots, "doc-top", {}, void 0, !0), u("div", _a, [d(a) ? (l(),
            p("div", {
                key: 0,
                class: D(["aside", {
                    "left-aside": d(r)
                }])
            }, [c[0] || (c[0] = u("div", {
                class: "aside-curtain"
            }, null, -1)), u("div", ga, [u("div", ya, [T(Ks, null, {
                "aside-top": m( () => [h(i.$slots, "aside-top", {}, void 0, !0)]),
                "aside-bottom": m( () => [h(i.$slots, "aside-bottom", {}, void 0, !0)]),
                "aside-outline-before": m( () => [h(i.$slots, "aside-outline-before", {}, void 0, !0)]),
                "aside-outline-after": m( () => [h(i.$slots, "aside-outline-after", {}, void 0, !0)]),
                "aside-ads-before": m( () => [h(i.$slots, "aside-ads-before", {}, void 0, !0)]),
                "aside-ads-after": m( () => [h(i.$slots, "aside-ads-after", {}, void 0, !0)]),
                _: 3
            })])])], 2)) : S("", !0), u("div", ba, [u("div", ka, [h(i.$slots, "doc-before", {}, void 0, !0), u("main", $a, [T(f, {
                class: D(["vp-doc", [o.value, d(e).externalLinkIcon && "external-link-icon-enabled"]])
            }, null, 8, ["class"])]), T(va, null, {
                "doc-footer-before": m( () => [h(i.$slots, "doc-footer-before", {}, void 0, !0)]),
                _: 3
            }), h(i.$slots, "doc-after", {}, void 0, !0)])])]), h(i.$slots, "doc-bottom", {}, void 0, !0)], 2)
        }
    }
})
  , xa = V(wa, [["__scopeId", "data-v-6cd3ff0e"]])
  , Ta = k({
    __name: "VPButton",
    props: {
        tag: {},
        size: {
            default: "medium"
        },
        theme: {
            default: "brand"
        },
        text: {},
        href: {},
        target: {},
        rel: {}
    },
    setup(n) {
        const e = n
          , t = P( () => e.href && en.test(e.href))
          , s = P( () => e.tag || (e.href ? "a" : "button"));
        return (a, r) => (l(),
        C(ie(s.value), {
            class: D(["VPButton", [a.size, a.theme]]),
            href: a.href ? d(Zt)(a.href) : void 0,
            target: e.target ?? (t.value ? "_blank" : void 0),
            rel: e.rel ?? (t.value ? "noreferrer" : void 0)
        }, {
            default: m( () => [X(O(a.text), 1)]),
            _: 1
        }, 8, ["class", "href", "target", "rel"]))
    }
})
  , Sa = V(Ta, [["__scopeId", "data-v-a925bb37"]])
  , Pa = ["src", "alt"]
  , La = k({
    inheritAttrs: !1,
    __name: "VPImage",
    props: {
        image: {},
        alt: {}
    },
    setup(n) {
        return (e, t) => {
            const s = me("VPImage", !0);
            return e.image ? (l(),
            p(W, {
                key: 0
            }, [typeof e.image == "string" || "src"in e.image ? (l(),
            p("img", ge({
                key: 0,
                class: "VPImage"
            }, typeof e.image == "string" ? e.$attrs : {
                ...e.image,
                ...e.$attrs
            }, {
                src: d(Et)(typeof e.image == "string" ? e.image : e.image.src),
                alt: e.alt ?? (typeof e.image == "string" ? "" : e.image.alt || "")
            }), null, 16, Pa)) : (l(),
            p(W, {
                key: 1
            }, [T(s, ge({
                class: "dark",
                image: e.image.dark,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"]), T(s, ge({
                class: "light",
                image: e.image.light,
                alt: e.image.alt
            }, e.$attrs), null, 16, ["image", "alt"])], 64))], 64)) : S("", !0)
        }
    }
})
  , ot = V(La, [["__scopeId", "data-v-f077251e"]])
  , Ca = {
    class: "container"
}
  , Na = {
    class: "main"
}
  , Va = {
    key: 0,
    class: "name"
}
  , Ia = ["innerHTML"]
  , Ma = ["innerHTML"]
  , Ea = ["innerHTML"]
  , Oa = {
    key: 0,
    class: "actions"
}
  , Aa = {
    key: 0,
    class: "image"
}
  , ja = {
    class: "image-container"
}
  , Za = k({
    __name: "VPHero",
    props: {
        name: {},
        text: {},
        tagline: {},
        image: {},
        actions: {}
    },
    setup(n) {
        const e = Oe("hero-image-slot-exists");
        return (t, s) => (l(),
        p("div", {
            class: D(["VPHero", {
                "has-image": t.image || d(e)
            }])
        }, [u("div", Ca, [u("div", Na, [h(t.$slots, "home-hero-info-before", {}, void 0, !0), h(t.$slots, "home-hero-info", {}, () => [t.name ? (l(),
        p("h1", Va, [u("span", {
            innerHTML: t.name,
            class: "clip"
        }, null, 8, Ia)])) : S("", !0), t.text ? (l(),
        p("p", {
            key: 1,
            innerHTML: t.text,
            class: "text"
        }, null, 8, Ma)) : S("", !0), t.tagline ? (l(),
        p("p", {
            key: 2,
            innerHTML: t.tagline,
            class: "tagline"
        }, null, 8, Ea)) : S("", !0)], !0), h(t.$slots, "home-hero-info-after", {}, void 0, !0), t.actions ? (l(),
        p("div", Oa, [(l(!0),
        p(W, null, J(t.actions, a => (l(),
        p("div", {
            key: a.link,
            class: "action"
        }, [T(Sa, {
            tag: "a",
            size: "medium",
            theme: a.theme,
            text: a.text,
            href: a.link,
            target: a.target,
            rel: a.rel
        }, null, 8, ["theme", "text", "href", "target", "rel"])]))), 128))])) : S("", !0), h(t.$slots, "home-hero-actions-after", {}, void 0, !0)]), t.image || d(e) ? (l(),
        p("div", Aa, [u("div", ja, [s[0] || (s[0] = u("div", {
            class: "image-bg"
        }, null, -1)), h(t.$slots, "home-hero-image", {}, () => [t.image ? (l(),
        C(ot, {
            key: 0,
            class: "image-src",
            image: t.image
        }, null, 8, ["image"])) : S("", !0)], !0)])])) : S("", !0)])], 2))
    }
})
  , Ra = V(Za, [["__scopeId", "data-v-f8102fd0"]])
  , Ba = k({
    __name: "VPHomeHero",
    setup(n) {
        const {frontmatter: e} = z();
        return (t, s) => d(e).hero ? (l(),
        C(Ra, {
            key: 0,
            class: "VPHomeHero",
            name: d(e).hero.name,
            text: d(e).hero.text,
            tagline: d(e).hero.tagline,
            image: d(e).hero.image,
            actions: d(e).hero.actions
        }, {
            "home-hero-info-before": m( () => [h(t.$slots, "home-hero-info-before")]),
            "home-hero-info": m( () => [h(t.$slots, "home-hero-info")]),
            "home-hero-info-after": m( () => [h(t.$slots, "home-hero-info-after")]),
            "home-hero-actions-after": m( () => [h(t.$slots, "home-hero-actions-after")]),
            "home-hero-image": m( () => [h(t.$slots, "home-hero-image")]),
            _: 3
        }, 8, ["name", "text", "tagline", "image", "actions"])) : S("", !0)
    }
})
  , Da = {
    class: "box"
}
  , Ha = {
    key: 0,
    class: "icon"
}
  , za = ["innerHTML"]
  , Ua = ["innerHTML"]
  , Fa = ["innerHTML"]
  , Wa = {
    key: 4,
    class: "link-text"
}
  , qa = {
    class: "link-text-value"
}
  , Ga = k({
    __name: "VPFeature",
    props: {
        icon: {},
        title: {},
        details: {},
        link: {},
        linkText: {},
        rel: {},
        target: {}
    },
    setup(n) {
        return (e, t) => (l(),
        C(le, {
            class: "VPFeature",
            href: e.link,
            rel: e.rel,
            target: e.target,
            "no-icon": !0,
            tag: e.link ? "a" : "div"
        }, {
            default: m( () => [u("article", Da, [typeof e.icon == "object" && e.icon.wrap ? (l(),
            p("div", Ha, [T(ot, {
                image: e.icon,
                alt: e.icon.alt,
                height: e.icon.height || 48,
                width: e.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])])) : typeof e.icon == "object" ? (l(),
            C(ot, {
                key: 1,
                image: e.icon,
                alt: e.icon.alt,
                height: e.icon.height || 48,
                width: e.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : e.icon ? (l(),
            p("div", {
                key: 2,
                class: "icon",
                innerHTML: e.icon
            }, null, 8, za)) : S("", !0), u("h2", {
                class: "title",
                innerHTML: e.title
            }, null, 8, Ua), e.details ? (l(),
            p("p", {
                key: 3,
                class: "details",
                innerHTML: e.details
            }, null, 8, Fa)) : S("", !0), e.linkText ? (l(),
            p("div", Wa, [u("p", qa, [X(O(e.linkText) + " ", 1), t[0] || (t[0] = u("span", {
                class: "vpi-arrow-right link-text-icon"
            }, null, -1))])])) : S("", !0)])]),
            _: 1
        }, 8, ["href", "rel", "target", "tag"]))
    }
})
  , Ya = V(Ga, [["__scopeId", "data-v-e792734a"]])
  , Ka = {
    key: 0,
    class: "VPFeatures"
}
  , Ja = {
    class: "container"
}
  , Xa = {
    class: "items"
}
  , Qa = k({
    __name: "VPFeatures",
    props: {
        features: {}
    },
    setup(n) {
        const e = n
          , t = P( () => {
            const s = e.features.length;
            if (s) {
                if (s === 2)
                    return "grid-2";
                if (s === 3)
                    return "grid-3";
                if (s % 3 === 0)
                    return "grid-6";
                if (s > 3)
                    return "grid-4"
            } else
                return
        }
        );
        return (s, a) => s.features ? (l(),
        p("div", Ka, [u("div", Ja, [u("div", Xa, [(l(!0),
        p(W, null, J(s.features, r => (l(),
        p("div", {
            key: r.title,
            class: D(["item", [t.value]])
        }, [T(Ya, {
            icon: r.icon,
            title: r.title,
            details: r.details,
            link: r.link,
            "link-text": r.linkText,
            rel: r.rel,
            target: r.target
        }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])], 2))), 128))])])])) : S("", !0)
    }
})
  , er = V(Qa, [["__scopeId", "data-v-41617c58"]])
  , tr = k({
    __name: "VPHomeFeatures",
    setup(n) {
        const {frontmatter: e} = z();
        return (t, s) => d(e).features ? (l(),
        C(er, {
            key: 0,
            class: "VPHomeFeatures",
            features: d(e).features
        }, null, 8, ["features"])) : S("", !0)
    }
})
  , nr = k({
    __name: "VPHomeContent",
    setup(n) {
        const {width: e} = On({
            initialWidth: 0,
            includeScrollbar: !1
        });
        return (t, s) => (l(),
        p("div", {
            class: "vp-doc container",
            style: tn(d(e) ? {
                "--vp-offset": `calc(50% - ${d(e) / 2}px)`
            } : {})
        }, [h(t.$slots, "default", {}, void 0, !0)], 4))
    }
})
  , sr = V(nr, [["__scopeId", "data-v-17385c3a"]])
  , ar = {
    class: "VPHome"
}
  , rr = k({
    __name: "VPHome",
    setup(n) {
        const {frontmatter: e} = z();
        return (t, s) => {
            const a = me("Content");
            return l(),
            p("div", ar, [h(t.$slots, "home-hero-before", {}, void 0, !0), T(Ba, null, {
                "home-hero-info-before": m( () => [h(t.$slots, "home-hero-info-before", {}, void 0, !0)]),
                "home-hero-info": m( () => [h(t.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-info-after": m( () => [h(t.$slots, "home-hero-info-after", {}, void 0, !0)]),
                "home-hero-actions-after": m( () => [h(t.$slots, "home-hero-actions-after", {}, void 0, !0)]),
                "home-hero-image": m( () => [h(t.$slots, "home-hero-image", {}, void 0, !0)]),
                _: 3
            }), h(t.$slots, "home-hero-after", {}, void 0, !0), h(t.$slots, "home-features-before", {}, void 0, !0), T(tr), h(t.$slots, "home-features-after", {}, void 0, !0), d(e).markdownStyles !== !1 ? (l(),
            C(sr, {
                key: 0
            }, {
                default: m( () => [T(a)]),
                _: 1
            })) : (l(),
            C(a, {
                key: 1
            }))])
        }
    }
})
  , or = V(rr, [["__scopeId", "data-v-ce661cce"]])
  , ir = {}
  , lr = {
    class: "VPPage"
};
function cr(n, e) {
    const t = me("Content");
    return l(),
    p("div", lr, [h(n.$slots, "page-top"), T(t), h(n.$slots, "page-bottom")])
}
const ur = V(ir, [["render", cr]])
  , dr = k({
    __name: "VPContent",
    setup(n) {
        const {page: e, frontmatter: t} = z()
          , {hasSidebar: s} = ve();
        return (a, r) => (l(),
        p("div", {
            class: D(["VPContent", {
                "has-sidebar": d(s),
                "is-home": d(t).layout === "home"
            }]),
            id: "VPContent"
        }, [d(e).isNotFound ? h(a.$slots, "not-found", {
            key: 0
        }, () => [T(Cs)], !0) : d(t).layout === "page" ? (l(),
        C(ur, {
            key: 1
        }, {
            "page-top": m( () => [h(a.$slots, "page-top", {}, void 0, !0)]),
            "page-bottom": m( () => [h(a.$slots, "page-bottom", {}, void 0, !0)]),
            _: 3
        })) : d(t).layout === "home" ? (l(),
        C(or, {
            key: 2
        }, {
            "home-hero-before": m( () => [h(a.$slots, "home-hero-before", {}, void 0, !0)]),
            "home-hero-info-before": m( () => [h(a.$slots, "home-hero-info-before", {}, void 0, !0)]),
            "home-hero-info": m( () => [h(a.$slots, "home-hero-info", {}, void 0, !0)]),
            "home-hero-info-after": m( () => [h(a.$slots, "home-hero-info-after", {}, void 0, !0)]),
            "home-hero-actions-after": m( () => [h(a.$slots, "home-hero-actions-after", {}, void 0, !0)]),
            "home-hero-image": m( () => [h(a.$slots, "home-hero-image", {}, void 0, !0)]),
            "home-hero-after": m( () => [h(a.$slots, "home-hero-after", {}, void 0, !0)]),
            "home-features-before": m( () => [h(a.$slots, "home-features-before", {}, void 0, !0)]),
            "home-features-after": m( () => [h(a.$slots, "home-features-after", {}, void 0, !0)]),
            _: 3
        })) : d(t).layout && d(t).layout !== "doc" ? (l(),
        C(ie(d(t).layout), {
            key: 3
        })) : (l(),
        C(xa, {
            key: 4
        }, {
            "doc-top": m( () => [h(a.$slots, "doc-top", {}, void 0, !0)]),
            "doc-bottom": m( () => [h(a.$slots, "doc-bottom", {}, void 0, !0)]),
            "doc-footer-before": m( () => [h(a.$slots, "doc-footer-before", {}, void 0, !0)]),
            "doc-before": m( () => [h(a.$slots, "doc-before", {}, void 0, !0)]),
            "doc-after": m( () => [h(a.$slots, "doc-after", {}, void 0, !0)]),
            "aside-top": m( () => [h(a.$slots, "aside-top", {}, void 0, !0)]),
            "aside-outline-before": m( () => [h(a.$slots, "aside-outline-before", {}, void 0, !0)]),
            "aside-outline-after": m( () => [h(a.$slots, "aside-outline-after", {}, void 0, !0)]),
            "aside-ads-before": m( () => [h(a.$slots, "aside-ads-before", {}, void 0, !0)]),
            "aside-ads-after": m( () => [h(a.$slots, "aside-ads-after", {}, void 0, !0)]),
            "aside-bottom": m( () => [h(a.$slots, "aside-bottom", {}, void 0, !0)]),
            _: 3
        }))], 2))
    }
})
  , fr = V(dr, [["__scopeId", "data-v-d5849913"]])
  , pr = {
    class: "container"
}
  , hr = ["innerHTML"]
  , mr = ["innerHTML"]
  , vr = k({
    __name: "VPFooter",
    setup(n) {
        const {theme: e, frontmatter: t} = z()
          , {hasSidebar: s} = ve();
        return (a, r) => d(e).footer && d(t).footer !== !1 ? (l(),
        p("footer", {
            key: 0,
            class: D(["VPFooter", {
                "has-sidebar": d(s)
            }])
        }, [u("div", pr, [d(e).footer.message ? (l(),
        p("p", {
            key: 0,
            class: "message",
            innerHTML: d(e).footer.message
        }, null, 8, hr)) : S("", !0), d(e).footer.copyright ? (l(),
        p("p", {
            key: 1,
            class: "copyright",
            innerHTML: d(e).footer.copyright
        }, null, 8, mr)) : S("", !0)])], 2)) : S("", !0)
    }
})
  , _r = V(vr, [["__scopeId", "data-v-5287c27a"]]);
function gr() {
    const {theme: n, frontmatter: e} = z()
      , t = Qt([])
      , s = P( () => t.value.length > 0);
    return ht( () => {
        t.value = Rt(e.value.outline ?? n.value.outline)
    }
    ),
    {
        headers: t,
        hasLocalNav: s
    }
}
const yr = {
    class: "menu-text"
}
  , br = {
    class: "header"
}
  , kr = {
    class: "outline"
}
  , $r = k({
    __name: "VPLocalNavOutlineDropdown",
    props: {
        headers: {},
        navHeight: {}
    },
    setup(n) {
        const e = n
          , {theme: t} = z()
          , s = H(!1)
          , a = H(0)
          , r = H()
          , o = H();
        function i(g) {
            var L;
            (L = r.value) != null && L.contains(g.target) || (s.value = !1)
        }
        ue(s, g => {
            if (g) {
                document.addEventListener("click", i);
                return
            }
            document.removeEventListener("click", i)
        }
        ),
        wt("Escape", () => {
            s.value = !1
        }
        ),
        ht( () => {
            s.value = !1
        }
        );
        function c() {
            s.value = !s.value,
            a.value = window.innerHeight + Math.min(window.scrollY - e.navHeight, 0)
        }
        function f(g) {
            g.target.classList.contains("outline-link") && (o.value && (o.value.style.transition = "none"),
            At( () => {
                s.value = !1
            }
            ))
        }
        function _() {
            s.value = !1,
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
        return (g, L) => (l(),
        p("div", {
            class: "VPLocalNavOutlineDropdown",
            style: tn({
                "--vp-vh": a.value + "px"
            }),
            ref_key: "main",
            ref: r
        }, [g.headers.length > 0 ? (l(),
        p("button", {
            key: 0,
            onClick: c,
            class: D({
                open: s.value
            })
        }, [u("span", yr, O(d(on)(d(t))), 1), L[0] || (L[0] = u("span", {
            class: "vpi-chevron-right icon"
        }, null, -1))], 2)) : (l(),
        p("button", {
            key: 1,
            onClick: _
        }, O(d(t).returnToTopLabel || "Return to top"), 1)), T(Ne, {
            name: "flyout"
        }, {
            default: m( () => [s.value ? (l(),
            p("div", {
                key: 0,
                ref_key: "items",
                ref: o,
                class: "items",
                onClick: f
            }, [u("div", br, [u("a", {
                class: "top-link",
                href: "#",
                onClick: _
            }, O(d(t).returnToTopLabel || "Return to top"), 1)]), u("div", kr, [T(ln, {
                headers: g.headers
            }, null, 8, ["headers"])])], 512)) : S("", !0)]),
            _: 1
        })], 4))
    }
})
  , wr = V($r, [["__scopeId", "data-v-898ef9d7"]])
  , xr = {
    class: "container"
}
  , Tr = ["aria-expanded"]
  , Sr = {
    class: "menu-text"
}
  , Pr = k({
    __name: "VPLocalNav",
    props: {
        open: {
            type: Boolean
        }
    },
    emits: ["open-menu"],
    setup(n) {
        const {theme: e, frontmatter: t} = z()
          , {hasSidebar: s} = ve()
          , {headers: a} = gr()
          , {y: r} = nn()
          , o = H(0);
        re( () => {
            o.value = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))
        }
        ),
        ht( () => {
            a.value = Rt(t.value.outline ?? e.value.outline)
        }
        );
        const i = P( () => a.value.length === 0)
          , c = P( () => i.value && !s.value)
          , f = P( () => ({
            VPLocalNav: !0,
            "has-sidebar": s.value,
            empty: i.value,
            fixed: c.value
        }));
        return (_, g) => d(t).layout !== "home" && (!c.value || d(r) >= o.value) ? (l(),
        p("div", {
            key: 0,
            class: D(f.value)
        }, [u("div", xr, [d(s) ? (l(),
        p("button", {
            key: 0,
            class: "menu",
            "aria-expanded": _.open,
            "aria-controls": "VPSidebarNav",
            onClick: g[0] || (g[0] = L => _.$emit("open-menu"))
        }, [g[1] || (g[1] = u("span", {
            class: "vpi-align-left menu-icon"
        }, null, -1)), u("span", Sr, O(d(e).sidebarMenuLabel || "Menu"), 1)], 8, Tr)) : S("", !0), T(wr, {
            headers: d(a),
            navHeight: o.value
        }, null, 8, ["headers", "navHeight"])])], 2)) : S("", !0)
    }
})
  , Lr = V(Pr, [["__scopeId", "data-v-45638ff8"]]);
function Cr() {
    const n = H(!1);
    function e() {
        n.value = !0,
        window.addEventListener("resize", a)
    }
    function t() {
        n.value = !1,
        window.removeEventListener("resize", a)
    }
    function s() {
        n.value ? t() : e()
    }
    function a() {
        window.outerWidth >= 768 && t()
    }
    const r = mt();
    return ue( () => r.path, t),
    {
        isScreenOpen: n,
        openScreen: e,
        closeScreen: t,
        toggleScreen: s
    }
}
const Nr = {}
  , Vr = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
};
function Ir(n, e) {
    return l(),
    p("svg", Vr, e[0] || (e[0] = [u("path", {
        d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
    }, null, -1)]))
}
const Mr = V(Nr, [["render", Ir]])
  , Er = {}
  , Or = {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
};
function Ar(n, e) {
    return l(),
    p("svg", Or, e[0] || (e[0] = [An('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9)]))
}
const jr = V(Er, [["render", Ar]])
  , Zr = ["aria-checked", "data-view-transition"]
  , Rr = k({
    __name: "Appearance",
    setup(n) {
        const {isDark: e} = Ee()
          , t = Oe("toggle-appearance", () => {
            e.value = !e.value
        }
        )
          , s = H(!1);
        return re( () => {
            s.value = "startViewTransition"in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches
        }
        ),
        (a, r) => {
            const o = me("ClientOnly");
            return l(),
            p("button", {
                type: "button",
                role: "switch",
                title: "VPSwitchAppearance",
                class: "VPSwitchAppearance",
                "aria-checked": d(e),
                "data-view-transition": d(s),
                onClick: r[0] || (r[0] = (...i) => d(t) && d(t)(...i))
            }, [T(o, null, {
                default: m( () => [T(Ne, {
                    name: "fade",
                    mode: "out-in"
                }, {
                    default: m( () => [d(e) ? (l(),
                    C(Mr, {
                        key: 1,
                        class: "moon"
                    })) : (l(),
                    C(jr, {
                        key: 0,
                        class: "sun"
                    }))]),
                    _: 1
                })]),
                _: 1
            })], 8, Zr)
        }
    }
})
  , Bt = V(Rr, [["__scopeId", "data-v-9821a729"]])
  , Br = {
    key: 0,
    class: "VPNavBarAppearance"
}
  , Dr = k({
    __name: "VPNavBarAppearance",
    setup(n) {
        const {site: e} = z();
        return (t, s) => d(e).appearance && d(e).appearance !== "force-dark" && d(e).appearance !== "force-auto" ? (l(),
        p("div", Br, [T(Bt)])) : S("", !0)
    }
})
  , Hr = V(Dr, [["__scopeId", "data-v-c62c6eed"]])
  , Dt = H();
let cn = !1
  , yt = 0;
function zr(n) {
    const e = H(!1);
    if (vt) {
        !cn && Ur(),
        yt++;
        const t = ue(Dt, s => {
            var a, r, o;
            s === n.el.value || (a = n.el.value) != null && a.contains(s) ? (e.value = !0,
            (r = n.onFocus) == null || r.call(n)) : (e.value = !1,
            (o = n.onBlur) == null || o.call(n))
        }
        );
        Ot( () => {
            t(),
            yt--,
            yt || Fr()
        }
        )
    }
    return jn(e)
}
function Ur() {
    document.addEventListener("focusin", un),
    cn = !0,
    Dt.value = document.activeElement
}
function Fr() {
    document.removeEventListener("focusin", un)
}
function un() {
    Dt.value = document.activeElement
}
const Wr = {
    class: "VPMenuLink"
}
  , qr = ["innerHTML"]
  , Gr = k({
    __name: "VPMenuLink",
    props: {
        item: {}
    },
    setup(n) {
        const {page: e} = z();
        return (t, s) => (l(),
        p("div", Wr, [T(le, {
            class: D({
                active: d(xe)(d(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch)
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon
        }, {
            default: m( () => [u("span", {
                innerHTML: t.item.text
            }, null, 8, qr)]),
            _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"])]))
    }
})
  , _t = V(Gr, [["__scopeId", "data-v-6ca171b5"]])
  , Yr = {
    class: "VPMenuGroup"
}
  , Kr = {
    key: 0,
    class: "title"
}
  , Jr = k({
    __name: "VPMenuGroup",
    props: {
        text: {},
        items: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", Yr, [e.text ? (l(),
        p("p", Kr, O(e.text), 1)) : S("", !0), (l(!0),
        p(W, null, J(e.items, s => (l(),
        p(W, null, ["link"in s ? (l(),
        C(_t, {
            key: 0,
            item: s
        }, null, 8, ["item"])) : S("", !0)], 64))), 256))]))
    }
})
  , Xr = V(Jr, [["__scopeId", "data-v-8ae4d221"]])
  , Qr = {
    class: "VPMenu"
}
  , eo = {
    key: 0,
    class: "items"
}
  , to = k({
    __name: "VPMenu",
    props: {
        items: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", Qr, [e.items ? (l(),
        p("div", eo, [(l(!0),
        p(W, null, J(e.items, s => (l(),
        p(W, {
            key: JSON.stringify(s)
        }, ["link"in s ? (l(),
        C(_t, {
            key: 0,
            item: s
        }, null, 8, ["item"])) : "component"in s ? (l(),
        C(ie(s.component), ge({
            key: 1,
            ref_for: !0
        }, s.props), null, 16)) : (l(),
        C(Xr, {
            key: 2,
            text: s.text,
            items: s.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : S("", !0), h(e.$slots, "default", {}, void 0, !0)]))
    }
})
  , no = V(to, [["__scopeId", "data-v-9dcf7cf0"]])
  , so = ["aria-expanded", "aria-label"]
  , ao = {
    key: 0,
    class: "text"
}
  , ro = ["innerHTML"]
  , oo = {
    key: 1,
    class: "vpi-more-horizontal icon"
}
  , io = {
    class: "menu"
}
  , lo = k({
    __name: "VPFlyout",
    props: {
        icon: {},
        button: {},
        label: {},
        items: {}
    },
    setup(n) {
        const e = H(!1)
          , t = H();
        zr({
            el: t,
            onBlur: s
        });
        function s() {
            e.value = !1
        }
        return (a, r) => (l(),
        p("div", {
            class: "VPFlyout",
            ref_key: "el",
            ref: t,
            onMouseenter: r[1] || (r[1] = o => e.value = !0),
            onMouseleave: r[2] || (r[2] = o => e.value = !1)
        }, [u("button", {
            type: "button",
            class: "button",
            "aria-haspopup": "true",
            "aria-expanded": e.value,
            "aria-label": a.label,
            onClick: r[0] || (r[0] = o => e.value = !e.value)
        }, [a.button || a.icon ? (l(),
        p("span", ao, [a.icon ? (l(),
        p("span", {
            key: 0,
            class: D([a.icon, "option-icon"])
        }, null, 2)) : S("", !0), a.button ? (l(),
        p("span", {
            key: 1,
            innerHTML: a.button
        }, null, 8, ro)) : S("", !0), r[3] || (r[3] = u("span", {
            class: "vpi-chevron-down text-icon"
        }, null, -1))])) : (l(),
        p("span", oo))], 8, so), u("div", io, [T(no, {
            items: a.items
        }, {
            default: m( () => [h(a.$slots, "default", {}, void 0, !0)]),
            _: 3
        }, 8, ["items"])])], 544))
    }
})
  , Ht = V(lo, [["__scopeId", "data-v-b3c3a967"]])
  , co = ["href", "aria-label", "innerHTML"]
  , uo = k({
    __name: "VPSocialLink",
    props: {
        icon: {},
        link: {},
        ariaLabel: {}
    },
    setup(n) {
        const e = n
          , t = H();
        re(async () => {
            var r;
            await At();
            const a = (r = t.value) == null ? void 0 : r.children[0];
            a instanceof HTMLElement && a.className.startsWith("vpi-social-") && (getComputedStyle(a).maskImage || getComputedStyle(a).webkitMaskImage) === "none" && a.style.setProperty("--icon", `url('https://api.iconify.design/simple-icons/${e.icon}.svg')`)
        }
        );
        const s = P( () => typeof e.icon == "object" ? e.icon.svg : `<span class="vpi-social-${e.icon}"></span>`);
        return (a, r) => (l(),
        p("a", {
            ref_key: "el",
            ref: t,
            class: "VPSocialLink no-icon",
            href: a.link,
            "aria-label": a.ariaLabel ?? (typeof a.icon == "string" ? a.icon : ""),
            target: "_blank",
            rel: "noopener",
            innerHTML: s.value
        }, null, 8, co))
    }
})
  , fo = V(uo, [["__scopeId", "data-v-9b48bbd3"]])
  , po = {
    class: "VPSocialLinks"
}
  , ho = k({
    __name: "VPSocialLinks",
    props: {
        links: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", po, [(l(!0),
        p(W, null, J(e.links, ({link: s, icon: a, ariaLabel: r}) => (l(),
        C(fo, {
            key: s,
            icon: a,
            link: s,
            ariaLabel: r
        }, null, 8, ["icon", "link", "ariaLabel"]))), 128))]))
    }
})
  , zt = V(ho, [["__scopeId", "data-v-7ebc50e0"]])
  , mo = {
    key: 0,
    class: "group translations"
}
  , vo = {
    class: "trans-title"
}
  , _o = {
    key: 1,
    class: "group"
}
  , go = {
    class: "item appearance"
}
  , yo = {
    class: "label"
}
  , bo = {
    class: "appearance-action"
}
  , ko = {
    key: 2,
    class: "group"
}
  , $o = {
    class: "item social-links"
}
  , wo = k({
    __name: "VPNavBarExtra",
    setup(n) {
        const {site: e, theme: t} = z()
          , {localeLinks: s, currentLang: a} = et({
            correspondingLink: !0
        })
          , r = P( () => s.value.length && a.value.label || e.value.appearance || t.value.socialLinks);
        return (o, i) => r.value ? (l(),
        C(Ht, {
            key: 0,
            class: "VPNavBarExtra",
            label: "extra navigation"
        }, {
            default: m( () => [d(s).length && d(a).label ? (l(),
            p("div", mo, [u("p", vo, O(d(a).label), 1), (l(!0),
            p(W, null, J(d(s), c => (l(),
            C(_t, {
                key: c.link,
                item: c
            }, null, 8, ["item"]))), 128))])) : S("", !0), d(e).appearance && d(e).appearance !== "force-dark" && d(e).appearance !== "force-auto" ? (l(),
            p("div", _o, [u("div", go, [u("p", yo, O(d(t).darkModeSwitchLabel || "Appearance"), 1), u("div", bo, [T(Bt)])])])) : S("", !0), d(t).socialLinks ? (l(),
            p("div", ko, [u("div", $o, [T(zt, {
                class: "social-links-list",
                links: d(t).socialLinks
            }, null, 8, ["links"])])])) : S("", !0)]),
            _: 1
        })) : S("", !0)
    }
})
  , xo = V(wo, [["__scopeId", "data-v-c45b73d9"]])
  , To = ["aria-expanded"]
  , So = k({
    __name: "VPNavBarHamburger",
    props: {
        active: {
            type: Boolean
        }
    },
    emits: ["click"],
    setup(n) {
        return (e, t) => (l(),
        p("button", {
            type: "button",
            class: D(["VPNavBarHamburger", {
                active: e.active
            }]),
            "aria-label": "mobile navigation",
            "aria-expanded": e.active,
            "aria-controls": "VPNavScreen",
            onClick: t[0] || (t[0] = s => e.$emit("click"))
        }, t[1] || (t[1] = [u("span", {
            class: "container"
        }, [u("span", {
            class: "top"
        }), u("span", {
            class: "middle"
        }), u("span", {
            class: "bottom"
        })], -1)]), 10, To))
    }
})
  , Po = V(So, [["__scopeId", "data-v-afe58ad0"]])
  , Lo = ["innerHTML"]
  , Co = k({
    __name: "VPNavBarMenuLink",
    props: {
        item: {}
    },
    setup(n) {
        const {page: e} = z();
        return (t, s) => (l(),
        C(le, {
            class: D({
                VPNavBarMenuLink: !0,
                active: d(xe)(d(e).relativePath, t.item.activeMatch || t.item.link, !!t.item.activeMatch)
            }),
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            tabindex: "0"
        }, {
            default: m( () => [u("span", {
                innerHTML: t.item.text
            }, null, 8, Lo)]),
            _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"]))
    }
})
  , No = V(Co, [["__scopeId", "data-v-22751aa4"]])
  , Vo = k({
    __name: "VPNavBarMenuGroup",
    props: {
        item: {}
    },
    setup(n) {
        const e = n
          , {page: t} = z()
          , s = r => "component"in r ? !1 : "link"in r ? xe(t.value.relativePath, r.link, !!e.item.activeMatch) : r.items.some(s)
          , a = P( () => s(e.item));
        return (r, o) => (l(),
        C(Ht, {
            class: D({
                VPNavBarMenuGroup: !0,
                active: d(xe)(d(t).relativePath, r.item.activeMatch, !!r.item.activeMatch) || a.value
            }),
            button: r.item.text,
            items: r.item.items
        }, null, 8, ["class", "button", "items"]))
    }
})
  , Io = {
    key: 0,
    "aria-labelledby": "main-nav-aria-label",
    class: "VPNavBarMenu"
}
  , Mo = k({
    __name: "VPNavBarMenu",
    setup(n) {
        const {theme: e} = z();
        return (t, s) => d(e).nav ? (l(),
        p("nav", Io, [s[0] || (s[0] = u("span", {
            id: "main-nav-aria-label",
            class: "visually-hidden"
        }, " Main Navigation ", -1)), (l(!0),
        p(W, null, J(d(e).nav, a => (l(),
        p(W, {
            key: JSON.stringify(a)
        }, ["link"in a ? (l(),
        C(No, {
            key: 0,
            item: a
        }, null, 8, ["item"])) : "component"in a ? (l(),
        C(ie(a.component), ge({
            key: 1,
            ref_for: !0
        }, a.props), null, 16)) : (l(),
        C(Vo, {
            key: 2,
            item: a
        }, null, 8, ["item"]))], 64))), 128))])) : S("", !0)
    }
})
  , Eo = V(Mo, [["__scopeId", "data-v-f8014cc2"]]);
function Oo(n) {
    const {localeIndex: e, theme: t} = z();
    function s(a) {
        var v, b, $;
        const r = a.split(".")
          , o = (v = t.value.search) == null ? void 0 : v.options
          , i = o && typeof o == "object"
          , c = i && (($ = (b = o.locales) == null ? void 0 : b[e.value]) == null ? void 0 : $.translations) || null
          , f = i && o.translations || null;
        let _ = c
          , g = f
          , L = n;
        const E = r.pop();
        for (const B of r) {
            let A = null;
            const q = L == null ? void 0 : L[B];
            q && (A = L = q);
            const U = g == null ? void 0 : g[B];
            U && (A = g = U);
            const Z = _ == null ? void 0 : _[B];
            Z && (A = _ = Z),
            q || (L = A),
            U || (g = A),
            Z || (_ = A)
        }
        return (_ == null ? void 0 : _[E]) ?? (g == null ? void 0 : g[E]) ?? (L == null ? void 0 : L[E]) ?? ""
    }
    return s
}
const Ao = ["aria-label"]
  , jo = {
    class: "DocSearch-Button-Container"
}
  , Zo = {
    class: "DocSearch-Button-Placeholder"
}
  , Wt = k({
    __name: "VPNavBarSearchButton",
    setup(n) {
        const t = Oo({
            button: {
                buttonText: "Search",
                buttonAriaLabel: "Search"
            }
        });
        return (s, a) => (l(),
        p("button", {
            type: "button",
            class: "DocSearch DocSearch-Button",
            "aria-label": d(t)("button.buttonAriaLabel")
        }, [u("span", jo, [a[0] || (a[0] = u("span", {
            class: "vp-icon DocSearch-Search-Icon"
        }, null, -1)), u("span", Zo, O(d(t)("button.buttonText")), 1)]), a[1] || (a[1] = u("span", {
            class: "DocSearch-Button-Keys"
        }, [u("kbd", {
            class: "DocSearch-Button-Key"
        }), u("kbd", {
            class: "DocSearch-Button-Key"
        }, "K")], -1))], 8, Ao))
    }
})
  , Ro = {
    class: "VPNavBarSearch"
}
  , Bo = {
    id: "local-search"
}
  , Do = {
    key: 1,
    id: "docsearch"
}
  , Ho = k({
    __name: "VPNavBarSearch",
    setup(n) {
        const e = Zn( () => Rn( () => import("./VPLocalSearchBox.BlAv1wqG.js"), __vite__mapDeps([0, 1])))
          , t = () => null
          , {theme: s} = z()
          , a = H(!1)
          , r = H(!1);
        re( () => {}
        );
        function o() {
            a.value || (a.value = !0,
            setTimeout(i, 16))
        }
        function i() {
            const g = new Event("keydown");
            g.key = "k",
            g.metaKey = !0,
            window.dispatchEvent(g),
            setTimeout( () => {
                document.querySelector(".DocSearch-Modal") || i()
            }
            , 16)
        }
        function c(g) {
            const L = g.target
              , E = L.tagName;
            return L.isContentEditable || E === "INPUT" || E === "SELECT" || E === "TEXTAREA"
        }
        const f = H(!1);
        wt("k", g => {
            (g.ctrlKey || g.metaKey) && (g.preventDefault(),
            f.value = !0)
        }
        ),
        wt("/", g => {
            c(g) || (g.preventDefault(),
            f.value = !0)
        }
        );
        const _ = "local";
        return (g, L) => {
            var E;
            return l(),
            p("div", Ro, [d(_) === "local" ? (l(),
            p(W, {
                key: 0
            }, [f.value ? (l(),
            C(d(e), {
                key: 0,
                onClose: L[0] || (L[0] = v => f.value = !1)
            })) : S("", !0), u("div", Bo, [T(Wt, {
                onClick: L[1] || (L[1] = v => f.value = !0)
            })])], 64)) : d(_) === "algolia" ? (l(),
            p(W, {
                key: 1
            }, [a.value ? (l(),
            C(d(t), {
                key: 0,
                algolia: ((E = d(s).search) == null ? void 0 : E.options) ?? d(s).algolia,
                onVnodeBeforeMount: L[2] || (L[2] = v => r.value = !0)
            }, null, 8, ["algolia"])) : S("", !0), r.value ? S("", !0) : (l(),
            p("div", Do, [T(Wt, {
                onClick: o
            })]))], 64)) : S("", !0)])
        }
    }
})
  , zo = k({
    __name: "VPNavBarSocialLinks",
    setup(n) {
        const {theme: e} = z();
        return (t, s) => d(e).socialLinks ? (l(),
        C(zt, {
            key: 0,
            class: "VPNavBarSocialLinks",
            links: d(e).socialLinks
        }, null, 8, ["links"])) : S("", !0)
    }
})
  , Uo = V(zo, [["__scopeId", "data-v-a707898d"]])
  , Fo = ["href", "rel", "target"]
  , Wo = ["innerHTML"]
  , qo = {
    key: 2
}
  , Go = k({
    __name: "VPNavBarTitle",
    setup(n) {
        const {site: e, theme: t} = z()
          , {hasSidebar: s} = ve()
          , {currentLang: a} = et()
          , r = P( () => {
            var c;
            return typeof t.value.logoLink == "string" ? t.value.logoLink : (c = t.value.logoLink) == null ? void 0 : c.link
        }
        )
          , o = P( () => {
            var c;
            return typeof t.value.logoLink == "string" || (c = t.value.logoLink) == null ? void 0 : c.rel
        }
        )
          , i = P( () => {
            var c;
            return typeof t.value.logoLink == "string" || (c = t.value.logoLink) == null ? void 0 : c.target
        }
        );
        return (c, f) => (l(),
        p("div", {
            class: D(["VPNavBarTitle", {
                "has-sidebar": d(s)
            }])
        }, [u("a", {
            class: "title",
            href: r.value ?? d(Zt)(d(a).link),
            rel: o.value,
            target: i.value
        }, [h(c.$slots, "nav-bar-title-before", {}, void 0, !0), d(t).logo ? (l(),
        C(ot, {
            key: 0,
            class: "logo",
            image: d(t).logo
        }, null, 8, ["image"])) : S("", !0), d(t).siteTitle ? (l(),
        p("span", {
            key: 1,
            innerHTML: d(t).siteTitle
        }, null, 8, Wo)) : d(t).siteTitle === void 0 ? (l(),
        p("span", qo, O(d(e).title), 1)) : S("", !0), h(c.$slots, "nav-bar-title-after", {}, void 0, !0)], 8, Fo)], 2))
    }
})
  , Yo = V(Go, [["__scopeId", "data-v-8a8f2b36"]])
  , Ko = {
    class: "items"
}
  , Jo = {
    class: "title"
}
  , Xo = k({
    __name: "VPNavBarTranslations",
    setup(n) {
        const {theme: e} = z()
          , {localeLinks: t, currentLang: s} = et({
            correspondingLink: !0
        });
        return (a, r) => d(t).length && d(s).label ? (l(),
        C(Ht, {
            key: 0,
            class: "VPNavBarTranslations",
            icon: "vpi-languages",
            label: d(e).langMenuLabel || "Change language"
        }, {
            default: m( () => [u("div", Ko, [u("p", Jo, O(d(s).label), 1), (l(!0),
            p(W, null, J(d(t), o => (l(),
            C(_t, {
                key: o.link,
                item: o
            }, null, 8, ["item"]))), 128))])]),
            _: 1
        }, 8, ["label"])) : S("", !0)
    }
})
  , Qo = V(Xo, [["__scopeId", "data-v-d1c3677f"]])
  , ei = {
    class: "wrapper"
}
  , ti = {
    class: "container"
}
  , ni = {
    class: "title"
}
  , si = {
    class: "content"
}
  , ai = {
    class: "content-body"
}
  , ri = k({
    __name: "VPNavBar",
    props: {
        isScreenOpen: {
            type: Boolean
        }
    },
    emits: ["toggle-screen"],
    setup(n) {
        const e = n
          , {y: t} = nn()
          , {hasSidebar: s} = ve()
          , {frontmatter: a} = z()
          , r = H({});
        return Xt( () => {
            r.value = {
                "has-sidebar": s.value,
                home: a.value.layout === "home",
                top: t.value === 0,
                "screen-open": e.isScreenOpen
            }
        }
        ),
        (o, i) => (l(),
        p("div", {
            class: D(["VPNavBar", r.value])
        }, [u("div", ei, [u("div", ti, [u("div", ni, [T(Yo, null, {
            "nav-bar-title-before": m( () => [h(o.$slots, "nav-bar-title-before", {}, void 0, !0)]),
            "nav-bar-title-after": m( () => [h(o.$slots, "nav-bar-title-after", {}, void 0, !0)]),
            _: 3
        })]), u("div", si, [u("div", ai, [h(o.$slots, "nav-bar-content-before", {}, void 0, !0), T(Ho, {
            class: "search"
        }), T(Eo, {
            class: "menu"
        }), T(Qo, {
            class: "translations"
        }), T(Hr, {
            class: "appearance"
        }), T(Uo, {
            class: "social-links"
        }), T(xo, {
            class: "extra"
        }), h(o.$slots, "nav-bar-content-after", {}, void 0, !0), T(Po, {
            class: "hamburger",
            active: o.isScreenOpen,
            onClick: i[0] || (i[0] = c => o.$emit("toggle-screen"))
        }, null, 8, ["active"])])])])]), i[1] || (i[1] = u("div", {
            class: "divider"
        }, [u("div", {
            class: "divider-line"
        })], -1))], 2))
    }
})
  , oi = V(ri, [["__scopeId", "data-v-32ba3fde"]])
  , ii = {
    key: 0,
    class: "VPNavScreenAppearance"
}
  , li = {
    class: "text"
}
  , ci = k({
    __name: "VPNavScreenAppearance",
    setup(n) {
        const {site: e, theme: t} = z();
        return (s, a) => d(e).appearance && d(e).appearance !== "force-dark" && d(e).appearance !== "force-auto" ? (l(),
        p("div", ii, [u("p", li, O(d(t).darkModeSwitchLabel || "Appearance"), 1), T(Bt)])) : S("", !0)
    }
})
  , ui = V(ci, [["__scopeId", "data-v-abdc5b1e"]])
  , di = ["innerHTML"]
  , fi = k({
    __name: "VPNavScreenMenuLink",
    props: {
        item: {}
    },
    setup(n) {
        const e = Oe("close-screen");
        return (t, s) => (l(),
        C(le, {
            class: "VPNavScreenMenuLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: d(e)
        }, {
            default: m( () => [u("span", {
                innerHTML: t.item.text
            }, null, 8, di)]),
            _: 1
        }, 8, ["href", "target", "rel", "no-icon", "onClick"]))
    }
})
  , pi = V(fi, [["__scopeId", "data-v-13f952d6"]])
  , hi = ["innerHTML"]
  , mi = k({
    __name: "VPNavScreenMenuGroupLink",
    props: {
        item: {}
    },
    setup(n) {
        const e = Oe("close-screen");
        return (t, s) => (l(),
        C(le, {
            class: "VPNavScreenMenuGroupLink",
            href: t.item.link,
            target: t.item.target,
            rel: t.item.rel,
            "no-icon": t.item.noIcon,
            onClick: d(e)
        }, {
            default: m( () => [u("span", {
                innerHTML: t.item.text
            }, null, 8, hi)]),
            _: 1
        }, 8, ["href", "target", "rel", "no-icon", "onClick"]))
    }
})
  , dn = V(mi, [["__scopeId", "data-v-f8cda4e1"]])
  , vi = {
    class: "VPNavScreenMenuGroupSection"
}
  , _i = {
    key: 0,
    class: "title"
}
  , gi = k({
    __name: "VPNavScreenMenuGroupSection",
    props: {
        text: {},
        items: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", vi, [e.text ? (l(),
        p("p", _i, O(e.text), 1)) : S("", !0), (l(!0),
        p(W, null, J(e.items, s => (l(),
        C(dn, {
            key: s.text,
            item: s
        }, null, 8, ["item"]))), 128))]))
    }
})
  , yi = V(gi, [["__scopeId", "data-v-ada1ea04"]])
  , bi = ["aria-controls", "aria-expanded"]
  , ki = ["innerHTML"]
  , $i = ["id"]
  , wi = {
    key: 0,
    class: "item"
}
  , xi = {
    key: 1,
    class: "item"
}
  , Ti = {
    key: 2,
    class: "group"
}
  , Si = k({
    __name: "VPNavScreenMenuGroup",
    props: {
        text: {},
        items: {}
    },
    setup(n) {
        const e = n
          , t = H(!1)
          , s = P( () => `NavScreenGroup-${e.text.replace(" ", "-").toLowerCase()}`);
        function a() {
            t.value = !t.value
        }
        return (r, o) => (l(),
        p("div", {
            class: D(["VPNavScreenMenuGroup", {
                open: t.value
            }])
        }, [u("button", {
            class: "button",
            "aria-controls": s.value,
            "aria-expanded": t.value,
            onClick: a
        }, [u("span", {
            class: "button-text",
            innerHTML: r.text
        }, null, 8, ki), o[0] || (o[0] = u("span", {
            class: "vpi-plus button-icon"
        }, null, -1))], 8, bi), u("div", {
            id: s.value,
            class: "items"
        }, [(l(!0),
        p(W, null, J(r.items, i => (l(),
        p(W, {
            key: JSON.stringify(i)
        }, ["link"in i ? (l(),
        p("div", wi, [T(dn, {
            item: i
        }, null, 8, ["item"])])) : "component"in i ? (l(),
        p("div", xi, [(l(),
        C(ie(i.component), ge({
            ref_for: !0
        }, i.props, {
            "screen-menu": ""
        }), null, 16))])) : (l(),
        p("div", Ti, [T(yi, {
            text: i.text,
            items: i.items
        }, null, 8, ["text", "items"])]))], 64))), 128))], 8, $i)], 2))
    }
})
  , Pi = V(Si, [["__scopeId", "data-v-9011a55e"]])
  , Li = {
    key: 0,
    class: "VPNavScreenMenu"
}
  , Ci = k({
    __name: "VPNavScreenMenu",
    setup(n) {
        const {theme: e} = z();
        return (t, s) => d(e).nav ? (l(),
        p("nav", Li, [(l(!0),
        p(W, null, J(d(e).nav, a => (l(),
        p(W, {
            key: JSON.stringify(a)
        }, ["link"in a ? (l(),
        C(pi, {
            key: 0,
            item: a
        }, null, 8, ["item"])) : "component"in a ? (l(),
        C(ie(a.component), ge({
            key: 1,
            ref_for: !0
        }, a.props, {
            "screen-menu": ""
        }), null, 16)) : (l(),
        C(Pi, {
            key: 2,
            text: a.text || "",
            items: a.items
        }, null, 8, ["text", "items"]))], 64))), 128))])) : S("", !0)
    }
})
  , Ni = k({
    __name: "VPNavScreenSocialLinks",
    setup(n) {
        const {theme: e} = z();
        return (t, s) => d(e).socialLinks ? (l(),
        C(zt, {
            key: 0,
            class: "VPNavScreenSocialLinks",
            links: d(e).socialLinks
        }, null, 8, ["links"])) : S("", !0)
    }
})
  , Vi = {
    class: "list"
}
  , Ii = k({
    __name: "VPNavScreenTranslations",
    setup(n) {
        const {localeLinks: e, currentLang: t} = et({
            correspondingLink: !0
        })
          , s = H(!1);
        function a() {
            s.value = !s.value
        }
        return (r, o) => d(e).length && d(t).label ? (l(),
        p("div", {
            key: 0,
            class: D(["VPNavScreenTranslations", {
                open: s.value
            }])
        }, [u("button", {
            class: "title",
            onClick: a
        }, [o[0] || (o[0] = u("span", {
            class: "vpi-languages icon lang"
        }, null, -1)), X(" " + O(d(t).label) + " ", 1), o[1] || (o[1] = u("span", {
            class: "vpi-chevron-down icon chevron"
        }, null, -1))]), u("ul", Vi, [(l(!0),
        p(W, null, J(d(e), i => (l(),
        p("li", {
            key: i.link,
            class: "item"
        }, [T(le, {
            class: "link",
            href: i.link
        }, {
            default: m( () => [X(O(i.text), 1)]),
            _: 2
        }, 1032, ["href"])]))), 128))])], 2)) : S("", !0)
    }
})
  , Mi = V(Ii, [["__scopeId", "data-v-d955d1b6"]])
  , Ei = {
    class: "container"
}
  , Oi = k({
    __name: "VPNavScreen",
    props: {
        open: {
            type: Boolean
        }
    },
    setup(n) {
        const e = H(null)
          , t = sn(vt ? document.body : null);
        return (s, a) => (l(),
        C(Ne, {
            name: "fade",
            onEnter: a[0] || (a[0] = r => t.value = !0),
            onAfterLeave: a[1] || (a[1] = r => t.value = !1)
        }, {
            default: m( () => [s.open ? (l(),
            p("div", {
                key: 0,
                class: "VPNavScreen",
                ref_key: "screen",
                ref: e,
                id: "VPNavScreen"
            }, [u("div", Ei, [h(s.$slots, "nav-screen-content-before", {}, void 0, !0), T(Ci, {
                class: "menu"
            }), T(Mi, {
                class: "translations"
            }), T(ui, {
                class: "appearance"
            }), T(Ni, {
                class: "social-links"
            }), h(s.$slots, "nav-screen-content-after", {}, void 0, !0)])], 512)) : S("", !0)]),
            _: 3
        }))
    }
})
  , Ai = V(Oi, [["__scopeId", "data-v-909f134f"]])
  , ji = {
    key: 0,
    class: "VPNav"
}
  , Zi = k({
    __name: "VPNav",
    setup(n) {
        const {isScreenOpen: e, closeScreen: t, toggleScreen: s} = Cr()
          , {frontmatter: a} = z()
          , r = P( () => a.value.navbar !== !1);
        return jt("close-screen", t),
        Qe( () => {
            vt && document.documentElement.classList.toggle("hide-nav", !r.value)
        }
        ),
        (o, i) => r.value ? (l(),
        p("header", ji, [T(oi, {
            "is-screen-open": d(e),
            onToggleScreen: d(s)
        }, {
            "nav-bar-title-before": m( () => [h(o.$slots, "nav-bar-title-before", {}, void 0, !0)]),
            "nav-bar-title-after": m( () => [h(o.$slots, "nav-bar-title-after", {}, void 0, !0)]),
            "nav-bar-content-before": m( () => [h(o.$slots, "nav-bar-content-before", {}, void 0, !0)]),
            "nav-bar-content-after": m( () => [h(o.$slots, "nav-bar-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]), T(Ai, {
            open: d(e)
        }, {
            "nav-screen-content-before": m( () => [h(o.$slots, "nav-screen-content-before", {}, void 0, !0)]),
            "nav-screen-content-after": m( () => [h(o.$slots, "nav-screen-content-after", {}, void 0, !0)]),
            _: 3
        }, 8, ["open"])])) : S("", !0)
    }
})
  , Ri = V(Zi, [["__scopeId", "data-v-4e6305f0"]])
  , Bi = ["role", "tabindex"]
  , Di = {
    key: 1,
    class: "items"
}
  , Hi = k({
    __name: "VPSidebarItem",
    props: {
        item: {},
        depth: {}
    },
    setup(n) {
        const e = n
          , {collapsed: t, collapsible: s, isLink: a, isActiveLink: r, hasActiveLink: o, hasChildren: i, toggle: c} = Ms(P( () => e.item))
          , f = P( () => i.value ? "section" : "div")
          , _ = P( () => a.value ? "a" : "div")
          , g = P( () => i.value ? e.depth + 2 === 7 ? "p" : `h${e.depth + 2}` : "p")
          , L = P( () => a.value ? void 0 : "button")
          , E = P( () => [[`level-${e.depth}`], {
            collapsible: s.value
        }, {
            collapsed: t.value
        }, {
            "is-link": a.value
        }, {
            "is-active": r.value
        }, {
            "has-active": o.value
        }]);
        function v($) {
            "key"in $ && $.key !== "Enter" || !e.item.link && c()
        }
        function b() {
            e.item.link && c()
        }
        return ($, B) => {
            const A = me("VPSidebarItem", !0);
            return l(),
            C(ie(f.value), {
                class: D(["VPSidebarItem", E.value])
            }, {
                default: m( () => [$.item.text ? (l(),
                p("div", ge({
                    key: 0,
                    class: "item",
                    role: L.value
                }, Dn($.item.items ? {
                    click: v,
                    keydown: v
                } : {}, !0), {
                    tabindex: $.item.items && 0
                }), [B[1] || (B[1] = u("div", {
                    class: "indicator"
                }, null, -1)), $.item.link ? (l(),
                C(le, {
                    key: 0,
                    tag: _.value,
                    class: "link",
                    href: $.item.link,
                    rel: $.item.rel,
                    target: $.item.target
                }, {
                    default: m( () => [(l(),
                    C(ie(g.value), {
                        class: "text",
                        innerHTML: $.item.text
                    }, null, 8, ["innerHTML"]))]),
                    _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (l(),
                C(ie(g.value), {
                    key: 1,
                    class: "text",
                    innerHTML: $.item.text
                }, null, 8, ["innerHTML"])), $.item.collapsed != null && $.item.items && $.item.items.length ? (l(),
                p("div", {
                    key: 2,
                    class: "caret",
                    role: "button",
                    "aria-label": "toggle section",
                    onClick: b,
                    onKeydown: Bn(b, ["enter"]),
                    tabindex: "0"
                }, B[0] || (B[0] = [u("span", {
                    class: "vpi-chevron-right caret-icon"
                }, null, -1)]), 32)) : S("", !0)], 16, Bi)) : S("", !0), $.item.items && $.item.items.length ? (l(),
                p("div", Di, [$.depth < 5 ? (l(!0),
                p(W, {
                    key: 0
                }, J($.item.items, q => (l(),
                C(A, {
                    key: q.text,
                    item: q,
                    depth: $.depth + 1
                }, null, 8, ["item", "depth"]))), 128)) : S("", !0)])) : S("", !0)]),
                _: 1
            }, 8, ["class"])
        }
    }
})
  , zi = V(Hi, [["__scopeId", "data-v-1734a149"]])
  , Ui = k({
    __name: "VPSidebarGroup",
    props: {
        items: {}
    },
    setup(n) {
        const e = H(!0);
        let t = null;
        return re( () => {
            t = setTimeout( () => {
                t = null,
                e.value = !1
            }
            , 300)
        }
        ),
        Hn( () => {
            t != null && (clearTimeout(t),
            t = null)
        }
        ),
        (s, a) => (l(!0),
        p(W, null, J(s.items, r => (l(),
        p("div", {
            key: r.text,
            class: D(["group", {
                "no-transition": e.value
            }])
        }, [T(zi, {
            item: r,
            depth: 0
        }, null, 8, ["item"])], 2))), 128))
    }
})
  , Fi = V(Ui, [["__scopeId", "data-v-c32e60da"]])
  , Wi = {
    class: "nav",
    id: "VPSidebarNav",
    "aria-labelledby": "sidebar-aria-label",
    tabindex: "-1"
}
  , qi = k({
    __name: "VPSidebar",
    props: {
        open: {
            type: Boolean
        }
    },
    setup(n) {
        const {sidebarGroups: e, hasSidebar: t} = ve()
          , s = n
          , a = H(null)
          , r = sn(vt ? document.body : null);
        ue([s, a], () => {
            var i;
            s.open ? (r.value = !0,
            (i = a.value) == null || i.focus()) : r.value = !1
        }
        , {
            immediate: !0,
            flush: "post"
        });
        const o = H(0);
        return ue(e, () => {
            o.value += 1
        }
        , {
            deep: !0
        }),
        (i, c) => d(t) ? (l(),
        p("aside", {
            key: 0,
            class: D(["VPSidebar", {
                open: i.open
            }]),
            ref_key: "navEl",
            ref: a,
            onClick: c[0] || (c[0] = zn( () => {}
            , ["stop"]))
        }, [c[2] || (c[2] = u("div", {
            class: "curtain"
        }, null, -1)), u("nav", Wi, [c[1] || (c[1] = u("span", {
            class: "visually-hidden",
            id: "sidebar-aria-label"
        }, " Sidebar Navigation ", -1)), h(i.$slots, "sidebar-nav-before", {}, void 0, !0), (l(),
        C(Fi, {
            items: d(e),
            key: o.value
        }, null, 8, ["items"])), h(i.$slots, "sidebar-nav-after", {}, void 0, !0)])], 2)) : S("", !0)
    }
})
  , Gi = V(qi, [["__scopeId", "data-v-ce2b3174"]])
  , Yi = k({
    __name: "VPSkipLink",
    setup(n) {
        const e = mt()
          , t = H();
        ue( () => e.path, () => t.value.focus());
        function s({target: a}) {
            const r = document.getElementById(decodeURIComponent(a.hash).slice(1));
            if (r) {
                const o = () => {
                    r.removeAttribute("tabindex"),
                    r.removeEventListener("blur", o)
                }
                ;
                r.setAttribute("tabindex", "-1"),
                r.addEventListener("blur", o),
                r.focus(),
                window.scrollTo(0, 0)
            }
        }
        return (a, r) => (l(),
        p(W, null, [u("span", {
            ref_key: "backToTop",
            ref: t,
            tabindex: "-1"
        }, null, 512), u("a", {
            href: "#VPContent",
            class: "VPSkipLink visually-hidden",
            onClick: s
        }, " Skip to content ")], 64))
    }
})
  , Ki = V(Yi, [["__scopeId", "data-v-695755bc"]])
  , Ji = k({
    __name: "Layout",
    setup(n) {
        const {isOpen: e, open: t, close: s} = ve()
          , a = mt();
        ue( () => a.path, s),
        Is(e, s);
        const {frontmatter: r} = z()
          , o = Un()
          , i = P( () => !!o["home-hero-image"]);
        return jt("hero-image-slot-exists", i),
        (c, f) => {
            const _ = me("Content");
            return d(r).layout !== !1 ? (l(),
            p("div", {
                key: 0,
                class: D(["Layout", d(r).pageClass])
            }, [h(c.$slots, "layout-top", {}, void 0, !0), T(Ki), T(ys, {
                class: "backdrop",
                show: d(e),
                onClick: d(s)
            }, null, 8, ["show", "onClick"]), T(Ri, null, {
                "nav-bar-title-before": m( () => [h(c.$slots, "nav-bar-title-before", {}, void 0, !0)]),
                "nav-bar-title-after": m( () => [h(c.$slots, "nav-bar-title-after", {}, void 0, !0)]),
                "nav-bar-content-before": m( () => [h(c.$slots, "nav-bar-content-before", {}, void 0, !0)]),
                "nav-bar-content-after": m( () => [h(c.$slots, "nav-bar-content-after", {}, void 0, !0)]),
                "nav-screen-content-before": m( () => [h(c.$slots, "nav-screen-content-before", {}, void 0, !0)]),
                "nav-screen-content-after": m( () => [h(c.$slots, "nav-screen-content-after", {}, void 0, !0)]),
                _: 3
            }), T(Lr, {
                open: d(e),
                onOpenMenu: d(t)
            }, null, 8, ["open", "onOpenMenu"]), T(Gi, {
                open: d(e)
            }, {
                "sidebar-nav-before": m( () => [h(c.$slots, "sidebar-nav-before", {}, void 0, !0)]),
                "sidebar-nav-after": m( () => [h(c.$slots, "sidebar-nav-after", {}, void 0, !0)]),
                _: 3
            }, 8, ["open"]), T(fr, null, {
                "page-top": m( () => [h(c.$slots, "page-top", {}, void 0, !0)]),
                "page-bottom": m( () => [h(c.$slots, "page-bottom", {}, void 0, !0)]),
                "not-found": m( () => [h(c.$slots, "not-found", {}, void 0, !0)]),
                "home-hero-before": m( () => [h(c.$slots, "home-hero-before", {}, void 0, !0)]),
                "home-hero-info-before": m( () => [h(c.$slots, "home-hero-info-before", {}, void 0, !0)]),
                "home-hero-info": m( () => [h(c.$slots, "home-hero-info", {}, void 0, !0)]),
                "home-hero-info-after": m( () => [h(c.$slots, "home-hero-info-after", {}, void 0, !0)]),
                "home-hero-actions-after": m( () => [h(c.$slots, "home-hero-actions-after", {}, void 0, !0)]),
                "home-hero-image": m( () => [h(c.$slots, "home-hero-image", {}, void 0, !0)]),
                "home-hero-after": m( () => [h(c.$slots, "home-hero-after", {}, void 0, !0)]),
                "home-features-before": m( () => [h(c.$slots, "home-features-before", {}, void 0, !0)]),
                "home-features-after": m( () => [h(c.$slots, "home-features-after", {}, void 0, !0)]),
                "doc-footer-before": m( () => [h(c.$slots, "doc-footer-before", {}, void 0, !0)]),
                "doc-before": m( () => [h(c.$slots, "doc-before", {}, void 0, !0)]),
                "doc-after": m( () => [h(c.$slots, "doc-after", {}, void 0, !0)]),
                "doc-top": m( () => [h(c.$slots, "doc-top", {}, void 0, !0)]),
                "doc-bottom": m( () => [h(c.$slots, "doc-bottom", {}, void 0, !0)]),
                "aside-top": m( () => [h(c.$slots, "aside-top", {}, void 0, !0)]),
                "aside-bottom": m( () => [h(c.$slots, "aside-bottom", {}, void 0, !0)]),
                "aside-outline-before": m( () => [h(c.$slots, "aside-outline-before", {}, void 0, !0)]),
                "aside-outline-after": m( () => [h(c.$slots, "aside-outline-after", {}, void 0, !0)]),
                "aside-ads-before": m( () => [h(c.$slots, "aside-ads-before", {}, void 0, !0)]),
                "aside-ads-after": m( () => [h(c.$slots, "aside-ads-after", {}, void 0, !0)]),
                _: 3
            }), T(_r), h(c.$slots, "layout-bottom", {}, void 0, !0)], 2)) : (l(),
            C(_, {
                key: 1
            }))
        }
    }
})
  , Xi = V(Ji, [["__scopeId", "data-v-2daf5c62"]])
  , fn = {
    Layout: Xi,
    enhanceApp: ({app: n}) => {
        n.component("Badge", vs)
    }
};
var Qi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function el(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var pn = {
    exports: {}
};
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(n, e) {
    (function(t, s) {
        n.exports = s()
    }
    )(Qi, function() {
        var t = {};
        t.version = "0.2.0";
        var s = t.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        t.configure = function(v) {
            var b, $;
            for (b in v)
                $ = v[b],
                $ !== void 0 && v.hasOwnProperty(b) && (s[b] = $);
            return this
        }
        ,
        t.status = null,
        t.set = function(v) {
            var b = t.isStarted();
            v = a(v, s.minimum, 1),
            t.status = v === 1 ? null : v;
            var $ = t.render(!b)
              , B = $.querySelector(s.barSelector)
              , A = s.speed
              , q = s.easing;
            return $.offsetWidth,
            i(function(U) {
                s.positionUsing === "" && (s.positionUsing = t.getPositioningCSS()),
                c(B, o(v, A, q)),
                v === 1 ? (c($, {
                    transition: "none",
                    opacity: 1
                }),
                $.offsetWidth,
                setTimeout(function() {
                    c($, {
                        transition: "all " + A + "ms linear",
                        opacity: 0
                    }),
                    setTimeout(function() {
                        t.remove(),
                        U()
                    }, A)
                }, A)) : setTimeout(U, A)
            }),
            this
        }
        ,
        t.isStarted = function() {
            return typeof t.status == "number"
        }
        ,
        t.start = function() {
            t.status || t.set(0);
            var v = function() {
                setTimeout(function() {
                    t.status && (t.trickle(),
                    v())
                }, s.trickleSpeed)
            };
            return s.trickle && v(),
            this
        }
        ,
        t.done = function(v) {
            return !v && !t.status ? this : t.inc(.3 + .5 * Math.random()).set(1)
        }
        ,
        t.inc = function(v) {
            var b = t.status;
            return b ? (typeof v != "number" && (v = (1 - b) * a(Math.random() * b, .1, .95)),
            b = a(b + v, 0, .994),
            t.set(b)) : t.start()
        }
        ,
        t.trickle = function() {
            return t.inc(Math.random() * s.trickleRate)
        }
        ,
        function() {
            var v = 0
              , b = 0;
            t.promise = function($) {
                return !$ || $.state() === "resolved" ? this : (b === 0 && t.start(),
                v++,
                b++,
                $.always(function() {
                    b--,
                    b === 0 ? (v = 0,
                    t.done()) : t.set((v - b) / v)
                }),
                this)
            }
        }(),
        t.render = function(v) {
            if (t.isRendered())
                return document.getElementById("nprogress");
            _(document.documentElement, "nprogress-busy");
            var b = document.createElement("div");
            b.id = "nprogress",
            b.innerHTML = s.template;
            var $ = b.querySelector(s.barSelector), B = v ? "-100" : r(t.status || 0), A = document.querySelector(s.parent), q;
            return c($, {
                transition: "all 0 linear",
                transform: "translate3d(" + B + "%,0,0)"
            }),
            s.showSpinner || (q = b.querySelector(s.spinnerSelector),
            q && E(q)),
            A != document.body && _(A, "nprogress-custom-parent"),
            A.appendChild(b),
            b
        }
        ,
        t.remove = function() {
            g(document.documentElement, "nprogress-busy"),
            g(document.querySelector(s.parent), "nprogress-custom-parent");
            var v = document.getElementById("nprogress");
            v && E(v)
        }
        ,
        t.isRendered = function() {
            return !!document.getElementById("nprogress")
        }
        ,
        t.getPositioningCSS = function() {
            var v = document.body.style
              , b = "WebkitTransform"in v ? "Webkit" : "MozTransform"in v ? "Moz" : "msTransform"in v ? "ms" : "OTransform"in v ? "O" : "";
            return b + "Perspective"in v ? "translate3d" : b + "Transform"in v ? "translate" : "margin"
        }
        ;
        function a(v, b, $) {
            return v < b ? b : v > $ ? $ : v
        }
        function r(v) {
            return (-1 + v) * 100
        }
        function o(v, b, $) {
            var B;
            return s.positionUsing === "translate3d" ? B = {
                transform: "translate3d(" + r(v) + "%,0,0)"
            } : s.positionUsing === "translate" ? B = {
                transform: "translate(" + r(v) + "%,0)"
            } : B = {
                "margin-left": r(v) + "%"
            },
            B.transition = "all " + b + "ms " + $,
            B
        }
        var i = function() {
            var v = [];
            function b() {
                var $ = v.shift();
                $ && $(b)
            }
            return function($) {
                v.push($),
                v.length == 1 && b()
            }
        }()
          , c = function() {
            var v = ["Webkit", "O", "Moz", "ms"]
              , b = {};
            function $(U) {
                return U.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(Z, Y) {
                    return Y.toUpperCase()
                })
            }
            function B(U) {
                var Z = document.body.style;
                if (U in Z)
                    return U;
                for (var Y = v.length, K = U.charAt(0).toUpperCase() + U.slice(1), oe; Y--; )
                    if (oe = v[Y] + K,
                    oe in Z)
                        return oe;
                return U
            }
            function A(U) {
                return U = $(U),
                b[U] || (b[U] = B(U))
            }
            function q(U, Z, Y) {
                Z = A(Z),
                U.style[Z] = Y
            }
            return function(U, Z) {
                var Y = arguments, K, oe;
                if (Y.length == 2)
                    for (K in Z)
                        oe = Z[K],
                        oe !== void 0 && Z.hasOwnProperty(K) && q(U, K, oe);
                else
                    q(U, Y[1], Y[2])
            }
        }();
        function f(v, b) {
            var $ = typeof v == "string" ? v : L(v);
            return $.indexOf(" " + b + " ") >= 0
        }
        function _(v, b) {
            var $ = L(v)
              , B = $ + b;
            f($, b) || (v.className = B.substring(1))
        }
        function g(v, b) {
            var $ = L(v), B;
            f(v, b) && (B = $.replace(" " + b + " ", " "),
            v.className = B.substring(1, B.length - 1))
        }
        function L(v) {
            return (" " + (v.className || "") + " ").replace(/\s+/gi, " ")
        }
        function E(v) {
            v && v.parentNode && v.parentNode.removeChild(v)
        }
        return t
    })
}
)(pn);
var tl = pn.exports;
const nt = el(tl);
function nl(n) {
    if (!(typeof window > "u"))
        return setTimeout( () => {
            nt.configure({
                showSpinner: !1
            });
            const e = n.onBeforeRouteChange
              , t = n.onAfterRouteChanged;
            n.onBeforeRouteChange = s => {
                nt.start(),
                e == null || e(s)
            }
            ,
            n.onAfterRouteChanged = s => {
                nt.done(),
                t == null || t(s)
            }
        }
        ),
        nt
}
const sl = ["href"]
  , al = k({
    __name: "Announcement",
    setup(n) {
        const {frontmatter: e} = Ee();
        return (t, s) => d(e).hero.announcement ? (l(),
        p("a", {
            key: 0,
            href: d(e).hero.announcement.link,
            class: "mb-3 inline-flex items-center rounded-lg bg-[var(--vp-c-default-soft)] px-4 py-1 text-sm font-semibold"
        }, O(d(e).hero.announcement.title), 9, sl)) : S("", !0)
    }
})
  , rl = {
    class: "g-[12px] mb-[8px] flex items-center"
}
  , ol = {
    class: "flex items-center"
}
  , il = {
    class: "ml-2 text-sm text-[var(--vp-c-text-2)]"
}
  , st = k({
    __name: "CardField",
    props: {
        icon: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", rl, [u("span", ol, [u("div", {
            class: D(["text-2xl", e.icon])
        }, null, 2), u("div", il, [h(e.$slots, "default")])])]))
    }
})
  , ll = {
    class: "input-field"
}
  , cl = {
    key: 0,
    class: "input-label"
}
  , ul = ["for"]
  , dl = {
    class: "display-value"
}
  , fl = k({
    __name: "InputField",
    props: {
        label: {},
        id: {}
    },
    setup(n) {
        return (e, t) => (l(),
        p("div", ll, [e.label ? (l(),
        p("div", cl, [u("label", {
            for: e.id,
            class: "pane-label"
        }, O(e.label), 9, ul), u("div", dl, [h(e.$slots, "display", {}, void 0, !0)])])) : S("", !0), h(e.$slots, "default", {}, void 0, !0)]))
    }
})
  , pl = V(fl, [["__scopeId", "data-v-92527394"]]);
function hl(n, e, t) {
    let s = H(t == null ? void 0 : t.value)
      , a = P( () => n.value !== void 0);
    return [P( () => a.value ? n.value : s.value), function(r) {
        return a.value || (s.value = r),
        e == null ? void 0 : e(r)
    }
    ]
}
var qt;
let ml = Symbol("headlessui.useid")
  , vl = 0;
const _l = (qt = Fn) != null ? qt : function() {
    return Oe(ml, () => `${++vl}`)()
}
;
function rt(n) {
    var e;
    if (n == null || n.value == null)
        return null;
    let t = (e = n.value.$el) != null ? e : n.value;
    return t instanceof Node ? t : null
}
function hn(n, e, ...t) {
    if (n in e) {
        let a = e[n];
        return typeof a == "function" ? a(...t) : a
    }
    let s = new Error(`Tried to handle "${n}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(a => `"${a}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, hn),
    s
}
function Gt(n, e) {
    if (n)
        return n;
    let t = e ?? "button";
    if (typeof t == "string" && t.toLowerCase() === "button")
        return "button"
}
function gl(n, e) {
    let t = H(Gt(n.value.type, n.value.as));
    return re( () => {
        t.value = Gt(n.value.type, n.value.as)
    }
    ),
    Qe( () => {
        var s;
        t.value || rt(e) && rt(e)instanceof HTMLButtonElement && !((s = rt(e)) != null && s.hasAttribute("type")) && (t.value = "button")
    }
    ),
    t
}
var yl = (n => (n[n.None = 0] = "None",
n[n.RenderStrategy = 1] = "RenderStrategy",
n[n.Static = 2] = "Static",
n))(yl || {})
  , bl = (n => (n[n.Unmount = 0] = "Unmount",
n[n.Hidden = 1] = "Hidden",
n))(bl || {});
function mn({visible: n=!0, features: e=0, ourProps: t, theirProps: s, ...a}) {
    var r;
    let o = _n(s, t)
      , i = Object.assign(a, {
        props: o
    });
    if (n || e & 2 && o.static)
        return bt(i);
    if (e & 1) {
        let c = (r = o.unmount) == null || r ? 0 : 1;
        return hn(c, {
            0() {
                return null
            },
            1() {
                return bt({
                    ...a,
                    props: {
                        ...o,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                })
            }
        })
    }
    return bt(i)
}
function bt({props: n, attrs: e, slots: t, slot: s, name: a}) {
    var r, o;
    let {as: i, ...c} = gn(n, ["unmount", "static"])
      , f = (r = t.default) == null ? void 0 : r.call(t, s)
      , _ = {};
    if (s) {
        let g = !1
          , L = [];
        for (let[E,v] of Object.entries(s))
            typeof v == "boolean" && (g = !0),
            v === !0 && L.push(E);
        g && (_["data-headlessui-state"] = L.join(" "))
    }
    if (i === "template") {
        if (f = vn(f ?? []),
        Object.keys(c).length > 0 || Object.keys(e).length > 0) {
            let[g,...L] = f ?? [];
            if (!$l(g) || L.length > 0)
                throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(e)).map(b => b.trim()).filter( (b, $, B) => B.indexOf(b) === $).sort( (b, $) => b.localeCompare($)).map(b => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(b => `  - ${b}`).join(`
`)].join(`
`));
            let E = _n((o = g.props) != null ? o : {}, c, _)
              , v = Wn(g, E, !0);
            for (let b in E)
                b.startsWith("on") && (v.props || (v.props = {}),
                v.props[b] = E[b]);
            return v
        }
        return Array.isArray(f) && f.length === 1 ? f[0] : f
    }
    return xt(i, Object.assign({}, c, _), {
        default: () => f
    })
}
function vn(n) {
    return n.flatMap(e => e.type === W ? vn(e.children) : [e])
}
function _n(...n) {
    if (n.length === 0)
        return {};
    if (n.length === 1)
        return n[0];
    let e = {}
      , t = {};
    for (let s of n)
        for (let a in s)
            a.startsWith("on") && typeof s[a] == "function" ? (t[a] != null || (t[a] = []),
            t[a].push(s[a])) : e[a] = s[a];
    if (e.disabled || e["aria-disabled"])
        return Object.assign(e, Object.fromEntries(Object.keys(t).map(s => [s, void 0])));
    for (let s in t)
        Object.assign(e, {
            [s](a, ...r) {
                let o = t[s];
                for (let i of o) {
                    if (a instanceof Event && a.defaultPrevented)
                        return;
                    i(a, ...r)
                }
            }
        });
    return e
}
function kl(n) {
    let e = Object.assign({}, n);
    for (let t in e)
        e[t] === void 0 && delete e[t];
    return e
}
function gn(n, e=[]) {
    let t = Object.assign({}, n);
    for (let s of e)
        s in t && delete t[s];
    return t
}
function $l(n) {
    return n == null ? !1 : typeof n.type == "string" || typeof n.type == "object" || typeof n.type == "function"
}
var yn = (n => (n[n.None = 1] = "None",
n[n.Focusable = 2] = "Focusable",
n[n.Hidden = 4] = "Hidden",
n))(yn || {});
let wl = k({
    name: "Hidden",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup(n, {slots: e, attrs: t}) {
        return () => {
            var s;
            let {features: a, ...r} = n
              , o = {
                "aria-hidden": (a & 2) === 2 ? !0 : (s = r["aria-hidden"]) != null ? s : void 0,
                hidden: (a & 4) === 4 ? !0 : void 0,
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
                    ...(a & 4) === 4 && (a & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return mn({
                ourProps: o,
                theirProps: r,
                slot: {},
                attrs: t,
                slots: e,
                name: "Hidden"
            })
        }
    }
});
var Lt = (n => (n.Space = " ",
n.Enter = "Enter",
n.Escape = "Escape",
n.Backspace = "Backspace",
n.Delete = "Delete",
n.ArrowLeft = "ArrowLeft",
n.ArrowUp = "ArrowUp",
n.ArrowRight = "ArrowRight",
n.ArrowDown = "ArrowDown",
n.Home = "Home",
n.End = "End",
n.PageUp = "PageUp",
n.PageDown = "PageDown",
n.Tab = "Tab",
n))(Lt || {});
function xl(n) {
    var e, t;
    let s = (e = n == null ? void 0 : n.form) != null ? e : n.closest("form");
    if (s) {
        for (let a of s.elements)
            if (a !== n && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
                a.click();
                return
            }
        (t = s.requestSubmit) == null || t.call(s)
    }
}
let Tl = Symbol("GroupContext")
  , Sl = k({
    name: "Switch",
    emits: {
        "update:modelValue": n => !0
    },
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        modelValue: {
            type: Boolean,
            default: void 0
        },
        defaultChecked: {
            type: Boolean,
            optional: !0
        },
        form: {
            type: String,
            optional: !0
        },
        name: {
            type: String,
            optional: !0
        },
        value: {
            type: String,
            optional: !0
        },
        id: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        tabIndex: {
            type: Number,
            default: 0
        }
    },
    inheritAttrs: !1,
    setup(n, {emit: e, attrs: t, slots: s, expose: a}) {
        var r;
        let o = (r = n.id) != null ? r : `headlessui-switch-${_l()}`
          , i = Oe(Tl, null)
          , [c,f] = hl(P( () => n.modelValue), A => e("update:modelValue", A), P( () => n.defaultChecked));
        function _() {
            f(!c.value)
        }
        let g = H(null)
          , L = i === null ? g : i.switchRef
          , E = gl(P( () => ({
            as: n.as,
            type: t.type
        })), L);
        a({
            el: L,
            $el: L
        });
        function v(A) {
            A.preventDefault(),
            _()
        }
        function b(A) {
            A.key === Lt.Space ? (A.preventDefault(),
            _()) : A.key === Lt.Enter && xl(A.currentTarget)
        }
        function $(A) {
            A.preventDefault()
        }
        let B = P( () => {
            var A, q;
            return (q = (A = rt(L)) == null ? void 0 : A.closest) == null ? void 0 : q.call(A, "form")
        }
        );
        return re( () => {
            ue([B], () => {
                if (!B.value || n.defaultChecked === void 0)
                    return;
                function A() {
                    f(n.defaultChecked)
                }
                return B.value.addEventListener("reset", A),
                () => {
                    var q;
                    (q = B.value) == null || q.removeEventListener("reset", A)
                }
            }
            , {
                immediate: !0
            })
        }
        ),
        () => {
            let {name: A, value: q, form: U, tabIndex: Z, ...Y} = n
              , K = {
                checked: c.value
            }
              , oe = {
                id: o,
                ref: L,
                role: "switch",
                type: E.value,
                tabIndex: Z === -1 ? 0 : Z,
                "aria-checked": c.value,
                "aria-labelledby": i == null ? void 0 : i.labelledby.value,
                "aria-describedby": i == null ? void 0 : i.describedby.value,
                onClick: v,
                onKeyup: b,
                onKeypress: $
            };
            return xt(W, [A != null && c.value != null ? xt(wl, kl({
                features: yn.Hidden,
                as: "input",
                type: "checkbox",
                hidden: !0,
                readOnly: !0,
                checked: c.value,
                form: U,
                disabled: Y.disabled,
                name: A,
                value: q
            })) : null, mn({
                ourProps: oe,
                theirProps: {
                    ...t,
                    ...gn(Y, ["modelValue", "defaultChecked"])
                },
                slot: K,
                attrs: t,
                slots: s,
                name: "Switch"
            })])
        }
    }
});
const Pl = {
    __name: "Switch",
    setup(n) {
        const e = H(!1);
        return (t, s) => (l(),
        C(d(Sl), {
            modelValue: e.value,
            "onUpdate:modelValue": s[0] || (s[0] = a => e.value = a),
            class: D(["switch", {
                enabled: e.value
            }])
        }, {
            default: m( () => s[1] || (s[1] = [u("span", {
                class: "thumb"
            }, null, -1)])),
            _: 1
        }, 8, ["modelValue", "class"]))
    }
}
  , Ll = V(Pl, [["__scopeId", "data-v-c01b3bd4"]])
  , Cl = k({
    __name: "ToggleStarred",
    setup(n) {
        const e = () => document.documentElement.classList.toggle("starred-only");
        return (t, s) => (l(),
        C(Ll, {
            onClick: s[0] || (s[0] = a => e())
        }))
    }
})
  , Nl = {
    class: "bg-$vp-c-bg hover:bg-$vp-c-bg/40 border-$vp-c-default-soft hover:border-primary transition-border relative z-0 rounded-lg border-2 border-solid p-5 duration-500"
}
  , Vl = k({
    __name: "SidebarCard",
    setup(n) {
        return (e, t) => (l(),
        p("div", Nl, [t[4] || (t[4] = u("div", {
            class: "align-center mb-4 flex justify-between"
        }, [u("div", {
            class: "text-$vp-c-text-1 lh-relaxed text-sm font-bold"
        }, " Emoji Legend ")], -1)), T(st, {
            icon: "i-twemoji-globe-with-meridians"
        }, {
            default: m( () => t[0] || (t[0] = [X("Indexes")])),
            _: 1
        }), T(st, {
            icon: "i-twemoji-repeat-button"
        }, {
            default: m( () => t[1] || (t[1] = [X("Storage Links")])),
            _: 1
        }), T(st, {
            icon: "i-twemoji-star"
        }, {
            default: m( () => t[2] || (t[2] = [X("Recommendations")])),
            _: 1
        }), t[5] || (t[5] = u("div", {
            class: "align-center mb-4 flex justify-between"
        }, [u("div", {
            class: "text-$vp-c-text-1 lh-relaxed text-sm font-bold"
        }, "Options")], -1)), T(pl, {
            id: "toggle-starred",
            label: "Toggle Starred"
        }, {
            display: m( () => [T(Cl)]),
            _: 1
        }), T(st, {
            icon: "i-lucide:github"
        }, {
            default: m( () => t[3] || (t[3] = [u("a", {
                href: "https://github.com/Lost Pages/edit",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Star Lost Pages on GitHub",
                class: "text-primary underline font-bold"
            }, " Star on GitHub ", -1)])),
            _: 1
        })]))
    }
})
  , Il = k({
    __name: "Layout",
    setup(n) {
        const {isDark: e} = Ee()
          , t = () => "startViewTransition"in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
        jt("toggle-appearance", async ({clientX: a, clientY: r}) => {
            if (!t()) {
                e.value = !e.value;
                return
            }
            const o = [`circle(0px at ${a}px ${r}px)`, `circle(${Math.hypot(Math.max(a, innerWidth - a), Math.max(r, innerHeight - r))}px at ${a}px ${r}px)`];
            await document.startViewTransition(async () => {
                e.value = !e.value,
                await At()
            }
            ).ready,
            document.documentElement.animate({
                clipPath: e.value ? o.reverse() : o
            }, {
                duration: 300,
                easing: "ease-in",
                pseudoElement: `::view-transition-${e.value ? "old" : "new"}(root)`
            })
        }
        );
        const {Layout: s} = fn;
        return (a, r) => {
            const o = me("Content");
            return l(),
            C(d(s), null, {
                "sidebar-nav-after": m( () => [T(Vl)]),
                "home-hero-info-before": m( () => [T(al)]),
                "home-features-before": m( () => r[0] || (r[0] = [u("p", {
                    class: "text-center text-lg text-text-2 mb-2"
                }, [X(" Or browse these pages "), u("span", {
                    class: "inline-block i-twemoji:sparkles"
                })], -1)])),
                default: m( () => [T(o)]),
                _: 1
            })
        }
    }
})
  , Ml = {
    class: "flex flex-wrap gap-4 pt-2"
}
  , El = {
    class: "flex items-center gap-2"
}
  , Ol = ["src"]
  , Al = ["href"]
  , jl = {
    key: 0
}
  , Zl = k({
    __name: "Authors",
    props: {
        authors: {}
    },
    setup(n) {
        const e = n
          , t = [{
            name: "nbats",
            github: "https://github.com/cybruGhost"
        }, {
            name: "Kai",
            github: "https://github.com/cybruGhost/Lost Pages"
        }, {
            name: "taskylizard",
            github: "https://github.com/taskylizar"
        }, {
            name: "zinklog",
            github: "https://github.com/zinklog"
        }, {
            name: "Q",
            github: "https://github.com/qiracy"
        }]
          , s = P( () => t.filter(a => e.authors.includes(a.name)));
        return (a, r) => (l(),
        p("div", Ml, [(l(!0),
        p(W, null, J(s.value, (o, i) => (l(),
        p("div", El, [u("img", {
            src: `${o.github}.png`,
            class: "h-8 w-8 rounded-full"
        }, null, 8, Ol), u("a", {
            href: o.github
        }, O(o.name), 9, Al), i < s.value.length - 1 ? (l(),
        p("span", jl, "•")) : S("", !0)]))), 256))]))
    }
})
  , Rl = k({
    __name: "PostLayout",
    props: {
        authors: {}
    },
    setup(n) {
        const e = n
          , t = r => new Date(r).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric"
        })
          , {frontmatter: s} = Ee()
          , a = P( () => e.authors.split(","));
        return (r, o) => (l(),
        p(W, null, [u("h1", null, O(d(s).title), 1), u("div", null, O(d(s).description) + " • " + O(t(d(s).date)), 1), T(Zl, {
            authors: d(a)
        }, null, 8, ["authors"])], 64))
    }
});
var F;
(function(n) {
    n.assertEqual = a => a;
    function e(a) {}
    n.assertIs = e;
    function t(a) {
        throw new Error
    }
    n.assertNever = t,
    n.arrayToEnum = a => {
        const r = {};
        for (const o of a)
            r[o] = o;
        return r
    }
    ,
    n.getValidEnumValues = a => {
        const r = n.objectKeys(a).filter(i => typeof a[a[i]] != "number")
          , o = {};
        for (const i of r)
            o[i] = a[i];
        return n.objectValues(o)
    }
    ,
    n.objectValues = a => n.objectKeys(a).map(function(r) {
        return a[r]
    }),
    n.objectKeys = typeof Object.keys == "function" ? a => Object.keys(a) : a => {
        const r = [];
        for (const o in a)
            Object.prototype.hasOwnProperty.call(a, o) && r.push(o);
        return r
    }
    ,
    n.find = (a, r) => {
        for (const o of a)
            if (r(o))
                return o
    }
    ,
    n.isInteger = typeof Number.isInteger == "function" ? a => Number.isInteger(a) : a => typeof a == "number" && isFinite(a) && Math.floor(a) === a;
    function s(a, r=" | ") {
        return a.map(o => typeof o == "string" ? `'${o}'` : o).join(r)
    }
    n.joinValues = s,
    n.jsonStringifyReplacer = (a, r) => typeof r == "bigint" ? r.toString() : r
}
)(F || (F = {}));
var Ct;
(function(n) {
    n.mergeShapes = (e, t) => ({
        ...e,
        ...t
    })
}
)(Ct || (Ct = {}));
const x = F.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , _e = n => {
    switch (typeof n) {
    case "undefined":
        return x.undefined;
    case "string":
        return x.string;
    case "number":
        return isNaN(n) ? x.nan : x.number;
    case "boolean":
        return x.boolean;
    case "function":
        return x.function;
    case "bigint":
        return x.bigint;
    case "symbol":
        return x.symbol;
    case "object":
        return Array.isArray(n) ? x.array : n === null ? x.null : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? x.promise : typeof Map < "u" && n instanceof Map ? x.map : typeof Set < "u" && n instanceof Set ? x.set : typeof Date < "u" && n instanceof Date ? x.date : x.object;
    default:
        return x.unknown
    }
}
  , y = F.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , Bl = n => JSON.stringify(n, null, 2).replace(/"([^"]+)":/g, "$1:");
class te extends Error {
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = s => {
            this.issues = [...this.issues, s]
        }
        ,
        this.addIssues = (s=[]) => {
            this.issues = [...this.issues, ...s]
        }
        ;
        const t = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t,
        this.name = "ZodError",
        this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const t = e || function(r) {
            return r.message
        }
          , s = {
            _errors: []
        }
          , a = r => {
            for (const o of r.issues)
                if (o.code === "invalid_union")
                    o.unionErrors.map(a);
                else if (o.code === "invalid_return_type")
                    a(o.returnTypeError);
                else if (o.code === "invalid_arguments")
                    a(o.argumentsError);
                else if (o.path.length === 0)
                    s._errors.push(t(o));
                else {
                    let i = s
                      , c = 0;
                    for (; c < o.path.length; ) {
                        const f = o.path[c];
                        c === o.path.length - 1 ? (i[f] = i[f] || {
                            _errors: []
                        },
                        i[f]._errors.push(t(o))) : i[f] = i[f] || {
                            _errors: []
                        },
                        i = i[f],
                        c++
                    }
                }
        }
        ;
        return a(this),
        s
    }
    static assert(e) {
        if (!(e instanceof te))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, F.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=t => t.message) {
        const t = {}
          , s = [];
        for (const a of this.issues)
            a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [],
            t[a.path[0]].push(e(a))) : s.push(e(a));
        return {
            formErrors: s,
            fieldErrors: t
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
te.create = n => new te(n);
const Ve = (n, e) => {
    let t;
    switch (n.code) {
    case y.invalid_type:
        n.received === x.undefined ? t = "Required" : t = `Expected ${n.expected}, received ${n.received}`;
        break;
    case y.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(n.expected, F.jsonStringifyReplacer)}`;
        break;
    case y.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${F.joinValues(n.keys, ", ")}`;
        break;
    case y.invalid_union:
        t = "Invalid input";
        break;
    case y.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${F.joinValues(n.options)}`;
        break;
    case y.invalid_enum_value:
        t = `Invalid enum value. Expected ${F.joinValues(n.options)}, received '${n.received}'`;
        break;
    case y.invalid_arguments:
        t = "Invalid function arguments";
        break;
    case y.invalid_return_type:
        t = "Invalid function return type";
        break;
    case y.invalid_date:
        t = "Invalid date";
        break;
    case y.invalid_string:
        typeof n.validation == "object" ? "includes"in n.validation ? (t = `Invalid input: must include "${n.validation.includes}"`,
        typeof n.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${n.validation.position}`)) : "startsWith"in n.validation ? t = `Invalid input: must start with "${n.validation.startsWith}"` : "endsWith"in n.validation ? t = `Invalid input: must end with "${n.validation.endsWith}"` : F.assertNever(n.validation) : n.validation !== "regex" ? t = `Invalid ${n.validation}` : t = "Invalid";
        break;
    case y.too_small:
        n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "more than"} ${n.minimum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at least" : "over"} ${n.minimum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${n.minimum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly equal to " : n.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(n.minimum))}` : t = "Invalid input";
        break;
    case y.too_big:
        n.type === "array" ? t = `Array must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "less than"} ${n.maximum} element(s)` : n.type === "string" ? t = `String must contain ${n.exact ? "exactly" : n.inclusive ? "at most" : "under"} ${n.maximum} character(s)` : n.type === "number" ? t = `Number must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "bigint" ? t = `BigInt must be ${n.exact ? "exactly" : n.inclusive ? "less than or equal to" : "less than"} ${n.maximum}` : n.type === "date" ? t = `Date must be ${n.exact ? "exactly" : n.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(n.maximum))}` : t = "Invalid input";
        break;
    case y.custom:
        t = "Invalid input";
        break;
    case y.invalid_intersection_types:
        t = "Intersection results could not be merged";
        break;
    case y.not_multiple_of:
        t = `Number must be a multiple of ${n.multipleOf}`;
        break;
    case y.not_finite:
        t = "Number must be finite";
        break;
    default:
        t = e.defaultError,
        F.assertNever(n)
    }
    return {
        message: t
    }
}
;
let bn = Ve;
function Dl(n) {
    bn = n
}
function it() {
    return bn
}
const lt = n => {
    const {data: e, path: t, errorMaps: s, issueData: a} = n
      , r = [...t, ...a.path || []]
      , o = {
        ...a,
        path: r
    };
    if (a.message !== void 0)
        return {
            ...a,
            path: r,
            message: a.message
        };
    let i = "";
    const c = s.filter(f => !!f).slice().reverse();
    for (const f of c)
        i = f(o, {
            data: e,
            defaultError: i
        }).message;
    return {
        ...a,
        path: r,
        message: i
    }
}
  , Hl = [];
function w(n, e) {
    const t = it()
      , s = lt({
        issueData: e,
        data: n.data,
        path: n.path,
        errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, t, t === Ve ? void 0 : Ve].filter(a => !!a)
    });
    n.common.issues.push(s)
}
class Q {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, t) {
        const s = [];
        for (const a of t) {
            if (a.status === "aborted")
                return M;
            a.status === "dirty" && e.dirty(),
            s.push(a.value)
        }
        return {
            status: e.value,
            value: s
        }
    }
    static async mergeObjectAsync(e, t) {
        const s = [];
        for (const a of t) {
            const r = await a.key
              , o = await a.value;
            s.push({
                key: r,
                value: o
            })
        }
        return Q.mergeObjectSync(e, s)
    }
    static mergeObjectSync(e, t) {
        const s = {};
        for (const a of t) {
            const {key: r, value: o} = a;
            if (r.status === "aborted" || o.status === "aborted")
                return M;
            r.status === "dirty" && e.dirty(),
            o.status === "dirty" && e.dirty(),
            r.value !== "__proto__" && (typeof o.value < "u" || a.alwaysSet) && (s[r.value] = o.value)
        }
        return {
            status: e.value,
            value: s
        }
    }
}
const M = Object.freeze({
    status: "aborted"
})
  , Le = n => ({
    status: "dirty",
    value: n
})
  , ee = n => ({
    status: "valid",
    value: n
})
  , Nt = n => n.status === "aborted"
  , Vt = n => n.status === "dirty"
  , Re = n => n.status === "valid"
  , Be = n => typeof Promise < "u" && n instanceof Promise;
function ct(n, e, t, s) {
    if (typeof e == "function" ? n !== e || !s : !e.has(n))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(n)
}
function kn(n, e, t, s, a) {
    if (typeof e == "function" ? n !== e || !a : !e.has(n))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(n, t),
    t
}
var N;
(function(n) {
    n.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
    n.toString = e => typeof e == "string" ? e : e == null ? void 0 : e.message
}
)(N || (N = {}));
var je, Ze;
class de {
    constructor(e, t, s, a) {
        this._cachedPath = [],
        this.parent = e,
        this.data = t,
        this._path = s,
        this._key = a
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const Yt = (n, e) => {
    if (Re(e))
        return {
            success: !0,
            data: e.value
        };
    if (!n.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const t = new te(n.common.issues);
            return this._error = t,
            this._error
        }
    }
}
;
function j(n) {
    if (!n)
        return {};
    const {errorMap: e, invalid_type_error: t, required_error: s, description: a} = n;
    if (e && (t || s))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: a
    } : {
        errorMap: (o, i) => {
            var c, f;
            const {message: _} = n;
            return o.code === "invalid_enum_value" ? {
                message: _ ?? i.defaultError
            } : typeof i.data > "u" ? {
                message: (c = _ ?? s) !== null && c !== void 0 ? c : i.defaultError
            } : o.code !== "invalid_type" ? {
                message: i.defaultError
            } : {
                message: (f = _ ?? t) !== null && f !== void 0 ? f : i.defaultError
            }
        }
        ,
        description: a
    }
}
class R {
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return _e(e.data)
    }
    _getOrReturnCtx(e, t) {
        return t || {
            common: e.parent.common,
            data: e.data,
            parsedType: _e(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new Q,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: _e(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const t = this._parse(e);
        if (Be(t))
            throw new Error("Synchronous parse encountered promise.");
        return t
    }
    _parseAsync(e) {
        const t = this._parse(e);
        return Promise.resolve(t)
    }
    parse(e, t) {
        const s = this.safeParse(e, t);
        if (s.success)
            return s.data;
        throw s.error
    }
    safeParse(e, t) {
        var s;
        const a = {
            common: {
                issues: [],
                async: (s = t == null ? void 0 : t.async) !== null && s !== void 0 ? s : !1,
                contextualErrorMap: t == null ? void 0 : t.errorMap
            },
            path: (t == null ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: _e(e)
        }
          , r = this._parseSync({
            data: e,
            path: a.path,
            parent: a
        });
        return Yt(a, r)
    }
    async parseAsync(e, t) {
        const s = await this.safeParseAsync(e, t);
        if (s.success)
            return s.data;
        throw s.error
    }
    async safeParseAsync(e, t) {
        const s = {
            common: {
                issues: [],
                contextualErrorMap: t == null ? void 0 : t.errorMap,
                async: !0
            },
            path: (t == null ? void 0 : t.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: _e(e)
        }
          , a = this._parse({
            data: e,
            path: s.path,
            parent: s
        })
          , r = await (Be(a) ? a : Promise.resolve(a));
        return Yt(s, r)
    }
    refine(e, t) {
        const s = a => typeof t == "string" || typeof t > "u" ? {
            message: t
        } : typeof t == "function" ? t(a) : t;
        return this._refinement( (a, r) => {
            const o = e(a)
              , i = () => r.addIssue({
                code: y.custom,
                ...s(a)
            });
            return typeof Promise < "u" && o instanceof Promise ? o.then(c => c ? !0 : (i(),
            !1)) : o ? !0 : (i(),
            !1)
        }
        )
    }
    refinement(e, t) {
        return this._refinement( (s, a) => e(s) ? !0 : (a.addIssue(typeof t == "function" ? t(s, a) : t),
        !1))
    }
    _refinement(e) {
        return new ae({
            schema: this,
            typeName: I.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return ce.create(this, this._def)
    }
    nullable() {
        return $e.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return se.create(this, this._def)
    }
    promise() {
        return Me.create(this, this._def)
    }
    or(e) {
        return Ue.create([this, e], this._def)
    }
    and(e) {
        return Fe.create(this, e, this._def)
    }
    transform(e) {
        return new ae({
            ...j(this._def),
            schema: this,
            typeName: I.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const t = typeof e == "function" ? e : () => e;
        return new Ke({
            ...j(this._def),
            innerType: this,
            defaultValue: t,
            typeName: I.ZodDefault
        })
    }
    brand() {
        return new Ut({
            typeName: I.ZodBranded,
            type: this,
            ...j(this._def)
        })
    }
    catch(e) {
        const t = typeof e == "function" ? e : () => e;
        return new Je({
            ...j(this._def),
            innerType: this,
            catchValue: t,
            typeName: I.ZodCatch
        })
    }
    describe(e) {
        const t = this.constructor;
        return new t({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return tt.create(this, e)
    }
    readonly() {
        return Xe.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const zl = /^c[^\s-]{8,}$/i
  , Ul = /^[0-9a-z]+$/
  , Fl = /^[0-9A-HJKMNP-TV-Z]{26}$/
  , Wl = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , ql = /^[a-z0-9_-]{21}$/i
  , Gl = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Yl = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Kl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let kt;
const Jl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Xl = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
  , Ql = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , $n = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , ec = new RegExp(`^${$n}$`);
function wn(n) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return n.precision ? e = `${e}\\.\\d{${n.precision}}` : n.precision == null && (e = `${e}(\\.\\d+)?`),
    e
}
function tc(n) {
    return new RegExp(`^${wn(n)}$`)
}
function xn(n) {
    let e = `${$n}T${wn(n)}`;
    const t = [];
    return t.push(n.local ? "Z?" : "Z"),
    n.offset && t.push("([+-]\\d{2}:?\\d{2})"),
    e = `${e}(${t.join("|")})`,
    new RegExp(`^${e}$`)
}
function nc(n, e) {
    return !!((e === "v4" || !e) && Jl.test(n) || (e === "v6" || !e) && Xl.test(n))
}
class ne extends R {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== x.string) {
            const r = this._getOrReturnCtx(e);
            return w(r, {
                code: y.invalid_type,
                expected: x.string,
                received: r.parsedType
            }),
            M
        }
        const s = new Q;
        let a;
        for (const r of this._def.checks)
            if (r.kind === "min")
                e.data.length < r.value && (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.too_small,
                    minimum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "max")
                e.data.length > r.value && (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.too_big,
                    maximum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "length") {
                const o = e.data.length > r.value
                  , i = e.data.length < r.value;
                (o || i) && (a = this._getOrReturnCtx(e, a),
                o ? w(a, {
                    code: y.too_big,
                    maximum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }) : i && w(a, {
                    code: y.too_small,
                    minimum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message
                }),
                s.dirty())
            } else if (r.kind === "email")
                Yl.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "email",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "emoji")
                kt || (kt = new RegExp(Kl,"u")),
                kt.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "emoji",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "uuid")
                Wl.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "uuid",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "nanoid")
                ql.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "nanoid",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "cuid")
                zl.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "cuid",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "cuid2")
                Ul.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "cuid2",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "ulid")
                Fl.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "ulid",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty());
            else if (r.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    a = this._getOrReturnCtx(e, a),
                    w(a, {
                        validation: "url",
                        code: y.invalid_string,
                        message: r.message
                    }),
                    s.dirty()
                }
            else
                r.kind === "regex" ? (r.regex.lastIndex = 0,
                r.regex.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "regex",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty())) : r.kind === "trim" ? e.data = e.data.trim() : r.kind === "includes" ? e.data.includes(r.value, r.position) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: {
                        includes: r.value,
                        position: r.position
                    },
                    message: r.message
                }),
                s.dirty()) : r.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : r.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : r.kind === "startsWith" ? e.data.startsWith(r.value) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: {
                        startsWith: r.value
                    },
                    message: r.message
                }),
                s.dirty()) : r.kind === "endsWith" ? e.data.endsWith(r.value) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: {
                        endsWith: r.value
                    },
                    message: r.message
                }),
                s.dirty()) : r.kind === "datetime" ? xn(r).test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: "datetime",
                    message: r.message
                }),
                s.dirty()) : r.kind === "date" ? ec.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: "date",
                    message: r.message
                }),
                s.dirty()) : r.kind === "time" ? tc(r).test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    code: y.invalid_string,
                    validation: "time",
                    message: r.message
                }),
                s.dirty()) : r.kind === "duration" ? Gl.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "duration",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty()) : r.kind === "ip" ? nc(e.data, r.version) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "ip",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty()) : r.kind === "base64" ? Ql.test(e.data) || (a = this._getOrReturnCtx(e, a),
                w(a, {
                    validation: "base64",
                    code: y.invalid_string,
                    message: r.message
                }),
                s.dirty()) : F.assertNever(r);
        return {
            status: s.value,
            value: e.data
        }
    }
    _regex(e, t, s) {
        return this.refinement(a => e.test(a), {
            validation: t,
            code: y.invalid_string,
            ...N.errToObj(s)
        })
    }
    _addCheck(e) {
        return new ne({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...N.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...N.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...N.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...N.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...N.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...N.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...N.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...N.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...N.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...N.errToObj(e)
        })
    }
    datetime(e) {
        var t, s;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
            local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : !1,
            ...N.errToObj(e == null ? void 0 : e.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            ...N.errToObj(e == null ? void 0 : e.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...N.errToObj(e)
        })
    }
    regex(e, t) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...N.errToObj(t)
        })
    }
    includes(e, t) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: t == null ? void 0 : t.position,
            ...N.errToObj(t == null ? void 0 : t.message)
        })
    }
    startsWith(e, t) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...N.errToObj(t)
        })
    }
    endsWith(e, t) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...N.errToObj(t)
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...N.errToObj(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...N.errToObj(t)
        })
    }
    length(e, t) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...N.errToObj(t)
        })
    }
    nonempty(e) {
        return this.min(1, N.errToObj(e))
    }
    trim() {
        return new ne({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new ne({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new ne({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get minLength() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
ne.create = n => {
    var e;
    return new ne({
        checks: [],
        typeName: I.ZodString,
        coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
        ...j(n)
    })
}
;
function sc(n, e) {
    const t = (n.toString().split(".")[1] || "").length
      , s = (e.toString().split(".")[1] || "").length
      , a = t > s ? t : s
      , r = parseInt(n.toFixed(a).replace(".", ""))
      , o = parseInt(e.toFixed(a).replace(".", ""));
    return r % o / Math.pow(10, a)
}
class ye extends R {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== x.number) {
            const r = this._getOrReturnCtx(e);
            return w(r, {
                code: y.invalid_type,
                expected: x.number,
                received: r.parsedType
            }),
            M
        }
        let s;
        const a = new Q;
        for (const r of this._def.checks)
            r.kind === "int" ? F.isInteger(e.data) || (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.invalid_type,
                expected: "integer",
                received: "float",
                message: r.message
            }),
            a.dirty()) : r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.too_small,
                minimum: r.value,
                type: "number",
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            a.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.too_big,
                maximum: r.value,
                type: "number",
                inclusive: r.inclusive,
                exact: !1,
                message: r.message
            }),
            a.dirty()) : r.kind === "multipleOf" ? sc(e.data, r.value) !== 0 && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            a.dirty()) : r.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.not_finite,
                message: r.message
            }),
            a.dirty()) : F.assertNever(r);
        return {
            status: a.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, N.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, N.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, N.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, N.toString(t))
    }
    setLimit(e, t, s, a) {
        return new ye({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: s,
                message: N.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new ye({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: N.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: N.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: N.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: N.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: N.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: N.toString(t)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: N.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: N.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: N.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && F.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , t = null;
        for (const s of this._def.checks) {
            if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
                return !0;
            s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value)
        }
        return Number.isFinite(t) && Number.isFinite(e)
    }
}
ye.create = n => new ye({
    checks: [],
    typeName: I.ZodNumber,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...j(n)
});
class be extends R {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)),
        this._getType(e) !== x.bigint) {
            const r = this._getOrReturnCtx(e);
            return w(r, {
                code: y.invalid_type,
                expected: x.bigint,
                received: r.parsedType
            }),
            M
        }
        let s;
        const a = new Q;
        for (const r of this._def.checks)
            r.kind === "min" ? (r.inclusive ? e.data < r.value : e.data <= r.value) && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.too_small,
                type: "bigint",
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            a.dirty()) : r.kind === "max" ? (r.inclusive ? e.data > r.value : e.data >= r.value) && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.too_big,
                type: "bigint",
                maximum: r.value,
                inclusive: r.inclusive,
                message: r.message
            }),
            a.dirty()) : r.kind === "multipleOf" ? e.data % r.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s),
            w(s, {
                code: y.not_multiple_of,
                multipleOf: r.value,
                message: r.message
            }),
            a.dirty()) : F.assertNever(r);
        return {
            status: a.value,
            value: e.data
        }
    }
    gte(e, t) {
        return this.setLimit("min", e, !0, N.toString(t))
    }
    gt(e, t) {
        return this.setLimit("min", e, !1, N.toString(t))
    }
    lte(e, t) {
        return this.setLimit("max", e, !0, N.toString(t))
    }
    lt(e, t) {
        return this.setLimit("max", e, !1, N.toString(t))
    }
    setLimit(e, t, s, a) {
        return new be({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: t,
                inclusive: s,
                message: N.toString(a)
            }]
        })
    }
    _addCheck(e) {
        return new be({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: N.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: N.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: N.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: N.toString(e)
        })
    }
    multipleOf(e, t) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: N.toString(t)
        })
    }
    get minValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e
    }
}
be.create = n => {
    var e;
    return new be({
        checks: [],
        typeName: I.ZodBigInt,
        coerce: (e = n == null ? void 0 : n.coerce) !== null && e !== void 0 ? e : !1,
        ...j(n)
    })
}
;
class De extends R {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== x.boolean) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.boolean,
                received: s.parsedType
            }),
            M
        }
        return ee(e.data)
    }
}
De.create = n => new De({
    typeName: I.ZodBoolean,
    coerce: (n == null ? void 0 : n.coerce) || !1,
    ...j(n)
});
class Te extends R {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== x.date) {
            const r = this._getOrReturnCtx(e);
            return w(r, {
                code: y.invalid_type,
                expected: x.date,
                received: r.parsedType
            }),
            M
        }
        if (isNaN(e.data.getTime())) {
            const r = this._getOrReturnCtx(e);
            return w(r, {
                code: y.invalid_date
            }),
            M
        }
        const s = new Q;
        let a;
        for (const r of this._def.checks)
            r.kind === "min" ? e.data.getTime() < r.value && (a = this._getOrReturnCtx(e, a),
            w(a, {
                code: y.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: "date"
            }),
            s.dirty()) : r.kind === "max" ? e.data.getTime() > r.value && (a = this._getOrReturnCtx(e, a),
            w(a, {
                code: y.too_big,
                message: r.message,
                inclusive: !0,
                exact: !1,
                maximum: r.value,
                type: "date"
            }),
            s.dirty()) : F.assertNever(r);
        return {
            status: s.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new Te({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, t) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: N.toString(t)
        })
    }
    max(e, t) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: N.toString(t)
        })
    }
    get minDate() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const t of this._def.checks)
            t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null
    }
}
Te.create = n => new Te({
    checks: [],
    coerce: (n == null ? void 0 : n.coerce) || !1,
    typeName: I.ZodDate,
    ...j(n)
});
class ut extends R {
    _parse(e) {
        if (this._getType(e) !== x.symbol) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.symbol,
                received: s.parsedType
            }),
            M
        }
        return ee(e.data)
    }
}
ut.create = n => new ut({
    typeName: I.ZodSymbol,
    ...j(n)
});
class He extends R {
    _parse(e) {
        if (this._getType(e) !== x.undefined) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.undefined,
                received: s.parsedType
            }),
            M
        }
        return ee(e.data)
    }
}
He.create = n => new He({
    typeName: I.ZodUndefined,
    ...j(n)
});
class ze extends R {
    _parse(e) {
        if (this._getType(e) !== x.null) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.null,
                received: s.parsedType
            }),
            M
        }
        return ee(e.data)
    }
}
ze.create = n => new ze({
    typeName: I.ZodNull,
    ...j(n)
});
class Ie extends R {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return ee(e.data)
    }
}
Ie.create = n => new Ie({
    typeName: I.ZodAny,
    ...j(n)
});
class we extends R {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return ee(e.data)
    }
}
we.create = n => new we({
    typeName: I.ZodUnknown,
    ...j(n)
});
class he extends R {
    _parse(e) {
        const t = this._getOrReturnCtx(e);
        return w(t, {
            code: y.invalid_type,
            expected: x.never,
            received: t.parsedType
        }),
        M
    }
}
he.create = n => new he({
    typeName: I.ZodNever,
    ...j(n)
});
class dt extends R {
    _parse(e) {
        if (this._getType(e) !== x.undefined) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.void,
                received: s.parsedType
            }),
            M
        }
        return ee(e.data)
    }
}
dt.create = n => new dt({
    typeName: I.ZodVoid,
    ...j(n)
});
class se extends R {
    _parse(e) {
        const {ctx: t, status: s} = this._processInputParams(e)
          , a = this._def;
        if (t.parsedType !== x.array)
            return w(t, {
                code: y.invalid_type,
                expected: x.array,
                received: t.parsedType
            }),
            M;
        if (a.exactLength !== null) {
            const o = t.data.length > a.exactLength.value
              , i = t.data.length < a.exactLength.value;
            (o || i) && (w(t, {
                code: o ? y.too_big : y.too_small,
                minimum: i ? a.exactLength.value : void 0,
                maximum: o ? a.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: a.exactLength.message
            }),
            s.dirty())
        }
        if (a.minLength !== null && t.data.length < a.minLength.value && (w(t, {
            code: y.too_small,
            minimum: a.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.minLength.message
        }),
        s.dirty()),
        a.maxLength !== null && t.data.length > a.maxLength.value && (w(t, {
            code: y.too_big,
            maximum: a.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: a.maxLength.message
        }),
        s.dirty()),
        t.common.async)
            return Promise.all([...t.data].map( (o, i) => a.type._parseAsync(new de(t,o,t.path,i)))).then(o => Q.mergeArray(s, o));
        const r = [...t.data].map( (o, i) => a.type._parseSync(new de(t,o,t.path,i)));
        return Q.mergeArray(s, r)
    }
    get element() {
        return this._def.type
    }
    min(e, t) {
        return new se({
            ...this._def,
            minLength: {
                value: e,
                message: N.toString(t)
            }
        })
    }
    max(e, t) {
        return new se({
            ...this._def,
            maxLength: {
                value: e,
                message: N.toString(t)
            }
        })
    }
    length(e, t) {
        return new se({
            ...this._def,
            exactLength: {
                value: e,
                message: N.toString(t)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
se.create = (n, e) => new se({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: I.ZodArray,
    ...j(e)
});
function Pe(n) {
    if (n instanceof G) {
        const e = {};
        for (const t in n.shape) {
            const s = n.shape[t];
            e[t] = ce.create(Pe(s))
        }
        return new G({
            ...n._def,
            shape: () => e
        })
    } else
        return n instanceof se ? new se({
            ...n._def,
            type: Pe(n.element)
        }) : n instanceof ce ? ce.create(Pe(n.unwrap())) : n instanceof $e ? $e.create(Pe(n.unwrap())) : n instanceof fe ? fe.create(n.items.map(e => Pe(e))) : n
}
class G extends R {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , t = F.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: t
        }
    }
    _parse(e) {
        if (this._getType(e) !== x.object) {
            const f = this._getOrReturnCtx(e);
            return w(f, {
                code: y.invalid_type,
                expected: x.object,
                received: f.parsedType
            }),
            M
        }
        const {status: s, ctx: a} = this._processInputParams(e)
          , {shape: r, keys: o} = this._getCached()
          , i = [];
        if (!(this._def.catchall instanceof he && this._def.unknownKeys === "strip"))
            for (const f in a.data)
                o.includes(f) || i.push(f);
        const c = [];
        for (const f of o) {
            const _ = r[f]
              , g = a.data[f];
            c.push({
                key: {
                    status: "valid",
                    value: f
                },
                value: _._parse(new de(a,g,a.path,f)),
                alwaysSet: f in a.data
            })
        }
        if (this._def.catchall instanceof he) {
            const f = this._def.unknownKeys;
            if (f === "passthrough")
                for (const _ of i)
                    c.push({
                        key: {
                            status: "valid",
                            value: _
                        },
                        value: {
                            status: "valid",
                            value: a.data[_]
                        }
                    });
            else if (f === "strict")
                i.length > 0 && (w(a, {
                    code: y.unrecognized_keys,
                    keys: i
                }),
                s.dirty());
            else if (f !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const f = this._def.catchall;
            for (const _ of i) {
                const g = a.data[_];
                c.push({
                    key: {
                        status: "valid",
                        value: _
                    },
                    value: f._parse(new de(a,g,a.path,_)),
                    alwaysSet: _ in a.data
                })
            }
        }
        return a.common.async ? Promise.resolve().then(async () => {
            const f = [];
            for (const _ of c) {
                const g = await _.key
                  , L = await _.value;
                f.push({
                    key: g,
                    value: L,
                    alwaysSet: _.alwaysSet
                })
            }
            return f
        }
        ).then(f => Q.mergeObjectSync(s, f)) : Q.mergeObjectSync(s, c)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return N.errToObj,
        new G({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (t, s) => {
                    var a, r, o, i;
                    const c = (o = (r = (a = this._def).errorMap) === null || r === void 0 ? void 0 : r.call(a, t, s).message) !== null && o !== void 0 ? o : s.defaultError;
                    return t.code === "unrecognized_keys" ? {
                        message: (i = N.errToObj(e).message) !== null && i !== void 0 ? i : c
                    } : {
                        message: c
                    }
                }
            } : {}
        })
    }
    strip() {
        return new G({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new G({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new G({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new G({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: I.ZodObject
        })
    }
    setKey(e, t) {
        return this.augment({
            [e]: t
        })
    }
    catchall(e) {
        return new G({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const t = {};
        return F.objectKeys(e).forEach(s => {
            e[s] && this.shape[s] && (t[s] = this.shape[s])
        }
        ),
        new G({
            ...this._def,
            shape: () => t
        })
    }
    omit(e) {
        const t = {};
        return F.objectKeys(this.shape).forEach(s => {
            e[s] || (t[s] = this.shape[s])
        }
        ),
        new G({
            ...this._def,
            shape: () => t
        })
    }
    deepPartial() {
        return Pe(this)
    }
    partial(e) {
        const t = {};
        return F.objectKeys(this.shape).forEach(s => {
            const a = this.shape[s];
            e && !e[s] ? t[s] = a : t[s] = a.optional()
        }
        ),
        new G({
            ...this._def,
            shape: () => t
        })
    }
    required(e) {
        const t = {};
        return F.objectKeys(this.shape).forEach(s => {
            if (e && !e[s])
                t[s] = this.shape[s];
            else {
                let r = this.shape[s];
                for (; r instanceof ce; )
                    r = r._def.innerType;
                t[s] = r
            }
        }
        ),
        new G({
            ...this._def,
            shape: () => t
        })
    }
    keyof() {
        return Tn(F.objectKeys(this.shape))
    }
}
G.create = (n, e) => new G({
    shape: () => n,
    unknownKeys: "strip",
    catchall: he.create(),
    typeName: I.ZodObject,
    ...j(e)
});
G.strictCreate = (n, e) => new G({
    shape: () => n,
    unknownKeys: "strict",
    catchall: he.create(),
    typeName: I.ZodObject,
    ...j(e)
});
G.lazycreate = (n, e) => new G({
    shape: n,
    unknownKeys: "strip",
    catchall: he.create(),
    typeName: I.ZodObject,
    ...j(e)
});
class Ue extends R {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , s = this._def.options;
        function a(r) {
            for (const i of r)
                if (i.result.status === "valid")
                    return i.result;
            for (const i of r)
                if (i.result.status === "dirty")
                    return t.common.issues.push(...i.ctx.common.issues),
                    i.result;
            const o = r.map(i => new te(i.ctx.common.issues));
            return w(t, {
                code: y.invalid_union,
                unionErrors: o
            }),
            M
        }
        if (t.common.async)
            return Promise.all(s.map(async r => {
                const o = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await r._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(a);
        {
            let r;
            const o = [];
            for (const c of s) {
                const f = {
                    ...t,
                    common: {
                        ...t.common,
                        issues: []
                    },
                    parent: null
                }
                  , _ = c._parseSync({
                    data: t.data,
                    path: t.path,
                    parent: f
                });
                if (_.status === "valid")
                    return _;
                _.status === "dirty" && !r && (r = {
                    result: _,
                    ctx: f
                }),
                f.common.issues.length && o.push(f.common.issues)
            }
            if (r)
                return t.common.issues.push(...r.ctx.common.issues),
                r.result;
            const i = o.map(c => new te(c));
            return w(t, {
                code: y.invalid_union,
                unionErrors: i
            }),
            M
        }
    }
    get options() {
        return this._def.options
    }
}
Ue.create = (n, e) => new Ue({
    options: n,
    typeName: I.ZodUnion,
    ...j(e)
});
const pe = n => n instanceof qe ? pe(n.schema) : n instanceof ae ? pe(n.innerType()) : n instanceof Ge ? [n.value] : n instanceof ke ? n.options : n instanceof Ye ? F.objectValues(n.enum) : n instanceof Ke ? pe(n._def.innerType) : n instanceof He ? [void 0] : n instanceof ze ? [null] : n instanceof ce ? [void 0, ...pe(n.unwrap())] : n instanceof $e ? [null, ...pe(n.unwrap())] : n instanceof Ut || n instanceof Xe ? pe(n.unwrap()) : n instanceof Je ? pe(n._def.innerType) : [];
class gt extends R {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== x.object)
            return w(t, {
                code: y.invalid_type,
                expected: x.object,
                received: t.parsedType
            }),
            M;
        const s = this.discriminator
          , a = t.data[s]
          , r = this.optionsMap.get(a);
        return r ? t.common.async ? r._parseAsync({
            data: t.data,
            path: t.path,
            parent: t
        }) : r._parseSync({
            data: t.data,
            path: t.path,
            parent: t
        }) : (w(t, {
            code: y.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [s]
        }),
        M)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, t, s) {
        const a = new Map;
        for (const r of t) {
            const o = pe(r.shape[e]);
            if (!o.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const i of o) {
                if (a.has(i))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
                a.set(i, r)
            }
        }
        return new gt({
            typeName: I.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: a,
            ...j(s)
        })
    }
}
function It(n, e) {
    const t = _e(n)
      , s = _e(e);
    if (n === e)
        return {
            valid: !0,
            data: n
        };
    if (t === x.object && s === x.object) {
        const a = F.objectKeys(e)
          , r = F.objectKeys(n).filter(i => a.indexOf(i) !== -1)
          , o = {
            ...n,
            ...e
        };
        for (const i of r) {
            const c = It(n[i], e[i]);
            if (!c.valid)
                return {
                    valid: !1
                };
            o[i] = c.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (t === x.array && s === x.array) {
        if (n.length !== e.length)
            return {
                valid: !1
            };
        const a = [];
        for (let r = 0; r < n.length; r++) {
            const o = n[r]
              , i = e[r]
              , c = It(o, i);
            if (!c.valid)
                return {
                    valid: !1
                };
            a.push(c.data)
        }
        return {
            valid: !0,
            data: a
        }
    } else
        return t === x.date && s === x.date && +n == +e ? {
            valid: !0,
            data: n
        } : {
            valid: !1
        }
}
class Fe extends R {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e)
          , a = (r, o) => {
            if (Nt(r) || Nt(o))
                return M;
            const i = It(r.value, o.value);
            return i.valid ? ((Vt(r) || Vt(o)) && t.dirty(),
            {
                status: t.value,
                value: i.data
            }) : (w(s, {
                code: y.invalid_intersection_types
            }),
            M)
        }
        ;
        return s.common.async ? Promise.all([this._def.left._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        })]).then( ([r,o]) => a(r, o)) : a(this._def.left._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }))
    }
}
Fe.create = (n, e, t) => new Fe({
    left: n,
    right: e,
    typeName: I.ZodIntersection,
    ...j(t)
});
class fe extends R {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== x.array)
            return w(s, {
                code: y.invalid_type,
                expected: x.array,
                received: s.parsedType
            }),
            M;
        if (s.data.length < this._def.items.length)
            return w(s, {
                code: y.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            M;
        !this._def.rest && s.data.length > this._def.items.length && (w(s, {
            code: y.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        t.dirty());
        const r = [...s.data].map( (o, i) => {
            const c = this._def.items[i] || this._def.rest;
            return c ? c._parse(new de(s,o,s.path,i)) : null
        }
        ).filter(o => !!o);
        return s.common.async ? Promise.all(r).then(o => Q.mergeArray(t, o)) : Q.mergeArray(t, r)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new fe({
            ...this._def,
            rest: e
        })
    }
}
fe.create = (n, e) => {
    if (!Array.isArray(n))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new fe({
        items: n,
        typeName: I.ZodTuple,
        rest: null,
        ...j(e)
    })
}
;
class We extends R {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== x.object)
            return w(s, {
                code: y.invalid_type,
                expected: x.object,
                received: s.parsedType
            }),
            M;
        const a = []
          , r = this._def.keyType
          , o = this._def.valueType;
        for (const i in s.data)
            a.push({
                key: r._parse(new de(s,i,s.path,i)),
                value: o._parse(new de(s,s.data[i],s.path,i)),
                alwaysSet: i in s.data
            });
        return s.common.async ? Q.mergeObjectAsync(t, a) : Q.mergeObjectSync(t, a)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, t, s) {
        return t instanceof R ? new We({
            keyType: e,
            valueType: t,
            typeName: I.ZodRecord,
            ...j(s)
        }) : new We({
            keyType: ne.create(),
            valueType: e,
            typeName: I.ZodRecord,
            ...j(t)
        })
    }
}
class ft extends R {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== x.map)
            return w(s, {
                code: y.invalid_type,
                expected: x.map,
                received: s.parsedType
            }),
            M;
        const a = this._def.keyType
          , r = this._def.valueType
          , o = [...s.data.entries()].map( ([i,c], f) => ({
            key: a._parse(new de(s,i,s.path,[f, "key"])),
            value: r._parse(new de(s,c,s.path,[f, "value"]))
        }));
        if (s.common.async) {
            const i = new Map;
            return Promise.resolve().then(async () => {
                for (const c of o) {
                    const f = await c.key
                      , _ = await c.value;
                    if (f.status === "aborted" || _.status === "aborted")
                        return M;
                    (f.status === "dirty" || _.status === "dirty") && t.dirty(),
                    i.set(f.value, _.value)
                }
                return {
                    status: t.value,
                    value: i
                }
            }
            )
        } else {
            const i = new Map;
            for (const c of o) {
                const f = c.key
                  , _ = c.value;
                if (f.status === "aborted" || _.status === "aborted")
                    return M;
                (f.status === "dirty" || _.status === "dirty") && t.dirty(),
                i.set(f.value, _.value)
            }
            return {
                status: t.value,
                value: i
            }
        }
    }
}
ft.create = (n, e, t) => new ft({
    valueType: e,
    keyType: n,
    typeName: I.ZodMap,
    ...j(t)
});
class Se extends R {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== x.set)
            return w(s, {
                code: y.invalid_type,
                expected: x.set,
                received: s.parsedType
            }),
            M;
        const a = this._def;
        a.minSize !== null && s.data.size < a.minSize.value && (w(s, {
            code: y.too_small,
            minimum: a.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.minSize.message
        }),
        t.dirty()),
        a.maxSize !== null && s.data.size > a.maxSize.value && (w(s, {
            code: y.too_big,
            maximum: a.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: a.maxSize.message
        }),
        t.dirty());
        const r = this._def.valueType;
        function o(c) {
            const f = new Set;
            for (const _ of c) {
                if (_.status === "aborted")
                    return M;
                _.status === "dirty" && t.dirty(),
                f.add(_.value)
            }
            return {
                status: t.value,
                value: f
            }
        }
        const i = [...s.data.values()].map( (c, f) => r._parse(new de(s,c,s.path,f)));
        return s.common.async ? Promise.all(i).then(c => o(c)) : o(i)
    }
    min(e, t) {
        return new Se({
            ...this._def,
            minSize: {
                value: e,
                message: N.toString(t)
            }
        })
    }
    max(e, t) {
        return new Se({
            ...this._def,
            maxSize: {
                value: e,
                message: N.toString(t)
            }
        })
    }
    size(e, t) {
        return this.min(e, t).max(e, t)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Se.create = (n, e) => new Se({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: I.ZodSet,
    ...j(e)
});
class Ce extends R {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== x.function)
            return w(t, {
                code: y.invalid_type,
                expected: x.function,
                received: t.parsedType
            }),
            M;
        function s(i, c) {
            return lt({
                data: i,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, it(), Ve].filter(f => !!f),
                issueData: {
                    code: y.invalid_arguments,
                    argumentsError: c
                }
            })
        }
        function a(i, c) {
            return lt({
                data: i,
                path: t.path,
                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, it(), Ve].filter(f => !!f),
                issueData: {
                    code: y.invalid_return_type,
                    returnTypeError: c
                }
            })
        }
        const r = {
            errorMap: t.common.contextualErrorMap
        }
          , o = t.data;
        if (this._def.returns instanceof Me) {
            const i = this;
            return ee(async function(...c) {
                const f = new te([])
                  , _ = await i._def.args.parseAsync(c, r).catch(E => {
                    throw f.addIssue(s(c, E)),
                    f
                }
                )
                  , g = await Reflect.apply(o, this, _);
                return await i._def.returns._def.type.parseAsync(g, r).catch(E => {
                    throw f.addIssue(a(g, E)),
                    f
                }
                )
            })
        } else {
            const i = this;
            return ee(function(...c) {
                const f = i._def.args.safeParse(c, r);
                if (!f.success)
                    throw new te([s(c, f.error)]);
                const _ = Reflect.apply(o, this, f.data)
                  , g = i._def.returns.safeParse(_, r);
                if (!g.success)
                    throw new te([a(_, g.error)]);
                return g.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Ce({
            ...this._def,
            args: fe.create(e).rest(we.create())
        })
    }
    returns(e) {
        return new Ce({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, t, s) {
        return new Ce({
            args: e || fe.create([]).rest(we.create()),
            returns: t || we.create(),
            typeName: I.ZodFunction,
            ...j(s)
        })
    }
}
class qe extends R {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: t.data,
            path: t.path,
            parent: t
        })
    }
}
qe.create = (n, e) => new qe({
    getter: n,
    typeName: I.ZodLazy,
    ...j(e)
});
class Ge extends R {
    _parse(e) {
        if (e.data !== this._def.value) {
            const t = this._getOrReturnCtx(e);
            return w(t, {
                received: t.data,
                code: y.invalid_literal,
                expected: this._def.value
            }),
            M
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
Ge.create = (n, e) => new Ge({
    value: n,
    typeName: I.ZodLiteral,
    ...j(e)
});
function Tn(n, e) {
    return new ke({
        values: n,
        typeName: I.ZodEnum,
        ...j(e)
    })
}
class ke extends R {
    constructor() {
        super(...arguments),
        je.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const t = this._getOrReturnCtx(e)
              , s = this._def.values;
            return w(t, {
                expected: F.joinValues(s),
                received: t.parsedType,
                code: y.invalid_type
            }),
            M
        }
        if (ct(this, je) || kn(this, je, new Set(this._def.values)),
        !ct(this, je).has(e.data)) {
            const t = this._getOrReturnCtx(e)
              , s = this._def.values;
            return w(t, {
                received: t.data,
                code: y.invalid_enum_value,
                options: s
            }),
            M
        }
        return ee(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    get Values() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    get Enum() {
        const e = {};
        for (const t of this._def.values)
            e[t] = t;
        return e
    }
    extract(e, t=this._def) {
        return ke.create(e, {
            ...this._def,
            ...t
        })
    }
    exclude(e, t=this._def) {
        return ke.create(this.options.filter(s => !e.includes(s)), {
            ...this._def,
            ...t
        })
    }
}
je = new WeakMap;
ke.create = Tn;
class Ye extends R {
    constructor() {
        super(...arguments),
        Ze.set(this, void 0)
    }
    _parse(e) {
        const t = F.getValidEnumValues(this._def.values)
          , s = this._getOrReturnCtx(e);
        if (s.parsedType !== x.string && s.parsedType !== x.number) {
            const a = F.objectValues(t);
            return w(s, {
                expected: F.joinValues(a),
                received: s.parsedType,
                code: y.invalid_type
            }),
            M
        }
        if (ct(this, Ze) || kn(this, Ze, new Set(F.getValidEnumValues(this._def.values))),
        !ct(this, Ze).has(e.data)) {
            const a = F.objectValues(t);
            return w(s, {
                received: s.data,
                code: y.invalid_enum_value,
                options: a
            }),
            M
        }
        return ee(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Ze = new WeakMap;
Ye.create = (n, e) => new Ye({
    values: n,
    typeName: I.ZodNativeEnum,
    ...j(e)
});
class Me extends R {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        if (t.parsedType !== x.promise && t.common.async === !1)
            return w(t, {
                code: y.invalid_type,
                expected: x.promise,
                received: t.parsedType
            }),
            M;
        const s = t.parsedType === x.promise ? t.data : Promise.resolve(t.data);
        return ee(s.then(a => this._def.type.parseAsync(a, {
            path: t.path,
            errorMap: t.common.contextualErrorMap
        })))
    }
}
Me.create = (n, e) => new Me({
    type: n,
    typeName: I.ZodPromise,
    ...j(e)
});
class ae extends R {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === I.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e)
          , a = this._def.effect || null
          , r = {
            addIssue: o => {
                w(s, o),
                o.fatal ? t.abort() : t.dirty()
            }
            ,
            get path() {
                return s.path
            }
        };
        if (r.addIssue = r.addIssue.bind(r),
        a.type === "preprocess") {
            const o = a.transform(s.data, r);
            if (s.common.async)
                return Promise.resolve(o).then(async i => {
                    if (t.value === "aborted")
                        return M;
                    const c = await this._def.schema._parseAsync({
                        data: i,
                        path: s.path,
                        parent: s
                    });
                    return c.status === "aborted" ? M : c.status === "dirty" || t.value === "dirty" ? Le(c.value) : c
                }
                );
            {
                if (t.value === "aborted")
                    return M;
                const i = this._def.schema._parseSync({
                    data: o,
                    path: s.path,
                    parent: s
                });
                return i.status === "aborted" ? M : i.status === "dirty" || t.value === "dirty" ? Le(i.value) : i
            }
        }
        if (a.type === "refinement") {
            const o = i => {
                const c = a.refinement(i, r);
                if (s.common.async)
                    return Promise.resolve(c);
                if (c instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return i
            }
            ;
            if (s.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return i.status === "aborted" ? M : (i.status === "dirty" && t.dirty(),
                o(i.value),
                {
                    status: t.value,
                    value: i.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                }).then(i => i.status === "aborted" ? M : (i.status === "dirty" && t.dirty(),
                o(i.value).then( () => ({
                    status: t.value,
                    value: i.value
                }))))
        }
        if (a.type === "transform")
            if (s.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                if (!Re(o))
                    return o;
                const i = a.transform(o.value, r);
                if (i instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: t.value,
                    value: i
                }
            } else
                return this._def.schema._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                }).then(o => Re(o) ? Promise.resolve(a.transform(o.value, r)).then(i => ({
                    status: t.value,
                    value: i
                })) : o);
        F.assertNever(a)
    }
}
ae.create = (n, e, t) => new ae({
    schema: n,
    typeName: I.ZodEffects,
    effect: e,
    ...j(t)
});
ae.createWithPreprocess = (n, e, t) => new ae({
    schema: e,
    effect: {
        type: "preprocess",
        transform: n
    },
    typeName: I.ZodEffects,
    ...j(t)
});
class ce extends R {
    _parse(e) {
        return this._getType(e) === x.undefined ? ee(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
ce.create = (n, e) => new ce({
    innerType: n,
    typeName: I.ZodOptional,
    ...j(e)
});
class $e extends R {
    _parse(e) {
        return this._getType(e) === x.null ? ee(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
$e.create = (n, e) => new $e({
    innerType: n,
    typeName: I.ZodNullable,
    ...j(e)
});
class Ke extends R {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e);
        let s = t.data;
        return t.parsedType === x.undefined && (s = this._def.defaultValue()),
        this._def.innerType._parse({
            data: s,
            path: t.path,
            parent: t
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Ke.create = (n, e) => new Ke({
    innerType: n,
    typeName: I.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...j(e)
});
class Je extends R {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , s = {
            ...t,
            common: {
                ...t.common,
                issues: []
            }
        }
          , a = this._def.innerType._parse({
            data: s.data,
            path: s.path,
            parent: {
                ...s
            }
        });
        return Be(a) ? a.then(r => ({
            status: "valid",
            value: r.status === "valid" ? r.value : this._def.catchValue({
                get error() {
                    return new te(s.common.issues)
                },
                input: s.data
            })
        })) : {
            status: "valid",
            value: a.status === "valid" ? a.value : this._def.catchValue({
                get error() {
                    return new te(s.common.issues)
                },
                input: s.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Je.create = (n, e) => new Je({
    innerType: n,
    typeName: I.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...j(e)
});
class pt extends R {
    _parse(e) {
        if (this._getType(e) !== x.nan) {
            const s = this._getOrReturnCtx(e);
            return w(s, {
                code: y.invalid_type,
                expected: x.nan,
                received: s.parsedType
            }),
            M
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
pt.create = n => new pt({
    typeName: I.ZodNaN,
    ...j(n)
});
const ac = Symbol("zod_brand");
class Ut extends R {
    _parse(e) {
        const {ctx: t} = this._processInputParams(e)
          , s = t.data;
        return this._def.type._parse({
            data: s,
            path: t.path,
            parent: t
        })
    }
    unwrap() {
        return this._def.type
    }
}
class tt extends R {
    _parse(e) {
        const {status: t, ctx: s} = this._processInputParams(e);
        if (s.common.async)
            return (async () => {
                const r = await this._def.in._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return r.status === "aborted" ? M : r.status === "dirty" ? (t.dirty(),
                Le(r.value)) : this._def.out._parseAsync({
                    data: r.value,
                    path: s.path,
                    parent: s
                })
            }
            )();
        {
            const a = this._def.in._parseSync({
                data: s.data,
                path: s.path,
                parent: s
            });
            return a.status === "aborted" ? M : a.status === "dirty" ? (t.dirty(),
            {
                status: "dirty",
                value: a.value
            }) : this._def.out._parseSync({
                data: a.value,
                path: s.path,
                parent: s
            })
        }
    }
    static create(e, t) {
        return new tt({
            in: e,
            out: t,
            typeName: I.ZodPipeline
        })
    }
}
class Xe extends R {
    _parse(e) {
        const t = this._def.innerType._parse(e)
          , s = a => (Re(a) && (a.value = Object.freeze(a.value)),
        a);
        return Be(t) ? t.then(a => s(a)) : s(t)
    }
    unwrap() {
        return this._def.innerType
    }
}
Xe.create = (n, e) => new Xe({
    innerType: n,
    typeName: I.ZodReadonly,
    ...j(e)
});
function Sn(n, e={}, t) {
    return n ? Ie.create().superRefine( (s, a) => {
        var r, o;
        if (!n(s)) {
            const i = typeof e == "function" ? e(s) : typeof e == "string" ? {
                message: e
            } : e
              , c = (o = (r = i.fatal) !== null && r !== void 0 ? r : t) !== null && o !== void 0 ? o : !0
              , f = typeof i == "string" ? {
                message: i
            } : i;
            a.addIssue({
                code: "custom",
                ...f,
                fatal: c
            })
        }
    }
    ) : Ie.create()
}
const rc = {
    object: G.lazycreate
};
var I;
(function(n) {
    n.ZodString = "ZodString",
    n.ZodNumber = "ZodNumber",
    n.ZodNaN = "ZodNaN",
    n.ZodBigInt = "ZodBigInt",
    n.ZodBoolean = "ZodBoolean",
    n.ZodDate = "ZodDate",
    n.ZodSymbol = "ZodSymbol",
    n.ZodUndefined = "ZodUndefined",
    n.ZodNull = "ZodNull",
    n.ZodAny = "ZodAny",
    n.ZodUnknown = "ZodUnknown",
    n.ZodNever = "ZodNever",
    n.ZodVoid = "ZodVoid",
    n.ZodArray = "ZodArray",
    n.ZodObject = "ZodObject",
    n.ZodUnion = "ZodUnion",
    n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    n.ZodIntersection = "ZodIntersection",
    n.ZodTuple = "ZodTuple",
    n.ZodRecord = "ZodRecord",
    n.ZodMap = "ZodMap",
    n.ZodSet = "ZodSet",
    n.ZodFunction = "ZodFunction",
    n.ZodLazy = "ZodLazy",
    n.ZodLiteral = "ZodLiteral",
    n.ZodEnum = "ZodEnum",
    n.ZodEffects = "ZodEffects",
    n.ZodNativeEnum = "ZodNativeEnum",
    n.ZodOptional = "ZodOptional",
    n.ZodNullable = "ZodNullable",
    n.ZodDefault = "ZodDefault",
    n.ZodCatch = "ZodCatch",
    n.ZodPromise = "ZodPromise",
    n.ZodBranded = "ZodBranded",
    n.ZodPipeline = "ZodPipeline",
    n.ZodReadonly = "ZodReadonly"
}
)(I || (I = {}));
const oc = (n, e={
    message: `Input not instance of ${n.name}`
}) => Sn(t => t instanceof n, e)
  , Pn = ne.create
  , Ln = ye.create
  , ic = pt.create
  , lc = be.create
  , Cn = De.create
  , cc = Te.create
  , uc = ut.create
  , dc = He.create
  , fc = ze.create
  , pc = Ie.create
  , hc = we.create
  , mc = he.create
  , vc = dt.create
  , _c = se.create
  , gc = G.create
  , yc = G.strictCreate
  , bc = Ue.create
  , kc = gt.create
  , $c = Fe.create
  , wc = fe.create
  , xc = We.create
  , Tc = ft.create
  , Sc = Se.create
  , Pc = Ce.create
  , Lc = qe.create
  , Cc = Ge.create
  , Nc = ke.create
  , Vc = Ye.create
  , Ic = Me.create
  , Kt = ae.create
  , Mc = ce.create
  , Ec = $e.create
  , Oc = ae.createWithPreprocess
  , Ac = tt.create
  , jc = () => Pn().optional()
  , Zc = () => Ln().optional()
  , Rc = () => Cn().optional()
  , Bc = {
    string: n => ne.create({
        ...n,
        coerce: !0
    }),
    number: n => ye.create({
        ...n,
        coerce: !0
    }),
    boolean: n => De.create({
        ...n,
        coerce: !0
    }),
    bigint: n => be.create({
        ...n,
        coerce: !0
    }),
    date: n => Te.create({
        ...n,
        coerce: !0
    })
}
  , Dc = M;
var Ae = Object.freeze({
    __proto__: null,
    defaultErrorMap: Ve,
    setErrorMap: Dl,
    getErrorMap: it,
    makeIssue: lt,
    EMPTY_PATH: Hl,
    addIssueToContext: w,
    ParseStatus: Q,
    INVALID: M,
    DIRTY: Le,
    OK: ee,
    isAborted: Nt,
    isDirty: Vt,
    isValid: Re,
    isAsync: Be,
    get util() {
        return F
    },
    get objectUtil() {
        return Ct
    },
    ZodParsedType: x,
    getParsedType: _e,
    ZodType: R,
    datetimeRegex: xn,
    ZodString: ne,
    ZodNumber: ye,
    ZodBigInt: be,
    ZodBoolean: De,
    ZodDate: Te,
    ZodSymbol: ut,
    ZodUndefined: He,
    ZodNull: ze,
    ZodAny: Ie,
    ZodUnknown: we,
    ZodNever: he,
    ZodVoid: dt,
    ZodArray: se,
    ZodObject: G,
    ZodUnion: Ue,
    ZodDiscriminatedUnion: gt,
    ZodIntersection: Fe,
    ZodTuple: fe,
    ZodRecord: We,
    ZodMap: ft,
    ZodSet: Se,
    ZodFunction: Ce,
    ZodLazy: qe,
    ZodLiteral: Ge,
    ZodEnum: ke,
    ZodNativeEnum: Ye,
    ZodPromise: Me,
    ZodEffects: ae,
    ZodTransformer: ae,
    ZodOptional: ce,
    ZodNullable: $e,
    ZodDefault: Ke,
    ZodCatch: Je,
    ZodNaN: pt,
    BRAND: ac,
    ZodBranded: Ut,
    ZodPipeline: tt,
    ZodReadonly: Xe,
    custom: Sn,
    Schema: R,
    ZodSchema: R,
    late: rc,
    get ZodFirstPartyTypeKind() {
        return I
    },
    coerce: Bc,
    any: pc,
    array: _c,
    bigint: lc,
    boolean: Cn,
    date: cc,
    discriminatedUnion: kc,
    effect: Kt,
    enum: Nc,
    function: Pc,
    instanceof: oc,
    intersection: $c,
    lazy: Lc,
    literal: Cc,
    map: Tc,
    nan: ic,
    nativeEnum: Vc,
    never: mc,
    null: fc,
    nullable: Ec,
    number: Ln,
    object: gc,
    oboolean: Rc,
    onumber: Zc,
    optional: Mc,
    ostring: jc,
    pipeline: Ac,
    preprocess: Oc,
    promise: Ic,
    record: xc,
    set: Sc,
    strictObject: yc,
    string: Pn,
    symbol: uc,
    transformer: Kt,
    tuple: wc,
    undefined: dc,
    union: bc,
    unknown: hc,
    void: vc,
    NEVER: Dc,
    ZodIssueCode: y,
    quotelessJson: Bl,
    ZodError: te
});
Ae.object({
    message: Ae.string().min(5).max(1e3),
    type: Ae.enum(["bug", "suggestion", "appreciation", "other"]),
    page: Ae.string().min(3).max(20),
    heading: Ae.string().min(3).max(20).optional()
});
const Mt = [{
    label: "💡 I have a suggestion",
    value: "suggestion"
}, {
    label: "🐛 I want to report a website bug",
    value: "bug"
}, {
    label: "👍 I appreciate the work",
    value: "appreciation"
}, {
    label: "📂 Something else",
    value: "other"
}];
function Jt(n) {
    return Mt.find(e => e.value === n)
}
const Hc = {
    key: 0,
    class: "border-$vp-c-divider bg-$vp-c-bg-alt b-rd-4 m-[2rem 0] step mt-4 border-2 border-solid p-6"
}
  , zc = {
    key: 0,
    class: "step"
}
  , Uc = {
    class: "desc"
}
  , Fc = {
    class: "heading"
}
  , Wc = {
    class: "flex flex-wrap gap-2"
}
  , qc = ["onClick"]
  , Gc = {
    key: 1,
    class: "step"
}
  , Yc = {
    class: "desc"
}
  , Kc = {
    class: "heading"
}
  , Jc = {
    key: 0,
    class: "mb-2 text-sm"
}
  , Xc = ["disabled"]
  , Qc = {
    key: 2,
    class: "step"
}
  , eu = k({
    __name: "Feedback",
    props: {
        heading: {}
    },
    setup(n) {
        const e = n
          , t = ["Make it count!", "Leave some feedback for us!", "We're all ears 🐰", "Tell us what is missing in Lost Pages", "Your thoughts matter to us 💡", "Feedback is a gift 🎁", "What do you think?", "We appreciate your support 🙏", "Help us make Lost Pages better 🤝", "We need your help 👋", "Your feedback is valuable 💯", "So... what do you think?", "I guess you don't need to say anything 😉", "Spill the beans 💣", "We're always looking for ways to improve!", "Your feedback is valuable and helps us make Lost Pages better.", "aliens are watching you 👽", "tasky was here 👀", "The internet is full of crap 😱"];
        function s() {
            return t[Math.floor(Math.random() * t.length)]
        }
        const a = {
            bug: ["We're sorry to hear that!", "Please try to be as specific as possible and provide us with the steps to reproduce the bug."],
            suggestion: ["We're glad you want to share your ideas!", "Nix the fluff and just tell us what you think!", "We'll be happy to read your thoughts and incorporate them into our wiki.", "Hello! We're glad you want to share your ideas!"],
            appreciation: ["We appreciate your support!", "We're always looking for ways to improve!.", "Your feedback is valuable and helps us make Lost Pages better."],
            other: ["We're always looking for ways to improve!", "Your feedback is valuable and helps us make Lost Pages better."]
        };
        function r(U) {
            return a[U][Math.floor(Math.random() * a[U].length)]
        }
        const o = H(!1)
          , i = H(null)
          , c = H(!1)
          , f = P( () => !g.message.length || g.message.length < 5 || g.message.length > 1e3)
          , _ = qn()
          , g = Gn({
            page: _.route.path,
            message: ""
        })
          , L = H(Mt[0]);
        async function E(U) {
            U && (g.type = U,
            L.value = Jt(U)),
            o.value = !0;
            const Z = {
                message: g.message,
                type: g.type,
                page: g.page,
                ...e.heading && {
                    heading: e.heading
                }
            };
            try {
                const K = await (await fetch("https://api.Lost Pages.net/feedback", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(Z)
                })).json();
                if (K.error) {
                    i.value = K.error;
                    return
                }
                K.status === "ok" && (c.value = !0)
            } catch (Y) {
                i.value = Y
            } finally {
                o.value = !1
            }
        }
        const v = H(!1)
          , b = e.heading ? "What do you think about this section?" : "What do you think about this page?"
          , $ = e.heading ? "Let us know how helpful this section is." : "Let us know how helpful this page is."
          , B = P( () => s())
          , A = P( () => r(g.type))
          , q = () => v.value = !v.value;
        return (U, Z) => (l(),
        p(W, null, [e.heading ? (l(),
        p("button", {
            key: 0,
            onClick: Z[0] || (Z[0] = Y => q()),
            class: "bg-$vp-c-default-soft hover:bg-$vp-c-default-soft/40 text-primary border-$vp-c-default-soft hover:border-primary ml-3 inline-flex h-7 items-center justify-center whitespace-nowrap rounded-md border-2 border-solid px-1.5 py-1.5 text-sm font-medium transition-all duration-300 sm:h-6"
        }, [u("span", {
            class: D(v.value === !1 ? "i-lucide:heart-handshake" : "i-lucide:circle-x")
        }, null, 2)])) : (l(),
        p("button", {
            key: 1,
            class: "bg-$vp-c-default-soft hover:bg-$vp-c-default-soft/40 text-primary px2 py1 border-$vp-c-default-soft hover:border-primary mt-2 select-none rounded border-2 border-solid font-bold transition-all duration-300",
            onClick: Z[1] || (Z[1] = Y => q())
        }, [u("span", {
            class: D(v.value === !1 ? "i-lucide:heart-handshake mr-2" : "i-lucide:circle-x mr-2")
        }, null, 2), Z[5] || (Z[5] = u("span", null, "Send Feedback", -1))])), T(Ne, {
            name: "fade",
            mode: "out-in"
        }, {
            default: m( () => [v.value ? (l(),
            p("div", Hc, [T(Ne, {
                name: "fade",
                mode: "out-in"
            }, {
                default: m( () => {
                    var Y;
                    return [g.type ? g.type && !c.value ? (l(),
                    p("div", Gc, [u("div", null, [u("p", Yc, O(d($)), 1), u("div", null, [u("span", null, O((Y = d(Jt)(g.type)) == null ? void 0 : Y.label), 1), u("button", {
                        style: {
                            "margin-left": "0.5rem"
                        },
                        class: "btn",
                        onClick: Z[2] || (Z[2] = K => g.type = void 0)
                    }, Z[6] || (Z[6] = [u("span", {
                        class: "i-lucide:arrow-left-from-line"
                    }, "close", -1)]))])]), u("p", Kc, O(A.value), 1), g.type === "suggestion" ? (l(),
                    p("div", Jc, Z[7] || (Z[7] = [u("details", null, [u("summary", null, [u("span", {
                        class: "i-lucide:shield-alert bg-cerise-400 mb-1 ml-1"
                    }), X(" Do not submit any of the following: ")]), u("strong", null, "🕹️ Emulators"), u("p", {
                        class: "desc"
                    }, [X(" They're already on the "), u("a", {
                        class: "text-primary text-underline font-bold",
                        href: "https://emulation.gametechwiki.com/index.php/Main_Page"
                    }, " Game Tech Wiki. ")]), u("strong", null, "🔻 Leeches"), u("p", {
                        class: "desc"
                    }, [X(" They're already on the "), u("a", {
                        class: "text-primary text-underline font-bold",
                        href: "https://filehostlist.miraheze.org/wiki/Free_Premium_Leeches"
                    }, " File Hosting Wiki. ")]), u("strong", null, "🐧 Distros"), u("p", {
                        class: "desc"
                    }, [X(" They're already on "), u("a", {
                        class: "text-primary text-underline font-bold",
                        href: "https://distrowatch.com/"
                    }, " DistroWatch. ")]), u("strong", null, "🎲 Mining / Betting Sites"), u("p", {
                        class: "desc"
                    }, " Don't post anything related to betting, mining, BINs, CCs, etc. "), u("strong", null, "🎮 Multiplayer Game Hacks"), u("p", {
                        class: "desc"
                    }, " Don't post any hacks/exploits that give unfair advantages in multiplayer games. ")], -1)]))) : S("", !0), Yn(u("textarea", {
                        "onUpdate:modelValue": Z[3] || (Z[3] = K => g.message = K),
                        autofocus: "",
                        class: "input",
                        placeholder: "What a lovely wiki!"
                    }, null, 512), [[Kn, g.message]]), Z[8] || (Z[8] = u("p", {
                        class: "desc mb-2"
                    }, [X(" If you want a reply to your feedback, feel free to mention a contact in the message or join our "), u("a", {
                        class: "text-primary text-underline font-semibold",
                        href: "https://rentry.co/Lost Pages-Invite/"
                    }, " Discord. ")], -1)), u("button", {
                        type: "submit",
                        class: "btn btn-primary",
                        disabled: f.value,
                        onClick: Z[4] || (Z[4] = K => E())
                    }, " Send Feedback 📩 ", 8, Xc)])) : (l(),
                    p("div", Qc, Z[9] || (Z[9] = [u("p", {
                        class: "heading"
                    }, "Thanks for your feedback!", -1)]))) : (l(),
                    p("div", zc, [u("div", null, [u("div", null, [u("p", Uc, O(B.value), 1), u("p", Fc, O(d(b)), 1)])]), u("div", Wc, [(l(!0),
                    p(W, null, J(d(Mt), K => (l(),
                    p("button", {
                        key: K.value,
                        class: "btn",
                        onClick: oe => E(K.value)
                    }, [u("span", null, O(K.label), 1)], 8, qc))), 128))])]))]
                }
                ),
                _: 1
            })])) : S("", !0)]),
            _: 1
        })], 64))
    }
})
  , tu = V(eu, [["__scopeId", "data-v-e1218abd"]])
  , su = {
    extends: fn,
    Layout: Il,
    enhanceApp({router: n, app: e}) {
        e.use(ms),
        e.component("Post", Rl),
        e.component("Feedback", tu),
        nl(n)
    }
};
export {su as R, Oo as c, z as u};
