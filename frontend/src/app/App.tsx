import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { ProgramsAdmissions } from '@/app/pages/ProgramsAdmissionsPage';
import { BSCA } from '@/app/pages/programs/BSCA';
import { MSCA } from '@/app/pages/programs/MSCA';
import { BSECT } from '@/app/pages/programs/BSECT';
import { EmbeddedSystemsTrack } from '@/app/pages/programs/tracks/EmbeddedSystemsTrack';
import { IoTTrack } from '@/app/pages/programs/tracks/IoTTrack';
import { Students } from '@/app/pages/StudentsPage';
import { StudentProjects } from '@/app/pages/StudentProjectsPage';
import { Alumni } from '@/app/pages/AlumniPage';
import { AdmissionsUndergrad } from '@/app/pages/AdmissionsUndergrad';
import { AdmissionsGrad } from '@/app/pages/AdmissionsGrad';
import { Faculty } from '@/app/pages/Faculty';
import { FacultyProfile } from '@/app/pages/FacultyProfile';
import { FacultyContact } from '@/app/pages/FacultyContact';
import { Resources } from '@/app/pages/ResourcesPage';
import { Career } from '@/app/pages/Career';
import { Research } from '@/app/pages/Research';
import { Extension } from '@/app/pages/Extension';
import { Contact } from '@/app/pages/Contact';
import { News } from '@/app/pages/News';
import { Developers } from '@/app/pages/Developers';

// Newly Generated Placeholder Imports
import { VMGOPage } from '@/app/pages/about/VMGO';
import { HistoryPage } from '@/app/pages/about/History';
import { ChairMessagePage } from '@/app/pages/about/ChairMessage';
import { OrganizationPage } from '@/app/pages/about/Organization';
import { FacultyStaffPage } from '@/app/pages/about/FacultyStaff';
import { ContactPage } from '@/app/pages/about/Contact';
import { LocationPage } from '@/app/pages/about/Location';

import { AllProgramsPage } from '@/app/pages/programs/AllPrograms';

import { FocusAreasPage } from '@/app/pages/research/FocusAreas';
import { FocusAreaDetailPage } from '@/app/pages/research/FocusAreaDetail';
import { FacultyProfilesPage } from '@/app/pages/research/FacultyProfiles';
import { FacultyResearchDetailPage } from '@/app/pages/research/FacultyResearchDetail';
import { FacultyProjectDetailPage } from '@/app/pages/research/FacultyProjectDetail';
import { ResearchProjectsPage } from '@/app/pages/research/ResearchProjects';
import { PublicationsPage } from '@/app/pages/research/Publications';
import { LabsPage } from '@/app/pages/research/Labs';
import { StudentResearchPage } from '@/app/pages/research/StudentResearch';
import { StudentResearchDetailPage } from '@/app/pages/research/StudentResearchDetail';
import { CollaborationsPage } from '@/app/pages/research/Collaborations';
import { MetricsPage } from '@/app/pages/research/Metrics';

import { ExtensionProgramsPage } from '@/app/pages/extension/Programs';
import { PartnershipsPage } from '@/app/pages/extension/Partnerships';
import { TechTransferPage } from '@/app/pages/extension/TechTransfer';
import { ServiceProjectsPage } from '@/app/pages/extension/ServiceProjects';
import { ImpactPage } from '@/app/pages/extension/Impact';

import { QualificationsPage } from '@/app/pages/faculty/Qualifications';
import { FacultyAchievementsPage } from '@/app/pages/faculty/Achievements';
import { FacultyDevelopmentPage } from '@/app/pages/faculty/Development';

import { CurrentStudentsPage } from '@/app/pages/students/CurrentStudents';
import { ProspectiveStudentsPage } from '@/app/pages/students/ProspectiveStudents';
import { StudentOrganizationsPage } from '@/app/pages/students/Organizations';

