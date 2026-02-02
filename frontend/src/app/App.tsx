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

import { ScrollToTop } from '@/app/components/ScrollToTop';
import { NotFound } from '@/app/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs-admissions" element={<ProgramsAdmissions />} />
          <Route path="/programs/bsca" element={<BSCA />} />
          <Route path="/programs/msca" element={<MSCA />} />
          <Route path="/programs/bsect" element={<BSECT />} />
          <Route path="/programs/bsca/embedded-systems" element={<EmbeddedSystemsTrack />} />
          <Route path="/programs/bsca/iot" element={<IoTTrack />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/projects" element={<StudentProjects />} />
          <Route path="/students/alumni" element={<Alumni />} />
          <Route path="/admissions/bsca" element={<AdmissionsUndergrad />} />
          <Route path="/admissions/msca" element={<AdmissionsGrad />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/faculty/:id" element={<FacultyProfile />} />
          <Route path="/faculty/:id/contact" element={<FacultyContact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/career" element={<Career />} />
          <Route path="/research" element={<Research />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}