/*
 *  Licence: MIT
 *
 *  Copyright 2022 hidao80
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// ==UserScript==
// @name        MisskeyTimeToAbsolute
// @description Change time to absolute notation bookmarklet for Misskey v11.
// @match       https://misskey.dev/*
// @author      hidao80
// @version     1.2
// @run-at      document-idle
// @updateURL   https://github.com/hidao80/UserScript/raw/main/MisskeyTimeToAbsolute/MisskeyTimeToAbsolute.user.js
// @downloadURL https://github.com/hidao80/UserScript/raw/main/MisskeyTimeToAbsolute/MisskeyTimeToAbsolute.user.js
// ==/UserScript==

const tag = document.createElement("style");
tag.innerText = `
.transition time::before {
content: attr(title) " (";
}
.transition time::after {
content: ")";
}
`;
document.getElementsByTagName("head").item(0).appendChild(tag);
