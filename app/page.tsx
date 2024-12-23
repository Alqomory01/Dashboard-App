import { Insightspanel } from "./insightspanel";
// import { Leads } from "./leads";
import Maincontent from "./maincontent";



export default function Home() {
  return (
    <>
    
    <div className=" max-w-screen overflow-x-hidden grid grid-rows-2 lg:grid-row-2 gap-3 relative">
      {/* Main Content */}
      
      <div className="">
      <Insightspanel/>
       
      </div>

      {/* Leads Panel */}
      {/* <div className=''>
        <Leads/>
      </div> */}

      {/* Insights Panel */}
      <div className=''>
      <Maincontent/>
      </div>
      
    </div>
    
    </>
  );
}

