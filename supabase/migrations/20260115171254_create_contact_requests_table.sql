/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key)
      - `name` (text) - Nome del richiedente
      - `email` (text) - Email del richiedente
      - `phone` (text) - Telefono del richiedente
      - `date` (date) - Data desiderata per l'esperienza
      - `guests` (integer) - Numero di ospiti
      - `message` (text) - Messaggio aggiuntivo
      - `created_at` (timestamptz) - Data di creazione della richiesta
      
  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for anonymous users to insert their own requests
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  guests integer NOT NULL DEFAULT 2,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);