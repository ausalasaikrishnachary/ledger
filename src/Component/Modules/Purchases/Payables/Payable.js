// // Pages/Purchase/PayablesPage.js
// import React, { useState } from 'react';
// import SalesLayout from '../../../Modules/Sales/LayOut/SalesLayout';
// import PuchaseAgeing from '../../Purchases/Payables/Ageing';
// import OverduePayables from '../../Purchases/Payables/OverduePayables';
// import PartyWisePayables from '../../Purchases/Payables/PartyWisePayables';
// import UpcomingPayables from '../../Purchases/Payables/UpcomingPayables';

// const PayablesPage = () => {
//   const [activeSubTab, setActiveSubTab] = useState('partyWisePayables');
//   const [month, setMonth] = useState('July');
//   const [year, setYear] = useState('2025');
//   const [startDate, setStartDate] = useState('2025-06-08');
//   const [endDate, setEndDate] = useState('2025-07-08');
//   const [searchTerm, setSearchTerm] = useState('');

//   const subTabs = [
//     { key: 'partyWisePayables', label: 'Party-Wise Payables' },
//     { key: 'puchaseAgeing', label: 'Ageing' },
//     { key: 'overduePayables', label: 'Over-due Payables' },
//     { key: 'upcomingPayables', label: 'Upcoming Payables' }
//   ];

//   const handleDownload = () => {};
//   const handleDownloadRange = () => {};
//   const handleCreate = () => {};

//   const renderActiveComponent = () => {
//     switch (activeSubTab) {
//       case 'partyWisePayables':
//         return <PartyWisePayables />;
//       case 'puchaseAgeing':
//         return <PuchaseAgeing />;
//       case 'overduePayables':
//         return <OverduePayables />;
//       case 'upcomingPayables':
//         return <UpcomingPayables />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <SalesLayout
//       title="Payables"
//       month={month}
//       setMonth={setMonth}
//       year={year}
//       setYear={setYear}
//       startDate={startDate}
//       setStartDate={setStartDate}
//       endDate={endDate}
//       setEndDate={setEndDate}
//       onDownload={handleDownload}
//       onDownloadRange={handleDownloadRange}
//       onCreate={handleCreate}
//       searchTerm={searchTerm}
//       setSearchTerm={setSearchTerm}
//       headers={[]} 
//       subTabs={subTabs}
//       activeSubTab={activeSubTab}
//       onSubTabClick={setActiveSubTab}
//     >
//       <tr>
//         <td colSpan="5">{renderActiveComponent()}</td>
//       </tr>
//     </SalesLayout>
//   );
// };

// export default PayablesPage;




import React, { useState } from 'react';
import PuchaseAgeing from '../../Purchases/Payables/Ageing';
import OverduePayables from '../../Purchases/Payables/OverduePayables';
import PartyWisePayables from '../../Purchases/Payables/PartyWisePayables';
import UpcomingPayables from '../../Purchases/Payables/UpcomingPayables';
// import '../Sales.css';

const Receivables = () => {
  const [activeReceivablesTab, setActiveReceivablesTab] = useState('ageing');

  const handleReceivablesTabClick = (tab) => {
    setActiveReceivablesTab(tab);
  };

  return (
    <div className="quotation-container p-3">
      <div className="receivables-tabs mb-4">
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'ageing' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('ageing')}
        >
          Ageing
        </div>
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'overdue' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('overdue')}
        >
          OverduePayables
        </div>
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'partyWise' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('partyWise')}
        >
          PartyWisePayables
        </div>
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('upcoming')}
        >
          UpcomingPayables
        </div>
      </div>

      <div className="receivables-content">
        {activeReceivablesTab === 'ageing' && <PuchaseAgeing />}
        {activeReceivablesTab === 'overdue' && <OverduePayables />}
        {activeReceivablesTab === 'partyWise' && <PartyWisePayables />}
        {activeReceivablesTab === 'upcoming' && <UpcomingPayables />}
      </div>
    </div>
  );
};

export default Receivables;