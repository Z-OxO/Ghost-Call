-- GhostCall Database Schema
-- Run this script in your Supabase SQL editor

-- Accounts table (Mullvad-style, ID only)
CREATE TABLE IF NOT EXISTS accounts (
  id TEXT PRIMARY KEY, -- Format: XXXX-XXXX-XXXX-XXXX
  credits INTEGER DEFAULT 0,
  assigned_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Credits/Transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id TEXT REFERENCES accounts(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL, -- Positive for purchases, negative for usage
  type TEXT NOT NULL, -- 'purchase', 'call', 'refund'
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Call history table
CREATE TABLE IF NOT EXISTS calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id TEXT REFERENCES accounts(id) ON DELETE CASCADE,
  destination TEXT NOT NULL, -- Country/region, NOT the actual number
  duration INTEGER NOT NULL, -- In seconds
  credits_used INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE calls ENABLE ROW LEVEL SECURITY;

-- RLS Policies (accounts can only access their own data)
CREATE POLICY "Users can view own account" ON accounts
  FOR SELECT USING (true);

CREATE POLICY "Users can insert own account" ON accounts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update own account" ON accounts
  FOR UPDATE USING (true);

CREATE POLICY "Users can view own transactions" ON transactions
  FOR SELECT USING (true);

CREATE POLICY "Users can view own calls" ON calls
  FOR SELECT USING (true);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_accounts_id ON accounts(id);
CREATE INDEX IF NOT EXISTS idx_transactions_account ON transactions(account_id);
CREATE INDEX IF NOT EXISTS idx_calls_account ON calls(account_id);
