/*
# Create contact submissions table

1. New Tables
- `contact_submissions`: briefs, enquiries, artist applications and partnership requests sent from the Contact page.
  - `id` (uuid, primary key)
  - `request_type` (text): one of brief, enquiry, apply, partnership
  - `name` (text, required, max 120 chars)
  - `email` (text, required, max 254 chars)
  - `message` (text, required, max 4000 chars)
  - `created_at` (timestamptz)

2. Security
- Row level security enabled on `contact_submissions`.
- Visitors (no sign-in) may only INSERT new submissions. They cannot read, edit or delete anything.
- Submissions are read by the team through the Supabase dashboard, which bypasses these grants.

3. Notes
- CHECK constraints keep the stored data to valid request types and reasonable lengths.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type text NOT NULL CHECK (request_type IN ('brief', 'enquiry', 'apply', 'partnership')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email LIKE '%_@_%.__%'),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 4000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_submissions TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
