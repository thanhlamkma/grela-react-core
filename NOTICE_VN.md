# React JS Core By Grela

## Thư viện

### Dependencies

`prettier`: Định dạng mã tự động - Công cụ giúp tự động định dạng code theo một chuẩn nhất định, giúp code trở nên đẹp mắt và dễ đọc hơn.

`eslint-config-prettier`: Cấu hình ESLint cho Prettier - Cấu hình để ESLint làm việc hài hòa với Prettier, tránh xung đột giữa các quy tắc của hai công cụ này.

`eslint-plugin-prettier`: Plugin ESLint cho Prettier - Thêm một số quy tắc của Prettier vào ESLint để tăng cường khả năng kiểm tra code.

`@ant-design/icons`: Thư viện icon của Ant Design - Cung cấp một bộ sưu tập các icon được thiết kế theo phong cách Ant Design, giúp giao diện ứng dụng trở nên chuyên nghiệp và đẹp mắt hơn.

`antd`: Thư viện UI component của Ant Design - Một thư viện UI component phổ biến cho React, cung cấp các thành phần giao diện người dùng như button, input, form, table, ... giúp bạn xây dựng ứng dụng nhanh chóng.

`classnames`: Thư viện tạo class name động - Giúp bạn tạo ra các class name động dựa trên các điều kiện logic, giúp quản lý các class trong CSS dễ dàng hơn.

`react-router-dom`: Thư viện định tuyến cho React - Dùng để tạo các ứng dụng một trang (single-page application) với nhiều trang khác nhau.

`remirror`: Thư viện tạo editor cho React - Dùng để tạo các editor tùy chỉnh cho việc soạn thảo văn bản.

`@tanstack/react-query`: Thư viện quản lý dữ liệu cho React - Giúp bạn fetch và quản lý dữ liệu một cách hiệu quả trong các ứng dụng React.

`recoil`: Thư viện quản lý trạng thái cho React - Một giải pháp thay thế cho Redux, giúp quản lý trạng thái của ứng dụng một cách đơn giản và hiệu quả.

`axios`: Thư viện gửi request HTTP - Dùng để gửi các yêu cầu HTTP đến server, giúp tương tác với các API.

`clsx`: Thư viện tạo class name động - Tương tự như classnames, nhưng có cách sử dụng khác một chút.

`framer-motion`: Thư viện tạo animation cho React - Dùng để tạo các hiệu ứng chuyển động mượt mà cho các thành phần trong ứng dụng.

`lodash-es`: Thư viện utility - Cung cấp một loạt các hàm tiện ích để làm việc với các mảng, đối tượng, chuỗi,...

`i18next`: Thư viện quốc tế hóa - Dùng để dịch ứng dụng của bạn sang nhiều ngôn ngữ khác nhau.

### devDependencies

`autoprefixer`: Khi bạn sử dụng các thuộc tính CSS mới, trình duyệt khác nhau có thể hỗ trợ chúng theo cách khác nhau. autoprefixer sẽ tự động thêm các tiền tố CSS cần thiết để đảm bảo tính tương thích với các trình duyệt cũ hơn.

`postcss`: postcss là một công cụ mạnh mẽ cho phép bạn tùy chỉnh cách CSS được xử lý. Bạn có thể sử dụng các plugin để thực hiện các tác vụ như thêm tiền tố CSS, tối ưu hóa CSS, và nhiều hơn nữa.

`sass-loader`: Để sử dụng Sass trong các dự án React, bạn cần sử dụng sass-loader trong cấu hình Webpack. Điều này cho phép Webpack hiểu và xử lý các file Sass.

`sass`: Sass là một ngôn ngữ CSS mở rộng, cung cấp các tính năng như biến, lồng nhau, mixin, v.v. Điều này giúp bạn viết CSS một cách hiệu quả hơn và dễ bảo trì hơn.

`tailwindcss`: tailwindcss là một framework CSS utility-first, có nghĩa là nó cung cấp một bộ các lớp CSS có thể kết hợp để tạo ra các giao diện tùy chỉnh. Điều này giúp bạn nhanh chóng xây dựng các giao diện phức tạp mà không cần viết nhiều CSS tùy chỉnh.

## Cấu hình: prettier, tsconfig, editorconfig - Configurations

Hướng dẫn config: https://duthanhduoc.com/blog/tao-du-an-react-vite-typescript-eslint#cau-truc-thu-muc-reactjs-vite

### Bước 1: Cáu hình ESlint để chuẩn hóa code

Mở `eslint.config.js`

Thêm đoạn giá trị này vào mảng `ignores`, mục đích là mình không muốn ESLint check file `vite.config.ts`

```ts
"vite.config.ts";
```

Import cái này vào đầu file `eslint.config.js`

```ts
import eslintPluginPrettier from "eslint-plugin-prettier";
```

Thêm đoạn code sau vào object plugins

```ts
prettier: eslintPluginPrettier;
```

Thêm đoạn code sau vào object rules để thêm các rule của Prettier

```ts
'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
```

### Bước 2: Cấu hình Prettier để format code

Tạo file `.prettierrc` trong thư trong thư mục root với nội dung dưới đây

```json
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```

Mục đích là cấu hình prettier. Cài Extension Prettier - `Code formatter cho VS Code` để nó hiểu nhé.

Tiếp theo Tạo file `.prettierignore` ở thư mục root

Mục đích là Prettier bỏ qua các file không cần thiết

```ignore
node_modules/
dist/
```

### Bước 3: Cấu hình editor để chuẩn hóa cấu hình editor

Tạo file `.editorconfig` ở thư mục root

Mục đích là cấu hình các config đồng bộ các editor với nhau nếu dự án có nhiều người tham gia.

Để VS Code hiểu được file này thì cài Extension: `EditorConfig for VS Code`

```editorconfig
[*]
indent_size = 2
indent_style = space
```

### Bước 4: Cấu hình alias cho `tsconfig.json`

Việc thêm alias vào file `tsconfig.json` sẽ giúp VS Code hiểu mà tự động import giúp chúng ta

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

Ý nghĩa của đoạn này là ta có thể `import Login from '@/pages/Login'` thay vì `import Login from '../../pages/Login'`

### Bước 5: Cấu hình alias cho vite `vite.config.ts`

Cài package `@types/node` để sử dụng node js trong file ts không bị lỗi

```bash
npm i @types/node -D
```

Cấu hình alias và enable source map ở file `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
```

## Câu lệnh - Commands

`yarn dev`: Run project

`yarn build`: Build project

`yarn preview`: Preview kết quả build bằng câu lệnh

`yarn lint`: Kiểm tra dự án có bị lỗi gì liên quan ESLint không

`yarn lint:fix`: Tự động fix các lỗi liên quan ESLint (không phải cái gì cũng fix được, nhưng fix cũng nhiều)

`yarn prettier`: Kiểm tra dự án có bị lỗi gì liên quan Prettier không

`yarn prettier:fix`: Tự động fix các lỗi liên quan Prettier

## Sửa lỗi phiên bản Dart Sass 2.0.0 - 3.0.0

```bash
npm install -g sass-migrator
sass-migrator module --migrate-deps .\src\styles\global.scss
```
