// src/components/ProjectDetailsTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const projectFiles = [
  { name: 'File A', status: 'active', priority: 'high' },
  { name: 'File B', status: 'inactive', priority: 'low' },
];

const ProjectDetailsTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  if (!project) {
    // Redirect to the home page or handle the error as needed
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>{project.name} Details</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectFiles.map((file, index) => (
              <TableRow key={index}>
                <TableCell>{file.name}</TableCell>
                <TableCell>{file.status}</TableCell>
                <TableCell>{file.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectDetailsTable;
