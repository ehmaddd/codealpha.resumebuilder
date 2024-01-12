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

const ContactInfoSection = ({ contactInfo }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Contact Information</Text>
    {contactInfo ? (
      <>
        <Text style={styles.content}>Name: {contactInfo.fullName}</Text>
        <Text style={styles.content}>Contact Number: {contactInfo.contactNumber}</Text>
        <Text style={styles.content}>Email: {contactInfo.emailAddress}</Text>
        <Text style={styles.content}>LinkedIn: {contactInfo.linkedinProfile}</Text>
      </>
    ) : (
      <Text style={styles.content}>No contact information available</Text>
    )}
  </View>
);

const SummarySection = ({ summary }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Professional Summary</Text>
    {summary ? <Text style={styles.content}>{summary}</Text> : <Text style={styles.content}>No summary available</Text>}
  </View>
);

const ExperienceSection = ({ workExperiences }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Work Experience</Text>
    {workExperiences.length > 0 ? (
      workExperiences.map((experience, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={styles.content}>
            {experience.jobTitle} | {experience.company}, {experience.location} | {experience.startDate} - {experience.endDate}
          </Text>
          <Text style={styles.content}>{experience.responsibilities}</Text>
        </View>
      ))
    ) : (
      <Text style={styles.content}>No work experience available</Text>
    )}
  </View>
);

const EducationSection = ({ education }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Education</Text>
    {education.length > 0 ? (
      education.map((edu, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={styles.content}>
            {edu.degreeEarned} in {edu.major} | {edu.institutionName}, {edu.location} | {edu.graduationDate}
          </Text>
          <Text style={styles.content}>{edu.relevantCoursework}</Text>
        </View>
      ))
    ) : (
      <Text style={styles.content}>No education information available</Text>
    )}
  </View>
);

const SkillsSection = ({ skills }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Skills</Text>
    {skills ? (
      <>
        <Text style={styles.content}>
          <strong>Technical Skills:</strong> {skills.technicalSkills.join(', ')}
        </Text>
        <Text style={styles.content}>
          <strong>Soft Skills:</strong> {skills.softSkills.join(', ')}
        </Text>
      </>
    ) : (
      <Text style={styles.content}>No skills information available</Text>
    )}
  </View>
);

const CertificationsSection = ({ certifications }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>Certifications</Text>
    {certifications.length > 0 ? (
      certifications.map((certification, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={styles.content}>
            {certification.name} | {certification.issuingOrganization}, {certification.date}
          </Text>
        </View>
      ))
    ) : (
      <Text style={styles.content}>No certifications available</Text>
    )}
  </View>
);

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <ContactInfoSection contactInfo={data[0]?.contactInfo} />
      <SummarySection summary={data[1]?.summary} />
      <ExperienceSection workExperiences={data[2]?.workExperiences} />
      <EducationSection education={data[3]?.education} />
      <SkillsSection skills={data[4]?.skills} />
      <CertificationsSection certifications={data[5]?.certifications} />
    </Page>
  </Document>
);

function GeneratePDF() {
  return <MyDocument />;
}

export default GeneratePDF;
