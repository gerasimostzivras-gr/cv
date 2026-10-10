import type { ReactNode } from "react";
import Footer from "./Footer";

interface PageProps {
  sidebar: ReactNode;
  children: ReactNode;
}

// One A4 sheet. Same size on screen and in print, so the preview matches the PDF.
export default function Page({ sidebar, children }: PageProps) {
  return (
    <div className="page relative grid grid-cols-3 grid-rows-[minmax(0,1fr)] w-[210mm] h-[297mm] shrink-0 overflow-hidden bg-white text-xs shadow-lg print:shadow-none">
      {sidebar}
      <div className="col-span-2 px-5 py-4">{children}</div>
      <Footer />
    </div>
  );
}
