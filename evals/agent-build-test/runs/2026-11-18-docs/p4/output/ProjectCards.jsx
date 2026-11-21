/**
 * ProjectCards — six project cards, or six skeletons while the list is fetched.
 *
 * Props:
 *   projects  array of { id, title, client, status, owner: { name, avatar? } }
 *             status is 'In progress' | 'Shipped' | 'On hold'
 *   loading   true while the list is fetched; renders six PlusSkeletons
 *
 * Built from SCDS: Card (flat), PlusThumbnail (seeded by id), StatusPill, Avatar,
 * PlusSkeleton. No hand-built card, pill, avatar or skeleton.
 */

import { Card } from '../src/components/Card/Card.jsx';
import { Avatar } from '../src/components/Avatar/Avatar.jsx';
import { StatusPill } from '../src/components/StatusPill/StatusPill.jsx';
import { PlusThumbnail } from '../src/components/PlusThumbnail/PlusThumbnail.jsx';
import { PlusSkeleton } from '../src/components/PlusSkeleton/PlusSkeleton.jsx';
import styles from './ProjectCards.module.css';

const COUNT = 6;

// The label is always the status word; tone only adds hue.
const STATUS_TONE = {
  'In progress': 'progress',
  Shipped: 'success',
  'On hold': 'warning',
};

function ProjectCard({ project }) {
  const { id, title, client, status, owner } = project;
  return (
    <Card as="li" className={styles.card}>
      <PlusThumbnail seed={id} className={styles.thumb} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.client}>{client}</p>
        <div className={styles.meta}>
          <StatusPill tone={STATUS_TONE[status] ?? 'neutral'}>{status}</StatusPill>
          <span className={styles.owner}>
            <Avatar size="xs" name={owner.name} src={owner.avatar} />
            <span className={styles.ownerName}>{owner.name}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}

export function ProjectCards({ projects = [], loading = false, label = 'Projects' }) {
  if (loading) {
    return (
      <div className={styles.region} aria-busy="true">
        {/* One status speaks for all six skeletons. */}
        <p className={styles.srOnly} role="status">Loading projects</p>
        <ul className={styles.list} aria-hidden="true">
          {Array.from({ length: COUNT }, (_, i) => (
            <li key={i} className={styles.item}>
              <PlusSkeleton />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className={styles.list} aria-label={label}>
      {projects.slice(0, COUNT).map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </ul>
  );
}
