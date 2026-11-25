'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Clock,
  MapPin,
  ExternalLink,
  MessageSquare,
  Send,
  CheckCircle,
} from 'lucide-react';
import { contactData } from '@/data/contactData';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    targetExam: 'Civil Judge Examination – Comprehensive Programme',
    message: '',
  });

  const buildWhatsAppEnquiryUrl = () => {
    const lines = [
      'Hello The Lawgical Academy, I would like to submit an admission enquiry:',
      `• Name: ${formData.fullName}`,
      `• Mobile: ${formData.phone}`,
      formData.email ? `• Email: ${formData.email}` : null,
      `• Target Exam: ${formData.targetExam}`,
      formData.message ? `• Query: ${formData.message}` : null,
    ].filter(Boolean);

    return `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppEnquiryUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F3] text-[#14243A] relative overflow-hidden border-t border-black/5">
      {/* Subtle Golden Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B79559]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="Admissions & Consultation"
          title="Connect with The Lawgical Academy"
          subtitle="Take the definitive first step toward judicial appointment. Inquire about batch schedules, fee structures, and personalized mentorship."
          alignment="center"
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Academy Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-lg space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#14243A]">
                  Academy Admissions Desk
                </h3>
                <p className="text-xs text-neutral-600 mt-1">
                  Counselors and academic mentors are available for guidance.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-5 pt-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-[#B79559]/40 flex items-center justify-center text-[#B79559] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8B6E38] font-bold block">
                      Telephone / Helpdesk
                    </span>
                    <a
                      href="tel:+919111632832"
                      className="text-sm text-[#14243A] font-semibold hover:text-[#B79559] transition-colors mt-1 inline-block"
                    >
                      {contactData.phonePrimary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-[#B79559]/40 flex items-center justify-center text-[#B79559] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8B6E38] font-bold block">
                      Gwalior Campus Address
                    </span>
                    <p className="text-xs sm:text-sm text-[#14243A] font-medium mt-1 leading-relaxed">
                      {contactData.addressLine1}, {contactData.addressLine2}, {contactData.cityStateZip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-[#B79559]/40 flex items-center justify-center text-[#B79559] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8B6E38] font-bold block">
                      Working Hours
                    </span>
                    <p className="text-sm text-[#14243A] font-medium mt-0.5 leading-snug">
                      {contactData.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Google Maps Buttons */}
              <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                <Button
                  href={`https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(contactData.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="gold"
                  className="w-full justify-center bg-[#25D366] text-[#0A1320] hover:bg-[#1EBE5D] border-none font-semibold shadow-md"
                  icon={<MessageSquare className="w-4 h-4" />}
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  href={contactData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full justify-center border-[#B79559]/50 text-[#14243A] hover:bg-[#B79559]/10"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Open Location on Google Maps
                </Button>
                <p className="text-[10px] text-center text-neutral-500">
                  4.9★ Rated (155 Google Reviews) • Gwalior, Madhya Pradesh
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Admission Enquiry WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200/90 shadow-lg">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-[#14243A]">
                  Submit Admission Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Fill in your academic profile and send your enquiry directly to our admissions desk on WhatsApp.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-neutral-50 border border-[#B79559] text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#B79559]/20 text-[#B79559] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-[#14243A]">
                    Enquiry Ready on WhatsApp
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#8B6E38] font-bold">{formData.fullName || 'Candidate'}</span>. Your enquiry details have been formatted for WhatsApp. If WhatsApp didn&apos;t open automatically, tap below:
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      href={buildWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="gold"
                      size="sm"
                      className="bg-[#25D366] text-[#0A1320] hover:bg-[#1EBE5D] border-none font-semibold"
                      icon={<MessageSquare className="w-4 h-4" />}
                    >
                      Open WhatsApp Chat
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      size="sm"
                      className="text-[#14243A] border-[#14243A]"
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#14243A] font-bold mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Adv. Sharma"
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-[#14243A] placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#B79559] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#14243A] font-bold mb-1.5">
                        Contact Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 XXXXX"
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-[#14243A] placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#B79559] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#14243A] font-bold mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="aspirant@lawmail.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-[#14243A] placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#B79559] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#14243A] font-bold mb-1.5">
                        Target Examination *
                      </label>
                      <select
                        value={formData.targetExam}
                        onChange={(e) =>
                          setFormData({ ...formData, targetExam: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-[#14243A] text-sm focus:outline-none focus:border-[#B79559] transition-colors"
                      >
                        <option value="Civil Judge Examination – Comprehensive Programme">
                          Civil Judge – Comprehensive (12 / 18 / 24 Months)
                        </option>
                        <option value="Judicial Mains Exclusive Practice Programme">
                          Judicial Mains Exclusive Practice (6 Months)
                        </option>
                        <option value="MP ADPO – Complete Preparation Programme">
                          MP ADPO – Complete Preparation (6 Months)
                        </option>
                        <option value="CLAT PG & UGC-NET Law Preparation">
                          CLAT PG &amp; UGC-NET Law Preparation
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#14243A] font-bold mb-1.5">
                      Academic Background & Questions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Mention your law graduation status (LL.B. year / graduate), preferred batch timing, or specific preparation queries..."
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 border border-neutral-300 text-[#14243A] placeholder:text-neutral-400 text-sm focus:outline-none focus:border-[#B79559] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="gold"
                      size="lg"
                      className="w-full justify-center shadow-lg"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Transmit Admission Enquiry
                    </Button>
                  </div>

                  <p className="text-[11px] text-neutral-400 text-center leading-relaxed">
                    * The Lawgical Academy maintains strict candidate confidentiality. No third-party data sharing.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
