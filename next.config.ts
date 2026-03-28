import type {NextConfig} from 'next';

// Provide a minimal localStorage implementation for server runtimes when Node's
// experimental `--localstorage-file` flag exposes a broken object.
const ensureLocalStorageStub = () => {
  if (typeof globalThis === 'undefined') {
    return;
  }

  const storageCandidate = (globalThis as typeof globalThis & { localStorage?: Partial<Storage> }).localStorage;

  const isStorageComplete =
    storageCandidate &&
    typeof storageCandidate.getItem === 'function' &&
    typeof storageCandidate.setItem === 'function' &&
    typeof storageCandidate.removeItem === 'function' &&
    typeof storageCandidate.clear === 'function' &&
    typeof storageCandidate.key === 'function';

  if (isStorageComplete) {
    return;
  }

  const store = new Map<string, string>();

  const stub: Storage = {
    get length() {
      return store.size;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
    removeItem(key: string) {
      store.delete(key);
    },
    clear() {
      store.clear();
    },
  };

  (globalThis as typeof globalThis & { localStorage?: Storage }).localStorage = stub;
};

ensureLocalStorageStub();

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },

  // HTTP headers لتحسين SEO والأمان
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          // SEO / Performance
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
      // Static assets — long cache
      {
        source: "/favicon(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  devIndicators: {
    allowedDevOrigins: [
      '*.cluster-6vyo4gb53jczovun3dxslzjahs.cloudworkstations.dev',
    ],
  },
};

export default nextConfig;
