/**
 * Pricing — three plans, one recommended.
 *
 * Built from the repo's own parts: Card (flat), Button, PlusBullet. Every value
 * in Pricing.module.css is a semantic --sc-* token.
 *
 * The recommended plan is carried three ways, never by colour alone: a text
 * label, the inverse ground, and aria-label on the plan region. Each plan is a
 * <section> named by its heading. One action per plan.
 *
 * Prices and features are sample copy. Replace with real terms before staging.
 */

import { Card } from '../src/components/Card/Card.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import { PlusBullet } from '../src/components/PlusBullet/PlusBullet.jsx';
import styles from './Pricing.module.css';

export const PLANS = [
  {
    id: 'studio',
    name: 'Studio',
    price: '$29',
    cadence: 'per month',
    pitch: 'One maker, every tool.',
    features: ['1 seat', '10 active projects', 'Token export, CSS and JSON', 'Email support'],
    action: 'Start with Studio',
  },
  {
    id: 'team',
    name: 'Team',
    price: '$89',
    cadence: 'per month, up to 10 seats',
    pitch: 'One system, shared by the whole crew.',
    features: ['Up to 10 seats', 'Unlimited projects', 'Shared libraries and review', 'Priority support'],
    action: 'Start with Team',
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'billed yearly',
    pitch: 'Your standards, enforced at scale.',
    features: ['Unlimited seats', 'Single sign-on', 'Audit log', 'Named support lead'],
    action: 'Talk to us',
  },
];

export function Pricing({ plans = PLANS, onSelect, className = '' }) {
  return (
    <section className={`${styles.pricing} ${className}`} aria-labelledby="pricing-title">
      <header className={styles.header}>
        <h2 id="pricing-title" className={styles.title}>Pick the plan that fits the work</h2>
        <p className={styles.lead}>Every plan includes the full token set. Change plans any month.</p>
      </header>

      <ul className={styles.plans}>
        {plans.map((plan) => {
          const rec = Boolean(plan.recommended);
          const headingId = `plan-${plan.id}-name`;
          return (
            <li key={plan.id} className={`${styles.item} ${rec ? styles.itemRecommended : ''}`}>
              <Card
                as="section"
                aria-labelledby={headingId}
                className={`${styles.plan} ${rec ? styles.recommended : ''}`}
                data-recommended={rec || undefined}
              >
                <div className={styles.top}>
                  <h3 id={headingId} className={styles.name}>{plan.name}</h3>
                  {rec && <span className={styles.flag}>Recommended</span>}
                </div>
                <p className={styles.pitch}>{plan.pitch}</p>

                <p className={styles.price}>
                  <span className={styles.amount}>{plan.price}</span>
                  <span className={styles.cadence}>{plan.cadence}</span>
                </p>

                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <PlusBullet accent={rec} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={rec ? 'primary' : 'secondary'}
                  className={styles.action}
                  onClick={() => onSelect?.(plan)}
                  aria-label={`${plan.action}${rec ? ' (recommended plan)' : ''}`}
                >
                  {plan.action}
                </Button>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
