// useIntersectionObserver.js
import { useEffect, useRef } from "react";

// Hook ini menggunakan Intersection Observer untuk memantau elemen yang muncul di viewport.
// Parameter `onIntersect` adalah fungsi callback yang akan dipanggil ketika elemen teramati.
const useIntersectionObserver = (onIntersect) => {
  // Ref untuk menyimpan referensi elemen yang akan diawasi
  const ref = useRef([]);

  useEffect(() => {
    // Membuat instance IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // Mengiterasi setiap entry yang dipantau
      entries.forEach((entry) => {
        // Memanggil fungsi onIntersect ketika elemen terlihat atau tidak terlihat
        onIntersect(entry);
      });
    });

    // Mengambil referensi elemen saat ini dari ref
    const currentSections = ref.current;

    // Mengamati setiap elemen yang ada di currentSections
    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fungsi cleanup untuk menghentikan pengamatan saat komponen dibongkar
    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [onIntersect]); // Dependensi effect agar hanya dijalankan ketika onIntersect berubah

  // Mengembalikan ref agar bisa digunakan di komponen lain
  return ref;
};

export default useIntersectionObserver;
