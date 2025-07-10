// ReceivablesPage.js
import React, { useState } from 'react';
import SalesLayout from '../../Layout/SalesLayout';
import Ageing from './Receivables/Ageing';
import OverdueReceivables from './Receivables/OverdueReceivables';
import PartyWiseReceivables from './Receivables/PartyWiseReceivables';
import UpcomingReveivables from './Receivables/UpcomingReveivables';

const ReceivablesPage = () => {
  const [month, setMonth] = useState('July');
  const [year, setYear] = useState('2025');
  const [startDate, setStartDate] = useState('2025-06-08');
  const [endDate, setEndDate] = useState('2025-07-08');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSubTab, setActiveSubTab] = useState('ageing');

  const subTabs = [
    { key: 'ageing', label: 'Ageing' },
    { key: 'overdue', label: 'OverdueReceivables' },
    { key: 'partyWise', label: 'PartyWiseReceivables' },
    { key: 'upcoming', label: 'UpcomingReveivables' },
  ];

  const renderActiveSubTab = () => {
    switch (activeSubTab) {
      case 'ageing':
        return <Ageing />;
      case 'overdue':
        return <OverdueReceivables />;
      case 'partyWise':
        return <PartyWiseReceivables />;
      case 'upcoming':
        return <UpcomingReveivables />;
      default:
        return null;
    }
  };

  return (
    <SalesLayout
      title="Receivables"
      month={month}
      setMonth={setMonth}
      year={year}
      setYear={setYear}
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      onDownload={() => {}}
      onDownloadRange={() => {}}
      onCreate={() => {}}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      headers={[]} // Or pass headers if needed
      entriesText="Please select a receivables tab"
      subTabs={subTabs}
      activeSubTab={activeSubTab}
      onSubTabClick={setActiveSubTab}
    >
      {/* If the sub-tab content is tabular, inject <tr> elements here */}
      {/* Else, render full sub-tab component */}
      <tr>
        <td colSpan="5">{renderActiveSubTab()}</td>
      </tr>
    </SalesLayout>
  );
};

export default ReceivablesPage;
