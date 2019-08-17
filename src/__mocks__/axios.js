const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);

export default {
  get: jest.fn(() => Promise.resolve({ data: {} }))
};