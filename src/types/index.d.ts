declare module "*.module.css";

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_KHALTI_PUBLIC_KEY: string;
  readonly KHALTI_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "khalti-checkout-web";
