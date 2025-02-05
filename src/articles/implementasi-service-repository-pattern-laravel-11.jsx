import { formatRelativeTime } from "../utils/formatDate";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import scriptsArticle1 from '../data/scripts/scriptsArticleServiceRepoPattern';

const ImplementasiCrudLaravel11 = ({ date }) => {
    return (
        <div className="mx-auto  break-words">
            <h2 className="text-3xl font-bold mb-6 md:text-5xl">Implementasi CRUD + Fitur Tambahan di Laravel 11 dengan Service Repository Pattern</h2>
            <p className="text-gray-600 mb-4">{formatRelativeTime(date)}</p>
            <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mt-6 mb-4">Pendahuluan</h3>
                <p>
                    Dalam tutorial ini, kita akan mengimplementasikan CRUD (Create, Read, Update, Delete) dengan fitur tambahan seperti upload gambar dan export/import Excel menggunakan Service Repository Pattern di Laravel 11. Pola ini memisahkan logika bisnis (Service), akses data (Repository), dan controller, sehingga kode lebih modular dan mudah di-maintain.
                </p>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 1: Setup Awal</h3>
                <p>
                    Buat proyek Laravel 11:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.createProject}
                </SyntaxHighlighter>
                <p className="mt-4">
                    Buat database dan sesuaikan file `.env`:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.databaseEnv}
                </SyntaxHighlighter>


                <p className="mt-4">
                    3.	Install package Laravel Excel untuk fitur export/import:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.packageExcel}
                </SyntaxHighlighter>

                <p className="mt-4">
                    Publish konfigurasi Laravel Excel (opsional):
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.publishConfig}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 2: Buat Model dan Migration</h3>
                <p>
                    Buat model Product beserta migration:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductModelMigration}
                </SyntaxHighlighter>
                <p className="mt-4">
                    Edit file migration di database/migrations/xxxx_xx_xx_create_products_table.php:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.editProductMigration}
                </SyntaxHighlighter>
                <p className="mt-4">
                    Jalankan migration:
                </p>
                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.migrate}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 3: Buat Repository</h3>
                <p>
                    Buat direktori `Repositories` dalam `app/` dan buat file `ProductRepositoryInterface.php`:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductRepositoryInterface}
                </SyntaxHighlighter>
                <p className="mt-4">
                    Buat file `ProductRepository.php`:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductRepository}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 4: Buat Service</h3>
                <p>
                    Buat direktori `Services` dalam `app/` dan buat file `ProductService.php`:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductService}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 5: Buat Controller</h3>
                <p>
                    Buat controller `ProductController.php`:
                </p>

                <SyntaxHighlighter language="bash" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.artisanMakeProductController}
                </SyntaxHighlighter>

                <p className="mt-4">
                    Edit file controller di `app/Http/Controllers/ProductController.php`:
                </p>

                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.editProductController}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 6: Binding Interface dan Repository</h3>
                <p>
                    Buka file app/Providers/AppServiceProvider.php dan tambahkan binding:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.bindingInterfaceRepository}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 7: Buat Export/Import</h3>
                <p>
                    Buat file ProductsExport.php di app/Exports/:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductsExport}
                </SyntaxHighlighter>
                <p className="mt-4">
                    Buat file ProductsImport.php di app/Imports/:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.makeProductsImport}
                </SyntaxHighlighter>

                <h3 className="text-2xl font-bold mt-6 mb-4">Langkah 8: Routing</h3>
                <p>
                    Buka file routes/api.php dan tambahkan routes:
                </p>
                <SyntaxHighlighter language="php" style={nightOwl} className="rounded-lg">
                    {scriptsArticle1.routing}
                    </SyntaxHighlighter>
                <h3 className="text-2xl font-bold mt-6 mb-4">Kesimpulan</h3>
                <p>
                    Dengan mengikuti langkah-langkah di atas, Anda telah berhasil mengimplementasikan CRUD, upload gambar, export/import Excel, dan notifikasi menggunakan Service Repository Pattern di Laravel 11. Kode Anda sekarang lebih terstruktur, modular, dan mudah di-maintain.
                </p>
            </div>
        </div>
    );
};

export default ImplementasiCrudLaravel11;