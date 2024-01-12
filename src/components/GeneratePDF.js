import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import data from './data';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 12,
    marginBottom: 4,
  },
});

const MyDocument = () => {
  const { personalinfo } = data[0];
  // const { summary } = data[1];
  // const { workExperiences } = data[2];
  // const { education } = data[3];
  // const { skills } = data[4];
  // const { certifications } = data[5];
  console.log(personalinfo);
  // console.log(summary);
  // console.log(workExperiences);
  // console.log(education);
  // console.log(skills);
  // console.log(certifications);
  return (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.section}>
          <Text style={styles.heading}>Contact Information</Text>
          <View>
            <Text style={styles.content}>Full Name: {personalinfo.fullName}</Text>
            <Text style={styles.content}>Contact Number: {personalinfo.contactNumber}</Text>
            <Text style={styles.content}>Email Address: {personalinfo.emailAddress}</Text>
            <Text style={styles.content}>Physical Address: {personalinfo.physicalAddress}</Text>
            <Text style={styles.content}>LinkedIn: {personalinfo.linkedIn}</Text>
            <Text style={styles.content}>Website: {personalinfo.websiteAddress}</Text>
          </View>
        </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
)};

function GeneratePDF() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default GeneratePDF;
