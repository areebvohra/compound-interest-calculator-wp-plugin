<?php
// This file enqueues a shortcode.

defined('ABSPATH') or die('Direct script access disallowed.');

add_shortcode('erw_widget', function ($atts) {
    $default_atts = array();
    $args = shortcode_atts($default_atts, $atts);

    $main_code = "<div id='my-box-page'></div><script>!function (e) { function t(t) { for (var n, l, p = t[0], a = t[1], i = t[2], f = 0, s = []; f < p.length; f++)l = p[f], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0; for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]); for (c && c(t); s.length;)s.shift()(); return u.push.apply(u, i || []), r() } function r() { for (var e, t = 0; t < u.length; t++) { for (var r = u[t], n = !0, p = 1; p < r.length; p++) { var a = r[p]; 0 !== o[a] && (n = !1) } n && (u.splice(t--, 1), e = l(l.s = r[0])) } return e } var n = {}, o = { 1: 0 }, u = []; function l(t) { if (n[t]) return n[t].exports; var r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports } l.m = e, l.c = n, l.d = function (e, t, r) { l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, l.r = function (e) { 'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }) }, l.t = function (e, t) { if (1 & t && (e = l(e)), 8 & t) return e; if (4 & t && 'object' == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (l.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e) for (var n in e) l.d(r, n, function (t) { return e[t] }.bind(null, n)); return r }, l.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return l.d(t, 'a', t), t }, l.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, l.p = '/wp-content/plugins/compound-interest-calculator-react/widget/build/'; var p = this['webpackJsonpmy-app'] = this['webpackJsonpmy-app'] || [], a = p.push.bind(p); p.push = t, p = p.slice(); for (var i = 0; i < p.length; i++)t(p[i]); var c = a; r() }([])</script>";

    return $main_code;
});
