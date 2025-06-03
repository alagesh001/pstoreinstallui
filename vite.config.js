import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
    manifest: false, // disable inline manifest
  includeAssets: ['icon-192.png', 'icon-512.png'],
    }),
  ],
}
