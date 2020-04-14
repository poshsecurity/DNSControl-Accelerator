function GoogleSuiteRecords() {
  return [
    MX('@', 1, 'aspmx.l.google.com.', TTL('1h')),
    MX('@', 5, 'alt1.aspmx.l.google.com.', TTL('1h')),
    MX('@', 5, 'alt2.aspmx.l.google.com.', TTL('1h')),
    MX('@', 10, 'alt3.aspmx.l.google.com.', TTL('1h')),
    MX('@', 10, 'alt4.aspmx.l.google.com.', TTL('1h')),
    CNAME('calendar', 'ghs.googlehosted.com.', TTL('1h')),
    CNAME('drive', 'ghs.googlehosted.com.', TTL('1h')),
    CNAME('mail', 'ghs.googlehosted.com.', TTL('1h')),
    CNAME('groups', 'ghs.googlehosted.com.', TTL('1h')),
    CNAME('sites', 'ghs.googlehosted.com.', TTL('1h')),
    CNAME('start', 'ghs.googlehosted.com.', TTL('1h'))
  ];
}
