import Page from "./components/Page";
import Sidebar, { SidebarCompact } from "./components/Sidebar";
import { PageOneContent, PageTwoContent } from "./components/MainContent";

export default function App() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start gap-6 w-full p-6 print:flex-col print:flex-nowrap print:items-stretch print:gap-0 print:p-0">
      <Page sidebar={<Sidebar />}>
        <PageOneContent />
      </Page>
      <Page sidebar={<SidebarCompact />}>
        <PageTwoContent />
      </Page>
    </div>
  );
}
