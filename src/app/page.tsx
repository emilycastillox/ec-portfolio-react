import Layout from '@/components/Layout';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}