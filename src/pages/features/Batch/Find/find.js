import { useState, useEffect } from "react";
import {Text,  Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box, VStack,Container, Heading} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { axiosInstance } from "@/lib/axios";
import { HamburgerIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import FindTransactionForm from "@/components/traceNumber";
import Card from "@/components/card";

export default function Void() {
  const router = useRouter();

  const [transactionData, setTransactionData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTransactionFound = (data) => {
    // Handle the found transaction data
    setTransactionData(data);
    setModalOpen(true);
  };

  return (
<>

<Box bg="gray.800" py={6} px={4} boxShadow="lg" width="100%">
  <Container maxW="container.lg" textAlign="center">
    <Heading color="darkgray">Find</Heading>  
  </Container>
    </Box>
    <Card/>
    <Box bg="#222935" p={5} style={{ display: 'flex', justifyContent: 'center'}}>
      <VStack spacing={3} align="stretch" bg="#222935" p={5} justifyContent="center">


        <FindTransactionForm onTransactionFound={handleTransactionFound} />

        {transactionData && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <ModalOverlay />
          <ModalContent bg="#222935">
            <ModalHeader color= "white" textAlign="Center">Detail Transaksi</ModalHeader>
            <ModalCloseButton />
            <ModalBody color= "white">
              <p>
                <strong>TransactionId:</strong> {transactionData.id}
              </p>
              <p>
                <strong>Trace Number:</strong> {transactionData.traceNumber}
              </p>
              <p>
                <strong>Tanggal:</strong> {transactionData.date}
              </p>
              <p>
                <strong>Batch:</strong> {transactionData.batch}
              </p>
              <p>
                <strong>Ref Number:</strong> {transactionData.refNumber}
              </p>
              <p>
                <strong>Total Transaksi:</strong> {transactionData.totalHarga}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => {
                setModalOpen(false);
                router.push('/dashboard')
              }}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      </VStack>
    </Box>

    <Box bg="gray.800" color="darkgray" py={6}>
      <Container maxW="container.lg">
       <Text textAlign="center">&copy; 2023 Syaidina Arafhan & Atthariq Maulana. All rights reserved.</Text>
      </Container>
    </Box>
    </>
  );
}
