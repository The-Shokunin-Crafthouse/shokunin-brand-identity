/**
 * PricingSection · three plans, one recommended.
 *
 * Built from SCDS parts: Card (flat), Button, PlusBullet, StatusPill.
 * The recommended plan is marked three ways so colour never speaks alone:
 * a StatusPill label, a raised ground, and the primary Button (others are secondary).
 * Prices are placeholders; swap the PLANS data for real copy.
 */

import { Card } from '../src/components/Card/Card.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import { PlusBullet } from '../src/components/PlusBullet/PlusBullet.jsx';
import { StatusPill } from '../src/components/StatusPill/StatusPill.jsx';
import styles from './PricingSection.module.css';

const PLANS = [
  {
    id: 'studio',
    name: 'Studio',
    price: '$29',
    cadence: 'per month',
    features: ['One workspace', 'Up to 3 projects', 'Token export (CSS, JSON)'],
    action: 'Start with Studio',
  },
  {
    id: 'team',
    name: 'Team',
    price: '$99',
    cadence: 'per month',
    features: ['Unlimited projects', 'Shared libraries', 'Review and approval gates', 'Priority support'],
    action: 'Choose Team',
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'talk to us',
    features: ['Single sign-on', 'Audit log', 'Dedicated support lead'],
    action: 'Contact sales',
  },
];

export function PricingSection({ plans = PLANS, onSelect, className = '' }) {
  return (
    <section className={`${styles.section} ${className}`} aria-labelledby="pricing-title">
      <h2 id="pricing-title" className={styles.title}>Pricing</h2>
      <ul className={styles.plans}>
        {plans.map((plan) => (
          <li key={plan.id} className={`${styles.item} ${plan.recommended ? styles.recommended : ''}`}>
            <Card as="article" aria-labelledby={`plan-${plan.id}`} className={styles.card}>
              <header className={styles.head}>
                <h3 id={`plan-${plan.id}`} className={styles.name}>{plan.name}</h3>
                {plan.recommended ? <StatusPill tone="info">Recommended</StatusPill> : null}
              </header>
              <p className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.cadence}>{plan.cadence}</span>
              </p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <PlusBullet accent={Boolean(plan.recommended)} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? 'primary' : 'secondary'}
                className={styles.action}
                onClick={() => onSelect?.(plan.id)}
              >
                {plan.action}
              </Button>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
