// src/components/ProjectsTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const projects = [
  { name: 'Project A', role: 'Admin', creationDate: '2023-01-01', status: 'active' },
  { name: 'Project B', role: 'User', creationDate: '2023-02-01', status: 'inactive' },
];

const ProjectsTable = () => {
  const navigate = useNavigate();

  const handleRowClick = (project) => {
    navigate('/page2', { state: { project } });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index} onClick={() => handleRowClick(project)}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.role}</TableCell>
              <TableCell>{project.creationDate}</TableCell>
              <TableCell>{project.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;
