/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT / GPL2 Licenciado
*/
! function (a, b) {function c (a, b) {var c = a.createElement ("p"), d = a.getElementsByTagName ("head") [0] || a.documentElement; return c. innerHTML = "x <style>" + b + "</style>", d.insertBefore (c.lastChild, d.firstChild)} função d () {var a = elementos; retornar "string" == tipo de a ? a.split (""): a} função e (a, b) {var c = elementos t; "string"! = tipo de c && (c = c.join ("")), "string"! = tipo de a && (a = a.join ("")), t.elements = c + "" + a, j (b)} função f (a) {var b = s [a [q]]; return b || (b = {}, r ++, a [q] = r, s [r] = b), b} função g (a, c, d) {se (c || (c = b), l) retornar c .createElement (a); d || (d = f (c)); var e; return e = d.cache [a]? d.cache [a] .cloneNode (): p.test (a)? ( d.cache [a] = d.createElem (a)). cloneNode (): d.createElem (a), e.canHaveChildren || o.test (a) || e.tagUrn? e: d.frag.appendChild (e)} função h (a, c) {if (a || (a = b), l) retorna a.createDocumentFragment (); c = c || f (a); para (var e = c. frag.cloneNode (), g = 0, h = d (), i = h.length; i> g; g ++) e.createElement (h [g]); return e} função i (a, b) {b .cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag ()), a.createElement = function (c) {return t .shivMethods? g (c, a, b): b.createElem (c)}, a.createDocumentFragment = Function ("h, f", "função de retorno () {var n = f.cloneNode (), c = n h.shivMethods && ("+ d (). join (). replace (/ [\ w \ -:] + / g, função (a) {return b.createElem (a), b.frag.createElement ( a), 'c ("' + a + '")'}) + "); return n}") (t, b.frag)} função j (a) {a || (a = b); var d = f (a); return! t.shivCSS || k || d.hasCSS || (d.hasCSS = !! c (a, "artigo, aparte, caixa de diálogo, figcaption, figura, rodapé, cabeçalho, hgroup, main navseção {display: block} marca {background: # FF0; cor: # 000} modelo {display: none} ")), l || i (a, d), a} var k, l, m =" 3.7. 3 ", n = a.html5 || {}, o = / ^ <| ^ (?: botão | mapa | selecione | área de texto | objeto | iframe | opção | grupo de opções) $ / i, p = / ^ (?: a | b | code | div | fieldset | h1 | h2 | h3 | h4 | h5 | h6 | i | label | li | ol | p | q | span | strong | style | table | tbody | td | th | tr | ul) $ / i, q = "_ html5shiv", r = 0, s = {} ;! function () {try {var a = b.createElement ("a"); a.innerHTML = "<xyz> </ xyz> ", k =" oculto "na função a, l = 1 == a.childNodes.length || () {b.createElement (" a "); var a = b.createDocumentFragment (); return" undefined " == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement} ()} catch (c) {k =! 0, l =! 0}} () ; var t = {elementos: n.elements || "artigo do abbr à parte áudio bdi tela dados datalist detalhes diálogo figcaption figura rodapé cabeçalho hgroup principal marca medidor nav saída imagem progresso seção resumo modelo tempo vídeo ", versão: m, shivCSS: n.shivCSS! ==! 1, supportedUnknownElements: l, shivMethods: n.shivMethods! ==! 1, digite: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e}; a.html5 = t, j (b), "objeto" == tipo de módulo && module .exports && (module.exports = t)} ("indefinido"! = tipo de janela? janela: este documento);j (b), "objeto" == tipo de módulo && module.exports && (module.exports = t)} ("indefinido"! = tipo de janela? janela: este documento);j (b), "objeto" == tipo de módulo && module.exports && (module.exports = t)} ("indefinido"! = tipo de janela? janela: este documento);

