import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import OnPageTOC from '../docs/OnPageTOC';
import PrevNext from '../docs/PrevNext';
import BackToTop from '../docs/BackToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 pt-14">
        <Sidebar />
        <div className="flex-1 flex justify-center">
          <div className="flex w-full max-w-[1200px]">
            <main className="flex-1 min-w-0 px-6 md:px-10 py-8">
              <div className="docs-prose max-w-[800px]">
                <Outlet />
                <PrevNext />
              </div>
            </main>
            <aside className="hidden xl:block w-[200px] shrink-0 py-8 pr-6">
              <OnPageTOC />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}
