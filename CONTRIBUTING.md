# Contributing to B1o

Thank you for wanting to contribute to B1o. We are thrilled to welcome you to our community. Before you start, please read this document to understand how you can contribute to this project.

## How to Contribute

1. Fork this repository.
2. Clone the repository to your local machine.

```bash
git clone git@github.com:<YOUR_GITHUB_USERNAME>/www.git # SSH
git clone https://github.com/<YOUR_GITHUB_USERNAME>/www.git # HTTPS
gh repo clone <YOUR_GITHUB_USERNAME>/www # GitHub CLI
```

3. Change directory to the cloned repository.

```bash
cd b1o
```

4. Create a branch for your contribution.

```bash
git checkout -b <BRANCH_NAME>
```

5. Start the development environment.

```bash
npm install
npm run dev
```

6. Make your changes.

7. Once you're done, commit your changes.

```bash
git add .
git commit -m "Your commit message"
```

### Commit Message Guidelines

- Commit messages must include a "type" as described in Conventional Commits
- Commit messages **must** start with a capital letter
- Commit messages **must not** end with a period `.`
- Commit messages **must** be in English
