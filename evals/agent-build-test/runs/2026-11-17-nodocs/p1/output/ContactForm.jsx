/**
 * ContactForm — name, email, message, submit.
 *
 * Three states:
 *   idle        the form; email shows a field-level error after a failed submit
 *   submitting  fields locked, Button in its loading state (aria-busy)
 *   sent        a confirmation that replaces the form; focus moves to it
 *
 * Built on the system's TextField and Button. TextField is single-line, so the
 * message field is a textarea wearing the same field tokens (see the stylesheet).
 *
 * Props
 *   onSubmit({ name, email, message })  async; resolve = sent, reject = send error
 *   previewState  'invalid' | 'submitting' | 'sent'  renders one state statically,
 *                 for review and docs. Omit in production.
 */

import { useEffect, useId, useRef, useState } from 'react';
import { TextField } from '../src/components/TextField/TextField.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import styles from './ContactForm.module.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value) {
  const v = value.trim();
  if (!v) return 'Enter your email so we can reply.';
  if (!EMAIL_PATTERN.test(v)) return 'That email looks incomplete. Check for a missing @ or domain.';
  return '';
}

export function ContactForm({ onSubmit, previewState, className = '' }) {
  const id = useId();
  const messageId = `${id}-message`;
  const messageHelpId = `${id}-message-help`;
  const errorRegionId = `${id}-send-error`;

  const [values, setValues] = useState({
    name: previewState === 'submitting' || previewState === 'sent' ? 'Ada Okafor' : '',
    email: previewState === 'submitting' || previewState === 'sent' ? 'ada@example.com' : '',
    message: previewState === 'submitting' ? 'We would like to talk about a brand site.' : '',
  });
  const [emailError, setEmailError] = useState(previewState === 'invalid' ? validateEmail('') : '');
  const [status, setStatus] = useState(
    previewState === 'submitting' ? 'submitting' : previewState === 'sent' ? 'sent' : 'idle',
  );
  const [sendError, setSendError] = useState('');

  const confirmRef = useRef(null);
  const formRef = useRef(null);

  const submitting = status === 'submitting';

  // Sent: the form unmounts, so hand focus to the confirmation.
  useEffect(() => {
    if (status === 'sent') confirmRef.current?.focus();
  }, [status]);

  const set = (key) => (e) => {
    const next = e.target.value;
    setValues((v) => ({ ...v, [key]: next }));
    // Clear the email error once the person edits it into validity.
    if (key === 'email' && emailError && !validateEmail(next)) setEmailError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const err = validateEmail(values.email);
    setEmailError(err);
    if (err) {
      formRef.current?.querySelector('input[type="email"]')?.focus();
      return;
    }

    setSendError('');
    setStatus('submitting');
    try {
      await onSubmit?.({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setStatus('sent');
    } catch {
      setStatus('idle');
      setSendError('Your message did not send. Nothing was lost. Try again.');
    }
  };

  if (status === 'sent') {
    return (
      <section className={`${styles.root} ${className}`} aria-labelledby={`${id}-sent-title`}>
        <div className={styles.sent} role="status">
          <h2
            id={`${id}-sent-title`}
            ref={confirmRef}
            tabIndex={-1}
            className={styles.title}
          >
            Message sent.
          </h2>
          <p className={styles.lede}>
            We read every note. Expect a reply from a person, usually within two working days,
            at <span className={styles.address}>{values.email.trim()}</span>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={`${styles.root} ${className}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className={styles.title}>Tell us what you are making.</h2>
      <p className={styles.lede}>A few lines is enough. We reply to every note.</p>

      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-busy={submitting || undefined}
      >
        <TextField
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          disabled={submitting}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          error={emailError}
          disabled={submitting}
          required
          aria-required="true"
        />

        <div className={`${styles.area} ${submitting ? styles.areaDisabled : ''}`}>
          <label htmlFor={messageId} className={styles.areaLabel}>Message</label>
          <div className={styles.areaBox}>
            <textarea
              id={messageId}
              name="message"
              className={styles.textarea}
              rows={6}
              value={values.message}
              onChange={set('message')}
              disabled={submitting}
              aria-describedby={messageHelpId}
            />
          </div>
          <span id={messageHelpId} className={styles.areaHelp}>
            What you want to build, and by when.
          </span>
        </div>

        {sendError && (
          <p id={errorRegionId} role="alert" className={styles.sendError}>{sendError}</p>
        )}

        <div className={styles.actions}>
          <Button type="submit" loading={submitting} arrow={!submitting}>
            {submitting ? 'Sending' : 'Send message'}
          </Button>
        </div>
      </form>
    </section>
  );
}
