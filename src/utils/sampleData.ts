import { Note, TaskItem, JournalEntry, VaultMetadata } from '../types';

export const INITIAL_VAULT_META: VaultMetadata = {
  vaultName: 'Aether Sovereign Vault',
  isLocked: false,
  autoLockMinutes: 15,
  lastActive: Date.now(),
  totalNotesEncrypted: 3,
  createdAt: Date.now() - 86400000 * 5,
};

export const INITIAL_NOTES: Note[] = [
  {
    id: 'note_welcome',
    title: 'Aether: The Sovereign OS Workspace',
    content: `# Welcome to Aether

Aether is designed as the built-in, sovereign workspace for your operating system—delivering the elegance of native macOS software with **absolute data ownership**.

### Core Tenets
1. **Zero-Knowledge Encryption**: Every byte is encrypted using client-side **AES-256-GCM** with PBKDF2 key derivation. Your master passphrase never leaves this device.
2. **Zero Cloud Latency & Bloat**: No background tracking daemon, no telemetry, no subscription servers. Instant sub-millisecond local queries.
3. **Deterministic Local Automations**: No unpredictable AI. All automations run locally with predictable, rule-based scripts (task extraction, regex sanitization, auto-tagging).
4. **Peer Offline Synchronization**: Export tamper-proof encrypted vault packages or sync between machines with cryptographic checksums.

### Embedded Checklist (Runs with Local Automator)
- [ ] Review cryptographic integrity in Vault Security #security !urgent
- [x] Air-gap verified: 0 bytes external telemetry transmitted #privacy
- [ ] Run "Task Extractor" automation to port checklist items to Action Tracker #automations
- [ ] Customize folder hierarchies and keyboard shortcuts #system

> *"Privacy is not about having something to hide; it is the right to a sovereign digital space."*`,
    plainTextPreview: 'Aether is designed as the built-in, sovereign workspace for your operating system...',
    folder: 'General',
    tags: ['welcome', 'privacy', 'security', 'system'],
    isPinned: true,
    isEncrypted: true,
    encryptionMeta: {
      algorithm: 'AES-256-GCM',
      iv: '7f9a12c4b8e01123456789ab',
      salt: 'e2b3c4d5f60718293a4b5c6d7e8f9012',
      ciphertext: '5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f',
      checksum: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    },
    createdAt: Date.now() - 172800000,
    updatedAt: Date.now() - 3600000,
  },
  {
    id: 'note_automations_guide',
    title: 'Local Automation & Workflow Recipes',
    content: `# Local Automation Engine

Aether includes a native local automation engine modeled after Apple Shortcuts and UNIX pipes—purely offline and instant.

### Available Triggers:
- **On Save**: Triggers immediately whenever a note is saved or autosaved.
- **Manual Trigger**: Executed on-demand via the Automator button or \`Cmd+K\`.
- **Tag Detected**: Activates when specific tags like \`#meeting\` or \`#finance\` are introduced.

### Active Rules in this Vault:
| Automation Name | Trigger | Action |
| :--- | :--- | :--- |
| **Checklist Extractor** | On Save | Converts \`- [ ]\` into actionable Task Tracker items |
| **Tag Synthesizer** | On Save | Extracts #hashtags & categorizes topics |
| **Markdown Formatter** | Manual | Aligns tables, cleans trailing whitespace |
| **Audit Stamper** | Manual | Appends local ISO timestamp & integrity hash |

### Try It Yourself:
Type a line starting with \`- [ ] Buy fresh coffee beans !high #errands\` in any note and hit **Run Automation** to see it instantly materialize in your Tasks view!`,
    plainTextPreview: 'Aether includes a native local automation engine modeled after Apple Shortcuts...',
    folder: 'Guides',
    tags: ['automations', 'productivity', 'shortcuts'],
    isPinned: false,
    isEncrypted: true,
    encryptionMeta: {
      algorithm: 'AES-256-GCM',
      iv: '4a3b2c1d0e9f8a7b6c5d4e3f',
      salt: '11223344556677889900aabbccddeeff',
      ciphertext: '3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b',
      checksum: '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
    },
    createdAt: Date.now() - 86400000,
    updatedAt: Date.now() - 7200000,
  },
  {
    id: 'note_daily_clarity',
    title: 'Daily Sovereign Operating System Spec',
    content: `# The Million-Dollar OS Utility Blueprint

What made classic macOS software beloved by millions of power users?
- Immediate startup (<50ms)
- Consistent, distraction-free visual canvas
- Zero cloud login barriers
- Enduring file formats (Plaintext Markdown + JSON)
- Reliable hotkeys that never stutter

### Daily Review Protocol:
1. **Morning Sweep (08:00)**: Review pinned notes and highest-priority tasks.
2. **Focus Blocks**: Close all browser tabs; keep Aether in Split View.
3. **Evening Rollover**: Archive completed tasks and export an encrypted backup package to external drive.`,
    plainTextPreview: 'What made classic macOS software beloved by millions of power users?...',
    folder: 'System',
    tags: ['system', 'focus', 'architecture'],
    isPinned: true,
    isEncrypted: true,
    createdAt: Date.now() - 43200000,
    updatedAt: Date.now() - 1800000,
  },
];

export const INITIAL_TASKS: TaskItem[] = [
  {
    id: 'task_1',
    title: 'Initialize master passphrase for AES-256-GCM vault',
    completed: false,
    priority: 'urgent',
    dueDate: new Date().toISOString().split('T')[0],
    tags: ['security', 'onboarding'],
    createdAt: Date.now() - 72000000,
  },
  {
    id: 'task_2',
    title: 'Test local peer sync export package (.aether)',
    completed: false,
    priority: 'high',
    tags: ['sync', 'privacy'],
    createdAt: Date.now() - 50000000,
  },
  {
    id: 'task_3',
    title: 'Clean desktop workspace and configure shortcut Cmd+K',
    completed: true,
    priority: 'medium',
    tags: ['workspace'],
    createdAt: Date.now() - 80000000,
    completedAt: Date.now() - 10000000,
  },
  {
    id: 'task_4',
    title: 'Document local automation recipe for weekly standups',
    completed: false,
    priority: 'low',
    tags: ['automations'],
    createdAt: Date.now() - 20000000,
  },
];

export const INITIAL_JOURNAL: JournalEntry[] = [
  {
    id: 'journal_1',
    date: new Date().toISOString().split('T')[0],
    time: '08:30',
    content: 'Air-gapped workspace initialized. Zero cloud friction. Focus feels crisp and uninterrupted.',
    category: 'Reflection',
    mood: 'Focused',
    createdAt: Date.now() - 14400000,
  },
  {
    id: 'journal_2',
    date: new Date().toISOString().split('T')[0],
    time: '11:15',
    content: 'Automations successfully extracted tasks from today\'s architecture doc without sending a single packet to the network.',
    category: 'Log',
    mood: 'Productive',
    createdAt: Date.now() - 3600000,
  },
];
