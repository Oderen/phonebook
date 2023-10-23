import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ height: '100%' }}>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
