# Redirector

A free, lightweight, self-hosted URL redirect service.

Perfect for resumes, portfolios, social profiles, QR codes, and any link that you may want to update later without changing the URL you've already shared.

## Features

* Custom redirect paths
* Environment variable based configuration
* No database required
* Docker support
* Free to self-host
* Easy deployment on Render, VPS, EC2, Railway, and other Docker platforms

---

# Quick Start (Render Free Tier)

## 1. Create a New Web Service

Choose **Deploy from Existing Docker Image**.

Use:

```text
docker.io/tkumar2602/redirector:latest
```

## 2. Add Environment Variables

Each environment variable name becomes a redirect path.

Example:

```env
resume=https://drive.google.com/file/d/your_resume
github=https://github.com/yourusername
linkedin=https://linkedin.com/in/yourusername
leetcode=https://leetcode.com/u/yourusername
```

## Redirect Path Rules

Redirect path names must follow these rules:

* Only alphabetic characters (`a-z`, `A-Z`)
* Digits (`0-9`)
* Underscore (`_`)
* Hyphen (`-`)
* Period (`.`)
* Must **not** start with a digit

Valid examples:

```env
github=https://github.com/yourusername
leetcode_profile=https://leetcode.com/u/yourusername
my-site=https://example.com
resume.v2=https://example.com/resume
```

Invalid examples:

```env
123github=https://github.com/yourusername
my profile=https://example.com
my/path=https://example.com
my@site=https://example.com
```

If an invalid path is provided, Redirector will display:

```text
Redirect path must consist of only alphabetic characters,
digits, '_', '-', or '.', and must not start with a digit.
```

## 3. Deploy

After deployment:

```text
https://your-app.onrender.com/github
```

redirects to:

```text
https://github.com/yourusername
```

---

# Keep Render Free Tier Awake

To reduce cold starts, periodically ping your application using:

https://cron-job.org/

Example URL:

```text
https://your-app.onrender.com/donotuse/test
```

Create a cron job that requests this URL every few minutes.

---

# Self Hosting with Docker

## Step 1: Create a `.env` File

Example:

```env
leetcode_profile=https://leetcode.com/u/tushark2602/
github=https://github.com/tkumar2602
linkedin=https://linkedin.com/in/yourusername
```

## Step 2: Install Docker

Install Docker on your machine.

## Step 3: Run the Container

```bash
docker run -p 3000:5000 --env-file .env docker.io/tkumar2602/redirector:latest
```

## Step 4: Open Your Redirect

```text
http://localhost:3000/leetcode_profile
```

or

```text
http://<your-public-ip>:3000/leetcode_profile
```

You will be redirected to:

```text
https://leetcode.com/u/tushark2602/
```

---

# How It Works

Given:

```env
github=https://github.com/yourusername
```

The service automatically creates:

```text
/github
```

which redirects to:

```text
https://github.com/yourusername
```

No database or configuration files are required beyond environment variables.

---

# Reserved Environment Variables

Avoid using common system or platform environment variable names as redirect paths.

Examples:

```text
PATH
HOME
USER
USERNAME
TEMP
TMP
SHELL
PWD
HOSTNAME
PORT
NODE_ENV
```

These variables may already be used by your operating system, Docker, Render, Railway, or other hosting platforms.

Use custom names such as:

```env
github=https://github.com/yourusername
resume=https://example.com/resume.pdf
portfolio=https://example.com
```

instead.

---

# License

MIT
