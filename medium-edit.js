'use strict';
var _0xded2 = ["First", "Last", "href", "/", "mmt", "getElementById", "DOMContentLoaded", "location", "https://blog.masihterjaga.id/", "getAttribute", "rel", "external", "title", "Masih Terjaga Blog", "text", "Masih Terjaga", "addEventListener", "undefined", "", "page", '<li class="showpage firstpage"><a href="', '">', "</a></li>", '<li><a href="/search/label/', "?&max-results=", '<li><a href="', '"><i class="fa fa-angle-double-left"></i></a></li>', '<li><a href="#" onclick="redirectpage(', ');return false"><i class="fa fa-angle-double-left"></i></a></li>',
'<li><a href="#" onclick="redirectlabel(', '">1</a></li>', " ... ", '<li class="active">', "</li>", ');return false">', "...", ');return false"><i class="fa fa-angle-double-right"></i></a></li>', '<li class="displaypageNum lastpage"><a href="#" onclick="redirectpage(', '<li class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(', "pageArea", "getElementsByName", "blog-pager", "length", "innerHTML", "feed", "openSearch$totalResults", "/search/label/", "indexOf", "?updated-max", "substring",
"?&max", "?q=", ".html", "#PageNo=", '<script src="', 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata">\x3c/script>', "write", "label", "&max-results=", "feeds/posts/summary/-/", '?alt=json-in-script&callback=totalcountdata&max-results=1" >\x3c/script>', "head", "getElementsByTagName", "script", "createElement", "type", "text/javascript", "src", "feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script&callback=finddatepost", "setAttribute", "appendChild",
"?start-index=", "entry", "$t", "published", "/search?updated-max=", "?updated-max="];
var perPage = 6;
var numPages = 3;
var firstText = _0xded2[0];
var lastText = _0xded2[1];
var urlactivepage = location[_0xded2[2]];
var home_page = _0xded2[3];
var huh = document[_0xded2[5]](_0xded2[4]);
document[_0xded2[16]](_0xded2[6], function() {
function _0x92c3x8$jscomp$0() {
window[_0xded2[7]][_0xded2[2]] = _0xded2[8];
}
function _0x92c3x9$jscomp$0() {
if (!huh) {
_0x92c3x8$jscomp$0();
}
if (huh[_0xded2[9]](_0xded2[2]) != _0xded2[8]) {
_0x92c3x8$jscomp$0();
}
if (huh[_0xded2[9]](_0xded2[10]) != _0xded2[11]) {
_0x92c3x8$jscomp$0();
}
if (huh[_0xded2[9]](_0xded2[12]) != _0xded2[13]) {
_0x92c3x8$jscomp$0();
}
if (huh[_0xded2[14]] != _0xded2[15]) {
_0x92c3x8$jscomp$0();
}
}
_0x92c3x9$jscomp$0();
});
if (typeof firstText == _0xded2[17]) {
firstText = _0xded2[0];
}
if (typeof lastText == _0xded2[17]) {
lastText = _0xded2[1];
}
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();
function looppagecurrentg(_0x92c3xf$jscomp$0) {
var _0x92c3x10$jscomp$0 = _0xded2[18];
pageNumber = parseInt(numPages / 2);
if (pageNumber == numPages - pageNumber) {
numPages = pageNumber * 2 + 1;
}
pageStart = currentPageNo - pageNumber;
if (pageStart < 1) {
pageStart = 1;
}
lastPageNo = parseInt(_0x92c3xf$jscomp$0 / perPage) + 1;
if (lastPageNo - 1 == _0x92c3xf$jscomp$0 / perPage) {
lastPageNo = lastPageNo - 1;
}
pageEnd = pageStart + numPages - 1;
if (pageEnd > lastPageNo) {
pageEnd = lastPageNo;
}
var _0x92c3x11$jscomp$0 = parseInt(currentPageNo) - 1;
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[20] + home_page + _0xded2[21] + firstText + _0xded2[22]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[23] + postLabel + _0xded2[24] + perPage + _0xded2[21] + firstText + _0xded2[22]);
}
if (currentPageNo == 3) {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[25] + home_page + _0xded2[26]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[23] + postLabel + _0xded2[24] + perPage + _0xded2[26]);
}
} else {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[27] + _0x92c3x11$jscomp$0 + _0xded2[28]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[29] + _0x92c3x11$jscomp$0 + _0xded2[28]);
}
}
if (pageStart > 1) {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[25] + home_page + _0xded2[30]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[23] + postLabel + _0xded2[24] + perPage + _0xded2[30]);
}
}
if (pageStart > 2) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + _0xded2[31];
}
var _0x92c3x12$jscomp$0 = pageStart;
for (; _0x92c3x12$jscomp$0 <= pageEnd; _0x92c3x12$jscomp$0++) {
if (currentPageNo == _0x92c3x12$jscomp$0) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[32] + _0x92c3x12$jscomp$0 + _0xded2[33]);
} else {
if (_0x92c3x12$jscomp$0 == 1) {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[25] + home_page + _0xded2[30]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[23] + postLabel + _0xded2[24] + perPage + _0xded2[30]);
}
} else {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[27] + _0x92c3x12$jscomp$0 + _0xded2[34] + _0x92c3x12$jscomp$0 + _0xded2[22]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[29] + _0x92c3x12$jscomp$0 + _0xded2[34] + _0x92c3x12$jscomp$0 + _0xded2[22]);
}
}
}
}
if (pageEnd < lastPageNo - 1) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + _0xded2[35];
}
if (pageEnd < lastPageNo) {
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[27] + lastPageNo + _0xded2[34] + lastPageNo + _0xded2[22]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[29] + lastPageNo + _0xded2[34] + lastPageNo + _0xded2[22]);
}
}
var _0x92c3x13$jscomp$0 = parseInt(currentPageNo) + 1;
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[27] + _0x92c3x13$jscomp$0 + _0xded2[36]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[29] + _0x92c3x13$jscomp$0 + _0xded2[36]);
}
if (currentPage == _0xded2[19]) {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[37] + lastPageNo + _0xded2[34] + lastText + _0xded2[22]);
} else {
_0x92c3x10$jscomp$0 = _0x92c3x10$jscomp$0 + (_0xded2[38] + lastPageNo + _0xded2[34] + lastText + _0xded2[22]);
}
var _0x92c3x14$jscomp$0 = document[_0xded2[40]](_0xded2[39]);
var _0x92c3x15$jscomp$0 = document[_0xded2[5]](_0xded2[41]);
var _0x92c3x16$jscomp$0 = 0;
for (; _0x92c3x16$jscomp$0 < _0x92c3x14$jscomp$0[_0xded2[42]]; _0x92c3x16$jscomp$0++) {
_0x92c3x14$jscomp$0[_0x92c3x16$jscomp$0][_0xded2[43]] = _0x92c3x10$jscomp$0;
}
if (_0x92c3x14$jscomp$0 && _0x92c3x14$jscomp$0[_0xded2[42]] > 0) {
_0x92c3x10$jscomp$0 = _0xded2[18];
}
if (_0x92c3x15$jscomp$0) {
_0x92c3x15$jscomp$0[_0xded2[43]] = _0x92c3x10$jscomp$0;
}
}
function totalcountdata(_0x92c3x18$jscomp$0) {
var _0x92c3x19$jscomp$0 = _0x92c3x18$jscomp$0[_0xded2[44]];
var _0x92c3x1a$jscomp$0 = parseInt(_0x92c3x19$jscomp$0[_0xded2[45]].$t, 10);
looppagecurrentg(_0x92c3x1a$jscomp$0);
}
function pagecurrentg() {
var _0x92c3x8$jscomp$1 = urlactivepage;
if (_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[46]) != -1) {
if (_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[48]) != -1) {
postLabel = _0x92c3x8$jscomp$1[_0xded2[49]](_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[46]) + 14, _0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[48]));
} else {
postLabel = _0x92c3x8$jscomp$1[_0xded2[49]](_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[46]) + 14, _0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[50]));
}
}
if (_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[51]) == -1 && _0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[52]) == -1) {
if (_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[46]) == -1) {
currentPage = _0xded2[19];
if (urlactivepage[_0xded2[47]](_0xded2[53]) != -1) {
currentPageNo = urlactivepage[_0xded2[49]](urlactivepage[_0xded2[47]](_0xded2[53]) + 8, urlactivepage[_0xded2[42]]);
} else {
currentPageNo = 1;
}
document[_0xded2[56]](_0xded2[54] + home_page + _0xded2[55]);
} else {
currentPage = _0xded2[57];
if (_0x92c3x8$jscomp$1[_0xded2[47]](_0xded2[58]) == -1) {
perPage = 20;
}
if (urlactivepage[_0xded2[47]](_0xded2[53]) != -1) {
currentPageNo = urlactivepage[_0xded2[49]](urlactivepage[_0xded2[47]](_0xded2[53]) + 8, urlactivepage[_0xded2[42]]);
} else {
currentPageNo = 1;
}
document[_0xded2[56]](_0xded2[54] + home_page + _0xded2[59] + postLabel + _0xded2[60]);
}
}
}
function redirectpage(_0x92c3x18$jscomp$1) {
jsonstart = (_0x92c3x18$jscomp$1 - 1) * perPage;
noPage = _0x92c3x18$jscomp$1;
var _0x92c3x1a$jscomp$1 = document[_0xded2[62]](_0xded2[61])[0];
var _0x92c3x19$jscomp$1 = document[_0xded2[64]](_0xded2[63]);
_0x92c3x19$jscomp$1[_0xded2[65]] = _0xded2[66];
_0x92c3x19$jscomp$1[_0xded2[70]](_0xded2[67], home_page + _0xded2[68] + jsonstart + _0xded2[69]);
_0x92c3x1a$jscomp$1[_0xded2[71]](_0x92c3x19$jscomp$1);
}
function redirectlabel(_0x92c3x18$jscomp$2) {
jsonstart = (_0x92c3x18$jscomp$2 - 1) * perPage;
noPage = _0x92c3x18$jscomp$2;
var _0x92c3x1a$jscomp$2 = document[_0xded2[62]](_0xded2[61])[0];
var _0x92c3x19$jscomp$2 = document[_0xded2[64]](_0xded2[63]);
_0x92c3x19$jscomp$2[_0xded2[65]] = _0xded2[66];
_0x92c3x19$jscomp$2[_0xded2[70]](_0xded2[67], home_page + _0xded2[59] + postLabel + _0xded2[72] + jsonstart + _0xded2[69]);
_0x92c3x1a$jscomp$2[_0xded2[71]](_0x92c3x19$jscomp$2);
}
function finddatepost(_0x92c3x1f$jscomp$0) {
post = _0x92c3x1f$jscomp$0[_0xded2[44]][_0xded2[73]][0];
var _0x92c3x19$jscomp$3 = post[_0xded2[75]][_0xded2[74]][_0xded2[49]](0, 19) + post[_0xded2[75]][_0xded2[74]][_0xded2[49]](23, 29);
var _0x92c3x20$jscomp$0 = encodeURIComponent(_0x92c3x19$jscomp$3);
if (currentPage == _0xded2[19]) {
var _0x92c3x18$jscomp$3 = _0xded2[76] + _0x92c3x20$jscomp$0 + _0xded2[58] + perPage + _0xded2[53] + noPage;
} else {
_0x92c3x18$jscomp$3 = _0xded2[46] + postLabel + _0xded2[77] + _0x92c3x20$jscomp$0 + _0xded2[58] + perPage + _0xded2[53] + noPage;
}
location[_0xded2[2]] = _0x92c3x18$jscomp$3;
}
;