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
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Info</Text>
        <Text style={styles.content}>Name: {data[0].personalinfo.fullName}</Text>
        <Text style={styles.content}>Contact Number: {data[0].personalinfo.contactNumber}</Text>
        <Text style={styles.content}>Email: {data[0].personalinfo.emailAddress}</Text>
        {/* Add more personal info fields */}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text style={styles.content}>{data[1].summary}</Text>
        {/* Add more summary content */}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {data[2].workExperiences.map((experience, index) => (
          <View key={index}>
            <Text style={styles.content}>Company: {experience.company}</Text>
            <Text style={styles.content}>Job Title: {experience.jobTitle}</Text>
            <Text style={styles.content}>Location: {experience.location}</Text>
            {/* Add more fields from work experience */}
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {data[3].education.map((education, index) => (
          <View key={index}>
            <Text style={styles.content}>Institution: {education.institutionName}</Text>
            <Text style={styles.content}>Degree: {education.degreeEarned}</Text>
            <Text style={styles.content}>Major: {education.major}</Text>
            {/* Add more fields from education */}
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.content}>Technical Skills: {data[4].skills.technicalSkills.join(', ')}</Text>
        <Text style={styles.content}>Soft Skills: {data[4].skills.softSkills.join(', ')}</Text>
        {/* Add more skill fields */}
      </View>

    </Page>
  </Document>
);

function GeneratePDF() {
  return <MyDocument />;
}

export default GeneratePDF;
