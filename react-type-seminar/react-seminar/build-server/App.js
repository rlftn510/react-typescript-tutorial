"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const logo_svg_1 = require("./logo.svg");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const Post = (props) => {
    const nextBtn = () => {
        const nextId = parseInt(props.match.params.postId) + 1;
        props.history.push(`/posts/${nextId}`);
    };
    console.log(props);
    return (React.createElement(React.Fragment, null,
        React.createElement("h2", null,
            "post: ",
            props.match.params.postId),
        React.createElement("p", null,
            "parms : ",
            new URLSearchParams(props.location.search).get('body')),
        React.createElement("button", { onClick: nextBtn }, "\uB2E4\uC74C")));
};
const PostList = (props) => {
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: `${props.match.url}`, component: () => React.createElement("h2", null, "postList") }),
        React.createElement(react_router_dom_1.Route, { path: `${props.match.url}/:postId`, component: Post })));
};
const NotFound = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "NOT FOUND!!")));
};
const AdminPage = () => {
    const isAdmin = true;
    return (isAdmin ? React.createElement("h3", null, "ADMIN")
        : React.createElement(react_router_dom_1.Redirect, { to: "/" }));
};
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header", style: { height: '50vh' } },
                React.createElement("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }),
                React.createElement("p", null,
                    "Edit ",
                    React.createElement("code", null, "src/App.tsx"),
                    " and save to reload.")),
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { exact: true, activeStyle: { fontSize: 20 }, to: "/" }, "home")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { exact: true, activeStyle: { fontSize: 20 }, to: "/intro" }, "intro")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.NavLink, { exact: true, activeStyle: { fontSize: 20 }, to: "/admin" }, "admin")))),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: () => React.createElement("h2", null, "hello") }),
                React.createElement(react_router_dom_1.Route, { path: "/intro", render: () => React.createElement("h2", null, "intro") }),
                React.createElement(react_router_dom_1.Route, { path: "/posts", component: PostList }),
                React.createElement(react_router_dom_1.Route, { path: "/admin", component: AdminPage }),
                React.createElement(react_router_dom_1.Redirect, { from: "/about", to: "/intro" }),
                React.createElement(react_router_dom_1.Route, { component: NotFound })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map