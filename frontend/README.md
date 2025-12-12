# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Razorpay Integration

- Add your Razorpay public/test key to a .env file in the frontend root as `VITE_RAZORPAY_KEY_ID`. Example:

```
VITE_RAZORPAY_KEY_ID=rzp_test_RqfnSeA8ocC1Qw
```

- The backend requires `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` in `Backend/.env` (do not commit secrets). Use `scripts/start-backend-with-razorpay.ps1` to run the backend with temporary env vars for testing.

Example:
```powershell
./scripts/start-backend-with-razorpay.ps1 -RAZORPAY_KEY_ID "rzp_test_RqfnSeA8ocC1Qw" -RAZORPAY_KEY_SECRET "<secret>" -RAZORPAY_WEBHOOK_SECRET "<webhook_secret>" -MONGO_URI "<uri>"
```
