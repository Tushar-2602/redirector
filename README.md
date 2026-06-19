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

## Usage

### Step 1: Create a `.env` file

```env
leetcode_profile=https://leetcode.com/u/tushark2602/
resume=https://example.com/resume.pdf
portfolio=https://example.com
```

### Step 2: Add your redirect paths

Each environment variable name becomes a URL path.

Example:

```env
leetcode_profile=https://leetcode.com/u/tushark2602/
```

creates:

```text
/leetcode_profile
```

### Step 3: Install Docker

Install Docker on your machine.

### Step 4: Run the container

```bash
docker run -p 3000:5000 --env-file .env docker.io/tkumar2602/redirector:latest
```

### Step 5: Open your redirect

```text
http://<your-public-ip>:3000/leetcode_profile
or
http://localhost:3000/leetcode_profile
```

You will be redirected to:

```text
https://leetcode.com/u/tushark2602/
```

## Deploy on Render

1. Create a new Web Service.
2. Select **Deploy from Existing Docker Image**.
3. Use:

```text
docker.io/tkumar2602/redirector:latest
```

4. Add your redirect variables in the Environment tab.
5. Deploy.

Example environment variables:

```env
resume=https://drive.google.com/file/d/your_resume
github=https://github.com/yourusername
linkedin=https://linkedin.com/in/yourusername
leetcode=https://leetcode.com/u/yourusername
```

## Prevent Free Tier Sleeping

If you are using Render's free tier, you can periodically ping your application using:

https://cron-job.org/

Create a cron job that requests "/donotuse/test" every few minutes to reduce cold starts.

## License

MIT
