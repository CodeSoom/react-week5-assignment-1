import React from 'react';

export default function LocaleList({ locales }) {
  return (
    <li>
      {
        locales.map((locale) => (
          <button
            type="button"
            key={locale.id}
          >
            {locale.name}
          </button>
        ))
      }
    </li>
  );
}
