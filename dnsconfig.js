// Helper util. Uncomment if using CloudFlare, Google Suite or Office 365.
// require('util/cloudflare.js');
// require('util/google_suite.js');
// require('util/office365.js');

// Common TTL periods
require('util/ttl.js');

// Domain Registrars
var REG_DNSIMPLE = NewRegistrar("dnsimple", "DNSIMPLE");

// DNS Providers
var DNS_DNSIMPLE = NewDnsProvider("dnsimple", "DNSIMPLE");

// DNS Zone
D('mydomain.com', REG_DNSIMPLE, DnsProvider(DNS_DNSIMPLE),

  /*
    SPF Record

    This uses the SPF_Builder as described here - https://stackexchange.github.io/dnscontrol/spf-optimizer

    Common SPF entries are listed below, include those you require.
    If the domain doesn't send email, leave just the 'v=spf1' and '-all' lines.
  */
  SPF_BUILDER({
    label: "@",
    parts: [
      'v=spf1',
      // 'ip4:198.168.0.0/24',                 // Example IP record
      // 'include:spf.protection.outlook.com', // Office 365
      // 'include:_spf.google.com',            // Google App Suite
      // 'include:mailgun.org',                // Mailgun
      // 'include:mail.zendesk.com',           // Zenddesk
      // 'include:servers.mcsv.net',           // MailChimp
      // 'include:sendgrid.net',               // SendGrid
      // 'include:_spf.salesforce.com',        // Salesforce
      // 'include:sent-via.netsuite.com',      // NetSuite
      '-all' // Servers not compliant with SPF will fail and be rejected
    ],
    ttl: one_hour
  }),

  // DMARC Policy, reject any messages that fail DMARC checks. Keep even if no email sent.
  TXT('_dmarc', 'v=DMARC1; p=reject; pct=100;', one_hour),

  // Domain uses Office 365 so call the record builder function.
  // Office365Records('mydomain.com', 'ms123456', 'mydomain'),

  // Domain uses Google Suite
  // GoogleSuiteRecords(),

  // Test entry
  TXT('testentry', 'Hello World', five_minutes)
);
