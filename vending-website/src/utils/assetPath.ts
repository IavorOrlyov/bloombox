export const getAssetPath = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // In production, BASE_URL will be '/bloombox/', in dev it will be '/'
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
