import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Features from './pages/Features';
import Installation from './pages/Installation';
import QuickStart from './pages/QuickStart';
import UseDebugState from './pages/api/UseDebugState';
import DebugWatcherPage from './pages/api/DebugWatcher';
import ConsoleCapture from './pages/api/ConsoleCapture';
import ServerLogs from './pages/api/ServerLogs';
import WindowControls from './pages/api/WindowControls';
import DebugStore from './pages/api/DebugStore';
import HowItWorks from './pages/HowItWorks';
import ProductionBehavior from './pages/ProductionBehavior';
import CommonPatterns from './pages/CommonPatterns';
import Troubleshooting from './pages/Troubleshooting';
import NotFound from './pages/NotFound';
export default function App() {
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/features", element: _jsx(Features, {}) }), _jsx(Route, { path: "/getting-started/installation", element: _jsx(Installation, {}) }), _jsx(Route, { path: "/getting-started/quick-start", element: _jsx(QuickStart, {}) }), _jsx(Route, { path: "/api/use-debug-state", element: _jsx(UseDebugState, {}) }), _jsx(Route, { path: "/api/debug-watcher", element: _jsx(DebugWatcherPage, {}) }), _jsx(Route, { path: "/api/console-capture", element: _jsx(ConsoleCapture, {}) }), _jsx(Route, { path: "/api/server-logs", element: _jsx(ServerLogs, {}) }), _jsx(Route, { path: "/api/window-controls", element: _jsx(WindowControls, {}) }), _jsx(Route, { path: "/api/debug-store", element: _jsx(DebugStore, {}) }), _jsx(Route, { path: "/how-it-works", element: _jsx(HowItWorks, {}) }), _jsx(Route, { path: "/how-it-works/production", element: _jsx(ProductionBehavior, {}) }), _jsx(Route, { path: "/faq/patterns", element: _jsx(CommonPatterns, {}) }), _jsx(Route, { path: "/faq/troubleshooting", element: _jsx(Troubleshooting, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
