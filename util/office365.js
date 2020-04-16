function Office365Records(domain_name, domain_identifier, onmicrosoft_domain) {
  var domain_name_dashed = domain_name.split('.').join('-');
  var dkim1_record = 'selector1.{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);
  var dkim2_record = 'selector2.{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);

  return [
    TXT('@', 'MS='.concat(domain_identifier), one_hour),
    MX('@', 0, domain_name_dashed.concat('.mail.protection.outlook.com.'), one_hour),
    CNAME('selector1._domainkey', dkim1_record, one_hour),
    CNAME('selector2._domainkey', dkim2_record, one_hour),
    SRV('_sip._tls', 100, 1, 443, 'sipdir.online.lync.com.', one_hour),
    SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.', one_hour),
    CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.', one_hour),
    CNAME('autodiscover', 'autodiscover.outlook.com.', one_hour),
    CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.', one_hour),
    CNAME('lyncdiscover', 'webdir.online.lync.com.', one_hour),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.', one_hour),
    CNAME('sip', 'sipdir.online.lync.com.', one_hour)
  ];
}