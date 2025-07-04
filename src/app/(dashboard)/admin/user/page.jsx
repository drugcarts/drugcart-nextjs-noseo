"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import { Button, Typography } from '@mui/material';
import AdminCard from '@/components/admin/card/AdminCard';
import UserTable from '@/components/admin/table/UserTable';
import UserCard from '@/components/admin/card/UserCard';
import ProductCalendar from '@/components/admin/Calender/ProductCalender';

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserCard />
      <AdminCard />
      <UserTable />
      <ProductCalendar />
    </Box>
  )
}

export default Dashboard