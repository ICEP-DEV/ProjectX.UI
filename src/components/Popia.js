import React from 'react';
import Footer from './Footer'; 
import NavbarLogged from '../LoggedPages/NavbarLogged';
import { grey } from '@mui/material/colors';

const Popia= () => {
  return (
    <div className="popia-page">
      <NavbarLogged /> 

      <div className="container mt-5">
        <h1>Protection of Personal Information Act (POPIA)</h1>
        <p><b>1. Introduction</b><br /><br />
          Tshwane University of Technology (TUT) is committed to lawful processing and safeguarding of personal information in line with the requirements of the Protection of Personal Information Act, No. 4 of 2013 (POPIA). This statement regulates the manner in which we collect, use, disclose, transfer, and store your personal information.
        </p>
        <p><b>Deputy Information Officer</b><br /><br />
          The TUT’s Deputy Information Officer’s contact details are as follows:
        </p>
        <p><b>Physical Address:</b><br />
          Staatsartillerie Road <br />
          Pretoria West <br />
          Pretoria <br />
          0183
        </p>
        <p><b>Email:</b> <a style={{color:'#ce1127'}} href="mailto:popia@tut.ac.za">popia@tut.ac.za</a></p><br></br><br></br>

        <p><b>2. What is Personal Information</b><br></br><br></br>
          The Protection of Personal Information Act No. 4 of 2013 defines personal information as the information relating to an identifiable, living natural person, and where it is applicable, an identifiable, existing juristic person, including but not limited to:
        </p>
        <ul>
          <li>(a) information relating to the race, gender, sex, pregnancy, marital status, national, ethnic or social origin, colour, sexual orientation, age, physical or mental health, well-being, disability, religion, conscience, belief, culture, language, and birth of a person;</li>
          <li>(b) information relating to the education or the medical, financial, criminal or employment history of the person;</li>
          <li>(c) any identifying number, symbol, e-mail address, physical address, telephone number, location information, online identifier, or other particular assignment to the person;</li>
          <li>(d) the biometric information of the person;</li>
          <li>(e) the personal opinions, views or preferences of the person;</li>
          <li>(f) correspondence sent by the person that is implicitly or explicitly of a private or confidential nature or further correspondence that would reveal the contents of the original correspondence;</li>
          <li>(g) the views or opinions of another individual about the person; and the name of the person if it appears with other personal information relating to the person or if the disclosure of the name itself would reveal information about the person;</li>
          <li>(h) the name of the person if it appears with other personal information relating to the person or if the disclosure of the name itself would reveal information about the person.</li>
        </ul><br></br><br></br>

        <p><b>3. What type of personal information and why do we collect it from you?</b></p><br></br>
        <ul>
          <li>The University collects different types of personal information; this may include but is not limited to your name/s and surname, identity number, physical address, cell phone number, banking details, email address, race, gender, biometric information, nationality, age, next of kin, photographs, and academic qualifications/results.</li>
          <li>We collect personal data in order to, amongst other things:</li>
        </ul>
        <p>
          (a) process academic enrolment, admissions, recruitment and provide teaching and learning and related activities; <br />
          (b) process staff recruitment; <br />
          (c) provide you with the information you have requested; <br />
          (d) process vendor registration forms; and <br />
          (e) communicate with you about events, activities and opportunities at the University.
        </p><br></br><br></br>
         
        <p><b>4. Where and how do we collect your personal information</b><br></br><br></br>
    The University collects your information in different ways prior to and during its relationship with you. These will include:&nbsp;<br></br>
   </p>
  <ul>
    <li>&bull; Information you provide directly to us such as through the enquiry (website, e-mail, telephone, or campus visit).</li>
    <li>&bull; Information collected through application forms and documents provided as part of an application, for example, student application for enrolment, employment application, and vendor registration process.</li>
    <li>&bull; Information collected through any correspondence with you during the application process.</li>
    <li>&bull; Information collected through interviews or other admissions assessments.</li>
    <li>&bull; Information provided by other sources such as the Department of Basic Education and employment agencies.</li>
  </ul>
       <br></br><br></br>
        
        <p><b>5. Legal basis of processing personal information</b><br></br><br></br>
         We shall process personal information under the following circumstances:&nbsp;<br></br>
        </p>
       <ul>
        <li>&bull; When we have consent;</li>
        <li> &bull; If the processing is necessary for the performance of public law duty by a public body;</li>
        <li> &bull; Conclusion or performance of a contract to which the owner of the information is a party;</li>
        <li> &bull; Necessary for compliance obligations imposed by the law on TUT;</li>
        <li> &bull; Protecting a legitimate interest of the data subject; and</li>
        <li> &bull; Protecting a legitimate interest of TUT or a third party.</li>
      </ul><br></br>
        
      <p><b>6. Sharing of information</b><br></br><br></br>
      We will not share your personal information with third parties unless we have considered all the legal basis of sharing such personal information. In the event that we transfer your personal information outside of the borders of South Africa, we will verify if the third-party recipient is subject to a law or binding agreement which provides an acceptable level of protection for your personal information.&nbsp;&nbsp;<br></br>
      </p><br></br>

      <p><b>7. How long do we keep your data?</b><br></br>
      <br></br>The University will retain your personal information in line with the legal requirements or where there is a business need. Retention timeframes will be determined in line with the University’s Policy on Records Management.&nbsp;&nbsp;</p>
      
      <br></br><p><b>8. Information Security</b><br></br>
      <br></br>The University takes information security extremely serious and has implemented appropriate technical and organisational measures to protect personal information. Access to information is highly restricted and security procedures are continually enhanced to ensure their continued suitability.&nbsp;</p>

      <br></br><p><b>9. Rights of the data subject</b><br></br>
      <br></br>You have the right to access your data, a right to rectification/update of your personal information held by TUT, a right to lodge a complaint and also a right to withdraw consent.&nbsp;&nbsp;</p>
      
      <br></br><p><b>10. Changes to this privacy statement</b>
      <br></br><br></br>This privacy statement was last updated on 4 January 2024 and replaces any preceding privacy statements.
      The University may update this privacy statement at any time by publishing an updated version on the University’s website. When changes are made to this privacy statement the University will amend the revision date on the website as well as in the privacy statement. The amended privacy statement will apply from that revision date. Therefore, we encourage all data subjects to review our privacy statement periodically to be informed about how we are protecting personal information.&nbsp;</p>
      <br></br><br></br>

      </div>
      <Footer /> 
    </div>
  );
};

export default Popia;
