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

  /*
    DMARC Policy

    This uses the DMARC Builder as described here - https://stackexchange.github.io/dnscontrol/js#DMARC_Builder
    
    Keep this even if no email is sent from this domain. If no email, ensure policy is reject.
  */
  DMARC_BUILDER({
    policy: 'reject',
    ttl: one_hour
  }),

  // Domain uses Office 365 so call the record builder function.
  // Office365Records('mydomain.com', 'ms123456', 'mydomain'),

  // Domain uses Google Suite
  // GoogleSuiteRecords(),

  /*
    MTA-STS (See: https://scotthelme.co.uk/improving-email-security-with-mta-sts/)

    Uncomment these lines if you wish to configure MTA-STS and reporting
  */
  // TXT('_mta-sts', 'v=STSv1; id=1565808194', one_hour),
  // TXT('_smtp._tls', 'v=TLSRPTv1;rua=mailto:{subdomain}-d@tlsrpt.report-uri.com', one_hour),

  /*
    CAA Record (See: https://stackexchange.github.io/dnscontrol/caa-builder)

    Do not define anything except iodef if you are running on CloudFlare.
  */
  /*
  CAA_BUILDER({
    label: '@',
    iodef: 'mailto:test@domain.tld',
    iodef_critical: true,
    issue: [
      'letsencrypt.org',
      'comodoca.com',
      'sectigo.com', //I think we only need this one and not comodoca.com
      'quovadisglobal.com',
      'digicert.com'
    ],
    issuewild: [
      'letsencrypt.org',
      'comodoca.com',
      'sectigo.com', //I think we only need this one and not comodoca.com
      'quovadisglobal.com',
      'digicert.com'
    ],
    ttl: one_hour
  })
  */

  // AUTODNSSEC indicates that the DNS provider can automatically manage DNSSEC for a domain and we should ask it to do so.
  // See: https://stackexchange.github.io/dnscontrol/js
  // AUTODNSSEC,

  // Test entry
  TXT('testentry', 'Hello World', five_minutes)
);
