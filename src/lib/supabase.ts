import { createClient } from '@supabase/supabase-js';

// Environment variable retrieval
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-supabase-project-id.supabase.co'
);

// Initialize client if credentials are present, else null
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// ====================================================================
// TYPES
// ====================================================================

export interface DonationRecord {
  id?: string;
  donor_name: string;
  donor_email?: string;
  donor_phone?: string;
  pan_number?: string;
  amount: number;
  tier?: string;
  frequency?: string;
  receipt_80g?: boolean;
  is_anonymous?: boolean;
  payment_status?: string;
  transaction_id?: string;
  created_at?: string;
}

export interface StudentSponsorshipRecord {
  id?: string;
  sponsor_name: string;
  sponsor_email: string;
  sponsor_phone?: string;
  student_id: string;
  student_name: string;
  monthly_amount: number;
  status?: string;
  created_at?: string;
}

export interface VolunteerRecord {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  role: string;
  city: string;
  availability: string;
  motivation?: string;
  status?: string;
  created_at?: string;
}

export interface ContactMessageRecord {
  id?: string;
  full_name: string;
  email: string;
  subject: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface NewsletterSubscriberRecord {
  id?: string;
  email: string;
  status?: string;
  subscribed_at?: string;
}

// ====================================================================
// HELPER FUNCTIONS (WITH HYBRID FALLBACK)
// ====================================================================

/**
 * Submit a new donation to Supabase
 */
export async function submitDonation(donation: DonationRecord): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabase) {
    console.log('[Supabase Demo Mode] Donation recorded locally:', donation);
    return { success: true, data: { ...donation, id: 'demo-' + Date.now() } };
  }

  try {
    const { data, error } = await supabase
      .from('donations')
      .insert([donation])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Error] submitDonation:', err);
    return { success: false, error: err.message || 'Failed to record donation' };
  }
}

/**
 * Submit a student sponsorship
 */
export async function submitSponsorship(sponsorship: StudentSponsorshipRecord): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabase) {
    console.log('[Supabase Demo Mode] Sponsorship recorded locally:', sponsorship);
    return { success: true, data: { ...sponsorship, id: 'demo-' + Date.now() } };
  }

  try {
    const { data, error } = await supabase
      .from('student_sponsorships')
      .insert([sponsorship])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Error] submitSponsorship:', err);
    return { success: false, error: err.message || 'Failed to record sponsorship' };
  }
}

/**
 * Submit a volunteer application
 */
export async function submitVolunteer(volunteer: VolunteerRecord): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabase) {
    console.log('[Supabase Demo Mode] Volunteer application recorded locally:', volunteer);
    return { success: true, data: { ...volunteer, id: 'demo-' + Date.now() } };
  }

  try {
    const { data, error } = await supabase
      .from('volunteers')
      .insert([volunteer])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Error] submitVolunteer:', err);
    return { success: false, error: err.message || 'Failed to record volunteer application' };
  }
}

/**
 * Submit a contact form message
 */
export async function submitContactMessage(contact: ContactMessageRecord): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabase) {
    console.log('[Supabase Demo Mode] Contact message recorded locally:', contact);
    return { success: true, data: { ...contact, id: 'demo-' + Date.now() } };
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([contact])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Error] submitContactMessage:', err);
    return { success: false, error: err.message || 'Failed to submit contact message' };
  }
}

/**
 * Subscribe email to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; data?: any; error?: string }> {
  if (!supabase) {
    console.log('[Supabase Demo Mode] Newsletter subscriber recorded locally:', email);
    return { success: true, data: { email, id: 'demo-' + Date.now() } };
  }

  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error('[Supabase Error] subscribeNewsletter:', err);
    return { success: false, error: err.message || 'Failed to subscribe' };
  }
}

/**
 * Fetch latest completed non-anonymous donations for live donor feed
 */
export async function fetchLiveDonations(): Promise<DonationRecord[]> {
  if (!supabase) {
    return [
      { id: '1', donor_name: 'Ramesh Chandra', amount: 5000, tier: 'Education Sponsor', created_at: 'Just now' },
      { id: '2', donor_name: 'Anita Sharma', amount: 10000, tier: 'Smart Classroom Kit', created_at: '2 hrs ago' },
      { id: '3', donor_name: 'Sunil Verma', amount: 2500, tier: 'Skill Development', created_at: '5 hrs ago' }
    ];
  }

  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('is_anonymous', false)
      .eq('payment_status', 'completed')
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('[Supabase Error] fetchLiveDonations:', err);
    return [];
  }
}
