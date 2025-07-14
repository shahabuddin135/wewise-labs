# Developer Guidelines

## 1. Before You Start Coding
- Pull the latest changes from the main branch or the relevant branch. Never start working on outdated code.
- Create a separate branch for every feature, bug fix, or update. Do not push directly to the main branch.
- Announce your task to the team: what you're working on, which files you will touch, and any planned restructuring.
- Confirm with the team before using or installing any third-party library. Approval is mandatory.

## 2. During Development
- Do not rely solely on AI to generate code. Understand everything you write.
- Follow existing component structures, naming conventions, and best practices.
- Avoid creating new files or folders unless absolutely necessary.
- Do not reformat unrelated code. Only touch what is required.
- Use Cloudinary (or any agreed static asset platform) for static assets.
- Write dynamic, scalable, and modular code — avoid hardcoded values and repetitive logic.

## 3. While Writing Code
- Write clean comments explaining the logic and intent, especially in complex areas.
- Maintain notes on your changes: what, why, and impact.
- Test your code thoroughly, including edge cases.

## 4. Before You Commit & Push
- Run `npm run lint` or `yarn lint` to catch and fix all linting issues.
- Run a local build using `npm run build` to ensure no build-time errors.
- Write clear, meaningful commit messages. Review and edit AI-generated ones.
- Do not push experimental or untested code.
- If you moved, deleted, or reorganized files, inform the team clearly.

## 5. After Pushing
- Post a short summary of your changes in the team chat or tracker:
  - Feature/fix name
  - Files affected
  - Any structural changes or known issues
- Be available for code reviews and ready to respond.
- Be ready to patch bugs or issues immediately if discovered.

## 6. Team Discipline
- Unjustified broken builds or missing comments will be rejected.
- You are personally responsible for your code. Fix any issues you introduce.
- No merges should happen without at least one team review.

## 7. Additional Rules
- Remove dead or unused code.
- Maintain clean Git history. Rebase or squash commits when appropriate.
- Do not expose API keys, credentials, or sensitive information.
- Add tests (unit or integration) for complex or sensitive logic.
- Document shared logic, APIs, or configurations in the project README or wiki.

---

Failure to follow these rules will lead to rejected PRs and delayed deployments. This guide is not optional. It is enforced for the stability and maintainability of our codebase.

