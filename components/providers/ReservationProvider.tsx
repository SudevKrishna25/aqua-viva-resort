'use client';

import React, { createContext, useContext, useState } from 'react';

interface ReservationContextType {
  isOpen: boolean;
  selectedVilla: string;
  openReservation: (villaName?: string) => void;
  closeReservation: () => void;
}

const ReservationContext = createContext<ReservationContextType>({
  isOpen: false,
  selectedVilla: '',
  openReservation: () => {},
  closeReservation: () => {},
});

export const useReservation = () => useContext(ReservationContext);

export default function ReservationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState('');

  const openReservation = (villaName?: string) => {
    if (villaName) setSelectedVilla(villaName);
    setIsOpen(true);
  };

  const closeReservation = () => {
    setIsOpen(false);
  };

  return (
    <ReservationContext.Provider
      value={{ isOpen, selectedVilla, openReservation, closeReservation }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
