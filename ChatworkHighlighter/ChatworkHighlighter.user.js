/*
Licence: MIT

Copyright 2022 hidao80

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
I based my work on this article. <https://qiita.com/A-Ota/items/6a6cc8976aa3e5ae0f92>
Thank you @A-Ota!
 */

// ==UserScript==
// @name        chatwork syntax highlighter
// @description Syntax highlighting is applied to the code notation in Chatwork.
// @match       https://www.chatwork.com/
// @author      hidao80
// @version     1.0
// @namespace   https://github.com/hidao80/UserScript
// @icon        data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjQ0Ljg1NzcxIgogICBoZWlnaHQ9IjIzMy45ODI3NCIKICAgdmlld0JveD0iMCAwIDY0Ljc4NTI2OCA2MS45MDc5MzQiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzUiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgzYmY1YWUwZDI1LCAyMDIxLTA5LTIwKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ibG9nby5zdmciCiAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcaGlkYW9cT25lRHJpdmVccHJpdmF0ZVxwcm9qZWN0XGxvZ28zMi5wbmciCiAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIyMDAuNzIiCiAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIyMDAuNzIiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc3IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9InRydWUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIzLjExMDg1ODYiCiAgICAgaW5rc2NhcGU6Y3g9IjEwNi44ODM2OCIKICAgICBpbmtzY2FwZTpjeT0iMTAzLjY2OTEzIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTg0NSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDgxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSI0MzciCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjYwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMiIKICAgICB1bml0cz0icHgiCiAgICAgbG9jay1tYXJnaW5zPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzMiIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQuNDI1MTk1LC0yOS41NzIwNCkiPgogICAgPGcKICAgICAgIGlkPSJnMjgiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wMjAwMTA1LC04OS45MTYwNDMpIj4KICAgICAgPGcKICAgICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICAgIGlkPSJsYXllcjEtMiI+CiAgICAgICAgPHJlY3QKICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZjAwO3N0cm9rZS13aWR0aDowLjI2NDU4MyIKICAgICAgICAgICBpZD0icmVjdDM1NiIKICAgICAgICAgICB3aWR0aD0iMC4zNDAyMDYyMSIKICAgICAgICAgICBoZWlnaHQ9IjEuMzYwODI0OCIKICAgICAgICAgICB4PSIyOS4yNTc3MzIiCiAgICAgICAgICAgeT0iMTM0LjM4MTQ0IgogICAgICAgICAgIHJ5PSIwLjE3MDEwMzEiIC8+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9ImxheWVyMiIKICAgICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDIiPgogICAgICAgIDxyZWN0CiAgICAgICAgICAgc3R5bGU9ImZpbGw6I2M0NTcwZTtmaWxsLW9wYWNpdHk6MC43NztmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2Y5OWI1YztzdHJva2Utd2lkdGg6MDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eTowLjk4IgogICAgICAgICAgIGlkPSJyZWN0MzEtNS0wIgogICAgICAgICAgIHdpZHRoPSIxNi4xNjI5NzkiCiAgICAgICAgICAgaGVpZ2h0PSI0Ny4xOTExOTMiCiAgICAgICAgICAgeD0iMTQyLjM2MDU1IgogICAgICAgICAgIHk9Ii03Mi42MzYzOTgiCiAgICAgICAgICAgcnk9IjAiCiAgICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoOTApIgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcaGlkYW9cT25lRHJpdmVccHJpdmF0ZVxwcm9qZWN0XGxvZ28zMi5wbmciCiAgICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjEyLjU0IgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMi41NCIgLz4KICAgICAgICA8cmVjdAogICAgICAgICAgIHN0eWxlPSJmaWxsOiNmNzZlMTE7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLXdpZHRoOjAuMzI4MjkiCiAgICAgICAgICAgaWQ9InJlY3QzMSIKICAgICAgICAgICB3aWR0aD0iMTcuODU2NjY1IgogICAgICAgICAgIGhlaWdodD0iNjEuOTA3OTMyIgogICAgICAgICAgIHg9IjI1LjUxNTQ2MyIKICAgICAgICAgICB5PSIxMTkuNDg4MDgiCiAgICAgICAgICAgcnk9IjguOTI4MzMyMyIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXGhpZGFvXE9uZURyaXZlXHByaXZhdGVccHJvamVjdFxsb2dvMzIucG5nIgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMi41NCIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMTIuNTQiIC8+CiAgICAgICAgPHJlY3QKICAgICAgICAgICBzdHlsZT0iZmlsbDojZjc2ZTExO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDowLjMyODI5IgogICAgICAgICAgIGlkPSJyZWN0MzEtMyIKICAgICAgICAgICB3aWR0aD0iMTcuODU2NjY1IgogICAgICAgICAgIGhlaWdodD0iNjEuOTA3OTMyIgogICAgICAgICAgIHg9IjU0Ljc4MzI3NiIKICAgICAgICAgICB5PSIxMTkuNDg4MDgiCiAgICAgICAgICAgcnk9IjguOTI4MzMyMyIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXGhpZGFvXE9uZURyaXZlXHByaXZhdGVccHJvamVjdFxsb2dvMzIucG5nIgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMi41NCIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMTIuNTQiIC8+CiAgICAgICAgPHJlY3QKICAgICAgICAgICBzdHlsZT0iZmlsbDojYzQ1NzBlO2ZpbGwtb3BhY2l0eTowLjc3O2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDowLjIyNDQ0NCIKICAgICAgICAgICBpZD0icmVjdDMxLTciCiAgICAgICAgICAgd2lkdGg9IjExLjIyNjgwNCIKICAgICAgICAgICBoZWlnaHQ9IjQ2LjAyNDcxOSIKICAgICAgICAgICB4PSI3OC45Mjc4MzQiCiAgICAgICAgICAgeT0iMTM1LjEyNTUiCiAgICAgICAgICAgcnk9IjUuODU0NjQ5MSIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkM6XFVzZXJzXGhpZGFvXE9uZURyaXZlXHByaXZhdGVccHJvamVjdFxsb2dvMzIucG5nIgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC14ZHBpPSIxMi41NCIKICAgICAgICAgICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMTIuNTQiIC8+CiAgICAgICAgPHJlY3QKICAgICAgICAgICBzdHlsZT0iZmlsbDojZjk5YjVjO2ZpbGwtb3BhY2l0eTowLjk4O3N0cm9rZTojZjk5YjVjO3N0cm9rZS13aWR0aDoxLjIxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjAuOTgiCiAgICAgICAgICAgaWQ9InJlY3QyNjA0OCIKICAgICAgICAgICB3aWR0aD0iMTAuOTA0ODkzIgogICAgICAgICAgIGhlaWdodD0iMTAuMzY5ODA2IgogICAgICAgICAgIHg9Ijc4LjcyMDU4MSIKICAgICAgICAgICB5PSIxMjAuMTMwNSIKICAgICAgICAgICByeT0iNS4xODQ5MDMxIgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iQzpcVXNlcnNcaGlkYW9cT25lRHJpdmVccHJpdmF0ZVxwcm9qZWN0XGxvZ28zMi5wbmciCiAgICAgICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjEyLjU0IgogICAgICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIxMi41NCIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @require     https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js#sha512-yUUc0qWm2rhM7X0EFe82LNnv2moqArj5nro/w1bi05A09hRVeIZbN6jlMoyu0+4I/Bu4Ck/85JQIU82T82M28w==
// @resource    style https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/monokai.min.css#sha512-RLF8eOxhuwsRINc7r56dpl9a3VStqrXD+udWahutJrYdyh++2Ghnf+s4jFsOyryKZt/GNjPwbXVPH3MJpKrn2g==
// @resource    default https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css#sha512-hasIneQUHlh06VNBe7f6ZcHmeRTLIaQWFd43YriJ0UND19bvYRauxthDg8E4eVNPm9bRUhr5JGeqH7FRFXQu5g==
// @updateURL   https://github.com/hidao80/UserScript/raw/main/ChatworkHighlighter/ChatworkHighlighter.user.js
// @downloadURL https://github.com/hidao80/UserScript/raw/main/ChatworkHighlighter/ChatworkHighlighter.user.js
// ==/UserScript==

GM_addStyle(GM_getResourceText('style'));
GM_addStyle(GM_getResourceText('default'));

// The background color does not change, so change it manually.
// Change the COLOR and BACKGROUND to match your theme.
GM_addStyle(`
code.hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
}
`);



const observerConfig = { attributes: false, childList: true, characterData: false };
const root = document.getElementById('root');

function highlight(nodes) {
    for (const elem of nodes) {
        hljs.highlightBlock(elem);
    }
}

// Observer for root element monitoring
// Stop monitoring _timeLine elements as soon as they are found
const rootObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.target.id === 'root') {
            rootObserver.disconnect();
            const chatContent = document.getElementById('_chatContent');
            chatContentObserver.observe(chatContent, observerConfig);
        }
    };
});


// Observer for monitoring _timeLine element
const chatContentObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            const timeLine = document.getElementById('_timeLine');
            timeLineObserver.observe(timeLine.childNodes[0], observerConfig);
            highlight(document.getElementsByTagName('code'));
        }
    };
});


// Observer for monitoring _timeLine element
const timeLineObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            highlight(document.getElementsByTagName('code'));
        }
    };
});

// Start monitoring root element
rootObserver.observe(root, observerConfig);