import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  content: {
    fontSize: 14,
    marginBottom: 4
  }
});

const MyDocument = () => (

);

function GeneratePDF() {
  return <MyDocument />;
}

export default GeneratePDF;
