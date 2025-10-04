export const API_ROOT = process.env.NEXT_PUBLIC_BLOG_API;
export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

const API = {
  BLOG: {
    GET: `${API_ROOT}/blogs`,
    CATEGORY: `${API_ROOT}/categories`,
  },
};

export default API;
