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
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/getting-started/installation" element={<Installation />} />
        <Route path="/getting-started/quick-start" element={<QuickStart />} />
        <Route path="/api/use-debug-state" element={<UseDebugState />} />
        <Route path="/api/debug-watcher" element={<DebugWatcherPage />} />
        <Route path="/api/console-capture" element={<ConsoleCapture />} />
        <Route path="/api/server-logs" element={<ServerLogs />} />
        <Route path="/api/window-controls" element={<WindowControls />} />
        <Route path="/api/debug-store" element={<DebugStore />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/how-it-works/production" element={<ProductionBehavior />} />
        <Route path="/faq/patterns" element={<CommonPatterns />} />
        <Route path="/faq/troubleshooting" element={<Troubleshooting />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
