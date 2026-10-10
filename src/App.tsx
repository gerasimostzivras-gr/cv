import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="max-w-4xl mx-auto grid grid-cols-3 bg-white text-xs print:text-xs print:m-0 print:p-0 print:max-w-full h-screen print:h-full overflow-hidden">
        {/* Blue Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <MainContent />
      </main>
      <Footer />
    </>
  );
}
