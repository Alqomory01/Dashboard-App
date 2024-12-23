import { Mysidebar } from "./Mysidebar";
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="sm:flex min-h-screen bg-white">
        {/* Sidebar */}
        
        <Mysidebar/>
        

        
        {/* Main Content Area */}
        <div className="flex flex-col p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
