-- ====================================================================
-- CHARITARTH FOUNDATION — OFFICIAL SUPABASE BACKEND SCHEMA
-- ====================================================================
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- --------------------------------------------------------------------
-- 1. DONATIONS TABLE
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donor_name TEXT NOT NULL,
    donor_email TEXT NOT NULL,
    donor_phone TEXT,
    pan_number TEXT,
    amount NUMERIC(10, 2) NOT NULL CHECK (amount > 0),
    tier TEXT NOT NULL DEFAULT 'Custom',
    frequency TEXT NOT NULL DEFAULT 'one-time', -- 'one-time' or 'monthly'
    receipt_80g BOOLEAN DEFAULT TRUE,
    is_anonymous BOOLEAN DEFAULT FALSE,
    payment_status TEXT NOT NULL DEFAULT 'completed', -- 'pending', 'completed', 'failed'
    transaction_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies for Donations
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public insert for donations" 
ON public.donations FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Enable public read for non-anonymous donations" 
ON public.donations FOR SELECT 
USING (is_anonymous = FALSE OR auth.role() = 'service_role');


-- --------------------------------------------------------------------
-- 2. STUDENT SPONSORSHIPS TABLE
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.student_sponsorships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sponsor_name TEXT NOT NULL,
    sponsor_email TEXT NOT NULL,
    sponsor_phone TEXT,
    student_id TEXT NOT NULL,
    student_name TEXT NOT NULL,
    monthly_amount NUMERIC(10, 2) NOT NULL CHECK (monthly_amount > 0),
    status TEXT NOT NULL DEFAULT 'active', -- 'active', 'paused', 'cancelled'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.student_sponsorships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public insert for student sponsorships" 
ON public.student_sponsorships FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Enable public read for student sponsorships" 
ON public.student_sponsorships FOR SELECT 
USING (true);


-- --------------------------------------------------------------------
-- 3. VOLUNTEERS TABLE
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.volunteers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    role TEXT NOT NULL,
    city TEXT NOT NULL,
    availability TEXT NOT NULL,
    motivation TEXT,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public insert for volunteers" 
ON public.volunteers FOR INSERT 
WITH CHECK (true);


-- --------------------------------------------------------------------
-- 4. CONTACT MESSAGES TABLE
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread', -- 'unread', 'read', 'replied'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public insert for contact messages" 
ON public.contact_messages FOR INSERT 
WITH CHECK (true);


-- --------------------------------------------------------------------
-- 5. NEWSLETTER SUBSCRIBERS TABLE
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    status TEXT NOT NULL DEFAULT 'subscribed', -- 'subscribed', 'unsubscribed'
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public insert for newsletter subscribers" 
ON public.newsletter_subscribers FOR INSERT 
WITH CHECK (true);


-- --------------------------------------------------------------------
-- 6. STUDENTS CATALOG TABLE (For 1-to-1 Sponsorship Portal)
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.students_catalog (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    village TEXT NOT NULL,
    state TEXT NOT NULL,
    grade TEXT NOT NULL,
    dream TEXT NOT NULL,
    monthly_amount NUMERIC(10, 2) NOT NULL,
    image_url TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'available', -- 'available', 'sponsored'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.students_catalog ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable public read for students catalog" 
ON public.students_catalog FOR SELECT 
USING (true);


-- --------------------------------------------------------------------
-- SEED DATA: 4 RURAL STUDENTS FOR SPONSORSHIP PORTAL
-- --------------------------------------------------------------------
INSERT INTO public.students_catalog (id, name, age, village, state, grade, dream, monthly_amount, image_url, status)
VALUES 
  ('stu-1', 'Aarav Kumar', 10, 'Hardoi', 'Uttar Pradesh', 'Class 5', 'Wants to become a Solar Engineer', 1000, '/Photos/IMG_3779.JPG', 'available'),
  ('stu-2', 'Sujata Kumari', 12, 'Gaya', 'Bihar', 'Class 7', 'Wants to become a Doctor', 1200, '/Photos/IMG_3780.JPG', 'available'),
  ('stu-3', 'Vikram Singh', 9, 'Barmer', 'Rajasthan', 'Class 4', 'Wants to become a Teacher', 1000, '/Photos/IMG_3781.JPG', 'available'),
  ('stu-4', 'Pooja Devi', 11, 'Chhatarpur', 'Madhya Pradesh', 'Class 6', 'Wants to become a Computer Scientist', 1500, '/Photos/IMG_3782.JPG', 'available')
ON CONFLICT (id) DO NOTHING;

-- --------------------------------------------------------------------
-- SEED DATA: SAMPLE DONATIONS FOR PUBLIC DONOR WALL
-- --------------------------------------------------------------------
INSERT INTO public.donations (donor_name, donor_email, amount, tier, frequency, receipt_80g, is_anonymous, payment_status, transaction_id)
VALUES
  ('Ramesh Chandra', 'ramesh@example.com', 5000.00, 'Education Sponsor', 'one-time', true, false, 'completed', 'TXN_9876541'),
  ('Anita Sharma', 'anita@example.com', 10000.00, 'Smart Classroom Kit', 'one-time', true, false, 'completed', 'TXN_9876542'),
  ('Sunil Verma', 'sunil@example.com', 2500.00, 'Skill Development', 'monthly', true, false, 'completed', 'TXN_9876543'),
  ('Anonymous Donor', 'anonymous@example.com', 15000.00, 'CSR Supporter', 'one-time', false, true, 'completed', 'TXN_9876544')
ON CONFLICT DO NOTHING;
