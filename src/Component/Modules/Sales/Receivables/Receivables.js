import React, { useState } from 'react';
import Ageing from '../Receivables/Ageing';
import OverdueReceivables from '../Receivables/OverdueReceivables';
import PartyWiseReceivables from '../Receivables/PartyWiseReceivables';
import UpcomingReveivables from '../Receivables/UpcomingReveivables';
import '../Sales.css';

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
          OverdueReceivables
        </div>
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'partyWise' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('partyWise')}
        >
          PartyWiseReceivables
        </div>
        <div 
          className={`receivables-subtab ${activeReceivablesTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleReceivablesTabClick('upcoming')}
        >
          UpcomingReveivables
        </div>
      </div>

      <div className="receivables-content">
        {activeReceivablesTab === 'ageing' && <Ageing />}
        {activeReceivablesTab === 'overdue' && <OverdueReceivables />}
        {activeReceivablesTab === 'partyWise' && <PartyWiseReceivables />}
        {activeReceivablesTab === 'upcoming' && <UpcomingReveivables />}
      </div>
    </div>
  );
};

export default Receivables;