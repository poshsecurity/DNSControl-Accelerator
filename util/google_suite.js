function GoogleSuiteRecords() {
  return [
    MX('@', 1, 'aspmx.l.google.com.', one_hour),
    MX('@', 5, 'alt1.aspmx.l.google.com.', one_hour),
    MX('@', 5, 'alt2.aspmx.l.google.com.', one_hour),
    MX('@', 10, 'alt3.aspmx.l.google.com.', one_hour),
    MX('@', 10, 'alt4.aspmx.l.google.com.', one_hour),
    CNAME('calendar', 'ghs.googlehosted.com.', one_hour),
    CNAME('drive', 'ghs.googlehosted.com.', one_hour),
    CNAME('mail', 'ghs.googlehosted.com.', one_hour),
    CNAME('groups', 'ghs.googlehosted.com.', one_hour),
    CNAME('sites', 'ghs.googlehosted.com.', one_hour),
    CNAME('start', 'ghs.googlehosted.com.', one_hour)
  ];
}