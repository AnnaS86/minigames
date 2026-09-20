import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  {
    // Применяем настройки к TypeScript файлам
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'unicorn': unicornPlugin,
    },
    // Включение жесткого запрета на inline-комментарии (требование noInlineConfig)
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      // Подключаем рекомендуемые правила Unicorn
      ...unicornPlugin.configs.recommended.rules,

      // Подключаем базовые правила TypeScript
      ...tsPlugin.configs.recommended.rules,

      // Строгое принудительное выполнение правила no-explicit-any
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];