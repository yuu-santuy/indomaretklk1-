document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const loginCard = document.getElementById('loginCard');
  const welcomeCard = document.getElementById('welcomeCard');
  const welcomeMessage = document.getElementById('welcomeMessage');

  // Menangani pengiriman form login
  loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Mencegah form dikirim secara default

      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');

      const username = usernameInput.value.trim(); // Gunakan .trim() untuk menghilangkan spasi kosong
      const password = passwordInput.value.trim();

      if (username === '' || password === '') {
          alert('Nama Pengguna/Email dan Kata Sandi tidak boleh kosong.');
          return;
      }

      // --- Simulasi Login Berhasil ---
      // Dalam aplikasi nyata, di sini Anda akan mengirim data ke backend
      // dan menunggu respons apakah login berhasil atau gagal.
      // Jika berhasil, Anda akan mendapatkan nama pengguna yang sebenarnya dari server.

      // Untuk simulasi, kita akan mengambil nama yang diinput sebagai "nama pengguna"
      let displayName = username; // Nama yang akan ditampilkan

      // Jika username adalah email, kita bisa coba ekstrak bagian sebelum '@'
      if (username.includes('@')) {
          displayName = username.split('@')[0];
      }

      // Sembunyikan kartu login dan tampilkan kartu selamat datang
      loginCard.style.display = 'none';
      welcomeCard.style.display = 'flex'; // Menggunakan flex untuk alignment

      // Atur pesan selamat datang
      welcomeMessage.textContent = `Selamat datang, ${displayName}!`;

      // Opsional: Reset form setelah login berhasil (jika kembali ke form ini)
      loginForm.reset();
  });
});