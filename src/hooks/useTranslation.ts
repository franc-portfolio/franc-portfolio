import { useTranslation as useTranslationHook } from 'react-i18next';
import { useEffect, useState } from 'react';

export const useTranslation = () => {
  const translation = useTranslationHook();
  const [, setLanguageChanged] = useState(0);

  useEffect(() => {
    // Subscribe to language changes and trigger re-render
    const handleLanguageChanged = () => {
      setLanguageChanged(prev => prev + 1);
    };

    translation.i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      translation.i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [translation.i18n]);

  return translation;
};
