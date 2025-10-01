import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary">
              <span className="text-xl font-bold">B1</span>
            </div>
            <span className="text-xl font-bold gradient-text">B1nar</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="glass-morphism">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="neo-morph rounded-3xl p-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: October 1, 2025</p>

            <div className="space-y-8 text-foreground">
              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  At B1nar, we collect information that you provide directly to us when using our automation hub services. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Account information (name, email, password)</li>
                  <li>Business information and company details</li>
                  <li>Usage data and analytics</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new features and services</li>
                  <li>Protect against fraudulent or illegal activity</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information. Our platform uses end-to-end encryption, secure data centers, and regular security audits to ensure your data remains safe. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data</li>
                  <li>Disable cookies in your browser settings</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. This helps us improve user experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>Email: privacy@b1nar.com</p>
                  <p>Address: B1nar Inc., Privacy Department</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-sm font-bold">B1</span>
              </div>
              <span className="font-bold">B1nar</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 B1nar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
