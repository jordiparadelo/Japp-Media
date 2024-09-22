'use client';

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Button } from '@/components/ui';

// Updated fake data with notes
const initialClients = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', phone: '123-456-7890', status: 'Activo', notes: '' },
  { id: 2, name: 'María García', email: 'maria@example.com', phone: '098-765-4321', status: 'Inactivo', notes: '' },
  { id: 3, name: 'Carlos López', email: 'carlos@example.com', phone: '555-555-5555', status: 'Pendiente', notes: '' },
];

const ClientDashboard: React.FC = () => {
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState<typeof initialClients[0] | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProspects = async () => {
      try {
        const response = await fetch('/api/prospects');
        if (response.ok) {
          const data = await response.json();
          setClients([...initialClients, ...data.prospects]);
        }
      } catch (error) {
        console.error('Error fetching prospects:', error);
      }
    };

    fetchProspects();
  }, []);

  const handleRowClick = (client: typeof initialClients[0]) => {
    setSelectedClient(client);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (selectedClient) {
      setClients(clients.map(client => 
        client.id === selectedClient.id ? selectedClient : client
      ));
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (selectedClient) {
      setSelectedClient({
        ...selectedClient,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <div className="flex">
      <div className="w-3/4 pr-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Teléfono</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} onClick={() => handleRowClick(client)} className="cursor-pointer hover:bg-gray-100">
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedClient && (
        <div className="w-1/4 pl-4 border-l">
          <h2 className="text-xl font-semibold mb-4">Detalles del Cliente</h2>
          {isEditing ? (
            <>
              <input name="name" value={selectedClient.name} onChange={handleInputChange} className="w-full mb-2 p-1 border rounded" />
              <input name="email" value={selectedClient.email} onChange={handleInputChange} className="w-full mb-2 p-1 border rounded" />
              <input name="phone" value={selectedClient.phone} onChange={handleInputChange} className="w-full mb-2 p-1 border rounded" />
              <input name="status" value={selectedClient.status} onChange={handleInputChange} className="w-full mb-2 p-1 border rounded" />
              <textarea 
                name="notes" 
                value={selectedClient.notes} 
                onChange={handleInputChange} 
                className="w-full mb-2 p-1 border rounded" 
                placeholder="Notas (ej: Llamar en un mes)"
              />
              <Button onClick={handleSaveClick} className="mt-4">Guardar</Button>
            </>
          ) : (
            <>
              <p><strong>Nombre:</strong> {selectedClient.name}</p>
              <p><strong>Email:</strong> {selectedClient.email}</p>
              <p><strong>Teléfono:</strong> {selectedClient.phone}</p>
              <p><strong>Estado:</strong> {selectedClient.status}</p>
              <p><strong>Notas:</strong> {selectedClient.notes || 'Sin notas'}</p>
              <Button onClick={handleEditClick} className="mt-4">Editar Cliente</Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;