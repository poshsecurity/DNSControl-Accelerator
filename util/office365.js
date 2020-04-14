
function Office365Records(domain_name, domain_identifier, onmicrosoft_domain) {
  var domain_name_dashed = domain_name.split('.').join('-');
  var dkim1_record = 'selector1.{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);
  var dkim2_record = 'selector2.{replace1}._domainkey.{replace2}.onmicrosoft.com.'.replace('{replace1}', domain_name_dashed).replace('{replace2}', onmicrosoft_domain);

  return [
    TXT('@', 'MS='.concat(domain_identifier), TTL('1h')),
    MX('@', 0, domain_name_dashed.concat('.mail.protection.outlook.com.'), TTL('1h')),
    CNAME('selector1._domainkey', dkim1_record, TTL('1h')),
    CNAME('selector2._domainkey', dkim2_record, TTL('1h')),
    SRV('_sip._tls', 100, 1, 443, 'sipdir.online.lync.com.', TTL('1h')),
    SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.', TTL('1h')),
    CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.', TTL('1h')),
    CNAME('autodiscover', 'autodiscover.outlook.com.', TTL('1h')),
    CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.', TTL('1h')),
    CNAME('lyncdiscover', 'webdir.online.lync.com.', TTL('1h')),
    CNAME('msoid', 'clientconfig.microsoftonline-p.net.', TTL('1h')),
    CNAME('sip', 'sipdir.online.lync.com.', TTL('1h'))
  ];
}



  
