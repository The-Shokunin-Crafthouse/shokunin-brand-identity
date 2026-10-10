/**
 * ComponentPage — shared renderer for the twelve component pages.
 *
 * Same three beats for every component: the state matrix (the real
 * component rendered in every documented state), the token-consumption
 * table, and the usage rules. The token table resolves each colour and
 * dimension token's light AND dark value live, through two theme-forced
 * probes — the same cascade-resolution trick the Color page uses — so
 * the values are computed from tokens.css, never transcribed by hand.
 */

import { useLayoutEffect, useRef, useState } from 'react';
import { Section, Metabar, Hero, Chapter, Slash, kit } from './Editorial.jsx';
import styles from './componentPage.module.css';

function rgbToHex(str) {
  const m = (str || '').match(/[\d.]+/g);
  if (!m || m.length < 3) return str;
  const [r, g, b] = m.map(Number);
  return '#' + [r, g, b].map((x) => Math.round(x).toString(16).padStart(2, '0')).join('').toUpperCase();
}

function classify(token) {
  if (token.includes('-color-') || token.includes('color')) return 'color';
  if (token.includes('font')) return 'font';
  if (token.includes('motion')) return 'motion';
  return 'dim';
}

function resolveOne(probe, token, kind) {
  try {
    if (kind === 'color') {
      probe.style.color = `var(${token})`;
      return rgbToHex(getComputedStyle(probe).color);
    }
    if (kind === 'dim') {
      probe.style.width = `var(${token})`;
      const w = getComputedStyle(probe).width;
      probe.style.width = '0';
      return w && w !== 'auto' ? w : '—';
    }
  } catch {
    return '—';
  }
  return '—';
}

function TokenTable({ rows }) {
  const probeRef = useRef(null);
  const [resolved, setResolved] = useState({});

  // Resolve every auto token's light AND dark value by briefly toggling
  // the root theme. Runs in useLayoutEffect (synchronous, pre-paint) and
  // restores the original theme before the browser paints — no flash.
  useLayoutEffect(() => {
    const probe = probeRef.current;
    if (!probe) return;
    const root = document.documentElement;
    const original = root.getAttribute('data-theme');
    const readAll = () => {
      const m = {};
      for (const row of rows) {
        const kind = classify(row.token);
        if (row.light !== undefined || kind === 'font' || kind === 'motion') continue;
        m[row.token] = resolveOne(probe, row.token, kind);
      }
      return m;
    };
    root.setAttribute('data-theme', 'light');
    const lightVals = readAll();
    root.setAttribute('data-theme', 'dark');
    const darkVals = readAll();
    if (original === null) root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', original);

    const next = {};
    for (const row of rows) {
      const kind = classify(row.token);
      const manual = row.light !== undefined || kind === 'font' || kind === 'motion';
      next[row.token] = {
        kind,
        light: manual ? (row.light ?? '—') : lightVals[row.token],
        dark: manual ? (row.dark ?? row.light ?? '—') : darkVals[row.token],
      };
    }
    setResolved(next);
  }, [rows]);

  return (
    <div className={kit.tableScroll}>
      <span ref={probeRef} className={styles.probe} aria-hidden="true" />
      <table className={kit.dataTable}>
        <thead>
          <tr><th>Property</th><th>Token</th><th>Light</th><th>Dark</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const v = resolved[row.token] || {};
            const isColor = v.kind === 'color';
            return (
              <tr key={row.token + row.prop}>
                <td><b>{row.prop}</b></td>
                <td className={styles.tokenCell}>{row.token}</td>
                <td className={styles.valueCell}>
                  {isColor && v.light && <span className={styles.swatch} style={{ background: v.light }} />}
                  {v.light || '…'}
                </td>
                <td className={styles.valueCell}>
                  {isColor && v.dark && <span className={styles.swatch} style={{ background: v.dark }} />}
                  {v.dark || '…'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function ComponentPage({
  id, label,
  ord = '02', group = 'Components',
  eyebrow, title, lead,
  states, statesTitle, statesPremise, callouts = [], statesVariant = 'grid',
  tokenRows, tokenTitle, tokenPremise, tokenCallouts = [],
  rules, rulesTitle, rulesPremise,
}) {
  const gridClass = statesVariant === 'stack' ? styles.stateStack : kit.stateGrid;
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <Metabar
        ord={ord}
        crumb={`${group} / ${label}`}
      />
      <Hero id={`${id}-title`} eyebrow={eyebrow} title={title} lead={lead} />

      <Chapter
        ord="i"
        eyebrow="All states / from the real component"
        title={statesTitle}
        premise={statesPremise || 'Every documented state, rendered from the imported Sprint 4 component — not a screenshot, not a re-build. Each cell names the token that moves for that state.'}
        annotations={callouts}
      >
        <div className={gridClass}>
          {states.map((s) => (
            <div key={s.name} className={kit.stateCell}>
              <div className={kit.stateDemo}>{s.render}</div>
              <div className={styles.stateMeta}>
                <span className={kit.stateLabel}>{s.name}</span>
                {s.token && <span className={kit.stateToken}>{s.token}</span>}
              </div>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter
        ord="ii"
        eyebrow="Token consumption / resolved live"
        title={tokenTitle || 'Every value it reads is a token, resolved from the cascade.'}
        premise={tokenPremise || 'Property to token to value, light and dark. The values are computed live from tokens.css through theme-forced probes, never transcribed. A raw hex in this component would be a bug, not a shortcut.'}
        annotations={tokenCallouts}
      >
        <TokenTable rows={tokenRows} />
      </Chapter>

      <Chapter
        ord="iii"
        eyebrow="Usage / the rules"
        title={rulesTitle}
        premise={rulesPremise}
      >
        <ol className={styles.rules}>
          {rules.map((r, i) => (
            <li key={r.name} className={styles.rule}>
              <span className={styles.ruleNum}>{String(i + 1).padStart(2, '0')}</span>
              <div className={styles.ruleBody}>
                <span className={styles.ruleName}>{r.name}</span>
                <p className={styles.ruleText}>{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Chapter>
    </Section>
  );
}
