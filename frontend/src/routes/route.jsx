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
import WebsiteDesign from '../pages/services/WebsiteDesign'
import ECommerce from '../pages/services/ECommerce'
import CRMSoftware from '../pages/services/CRMSoftware'
import ApplicationSoftware from '../pages/services/ApplicationSoftware'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="services/website-design" element={<WebsiteDesign />} />
      <Route path="services/ecommerce" element={<ECommerce />} />
      <Route path="services/crm-software" element={<CRMSoftware />} />
      <Route path="services/application-software" element={<ApplicationSoftware />} />
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