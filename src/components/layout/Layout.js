import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import OnPageTOC from '../docs/OnPageTOC';
import PrevNext from '../docs/PrevNext';
import BackToTop from '../docs/BackToTop';
export default function Layout() {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Navbar, {}), _jsxs("div", { className: "flex flex-1 pt-14", children: [_jsx(Sidebar, {}), _jsx("div", { className: "flex-1 flex justify-center", children: _jsxs("div", { className: "flex w-full max-w-[1200px]", children: [_jsx("main", { className: "flex-1 min-w-0 px-6 md:px-10 py-8", children: _jsxs("div", { className: "docs-prose max-w-[800px]", children: [_jsx(Outlet, {}), _jsx(PrevNext, {})] }) }), _jsx("aside", { className: "hidden xl:block w-[200px] shrink-0 py-8 pr-6", children: _jsx(OnPageTOC, {}) })] }) })] }), _jsx(Footer, {}), _jsx(BackToTop, {})] }));
}
