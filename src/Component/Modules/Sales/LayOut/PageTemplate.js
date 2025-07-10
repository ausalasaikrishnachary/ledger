// Shared/PageTemplate/PageTemplate.js
import React from 'react';
import Layout from '../../Layout/Layout';

const PageTemplate = ({ 
  user, 
  tabs, 
  activeTab, 
  onTabChange, 
  children 
}) => {
  return (
    <Layout 
      user={user} 
      activeTab={activeTab} 
      onTabChange={onTabChange}
      tabs={tabs}
    >
      {children}
    </Layout>
  );
};

export default PageTemplate;