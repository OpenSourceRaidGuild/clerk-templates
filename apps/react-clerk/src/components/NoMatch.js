import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
function NoMatch() {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Page not found - 404" }), _jsx("p", { children: _jsx(Link, { to: "/", children: "Go to the home page" }) })] }));
}
export default NoMatch;
