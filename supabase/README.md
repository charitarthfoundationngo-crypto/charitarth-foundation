# ⚡ Charitarth Foundation — Supabase Backend Setup Guide

This guide walks you through setting up your free Supabase PostgreSQL database and connecting it to the Charitarth Foundation web application.

---

## 🛠️ Step-by-Step Setup (5 Minutes)

### Step 1: Create a Free Supabase Account & Project
1. Go to [supabase.com](https://supabase.com) and click **Start your project**.
2. Sign in with GitHub.
3. Click **New Project**, select an organization, and fill in:
   - **Name**: `charitarth-foundation-db`
   - **Database Password**: Set a secure password.
   - **Region**: Select `South Asia (Mumbai)` for optimal latency in India.
4. Click **Create new project**.

---

### Step 2: Run the SQL Schema
1. In your Supabase Dashboard, click on **SQL Editor** from the left navigation menu.
2. Click **New Query**.
3. Copy the entire contents of `supabase/schema.sql` from this repository.
4. Paste it into the SQL Editor and click **Run** (or press `Cmd + Enter`).
5. You should see `Success. No rows returned.`

---

### Step 3: Tables Created
The schema automatically provisions the following 6 tables with Row Level Security (RLS) enabled:

| Table Name | Description |
|---|---|
| `donations` | Stores all 80G tax-exempt donations, donor details, PAN, and transaction IDs |
| `student_sponsorships` | Stores 1-to-1 child sponsorship commitments |
| `volunteers` | Stores volunteer applications, skills, availability, and selected roles |
| `contact_messages` | Stores inquiries sent via the Reach Out form |
| `newsletter_subscribers` | Stores email addresses subscribed to field reports |
| `students_catalog` | Stores rural student profiles for the sponsorship portal |

---

### Step 4: Get Your API Keys
1. In your Supabase Dashboard, go to **Project Settings** -> **API**.
2. Under **Project URL**, copy the `URL` (e.g., `https://xyzabcdefg.supabase.co`).
3. Under **Project API keys**, copy the `anon` `public` key.

---

### Step 5: Update `.env` File
In your local project folder (or Vercel / Netlify environment variables), update `.env`:

```env
VITE_SUPABASE_URL="https://xyzabcdefg.supabase.co"
VITE_SUPABASE_ANON_KEY="your-actual-anon-key-here"
```

---

## 🔒 Security & Hybrid Fallback Architecture

- **Automatic Demo Fallback**: If Supabase keys are not set, the app runs smoothly in **Demo Mode** without throwing errors.
- **Row Level Security (RLS)**: Public visitors can insert donations, volunteer forms, and contact messages, but cannot view other donors' sensitive PAN numbers or emails.
