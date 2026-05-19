import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FiCheckCircle, FiMail, FiSend } from 'react-icons/fi';
import { socials } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = 'Enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const service = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      if (service && template && key) {
        await emailjs.sendForm(service, template, formRef.current, key);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus(''), 3200);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-night">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Contact" title="Let’s build something clear, useful, and beautiful" text="Send a message for dashboards, analysis, frontend work, or collaboration opportunities." />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard>
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-3xl text-neon shadow-glow">
              <FiMail />
            </div>
            <h3 className="font-display text-2xl font-semibold text-paper">Available for opportunities</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I am open to internships, entry-level data analyst roles, dashboard projects, and frontend collaborations.
            </p>
            <div className="mt-8 grid gap-3">
              <a href="mailto:hello@example.com" className="contact-link">hello@example.com</a>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="icon-button h-12 w-12" aria-label={label} target="_blank" rel="noreferrer">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <form ref={formRef} className="grid gap-5" onSubmit={handleSubmit} noValidate>
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
              ].map((field) => (
                <label key={field.name} className="floating-field">
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={(event) => setForm((current) => ({ ...current, [field.name]: event.target.value }))}
                    placeholder=" "
                  />
                  <span>{field.label}</span>
                  {errors[field.name] && <small>{errors[field.name]}</small>}
                </label>
              ))}

              <label className="floating-field">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  placeholder=" "
                  rows="6"
                />
                <span>Message</span>
                {errors.message && <small>{errors.message}</small>}
              </label>

              <motion.button className="primary-button justify-center py-4" type="submit" whileTap={{ scale: 0.98 }} disabled={status === 'sending'}>
                {status === 'success' ? <FiCheckCircle /> : <FiSend />}
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Ready' : 'Send Message'}
              </motion.button>
              {status === 'error' && <p className="text-sm text-red-300">EmailJS could not send right now. Check your environment keys and try again.</p>}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
