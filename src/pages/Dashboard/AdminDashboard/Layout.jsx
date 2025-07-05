import React from 'react';
import Sidebar from '../../../components/Sidebaar';
import { Outlet } from 'react-router-dom';

export default function AdminDashboardLayout() {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex-1 p-8 ml-16 pt-24">
        <Outlet />
      </div>
    </div>
  );
} 