function showPopup(n) {
  $.ajax({
    url: n,
    method: "GET",
    beforeSend: function () {
      $("#loader-div").show();
    },
  })
    .done(function (t) {
      n.indexOf("login") != -1 || n.indexOf("create") != -1
        ? $(".modal-dialog").addClass("modal-lg")
        : $(".modal-dialog").removeClass("modal-lg");
      $("#popup-content").html(t);
      $("#popupModal").modal("show");
      $("#loader-div").hide();
    })
    .always(function () {
      $("#loader-div").hide();
    });
}
function submitPopupForm(n, t) {
  $(n).submit(function (n) {
    n.preventDefault();
  });
  $(n).valid() &&
    $.ajax({
      url: t,
      method: "POST",
      data: $(n).serialize(),
      beforeSend: function () {
        $("#loader-div").show();
      },
    })
      .done(function (n) {
        n == "" ? $("#popupModal").modal("hide") : $("#popup-content").html(n);
        $("#loader-div").hide();
      })
      .fail(function () {
        $("#loader-div").hide();
      })
      .always(function () {
        $("#loader-div").hide();
      });
}
function lazyloadImages() {
  $(".lazy").lazy({
    onFinishedAll: function () {
      this.config("autoDestroy") || this.destroy();
    },
  });
}
function sendVerify(n, t) {
  $(n).submit(function (n) {
    n.preventDefault();
  });
  $(n).valid() &&
    $.ajax({
      url: t,
      method: "POST",
      data: $(n).serialize(),
      beforeSend: function () {
        $("#loader-div").show();
      },
      success: function () {
        $(".verifySection").hide();
        $("#verifyForm").show();
        $("#verifyForm #phone").val($("#sendCodeForm #Phone").val());
        $("#bad-code").hide();
        $(".modal-body #registerform").show();
      },
      error: function () {
        $(".sms-error").show();
      },
      complete: function () {
        $("#loader-div").hide();
      },
    });
}
function submitVerifyPopupForm(n, t) {
  $(n).submit(function (n) {
    n.preventDefault();
  });
  $(n).valid() &&
    $.ajax({
      url: t,
      method: "POST",
      data: $(n).serialize(),
      beforeSend: function () {
        $("#loader-div").show();
      },
    })
      .done(function (n) {
        n == ""
          ? $("#popupVerify").modal("hide")
          : $("#popup-verify-content").html(n);
        $("#loader-div").hide();
      })
      .fail(function () {
        $("#loader-div").hide();
      })
      .always(function () {
        $("#loader-div").hide();
      });
}
function shareOnTwitter() {
  var n = location.href,
    t = window.open(
      "https://twitter.com/home?status=" + encodeURIComponent(n),
      null,
      "toolbar=0,status=0,width=626,height=436,scrollbars=yes,resizable=yes,menubar=yes"
    );
  return t.focus(), !1;
}
function shareOnFacebook() {
  var n = location.href,
    t = location.href,
    i = window.open(
      "https://www.facebook.com/sharer.php?u=" +
        encodeURIComponent(n) +
        "&amp;t=" +
        encodeURIComponent(t),
      "sharer",
      "toolbar=0,status=0,width=626,height=436"
    );
  return i.focus(), !1;
}
function bookmark() {
  if (window.sidebar && window.sidebar.addPanel)
    window.sidebar.addPanel(document.title, window.location.href, "");
  else if (window.external && "AddFavorite" in window.external)
    window.external.AddFavorite(location.href, document.title);
  else {
    if (window.opera && window.print) return (this.title = document.title), !0;
    alert(
      "Press " +
        (navigator.userAgent.toLowerCase().indexOf("mac") != -1
          ? "Command/Cmd"
          : "CTRL") +
        " + D to bookmark this page."
    );
  }
}
function sendToaFriend() {
  var n = window.open("mailto:?subject=Check this out&body=" + location.href);
  return n.focus(), !1;
}
if (
  (!(function (n, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = n.document
          ? t(n, !0)
          : function (n) {
              if (!n.document)
                throw new Error("jQuery requires a window with a document");
              return t(n);
            })
      : t(n);
  })("undefined" != typeof window ? window : this, function (n, t) {
    function ii(n) {
      var t = !!n && "length" in n && n.length,
        r = i.type(n);
      return "function" === r || i.isWindow(n)
        ? !1
        : "array" === r ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in n);
    }
    function ri(n, t, r) {
      if (i.isFunction(t))
        return i.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        });
      if (t.nodeType)
        return i.grep(n, function (n) {
          return (n === t) !== r;
        });
      if ("string" == typeof t) {
        if (pe.test(t)) return i.filter(t, n, r);
        t = i.filter(t, n);
      }
      return i.grep(n, function (n) {
        return i.inArray(n, t) > -1 !== r;
      });
    }
    function kr(n, t) {
      do n = n[t];
      while (n && 1 !== n.nodeType);
      return n;
    }
    function we(n) {
      var t = {};
      return (
        i.each(n.match(s) || [], function (n, i) {
          t[i] = !0;
        }),
        t
      );
    }
    function dr() {
      u.addEventListener
        ? (u.removeEventListener("DOMContentLoaded", v),
          n.removeEventListener("load", v))
        : (u.detachEvent("onreadystatechange", v), n.detachEvent("onload", v));
    }
    function v() {
      (u.addEventListener ||
        "load" === n.event.type ||
        "complete" === u.readyState) &&
        (dr(), i.ready());
    }
    function nu(n, t, r) {
      if (void 0 === r && 1 === n.nodeType) {
        var u = "data-" + t.replace(ke, "-$1").toLowerCase();
        if (((r = n.getAttribute(u)), "string" == typeof r)) {
          try {
            r =
              "true" === r
                ? !0
                : "false" === r
                  ? !1
                  : "null" === r
                    ? null
                    : +r + "" === r
                      ? +r
                      : be.test(r)
                        ? i.parseJSON(r)
                        : r;
          } catch (f) {}
          i.data(n, t, r);
        } else r = void 0;
      }
      return r;
    }
    function fi(n) {
      for (var t in n)
        if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function tu(n, t, r, u) {
      if (ot(n)) {
        var s,
          e,
          h = i.expando,
          l = n.nodeType,
          o = l ? i.cache : n,
          f = l ? n[h] : n[h] && h;
        if (
          (f && o[f] && (u || o[f].data)) ||
          void 0 !== r ||
          "string" != typeof t
        )
          return (
            f || (f = l ? (n[h] = c.pop() || i.guid++) : h),
            o[f] || (o[f] = l ? {} : { toJSON: i.noop }),
            ("object" != typeof t && "function" != typeof t) ||
              (u
                ? (o[f] = i.extend(o[f], t))
                : (o[f].data = i.extend(o[f].data, t))),
            (e = o[f]),
            u || (e.data || (e.data = {}), (e = e.data)),
            void 0 !== r && (e[i.camelCase(t)] = r),
            "string" == typeof t
              ? ((s = e[t]), null == s && (s = e[i.camelCase(t)]))
              : (s = e),
            s
          );
      }
    }
    function iu(n, t, u) {
      if (ot(n)) {
        var o,
          s,
          h = n.nodeType,
          f = h ? i.cache : n,
          e = h ? n[i.expando] : i.expando;
        if (f[e]) {
          if (t && (o = u ? f[e] : f[e].data)) {
            for (
              i.isArray(t)
                ? (t = t.concat(i.map(t, i.camelCase)))
                : (t in o)
                  ? (t = [t])
                  : ((t = i.camelCase(t)), (t = (t in o) ? [t] : t.split(" "))),
                s = t.length;
              s--;

            )
              delete o[t[s]];
            if (u ? !fi(o) : !i.isEmptyObject(o)) return;
          }
          (u || (delete f[e].data, fi(f[e]))) &&
            (h
              ? i.cleanData([n], !0)
              : r.deleteExpando || f != f.window
                ? delete f[e]
                : (f[e] = void 0));
        }
      }
    }
    function ru(n, t, r, u) {
      var h,
        e = 1,
        l = 20,
        c = u
          ? function () {
              return u.cur();
            }
          : function () {
              return i.css(n, t, "");
            },
        s = c(),
        o = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
        f = (i.cssNumber[t] || ("px" !== o && +s)) && oi.exec(i.css(n, t));
      if (f && f[3] !== o) {
        o = o || f[3];
        r = r || [];
        f = +s || 1;
        do (e = e || ".5"), (f /= e), i.style(n, t, f + o);
        while (e !== (e = c() / s) && 1 !== e && --l);
      }
      return (
        r &&
          ((f = +f || +s || 0),
          (h = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
          u && ((u.unit = o), (u.start = f), (u.end = h))),
        h
      );
    }
    function ou(n) {
      var i = eu.split("|"),
        t = n.createDocumentFragment();
      if (t.createElement) while (i.length) t.createElement(i.pop());
      return t;
    }
    function f(n, t) {
      var e,
        u,
        o = 0,
        r =
          "undefined" != typeof n.getElementsByTagName
            ? n.getElementsByTagName(t || "*")
            : "undefined" != typeof n.querySelectorAll
              ? n.querySelectorAll(t || "*")
              : void 0;
      if (!r)
        for (r = [], e = n.childNodes || n; null != (u = e[o]); o++)
          !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
      return void 0 === t || (t && i.nodeName(n, t)) ? i.merge([n], r) : r;
    }
    function ci(n, t) {
      for (var u, r = 0; null != (u = n[r]); r++)
        i._data(u, "globalEval", !t || i._data(t[r], "globalEval"));
    }
    function de(n) {
      si.test(n.type) && (n.defaultChecked = n.checked);
    }
    function hu(n, t, u, e, s) {
      for (
        var l, h, k, c, w, b, v, d = n.length, y = ou(t), a = [], p = 0;
        d > p;
        p++
      )
        if (((h = n[p]), h || 0 === h))
          if ("object" === i.type(h)) i.merge(a, h.nodeType ? [h] : h);
          else if (su.test(h)) {
            for (
              c = c || y.appendChild(t.createElement("div")),
                w = (uu.exec(h) || ["", ""])[1].toLowerCase(),
                v = o[w] || o._default,
                c.innerHTML = v[1] + i.htmlPrefilter(h) + v[2],
                l = v[0];
              l--;

            )
              c = c.lastChild;
            if (
              (!r.leadingWhitespace &&
                hi.test(h) &&
                a.push(t.createTextNode(hi.exec(h)[0])),
              !r.tbody)
            )
              for (
                h =
                  "table" !== w || li.test(h)
                    ? "<table>" !== v[1] || li.test(h)
                      ? 0
                      : c
                    : c.firstChild,
                  l = h && h.childNodes.length;
                l--;

              )
                i.nodeName((b = h.childNodes[l]), "tbody") &&
                  !b.childNodes.length &&
                  h.removeChild(b);
            for (i.merge(a, c.childNodes), c.textContent = ""; c.firstChild; )
              c.removeChild(c.firstChild);
            c = y.lastChild;
          } else a.push(t.createTextNode(h));
      for (
        c && y.removeChild(c),
          r.appendChecked || i.grep(f(a, "input"), de),
          p = 0;
        (h = a[p++]);

      )
        if (e && i.inArray(h, e) > -1) s && s.push(h);
        else if (
          ((k = i.contains(h.ownerDocument, h)),
          (c = f(y.appendChild(h), "script")),
          k && ci(c),
          u)
        )
          for (l = 0; (h = c[l++]); ) fu.test(h.type || "") && u.push(h);
      return (c = null), y;
    }
    function vt() {
      return !0;
    }
    function rt() {
      return !1;
    }
    function au() {
      try {
        return u.activeElement;
      } catch (n) {}
    }
    function vi(n, t, r, u, f, e) {
      var o, s;
      if ("object" == typeof t) {
        "string" != typeof r && ((u = u || r), (r = void 0));
        for (s in t) vi(n, s, r, u, t[s], e);
        return n;
      }
      if (
        (null == u && null == f
          ? ((f = r), (u = r = void 0))
          : null == f &&
            ("string" == typeof r
              ? ((f = u), (u = void 0))
              : ((f = u), (u = r), (r = void 0))),
        f === !1)
      )
        f = rt;
      else if (!f) return n;
      return (
        1 === e &&
          ((o = f),
          (f = function (n) {
            return i().off(n), o.apply(this, arguments);
          }),
          (f.guid = o.guid || (o.guid = i.guid++))),
        n.each(function () {
          i.event.add(this, t, f, u, r);
        })
      );
    }
    function yu(n, t) {
      return i.nodeName(n, "table") &&
        i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? n.getElementsByTagName("tbody")[0] ||
            n.appendChild(n.ownerDocument.createElement("tbody"))
        : n;
    }
    function pu(n) {
      return (n.type = (null !== i.find.attr(n, "type")) + "/" + n.type), n;
    }
    function wu(n) {
      var t = fo.exec(n.type);
      return t ? (n.type = t[1]) : n.removeAttribute("type"), n;
    }
    function bu(n, t) {
      if (1 === t.nodeType && i.hasData(n)) {
        var u,
          f,
          o,
          s = i._data(n),
          r = i._data(t, s),
          e = s.events;
        if (e) {
          delete r.handle;
          r.events = {};
          for (u in e)
            for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f]);
        }
        r.data && (r.data = i.extend({}, r.data));
      }
    }
    function so(n, t) {
      var u, e, f;
      if (1 === t.nodeType) {
        if (((u = t.nodeName.toLowerCase()), !r.noCloneEvent && t[i.expando])) {
          f = i._data(t);
          for (e in f.events) i.removeEvent(t, e, f.handle);
          t.removeAttribute(i.expando);
        }
        "script" === u && t.text !== n.text
          ? ((pu(t).text = n.text), wu(t))
          : "object" === u
            ? (t.parentNode && (t.outerHTML = n.outerHTML),
              r.html5Clone &&
                n.innerHTML &&
                !i.trim(t.innerHTML) &&
                (t.innerHTML = n.innerHTML))
            : "input" === u && si.test(n.type)
              ? ((t.defaultChecked = t.checked = n.checked),
                t.value !== n.value && (t.value = n.value))
              : "option" === u
                ? (t.defaultSelected = t.selected = n.defaultSelected)
                : ("input" !== u && "textarea" !== u) ||
                  (t.defaultValue = n.defaultValue);
      }
    }
    function k(n, t, u, e) {
      t = sr.apply([], t);
      var l,
        o,
        a,
        h,
        p,
        c,
        s = 0,
        v = n.length,
        b = v - 1,
        y = t[0],
        w = i.isFunction(y);
      if (w || (v > 1 && "string" == typeof y && !r.checkClone && uo.test(y)))
        return n.each(function (i) {
          var r = n.eq(i);
          w && (t[0] = y.call(this, i, r.html()));
          k(r, t, u, e);
        });
      if (
        v &&
        ((c = hu(t, n[0].ownerDocument, !1, n, e)),
        (l = c.firstChild),
        1 === c.childNodes.length && (c = l),
        l || e)
      ) {
        for (h = i.map(f(c, "script"), pu), a = h.length; v > s; s++)
          (o = c),
            s !== b &&
              ((o = i.clone(o, !0, !0)), a && i.merge(h, f(o, "script"))),
            u.call(n[s], o, s);
        if (a)
          for (
            p = h[h.length - 1].ownerDocument, i.map(h, wu), s = 0;
            a > s;
            s++
          )
            (o = h[s]),
              fu.test(o.type || "") &&
                !i._data(o, "globalEval") &&
                i.contains(p, o) &&
                (o.src
                  ? i._evalUrl && i._evalUrl(o.src)
                  : i.globalEval(
                      (o.text || o.textContent || o.innerHTML || "").replace(
                        eo,
                        ""
                      )
                    ));
        c = l = null;
      }
      return n;
    }
    function ku(n, t, r) {
      for (var u, o = t ? i.filter(t, n) : n, e = 0; null != (u = o[e]); e++)
        r || 1 !== u.nodeType || i.cleanData(f(u)),
          u.parentNode &&
            (r && i.contains(u.ownerDocument, u) && ci(f(u, "script")),
            u.parentNode.removeChild(u));
      return n;
    }
    function du(n, t) {
      var r = i(t.createElement(n)).appendTo(t.body),
        u = i.css(r[0], "display");
      return r.detach(), u;
    }
    function yt(n) {
      var r = u,
        t = pi[n];
      return (
        t ||
          ((t = du(n, r)),
          ("none" !== t && t) ||
            ((ht = (
              ht || i("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(r.documentElement)),
            (r = (ht[0].contentWindow || ht[0].contentDocument).document),
            r.write(),
            r.close(),
            (t = du(n, r)),
            ht.detach()),
          (pi[n] = t)),
        t
      );
    }
    function bi(n, t) {
      return {
        get: function () {
          return n()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function ef(n) {
      if (n in ff) return n;
      for (var i = n.charAt(0).toUpperCase() + n.slice(1), t = uf.length; t--; )
        if (((n = uf[t] + i), n in ff)) return n;
    }
    function of(n, t) {
      for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++)
        (r = n[u]),
          r.style &&
            ((e[u] = i._data(r, "olddisplay")),
            (f = r.style.display),
            t
              ? (e[u] || "none" !== f || (r.style.display = ""),
                "" === r.style.display &&
                  st(r) &&
                  (e[u] = i._data(r, "olddisplay", yt(r.nodeName))))
              : ((o = st(r)),
                ((f && "none" !== f) || !o) &&
                  i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
      for (u = 0; s > u; u++)
        (r = n[u]),
          r.style &&
            ((t && "none" !== r.style.display && "" !== r.style.display) ||
              (r.style.display = t ? e[u] || "" : "none"));
      return n;
    }
    function sf(n, t, i) {
      var r = lo.exec(t);
      return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
    }
    function hf(n, t, r, u, f) {
      for (
        var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          o = 0;
        4 > e;
        e += 2
      )
        "margin" === r && (o += i.css(n, r + b[e], !0, f)),
          u
            ? ("content" === r && (o -= i.css(n, "padding" + b[e], !0, f)),
              "margin" !== r &&
                (o -= i.css(n, "border" + b[e] + "Width", !0, f)))
            : ((o += i.css(n, "padding" + b[e], !0, f)),
              "padding" !== r &&
                (o += i.css(n, "border" + b[e] + "Width", !0, f)));
      return o;
    }
    function cf(n, t, u) {
      var o = !0,
        f = "width" === t ? n.offsetWidth : n.offsetHeight,
        e = d(n),
        s = r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e);
      if (0 >= f || null == f) {
        if (
          ((f = p(n, t, e)),
          (0 > f || null == f) && (f = n.style[t]),
          pt.test(f))
        )
          return f;
        o = s && (r.boxSizingReliable() || f === n.style[t]);
        f = parseFloat(f) || 0;
      }
      return f + hf(n, t, u || (s ? "border" : "content"), o, e) + "px";
    }
    function e(n, t, i, r, u) {
      return new e.prototype.init(n, t, i, r, u);
    }
    function vf() {
      return (
        n.setTimeout(function () {
          ut = void 0;
        }),
        (ut = i.now())
      );
    }
    function bt(n, t) {
      var r,
        i = { height: n },
        u = 0;
      for (t = t ? 1 : 0; 4 > u; u += 2 - t)
        (r = b[u]), (i["margin" + r] = i["padding" + r] = n);
      return t && (i.opacity = i.width = n), i;
    }
    function yf(n, t, i) {
      for (
        var u,
          f = (h.tweeners[t] || []).concat(h.tweeners["*"]),
          r = 0,
          e = f.length;
        e > r;
        r++
      )
        if ((u = f[r].call(i, t, n))) return u;
    }
    function vo(n, t, u) {
      var f,
        a,
        p,
        v,
        s,
        w,
        h,
        b,
        l = this,
        y = {},
        o = n.style,
        c = n.nodeType && st(n),
        e = i._data(n, "fxshow");
      u.queue ||
        ((s = i._queueHooks(n, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (w = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || w();
          })),
        s.unqueued++,
        l.always(function () {
          l.always(function () {
            s.unqueued--;
            i.queue(n, "fx").length || s.empty.fire();
          });
        }));
      1 === n.nodeType &&
        ("height" in t || "width" in t) &&
        ((u.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (h = i.css(n, "display")),
        (b = "none" === h ? i._data(n, "olddisplay") || yt(n.nodeName) : h),
        "inline" === b &&
          "none" === i.css(n, "float") &&
          (r.inlineBlockNeedsLayout && "inline" !== yt(n.nodeName)
            ? (o.zoom = 1)
            : (o.display = "inline-block")));
      u.overflow &&
        ((o.overflow = "hidden"),
        r.shrinkWrapBlocks() ||
          l.always(function () {
            o.overflow = u.overflow[0];
            o.overflowX = u.overflow[1];
            o.overflowY = u.overflow[2];
          }));
      for (f in t)
        if (((a = t[f]), lf.exec(a))) {
          if (
            (delete t[f],
            (p = p || "toggle" === a),
            a === (c ? "hide" : "show"))
          ) {
            if ("show" !== a || !e || void 0 === e[f]) continue;
            c = !0;
          }
          y[f] = (e && e[f]) || i.style(n, f);
        } else h = void 0;
      if (i.isEmptyObject(y))
        "inline" === ("none" === h ? yt(n.nodeName) : h) && (o.display = h);
      else {
        e ? "hidden" in e && (c = e.hidden) : (e = i._data(n, "fxshow", {}));
        p && (e.hidden = !c);
        c
          ? i(n).show()
          : l.done(function () {
              i(n).hide();
            });
        l.done(function () {
          var t;
          i._removeData(n, "fxshow");
          for (t in y) i.style(n, t, y[t]);
        });
        for (f in y)
          (v = yf(c ? e[f] : 0, f, l)),
            f in e ||
              ((e[f] = v.start),
              c &&
                ((v.end = v.start),
                (v.start = "width" === f || "height" === f ? 1 : 0)));
      }
    }
    function yo(n, t) {
      var r, f, e, u, o;
      for (r in n)
        if (
          ((f = i.camelCase(r)),
          (e = t[f]),
          (u = n[r]),
          i.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
          r !== f && ((n[f] = u), delete n[r]),
          (o = i.cssHooks[f]),
          o && "expand" in o)
        ) {
          u = o.expand(u);
          delete n[f];
          for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
        } else t[f] = e;
    }
    function h(n, t, r) {
      var e,
        o,
        s = 0,
        a = h.prefilters.length,
        f = i.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var s = ut || vf(),
              t = Math.max(0, u.startTime + u.duration - s),
              h = t / u.duration || 0,
              i = 1 - h,
              r = 0,
              e = u.tweens.length;
            e > r;
            r++
          )
            u.tweens[r].run(i);
          return (
            f.notifyWith(n, [u, i, t]),
            1 > i && e ? t : (f.resolveWith(n, [u]), !1)
          );
        },
        u = f.promise({
          elem: n,
          props: i.extend({}, t),
          opts: i.extend(
            !0,
            { specialEasing: {}, easing: i.easing._default },
            r
          ),
          originalProperties: t,
          originalOptions: r,
          startTime: ut || vf(),
          duration: r.duration,
          tweens: [],
          createTween: function (t, r) {
            var f = i.Tween(
              n,
              u.opts,
              t,
              r,
              u.opts.specialEasing[t] || u.opts.easing
            );
            return u.tweens.push(f), f;
          },
          stop: function (t) {
            var i = 0,
              r = t ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; r > i; i++) u.tweens[i].run(1);
            return (
              t
                ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t]))
                : f.rejectWith(n, [u, t]),
              this
            );
          },
        }),
        c = u.props;
      for (yo(c, u.opts.specialEasing); a > s; s++)
        if ((e = h.prefilters[s].call(u, n, c, u.opts)))
          return (
            i.isFunction(e.stop) &&
              (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)),
            e
          );
      return (
        i.map(c, yf, u),
        i.isFunction(u.opts.start) && u.opts.start.call(n, u),
        i.fx.timer(i.extend(l, { elem: n, anim: u, queue: u.opts.queue })),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always)
      );
    }
    function nt(n) {
      return i.attr(n, "class") || "";
    }
    function re(n) {
      return function (t, r) {
        "string" != typeof t && ((r = t), (t = "*"));
        var u,
          f = 0,
          e = t.toLowerCase().match(s) || [];
        if (i.isFunction(r))
          while ((u = e[f++]))
            "+" === u.charAt(0)
              ? ((u = u.slice(1) || "*"), (n[u] = n[u] || []).unshift(r))
              : (n[u] = n[u] || []).push(r);
      };
    }
    function ue(n, t, r, u) {
      function e(s) {
        var h;
        return (
          (f[s] = !0),
          i.each(n[s] || [], function (n, i) {
            var s = i(t, r, u);
            return "string" != typeof s || o || f[s]
              ? o
                ? !(h = s)
                : void 0
              : (t.dataTypes.unshift(s), e(s), !1);
          }),
          h
        );
      }
      var f = {},
        o = n === tr;
      return e(t.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function rr(n, t) {
      var u,
        r,
        f = i.ajaxSettings.flatOptions || {};
      for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
      return u && i.extend(!0, n, u), n;
    }
    function ts(n, t, i) {
      for (var o, e, u, f, s = n.contents, r = n.dataTypes; "*" === r[0]; )
        r.shift(),
          void 0 === e &&
            (e = n.mimeType || t.getResponseHeader("Content-Type"));
      if (e)
        for (f in s)
          if (s[f] && s[f].test(e)) {
            r.unshift(f);
            break;
          }
      if (r[0] in i) u = r[0];
      else {
        for (f in i) {
          if (!r[0] || n.converters[f + " " + r[0]]) {
            u = f;
            break;
          }
          o || (o = f);
        }
        u = u || o;
      }
      if (u) return u !== r[0] && r.unshift(u), i[u];
    }
    function is(n, t, i, r) {
      var h,
        u,
        f,
        s,
        e,
        o = {},
        c = n.dataTypes.slice();
      if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
      for (u = c.shift(); u; )
        if (
          (n.responseFields[u] && (i[n.responseFields[u]] = t),
          !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
          (e = u),
          (u = c.shift()))
        )
          if ("*" === u) u = e;
          else if ("*" !== e && e !== u) {
            if (((f = o[e + " " + u] || o["* " + u]), !f))
              for (h in o)
                if (
                  ((s = h.split(" ")),
                  s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]]))
                ) {
                  f === !0
                    ? (f = o[h])
                    : o[h] !== !0 && ((u = s[0]), c.unshift(s[1]));
                  break;
                }
            if (f !== !0)
              if (f && n.throws) t = f(t);
              else
                try {
                  t = f(t);
                } catch (l) {
                  return {
                    state: "parsererror",
                    error: f ? l : "No conversion from " + e + " to " + u,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function rs(n) {
      return (n.style && n.style.display) || i.css(n, "display");
    }
    function us(n) {
      if (!i.contains(n.ownerDocument || u, n)) return !0;
      while (n && 1 === n.nodeType) {
        if ("none" === rs(n) || "hidden" === n.type) return !0;
        n = n.parentNode;
      }
      return !1;
    }
    function ur(n, t, r, u) {
      var f;
      if (i.isArray(t))
        i.each(t, function (t, i) {
          r || es.test(n)
            ? u(n, i)
            : ur(
                n + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                i,
                r,
                u
              );
        });
      else if (r || "object" !== i.type(t)) u(n, t);
      else for (f in t) ur(n + "[" + f + "]", t[f], r, u);
    }
    function fr() {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    }
    function ee() {
      try {
        return new n.ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {}
    }
    function oe(n) {
      return i.isWindow(n)
        ? n
        : 9 === n.nodeType
          ? n.defaultView || n.parentWindow
          : !1;
    }
    var c = [],
      u = n.document,
      a = c.slice,
      sr = c.concat,
      ti = c.push,
      hr = c.indexOf,
      lt = {},
      ce = lt.toString,
      tt = lt.hasOwnProperty,
      r = {},
      cr = "1.12.4",
      i = function (n, t) {
        return new i.fn.init(n, t);
      },
      le = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      ve = /-([\da-z])/gi,
      ye = function (n, t) {
        return t.toUpperCase();
      },
      w,
      ui,
      yr,
      pr,
      wr,
      br,
      s,
      at,
      gr,
      o,
      su,
      li,
      ht,
      pi,
      d,
      p,
      tf,
      ut,
      wt,
      lf,
      af,
      pf,
      wf,
      kf,
      df,
      dt,
      er,
      ni,
      or,
      se,
      he;
    i.fn = i.prototype = {
      jquery: cr,
      constructor: i,
      selector: "",
      length: 0,
      toArray: function () {
        return a.call(this);
      },
      get: function (n) {
        return null != n
          ? 0 > n
            ? this[n + this.length]
            : this[n]
          : a.call(this);
      },
      pushStack: function (n) {
        var t = i.merge(this.constructor(), n);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (n) {
        return i.each(this, n);
      },
      map: function (n) {
        return this.pushStack(
          i.map(this, function (t, i) {
            return n.call(t, i, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (n) {
        var i = this.length,
          t = +n + (0 > n ? i : 0);
        return this.pushStack(t >= 0 && i > t ? [this[t]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ti,
      sort: c.sort,
      splice: c.splice,
    };
    i.extend = i.fn.extend = function () {
      var r,
        e,
        t,
        f,
        o,
        s,
        n = arguments[0] || {},
        u = 1,
        c = arguments.length,
        h = !1;
      for (
        "boolean" == typeof n && ((h = n), (n = arguments[u] || {}), u++),
          "object" == typeof n || i.isFunction(n) || (n = {}),
          u === c && ((n = this), u--);
        c > u;
        u++
      )
        if (null != (o = arguments[u]))
          for (f in o)
            (r = n[f]),
              (t = o[f]),
              n !== t &&
                (h && t && (i.isPlainObject(t) || (e = i.isArray(t)))
                  ? (e
                      ? ((e = !1), (s = r && i.isArray(r) ? r : []))
                      : (s = r && i.isPlainObject(r) ? r : {}),
                    (n[f] = i.extend(h, s, t)))
                  : void 0 !== t && (n[f] = t));
      return n;
    };
    i.extend({
      expando: "jQuery" + (cr + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (n) {
        throw new Error(n);
      },
      noop: function () {},
      isFunction: function (n) {
        return "function" === i.type(n);
      },
      isArray:
        Array.isArray ||
        function (n) {
          return "array" === i.type(n);
        },
      isWindow: function (n) {
        return null != n && n == n.window;
      },
      isNumeric: function (n) {
        var t = n && n.toString();
        return !i.isArray(n) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (n) {
        for (var t in n) return !1;
        return !0;
      },
      isPlainObject: function (n) {
        var t;
        if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n))
          return !1;
        try {
          if (
            n.constructor &&
            !tt.call(n, "constructor") &&
            !tt.call(n.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (u) {
          return !1;
        }
        if (!r.ownFirst) for (t in n) return tt.call(n, t);
        for (t in n);
        return void 0 === t || tt.call(n, t);
      },
      type: function (n) {
        return null == n
          ? n + ""
          : "object" == typeof n || "function" == typeof n
            ? lt[ce.call(n)] || "object"
            : typeof n;
      },
      globalEval: function (t) {
        t &&
          i.trim(t) &&
          (
            n.execScript ||
            function (t) {
              n.eval.call(n, t);
            }
          )(t);
      },
      camelCase: function (n) {
        return n.replace(ae, "ms-").replace(ve, ye);
      },
      nodeName: function (n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (n, t) {
        var r,
          i = 0;
        if (ii(n)) {
          for (r = n.length; r > i; i++)
            if (t.call(n[i], i, n[i]) === !1) break;
        } else for (i in n) if (t.call(n[i], i, n[i]) === !1) break;
        return n;
      },
      trim: function (n) {
        return null == n ? "" : (n + "").replace(le, "");
      },
      makeArray: function (n, t) {
        var r = t || [];
        return (
          null != n &&
            (ii(Object(n))
              ? i.merge(r, "string" == typeof n ? [n] : n)
              : ti.call(r, n)),
          r
        );
      },
      inArray: function (n, t, i) {
        var r;
        if (t) {
          if (hr) return hr.call(t, n, i);
          for (
            r = t.length, i = i ? (0 > i ? Math.max(0, r + i) : i) : 0;
            r > i;
            i++
          )
            if (i in t && t[i] === n) return i;
        }
        return -1;
      },
      merge: function (n, t) {
        for (var r = +t.length, i = 0, u = n.length; r > i; ) n[u++] = t[i++];
        if (r !== r) while (void 0 !== t[i]) n[u++] = t[i++];
        return (n.length = u), n;
      },
      grep: function (n, t, i) {
        for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++)
          (u = !t(n[r], r)), u !== o && f.push(n[r]);
        return f;
      },
      map: function (n, t, i) {
        var e,
          u,
          r = 0,
          f = [];
        if (ii(n))
          for (e = n.length; e > r; r++)
            (u = t(n[r], r, i)), null != u && f.push(u);
        else for (r in n) (u = t(n[r], r, i)), null != u && f.push(u);
        return sr.apply([], f);
      },
      guid: 1,
      proxy: function (n, t) {
        var u, r, f;
        return (
          "string" == typeof t && ((f = n[t]), (t = n), (n = f)),
          i.isFunction(n)
            ? ((u = a.call(arguments, 2)),
              (r = function () {
                return n.apply(t || this, u.concat(a.call(arguments)));
              }),
              (r.guid = n.guid = n.guid || i.guid++),
              r)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: r,
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = c[Symbol.iterator]);
    i.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (n, t) {
        lt["[object " + t + "]"] = t.toLowerCase();
      }
    );
    w = (function (n) {
      function u(n, t, r, u) {
        var l,
          w,
          a,
          s,
          nt,
          d,
          y,
          g,
          p = t && t.ownerDocument,
          v = t ? t.nodeType : 9;
        if (
          ((r = r || []),
          "string" != typeof n || !n || (1 !== v && 9 !== v && 11 !== v))
        )
          return r;
        if (
          !u &&
          ((t ? t.ownerDocument || t : c) !== i && b(t), (t = t || i), h)
        ) {
          if (11 !== v && (d = sr.exec(n)))
            if ((l = d[1])) {
              if (9 === v) {
                if (!(a = t.getElementById(l))) return r;
                if (a.id === l) return r.push(a), r;
              } else if (
                p &&
                (a = p.getElementById(l)) &&
                et(t, a) &&
                a.id === l
              )
                return r.push(a), r;
            } else {
              if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
              if (
                (l = d[3]) &&
                f.getElementsByClassName &&
                t.getElementsByClassName
              )
                return k.apply(r, t.getElementsByClassName(l)), r;
            }
          if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
            if (1 !== v) (p = t), (g = n);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (s = t.getAttribute("id"))
                  ? (s = s.replace(hr, "\\$&"))
                  : t.setAttribute("id", (s = e)),
                  y = ft(n),
                  w = y.length,
                  nt = yi.test(s) ? "#" + s : "[id='" + s + "']";
                w--;

              )
                y[w] = nt + " " + yt(y[w]);
              g = y.join(",");
              p = (gt.test(n) && ii(t.parentNode)) || t;
            }
            if (g)
              try {
                return k.apply(r, p.querySelectorAll(g)), r;
              } catch (tt) {
              } finally {
                s === e && t.removeAttribute("id");
              }
          }
        }
        return si(n.replace(at, "$1"), t, r, u);
      }
      function ni() {
        function n(r, u) {
          return (
            i.push(r + " ") > t.cacheLength && delete n[i.shift()],
            (n[r + " "] = u)
          );
        }
        var i = [];
        return n;
      }
      function l(n) {
        return (n[e] = !0), n;
      }
      function a(n) {
        var t = i.createElement("div");
        try {
          return !!n(t);
        } catch (r) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
          t = null;
        }
      }
      function ti(n, i) {
        for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
      }
      function wi(n, t) {
        var i = t && n,
          r =
            i &&
            1 === n.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || li) - (~n.sourceIndex || li);
        if (r) return r;
        if (i) while ((i = i.nextSibling)) if (i === t) return -1;
        return n ? 1 : -1;
      }
      function cr(n) {
        return function (t) {
          var i = t.nodeName.toLowerCase();
          return "input" === i && t.type === n;
        };
      }
      function lr(n) {
        return function (t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === n;
        };
      }
      function it(n) {
        return l(function (t) {
          return (
            (t = +t),
            l(function (i, r) {
              for (var u, f = n([], i.length, t), e = f.length; e--; )
                i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
            })
          );
        });
      }
      function ii(n) {
        return n && "undefined" != typeof n.getElementsByTagName && n;
      }
      function bi() {}
      function yt(n) {
        for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
        return i;
      }
      function ri(n, t, i) {
        var r = t.dir,
          u = i && "parentNode" === r,
          f = ki++;
        return t.first
          ? function (t, i, f) {
              while ((t = t[r])) if (1 === t.nodeType || u) return n(t, i, f);
            }
          : function (t, i, o) {
              var s,
                h,
                c,
                l = [v, f];
              if (o) {
                while ((t = t[r]))
                  if ((1 === t.nodeType || u) && n(t, i, o)) return !0;
              } else
                while ((t = t[r]))
                  if (1 === t.nodeType || u) {
                    if (
                      ((c = t[e] || (t[e] = {})),
                      (h = c[t.uniqueID] || (c[t.uniqueID] = {})),
                      (s = h[r]) && s[0] === v && s[1] === f)
                    )
                      return (l[2] = s[2]);
                    if (((h[r] = l), (l[2] = n(t, i, o)))) return !0;
                  }
            };
      }
      function ui(n) {
        return n.length > 1
          ? function (t, i, r) {
              for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
              return !0;
            }
          : n[0];
      }
      function ar(n, t, i) {
        for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
        return i;
      }
      function pt(n, t, i, r, u) {
        for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)
          (e = n[f]) && ((i && !i(e, r, u)) || (o.push(e), h && t.push(f)));
        return o;
      }
      function fi(n, t, i, r, u, f) {
        return (
          r && !r[e] && (r = fi(r)),
          u && !u[e] && (u = fi(u, f)),
          l(function (f, e, o, s) {
            var l,
              c,
              a,
              p = [],
              y = [],
              w = e.length,
              b = f || ar(t || "*", o.nodeType ? [o] : o, []),
              v = !n || (!f && t) ? b : pt(b, p, n, o, s),
              h = i ? (u || (f ? n : w || r) ? [] : e) : v;
            if ((i && i(v, h, o, s), r))
              for (l = pt(h, y), r(l, [], o, s), c = l.length; c--; )
                (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
            if (f) {
              if (u || n) {
                if (u) {
                  for (l = [], c = h.length; c--; )
                    (a = h[c]) && l.push((v[c] = a));
                  u(null, (h = []), l, s);
                }
                for (c = h.length; c--; )
                  (a = h[c]) &&
                    (l = u ? nt(f, a) : p[c]) > -1 &&
                    (f[l] = !(e[l] = a));
              }
            } else
              (h = pt(h === e ? h.splice(w, h.length) : h)),
                u ? u(null, e, h, s) : k.apply(e, h);
          })
        );
      }
      function ei(n) {
        for (
          var o,
            u,
            r,
            s = n.length,
            h = t.relative[n[0].type],
            c = h || t.relative[" "],
            i = h ? 1 : 0,
            l = ri(
              function (n) {
                return n === o;
              },
              c,
              !0
            ),
            a = ri(
              function (n) {
                return nt(o, n) > -1;
              },
              c,
              !0
            ),
            f = [
              function (n, t, i) {
                var r =
                  (!h && (i || t !== ht)) ||
                  ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return (o = null), r;
              },
            ];
          s > i;
          i++
        )
          if ((u = t.relative[n[i].type])) f = [ri(ui(f), u)];
          else {
            if (((u = t.filter[n[i].type].apply(null, n[i].matches)), u[e])) {
              for (r = ++i; s > r; r++) if (t.relative[n[r].type]) break;
              return fi(
                i > 1 && ui(f),
                i > 1 &&
                  yt(
                    n
                      .slice(0, i - 1)
                      .concat({ value: " " === n[i - 2].type ? "*" : "" })
                  ).replace(at, "$1"),
                u,
                r > i && ei(n.slice(i, r)),
                s > r && ei((n = n.slice(r))),
                s > r && yt(n)
              );
            }
            f.push(u);
          }
        return ui(f);
      }
      function vr(n, r) {
        var f = r.length > 0,
          e = n.length > 0,
          o = function (o, s, c, l, a) {
            var y,
              nt,
              d,
              g = 0,
              p = "0",
              tt = o && [],
              w = [],
              it = ht,
              rt = o || (e && t.find.TAG("*", a)),
              ut = (v += null == it ? 1 : Math.random() || 0.1),
              ft = rt.length;
            for (
              a && (ht = s === i || s || a);
              p !== ft && null != (y = rt[p]);
              p++
            ) {
              if (e && y) {
                for (
                  nt = 0, s || y.ownerDocument === i || (b(y), (c = !h));
                  (d = n[nt++]);

                )
                  if (d(y, s || i, c)) {
                    l.push(y);
                    break;
                  }
                a && (v = ut);
              }
              f && ((y = !d && y) && g--, o && tt.push(y));
            }
            if (((g += p), f && p !== g)) {
              for (nt = 0; (d = r[nt++]); ) d(tt, w, s, c);
              if (o) {
                if (g > 0) while (p--) tt[p] || w[p] || (w[p] = gi.call(l));
                w = pt(w);
              }
              k.apply(l, w);
              a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l);
            }
            return a && ((v = ut), (ht = it)), tt;
          };
        return f ? l(o) : o;
      }
      var rt,
        f,
        t,
        st,
        oi,
        ft,
        wt,
        si,
        ht,
        w,
        ut,
        b,
        i,
        s,
        h,
        o,
        d,
        ct,
        et,
        e = "sizzle" + 1 * new Date(),
        c = n.document,
        v = 0,
        ki = 0,
        hi = ni(),
        ci = ni(),
        lt = ni(),
        bt = function (n, t) {
          return n === t && (ut = !0), 0;
        },
        li = -2147483648,
        di = {}.hasOwnProperty,
        g = [],
        gi = g.pop,
        nr = g.push,
        k = g.push,
        ai = g.slice,
        nt = function (n, t) {
          for (var i = 0, r = n.length; r > i; i++) if (n[i] === t) return i;
          return -1;
        },
        kt =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        r = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        vi =
          "\\[" +
          r +
          "*(" +
          tt +
          ")(?:" +
          r +
          "*([*^$|!~]?=)" +
          r +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          tt +
          "))|)" +
          r +
          "*\\]",
        dt =
          ":(" +
          tt +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          vi +
          ")*)|.*)\\)|)",
        tr = new RegExp(r + "+", "g"),
        at = new RegExp(
          "^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$",
          "g"
        ),
        ir = new RegExp("^" + r + "*," + r + "*"),
        rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
        ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
        fr = new RegExp(dt),
        yi = new RegExp("^" + tt + "$"),
        vt = {
          ID: new RegExp("^#(" + tt + ")"),
          CLASS: new RegExp("^\\.(" + tt + ")"),
          TAG: new RegExp("^(" + tt + "|[*])"),
          ATTR: new RegExp("^" + vi),
          PSEUDO: new RegExp("^" + dt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              r +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              r +
              "*(?:([+-]|)" +
              r +
              "*(\\d+)|))" +
              r +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + kt + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              r +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              r +
              "*((?:-\\d)?\\d*)" +
              r +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        er = /^(?:input|select|textarea|button)$/i,
        or = /^h\d$/i,
        ot = /^[^{]+\{\s*\[native \w/,
        sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        gt = /[+~]/,
        hr = /'|\\/g,
        y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
        p = function (n, t, i) {
          var r = "0x" + t - 65536;
          return r !== r || i
            ? t
            : 0 > r
              ? String.fromCharCode(r + 65536)
              : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        },
        pi = function () {
          b();
        };
      try {
        k.apply((g = ai.call(c.childNodes)), c.childNodes);
        g[c.childNodes.length].nodeType;
      } catch (yr) {
        k = {
          apply: g.length
            ? function (n, t) {
                nr.apply(n, ai.call(t));
              }
            : function (n, t) {
                for (var i = n.length, r = 0; (n[i++] = t[r++]); );
                n.length = i - 1;
              },
        };
      }
      f = u.support = {};
      oi = u.isXML = function (n) {
        var t = n && (n.ownerDocument || n).documentElement;
        return t ? "HTML" !== t.nodeName : !1;
      };
      b = u.setDocument = function (n) {
        var v,
          u,
          l = n ? n.ownerDocument || n : c;
        return l !== i && 9 === l.nodeType && l.documentElement
          ? ((i = l),
            (s = i.documentElement),
            (h = !oi(i)),
            (u = i.defaultView) &&
              u.top !== u &&
              (u.addEventListener
                ? u.addEventListener("unload", pi, !1)
                : u.attachEvent && u.attachEvent("onunload", pi)),
            (f.attributes = a(function (n) {
              return (n.className = "i"), !n.getAttribute("className");
            })),
            (f.getElementsByTagName = a(function (n) {
              return (
                n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
              );
            })),
            (f.getElementsByClassName = ot.test(i.getElementsByClassName)),
            (f.getById = a(function (n) {
              return (
                (s.appendChild(n).id = e),
                !i.getElementsByName || !i.getElementsByName(e).length
              );
            })),
            f.getById
              ? ((t.find.ID = function (n, t) {
                  if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : [];
                  }
                }),
                (t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    return n.getAttribute("id") === t;
                  };
                }))
              : (delete t.find.ID,
                (t.filter.ID = function (n) {
                  var t = n.replace(y, p);
                  return function (n) {
                    var i =
                      "undefined" != typeof n.getAttributeNode &&
                      n.getAttributeNode("id");
                    return i && i.value === t;
                  };
                })),
            (t.find.TAG = f.getElementsByTagName
              ? function (n, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(n)
                    : f.qsa
                      ? t.querySelectorAll(n)
                      : void 0;
                }
              : function (n, t) {
                  var i,
                    r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                  if ("*" === n) {
                    while ((i = u[f++])) 1 === i.nodeType && r.push(i);
                    return r;
                  }
                  return u;
                }),
            (t.find.CLASS =
              f.getElementsByClassName &&
              function (n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                  return t.getElementsByClassName(n);
              }),
            (d = []),
            (o = []),
            (f.qsa = ot.test(i.querySelectorAll)) &&
              (a(function (n) {
                s.appendChild(n).innerHTML =
                  "<a id='" +
                  e +
                  "'></a><select id='" +
                  e +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                n.querySelectorAll("[msallowcapture^='']").length &&
                  o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length ||
                  o.push("\\[" + r + "*(?:value|" + kt + ")");
                n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + e + "+*").length ||
                  o.push(".#.+[+~]");
              }),
              a(function (n) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length &&
                  o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length ||
                  o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:");
              })),
            (f.matchesSelector = ot.test(
              (ct =
                s.matches ||
                s.webkitMatchesSelector ||
                s.mozMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector)
            )) &&
              a(function (n) {
                f.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                d.push("!=", dt);
              }),
            (o = o.length && new RegExp(o.join("|"))),
            (d = d.length && new RegExp(d.join("|"))),
            (v = ot.test(s.compareDocumentPosition)),
            (et =
              v || ot.test(s.contains)
                ? function (n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                      i = t && t.parentNode;
                    return (
                      n === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(r.contains
                          ? r.contains(i)
                          : n.compareDocumentPosition &&
                            16 & n.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (n, t) {
                    if (t) while ((t = t.parentNode)) if (t === n) return !0;
                    return !1;
                  }),
            (bt = v
              ? function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r =
                    !n.compareDocumentPosition - !t.compareDocumentPosition;
                  return r
                    ? r
                    : ((r =
                        (n.ownerDocument || n) === (t.ownerDocument || t)
                          ? n.compareDocumentPosition(t)
                          : 1),
                      1 & r ||
                      (!f.sortDetached && t.compareDocumentPosition(n) === r)
                        ? n === i || (n.ownerDocument === c && et(c, n))
                          ? -1
                          : t === i || (t.ownerDocument === c && et(c, t))
                            ? 1
                            : w
                              ? nt(w, n) - nt(w, t)
                              : 0
                        : 4 & r
                          ? -1
                          : 1);
                }
              : function (n, t) {
                  if (n === t) return (ut = !0), 0;
                  var r,
                    u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                  if (!o || !s)
                    return n === i
                      ? -1
                      : t === i
                        ? 1
                        : o
                          ? -1
                          : s
                            ? 1
                            : w
                              ? nt(w, n) - nt(w, t)
                              : 0;
                  if (o === s) return wi(n, t);
                  for (r = n; (r = r.parentNode); ) f.unshift(r);
                  for (r = t; (r = r.parentNode); ) e.unshift(r);
                  while (f[u] === e[u]) u++;
                  return u
                    ? wi(f[u], e[u])
                    : f[u] === c
                      ? -1
                      : e[u] === c
                        ? 1
                        : 0;
                }),
            i)
          : i;
      };
      u.matches = function (n, t) {
        return u(n, null, null, t);
      };
      u.matchesSelector = function (n, t) {
        if (
          ((n.ownerDocument || n) !== i && b(n),
          (t = t.replace(ur, "='$1']")),
          f.matchesSelector &&
            h &&
            !lt[t + " "] &&
            (!d || !d.test(t)) &&
            (!o || !o.test(t)))
        )
          try {
            var r = ct.call(n, t);
            if (
              r ||
              f.disconnectedMatch ||
              (n.document && 11 !== n.document.nodeType)
            )
              return r;
          } catch (e) {}
        return u(t, i, null, [n]).length > 0;
      };
      u.contains = function (n, t) {
        return (n.ownerDocument || n) !== i && b(n), et(n, t);
      };
      u.attr = function (n, r) {
        (n.ownerDocument || n) !== i && b(n);
        var e = t.attrHandle[r.toLowerCase()],
          u =
            e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
        return void 0 !== u
          ? u
          : f.attributes || !h
            ? n.getAttribute(r)
            : (u = n.getAttributeNode(r)) && u.specified
              ? u.value
              : null;
      };
      u.error = function (n) {
        throw new Error("Syntax error, unrecognized expression: " + n);
      };
      u.uniqueSort = function (n) {
        var r,
          u = [],
          t = 0,
          i = 0;
        if (
          ((ut = !f.detectDuplicates),
          (w = !f.sortStable && n.slice(0)),
          n.sort(bt),
          ut)
        ) {
          while ((r = n[i++])) r === n[i] && (t = u.push(i));
          while (t--) n.splice(u[t], 1);
        }
        return (w = null), n;
      };
      st = u.getText = function (n) {
        var r,
          i = "",
          u = 0,
          t = n.nodeType;
        if (t) {
          if (1 === t || 9 === t || 11 === t) {
            if ("string" == typeof n.textContent) return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
          } else if (3 === t || 4 === t) return n.nodeValue;
        } else while ((r = n[u++])) i += st(r);
        return i;
      };
      t = u.selectors = {
        cacheLength: 50,
        createPseudo: l,
        match: vt,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (n) {
            return (
              (n[1] = n[1].replace(y, p)),
              (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)),
              "~=" === n[2] && (n[3] = " " + n[3] + " "),
              n.slice(0, 4)
            );
          },
          CHILD: function (n) {
            return (
              (n[1] = n[1].toLowerCase()),
              "nth" === n[1].slice(0, 3)
                ? (n[3] || u.error(n[0]),
                  (n[4] = +(n[4]
                    ? n[5] + (n[6] || 1)
                    : 2 * ("even" === n[3] || "odd" === n[3]))),
                  (n[5] = +(n[7] + n[8] || "odd" === n[3])))
                : n[3] && u.error(n[0]),
              n
            );
          },
          PSEUDO: function (n) {
            var i,
              t = !n[6] && n[2];
            return vt.CHILD.test(n[0])
              ? null
              : (n[3]
                  ? (n[2] = n[4] || n[5] || "")
                  : t &&
                    fr.test(t) &&
                    (i = ft(t, !0)) &&
                    (i = t.indexOf(")", t.length - i) - t.length) &&
                    ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
                n.slice(0, 3));
          },
        },
        filter: {
          TAG: function (n) {
            var t = n.replace(y, p).toLowerCase();
            return "*" === n
              ? function () {
                  return !0;
                }
              : function (n) {
                  return n.nodeName && n.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (n) {
            var t = hi[n + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
                hi(n, function (n) {
                  return t.test(
                    ("string" == typeof n.className && n.className) ||
                      ("undefined" != typeof n.getAttribute &&
                        n.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, t, i) {
            return function (r) {
              var f = u.attr(r, n);
              return null == f
                ? "!=" === t
                : t
                  ? ((f += ""),
                    "=" === t
                      ? f === i
                      : "!=" === t
                        ? f !== i
                        : "^=" === t
                          ? i && 0 === f.indexOf(i)
                          : "*=" === t
                            ? i && f.indexOf(i) > -1
                            : "$=" === t
                              ? i && f.slice(-i.length) === i
                              : "~=" === t
                                ? (" " + f.replace(tr, " ") + " ").indexOf(i) >
                                  -1
                                : "|=" === t
                                  ? f === i ||
                                    f.slice(0, i.length + 1) === i + "-"
                                  : !1)
                  : !0;
            };
          },
          CHILD: function (n, t, i, r, u) {
            var s = "nth" !== n.slice(0, 3),
              o = "last" !== n.slice(-4),
              f = "of-type" === t;
            return 1 === r && 0 === u
              ? function (n) {
                  return !!n.parentNode;
                }
              : function (t, i, h) {
                  var p,
                    w,
                    y,
                    c,
                    a,
                    b,
                    k = s !== o ? "nextSibling" : "previousSibling",
                    d = t.parentNode,
                    nt = f && t.nodeName.toLowerCase(),
                    g = !h && !f,
                    l = !1;
                  if (d) {
                    if (s) {
                      while (k) {
                        for (c = t; (c = c[k]); )
                          if (
                            f
                              ? c.nodeName.toLowerCase() === nt
                              : 1 === c.nodeType
                          )
                            return !1;
                        b = k = "only" === n && !b && "nextSibling";
                      }
                      return !0;
                    }
                    if (((b = [o ? d.firstChild : d.lastChild]), o && g)) {
                      for (
                        c = d,
                          y = c[e] || (c[e] = {}),
                          w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                          p = w[n] || [],
                          a = p[0] === v && p[1],
                          l = a && p[2],
                          c = a && d.childNodes[a];
                        (c = (++a && c && c[k]) || (l = a = 0) || b.pop());

                      )
                        if (1 === c.nodeType && ++l && c === t) {
                          w[n] = [v, a, l];
                          break;
                        }
                    } else if (
                      (g &&
                        ((c = t),
                        (y = c[e] || (c[e] = {})),
                        (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                        (p = w[n] || []),
                        (a = p[0] === v && p[1]),
                        (l = a)),
                      l === !1)
                    )
                      while ((c = (++a && c && c[k]) || (l = a = 0) || b.pop()))
                        if (
                          (f
                            ? c.nodeName.toLowerCase() === nt
                            : 1 === c.nodeType) &&
                          ++l &&
                          (g &&
                            ((y = c[e] || (c[e] = {})),
                            (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                            (w[n] = [v, l])),
                          c === t)
                        )
                          break;
                    return (l -= u), l === r || (l % r == 0 && l / r >= 0);
                  }
                };
          },
          PSEUDO: function (n, i) {
            var f,
              r =
                t.pseudos[n] ||
                t.setFilters[n.toLowerCase()] ||
                u.error("unsupported pseudo: " + n);
            return r[e]
              ? r(i)
              : r.length > 1
                ? ((f = [n, n, "", i]),
                  t.setFilters.hasOwnProperty(n.toLowerCase())
                    ? l(function (n, t) {
                        for (var u, f = r(n, i), e = f.length; e--; )
                          (u = nt(n, f[e])), (n[u] = !(t[u] = f[e]));
                      })
                    : function (n) {
                        return r(n, 0, f);
                      })
                : r;
          },
        },
        pseudos: {
          not: l(function (n) {
            var t = [],
              r = [],
              i = wt(n.replace(at, "$1"));
            return i[e]
              ? l(function (n, t, r, u) {
                  for (var e, o = i(n, null, u, []), f = n.length; f--; )
                    (e = o[f]) && (n[f] = !(t[f] = e));
                })
              : function (n, u, f) {
                  return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
                };
          }),
          has: l(function (n) {
            return function (t) {
              return u(n, t).length > 0;
            };
          }),
          contains: l(function (n) {
            return (
              (n = n.replace(y, p)),
              function (t) {
                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1;
              }
            );
          }),
          lang: l(function (n) {
            return (
              yi.test(n || "") || u.error("unsupported lang: " + n),
              (n = n.replace(y, p).toLowerCase()),
              function (t) {
                var i;
                do
                  if (
                    (i = h
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()), i === n || 0 === i.indexOf(n + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var i = n.location && n.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function (n) {
            return n === s;
          },
          focus: function (n) {
            return (
              n === i.activeElement &&
              (!i.hasFocus || i.hasFocus()) &&
              !!(n.type || n.href || ~n.tabIndex)
            );
          },
          enabled: function (n) {
            return n.disabled === !1;
          },
          disabled: function (n) {
            return n.disabled === !0;
          },
          checked: function (n) {
            var t = n.nodeName.toLowerCase();
            return (
              ("input" === t && !!n.checked) || ("option" === t && !!n.selected)
            );
          },
          selected: function (n) {
            return (
              n.parentNode && n.parentNode.selectedIndex, n.selected === !0
            );
          },
          empty: function (n) {
            for (n = n.firstChild; n; n = n.nextSibling)
              if (n.nodeType < 6) return !1;
            return !0;
          },
          parent: function (n) {
            return !t.pseudos.empty(n);
          },
          header: function (n) {
            return or.test(n.nodeName);
          },
          input: function (n) {
            return er.test(n.nodeName);
          },
          button: function (n) {
            var t = n.nodeName.toLowerCase();
            return ("input" === t && "button" === n.type) || "button" === t;
          },
          text: function (n) {
            var t;
            return (
              "input" === n.nodeName.toLowerCase() &&
              "text" === n.type &&
              (null == (t = n.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: it(function () {
            return [0];
          }),
          last: it(function (n, t) {
            return [t - 1];
          }),
          eq: it(function (n, t, i) {
            return [0 > i ? i + t : i];
          }),
          even: it(function (n, t) {
            for (var i = 0; t > i; i += 2) n.push(i);
            return n;
          }),
          odd: it(function (n, t) {
            for (var i = 1; t > i; i += 2) n.push(i);
            return n;
          }),
          lt: it(function (n, t, i) {
            for (var r = 0 > i ? i + t : i; --r >= 0; ) n.push(r);
            return n;
          }),
          gt: it(function (n, t, i) {
            for (var r = 0 > i ? i + t : i; ++r < t; ) n.push(r);
            return n;
          }),
        },
      };
      t.pseudos.nth = t.pseudos.eq;
      for (rt in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[rt] = cr(rt);
      for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = lr(rt);
      return (
        (bi.prototype = t.filters = t.pseudos),
        (t.setFilters = new bi()),
        (ft = u.tokenize =
          function (n, i) {
            var e,
              f,
              s,
              o,
              r,
              h,
              c,
              l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r; ) {
              (!e || (f = ir.exec(r))) &&
                (f && (r = r.slice(f[0].length) || r), h.push((s = [])));
              e = !1;
              (f = rr.exec(r)) &&
                ((e = f.shift()),
                s.push({ value: e, type: f[0].replace(at, " ") }),
                (r = r.slice(e.length)));
              for (o in t.filter)
                (f = vt[o].exec(r)) &&
                  (!c[o] || (f = c[o](f))) &&
                  ((e = f.shift()),
                  s.push({ value: e, type: o, matches: f }),
                  (r = r.slice(e.length)));
              if (!e) break;
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
          }),
        (wt = u.compile =
          function (n, t) {
            var r,
              u = [],
              f = [],
              i = lt[n + " "];
            if (!i) {
              for (t || (t = ft(n)), r = t.length; r--; )
                (i = ei(t[r])), i[e] ? u.push(i) : f.push(i);
              i = lt(n, vr(f, u));
              i.selector = n;
            }
            return i;
          }),
        (si = u.select =
          function (n, i, r, u) {
            var s,
              e,
              o,
              a,
              v,
              l = "function" == typeof n && n,
              c = !u && ft((n = l.selector || n));
            if (((r = r || []), 1 === c.length)) {
              if (
                ((e = c[0] = c[0].slice(0)),
                e.length > 2 &&
                  "ID" === (o = e[0]).type &&
                  f.getById &&
                  9 === i.nodeType &&
                  h &&
                  t.relative[e[1].type])
              ) {
                if (
                  ((i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0]),
                  !i)
                )
                  return r;
                l && (i = i.parentNode);
                n = n.slice(e.shift().value.length);
              }
              for (s = vt.needsContext.test(n) ? 0 : e.length; s--; ) {
                if (((o = e[s]), t.relative[(a = o.type)])) break;
                if (
                  (v = t.find[a]) &&
                  (u = v(
                    o.matches[0].replace(y, p),
                    (gt.test(e[0].type) && ii(i.parentNode)) || i
                  ))
                ) {
                  if ((e.splice(s, 1), (n = u.length && yt(e)), !n))
                    return k.apply(r, u), r;
                  break;
                }
              }
            }
            return (
              (l || wt(n, c))(
                u,
                i,
                !h,
                r,
                !i || (gt.test(n) && ii(i.parentNode)) || i
              ),
              r
            );
          }),
        (f.sortStable = e.split("").sort(bt).join("") === e),
        (f.detectDuplicates = !!ut),
        b(),
        (f.sortDetached = a(function (n) {
          return 1 & n.compareDocumentPosition(i.createElement("div"));
        })),
        a(function (n) {
          return (
            (n.innerHTML = "<a href='#'></a>"),
            "#" === n.firstChild.getAttribute("href")
          );
        }) ||
          ti("type|href|height|width", function (n, t, i) {
            if (!i)
              return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (f.attributes &&
          a(function (n) {
            return (
              (n.innerHTML = "<input/>"),
              n.firstChild.setAttribute("value", ""),
              "" === n.firstChild.getAttribute("value")
            );
          })) ||
          ti("value", function (n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
              return n.defaultValue;
          }),
        a(function (n) {
          return null == n.getAttribute("disabled");
        }) ||
          ti(kt, function (n, t, i) {
            var r;
            if (!i)
              return n[t] === !0
                ? t.toLowerCase()
                : (r = n.getAttributeNode(t)) && r.specified
                  ? r.value
                  : null;
          }),
        u
      );
    })(n);
    i.find = w;
    i.expr = w.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = w.uniqueSort;
    i.text = w.getText;
    i.isXMLDoc = w.isXML;
    i.contains = w.contains;
    var it = function (n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
          if (1 === n.nodeType) {
            if (f && i(n).is(r)) break;
            u.push(n);
          }
        return u;
      },
      lr = function (n, t) {
        for (var i = []; n; n = n.nextSibling)
          1 === n.nodeType && n !== t && i.push(n);
        return i;
      },
      ar = i.expr.match.needsContext,
      vr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      pe = /^.[^:#\[\.,]*$/;
    i.filter = function (n, t, r) {
      var u = t[0];
      return (
        r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType
          ? i.find.matchesSelector(u, n)
            ? [u]
            : []
          : i.find.matches(
              n,
              i.grep(t, function (n) {
                return 1 === n.nodeType;
              })
            )
      );
    };
    i.fn.extend({
      find: function (n) {
        var t,
          r = [],
          u = this,
          f = u.length;
        if ("string" != typeof n)
          return this.pushStack(
            i(n).filter(function () {
              for (t = 0; f > t; t++) if (i.contains(u[t], this)) return !0;
            })
          );
        for (t = 0; f > t; t++) i.find(n, u[t], r);
        return (
          (r = this.pushStack(f > 1 ? i.unique(r) : r)),
          (r.selector = this.selector ? this.selector + " " + n : n),
          r
        );
      },
      filter: function (n) {
        return this.pushStack(ri(this, n || [], !1));
      },
      not: function (n) {
        return this.pushStack(ri(this, n || [], !0));
      },
      is: function (n) {
        return !!ri(
          this,
          "string" == typeof n && ar.test(n) ? i(n) : n || [],
          !1
        ).length;
      },
    });
    yr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    pr = i.fn.init = function (n, t, r) {
      var f, e;
      if (!n) return this;
      if (((r = r || ui), "string" == typeof n)) {
        if (
          ((f =
            "<" === n.charAt(0) &&
            ">" === n.charAt(n.length - 1) &&
            n.length >= 3
              ? [null, n, null]
              : yr.exec(n)),
          !f || (!f[1] && t))
        )
          return !t || t.jquery
            ? (t || r).find(n)
            : this.constructor(t).find(n);
        if (f[1]) {
          if (
            ((t = t instanceof i ? t[0] : t),
            i.merge(
              this,
              i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)
            ),
            vr.test(f[1]) && i.isPlainObject(t))
          )
            for (f in t)
              i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
          return this;
        }
        if (((e = u.getElementById(f[2])), e && e.parentNode)) {
          if (e.id !== f[2]) return ui.find(n);
          this.length = 1;
          this[0] = e;
        }
        return (this.context = u), (this.selector = n), this;
      }
      return n.nodeType
        ? ((this.context = this[0] = n), (this.length = 1), this)
        : i.isFunction(n)
          ? "undefined" != typeof r.ready
            ? r.ready(n)
            : n(i)
          : (void 0 !== n.selector &&
              ((this.selector = n.selector), (this.context = n.context)),
            i.makeArray(n, this));
    };
    pr.prototype = i.fn;
    ui = i(u);
    wr = /^(?:parents|prev(?:Until|All))/;
    br = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
      has: function (n) {
        var t,
          r = i(n, this),
          u = r.length;
        return this.filter(function () {
          for (t = 0; u > t; t++) if (i.contains(this, r[t])) return !0;
        });
      },
      closest: function (n, t) {
        for (
          var r,
            f = 0,
            o = this.length,
            u = [],
            e =
              ar.test(n) || "string" != typeof n ? i(n, t || this.context) : 0;
          o > f;
          f++
        )
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (e
                ? e.index(r) > -1
                : 1 === r.nodeType && i.find.matchesSelector(r, n))
            ) {
              u.push(r);
              break;
            }
        return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
      },
      index: function (n) {
        return n
          ? "string" == typeof n
            ? i.inArray(this[0], i(n))
            : i.inArray(n.jquery ? n[0] : n, this)
          : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
      },
      add: function (n, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
      },
      addBack: function (n) {
        return this.add(
          null == n ? this.prevObject : this.prevObject.filter(n)
        );
      },
    });
    i.each(
      {
        parent: function (n) {
          var t = n.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (n) {
          return it(n, "parentNode");
        },
        parentsUntil: function (n, t, i) {
          return it(n, "parentNode", i);
        },
        next: function (n) {
          return kr(n, "nextSibling");
        },
        prev: function (n) {
          return kr(n, "previousSibling");
        },
        nextAll: function (n) {
          return it(n, "nextSibling");
        },
        prevAll: function (n) {
          return it(n, "previousSibling");
        },
        nextUntil: function (n, t, i) {
          return it(n, "nextSibling", i);
        },
        prevUntil: function (n, t, i) {
          return it(n, "previousSibling", i);
        },
        siblings: function (n) {
          return lr((n.parentNode || {}).firstChild, n);
        },
        children: function (n) {
          return lr(n.firstChild);
        },
        contents: function (n) {
          return i.nodeName(n, "iframe")
            ? n.contentDocument || n.contentWindow.document
            : i.merge([], n.childNodes);
        },
      },
      function (n, t) {
        i.fn[n] = function (r, u) {
          var f = i.map(this, t, r);
          return (
            "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 &&
              (br[n] || (f = i.uniqueSort(f)), wr.test(n) && (f = f.reverse())),
            this.pushStack(f)
          );
        };
      }
    );
    s = /\S+/g;
    i.Callbacks = function (n) {
      n = "string" == typeof n ? we(n) : i.extend({}, n);
      var e,
        r,
        h,
        f,
        t = [],
        o = [],
        u = -1,
        c = function () {
          for (f = n.once, h = e = !0; o.length; u = -1)
            for (r = o.shift(); ++u < t.length; )
              t[u].apply(r[0], r[1]) === !1 &&
                n.stopOnFalse &&
                ((u = t.length), (r = !1));
          n.memory || (r = !1);
          e = !1;
          f && (t = r ? [] : "");
        },
        s = {
          add: function () {
            return (
              t &&
                (r && !e && ((u = t.length - 1), o.push(r)),
                (function f(r) {
                  i.each(r, function (r, u) {
                    i.isFunction(u)
                      ? (n.unique && s.has(u)) || t.push(u)
                      : u && u.length && "string" !== i.type(u) && f(u);
                  });
                })(arguments),
                r && !e && c()),
              this
            );
          },
          remove: function () {
            return (
              i.each(arguments, function (n, r) {
                for (var f; (f = i.inArray(r, t, f)) > -1; )
                  t.splice(f, 1), u >= f && u--;
              }),
              this
            );
          },
          has: function (n) {
            return n ? i.inArray(n, t) > -1 : t.length > 0;
          },
          empty: function () {
            return t && (t = []), this;
          },
          disable: function () {
            return (f = o = []), (t = r = ""), this;
          },
          disabled: function () {
            return !t;
          },
          lock: function () {
            return (f = !0), r || s.disable(), this;
          },
          locked: function () {
            return !!f;
          },
          fireWith: function (n, t) {
            return (
              f ||
                ((t = t || []),
                (t = [n, t.slice ? t.slice() : t]),
                o.push(t),
                e || c()),
              this
            );
          },
          fire: function () {
            return s.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!h;
          },
        };
      return s;
    };
    i.extend({
      Deferred: function (n) {
        var u = [
            ["resolve", "done", i.Callbacks("once memory"), "resolved"],
            ["reject", "fail", i.Callbacks("once memory"), "rejected"],
            ["notify", "progress", i.Callbacks("memory")],
          ],
          f = "pending",
          r = {
            state: function () {
              return f;
            },
            always: function () {
              return t.done(arguments).fail(arguments), this;
            },
            then: function () {
              var n = arguments;
              return i
                .Deferred(function (f) {
                  i.each(u, function (u, e) {
                    var o = i.isFunction(n[u]) && n[u];
                    t[e[1]](function () {
                      var n = o && o.apply(this, arguments);
                      n && i.isFunction(n.promise)
                        ? n
                            .promise()
                            .progress(f.notify)
                            .done(f.resolve)
                            .fail(f.reject)
                        : f[e[0] + "With"](
                            this === r ? f.promise() : this,
                            o ? [n] : arguments
                          );
                    });
                  });
                  n = null;
                })
                .promise();
            },
            promise: function (n) {
              return null != n ? i.extend(n, r) : r;
            },
          },
          t = {};
        return (
          (r.pipe = r.then),
          i.each(u, function (n, i) {
            var e = i[2],
              o = i[3];
            r[i[1]] = e.add;
            o &&
              e.add(
                function () {
                  f = o;
                },
                u[1 ^ n][2].disable,
                u[2][2].lock
              );
            t[i[0]] = function () {
              return t[i[0] + "With"](this === t ? r : this, arguments), this;
            };
            t[i[0] + "With"] = e.fireWith;
          }),
          r.promise(t),
          n && n.call(t, t),
          t
        );
      },
      when: function (n) {
        var t = 0,
          u = a.call(arguments),
          r = u.length,
          e = 1 !== r || (n && i.isFunction(n.promise)) ? r : 0,
          f = 1 === e ? n : i.Deferred(),
          h = function (n, t, i) {
            return function (r) {
              t[n] = this;
              i[n] = arguments.length > 1 ? a.call(arguments) : r;
              i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i);
            };
          },
          o,
          c,
          s;
        if (r > 1)
          for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++)
            u[t] && i.isFunction(u[t].promise)
              ? u[t]
                  .promise()
                  .progress(h(t, c, o))
                  .done(h(t, s, u))
                  .fail(f.reject)
              : --e;
        return e || f.resolveWith(s, u), f.promise();
      },
    });
    i.fn.ready = function (n) {
      return i.ready.promise().done(n), this;
    };
    i.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (n) {
        n ? i.readyWait++ : i.ready(!0);
      },
      ready: function (n) {
        (n === !0 ? --i.readyWait : i.isReady) ||
          ((i.isReady = !0),
          (n !== !0 && --i.readyWait > 0) ||
            (at.resolveWith(u, [i]),
            i.fn.triggerHandler &&
              (i(u).triggerHandler("ready"), i(u).off("ready"))));
      },
    });
    i.ready.promise = function (t) {
      if (!at)
        if (
          ((at = i.Deferred()),
          "complete" !== u.readyState &&
            ("loading" === u.readyState || u.documentElement.doScroll))
        )
          if (u.addEventListener)
            u.addEventListener("DOMContentLoaded", v),
              n.addEventListener("load", v);
          else {
            u.attachEvent("onreadystatechange", v);
            n.attachEvent("onload", v);
            var r = !1;
            try {
              r = null == n.frameElement && u.documentElement;
            } catch (e) {}
            r &&
              r.doScroll &&
              !(function f() {
                if (!i.isReady) {
                  try {
                    r.doScroll("left");
                  } catch (t) {
                    return n.setTimeout(f, 50);
                  }
                  dr();
                  i.ready();
                }
              })();
          }
        else n.setTimeout(i.ready);
      return at.promise(t);
    };
    i.ready.promise();
    for (gr in i(r)) break;
    r.ownFirst = "0" === gr;
    r.inlineBlockNeedsLayout = !1;
    i(function () {
      var f, t, n, i;
      n = u.getElementsByTagName("body")[0];
      n &&
        n.style &&
        ((t = u.createElement("div")),
        (i = u.createElement("div")),
        (i.style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        "undefined" != typeof t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (r.inlineBlockNeedsLayout = f = 3 === t.offsetWidth),
          f && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
      (function () {
        var n = u.createElement("div");
        r.deleteExpando = !0;
        try {
          delete n.test;
        } catch (t) {
          r.deleteExpando = !1;
        }
        n = null;
      })();
    var ot = function (n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
          r = +n.nodeType || 1;
        return 1 !== r && 9 !== r
          ? !1
          : !t || (t !== !0 && n.getAttribute("classid") === t);
      },
      be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ke = /([A-Z])/g;
    i.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (n) {
        return (
          (n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando]), !!n && !fi(n)
        );
      },
      data: function (n, t, i) {
        return tu(n, t, i);
      },
      removeData: function (n, t) {
        return iu(n, t);
      },
      _data: function (n, t, i) {
        return tu(n, t, i, !0);
      },
      _removeData: function (n, t) {
        return iu(n, t, !0);
      },
    });
    i.fn.extend({
      data: function (n, t) {
        var f,
          u,
          e,
          r = this[0],
          o = r && r.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((e = i.data(r)), 1 === r.nodeType && !i._data(r, "parsedAttrs"))
          ) {
            for (f = o.length; f--; )
              o[f] &&
                ((u = o[f].name),
                0 === u.indexOf("data-") &&
                  ((u = i.camelCase(u.slice(5))), nu(r, u, e[u])));
            i._data(r, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof n
          ? this.each(function () {
              i.data(this, n);
            })
          : arguments.length > 1
            ? this.each(function () {
                i.data(this, n, t);
              })
            : r
              ? nu(r, n, i.data(r, n))
              : void 0;
      },
      removeData: function (n) {
        return this.each(function () {
          i.removeData(this, n);
        });
      },
    });
    i.extend({
      queue: function (n, t, r) {
        var u;
        if (n)
          return (
            (t = (t || "fx") + "queue"),
            (u = i._data(n, t)),
            r &&
              (!u || i.isArray(r)
                ? (u = i._data(n, t, i.makeArray(r)))
                : u.push(r)),
            u || []
          );
      },
      dequeue: function (n, t) {
        t = t || "fx";
        var r = i.queue(n, t),
          e = r.length,
          u = r.shift(),
          f = i._queueHooks(n, t),
          o = function () {
            i.dequeue(n, t);
          };
        "inprogress" === u && ((u = r.shift()), e--);
        u &&
          ("fx" === t && r.unshift("inprogress"),
          delete f.stop,
          u.call(n, o, f));
        !e && f && f.empty.fire();
      },
      _queueHooks: function (n, t) {
        var r = t + "queueHooks";
        return (
          i._data(n, r) ||
          i._data(n, r, {
            empty: i.Callbacks("once memory").add(function () {
              i._removeData(n, t + "queue");
              i._removeData(n, r);
            }),
          })
        );
      },
    });
    i.fn.extend({
      queue: function (n, t) {
        var r = 2;
        return (
          "string" != typeof n && ((t = n), (n = "fx"), r--),
          arguments.length < r
            ? i.queue(this[0], n)
            : void 0 === t
              ? this
              : this.each(function () {
                  var r = i.queue(this, n, t);
                  i._queueHooks(this, n);
                  "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n);
                })
        );
      },
      dequeue: function (n) {
        return this.each(function () {
          i.dequeue(this, n);
        });
      },
      clearQueue: function (n) {
        return this.queue(n || "fx", []);
      },
      promise: function (n, t) {
        var r,
          f = 1,
          e = i.Deferred(),
          u = this,
          o = this.length,
          s = function () {
            --f || e.resolveWith(u, [u]);
          };
        for (
          "string" != typeof n && ((t = n), (n = void 0)), n = n || "fx";
          o--;

        )
          (r = i._data(u[o], n + "queueHooks")),
            r && r.empty && (f++, r.empty.add(s));
        return s(), e.promise(t);
      },
    }),
      (function () {
        var n;
        r.shrinkWrapBlocks = function () {
          if (null != n) return n;
          n = !1;
          var t, i, r;
          return (
            (i = u.getElementsByTagName("body")[0]),
            i && i.style
              ? ((t = u.createElement("div")),
                (r = u.createElement("div")),
                (r.style.cssText =
                  "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                i.appendChild(r).appendChild(t),
                "undefined" != typeof t.style.zoom &&
                  ((t.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                  (t.appendChild(u.createElement("div")).style.width = "5px"),
                  (n = 3 !== t.offsetWidth)),
                i.removeChild(r),
                n)
              : void 0
          );
        };
      })();
    var ei = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      oi = new RegExp("^(?:([+-])=|)(" + ei + ")([a-z%]*)$", "i"),
      b = ["Top", "Right", "Bottom", "Left"],
      st = function (n, t) {
        return (
          (n = t || n),
          "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        );
      };
    var y = function (n, t, r, u, f, e, o) {
        var s = 0,
          c = n.length,
          h = null == r;
        if ("object" === i.type(r)) {
          f = !0;
          for (s in r) y(n, t, s, r[s], !0, e, o);
        } else if (
          void 0 !== u &&
          ((f = !0),
          i.isFunction(u) || (o = !0),
          h &&
            (o
              ? (t.call(n, u), (t = null))
              : ((h = t),
                (t = function (n, t, r) {
                  return h.call(i(n), r);
                }))),
          t)
        )
          for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e;
      },
      si = /^(?:checkbox|radio)$/i,
      uu = /<([\w:-]+)/,
      fu = /^$|\/(?:java|ecma)script/i,
      hi = /^\s+/,
      eu =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !(function () {
      var n = u.createElement("div"),
        f = u.createDocumentFragment(),
        t = u.createElement("input");
      n.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
      r.leadingWhitespace = 3 === n.firstChild.nodeType;
      r.tbody = !n.getElementsByTagName("tbody").length;
      r.htmlSerialize = !!n.getElementsByTagName("link").length;
      r.html5Clone =
        "<:nav></:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML;
      t.type = "checkbox";
      t.checked = !0;
      f.appendChild(t);
      r.appendChecked = t.checked;
      n.innerHTML = "<textarea>x</textarea>";
      r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
      f.appendChild(n);
      t = u.createElement("input");
      t.setAttribute("type", "radio");
      t.setAttribute("checked", "checked");
      t.setAttribute("name", "t");
      n.appendChild(t);
      r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
      r.noCloneEvent = !!n.addEventListener;
      n[i.expando] = 1;
      r.attributes = !n.getAttribute(i.expando);
    })();
    o = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    o.optgroup = o.option;
    o.tbody = o.tfoot = o.colgroup = o.caption = o.thead;
    o.th = o.td;
    su = /<|&#?\w+;/;
    li = /<tbody/i;
    !(function () {
      var t,
        i,
        f = u.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (i = "on" + t),
          (r[t] = i in n) ||
            (f.setAttribute(i, "t"), (r[t] = f.attributes[i].expando === !1));
      f = null;
    })();
    var ai = /^(?:input|select|textarea)$/i,
      ge = /^key/,
      no = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      cu = /^(?:focusinfocus|focusoutblur)$/,
      lu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
      global: {},
      add: function (n, t, r, u, f) {
        var p,
          v,
          w,
          y,
          o,
          h,
          c,
          l,
          e,
          b,
          k,
          a = i._data(n);
        if (a) {
          for (
            r.handler && ((y = r), (r = y.handler), (f = y.selector)),
              r.guid || (r.guid = i.guid++),
              (v = a.events) || (v = a.events = {}),
              (h = a.handle) ||
                ((h = a.handle =
                  function (n) {
                    if (
                      "undefined" != typeof i &&
                      (!n || i.event.triggered !== n.type)
                    )
                      return i.event.dispatch.apply(h.elem, arguments);
                  }),
                (h.elem = n)),
              t = (t || "").match(s) || [""],
              w = t.length;
            w--;

          )
            (p = lu.exec(t[w]) || []),
              (e = k = p[1]),
              (b = (p[2] || "").split(".").sort()),
              e &&
                ((o = i.event.special[e] || {}),
                (e = (f ? o.delegateType : o.bindType) || e),
                (o = i.event.special[e] || {}),
                (c = i.extend(
                  {
                    type: e,
                    origType: k,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: b.join("."),
                  },
                  y
                )),
                (l = v[e]) ||
                  ((l = v[e] = []),
                  (l.delegateCount = 0),
                  (o.setup && o.setup.call(n, u, b, h) !== !1) ||
                    (n.addEventListener
                      ? n.addEventListener(e, h, !1)
                      : n.attachEvent && n.attachEvent("on" + e, h))),
                o.add &&
                  (o.add.call(n, c),
                  c.handler.guid || (c.handler.guid = r.guid)),
                f ? l.splice(l.delegateCount++, 0, c) : l.push(c),
                (i.event.global[e] = !0));
          n = null;
        }
      },
      remove: function (n, t, r, u, f) {
        var y,
          o,
          h,
          b,
          p,
          a,
          c,
          l,
          e,
          w,
          k,
          v = i.hasData(n) && i._data(n);
        if (v && (a = v.events)) {
          for (t = (t || "").match(s) || [""], p = t.length; p--; )
            if (
              ((h = lu.exec(t[p]) || []),
              (e = k = h[1]),
              (w = (h[2] || "").split(".").sort()),
              e)
            ) {
              for (
                c = i.event.special[e] || {},
                  e = (u ? c.delegateType : c.bindType) || e,
                  l = a[e] || [],
                  h =
                    h[2] &&
                    new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  b = y = l.length;
                y--;

              )
                (o = l[y]),
                  (!f && k !== o.origType) ||
                    (r && r.guid !== o.guid) ||
                    (h && !h.test(o.namespace)) ||
                    (u && u !== o.selector && ("**" !== u || !o.selector)) ||
                    (l.splice(y, 1),
                    o.selector && l.delegateCount--,
                    c.remove && c.remove.call(n, o));
              b &&
                !l.length &&
                ((c.teardown && c.teardown.call(n, w, v.handle) !== !1) ||
                  i.removeEvent(n, e, v.handle),
                delete a[e]);
            } else for (e in a) i.event.remove(n, e + t[p], r, u, !0);
          i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"));
        }
      },
      trigger: function (t, r, f, e) {
        var l,
          a,
          o,
          p,
          c,
          h,
          w,
          y = [f || u],
          s = tt.call(t, "type") ? t.type : t,
          v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((o = h = f = f || u),
          3 !== f.nodeType &&
            8 !== f.nodeType &&
            !cu.test(s + i.event.triggered) &&
            (s.indexOf(".") > -1 &&
              ((v = s.split(".")), (s = v.shift()), v.sort()),
            (a = s.indexOf(":") < 0 && "on" + s),
            (t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t)),
            (t.isTrigger = e ? 2 : 3),
            (t.namespace = v.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = f),
            (r = null == r ? [t] : i.makeArray(r, [t])),
            (c = i.event.special[s] || {}),
            e || !c.trigger || c.trigger.apply(f, r) !== !1))
        ) {
          if (!e && !c.noBubble && !i.isWindow(f)) {
            for (
              p = c.delegateType || s, cu.test(p + s) || (o = o.parentNode);
              o;
              o = o.parentNode
            )
              y.push(o), (h = o);
            h === (f.ownerDocument || u) &&
              y.push(h.defaultView || h.parentWindow || n);
          }
          for (w = 0; (o = y[w++]) && !t.isPropagationStopped(); )
            (t.type = w > 1 ? p : c.bindType || s),
              (l =
                (i._data(o, "events") || {})[t.type] && i._data(o, "handle")),
              l && l.apply(o, r),
              (l = a && o[a]),
              l &&
                l.apply &&
                ot(o) &&
                ((t.result = l.apply(o, r)),
                t.result === !1 && t.preventDefault());
          if (
            ((t.type = s),
            !e &&
              !t.isDefaultPrevented() &&
              (!c._default || c._default.apply(y.pop(), r) === !1) &&
              ot(f) &&
              a &&
              f[s] &&
              !i.isWindow(f))
          ) {
            h = f[a];
            h && (f[a] = null);
            i.event.triggered = s;
            try {
              f[s]();
            } catch (b) {}
            i.event.triggered = void 0;
            h && (f[a] = h);
          }
          return t.result;
        }
      },
      dispatch: function (n) {
        n = i.event.fix(n);
        var e,
          o,
          f,
          r,
          t,
          s = [],
          h = a.call(arguments),
          c = (i._data(this, "events") || {})[n.type] || [],
          u = i.event.special[n.type] || {};
        if (
          ((h[0] = n),
          (n.delegateTarget = this),
          !u.preDispatch || u.preDispatch.call(this, n) !== !1)
        ) {
          for (
            s = i.event.handlers.call(this, n, c), e = 0;
            (r = s[e++]) && !n.isPropagationStopped();

          )
            for (
              n.currentTarget = r.elem, o = 0;
              (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();

            )
              (n.rnamespace && !n.rnamespace.test(t.namespace)) ||
                ((n.handleObj = t),
                (n.data = t.data),
                (f = (
                  (i.event.special[t.origType] || {}).handle || t.handler
                ).apply(r.elem, h)),
                void 0 !== f &&
                  (n.result = f) === !1 &&
                  (n.preventDefault(), n.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, n), n.result;
        }
      },
      handlers: function (n, t) {
        var e,
          u,
          f,
          o,
          h = [],
          s = t.delegateCount,
          r = n.target;
        if (
          s &&
          r.nodeType &&
          ("click" !== n.type || isNaN(n.button) || n.button < 1)
        )
          for (; r != this; r = r.parentNode || this)
            if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
              for (u = [], e = 0; s > e; e++)
                (o = t[e]),
                  (f = o.selector + " "),
                  void 0 === u[f] &&
                    (u[f] = o.needsContext
                      ? i(f, this).index(r) > -1
                      : i.find(f, this, null, [r]).length),
                  u[f] && u.push(o);
              u.length && h.push({ elem: r, handlers: u });
            }
        return s < t.length && h.push({ elem: this, handlers: t.slice(s) }), h;
      },
      fix: function (n) {
        if (n[i.expando]) return n;
        var e,
          o,
          s,
          r = n.type,
          f = n,
          t = this.fixHooks[r];
        for (
          t ||
            (this.fixHooks[r] = t =
              no.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}),
            s = t.props ? this.props.concat(t.props) : this.props,
            n = new i.Event(f),
            e = s.length;
          e--;

        )
          (o = s[e]), (n[o] = f[o]);
        return (
          n.target || (n.target = f.srcElement || u),
          3 === n.target.nodeType && (n.target = n.target.parentNode),
          (n.metaKey = !!n.metaKey),
          t.filter ? t.filter(n, f) : n
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (n, t) {
          return (
            null == n.which &&
              (n.which = null != t.charCode ? t.charCode : t.keyCode),
            n
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (n, t) {
          var i,
            e,
            r,
            f = t.button,
            o = t.fromElement;
          return (
            null == n.pageX &&
              null != t.clientX &&
              ((e = n.target.ownerDocument || u),
              (r = e.documentElement),
              (i = e.body),
              (n.pageX =
                t.clientX +
                ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
                ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
              (n.pageY =
                t.clientY +
                ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
                ((r && r.clientTop) || (i && i.clientTop) || 0))),
            !n.relatedTarget &&
              o &&
              (n.relatedTarget = o === n.target ? t.toElement : o),
            n.which ||
              void 0 === f ||
              (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
            n
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== au() && this.focus)
              try {
                return this.focus(), !1;
              } catch (n) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === au() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              i.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
            )
              return this.click(), !1;
          },
          _default: function (n) {
            return i.nodeName(n.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (n) {
            void 0 !== n.result &&
              n.originalEvent &&
              (n.originalEvent.returnValue = n.result);
          },
        },
      },
      simulate: function (n, t, r) {
        var u = i.extend(new i.Event(), r, { type: n, isSimulated: !0 });
        i.event.trigger(u, null, t);
        u.isDefaultPrevented() && r.preventDefault();
      },
    };
    i.removeEvent = u.removeEventListener
      ? function (n, t, i) {
          n.removeEventListener && n.removeEventListener(t, i);
        }
      : function (n, t, i) {
          var r = "on" + t;
          n.detachEvent &&
            ("undefined" == typeof n[r] && (n[r] = null), n.detachEvent(r, i));
        };
    i.Event = function (n, t) {
      return this instanceof i.Event
        ? (n && n.type
            ? ((this.originalEvent = n),
              (this.type = n.type),
              (this.isDefaultPrevented =
                n.defaultPrevented ||
                (void 0 === n.defaultPrevented && n.returnValue === !1)
                  ? vt
                  : rt))
            : (this.type = n),
          t && i.extend(this, t),
          (this.timeStamp = (n && n.timeStamp) || i.now()),
          void (this[i.expando] = !0))
        : new i.Event(n, t);
    };
    i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: rt,
      isPropagationStopped: rt,
      isImmediatePropagationStopped: rt,
      preventDefault: function () {
        var n = this.originalEvent;
        this.isDefaultPrevented = vt;
        n && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1));
      },
      stopPropagation: function () {
        var n = this.originalEvent;
        this.isPropagationStopped = vt;
        n &&
          !this.isSimulated &&
          (n.stopPropagation && n.stopPropagation(), (n.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var n = this.originalEvent;
        this.isImmediatePropagationStopped = vt;
        n && n.stopImmediatePropagation && n.stopImmediatePropagation();
        this.stopPropagation();
      },
    };
    i.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (n, t) {
        i.event.special[n] = {
          delegateType: t,
          bindType: t,
          handle: function (n) {
            var u,
              f = this,
              r = n.relatedTarget,
              e = n.handleObj;
            return (
              (r && (r === f || i.contains(f, r))) ||
                ((n.type = e.origType),
                (u = e.handler.apply(this, arguments)),
                (n.type = t)),
              u
            );
          },
        };
      }
    );
    r.submit ||
      (i.event.special.submit = {
        setup: function () {
          return i.nodeName(this, "form")
            ? !1
            : void i.event.add(
                this,
                "click._submit keypress._submit",
                function (n) {
                  var r = n.target,
                    t =
                      i.nodeName(r, "input") || i.nodeName(r, "button")
                        ? i.prop(r, "form")
                        : void 0;
                  t &&
                    !i._data(t, "submit") &&
                    (i.event.add(t, "submit._submit", function (n) {
                      n._submitBubble = !0;
                    }),
                    i._data(t, "submit", !0));
                }
              );
        },
        postDispatch: function (n) {
          n._submitBubble &&
            (delete n._submitBubble,
            this.parentNode &&
              !n.isTrigger &&
              i.event.simulate("submit", this.parentNode, n));
        },
        teardown: function () {
          return i.nodeName(this, "form")
            ? !1
            : void i.event.remove(this, "._submit");
        },
      });
    r.change ||
      (i.event.special.change = {
        setup: function () {
          return ai.test(this.nodeName)
            ? (("checkbox" !== this.type && "radio" !== this.type) ||
                (i.event.add(this, "propertychange._change", function (n) {
                  "checked" === n.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                i.event.add(this, "click._change", function (n) {
                  this._justChanged && !n.isTrigger && (this._justChanged = !1);
                  i.event.simulate("change", this, n);
                })),
              !1)
            : void i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                ai.test(t.nodeName) &&
                  !i._data(t, "change") &&
                  (i.event.add(t, "change._change", function (n) {
                    !this.parentNode ||
                      n.isSimulated ||
                      n.isTrigger ||
                      i.event.simulate("change", this.parentNode, n);
                  }),
                  i._data(t, "change", !0));
              });
        },
        handle: function (n) {
          var t = n.target;
          if (
            this !== t ||
            n.isSimulated ||
            n.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
          )
            return n.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return i.event.remove(this, "._change"), !ai.test(this.nodeName);
        },
      });
    r.focusin ||
      i.each({ focus: "focusin", blur: "focusout" }, function (n, t) {
        var r = function (n) {
          i.event.simulate(t, n.target, i.event.fix(n));
        };
        i.event.special[t] = {
          setup: function () {
            var u = this.ownerDocument || this,
              f = i._data(u, t);
            f || u.addEventListener(n, r, !0);
            i._data(u, t, (f || 0) + 1);
          },
          teardown: function () {
            var u = this.ownerDocument || this,
              f = i._data(u, t) - 1;
            f
              ? i._data(u, t, f)
              : (u.removeEventListener(n, r, !0), i._removeData(u, t));
          },
        };
      });
    i.fn.extend({
      on: function (n, t, i, r) {
        return vi(this, n, t, i, r);
      },
      one: function (n, t, i, r) {
        return vi(this, n, t, i, r, 1);
      },
      off: function (n, t, r) {
        var u, f;
        if (n && n.preventDefault && n.handleObj)
          return (
            (u = n.handleObj),
            i(n.delegateTarget).off(
              u.namespace ? u.origType + "." + u.namespace : u.origType,
              u.selector,
              u.handler
            ),
            this
          );
        if ("object" == typeof n) {
          for (f in n) this.off(f, t, n[f]);
          return this;
        }
        return (
          (t !== !1 && "function" != typeof t) || ((r = t), (t = void 0)),
          r === !1 && (r = rt),
          this.each(function () {
            i.event.remove(this, n, r, t);
          })
        );
      },
      trigger: function (n, t) {
        return this.each(function () {
          i.event.trigger(n, t, this);
        });
      },
      triggerHandler: function (n, t) {
        var r = this[0];
        if (r) return i.event.trigger(n, t, r, !0);
      },
    });
    var to = / jQuery\d+="(?:null|\d+)"/g,
      vu = new RegExp("<(?:" + eu + ")[\\s/>]", "i"),
      io =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      ro = /<script|<style|<link/i,
      uo = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fo = /^true\/(.*)/,
      eo = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      oo = ou(u),
      yi = oo.appendChild(u.createElement("div"));
    i.extend({
      htmlPrefilter: function (n) {
        return n.replace(io, "<$1></$2>");
      },
      clone: function (n, t, u) {
        var e,
          c,
          s,
          o,
          h,
          l = i.contains(n.ownerDocument, n);
        if (
          (r.html5Clone || i.isXMLDoc(n) || !vu.test("<" + n.nodeName + ">")
            ? (s = n.cloneNode(!0))
            : ((yi.innerHTML = n.outerHTML),
              yi.removeChild((s = yi.firstChild))),
          !(
            (r.noCloneEvent && r.noCloneChecked) ||
            (1 !== n.nodeType && 11 !== n.nodeType) ||
            i.isXMLDoc(n)
          ))
        )
          for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o)
            e[o] && so(c, e[o]);
        if (t)
          if (u)
            for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++)
              bu(c, e[o]);
          else bu(n, s);
        return (
          (e = f(s, "script")),
          e.length > 0 && ci(e, !l && f(n, "script")),
          (e = h = c = null),
          s
        );
      },
      cleanData: function (n, t) {
        for (
          var u,
            e,
            f,
            o,
            l = 0,
            s = i.expando,
            h = i.cache,
            a = r.attributes,
            v = i.event.special;
          null != (u = n[l]);
          l++
        )
          if ((t || ot(u)) && ((f = u[s]), (o = f && h[f]))) {
            if (o.events)
              for (e in o.events)
                v[e] ? i.event.remove(u, e) : i.removeEvent(u, e, o.handle);
            h[f] &&
              (delete h[f],
              a || "undefined" == typeof u.removeAttribute
                ? (u[s] = void 0)
                : u.removeAttribute(s),
              c.push(f));
          }
      },
    });
    i.fn.extend({
      domManip: k,
      detach: function (n) {
        return ku(this, n, !0);
      },
      remove: function (n) {
        return ku(this, n);
      },
      text: function (n) {
        return y(
          this,
          function (n) {
            return void 0 === n
              ? i.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || u).createTextNode(n)
                );
          },
          null,
          n,
          arguments.length
        );
      },
      append: function () {
        return k(this, arguments, function (n) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = yu(this, n);
            t.appendChild(n);
          }
        });
      },
      prepend: function () {
        return k(this, arguments, function (n) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = yu(this, n);
            t.insertBefore(n, t.firstChild);
          }
        });
      },
      before: function () {
        return k(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this);
        });
      },
      after: function () {
        return k(this, arguments, function (n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
        });
      },
      empty: function () {
        for (var n, t = 0; null != (n = this[t]); t++) {
          for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild; )
            n.removeChild(n.firstChild);
          n.options && i.nodeName(n, "select") && (n.options.length = 0);
        }
        return this;
      },
      clone: function (n, t) {
        return (
          (n = null == n ? !1 : n),
          (t = null == t ? n : t),
          this.map(function () {
            return i.clone(this, n, t);
          })
        );
      },
      html: function (n) {
        return y(
          this,
          function (n) {
            var t = this[0] || {},
              u = 0,
              e = this.length;
            if (void 0 === n)
              return 1 === t.nodeType ? t.innerHTML.replace(to, "") : void 0;
            if (
              "string" == typeof n &&
              !ro.test(n) &&
              (r.htmlSerialize || !vu.test(n)) &&
              (r.leadingWhitespace || !hi.test(n)) &&
              !o[(uu.exec(n) || ["", ""])[1].toLowerCase()]
            ) {
              n = i.htmlPrefilter(n);
              try {
                for (; e > u; u++)
                  (t = this[u] || {}),
                    1 === t.nodeType &&
                      (i.cleanData(f(t, !1)), (t.innerHTML = n));
                t = 0;
              } catch (s) {}
            }
            t && this.empty().append(n);
          },
          null,
          n,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return k(
          this,
          arguments,
          function (t) {
            var r = this.parentNode;
            i.inArray(this, n) < 0 &&
              (i.cleanData(f(this)), r && r.replaceChild(t, this));
          },
          n
        );
      },
    });
    i.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (n, t) {
        i.fn[n] = function (n) {
          for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++)
            (u = r === o ? this : this.clone(!0)),
              i(e[r])[t](u),
              ti.apply(f, u.get());
          return this.pushStack(f);
        };
      }
    );
    pi = { HTML: "block", BODY: "block" };
    var gu = /^margin/,
      pt = new RegExp("^(" + ei + ")(?!px)[a-z%]+$", "i"),
      wi = function (n, t, i, r) {
        var f,
          u,
          e = {};
        for (u in t) (e[u] = n.style[u]), (n.style[u] = t[u]);
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f;
      },
      nf = u.documentElement;
    !(function () {
      var f,
        h,
        c,
        e,
        l,
        a,
        s = u.createElement("div"),
        t = u.createElement("div");
      if (t.style) {
        t.style.cssText = "float:left;opacity:.5";
        r.opacity = "0.5" === t.style.opacity;
        r.cssFloat = !!t.style.cssFloat;
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = "content-box" === t.style.backgroundClip;
        s = u.createElement("div");
        s.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        t.innerHTML = "";
        s.appendChild(t);
        r.boxSizing =
          "" === t.style.boxSizing ||
          "" === t.style.MozBoxSizing ||
          "" === t.style.WebkitBoxSizing;
        i.extend(r, {
          reliableHiddenOffsets: function () {
            return null == f && o(), e;
          },
          boxSizingReliable: function () {
            return null == f && o(), c;
          },
          pixelMarginRight: function () {
            return null == f && o(), h;
          },
          pixelPosition: function () {
            return null == f && o(), f;
          },
          reliableMarginRight: function () {
            return null == f && o(), l;
          },
          reliableMarginLeft: function () {
            return null == f && o(), a;
          },
        });
        function o() {
          var i,
            r,
            o = u.documentElement;
          o.appendChild(s);
          t.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
          f = c = a = !1;
          h = l = !0;
          n.getComputedStyle &&
            ((r = n.getComputedStyle(t)),
            (f = "1%" !== (r || {}).top),
            (a = "2px" === (r || {}).marginLeft),
            (c = "4px" === (r || { width: "4px" }).width),
            (t.style.marginRight = "50%"),
            (h = "4px" === (r || { marginRight: "4px" }).marginRight),
            (i = t.appendChild(u.createElement("div"))),
            (i.style.cssText = t.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (i.style.marginRight = i.style.width = "0"),
            (t.style.width = "1px"),
            (l = !parseFloat((n.getComputedStyle(i) || {}).marginRight)),
            t.removeChild(i));
          t.style.display = "none";
          e = 0 === t.getClientRects().length;
          e &&
            ((t.style.display = ""),
            (t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (t.childNodes[0].style.borderCollapse = "separate"),
            (i = t.getElementsByTagName("td")),
            (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (e = 0 === i[0].offsetHeight),
            e &&
              ((i[0].style.display = ""),
              (i[1].style.display = "none"),
              (e = 0 === i[0].offsetHeight)));
          o.removeChild(s);
        }
      }
    })();
    tf = /^(top|right|bottom|left)$/;
    n.getComputedStyle
      ? ((d = function (t) {
          var i = t.ownerDocument.defaultView;
          return (i && i.opener) || (i = n), i.getComputedStyle(t);
        }),
        (p = function (n, t, u) {
          var o,
            s,
            h,
            f,
            e = n.style;
          return (
            (u = u || d(n)),
            (f = u ? u.getPropertyValue(t) || u[t] : void 0),
            ("" !== f && void 0 !== f) ||
              i.contains(n.ownerDocument, n) ||
              (f = i.style(n, t)),
            u &&
              !r.pixelMarginRight() &&
              pt.test(f) &&
              gu.test(t) &&
              ((o = e.width),
              (s = e.minWidth),
              (h = e.maxWidth),
              (e.minWidth = e.maxWidth = e.width = f),
              (f = u.width),
              (e.width = o),
              (e.minWidth = s),
              (e.maxWidth = h)),
            void 0 === f ? f : f + ""
          );
        }))
      : nf.currentStyle &&
        ((d = function (n) {
          return n.currentStyle;
        }),
        (p = function (n, t, i) {
          var o,
            f,
            e,
            r,
            u = n.style;
          return (
            (i = i || d(n)),
            (r = i ? i[t] : void 0),
            null == r && u && u[t] && (r = u[t]),
            pt.test(r) &&
              !tf.test(t) &&
              ((o = u.left),
              (f = n.runtimeStyle),
              (e = f && f.left),
              e && (f.left = n.currentStyle.left),
              (u.left = "fontSize" === t ? "1em" : r),
              (r = u.pixelLeft + "px"),
              (u.left = o),
              e && (f.left = e)),
            void 0 === r ? r : r + "" || "auto"
          );
        }));
    var ki = /alpha\([^)]*\)/i,
      ho = /opacity\s*=\s*([^)]*)/i,
      co = /^(none|table(?!-c[ea]).+)/,
      lo = new RegExp("^(" + ei + ")(.*)$", "i"),
      ao = { position: "absolute", visibility: "hidden", display: "block" },
      rf = { letterSpacing: "0", fontWeight: "400" },
      uf = ["Webkit", "O", "Moz", "ms"],
      ff = u.createElement("div").style;
    i.extend({
      cssHooks: {
        opacity: {
          get: function (n, t) {
            if (t) {
              var i = p(n, "opacity");
              return "" === i ? "1" : i;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
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
        zoom: !0,
      },
      cssProps: { float: r.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (n, t, u, f) {
        if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
          var e,
            h,
            o,
            s = i.camelCase(t),
            c = n.style;
          if (
            ((t = i.cssProps[s] || (i.cssProps[s] = ef(s) || s)),
            (o = i.cssHooks[t] || i.cssHooks[s]),
            void 0 === u)
          )
            return o && "get" in o && void 0 !== (e = o.get(n, !1, f))
              ? e
              : c[t];
          if (
            ((h = typeof u),
            "string" === h &&
              (e = oi.exec(u)) &&
              e[1] &&
              ((u = ru(n, t, e)), (h = "number")),
            null != u &&
              u === u &&
              ("number" === h &&
                (u += (e && e[3]) || (i.cssNumber[s] ? "" : "px")),
              r.clearCloneStyle ||
                "" !== u ||
                0 !== t.indexOf("background") ||
                (c[t] = "inherit"),
              !(o && "set" in o && void 0 === (u = o.set(n, u, f)))))
          )
            try {
              c[t] = u;
            } catch (l) {}
        }
      },
      css: function (n, t, r, u) {
        var s,
          f,
          o,
          e = i.camelCase(t);
        return (
          (t = i.cssProps[e] || (i.cssProps[e] = ef(e) || e)),
          (o = i.cssHooks[t] || i.cssHooks[e]),
          o && "get" in o && (f = o.get(n, !0, r)),
          void 0 === f && (f = p(n, t, u)),
          "normal" === f && t in rf && (f = rf[t]),
          "" === r || r
            ? ((s = parseFloat(f)), r === !0 || isFinite(s) ? s || 0 : f)
            : f
        );
      },
    });
    i.each(["height", "width"], function (n, t) {
      i.cssHooks[t] = {
        get: function (n, r, u) {
          if (r)
            return co.test(i.css(n, "display")) && 0 === n.offsetWidth
              ? wi(n, ao, function () {
                  return cf(n, t, u);
                })
              : cf(n, t, u);
        },
        set: function (n, u, f) {
          var e = f && d(n);
          return sf(
            n,
            u,
            f
              ? hf(
                  n,
                  t,
                  f,
                  r.boxSizing && "border-box" === i.css(n, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    });
    r.opacity ||
      (i.cssHooks.opacity = {
        get: function (n, t) {
          return ho.test(
            (t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
              ? "1"
              : "";
        },
        set: function (n, t) {
          var r = n.style,
            u = n.currentStyle,
            e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            f = (u && u.filter) || r.filter || "";
          r.zoom = 1;
          ((t >= 1 || "" === t) &&
            "" === i.trim(f.replace(ki, "")) &&
            r.removeAttribute &&
            (r.removeAttribute("filter"), "" === t || (u && !u.filter))) ||
            (r.filter = ki.test(f) ? f.replace(ki, e) : f + " " + e);
        },
      });
    i.cssHooks.marginRight = bi(r.reliableMarginRight, function (n, t) {
      if (t) return wi(n, { display: "inline-block" }, p, [n, "marginRight"]);
    });
    i.cssHooks.marginLeft = bi(r.reliableMarginLeft, function (n, t) {
      if (t)
        return (
          (parseFloat(p(n, "marginLeft")) ||
            (i.contains(n.ownerDocument, n)
              ? n.getBoundingClientRect().left -
                wi(n, { marginLeft: 0 }, function () {
                  return n.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    });
    i.each({ margin: "", padding: "", border: "Width" }, function (n, t) {
      i.cssHooks[n + t] = {
        expand: function (i) {
          for (
            var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i];
            4 > r;
            r++
          )
            f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
          return f;
        },
      };
      gu.test(n) || (i.cssHooks[n + t].set = sf);
    });
    i.fn.extend({
      css: function (n, t) {
        return y(
          this,
          function (n, t, r) {
            var f,
              e,
              o = {},
              u = 0;
            if (i.isArray(t)) {
              for (f = d(n), e = t.length; e > u; u++)
                o[t[u]] = i.css(n, t[u], !1, f);
              return o;
            }
            return void 0 !== r ? i.style(n, t, r) : i.css(n, t);
          },
          n,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return of(this, !0);
      },
      hide: function () {
        return of(this);
      },
      toggle: function (n) {
        return "boolean" == typeof n
          ? n
            ? this.show()
            : this.hide()
          : this.each(function () {
              st(this) ? i(this).show() : i(this).hide();
            });
      },
    });
    i.Tween = e;
    e.prototype = {
      constructor: e,
      init: function (n, t, r, u, f, e) {
        this.elem = n;
        this.prop = r;
        this.easing = f || i.easing._default;
        this.options = t;
        this.start = this.now = this.cur();
        this.end = u;
        this.unit = e || (i.cssNumber[r] ? "" : "px");
      },
      cur: function () {
        var n = e.propHooks[this.prop];
        return n && n.get ? n.get(this) : e.propHooks._default.get(this);
      },
      run: function (n) {
        var t,
          r = e.propHooks[this.prop];
        return (
          (this.pos = this.options.duration
            ? (t = i.easing[this.easing](
                n,
                this.options.duration * n,
                0,
                1,
                this.options.duration
              ))
            : (t = n)),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          r && r.set ? r.set(this) : e.propHooks._default.set(this),
          this
        );
      },
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
      _default: {
        get: function (n) {
          var t;
          return 1 !== n.elem.nodeType ||
            (null != n.elem[n.prop] && null == n.elem.style[n.prop])
            ? n.elem[n.prop]
            : ((t = i.css(n.elem, n.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (n) {
          i.fx.step[n.prop]
            ? i.fx.step[n.prop](n)
            : 1 !== n.elem.nodeType ||
                (null == n.elem.style[i.cssProps[n.prop]] &&
                  !i.cssHooks[n.prop])
              ? (n.elem[n.prop] = n.now)
              : i.style(n.elem, n.prop, n.now + n.unit);
        },
      },
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
      set: function (n) {
        n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
      },
    };
    i.easing = {
      linear: function (n) {
        return n;
      },
      swing: function (n) {
        return 0.5 - Math.cos(n * Math.PI) / 2;
      },
      _default: "swing",
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    lf = /^(?:toggle|show|hide)$/;
    af = /queueHooks$/;
    i.Animation = i.extend(h, {
      tweeners: {
        "*": [
          function (n, t) {
            var i = this.createTween(n, t);
            return ru(i.elem, n, oi.exec(t), i), i;
          },
        ],
      },
      tweener: function (n, t) {
        i.isFunction(n) ? ((t = n), (n = ["*"])) : (n = n.match(s));
        for (var r, u = 0, f = n.length; f > u; u++)
          (r = n[u]),
            (h.tweeners[r] = h.tweeners[r] || []),
            h.tweeners[r].unshift(t);
      },
      prefilters: [vo],
      prefilter: function (n, t) {
        t ? h.prefilters.unshift(n) : h.prefilters.push(n);
      },
    });
    i.speed = function (n, t, r) {
      var u =
        n && "object" == typeof n
          ? i.extend({}, n)
          : {
              complete: r || (!r && t) || (i.isFunction(n) && n),
              duration: n,
              easing: (r && t) || (t && !i.isFunction(t) && t),
            };
      return (
        (u.duration = i.fx.off
          ? 0
          : "number" == typeof u.duration
            ? u.duration
            : u.duration in i.fx.speeds
              ? i.fx.speeds[u.duration]
              : i.fx.speeds._default),
        (null != u.queue && u.queue !== !0) || (u.queue = "fx"),
        (u.old = u.complete),
        (u.complete = function () {
          i.isFunction(u.old) && u.old.call(this);
          u.queue && i.dequeue(this, u.queue);
        }),
        u
      );
    };
    i.fn.extend({
      fadeTo: function (n, t, i, r) {
        return this.filter(st)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, n, i, r);
      },
      animate: function (n, t, r, u) {
        var o = i.isEmptyObject(n),
          e = i.speed(t, r, u),
          f = function () {
            var t = h(this, i.extend({}, n), e);
            (o || i._data(this, "finish")) && t.stop(!0);
          };
        return (
          (f.finish = f),
          o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        );
      },
      stop: function (n, t, r) {
        var u = function (n) {
          var t = n.stop;
          delete n.stop;
          t(r);
        };
        return (
          "string" != typeof n && ((r = t), (t = n), (n = void 0)),
          t && n !== !1 && this.queue(n || "fx", []),
          this.each(function () {
            var o = !0,
              t = null != n && n + "queueHooks",
              e = i.timers,
              f = i._data(this);
            if (t) f[t] && f[t].stop && u(f[t]);
            else for (t in f) f[t] && f[t].stop && af.test(t) && u(f[t]);
            for (t = e.length; t--; )
              e[t].elem !== this ||
                (null != n && e[t].queue !== n) ||
                (e[t].anim.stop(r), (o = !1), e.splice(t, 1));
            (!o && r) || i.dequeue(this, n);
          })
        );
      },
      finish: function (n) {
        return (
          n !== !1 && (n = n || "fx"),
          this.each(function () {
            var t,
              f = i._data(this),
              r = f[n + "queue"],
              e = f[n + "queueHooks"],
              u = i.timers,
              o = r ? r.length : 0;
            for (
              f.finish = !0,
                i.queue(this, n, []),
                e && e.stop && e.stop.call(this, !0),
                t = u.length;
              t--;

            )
              u[t].elem === this &&
                u[t].queue === n &&
                (u[t].anim.stop(!0), u.splice(t, 1));
            for (t = 0; o > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete f.finish;
          })
        );
      },
    });
    i.each(["toggle", "show", "hide"], function (n, t) {
      var r = i.fn[t];
      i.fn[t] = function (n, i, u) {
        return null == n || "boolean" == typeof n
          ? r.apply(this, arguments)
          : this.animate(bt(t, !0), n, i, u);
      };
    });
    i.each(
      {
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (n, t) {
        i.fn[n] = function (n, i, r) {
          return this.animate(t, n, i, r);
        };
      }
    );
    i.timers = [];
    i.fx.tick = function () {
      var r,
        n = i.timers,
        t = 0;
      for (ut = i.now(); t < n.length; t++)
        (r = n[t]), r() || n[t] !== r || n.splice(t--, 1);
      n.length || i.fx.stop();
      ut = void 0;
    };
    i.fx.timer = function (n) {
      i.timers.push(n);
      n() ? i.fx.start() : i.timers.pop();
    };
    i.fx.interval = 13;
    i.fx.start = function () {
      wt || (wt = n.setInterval(i.fx.tick, i.fx.interval));
    };
    i.fx.stop = function () {
      n.clearInterval(wt);
      wt = null;
    };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    (i.fn.delay = function (t, r) {
      return (
        (t = i.fx ? i.fx.speeds[t] || t : t),
        (r = r || "fx"),
        this.queue(r, function (i, r) {
          var u = n.setTimeout(i, t);
          r.stop = function () {
            n.clearTimeout(u);
          };
        })
      );
    }),
      (function () {
        var i,
          n = u.createElement("input"),
          t = u.createElement("div"),
          f = u.createElement("select"),
          e = f.appendChild(u.createElement("option"));
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        n.setAttribute("type", "checkbox");
        t.appendChild(n);
        i = t.getElementsByTagName("a")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = "t" !== t.className;
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = "/a" === i.getAttribute("href");
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = "" === n.getAttribute("value");
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = "t" === n.value;
      })();
    pf = /\r/g;
    wf = /[\x20\t\r\n\f]+/g;
    i.fn.extend({
      val: function (n) {
        var t,
          r,
          f,
          u = this[0];
        return arguments.length
          ? ((f = i.isFunction(n)),
            this.each(function (r) {
              var u;
              1 === this.nodeType &&
                ((u = f ? n.call(this, r, i(this).val()) : n),
                null == u
                  ? (u = "")
                  : "number" == typeof u
                    ? (u += "")
                    : i.isArray(u) &&
                      (u = i.map(u, function (n) {
                        return null == n ? "" : n + "";
                      })),
                (t =
                  i.valHooks[this.type] ||
                  i.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, u, "value")) ||
                  (this.value = u));
            }))
          : u
            ? ((t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()]),
              t && "get" in t && void 0 !== (r = t.get(u, "value"))
                ? r
                : ((r = u.value),
                  "string" == typeof r
                    ? r.replace(pf, "")
                    : null == r
                      ? ""
                      : r))
            : void 0;
      },
    });
    i.extend({
      valHooks: {
        option: {
          get: function (n) {
            var t = i.find.attr(n, "value");
            return null != t ? t : i.trim(i.text(n)).replace(wf, " ");
          },
        },
        select: {
          get: function (n) {
            for (
              var o,
                t,
                s = n.options,
                u = n.selectedIndex,
                f = "select-one" === n.type || 0 > u,
                h = f ? null : [],
                c = f ? u + 1 : s.length,
                e = 0 > u ? c : f ? u : 0;
              c > e;
              e++
            )
              if (
                ((t = s[e]),
                (t.selected || e === u) &&
                  (r.optDisabled
                    ? !t.disabled
                    : null === t.getAttribute("disabled")) &&
                  (!t.parentNode.disabled ||
                    !i.nodeName(t.parentNode, "optgroup")))
              ) {
                if (((o = i(t).val()), f)) return o;
                h.push(o);
              }
            return h;
          },
          set: function (n, t) {
            for (
              var f, r, u = n.options, o = i.makeArray(t), e = u.length;
              e--;

            )
              if (((r = u[e]), i.inArray(i.valHooks.option.get(r), o) > -1))
                try {
                  r.selected = f = !0;
                } catch (s) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return f || (n.selectedIndex = -1), u;
          },
        },
      },
    });
    i.each(["radio", "checkbox"], function () {
      i.valHooks[this] = {
        set: function (n, t) {
          if (i.isArray(t)) return (n.checked = i.inArray(i(n).val(), t) > -1);
        },
      };
      r.checkOn ||
        (i.valHooks[this].get = function (n) {
          return null === n.getAttribute("value") ? "on" : n.value;
        });
    });
    var ft,
      bf,
      l = i.expr.attrHandle,
      di = /^(?:checked|selected)$/i,
      g = r.getSetAttribute,
      kt = r.input;
    i.fn.extend({
      attr: function (n, t) {
        return y(this, i.attr, n, t, arguments.length > 1);
      },
      removeAttr: function (n) {
        return this.each(function () {
          i.removeAttr(this, n);
        });
      },
    });
    i.extend({
      attr: function (n, t, r) {
        var u,
          f,
          e = n.nodeType;
        if (3 !== e && 8 !== e && 2 !== e)
          return "undefined" == typeof n.getAttribute
            ? i.prop(n, t, r)
            : ((1 === e && i.isXMLDoc(n)) ||
                ((t = t.toLowerCase()),
                (f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bf : ft))),
              void 0 !== r
                ? null === r
                  ? void i.removeAttr(n, t)
                  : f && "set" in f && void 0 !== (u = f.set(n, r, t))
                    ? u
                    : (n.setAttribute(t, r + ""), r)
                : f && "get" in f && null !== (u = f.get(n, t))
                  ? u
                  : ((u = i.find.attr(n, t)), null == u ? void 0 : u));
      },
      attrHooks: {
        type: {
          set: function (n, t) {
            if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
              var u = n.value;
              return n.setAttribute("type", t), u && (n.value = u), t;
            }
          },
        },
      },
      removeAttr: function (n, t) {
        var r,
          u,
          e = 0,
          f = t && t.match(s);
        if (f && 1 === n.nodeType)
          while ((r = f[e++]))
            (u = i.propFix[r] || r),
              i.expr.match.bool.test(r)
                ? (kt && g) || !di.test(r)
                  ? (n[u] = !1)
                  : (n[i.camelCase("default-" + r)] = n[u] = !1)
                : i.attr(n, r, ""),
              n.removeAttribute(g ? r : u);
      },
    });
    bf = {
      set: function (n, t, r) {
        return (
          t === !1
            ? i.removeAttr(n, r)
            : (kt && g) || !di.test(r)
              ? n.setAttribute((!g && i.propFix[r]) || r, r)
              : (n[i.camelCase("default-" + r)] = n[r] = !0),
          r
        );
      },
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
      var r = l[t] || i.find.attr;
      l[t] =
        (kt && g) || !di.test(t)
          ? function (n, t, i) {
              var u, f;
              return (
                i ||
                  ((f = l[t]),
                  (l[t] = u),
                  (u = null != r(n, t, i) ? t.toLowerCase() : null),
                  (l[t] = f)),
                u
              );
            }
          : function (n, t, r) {
              if (!r)
                return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null;
            };
    });
    (kt && g) ||
      (i.attrHooks.value = {
        set: function (n, t, r) {
          return i.nodeName(n, "input")
            ? void (n.defaultValue = t)
            : ft && ft.set(n, t, r);
        },
      });
    g ||
      ((ft = {
        set: function (n, t, i) {
          var r = n.getAttributeNode(i);
          return (
            r || n.setAttributeNode((r = n.ownerDocument.createAttribute(i))),
            (r.value = t += ""),
            "value" === i || t === n.getAttribute(i) ? t : void 0
          );
        },
      }),
      (l.id =
        l.name =
        l.coords =
          function (n, t, i) {
            var r;
            if (!i)
              return (r = n.getAttributeNode(t)) && "" !== r.value
                ? r.value
                : null;
          }),
      (i.valHooks.button = {
        get: function (n, t) {
          var i = n.getAttributeNode(t);
          if (i && i.specified) return i.value;
        },
        set: ft.set,
      }),
      (i.attrHooks.contenteditable = {
        set: function (n, t, i) {
          ft.set(n, "" === t ? !1 : t, i);
        },
      }),
      i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = {
          set: function (n, i) {
            if ("" === i) return n.setAttribute(t, "auto"), i;
          },
        };
      }));
    r.style ||
      (i.attrHooks.style = {
        get: function (n) {
          return n.style.cssText || void 0;
        },
        set: function (n, t) {
          return (n.style.cssText = t + "");
        },
      });
    kf = /^(?:input|select|textarea|button|object)$/i;
    df = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function (n, t) {
        return y(this, i.prop, n, t, arguments.length > 1);
      },
      removeProp: function (n) {
        return (
          (n = i.propFix[n] || n),
          this.each(function () {
            try {
              this[n] = void 0;
              delete this[n];
            } catch (t) {}
          })
        );
      },
    });
    i.extend({
      prop: function (n, t, r) {
        var f,
          u,
          e = n.nodeType;
        if (3 !== e && 8 !== e && 2 !== e)
          return (
            (1 === e && i.isXMLDoc(n)) ||
              ((t = i.propFix[t] || t), (u = i.propHooks[t])),
            void 0 !== r
              ? u && "set" in u && void 0 !== (f = u.set(n, r, t))
                ? f
                : (n[t] = r)
              : u && "get" in u && null !== (f = u.get(n, t))
                ? f
                : n[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (n) {
            var t = i.find.attr(n, "tabindex");
            return t
              ? parseInt(t, 10)
              : kf.test(n.nodeName) || (df.test(n.nodeName) && n.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    });
    r.hrefNormalized ||
      i.each(["href", "src"], function (n, t) {
        i.propHooks[t] = {
          get: function (n) {
            return n.getAttribute(t, 4);
          },
        };
      });
    r.optSelected ||
      (i.propHooks.selected = {
        get: function (n) {
          var t = n.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (n) {
          var t = n.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      });
    i.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        i.propFix[this.toLowerCase()] = this;
      }
    );
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
      addClass: function (n) {
        var o,
          t,
          r,
          u,
          f,
          h,
          e,
          c = 0;
        if (i.isFunction(n))
          return this.each(function (t) {
            i(this).addClass(n.call(this, t, nt(this)));
          });
        if ("string" == typeof n && n)
          for (o = n.match(s) || []; (t = this[c++]); )
            if (
              ((u = nt(t)),
              (r = 1 === t.nodeType && (" " + u + " ").replace(dt, " ")))
            ) {
              for (h = 0; (f = o[h++]); )
                r.indexOf(" " + f + " ") < 0 && (r += f + " ");
              e = i.trim(r);
              u !== e && i.attr(t, "class", e);
            }
        return this;
      },
      removeClass: function (n) {
        var o,
          r,
          t,
          u,
          f,
          h,
          e,
          c = 0;
        if (i.isFunction(n))
          return this.each(function (t) {
            i(this).removeClass(n.call(this, t, nt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof n && n)
          for (o = n.match(s) || []; (r = this[c++]); )
            if (
              ((u = nt(r)),
              (t = 1 === r.nodeType && (" " + u + " ").replace(dt, " ")))
            ) {
              for (h = 0; (f = o[h++]); )
                while (t.indexOf(" " + f + " ") > -1)
                  t = t.replace(" " + f + " ", " ");
              e = i.trim(t);
              u !== e && i.attr(r, "class", e);
            }
        return this;
      },
      toggleClass: function (n, t) {
        var r = typeof n;
        return "boolean" == typeof t && "string" === r
          ? t
            ? this.addClass(n)
            : this.removeClass(n)
          : i.isFunction(n)
            ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t);
              })
            : this.each(function () {
                var t, f, u, e;
                if ("string" === r)
                  for (f = 0, u = i(this), e = n.match(s) || []; (t = e[f++]); )
                    u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                  (void 0 !== n && "boolean" !== r) ||
                    ((t = nt(this)),
                    t && i._data(this, "__className__", t),
                    i.attr(
                      this,
                      "class",
                      t || n === !1 ? "" : i._data(this, "__className__") || ""
                    ));
              });
      },
      hasClass: function (n) {
        for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
          if (
            1 === t.nodeType &&
            (" " + nt(t) + " ").replace(dt, " ").indexOf(i) > -1
          )
            return !0;
        return !1;
      },
    });
    i.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (n, t) {
        i.fn[t] = function (n, i) {
          return arguments.length > 0
            ? this.on(t, null, n, i)
            : this.trigger(t);
        };
      }
    );
    i.fn.extend({
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      },
    });
    var po = n.location,
      gi = i.now(),
      nr = /\?/,
      wo =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function (t) {
      if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
      var f,
        r = null,
        u = i.trim(t + "");
      return u &&
        !i.trim(
          u.replace(wo, function (n, t, i, u) {
            return (
              f && t && (r = 0),
              0 === r ? n : ((f = i || t), (r += !u - !i), "")
            );
          })
        )
        ? Function("return " + u)()
        : i.error("Invalid JSON: " + t);
    };
    i.parseXML = function (t) {
      var r, u;
      if (!t || "string" != typeof t) return null;
      try {
        n.DOMParser
          ? ((u = new n.DOMParser()), (r = u.parseFromString(t, "text/xml")))
          : ((r = new n.ActiveXObject("Microsoft.XMLDOM")),
            (r.async = "false"),
            r.loadXML(t));
      } catch (f) {
        r = void 0;
      }
      return (
        (r &&
          r.documentElement &&
          !r.getElementsByTagName("parsererror").length) ||
          i.error("Invalid XML: " + t),
        r
      );
    };
    var bo = /#.*$/,
      gf = /([?&])_=[^&]*/,
      ko = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      go = /^(?:GET|HEAD)$/,
      ns = /^\/\//,
      ne = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      te = {},
      tr = {},
      ie = "*/".concat("*"),
      ir = po.href,
      et = ne.exec(ir.toLowerCase()) || [];
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ir,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            et[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ie,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": i.parseJSON,
          "text xml": i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (n, t) {
        return t ? rr(rr(n, i.ajaxSettings), t) : rr(i.ajaxSettings, n);
      },
      ajaxPrefilter: re(te),
      ajaxTransport: re(tr),
      ajax: function (t, r) {
        function w(t, r, s, c) {
          var y,
            rt,
            it,
            w,
            tt,
            l = r;
          2 !== o &&
            ((o = 2),
            k && n.clearTimeout(k),
            (v = void 0),
            (b = c || ""),
            (f.readyState = t > 0 ? 4 : 0),
            (y = (t >= 200 && 300 > t) || 304 === t),
            s && (w = ts(u, f, s)),
            (w = is(u, w, f, y)),
            y
              ? (u.ifModified &&
                  ((tt = f.getResponseHeader("Last-Modified")),
                  tt && (i.lastModified[e] = tt),
                  (tt = f.getResponseHeader("etag")),
                  tt && (i.etag[e] = tt)),
                204 === t || "HEAD" === u.type
                  ? (l = "nocontent")
                  : 304 === t
                    ? (l = "notmodified")
                    : ((l = w.state), (rt = w.data), (it = w.error), (y = !it)))
              : ((it = l), (!t && l) || ((l = "error"), 0 > t && (t = 0))),
            (f.status = t),
            (f.statusText = (r || l) + ""),
            y ? g.resolveWith(h, [rt, l, f]) : g.rejectWith(h, [f, l, it]),
            f.statusCode(p),
            (p = void 0),
            a &&
              d.trigger(y ? "ajaxSuccess" : "ajaxError", [f, u, y ? rt : it]),
            nt.fireWith(h, [f, l]),
            a &&
              (d.trigger("ajaxComplete", [f, u]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((r = t), (t = void 0));
        r = r || {};
        var c,
          l,
          e,
          b,
          k,
          a,
          v,
          y,
          u = i.ajaxSetup({}, r),
          h = u.context || u,
          d = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          g = i.Deferred(),
          nt = i.Callbacks("once memory"),
          p = u.statusCode || {},
          tt = {},
          it = {},
          o = 0,
          rt = "canceled",
          f = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (2 === o) {
                if (!y)
                  for (y = {}; (t = ko.exec(b)); ) y[t[1].toLowerCase()] = t[2];
                t = y[n.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === o ? b : null;
            },
            setRequestHeader: function (n, t) {
              var i = n.toLowerCase();
              return o || ((n = it[i] = it[i] || n), (tt[n] = t)), this;
            },
            overrideMimeType: function (n) {
              return o || (u.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (2 > o) for (t in n) p[t] = [p[t], n[t]];
                else f.always(n[f.status]);
              return this;
            },
            abort: function (n) {
              var t = n || rt;
              return v && v.abort(t), w(0, t), this;
            },
          };
        if (
          ((g.promise(f).complete = nt.add),
          (f.success = f.done),
          (f.error = f.fail),
          (u.url = ((t || u.url || ir) + "")
            .replace(bo, "")
            .replace(ns, et[1] + "//")),
          (u.type = r.method || r.type || u.method || u.type),
          (u.dataTypes = i
            .trim(u.dataType || "*")
            .toLowerCase()
            .match(s) || [""]),
          null == u.crossDomain &&
            ((c = ne.exec(u.url.toLowerCase())),
            (u.crossDomain = !(
              !c ||
              (c[1] === et[1] &&
                c[2] === et[2] &&
                (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                  (et[3] || ("http:" === et[1] ? "80" : "443")))
            ))),
          u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = i.param(u.data, u.traditional)),
          ue(te, u, r, f),
          2 === o)
        )
          return f;
        a = i.event && u.global;
        a && 0 == i.active++ && i.event.trigger("ajaxStart");
        u.type = u.type.toUpperCase();
        u.hasContent = !go.test(u.type);
        e = u.url;
        u.hasContent ||
          (u.data &&
            ((e = u.url += (nr.test(e) ? "&" : "?") + u.data), delete u.data),
          u.cache === !1 &&
            (u.url = gf.test(e)
              ? e.replace(gf, "$1_=" + gi++)
              : e + (nr.test(e) ? "&" : "?") + "_=" + gi++));
        u.ifModified &&
          (i.lastModified[e] &&
            f.setRequestHeader("If-Modified-Since", i.lastModified[e]),
          i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e]));
        ((u.data && u.hasContent && u.contentType !== !1) || r.contentType) &&
          f.setRequestHeader("Content-Type", u.contentType);
        f.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                ("*" !== u.dataTypes[0] ? ", " + ie + "; q=0.01" : "")
            : u.accepts["*"]
        );
        for (l in u.headers) f.setRequestHeader(l, u.headers[l]);
        if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o))
          return f.abort();
        rt = "abort";
        for (l in { success: 1, error: 1, complete: 1 }) f[l](u[l]);
        if ((v = ue(tr, u, r, f))) {
          if (((f.readyState = 1), a && d.trigger("ajaxSend", [f, u]), 2 === o))
            return f;
          u.async &&
            u.timeout > 0 &&
            (k = n.setTimeout(function () {
              f.abort("timeout");
            }, u.timeout));
          try {
            o = 1;
            v.send(tt, w);
          } catch (ut) {
            if (!(2 > o)) throw ut;
            w(-1, ut);
          }
        } else w(-1, "No Transport");
        return f;
      },
      getJSON: function (n, t, r) {
        return i.get(n, t, r, "json");
      },
      getScript: function (n, t) {
        return i.get(n, void 0, t, "script");
      },
    });
    i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, u, f) {
        return (
          i.isFunction(r) && ((f = f || u), (u = r), (r = void 0)),
          i.ajax(
            i.extend(
              { url: n, type: t, dataType: f, data: r, success: u },
              i.isPlainObject(n) && n
            )
          )
        );
      };
    });
    i._evalUrl = function (n) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    };
    i.fn.extend({
      wrapAll: function (n) {
        if (i.isFunction(n))
          return this.each(function (t) {
            i(this).wrapAll(n.call(this, t));
          });
        if (this[0]) {
          var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]);
          t.map(function () {
            for (var n = this; n.firstChild && 1 === n.firstChild.nodeType; )
              n = n.firstChild;
            return n;
          }).append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return i.isFunction(n)
          ? this.each(function (t) {
              i(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = i(this),
                r = t.contents();
              r.length ? r.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (n) {
        var t = i.isFunction(n);
        return this.each(function (r) {
          i(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            i.nodeName(this, "body") || i(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
    i.expr.filters.hidden = function (n) {
      return r.reliableHiddenOffsets()
        ? n.offsetWidth <= 0 &&
            n.offsetHeight <= 0 &&
            !n.getClientRects().length
        : us(n);
    };
    i.expr.filters.visible = function (n) {
      return !i.expr.filters.hidden(n);
    };
    var fs = /%20/g,
      es = /\[\]$/,
      fe = /\r?\n/g,
      os = /^(?:submit|button|image|reset|file)$/i,
      ss = /^(?:input|select|textarea|keygen)/i;
    i.param = function (n, t) {
      var r,
        u = [],
        f = function (n, t) {
          t = i.isFunction(t) ? t() : null == t ? "" : t;
          u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t);
        };
      if (
        (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional),
        i.isArray(n) || (n.jquery && !i.isPlainObject(n)))
      )
        i.each(n, function () {
          f(this.name, this.value);
        });
      else for (r in n) ur(r, n[r], t, f);
      return u.join("&").replace(fs, "+");
    };
    i.fn.extend({
      serialize: function () {
        return i.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var n = i.prop(this, "elements");
          return n ? i.makeArray(n) : this;
        })
          .filter(function () {
            var n = this.type;
            return (
              this.name &&
              !i(this).is(":disabled") &&
              ss.test(this.nodeName) &&
              !os.test(n) &&
              (this.checked || !si.test(n))
            );
          })
          .map(function (n, t) {
            var r = i(this).val();
            return null == r
              ? null
              : i.isArray(r)
                ? i.map(r, function (n) {
                    return { name: t.name, value: n.replace(fe, "\r\n") };
                  })
                : { name: t.name, value: r.replace(fe, "\r\n") };
          })
          .get();
      },
    });
    i.ajaxSettings.xhr =
      void 0 !== n.ActiveXObject
        ? function () {
            return this.isLocal
              ? ee()
              : u.documentMode > 8
                ? fr()
                : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                    fr()) ||
                  ee();
          }
        : fr;
    var hs = 0,
      gt = {},
      ct = i.ajaxSettings.xhr();
    return (
      n.attachEvent &&
        n.attachEvent("onunload", function () {
          for (var n in gt) gt[n](void 0, !0);
        }),
      (r.cors = !!ct && "withCredentials" in ct),
      (ct = r.ajax = !!ct),
      ct &&
        i.ajaxTransport(function (t) {
          if (!t.crossDomain || r.cors) {
            var u;
            return {
              send: function (r, f) {
                var o,
                  e = t.xhr(),
                  s = ++hs;
                if (
                  (e.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType &&
                  e.overrideMimeType &&
                  e.overrideMimeType(t.mimeType);
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r)
                  void 0 !== r[o] && e.setRequestHeader(o, r[o] + "");
                e.send((t.hasContent && t.data) || null);
                u = function (n, r) {
                  var o, c, h;
                  if (u && (r || 4 === e.readyState))
                    if (
                      (delete gt[s],
                      (u = void 0),
                      (e.onreadystatechange = i.noop),
                      r)
                    )
                      4 !== e.readyState && e.abort();
                    else {
                      h = {};
                      o = e.status;
                      "string" == typeof e.responseText &&
                        (h.text = e.responseText);
                      try {
                        c = e.statusText;
                      } catch (l) {
                        c = "";
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = h.text ? 200 : 404);
                    }
                  h && f(o, c, h, e.getAllResponseHeaders());
                };
                t.async
                  ? 4 === e.readyState
                    ? n.setTimeout(u)
                    : (e.onreadystatechange = gt[s] = u)
                  : u();
              },
              abort: function () {
                u && u(void 0, !0);
              },
            };
          }
        }),
      i.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (n) {
            return i.globalEval(n), n;
          },
        },
      }),
      i.ajaxPrefilter("script", function (n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && ((n.type = "GET"), (n.global = !1));
      }),
      i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
          var t,
            r = u.head || i("head")[0] || u.documentElement;
          return {
            send: function (i, f) {
              t = u.createElement("script");
              t.async = !0;
              n.scriptCharset && (t.charset = n.scriptCharset);
              t.src = n.url;
              t.onload = t.onreadystatechange = function (n, i) {
                (i || !t.readyState || /loaded|complete/.test(t.readyState)) &&
                  ((t.onload = t.onreadystatechange = null),
                  t.parentNode && t.parentNode.removeChild(t),
                  (t = null),
                  i || f(200, "success"));
              };
              r.insertBefore(t, r.firstChild);
            },
            abort: function () {
              t && t.onload(void 0, !0);
            },
          };
        }
      }),
      (er = []),
      (ni = /(=)\?(?=&|$)|\?\?/),
      i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var n = er.pop() || i.expando + "_" + gi++;
          return (this[n] = !0), n;
        },
      }),
      i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var f,
          e,
          o,
          s =
            t.jsonp !== !1 &&
            (ni.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                ni.test(t.data) &&
                "data");
        if (s || "jsonp" === t.dataTypes[0])
          return (
            (f = t.jsonpCallback =
              i.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(ni, "$1" + f))
              : t.jsonp !== !1 &&
                (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + f),
            (t.converters["script json"] = function () {
              return o || i.error(f + " was not called"), o[0];
            }),
            (t.dataTypes[0] = "json"),
            (e = n[f]),
            (n[f] = function () {
              o = arguments;
            }),
            u.always(function () {
              void 0 === e ? i(n).removeProp(f) : (n[f] = e);
              t[f] && ((t.jsonpCallback = r.jsonpCallback), er.push(f));
              o && i.isFunction(e) && e(o[0]);
              o = e = void 0;
            }),
            "script"
          );
      }),
      (i.parseHTML = function (n, t, r) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && ((r = t), (t = !1));
        t = t || u;
        var f = vr.exec(n),
          e = !r && [];
        return f
          ? [t.createElement(f[1])]
          : ((f = hu([n], t, e)),
            e && e.length && i(e).remove(),
            i.merge([], f.childNodes));
      }),
      (or = i.fn.load),
      (i.fn.load = function (n, t, r) {
        if ("string" != typeof n && or) return or.apply(this, arguments);
        var u,
          o,
          s,
          f = this,
          e = n.indexOf(" ");
        return (
          e > -1 && ((u = i.trim(n.slice(e, n.length))), (n = n.slice(0, e))),
          i.isFunction(t)
            ? ((r = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          f.length > 0 &&
            i
              .ajax({ url: n, type: o || "GET", dataType: "html", data: t })
              .done(function (n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n);
              })
              .always(
                r &&
                  function (n, t) {
                    f.each(function () {
                      r.apply(this, s || [n.responseText, t, n]);
                    });
                  }
              ),
          this
        );
      }),
      i.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (n, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        }
      ),
      (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
          return n === t.elem;
        }).length;
      }),
      (i.offset = {
        setOffset: function (n, t, r) {
          var e,
            o,
            s,
            h,
            u,
            c,
            v,
            l = i.css(n, "position"),
            a = i(n),
            f = {};
          "static" === l && (n.style.position = "relative");
          u = a.offset();
          s = i.css(n, "top");
          c = i.css(n, "left");
          v =
            ("absolute" === l || "fixed" === l) &&
            i.inArray("auto", [s, c]) > -1;
          v
            ? ((e = a.position()), (h = e.top), (o = e.left))
            : ((h = parseFloat(s) || 0), (o = parseFloat(c) || 0));
          i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
          null != t.top && (f.top = t.top - u.top + h);
          null != t.left && (f.left = t.left - u.left + o);
          "using" in t ? t.using.call(n, f) : a.css(f);
        },
      }),
      i.fn.extend({
        offset: function (n) {
          if (arguments.length)
            return void 0 === n
              ? this
              : this.each(function (t) {
                  i.offset.setOffset(this, n, t);
                });
          var t,
            f,
            u = { top: 0, left: 0 },
            r = this[0],
            e = r && r.ownerDocument;
          if (e)
            return (
              (t = e.documentElement),
              i.contains(t, r)
                ? ("undefined" != typeof r.getBoundingClientRect &&
                    (u = r.getBoundingClientRect()),
                  (f = oe(e)),
                  {
                    top:
                      u.top +
                      (f.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      u.left +
                      (f.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0),
                  })
                : u
            );
        },
        position: function () {
          if (this[0]) {
            var n,
              r,
              t = { top: 0, left: 0 },
              u = this[0];
            return (
              "fixed" === i.css(u, "position")
                ? (r = u.getBoundingClientRect())
                : ((n = this.offsetParent()),
                  (r = this.offset()),
                  i.nodeName(n[0], "html") || (t = n.offset()),
                  (t.top += i.css(n[0], "borderTopWidth", !0)),
                  (t.left += i.css(n[0], "borderLeftWidth", !0))),
              {
                top: r.top - t.top - i.css(u, "marginTop", !0),
                left: r.left - t.left - i.css(u, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var n = this.offsetParent;
              n && !i.nodeName(n, "html") && "static" === i.css(n, "position");

            )
              n = n.offsetParent;
            return n || nf;
          });
        },
      }),
      i.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (n, t) {
          var r = /Y/.test(t);
          i.fn[n] = function (u) {
            return y(
              this,
              function (n, u, f) {
                var e = oe(n);
                return void 0 === f
                  ? e
                    ? t in e
                      ? e[t]
                      : e.document.documentElement[u]
                    : n[u]
                  : void (e
                      ? e.scrollTo(
                          r ? i(e).scrollLeft() : f,
                          r ? f : i(e).scrollTop()
                        )
                      : (n[u] = f));
              },
              n,
              u,
              arguments.length,
              null
            );
          };
        }
      ),
      i.each(["top", "left"], function (n, t) {
        i.cssHooks[t] = bi(r.pixelPosition, function (n, r) {
          if (r)
            return (r = p(n, t)), pt.test(r) ? i(n).position()[t] + "px" : r;
        });
      }),
      i.each({ Height: "height", Width: "width" }, function (n, t) {
        i.each(
          { padding: "inner" + n, content: t, "": "outer" + n },
          function (r, u) {
            i.fn[u] = function (u, f) {
              var e = arguments.length && (r || "boolean" != typeof u),
                o = r || (u === !0 || f === !0 ? "margin" : "border");
              return y(
                this,
                function (t, r, u) {
                  var f;
                  return i.isWindow(t)
                    ? t.document.documentElement["client" + n]
                    : 9 === t.nodeType
                      ? ((f = t.documentElement),
                        Math.max(
                          t.body["scroll" + n],
                          f["scroll" + n],
                          t.body["offset" + n],
                          f["offset" + n],
                          f["client" + n]
                        ))
                      : void 0 === u
                        ? i.css(t, r, o)
                        : i.style(t, r, u, o);
                },
                t,
                e ? u : void 0,
                e,
                null
              );
            };
          }
        );
      }),
      i.fn.extend({
        bind: function (n, t, i) {
          return this.on(n, null, t, i);
        },
        unbind: function (n, t) {
          return this.off(n, null, t);
        },
        delegate: function (n, t, i, r) {
          return this.on(t, n, i, r);
        },
        undelegate: function (n, t, i) {
          return 1 === arguments.length
            ? this.off(n, "**")
            : this.off(t, n || "**", i);
        },
      }),
      (i.fn.size = function () {
        return this.length;
      }),
      (i.fn.andSelf = i.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return i;
        }),
      (se = n.jQuery),
      (he = n.$),
      (i.noConflict = function (t) {
        return (
          n.$ === i && (n.$ = he), t && n.jQuery === i && (n.jQuery = se), i
        );
      }),
      t || (n.jQuery = n.$ = i),
      i
    );
  }),
  !(function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery"], n)
      : "object" == typeof module && module.exports
        ? (module.exports = n(require("jquery")))
        : n(jQuery);
  })(function (n) {
    n.extend(n.fn, {
      validate: function (t) {
        if (!this.length)
          return void (
            t &&
            t.debug &&
            window.console &&
            console.warn("Nothing selected, can't validate, returning nothing.")
          );
        var i = n.data(this[0], "validator");
        return i
          ? i
          : (this.attr("novalidate", "novalidate"),
            (i = new n.validator(t, this[0])),
            n.data(this[0], "validator", i),
            i.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(this).attr("formnovalidate") &&
                  (i.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (t) {
                function r() {
                  var u, r;
                  return i.settings.submitHandler
                    ? (i.submitButton &&
                        (u = n("<input type='hidden'/>")
                          .attr("name", i.submitButton.name)
                          .val(n(i.submitButton).val())
                          .appendTo(i.currentForm)),
                      (r = i.settings.submitHandler.call(i, i.currentForm, t)),
                      i.submitButton && u.remove(),
                      void 0 !== r ? r : !1)
                    : !0;
                }
                return (
                  i.settings.debug && t.preventDefault(),
                  i.cancelSubmit
                    ? ((i.cancelSubmit = !1), r())
                    : i.form()
                      ? i.pendingRequest
                        ? ((i.formSubmitted = !0), !1)
                        : r()
                      : (i.focusInvalid(), !1)
                );
              })),
            i);
      },
      valid: function () {
        var t, i, r;
        return (
          n(this[0]).is("form")
            ? (t = this.validate().form())
            : ((r = []),
              (t = !0),
              (i = n(this[0].form).validate()),
              this.each(function () {
                t = i.element(this) && t;
                t || (r = r.concat(i.errorList));
              }),
              (i.errorList = r)),
          t
        );
      },
      rules: function (t, i) {
        if (this.length) {
          var e,
            s,
            f,
            u,
            o,
            h,
            r = this[0];
          if (t)
            switch (
              ((e = n.data(r.form, "validator").settings),
              (s = e.rules),
              (f = n.validator.staticRules(r)),
              t)
            ) {
              case "add":
                n.extend(f, n.validator.normalizeRule(i));
                delete f.messages;
                s[r.name] = f;
                i.messages &&
                  (e.messages[r.name] = n.extend(
                    e.messages[r.name],
                    i.messages
                  ));
                break;
              case "remove":
                return i
                  ? ((h = {}),
                    n.each(i.split(/\s/), function (t, i) {
                      h[i] = f[i];
                      delete f[i];
                      "required" === i && n(r).removeAttr("aria-required");
                    }),
                    h)
                  : (delete s[r.name], f);
            }
          return (
            (u = n.validator.normalizeRules(
              n.extend(
                {},
                n.validator.classRules(r),
                n.validator.attributeRules(r),
                n.validator.dataRules(r),
                n.validator.staticRules(r)
              ),
              r
            )),
            u.required &&
              ((o = u.required),
              delete u.required,
              (u = n.extend({ required: o }, u)),
              n(r).attr("aria-required", "true")),
            u.remote &&
              ((o = u.remote),
              delete u.remote,
              (u = n.extend(u, { remote: o }))),
            u
          );
        }
      },
    });
    n.extend(n.expr[":"], {
      blank: function (t) {
        return !n.trim("" + n(t).val());
      },
      filled: function (t) {
        var i = n(t).val();
        return null !== i && !!n.trim("" + i);
      },
      unchecked: function (t) {
        return !n(t).prop("checked");
      },
    });
    n.validator = function (t, i) {
      this.settings = n.extend(!0, {}, n.validator.defaults, t);
      this.currentForm = i;
      this.init();
    };
    n.validator.format = function (t, i) {
      return 1 === arguments.length
        ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i);
          }
        : void 0 === i
          ? t
          : (arguments.length > 2 &&
              i.constructor !== Array &&
              (i = n.makeArray(arguments).slice(1)),
            i.constructor !== Array && (i = [i]),
            n.each(i, function (n, i) {
              t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function () {
                return i;
              });
            }),
            t);
    };
    n.extend(n.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: n([]),
        errorLabelContainer: n([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (n) {
          this.lastActive = n;
          this.settings.focusCleanup &&
            (this.settings.unhighlight &&
              this.settings.unhighlight.call(
                this,
                n,
                this.settings.errorClass,
                this.settings.validClass
              ),
            this.hideThese(this.errorsFor(n)));
        },
        onfocusout: function (n) {
          !this.checkable(n) &&
            (n.name in this.submitted || !this.optional(n)) &&
            this.element(n);
        },
        onkeyup: function (t, i) {
          (9 === i.which && "" === this.elementValue(t)) ||
            -1 !==
              n.inArray(
                i.keyCode,
                [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
              ) ||
            ((t.name in this.submitted || t.name in this.invalid) &&
              this.element(t));
        },
        onclick: function (n) {
          n.name in this.submitted
            ? this.element(n)
            : n.parentNode.name in this.submitted && this.element(n.parentNode);
        },
        highlight: function (t, i, r) {
          "radio" === t.type
            ? this.findByName(t.name).addClass(i).removeClass(r)
            : n(t).addClass(i).removeClass(r);
        },
        unhighlight: function (t, i, r) {
          "radio" === t.type
            ? this.findByName(t.name).removeClass(i).addClass(r)
            : n(t).removeClass(i).addClass(r);
        },
      },
      setDefaults: function (t) {
        n.extend(n.validator.defaults, t);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: n.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: n.validator.format("Please enter at least {0} characters."),
        rangelength: n.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: n.validator.format("Please enter a value between {0} and {1}."),
        max: n.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: n.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
        step: n.validator.format("Please enter a multiple of {0}."),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function i(t) {
            var r = n.data(this.form, "validator"),
              u = "on" + t.type.replace(/^validate/, ""),
              i = r.settings;
            i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t);
          }
          this.labelContainer = n(this.settings.errorLabelContainer);
          this.errorContext =
            (this.labelContainer.length && this.labelContainer) ||
            n(this.currentForm);
          this.containers = n(this.settings.errorContainer).add(
            this.settings.errorLabelContainer
          );
          this.submitted = {};
          this.valueCache = {};
          this.pendingRequest = 0;
          this.pending = {};
          this.invalid = {};
          this.reset();
          var t,
            r = (this.groups = {});
          n.each(this.settings.groups, function (t, i) {
            "string" == typeof i && (i = i.split(/\s/));
            n.each(i, function (n, i) {
              r[i] = t;
            });
          });
          t = this.settings.rules;
          n.each(t, function (i, r) {
            t[i] = n.validator.normalizeRule(r);
          });
          n(this.currentForm)
            .on(
              "focusin.validate focusout.validate keyup.validate",
              ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",
              i
            )
            .on(
              "click.validate",
              "select, option, [type='radio'], [type='checkbox']",
              i
            );
          this.settings.invalidHandler &&
            n(this.currentForm).on(
              "invalid-form.validate",
              this.settings.invalidHandler
            );
          n(this.currentForm)
            .find("[required], [data-rule-required], .required")
            .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            n.extend(this.submitted, this.errorMap),
            (this.invalid = n.extend({}, this.errorMap)),
            this.valid() ||
              n(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var n = 0, t = (this.currentElements = this.elements());
            t[n];
            n++
          )
            this.check(t[n]);
          return this.valid();
        },
        element: function (t) {
          var e,
            o,
            i = this.clean(t),
            r = this.validationTargetFor(i),
            u = this,
            f = !0;
          return (
            void 0 === r
              ? delete this.invalid[i.name]
              : (this.prepareElement(r),
                (this.currentElements = n(r)),
                (o = this.groups[r.name]),
                o &&
                  n.each(this.groups, function (n, t) {
                    t === o &&
                      n !== r.name &&
                      ((i = u.validationTargetFor(u.clean(u.findByName(n)))),
                      i &&
                        i.name in u.invalid &&
                        (u.currentElements.push(i), (f = f && u.check(i))));
                  }),
                (e = this.check(r) !== !1),
                (f = f && e),
                (this.invalid[r.name] = e ? !1 : !0),
                this.numberOfInvalids() ||
                  (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n(t).attr("aria-invalid", !e)),
            f
          );
        },
        showErrors: function (t) {
          if (t) {
            var i = this;
            n.extend(this.errorMap, t);
            this.errorList = n.map(this.errorMap, function (n, t) {
              return { message: n, element: i.findByName(t)[0] };
            });
            this.successList = n.grep(this.successList, function (n) {
              return !(n.name in t);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          n.fn.resetForm && n(this.currentForm).resetForm();
          this.invalid = {};
          this.submitted = {};
          this.prepareForm();
          this.hideErrors();
          var t = this.elements()
            .removeData("previousValue")
            .removeAttr("aria-invalid");
          this.resetElements(t);
        },
        resetElements: function (n) {
          var t;
          if (this.settings.unhighlight)
            for (t = 0; n[t]; t++)
              this.settings.unhighlight.call(
                this,
                n[t],
                this.settings.errorClass,
                ""
              ),
                this.findByName(n[t].name).removeClass(
                  this.settings.validClass
                );
          else
            n.removeClass(this.settings.errorClass).removeClass(
              this.settings.validClass
            );
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (n) {
          var t,
            i = 0;
          for (t in n) n[t] && i++;
          return i;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (n) {
          n.not(this.containers).text("");
          this.addWrapper(n).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              n(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (t) {}
        },
        findLastActive: function () {
          var t = this.lastActive;
          return (
            t &&
            1 ===
              n.grep(this.errorList, function (n) {
                return n.element.name === t.name;
              }).length &&
            t
          );
        },
        elements: function () {
          var t = this,
            i = {};
          return n(this.currentForm)
            .find("input, select, textarea, [contenteditable]")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              var r = this.name || n(this).attr("name");
              return (
                !r &&
                  t.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.hasAttribute("contenteditable") &&
                  (this.form = n(this).closest("form")[0]),
                r in i || !t.objectLength(n(this).rules())
                  ? !1
                  : ((i[r] = !0), !0)
              );
            });
        },
        clean: function (t) {
          return n(t)[0];
        },
        errors: function () {
          var t = this.settings.errorClass.split(" ").join(".");
          return n(this.settings.errorElement + "." + t, this.errorContext);
        },
        resetInternals: function () {
          this.successList = [];
          this.errorList = [];
          this.errorMap = {};
          this.toShow = n([]);
          this.toHide = n([]);
        },
        reset: function () {
          this.resetInternals();
          this.currentElements = n([]);
        },
        prepareForm: function () {
          this.reset();
          this.toHide = this.errors().add(this.containers);
        },
        prepareElement: function (n) {
          this.reset();
          this.toHide = this.errorsFor(n);
        },
        elementValue: function (t) {
          var i,
            r,
            f = n(t),
            u = t.type;
          return "radio" === u || "checkbox" === u
            ? this.findByName(t.name).filter(":checked").val()
            : "number" === u && "undefined" != typeof t.validity
              ? t.validity.badInput
                ? "NaN"
                : f.val()
              : ((i = t.hasAttribute("contenteditable") ? f.text() : f.val()),
                "file" === u
                  ? "C:\\fakepath\\" === i.substr(0, 12)
                    ? i.substr(12)
                    : ((r = i.lastIndexOf("/")),
                      r >= 0
                        ? i.substr(r + 1)
                        : ((r = i.lastIndexOf("\\")),
                          r >= 0 ? i.substr(r + 1) : i))
                  : "string" == typeof i
                    ? i.replace(/\r/g, "")
                    : i);
        },
        check: function (t) {
          t = this.validationTargetFor(this.clean(t));
          var u,
            f,
            r,
            i = n(t).rules(),
            h = n.map(i, function (n, t) {
              return t;
            }).length,
            s = !1,
            e = this.elementValue(t);
          if ("function" == typeof i.normalizer) {
            if (((e = i.normalizer.call(t, e)), "string" != typeof e))
              throw new TypeError(
                "The normalizer should return a string value."
              );
            delete i.normalizer;
          }
          for (f in i) {
            r = { method: f, parameters: i[f] };
            try {
              if (
                ((u = n.validator.methods[f].call(this, e, t, r.parameters)),
                "dependency-mismatch" === u && 1 === h)
              ) {
                s = !0;
                continue;
              }
              if (((s = !1), "pending" === u))
                return void (this.toHide = this.toHide.not(this.errorsFor(t)));
              if (!u) return this.formatAndAdd(t, r), !1;
            } catch (o) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      t.id +
                      ", check the '" +
                      r.method +
                      "' method.",
                    o
                  ),
                o instanceof TypeError &&
                  (o.message +=
                    ".  Exception occurred when checking element " +
                    t.id +
                    ", check the '" +
                    r.method +
                    "' method."),
                o)
              );
            }
          }
          if (!s) return this.objectLength(i) && this.successList.push(t), !0;
        },
        customDataMessage: function (t, i) {
          return (
            n(t).data(
              "msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
            ) || n(t).data("msg")
          );
        },
        customMessage: function (n, t) {
          var i = this.settings.messages[n];
          return i && (i.constructor === String ? i : i[t]);
        },
        findDefined: function () {
          for (var n = 0; n < arguments.length; n++)
            if (void 0 !== arguments[n]) return arguments[n];
        },
        defaultMessage: function (t, i) {
          var r = this.findDefined(
              this.customMessage(t.name, i.method),
              this.customDataMessage(t, i.method),
              (!this.settings.ignoreTitle && t.title) || void 0,
              n.validator.messages[i.method],
              "<strong>Warning: No message defined for " + t.name + "</strong>"
            ),
            u = /\$?\{(\d+)\}/g;
          return (
            "function" == typeof r
              ? (r = r.call(this, i.parameters, t))
              : u.test(r) &&
                (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)),
            r
          );
        },
        formatAndAdd: function (n, t) {
          var i = this.defaultMessage(n, t);
          this.errorList.push({ message: i, element: n, method: t.method });
          this.errorMap[n.name] = i;
          this.submitted[n.name] = i;
        },
        addWrapper: function (n) {
          return (
            this.settings.wrapper &&
              (n = n.add(n.parent(this.settings.wrapper))),
            n
          );
        },
        defaultShowErrors: function () {
          for (var i, t, n = 0; this.errorList[n]; n++)
            (t = this.errorList[n]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  t.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(t.element, t.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (n = 0; this.successList[n]; n++)
              this.showLabel(this.successList[n]);
          if (this.settings.unhighlight)
            for (n = 0, i = this.validElements(); i[n]; n++)
              this.settings.unhighlight.call(
                this,
                i[n],
                this.settings.errorClass,
                this.settings.validClass
              );
          this.toHide = this.toHide.not(this.toShow);
          this.hideErrors();
          this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return n(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (t, i) {
          var u,
            s,
            e,
            o,
            r = this.errorsFor(t),
            h = this.idOrName(t),
            f = n(t).attr("aria-describedby");
          r.length
            ? (r
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              r.html(i))
            : ((r = n("<" + this.settings.errorElement + ">")
                .attr("id", h + "-error")
                .addClass(this.settings.errorClass)
                .html(i || "")),
              (u = r),
              this.settings.wrapper &&
                (u = r
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(u)
                : this.settings.errorPlacement
                  ? this.settings.errorPlacement(u, n(t))
                  : u.insertAfter(t),
              r.is("label")
                ? r.attr("for", h)
                : 0 ===
                    r.parents("label[for='" + this.escapeCssMeta(h) + "']")
                      .length &&
                  ((e = r.attr("id")),
                  f
                    ? f.match(
                        new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")
                      ) || (f += " " + e)
                    : (f = e),
                  n(t).attr("aria-describedby", f),
                  (s = this.groups[t.name]),
                  s &&
                    ((o = this),
                    n.each(o.groups, function (t, i) {
                      i === s &&
                        n(
                          "[name='" + o.escapeCssMeta(t) + "']",
                          o.currentForm
                        ).attr("aria-describedby", r.attr("id"));
                    }))));
          !i &&
            this.settings.success &&
            (r.text(""),
            "string" == typeof this.settings.success
              ? r.addClass(this.settings.success)
              : this.settings.success(r, t));
          this.toShow = this.toShow.add(r);
        },
        errorsFor: function (t) {
          var r = this.escapeCssMeta(this.idOrName(t)),
            u = n(t).attr("aria-describedby"),
            i = "label[for='" + r + "'], label[for='" + r + "'] *";
          return (
            u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")),
            this.errors().filter(i)
          );
        },
        escapeCssMeta: function (n) {
          return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
        },
        idOrName: function (n) {
          return (
            this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
          );
        },
        validationTargetFor: function (t) {
          return (
            this.checkable(t) && (t = this.findByName(t.name)),
            n(t).not(this.settings.ignore)[0]
          );
        },
        checkable: function (n) {
          return /radio|checkbox/i.test(n.type);
        },
        findByName: function (t) {
          return n(this.currentForm).find(
            "[name='" + this.escapeCssMeta(t) + "']"
          );
        },
        getLength: function (t, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return n("option:selected", i).length;
            case "input":
              if (this.checkable(i))
                return this.findByName(i.name).filter(":checked").length;
          }
          return t.length;
        },
        depend: function (n, t) {
          return this.dependTypes[typeof n]
            ? this.dependTypes[typeof n](n, t)
            : !0;
        },
        dependTypes: {
          boolean: function (n) {
            return n;
          },
          string: function (t, i) {
            return !!n(t, i.form).length;
          },
          function: function (n, t) {
            return n(t);
          },
        },
        optional: function (t) {
          var i = this.elementValue(t);
          return (
            !n.validator.methods.required.call(this, i, t) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (t) {
          this.pending[t.name] ||
            (this.pendingRequest++,
            n(t).addClass(this.settings.pendingClass),
            (this.pending[t.name] = !0));
        },
        stopRequest: function (t, i) {
          this.pendingRequest--;
          this.pendingRequest < 0 && (this.pendingRequest = 0);
          delete this.pending[t.name];
          n(t).removeClass(this.settings.pendingClass);
          i && 0 === this.pendingRequest && this.formSubmitted && this.form()
            ? (n(this.currentForm).submit(), (this.formSubmitted = !1))
            : !i &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              (n(this.currentForm).triggerHandler("invalid-form", [this]),
              (this.formSubmitted = !1));
        },
        previousValue: function (t, i) {
          return (
            n.data(t, "previousValue") ||
            n.data(t, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(t, { method: i }),
            })
          );
        },
        destroy: function () {
          this.resetForm();
          n(this.currentForm)
            .off(".validate")
            .removeData("validator")
            .find(".validate-equalTo-blur")
            .off(".validate-equalTo")
            .removeClass("validate-equalTo-blur");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (t, i) {
        t.constructor === String
          ? (this.classRuleSettings[t] = i)
          : n.extend(this.classRuleSettings, t);
      },
      classRules: function (t) {
        var i = {},
          r = n(t).attr("class");
        return (
          r &&
            n.each(r.split(" "), function () {
              this in n.validator.classRuleSettings &&
                n.extend(i, n.validator.classRuleSettings[this]);
            }),
          i
        );
      },
      normalizeAttributeRule: function (n, t, i, r) {
        /min|max|step/.test(i) &&
          (null === t || /number|range|text/.test(t)) &&
          ((r = Number(r)), isNaN(r) && (r = void 0));
        r || 0 === r ? (n[i] = r) : t === i && "range" !== t && (n[i] = !0);
      },
      attributeRules: function (t) {
        var r,
          i,
          u = {},
          f = n(t),
          e = t.getAttribute("type");
        for (r in n.validator.methods)
          "required" === r
            ? ((i = t.getAttribute(r)), "" === i && (i = !0), (i = !!i))
            : (i = f.attr(r)),
            this.normalizeAttributeRule(u, e, r, i);
        return (
          u.maxlength &&
            /-1|2147483647|524288/.test(u.maxlength) &&
            delete u.maxlength,
          u
        );
      },
      dataRules: function (t) {
        var i,
          r,
          u = {},
          f = n(t),
          e = t.getAttribute("type");
        for (i in n.validator.methods)
          (r = f.data(
            "rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(u, e, i, r);
        return u;
      },
      staticRules: function (t) {
        var i = {},
          r = n.data(t.form, "validator");
        return (
          r.settings.rules &&
            (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
          i
        );
      },
      normalizeRules: function (t, i) {
        return (
          n.each(t, function (r, u) {
            if (u === !1) return void delete t[r];
            if (u.param || u.depends) {
              var f = !0;
              switch (typeof u.depends) {
                case "string":
                  f = !!n(u.depends, i.form).length;
                  break;
                case "function":
                  f = u.depends.call(i, i);
              }
              f
                ? (t[r] = void 0 !== u.param ? u.param : !0)
                : (n.data(i.form, "validator").resetElements(n(i)),
                  delete t[r]);
            }
          }),
          n.each(t, function (r, u) {
            t[r] = n.isFunction(u) && "normalizer" !== r ? u(i) : u;
          }),
          n.each(["minlength", "maxlength"], function () {
            t[this] && (t[this] = Number(t[this]));
          }),
          n.each(["rangelength", "range"], function () {
            var i;
            t[this] &&
              (n.isArray(t[this])
                ? (t[this] = [Number(t[this][0]), Number(t[this][1])])
                : "string" == typeof t[this] &&
                  ((i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (t[this] = [Number(i[0]), Number(i[1])])));
          }),
          n.validator.autoCreateRanges &&
            (null != t.min &&
              null != t.max &&
              ((t.range = [t.min, t.max]), delete t.min, delete t.max),
            null != t.minlength &&
              null != t.maxlength &&
              ((t.rangelength = [t.minlength, t.maxlength]),
              delete t.minlength,
              delete t.maxlength)),
          t
        );
      },
      normalizeRule: function (t) {
        if ("string" == typeof t) {
          var i = {};
          n.each(t.split(/\s/), function () {
            i[this] = !0;
          });
          t = i;
        }
        return t;
      },
      addMethod: function (t, i, r) {
        n.validator.methods[t] = i;
        n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
        i.length < 3 &&
          n.validator.addClassRules(t, n.validator.normalizeRule(t));
      },
      methods: {
        required: function (t, i, r) {
          if (!this.depend(r, i)) return "dependency-mismatch";
          if ("select" === i.nodeName.toLowerCase()) {
            var u = n(i).val();
            return u && u.length > 0;
          }
          return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0;
        },
        email: function (n, t) {
          return (
            this.optional(t) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              n
            )
          );
        },
        url: function (n, t) {
          return (
            this.optional(t) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              n
            )
          );
        },
        date: function (n, t) {
          return (
            this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
          );
        },
        dateISO: function (n, t) {
          return (
            this.optional(t) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              n
            )
          );
        },
        number: function (n, t) {
          return (
            this.optional(t) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
          );
        },
        digits: function (n, t) {
          return this.optional(t) || /^\d+$/.test(n);
        },
        minlength: function (t, i, r) {
          var u = n.isArray(t) ? t.length : this.getLength(t, i);
          return this.optional(i) || u >= r;
        },
        maxlength: function (t, i, r) {
          var u = n.isArray(t) ? t.length : this.getLength(t, i);
          return this.optional(i) || r >= u;
        },
        rangelength: function (t, i, r) {
          var u = n.isArray(t) ? t.length : this.getLength(t, i);
          return this.optional(i) || (u >= r[0] && u <= r[1]);
        },
        min: function (n, t, i) {
          return this.optional(t) || n >= i;
        },
        max: function (n, t, i) {
          return this.optional(t) || i >= n;
        },
        range: function (n, t, i) {
          return this.optional(t) || (n >= i[0] && n <= i[1]);
        },
        step: function (t, i, r) {
          var u = n(i).attr("type"),
            f = "Step attribute on input type " + u + " is not supported.",
            e = new RegExp("\\b" + u + "\\b"),
            o = u && !e.test("text,number,range");
          if (o) throw new Error(f);
          return this.optional(i) || t % r == 0;
        },
        equalTo: function (t, i, r) {
          var u = n(r);
          return (
            this.settings.onfocusout &&
              u.not(".validate-equalTo-blur").length &&
              u
                .addClass("validate-equalTo-blur")
                .on("blur.validate-equalTo", function () {
                  n(i).valid();
                }),
            t === u.val()
          );
        },
        remote: function (t, i, r, u) {
          if (this.optional(i)) return "dependency-mismatch";
          u = ("string" == typeof u && u) || "remote";
          var f,
            o,
            s,
            e = this.previousValue(i, u);
          return (
            this.settings.messages[i.name] ||
              (this.settings.messages[i.name] = {}),
            (e.originalMessage =
              e.originalMessage || this.settings.messages[i.name][u]),
            (this.settings.messages[i.name][u] = e.message),
            (r = ("string" == typeof r && { url: r }) || r),
            (s = n.param(n.extend({ data: t }, r.data))),
            e.old === s
              ? e.valid
              : ((e.old = s),
                (f = this),
                this.startRequest(i),
                (o = {}),
                (o[i.name] = t),
                n.ajax(
                  n.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + i.name,
                      dataType: "json",
                      data: o,
                      context: f.currentForm,
                      success: function (n) {
                        var r,
                          s,
                          h,
                          o = n === !0 || "true" === n;
                        f.settings.messages[i.name][u] = e.originalMessage;
                        o
                          ? ((h = f.formSubmitted),
                            f.resetInternals(),
                            (f.toHide = f.errorsFor(i)),
                            (f.formSubmitted = h),
                            f.successList.push(i),
                            (f.invalid[i.name] = !1),
                            f.showErrors())
                          : ((r = {}),
                            (s =
                              n ||
                              f.defaultMessage(i, {
                                method: u,
                                parameters: t,
                              })),
                            (r[i.name] = e.message = s),
                            (f.invalid[i.name] = !0),
                            f.showErrors(r));
                        e.valid = o;
                        f.stopRequest(i, o);
                      },
                    },
                    r
                  )
                ),
                "pending")
          );
        },
      },
    });
    var i,
      t = {};
    n.ajaxPrefilter
      ? n.ajaxPrefilter(function (n, i, r) {
          var u = n.port;
          "abort" === n.mode && (t[u] && t[u].abort(), (t[u] = r));
        })
      : ((i = n.ajax),
        (n.ajax = function (r) {
          var f = ("mode" in r ? r : n.ajaxSettings).mode,
            u = ("port" in r ? r : n.ajaxSettings).port;
          return "abort" === f
            ? (t[u] && t[u].abort(), (t[u] = i.apply(this, arguments)), t[u])
            : i.apply(this, arguments);
        }));
  }),
  !(function (n) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./jquery.validate.min"], n)
      : "object" == typeof module && module.exports
        ? (module.exports = n(require("jquery")))
        : n(jQuery);
  })(function (n) {
    !(function () {
      function t(n) {
        return n
          .replace(/<.[^<>]*?>/g, " ")
          .replace(/&nbsp;|&#160;/gi, " ")
          .replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
      }
      n.validator.addMethod(
        "maxWords",
        function (n, i, r) {
          return this.optional(i) || t(n).match(/\b\w+\b/g).length <= r;
        },
        n.validator.format("Please enter {0} words or less.")
      );
      n.validator.addMethod(
        "minWords",
        function (n, i, r) {
          return this.optional(i) || t(n).match(/\b\w+\b/g).length >= r;
        },
        n.validator.format("Please enter at least {0} words.")
      );
      n.validator.addMethod(
        "rangeWords",
        function (n, i, r) {
          var u = t(n),
            f = /\b\w+\b/g;
          return (
            this.optional(i) ||
            (u.match(f).length >= r[0] && u.match(f).length <= r[1])
          );
        },
        n.validator.format("Please enter between {0} and {1} words.")
      );
    })();
    n.validator.addMethod(
      "accept",
      function (t, i, r) {
        var u,
          e,
          o,
          f = "string" == typeof r ? r.replace(/\s/g, "") : "image/*",
          s = this.optional(i);
        if (s) return s;
        if (
          "file" === n(i).attr("type") &&
          ((f = f
            .replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&")
            .replace(/,/g, "|")
            .replace("/*", "/.*")),
          i.files && i.files.length)
        )
          for (
            o = new RegExp(".?(" + f + ")$", "i"), u = 0;
            u < i.files.length;
            u++
          )
            if (((e = i.files[u]), !e.type.match(o))) return !1;
        return !0;
      },
      n.validator.format("Please enter a value with a valid mimetype.")
    );
    n.validator.addMethod(
      "alphanumeric",
      function (n, t) {
        return this.optional(t) || /^\w+$/i.test(n);
      },
      "Letters, numbers, and underscores only please"
    );
    n.validator.addMethod(
      "bankaccountNL",
      function (n, t) {
        if (this.optional(t)) return !0;
        if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(n)) return !1;
        for (
          var r, u, f = n.replace(/ /g, ""), e = 0, o = f.length, i = 0;
          o > i;
          i++
        )
          (r = o - i), (u = f.substring(i, i + 1)), (e += r * u);
        return e % 11 == 0;
      },
      "Please specify a valid bank account number"
    );
    n.validator.addMethod(
      "bankorgiroaccountNL",
      function (t, i) {
        return (
          this.optional(i) ||
          n.validator.methods.bankaccountNL.call(this, t, i) ||
          n.validator.methods.giroaccountNL.call(this, t, i)
        );
      },
      "Please specify a valid bank or giro account number"
    );
    n.validator.addMethod(
      "bic",
      function (n, t) {
        return (
          this.optional(t) ||
          /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(
            n.toUpperCase()
          )
        );
      },
      "Please specify a valid BIC code"
    );
    n.validator.addMethod(
      "cifES",
      function (n) {
        "use strict";
        var f,
          i,
          r,
          u,
          e,
          o,
          t = [];
        if (
          ((n = n.toUpperCase()),
          !n.match(
            "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"
          ))
        )
          return !1;
        for (r = 0; 9 > r; r++) t[r] = parseInt(n.charAt(r), 10);
        for (i = t[2] + t[4] + t[6], u = 1; 8 > u; u += 2)
          (e = (2 * t[u]).toString()),
            (o = e.charAt(1)),
            (i += parseInt(e.charAt(0), 10) + ("" === o ? 0 : parseInt(o, 10)));
        return /^[ABCDEFGHJNPQRSUVW]{1}/.test(n)
          ? ((i += ""),
            (f = 10 - parseInt(i.charAt(i.length - 1), 10)),
            (n += f),
            t[8].toString() === String.fromCharCode(64 + f) ||
              t[8].toString() === n.charAt(n.length - 1))
          : !1;
      },
      "Please specify a valid CIF number."
    );
    n.validator.addMethod(
      "cpfBR",
      function (n) {
        if (
          ((n = n.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "")),
          11 !== n.length)
        )
          return !1;
        var u,
          f,
          r,
          t,
          i = 0;
        if (
          ((u = parseInt(n.substring(9, 10), 10)),
          (f = parseInt(n.substring(10, 11), 10)),
          (r = function (n, t) {
            var i = (10 * n) % 11;
            return (10 !== i && 11 !== i) || (i = 0), i === t;
          }),
          "" === n ||
            "00000000000" === n ||
            "11111111111" === n ||
            "22222222222" === n ||
            "33333333333" === n ||
            "44444444444" === n ||
            "55555555555" === n ||
            "66666666666" === n ||
            "77777777777" === n ||
            "88888888888" === n ||
            "99999999999" === n)
        )
          return !1;
        for (t = 1; 9 >= t; t++)
          i += parseInt(n.substring(t - 1, t), 10) * (11 - t);
        if (r(i, u)) {
          for (i = 0, t = 1; 10 >= t; t++)
            i += parseInt(n.substring(t - 1, t), 10) * (12 - t);
          return r(i, f);
        }
        return !1;
      },
      "Please specify a valid CPF number"
    );
    n.validator.addMethod(
      "creditcard",
      function (n, t) {
        if (this.optional(t)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(n)) return !1;
        var i,
          f,
          e = 0,
          r = 0,
          u = !1;
        if (((n = n.replace(/\D/g, "")), n.length < 13 || n.length > 19))
          return !1;
        for (i = n.length - 1; i >= 0; i--)
          (f = n.charAt(i)),
            (r = parseInt(f, 10)),
            u && (r *= 2) > 9 && (r -= 9),
            (e += r),
            (u = !u);
        return e % 10 == 0;
      },
      "Please enter a valid credit card number."
    );
    n.validator.addMethod(
      "creditcardtypes",
      function (n, t, i) {
        if (/[^0-9\-]+/.test(n)) return !1;
        n = n.replace(/\D/g, "");
        var r = 0;
        return (
          i.mastercard && (r |= 1),
          i.visa && (r |= 2),
          i.amex && (r |= 4),
          i.dinersclub && (r |= 8),
          i.enroute && (r |= 16),
          i.discover && (r |= 32),
          i.jcb && (r |= 64),
          i.unknown && (r |= 128),
          i.all && (r = 255),
          1 & r && /^(5[12345])/.test(n)
            ? 16 === n.length
            : 2 & r && /^(4)/.test(n)
              ? 16 === n.length
              : 4 & r && /^(3[47])/.test(n)
                ? 15 === n.length
                : 8 & r && /^(3(0[012345]|[68]))/.test(n)
                  ? 14 === n.length
                  : 16 & r && /^(2(014|149))/.test(n)
                    ? 15 === n.length
                    : 32 & r && /^(6011)/.test(n)
                      ? 16 === n.length
                      : 64 & r && /^(3)/.test(n)
                        ? 16 === n.length
                        : 64 & r && /^(2131|1800)/.test(n)
                          ? 15 === n.length
                          : !!(128 & r)
        );
      },
      "Please enter a valid credit card number."
    );
    n.validator.addMethod(
      "currency",
      function (n, t, i) {
        var u,
          f = "string" == typeof i,
          r = f ? i : i[0],
          e = f ? !0 : i[1];
        return (
          (r = r.replace(/,/g, "")),
          (r = e ? r + "]" : r + "]?"),
          (u =
            "^[" +
            r +
            "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$"),
          (u = new RegExp(u)),
          this.optional(t) || u.test(n)
        );
      },
      "Please specify a valid currency"
    );
    n.validator.addMethod(
      "dateFA",
      function (n, t) {
        return (
          this.optional(t) ||
          /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(
            n
          )
        );
      },
      n.validator.messages.date
    );
    n.validator.addMethod(
      "dateITA",
      function (n, t) {
        var i,
          u,
          f,
          e,
          r,
          o = !1;
        return (
          /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(n)
            ? ((i = n.split("/")),
              (u = parseInt(i[0], 10)),
              (f = parseInt(i[1], 10)),
              (e = parseInt(i[2], 10)),
              (r = new Date(Date.UTC(e, f - 1, u, 12, 0, 0, 0))),
              (o =
                r.getUTCFullYear() === e &&
                r.getUTCMonth() === f - 1 &&
                r.getUTCDate() === u))
            : (o = !1),
          this.optional(t) || o
        );
      },
      n.validator.messages.date
    );
    n.validator.addMethod(
      "dateNL",
      function (n, t) {
        return (
          this.optional(t) ||
          /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(
            n
          )
        );
      },
      n.validator.messages.date
    );
    n.validator.addMethod(
      "extension",
      function (n, t, i) {
        return (
          (i = "string" == typeof i ? i.replace(/,/g, "|") : "png|jpe?g|gif"),
          this.optional(t) || n.match(new RegExp("\\.(" + i + ")$", "i"))
        );
      },
      n.validator.format("Please enter a value with a valid extension.")
    );
    n.validator.addMethod(
      "giroaccountNL",
      function (n, t) {
        return this.optional(t) || /^[0-9]{1,7}$/.test(n);
      },
      "Please specify a valid giro account number"
    );
    n.validator.addMethod(
      "iban",
      function (n, t) {
        if (this.optional(t)) return !0;
        var c,
          f,
          e,
          l,
          o,
          a,
          v,
          r,
          u,
          i = n.replace(/ /g, "").toUpperCase(),
          s = "",
          y = !0,
          h = "",
          p = "";
        if (
          ((c = i.substring(0, 2)),
          (a = {
            AL: "\\d{8}[\\dA-Z]{16}",
            AD: "\\d{8}[\\dA-Z]{12}",
            AT: "\\d{16}",
            AZ: "[\\dA-Z]{4}\\d{20}",
            BE: "\\d{12}",
            BH: "[A-Z]{4}[\\dA-Z]{14}",
            BA: "\\d{16}",
            BR: "\\d{23}[A-Z][\\dA-Z]",
            BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
            CR: "\\d{17}",
            HR: "\\d{17}",
            CY: "\\d{8}[\\dA-Z]{16}",
            CZ: "\\d{20}",
            DK: "\\d{14}",
            DO: "[A-Z]{4}\\d{20}",
            EE: "\\d{16}",
            FO: "\\d{14}",
            FI: "\\d{14}",
            FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
            GE: "[\\dA-Z]{2}\\d{16}",
            DE: "\\d{18}",
            GI: "[A-Z]{4}[\\dA-Z]{15}",
            GR: "\\d{7}[\\dA-Z]{16}",
            GL: "\\d{14}",
            GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
            HU: "\\d{24}",
            IS: "\\d{22}",
            IE: "[\\dA-Z]{4}\\d{14}",
            IL: "\\d{19}",
            IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
            KZ: "\\d{3}[\\dA-Z]{13}",
            KW: "[A-Z]{4}[\\dA-Z]{22}",
            LV: "[A-Z]{4}[\\dA-Z]{13}",
            LB: "\\d{4}[\\dA-Z]{20}",
            LI: "\\d{5}[\\dA-Z]{12}",
            LT: "\\d{16}",
            LU: "\\d{3}[\\dA-Z]{13}",
            MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
            MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
            MR: "\\d{23}",
            MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
            MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
            MD: "[\\dA-Z]{2}\\d{18}",
            ME: "\\d{18}",
            NL: "[A-Z]{4}\\d{10}",
            NO: "\\d{11}",
            PK: "[\\dA-Z]{4}\\d{16}",
            PS: "[\\dA-Z]{4}\\d{21}",
            PL: "\\d{24}",
            PT: "\\d{21}",
            RO: "[A-Z]{4}[\\dA-Z]{16}",
            SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
            SA: "\\d{2}[\\dA-Z]{18}",
            RS: "\\d{18}",
            SK: "\\d{20}",
            SI: "\\d{15}",
            ES: "\\d{20}",
            SE: "\\d{20}",
            CH: "\\d{5}[\\dA-Z]{12}",
            TN: "\\d{20}",
            TR: "\\d{5}[\\dA-Z]{17}",
            AE: "\\d{3}\\d{16}",
            GB: "[A-Z]{4}\\d{14}",
            VG: "[\\dA-Z]{4}\\d{16}",
          }),
          (o = a[c]),
          "undefined" != typeof o &&
            ((v = new RegExp("^[A-Z]{2}\\d{2}" + o + "$", "")), !v.test(i)))
        )
          return !1;
        for (
          f = i.substring(4, i.length) + i.substring(0, 4), r = 0;
          r < f.length;
          r++
        )
          (e = f.charAt(r)),
            "0" !== e && (y = !1),
            y || (s += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
        for (u = 0; u < s.length; u++)
          (l = s.charAt(u)), (p = "" + h + l), (h = p % 97);
        return 1 === h;
      },
      "Please specify a valid IBAN"
    );
    n.validator.addMethod(
      "integer",
      function (n, t) {
        return this.optional(t) || /^-?\d+$/.test(n);
      },
      "A positive or negative non-decimal number please"
    );
    n.validator.addMethod(
      "ipv4",
      function (n, t) {
        return (
          this.optional(t) ||
          /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(
            n
          )
        );
      },
      "Please enter a valid IP v4 address."
    );
    n.validator.addMethod(
      "ipv6",
      function (n, t) {
        return (
          this.optional(t) ||
          /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(
            n
          )
        );
      },
      "Please enter a valid IP v6 address."
    );
    n.validator.addMethod(
      "lettersonly",
      function (n, t) {
        return this.optional(t) || /^[a-z]+$/i.test(n);
      },
      "Letters only please"
    );
    n.validator.addMethod(
      "letterswithbasicpunc",
      function (n, t) {
        return this.optional(t) || /^[a-z\-.,()'"\s]+$/i.test(n);
      },
      "Letters or punctuation only please"
    );
    n.validator.addMethod(
      "mobileNL",
      function (n, t) {
        return (
          this.optional(t) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(
            n
          )
        );
      },
      "Please specify a valid mobile number"
    );
    n.validator.addMethod(
      "mobileUK",
      function (n, t) {
        return (
          (n = n.replace(/\(|\)|\s+|-/g, "")),
          this.optional(t) ||
            (n.length > 9 &&
              n.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/
              ))
        );
      },
      "Please specify a valid mobile number"
    );
    n.validator.addMethod(
      "nieES",
      function (n) {
        "use strict";
        return (
          (n = n.toUpperCase()),
          n.match(
            "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"
          )
            ? /^[T]{1}/.test(n)
              ? n[8] === /^[T]{1}[A-Z0-9]{8}$/.test(n)
              : /^[XYZ]{1}/.test(n)
                ? n[8] ===
                  "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
                    n
                      .replace("X", "0")
                      .replace("Y", "1")
                      .replace("Z", "2")
                      .substring(0, 8) % 23
                  )
                : !1
            : !1
        );
      },
      "Please specify a valid NIE number."
    );
    n.validator.addMethod(
      "nifES",
      function (n) {
        "use strict";
        return (
          (n = n.toUpperCase()),
          n.match(
            "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"
          )
            ? /^[0-9]{8}[A-Z]{1}$/.test(n)
              ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(n.substring(8, 0) % 23) ===
                n.charAt(8)
              : /^[KLM]{1}/.test(n)
                ? n[8] === String.fromCharCode(64)
                : !1
            : !1
        );
      },
      "Please specify a valid NIF number."
    );
    jQuery.validator.addMethod(
      "notEqualTo",
      function (t, i, r) {
        return (
          this.optional(i) || !n.validator.methods.equalTo.call(this, t, i, r)
        );
      },
      "Please enter a different value, values must not be the same."
    );
    n.validator.addMethod(
      "nowhitespace",
      function (n, t) {
        return this.optional(t) || /^\S+$/i.test(n);
      },
      "No white space please"
    );
    n.validator.addMethod(
      "pattern",
      function (n, t, i) {
        return this.optional(t)
          ? !0
          : ("string" == typeof i && (i = new RegExp("^(?:" + i + ")$")),
            i.test(n));
      },
      "Invalid format."
    );
    n.validator.addMethod(
      "phoneNL",
      function (n, t) {
        return (
          this.optional(t) ||
          /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(
            n
          )
        );
      },
      "Please specify a valid phone number."
    );
    n.validator.addMethod(
      "phoneUK",
      function (n, t) {
        return (
          (n = n.replace(/\(|\)|\s+|-/g, "")),
          this.optional(t) ||
            (n.length > 9 &&
              n.match(
                /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/
              ))
        );
      },
      "Please specify a valid phone number"
    );
    n.validator.addMethod(
      "phoneUS",
      function (n, t) {
        return (
          (n = n.replace(/\s+/g, "")),
          this.optional(t) ||
            (n.length > 9 &&
              n.match(
                /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/
              ))
        );
      },
      "Please specify a valid phone number"
    );
    n.validator.addMethod(
      "phonesUK",
      function (n, t) {
        return (
          (n = n.replace(/\(|\)|\s+|-/g, "")),
          this.optional(t) ||
            (n.length > 9 &&
              n.match(
                /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/
              ))
        );
      },
      "Please specify a valid uk phone number"
    );
    n.validator.addMethod(
      "postalCodeCA",
      function (n, t) {
        return (
          this.optional(t) ||
          /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
            n
          )
        );
      },
      "Please specify a valid postal code"
    );
    n.validator.addMethod(
      "postalcodeBR",
      function (n, t) {
        return (
          this.optional(t) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(n)
        );
      },
      "Informe um CEP válido."
    );
    n.validator.addMethod(
      "postalcodeIT",
      function (n, t) {
        return this.optional(t) || /^\d{5}$/.test(n);
      },
      "Please specify a valid postal code"
    );
    n.validator.addMethod(
      "postalcodeNL",
      function (n, t) {
        return this.optional(t) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(n);
      },
      "Please specify a valid postal code"
    );
    n.validator.addMethod(
      "postcodeUK",
      function (n, t) {
        return (
          this.optional(t) ||
          /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(
            n
          )
        );
      },
      "Please specify a valid UK postcode"
    );
    n.validator.addMethod(
      "require_from_group",
      function (t, i, r) {
        var u = n(r[1], i.form),
          f = u.eq(0),
          e = f.data("valid_req_grp")
            ? f.data("valid_req_grp")
            : n.extend({}, this),
          o =
            u.filter(function () {
              return e.elementValue(this);
            }).length >= r[0];
        return (
          f.data("valid_req_grp", e),
          n(i).data("being_validated") ||
            (u.data("being_validated", !0),
            u.each(function () {
              e.element(this);
            }),
            u.data("being_validated", !1)),
          o
        );
      },
      n.validator.format("Please fill at least {0} of these fields.")
    );
    n.validator.addMethod(
      "skip_or_fill_minimum",
      function (t, i, r) {
        var u = n(r[1], i.form),
          f = u.eq(0),
          e = f.data("valid_skip") ? f.data("valid_skip") : n.extend({}, this),
          o = u.filter(function () {
            return e.elementValue(this);
          }).length,
          s = 0 === o || o >= r[0];
        return (
          f.data("valid_skip", e),
          n(i).data("being_validated") ||
            (u.data("being_validated", !0),
            u.each(function () {
              e.element(this);
            }),
            u.data("being_validated", !1)),
          s
        );
      },
      n.validator.format(
        "Please either skip these fields or fill at least {0} of them."
      )
    );
    n.validator.addMethod(
      "stateUS",
      function (n, t, i) {
        var r,
          u = "undefined" == typeof i,
          o = u || "undefined" == typeof i.caseSensitive ? !1 : i.caseSensitive,
          f =
            u || "undefined" == typeof i.includeTerritories
              ? !1
              : i.includeTerritories,
          e =
            u || "undefined" == typeof i.includeMilitary
              ? !1
              : i.includeMilitary;
        return (
          (r =
            f || e
              ? f && e
                ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                : f
                  ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$"
                  : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"
              : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$"),
          (r = o ? new RegExp(r) : new RegExp(r, "i")),
          this.optional(t) || r.test(n)
        );
      },
      "Please specify a valid state"
    );
    n.validator.addMethod(
      "strippedminlength",
      function (t, i, r) {
        return n(t).text().length >= r;
      },
      n.validator.format("Please enter at least {0} characters")
    );
    n.validator.addMethod(
      "time",
      function (n, t) {
        return (
          this.optional(t) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(n)
        );
      },
      "Please enter a valid time, between 00:00 and 23:59"
    );
    n.validator.addMethod(
      "time12h",
      function (n, t) {
        return (
          this.optional(t) ||
          /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(n)
        );
      },
      "Please enter a valid time in 12-hour am/pm format"
    );
    n.validator.addMethod(
      "url2",
      function (n, t) {
        return (
          this.optional(t) ||
          /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
            n
          )
        );
      },
      n.validator.messages.url
    );
    n.validator.addMethod(
      "vinUS",
      function (n) {
        if (17 !== n.length) return !1;
        for (
          var r,
            t,
            e,
            u,
            f,
            o = [
              "A",
              "B",
              "C",
              "D",
              "E",
              "F",
              "G",
              "H",
              "J",
              "K",
              "L",
              "M",
              "N",
              "P",
              "R",
              "S",
              "T",
              "U",
              "V",
              "W",
              "X",
              "Y",
              "Z",
            ],
            h = [
              1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8,
              9,
            ],
            c = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
            s = 0,
            i = 0;
          17 > i;
          i++
        ) {
          if (
            ((e = c[i]), (t = n.slice(i, i + 1)), 8 === i && (f = t), isNaN(t))
          ) {
            for (r = 0; r < o.length; r++)
              if (t.toUpperCase() === o[r]) {
                t = h[r];
                t *= e;
                isNaN(f) && 8 === r && (f = o[r]);
                break;
              }
          } else t *= e;
          s += t;
        }
        return (u = s % 11), 10 === u && (u = "X"), u === f;
      },
      "The specified vehicle identification number (VIN) is invalid."
    );
    n.validator.addMethod(
      "zipcodeUS",
      function (n, t) {
        return this.optional(t) || /^\d{5}(-\d{4})?$/.test(n);
      },
      "The specified US ZIP Code is invalid"
    );
    n.validator.addMethod(
      "ziprange",
      function (n, t) {
        return this.optional(t) || /^90[2-5]\d\{2\}-\d{4}$/.test(n);
      },
      "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx"
    );
  }),
  !(function (n, t) {
    "use strict";
    function f(r, f, e, o, s) {
      function it() {
        ut = n.devicePixelRatio > 1;
        e = rt(e);
        f.delay >= 0 &&
          setTimeout(function () {
            p(!0);
          }, f.delay);
        (f.delay < 0 || f.combined) &&
          ((o.e = lt(f.throttle, function (n) {
            "resize" === n.type && (w = b = -1);
            p(n.all);
          })),
          (o.a = function (n) {
            n = rt(n);
            e.push.apply(e, n);
          }),
          (o.g = function () {
            return (e = i(e).filter(function () {
              return !i(this).data(f.loadedName);
            }));
          }),
          (o.f = function (n) {
            for (var i, t = 0; t < n.length; t++)
              (i = e.filter(function () {
                return this === n[t];
              })),
                i.length && p(!1, i);
          }),
          p(),
          i(f.appendScroll).on("scroll." + s + " resize." + s, o.e));
      }
      function rt(n) {
        var v = f.defaultImage,
          p = f.placeholder,
          k = f.imageBase,
          s = f.srcsetAttribute,
          c = f.loaderAttribute,
          a = f._f || {},
          e,
          w;
        for (
          n = i(n)
            .filter(function () {
              var n = i(this),
                r = g(this);
              return (
                !n.data(f.handledName) &&
                (n.attr(f.attribute) || n.attr(s) || n.attr(c) || a[r] !== t)
              );
            })
            .data("plugin_" + f.name, r),
            e = 0,
            w = n.length;
          e < w;
          e++
        ) {
          var u = i(n[e]),
            o = g(n[e]),
            b = u.attr(f.imageBaseAttribute) || k;
          o === l && b && u.attr(s) && u.attr(s, ct(u.attr(s), b));
          a[o] === t || u.attr(c) || u.attr(c, a[o]);
          o === l && v && !u.attr(h)
            ? u.attr(h, v)
            : o === l ||
              !p ||
              (u.css(y) && "none" !== u.css(y)) ||
              u.css(y, "url('" + p + "')");
        }
        return n;
      }
      function p(n, t) {
        if (!e.length) return void (f.autoDestroy && r.destroy());
        for (
          var s = t || e,
            w = !1,
            nt = f.imageBase || "",
            b = f.srcsetAttribute,
            c = f.handledName,
            o = 0;
          o < s.length;
          o++
        )
          if (n || t || ot(s[o])) {
            var u = i(s[o]),
              a = g(s[o]),
              v = u.attr(f.attribute),
              p = u.attr(f.imageBaseAttribute) || nt,
              d = u.attr(f.loaderAttribute);
            !u.data(c) &&
              (!f.visibleOnly || u.is(":visible")) &&
              (((v || u.attr(b)) &&
                ((a === l &&
                  (p + v !== u.attr(h) || u.attr(b) !== u.attr(k))) ||
                  (a !== l && p + v !== u.css(y)))) ||
                d) &&
              ((w = !0), u.data(c, !0), et(u, a, p, d));
          }
        w &&
          (e = i(e).filter(function () {
            return !i(this).data(c);
          }));
      }
      function et(n, t, r, u) {
        var o, s, e, w;
        ++tt;
        o = function () {
          c("onError", n);
          nt();
          o = i.noop;
        };
        c("beforeLoad", n);
        var b = f.attribute,
          g = f.srcsetAttribute,
          p = f.sizesAttribute,
          it = f.retinaAttribute,
          rt = f.removeAttribute,
          et = f.loadedName,
          ot = n.attr(it);
        if (u)
          (s = function () {
            rt && n.removeAttr(f.loaderAttribute);
            n.data(et, !0);
            c(ft, n);
            setTimeout(nt, 1);
            s = i.noop;
          }),
            n.off(v).one(v, o).one(a, s),
            c(u, n, function (t) {
              t ? (n.off(a), s()) : (n.off(v), o());
            }) || n.trigger(v);
        else {
          e = i(new Image());
          e.one(v, o).one(a, function () {
            n.hide();
            t === l
              ? n.attr(d, e.attr(d)).attr(k, e.attr(k)).attr(h, e.attr(h))
              : n.css(y, "url('" + e.attr(h) + "')");
            n[f.effect](f.effectTime);
            rt &&
              (n.removeAttr(
                b + " " + g + " " + it + " " + f.imageBaseAttribute
              ),
              p !== d && n.removeAttr(p));
            n.data(et, !0);
            c(ft, n);
            e.remove();
            nt();
          });
          w = (ut && ot ? ot : n.attr(b)) || "";
          e.attr(d, n.attr(p))
            .attr(k, n.attr(g))
            .attr(h, w ? r + w : null);
          e.complete && e.trigger(a);
        }
      }
      function ot(n) {
        var t = n.getBoundingClientRect(),
          r = f.scrollDirection,
          i = f.threshold,
          u = ht() + i > t.top && -i < t.bottom,
          e = st() + i > t.left && -i < t.right;
        return "vertical" === r ? u : "horizontal" === r ? e : u && e;
      }
      function st() {
        return w >= 0 ? w : (w = i(n).width());
      }
      function ht() {
        return b >= 0 ? b : (b = i(n).height());
      }
      function g(n) {
        return n.tagName.toLowerCase();
      }
      function ct(n, t) {
        var r, i, u;
        if (t)
          for (r = n.split(","), n = "", i = 0, u = r.length; i < u; i++)
            n += t + r[i].trim() + (i !== u - 1 ? "," : "");
        return n;
      }
      function lt(n, t) {
        var i,
          u = 0;
        return function (e, o) {
          function s() {
            u = +new Date();
            t.call(r, e);
          }
          var h = +new Date() - u;
          i && clearTimeout(i);
          h > n || !f.enableThrottle || o ? s() : (i = setTimeout(s, n - h));
        };
      }
      function nt() {
        --tt;
        e.length || tt || c("onFinishedAll");
      }
      function c(n) {
        return !!(n = f[n]) && (n.apply(r, [].slice.call(arguments, 1)), !0);
      }
      var tt = 0,
        w = -1,
        b = -1,
        ut = !1,
        ft = "afterLoad",
        a = "load",
        v = "error",
        l = "img",
        h = "src",
        k = "srcset",
        d = "sizes",
        y = "background-image";
      "event" === f.bind || u ? it() : i(n).on(a + "." + s, it);
    }
    function r(r, u) {
      var o = this,
        h = i.extend({}, o.config, u),
        s = {},
        c = h.name + "-" + ++e;
      return (
        (o.config = function (n, i) {
          return i === t ? h[n] : ((h[n] = i), o);
        }),
        (o.addItems = function (n) {
          return s.a && s.a("string" === i.type(n) ? i(n) : n), o;
        }),
        (o.getItems = function () {
          return s.g ? s.g() : {};
        }),
        (o.update = function (n) {
          return s.e && s.e({}, !n), o;
        }),
        (o.force = function (n) {
          return s.f && s.f("string" === i.type(n) ? i(n) : n), o;
        }),
        (o.loadAll = function () {
          return s.e && s.e({ all: !0 }, !0), o;
        }),
        (o.destroy = function () {
          return (
            i(h.appendScroll).off("." + c, s.e), i(n).off("." + c), (s = {}), t
          );
        }),
        f(o, h, r, s, c),
        h.chainable ? r : o
      );
    }
    var i = n.jQuery || n.Zepto,
      e = 0,
      u = !1;
    i.fn.Lazy = i.fn.lazy = function (n) {
      return new r(this, n);
    };
    i.Lazy = i.lazy = function (n, u, f) {
      var s, h;
      if ((i.isFunction(u) && ((f = u), (u = [])), i.isFunction(f))) {
        n = i.isArray(n) ? n : [n];
        u = i.isArray(u) ? u : [u];
        for (
          var e = r.prototype.config,
            c = e._f || (e._f = {}),
            o = 0,
            l = n.length;
          o < l;
          o++
        )
          (e[n[o]] === t || i.isFunction(e[n[o]])) && (e[n[o]] = f);
        for (s = 0, h = u.length; s < h; s++) c[u[s]] = n[0];
      }
    };
    r.prototype.config = {
      name: "lazy",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: n,
      scrollDirection: "both",
      imageBase: null,
      defaultImage:
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: t,
      afterLoad: t,
      onError: t,
      onFinishedAll: t,
    };
    i(n).on("load", function () {
      u = !0;
    });
  })(window),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (n) {
  "use strict";
  var t = n.fn.jquery.split(" ")[0].split(".");
  if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery);
+(function (n) {
  "use strict";
  function i(i, r) {
    return this.each(function () {
      var f = n(this),
        u = f.data("bs.modal"),
        e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
      u || f.data("bs.modal", (u = new t(this, e)));
      "string" == typeof i ? u[i](r) : e.show && u.show(r);
    });
  }
  var t = function (t, i) {
      this.options = i;
      this.$body = n(document.body);
      this.$element = n(t);
      this.$backdrop = this.isShown = null;
      this.scrollbarWidth = 0;
      this.options.remote &&
        this.$element.find(".modal-content").load(
          this.options.remote,
          n.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
          }, this)
        );
    },
    r;
  t.VERSION = "3.3.2";
  t.TRANSITION_DURATION = 300;
  t.BACKDROP_TRANSITION_DURATION = 150;
  t.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 };
  t.prototype.toggle = function (n) {
    return this.isShown ? this.hide() : this.show(n);
  };
  t.prototype.show = function (i) {
    var r = this,
      u = n.Event("show.bs.modal", { relatedTarget: i });
    this.$element.trigger(u);
    this.isShown ||
      u.isDefaultPrevented() ||
      ((this.isShown = !0),
      this.checkScrollbar(),
      this.setScrollbar(),
      this.$body.addClass("modal-open"),
      this.escape(),
      this.resize(),
      this.$element.on(
        "click.dismiss.bs.modal",
        '[data-dismiss="modal"]',
        n.proxy(this.hide, this)
      ),
      this.backdrop(function () {
        var f = n.support.transition && r.$element.hasClass("fade"),
          u;
        r.$element.parent().length || r.$element.appendTo(r.$body);
        r.$element.show().scrollTop(0);
        r.options.backdrop && r.adjustBackdrop();
        r.adjustDialog();
        f && r.$element[0].offsetWidth;
        r.$element.addClass("in").attr("aria-hidden", !1);
        r.enforceFocus();
        u = n.Event("shown.bs.modal", { relatedTarget: i });
        f
          ? r.$element
              .find(".modal-dialog")
              .one("bsTransitionEnd", function () {
                r.$element.trigger("focus").trigger(u);
              })
              .emulateTransitionEnd(t.TRANSITION_DURATION)
          : r.$element.trigger("focus").trigger(u);
      }));
  };
  t.prototype.hide = function (i) {
    i && i.preventDefault();
    i = n.Event("hide.bs.modal");
    this.$element.trigger(i);
    this.isShown &&
      !i.isDefaultPrevented() &&
      ((this.isShown = !1),
      this.escape(),
      this.resize(),
      n(document).off("focusin.bs.modal"),
      this.$element
        .removeClass("in")
        .attr("aria-hidden", !0)
        .off("click.dismiss.bs.modal"),
      n.support.transition && this.$element.hasClass("fade")
        ? this.$element
            .one("bsTransitionEnd", n.proxy(this.hideModal, this))
            .emulateTransitionEnd(t.TRANSITION_DURATION)
        : this.hideModal());
  };
  t.prototype.enforceFocus = function () {
    n(document)
      .off("focusin.bs.modal")
      .on(
        "focusin.bs.modal",
        n.proxy(function (n) {
          this.$element[0] === n.target ||
            this.$element.has(n.target).length ||
            this.$element.trigger("focus");
        }, this)
      );
  };
  t.prototype.escape = function () {
    this.isShown && this.options.keyboard
      ? this.$element.on(
          "keydown.dismiss.bs.modal",
          n.proxy(function (n) {
            27 == n.which && this.hide();
          }, this)
        )
      : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  };
  t.prototype.resize = function () {
    this.isShown
      ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this))
      : n(window).off("resize.bs.modal");
  };
  t.prototype.hideModal = function () {
    var n = this;
    this.$element.hide();
    this.backdrop(function () {
      n.$body.removeClass("modal-open");
      n.resetAdjustments();
      n.resetScrollbar();
      n.$element.trigger("hidden.bs.modal");
    });
  };
  t.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };
  t.prototype.backdrop = function (i) {
    var e = this,
      f = this.$element.hasClass("fade") ? "fade" : "",
      r,
      u;
    if (this.isShown && this.options.backdrop) {
      if (
        ((r = n.support.transition && f),
        (this.$backdrop = n('<div class="modal-backdrop ' + f + '" />')
          .prependTo(this.$element)
          .on(
            "click.dismiss.bs.modal",
            n.proxy(function (n) {
              n.target === n.currentTarget &&
                ("static" == this.options.backdrop
                  ? this.$element[0].focus.call(this.$element[0])
                  : this.hide.call(this));
            }, this)
          )),
        r && this.$backdrop[0].offsetWidth,
        this.$backdrop.addClass("in"),
        !i)
      )
        return;
      r
        ? this.$backdrop
            .one("bsTransitionEnd", i)
            .emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION)
        : i();
    } else
      !this.isShown && this.$backdrop
        ? (this.$backdrop.removeClass("in"),
          (u = function () {
            e.removeBackdrop();
            i && i();
          }),
          n.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", u)
                .emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION)
            : u())
        : i && i();
  };
  t.prototype.handleUpdate = function () {
    this.options.backdrop && this.adjustBackdrop();
    this.adjustDialog();
  };
  t.prototype.adjustBackdrop = function () {
    this.$backdrop
      .css("height", 0)
      .css("height", this.$element[0].scrollHeight);
  };
  t.prototype.adjustDialog = function () {
    var n =
      this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : "",
    });
  };
  t.prototype.resetAdjustments = function () {
    this.$element.css({ paddingLeft: "", paddingRight: "" });
  };
  t.prototype.checkScrollbar = function () {
    this.bodyIsOverflowing =
      document.body.scrollHeight > document.documentElement.clientHeight;
    this.scrollbarWidth = this.measureScrollbar();
  };
  t.prototype.setScrollbar = function () {
    var n = parseInt(this.$body.css("padding-right") || 0, 10);
    this.bodyIsOverflowing &&
      this.$body.css("padding-right", n + this.scrollbarWidth);
  };
  t.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "");
  };
  t.prototype.measureScrollbar = function () {
    var n = document.createElement("div"),
      t;
    return (
      (n.className = "modal-scrollbar-measure"),
      this.$body.append(n),
      (t = n.offsetWidth - n.clientWidth),
      this.$body[0].removeChild(n),
      t
    );
  };
  r = n.fn.modal;
  n.fn.modal = i;
  n.fn.modal.Constructor = t;
  n.fn.modal.noConflict = function () {
    return (n.fn.modal = r), this;
  };
  n(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var r = n(this),
        f = r.attr("href"),
        u = n(r.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))),
        e = u.data("bs.modal")
          ? "toggle"
          : n.extend({ remote: !/#/.test(f) && f }, u.data(), r.data());
      r.is("a") && t.preventDefault();
      u.one("show.bs.modal", function (n) {
        n.isDefaultPrevented() ||
          u.one("hidden.bs.modal", function () {
            r.is(":visible") && r.trigger("focus");
          });
      });
      i.call(u, e, this);
    }
  );
})(jQuery);
$(document).ready(function () {
  lazyloadImages();
});
!(function (n, t, i, r) {
  function u(t, i) {
    this.settings = null;
    this.options = n.extend({}, u.Defaults, i);
    this.$element = n(t);
    this.drag = n.extend({}, o);
    this.state = n.extend({}, s);
    this.e = n.extend({}, h);
    this._plugins = {};
    this._supress = {};
    this._current = null;
    this._speed = null;
    this._coordinates = [];
    this._breakpoint = null;
    this._width = null;
    this._items = [];
    this._clones = [];
    this._mergers = [];
    this._invalidated = {};
    this._pipe = [];
    n.each(
      u.Plugins,
      n.proxy(function (n, t) {
        this._plugins[n[0].toLowerCase() + n.slice(1)] = new t(this);
      }, this)
    );
    n.each(
      u.Pipe,
      n.proxy(function (t, i) {
        this._pipe.push({ filter: i.filter, run: n.proxy(i.run, this) });
      }, this)
    );
    this.setup();
    this.initialize();
  }
  function f(n) {
    if (n.touches !== r)
      return { x: n.touches[0].pageX, y: n.touches[0].pageY };
    if (n.touches === r) {
      if (n.pageX !== r) return { x: n.pageX, y: n.pageY };
      if (n.pageX === r) return { x: n.clientX, y: n.clientY };
    }
  }
  function e(n) {
    var t,
      r,
      u = i.createElement("div"),
      f = n;
    for (t in f)
      if (((r = f[t]), "undefined" != typeof u.style[r]))
        return (u = null), [r, t];
    return [!1];
  }
  function c() {
    return e([
      "transition",
      "WebkitTransition",
      "MozTransition",
      "OTransition",
    ])[1];
  }
  function l() {
    return e([
      "transform",
      "WebkitTransform",
      "MozTransform",
      "OTransform",
      "msTransform",
    ])[0];
  }
  function a() {
    return e([
      "perspective",
      "webkitPerspective",
      "MozPerspective",
      "OPerspective",
      "MsPerspective",
    ])[0];
  }
  function v() {
    return "ontouchstart" in t || !!navigator.msMaxTouchPoints;
  }
  function y() {
    return t.navigator.msPointerEnabled;
  }
  var o, s, h;
  o = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null,
  };
  s = {
    isTouch: !1,
    isScrolling: !1,
    isSwiping: !1,
    direction: !1,
    inMotion: !1,
  };
  h = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null,
  };
  u.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: t,
    responsiveClass: !1,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item",
    centerClass: "center",
    activeClass: "active",
  };
  u.Width = { Default: "default", Inner: "inner", Outer: "outer" };
  u.Plugins = {};
  u.Pipe = [
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        n.current = this._items && this._items[this.relative(this._current)];
      },
    },
    {
      filter: ["items", "settings"],
      run: function () {
        var n = this._clones,
          t = this.$stage.children(".cloned");
        (t.length !== n.length || (!this.settings.loop && n.length > 0)) &&
          (this.$stage.children(".cloned").remove(), (this._clones = []));
      },
    },
    {
      filter: ["items", "settings"],
      run: function () {
        for (
          var n = this._clones,
            t = this._items,
            u = this.settings.loop
              ? n.length - Math.max(2 * this.settings.items, 4)
              : 0,
            i = 0,
            r = Math.abs(u / 2);
          r > i;
          i++
        )
          u > 0
            ? (this.$stage
                .children()
                .eq(t.length + n.length - 1)
                .remove(),
              n.pop(),
              this.$stage.children().eq(0).remove(),
              n.pop())
            : (n.push(n.length / 2),
              this.$stage.append(t[n[n.length - 1]].clone().addClass("cloned")),
              n.push(t.length - 1 - (n.length - 1) / 2),
              this.$stage.prepend(
                t[n[n.length - 1]].clone().addClass("cloned")
              ));
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function () {
        var n,
          t,
          i,
          u = this.settings.rtl ? 1 : -1,
          f = (this.width() / this.settings.items).toFixed(3),
          r = 0;
        for (
          this._coordinates = [],
            t = 0,
            i = this._clones.length + this._items.length;
          i > t;
          t++
        )
          (n = this._mergers[this.relative(t)]),
            (n =
              (this.settings.mergeFit && Math.min(n, this.settings.items)) ||
              n),
            (r +=
              (this.settings.autoWidth
                ? this._items[this.relative(t)].width() + this.settings.margin
                : f * n) * u),
            this._coordinates.push(r);
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function () {
        var t,
          r,
          u = (this.width() / this.settings.items).toFixed(3),
          i = {
            width:
              Math.abs(this._coordinates[this._coordinates.length - 1]) +
              2 * this.settings.stagePadding,
            "padding-left": this.settings.stagePadding || "",
            "padding-right": this.settings.stagePadding || "",
          };
        if (
          (this.$stage.css(i),
          (i = {
            width: this.settings.autoWidth ? "auto" : u - this.settings.margin,
          }),
          (i[this.settings.rtl ? "margin-left" : "margin-right"] =
            this.settings.margin),
          !this.settings.autoWidth &&
            n.grep(this._mergers, function (n) {
              return n > 1;
            }).length > 0)
        )
          for (t = 0, r = this._coordinates.length; r > t; t++)
            (i.width =
              Math.abs(this._coordinates[t]) -
              Math.abs(this._coordinates[t - 1] || 0) -
              this.settings.margin),
              this.$stage.children().eq(t).css(i);
        else this.$stage.children().css(i);
      },
    },
    {
      filter: ["width", "items", "settings"],
      run: function (n) {
        n.current && this.reset(this.$stage.children().index(n.current));
      },
    },
    {
      filter: ["position"],
      run: function () {
        this.animate(this.coordinates(this._current));
      },
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: function () {
        for (
          var t,
            i,
            f = this.settings.rtl ? 1 : -1,
            e = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + e,
            o = r + this.width() * f,
            s = [],
            n = 0,
            u = this._coordinates.length;
          u > n;
          n++
        )
          (t = this._coordinates[n - 1] || 0),
            (i = Math.abs(this._coordinates[n]) + e * f),
            ((this.op(t, "<=", r) && this.op(t, ">", o)) ||
              (this.op(i, "<", r) && this.op(i, ">", o))) &&
              s.push(n);
        this.$stage
          .children("." + this.settings.activeClass)
          .removeClass(this.settings.activeClass);
        this.$stage
          .children(":eq(" + s.join("), :eq(") + ")")
          .addClass(this.settings.activeClass);
        this.settings.center &&
          (this.$stage
            .children("." + this.settings.centerClass)
            .removeClass(this.settings.centerClass),
          this.$stage
            .children()
            .eq(this.current())
            .addClass(this.settings.centerClass));
      },
    },
  ];
  u.prototype.initialize = function () {
    if (
      (this.trigger("initialize"),
      this.$element
        .addClass(this.settings.baseClass)
        .addClass(this.settings.themeClass)
        .toggleClass("owl-rtl", this.settings.rtl),
      this.browserSupport(),
      this.settings.autoWidth && this.state.imagesLoaded !== !0)
    ) {
      var t, i, u;
      if (
        ((t = this.$element.find("img")),
        (i = this.settings.nestedItemSelector
          ? "." + this.settings.nestedItemSelector
          : r),
        (u = this.$element.children(i).width()),
        t.length && 0 >= u)
      )
        return this.preloadAutoWidthImages(t), !1;
    }
    this.$element.addClass("owl-loading");
    this.$stage = n(
      "<" + this.settings.stageElement + ' class="owl-stage"/>'
    ).wrap('<div class="owl-stage-outer">');
    this.$element.append(this.$stage.parent());
    this.replace(this.$element.children().not(this.$stage.parent()));
    this._width = this.$element.width();
    this.refresh();
    this.$element.removeClass("owl-loading").addClass("owl-loaded");
    this.eventsCall();
    this.internalEvents();
    this.addTriggerableEvents();
    this.trigger("initialized");
  };
  u.prototype.setup = function () {
    var u = this.viewport(),
      r = this.options.responsive,
      t = -1,
      i = null;
    r
      ? (n.each(r, function (n) {
          u >= n && n > t && (t = Number(n));
        }),
        (i = n.extend({}, this.options, r[t])),
        delete i.responsive,
        i.responsiveClass &&
          this.$element
            .attr("class", function (n, t) {
              return t.replace(/\b owl-responsive-\S+/g, "");
            })
            .addClass("owl-responsive-" + t))
      : (i = n.extend({}, this.options));
    (null === this.settings || this._breakpoint !== t) &&
      (this.trigger("change", { property: { name: "settings", value: i } }),
      (this._breakpoint = t),
      (this.settings = i),
      this.invalidate("settings"),
      this.trigger("changed", {
        property: { name: "settings", value: this.settings },
      }));
  };
  u.prototype.optionsLogic = function () {
    this.$element.toggleClass("owl-center", this.settings.center);
    this.settings.loop &&
      this._items.length < this.settings.items &&
      (this.settings.loop = !1);
    this.settings.autoWidth &&
      ((this.settings.stagePadding = !1), (this.settings.merge = !1));
  };
  u.prototype.prepare = function (t) {
    var i = this.trigger("prepare", { content: t });
    return (
      i.data ||
        (i.data = n("<" + this.settings.itemElement + "/>")
          .addClass(this.settings.itemClass)
          .append(t)),
      this.trigger("prepared", { content: i.data }),
      i.data
    );
  };
  u.prototype.update = function () {
    for (
      var t = 0,
        i = this._pipe.length,
        r = n.proxy(function (n) {
          return this[n];
        }, this._invalidated),
        u = {};
      i > t;

    )
      (this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) &&
        this._pipe[t].run(u),
        t++;
    this._invalidated = {};
  };
  u.prototype.width = function (n) {
    switch ((n = n || u.Width.Default)) {
      case u.Width.Inner:
      case u.Width.Outer:
        return this._width;
      default:
        return (
          this._width - 2 * this.settings.stagePadding + this.settings.margin
        );
    }
  };
  u.prototype.refresh = function () {
    if (0 === this._items.length) return !1;
    new Date().getTime();
    this.trigger("refresh");
    this.setup();
    this.optionsLogic();
    this.$stage.addClass("owl-refresh");
    this.update();
    this.$stage.removeClass("owl-refresh");
    this.state.orientation = t.orientation;
    this.watchVisibility();
    this.trigger("refreshed");
  };
  u.prototype.eventsCall = function () {
    this.e._onDragStart = n.proxy(function (n) {
      this.onDragStart(n);
    }, this);
    this.e._onDragMove = n.proxy(function (n) {
      this.onDragMove(n);
    }, this);
    this.e._onDragEnd = n.proxy(function (n) {
      this.onDragEnd(n);
    }, this);
    this.e._onResize = n.proxy(function (n) {
      this.onResize(n);
    }, this);
    this.e._transitionEnd = n.proxy(function (n) {
      this.transitionEnd(n);
    }, this);
    this.e._preventClick = n.proxy(function (n) {
      this.preventClick(n);
    }, this);
  };
  u.prototype.onThrottledResize = function () {
    t.clearTimeout(this.resizeTimer);
    this.resizeTimer = t.setTimeout(
      this.e._onResize,
      this.settings.responsiveRefreshRate
    );
  };
  u.prototype.onResize = function () {
    return this._items.length
      ? this._width === this.$element.width()
        ? !1
        : this.trigger("resize").isDefaultPrevented()
          ? !1
          : ((this._width = this.$element.width()),
            this.invalidate("width"),
            this.refresh(),
            void this.trigger("resized"))
      : !1;
  };
  u.prototype.eventsRouter = function (n) {
    var t = n.type;
    "mousedown" === t || "touchstart" === t
      ? this.onDragStart(n)
      : "mousemove" === t || "touchmove" === t
        ? this.onDragMove(n)
        : "mouseup" === t || "touchend" === t
          ? this.onDragEnd(n)
          : "touchcancel" === t && this.onDragEnd(n);
  };
  u.prototype.internalEvents = function () {
    var i = (v(), y());
    this.settings.mouseDrag
      ? (this.$stage.on(
          "mousedown",
          n.proxy(function (n) {
            this.eventsRouter(n);
          }, this)
        ),
        this.$stage.on("dragstart", function () {
          return !1;
        }),
        (this.$stage.get(0).onselectstart = function () {
          return !1;
        }))
      : this.$element.addClass("owl-text-select-on");
    this.settings.touchDrag &&
      !i &&
      this.$stage.on(
        "touchstart touchcancel",
        n.proxy(function (n) {
          this.eventsRouter(n);
        }, this)
      );
    this.transitionEndVendor &&
      this.on(
        this.$stage.get(0),
        this.transitionEndVendor,
        this.e._transitionEnd,
        !1
      );
    this.settings.responsive !== !1 &&
      this.on(t, "resize", n.proxy(this.onThrottledResize, this));
  };
  u.prototype.onDragStart = function (r) {
    var u, e, s, o;
    if (
      ((u = r.originalEvent || r || t.event),
      3 === u.which || this.state.isTouch)
    )
      return !1;
    if (
      ("mousedown" === u.type && this.$stage.addClass("owl-grab"),
      this.trigger("drag"),
      (this.drag.startTime = new Date().getTime()),
      this.speed(0),
      (this.state.isTouch = !0),
      (this.state.isScrolling = !1),
      (this.state.isSwiping = !1),
      (this.drag.distance = 0),
      (e = f(u).x),
      (s = f(u).y),
      (this.drag.offsetX = this.$stage.position().left),
      (this.drag.offsetY = this.$stage.position().top),
      this.settings.rtl &&
        (this.drag.offsetX =
          this.$stage.position().left +
          this.$stage.width() -
          this.width() +
          this.settings.margin),
      this.state.inMotion && this.support3d)
    )
      (o = this.getTransformProperty()),
        (this.drag.offsetX = o),
        this.animate(o),
        (this.state.inMotion = !0);
    else if (this.state.inMotion && !this.support3d)
      return (this.state.inMotion = !1), !1;
    this.drag.startX = e - this.drag.offsetX;
    this.drag.startY = s - this.drag.offsetY;
    this.drag.start = e - this.drag.startX;
    this.drag.targetEl = u.target || u.srcElement;
    this.drag.updatedX = this.drag.start;
    ("IMG" === this.drag.targetEl.tagName ||
      "A" === this.drag.targetEl.tagName) &&
      (this.drag.targetEl.draggable = !1);
    n(i).on(
      "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
      n.proxy(function (n) {
        this.eventsRouter(n);
      }, this)
    );
  };
  u.prototype.onDragMove = function (n) {
    var i, e, o, s, h, u;
    this.state.isTouch &&
      (this.state.isScrolling ||
        ((i = n.originalEvent || n || t.event),
        (e = f(i).x),
        (o = f(i).y),
        (this.drag.currentX = e - this.drag.startX),
        (this.drag.currentY = o - this.drag.startY),
        (this.drag.distance = this.drag.currentX - this.drag.offsetX),
        this.drag.distance < 0
          ? (this.state.direction = this.settings.rtl ? "right" : "left")
          : this.drag.distance > 0 &&
            (this.state.direction = this.settings.rtl ? "left" : "right"),
        this.settings.loop
          ? this.op(
              this.drag.currentX,
              ">",
              this.coordinates(this.minimum())
            ) && "right" === this.state.direction
            ? (this.drag.currentX -=
                (this.settings.center && this.coordinates(0)) -
                this.coordinates(this._items.length))
            : this.op(
                this.drag.currentX,
                "<",
                this.coordinates(this.maximum())
              ) &&
              "left" === this.state.direction &&
              (this.drag.currentX +=
                (this.settings.center && this.coordinates(0)) -
                this.coordinates(this._items.length))
          : ((s = this.coordinates(
              this.settings.rtl ? this.maximum() : this.minimum()
            )),
            (h = this.coordinates(
              this.settings.rtl ? this.minimum() : this.maximum()
            )),
            (u = this.settings.pullDrag ? this.drag.distance / 5 : 0),
            (this.drag.currentX = Math.max(
              Math.min(this.drag.currentX, s + u),
              h + u
            ))),
        (this.drag.distance > 8 || this.drag.distance < -8) &&
          (i.preventDefault !== r ? i.preventDefault() : (i.returnValue = !1),
          (this.state.isSwiping = !0)),
        (this.drag.updatedX = this.drag.currentX),
        (this.drag.currentY > 16 || this.drag.currentY < -16) &&
          this.state.isSwiping === !1 &&
          ((this.state.isScrolling = !0),
          (this.drag.updatedX = this.drag.start)),
        this.animate(this.drag.updatedX)));
  };
  u.prototype.onDragEnd = function (t) {
    var u, f, r;
    if (this.state.isTouch) {
      if (
        ("mouseup" === t.type && this.$stage.removeClass("owl-grab"),
        this.trigger("dragged"),
        this.drag.targetEl.removeAttribute("draggable"),
        (this.state.isTouch = !1),
        (this.state.isScrolling = !1),
        (this.state.isSwiping = !1),
        0 === this.drag.distance && this.state.inMotion !== !0)
      )
        return (this.state.inMotion = !1), !1;
      this.drag.endTime = new Date().getTime();
      u = this.drag.endTime - this.drag.startTime;
      f = Math.abs(this.drag.distance);
      (f > 3 || u > 300) && this.removeClick(this.drag.targetEl);
      r = this.closest(this.drag.updatedX);
      this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
      this.current(r);
      this.invalidate("position");
      this.update();
      this.settings.pullDrag ||
        this.drag.updatedX !== this.coordinates(r) ||
        this.transitionEnd();
      this.drag.distance = 0;
      n(i).off(".owl.dragEvents");
    }
  };
  u.prototype.removeClick = function (i) {
    this.drag.targetEl = i;
    n(i).on("click.preventClick", this.e._preventClick);
    t.setTimeout(function () {
      n(i).off("click.preventClick");
    }, 300);
  };
  u.prototype.preventClick = function (t) {
    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
    t.stopPropagation && t.stopPropagation();
    n(t.target).off("click.preventClick");
  };
  u.prototype.getTransformProperty = function () {
    var n, i;
    return (
      (n = t
        .getComputedStyle(this.$stage.get(0), null)
        .getPropertyValue(this.vendorName + "transform")),
      (n = n.replace(/matrix(3d)?\(|\)/g, "").split(",")),
      (i = 16 === n.length),
      i !== !0 ? n[4] : n[12]
    );
  };
  u.prototype.closest = function (t) {
    var i = -1,
      u = 30,
      f = this.width(),
      r = this.coordinates();
    return (
      this.settings.freeDrag ||
        n.each(
          r,
          n.proxy(function (n, e) {
            return (
              t > e - u && e + u > t
                ? (i = n)
                : this.op(t, "<", e) &&
                  this.op(t, ">", r[n + 1] || e - f) &&
                  (i = "left" === this.state.direction ? n + 1 : n),
              -1 === i
            );
          }, this)
        ),
      this.settings.loop ||
        (this.op(t, ">", r[this.minimum()])
          ? (i = t = this.minimum())
          : this.op(t, "<", r[this.maximum()]) && (i = t = this.maximum())),
      i
    );
  };
  u.prototype.animate = function (t) {
    this.trigger("translate");
    this.state.inMotion = this.speed() > 0;
    this.support3d
      ? this.$stage.css({
          transform: "translate3d(" + t + "px,0px, 0px)",
          transition: this.speed() / 1e3 + "s",
        })
      : this.state.isTouch
        ? this.$stage.css({ left: t + "px" })
        : this.$stage.animate(
            { left: t },
            this.speed() / 1e3,
            this.settings.fallbackEasing,
            n.proxy(function () {
              this.state.inMotion && this.transitionEnd();
            }, this)
          );
  };
  u.prototype.current = function (n) {
    if (n === r) return this._current;
    if (0 === this._items.length) return r;
    if (((n = this.normalize(n)), this._current !== n)) {
      var t = this.trigger("change", {
        property: { name: "position", value: n },
      });
      t.data !== r && (n = this.normalize(t.data));
      this._current = n;
      this.invalidate("position");
      this.trigger("changed", {
        property: { name: "position", value: this._current },
      });
    }
    return this._current;
  };
  u.prototype.invalidate = function (n) {
    this._invalidated[n] = !0;
  };
  u.prototype.reset = function (n) {
    n = this.normalize(n);
    n !== r &&
      ((this._speed = 0),
      (this._current = n),
      this.suppress(["translate", "translated"]),
      this.animate(this.coordinates(n)),
      this.release(["translate", "translated"]));
  };
  u.prototype.normalize = function (t, i) {
    var u = i ? this._items.length : this._items.length + this._clones.length;
    return !n.isNumeric(t) || 1 > u
      ? r
      : (t = this._clones.length
          ? ((t % u) + u) % u
          : Math.max(this.minimum(i), Math.min(this.maximum(i), t)));
  };
  u.prototype.relative = function (n) {
    return (
      (n = this.normalize(n)),
      (n -= this._clones.length / 2),
      this.normalize(n, !0)
    );
  };
  u.prototype.maximum = function (n) {
    var i,
      r,
      u,
      f = 0,
      t = this.settings;
    if (n) return this._items.length - 1;
    if (!t.loop && t.center) i = this._items.length - 1;
    else if (t.loop || t.center)
      if (t.loop || t.center) i = this._items.length + t.items;
      else {
        if (!t.autoWidth && !t.merge)
          throw "Can not detect maximum absolute position.";
        for (
          revert = t.rtl ? 1 : -1,
            r = this.$stage.width() - this.$element.width();
          (u = this.coordinates(f)) && !(u * revert >= r);

        )
          i = ++f;
      }
    else i = this._items.length - t.items;
    return i;
  };
  u.prototype.minimum = function (n) {
    return n ? 0 : this._clones.length / 2;
  };
  u.prototype.items = function (n) {
    return n === r
      ? this._items.slice()
      : ((n = this.normalize(n, !0)), this._items[n]);
  };
  u.prototype.mergers = function (n) {
    return n === r
      ? this._mergers.slice()
      : ((n = this.normalize(n, !0)), this._mergers[n]);
  };
  u.prototype.clones = function (t) {
    var i = this._clones.length / 2,
      f = i + this._items.length,
      u = function (n) {
        return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2;
      };
    return t === r
      ? n.map(this._clones, function (n, t) {
          return u(t);
        })
      : n.map(this._clones, function (n, i) {
          return n === t ? u(i) : null;
        });
  };
  u.prototype.speed = function (n) {
    return n !== r && (this._speed = n), this._speed;
  };
  u.prototype.coordinates = function (t) {
    var i = null;
    return t === r
      ? n.map(
          this._coordinates,
          n.proxy(function (n, t) {
            return this.coordinates(t);
          }, this)
        )
      : (this.settings.center
          ? ((i = this._coordinates[t]),
            (i +=
              ((this.width() - i + (this._coordinates[t - 1] || 0)) / 2) *
              (this.settings.rtl ? -1 : 1)))
          : (i = this._coordinates[t - 1] || 0),
        i);
  };
  u.prototype.duration = function (n, t, i) {
    return (
      Math.min(Math.max(Math.abs(t - n), 1), 6) *
      Math.abs(i || this.settings.smartSpeed)
    );
  };
  u.prototype.to = function (i, r) {
    if (this.settings.loop) {
      var f = i - this.relative(this.current()),
        u = this.current(),
        e = this.current(),
        o = this.current() + f,
        s = 0 > e - o ? !0 : !1,
        h = this._clones.length + this._items.length;
      o < this.settings.items && s === !1
        ? ((u = e + this._items.length), this.reset(u))
        : o >= h - this.settings.items &&
          s === !0 &&
          ((u = e - this._items.length), this.reset(u));
      t.clearTimeout(this.e._goToLoop);
      this.e._goToLoop = t.setTimeout(
        n.proxy(function () {
          this.speed(this.duration(this.current(), u + f, r));
          this.current(u + f);
          this.update();
        }, this),
        30
      );
    } else
      this.speed(this.duration(this.current(), i, r)),
        this.current(i),
        this.update();
  };
  u.prototype.next = function (n) {
    n = n || !1;
    this.to(this.relative(this.current()) + 1, n);
  };
  u.prototype.prev = function (n) {
    n = n || !1;
    this.to(this.relative(this.current()) - 1, n);
  };
  u.prototype.transitionEnd = function (n) {
    return n !== r &&
      (n.stopPropagation(),
      (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))
      ? !1
      : ((this.state.inMotion = !1), void this.trigger("translated"));
  };
  u.prototype.viewport = function () {
    var r;
    if (this.options.responsiveBaseElement !== t)
      r = n(this.options.responsiveBaseElement).width();
    else if (t.innerWidth) r = t.innerWidth;
    else {
      if (!i.documentElement || !i.documentElement.clientWidth)
        throw "Can not detect viewport width.";
      r = i.documentElement.clientWidth;
    }
    return r;
  };
  u.prototype.replace = function (t) {
    this.$stage.empty();
    this._items = [];
    t && (t = t instanceof jQuery ? t : n(t));
    this.settings.nestedItemSelector &&
      (t = t.find("." + this.settings.nestedItemSelector));
    t.filter(function () {
      return 1 === this.nodeType;
    }).each(
      n.proxy(function (n, t) {
        t = this.prepare(t);
        this.$stage.append(t);
        this._items.push(t);
        this._mergers.push(
          1 *
            t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") ||
            1
        );
      }, this)
    );
    this.reset(
      n.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0
    );
    this.invalidate("items");
  };
  u.prototype.add = function (n, t) {
    t = t === r ? this._items.length : this.normalize(t, !0);
    this.trigger("add", { content: n, position: t });
    0 === this._items.length || t === this._items.length
      ? (this.$stage.append(n),
        this._items.push(n),
        this._mergers.push(
          1 *
            n.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") ||
            1
        ))
      : (this._items[t].before(n),
        this._items.splice(t, 0, n),
        this._mergers.splice(
          t,
          0,
          1 *
            n.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") ||
            1
        ));
    this.invalidate("items");
    this.trigger("added", { content: n, position: t });
  };
  u.prototype.remove = function (n) {
    n = this.normalize(n, !0);
    n !== r &&
      (this.trigger("remove", { content: this._items[n], position: n }),
      this._items[n].remove(),
      this._items.splice(n, 1),
      this._mergers.splice(n, 1),
      this.invalidate("items"),
      this.trigger("removed", { content: null, position: n }));
  };
  u.prototype.addTriggerableEvents = function () {
    var t = n.proxy(function (t, i) {
      return n.proxy(function (n) {
        n.relatedTarget !== this &&
          (this.suppress([i]),
          t.apply(this, [].slice.call(arguments, 1)),
          this.release([i]));
      }, this);
    }, this);
    n.each(
      {
        next: this.next,
        prev: this.prev,
        to: this.to,
        destroy: this.destroy,
        refresh: this.refresh,
        replace: this.replace,
        add: this.add,
        remove: this.remove,
      },
      n.proxy(function (n, i) {
        this.$element.on(n + ".owl.carousel", t(i, n + ".owl.carousel"));
      }, this)
    );
  };
  u.prototype.watchVisibility = function () {
    function i(n) {
      return n.offsetWidth > 0 && n.offsetHeight > 0;
    }
    function r() {
      i(this.$element.get(0)) &&
        (this.$element.removeClass("owl-hidden"),
        this.refresh(),
        t.clearInterval(this.e._checkVisibile));
    }
    i(this.$element.get(0)) ||
      (this.$element.addClass("owl-hidden"),
      t.clearInterval(this.e._checkVisibile),
      (this.e._checkVisibile = t.setInterval(n.proxy(r, this), 500)));
  };
  u.prototype.preloadAutoWidthImages = function (t) {
    var u, f, i, r;
    u = 0;
    f = this;
    t.each(function (e, o) {
      i = n(o);
      r = new Image();
      r.onload = function () {
        u++;
        i.attr("src", r.src);
        i.css("opacity", 1);
        u >= t.length && ((f.state.imagesLoaded = !0), f.initialize());
      };
      r.src = i.attr("src") || i.attr("data-src") || i.attr("data-src-retina");
    });
  };
  u.prototype.destroy = function () {
    this.$element.hasClass(this.settings.themeClass) &&
      this.$element.removeClass(this.settings.themeClass);
    this.settings.responsive !== !1 && n(t).off("resize.owl.carousel");
    this.transitionEndVendor &&
      this.off(
        this.$stage.get(0),
        this.transitionEndVendor,
        this.e._transitionEnd
      );
    for (var r in this._plugins) this._plugins[r].destroy();
    (this.settings.mouseDrag || this.settings.touchDrag) &&
      (this.$stage.off("mousedown touchstart touchcancel"),
      n(i).off(".owl.dragEvents"),
      (this.$stage.get(0).onselectstart = function () {}),
      this.$stage.off("dragstart", function () {
        return !1;
      }));
    this.$element.off(".owl");
    this.$stage.children(".cloned").remove();
    this.e = null;
    this.$element.removeData("owlCarousel");
    this.$stage.children().contents().unwrap();
    this.$stage.children().unwrap();
    this.$stage.unwrap();
  };
  u.prototype.op = function (n, t, i) {
    var r = this.settings.rtl;
    switch (t) {
      case "<":
        return r ? n > i : i > n;
      case ">":
        return r ? i > n : n > i;
      case ">=":
        return r ? i >= n : n >= i;
      case "<=":
        return r ? n >= i : i >= n;
    }
  };
  u.prototype.on = function (n, t, i, r) {
    n.addEventListener
      ? n.addEventListener(t, i, r)
      : n.attachEvent && n.attachEvent("on" + t, i);
  };
  u.prototype.off = function (n, t, i, r) {
    n.removeEventListener
      ? n.removeEventListener(t, i, r)
      : n.detachEvent && n.detachEvent("on" + t, i);
  };
  u.prototype.trigger = function (t, i, r) {
    var e = { item: { count: this._items.length, index: this.current() } },
      f = n.camelCase(
        n
          .grep(["on", t, r], function (n) {
            return n;
          })
          .join("-")
          .toLowerCase()
      ),
      u = n.Event(
        [t, "owl", r || "carousel"].join(".").toLowerCase(),
        n.extend({ relatedTarget: this }, e, i)
      );
    return (
      this._supress[t] ||
        (n.each(this._plugins, function (n, t) {
          t.onTrigger && t.onTrigger(u);
        }),
        this.$element.trigger(u),
        this.settings &&
          "function" == typeof this.settings[f] &&
          this.settings[f].apply(this, u)),
      u
    );
  };
  u.prototype.suppress = function (t) {
    n.each(
      t,
      n.proxy(function (n, t) {
        this._supress[t] = !0;
      }, this)
    );
  };
  u.prototype.release = function (t) {
    n.each(
      t,
      n.proxy(function (n, t) {
        delete this._supress[t];
      }, this)
    );
  };
  u.prototype.browserSupport = function () {
    if (((this.support3d = a()), this.support3d)) {
      this.transformVendor = l();
      this.transitionEndVendor = [
        "transitionend",
        "webkitTransitionEnd",
        "transitionend",
        "oTransitionEnd",
      ][c()];
      this.vendorName = this.transformVendor.replace(/Transform/i, "");
      this.vendorName =
        "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
    }
    this.state.orientation = t.orientation;
  };
  n.fn.owlCarousel = function (t) {
    return this.each(function () {
      n(this).data("owlCarousel") ||
        n(this).data("owlCarousel", new u(this, t));
    });
  };
  n.fn.owlCarousel.Constructor = u;
})(window.Zepto || window.jQuery, window, document),
  (function (n, t) {
    var i = function (t) {
      this._core = t;
      this._loaded = [];
      this._handlers = {
        "initialized.owl.carousel change.owl.carousel": n.proxy(function (t) {
          if (
            t.namespace &&
            this._core.settings &&
            this._core.settings.lazyLoad &&
            ((t.property && "position" == t.property.name) ||
              "initialized" == t.type)
          )
            for (
              var i = this._core.settings,
                r = (i.center && Math.ceil(i.items / 2)) || i.items,
                u = (i.center && -1 * r) || 0,
                f =
                  ((t.property && t.property.value) || this._core.current()) +
                  u,
                e = this._core.clones().length,
                o = n.proxy(function (n, t) {
                  this.load(t);
                }, this);
              u++ < r;

            )
              this.load(e / 2 + this._core.relative(f)),
                e && n.each(this._core.clones(this._core.relative(f++)), o);
        }, this),
      };
      this._core.options = n.extend({}, i.Defaults, this._core.options);
      this._core.$element.on(this._handlers);
    };
    i.Defaults = { lazyLoad: !1 };
    i.prototype.load = function (i) {
      var r = this._core.$stage.children().eq(i),
        u = r && r.find(".owl-lazy");
      !u ||
        n.inArray(r.get(0), this._loaded) > -1 ||
        (u.each(
          n.proxy(function (i, r) {
            var e,
              u = n(r),
              f =
                (t.devicePixelRatio > 1 && u.attr("data-src-retina")) ||
                u.attr("data-src");
            this._core.trigger("load", { element: u, url: f }, "lazy");
            u.is("img")
              ? u
                  .one(
                    "load.owl.lazy",
                    n.proxy(function () {
                      u.css("opacity", 1);
                      this._core.trigger(
                        "loaded",
                        { element: u, url: f },
                        "lazy"
                      );
                    }, this)
                  )
                  .attr("src", f)
              : ((e = new Image()),
                (e.onload = n.proxy(function () {
                  u.css({ "background-image": "url(" + f + ")", opacity: "1" });
                  this._core.trigger("loaded", { element: u, url: f }, "lazy");
                }, this)),
                (e.src = f));
          }, this)
        ),
        this._loaded.push(r.get(0)));
    };
    i.prototype.destroy = function () {
      var n, t;
      for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
      for (t in Object.getOwnPropertyNames(this))
        "function" != typeof this[t] && (this[t] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = i;
  })(window.Zepto || window.jQuery, window, document),
  (function (n) {
    var t = function (i) {
      this._core = i;
      this._handlers = {
        "initialized.owl.carousel": n.proxy(function () {
          this._core.settings.autoHeight && this.update();
        }, this),
        "changed.owl.carousel": n.proxy(function (n) {
          this._core.settings.autoHeight &&
            "position" == n.property.name &&
            this.update();
        }, this),
        "loaded.owl.lazy": n.proxy(function (n) {
          this._core.settings.autoHeight &&
            n.element.closest("." + this._core.settings.itemClass) ===
              this._core.$stage.children().eq(this._core.current()) &&
            this.update();
        }, this),
      };
      this._core.options = n.extend({}, t.Defaults, this._core.options);
      this._core.$element.on(this._handlers);
    };
    t.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" };
    t.prototype.update = function () {
      this._core.$stage
        .parent()
        .height(this._core.$stage.children().eq(this._core.current()).height())
        .addClass(this._core.settings.autoHeightClass);
    };
    t.prototype.destroy = function () {
      var n, t;
      for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
      for (t in Object.getOwnPropertyNames(this))
        "function" != typeof this[t] && (this[t] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t;
  })(window.Zepto || window.jQuery, window, document),
  (function (n, t, i) {
    var r = function (t) {
      this._core = t;
      this._videos = {};
      this._playing = null;
      this._fullscreen = !1;
      this._handlers = {
        "resize.owl.carousel": n.proxy(function (n) {
          this._core.settings.video &&
            !this.isInFullScreen() &&
            n.preventDefault();
        }, this),
        "refresh.owl.carousel changed.owl.carousel": n.proxy(function () {
          this._playing && this.stop();
        }, this),
        "prepared.owl.carousel": n.proxy(function (t) {
          var i = n(t.content).find(".owl-video");
          i.length && (i.css("display", "none"), this.fetch(i, n(t.content)));
        }, this),
      };
      this._core.options = n.extend({}, r.Defaults, this._core.options);
      this._core.$element.on(this._handlers);
      this._core.$element.on(
        "click.owl.video",
        ".owl-video-play-icon",
        n.proxy(function (n) {
          this.play(n);
        }, this)
      );
    };
    r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 };
    r.prototype.fetch = function (n, t) {
      var u = n.attr("data-vimeo-id") ? "vimeo" : "youtube",
        i = n.attr("data-vimeo-id") || n.attr("data-youtube-id"),
        f = n.attr("data-width") || this._core.settings.videoWidth,
        e = n.attr("data-height") || this._core.settings.videoHeight,
        r = n.attr("href");
      if (!r) throw new Error("Missing video URL.");
      if (
        ((i = r.match(
          /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
        )),
        i[3].indexOf("youtu") > -1)
      )
        u = "youtube";
      else {
        if (!(i[3].indexOf("vimeo") > -1))
          throw new Error("Video URL not supported.");
        u = "vimeo";
      }
      i = i[6];
      this._videos[r] = { type: u, id: i, width: f, height: e };
      t.attr("data-video", r);
      this.thumbnail(n, this._videos[r]);
    };
    r.prototype.thumbnail = function (t, i) {
      var o,
        s,
        r,
        c =
          i.width && i.height
            ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
            : "",
        u = t.find("img"),
        f = "src",
        h = "",
        l = this._core.settings,
        e = function (n) {
          s = '<div class="owl-video-play-icon"></div>';
          o = l.lazyLoad
            ? '<div class="owl-video-tn ' + h + '" ' + f + '="' + n + '"></div>'
            : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
              n +
              ')"></div>';
          t.after(o);
          t.after(s);
        };
      return (
        t.wrap('<div class="owl-video-wrapper"' + c + "></div>"),
        this._core.settings.lazyLoad && ((f = "data-src"), (h = "owl-lazy")),
        u.length
          ? (e(u.attr(f)), u.remove(), !1)
          : void ("youtube" === i.type
              ? ((r = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                e(r))
              : "vimeo" === i.type &&
                n.ajax({
                  type: "GET",
                  url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (n) {
                    r = n[0].thumbnail_large;
                    e(r);
                  },
                }))
      );
    };
    r.prototype.stop = function () {
      this._core.trigger("stop", null, "video");
      this._playing.find(".owl-video-frame").remove();
      this._playing.removeClass("owl-video-playing");
      this._playing = null;
    };
    r.prototype.play = function (t) {
      this._core.trigger("play", null, "video");
      this._playing && this.stop();
      var r,
        o,
        s = n(t.target || t.srcElement),
        u = s.closest("." + this._core.settings.itemClass),
        i = this._videos[u.attr("data-video")],
        f = i.width || "100%",
        e = i.height || this._core.$stage.height();
      "youtube" === i.type
        ? (r =
            '<iframe width="' +
            f +
            '" height="' +
            e +
            '" src="http://www.youtube.com/embed/' +
            i.id +
            "?autoplay=1&v=" +
            i.id +
            '" frameborder="0" allowfullscreen></iframe>')
        : "vimeo" === i.type &&
          (r =
            '<iframe src="http://player.vimeo.com/video/' +
            i.id +
            '?autoplay=1" width="' +
            f +
            '" height="' +
            e +
            '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      u.addClass("owl-video-playing");
      this._playing = u;
      o = n(
        '<div style="height:' +
          e +
          "px; width:" +
          f +
          'px" class="owl-video-frame">' +
          r +
          "</div>"
      );
      s.after(o);
    };
    r.prototype.isInFullScreen = function () {
      var r =
        i.fullscreenElement ||
        i.mozFullScreenElement ||
        i.webkitFullscreenElement;
      return (
        r &&
          n(r).parent().hasClass("owl-video-frame") &&
          (this._core.speed(0), (this._fullscreen = !0)),
        r && this._fullscreen && this._playing
          ? !1
          : this._fullscreen
            ? ((this._fullscreen = !1), !1)
            : this._playing && this._core.state.orientation !== t.orientation
              ? ((this._core.state.orientation = t.orientation), !1)
              : !0
      );
    };
    r.prototype.destroy = function () {
      var n, t;
      this._core.$element.off("click.owl.video");
      for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
      for (t in Object.getOwnPropertyNames(this))
        "function" != typeof this[t] && (this[t] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.Video = r;
  })(window.Zepto || window.jQuery, window, document),
  (function (n, t, i, r) {
    var u = function (t) {
      this.core = t;
      this.core.options = n.extend({}, u.Defaults, this.core.options);
      this.swapping = !0;
      this.previous = r;
      this.next = r;
      this.handlers = {
        "change.owl.carousel": n.proxy(function (n) {
          "position" == n.property.name &&
            ((this.previous = this.core.current()),
            (this.next = n.property.value));
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
          n.proxy(function (n) {
            this.swapping = "translated" == n.type;
          }, this),
        "translate.owl.carousel": n.proxy(function () {
          this.swapping &&
            (this.core.options.animateOut || this.core.options.animateIn) &&
            this.swap();
        }, this),
      };
      this.core.$element.on(this.handlers);
    };
    u.Defaults = { animateOut: !1, animateIn: !1 };
    u.prototype.swap = function () {
      if (1 === this.core.settings.items && this.core.support3d) {
        this.core.speed(0);
        var t,
          i = n.proxy(this.clear, this),
          f = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          r = this.core.settings.animateIn,
          u = this.core.settings.animateOut;
        this.core.current() !== this.previous &&
          (u &&
            ((t =
              this.core.coordinates(this.previous) -
              this.core.coordinates(this.next)),
            f
              .css({ left: t + "px" })
              .addClass("animated owl-animated-out")
              .addClass(u)
              .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                i
              )),
          r &&
            e
              .addClass("animated owl-animated-in")
              .addClass(r)
              .one(
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                i
              ));
      }
    };
    u.prototype.clear = function (t) {
      n(t.target)
        .css({ left: "" })
        .removeClass("animated owl-animated-out owl-animated-in")
        .removeClass(this.core.settings.animateIn)
        .removeClass(this.core.settings.animateOut);
      this.core.transitionEnd();
    };
    u.prototype.destroy = function () {
      var n, t;
      for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
      for (t in Object.getOwnPropertyNames(this))
        "function" != typeof this[t] && (this[t] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u;
  })(window.Zepto || window.jQuery, window, document),
  (function (n, t, i) {
    var r = function (t) {
      this.core = t;
      this.core.options = n.extend({}, r.Defaults, this.core.options);
      this.handlers = {
        "translated.owl.carousel refreshed.owl.carousel": n.proxy(function () {
          this.autoplay();
        }, this),
        "play.owl.autoplay": n.proxy(function (n, t, i) {
          this.play(t, i);
        }, this),
        "stop.owl.autoplay": n.proxy(function () {
          this.stop();
        }, this),
        "mouseover.owl.autoplay": n.proxy(function () {
          this.core.settings.autoplayHoverPause && this.pause();
        }, this),
        "mouseleave.owl.autoplay": n.proxy(function () {
          this.core.settings.autoplayHoverPause && this.autoplay();
        }, this),
      };
      this.core.$element.on(this.handlers);
    };
    r.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    };
    r.prototype.autoplay = function () {
      this.core.settings.autoplay && !this.core.state.videoPlay
        ? (t.clearInterval(this.interval),
          (this.interval = t.setInterval(
            n.proxy(function () {
              this.play();
            }, this),
            this.core.settings.autoplayTimeout
          )))
        : t.clearInterval(this.interval);
    };
    r.prototype.play = function () {
      if (
        i.hidden !== !0 &&
        !this.core.state.isTouch &&
        !this.core.state.isScrolling &&
        !this.core.state.isSwiping &&
        !this.core.state.inMotion
      )
        return this.core.settings.autoplay === !1
          ? void t.clearInterval(this.interval)
          : void this.core.next(this.core.settings.autoplaySpeed);
    };
    r.prototype.stop = function () {
      t.clearInterval(this.interval);
    };
    r.prototype.pause = function () {
      t.clearInterval(this.interval);
    };
    r.prototype.destroy = function () {
      var n, i;
      t.clearInterval(this.interval);
      for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
      for (i in Object.getOwnPropertyNames(this))
        "function" != typeof this[i] && (this[i] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r;
  })(window.Zepto || window.jQuery, window, document),
  (function (n) {
    "use strict";
    var t = function (i) {
      this._core = i;
      this._initialized = !1;
      this._pages = [];
      this._controls = {};
      this._templates = [];
      this.$element = this._core.$element;
      this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to,
      };
      this._handlers = {
        "prepared.owl.carousel": n.proxy(function (t) {
          this._core.settings.dotsData &&
            this._templates.push(
              n(t.content)
                .find("[data-dot]")
                .andSelf("[data-dot]")
                .attr("data-dot")
            );
        }, this),
        "add.owl.carousel": n.proxy(function (t) {
          this._core.settings.dotsData &&
            this._templates.splice(
              t.position,
              0,
              n(t.content)
                .find("[data-dot]")
                .andSelf("[data-dot]")
                .attr("data-dot")
            );
        }, this),
        "remove.owl.carousel prepared.owl.carousel": n.proxy(function (n) {
          this._core.settings.dotsData && this._templates.splice(n.position, 1);
        }, this),
        "change.owl.carousel": n.proxy(function (n) {
          if (
            "position" == n.property.name &&
            !this._core.state.revert &&
            !this._core.settings.loop &&
            this._core.settings.navRewind
          ) {
            var r = this._core.current(),
              t = this._core.maximum(),
              i = this._core.minimum();
            n.data =
              n.property.value > t
                ? r >= t
                  ? i
                  : t
                : n.property.value < i
                  ? t
                  : n.property.value;
          }
        }, this),
        "changed.owl.carousel": n.proxy(function (n) {
          "position" == n.property.name && this.draw();
        }, this),
        "refreshed.owl.carousel": n.proxy(function () {
          this._initialized || (this.initialize(), (this._initialized = !0));
          this._core.trigger("refresh", null, "navigation");
          this.update();
          this.draw();
          this._core.trigger("refreshed", null, "navigation");
        }, this),
      };
      this._core.options = n.extend({}, t.Defaults, this._core.options);
      this.$element.on(this._handlers);
    };
    t.Defaults = {
      nav: !1,
      navRewind: !0,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
      controlsClass: "owl-controls",
    };
    t.prototype.initialize = function () {
      var i,
        r,
        t = this._core.settings;
      t.dotsData ||
        (this._templates = [
          n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML"),
        ]);
      (t.navContainer && t.dotsContainer) ||
        (this._controls.$container = n("<div>")
          .addClass(t.controlsClass)
          .appendTo(this.$element));
      this._controls.$indicators = t.dotsContainer
        ? n(t.dotsContainer)
        : n("<div>")
            .hide()
            .addClass(t.dotsClass)
            .appendTo(this._controls.$container);
      this._controls.$indicators.on(
        "click",
        "div",
        n.proxy(function (i) {
          var r = n(i.target).parent().is(this._controls.$indicators)
            ? n(i.target).index()
            : n(i.target).parent().index();
          i.preventDefault();
          this.to(r, t.dotsSpeed);
        }, this)
      );
      i = t.navContainer
        ? n(t.navContainer)
        : n("<div>")
            .addClass(t.navContainerClass)
            .prependTo(this._controls.$container);
      this._controls.$next = n("<" + t.navElement + ">");
      this._controls.$previous = this._controls.$next.clone();
      this._controls.$previous
        .addClass(t.navClass[0])
        .html(t.navText[0])
        .hide()
        .prependTo(i)
        .on(
          "click",
          n.proxy(function () {
            this.prev(t.navSpeed);
          }, this)
        );
      this._controls.$next
        .addClass(t.navClass[1])
        .html(t.navText[1])
        .hide()
        .appendTo(i)
        .on(
          "click",
          n.proxy(function () {
            this.next(t.navSpeed);
          }, this)
        );
      for (r in this._overrides) this._core[r] = n.proxy(this[r], this);
    };
    t.prototype.destroy = function () {
      var n, r, t, i;
      for (n in this._handlers) this.$element.off(n, this._handlers[n]);
      for (r in this._controls) this._controls[r].remove();
      for (i in this.overides) this._core[i] = this._overrides[i];
      for (t in Object.getOwnPropertyNames(this))
        "function" != typeof this[t] && (this[t] = null);
    };
    t.prototype.update = function () {
      var t,
        i,
        u,
        n = this._core.settings,
        r = this._core.clones().length / 2,
        e = r + this._core.items().length,
        f = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
      if (
        ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)),
        n.dots || "page" == n.slideBy)
      )
        for (this._pages = [], t = r, i = 0, u = 0; e > t; t++)
          (i >= f || 0 === i) &&
            (this._pages.push({ start: t - r, end: t - r + f - 1 }),
            (i = 0),
            ++u),
            (i += this._core.mergers(this._core.relative(t)));
    };
    t.prototype.draw = function () {
      var i,
        r,
        u = "",
        t = this._core.settings,
        f =
          (this._core.$stage.children(),
          this._core.relative(this._core.current()));
      if (
        (!t.nav ||
          t.loop ||
          t.navRewind ||
          (this._controls.$previous.toggleClass("disabled", 0 >= f),
          this._controls.$next.toggleClass(
            "disabled",
            f >= this._core.maximum()
          )),
        this._controls.$previous.toggle(t.nav),
        this._controls.$next.toggle(t.nav),
        t.dots)
      ) {
        if (
          ((i =
            this._pages.length - this._controls.$indicators.children().length),
          t.dotData && 0 !== i)
        ) {
          for (r = 0; r < this._controls.$indicators.children().length; r++)
            u += this._templates[this._core.relative(r)];
          this._controls.$indicators.html(u);
        } else
          i > 0
            ? ((u = new Array(i + 1).join(this._templates[0])),
              this._controls.$indicators.append(u))
            : 0 > i && this._controls.$indicators.children().slice(i).remove();
        this._controls.$indicators.find(".active").removeClass("active");
        this._controls.$indicators
          .children()
          .eq(n.inArray(this.current(), this._pages))
          .addClass("active");
      }
      this._controls.$indicators.toggle(t.dots);
    };
    t.prototype.onTrigger = function (t) {
      var i = this._core.settings;
      t.page = {
        index: n.inArray(this.current(), this._pages),
        count: this._pages.length,
        size:
          i &&
          (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items),
      };
    };
    t.prototype.current = function () {
      var t = this._core.relative(this._core.current());
      return n
        .grep(this._pages, function (n) {
          return n.start <= t && n.end >= t;
        })
        .pop();
    };
    t.prototype.getPosition = function (t) {
      var i,
        r,
        u = this._core.settings;
      return (
        "page" == u.slideBy
          ? ((i = n.inArray(this.current(), this._pages)),
            (r = this._pages.length),
            t ? ++i : --i,
            (i = this._pages[((i % r) + r) % r].start))
          : ((i = this._core.relative(this._core.current())),
            (r = this._core.items().length),
            t ? (i += u.slideBy) : (i -= u.slideBy)),
        i
      );
    };
    t.prototype.next = function (t) {
      n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
    };
    t.prototype.prev = function (t) {
      n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
    };
    t.prototype.to = function (t, i, r) {
      var u;
      r
        ? n.proxy(this._overrides.to, this._core)(t, i)
        : ((u = this._pages.length),
          n.proxy(this._overrides.to, this._core)(
            this._pages[((t % u) + u) % u].start,
            i
          ));
    };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t;
  })(window.Zepto || window.jQuery, window, document),
  (function (n, t) {
    "use strict";
    var i = function (r) {
      this._core = r;
      this._hashes = {};
      this.$element = this._core.$element;
      this._handlers = {
        "initialized.owl.carousel": n.proxy(function () {
          "URLHash" == this._core.settings.startPosition &&
            n(t).trigger("hashchange.owl.navigation");
        }, this),
        "prepared.owl.carousel": n.proxy(function (t) {
          var i = n(t.content)
            .find("[data-hash]")
            .andSelf("[data-hash]")
            .attr("data-hash");
          this._hashes[i] = t.content;
        }, this),
      };
      this._core.options = n.extend({}, i.Defaults, this._core.options);
      this.$element.on(this._handlers);
      n(t).on(
        "hashchange.owl.navigation",
        n.proxy(function () {
          var n = t.location.hash.substring(1),
            i = this._core.$stage.children(),
            r = (this._hashes[n] && i.index(this._hashes[n])) || 0;
          return n ? void this._core.to(r, !1, !0) : !1;
        }, this)
      );
    };
    i.Defaults = { URLhashListener: !1 };
    i.prototype.destroy = function () {
      var i, r;
      n(t).off("hashchange.owl.navigation");
      for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
      for (r in Object.getOwnPropertyNames(this))
        "function" != typeof this[r] && (this[r] = null);
    };
    n.fn.owlCarousel.Constructor.Plugins.Hash = i;
  })(window.Zepto || window.jQuery, window, document);
!(function () {
  var r, t, n;
  window.define && (n = window.define);
  window.require && (t = window.require);
  window.jQuery &&
    jQuery.fn &&
    jQuery.fn.select2 &&
    jQuery.fn.select2.amd &&
    ((n = jQuery.fn.select2.amd.define), (t = jQuery.fn.select2.amd.require));
  !(function (i) {
    function e(n, t) {
      return nt.call(n, t);
    }
    function c(n, t) {
      var e,
        s,
        o,
        u,
        h,
        y,
        c,
        w,
        i,
        l,
        p,
        r = t && t.split("/"),
        a = f.map,
        v = (a && a["*"]) || {};
      if (n && "." === n.charAt(0))
        if (t) {
          for (
            r = r.slice(0, r.length - 1),
              n = n.split("/"),
              h = n.length - 1,
              f.nodeIdCompat && b.test(n[h]) && (n[h] = n[h].replace(b, "")),
              n = r.concat(n),
              i = 0;
            i < n.length;
            i += 1
          )
            if (((p = n[i]), "." === p)) n.splice(i, 1), (i -= 1);
            else if (".." === p) {
              if (1 === i && (".." === n[2] || ".." === n[0])) break;
              i > 0 && (n.splice(i - 1, 2), (i -= 2));
            }
          n = n.join("/");
        } else 0 === n.indexOf("./") && (n = n.substring(2));
      if ((r || v) && a) {
        for (e = n.split("/"), i = e.length; i > 0; i -= 1) {
          if (((s = e.slice(0, i).join("/")), r))
            for (l = r.length; l > 0; l -= 1)
              if (((o = a[r.slice(0, l).join("/")]), o && (o = o[s]))) {
                u = o;
                y = i;
                break;
              }
          if (u) break;
          !c && v && v[s] && ((c = v[s]), (w = i));
        }
        !u && c && ((u = c), (y = w));
        u && (e.splice(0, y, u), (n = e.join("/")));
      }
      return n;
    }
    function p(n, t) {
      return function () {
        return o.apply(i, tt.call(arguments, 0).concat([n, t]));
      };
    }
    function k(n) {
      return function (t) {
        return c(t, n);
      };
    }
    function d(n) {
      return function (t) {
        u[n] = t;
      };
    }
    function l(n) {
      if (e(h, n)) {
        var t = h[n];
        delete h[n];
        y[n] = !0;
        a.apply(i, t);
      }
      if (!e(u, n) && !e(y, n)) throw new Error("No " + n);
      return u[n];
    }
    function w(n) {
      var i,
        t = n ? n.indexOf("!") : -1;
      return (
        t > -1 && ((i = n.substring(0, t)), (n = n.substring(t + 1, n.length))),
        [i, n]
      );
    }
    function g(n) {
      return function () {
        return (f && f.config && f.config[n]) || {};
      };
    }
    var a,
      o,
      v,
      s,
      u = {},
      h = {},
      f = {},
      y = {},
      nt = Object.prototype.hasOwnProperty,
      tt = [].slice,
      b = /\.js$/;
    v = function (n, t) {
      var r,
        u = w(n),
        i = u[0];
      return (
        (n = u[1]),
        i && ((i = c(i, t)), (r = l(i))),
        i
          ? (n = r && r.normalize ? r.normalize(n, k(t)) : c(n, t))
          : ((n = c(n, t)),
            (u = w(n)),
            (i = u[0]),
            (n = u[1]),
            i && (r = l(i))),
        { f: i ? i + "!" + n : n, n: n, pr: i, p: r }
      );
    };
    s = {
      require: function (n) {
        return p(n);
      },
      exports: function (n) {
        var t = u[n];
        return "undefined" != typeof t ? t : (u[n] = {});
      },
      module: function (n) {
        return { id: n, uri: "", exports: u[n], config: g(n) };
      },
    };
    a = function (n, t, r, f) {
      var w,
        o,
        k,
        b,
        c,
        g,
        a = [],
        nt = typeof r;
      if (((f = f || n), "undefined" === nt || "function" === nt)) {
        for (
          t = !t.length && r.length ? ["require", "exports", "module"] : t,
            c = 0;
          c < t.length;
          c += 1
        )
          if (((b = v(t[c], f)), (o = b.f), "require" === o))
            a[c] = s.require(n);
          else if ("exports" === o) (a[c] = s.exports(n)), (g = !0);
          else if ("module" === o) w = a[c] = s.module(n);
          else if (e(u, o) || e(h, o) || e(y, o)) a[c] = l(o);
          else {
            if (!b.p) throw new Error(n + " missing " + o);
            b.p.load(b.n, p(f, !0), d(o), {});
            a[c] = u[o];
          }
        k = r ? r.apply(u[n], a) : void 0;
        n &&
          (w && w.exports !== i && w.exports !== u[n]
            ? (u[n] = w.exports)
            : (k === i && g) || (u[n] = k));
      } else n && (u[n] = r);
    };
    r =
      t =
      o =
        function (n, t, r, u, e) {
          if ("string" == typeof n) return s[n] ? s[n](t) : l(v(n, t).f);
          if (!n.splice) {
            if (((f = n), f.deps && o(f.deps, f.callback), !t)) return;
            t.splice ? ((n = t), (t = r), (r = null)) : (n = i);
          }
          return (
            (t = t || function () {}),
            "function" == typeof r && ((r = u), (u = e)),
            u
              ? a(i, n, t, r)
              : setTimeout(function () {
                  a(i, n, t, r);
                }, 4),
            o
          );
        };
    o.config = function (n) {
      return o(n);
    };
    r._defined = u;
    n = function (n, t, i) {
      t.splice || ((i = t), (t = []));
      e(u, n) || e(h, n) || (h[n] = [n, t, i]);
    };
    n.amd = { jQuery: !0 };
  })();
  n("almond", function () {});
  n("jquery", [], function () {
    var n = jQuery || $;
    return (
      null == n &&
        console &&
        console.error &&
        console.error(
          "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
        ),
      n
    );
  });
  n("select2/utils", [], function () {
    function i(n) {
      var i = n.prototype,
        r = [],
        t,
        u;
      for (t in i)
        (u = i[t]), "function" == typeof u && "constructor" !== t && r.push(t);
      return r;
    }
    var n = {},
      t;
    return (
      (n.Extend = function (n, t) {
        function r() {
          this.constructor = n;
        }
        var u = {}.hasOwnProperty;
        for (var i in t) u.call(t, i) && (n[i] = t[i]);
        return (
          (r.prototype = t.prototype),
          (n.prototype = new r()),
          (n.__super__ = t.prototype),
          n
        );
      }),
      (n.Decorate = function (n, t) {
        function r() {
          var r = Array.prototype.unshift,
            u = t.prototype.constructor.length,
            i = n.prototype.constructor;
          u > 0 &&
            (r.call(arguments, n.prototype.constructor),
            (i = t.prototype.constructor));
          i.apply(this, arguments);
        }
        function l() {
          this.constructor = r;
        }
        var s = i(t),
          h = i(n),
          u,
          e,
          c,
          f,
          o;
        for (
          t.displayName = n.displayName, r.prototype = new l(), u = 0;
          u < h.length;
          u++
        )
          (e = h[u]), (r.prototype[e] = n.prototype[e]);
        for (
          c = function (n) {
            var i = function () {},
              u;
            return (
              (n in r.prototype) && (i = r.prototype[n]),
              (u = t.prototype[n]),
              function () {
                var n = Array.prototype.unshift;
                return n.call(arguments, i), u.apply(this, arguments);
              }
            );
          },
            f = 0;
          f < s.length;
          f++
        )
          (o = s[f]), (r.prototype[o] = c(o));
        return r;
      }),
      (t = function () {
        this.listeners = {};
      }),
      (t.prototype.on = function (n, t) {
        this.listeners = this.listeners || {};
        n in this.listeners
          ? this.listeners[n].push(t)
          : (this.listeners[n] = [t]);
      }),
      (t.prototype.trigger = function (n) {
        var t = Array.prototype.slice;
        this.listeners = this.listeners || {};
        n in this.listeners &&
          this.invoke(this.listeners[n], t.call(arguments, 1));
        "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
      }),
      (t.prototype.invoke = function (n, t) {
        for (var i = 0, r = n.length; r > i; i++) n[i].apply(this, t);
      }),
      (n.Observable = t),
      (n.generateChars = function (n) {
        for (var r, t = "", i = 0; n > i; i++)
          (r = Math.floor(36 * Math.random())), (t += r.toString(36));
        return t;
      }),
      (n.bind = function (n, t) {
        return function () {
          n.apply(t, arguments);
        };
      }),
      (n._convertData = function (n) {
        var f, r, i, u, t;
        for (f in n)
          if (((r = f.split("-")), (i = n), 1 !== r.length)) {
            for (u = 0; u < r.length; u++)
              (t = r[u]),
                (t = t.substring(0, 1).toLowerCase() + t.substring(1)),
                t in i || (i[t] = {}),
                u == r.length - 1 && (i[t] = n[f]),
                (i = i[t]);
            delete n[f];
          }
        return n;
      }),
      (n.hasScroll = function (n, t) {
        var r = $(t),
          u = t.style.overflowX,
          i = t.style.overflowY;
        return u !== i || ("hidden" !== i && "visible" !== i)
          ? "scroll" === u || "scroll" === i
            ? !0
            : r.innerHeight() < t.scrollHeight || r.innerWidth() < t.scrollWidth
          : !1;
      }),
      n
    );
  });
  n("select2/results", ["jquery", "./utils"], function (n, t) {
    function i(n, t, r) {
      this.$element = n;
      this.data = r;
      this.options = t;
      i.__super__.constructor.call(this);
    }
    return (
      t.Extend(i, t.Observable),
      (i.prototype.render = function () {
        var t = n('<ul class="select2-results__options" role="tree"></ul>');
        return (
          this.options.get("multiple") &&
            t.attr("aria-multiselectable", "true"),
          (this.$results = t),
          t
        );
      }),
      (i.prototype.clear = function () {
        this.$results.empty();
      }),
      (i.prototype.displayMessage = function (t) {
        this.clear();
        this.hideLoading();
        var i = n('<li role="treeitem" class="select2-results__option"></li>'),
          r = this.options.get("translations").get(t.message);
        i.text(r(t.args));
        this.$results.append(i);
      }),
      (i.prototype.append = function (n) {
        var i, t, r, u;
        if (
          (this.hideLoading(),
          (i = []),
          null == n.results || 0 === n.results.length)
        )
          return void (
            0 === this.$results.children().length &&
            this.trigger("results:message", { message: "noResults" })
          );
        for (n.results = this.sort(n.results), t = 0; t < n.results.length; t++)
          (r = n.results[t]), (u = this.option(r)), i.push(u);
        this.$results.append(i);
      }),
      (i.prototype.position = function (n, t) {
        var i = t.find(".select2-results");
        i.append(n);
      }),
      (i.prototype.sort = function (n) {
        var t = this.options.get("sorter");
        return t(n);
      }),
      (i.prototype.setClasses = function () {
        var t = this;
        this.data.current(function (i) {
          var f = n.map(i, function (n) {
              return n.id.toString();
            }),
            r = t.$results.find(".select2-results__option[aria-selected]"),
            u;
          r.each(function () {
            var t = n(this),
              i = n.data(this, "data");
            null != i.id && f.indexOf(i.id.toString()) > -1
              ? t.attr("aria-selected", "true")
              : t.attr("aria-selected", "false");
          });
          u = r.filter("[aria-selected=true]");
          u.length > 0
            ? u.first().trigger("mouseenter")
            : r.first().trigger("mouseenter");
        });
      }),
      (i.prototype.showLoading = function (n) {
        this.hideLoading();
        var i = this.options.get("translations").get("searching"),
          r = { disabled: !0, loading: !0, text: i(n) },
          t = this.option(r);
        t.className += " loading-results";
        this.$results.prepend(t);
      }),
      (i.prototype.hideLoading = function () {
        this.$results.find(".loading-results").remove();
      }),
      (i.prototype.option = function (t) {
        var r = document.createElement("li"),
          i,
          e,
          c,
          o,
          u,
          s,
          f,
          l,
          a,
          h;
        r.className = "select2-results__option";
        i = { role: "treeitem", "aria-selected": "false" };
        t.disabled &&
          (delete i["aria-selected"], (i["aria-disabled"] = "true"));
        null == t.id && delete i["aria-selected"];
        null != t._resultId && (r.id = t._resultId);
        t.children &&
          ((i.role = "group"),
          (i["aria-label"] = t.text),
          delete i["aria-selected"]);
        for (e in i) (c = i[e]), r.setAttribute(e, c);
        if (t.children) {
          for (
            o = n(r),
              u = document.createElement("strong"),
              u.className = "select2-results__group",
              n(u),
              this.template(t, u),
              s = [],
              f = 0;
            f < t.children.length;
            f++
          )
            (l = t.children[f]), (a = this.option(l)), s.push(a);
          h = n("<ul></ul>", {
            class: "select2-results__options select2-results__options--nested",
          });
          h.append(s);
          o.append(u);
          o.append(h);
        } else this.template(t, r);
        return n.data(r, "data", t), r;
      }),
      (i.prototype.bind = function (t) {
        var i = this,
          r = t.id + "-results";
        this.$results.attr("id", r);
        t.on("results:all", function (n) {
          i.clear();
          i.append(n.data);
          t.isOpen() && i.setClasses();
        });
        t.on("results:append", function (n) {
          i.append(n.data);
          t.isOpen() && i.setClasses();
        });
        t.on("query", function (n) {
          i.showLoading(n);
        });
        t.on("select", function () {
          t.isOpen() && i.setClasses();
        });
        t.on("unselect", function () {
          t.isOpen() && i.setClasses();
        });
        t.on("open", function () {
          i.$results.attr("aria-expanded", "true");
          i.$results.attr("aria-hidden", "false");
          i.setClasses();
          i.ensureHighlightVisible();
        });
        t.on("close", function () {
          i.$results.attr("aria-expanded", "false");
          i.$results.attr("aria-hidden", "true");
          i.$results.removeAttr("aria-activedescendant");
        });
        t.on("results:select", function () {
          var n = i.getHighlightedResults(),
            t;
          0 !== n.length &&
            ((t = n.data("data")),
            "true" == n.attr("aria-selected")
              ? i.options.get("multiple")
                ? i.trigger("unselect", { data: t })
                : i.trigger("close")
              : i.trigger("select", { data: t }));
        });
        t.on("results:previous", function () {
          var r = i.getHighlightedResults(),
            u = i.$results.find("[aria-selected]"),
            f = u.index(r),
            n,
            t;
          if (0 !== f) {
            n = f - 1;
            0 === r.length && (n = 0);
            t = u.eq(n);
            t.trigger("mouseenter");
            var e = i.$results.offset().top,
              o = t.offset().top,
              s = i.$results.scrollTop() + (o - e);
            0 === n
              ? i.$results.scrollTop(0)
              : 0 > o - e && i.$results.scrollTop(s);
          }
        });
        t.on("results:next", function () {
          var e = i.getHighlightedResults(),
            t = i.$results.find("[aria-selected]"),
            o = t.index(e),
            r = o + 1,
            n;
          if (!(r >= t.length)) {
            n = t.eq(r);
            n.trigger("mouseenter");
            var u = i.$results.offset().top + i.$results.outerHeight(!1),
              f = n.offset().top + n.outerHeight(!1),
              s = i.$results.scrollTop() + f - u;
            0 === r
              ? i.$results.scrollTop(0)
              : f > u && i.$results.scrollTop(s);
          }
        });
        t.on("results:focus", function (n) {
          n.element.addClass("select2-results__option--highlighted");
        });
        t.on("results:message", function (n) {
          i.displayMessage(n);
        });
        n.fn.mousewheel &&
          this.$results.on("mousewheel", function (n) {
            var t = i.$results.scrollTop(),
              r =
                i.$results.get(0).scrollHeight -
                i.$results.scrollTop() +
                n.deltaY,
              u = n.deltaY > 0 && t - n.deltaY <= 0,
              f = n.deltaY < 0 && r <= i.$results.height();
            u
              ? (i.$results.scrollTop(0),
                n.preventDefault(),
                n.stopPropagation())
              : f &&
                (i.$results.scrollTop(
                  i.$results.get(0).scrollHeight - i.$results.height()
                ),
                n.preventDefault(),
                n.stopPropagation());
          });
        this.$results.on(
          "mouseup",
          ".select2-results__option[aria-selected]",
          function (t) {
            var r = n(this),
              u = r.data("data");
            return "true" === r.attr("aria-selected")
              ? void (i.options.get("multiple")
                  ? i.trigger("unselect", { originalEvent: t, data: u })
                  : i.trigger("close"))
              : void i.trigger("select", { originalEvent: t, data: u });
          }
        );
        this.$results.on(
          "mouseenter",
          ".select2-results__option[aria-selected]",
          function () {
            var t = n(this).data("data");
            i.getHighlightedResults().removeClass(
              "select2-results__option--highlighted"
            );
            i.trigger("results:focus", { data: t, element: n(this) });
          }
        );
      }),
      (i.prototype.getHighlightedResults = function () {
        return this.$results.find(".select2-results__option--highlighted");
      }),
      (i.prototype.destroy = function () {
        this.$results.remove();
      }),
      (i.prototype.ensureHighlightVisible = function () {
        var n = this.getHighlightedResults();
        if (0 !== n.length) {
          var f = this.$results.find("[aria-selected]"),
            e = f.index(n),
            t = this.$results.offset().top,
            i = n.offset().top,
            r = this.$results.scrollTop() + (i - t),
            u = i - t;
          r -= 2 * n.outerHeight(!1);
          2 >= e
            ? this.$results.scrollTop(0)
            : (u > this.$results.outerHeight() || 0 > u) &&
              this.$results.scrollTop(r);
        }
      }),
      (i.prototype.template = function (n, t) {
        var r = this.options.get("templateResult"),
          i = r(n);
        null == i ? (t.style.display = "none") : (t.innerHTML = i);
      }),
      i
    );
  });
  n("select2/keys", [], function () {
    return {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      DELETE: 46,
      isArrow: function (n) {
        switch ((n = n.which ? n.which : n)) {
          case KEY.LEFT:
          case KEY.RIGHT:
          case KEY.UP:
          case KEY.DOWN:
            return !0;
        }
        return !1;
      },
    };
  });
  n(
    "select2/selection/base",
    ["jquery", "../utils", "../keys"],
    function (n, t, i) {
      function r(n, t) {
        this.$element = n;
        this.options = t;
        r.__super__.constructor.call(this);
      }
      return (
        t.Extend(r, t.Observable),
        (r.prototype.render = function () {
          var t = n(
            '<span class="select2-selection" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></span>'
          );
          return (
            t.attr("title", this.$element.attr("title")),
            (this.$selection = t),
            t
          );
        }),
        (r.prototype.bind = function (n) {
          var t = this,
            r = (n.id + "-container", n.id + "-results");
          this.container = n;
          this.$selection.attr("aria-owns", r);
          this.$selection.on("keydown", function (n) {
            t.trigger("keypress", n);
            n.which === i.SPACE && n.preventDefault();
          });
          n.on("results:focus", function (n) {
            t.$selection.attr("aria-activedescendant", n.data._resultId);
          });
          n.on("selection:update", function (n) {
            t.update(n.data);
          });
          n.on("open", function () {
            t.$selection.attr("aria-expanded", "true");
            t._attachCloseHandler(n);
          });
          n.on("close", function () {
            t.$selection.attr("aria-expanded", "false");
            t.$selection.removeAttr("aria-activedescendant");
            t.$selection.focus();
            t._detachCloseHandler(n);
          });
          n.on("enable", function () {
            t.$selection.attr("tabindex", "0");
          });
          n.on("disable", function () {
            t.$selection.attr("tabindex", "-1");
          });
        }),
        (r.prototype._attachCloseHandler = function (t) {
          n(document.body).on("mousedown.select2." + t.id, function (t) {
            var i = n(t.target),
              r = i.closest(".select2"),
              u = n(".select2.select2-container--open");
            u.each(function () {
              var i = n(this),
                t;
              this != r[0] && ((t = i.data("element")), t.select2("close"));
            });
          });
        }),
        (r.prototype._detachCloseHandler = function (t) {
          n(document.body).off("mousedown.select2." + t.id);
        }),
        (r.prototype.position = function (n, t) {
          var i = t.find(".selection");
          i.append(n);
        }),
        (r.prototype.destroy = function () {
          this._detachCloseHandler(this.container);
        }),
        (r.prototype.update = function () {
          throw new Error(
            "The `update` method must be defined in child classes."
          );
        }),
        r
      );
    }
  );
  n(
    "select2/selection/single",
    ["jquery", "./base", "../utils", "../keys"],
    function (n, t, i) {
      function r() {
        r.__super__.constructor.apply(this, arguments);
      }
      return (
        i.Extend(r, t),
        (r.prototype.render = function () {
          var n = r.__super__.render.call(this);
          return (
            n.addClass("select2-selection--single"),
            n.html(
              '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
            ),
            n
          );
        }),
        (r.prototype.bind = function (n) {
          var i = this,
            t;
          r.__super__.bind.apply(this, arguments);
          t = n.id + "-container";
          this.$selection.find(".select2-selection__rendered").attr("id", t);
          this.$selection.attr("aria-labelledby", t);
          this.$selection.on("mousedown", function (n) {
            1 === n.which && i.trigger("toggle", { originalEvent: n });
          });
          this.$selection.on("focus", function () {});
          this.$selection.on("blur", function () {});
          n.on("selection:update", function (n) {
            i.update(n.data);
          });
        }),
        (r.prototype.clear = function () {
          this.$selection.find(".select2-selection__rendered").empty();
        }),
        (r.prototype.display = function (n) {
          var t = this.options.get("templateSelection");
          return t(n);
        }),
        (r.prototype.selectionContainer = function () {
          return n("<span></span>");
        }),
        (r.prototype.update = function (n) {
          if (0 === n.length) return void this.clear();
          var t = n[0],
            i = this.display(t);
          this.$selection.find(".select2-selection__rendered").html(i);
        }),
        r
      );
    }
  );
  n(
    "select2/selection/multiple",
    ["jquery", "./base", "../utils"],
    function (n, t, i) {
      function r() {
        r.__super__.constructor.apply(this, arguments);
      }
      return (
        i.Extend(r, t),
        (r.prototype.render = function () {
          var n = r.__super__.render.call(this);
          return (
            n.addClass("select2-selection--multiple"),
            n.html('<ul class="select2-selection__rendered"></ul>'),
            n
          );
        }),
        (r.prototype.bind = function () {
          var t = this;
          r.__super__.bind.apply(this, arguments);
          this.$selection.on("click", function (n) {
            t.trigger("toggle", { originalEvent: n });
          });
          this.$selection.on(
            "click",
            ".select2-selection__choice__remove",
            function (i) {
              var r = n(this),
                u = r.parent(),
                f = u.data("data");
              t.trigger("unselect", { originalEvent: i, data: f });
            }
          );
        }),
        (r.prototype.clear = function () {
          this.$selection.find(".select2-selection__rendered").empty();
        }),
        (r.prototype.display = function (n) {
          var t = this.options.get("templateSelection");
          return t(n);
        }),
        (r.prototype.selectionContainer = function () {
          return n(
            '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
          );
        }),
        (r.prototype.update = function (n) {
          var i, t;
          if ((this.clear(), 0 !== n.length)) {
            for (i = [], t = 0; t < n.length; t++) {
              var u = n[t],
                f = this.display(u),
                r = this.selectionContainer();
              r.append(f);
              r.data("data", u);
              i.push(r);
            }
            this.$selection.find(".select2-selection__rendered").append(i);
          }
        }),
        r
      );
    }
  );
  n("select2/selection/placeholder", ["../utils"], function () {
    function n(n, t, i) {
      this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
      n.call(this, t, i);
    }
    return (
      (n.prototype.normalizePlaceholder = function (n, t) {
        return "string" == typeof t && (t = { id: "", text: t }), t;
      }),
      (n.prototype.createPlaceholder = function (n, t) {
        var i = this.selectionContainer();
        return (
          i.html(this.display(t)),
          i
            .addClass("select2-selection__placeholder")
            .removeClass("select2-selection__choice"),
          i
        );
      }),
      (n.prototype.update = function (n, t) {
        var r = 1 == t.length && t[0].id != this.placeholder.id,
          u = t.length > 1,
          i;
        if (u || r) return n.call(this, t);
        this.clear();
        i = this.createPlaceholder(this.placeholder);
        this.$selection.find(".select2-selection__rendered").append(i);
      }),
      n
    );
  });
  n("select2/selection/allowClear", ["jquery"], function (n) {
    function t() {}
    return (
      (t.prototype.bind = function (t, i, r) {
        var u = this;
        t.call(this, i, r);
        this.$selection.on(
          "mousedown",
          ".select2-selection__clear",
          function (t) {
            var r, i, f;
            if (!u.options.get("disabled")) {
              for (
                t.stopPropagation(), r = n(this).data("data"), i = 0;
                i < r.length;
                i++
              )
                if (
                  ((f = { data: r[i] }), u.trigger("unselect", f), f.prevented)
                )
                  return;
              u.$element.val(u.placeholder.id).trigger("change");
              u.trigger("toggle");
            }
          }
        );
      }),
      (t.prototype.update = function (t, i) {
        if (
          (t.call(this, i),
          !(
            this.$selection.find(".select2-selection__placeholder").length >
              0 || 0 === i.length
          ))
        ) {
          var r = n('<span class="select2-selection__clear">&times;</span>');
          r.data("data", i);
          this.$selection.find(".select2-selection__rendered").append(r);
        }
      }),
      t
    );
  });
  n(
    "select2/selection/search",
    ["jquery", "../utils", "../keys"],
    function (n, t, i) {
      function r(n, t, i) {
        n.call(this, t, i);
      }
      return (
        (r.prototype.render = function (t) {
          var i = n(
            '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" role="textbox" /></li>'
          );
          return (
            (this.$searchContainer = i),
            (this.$search = i.find("input")),
            t.call(this)
          );
        }),
        (r.prototype.bind = function (n, t, r) {
          var u = this;
          n.call(this, t, r);
          t.on("open", function () {
            u.$search.attr("tabindex", 0);
            u.$search.focus();
          });
          t.on("close", function () {
            u.$search.attr("tabindex", -1);
            u.$search.val("");
          });
          t.on("enable", function () {
            u.$search.prop("disabled", !1);
          });
          t.on("disable", function () {
            u.$search.prop("disabled", !0);
          });
          this.$selection.on(
            "keydown",
            ".select2-search--inline",
            function (n) {
              var r, t, f;
              n.stopPropagation();
              u.trigger("keypress", n);
              u._keyUpPrevented = n.isDefaultPrevented();
              r = n.which;
              r === i.BACKSPACE &&
                "" === u.$search.val() &&
                ((t = u.$searchContainer.prev(".select2-selection__choice")),
                t.length > 0 &&
                  ((f = t.data("data")), u.searchRemoveChoice(f)));
            }
          );
          this.$selection.on("keyup", ".select2-search--inline", function (n) {
            u.handleSearch(n);
          });
        }),
        (r.prototype.createPlaceholder = function (n, t) {
          this.$search.attr("placeholder", t.text);
        }),
        (r.prototype.update = function (n, t) {
          this.$search.attr("placeholder", "");
          n.call(this, t);
          this.$selection
            .find(".select2-selection__rendered")
            .append(this.$searchContainer);
          this.resizeSearch();
        }),
        (r.prototype.handleSearch = function () {
          if ((this.resizeSearch(), !this._keyUpPrevented)) {
            var n = this.$search.val();
            this.trigger("query", { term: n });
          }
          this._keyUpPrevented = !1;
        }),
        (r.prototype.searchRemoveChoice = function (n, t) {
          this.trigger("unselect", { data: t });
          this.trigger("open");
          this.$search.val(t.text + " ");
        }),
        (r.prototype.resizeSearch = function () {
          var n, t;
          this.$search.css("width", "25px");
          n = "";
          "" !== this.$search.attr("placeholder")
            ? (n = this.$selection
                .find(".select2-selection__rendered")
                .innerWidth())
            : ((t = this.$search.val().length + 1), (n = 0.75 * t + "em"));
          this.$search.css("width", n);
        }),
        r
      );
    }
  );
  n("select2/selection/eventRelay", ["jquery"], function (n) {
    function t() {}
    return (
      (t.prototype.bind = function (t, i, r) {
        var u = this,
          f = [
            "open",
            "opening",
            "close",
            "closing",
            "select",
            "selecting",
            "unselect",
            "unselecting",
          ],
          e = ["opening", "closing", "selecting", "unselecting"];
        t.call(this, i, r);
        i.on("*", function (t, i) {
          if (-1 !== f.indexOf(t)) {
            i = i || {};
            var r = n.Event("select2:" + t, { params: i });
            u.$element.trigger(r);
            -1 !== e.indexOf(t) && (i.prevented = r.isDefaultPrevented());
          }
        });
      }),
      t
    );
  });
  n("select2/translation", ["jquery"], function (n) {
    function i(n) {
      this.dict = n || {};
    }
    return (
      (i.prototype.all = function () {
        return this.dict;
      }),
      (i.prototype.get = function (n) {
        return this.dict[n];
      }),
      (i.prototype.extend = function (t) {
        this.dict = n.extend({}, t.all(), this.dict);
      }),
      (i._cache = {}),
      (i.loadPath = function (n) {
        if (!(n in i._cache)) {
          var r = t(n);
          i._cache[n] = r;
        }
        return new i(i._cache[n]);
      }),
      i
    );
  });
  n("select2/diacritics", [], function () {
    return {
      "Ⓐ": "A",
      Ａ: "A",
      À: "A",
      Á: "A",
      Â: "A",
      Ầ: "A",
      Ấ: "A",
      Ẫ: "A",
      Ẩ: "A",
      Ã: "A",
      Ā: "A",
      Ă: "A",
      Ằ: "A",
      Ắ: "A",
      Ẵ: "A",
      Ẳ: "A",
      Ȧ: "A",
      Ǡ: "A",
      Ä: "A",
      Ǟ: "A",
      Ả: "A",
      Å: "A",
      Ǻ: "A",
      Ǎ: "A",
      Ȁ: "A",
      Ȃ: "A",
      Ạ: "A",
      Ậ: "A",
      Ặ: "A",
      Ḁ: "A",
      Ą: "A",
      Ⱥ: "A",
      Ɐ: "A",
      Ꜳ: "AA",
      Æ: "AE",
      Ǽ: "AE",
      Ǣ: "AE",
      Ꜵ: "AO",
      Ꜷ: "AU",
      Ꜹ: "AV",
      Ꜻ: "AV",
      Ꜽ: "AY",
      "Ⓑ": "B",
      Ｂ: "B",
      Ḃ: "B",
      Ḅ: "B",
      Ḇ: "B",
      Ƀ: "B",
      Ƃ: "B",
      Ɓ: "B",
      "Ⓒ": "C",
      Ｃ: "C",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      Ç: "C",
      Ḉ: "C",
      Ƈ: "C",
      Ȼ: "C",
      Ꜿ: "C",
      "Ⓓ": "D",
      Ｄ: "D",
      Ḋ: "D",
      Ď: "D",
      Ḍ: "D",
      Ḑ: "D",
      Ḓ: "D",
      Ḏ: "D",
      Đ: "D",
      Ƌ: "D",
      Ɗ: "D",
      Ɖ: "D",
      Ꝺ: "D",
      Ǳ: "DZ",
      Ǆ: "DZ",
      ǲ: "Dz",
      ǅ: "Dz",
      "Ⓔ": "E",
      Ｅ: "E",
      È: "E",
      É: "E",
      Ê: "E",
      Ề: "E",
      Ế: "E",
      Ễ: "E",
      Ể: "E",
      Ẽ: "E",
      Ē: "E",
      Ḕ: "E",
      Ḗ: "E",
      Ĕ: "E",
      Ė: "E",
      Ë: "E",
      Ẻ: "E",
      Ě: "E",
      Ȅ: "E",
      Ȇ: "E",
      Ẹ: "E",
      Ệ: "E",
      Ȩ: "E",
      Ḝ: "E",
      Ę: "E",
      Ḙ: "E",
      Ḛ: "E",
      Ɛ: "E",
      Ǝ: "E",
      "Ⓕ": "F",
      Ｆ: "F",
      Ḟ: "F",
      Ƒ: "F",
      Ꝼ: "F",
      "Ⓖ": "G",
      Ｇ: "G",
      Ǵ: "G",
      Ĝ: "G",
      Ḡ: "G",
      Ğ: "G",
      Ġ: "G",
      Ǧ: "G",
      Ģ: "G",
      Ǥ: "G",
      Ɠ: "G",
      Ꞡ: "G",
      Ᵹ: "G",
      Ꝿ: "G",
      "Ⓗ": "H",
      Ｈ: "H",
      Ĥ: "H",
      Ḣ: "H",
      Ḧ: "H",
      Ȟ: "H",
      Ḥ: "H",
      Ḩ: "H",
      Ḫ: "H",
      Ħ: "H",
      Ⱨ: "H",
      Ⱶ: "H",
      Ɥ: "H",
      "Ⓘ": "I",
      Ｉ: "I",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      İ: "I",
      Ï: "I",
      Ḯ: "I",
      Ỉ: "I",
      Ǐ: "I",
      Ȉ: "I",
      Ȋ: "I",
      Ị: "I",
      Į: "I",
      Ḭ: "I",
      Ɨ: "I",
      "Ⓙ": "J",
      Ｊ: "J",
      Ĵ: "J",
      Ɉ: "J",
      "Ⓚ": "K",
      Ｋ: "K",
      Ḱ: "K",
      Ǩ: "K",
      Ḳ: "K",
      Ķ: "K",
      Ḵ: "K",
      Ƙ: "K",
      Ⱪ: "K",
      Ꝁ: "K",
      Ꝃ: "K",
      Ꝅ: "K",
      Ꞣ: "K",
      "Ⓛ": "L",
      Ｌ: "L",
      Ŀ: "L",
      Ĺ: "L",
      Ľ: "L",
      Ḷ: "L",
      Ḹ: "L",
      Ļ: "L",
      Ḽ: "L",
      Ḻ: "L",
      Ł: "L",
      Ƚ: "L",
      Ɫ: "L",
      Ⱡ: "L",
      Ꝉ: "L",
      Ꝇ: "L",
      Ꞁ: "L",
      Ǉ: "LJ",
      ǈ: "Lj",
      "Ⓜ": "M",
      Ｍ: "M",
      Ḿ: "M",
      Ṁ: "M",
      Ṃ: "M",
      Ɱ: "M",
      Ɯ: "M",
      "Ⓝ": "N",
      Ｎ: "N",
      Ǹ: "N",
      Ń: "N",
      Ñ: "N",
      Ṅ: "N",
      Ň: "N",
      Ṇ: "N",
      Ņ: "N",
      Ṋ: "N",
      Ṉ: "N",
      Ƞ: "N",
      Ɲ: "N",
      Ꞑ: "N",
      Ꞥ: "N",
      Ǌ: "NJ",
      ǋ: "Nj",
      "Ⓞ": "O",
      Ｏ: "O",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Ồ: "O",
      Ố: "O",
      Ỗ: "O",
      Ổ: "O",
      Õ: "O",
      Ṍ: "O",
      Ȭ: "O",
      Ṏ: "O",
      Ō: "O",
      Ṑ: "O",
      Ṓ: "O",
      Ŏ: "O",
      Ȯ: "O",
      Ȱ: "O",
      Ö: "O",
      Ȫ: "O",
      Ỏ: "O",
      Ő: "O",
      Ǒ: "O",
      Ȍ: "O",
      Ȏ: "O",
      Ơ: "O",
      Ờ: "O",
      Ớ: "O",
      Ỡ: "O",
      Ở: "O",
      Ợ: "O",
      Ọ: "O",
      Ộ: "O",
      Ǫ: "O",
      Ǭ: "O",
      Ø: "O",
      Ǿ: "O",
      Ɔ: "O",
      Ɵ: "O",
      Ꝋ: "O",
      Ꝍ: "O",
      Ƣ: "OI",
      Ꝏ: "OO",
      Ȣ: "OU",
      "Ⓟ": "P",
      Ｐ: "P",
      Ṕ: "P",
      Ṗ: "P",
      Ƥ: "P",
      Ᵽ: "P",
      Ꝑ: "P",
      Ꝓ: "P",
      Ꝕ: "P",
      "Ⓠ": "Q",
      Ｑ: "Q",
      Ꝗ: "Q",
      Ꝙ: "Q",
      Ɋ: "Q",
      "Ⓡ": "R",
      Ｒ: "R",
      Ŕ: "R",
      Ṙ: "R",
      Ř: "R",
      Ȑ: "R",
      Ȓ: "R",
      Ṛ: "R",
      Ṝ: "R",
      Ŗ: "R",
      Ṟ: "R",
      Ɍ: "R",
      Ɽ: "R",
      Ꝛ: "R",
      Ꞧ: "R",
      Ꞃ: "R",
      "Ⓢ": "S",
      Ｓ: "S",
      ẞ: "S",
      Ś: "S",
      Ṥ: "S",
      Ŝ: "S",
      Ṡ: "S",
      Š: "S",
      Ṧ: "S",
      Ṣ: "S",
      Ṩ: "S",
      Ș: "S",
      Ş: "S",
      Ȿ: "S",
      Ꞩ: "S",
      Ꞅ: "S",
      "Ⓣ": "T",
      Ｔ: "T",
      Ṫ: "T",
      Ť: "T",
      Ṭ: "T",
      Ț: "T",
      Ţ: "T",
      Ṱ: "T",
      Ṯ: "T",
      Ŧ: "T",
      Ƭ: "T",
      Ʈ: "T",
      Ⱦ: "T",
      Ꞇ: "T",
      Ꜩ: "TZ",
      "Ⓤ": "U",
      Ｕ: "U",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ũ: "U",
      Ṹ: "U",
      Ū: "U",
      Ṻ: "U",
      Ŭ: "U",
      Ü: "U",
      Ǜ: "U",
      Ǘ: "U",
      Ǖ: "U",
      Ǚ: "U",
      Ủ: "U",
      Ů: "U",
      Ű: "U",
      Ǔ: "U",
      Ȕ: "U",
      Ȗ: "U",
      Ư: "U",
      Ừ: "U",
      Ứ: "U",
      Ữ: "U",
      Ử: "U",
      Ự: "U",
      Ụ: "U",
      Ṳ: "U",
      Ų: "U",
      Ṷ: "U",
      Ṵ: "U",
      Ʉ: "U",
      "Ⓥ": "V",
      Ｖ: "V",
      Ṽ: "V",
      Ṿ: "V",
      Ʋ: "V",
      Ꝟ: "V",
      Ʌ: "V",
      Ꝡ: "VY",
      "Ⓦ": "W",
      Ｗ: "W",
      Ẁ: "W",
      Ẃ: "W",
      Ŵ: "W",
      Ẇ: "W",
      Ẅ: "W",
      Ẉ: "W",
      Ⱳ: "W",
      "Ⓧ": "X",
      Ｘ: "X",
      Ẋ: "X",
      Ẍ: "X",
      "Ⓨ": "Y",
      Ｙ: "Y",
      Ỳ: "Y",
      Ý: "Y",
      Ŷ: "Y",
      Ỹ: "Y",
      Ȳ: "Y",
      Ẏ: "Y",
      Ÿ: "Y",
      Ỷ: "Y",
      Ỵ: "Y",
      Ƴ: "Y",
      Ɏ: "Y",
      Ỿ: "Y",
      "Ⓩ": "Z",
      Ｚ: "Z",
      Ź: "Z",
      Ẑ: "Z",
      Ż: "Z",
      Ž: "Z",
      Ẓ: "Z",
      Ẕ: "Z",
      Ƶ: "Z",
      Ȥ: "Z",
      Ɀ: "Z",
      Ⱬ: "Z",
      Ꝣ: "Z",
      "ⓐ": "a",
      ａ: "a",
      ẚ: "a",
      à: "a",
      á: "a",
      â: "a",
      ầ: "a",
      ấ: "a",
      ẫ: "a",
      ẩ: "a",
      ã: "a",
      ā: "a",
      ă: "a",
      ằ: "a",
      ắ: "a",
      ẵ: "a",
      ẳ: "a",
      ȧ: "a",
      ǡ: "a",
      ä: "a",
      ǟ: "a",
      ả: "a",
      å: "a",
      ǻ: "a",
      ǎ: "a",
      ȁ: "a",
      ȃ: "a",
      ạ: "a",
      ậ: "a",
      ặ: "a",
      ḁ: "a",
      ą: "a",
      ⱥ: "a",
      ɐ: "a",
      ꜳ: "aa",
      æ: "ae",
      ǽ: "ae",
      ǣ: "ae",
      ꜵ: "ao",
      ꜷ: "au",
      ꜹ: "av",
      ꜻ: "av",
      ꜽ: "ay",
      "ⓑ": "b",
      ｂ: "b",
      ḃ: "b",
      ḅ: "b",
      ḇ: "b",
      ƀ: "b",
      ƃ: "b",
      ɓ: "b",
      "ⓒ": "c",
      ｃ: "c",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      ç: "c",
      ḉ: "c",
      ƈ: "c",
      ȼ: "c",
      ꜿ: "c",
      ↄ: "c",
      "ⓓ": "d",
      ｄ: "d",
      ḋ: "d",
      ď: "d",
      ḍ: "d",
      ḑ: "d",
      ḓ: "d",
      ḏ: "d",
      đ: "d",
      ƌ: "d",
      ɖ: "d",
      ɗ: "d",
      ꝺ: "d",
      ǳ: "dz",
      ǆ: "dz",
      "ⓔ": "e",
      ｅ: "e",
      è: "e",
      é: "e",
      ê: "e",
      ề: "e",
      ế: "e",
      ễ: "e",
      ể: "e",
      ẽ: "e",
      ē: "e",
      ḕ: "e",
      ḗ: "e",
      ĕ: "e",
      ė: "e",
      ë: "e",
      ẻ: "e",
      ě: "e",
      ȅ: "e",
      ȇ: "e",
      ẹ: "e",
      ệ: "e",
      ȩ: "e",
      ḝ: "e",
      ę: "e",
      ḙ: "e",
      ḛ: "e",
      ɇ: "e",
      ɛ: "e",
      ǝ: "e",
      "ⓕ": "f",
      ｆ: "f",
      ḟ: "f",
      ƒ: "f",
      ꝼ: "f",
      "ⓖ": "g",
      ｇ: "g",
      ǵ: "g",
      ĝ: "g",
      ḡ: "g",
      ğ: "g",
      ġ: "g",
      ǧ: "g",
      ģ: "g",
      ǥ: "g",
      ɠ: "g",
      ꞡ: "g",
      ᵹ: "g",
      ꝿ: "g",
      "ⓗ": "h",
      ｈ: "h",
      ĥ: "h",
      ḣ: "h",
      ḧ: "h",
      ȟ: "h",
      ḥ: "h",
      ḩ: "h",
      ḫ: "h",
      ẖ: "h",
      ħ: "h",
      ⱨ: "h",
      ⱶ: "h",
      ɥ: "h",
      ƕ: "hv",
      "ⓘ": "i",
      ｉ: "i",
      ì: "i",
      í: "i",
      î: "i",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      ï: "i",
      ḯ: "i",
      ỉ: "i",
      ǐ: "i",
      ȉ: "i",
      ȋ: "i",
      ị: "i",
      į: "i",
      ḭ: "i",
      ɨ: "i",
      ı: "i",
      "ⓙ": "j",
      ｊ: "j",
      ĵ: "j",
      ǰ: "j",
      ɉ: "j",
      "ⓚ": "k",
      ｋ: "k",
      ḱ: "k",
      ǩ: "k",
      ḳ: "k",
      ķ: "k",
      ḵ: "k",
      ƙ: "k",
      ⱪ: "k",
      ꝁ: "k",
      ꝃ: "k",
      ꝅ: "k",
      ꞣ: "k",
      "ⓛ": "l",
      ｌ: "l",
      ŀ: "l",
      ĺ: "l",
      ľ: "l",
      ḷ: "l",
      ḹ: "l",
      ļ: "l",
      ḽ: "l",
      ḻ: "l",
      ſ: "l",
      ł: "l",
      ƚ: "l",
      ɫ: "l",
      ⱡ: "l",
      ꝉ: "l",
      ꞁ: "l",
      ꝇ: "l",
      ǉ: "lj",
      "ⓜ": "m",
      ｍ: "m",
      ḿ: "m",
      ṁ: "m",
      ṃ: "m",
      ɱ: "m",
      ɯ: "m",
      "ⓝ": "n",
      ｎ: "n",
      ǹ: "n",
      ń: "n",
      ñ: "n",
      ṅ: "n",
      ň: "n",
      ṇ: "n",
      ņ: "n",
      ṋ: "n",
      ṉ: "n",
      ƞ: "n",
      ɲ: "n",
      ŉ: "n",
      ꞑ: "n",
      ꞥ: "n",
      ǌ: "nj",
      "ⓞ": "o",
      ｏ: "o",
      ò: "o",
      ó: "o",
      ô: "o",
      ồ: "o",
      ố: "o",
      ỗ: "o",
      ổ: "o",
      õ: "o",
      ṍ: "o",
      ȭ: "o",
      ṏ: "o",
      ō: "o",
      ṑ: "o",
      ṓ: "o",
      ŏ: "o",
      ȯ: "o",
      ȱ: "o",
      ö: "o",
      ȫ: "o",
      ỏ: "o",
      ő: "o",
      ǒ: "o",
      ȍ: "o",
      ȏ: "o",
      ơ: "o",
      ờ: "o",
      ớ: "o",
      ỡ: "o",
      ở: "o",
      ợ: "o",
      ọ: "o",
      ộ: "o",
      ǫ: "o",
      ǭ: "o",
      ø: "o",
      ǿ: "o",
      ɔ: "o",
      ꝋ: "o",
      ꝍ: "o",
      ɵ: "o",
      ƣ: "oi",
      ȣ: "ou",
      ꝏ: "oo",
      "ⓟ": "p",
      ｐ: "p",
      ṕ: "p",
      ṗ: "p",
      ƥ: "p",
      ᵽ: "p",
      ꝑ: "p",
      ꝓ: "p",
      ꝕ: "p",
      "ⓠ": "q",
      ｑ: "q",
      ɋ: "q",
      ꝗ: "q",
      ꝙ: "q",
      "ⓡ": "r",
      ｒ: "r",
      ŕ: "r",
      ṙ: "r",
      ř: "r",
      ȑ: "r",
      ȓ: "r",
      ṛ: "r",
      ṝ: "r",
      ŗ: "r",
      ṟ: "r",
      ɍ: "r",
      ɽ: "r",
      ꝛ: "r",
      ꞧ: "r",
      ꞃ: "r",
      "ⓢ": "s",
      ｓ: "s",
      ß: "s",
      ś: "s",
      ṥ: "s",
      ŝ: "s",
      ṡ: "s",
      š: "s",
      ṧ: "s",
      ṣ: "s",
      ṩ: "s",
      ș: "s",
      ş: "s",
      ȿ: "s",
      ꞩ: "s",
      ꞅ: "s",
      ẛ: "s",
      "ⓣ": "t",
      ｔ: "t",
      ṫ: "t",
      ẗ: "t",
      ť: "t",
      ṭ: "t",
      ț: "t",
      ţ: "t",
      ṱ: "t",
      ṯ: "t",
      ŧ: "t",
      ƭ: "t",
      ʈ: "t",
      ⱦ: "t",
      ꞇ: "t",
      ꜩ: "tz",
      "ⓤ": "u",
      ｕ: "u",
      ù: "u",
      ú: "u",
      û: "u",
      ũ: "u",
      ṹ: "u",
      ū: "u",
      ṻ: "u",
      ŭ: "u",
      ü: "u",
      ǜ: "u",
      ǘ: "u",
      ǖ: "u",
      ǚ: "u",
      ủ: "u",
      ů: "u",
      ű: "u",
      ǔ: "u",
      ȕ: "u",
      ȗ: "u",
      ư: "u",
      ừ: "u",
      ứ: "u",
      ữ: "u",
      ử: "u",
      ự: "u",
      ụ: "u",
      ṳ: "u",
      ų: "u",
      ṷ: "u",
      ṵ: "u",
      ʉ: "u",
      "ⓥ": "v",
      ｖ: "v",
      ṽ: "v",
      ṿ: "v",
      ʋ: "v",
      ꝟ: "v",
      ʌ: "v",
      ꝡ: "vy",
      "ⓦ": "w",
      ｗ: "w",
      ẁ: "w",
      ẃ: "w",
      ŵ: "w",
      ẇ: "w",
      ẅ: "w",
      ẘ: "w",
      ẉ: "w",
      ⱳ: "w",
      "ⓧ": "x",
      ｘ: "x",
      ẋ: "x",
      ẍ: "x",
      "ⓨ": "y",
      ｙ: "y",
      ỳ: "y",
      ý: "y",
      ŷ: "y",
      ỹ: "y",
      ȳ: "y",
      ẏ: "y",
      ÿ: "y",
      ỷ: "y",
      ẙ: "y",
      ỵ: "y",
      ƴ: "y",
      ɏ: "y",
      ỿ: "y",
      "ⓩ": "z",
      ｚ: "z",
      ź: "z",
      ẑ: "z",
      ż: "z",
      ž: "z",
      ẓ: "z",
      ẕ: "z",
      ƶ: "z",
      ȥ: "z",
      ɀ: "z",
      ⱬ: "z",
      ꝣ: "z",
      Ά: "Α",
      Έ: "Ε",
      Ή: "Η",
      Ί: "Ι",
      Ϊ: "Ι",
      Ό: "Ο",
      Ύ: "Υ",
      Ϋ: "Υ",
      Ώ: "Ω",
      ά: "α",
      έ: "ε",
      ή: "η",
      ί: "ι",
      ϊ: "ι",
      ΐ: "ι",
      ό: "ο",
      ύ: "υ",
      ϋ: "υ",
      ΰ: "υ",
      ω: "ω",
      ς: "σ",
    };
  });
  n("select2/data/base", ["../utils"], function (n) {
    function t() {
      t.__super__.constructor.call(this);
    }
    return (
      n.Extend(t, n.Observable),
      (t.prototype.current = function () {
        throw new Error(
          "The `current` method must be defined in child classes."
        );
      }),
      (t.prototype.query = function () {
        throw new Error("The `query` method must be defined in child classes.");
      }),
      (t.prototype.bind = function () {}),
      (t.prototype.destroy = function () {}),
      (t.prototype.generateResultId = function (t, i) {
        var r = t.id + "-result-";
        return (
          (r += n.generateChars(4)),
          r + (null != i.id ? "-" + i.id.toString() : "-" + n.generateChars(4))
        );
      }),
      t
    );
  });
  n(
    "select2/data/select",
    ["./base", "../utils", "jquery"],
    function (n, t, i) {
      function r(n, t) {
        this.$element = n;
        this.options = t;
        r.__super__.constructor.call(this);
      }
      return (
        t.Extend(r, n),
        (r.prototype.current = function (n) {
          var t = [],
            r = this;
          this.$element.find(":selected").each(function () {
            var n = i(this),
              u = r.item(n);
            t.push(u);
          });
          n(t);
        }),
        (r.prototype.select = function (n) {
          var t = this,
            r;
          if (i(n.element).is("option"))
            return (
              (n.element.selected = !0), void this.$element.trigger("change")
            );
          this.$element.prop("multiple")
            ? this.current(function (i) {
                var u = [],
                  r;
                for (n = [n], n.push.apply(n, i), r = 0; r < n.length; r++)
                  (id = n[r].id), -1 === u.indexOf(id) && u.push(id);
                t.$element.val(u);
                t.$element.trigger("change");
              })
            : ((r = n.id),
              this.$element.val(r),
              this.$element.trigger("change"));
        }),
        (r.prototype.unselect = function (n) {
          var t = this;
          if (this.$element.prop("multiple"))
            return i(n.element).is("option")
              ? ((n.element.selected = !1),
                void this.$element.trigger("change"))
              : void this.current(function (i) {
                  for (var r = [], u = 0; u < i.length; u++)
                    (id = i[u].id),
                      id !== n.id && -1 === r.indexOf(id) && r.push(id);
                  t.$element.val(r);
                  t.$element.trigger("change");
                });
        }),
        (r.prototype.bind = function (n) {
          var t = this;
          this.container = n;
          n.on("select", function (n) {
            t.select(n.data);
          });
          n.on("unselect", function (n) {
            t.unselect(n.data);
          });
        }),
        (r.prototype.destroy = function () {
          this.$element.find("*").each(function () {
            i.removeData(this, "data");
          });
        }),
        (r.prototype.query = function (n, t) {
          var r = [],
            u = this,
            f = this.$element.children();
          f.each(function () {
            var t = i(this),
              e,
              f;
            (t.is("option") || t.is("optgroup")) &&
              ((e = u.item(t)), (f = u.matches(n, e)), null !== f && r.push(f));
          });
          t({ results: r });
        }),
        (r.prototype.option = function (n) {
          var t, u, r;
          return (
            n.children
              ? ((t = document.createElement("optgroup")), (t.label = n.text))
              : ((t = document.createElement("option")),
                (t.innerText = n.text)),
            n.id && (t.value = n.id),
            n.disabled && (t.disabled = !0),
            n.selected && (t.selected = !0),
            (u = i(t)),
            (r = this._normalizeItem(n)),
            (r.element = t),
            i.data(t, "data", r),
            u
          );
        }),
        (r.prototype.item = function (n) {
          var t = {},
            e,
            o;
          if (((t = i.data(n[0], "data")), null != t)) return t;
          if (n.is("option"))
            t = {
              id: n.val(),
              text: n.html(),
              disabled: n.prop("disabled"),
              selected: n.prop("selected"),
            };
          else if (n.is("optgroup")) {
            t = { text: n.prop("label"), children: [] };
            for (var u = n.children("option"), f = [], r = 0; r < u.length; r++)
              (e = i(u[r])), (o = this.item(e)), f.push(o);
            t.children = f;
          }
          return (
            (t = this._normalizeItem(t)),
            (t.element = n[0]),
            i.data(n[0], "data", t),
            t
          );
        }),
        (r.prototype._normalizeItem = function (n) {
          i.isPlainObject(n) || (n = { id: n, text: n });
          n = i.extend({}, { text: "" }, n);
          return (
            null != n.id && (n.id = n.id.toString()),
            null != n.text && (n.text = n.text.toString()),
            null == n._resultId &&
              n.id &&
              null != this.container &&
              (n._resultId = this.generateResultId(this.container, n)),
            i.extend({}, { selected: !1, disabled: !1 }, n)
          );
        }),
        (r.prototype.matches = function (n, t) {
          var i = this.options.get("matcher");
          return i(n, t);
        }),
        r
      );
    }
  );
  n(
    "select2/data/array",
    ["./select", "../utils", "jquery"],
    function (n, t, i) {
      function r(n, t) {
        var i = t.get("data") || [];
        r.__super__.constructor.call(this, n, t);
        n.append(this.convertToOptions(i));
      }
      return (
        t.Extend(r, n),
        (r.prototype.select = function (n) {
          var t = this.$element.find('option[value="' + n.id + '"]');
          0 === t.length && ((t = this.option(n)), this.$element.append(t));
          r.__super__.select.call(this, n);
        }),
        (r.prototype.convertToOptions = function (n) {
          function c(n) {
            return function () {
              return i(this).val() == n.id;
            };
          }
          for (
            var t,
              u,
              h,
              l = this,
              f = this.$element.find("option"),
              a = f
                .map(function () {
                  return l.item(i(this)).id;
                })
                .get(),
              e = [],
              r = 0;
            r < n.length;
            r++
          )
            if (((t = this._normalizeItem(n[r])), a.indexOf(t.id) >= 0)) {
              var o = f.filter(c(t)),
                s = this.item(o),
                v = (i.extend(!0, {}, s, t), this.option(s));
              o.replaceWith(v);
            } else
              (u = this.option(t)),
                t.children &&
                  ((h = this.convertToOptions(t.children)), u.append(h)),
                e.push(u);
          return e;
        }),
        r
      );
    }
  );
  n("select2/data/ajax", ["./array", "../utils", "jquery"], function (n, t, i) {
    function r(t, i) {
      this.ajaxOptions = i.get("ajax");
      null != this.ajaxOptions.processResults &&
        (this.processResults = this.ajaxOptions.processResults);
      n.__super__.constructor.call(this, t, i);
    }
    return (
      t.Extend(r, n),
      (r.prototype.processResults = function (n) {
        return n;
      }),
      (r.prototype.query = function (n, t) {
        function u() {
          var u = i.ajax(r);
          u.success(function (r) {
            var u = f.processResults(r, n);
            console &&
              console.error &&
              ((u && u.results && i.isArray(u.results)) ||
                console.error(
                  "Select2: The AJAX results did not return an array in the `results` key of the response."
                ));
            t(u);
          });
          f._request = u;
        }
        var f = this,
          r;
        this._request && (this._request.abort(), (this._request = null));
        r = i.extend({ type: "GET" }, this.ajaxOptions);
        "function" == typeof r.url && (r.url = r.url(n));
        "function" == typeof r.data && (r.data = r.data(n));
        this.ajaxOptions.delay && "" !== n.term
          ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
            (this._queryTimeout = window.setTimeout(u, this.ajaxOptions.delay)))
          : u();
      }),
      r
    );
  });
  n("select2/data/tags", ["jquery"], function (n) {
    function t(t, i, r) {
      var f = r.get("tags"),
        e = r.get("createTag"),
        u;
      if (
        (void 0 !== e && (this.createTag = e), t.call(this, i, r), n.isArray(f))
      )
        for (u = 0; u < f.length; u++) {
          var o = f[u],
            s = this._normalizeItem(o),
            h = this.option(s);
          this.$element.append(h);
        }
    }
    return (
      (t.prototype.query = function (n, t, i) {
        function u(n, f) {
          for (var s, c, e = n.results, o = 0; o < e.length; o++) {
            var h = e[o],
              l = null != h.children && !u({ results: h.children }, !0),
              a = h.text === t.term;
            if (a || l) return f ? !1 : ((n.data = e), void i(n));
          }
          if (f) return !0;
          s = r.createTag(t);
          null != s &&
            ((c = r.option(s)),
            c.attr("data-select2-tag", !0),
            r.$element.append(c),
            r.insertTag(e, s));
          n.results = e;
          i(n);
        }
        var r = this;
        return (
          this._removeOldTags(),
          null == t.term || "" === t.term || null != t.page
            ? void n.call(this, t, i)
            : void n.call(this, t, u)
        );
      }),
      (t.prototype.createTag = function (n, t) {
        return { id: t.term, text: t.term };
      }),
      (t.prototype.insertTag = function (n, t, i) {
        t.unshift(i);
      }),
      (t.prototype._removeOldTags = function () {
        var t = (this._lastTag, this.$element.find("option[data-select2-tag]"));
        t.each(function () {
          this.selected || n(this).remove();
        });
      }),
      t
    );
  });
  n("select2/data/tokenizer", ["jquery"], function (n) {
    function t(n, t, i) {
      var r = i.get("tokenizer");
      void 0 !== r && (this.tokenizer = r);
      n.call(this, t, i);
    }
    return (
      (t.prototype.bind = function (n, t, i) {
        n.call(this, t, i);
        this.$search =
          t.dropdown.$search ||
          t.selection.$search ||
          i.find(".select2-search__field");
      }),
      (t.prototype.query = function (n, t, i) {
        function u(n) {
          f.select(n);
        }
        var f = this,
          r;
        t.term = t.term || "";
        r = this.tokenizer(t, this.options, u);
        r.term !== t.term &&
          (this.$search.length &&
            (this.$search.val(r.term), this.$search.focus()),
          (t.term = r.term));
        n.call(this, t, i);
      }),
      (t.prototype.tokenizer = function (t, i, r, u) {
        for (
          var o,
            s = r.get("tokenSeparators") || [],
            f = i.term,
            e = 0,
            h =
              this.createTag ||
              function (n) {
                return { id: n.term, text: n.term };
              };
          e < f.length;

        )
          if (((o = f[e]), -1 !== s.indexOf(o))) {
            var c = f.substr(0, e),
              l = n.extend({}, i, { term: c }),
              a = h(l);
            u(a);
            f = f.substr(e + 1) || "";
            e = 0;
          } else e++;
        return { term: f };
      }),
      t
    );
  });
  n("select2/data/minimumInputLength", [], function () {
    function n(n, t, i) {
      this.minimumInputLength = i.get("minimumInputLength");
      n.call(this, t, i);
    }
    return (
      (n.prototype.query = function (n, t, i) {
        return (
          (t.term = t.term || ""),
          t.term.length < this.minimumInputLength
            ? void this.trigger("results:message", {
                message: "inputTooShort",
                args: {
                  minimum: this.minimumInputLength,
                  input: t.term,
                  params: t,
                },
              })
            : void n.call(this, t, i)
        );
      }),
      n
    );
  });
  n("select2/data/maximumInputLength", [], function () {
    function n(n, t, i) {
      this.maximumInputLength = i.get("maximumInputLength");
      n.call(this, t, i);
    }
    return (
      (n.prototype.query = function (n, t, i) {
        return (
          (t.term = t.term || ""),
          this.maximumInputLength > 0 && t.term.length > this.maximumInputLength
            ? void this.trigger("results:message", {
                message: "inputTooLong",
                args: {
                  minimum: this.maximumInputLength,
                  input: t.term,
                  params: t,
                },
              })
            : void n.call(this, t, i)
        );
      }),
      n
    );
  });
  n("select2/data/maximumSelectionLength", [], function () {
    function n(n, t, i) {
      this.maximumSelectionLength = i.get("maximumSelectionLength");
      n.call(this, t, i);
    }
    return (
      (n.prototype.query = function (n, t, i) {
        var r = this;
        this.current(function (u) {
          var f = null != u ? u.length : 0;
          return r.maximumSelectionLength > 0 && f >= r.maximumSelectionLength
            ? void r.trigger("results:message", {
                message: "maximumSelected",
                args: { maximum: r.maximumSelectionLength },
              })
            : void n.call(r, t, i);
        });
      }),
      n
    );
  });
  n("select2/dropdown", ["jquery", "./utils"], function (n, t) {
    function i(n, t) {
      this.$element = n;
      this.options = t;
      i.__super__.constructor.call(this);
    }
    return (
      t.Extend(i, t.Observable),
      (i.prototype.render = function () {
        var t = n(
          '<span class="select2-dropdown"><span class="select2-results"></span></span>'
        );
        return t.attr("dir", this.options.get("dir")), (this.$dropdown = t), t;
      }),
      (i.prototype.position = function () {}),
      (i.prototype.destroy = function () {
        this.$dropdown.remove();
      }),
      (i.prototype.bind = function (n) {
        var t = this;
        n.on("select", function (n) {
          t._onSelect(n);
        });
        n.on("unselect", function (n) {
          t._onUnSelect(n);
        });
      }),
      (i.prototype._onSelect = function () {
        this.trigger("close");
      }),
      (i.prototype._onUnSelect = function () {
        this.trigger("close");
      }),
      i
    );
  });
  n("select2/dropdown/search", ["jquery", "../utils"], function (n) {
    function t() {}
    return (
      (t.prototype.render = function (t) {
        var r = t.call(this),
          i = n(
            '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" role="textbox" /></span>'
          );
        return (
          (this.$searchContainer = i),
          (this.$search = i.find("input")),
          r.prepend(i),
          r
        );
      }),
      (t.prototype.bind = function (n, t, i) {
        var r = this;
        n.call(this, t, i);
        this.$search.on("keydown", function (n) {
          r.trigger("keypress", n);
          r._keyUpPrevented = n.isDefaultPrevented();
        });
        this.$search.on("keyup", function (n) {
          r.handleSearch(n);
        });
        t.on("open", function () {
          r.$search.attr("tabindex", 0);
          r.$search.focus();
          window.setTimeout(function () {
            r.$search.focus();
          }, 0);
        });
        t.on("close", function () {
          r.$search.attr("tabindex", -1);
          r.$search.val("");
        });
        t.on("results:all", function (n) {
          if (null == n.query.term || "" === n.query.term) {
            var t = r.showSearch(n);
            t
              ? r.$searchContainer.removeClass("select2-search--hide")
              : r.$searchContainer.addClass("select2-search--hide");
          }
        });
      }),
      (t.prototype.handleSearch = function () {
        if (!this._keyUpPrevented) {
          var n = this.$search.val();
          this.trigger("query", { term: n });
        }
        this._keyUpPrevented = !1;
      }),
      (t.prototype.showSearch = function () {
        return !0;
      }),
      t
    );
  });
  n("select2/dropdown/hidePlaceholder", [], function () {
    function n(n, t, i, r) {
      this.placeholder = this.normalizePlaceholder(i.get("placeholder"));
      n.call(this, t, i, r);
    }
    return (
      (n.prototype.append = function (n, t) {
        t.results = this.removePlaceholder(t.results);
        n.call(this, t);
      }),
      (n.prototype.normalizePlaceholder = function (n, t) {
        return "string" == typeof t && (t = { id: "", text: t }), t;
      }),
      (n.prototype.removePlaceholder = function (n, t) {
        for (var u, r = t.slice(0), i = t.length - 1; i >= 0; i--)
          (u = t[i]), this.placeholder.id === u.id && r.splice(i, 1);
        return r;
      }),
      n
    );
  });
  n("select2/dropdown/infiniteScroll", ["jquery"], function (n) {
    function t(n, t, i, r) {
      this.lastParams = {};
      n.call(this, t, i, r);
      this.$loadingMore = this.createLoadingMore();
      this.loading = !1;
    }
    return (
      (t.prototype.append = function (n, t) {
        this.$loadingMore.remove();
        this.loading = !1;
        n.call(this, t);
        this.showLoadingMore(t) && this.$results.append(this.$loadingMore);
      }),
      (t.prototype.bind = function (t, i, r) {
        var u = this;
        t.call(this, i, r);
        i.on("query", function (n) {
          u.lastParams = n;
          u.loading = !0;
        });
        i.on("query:append", function (n) {
          u.lastParams = n;
          u.loading = !0;
        });
        this.$results.on("scroll", function () {
          var r = n.contains(document.documentElement, u.$loadingMore[0]),
            t,
            i;
          !u.loading &&
            r &&
            ((t = u.$results.offset().top + u.$results.outerHeight(!1)),
            (i = u.$loadingMore.offset().top + u.$loadingMore.outerHeight(!1)),
            t + 50 >= i && u.loadMore());
        });
      }),
      (t.prototype.loadMore = function () {
        this.loading = !0;
        var t = n.extend({}, { page: 1 }, this.lastParams);
        t.page++;
        this.trigger("query:append", t);
      }),
      (t.prototype.showLoadingMore = function (n, t) {
        return t.pagination && t.pagination.more;
      }),
      (t.prototype.createLoadingMore = function () {
        var t = n('<li class="option load-more" role="treeitem"></li>'),
          i = this.options.get("translations").get("loadingMore");
        return t.html(i(this.lastParams)), t;
      }),
      t
    );
  });
  n("select2/dropdown/attachBody", ["jquery", "../utils"], function (n, t) {
    function i(n, t, i) {
      this.$dropdownParent = i.get("dropdownParent") || document.body;
      n.call(this, t, i);
    }
    return (
      (i.prototype.bind = function (n, t, i) {
        var r = this,
          u = !1;
        n.call(this, t, i);
        t.on("open", function () {
          r._showDropdown();
          r._attachPositioningHandler(t);
          u ||
            ((u = !0),
            t.on("results:all", function () {
              r._positionDropdown();
              r._resizeDropdown();
            }),
            t.on("results:append", function () {
              r._positionDropdown();
              r._resizeDropdown();
            }));
        });
        t.on("close", function () {
          r._hideDropdown();
          r._detachPositioningHandler(t);
        });
        this.$dropdownContainer.on("mousedown", function (n) {
          n.stopPropagation();
        });
      }),
      (i.prototype.position = function (n, t, i) {
        t.attr("class", i.attr("class"));
        t.removeClass("select2");
        t.addClass("select2-container--open");
        t.css({ position: "absolute", top: -999999 });
        this.$container = i;
      }),
      (i.prototype.render = function (t) {
        var i = n("<span></span>"),
          r = t.call(this);
        return i.append(r), (this.$dropdownContainer = i), i;
      }),
      (i.prototype._hideDropdown = function () {
        this.$dropdownContainer.detach();
      }),
      (i.prototype._attachPositioningHandler = function (i) {
        var r = this,
          u = "scroll.select2." + i.id,
          f = "resize.select2." + i.id,
          e = "orientationchange.select2." + i.id;
        $watchers = this.$container.parents().filter(t.hasScroll);
        $watchers.each(function () {
          n(this).data("select2-scroll-position", {
            x: n(this).scrollLeft(),
            y: n(this).scrollTop(),
          });
        });
        $watchers.on(u, function () {
          var t = n(this).data("select2-scroll-position");
          n(this).scrollTop(t.y);
        });
        n(window).on(u + " " + f + " " + e, function () {
          r._positionDropdown();
          r._resizeDropdown();
        });
      }),
      (i.prototype._detachPositioningHandler = function (i) {
        var r = "scroll.select2." + i.id,
          u = "resize.select2." + i.id,
          f = "orientationchange.select2." + i.id;
        $watchers = this.$container.parents().filter(t.hasScroll);
        $watchers.off(r);
        n(window).off(r + " " + u + " " + f);
      }),
      (i.prototype._positionDropdown = function () {
        var f = n(window),
          u = this.$dropdown.hasClass("select2-dropdown--above"),
          l = this.$dropdown.hasClass("select2-dropdown--below"),
          t = null,
          i = (this.$container.position(), this.$container.offset()),
          r;
        i.bottom = i.top + this.$container.outerHeight(!1);
        r = { height: this.$container.outerHeight(!1) };
        r.top = i.top;
        r.bottom = i.top + r.height;
        var e = { height: this.$dropdown.outerHeight(!1) },
          o = { top: f.scrollTop(), bottom: f.scrollTop() + f.height() },
          s = o.top < i.top - e.height,
          h = o.bottom > i.bottom + e.height,
          c = { left: i.left, top: r.bottom };
        u || l || (t = "below");
        h || !s || u ? !s && h && u && (t = "below") : (t = "above");
        ("above" == t || (u && "below" !== t)) && (c.top = r.top - e.height);
        null != t &&
          (this.$dropdown
            .removeClass("select2-dropdown--below select2-dropdown--above")
            .addClass("select2-dropdown--" + t),
          this.$container
            .removeClass("select2-container--below select2-container--above")
            .addClass("select2-container--" + t));
        this.$dropdownContainer.css(c);
      }),
      (i.prototype._resizeDropdown = function () {
        this.$dropdownContainer.width();
        this.$dropdown.css({ width: this.$container.outerWidth(!1) + "px" });
      }),
      (i.prototype._showDropdown = function () {
        this.$dropdownContainer.appendTo(this.$dropdownParent);
        this._positionDropdown();
        this._resizeDropdown();
      }),
      i
    );
  });
  n("select2/dropdown/minimumResultsForSearch", [], function () {
    function n(t) {
      var i, r;
      for (count = 0, i = 0; i < t.length; i++)
        (r = t[i]), r.children ? (count += n(r.children)) : count++;
      return count;
    }
    function t(n, t, i, r) {
      this.minimumResultsForSearch = i.get("minimumResultsForSearch");
      n.call(this, t, i, r);
    }
    return (
      (t.prototype.showSearch = function (t, i) {
        return n(i.data.results) < this.minimumResultsForSearch
          ? !1
          : t.call(this, i);
      }),
      t
    );
  });
  n("select2/dropdown/selectOnClose", [], function () {
    function n() {}
    return (
      (n.prototype.bind = function (n, t, i) {
        var r = this;
        n.call(this, t, i);
        t.on("close", function () {
          r._handleSelectOnClose();
        });
      }),
      (n.prototype._handleSelectOnClose = function () {
        var n = this.getHighlightedResults();
        n.length < 1 || n.trigger("mouseup");
      }),
      n
    );
  });
  n("select2/i18n/en", [], function () {
    return {
      errorLoading: function () {
        return "The results could not be loaded.";
      },
      inputTooLong: function (n) {
        var t = n.input.length - n.maximum,
          i = "Please delete " + t + " character";
        return 1 != t && (i += "s"), i;
      },
      inputTooShort: function (n) {
        var t = n.minimum - n.input.length;
        return "Please enter " + t + " or more characters";
      },
      loadingMore: function () {
        return "Loading more results…";
      },
      maximumSelected: function (n) {
        var t = "You can only select " + n.maximum + " item";
        return 1 != n.maximum && (t += "s"), t;
      },
      noResults: function () {
        return "No results found";
      },
      searching: function () {
        return "Searching…";
      },
    };
  });
  n(
    "select2/defaults",
    [
      "jquery",
      "./results",
      "./selection/single",
      "./selection/multiple",
      "./selection/placeholder",
      "./selection/allowClear",
      "./selection/search",
      "./selection/eventRelay",
      "./utils",
      "./translation",
      "./diacritics",
      "./data/select",
      "./data/array",
      "./data/ajax",
      "./data/tags",
      "./data/tokenizer",
      "./data/minimumInputLength",
      "./data/maximumInputLength",
      "./data/maximumSelectionLength",
      "./dropdown",
      "./dropdown/search",
      "./dropdown/hidePlaceholder",
      "./dropdown/infiniteScroll",
      "./dropdown/attachBody",
      "./dropdown/minimumResultsForSearch",
      "./dropdown/selectOnClose",
      "./i18n/en",
    ],
    function (
      n,
      i,
      r,
      u,
      f,
      e,
      o,
      s,
      h,
      c,
      l,
      a,
      v,
      y,
      p,
      w,
      b,
      k,
      d,
      g,
      nt,
      tt,
      it,
      rt,
      ut,
      ft,
      et
    ) {
      function ot() {
        this.reset();
      }
      ot.prototype.apply = function (l) {
        var lt, at, vt, yt, pt, ht, ct, ot, et, st;
        if (
          (((l = n.extend({}, this.defaults, l)), null == l.dataAdapter) &&
            (((l.dataAdapter = null != l.ajax ? y : null != l.data ? v : a),
            l.minimumInputLength > 0 &&
              (l.dataAdapter = h.Decorate(l.dataAdapter, b)),
            l.maximumInputLength > 0 &&
              (l.dataAdapter = h.Decorate(l.dataAdapter, k)),
            l.maximumSelectionLength > 0 &&
              (l.dataAdapter = h.Decorate(l.dataAdapter, d)),
            null != l.tags && (l.dataAdapter = h.Decorate(l.dataAdapter, p)),
            (null != l.tokenSeparators || null != l.tokenizer) &&
              (l.dataAdapter = h.Decorate(l.dataAdapter, w)),
            null != l.query) &&
              ((lt = t(l.amdBase + "compat/query")),
              (l.dataAdapter = h.Decorate(l.dataAdapter, lt))),
            null != l.initSelection &&
              ((at = t(l.amdBase + "compat/initSelection")),
              (l.dataAdapter = h.Decorate(l.dataAdapter, at)))),
          (null == l.resultsAdapter &&
            ((l.resultsAdapter = i),
            null != l.ajax &&
              (l.resultsAdapter = h.Decorate(l.resultsAdapter, it)),
            null != l.placeholder &&
              (l.resultsAdapter = h.Decorate(l.resultsAdapter, tt)),
            l.selectOnClose &&
              (l.resultsAdapter = h.Decorate(l.resultsAdapter, ft))),
          null == l.dropdownAdapter) &&
            (l.multiple
              ? (l.dropdownAdapter = g)
              : ((vt = h.Decorate(g, nt)), (l.dropdownAdapter = vt)),
            l.minimumResultsForSearch > 0 &&
              (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, ut)),
            (l.dropdownAdapter = h.Decorate(l.dropdownAdapter, rt))),
          (null == l.selectionAdapter &&
            ((l.selectionAdapter = l.multiple ? u : r),
            null != l.placeholder &&
              ((l.selectionAdapter = h.Decorate(l.selectionAdapter, f)),
              l.allowClear &&
                (l.selectionAdapter = h.Decorate(l.selectionAdapter, e))),
            l.multiple &&
              (l.selectionAdapter = h.Decorate(l.selectionAdapter, o)),
            (l.selectionAdapter = h.Decorate(l.selectionAdapter, s))),
          "string" == typeof l.language) &&
            (l.language.indexOf("-") > 0
              ? ((yt = l.language.split("-")),
                (pt = yt[0]),
                (l.language = [l.language, pt]))
              : (l.language = [l.language])),
          n.isArray(l.language))
        ) {
          for (
            ht = new c(), l.language.push("en"), ct = l.language, ot = 0;
            ot < ct.length;
            ot++
          ) {
            et = ct[ot];
            st = {};
            try {
              st = c.loadPath(et);
            } catch (wt) {
              try {
                et = this.defaults.amdLanguageBase + et;
                st = c.loadPath(et);
              } catch (bt) {
                console &&
                  console.warn &&
                  console.warn(
                    'Select2: The lanugage file for "' +
                      et +
                      '" could not be automatically loaded. A fallback will be used instead.'
                  );
                continue;
              }
            }
            ht.extend(st);
          }
          l.translations = ht;
        } else l.translations = new c(l.language);
        return l;
      };
      ot.prototype.reset = function () {
        function i(n) {
          function t(n) {
            return l[n] || n;
          }
          return n.replace(/[^\u0000-\u007E]/g, t);
        }
        function t(r, u) {
          var f, e, o, s, h, c;
          if ("" === n.trim(r.term)) return u;
          if (u.children && u.children.length > 0) {
            for (
              f = n.extend(!0, {}, u), e = u.children.length - 1;
              e >= 0;
              e--
            )
              (o = u.children[e]),
                (s = t(r, o)),
                null == s && f.children.splice(e, 1);
            return f.children.length > 0 ? f : t(r, f);
          }
          return (
            (h = i(u.text).toUpperCase()),
            (c = i(r.term).toUpperCase()),
            h.indexOf(c) > -1 ? u : null
          );
        }
        this.defaults = {
          amdBase: "select2/",
          amdLanguageBase: "select2/i18n/",
          language: et,
          matcher: t,
          minimumInputLength: 0,
          maximumInputLength: 0,
          maximumSelectionLength: 0,
          minimumResultsForSearch: 0,
          selectOnClose: !1,
          sorter: function (n) {
            return n;
          },
          templateResult: function (n) {
            return n.text;
          },
          templateSelection: function (n) {
            return n.text;
          },
          theme: "default",
          width: "resolve",
        };
      };
      ot.prototype.set = function (t, i) {
        var f = n.camelCase(t),
          r = {},
          u;
        r[f] = i;
        u = h._convertData(r);
        n.extend(this.defaults, u);
      };
      return new ot();
    }
  );
  n("select2/options", ["jquery", "./defaults", "./utils"], function (n, t, i) {
    function r(n, i) {
      this.options = n;
      null != i && this.fromElement(i);
      this.options = t.apply(this.options);
    }
    return (
      (r.prototype.fromElement = function (t) {
        var f = ["select2"],
          u,
          r;
        null == this.options.multiple &&
          (this.options.multiple = t.prop("multiple"));
        null == this.options.disabled &&
          (this.options.disabled = t.prop("disabled"));
        null == this.options.language &&
          (t.prop("lang")
            ? (this.options.language = t.prop("lang").toLowerCase())
            : t.closest("[lang]").prop("lang") &&
              (this.options.language = t.closest("[lang]").prop("lang")));
        null == this.options.dir &&
          (this.options.dir = t.prop("dir")
            ? t.prop("dir")
            : t.closest("[dir]").prop("dir")
              ? t.closest("[dir]").prop("dir")
              : "ltr");
        t.prop("disabled", this.options.disabled);
        t.prop("multiple", this.options.multiple);
        t.data("select2-tags") &&
          (console &&
            console.warn &&
            console.warn(
              'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
            ),
          t.data("data", t.data("select2-tags")),
          t.data("tags", !0));
        t.data("ajax-url") &&
          (console &&
            console.warn &&
            console.warn(
              "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
            ),
          t.data("ajax--url", t.data("ajax-url")));
        u = t.data();
        u = i._convertData(u);
        for (r in u)
          f.indexOf(r) > -1 ||
            (n.isPlainObject(this.options[r])
              ? n.extend(this.options[r], u[r])
              : (this.options[r] = u[r]));
        return this;
      }),
      (r.prototype.get = function (n) {
        return this.options[n];
      }),
      (r.prototype.set = function (n, t) {
        this.options[n] = t;
      }),
      r
    );
  });
  n(
    "select2/core",
    ["jquery", "./options", "./utils", "./keys"],
    function (n, t, r, u) {
      var f = function (n, i) {
        var u, r, e, o, s, h;
        null != n.data("select2") && n.data("select2").destroy();
        this.$element = n;
        this.id = this._generateId(n);
        i = i || {};
        this.options = new t(i, n);
        f.__super__.constructor.call(this);
        u = this.options.get("dataAdapter");
        this.data = new u(n, this.options);
        r = this.render();
        this._placeContainer(r);
        e = this.options.get("selectionAdapter");
        this.selection = new e(n, this.options);
        this.$selection = this.selection.render();
        this.selection.position(this.$selection, r);
        o = this.options.get("dropdownAdapter");
        this.dropdown = new o(n, this.options);
        this.$dropdown = this.dropdown.render();
        this.dropdown.position(this.$dropdown, r);
        s = this.options.get("resultsAdapter");
        this.results = new s(n, this.options, this.data);
        this.$results = this.results.render();
        this.results.position(this.$results, this.$dropdown);
        h = this;
        this._bindAdapters();
        this._registerDomEvents();
        this._registerDataEvents();
        this._registerSelectionEvents();
        this._registerDropdownEvents();
        this._registerResultsEvents();
        this._registerEvents();
        this.data.current(function (n) {
          h.trigger("selection:update", { data: n });
        });
        n.hide();
        this._syncAttributes();
        this._tabindex = n.attr("tabindex") || 0;
        n.attr("tabindex", "-1");
        n.data("select2", this);
      };
      return (
        r.Extend(f, r.Observable),
        (f.prototype._generateId = function (n) {
          var t = "";
          return (
            (t =
              null != n.attr("id")
                ? n.attr("id")
                : null != n.attr("name")
                  ? n.attr("name") + "-" + r.generateChars(2)
                  : r.generateChars(4)),
            (t = "select2-" + t)
          );
        }),
        (f.prototype._placeContainer = function (n) {
          n.insertAfter(this.$element);
          var t = this._resolveWidth(this.$element, this.options.get("width"));
          null != t && n.css("width", t);
        }),
        (f.prototype._resolveWidth = function (n, t) {
          var u, f, e, o, r;
          if ("resolve" == t)
            return (
              (u = this._resolveWidth(n, "style")),
              null != u ? u : this._resolveWidth(n, "element")
            );
          if ("element" == t)
            return (f = n.outerWidth(!1)), 0 >= f ? "auto" : f + "px";
          if ("style" == t) {
            if (((e = n.attr("style")), "string" != typeof e)) return null;
            for (o = e.split(";"), i = 0, l = o.length; l > i; i += 1)
              if (
                ((attr = o[i].replace(/\s/g, "")),
                (r = attr.match(
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i
                )),
                null !== r && r.length >= 1)
              )
                return r[1];
            return null;
          }
          return t;
        }),
        (f.prototype._bindAdapters = function () {
          this.data.bind(this, this.$container);
          this.selection.bind(this, this.$container);
          this.dropdown.bind(this, this.$container);
          this.results.bind(this, this.$container);
        }),
        (f.prototype._registerDomEvents = function () {
          var t = this,
            i;
          this.$element.on("change.select2", function () {
            t.data.current(function (n) {
              t.trigger("selection:update", { data: n });
            });
          });
          this._sync = r.bind(this._syncAttributes, this);
          this.$element[0].attachEvent &&
            this.$element[0].attachEvent("onpropertychange", this._sync);
          i =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;
          null != i &&
            ((this._observer = new i(function (i) {
              n.each(i, t._sync);
            })),
            this._observer.observe(this.$element[0], {
              attributes: !0,
              subtree: !1,
            }));
        }),
        (f.prototype._registerDataEvents = function () {
          var n = this;
          this.data.on("*", function (t, i) {
            n.trigger(t, i);
          });
        }),
        (f.prototype._registerSelectionEvents = function () {
          var n = this,
            t = ["toggle"];
          this.selection.on("toggle", function () {
            n.toggleDropdown();
          });
          this.selection.on("*", function (i, r) {
            -1 === t.indexOf(i) && n.trigger(i, r);
          });
        }),
        (f.prototype._registerDropdownEvents = function () {
          var n = this;
          this.dropdown.on("*", function (t, i) {
            n.trigger(t, i);
          });
        }),
        (f.prototype._registerResultsEvents = function () {
          var n = this;
          this.results.on("*", function (t, i) {
            n.trigger(t, i);
          });
        }),
        (f.prototype._registerEvents = function () {
          var n = this;
          this.on("open", function () {
            n.$container.addClass("select2-container--open");
          });
          this.on("close", function () {
            n.$container.removeClass("select2-container--open");
          });
          this.on("enable", function () {
            n.$container.removeClass("select2-container--disabled");
          });
          this.on("disable", function () {
            n.$container.addClass("select2-container--disabled");
          });
          this.on("query", function (t) {
            this.data.query(t, function (i) {
              n.trigger("results:all", { data: i, query: t });
            });
          });
          this.on("query:append", function (t) {
            this.data.query(t, function (i) {
              n.trigger("results:append", { data: i, query: t });
            });
          });
          this.on("keypress", function (t) {
            var i = t.which;
            n.isOpen()
              ? i === u.ENTER
                ? (n.trigger("results:select"), t.preventDefault())
                : i === u.UP
                  ? (n.trigger("results:previous"), t.preventDefault())
                  : i === u.DOWN
                    ? (n.trigger("results:next"), t.preventDefault())
                    : (i === u.ESC || i === u.TAB) &&
                      (n.close(), t.preventDefault())
              : (i === u.ENTER ||
                  i === u.SPACE ||
                  ((i === u.DOWN || i === u.UP) && t.altKey)) &&
                (n.open(), t.preventDefault());
          });
        }),
        (f.prototype._syncAttributes = function () {
          this.options.set("disabled", this.$element.prop("disabled"));
          this.options.get("disabled")
            ? (this.isOpen() && this.close(), this.trigger("disable"))
            : this.trigger("enable");
        }),
        (f.prototype.trigger = function (n, t) {
          var r = f.__super__.trigger,
            u = {
              open: "opening",
              close: "closing",
              select: "selecting",
              unselect: "unselecting",
            },
            e,
            i;
          if (
            n in u &&
            ((e = u[n]),
            (i = { prevented: !1, name: n, args: t }),
            r.call(this, e, i),
            i.prevented)
          )
            return void (t.prevented = !0);
          r.call(this, n, t);
        }),
        (f.prototype.toggleDropdown = function () {
          this.options.get("disabled") ||
            (this.isOpen() ? this.close() : this.open());
        }),
        (f.prototype.open = function () {
          this.isOpen() || (this.trigger("query", {}), this.trigger("open"));
        }),
        (f.prototype.close = function () {
          this.isOpen() && this.trigger("close");
        }),
        (f.prototype.isOpen = function () {
          return this.$container.hasClass("select2-container--open");
        }),
        (f.prototype.enable = function (n) {
          console &&
            console.warn &&
            console.warn(
              'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
            );
          0 === n.length && (n = [!0]);
          var t = !n[0];
          this.$element.prop("disabled", t);
        }),
        (f.prototype.val = function (t) {
          if (
            (console &&
              console.warn &&
              console.warn(
                'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
              ),
            0 === t.length)
          )
            return this.$element.val();
          var i = t[0];
          n.isArray(i) &&
            (i = n.map(i, function (n) {
              return n.toString();
            }));
          this.$element.val(i).trigger("change");
        }),
        (f.prototype.destroy = function () {
          this.$container.remove();
          this.$element[0].detachEvent &&
            this.$element[0].detachEvent("onpropertychange", this._sync);
          null != this._observer &&
            (this._observer.disconnect(), (this._observer = null));
          this._sync = null;
          this.$element.off(".select2");
          this.$element.attr("tabindex", this._tabindex);
          this.$element.show();
          this.$element.removeData("select2");
          this.data.destroy();
          this.selection.destroy();
          this.dropdown.destroy();
          this.results.destroy();
          this.data = null;
          this.selection = null;
          this.dropdown = null;
          this.results = null;
        }),
        (f.prototype.render = function () {
          var t = n(
            '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
          );
          return (
            t.attr("dir", this.options.get("dir")),
            (this.$container = t),
            this.$container.addClass(
              "select2-container--" + this.options.get("theme")
            ),
            t.data("element", this.$element),
            t
          );
        }),
        f
      );
    }
  );
  n(
    "jquery.select2",
    ["jquery", "./select2/core", "./select2/defaults"],
    function (n, i, r) {
      try {
        t("jquery.mousewheel");
      } catch (u) {}
      return (
        null == n.fn.select2 &&
          (n.fn.select2 = function (t) {
            if (((t = t || {}), "object" == typeof t))
              return (
                this.each(function () {
                  var r = n.extend({}, t, !0);
                  new i(n(this), r);
                }),
                this
              );
            if ("string" == typeof t) {
              var r = this.data("select2"),
                u = Array.prototype.slice.call(arguments, 1);
              return r[t](u);
            }
            throw new Error("Invalid arguments for Select2: " + t);
          }),
        null == n.fn.select2.defaults && (n.fn.select2.defaults = r),
        i
      );
    }
  );
  t("jquery.select2");
  jQuery.fn.select2.amd = { define: n, require: t };
})();
$(function () {
  if (navigator.userAgent.match(/iPhone|iPad|iPod/i))
    $(".modal").on("show.bs.modal", function () {
      $(this).css({
        position: "absolute",
        marginTop: $(window).scrollTop() + "px",
        bottom: "auto",
      });
      setTimeout(function () {
        $(".modal-backdrop").css({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height:
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            ) + "px",
        });
      }, 0);
    });
});
$(document).ready(function () {
  var t = $(".mobile-menu-button"),
    n = $(".menu");
  $(t).on("click", function (t) {
    t.preventDefault();
    n.slideToggle();
  });
  $(".menu > li > a").click(function (n) {
    window.innerWidth <= 768 &&
      (n.preventDefault(),
      $(".sub-menu").slideUp(),
      $(this).next().is(":visible") || $(this).next().slideDown());
  });
  var i = function () {
      return /ipad/i.test(navigator.userAgent);
    },
    r = function () {
      return /iphone/i.test(navigator.userAgent);
    },
    u = function () {
      return /ipod/i.test(navigator.userAgent);
    },
    f = u() || i() || r() ? "touchstart" : "click";
  $("body").bind(f, function (t) {
    $(t.target).closest("nav").length === 0 &&
      $(t.target).closest(".mobile-menu").length === 0 &&
      ($(".sub-menu").slideUp(), window.innerWidth < 768 && n.slideUp());
  });
  $("ul.menu > li").hover(
    function (n) {
      window.innerWidth > 768 &&
        (n.preventDefault(),
        $(this).find(".sub-menu").slideDown(),
        $(this).children("a:first").removeClass("menu-head"),
        $(this).children("a:first").addClass("menu-head-over"));
    },
    function (n) {
      window.innerWidth > 768 &&
        (n.preventDefault(),
        $(".sub-menu").hide(),
        $(this).children("a:first").removeClass("menu-head-over"),
        $(this).children("a:first").addClass("menu-head"));
    }
  );
  $(window).resize(function () {
    window.innerWidth >= 768 && n.removeAttr("style");
  });
});
