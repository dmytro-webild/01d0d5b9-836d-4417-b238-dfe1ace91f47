"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="DT Drywall"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Precision Drywall. Flawless Finish. Done Right."
      description="Licensed & bonded drywall specialists delivering high-quality work, clear communication, and flexible scheduling—when you need it most. We show up when others won't, even off-hours."
      buttons={[
        {
          text: "Get Your Free Estimate",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-dining-room-with-outdoor-patio-pool_23-2152008246.jpg"
      imageAlt="Luxury home drywall finish"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Trusted Craftsmanship Partners"
      description="We understand that your space is a reflection of your lifestyle or business standards. Our team specializes in precision finishing, seamless texture matching, and an obsessive attention to detail that ensures work that lasts. Whether residential or commercial, we bring professionalism and punctuality to every job."
      imageSrc="http://img.b2bpic.net/free-photo/handyman-working-renovating-build-tools_53876-31569.jpg"
      imageAlt="DT Drywall craftsmanship"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Craftsmanship",
          description: "Flawless finishes and expert texture matching every time.",
          bentoComponent: "reveal-icon",
          icon: CheckCircle,
        },
        {
          title: "Responsive Service",
          description: "We work around your schedule, including off-hours and weekends.",
          bentoComponent: "reveal-icon",
          icon: Zap,
        },
        {
          title: "Licensed & Bonded",
          description: "Fully insured for your total peace of mind and protection.",
          bentoComponent: "reveal-icon",
          icon: Shield,
        },
      ]}
      title="The DT Drywall Advantage"
      description="Why homeowners and property managers choose us for precision work."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          role: "Homeowner",
          company: "Private Residence",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-wearing-helmets_23-2148751995.jpg?_wi=1",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "Property Manager",
          company: "City Realty",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-good-looking-business-executive-businessman-feeling-happy-doing-lucrative-job-his-stylish-office-with-big-city-view_662251-315.jpg",
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          role: "Homeowner",
          company: "Private Residence",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-waving-camera_197531-33851.jpg",
        },
        {
          id: "4",
          name: "David Sterling",
          role: "Facility Manager",
          company: "Sterling Retail",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-woman-office_1303-31710.jpg",
        },
        {
          id: "5",
          name: "Julian Vane",
          role: "Architect",
          company: "Vane Design Group",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-wearing-helmets_23-2148751995.jpg?_wi=2",
        },
      ]}
      kpiItems={[
        {
          value: "500+",
          label: "Projects Completed",
        },
        {
          value: "100%",
          label: "Client Satisfaction",
        },
        {
          value: "24/7",
          label: "Support Available",
        },
      ]}
      title="Trusted by Homeowners & Professionals"
      description="See why DT Drywall is the top choice for precision-focused clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you work on weekends?",
          content: "Yes, we prioritize responsiveness and are happy to work off-hours to minimize disruption to your home or business.",
        },
        {
          id: "2",
          title: "Are you licensed and bonded?",
          content: "Absolutely. We are fully licensed, bonded, and insured, providing complete peace of mind for all our clients.",
        },
        {
          id: "3",
          title: "How do I get an estimate?",
          content: "Simply fill out our request form or give us a call. We provide clear, transparent pricing and quick turnaround times.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Clear answers about our drywall process and availability."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to get started on your next drywall project?"
      buttons={[
        {
          text: "Get Your Free Estimate",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "DT Drywall",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Drywall Repair",
              href: "#",
            },
            {
              label: "Precision Finishing",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 DT Drywall. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
