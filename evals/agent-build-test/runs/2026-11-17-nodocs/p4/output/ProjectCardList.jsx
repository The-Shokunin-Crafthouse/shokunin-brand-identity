/**
 * ProjectCardList — six project cards: thumbnail, title, client, status, owner.
 *
 * Built only from SCDS parts: Card (flat), PlusThumbnail (seeded art, no image
 * needed), StatusPill, Avatar, PlusSkeleton (loading). Every value in the
 * stylesheet is an --sc-* semantic token.
 *
 *   projects  array of { id, title, client, status, owner: { name, avatarSrc? } }
 *   loading   true while the list is fetched: six skeleton cards, one status
 *             announcement, list marked aria-busy
 *
 * Status maps to a StatusPill tone. The label always carries the meaning, so
 * colour never speaks alone.
 */

import { Card } from '../src/components/Card/Card.jsx';
import { Avatar } from '../src/components/Avatar/Avatar.jsx';
import { StatusPill } from '../src/components/StatusPill/StatusPill.jsx';
import { PlusThumbnail } from '../src/components/PlusThumbnail/PlusThumbnail.jsx';
import { PlusSkeleton } from '../src/components/PlusSkeleton/PlusSkeleton.jsx';
import styles from './ProjectCardList.module.css';

export const STATUS_TONE = {
  'In progress': 'progress',
  Shipped: 'success',
  'On hold': 'warning',
};

export const SAMPLE_PROJECTS = [
  { id: 'harbor-lights', title: 'Harbor Lights identity', client: 'Northside Ferries', status: 'In progress', owner: { name: 'Mara Okafor' } },
  { id: 'kiln-and-key', title: 'Kiln & Key packaging', client: 'Kiln & Key Ceramics', status: 'Shipped', owner: { name: 'Jonas Reyes' } },
  { id: 'field-notes', title: 'Field Notes quarterly', client: 'Ridgeway Land Trust', status: 'On hold', owner: { name: 'Priya Natarajan' } },
  { id: 'tidewater', title: 'Tidewater booking site', client: 'Tidewater Lodge', status: 'In progress', owner: { name: 'Levi Bahn' } },
  { id: 'copper-line', title: 'Copper Line wayfinding', client: 'Metro Transit Arts', status: 'Shipped', owner: { name: 'Sam Whitfield' } },
  { id: 'lantern', title: 'Lantern annual report', client: 'Lantern Health', status: 'In progress', owner: { name: 'Ines Carvalho' } },
];

const SKELETON_COUNT = 6;

function ProjectCard({ project }) {
  const { id, title, client, status, owner } = project;
  const titleId = `project-${id}-title`;
  return (
    <li className={styles.item}>
      <Card as="article" aria-labelledby={titleId} className={styles.card}>
        <PlusThumbnail seed={id} className={styles.thumb} />
        <div className={styles.body}>
          <h3 id={titleId} className={styles.title}>{title}</h3>
          <p className={styles.client}>{client}</p>
        </div>
        <div className={styles.meta}>
          <StatusPill tone={STATUS_TONE[status] ?? 'neutral'}>{status}</StatusPill>
          <span className={styles.owner}>
            <Avatar size="xs" name={owner.name} src={owner.avatarSrc} />
            <span className={styles.ownerName}>{owner.name}</span>
          </span>
        </div>
      </Card>
    </li>
  );
}

function LoadingCards() {
  return Array.from({ length: SKELETON_COUNT }, (_, i) => (
    <li key={i} className={styles.item} aria-hidden="true">
      <PlusSkeleton className={styles.skeleton} />
    </li>
  ));
}

export function ProjectCardList({ projects = SAMPLE_PROJECTS, loading = false, className = '' }) {
  return (
    <>
      {loading ? (
        <p role="status" className={styles.srOnly}>Loading projects</p>
      ) : null}
      <ul className={`${styles.list} ${className}`} aria-label="Projects" aria-busy={loading || undefined}>
        {loading ? <LoadingCards /> : projects.slice(0, 6).map((p) => <ProjectCard key={p.id} project={p} />)}
      </ul>
    </>
  );
}

export default ProjectCardList;
