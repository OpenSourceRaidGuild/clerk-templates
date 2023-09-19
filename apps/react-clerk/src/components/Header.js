import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";
function SignUpButton() {
    const clerk = useClerk();
    return (_jsx("button", { className: "sign-up-btn", onClick: () => clerk.openSignUp({}), children: "Sign up" }));
}
function SignInButton() {
    const clerk = useClerk();
    return (_jsx("button", { className: "sign-in-btn", onClick: () => clerk.openSignIn({}), children: "Sign in" }));
}
function Header() {
    return (_jsx("header", { children: _jsxs("nav", { children: [_jsx(SignedOut, { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(SignUpButton, {}) }), _jsx("li", { children: _jsx(SignInButton, {}) })] }) }), _jsx(SignedIn, { children: _jsx(UserButton, { afterSignOutUrl: "/" }) })] }) }));
}
export default Header;
