// app/providers.tsx
'use client'

import { ReactNode } from 'react';
import { ChakraProvider } from "@chakra-ui/react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}