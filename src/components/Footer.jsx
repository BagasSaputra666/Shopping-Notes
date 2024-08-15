export default function Footer({ items }) {
  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const precentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer>
      <div className="stats">
        {items.length === 0
          ? 'Daftar Belanjaan Masih Kosong'
          : `Ada ${totalItems} barang di daftar belanjaan, ${checkedItems} barang sudah dibeli
        ${precentage}%`}
      </div>
      <h3>
        Website ini dibuat oleh
        <a target="_blank" href="https://www.instagram.com/bagasaputra666/">
          Bagas
        </a>
        Inspired by Pak
        <a target="_blank" href="https://www.youtube.com/@sandhikagalihWPU">
          Sandhika Galih
        </a>
      </h3>
    </footer>
  );
}