import { AdmissionsMainPage } from '@/app/pages/admissions/AdmissionsPage';
import { RequestInfoPage } from '@/app/pages/admissions/RequestInfo';
import { ApplyPage } from '@/app/pages/admissions/Apply';

import { ScrollToTop } from '@/app/components/ScrollToTop';
import { NotFound } from '@/app/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vmgo" element={<VMGOPage />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/chair-message" element={<ChairMessagePage />} />
          <Route path="/about/organization" element={<OrganizationPage />} />
          <Route path="/about/faculty-staff" element={<FacultyStaffPage />} />
          <Route path="/about/contact" element={<ContactPage />} />
          <Route path="/about/location" element={<LocationPage />} />
          
          {/* Programs */}
          <Route path="/programs-admissions" element={<ProgramsAdmissions />} />
          <Route path="/programs" element={<AllProgramsPage />} />
          <Route path="/programs/bsca" element={<BSCA />} />
          <Route path="/programs/msca" element={<MSCA />} />
          <Route path="/programs/bsect" element={<BSECT />} />
          <Route path="/programs/bsca/embedded-systems" element={<EmbeddedSystemsTrack />} />
          <Route path="/programs/bsca/iot" element={<IoTTrack />} />
          
          {/* Research */}
          <Route path="/research" element={<Research />} />
          <Route path="/research/focus-areas" element={<FocusAreasPage />} />
          <Route path="/research/focus-areas/:slug" element={<FocusAreaDetailPage />} />
          <Route path="/research/faculty-profiles" element={<FacultyProfilesPage />} />
          <Route path="/research/faculty-profiles/:id" element={<FacultyResearchDetailPage />} />
          <Route path="/research/projects" element={<ResearchProjectsPage />} />
          <Route path="/research/projects/:id" element={<FacultyProjectDetailPage />} />
          <Route path="/research/publications" element={<PublicationsPage />} />
          <Route path="/research/labs" element={<LabsPage />} />
          <Route path="/research/student-research" element={<StudentResearchPage />} />
          <Route path="/research/student-research/:id" element={<StudentResearchDetailPage />} />
          <Route path="/research/collaborations" element={<CollaborationsPage />} />
          <Route path="/research/metrics" element={<MetricsPage />} />
          
          {/* Extension */}
          <Route path="/extension" element={<Extension />} />
          <Route path="/extension/programs" element={<ExtensionProgramsPage />} />
          <Route path="/extension/partnerships" element={<PartnershipsPage />} />
          <Route path="/extension/tech-transfer" element={<TechTransferPage />} />
          <Route path="/extension/service-projects" element={<ServiceProjectsPage />} />
          <Route path="/extension/impact" element={<ImpactPage />} />
          
          {/* Faculty */}
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/qualifications" element={<QualificationsPage />} />
          <Route path="/faculty/achievements" element={<FacultyAchievementsPage />} />
          <Route path="/faculty/development" element={<FacultyDevelopmentPage />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/faculty/:id/contact" element={<FacultyContact />} />
          
          {/* Students */}
          <Route path="/students" element={<Students />} />
          <Route path="/students/current" element={<CurrentStudentsPage />} />
          <Route path="/students/prospective" element={<ProspectiveStudentsPage />} />
          <Route path="/students/organizations" element={<StudentOrganizationsPage />} />
          <Route path="/students/projects" element={<StudentProjects />} />
          <Route path="/studentprojects" element={<StudentProjects />} />
          <Route path="/students/alumni" element={<Alumni />} />
          <Route path="/alumni" element={<Alumni />} />
          
          {/* Admissions */}
          <Route path="/admissions" element={<AdmissionsMainPage />} />
          <Route path="/admissions/request-info" element={<RequestInfoPage />} />
          <Route path="/admissions/apply" element={<ApplyPage />} />
          <Route path="/admissions/bsca" element={<AdmissionsUndergrad />} />
          <Route path="/admissions/msca" element={<AdmissionsGrad />} />
          
          {/* Others */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/career" element={<Career />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developers" element={<Developers />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}