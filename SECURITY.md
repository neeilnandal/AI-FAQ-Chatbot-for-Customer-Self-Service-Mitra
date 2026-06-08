# Security Policy

## Scope

This repository contains a static website integration for a Botpress-powered FAQ chatbot. The project does not store customer data or run a custom backend service.

## Security Principles

- Do not commit private credentials, API keys, admin tokens, or internal support data.
- Use anonymized FAQ samples only.
- Restrict chatbot access to approved domains in production.
- Keep Botpress admin access limited to authorized users.
- Review chatbot responses for accidental disclosure of internal information.

## Known Frontend Exposure

Botpress public frontend identifiers such as bot ID, client ID, and webhook ID may appear in frontend code because they are required for browser-side webchat embedding.

Do not expose:

- Botpress admin credentials
- API tokens
- Internal analytics credentials
- Private knowledge base exports
- Customer conversations

## Recommended Production Controls

- Configure `allowedOrigins` with approved production domains.
- Use HTTPS-only script and asset loading.
- Add a Content Security Policy where possible.
- Monitor unusual query patterns or abuse attempts.
- Review unanswered queries before expanding FAQ content.
- Disable unused chatbot features.
- Keep Botpress workspace permissions minimal.

## Reporting Issues

If you find a security issue in this repository, open a private report or contact the maintainer directly.
