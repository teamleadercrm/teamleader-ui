import { DateTime, Info } from 'luxon';
var defaultLocale = 'en-GB';
var firstDayOfWeek = {
  'da-DK': 1,
  'de-DE': 1,
  'en-GB': 1,
  'en-US': 0,
  'es-ES': 1,
  'fi-FI': 1,
  'fr-BE': 1,
  'fr-FR': 1,
  'it-IT': 1,
  'nb-NO': 1,
  'nl-BE': 1,
  'nl-NL': 1,
  'pl-PL': 1,
  'pt-PT': 1,
  'sv-SE': 1,
  'tr-TR': 1,
};
export var formatDay = function formatDay(day) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  return DateTime.fromJSDate(day)
    .setLocale(locale)
    .toLocaleString(DateTime.DATE_HUGE);
};
export var formatMonthTitle = function formatMonthTitle(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  return DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString({
      month: 'long',
      year: 'numeric',
    });
};
export var formatWeekdayShort = function formatWeekdayShort(dayOfWeekNumber) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var dayIndex = (7 + dayOfWeekNumber - getFirstDayOfWeek(locale)) % 7;
  return Info.weekdays('short', {
    locale: locale,
  })[dayIndex];
};
export var formatWeekdayLong = function formatWeekdayLong(dayOfWeekNumber) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var dayIndex = (7 + dayOfWeekNumber - 1) % 7;
  return Info.weekdays('long', {
    locale: locale,
  })[dayIndex];
};
export var getFirstDayOfWeek = function getFirstDayOfWeek() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLocale;
  return firstDayOfWeek[locale] || firstDayOfWeek[defaultLocale];
};
export var getMonths = function getMonths() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLocale;
  return Info.months('long', {
    locale: locale,
  });
};
export var formatDate = function formatDate(date) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLocale;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DateTime.DATE_SHORT;
  return DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format);
};
export var parseDate = function parseDate(string) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateTime.DATE_SHORT;
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultLocale;
  return DateTime.fromFormat(string, format, {
    locale: locale,
  }).toJSDate();
};
export default {
  getFirstDayOfWeek: getFirstDayOfWeek,
  formatDate: formatDate,
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getMonths: getMonths,
  parseDate: parseDate,
};
