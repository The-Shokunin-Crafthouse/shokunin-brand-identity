/*
 * The workflows the board lab draws, read from Studio PM's collector
 * (studio-memory automation/studio-pm-snapshot.py, workflowDocs and
 * workflowRuns) on 2026-10-10. A copy, so the lab
 * runs without the collector; a run with no record is null.
 */
export const WORKFLOWS = {
 "sprint-unit": {
  "title": "Sprint unit",
  "summary": "One unit of a sprint, from contract to merge, with a verifier that is not the builder.",
  "steps": [
   {
    "id": "contract",
    "title": "Propose the contract",
    "actor": "claude",
    "line": "Say what will be built and how it will be verified.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "approve"
     }
    ]
   },
   {
    "id": "approve",
    "title": "Approve the contract",
    "actor": "you",
    "line": "Approve it. It is written to the sprint CONTEXT.md.",
    "gate": "Contract",
    "next": [
     {
      "label": null,
      "to": "cut"
     }
    ]
   },
   {
    "id": "cut",
    "title": "Cut the branch",
    "actor": "claude",
    "line": "Cut the branch and commit empty at once, so it never reads as merged.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "red"
     }
    ]
   },
   {
    "id": "red",
    "title": "Commit red tests",
    "actor": "claude",
    "line": "Commit the tests alone. They run red, and the reason is the feature.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "build"
     }
    ]
   },
   {
    "id": "build",
    "title": "Build the unit",
    "actor": "claude",
    "line": "Build inside the ceiling: 80 tool calls to build and dispatch.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "verify"
     }
    ]
   },
   {
    "id": "verify",
    "title": "Verify, fenced",
    "actor": "claude",
    "line": "A Fable verifier in a worktree pinned to the unit's sha grades it.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "plant"
     }
    ]
   },
   {
    "id": "plant",
    "title": "Plant a bug",
    "actor": "claude",
    "line": "The verifier flips one covered line, expects red, restores.",
    "gate": null,
    "next": [
     {
      "label": "PASS",
      "to": "commit"
     },
     {
      "label": "FAIL",
      "to": "build"
     },
     {
      "label": "two rounds",
      "to": "park"
     }
    ]
   },
   {
    "id": "park",
    "title": "Park",
    "actor": "claude",
    "line": "Stop at the unit boundary with a resume pointer.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "end"
     }
    ]
   },
   {
    "id": "commit",
    "title": "Commit",
    "actor": "claude",
    "line": "The lead commits and pushes the branch.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "pr"
     }
    ]
   },
   {
    "id": "pr",
    "title": "Open the PR",
    "actor": "claude",
    "line": "Open a PR to main; protected main refuses a direct push.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "merge"
     }
    ]
   },
   {
    "id": "merge",
    "title": "Merge",
    "actor": "you",
    "line": "You merge the PR.",
    "gate": "Merge",
    "next": [
     {
      "label": null,
      "to": "end"
     }
    ]
   }
  ],
  "run": null
 },
 "stages": {
  "title": "Stages",
  "summary": "Every project: five stages, each closed by a gate that you sign.",
  "steps": [
   {
    "id": "brief",
    "title": "Brief",
    "actor": "claude",
    "line": "Direction, scope, success criteria, references and risks, in writing.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "gate-1"
     }
    ]
   },
   {
    "id": "gate-1",
    "title": "Concept sign-off",
    "actor": "you",
    "line": "Direction agreed, scope named, risks logged.",
    "gate": "Gate 1",
    "next": [
     {
      "label": "signed",
      "to": "design"
     },
     {
      "label": "not yet",
      "to": "brief"
     }
    ]
   },
   {
    "id": "design",
    "title": "Design",
    "actor": "claude",
    "line": "Type, tokens, screens, motion and states: a specification, not a vibe.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "gate-2"
     }
    ]
   },
   {
    "id": "gate-2",
    "title": "Design sign-off",
    "actor": "you",
    "line": "Type, tokens, breakpoints, motion, dark mode, access and states resolved.",
    "gate": "Gate 2",
    "next": [
     {
      "label": "signed",
      "to": "build"
     },
     {
      "label": "not yet",
      "to": "design"
     }
    ]
   },
   {
    "id": "build",
    "title": "Build",
    "actor": "claude",
    "line": "Implement the design without drift.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "gate-3"
     }
    ]
   },
   {
    "id": "gate-3",
    "title": "Build sign-off",
    "actor": "you",
    "line": "Every state, Web Vitals, keyboard, screen reader, contrast, reduced motion.",
    "gate": "Gate 3",
    "next": [
     {
      "label": "signed",
      "to": "review"
     },
     {
      "label": "not yet",
      "to": "build"
     }
    ]
   },
   {
    "id": "review",
    "title": "Review",
    "actor": "claude",
    "line": "Hold the work against the stage 01 and 02 criteria.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "gate-4"
     }
    ]
   },
   {
    "id": "gate-4",
    "title": "Review sign-off",
    "actor": "you",
    "line": "Punch list closed, performance, access, parity, copy, security, criteria met.",
    "gate": "Gate 4",
    "next": [
     {
      "label": "signed",
      "to": "launch"
     },
     {
      "label": "not yet",
      "to": "review"
     }
    ]
   },
   {
    "id": "launch",
    "title": "Launch",
    "actor": "claude",
    "line": "Ship with observability in place, and hand off.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "close"
     }
    ]
   },
   {
    "id": "close",
    "title": "Close",
    "actor": "you",
    "line": "Handoff accepted, 14-day tail clean, retrospective logged, stage closed.",
    "gate": "Close",
    "next": [
     {
      "label": null,
      "to": "end"
     }
    ]
   }
  ],
  "run": {
   "repo": "studio-pm",
   "branch": "main",
   "current": "review",
   "counts": {
    "done": 6,
    "remaining": 3,
    "unrecorded": 0
   },
   "travelled": [
    {
     "from": "brief",
     "to": "gate-1"
    },
    {
     "from": "gate-1",
     "to": "design"
    },
    {
     "from": "design",
     "to": "gate-2"
    },
    {
     "from": "gate-2",
     "to": "build"
    },
    {
     "from": "build",
     "to": "gate-3"
    },
    {
     "from": "gate-3",
     "to": "review"
    }
   ],
   "steps": {
    "brief": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "build": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "close": {
     "state": "remaining",
     "proof": null
    },
    "design": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "gate-1": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "gate-2": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "gate-3": {
     "state": "done",
     "proof": "manifest stage 04-review"
    },
    "gate-4": {
     "state": "remaining",
     "proof": null
    },
    "launch": {
     "state": "remaining",
     "proof": null
    },
    "review": {
     "state": "current",
     "proof": "manifest stage 04-review"
    }
   }
  }
 },
 "session-harness": {
  "title": "Session harness",
  "summary": "A long build in three phases: plan, build sprint by sprint, evaluate each sprint.",
  "steps": [
   {
    "id": "brief",
    "title": "Write the brief",
    "actor": "you",
    "line": "Describe what to build in one to four sentences.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "plan"
     }
    ]
   },
   {
    "id": "plan",
    "title": "Plan the spec",
    "actor": "claude",
    "line": "The Planner turns the brief into a spec with three to six sprints.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "approve-spec"
     }
    ]
   },
   {
    "id": "approve-spec",
    "title": "Approve the spec",
    "actor": "you",
    "line": "Read the spec, edit it, approve it. It is the creative direction.",
    "gate": "Spec",
    "next": [
     {
      "label": null,
      "to": "open-generator"
     }
    ]
   },
   {
    "id": "open-generator",
    "title": "Start the Generator",
    "actor": "you",
    "line": "Open Claude Code in the project on Opus at xhigh effort.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "contract"
     }
    ]
   },
   {
    "id": "contract",
    "title": "Propose the contract",
    "actor": "claude",
    "line": "The Generator proposes what it will build and how you will verify it.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "approve-contract"
     }
    ]
   },
   {
    "id": "approve-contract",
    "title": "Approve the contract",
    "actor": "you",
    "line": "Approve it. It is written to the sprint CONTEXT.md, Status approved.",
    "gate": "Contract",
    "next": [
     {
      "label": null,
      "to": "build"
     }
    ]
   },
   {
    "id": "build",
    "title": "Build the sprint",
    "actor": "claude",
    "line": "Build, run the CONTEXT.md audit checklist, then open the PR.",
    "gate": null,
    "next": [
     {
      "label": null,
      "to": "evaluate"
     }
    ]
   },
   {
    "id": "evaluate",
    "title": "Evaluate the sprint",
    "actor": "claude",
    "line": "A fresh Fable session grades the sprint and returns PASS or FAIL.",
    "gate": null,
    "next": [
     {
      "label": "PASS",
      "to": "review"
     },
     {
      "label": "FAIL",
      "to": "build"
     }
    ]
   },
   {
    "id": "review",
    "title": "Review the report",
    "actor": "you",
    "line": "Read the report and the output. Send the next sprint, or send it back.",
    "gate": "Sprint",
    "next": [
     {
      "label": "next sprint",
      "to": "contract"
     },
     {
      "label": "revise",
      "to": "build"
     },
     {
      "label": "last sprint",
      "to": "end"
     }
    ]
   }
  ],
  "run": null
 }
};
