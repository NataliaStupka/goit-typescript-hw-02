1. Створення проекту:
   - в терміналі переходімо в папку проекта;
   - npm create vite@latest my-react-app -- --template react-ts;
     my-react-app - це назва проекту, ім'я папки;
     template react-ts - прапорець, що вказує Vite використовувати шаблон React із TypeScript для нового проекту.
     npm install -> npm run dev (Запустить проєкт)
   - замінюємо папку src на папку src з 4 д/з;
2. **??? чи потрібно було** - npm install --save-dev typescript @types/react @types/react-dom
3. js jsx - перейменувати на ts, tsx
4. У файлі main.tsx типізуйте кореневий елемент. Після document.getElementById("root") додайте as HTMLElement.

<!-- ???? -->
<!-- залишила як створив vite -->

5. замінити tsconfig.json ??
6. tsconfig.node.json ???
<!--  -->

7. з старого src вставити в новий vite-env.d.ts
8. в index.html ім'я скрипта main.tsx,
9. папка App в ній два файла:

   - App.tsx — основний файл компонента.
   - App.types.ts — файл, який містить типи для використання у компоненті App

10. **Типізація сторонніх бібліотек**
    npm install --save-dev @types/ім'я_бібліотеки (наприклад: npm install --save-dev @types/react-router-dom)
11. встановити бібліотеку і перевірити **чи підтримує TypeScripte з коробки**
    - axios (npm install axios)
    - formik (npm i formik)
    - yup (npm i yup)
    - modern-normalize (npm i modern-normalize) ❌ - це лише CSS-бібліотека, і вона не потребує визначення типів або підтримки TypeScript, оскільки не містить JavaScript або TypeScript коду;
    - prop-types" (npm i prop-types ) ❓ встановити npm install --save-dev @types/prop-types ✅;
    - react-hot-toast (npm install react-hot-toast),
    - react-loader-spinner (npm install react-loader-spinner --save),
    - react-modal (npm install react-modal) ❓, встановити npm install --save-dev @types/react-modal ✅
12. Перевірка:
    - Зробіть запит на npm:
      npm info <назва_бібліотеки> types
      Якщо повертається шлях до типів (наприклад, dist/index.d.ts), це означає, що бібліотека підтримує TypeScript.
    - або в node_modules d папці бібліотеки в package.json - "typings": "dist/index.d.ts",
    - або node*modules/<назва*бібліотеки> є index.d.ts або папка types, це означає, що бібліотека підтримує TypeScript "з коробки".

- Додай типи до:
  - компонентів,
  - пропсів,
  - стану,
  - хуків,
  - обробників подій,
  - HTTP-функцій,
  - будь-яких інших функцій.

<!--  -->

npm install --save-dev @types/node - //?????? в main modern-normalize" було пидкреслено
