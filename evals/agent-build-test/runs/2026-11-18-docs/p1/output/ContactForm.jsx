/**
 * ContactForm · name, email, message, submit.
 *
 * Built from SCDS parts: Card (flat), TextField, Button, Icon.
 * TextField is single-line only, so the message field is a local textarea
 * that reuses the TextField token set (see ContactForm.module.css).
 *
 * States (status): 'idle' | 'submitting' | 'sent'.
 *   idle        fields editable; email shows a field-level error when empty or invalid
 *   submitting  fields disabled, Button in loading (aria-busy), form aria-busy
 *   sent        a confirmation replaces the form; focus moves to its heading
 *
 * Props:
 *   onSubmit({ name, email, message })  async; resolve = sent, reject = back to idle with a form error
 *   initialStatus                       start in a given status (previews, tests)
 *   initialEmailError                   show the email error on first render (preview of the empty state)
 */

import { useEffect, useId, useRef, useState } from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import { Card } from '../src/components/Card/Card.jsx';
import { TextField } from '../src/components/TextField/TextField.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import { Icon } from '../src/components/Icon/Icon.jsx';
import styles from './ContactForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (value) => {
  if (!value.trim()) return 'Enter your email so we can reply.';
  if (!EMAIL_RE.test(value.trim())) return 'Enter an email like name@studio.com.';
  return '';
};

export function ContactForm({
  onSubmit,
  initialStatus = 'idle',
  initialEmailError = '',
  className = '',
}) {
  const [status, setStatus] = useState(initialStatus);
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState(initialEmailError);
  const [formError, setFormError] = useState('');
  const formRef = useRef(null);
  const sentRef = useRef(null);
  const messageId = useId();
  const messageHelpId = `${messageId}-help`;

  const set = (key) => (e) => {
    const next = e.target.value;
    setValues((v) => ({ ...v, [key]: next }));
    // Clear a shown error as soon as the value is valid; never nag mid-typing.
    if (key === 'email' && emailError && !validateEmail(next)) setEmailError('');
  };

  // Confirmation replaces the form: move focus so keyboard + SR users land on it.
  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus();
  }, [status]);

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;
    const err = validateEmail(values.email);
    setEmailError(err);
    setFormError('');
    if (err) {
      // TextField does not forward a ref; reach its input through the form.
      formRef.current?.querySelector('input[type="email"]')?.focus();
      return;
    }
    setStatus('submitting');
    try {
      await onSubmit?.(values);
      setStatus('sent');
    } catch {
      setStatus('idle');
      setFormError('Message not sent. Check your connection and try again.');
    }
  };

  if (status === 'sent') {
    return (
      <Card className={`${styles.card} ${className}`}>
        <div className={styles.sent} role="status">
          <span className={styles.sentMark}>
            <Icon glyph={CheckCircle} weight="bold" size={32} />
          </span>
          <h2 ref={sentRef} tabIndex={-1} className={styles.sentTitle}>Message sent</h2>
          <p className={styles.sentBody}>
            Thanks{values.name.trim() ? `, ${values.name.trim()}` : ''}. We will reply
            {values.email.trim() ? (
              <> to <span className={styles.sentEmail}>{values.email.trim()}</span></>
            ) : ' by email'}.
          </p>
        </div>
      </Card>
    );
  }

  const submitting = status === 'submitting';

  return (
    <Card className={`${styles.card} ${className}`}>
      <form ref={formRef} className={styles.form} onSubmit={submit} noValidate aria-busy={submitting || undefined}>
        <h2 className={styles.title}>Start a conversation</h2>

        <TextField
          label="Name"
          surface="raised"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          disabled={submitting}
        />

        <TextField
          label="Email"
          surface="raised"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={set('email')}
          onBlur={() => values.email && setEmailError(validateEmail(values.email))}
          error={emailError}
          disabled={submitting}
          required
          aria-required="true"
        />

        <div className={`${styles.area} ${submitting ? styles.areaDisabled : ''}`}>
          <label htmlFor={messageId} className={styles.areaLabel}>Message</label>
          <textarea
            id={messageId}
            className={styles.textarea}
            rows={5}
            value={values.message}
            onChange={set('message')}
            disabled={submitting}
            aria-describedby={messageHelpId}
          />
          <span id={messageHelpId} className={styles.areaHelp}>What are you making, and by when?</span>
        </div>

        {formError && <p className={styles.formError} role="alert">{formError}</p>}

        <div className={styles.actions}>
          <Button type="submit" loading={submitting}>
            {submitting ? 'Sending' : 'Send message'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

/**
 * The three states side by side, for review. Not used in production.
 *   1 empty + email error · 2 submitting · 3 sent
 */
export function ContactFormStates() {
  return (
    <div className={styles.states}>
      <ContactForm initialEmailError="Enter your email so we can reply." />
      <ContactForm initialStatus="submitting" />
      <ContactForm initialStatus="sent" />
    </div>
  );
}
