import { API_BASE_URL } from '@/lib/config/constants';

type ConfigOptions = {
  data?: unknown;
  token?: string;
  customHeaders?: any;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  customConfig?: RequestInit;
};

const client = async <T>(
  endpoint: string,
  options: ConfigOptions
): Promise<T | undefined> => {
  const { data, token, customHeaders, method, customConfig } = options;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'x-api-version': '1',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customHeaders,
    },
    ...customConfig,
  };

  if (data && method !== 'GET') {
    config.body = JSON.stringify(data);
  }

  const res = await fetch(`${API_BASE_URL}/${endpoint}`, config);

  const resJson = (await res.json()) as Promise<T>;

  if (res.ok) {
    return resJson;
  } else {
    return Promise.reject(resJson);
  }
};

export { client };
