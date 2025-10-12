const getCurrentTime = () => {
  return new Date().getTime();
};

const generateUniqueCode = () => {
  return Math.random().toString(36).substring(2, 10); // Menghasilkan kode unik 8 karakter
};

export default { getCurrentTime, generateUniqueCode };
