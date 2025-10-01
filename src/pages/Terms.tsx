import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: October 1, 2025</p>

            <div className="space-y-8 text-foreground">
              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using B1nar's automation hub services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all users, including visitors, registered users, and premium subscribers.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground mb-4">
                  B1nar provides a comprehensive hub of business automation applications designed to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Streamline daily business operations</li>
                  <li>Automate repetitive tasks and workflows</li>
                  <li>Integrate with existing business tools</li>
                  <li>Provide analytics and insights</li>
                  <li>Enable team collaboration and communication</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To use certain features of our service, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your password</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                  <li>Not share your account credentials with others</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use B1nar services to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit malicious code or viruses</li>
                  <li>Attempt to gain unauthorized access to systems</li>
                  <li>Interfere with other users' access to services</li>
                  <li>Use the service for competitive analysis</li>
                  <li>Resell or redistribute our services</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">5. Subscription and Payments</h2>
                <p className="text-muted-foreground mb-4">
                  Our paid services are billed on a subscription basis. By subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Pay all fees associated with your subscription plan</li>
                  <li>Provide valid payment information</li>
                  <li>Automatic renewal unless you cancel before the renewal date</li>
                  <li>No refunds for partial subscription periods</li>
                  <li>Price changes with 30 days' notice</li>
                </ul>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality of B1nar services are owned by us and protected by international copyright, trademark, and other intellectual property laws. You are granted a limited license to use our services for your business purposes. This license does not include the right to modify, distribute, or create derivative works.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">7. Data and Privacy</h2>
                <p className="text-muted-foreground">
                  Your use of B1nar services is subject to our Privacy Policy. You retain all rights to your data. We do not claim ownership of any data you upload or create using our services. You grant us permission to use your data solely to provide and improve our services.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. We reserve the right to modify, suspend, or discontinue services with reasonable notice. We are not liable for any service interruptions or data loss, though we maintain regular backups.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, B1nar shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount you paid us in the past 12 months.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account if you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate these Terms of Service</li>
                  <li>Fail to pay subscription fees</li>
                  <li>Engage in fraudulent activity</li>
                  <li>Request account deletion</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Upon termination, your right to use the service ceases immediately. You may export your data before termination.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">11. Warranties and Disclaimers</h2>
                <p className="text-muted-foreground">
                  Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will meet your requirements or be error-free. You use our services at your own risk.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold B1nar harmless from any claims, damages, losses, liabilities, and expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of material changes via email or service notification. Continued use of services after changes constitutes acceptance of new terms.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration in accordance with commercial arbitration rules.
                </p>
              </section>

              <section className="liquid-glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>Email: legal@b1nar.com</p>
                  <p>Address: B1nar Inc., Legal Department</p>
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

export default Terms;
