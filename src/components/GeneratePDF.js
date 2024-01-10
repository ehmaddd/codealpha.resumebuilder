import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecoration: 'underline',
  },
  content: {
    fontSize: 14,
    marginBottom: 4,
  },
});

const PersonalInfoSection = ({ personalInfo }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Personal Info</Text>
    <Text style={styles.content}>Name: {personalInfo.fullName}</Text>
    <Text style={styles.content}>Contact Number: {personalInfo.contactNumber}</Text>
    <Text style={styles.content}>Email: {personalInfo.emailAddress}</Text>
    {/* Add more personal info fields */}
  </View>
);

const SummarySection = ({ summary }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Summary</Text>
    <Text style={styles.content}>{summary}</Text>
    {/* Add more summary content */}
  </View>
);

const ExperienceSection = ({ workExperiences }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Experience</Text>
    {workExperiences.map((experience, index) => (
      <View key={index} style={{ marginBottom: 10 }}>
        <Text style={styles.content}>{experience.jobTitle} | {experience.company}, {experience.location} | {experience.startDate} - {experience.endDate}</Text>
        {/* Add more fields from work experience */}
        {/* Description of responsibilities and achievements */}
        <Text style={styles.content}>{experience.responsibilities}</Text>
      </View>
    ))}
  </View>
);

const EducationSection = ({ education }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Education</Text>
    {education.map((edu, index) => (
      <View key={index} style={{ marginBottom: 10 }}>
        <Text style={styles.content}>{edu.degreeEarned} in {edu.major} | {edu.institutionName}, {edu.location} | {edu.graduationDate}</Text>
        {/* Add more fields from education */}
        {/* Relevant coursework and any honors/awards */}
        <Text style={styles.content}>{edu.relevantCoursework}</Text>
      </View>
    ))}
  </View>
);

const SkillsSection = ({ skills }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Skills</Text>
    <Text style={styles.content}><strong>Technical Skills:</strong> {skills.technicalSkills.join(', ')}</Text>
    <Text style={styles.content}><strong>Soft Skills:</strong> {skills.softSkills.join(', ')}</Text>
    {/* Add more skill fields */}
  </View>
);

const CertificationsSection = ({ certifications }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Certifications</Text>
    {certifications.map((certification, index) => (
      <View key={index} style={{ marginBottom: 10 }}>
        <Text style={styles.content}>{certification.name} | {certification.issuingOrganization}, {certification.date}</Text>
        {/* Add more fields from certifications */}
      </View>
    ))}
  </View>
);

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <PersonalInfoSection personalInfo={data[0].personalinfo} />
      <SummarySection summary={data[1].summary} />
      <ExperienceSection workExperiences={data[2].workExperiences} />
      <EducationSection education={data[3].education} />
      <SkillsSection skills={data[4].skills} />
      <CertificationsSection certifications={data[5].certifications} />
    </Page>
  </Document>
);

function GeneratePDF() {
  return <MyDocument />;
}

export default GeneratePDF;
