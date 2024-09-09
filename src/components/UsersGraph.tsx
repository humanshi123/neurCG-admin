import React from 'react';
import {  Typography, Card } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const userData = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 10000 },
  { name: 'Mar', value: 15000 },
  { name: 'Apr', value: 30000 },
  { name: 'May', value: 18000 },
  { name: 'Jun', value: 25000 },
  { name: 'Jul', value: 15000 },
  { name: 'Aug', value: 20000 },
  { name: 'Sep', value: 35000 },
  { name: 'Nov', value: 45000 },
  { name: 'Dec', value: 30000 }
];

const UsersGraph: React.FC = () => {
  return (
    <Card sx={{ p: 2, borderRadius: '10px', boxShadow: '0'  }}>
      <Typography variant="h6" gutterBottom>
        Users
      </Typography>
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={userData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="0 3" />
          <Tooltip />
          <Area type="monotone" dataKey="value" strokeWidth={2} stroke="#E87223" fill="#F6C6A64D" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default UsersGraph;
