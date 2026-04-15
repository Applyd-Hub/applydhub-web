import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Applyd Hub",
};

const PRIVACY_TEXT = `Effective date: April 15, 2026

1. What We Collect
We collect only what you provide: your name, email address, profile details (photo, skills, experience), resume content, and job application data. We also collect anonymous usage analytics to improve the app.

2. How We Use It
Your data is used solely to deliver the Applyd Hub service — generating resumes, tracking applications, and personalising your experience. We do not sell, rent, or share your personal data with third parties for marketing purposes.

3. Data Storage
Your data is stored locally on your device. If you use cloud sync features, your data is transmitted and stored securely on our servers.

4. Analytics
We use privacy-focused analytics (PostHog) to understand how the app is used in aggregate. No personally identifiable information is sent to analytics services.

5. Your Rights
You may access, correct, or delete your data at any time. To delete everything, go to Settings → Delete Profile. To request a copy of your data or ask any privacy-related question, contact us.

6. Data Retention
Your data is retained for as long as your account is active. When you delete your profile, all associated data is permanently removed.

7. Children
This app is not intended for children under 16. We do not knowingly collect data from minors.

8. Changes
We may update this policy. We will notify you of significant changes through the app.

Contact: codewithafoo.dev@gmail.com`;

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy">{PRIVACY_TEXT}</LegalPage>;
}
