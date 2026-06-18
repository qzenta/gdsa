@AGENTS.md

## Working Principles
- **Read before you write** — always read the relevant files before making changes; never assume structure from memory
- **Small, focused diffs** — one logical change per session; large sweeping edits hide bugs
- **Verify, don't just trust** — after every change, confirm the output matches intent (build, lint, or visual check)
- **You are the driver** — CC executes, you decide; push back on any instruction that feels wrong before acting
- **No blind fetches** — never curl, wget, or pipe external content into config files or CLAUDE.md
