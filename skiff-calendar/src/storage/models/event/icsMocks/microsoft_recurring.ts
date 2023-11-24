import { mockUser1 } from '../../../../../tests/mocks/user';

export const MICROSOFT_SENDER = 'recurring_sender@outlook.com';

export const microsoft_recurring = `BEGIN:VCALENDAR
METHOD:REQUEST
PRODID:Microsoft Exchange Server 2010
VERSION:2.0
BEGIN:VTIMEZONE
TZID:Israel Standard Time
BEGIN:STANDARD
DTSTART:16010101T020000
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=10
END:STANDARD
BEGIN:DAYLIGHT
DTSTART:16010101T020000
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=4FR;BYMONTH=3
END:DAYLIGHT
END:VTIMEZONE
BEGIN:VEVENT
ORGANIZER;CN=skiff skiff:mailto:${MICROSOFT_SENDER}
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=${mockUser1.defaultEmailAlias || ''}:mailto:${
  mockUser1.defaultEmailAlias || ''
}
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;CN=osimhia@skiff.town:mailto:osimhia@skiff.town
DESCRIPTION;LANGUAGE=en-US:\n..............................................
 ..........................................................................
 .................\nJoin online meeting<https://join.skype.com/RcDCvcdDrbSl
 >\n.......................................................................
 ..................................................................\n
RRULE:FREQ=WEEKLY;UNTIL=20230519T120000Z;INTERVAL=3
UID:040000008200E00074C5B7101A82E008000000008D91E4C85E44D901000000000000000
 0100000005E8D26951009E8498C3AD621CD62C801
SUMMARY;LANGUAGE=en-US:Test Microsoft recurring
DTSTART;TZID=Israel Standard Time:20230219T150000
DTEND;TZID=Israel Standard Time:20230219T160000
CLASS:PUBLIC
PRIORITY:5
DTSTAMP:20230219T123910Z
TRANSP:OPAQUE
STATUS:CONFIRMED
SEQUENCE:1
LOCATION;LANGUAGE=en-US:
X-MICROSOFT-CDO-APPT-SEQUENCE:1
X-MICROSOFT-CDO-OWNERAPPTID:2121440909
X-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE
X-MICROSOFT-CDO-INTENDEDSTATUS:BUSY
X-MICROSOFT-CDO-ALLDAYEVENT:FALSE
X-MICROSOFT-CDO-IMPORTANCE:1
X-MICROSOFT-CDO-INSTTYPE:1
X-MICROSOFT-ONLINEMEETINGEXTERNALLINK:https://join.skype.com/RcDCvcdDrbSl
X-MICROSOFT-ONLINEMEETINGINFORMATION:{"OnlineMeetingChannelId":null\,"Onlin
 eMeetingProvider":2}
X-MICROSOFT-DONOTFORWARDMEETING:FALSE
X-MICROSOFT-DISALLOW-COUNTER:FALSE
X-MICROSOFT-LOCATIONS:[]
BEGIN:VALARM
DESCRIPTION:REMINDER
TRIGGER;RELATED=START:-PT15M
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;
