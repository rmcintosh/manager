module.exports = {"name":"DNS Zones","basePath":"/dns/zones","description":"DNS Zone endpoints provide a means of managing the DNS <a href=\"#object-dnszone\"> DNS Zone objects</a> on your account.\nNote: the validation rules for DNS records are too complicated to document here. We'll just direct you to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt).\n","endpoints":[{"description":"Manage the collection of DNS Zones your account may access.\n","endpoints":null,"methods":[{"oauth":"dnszones:view","description":"Returns a list of <a href=\"#object-dnszone\">DNS Zones</a>.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/dns/zones\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"GET"},{"oauth":"dnszones:create","description":"Create a DNS Zone.\n","params":{"dnszone":{"description":"The DNS Zone name.\n"},"type":{"description":"DNS Zone <a href=\"#object-dnszone_type-enum\">type</a> as master or slave.\n"},"soa_email":{"optional":true,"description":"Start of Authority (SOA) contact email.\n"},"description":{"optional":true,"description":"A description to keep track of this DNS Zone.\n"},"refresh_sec":{"optional":true,"description":"Time interval before the DNS Zone should be refreshed, in seconds.\n"},"retry_sec":{"optional":true,"description":"Time interval that should elapse before a failed refresh should\n  be retried, in seconds.\n"},"expire_sec":{"optional":true,"description":"Time value that specifies the upper limit on\n  the time interval that can elapse before the DNS Zone is no\n  longer authoritative, in seconds.\n"},"ttl_sec":{"optional":true,"description":"Time interval that the resource record may be cached before\n  it should be discarded, in seconds.\n"},"status":{"optional":true,"description":"The status of the DNS Zone; it can be disabled, active, or edit_mode.\n"},"master_ips":{"optional":true,"description":"An array of IP addresses for this DNS Zone.\n"},"axfr_ips":{"optional":true,"description":"An array of IP addresses allowed to AXFR the entire DNS Zone.\n"},"display_group":{"optional":true,"description":"A display group to keep track of this DNS Zone.\n"}},"examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\n        \"dnszone\": \"example.com\",\n        \"type\": \"master\",\n        \"soa_email\": \"admin@example.com\",\n        \"description\": \"Example Description\",\n        \"refresh_sec\": 14400,\n        \"retry_sec\": 3600,\n        \"expire_sec\": 604800,\n        \"ttl_sec\": 3600,\n        \"status\": \"active\",\n        \"master_ips\": [\"127.0.0.1\",\"255.255.255.1\",\"123.123.123.7\"],\n        \"axfr_ips\": [\"44.55.66.77\"],\n        \"display_group\": \"Example Display Group\"\n    }'\n    https://$api_root/$version/dns/zones\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"POST"}],"path":"dns/zones"},{"endpoints":null,"methods":[{"oauth":"dnszones:view","description":"Returns information for the <a href=\"#object-dnszone\">DNS Zone</a> identified by :id.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/dns/zones/$dnszone_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"GET"},{"oauth":"dnszones:modify","description":"Modifies a given DNS Zone.\n","examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n  -H \"Authorization: token TOKEN\" \\\n  -X PUT -d '{\n    \"dnszone\": \"examplechange.com\",\n    \"description\": \"The changed description\",\n    \"display_group\": \"New display group\",\n    \"status\": \"edit_mode\",\n    \"soa_email\": \"newemail@example.com\",\n    \"retry_sec\": 3602,\n    \"master_ips\": [\"123.456.789.101\", \"192.168.1.1\", \"127.0.0.1\"],\n    \"axfr_ips\": [\"55.66.77.88\"],\n    \"expire_sec\": 604802,\n    \"refresh_sec\": 14402,\n    \"ttl_sec\": 3602\n  }'\n  https://$api_root/$version/dns/zones/$dnszone_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"PUT"},{"oauth":"dnszones:modify","dangerous":true,"description":"Deletes the DNS zone. This action cannot be undone.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    -X DELETE\n    https://$api_root/$version/dns/zones/$dnszone_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"DELETE"}],"path":"dns/zones/:id"},{"description":"Manage the collection of DNS Zone Records your account may access.\n","endpoints":null,"methods":[{"oauth":"dnszones:view","description":"Returns a list of <a href=\"#object-dnszonerecord\">DNS Zone Records</a>.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n    https://$api_root/$version/dns/zones/$dnszone_id/records\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"GET"},{"oauth":"dnszones:create","description":"Create a DNS Zone Record.\n","params":{"type":{"description":"<a href=\"#object-zone-record-types-enum\">Type</a> of record.\n"},"name":{"optional":true,"description":"The hostname or FQDN. When type=MX the subdomain to delegate to the Target MX server.\n","limit":"1-100 characters"},"target":{"optional":true,"description":"When Type=MX the hostname. When Type=CNAME the target of the alias. When Type=TXT the value of the record. When Type=A or AAAA the token of '[remote_addr]' will be substituted with the IP address of the request.\n"},"priority":{"optional":true,"description":"Priority for MX and SRV records.\n"},"weight":{"optional":true,"description":"A relative weight for records with the same priority, higher value means more preferred.\n"},"port":{"optional":true,"description":"The TCP or UDP port on which the service is to be found.\n"},"service":{"optional":true,"description":"The service to append to an SRV record.\n"},"protocol":{"optional":true,"description":"The protocol to append to an SRV record.\n"},"ttl":{"optional":true,"description":"Time interval that the resource record may be cached before\n  it should be discarded. In seconds. Leave as 0 to accept\n  our default.\n"}},"examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n    -H \"Authorization: token $TOKEN\" \\\n    -X POST -d '{\n        \"type\": \"A\",\n        \"target\": \"123.456.789.101\",\n        \"name\": \"sub.example.com\"\n    }'\n    https://$api_root/$version/dns/zones/$dnszone_id/records\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"POST"}],"path":"dns/zones/:id/records"},{"endpoints":null,"methods":[{"oauth":"dnszones:view","description":"Returns information for the <a href=\"#object-dnszonerecord\">DNS Zone Record</a> identified by \":id\".\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n  https://$api_root/$version/dns/zones/$dnszone_id/records/$record_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"GET"},{"oauth":"dnszones:modify","description":"Modifies a given DNS Zone Record.\n","examples":[{"name":"curl","value":"curl -H \"Content-Type: application/json\" \\\n  -H \"Authorization: token TOKEN\" \\\n  -X PUT -d '{\n        \"target\": \"123.456.789.102\",\n        \"name\": \"sub2.example.com\"\n  }'\n  https://$api_root/$version/dns/zones/$dnszone_id/records/$record_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"PUT"},{"oauth":"dnszones:modify","dangerous":true,"description":"Deletes the DNS Zone Record. This action cannot be undone.\n","examples":[{"name":"curl","value":"curl -H \"Authorization: token $TOKEN\" \\\n  -X DELETE\n  https://$api_root/$version/dns/zones/$dnszone_id/records/$record_id\n"},{"name":"python","value":"import linode\nTODO\n"}],"name":"DELETE"}],"path":"dns/zones/:id/records/:id"}],"methods":null};