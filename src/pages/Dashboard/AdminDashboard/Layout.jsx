import React from 'react';
import Sidebar from '../../../components/Sidebaar';
import { Outlet } from 'react-router-dom';

export default function AdminDashboardLayout() {
  return (
    <div className="flex mt-6 h-screen bg-black">
      <Sidebar />
      <div className="flex-1 p-4 pt-20 md:p-8 md:ml-20 md:pt-24 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
} 