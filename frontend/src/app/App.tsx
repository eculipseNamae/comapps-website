import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/components/Layout';
import { Home } from '@/app/pages/Home';
import { About } from '@/app/pages/About';
import { Curriculum } from '@/app/pages/Curriculum';
import { Admissions } from '@/app/pages/Admissions';
import { AdmissionsUndergrad } from '@/app/pages/AdmissionsUndergrad';
import { AdmissionsGrad } from '@/app/pages/AdmissionsGrad';
import { Faculty } from '@/app/pages/Faculty';
import { Facilities } from '@/app/pages/Facilities';
import { StudentLife } from '@/app/pages/StudentLife';
import { Career } from '@/app/pages/Career';
import { Research } from '@/app/pages/Research';
import { Extension } from '@/app/pages/Extension';
import { News } from '@/app/pages/News';
import { Contact } from '@/app/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/undergraduate" element={<AdmissionsUndergrad />} />
          <Route path="/admissions/graduate" element={<AdmissionsGrad />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/career" element={<Career />} />
          <Route path="/research" element={<Research />} />
          <Route path="/extension" element={<Extension />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}