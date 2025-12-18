import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import Careers from '../pages/Careers'
import DataPrivacy from '../pages/DataPrivacy'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsConditions from '../pages/TermsConditions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="careers" element={<Careers />} />
      <Route path="data-privacy" element={<DataPrivacy />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-conditions" element={<TermsConditions />} />
    </Route>
  )
)

export default router