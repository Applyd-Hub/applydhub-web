import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Applyd Hub",
};

const TERMS_TEXT = `Effective date: April 15, 2026

By using Applyd Hub, you agree to these terms.

1. The Service
Applyd Hub helps you track job applications, manage resumes, and organise your job search. Data is stored locally on your device. Optional features may sync data with our servers.

2. Your Account
You are responsible for keeping your credentials secure. You must be at least 16 years old to use this app.

3. Your Data
You own your data. We do not sell it. You can delete your account and all associated data at any time from Settings → Delete Profile.

4. Acceptable Use
You agree not to misuse the service, attempt to access other users' data, or use the app for any unlawful purpose.

5. AI Features
The app uses AI to generate resume suggestions and insights. These are provided as-is and should be reviewed before use. We are not responsible for decisions made based on AI output.

6. Changes
We may update these terms. Continued use of the app after changes means you accept the new terms.

7. Disclaimer
The app is provided "as is" without warranty. We are not liable for missed deadlines, lost applications, or other outcomes from use of the app.

Contact: codewithafoo.dev@gmail.com`;

export default function TermsPage() {
  return <LegalPage title="Terms of Service">{TERMS_TEXT}</LegalPage>;
}
